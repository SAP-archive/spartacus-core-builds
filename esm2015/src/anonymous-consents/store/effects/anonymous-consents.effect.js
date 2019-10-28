/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, fromEvent, iif, Observable, of } from 'rxjs';
import { catchError, concatMap, debounceTime, distinctUntilChanged, filter, map, mergeMap, switchMap, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthActions, AuthService } from '../../../auth/index';
import { ANONYMOUS_CONSENTS_FEATURE, isFeatureEnabled, } from '../../../features-config/index';
import { SiteContextActions } from '../../../site-context/index';
import { DEFAULT_LOCAL_STORAGE_KEY } from '../../../state/index';
import { UserConsentService } from '../../../user/facade/user-consent.service';
import { UserActions } from '../../../user/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { WindowRef } from '../../../window/index';
import { AnonymousConsentsConfig } from '../../config/anonymous-consents-config';
import { AnonymousConsentTemplatesConnector } from '../../connectors/anonymous-consent-templates.connector';
import { AnonymousConsentsService } from '../../facade/index';
import { AnonymousConsentsActions } from '../actions/index';
import { ANONYMOUS_CONSENTS_STORE_FEATURE, } from '../anonymous-consents-state';
export class AnonymousConsentsEffects {
    /**
     * @param {?} actions$
     * @param {?} anonymousConsentTemplatesConnector
     * @param {?} authService
     * @param {?} anonymousConsentsConfig
     * @param {?} anonymousConsentService
     * @param {?} userConsentService
     * @param {?} winRef
     */
    constructor(actions$, anonymousConsentTemplatesConnector, authService, anonymousConsentsConfig, anonymousConsentService, userConsentService, winRef) {
        this.actions$ = actions$;
        this.anonymousConsentTemplatesConnector = anonymousConsentTemplatesConnector;
        this.authService = authService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.anonymousConsentService = anonymousConsentService;
        this.userConsentService = userConsentService;
        this.winRef = winRef;
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
        this.synchronizeBannerAcrossTabs$ = iif((/**
         * @return {?}
         */
        () => this.checkFeatureAndSsrEnabled()), fromEvent(this.winRef.nativeWindow, 'storage').pipe(filter((/**
         * @param {?} storageEvent
         * @return {?}
         */
        storageEvent => this.checkStorageEvent(storageEvent))), distinctUntilChanged(), 
        // Clicking on "Allow All" on the banner hides the banner, causing an infinite loop of firing events.
        debounceTime(100), map((/**
         * @param {?} storageEvent
         * @return {?}
         */
        storageEvent => {
            /** @type {?} */
            const newState = JSON.parse(storageEvent.newValue);
            /** @type {?} */
            const newUiFlag = ((/** @type {?} */ (newState[ANONYMOUS_CONSENTS_STORE_FEATURE]))).ui.bannerVisible;
            return newUiFlag;
        })), distinctUntilChanged(), map((/**
         * @param {?} newUiFlag
         * @return {?}
         */
        newUiFlag => new AnonymousConsentsActions.ToggleAnonymousConsentsBannerVisibility(newUiFlag)))), EMPTY);
        this.synchronizeConsentStateAcrossTabs$ = iif((/**
         * @return {?}
         */
        () => this.checkFeatureAndSsrEnabled()), fromEvent(this.winRef.nativeWindow, 'storage').pipe(filter((/**
         * @param {?} storageEvent
         * @return {?}
         */
        storageEvent => this.checkStorageEvent(storageEvent))), distinctUntilChanged(), 
        // Clicking on "Allow All" on the banner hides the banner, causing an infinite loop of firing events.
        debounceTime(100), mergeMap((/**
         * @param {?} storageEvent
         * @return {?}
         */
        storageEvent => {
            /** @type {?} */
            const newState = JSON.parse(storageEvent.newValue);
            /** @type {?} */
            const newConsets = ((/** @type {?} */ (newState[ANONYMOUS_CONSENTS_STORE_FEATURE]))).consents;
            /** @type {?} */
            const oldState = JSON.parse(storageEvent.oldValue);
            /** @type {?} */
            const oldConsents = ((/** @type {?} */ (oldState[ANONYMOUS_CONSENTS_STORE_FEATURE]))).consents;
            if (this.anonymousConsentService.consentsUpdated(newConsets, oldConsents)) {
                return this.createStateUpdateActions(newConsets);
            }
            return EMPTY;
        }))), EMPTY);
    }
    /**
     * @private
     * @return {?}
     */
    checkFeatureAndSsrEnabled() {
        return (isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) && Boolean(this.winRef.nativeWindow));
    }
    /**
     * @private
     * @param {?} storageEvent
     * @return {?}
     */
    checkStorageEvent(storageEvent) {
        return (Boolean(storageEvent) &&
            storageEvent.key === DEFAULT_LOCAL_STORAGE_KEY &&
            storageEvent.newValue !== null &&
            storageEvent.oldValue !== null);
    }
    /**
     * @private
     * @param {?} newConsets
     * @return {?}
     */
    createStateUpdateActions(newConsets) {
        /** @type {?} */
        const consentStateActions = [];
        for (const consent of newConsets) {
            if (this.anonymousConsentService.isConsentGiven(consent)) {
                consentStateActions.push(new AnonymousConsentsActions.GiveAnonymousConsent(consent.templateCode));
            }
            else if (this.anonymousConsentService.isConsentWithdrawn(consent)) {
                consentStateActions.push(new AnonymousConsentsActions.WithdrawAnonymousConsent(consent.templateCode));
            }
        }
        return consentStateActions;
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
    { type: UserConsentService },
    { type: WindowRef }
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
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], AnonymousConsentsEffects.prototype, "synchronizeBannerAcrossTabs$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], AnonymousConsentsEffects.prototype, "synchronizeConsentStateAcrossTabs$", void 0);
if (false) {
    /** @type {?} */
    AnonymousConsentsEffects.prototype.handleLogoutAndLanguageChange$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.loadAnonymousConsentTemplates$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.transferAnonymousConsentsToUser$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.giveRequiredConsentsToUser$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.synchronizeBannerAcrossTabs$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.synchronizeConsentStateAcrossTabs$;
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
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0QsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0QsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixnQkFBZ0IsR0FDakIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9B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RixrRUFXRTs7SUFFRixrRUEyQ0U7O0lBRUYsb0VBOERFOztJQUVGLCtEQThERTs7SUFFRixnRUEyQkU7O0lBRUYsc0VBa0NFOzs7OztJQWdEQSw0Q0FBeUI7Ozs7O0lBQ3pCLHNFQUE4RTs7Ozs7SUFDOUUsK0NBQWdDOzs7OztJQUNoQywyREFBd0Q7Ozs7O0lBQ3hELDJEQUF5RDs7Ozs7SUFDekQsc0RBQThDOzs7OztJQUM5QywwQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgRU1QVFksIGZyb21FdmVudCwgaWlmLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMsIEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvaW5kZXgnO1xuaW1wb3J0IHsgREVGQVVMVF9MT0NBTF9TVE9SQUdFX0tFWSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IFVzZXJDb25zZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvZmFjYWRlL3VzZXItY29uc2VudC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi8uLi93aW5kb3cvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYW5vbnltb3VzLWNvbnNlbnRzLWNvbmZpZyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuY29ubmVjdG9yJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnRzU3RhdGUsXG4gIEFOT05ZTU9VU19DT05TRU5UU19TVE9SRV9GRUFUVVJFLFxufSBmcm9tICcuLi9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGhhbmRsZUxvZ291dEFuZExhbmd1YWdlQ2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSwgQXV0aEFjdGlvbnMuTE9HT1VUKSxcbiAgICBmaWx0ZXIoXyA9PlxuICAgICAgaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLCBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSlcbiAgICApLFxuICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSksXG4gICAgZmlsdGVyKChbXywgaXNVc2VyTG9nZ2VkSW5dKSA9PiAhaXNVc2VyTG9nZ2VkSW4pLFxuICAgIG1hcChfID0+IG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMkOiBPYnNlcnZhYmxlPFxuICAgIEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Bbm9ueW1vdXNDb25zZW50c0FjdGlvbnNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxPQURfQU5PTllNT1VTX0NPTlNFTlRfVEVNUExBVEVTKSxcbiAgICBmaWx0ZXIoXyA9PlxuICAgICAgaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLCBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSlcbiAgICApLFxuICAgIGNvbmNhdE1hcChfID0+XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3JcbiAgICAgICAgLmxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRUZW1wbGF0ZXMoKSksXG4gICAgICAgICAgbWVyZ2VNYXAoKFtuZXdDb25zZW50VGVtcGxhdGVzLCBjdXJyZW50Q29uc2VudFRlbXBsYXRlc10pID0+IHtcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIEJvb2xlYW4oY3VycmVudENvbnNlbnRUZW1wbGF0ZXMpICYmXG4gICAgICAgICAgICAgIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZWQgPSB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmRldGVjdFVwZGF0ZWRUZW1wbGF0ZXMoXG4gICAgICAgICAgICAgICAgY3VycmVudENvbnNlbnRUZW1wbGF0ZXMsXG4gICAgICAgICAgICAgICAgbmV3Q29uc2VudFRlbXBsYXRlc1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzU3VjY2VzcyhcbiAgICAgICAgICAgICAgICBuZXdDb25zZW50VGVtcGxhdGVzXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuVG9nZ2xlQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1VwZGF0ZWQoXG4gICAgICAgICAgICAgICAgdXBkYXRlZFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB0cmFuc2ZlckFub255bW91c0NvbnNlbnRzVG9Vc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5UcmFuc2ZlckFub255bW91c0NvbnNlbnQgfCBPYnNlcnZhYmxlPG5ldmVyPlxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZTxBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcz4oXG4gICAgICBBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTU1xuICAgICksXG4gICAgZmlsdGVyKFxuICAgICAgKCkgPT5cbiAgICAgICAgaXNGZWF0dXJlRW5hYmxlZChcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFXG4gICAgICAgICkgJiYgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzKVxuICAgICksXG4gICAgd2l0aExhdGVzdEZyb20oXG4gICAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZTxVc2VyQWN0aW9ucy5SZWdpc3RlclVzZXJTdWNjZXNzPihcbiAgICAgICAgICBVc2VyQWN0aW9ucy5SRUdJU1RFUl9VU0VSX1NVQ0NFU1NcbiAgICAgICAgKVxuICAgICAgKVxuICAgICksXG4gICAgZmlsdGVyKChbLCByZWdpc3RlckFjdGlvbl0pID0+IEJvb2xlYW4ocmVnaXN0ZXJBY3Rpb24pKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHMoKS5waXBlKFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZ2V0VGVtcGxhdGVzKCksXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpXG4gICAgICAgICksXG4gICAgICAgIGZpbHRlcigoWywgLCAsIGxvZ2dlZEluXSkgPT4gbG9nZ2VkSW4pLFxuICAgICAgICBjb25jYXRNYXAoKFtjb25zZW50cywgdXNlcklkLCB0ZW1wbGF0ZXMsIF9sb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICBjb25zdCBhY3Rpb25zOiBVc2VyQWN0aW9ucy5UcmFuc2ZlckFub255bW91c0NvbnNlbnRbXSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBjb25zZW50cykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpICYmXG4gICAgICAgICAgICAgICghdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50c1xuICAgICAgICAgICAgICAgIC5yZXF1aXJlZENvbnNlbnRzIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgIGNvbnNlbnQudGVtcGxhdGVDb2RlXG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wbGF0ZS5pZCA9PT0gY29uc2VudC50ZW1wbGF0ZUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudCh7XG4gICAgICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZUlkOiB0ZW1wbGF0ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiB0ZW1wbGF0ZS52ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2l2ZVJlcXVpcmVkQ29uc2VudHNUb1VzZXIkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudCB8IE9ic2VydmFibGU8bmV2ZXI+XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlPEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5TdWNjZXNzPihcbiAgICAgIEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTl9TVUNDRVNTXG4gICAgKSxcbiAgICBmaWx0ZXIoXG4gICAgICBhY3Rpb24gPT5cbiAgICAgICAgaXNGZWF0dXJlRW5hYmxlZChcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFXG4gICAgICAgICkgJiZcbiAgICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzKSAmJlxuICAgICAgICBCb29sZWFuKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50c1xuICAgICAgICApICYmXG4gICAgICAgIEJvb2xlYW4oYWN0aW9uKVxuICAgICksXG4gICAgY29uY2F0TWFwKCgpID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50c1Jlc3VsdFN1Y2Nlc3MoKS5waXBlKFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzKCksXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpXG4gICAgICAgICksXG4gICAgICAgIGZpbHRlcigoWywgLCAsIGxvZ2dlZEluXSkgPT4gbG9nZ2VkSW4pLFxuICAgICAgICB0YXAoKFtsb2FkZWQsIF91c2VySWQsIF90ZW1wbGF0ZXMsIF9sb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChbX2xvYWRlZCwgdXNlcklkLCB0ZW1wbGF0ZXMsIF9sb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICByZXR1cm4geyB1c2VySWQsIHRlbXBsYXRlcyB9O1xuICAgICAgICB9KSxcbiAgICAgICAgY29uY2F0TWFwKCh7IHVzZXJJZCwgdGVtcGxhdGVzIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBhY3Rpb25zOiBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRbXSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICghdGVtcGxhdGUuY3VycmVudENvbnNlbnQgfHxcbiAgICAgICAgICAgICAgICAhdGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudEdpdmVuRGF0ZSB8fFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRXaXRoZHJhd25EYXRlKSAmJlxuICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUuaWRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50KHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZUlkOiB0ZW1wbGF0ZS5pZCxcbiAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IHRlbXBsYXRlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHN5bmNocm9uaXplQmFubmVyQWNyb3NzVGFicyQ6IE9ic2VydmFibGU8XG4gICAgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eVxuICA+ID0gaWlmKFxuICAgICgpID0+IHRoaXMuY2hlY2tGZWF0dXJlQW5kU3NyRW5hYmxlZCgpLFxuICAgIGZyb21FdmVudDxTdG9yYWdlRXZlbnQ+KHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdywgJ3N0b3JhZ2UnKS5waXBlKFxuICAgICAgZmlsdGVyKHN0b3JhZ2VFdmVudCA9PiB0aGlzLmNoZWNrU3RvcmFnZUV2ZW50KHN0b3JhZ2VFdmVudCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIC8vIENsaWNraW5nIG9uIFwiQWxsb3cgQWxsXCIgb24gdGhlIGJhbm5lciBoaWRlcyB0aGUgYmFubmVyLCBjYXVzaW5nIGFuIGluZmluaXRlIGxvb3Agb2YgZmlyaW5nIGV2ZW50cy5cbiAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgbWFwKHN0b3JhZ2VFdmVudCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gSlNPTi5wYXJzZShzdG9yYWdlRXZlbnQubmV3VmFsdWUpO1xuICAgICAgICBjb25zdCBuZXdVaUZsYWcgPSAobmV3U3RhdGVbXG4gICAgICAgICAgQU5PTllNT1VTX0NPTlNFTlRTX1NUT1JFX0ZFQVRVUkVcbiAgICAgICAgXSBhcyBBbm9ueW1vdXNDb25zZW50c1N0YXRlKS51aS5iYW5uZXJWaXNpYmxlO1xuXG4gICAgICAgIHJldHVybiBuZXdVaUZsYWc7XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBtYXAoXG4gICAgICAgIG5ld1VpRmxhZyA9PlxuICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuVG9nZ2xlQW5vbnltb3VzQ29uc2VudHNCYW5uZXJWaXNpYmlsaXR5KFxuICAgICAgICAgICAgbmV3VWlGbGFnXG4gICAgICAgICAgKVxuICAgICAgKVxuICAgICksXG4gICAgRU1QVFlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc3luY2hyb25pemVDb25zZW50U3RhdGVBY3Jvc3NUYWJzJDogT2JzZXJ2YWJsZTxcbiAgICB8IChcbiAgICAgICAgfCBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuR2l2ZUFub255bW91c0NvbnNlbnRcbiAgICAgICAgfCBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuV2l0aGRyYXdBbm9ueW1vdXNDb25zZW50KVxuICAgIHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IGlpZihcbiAgICAoKSA9PiB0aGlzLmNoZWNrRmVhdHVyZUFuZFNzckVuYWJsZWQoKSxcbiAgICBmcm9tRXZlbnQ8U3RvcmFnZUV2ZW50Pih0aGlzLndpblJlZi5uYXRpdmVXaW5kb3csICdzdG9yYWdlJykucGlwZShcbiAgICAgIGZpbHRlcihzdG9yYWdlRXZlbnQgPT4gdGhpcy5jaGVja1N0b3JhZ2VFdmVudChzdG9yYWdlRXZlbnQpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAvLyBDbGlja2luZyBvbiBcIkFsbG93IEFsbFwiIG9uIHRoZSBiYW5uZXIgaGlkZXMgdGhlIGJhbm5lciwgY2F1c2luZyBhbiBpbmZpbml0ZSBsb29wIG9mIGZpcmluZyBldmVudHMuXG4gICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgIG1lcmdlTWFwKHN0b3JhZ2VFdmVudCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gSlNPTi5wYXJzZShzdG9yYWdlRXZlbnQubmV3VmFsdWUpO1xuICAgICAgICBjb25zdCBuZXdDb25zZXRzID0gKG5ld1N0YXRlW1xuICAgICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19TVE9SRV9GRUFUVVJFXG4gICAgICAgIF0gYXMgQW5vbnltb3VzQ29uc2VudHNTdGF0ZSkuY29uc2VudHM7XG5cbiAgICAgICAgY29uc3Qgb2xkU3RhdGUgPSBKU09OLnBhcnNlKHN0b3JhZ2VFdmVudC5vbGRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG9sZENvbnNlbnRzID0gKG9sZFN0YXRlW1xuICAgICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19TVE9SRV9GRUFUVVJFXG4gICAgICAgIF0gYXMgQW5vbnltb3VzQ29uc2VudHNTdGF0ZSkuY29uc2VudHM7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuY29uc2VudHNVcGRhdGVkKG5ld0NvbnNldHMsIG9sZENvbnNlbnRzKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZVVwZGF0ZUFjdGlvbnMobmV3Q29uc2V0cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICB9KVxuICAgICksXG4gICAgRU1QVFlcbiAgKTtcblxuICBwcml2YXRlIGNoZWNrRmVhdHVyZUFuZFNzckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGlzRmVhdHVyZUVuYWJsZWQoXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFXG4gICAgICApICYmIEJvb2xlYW4odGhpcy53aW5SZWYubmF0aXZlV2luZG93KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrU3RvcmFnZUV2ZW50KHN0b3JhZ2VFdmVudDogU3RvcmFnZUV2ZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4oc3RvcmFnZUV2ZW50KSAmJlxuICAgICAgc3RvcmFnZUV2ZW50LmtleSA9PT0gREVGQVVMVF9MT0NBTF9TVE9SQUdFX0tFWSAmJlxuICAgICAgc3RvcmFnZUV2ZW50Lm5ld1ZhbHVlICE9PSBudWxsICYmXG4gICAgICBzdG9yYWdlRXZlbnQub2xkVmFsdWUgIT09IG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTdGF0ZVVwZGF0ZUFjdGlvbnMoXG4gICAgbmV3Q29uc2V0czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IChcbiAgICB8IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5HaXZlQW5vbnltb3VzQ29uc2VudFxuICAgIHwgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLldpdGhkcmF3QW5vbnltb3VzQ29uc2VudClbXSB7XG4gICAgY29uc3QgY29uc2VudFN0YXRlQWN0aW9uczogKFxuICAgICAgfCBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuR2l2ZUFub255bW91c0NvbnNlbnRcbiAgICAgIHwgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLldpdGhkcmF3QW5vbnltb3VzQ29uc2VudClbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBuZXdDb25zZXRzKSB7XG4gICAgICBpZiAodGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KSkge1xuICAgICAgICBjb25zZW50U3RhdGVBY3Rpb25zLnB1c2goXG4gICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5HaXZlQW5vbnltb3VzQ29uc2VudChcbiAgICAgICAgICAgIGNvbnNlbnQudGVtcGxhdGVDb2RlXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KSkge1xuICAgICAgICBjb25zZW50U3RhdGVBY3Rpb25zLnB1c2goXG4gICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5XaXRoZHJhd0Fub255bW91c0NvbnNlbnQoXG4gICAgICAgICAgICBjb25zZW50LnRlbXBsYXRlQ29kZVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uc2VudFN0YXRlQWN0aW9ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yOiBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFNlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxufVxuIl19