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
        this.loadAnonymousConsentTemplates$ = this.actions$.pipe(ofType(AnonymousConsentsActions.LOAD_ANONYMOUS_CONSENT_TEMPLATES), concatMap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sRUFDTixHQUFHLEVBQ0gsUUFBUSxFQUNSLFNBQVMsRUFDVCxHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLGdCQUFnQixHQUNqQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM1RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU1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d0I7OztJQUNuQyxrRUF3Q0U7O0lBRUYsb0VBOERFOztJQUVGLCtEQThERTs7Ozs7SUFHQSw0Q0FBeUI7Ozs7O0lBQ3pCLHNFQUE4RTs7Ozs7SUFDOUUsK0NBQWdDOzs7OztJQUNoQywyREFBd0Q7Ozs7O0lBQ3hELDJEQUF5RDs7Ozs7SUFDekQsc0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMsIEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL2luZGV4JztcbmltcG9ydCB7IFVzZXJDb25zZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvZmFjYWRlL3VzZXItY29uc2VudC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hbm9ueW1vdXMtY29uc2VudHMtY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2Fub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzJDogT2JzZXJ2YWJsZTxcbiAgICBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5MT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFUyksXG4gICAgY29uY2F0TWFwKF8gPT5cbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvclxuICAgICAgICAubG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldFRlbXBsYXRlcygpKSxcbiAgICAgICAgICBtZXJnZU1hcCgoW25ld0NvbnNlbnRUZW1wbGF0ZXMsIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzXSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgQm9vbGVhbihjdXJyZW50Q29uc2VudFRlbXBsYXRlcykgJiZcbiAgICAgICAgICAgICAgY3VycmVudENvbnNlbnRUZW1wbGF0ZXMubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdXBkYXRlZCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uc2VudFRlbXBsYXRlcyxcbiAgICAgICAgICAgICAgICBuZXdDb25zZW50VGVtcGxhdGVzXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNTdWNjZXNzKFxuICAgICAgICAgICAgICAgIG5ld0NvbnNlbnRUZW1wbGF0ZXNcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZChcbiAgICAgICAgICAgICAgICB1cGRhdGVkXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHRyYW5zZmVyQW5vbnltb3VzQ29uc2VudHNUb1VzZXIkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudCB8IE9ic2VydmFibGU8bmV2ZXI+XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlPEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5TdWNjZXNzPihcbiAgICAgIEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTl9TVUNDRVNTXG4gICAgKSxcbiAgICBmaWx0ZXIoXG4gICAgICAoKSA9PlxuICAgICAgICBpc0ZlYXR1cmVFbmFibGVkKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgICAgICAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkVcbiAgICAgICAgKSAmJiBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpXG4gICAgKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlPFVzZXJBY3Rpb25zLlJlZ2lzdGVyVXNlclN1Y2Nlc3M+KFxuICAgICAgICAgIFVzZXJBY3Rpb25zLlJFR0lTVEVSX1VTRVJfU1VDQ0VTU1xuICAgICAgICApXG4gICAgICApXG4gICAgKSxcbiAgICBmaWx0ZXIoKFssIHJlZ2lzdGVyQWN0aW9uXSkgPT4gQm9vbGVhbihyZWdpc3RlckFjdGlvbikpLFxuICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRUZW1wbGF0ZXMoKSxcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKChbLCAsICwgbG9nZ2VkSW5dKSA9PiBsb2dnZWRJbiksXG4gICAgICAgIGNvbmNhdE1hcCgoW2NvbnNlbnRzLCB1c2VySWQsIHRlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudFtdID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zZW50IG9mIGNvbnNlbnRzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCkgJiZcbiAgICAgICAgICAgICAgKCF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkQ29uc2VudHMgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgY29uc2VudC50ZW1wbGF0ZUNvZGVcbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlLmlkID09PSBjb25zZW50LnRlbXBsYXRlQ29kZSkge1xuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IHRlbXBsYXRlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnaXZlUmVxdWlyZWRDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3M+KFxuICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICApLFxuICAgIGZpbHRlcihcbiAgICAgIGFjdGlvbiA9PlxuICAgICAgICBpc0ZlYXR1cmVFbmFibGVkKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgICAgICAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkVcbiAgICAgICAgKSAmJlxuICAgICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICAgIEJvb2xlYW4oXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzXG4gICAgICAgICkgJiZcbiAgICAgICAgQm9vbGVhbihhY3Rpb24pXG4gICAgKSxcbiAgICBjb25jYXRNYXAoKCkgPT5cbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzUmVzdWx0U3VjY2VzcygpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHMoKSxcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKChbLCAsICwgbG9nZ2VkSW5dKSA9PiBsb2dnZWRJbiksXG4gICAgICAgIHRhcCgoW2xvYWRlZCwgX3VzZXJJZCwgX3RlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKFtfbG9hZGVkLCB1c2VySWQsIHRlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IHVzZXJJZCwgdGVtcGxhdGVzIH07XG4gICAgICAgIH0pLFxuICAgICAgICBjb25jYXRNYXAoKHsgdXNlcklkLCB0ZW1wbGF0ZXMgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudFtdID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKCF0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudCB8fFxuICAgICAgICAgICAgICAgICF0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50R2l2ZW5EYXRlIHx8XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudFdpdGhkcmF3bkRhdGUpICYmXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5pZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnQoe1xuICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogdGVtcGxhdGUudmVyc2lvbixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvcjogQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvcixcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZVxuICApIHt9XG59XG4iXX0=