/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { USERID_CURRENT } from '../../occ/utils/occ-constants';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import * as fromStore from '../store/index';
import { UsersSelectors } from '../store/selectors/index';
import { GIVE_CONSENT_PROCESS_ID, WITHDRAW_CONSENT_PROCESS_ID, } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class UserConsentService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Retrieves all consents.
     * @return {?}
     */
    loadConsents() {
        this.store.dispatch(new fromStore.LoadUserConsents(USERID_CURRENT));
    }
    /**
     * Returns all consents
     * @return {?}
     */
    getConsents() {
        return this.store.pipe(select(UsersSelectors.getConsentsValue));
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
        this.store.dispatch(new fromStore.ResetLoadUserConsents());
    }
    /**
     * Give consent for specified consent template ID and version.
     * @param {?} consentTemplateId a template ID for which to give a consent
     * @param {?} consentTemplateVersion a template version for which to give a consent
     * @return {?}
     */
    giveConsent(consentTemplateId, consentTemplateVersion) {
        this.store.dispatch(new fromStore.GiveUserConsent({
            userId: USERID_CURRENT,
            consentTemplateId,
            consentTemplateVersion,
        }));
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
        return this.store.dispatch(new fromStore.ResetGiveUserConsentProcess());
    }
    /**
     * Withdraw consent for the given `consentCode`
     * @param {?} consentCode for which to withdraw the consent
     * @return {?}
     */
    withdrawConsent(consentCode) {
        this.store.dispatch(new fromStore.WithdrawUserConsent({ userId: USERID_CURRENT, consentCode }));
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
        return this.store.dispatch(new fromStore.ResetWithdrawUserConsentProcess());
    }
}
UserConsentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserConsentService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ UserConsentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserConsentService_Factory() { return new UserConsentService(i0.ɵɵinject(i1.Store)); }, token: UserConsentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserConsentService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1jb25zZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRS9ELE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sS0FBSyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsMkJBQTJCLEdBQzVCLE1BQU0scUJBQXFCLENBQUM7OztBQUs3QixNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQ1ksS0FFVDtRQUZTLFVBQUssR0FBTCxLQUFLLENBRWQ7SUFDQSxDQUFDOzs7OztJQUtKLFlBQVk7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7O0lBS0QsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFLRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7OztJQUtELHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBS0Qsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFLRCx5QkFBeUI7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFPRCxXQUFXLENBQUMsaUJBQXlCLEVBQUUsc0JBQThCO1FBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxlQUFlLENBQUM7WUFDNUIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsaUJBQWlCO1lBQ2pCLHNCQUFzQjtTQUN2QixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsMkJBQTJCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQzFELENBQUM7SUFDSixDQUFDOzs7OztJQUtELDJCQUEyQjtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCx5QkFBeUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FDeEQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsNEJBQTRCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7OztJQU1ELGVBQWUsQ0FBQyxXQUFtQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsbUJBQW1CLENBQUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQzNFLENBQUM7SUFDSixDQUFDOzs7OztJQUtELCtCQUErQjtRQUM3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUM5RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCwrQkFBK0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsNkJBQTZCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQzVELENBQUM7SUFDSixDQUFDOzs7OztJQUtELGdDQUFnQztRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLCtCQUErQixFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7WUEvSUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBbkJnQixLQUFLOzs7Ozs7OztJQXNCbEIsbUNBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIGZyb21Qcm9jZXNzU3RvcmUgZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQsXG4gIFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQ29uc2VudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFxuICAgICAgZnJvbVN0b3JlLlN0YXRlV2l0aFVzZXIgfCBmcm9tUHJvY2Vzc1N0b3JlLlN0YXRlV2l0aFByb2Nlc3M8dm9pZD5cbiAgICA+XG4gICkge31cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCBjb25zZW50cy5cbiAgICovXG4gIGxvYWRDb25zZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFVzZXJDb25zZW50cyhVU0VSSURfQ1VSUkVOVCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGNvbnNlbnRzXG4gICAqL1xuICBnZXRDb25zZW50cygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2VudHNWYWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0Q29uc2VudHNSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRzU3VjY2VzcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldENvbnNlbnRzUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2VudHNFcnJvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgcHJvY2Vzc2luZyBzdGF0ZSBmb3IgY29uc2VudCByZXRyaWV2YWxcbiAgICovXG4gIHJlc2V0Q29uc2VudHNQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlJlc2V0TG9hZFVzZXJDb25zZW50cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlIGNvbnNlbnQgZm9yIHNwZWNpZmllZCBjb25zZW50IHRlbXBsYXRlIElEIGFuZCB2ZXJzaW9uLlxuICAgKiBAcGFyYW0gY29uc2VudFRlbXBsYXRlSWQgYSB0ZW1wbGF0ZSBJRCBmb3Igd2hpY2ggdG8gZ2l2ZSBhIGNvbnNlbnRcbiAgICogQHBhcmFtIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24gYSB0ZW1wbGF0ZSB2ZXJzaW9uIGZvciB3aGljaCB0byBnaXZlIGEgY29uc2VudFxuICAgKi9cbiAgZ2l2ZUNvbnNlbnQoY29uc2VudFRlbXBsYXRlSWQ6IHN0cmluZywgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuR2l2ZVVzZXJDb25zZW50KHtcbiAgICAgICAgdXNlcklkOiBVU0VSSURfQ1VSUkVOVCxcbiAgICAgICAgY29uc2VudFRlbXBsYXRlSWQsXG4gICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0R2l2ZUNvbnNlbnRSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZW50cyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZmxhZ3NcbiAgICovXG4gIHJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5SZXNldEdpdmVVc2VyQ29uc2VudFByb2Nlc3MoKSk7XG4gIH1cblxuICAvKipcbiAgICogV2l0aGRyYXcgY29uc2VudCBmb3IgdGhlIGdpdmVuIGBjb25zZW50Q29kZWBcbiAgICogQHBhcmFtIGNvbnNlbnRDb2RlIGZvciB3aGljaCB0byB3aXRoZHJhdyB0aGUgY29uc2VudFxuICAgKi9cbiAgd2l0aGRyYXdDb25zZW50KGNvbnNlbnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5XaXRoZHJhd1VzZXJDb25zZW50KHsgdXNlcklkOiBVU0VSSURfQ1VSUkVOVCwgY29uc2VudENvZGUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgcHJvY2VzcyBmbGFncyBmb3Igd2l0aGRyYXcgY29uc2VudFxuICAgKi9cbiAgcmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5SZXNldFdpdGhkcmF3VXNlckNvbnNlbnRQcm9jZXNzKCkpO1xuICB9XG59XG4iXX0=