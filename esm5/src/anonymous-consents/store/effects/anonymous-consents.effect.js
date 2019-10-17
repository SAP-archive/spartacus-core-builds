/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthActions, AuthService } from '../../../auth/index';
import { isFeatureLevel } from '../../../features-config/index';
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
        this.handleLogoutAndLanguageChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT), 
        // TODO(issue:4989) Anonymous consents - remove this filter
        filter((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return isFeatureLevel(_this.anonymousConsentsConfig, '1.3'); })), withLatestFrom(this.authService.isUserLoggedIn()), filter((/**
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
        this.loadAnonymousConsentTemplates$ = this.actions$.pipe(ofType(AnonymousConsentsActions.LOAD_ANONYMOUS_CONSENT_TEMPLATES), 
        // TODO(issue:4989) Anonymous consents - remove this filter
        filter((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return isFeatureLevel(_this.anonymousConsentsConfig, '1.3'); })), concatMap((/**
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
            // TODO(issue:4989) Anonymous consents - remove the `isFeatureLevel(this.anonymousConsentsConfig, '1.3')` check
            return isFeatureLevel(_this.anonymousConsentsConfig, '1.3') &&
                Boolean(_this.anonymousConsentsConfig.anonymousConsents) &&
                Boolean(_this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        })), withLatestFrom(this.actions$.pipe(ofType(UserActions.REGISTER_USER_SUCCESS))), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), registerAction = _b[1];
            return Boolean(registerAction);
        })), concatMap((/**
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
            // TODO(issue:4989) Anonymous consents - remove the `isFeatureLevel(this.anonymousConsentsConfig, '1.3')` check
            return isFeatureLevel(_this.anonymousConsentsConfig, '1.3') &&
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sRUFDTixHQUFHLEVBQ0gsUUFBUSxFQUNSLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDNUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1B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YmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMsIEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBpc0ZlYXR1cmVMZXZlbCB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9mYWNhZGUvdXNlci1jb25zZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi91c2VyL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2Fub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgaGFuZGxlTG9nb3V0QW5kTGFuZ3VhZ2VDaGFuZ2UkOiBPYnNlcnZhYmxlPFxuICAgIEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLCBBdXRoQWN0aW9ucy5MT0dPVVQpLFxuICAgIC8vIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzIC0gcmVtb3ZlIHRoaXMgZmlsdGVyXG4gICAgZmlsdGVyKF8gPT4gaXNGZWF0dXJlTGV2ZWwodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZywgJzEuMycpKSxcbiAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkpLFxuICAgIGZpbHRlcigoW18sIGlzVXNlckxvZ2dlZEluXSkgPT4gIWlzVXNlckxvZ2dlZEluKSxcbiAgICBtYXAoXyA9PiBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzJDogT2JzZXJ2YWJsZTxcbiAgICBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5MT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFUyksXG4gICAgLy8gVE9ETyhpc3N1ZTo0OTg5KSBBbm9ueW1vdXMgY29uc2VudHMgLSByZW1vdmUgdGhpcyBmaWx0ZXJcbiAgICBmaWx0ZXIoXyA9PiBpc0ZlYXR1cmVMZXZlbCh0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLCAnMS4zJykpLFxuICAgIGNvbmNhdE1hcChfID0+XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3JcbiAgICAgICAgLmxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRUZW1wbGF0ZXMoKSksXG4gICAgICAgICAgbWVyZ2VNYXAoKFtuZXdDb25zZW50VGVtcGxhdGVzLCBjdXJyZW50Q29uc2VudFRlbXBsYXRlc10pID0+IHtcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIEJvb2xlYW4oY3VycmVudENvbnNlbnRUZW1wbGF0ZXMpICYmXG4gICAgICAgICAgICAgIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZWQgPSB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmRldGVjdFVwZGF0ZWRUZW1wbGF0ZXMoXG4gICAgICAgICAgICAgICAgY3VycmVudENvbnNlbnRUZW1wbGF0ZXMsXG4gICAgICAgICAgICAgICAgbmV3Q29uc2VudFRlbXBsYXRlc1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzU3VjY2VzcyhcbiAgICAgICAgICAgICAgICBuZXdDb25zZW50VGVtcGxhdGVzXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuVG9nZ2xlQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1VwZGF0ZWQoXG4gICAgICAgICAgICAgICAgdXBkYXRlZFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB0cmFuc2ZlckFub255bW91c0NvbnNlbnRzVG9Vc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5UcmFuc2ZlckFub255bW91c0NvbnNlbnQgfCBPYnNlcnZhYmxlPG5ldmVyPlxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZTxBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcz4oXG4gICAgICBBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTU1xuICAgICksXG4gICAgZmlsdGVyKFxuICAgICAgKCkgPT5cbiAgICAgICAgLy8gVE9ETyhpc3N1ZTo0OTg5KSBBbm9ueW1vdXMgY29uc2VudHMgLSByZW1vdmUgdGhlIGBpc0ZlYXR1cmVMZXZlbCh0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLCAnMS4zJylgIGNoZWNrXG4gICAgICAgIGlzRmVhdHVyZUxldmVsKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsICcxLjMnKSAmJlxuICAgICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZWdpc3RlckNvbnNlbnQpXG4gICAgKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlPFVzZXJBY3Rpb25zLlJlZ2lzdGVyVXNlclN1Y2Nlc3M+KFxuICAgICAgICAgIFVzZXJBY3Rpb25zLlJFR0lTVEVSX1VTRVJfU1VDQ0VTU1xuICAgICAgICApXG4gICAgICApXG4gICAgKSxcbiAgICBmaWx0ZXIoKFssIHJlZ2lzdGVyQWN0aW9uXSkgPT4gQm9vbGVhbihyZWdpc3RlckFjdGlvbikpLFxuICAgIGNvbmNhdE1hcCgoKSA9PlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRUZW1wbGF0ZXMoKSxcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKChbLCAsICwgbG9nZ2VkSW5dKSA9PiBsb2dnZWRJbiksXG4gICAgICAgIGNvbmNhdE1hcCgoW2NvbnNlbnRzLCB1c2VySWQsIHRlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudFtdID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zZW50IG9mIGNvbnNlbnRzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCkgJiZcbiAgICAgICAgICAgICAgKCF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkQ29uc2VudHMgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgY29uc2VudC50ZW1wbGF0ZUNvZGVcbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlLmlkID09PSBjb25zZW50LnRlbXBsYXRlQ29kZSkge1xuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IHRlbXBsYXRlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnaXZlUmVxdWlyZWRDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3M+KFxuICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICApLFxuICAgIGZpbHRlcihcbiAgICAgIGFjdGlvbiA9PlxuICAgICAgICAvLyBUT0RPKGlzc3VlOjQ5ODkpIEFub255bW91cyBjb25zZW50cyAtIHJlbW92ZSB0aGUgYGlzRmVhdHVyZUxldmVsKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsICcxLjMnKWAgY2hlY2tcbiAgICAgICAgaXNGZWF0dXJlTGV2ZWwodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZywgJzEuMycpICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgICAgQm9vbGVhbihcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICAgKSAmJlxuICAgICAgICBCb29sZWFuKGFjdGlvbilcbiAgICApLFxuICAgIGNvbmNhdE1hcCgoKSA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoKFssICwgLCBsb2dnZWRJbl0pID0+IGxvZ2dlZEluKSxcbiAgICAgICAgdGFwKChbbG9hZGVkLCBfdXNlcklkLCBfdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoW19sb2FkZWQsIHVzZXJJZCwgdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgdXNlcklkLCB0ZW1wbGF0ZXMgfTtcbiAgICAgICAgfSksXG4gICAgICAgIGNvbmNhdE1hcCgoeyB1c2VySWQsIHRlbXBsYXRlcyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50W10gPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoIXRlbXBsYXRlLmN1cnJlbnRDb25zZW50IHx8XG4gICAgICAgICAgICAgICAgIXRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRHaXZlbkRhdGUgfHxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSkgJiZcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmlkXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudCh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiB0ZW1wbGF0ZS52ZXJzaW9uLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yOiBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFNlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==