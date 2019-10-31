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
        () => isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) && Boolean(this.anonymousConsentsConfig.anonymousConsents))), withLatestFrom(this.actions$.pipe(ofType(UserActions.REGISTER_USER_SUCCESS))), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, registerAction]) => Boolean(registerAction))), switchMap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sRUFDTixHQUFHLEVBQ0gsUUFBUSxFQUNSLFNBQVMsRUFDVCxHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLGdCQUFnQixHQUNqQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM1RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5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QUNGLENBQUM7SUFTQyxDQUFDOzs7WUFuTUwsVUFBVTs7OztZQTFCRixPQUFPO1lBc0JQLGtDQUFrQztZQVZyQixXQUFXO1lBU3hCLHVCQUF1QjtZQUV2Qix3QkFBd0I7WUFMeEIsa0JBQWtCOztBQVd6QjtJQURDLE1BQU0sRUFBRTtzQ0FDdUIsVUFBVTtnRkFVeEM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDdUIsVUFBVTtnRkEwQ3hDO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ3lCLFVBQVU7a0ZBNkQxQztBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNvQixVQUFVOzZFQTZEckM7OztJQXhMRixrRUFXRTs7SUFFRixrRUEyQ0U7O0lBRUYsb0VBOERFOztJQUVGLCtEQThERTs7Ozs7SUFHQSw0Q0FBeUI7Ozs7O0lBQ3pCLHNFQUE4RTs7Ozs7SUFDOUUsK0NBQWdDOzs7OztJQUNoQywyREFBd0Q7Ozs7O0lBQ3hELDJEQUF5RDs7Ozs7SUFDekQsc0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMsIEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQ29uc2VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91c2VyL2ZhY2FkZS91c2VyLWNvbnNlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3VzZXIvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYW5vbnltb3VzLWNvbnNlbnRzLWNvbmZpZyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuY29ubmVjdG9yJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBoYW5kbGVMb2dvdXRBbmRMYW5ndWFnZUNoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsIEF1dGhBY3Rpb25zLkxPR09VVCksXG4gICAgZmlsdGVyKF8gPT5cbiAgICAgIGlzRmVhdHVyZUVuYWJsZWQodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZywgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUpXG4gICAgKSxcbiAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkpLFxuICAgIGZpbHRlcigoW18sIGlzVXNlckxvZ2dlZEluXSkgPT4gIWlzVXNlckxvZ2dlZEluKSxcbiAgICBtYXAoXyA9PiBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzJDogT2JzZXJ2YWJsZTxcbiAgICBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5MT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFUyksXG4gICAgZmlsdGVyKF8gPT5cbiAgICAgIGlzRmVhdHVyZUVuYWJsZWQodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZywgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUpXG4gICAgKSxcbiAgICBjb25jYXRNYXAoXyA9PlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yXG4gICAgICAgIC5sb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZ2V0VGVtcGxhdGVzKCkpLFxuICAgICAgICAgIG1lcmdlTWFwKChbbmV3Q29uc2VudFRlbXBsYXRlcywgY3VycmVudENvbnNlbnRUZW1wbGF0ZXNdKSA9PiB7XG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBCb29sZWFuKGN1cnJlbnRDb25zZW50VGVtcGxhdGVzKSAmJlxuICAgICAgICAgICAgICBjdXJyZW50Q29uc2VudFRlbXBsYXRlcy5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB1cGRhdGVkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5kZXRlY3RVcGRhdGVkVGVtcGxhdGVzKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzLFxuICAgICAgICAgICAgICAgIG5ld0NvbnNlbnRUZW1wbGF0ZXNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgbmV3Q29uc2VudFRlbXBsYXRlc1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNVcGRhdGVkKFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgdHJhbnNmZXJBbm9ueW1vdXNDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3M+KFxuICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICApLFxuICAgIGZpbHRlcihcbiAgICAgICgpID0+XG4gICAgICAgIGlzRmVhdHVyZUVuYWJsZWQoXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgICAgICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRVxuICAgICAgICApICYmIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cylcbiAgICApLFxuICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGU8VXNlckFjdGlvbnMuUmVnaXN0ZXJVc2VyU3VjY2Vzcz4oXG4gICAgICAgICAgVXNlckFjdGlvbnMuUkVHSVNURVJfVVNFUl9TVUNDRVNTXG4gICAgICAgIClcbiAgICAgIClcbiAgICApLFxuICAgIGZpbHRlcigoWywgcmVnaXN0ZXJBY3Rpb25dKSA9PiBCb29sZWFuKHJlZ2lzdGVyQWN0aW9uKSksXG4gICAgc3dpdGNoTWFwKCgpID0+XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzKCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldFRlbXBsYXRlcygpLFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoKFssICwgLCBsb2dnZWRJbl0pID0+IGxvZ2dlZEluKSxcbiAgICAgICAgY29uY2F0TWFwKChbY29uc2VudHMsIHVzZXJJZCwgdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50W10gPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbnNlbnQgb2YgY29uc2VudHMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KSAmJlxuICAgICAgICAgICAgICAoIXRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHNcbiAgICAgICAgICAgICAgICAucmVxdWlyZWRDb25zZW50cyB8fFxuICAgICAgICAgICAgICAgICF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICBjb25zZW50LnRlbXBsYXRlQ29kZVxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGUuaWQgPT09IGNvbnNlbnQudGVtcGxhdGVDb2RlKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5UcmFuc2ZlckFub255bW91c0NvbnNlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogdGVtcGxhdGUudmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdpdmVSZXF1aXJlZENvbnNlbnRzVG9Vc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnQgfCBPYnNlcnZhYmxlPG5ldmVyPlxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZTxBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcz4oXG4gICAgICBBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTU1xuICAgICksXG4gICAgZmlsdGVyKFxuICAgICAgYWN0aW9uID0+XG4gICAgICAgIGlzRmVhdHVyZUVuYWJsZWQoXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgICAgICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRVxuICAgICAgICApICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgICAgQm9vbGVhbihcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICAgKSAmJlxuICAgICAgICBCb29sZWFuKGFjdGlvbilcbiAgICApLFxuICAgIGNvbmNhdE1hcCgoKSA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoKFssICwgLCBsb2dnZWRJbl0pID0+IGxvZ2dlZEluKSxcbiAgICAgICAgdGFwKChbbG9hZGVkLCBfdXNlcklkLCBfdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoW19sb2FkZWQsIHVzZXJJZCwgdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgdXNlcklkLCB0ZW1wbGF0ZXMgfTtcbiAgICAgICAgfSksXG4gICAgICAgIGNvbmNhdE1hcCgoeyB1c2VySWQsIHRlbXBsYXRlcyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50W10gPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoIXRlbXBsYXRlLmN1cnJlbnRDb25zZW50IHx8XG4gICAgICAgICAgICAgICAgIXRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRHaXZlbkRhdGUgfHxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSkgJiZcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmlkXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudCh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiB0ZW1wbGF0ZS52ZXJzaW9uLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yOiBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFNlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==