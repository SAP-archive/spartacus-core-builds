import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { iif } from 'rxjs';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from '../../auth/user-auth/facade/auth.service';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { GIVE_CONSENT_PROCESS_ID, WITHDRAW_CONSENT_PROCESS_ID, } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/user-auth/facade/auth.service";
import * as i3 from "../../auth/user-auth/facade/user-id.service";
export class UserConsentService {
    constructor(store, authService, userIdService) {
        this.store = store;
        this.authService = authService;
        this.userIdService = userIdService;
    }
    /**
     * Retrieves all consents.
     */
    loadConsents() {
        this.userIdService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.LoadUserConsents(userId));
        });
    }
    /**
     * Returns all consent templates. If `loadIfMissing` parameter is set to `true`, the method triggers the load if consent templates.
     * @param loadIfMissing is set to `true`, the method will load templates if those are not already present. The default value is `false`.
     */
    getConsents(loadIfMissing = false) {
        return iif(() => loadIfMissing, this.store.pipe(select(UsersSelectors.getConsentsValue), withLatestFrom(this.getConsentsResultLoading(), this.getConsentsResultSuccess()), filter(([_templates, loading, _success]) => !loading), tap(([templates, _loading, success]) => {
            if (!templates || templates.length === 0) {
                // avoid infite loop - if we've already attempted to load templates and we got an empty array as the response
                if (!success) {
                    this.loadConsents();
                }
            }
        }), filter(([templates, _loading]) => Boolean(templates)), map(([templates, _loading]) => templates)), this.store.pipe(select(UsersSelectors.getConsentsValue)));
    }
    /**
     * Returns the consents loading flag
     */
    getConsentsResultLoading() {
        return this.store.pipe(select(UsersSelectors.getConsentsLoading));
    }
    /**
     * Returns the consents success flag
     */
    getConsentsResultSuccess() {
        return this.store.pipe(select(UsersSelectors.getConsentsSuccess));
    }
    /**
     * Returns the consents error flag
     */
    getConsentsResultError() {
        return this.store.pipe(select(UsersSelectors.getConsentsError));
    }
    /**
     * Resets the processing state for consent retrieval
     */
    resetConsentsProcessState() {
        this.store.dispatch(new UserActions.ResetLoadUserConsents());
    }
    /**
     * Returns the registered consent for the given template ID.
     *
     * As a side-effect, the method will call `getConsents(true)` to load the templates if those are not present.
     *
     * @param templateId a template ID by which to filter the registered templates.
     */
    getConsent(templateId) {
        return this.authService.isUserLoggedIn().pipe(filter(Boolean), tap(() => this.getConsents(true)), switchMap(() => this.store.pipe(select(UsersSelectors.getConsentByTemplateId(templateId)))), filter((template) => Boolean(template)), map((template) => template.currentConsent));
    }
    /**
     * Returns `true` if the consent is truthy and if `consentWithdrawnDate` doesn't exist.
     * Otherwise, `false` is returned.
     *
     * @param consent to check
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
     * @param consent to check
     */
    isConsentWithdrawn(consent) {
        if (Boolean(consent)) {
            return Boolean(consent.consentWithdrawnDate);
        }
        return true;
    }
    /**
     * Give consent for specified consent template ID and version.
     * @param consentTemplateId a template ID for which to give a consent
     * @param consentTemplateVersion a template version for which to give a consent
     */
    giveConsent(consentTemplateId, consentTemplateVersion) {
        this.userIdService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.GiveUserConsent({
                userId,
                consentTemplateId,
                consentTemplateVersion,
            }));
        });
    }
    /**
     * Returns the give consent process loading flag
     */
    getGiveConsentResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the give consent process success flag
     */
    getGiveConsentResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the give consent process error flag
     */
    getGiveConsentResultError() {
        return this.store.pipe(select(getProcessErrorFactory(GIVE_CONSENT_PROCESS_ID)));
    }
    /**
     * Resents the give consent process flags
     */
    resetGiveConsentProcessState() {
        return this.store.dispatch(new UserActions.ResetGiveUserConsentProcess());
    }
    /**
     * Withdraw consent for the given `consentCode`
     * @param consentCode for which to withdraw the consent
     */
    withdrawConsent(consentCode) {
        this.userIdService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.WithdrawUserConsent({
                userId,
                consentCode,
            }));
        });
    }
    /**
     * Returns the withdraw consent process loading flag
     */
    getWithdrawConsentResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the withdraw consent process success flag
     */
    getWithdrawConsentResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Returns the withdraw consent process error flag
     */
    getWithdrawConsentResultError() {
        return this.store.pipe(select(getProcessErrorFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    }
    /**
     * Resets the process flags for withdraw consent
     */
    resetWithdrawConsentProcessState() {
        return this.store.dispatch(new UserActions.ResetWithdrawUserConsentProcess());
    }
    /**
     * Filters the provided `templateList`' templates by hiding the template IDs specified in `hideTemplateIds`.
     * If the `hideTemplateIds` is empty, the provided `templateList` is returned.
     *
     * @param templateList a list of consent templates to filter
     * @param hideTemplateIds template IDs to hide
     */
    filterConsentTemplates(templateList, hideTemplateIds = []) {
        if (hideTemplateIds.length === 0) {
            return templateList;
        }
        const updatedTemplateList = [];
        for (const template of templateList) {
            const show = !hideTemplateIds.includes(template.id);
            if (show) {
                updatedTemplateList.push(template);
            }
        }
        return updatedTemplateList;
    }
}
UserConsentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserConsentService_Factory() { return new UserConsentService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.UserIdService)); }, token: UserConsentService, providedIn: "root" });
UserConsentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
UserConsentService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: UserIdService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL2ZhY2FkZS91c2VyLWNvbnNlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRzVFLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUNMLHVCQUF1QixFQUV2QiwyQkFBMkIsR0FDNUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFLN0IsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUNZLEtBQW9ELEVBQ3BELFdBQXdCLEVBQ3hCLGFBQTRCO1FBRjVCLFVBQUssR0FBTCxLQUFLLENBQStDO1FBQ3BELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ3JDLENBQUM7SUFFSjs7T0FFRztJQUNILFlBQVk7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFn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RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHNCQUFzQixDQUNwQixZQUErQixFQUMvQixrQkFBNEIsRUFBRTtRQUU5QixJQUFJLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsTUFBTSxtQkFBbUIsR0FBc0IsRUFBRSxDQUFDO1FBQ2xELEtBQUssTUFBTSxRQUFRLElBQUksWUFBWSxFQUFFO1lBQ25DLE1BQU0sSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7UUFFRCxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7Ozs7WUExUEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUF0QmdCLEtBQUs7WUFHYixXQUFXO1lBQ1gsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvdXNlci1hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlcklkU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvdXNlci1hdXRoL2ZhY2FkZS91c2VyLWlkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc2VudCwgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQsXG4gIFN0YXRlV2l0aFVzZXIsXG4gIFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQ29uc2VudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VySWRTZXJ2aWNlOiBVc2VySWRTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCBjb25zZW50cy5cbiAgICovXG4gIGxvYWRDb25zZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJJZFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzKHVzZXJJZCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGNvbnNlbnQgdGVtcGxhdGVzLiBJZiBgbG9hZElmTWlzc2luZ2AgcGFyYW1ldGVyIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBtZXRob2QgdHJpZ2dlcnMgdGhlIGxvYWQgaWYgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqIEBwYXJhbSBsb2FkSWZNaXNzaW5nIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBtZXRob2Qgd2lsbCBsb2FkIHRlbXBsYXRlcyBpZiB0aG9zZSBhcmUgbm90IGFscmVhZHkgcHJlc2VudC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICovXG4gIGdldENvbnNlbnRzKGxvYWRJZk1pc3NpbmcgPSBmYWxzZSk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gaWlmKFxuICAgICAgKCkgPT4gbG9hZElmTWlzc2luZyxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRzVmFsdWUpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICB0aGlzLmdldENvbnNlbnRzUmVzdWx0TG9hZGluZygpLFxuICAgICAgICAgIHRoaXMuZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKChbX3RlbXBsYXRlcywgbG9hZGluZywgX3N1Y2Nlc3NdKSA9PiAhbG9hZGluZyksXG4gICAgICAgIHRhcCgoW3RlbXBsYXRlcywgX2xvYWRpbmcsIHN1Y2Nlc3NdKSA9PiB7XG4gICAgICAgICAgaWYgKCF0ZW1wbGF0ZXMgfHwgdGVtcGxhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gYXZvaWQgaW5maXRlIGxvb3AgLSBpZiB3ZSd2ZSBhbHJlYWR5IGF0dGVtcHRlZCB0byBsb2FkIHRlbXBsYXRlcyBhbmQgd2UgZ290IGFuIGVtcHR5IGFycmF5IGFzIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMubG9hZENvbnNlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IEJvb2xlYW4odGVtcGxhdGVzKSksXG4gICAgICAgIG1hcCgoW3RlbXBsYXRlcywgX2xvYWRpbmddKSA9PiB0ZW1wbGF0ZXMpXG4gICAgICApLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zZW50c1ZhbHVlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0Q29uc2VudHNSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRzU3VjY2VzcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldENvbnNlbnRzUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2VudHNFcnJvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgcHJvY2Vzc2luZyBzdGF0ZSBmb3IgY29uc2VudCByZXRyaWV2YWxcbiAgICovXG4gIHJlc2V0Q29uc2VudHNQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRMb2FkVXNlckNvbnNlbnRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlZ2lzdGVyZWQgY29uc2VudCBmb3IgdGhlIGdpdmVuIHRlbXBsYXRlIElELlxuICAgKlxuICAgKiBBcyBhIHNpZGUtZWZmZWN0LCB0aGUgbWV0aG9kIHdpbGwgY2FsbCBgZ2V0Q29uc2VudHModHJ1ZSlgIHRvIGxvYWQgdGhlIHRlbXBsYXRlcyBpZiB0aG9zZSBhcmUgbm90IHByZXNlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUlkIGEgdGVtcGxhdGUgSUQgYnkgd2hpY2ggdG8gZmlsdGVyIHRoZSByZWdpc3RlcmVkIHRlbXBsYXRlcy5cbiAgICovXG4gIGdldENvbnNlbnQodGVtcGxhdGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb25zZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgdGFwKCgpID0+IHRoaXMuZ2V0Q29uc2VudHModHJ1ZSkpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+XG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2VudEJ5VGVtcGxhdGVJZCh0ZW1wbGF0ZUlkKSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGZpbHRlcigodGVtcGxhdGUpID0+IEJvb2xlYW4odGVtcGxhdGUpKSxcbiAgICAgIG1hcCgodGVtcGxhdGUpID0+IHRlbXBsYXRlLmN1cnJlbnRDb25zZW50KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgaXMgdHJ1dGh5IGFuZCBpZiBgY29uc2VudFdpdGhkcmF3bkRhdGVgIGRvZXNuJ3QgZXhpc3QuXG4gICAqIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIGNvbnNlbnQgdG8gY2hlY2tcbiAgICovXG4gIGlzQ29uc2VudEdpdmVuKGNvbnNlbnQ6IENvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbihjb25zZW50KSAmJlxuICAgICAgQm9vbGVhbihjb25zZW50LmNvbnNlbnRHaXZlbkRhdGUpICYmXG4gICAgICAhQm9vbGVhbihjb25zZW50LmNvbnNlbnRXaXRoZHJhd25EYXRlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgaXMgZWl0aGVyIGZhbHN5IG9yIGlmIGBjb25zZW50V2l0aGRyYXduRGF0ZWAgaXMgcHJlc2VudC5cbiAgICogT3RoZXJ3aXNlLCBgZmFsc2VgIGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBAcGFyYW0gY29uc2VudCB0byBjaGVja1xuICAgKi9cbiAgaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQ6IENvbnNlbnQpOiBib29sZWFuIHtcbiAgICBpZiAoQm9vbGVhbihjb25zZW50KSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oY29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmUgY29uc2VudCBmb3Igc3BlY2lmaWVkIGNvbnNlbnQgdGVtcGxhdGUgSUQgYW5kIHZlcnNpb24uXG4gICAqIEBwYXJhbSBjb25zZW50VGVtcGxhdGVJZCBhIHRlbXBsYXRlIElEIGZvciB3aGljaCB0byBnaXZlIGEgY29uc2VudFxuICAgKiBAcGFyYW0gY29uc2VudFRlbXBsYXRlVmVyc2lvbiBhIHRlbXBsYXRlIHZlcnNpb24gZm9yIHdoaWNoIHRvIGdpdmUgYSBjb25zZW50XG4gICAqL1xuICBnaXZlQ29uc2VudChjb25zZW50VGVtcGxhdGVJZDogc3RyaW5nLCBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJJZFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY29uc2VudFRlbXBsYXRlSWQsXG4gICAgICAgICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbixcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0R2l2ZUNvbnNlbnRSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZW50cyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZmxhZ3NcbiAgICovXG4gIHJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0R2l2ZVVzZXJDb25zZW50UHJvY2VzcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaXRoZHJhdyBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYGNvbnNlbnRDb2RlYFxuICAgKiBAcGFyYW0gY29uc2VudENvZGUgZm9yIHdoaWNoIHRvIHdpdGhkcmF3IHRoZSBjb25zZW50XG4gICAqL1xuICB3aXRoZHJhd0NvbnNlbnQoY29uc2VudENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXNlcklkU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5XaXRoZHJhd1VzZXJDb25zZW50KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY29uc2VudENvZGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgcHJvY2VzcyBmbGFncyBmb3Igd2l0aGRyYXcgY29uc2VudFxuICAgKi9cbiAgcmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuUmVzZXRXaXRoZHJhd1VzZXJDb25zZW50UHJvY2VzcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHRoZSBwcm92aWRlZCBgdGVtcGxhdGVMaXN0YCcgdGVtcGxhdGVzIGJ5IGhpZGluZyB0aGUgdGVtcGxhdGUgSURzIHNwZWNpZmllZCBpbiBgaGlkZVRlbXBsYXRlSWRzYC5cbiAgICogSWYgdGhlIGBoaWRlVGVtcGxhdGVJZHNgIGlzIGVtcHR5LCB0aGUgcHJvdmlkZWQgYHRlbXBsYXRlTGlzdGAgaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUxpc3QgYSBsaXN0IG9mIGNvbnNlbnQgdGVtcGxhdGVzIHRvIGZpbHRlclxuICAgKiBAcGFyYW0gaGlkZVRlbXBsYXRlSWRzIHRlbXBsYXRlIElEcyB0byBoaWRlXG4gICAqL1xuICBmaWx0ZXJDb25zZW50VGVtcGxhdGVzKFxuICAgIHRlbXBsYXRlTGlzdDogQ29uc2VudFRlbXBsYXRlW10sXG4gICAgaGlkZVRlbXBsYXRlSWRzOiBzdHJpbmdbXSA9IFtdXG4gICk6IENvbnNlbnRUZW1wbGF0ZVtdIHtcbiAgICBpZiAoaGlkZVRlbXBsYXRlSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRlbXBsYXRlTGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkVGVtcGxhdGVMaXN0OiBDb25zZW50VGVtcGxhdGVbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVMaXN0KSB7XG4gICAgICBjb25zdCBzaG93ID0gIWhpZGVUZW1wbGF0ZUlkcy5pbmNsdWRlcyh0ZW1wbGF0ZS5pZCk7XG4gICAgICBpZiAoc2hvdykge1xuICAgICAgICB1cGRhdGVkVGVtcGxhdGVMaXN0LnB1c2godGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVkVGVtcGxhdGVMaXN0O1xuICB9XG59XG4iXX0=