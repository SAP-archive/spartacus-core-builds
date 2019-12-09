/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap, switchMap, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthActions, AuthService } from '../../../auth/index';
import { ANONYMOUS_CONSENTS_FEATURE, isFeatureEnabled, } from '../../../features-config/index';
import { SiteContextActions } from '../../../site-context/index';
import { UserConsentService } from '../../../user/facade/user-consent.service';
import { UserActions } from '../../../user/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { AnonymousConsentsConfig } from '../../config/anonymous-consents-config';
import { AnonymousConsentTemplatesConnector } from '../../connectors/anonymous-consent-templates.connector';
import { AnonymousConsentsService } from '../../facade/index';
import { AnonymousConsentsActions } from '../actions/index';
var AnonymousConsentsEffects = /** @class */ (function () {
    function AnonymousConsentsEffects(actions$, anonymousConsentTemplatesConnector, authService, anonymousConsentsConfig, anonymousConsentService, userConsentService) {
        var _this = this;
        this.actions$ = actions$;
        this.anonymousConsentTemplatesConnector = anonymousConsentTemplatesConnector;
        this.authService = authService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.anonymousConsentService = anonymousConsentService;
        this.userConsentService = userConsentService;
        this.handleLogoutAndLanguageChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT), filter((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE);
        })), withLatestFrom(this.authService.isUserLoggedIn()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), _ = _b[0], isUserLoggedIn = _b[1];
            return !isUserLoggedIn;
        })), map((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return new AnonymousConsentsActions.LoadAnonymousConsentTemplates(); })));
        this.loadAnonymousConsentTemplates$ = this.actions$.pipe(ofType(AnonymousConsentsActions.LOAD_ANONYMOUS_CONSENT_TEMPLATES), filter((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE);
        })), concatMap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return _this.anonymousConsentTemplatesConnector
                .loadAnonymousConsentTemplates()
                .pipe(withLatestFrom(_this.anonymousConsentService.getTemplates()), mergeMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), newConsentTemplates = _b[0], currentConsentTemplates = _b[1];
                /** @type {?} */
                var updated = false;
                if (Boolean(currentConsentTemplates) &&
                    currentConsentTemplates.length !== 0) {
                    updated = _this.anonymousConsentService.detectUpdatedTemplates(currentConsentTemplates, newConsentTemplates);
                }
                return [
                    new AnonymousConsentsActions.LoadAnonymousConsentTemplatesSuccess(newConsentTemplates),
                    new AnonymousConsentsActions.ToggleAnonymousConsentTemplatesUpdated(updated),
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new AnonymousConsentsActions.LoadAnonymousConsentTemplatesFail(makeErrorSerializable(error)));
            })));
        })));
        this.transferAnonymousConsentsToUser$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), filter((/**
         * @return {?}
         */
        function () {
            return isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) && Boolean(_this.anonymousConsentsConfig.anonymousConsents);
        })), withLatestFrom(this.actions$.pipe(ofType(UserActions.REGISTER_USER_SUCCESS))), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), registerAction = _b[1];
            return Boolean(registerAction);
        })), switchMap((/**
         * @return {?}
         */
        function () {
            return _this.anonymousConsentService.getConsents().pipe(withLatestFrom(_this.authService.getOccUserId(), _this.anonymousConsentService.getTemplates(), _this.authService.isUserLoggedIn()), filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 4), loggedIn = _b[3];
                return loggedIn;
            })), concatMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var e_1, _b, e_2, _c;
                var _d = tslib_1.__read(_a, 4), consents = _d[0], userId = _d[1], templates = _d[2], _loggedIn = _d[3];
                /** @type {?} */
                var actions = [];
                try {
                    for (var consents_1 = tslib_1.__values(consents), consents_1_1 = consents_1.next(); !consents_1_1.done; consents_1_1 = consents_1.next()) {
                        var consent = consents_1_1.value;
                        if (_this.anonymousConsentService.isConsentGiven(consent) &&
                            (!_this.anonymousConsentsConfig.anonymousConsents
                                .requiredConsents ||
                                !_this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(consent.templateCode))) {
                            try {
                                for (var templates_1 = (e_2 = void 0, tslib_1.__values(templates)), templates_1_1 = templates_1.next(); !templates_1_1.done; templates_1_1 = templates_1.next()) {
                                    var template = templates_1_1.value;
                                    if (template.id === consent.templateCode) {
                                        actions.push(new UserActions.TransferAnonymousConsent({
                                            userId: userId,
                                            consentTemplateId: template.id,
                                            consentTemplateVersion: template.version,
                                        }));
                                        break;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (templates_1_1 && !templates_1_1.done && (_c = templates_1.return)) _c.call(templates_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (consents_1_1 && !consents_1_1.done && (_b = consents_1.return)) _b.call(consents_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (actions.length > 0) {
                    return actions;
                }
                return EMPTY;
            })));
        })));
        this.giveRequiredConsentsToUser$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), filter((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) &&
                Boolean(_this.anonymousConsentsConfig.anonymousConsents) &&
                Boolean(_this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
                Boolean(action);
        })), concatMap((/**
         * @return {?}
         */
        function () {
            return _this.userConsentService.getConsentsResultSuccess().pipe(withLatestFrom(_this.authService.getOccUserId(), _this.userConsentService.getConsents(), _this.authService.isUserLoggedIn()), filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 4), loggedIn = _b[3];
                return loggedIn;
            })), tap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 4), loaded = _b[0], _userId = _b[1], _templates = _b[2], _loggedIn = _b[3];
                if (!loaded) {
                    _this.userConsentService.loadConsents();
                }
            })), map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 4), _loaded = _b[0], userId = _b[1], templates = _b[2], _loggedIn = _b[3];
                return { userId: userId, templates: templates };
            })), concatMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var e_3, _b;
                var userId = _a.userId, templates = _a.templates;
                /** @type {?} */
                var actions = [];
                try {
                    for (var templates_2 = tslib_1.__values(templates), templates_2_1 = templates_2.next(); !templates_2_1.done; templates_2_1 = templates_2.next()) {
                        var template = templates_2_1.value;
                        if ((!template.currentConsent ||
                            !template.currentConsent.consentGivenDate ||
                            template.currentConsent.consentWithdrawnDate) &&
                            _this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id)) {
                            actions.push(new UserActions.GiveUserConsent({
                                userId: userId,
                                consentTemplateId: template.id,
                                consentTemplateVersion: template.version,
                            }));
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (templates_2_1 && !templates_2_1.done && (_b = templates_2.return)) _b.call(templates_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                if (actions.length > 0) {
                    return actions;
                }
                return EMPTY;
            })));
        })));
    }
    AnonymousConsentsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AnonymousConsentsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: AnonymousConsentTemplatesConnector },
        { type: AuthService },
        { type: AnonymousConsentsConfig },
        { type: AnonymousConsentsService },
        { type: UserConsentService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AnonymousConsentsEffects.prototype, "handleLogoutAndLanguageChange$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AnonymousConsentsEffects.prototype, "loadAnonymousConsentTemplates$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AnonymousConsentsEffects.prototype, "transferAnonymousConsentsToUser$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AnonymousConsentsEffects.prototype, "giveRequiredConsentsToUser$", void 0);
    return AnonymousConsentsEffects;
}());
export { AnonymousConsentsEffects };
if (false) {
    /** @type {?} */
    AnonymousConsentsEffects.prototype.handleLogoutAndLanguageChange$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.loadAnonymousConsentTemplates$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.transferAnonymousConsentsToUser$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.giveRequiredConsentsToUser$;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.anonymousConsentTemplatesConnector;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.anonymousConsentsConfig;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.anonymousConsentService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.userConsentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sRUFDTixHQUFHLEVBQ0gsUUFBUSxFQUNSLFNBQVMsRUFDVCxHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLGdCQUFnQixHQUNqQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM1RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5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QyxFQUFFLENBQ1osRUFDRDs0QkFDQSxPQUFPLENBQUMsSUFBSSxDQUNWLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQztnQ0FDOUIsTUFBTSxRQUFBO2dDQUNOLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxFQUFFO2dDQUM5QixzQkFBc0IsRUFBRSxRQUFRLENBQUMsT0FBTzs2QkFDekMsQ0FBQyxDQUNILENBQUM7eUJBQ0g7cUJBQ0Y7Ozs7Ozs7OztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixPQUFPLE9BQU8sQ0FBQztpQkFDaEI7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDLEVBQUMsQ0FDSDtRQXhDRCxDQXdDQyxFQUNGLENBQ0YsQ0FBQztJQVNDLENBQUM7O2dCQW5NTCxVQUFVOzs7O2dCQTFCRixPQUFPO2dCQXNCUCxrQ0FBa0M7Z0JBVnJCLFdBQVc7Z0JBU3hCLHVCQUF1QjtnQkFFdkIsd0JBQXdCO2dCQUx4QixrQkFBa0I7O0lBV3pCO1FBREMsTUFBTSxFQUFFOzBDQUN1QixVQUFVO29GQVV4QztJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUN1QixVQUFVO29GQTBDeEM7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDeUIsVUFBVTtzRkE2RDFDO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ29CLFVBQVU7aUZBNkRyQztJQVVKLCtCQUFDO0NBQUEsQUFwTUQsSUFvTUM7U0FuTVksd0JBQXdCOzs7SUFDbkMsa0VBV0U7O0lBRUYsa0VBMkNFOztJQUVGLG9FQThERTs7SUFFRiwrREE4REU7Ozs7O0lBR0EsNENBQXlCOzs7OztJQUN6QixzRUFBOEU7Ozs7O0lBQzlFLCtDQUFnQzs7Ozs7SUFDaEMsMkRBQXdEOzs7OztJQUN4RCwyREFBeUQ7Ozs7O0lBQ3pELHNEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGNvbmNhdE1hcCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zLCBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUsXG4gIGlzRmVhdHVyZUVuYWJsZWQsXG59IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9mYWNhZGUvdXNlci1jb25zZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi91c2VyL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2Fub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgaGFuZGxlTG9nb3V0QW5kTGFuZ3VhZ2VDaGFuZ2UkOiBPYnNlcnZhYmxlPFxuICAgIEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLCBBdXRoQWN0aW9ucy5MT0dPVVQpLFxuICAgIGZpbHRlcihfID0+XG4gICAgICBpc0ZlYXR1cmVFbmFibGVkKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFKVxuICAgICksXG4gICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpKSxcbiAgICBmaWx0ZXIoKFtfLCBpc1VzZXJMb2dnZWRJbl0pID0+ICFpc1VzZXJMb2dnZWRJbiksXG4gICAgbWFwKF8gPT4gbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcygpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcyQ6IE9ic2VydmFibGU8XG4gICAgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkFub255bW91c0NvbnNlbnRzQWN0aW9uc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTE9BRF9BTk9OWU1PVVNfQ09OU0VOVF9URU1QTEFURVMpLFxuICAgIGZpbHRlcihfID0+XG4gICAgICBpc0ZlYXR1cmVFbmFibGVkKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFKVxuICAgICksXG4gICAgY29uY2F0TWFwKF8gPT5cbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvclxuICAgICAgICAubG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldFRlbXBsYXRlcygpKSxcbiAgICAgICAgICBtZXJnZU1hcCgoW25ld0NvbnNlbnRUZW1wbGF0ZXMsIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzXSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgQm9vbGVhbihjdXJyZW50Q29uc2VudFRlbXBsYXRlcykgJiZcbiAgICAgICAgICAgICAgY3VycmVudENvbnNlbnRUZW1wbGF0ZXMubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdXBkYXRlZCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uc2VudFRlbXBsYXRlcyxcbiAgICAgICAgICAgICAgICBuZXdDb25zZW50VGVtcGxhdGVzXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNTdWNjZXNzKFxuICAgICAgICAgICAgICAgIG5ld0NvbnNlbnRUZW1wbGF0ZXNcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZChcbiAgICAgICAgICAgICAgICB1cGRhdGVkXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHRyYW5zZmVyQW5vbnltb3VzQ29uc2VudHNUb1VzZXIkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudCB8IE9ic2VydmFibGU8bmV2ZXI+XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlPEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5TdWNjZXNzPihcbiAgICAgIEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTl9TVUNDRVNTXG4gICAgKSxcbiAgICBmaWx0ZXIoXG4gICAgICAoKSA9PlxuICAgICAgICBpc0ZlYXR1cmVFbmFibGVkKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgICAgICAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkVcbiAgICAgICAgKSAmJiBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpXG4gICAgKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlPFVzZXJBY3Rpb25zLlJlZ2lzdGVyVXNlclN1Y2Nlc3M+KFxuICAgICAgICAgIFVzZXJBY3Rpb25zLlJFR0lTVEVSX1VTRVJfU1VDQ0VTU1xuICAgICAgICApXG4gICAgICApXG4gICAgKSxcbiAgICBmaWx0ZXIoKFssIHJlZ2lzdGVyQWN0aW9uXSkgPT4gQm9vbGVhbihyZWdpc3RlckFjdGlvbikpLFxuICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRUZW1wbGF0ZXMoKSxcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKChbLCAsICwgbG9nZ2VkSW5dKSA9PiBsb2dnZWRJbiksXG4gICAgICAgIGNvbmNhdE1hcCgoW2NvbnNlbnRzLCB1c2VySWQsIHRlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudFtdID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zZW50IG9mIGNvbnNlbnRzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCkgJiZcbiAgICAgICAgICAgICAgKCF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkQ29uc2VudHMgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgY29uc2VudC50ZW1wbGF0ZUNvZGVcbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlLmlkID09PSBjb25zZW50LnRlbXBsYXRlQ29kZSkge1xuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IHRlbXBsYXRlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnaXZlUmVxdWlyZWRDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3M+KFxuICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICApLFxuICAgIGZpbHRlcihcbiAgICAgIGFjdGlvbiA9PlxuICAgICAgICBpc0ZlYXR1cmVFbmFibGVkKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgICAgICAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkVcbiAgICAgICAgKSAmJlxuICAgICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICAgIEJvb2xlYW4oXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzXG4gICAgICAgICkgJiZcbiAgICAgICAgQm9vbGVhbihhY3Rpb24pXG4gICAgKSxcbiAgICBjb25jYXRNYXAoKCkgPT5cbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzUmVzdWx0U3VjY2VzcygpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHMoKSxcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKChbLCAsICwgbG9nZ2VkSW5dKSA9PiBsb2dnZWRJbiksXG4gICAgICAgIHRhcCgoW2xvYWRlZCwgX3VzZXJJZCwgX3RlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKFtfbG9hZGVkLCB1c2VySWQsIHRlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IHVzZXJJZCwgdGVtcGxhdGVzIH07XG4gICAgICAgIH0pLFxuICAgICAgICBjb25jYXRNYXAoKHsgdXNlcklkLCB0ZW1wbGF0ZXMgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudFtdID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKCF0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudCB8fFxuICAgICAgICAgICAgICAgICF0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50R2l2ZW5EYXRlIHx8XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudFdpdGhkcmF3bkRhdGUpICYmXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5pZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnQoe1xuICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogdGVtcGxhdGUudmVyc2lvbixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvcjogQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvcixcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZVxuICApIHt9XG59XG4iXX0=