/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { iif } from 'rxjs';
import { filter, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_CURRENT } from '../../occ/index';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { GIVE_CONSENT_PROCESS_ID, WITHDRAW_CONSENT_PROCESS_ID, } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
export class UserConsentService {
    /**
     * @param {?} store
     * @param {?=} authService
     */
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves all consents.
     * @return {?}
     */
    loadConsents() {
        this.withUserId((/**
         * @param {?} userId
         * @return {?}
         */
        userId => this.store.dispatch(new UserActions.LoadUserConsents(userId))));
    }
    /**
     * Returns all consent templates. If `loadIfMissing` parameter is set to `true`, the method triggers the load if consent templates.
     * @param {?=} loadIfMissing is set to `true`, the method will load templates if those are not already present. The default value is `false`.
     * @return {?}
     */
    getConsents(loadIfMissing = false) {
        return iif((/**
         * @return {?}
         */
        () => loadIfMissing), this.store.pipe(select(UsersSelectors.getConsentsValue), withLatestFrom(this.getConsentsResultLoading(), this.getConsentsResultSuccess()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([_templates, loading, _success]) => !loading)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([templates, _loading, success]) => {
            if (!templates || templates.length === 0) {
                // avoid infite loop - if we've already attempted to load templates and we got an empty array as the response
                if (!success) {
                    this.loadConsents();
                }
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([templates, _loading]) => Boolean(templates))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([templates, _loading]) => templates))), this.store.pipe(select(UsersSelectors.getConsentsValue)));
    }
    /**
     * Returns the consents loading flag
     * @return {?}
     */
    getConsentsResultLoading() {
        return this.store.pipe(select(UsersSelectors.getConsentsLoading));
    }
    /**
     * Returns the consents success flag
     * @return {?}
     */
    getConsentsResultSuccess() {
        return this.store.pipe(select(UsersSelectors.getConsentsSuccess));
    }
    /**
     * Returns the consents error flag
     * @return {?}
     */
    getConsentsResultError() {
        return this.store.pipe(select(UsersSelectors.getConsentsError));
    }
    /**
     * Resets the processing state for consent retrieval
     * @return {?}
     */
    resetConsentsProcessState() {
        this.store.dispatch(new UserActions.ResetLoadUserConsents());
    }
    /**
     * Returns the registered consent for the given template ID.
     *
     * As a side-effect, the method will call `getConsents(true)` to load the templates if those are not present.
     *
     * @param {?} templateId a template ID by which to filter the registered templates.
     * @return {?}
     */
    getConsent(templateId) {
        return this.authService.isUserLoggedIn().pipe(filter(Boolean), tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.getConsents(true))), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.store.pipe(select(UsersSelectors.getConsentByTemplateId(templateId))))), filter((/**
         * @param {?} template
         * @return {?}
         */
        template => Boolean(template))), map((/**
         * @param {?} template
         * @return {?}
         */
        template => template.currentConsent)));
    }
    /**
     * Returns `true` if the consent is truthy and if `consentWithdrawnDate` doesn't exist.
     * Otherwise, `false` is returned.
     *
     * @param {?} consent to check
     * @return {?}
     */
    isConsentGiven(consent) {
        return (Boolean(consent) &&
            Boolean(consent.consentGivenDate) &&
            !Boolean(consent.consentWithdrawnDate));
    }
    /**
     * Returns `true` if the consent is either falsy or if `consentWithdrawnDate` is present.
     * Otherwise, `false` is returned.
     *
     * @param {?} consent to check
     * @return {?}
     */
    isConsentWithdrawn(consent) {
        if (Boolean(consent)) {
            return Boolean(consent.consentWithdrawnDate);
        }
        return true;
    }
    /**
     * Give consent for specified consent template ID and version.
     * @param {?} consentTemplateId a template ID for which to give a consent
     * @param {?} consentTemplateVersion a template version for which to give a consent
     * @return {?}
     */
    giveConsent(consentTemplateId, consentTemplateVersion) {
        this.withUserId((/**
         * @param {?} userId
         * @return {?}
         */
        userId => this.store.dispatch(new UserActions.GiveUserConsent({
            userId,
            consentTemplateId,
            consentTemplateVersion,
        }))));
    }
    /**
     * Returns the give consent process loading flag
     * @return {?}
     */
    getGiveConsentResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the give consent process success flag
     * @return {?}
     */
    getGiveConsentResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the give consent process error flag
     * @return {?}
     */
    getGiveConsentResultError() {
        return this.store.pipe(select(getProcessErrorFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Resents the give consent process flags
     * @return {?}
     */
    resetGiveConsentProcessState() {
        return this.store.dispatch(new UserActions.ResetGiveUserConsentProcess());
    }
    /**
     * Withdraw consent for the given `consentCode`
     * @param {?} consentCode for which to withdraw the consent
     * @return {?}
     */
    withdrawConsent(consentCode) {
        this.withUserId((/**
         * @param {?} userId
         * @return {?}
         */
        userId => this.store.dispatch(new UserActions.WithdrawUserConsent({
            userId,
            consentCode,
        }))));
    }
    /**
     * Returns the withdraw consent process loading flag
     * @return {?}
     */
    getWithdrawConsentResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the withdraw consent process success flag
     * @return {?}
     */
    getWithdrawConsentResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the withdraw consent process error flag
     * @return {?}
     */
    getWithdrawConsentResultError() {
        return this.store.pipe(select(getProcessErrorFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Resets the process flags for withdraw consent
     * @return {?}
     */
    resetWithdrawConsentProcessState() {
        return this.store.dispatch(new UserActions.ResetWithdrawUserConsentProcess());
    }
    /**
     * Filters the provided `templateList`' templates by hiding the template IDs specified in `hideTemplateIds`.
     * If the `hideTemplateIds` is empty, the provided `templateList` is returned.
     *
     * @param {?} templateList a list of consent templates to filter
     * @param {?=} hideTemplateIds template IDs to hide
     * @return {?}
     */
    filterConsentTemplates(templateList, hideTemplateIds = []) {
        if (hideTemplateIds.length === 0) {
            return templateList;
        }
        /** @type {?} */
        const updatedTemplateList = [];
        for (const template of templateList) {
            /** @type {?} */
            const show = !hideTemplateIds.includes(template.id);
            if (show) {
                updatedTemplateList.push(template);
            }
        }
        return updatedTemplateList;
    }
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     * @private
     * @param {?} callback
     * @return {?}
     */
    withUserId(callback) {
        if (this.authService) {
            this.authService
                .getOccUserId()
                .pipe(take(1))
                .subscribe((/**
             * @param {?} userId
             * @return {?}
             */
            userId => callback(userId)));
        }
        else {
            // TODO(issue:#5628) Deprecated since 1.3.0
            callback(OCC_USER_ID_CURRENT);
        }
    }
}
UserConsentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserConsentService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
/** @nocollapse */ UserConsentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserConsentService_Factory() { return new UserConsentService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserConsentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserConsentService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    UserConsentService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1jb25zZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLEdBQUcsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdEQsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0saURBQWlELENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLDJCQUEyQixHQUM1QixNQUFNLHFCQUFxQixDQUFDOzs7O0FBSzdCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBZTdCLFlBQ1ksS0FBb0QsRUFDcEQsV0FBeUI7UUFEekIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWM7SUFDbEMsQ0FBQzs7Ozs7SUFLSixZQUFZO1FBQ1YsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUN2QixJQUFJLENBQUMsS0FBSyxDQUFD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QVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ25ELElBQUksSUFBSSxFQUFFO2dCQUNSLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwQztTQUNGO1FBRUQsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDOzs7Ozs7OztJQU1PLFVBQVUsQ0FBQyxRQUFrQztRQUNuRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVc7aUJBQ2IsWUFBWSxFQUFFO2lCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2IsU0FBUzs7OztZQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNMLDJDQUEyQztZQUMzQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7OztZQXZSRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUE3QmdCLEtBQUs7WUFVYixXQUFXOzs7Ozs7OztJQW9DaEIsbUNBQThEOzs7OztJQUM5RCx5Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDb25zZW50LCBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRQcm9jZXNzRXJyb3JGYWN0b3J5LFxuICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnksXG4gIGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lELFxuICBTdGF0ZVdpdGhVc2VyLFxuICBXSVRIRFJBV19DT05TRU5UX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckNvbnNlbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqICBVc2UgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICogIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgaW5zdGVhZFxuICAgKlxuICAgKiAgVE9ETyhpc3N1ZTojNTYyOCkgRGVwcmVjYXRlZCBzaW5jZSAxLjMuMFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pik7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZT86IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCBjb25zZW50cy5cbiAgICovXG4gIGxvYWRDb25zZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQodXNlcklkID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzKHVzZXJJZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBjb25zZW50IHRlbXBsYXRlcy4gSWYgYGxvYWRJZk1pc3NpbmdgIHBhcmFtZXRlciBpcyBzZXQgdG8gYHRydWVgLCB0aGUgbWV0aG9kIHRyaWdnZXJzIHRoZSBsb2FkIGlmIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKiBAcGFyYW0gbG9hZElmTWlzc2luZyBpcyBzZXQgdG8gYHRydWVgLCB0aGUgbWV0aG9kIHdpbGwgbG9hZCB0ZW1wbGF0ZXMgaWYgdGhvc2UgYXJlIG5vdCBhbHJlYWR5IHByZXNlbnQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAqL1xuICBnZXRDb25zZW50cyhsb2FkSWZNaXNzaW5nID0gZmFsc2UpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIGlpZihcbiAgICAgICgpID0+IGxvYWRJZk1pc3NpbmcsXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zZW50c1ZhbHVlKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5nZXRDb25zZW50c1Jlc3VsdExvYWRpbmcoKSxcbiAgICAgICAgICB0aGlzLmdldENvbnNlbnRzUmVzdWx0U3VjY2VzcygpXG4gICAgICAgICksXG4gICAgICAgIGZpbHRlcigoW190ZW1wbGF0ZXMsIGxvYWRpbmcsIF9zdWNjZXNzXSkgPT4gIWxvYWRpbmcpLFxuICAgICAgICB0YXAoKFt0ZW1wbGF0ZXMsIF9sb2FkaW5nLCBzdWNjZXNzXSkgPT4ge1xuICAgICAgICAgIGlmICghdGVtcGxhdGVzIHx8IHRlbXBsYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGF2b2lkIGluZml0ZSBsb29wIC0gaWYgd2UndmUgYWxyZWFkeSBhdHRlbXB0ZWQgdG8gbG9hZCB0ZW1wbGF0ZXMgYW5kIHdlIGdvdCBhbiBlbXB0eSBhcnJheSBhcyB0aGUgcmVzcG9uc2VcbiAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLmxvYWRDb25zZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW3RlbXBsYXRlcywgX2xvYWRpbmddKSA9PiBCb29sZWFuKHRlbXBsYXRlcykpLFxuICAgICAgICBtYXAoKFt0ZW1wbGF0ZXMsIF9sb2FkaW5nXSkgPT4gdGVtcGxhdGVzKVxuICAgICAgKSxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2VudHNWYWx1ZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zZW50cyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldENvbnNlbnRzUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zZW50c0xvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zZW50cyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldENvbnNlbnRzUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zZW50c1N1Y2Nlc3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zZW50cyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRDb25zZW50c1Jlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRzRXJyb3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHByb2Nlc3Npbmcgc3RhdGUgZm9yIGNvbnNlbnQgcmV0cmlldmFsXG4gICAqL1xuICByZXNldENvbnNlbnRzUHJvY2Vzc1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0TG9hZFVzZXJDb25zZW50cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZWdpc3RlcmVkIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiB0ZW1wbGF0ZSBJRC5cbiAgICpcbiAgICogQXMgYSBzaWRlLWVmZmVjdCwgdGhlIG1ldGhvZCB3aWxsIGNhbGwgYGdldENvbnNlbnRzKHRydWUpYCB0byBsb2FkIHRoZSB0ZW1wbGF0ZXMgaWYgdGhvc2UgYXJlIG5vdCBwcmVzZW50LlxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBhIHRlbXBsYXRlIElEIGJ5IHdoaWNoIHRvIGZpbHRlciB0aGUgcmVnaXN0ZXJlZCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRDb25zZW50KHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudD4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHRhcChfID0+IHRoaXMuZ2V0Q29uc2VudHModHJ1ZSkpLFxuICAgICAgc3dpdGNoTWFwKF8gPT5cbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zZW50QnlUZW1wbGF0ZUlkKHRlbXBsYXRlSWQpKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgZmlsdGVyKHRlbXBsYXRlID0+IEJvb2xlYW4odGVtcGxhdGUpKSxcbiAgICAgIG1hcCh0ZW1wbGF0ZSA9PiB0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IGlzIHRydXRoeSBhbmQgaWYgYGNvbnNlbnRXaXRoZHJhd25EYXRlYCBkb2Vzbid0IGV4aXN0LlxuICAgKiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwYXJhbSBjb25zZW50IHRvIGNoZWNrXG4gICAqL1xuICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBDb25zZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4oY29uc2VudCkgJiZcbiAgICAgIEJvb2xlYW4oY29uc2VudC5jb25zZW50R2l2ZW5EYXRlKSAmJlxuICAgICAgIUJvb2xlYW4oY29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IGlzIGVpdGhlciBmYWxzeSBvciBpZiBgY29uc2VudFdpdGhkcmF3bkRhdGVgIGlzIHByZXNlbnQuXG4gICAqIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIGNvbnNlbnQgdG8gY2hlY2tcbiAgICovXG4gIGlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50OiBDb25zZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKEJvb2xlYW4oY29uc2VudCkpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGNvbnNlbnQuY29uc2VudFdpdGhkcmF3bkRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlIGNvbnNlbnQgZm9yIHNwZWNpZmllZCBjb25zZW50IHRlbXBsYXRlIElEIGFuZCB2ZXJzaW9uLlxuICAgKiBAcGFyYW0gY29uc2VudFRlbXBsYXRlSWQgYSB0ZW1wbGF0ZSBJRCBmb3Igd2hpY2ggdG8gZ2l2ZSBhIGNvbnNlbnRcbiAgICogQHBhcmFtIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24gYSB0ZW1wbGF0ZSB2ZXJzaW9uIGZvciB3aGljaCB0byBnaXZlIGEgY29uc2VudFxuICAgKi9cbiAgZ2l2ZUNvbnNlbnQoY29uc2VudFRlbXBsYXRlSWQ6IHN0cmluZywgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudCh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZUlkLFxuICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24sXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBnaXZlIGNvbnNlbnQgcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldEdpdmVDb25zZW50UmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBnaXZlIGNvbnNlbnQgcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldEdpdmVDb25zZW50UmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBnaXZlIGNvbnNlbnQgcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNlbnRzIHRoZSBnaXZlIGNvbnNlbnQgcHJvY2VzcyBmbGFnc1xuICAgKi9cbiAgcmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRHaXZlVXNlckNvbnNlbnRQcm9jZXNzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpdGhkcmF3IGNvbnNlbnQgZm9yIHRoZSBnaXZlbiBgY29uc2VudENvZGVgXG4gICAqIEBwYXJhbSBjb25zZW50Q29kZSBmb3Igd2hpY2ggdG8gd2l0aGRyYXcgdGhlIGNvbnNlbnRcbiAgICovXG4gIHdpdGhkcmF3Q29uc2VudChjb25zZW50Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLldpdGhkcmF3VXNlckNvbnNlbnQoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjb25zZW50Q29kZSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgcHJvY2VzcyBmbGFncyBmb3Igd2l0aGRyYXcgY29uc2VudFxuICAgKi9cbiAgcmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuUmVzZXRXaXRoZHJhd1VzZXJDb25zZW50UHJvY2VzcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHRoZSBwcm92aWRlZCBgdGVtcGxhdGVMaXN0YCcgdGVtcGxhdGVzIGJ5IGhpZGluZyB0aGUgdGVtcGxhdGUgSURzIHNwZWNpZmllZCBpbiBgaGlkZVRlbXBsYXRlSWRzYC5cbiAgICogSWYgdGhlIGBoaWRlVGVtcGxhdGVJZHNgIGlzIGVtcHR5LCB0aGUgcHJvdmlkZWQgYHRlbXBsYXRlTGlzdGAgaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUxpc3QgYSBsaXN0IG9mIGNvbnNlbnQgdGVtcGxhdGVzIHRvIGZpbHRlclxuICAgKiBAcGFyYW0gaGlkZVRlbXBsYXRlSWRzIHRlbXBsYXRlIElEcyB0byBoaWRlXG4gICAqL1xuICBmaWx0ZXJDb25zZW50VGVtcGxhdGVzKFxuICAgIHRlbXBsYXRlTGlzdDogQ29uc2VudFRlbXBsYXRlW10sXG4gICAgaGlkZVRlbXBsYXRlSWRzOiBzdHJpbmdbXSA9IFtdXG4gICk6IENvbnNlbnRUZW1wbGF0ZVtdIHtcbiAgICBpZiAoaGlkZVRlbXBsYXRlSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRlbXBsYXRlTGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkVGVtcGxhdGVMaXN0OiBDb25zZW50VGVtcGxhdGVbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVMaXN0KSB7XG4gICAgICBjb25zdCBzaG93ID0gIWhpZGVUZW1wbGF0ZUlkcy5pbmNsdWRlcyh0ZW1wbGF0ZS5pZCk7XG4gICAgICBpZiAoc2hvdykge1xuICAgICAgICB1cGRhdGVkVGVtcGxhdGVMaXN0LnB1c2godGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVkVGVtcGxhdGVMaXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIGRpc3RpbnF1aXNoIHByZSAvIHBvc3QgMS4zLjAgaW4gYSBjb252ZW5pZW50IHdheS5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgd2l0aFVzZXJJZChjYWxsYmFjazogKHVzZXJJZDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UpIHtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUodXNlcklkID0+IGNhbGxiYWNrKHVzZXJJZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPKGlzc3VlOiM1NjI4KSBEZXByZWNhdGVkIHNpbmNlIDEuMy4wXG4gICAgICBjYWxsYmFjayhPQ0NfVVNFUl9JRF9DVVJSRU5UKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==