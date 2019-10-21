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
            return isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) &&
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sRUFDTixHQUFHLEVBQ0gsUUFBUSxFQUNSLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsZ0JBQWdCLEdBQ2pCLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlELE9BQU8sRUFB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YXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMsIEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQ29uc2VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91c2VyL2ZhY2FkZS91c2VyLWNvbnNlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3VzZXIvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYW5vbnltb3VzLWNvbnNlbnRzLWNvbmZpZyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuY29ubmVjdG9yJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBoYW5kbGVMb2dvdXRBbmRMYW5ndWFnZUNoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsIEF1dGhBY3Rpb25zLkxPR09VVCksXG4gICAgZmlsdGVyKF8gPT5cbiAgICAgIGlzRmVhdHVyZUVuYWJsZWQodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZywgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUpXG4gICAgKSxcbiAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkpLFxuICAgIGZpbHRlcigoW18sIGlzVXNlckxvZ2dlZEluXSkgPT4gIWlzVXNlckxvZ2dlZEluKSxcbiAgICBtYXAoXyA9PiBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzJDogT2JzZXJ2YWJsZTxcbiAgICBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5MT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFUyksXG4gICAgZmlsdGVyKF8gPT5cbiAgICAgIGlzRmVhdHVyZUVuYWJsZWQodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZywgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUpXG4gICAgKSxcbiAgICBjb25jYXRNYXAoXyA9PlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yXG4gICAgICAgIC5sb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZ2V0VGVtcGxhdGVzKCkpLFxuICAgICAgICAgIG1lcmdlTWFwKChbbmV3Q29uc2VudFRlbXBsYXRlcywgY3VycmVudENvbnNlbnRUZW1wbGF0ZXNdKSA9PiB7XG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBCb29sZWFuKGN1cnJlbnRDb25zZW50VGVtcGxhdGVzKSAmJlxuICAgICAgICAgICAgICBjdXJyZW50Q29uc2VudFRlbXBsYXRlcy5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB1cGRhdGVkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5kZXRlY3RVcGRhdGVkVGVtcGxhdGVzKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzLFxuICAgICAgICAgICAgICAgIG5ld0NvbnNlbnRUZW1wbGF0ZXNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgbmV3Q29uc2VudFRlbXBsYXRlc1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNVcGRhdGVkKFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgdHJhbnNmZXJBbm9ueW1vdXNDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3M+KFxuICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICApLFxuICAgIGZpbHRlcihcbiAgICAgICgpID0+XG4gICAgICAgIGlzRmVhdHVyZUVuYWJsZWQoXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgICAgICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRVxuICAgICAgICApICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlZ2lzdGVyQ29uc2VudClcbiAgICApLFxuICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGU8VXNlckFjdGlvbnMuUmVnaXN0ZXJVc2VyU3VjY2Vzcz4oXG4gICAgICAgICAgVXNlckFjdGlvbnMuUkVHSVNURVJfVVNFUl9TVUNDRVNTXG4gICAgICAgIClcbiAgICAgIClcbiAgICApLFxuICAgIGZpbHRlcigoWywgcmVnaXN0ZXJBY3Rpb25dKSA9PiBCb29sZWFuKHJlZ2lzdGVyQWN0aW9uKSksXG4gICAgY29uY2F0TWFwKCgpID0+XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzKCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldFRlbXBsYXRlcygpLFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoKFssICwgLCBsb2dnZWRJbl0pID0+IGxvZ2dlZEluKSxcbiAgICAgICAgY29uY2F0TWFwKChbY29uc2VudHMsIHVzZXJJZCwgdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50W10gPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbnNlbnQgb2YgY29uc2VudHMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KSAmJlxuICAgICAgICAgICAgICAoIXRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHNcbiAgICAgICAgICAgICAgICAucmVxdWlyZWRDb25zZW50cyB8fFxuICAgICAgICAgICAgICAgICF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICBjb25zZW50LnRlbXBsYXRlQ29kZVxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGUuaWQgPT09IGNvbnNlbnQudGVtcGxhdGVDb2RlKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5UcmFuc2ZlckFub255bW91c0NvbnNlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogdGVtcGxhdGUudmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdpdmVSZXF1aXJlZENvbnNlbnRzVG9Vc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnQgfCBPYnNlcnZhYmxlPG5ldmVyPlxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZTxBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcz4oXG4gICAgICBBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTU1xuICAgICksXG4gICAgZmlsdGVyKFxuICAgICAgYWN0aW9uID0+XG4gICAgICAgIGlzRmVhdHVyZUVuYWJsZWQoXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgICAgICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRVxuICAgICAgICApICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgICAgQm9vbGVhbihcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICAgKSAmJlxuICAgICAgICBCb29sZWFuKGFjdGlvbilcbiAgICApLFxuICAgIGNvbmNhdE1hcCgoKSA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoKFssICwgLCBsb2dnZWRJbl0pID0+IGxvZ2dlZEluKSxcbiAgICAgICAgdGFwKChbbG9hZGVkLCBfdXNlcklkLCBfdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoW19sb2FkZWQsIHVzZXJJZCwgdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgdXNlcklkLCB0ZW1wbGF0ZXMgfTtcbiAgICAgICAgfSksXG4gICAgICAgIGNvbmNhdE1hcCgoeyB1c2VySWQsIHRlbXBsYXRlcyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50W10gPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoIXRlbXBsYXRlLmN1cnJlbnRDb25zZW50IHx8XG4gICAgICAgICAgICAgICAgIXRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRHaXZlbkRhdGUgfHxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSkgJiZcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmlkXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudCh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiB0ZW1wbGF0ZS52ZXJzaW9uLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yOiBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFNlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==