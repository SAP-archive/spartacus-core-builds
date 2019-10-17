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
        this.handleLogoutAndLanguageChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT), 
        // TODO(issue:4989) Anonymous consents - remove this filter
        filter((/**
         * @param {?} _
         * @return {?}
         */
        _ => isFeatureLevel(this.anonymousConsentsConfig, '1.3'))), withLatestFrom(this.authService.isUserLoggedIn()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([_, isUserLoggedIn]) => !isUserLoggedIn)), map((/**
         * @param {?} _
         * @return {?}
         */
        _ => new AnonymousConsentsActions.LoadAnonymousConsentTemplates())));
        this.loadAnonymousConsentTemplates$ = this.actions$.pipe(ofType(AnonymousConsentsActions.LOAD_ANONYMOUS_CONSENT_TEMPLATES), 
        // TODO(issue:4989) Anonymous consents - remove this filter
        filter((/**
         * @param {?} _
         * @return {?}
         */
        _ => isFeatureLevel(this.anonymousConsentsConfig, '1.3'))), concatMap((/**
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
        () => 
        // TODO(issue:4989) Anonymous consents - remove the `isFeatureLevel(this.anonymousConsentsConfig, '1.3')` check
        isFeatureLevel(this.anonymousConsentsConfig, '1.3') &&
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
        action => 
        // TODO(issue:4989) Anonymous consents - remove the `isFeatureLevel(this.anonymousConsentsConfig, '1.3')` check
        isFeatureLevel(this.anonymousConsentsConfig, '1.3') &&
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sRUFDTixHQUFHLEVBQ0gsUUFBUSxFQUNSLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDNUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1B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LE9BQU8sT0FBTyxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FDSCxFQUNGLENBQ0YsQ0FBQztJQVNDLENBQUM7OztZQS9MTCxVQUFVOzs7O1lBdEJGLE9BQU87WUFrQlAsa0NBQWtDO1lBUHJCLFdBQVc7WUFNeEIsdUJBQXVCO1lBRXZCLHdCQUF3QjtZQUx4QixrQkFBa0I7O0FBV3pCO0lBREMsTUFBTSxFQUFFO3NDQUN1QixVQUFVO2dGQVN4QztBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUN1QixVQUFVO2dGQXlDeEM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDeUIsVUFBVTtrRkE2RDFDO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ29CLFVBQVU7NkVBMkRyQzs7O0lBcExGLGtFQVVFOztJQUVGLGtFQTBDRTs7SUFFRixvRUE4REU7O0lBRUYsK0RBNERFOzs7OztJQUdBLDRDQUF5Qjs7Ozs7SUFDekIsc0VBQThFOzs7OztJQUM5RSwrQ0FBZ0M7Ozs7O0lBQ2hDLDJEQUF3RDs7Ozs7SUFDeEQsMkRBQXlEOzs7OztJQUN6RCxzREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMsIEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBpc0ZlYXR1cmVMZXZlbCB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9mYWNhZGUvdXNlci1jb25zZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi91c2VyL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2Fub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgaGFuZGxlTG9nb3V0QW5kTGFuZ3VhZ2VDaGFuZ2UkOiBPYnNlcnZhYmxlPFxuICAgIEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLCBBdXRoQWN0aW9ucy5MT0dPVVQpLFxuICAgIC8vIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzIC0gcmVtb3ZlIHRoaXMgZmlsdGVyXG4gICAgZmlsdGVyKF8gPT4gaXNGZWF0dXJlTGV2ZWwodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZywgJzEuMycpKSxcbiAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkpLFxuICAgIGZpbHRlcigoW18sIGlzVXNlckxvZ2dlZEluXSkgPT4gIWlzVXNlckxvZ2dlZEluKSxcbiAgICBtYXAoXyA9PiBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzJDogT2JzZXJ2YWJsZTxcbiAgICBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5MT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFUyksXG4gICAgLy8gVE9ETyhpc3N1ZTo0OTg5KSBBbm9ueW1vdXMgY29uc2VudHMgLSByZW1vdmUgdGhpcyBmaWx0ZXJcbiAgICBmaWx0ZXIoXyA9PiBpc0ZlYXR1cmVMZXZlbCh0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLCAnMS4zJykpLFxuICAgIGNvbmNhdE1hcChfID0+XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3JcbiAgICAgICAgLmxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRUZW1wbGF0ZXMoKSksXG4gICAgICAgICAgbWVyZ2VNYXAoKFtuZXdDb25zZW50VGVtcGxhdGVzLCBjdXJyZW50Q29uc2VudFRlbXBsYXRlc10pID0+IHtcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIEJvb2xlYW4oY3VycmVudENvbnNlbnRUZW1wbGF0ZXMpICYmXG4gICAgICAgICAgICAgIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZWQgPSB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmRldGVjdFVwZGF0ZWRUZW1wbGF0ZXMoXG4gICAgICAgICAgICAgICAgY3VycmVudENvbnNlbnRUZW1wbGF0ZXMsXG4gICAgICAgICAgICAgICAgbmV3Q29uc2VudFRlbXBsYXRlc1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzU3VjY2VzcyhcbiAgICAgICAgICAgICAgICBuZXdDb25zZW50VGVtcGxhdGVzXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuVG9nZ2xlQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1VwZGF0ZWQoXG4gICAgICAgICAgICAgICAgdXBkYXRlZFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB0cmFuc2ZlckFub255bW91c0NvbnNlbnRzVG9Vc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5UcmFuc2ZlckFub255bW91c0NvbnNlbnQgfCBPYnNlcnZhYmxlPG5ldmVyPlxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZTxBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcz4oXG4gICAgICBBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTU1xuICAgICksXG4gICAgZmlsdGVyKFxuICAgICAgKCkgPT5cbiAgICAgICAgLy8gVE9ETyhpc3N1ZTo0OTg5KSBBbm9ueW1vdXMgY29uc2VudHMgLSByZW1vdmUgdGhlIGBpc0ZlYXR1cmVMZXZlbCh0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLCAnMS4zJylgIGNoZWNrXG4gICAgICAgIGlzRmVhdHVyZUxldmVsKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsICcxLjMnKSAmJlxuICAgICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZWdpc3RlckNvbnNlbnQpXG4gICAgKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlPFVzZXJBY3Rpb25zLlJlZ2lzdGVyVXNlclN1Y2Nlc3M+KFxuICAgICAgICAgIFVzZXJBY3Rpb25zLlJFR0lTVEVSX1VTRVJfU1VDQ0VTU1xuICAgICAgICApXG4gICAgICApXG4gICAgKSxcbiAgICBmaWx0ZXIoKFssIHJlZ2lzdGVyQWN0aW9uXSkgPT4gQm9vbGVhbihyZWdpc3RlckFjdGlvbikpLFxuICAgIGNvbmNhdE1hcCgoKSA9PlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRUZW1wbGF0ZXMoKSxcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKChbLCAsICwgbG9nZ2VkSW5dKSA9PiBsb2dnZWRJbiksXG4gICAgICAgIGNvbmNhdE1hcCgoW2NvbnNlbnRzLCB1c2VySWQsIHRlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudFtdID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zZW50IG9mIGNvbnNlbnRzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCkgJiZcbiAgICAgICAgICAgICAgKCF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkQ29uc2VudHMgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgY29uc2VudC50ZW1wbGF0ZUNvZGVcbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlLmlkID09PSBjb25zZW50LnRlbXBsYXRlQ29kZSkge1xuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IHRlbXBsYXRlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnaXZlUmVxdWlyZWRDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3M+KFxuICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICApLFxuICAgIGZpbHRlcihcbiAgICAgIGFjdGlvbiA9PlxuICAgICAgICAvLyBUT0RPKGlzc3VlOjQ5ODkpIEFub255bW91cyBjb25zZW50cyAtIHJlbW92ZSB0aGUgYGlzRmVhdHVyZUxldmVsKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsICcxLjMnKWAgY2hlY2tcbiAgICAgICAgaXNGZWF0dXJlTGV2ZWwodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZywgJzEuMycpICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgICAgQm9vbGVhbihcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICAgKSAmJlxuICAgICAgICBCb29sZWFuKGFjdGlvbilcbiAgICApLFxuICAgIGNvbmNhdE1hcCgoKSA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoKFssICwgLCBsb2dnZWRJbl0pID0+IGxvZ2dlZEluKSxcbiAgICAgICAgdGFwKChbbG9hZGVkLCBfdXNlcklkLCBfdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoW19sb2FkZWQsIHVzZXJJZCwgdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgdXNlcklkLCB0ZW1wbGF0ZXMgfTtcbiAgICAgICAgfSksXG4gICAgICAgIGNvbmNhdE1hcCgoeyB1c2VySWQsIHRlbXBsYXRlcyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50W10gPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoIXRlbXBsYXRlLmN1cnJlbnRDb25zZW50IHx8XG4gICAgICAgICAgICAgICAgIXRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRHaXZlbkRhdGUgfHxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSkgJiZcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmlkXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudCh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiB0ZW1wbGF0ZS52ZXJzaW9uLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yOiBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFNlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==