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
export class AnonymousConsentsEffects {
    /**
     * @param {?} actions$
     * @param {?} anonymousConsentTemplatesConnector
     * @param {?} authService
     * @param {?} anonymousConsentsConfig
     * @param {?} anonymousConsentService
     * @param {?} userConsentService
     */
    constructor(actions$, anonymousConsentTemplatesConnector, authService, anonymousConsentsConfig, anonymousConsentService, userConsentService) {
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
        _ => isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE))), withLatestFrom(this.authService.isUserLoggedIn()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([_, isUserLoggedIn]) => !isUserLoggedIn)), map((/**
         * @param {?} _
         * @return {?}
         */
        _ => new AnonymousConsentsActions.LoadAnonymousConsentTemplates())));
        this.loadAnonymousConsentTemplates$ = this.actions$.pipe(ofType(AnonymousConsentsActions.LOAD_ANONYMOUS_CONSENT_TEMPLATES), filter((/**
         * @param {?} _
         * @return {?}
         */
        _ => isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE))), concatMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.anonymousConsentTemplatesConnector
            .loadAnonymousConsentTemplates()
            .pipe(withLatestFrom(this.anonymousConsentService.getTemplates()), mergeMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([newConsentTemplates, currentConsentTemplates]) => {
            /** @type {?} */
            let updated = false;
            if (Boolean(currentConsentTemplates) &&
                currentConsentTemplates.length !== 0) {
                updated = this.anonymousConsentService.detectUpdatedTemplates(currentConsentTemplates, newConsentTemplates);
            }
            return [
                new AnonymousConsentsActions.LoadAnonymousConsentTemplatesSuccess(newConsentTemplates),
                new AnonymousConsentsActions.ToggleAnonymousConsentTemplatesUpdated(updated),
            ];
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new AnonymousConsentsActions.LoadAnonymousConsentTemplatesFail(makeErrorSerializable(error)))))))));
        this.transferAnonymousConsentsToUser$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), filter((/**
         * @return {?}
         */
        () => isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.registerConsent))), withLatestFrom(this.actions$.pipe(ofType(UserActions.REGISTER_USER_SUCCESS))), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, registerAction]) => Boolean(registerAction))), concatMap((/**
         * @return {?}
         */
        () => this.anonymousConsentService.getConsents().pipe(withLatestFrom(this.authService.getOccUserId(), this.anonymousConsentService.getTemplates(), this.authService.isUserLoggedIn()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, , , loggedIn]) => loggedIn)), concatMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([consents, userId, templates, _loggedIn]) => {
            /** @type {?} */
            const actions = [];
            for (const consent of consents) {
                if (this.anonymousConsentService.isConsentGiven(consent) &&
                    (!this.anonymousConsentsConfig.anonymousConsents
                        .requiredConsents ||
                        !this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(consent.templateCode))) {
                    for (const template of templates) {
                        if (template.id === consent.templateCode) {
                            actions.push(new UserActions.TransferAnonymousConsent({
                                userId,
                                consentTemplateId: template.id,
                                consentTemplateVersion: template.version,
                            }));
                            break;
                        }
                    }
                }
            }
            if (actions.length > 0) {
                return actions;
            }
            return EMPTY;
        }))))));
        this.giveRequiredConsentsToUser$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), filter((/**
         * @param {?} action
         * @return {?}
         */
        action => isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
            Boolean(action))), concatMap((/**
         * @return {?}
         */
        () => this.userConsentService.getConsentsResultSuccess().pipe(withLatestFrom(this.authService.getOccUserId(), this.userConsentService.getConsents(), this.authService.isUserLoggedIn()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, , , loggedIn]) => loggedIn)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([loaded, _userId, _templates, _loggedIn]) => {
            if (!loaded) {
                this.userConsentService.loadConsents();
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([_loaded, userId, templates, _loggedIn]) => {
            return { userId, templates };
        })), concatMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ userId, templates }) => {
            /** @type {?} */
            const actions = [];
            for (const template of templates) {
                if ((!template.currentConsent ||
                    !template.currentConsent.consentGivenDate ||
                    template.currentConsent.consentWithdrawnDate) &&
                    this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id)) {
                    actions.push(new UserActions.GiveUserConsent({
                        userId,
                        consentTemplateId: template.id,
                        consentTemplateVersion: template.version,
                    }));
                }
            }
            if (actions.length > 0) {
                return actions;
            }
            return EMPTY;
        }))))));
    }
}
AnonymousConsentsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AnonymousConsentsEffects.ctorParameters = () => [
    { type: Actions },
    { type: AnonymousConsentTemplatesConnector },
    { type: AuthService },
    { type: AnonymousConsentsConfig },
    { type: AnonymousConsentsService },
    { type: UserConsentService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sRUFDTixHQUFHLEVBQ0gsUUFBUSxFQUNSLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsZ0JBQWdCLEdBQ2pCLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlELE9BQU8sRUFB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Q2hCO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FDSCxFQUNGLENBQ0YsQ0FBQztJQVNDLENBQUM7OztZQXJNTCxVQUFVOzs7O1lBekJGLE9BQU87WUFxQlAsa0NBQWtDO1lBVnJCLFdBQVc7WUFTeEIsdUJBQXVCO1lBRXZCLHdCQUF3QjtZQUx4QixrQkFBa0I7O0FBV3pCO0lBREMsTUFBTSxFQUFFO3NDQUN1QixVQUFVO2dGQVV4QztBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUN1QixVQUFVO2dGQTBDeEM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDeUIsVUFBVTtrRkErRDFDO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ29CLFVBQVU7NkVBNkRyQzs7O0lBMUxGLGtFQVdFOztJQUVGLGtFQTJDRTs7SUFFRixvRUFnRUU7O0lBRUYsK0RBOERFOzs7OztJQUdBLDRDQUF5Qjs7Ozs7SUFDekIsc0VBQThFOzs7OztJQUM5RSwrQ0FBZ0M7Ozs7O0lBQ2hDLDJEQUF3RDs7Ozs7SUFDeEQsMkRBQXlEOzs7OztJQUN6RCxzREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMsIEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQ29uc2VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91c2VyL2ZhY2FkZS91c2VyLWNvbnNlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3VzZXIvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYW5vbnltb3VzLWNvbnNlbnRzLWNvbmZpZyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuY29ubmVjdG9yJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBoYW5kbGVMb2dvdXRBbmRMYW5ndWFnZUNoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsIEF1dGhBY3Rpb25zLkxPR09VVCksXG4gICAgZmlsdGVyKF8gPT5cbiAgICAgIGlzRmVhdHVyZUVuYWJsZWQodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZywgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUpXG4gICAgKSxcbiAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkpLFxuICAgIGZpbHRlcigoW18sIGlzVXNlckxvZ2dlZEluXSkgPT4gIWlzVXNlckxvZ2dlZEluKSxcbiAgICBtYXAoXyA9PiBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzJDogT2JzZXJ2YWJsZTxcbiAgICBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5MT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFUyksXG4gICAgZmlsdGVyKF8gPT5cbiAgICAgIGlzRmVhdHVyZUVuYWJsZWQodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZywgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUpXG4gICAgKSxcbiAgICBjb25jYXRNYXAoXyA9PlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yXG4gICAgICAgIC5sb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZ2V0VGVtcGxhdGVzKCkpLFxuICAgICAgICAgIG1lcmdlTWFwKChbbmV3Q29uc2VudFRlbXBsYXRlcywgY3VycmVudENvbnNlbnRUZW1wbGF0ZXNdKSA9PiB7XG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBCb29sZWFuKGN1cnJlbnRDb25zZW50VGVtcGxhdGVzKSAmJlxuICAgICAgICAgICAgICBjdXJyZW50Q29uc2VudFRlbXBsYXRlcy5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB1cGRhdGVkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5kZXRlY3RVcGRhdGVkVGVtcGxhdGVzKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzLFxuICAgICAgICAgICAgICAgIG5ld0NvbnNlbnRUZW1wbGF0ZXNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgbmV3Q29uc2VudFRlbXBsYXRlc1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNVcGRhdGVkKFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgdHJhbnNmZXJBbm9ueW1vdXNDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3M+KFxuICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICApLFxuICAgIGZpbHRlcihcbiAgICAgICgpID0+XG4gICAgICAgIGlzRmVhdHVyZUVuYWJsZWQoXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgICAgICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRVxuICAgICAgICApICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlZ2lzdGVyQ29uc2VudClcbiAgICApLFxuICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGU8VXNlckFjdGlvbnMuUmVnaXN0ZXJVc2VyU3VjY2Vzcz4oXG4gICAgICAgICAgVXNlckFjdGlvbnMuUkVHSVNURVJfVVNFUl9TVUNDRVNTXG4gICAgICAgIClcbiAgICAgIClcbiAgICApLFxuICAgIGZpbHRlcigoWywgcmVnaXN0ZXJBY3Rpb25dKSA9PiBCb29sZWFuKHJlZ2lzdGVyQWN0aW9uKSksXG4gICAgY29uY2F0TWFwKCgpID0+XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzKCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldFRlbXBsYXRlcygpLFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoKFssICwgLCBsb2dnZWRJbl0pID0+IGxvZ2dlZEluKSxcbiAgICAgICAgY29uY2F0TWFwKChbY29uc2VudHMsIHVzZXJJZCwgdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50W10gPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbnNlbnQgb2YgY29uc2VudHMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KSAmJlxuICAgICAgICAgICAgICAoIXRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHNcbiAgICAgICAgICAgICAgICAucmVxdWlyZWRDb25zZW50cyB8fFxuICAgICAgICAgICAgICAgICF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICBjb25zZW50LnRlbXBsYXRlQ29kZVxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGUuaWQgPT09IGNvbnNlbnQudGVtcGxhdGVDb2RlKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5UcmFuc2ZlckFub255bW91c0NvbnNlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogdGVtcGxhdGUudmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdpdmVSZXF1aXJlZENvbnNlbnRzVG9Vc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnQgfCBPYnNlcnZhYmxlPG5ldmVyPlxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZTxBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcz4oXG4gICAgICBBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTU1xuICAgICksXG4gICAgZmlsdGVyKFxuICAgICAgYWN0aW9uID0+XG4gICAgICAgIGlzRmVhdHVyZUVuYWJsZWQoXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgICAgICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRVxuICAgICAgICApICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgICAgQm9vbGVhbihcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICAgKSAmJlxuICAgICAgICBCb29sZWFuKGFjdGlvbilcbiAgICApLFxuICAgIGNvbmNhdE1hcCgoKSA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoKFssICwgLCBsb2dnZWRJbl0pID0+IGxvZ2dlZEluKSxcbiAgICAgICAgdGFwKChbbG9hZGVkLCBfdXNlcklkLCBfdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoW19sb2FkZWQsIHVzZXJJZCwgdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgdXNlcklkLCB0ZW1wbGF0ZXMgfTtcbiAgICAgICAgfSksXG4gICAgICAgIGNvbmNhdE1hcCgoeyB1c2VySWQsIHRlbXBsYXRlcyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50W10gPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoIXRlbXBsYXRlLmN1cnJlbnRDb25zZW50IHx8XG4gICAgICAgICAgICAgICAgIXRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRHaXZlbkRhdGUgfHxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSkgJiZcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmlkXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudCh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiB0ZW1wbGF0ZS52ZXJzaW9uLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yOiBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFNlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==