/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import * as fromStore from '../store/index';
import { GIVE_CONSENT_PROCESS_ID, UPDATE_EMAIL_PROCESS_ID, UPDATE_USER_DETAILS_PROCESS_ID, WITHDRAW_CONSENT_PROCESS_ID, } from '../store/user-state';
export class UserService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Returns a user
     * @return {?}
     */
    get() {
        return this.store.pipe(select(fromStore.getDetails));
    }
    /**
     * Loads the user's details
     * @param {?} userId
     * @return {?}
     */
    load(userId) {
        this.store.dispatch(new fromStore.LoadUserDetails(userId));
    }
    /**
     * Register a new user
     *
     * @param {?} userRegisterFormData
     * @return {?}
     */
    register(userRegisterFormData) {
        this.store.dispatch(new fromStore.RegisterUser(userRegisterFormData));
    }
    /**
     * Remove user account, that's also called close user's account
     *
     * @param {?} userId
     * @return {?}
     */
    remove(userId) {
        this.store.dispatch(new fromStore.RemoveUser(userId));
    }
    /**
     * Returns the remove user loading flag
     * @return {?}
     */
    getRemoveUserResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(fromStore.REMOVE_USER_PROCESS_ID)));
    }
    /**
     * Returns the remove user failure outcome.
     * @return {?}
     */
    getRemoveUserResultError() {
        return this.store.pipe(select(getProcessErrorFactory(fromStore.REMOVE_USER_PROCESS_ID)));
    }
    /**
     * Returns the remove user process success outcome.
     * @return {?}
     */
    getRemoveUserResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(fromStore.REMOVE_USER_PROCESS_ID)));
    }
    /**
     * Resets the remove user process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     * @return {?}
     */
    resetRemoveUserProcessState() {
        this.store.dispatch(new fromStore.RemoveUserReset());
    }
    /**
     * Returns an order's detail
     * @return {?}
     */
    getOrderDetails() {
        return this.store.pipe(select(fromStore.getOrderDetails));
    }
    /**
     * Retrieves order's details
     *
     * @param {?} userId a user's ID
     * @param {?} orderCode an order code
     * @return {?}
     */
    loadOrderDetails(userId, orderCode) {
        this.store.dispatch(new fromStore.LoadOrderDetails({
            userId: userId,
            orderCode: orderCode,
        }));
    }
    /**
     * Clears order's details
     * @return {?}
     */
    clearOrderDetails() {
        this.store.dispatch(new fromStore.ClearOrderDetails());
    }
    /**
     * Returns order history list
     * @param {?} userId
     * @param {?} pageSize
     * @return {?}
     */
    getOrderHistoryList(userId, pageSize) {
        return this.store.pipe(select(fromStore.getOrdersState), tap(orderListState => {
            /** @type {?} */
            const attemptedLoad = orderListState.loading ||
                orderListState.success ||
                orderListState.error;
            if (!attemptedLoad && !!userId) {
                this.loadOrderList(userId, pageSize);
            }
        }), map(orderListState => orderListState.value));
    }
    /**
     * Returns a loaded flag for order history list
     * @return {?}
     */
    getOrderHistoryListLoaded() {
        return this.store.pipe(select(fromStore.getOrdersLoaded));
    }
    /**
     * Loads all user's payment methods.
     * @param {?} userId a user ID
     * @return {?}
     */
    loadPaymentMethods(userId) {
        this.store.dispatch(new fromStore.LoadUserPaymentMethods(userId));
    }
    /**
     * Returns all user's payment methods
     * @return {?}
     */
    getPaymentMethods() {
        return this.store.pipe(select(fromStore.getPaymentMethods));
    }
    /**
     * Returns a loading flag for payment methods
     * @return {?}
     */
    getPaymentMethodsLoading() {
        return this.store.pipe(select(fromStore.getPaymentMethodsLoading));
    }
    /**
     * Sets the payment as a default one
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    setPaymentMethodAsDefault(userId, paymentMethodId) {
        this.store.dispatch(new fromStore.SetDefaultUserPaymentMethod({
            userId: userId,
            paymentMethodId,
        }));
    }
    /**
     * Deletes the payment method
     *
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    deletePaymentMethod(userId, paymentMethodId) {
        this.store.dispatch(new fromStore.DeleteUserPaymentMethod({
            userId: userId,
            paymentMethodId,
        }));
    }
    /**
     * Retrieves an order list
     * @param {?} userId a user ID
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    loadOrderList(userId, pageSize, currentPage, sort) {
        this.store.dispatch(new fromStore.LoadUserOrders({
            userId: userId,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort,
        }));
    }
    /**
     * Retrieves user's addresses
     * @param {?} userId a user ID
     * @return {?}
     */
    loadAddresses(userId) {
        this.store.dispatch(new fromStore.LoadUserAddresses(userId));
    }
    /**
     * Adds user address
     * @param {?} userId a user ID
     * @param {?} address a user address
     * @return {?}
     */
    addUserAddress(userId, address) {
        this.store.dispatch(new fromStore.AddUserAddress({
            userId: userId,
            address: address,
        }));
    }
    /**
     * Sets user address as default
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    setAddressAsDefault(userId, addressId) {
        this.store.dispatch(new fromStore.UpdateUserAddress({
            userId: userId,
            addressId: addressId,
            address: { defaultAddress: true },
        }));
    }
    /**
     * Updates existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @param {?} address a user address
     * @return {?}
     */
    updateUserAddress(userId, addressId, address) {
        this.store.dispatch(new fromStore.UpdateUserAddress({
            userId: userId,
            addressId: addressId,
            address: address,
        }));
    }
    /**
     * Deletes existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    deleteUserAddress(userId, addressId) {
        this.store.dispatch(new fromStore.DeleteUserAddress({
            userId: userId,
            addressId: addressId,
        }));
    }
    /**
     * Returns addresses
     * @return {?}
     */
    getAddresses() {
        return this.store.pipe(select(fromStore.getAddresses));
    }
    /**
     * Returns a loading flag for addresses
     * @return {?}
     */
    getAddressesLoading() {
        return this.store.pipe(select(fromStore.getAddressesLoading));
    }
    /**
     * Returns titles
     * @return {?}
     */
    getTitles() {
        return this.store.pipe(select(fromStore.getAllTitles));
    }
    /**
     * Retrieves titles
     * @return {?}
     */
    loadTitles() {
        this.store.dispatch(new fromStore.LoadTitles());
    }
    /**
     * Retrieves delivery countries
     * @return {?}
     */
    loadDeliveryCountries() {
        this.store.dispatch(new fromStore.LoadDeliveryCountries());
    }
    /**
     * Returns all delivery countries
     * @return {?}
     */
    getDeliveryCountries() {
        return this.store.pipe(select(fromStore.getAllDeliveryCountries));
    }
    /**
     * Returns a country based on the provided `isocode`
     * @param {?} isocode an isocode for a country
     * @return {?}
     */
    getCountry(isocode) {
        return this.store.pipe(select(fromStore.countrySelectorFactory(isocode)));
    }
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param {?} countryIsoCode
     * @return {?}
     */
    loadRegions(countryIsoCode) {
        this.store.dispatch(new fromStore.LoadRegions(countryIsoCode));
    }
    /**
     * Returns all regions
     * @return {?}
     */
    getRegions() {
        return this.store.pipe(select(fromStore.getAllRegions));
    }
    /**
     * Returns all billing countries
     * @return {?}
     */
    getAllBillingCountries() {
        return this.store.pipe(select(fromStore.getAllBillingCountries));
    }
    /**
     * Retrieves billing countries
     * @return {?}
     */
    loadBillingCountries() {
        this.store.dispatch(new fromStore.LoadBillingCountries());
    }
    /**
     * Cleaning order list
     * @return {?}
     */
    clearOrderList() {
        this.store.dispatch(new fromStore.ClearUserOrders());
    }
    /**
     * Return whether user's password is successfully reset
     * @return {?}
     */
    isPasswordReset() {
        return this.store.pipe(select(fromStore.getResetPassword));
    }
    /**
     * Updates the user's details
     * @param {?} username
     * @param {?} userDetails to be updated
     * @return {?}
     */
    updatePersonalDetails(username, userDetails) {
        this.store.dispatch(new fromStore.UpdateUserDetails({ username, userDetails }));
    }
    /**
     * Returns the update user's personal details loading flag
     * @return {?}
     */
    getUpdatePersonalDetailsResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    }
    /**
     * Returns the update user's personal details error flag
     * @return {?}
     */
    getUpdatePersonalDetailsResultError() {
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    }
    /**
     * Returns the update user's personal details success flag
     * @return {?}
     */
    getUpdatePersonalDetailsResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    }
    /**
     * Resets the update user details processing state
     * @return {?}
     */
    resetUpdatePersonalDetailsProcessingState() {
        this.store.dispatch(new fromStore.ResetUpdateUserDetails());
    }
    /**
     * Reset new password.  Part of the forgot password flow.
     * @param {?} token
     * @param {?} password
     * @return {?}
     */
    resetPassword(token, password) {
        this.store.dispatch(new fromStore.ResetPassword({ token, password }));
    }
    /*
       * Request an email to reset a forgotten password.
       */
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    requestForgotPasswordEmail(userEmailAddress) {
        this.store.dispatch(new fromStore.ForgotPasswordEmailRequest(userEmailAddress));
    }
    /**
     * Updates the user's email
     * @param {?} uid to be updated
     * @param {?} password
     * @param {?} newUid
     * @return {?}
     */
    updateEmail(uid, password, newUid) {
        this.store.dispatch(new fromStore.UpdateEmailAction({ uid, password, newUid }));
    }
    /**
     * Returns the update user's email success flag
     * @return {?}
     */
    getUpdateEmailResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_EMAIL_PROCESS_ID)));
    }
    /**
     * Returns the update user's email error flag
     * @return {?}
     */
    getUpdateEmailResultError() {
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_EMAIL_PROCESS_ID)));
    }
    /**
     * Returns the update user's email loading flag
     * @return {?}
     */
    getUpdateEmailResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_EMAIL_PROCESS_ID)));
    }
    /**
     * Resets the update user's email processing state
     * @return {?}
     */
    resetUpdateEmailResultState() {
        this.store.dispatch(new fromStore.ResetUpdateEmailAction());
    }
    /**
     * Updates the password for an authenticated user
     * @param {?} userId the user id for which the password will be updated
     * @param {?} oldPassword the current password that will be changed
     * @param {?} newPassword the new password
     * @return {?}
     */
    updatePassword(userId, oldPassword, newPassword) {
        this.store.dispatch(new fromStore.UpdatePassword({ userId, oldPassword, newPassword }));
    }
    /**
     * Returns the update password loading flag
     * @return {?}
     */
    getUpdatePasswordResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(fromStore.UPDATE_PASSWORD_PROCESS_ID)));
    }
    /**
     * Returns the update password failure outcome.
     * @return {?}
     */
    getUpdatePasswordResultError() {
        return this.store.pipe(select(getProcessErrorFactory(fromStore.UPDATE_PASSWORD_PROCESS_ID)));
    }
    /**
     * Returns the update password process success outcome.
     * @return {?}
     */
    getUpdatePasswordResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(fromStore.UPDATE_PASSWORD_PROCESS_ID)));
    }
    /**
     * Resets the update password process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     * @return {?}
     */
    resetUpdatePasswordProcessState() {
        this.store.dispatch(new fromStore.UpdatePasswordReset());
    }
    /**
     * Retrieves all consents
     * @param {?} userId user ID for which to retrieve consents
     * @return {?}
     */
    loadConsents(userId) {
        this.store.dispatch(new fromStore.LoadUserConsents(userId));
    }
    /**
     * Returns all consents
     * @return {?}
     */
    getConsents() {
        return this.store.pipe(select(fromStore.getConsentsValue));
    }
    /**
     * Returns the consents loading flag
     * @return {?}
     */
    getConsentsResultLoading() {
        return this.store.pipe(select(fromStore.getConsentsLoading));
    }
    /**
     * Returns the consents success flag
     * @return {?}
     */
    getConsentsResultSuccess() {
        return this.store.pipe(select(fromStore.getConsentsSuccess));
    }
    /**
     * Returns the consents error flag
     * @return {?}
     */
    getConsentsResultError() {
        return this.store.pipe(select(fromStore.getConsentsError));
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
     * @param {?} userId and ID of a user giving the consent
     * @param {?} consentTemplateId a template ID for which to give a consent
     * @param {?} consentTemplateVersion a template version for which to give a consent
     * @return {?}
     */
    giveConsent(userId, consentTemplateId, consentTemplateVersion) {
        this.store.dispatch(new fromStore.GiveUserConsent({
            userId,
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
     * @param {?} userId a user ID for which to withdraw the consent
     * @param {?} consentCode for which to withdraw the consent
     * @return {?}
     */
    withdrawConsent(userId, consentCode) {
        this.store.dispatch(new fromStore.WithdrawUserConsent({ userId, consentCode }));
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
UserService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzFDLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBRXpELE9BQU8sS0FBSyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIsOEJBQThCLEVBQzlCLDJCQUEyQixHQUM1QixNQUFNLHFCQUFxQixDQUFDO0FBRzdCLE1BQU0sT0FBTyxXQUFXOzs7O0lBQ3RCLFlBQ1ksS0FFVDtRQUZTLFVBQUssR0FBTCxLQUFLLENBRWQ7SUFDQSxDQUFDOzs7OztJQUtKLEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFLRCxJQUFJLENBQUMsTUFBYztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBT0QsUUFBUSxDQUFDLG9CQUEwQztRQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3hF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QUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLDJCQUEyQixFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7Ozs7O0lBT0QsZUFBZSxDQUFDLE1BQWMsRUFBRSxXQUFtQjtRQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsbUJBQW1CLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FDM0QsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsK0JBQStCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQzlELENBQUM7SUFDSixDQUFDOzs7OztJQUtELCtCQUErQjtRQUM3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUM5RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCw2QkFBNkI7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FDNUQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsZ0NBQWdDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7OztZQXhwQkYsVUFBVTs7OztZQXZCTSxLQUFLOzs7Ozs7O0lBMEJsQiw0QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFkZHJlc3MsIENvdW50cnksIFJlZ2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZUxpc3QgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9hZGRpdGlvbmFsLW9jYy5tb2RlbHMnO1xuaW1wb3J0ICogYXMgZnJvbVByb2Nlc3NTdG9yZSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IFVzZXJSZWdpc3RlckZvcm1EYXRhIH0gZnJvbSAnLi4vbW9kZWwvdXNlci5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHtcbiAgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQsXG4gIFVQREFURV9FTUFJTF9QUk9DRVNTX0lELFxuICBVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQsXG4gIFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8XG4gICAgICBmcm9tU3RvcmUuU3RhdGVXaXRoVXNlciB8IGZyb21Qcm9jZXNzU3RvcmUuU3RhdGVXaXRoUHJvY2Vzczx2b2lkPlxuICAgID5cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdXNlclxuICAgKi9cbiAgZ2V0KCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXREZXRhaWxzKSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIHVzZXIncyBkZXRhaWxzXG4gICAqL1xuICBsb2FkKHVzZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRVc2VyRGV0YWlscyh1c2VySWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyXG4gICAqXG4gICAqIEBwYXJhbSBzdWJtaXRGb3JtRGF0YSBhcyBVc2VyUmVnaXN0ZXJGb3JtRGF0YVxuICAgKi9cbiAgcmVnaXN0ZXIodXNlclJlZ2lzdGVyRm9ybURhdGE6IFVzZXJSZWdpc3RlckZvcm1EYXRhKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlJlZ2lzdGVyVXNlcih1c2VyUmVnaXN0ZXJGb3JtRGF0YSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB1c2VyIGFjY291bnQsIHRoYXQncyBhbHNvIGNhbGxlZCBjbG9zZSB1c2VyJ3MgYWNjb3VudFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqL1xuICByZW1vdmUodXNlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVtb3ZlVXNlcih1c2VySWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZW1vdmUgdXNlciBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFJlbW92ZVVzZXJSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KGZyb21TdG9yZS5SRU1PVkVfVVNFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbW92ZSB1c2VyIGZhaWx1cmUgb3V0Y29tZS5cbiAgICovXG4gIGdldFJlbW92ZVVzZXJSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoZnJvbVN0b3JlLlJFTU9WRV9VU0VSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVtb3ZlIHVzZXIgcHJvY2VzcyBzdWNjZXNzIG91dGNvbWUuXG4gICAqL1xuICBnZXRSZW1vdmVVc2VyUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShmcm9tU3RvcmUuUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHJlbW92ZSB1c2VyIHByb2Nlc3Mgc3RhdGUuIFRoZSBzdGF0ZSBuZWVkcyB0byBiZSByZXNldCBhZnRlciB0aGUgcHJvY2Vzc1xuICAgKiBjb25jbHVkZXMsIHJlZ2FyZGxlc3MgaWYgaXQncyBhIHN1Y2Nlc3Mgb3IgYW4gZXJyb3JcbiAgICovXG4gIHJlc2V0UmVtb3ZlVXNlclByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVtb3ZlVXNlclJlc2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb3JkZXIncyBkZXRhaWxcbiAgICovXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldE9yZGVyRGV0YWlscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBvcmRlcidzIGRldGFpbHNcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCBhIHVzZXIncyBJRFxuICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICovXG4gIGxvYWRPcmRlckRldGFpbHModXNlcklkOiBzdHJpbmcsIG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuTG9hZE9yZGVyRGV0YWlscyh7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBvcmRlckNvZGU6IG9yZGVyQ29kZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgb3JkZXIncyBkZXRhaWxzXG4gICAqL1xuICBjbGVhck9yZGVyRGV0YWlscygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuQ2xlYXJPcmRlckRldGFpbHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICovXG4gIGdldE9yZGVySGlzdG9yeUxpc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU6IG51bWJlclxuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TdG9yZS5nZXRPcmRlcnNTdGF0ZSksXG4gICAgICB0YXAob3JkZXJMaXN0U3RhdGUgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICBvcmRlckxpc3RTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgb3JkZXJMaXN0U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgIG9yZGVyTGlzdFN0YXRlLmVycm9yO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgJiYgISF1c2VySWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRPcmRlckxpc3QodXNlcklkLCBwYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKG9yZGVyTGlzdFN0YXRlID0+IG9yZGVyTGlzdFN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRlZCBmbGFnIGZvciBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICovXG4gIGdldE9yZGVySGlzdG9yeUxpc3RMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldE9yZGVyc0xvYWRlZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFsbCB1c2VyJ3MgcGF5bWVudCBtZXRob2RzLlxuICAgKiBAcGFyYW0gdXNlcklkIGEgdXNlciBJRFxuICAgKi9cbiAgbG9hZFBheW1lbnRNZXRob2RzKHVzZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRVc2VyUGF5bWVudE1ldGhvZHModXNlcklkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgdXNlcidzIHBheW1lbnQgbWV0aG9kc1xuICAgKi9cbiAgZ2V0UGF5bWVudE1ldGhvZHMoKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFBheW1lbnRNZXRob2RzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgcGF5bWVudCBtZXRob2RzXG4gICAqL1xuICBnZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFBheW1lbnRNZXRob2RzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHBheW1lbnQgYXMgYSBkZWZhdWx0IG9uZVxuICAgKiBAcGFyYW0gdXNlcklkIGEgdXNlciBJRFxuICAgKiBAcGFyYW0gcGF5bWVudE1ldGhvZElkIGEgcGF5bWVudCBtZXRob2QgSURcbiAgICovXG4gIHNldFBheW1lbnRNZXRob2RBc0RlZmF1bHQodXNlcklkOiBzdHJpbmcsIHBheW1lbnRNZXRob2RJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kKHtcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIHBheW1lbnRNZXRob2RJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSBwYXltZW50IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIGEgdXNlciBJRFxuICAgKiBAcGFyYW0gcGF5bWVudE1ldGhvZElkIGEgcGF5bWVudCBtZXRob2QgSURcbiAgICovXG4gIGRlbGV0ZVBheW1lbnRNZXRob2QodXNlcklkOiBzdHJpbmcsIHBheW1lbnRNZXRob2RJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuRGVsZXRlVXNlclBheW1lbnRNZXRob2Qoe1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcGF5bWVudE1ldGhvZElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbiBvcmRlciBsaXN0XG4gICAqIEBwYXJhbSB1c2VySWQgYSB1c2VyIElEXG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlIGN1cnJlbnQgcGFnZVxuICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAqL1xuICBsb2FkT3JkZXJMaXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5Mb2FkVXNlck9yZGVycyh7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgc29ydDogc29ydCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdXNlcidzIGFkZHJlc3Nlc1xuICAgKiBAcGFyYW0gdXNlcklkIGEgdXNlciBJRFxuICAgKi9cbiAgbG9hZEFkZHJlc3Nlcyh1c2VySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkVXNlckFkZHJlc3Nlcyh1c2VySWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHVzZXIgYWRkcmVzc1xuICAgKiBAcGFyYW0gdXNlcklkIGEgdXNlciBJRFxuICAgKiBAcGFyYW0gYWRkcmVzcyBhIHVzZXIgYWRkcmVzc1xuICAgKi9cbiAgYWRkVXNlckFkZHJlc3ModXNlcklkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5BZGRVc2VyQWRkcmVzcyh7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXNlciBhZGRyZXNzIGFzIGRlZmF1bHRcbiAgICogQHBhcmFtIHVzZXJJZCBhIHVzZXIgSURcbiAgICogQHBhcmFtIGFkZHJlc3NJZCBhIHVzZXIgYWRkcmVzcyBJRFxuICAgKi9cbiAgc2V0QWRkcmVzc0FzRGVmYXVsdCh1c2VySWQ6IHN0cmluZywgYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5VcGRhdGVVc2VyQWRkcmVzcyh7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBhZGRyZXNzSWQ6IGFkZHJlc3NJZCxcbiAgICAgICAgYWRkcmVzczogeyBkZWZhdWx0QWRkcmVzczogdHJ1ZSB9LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgZXhpc3RpbmcgdXNlciBhZGRyZXNzXG4gICAqIEBwYXJhbSB1c2VySWQgYSB1c2VyIElEXG4gICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICogQHBhcmFtIGFkZHJlc3MgYSB1c2VyIGFkZHJlc3NcbiAgICovXG4gIHVwZGF0ZVVzZXJBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLlVwZGF0ZVVzZXJBZGRyZXNzKHtcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIGFkZHJlc3NJZDogYWRkcmVzc0lkLFxuICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgZXhpc3RpbmcgdXNlciBhZGRyZXNzXG4gICAqIEBwYXJhbSB1c2VySWQgYSB1c2VyIElEXG4gICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICovXG4gIGRlbGV0ZVVzZXJBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkRlbGV0ZVVzZXJBZGRyZXNzKHtcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIGFkZHJlc3NJZDogYWRkcmVzc0lkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWRkcmVzc2VzXG4gICAqL1xuICBnZXRBZGRyZXNzZXMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0QWRkcmVzc2VzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgYWRkcmVzc2VzXG4gICAqL1xuICBnZXRBZGRyZXNzZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRBZGRyZXNzZXNMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aXRsZXNcbiAgICovXG4gIGdldFRpdGxlcygpOiBPYnNlcnZhYmxlPFRpdGxlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0QWxsVGl0bGVzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRpdGxlc1xuICAgKi9cbiAgbG9hZFRpdGxlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFRpdGxlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgZGVsaXZlcnkgY291bnRyaWVzXG4gICAqL1xuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWREZWxpdmVyeUNvdW50cmllcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBkZWxpdmVyeSBjb3VudHJpZXNcbiAgICovXG4gIGdldERlbGl2ZXJ5Q291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldEFsbERlbGl2ZXJ5Q291bnRyaWVzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNvdW50cnkgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGBpc29jb2RlYFxuICAgKiBAcGFyYW0gaXNvY29kZSBhbiBpc29jb2RlIGZvciBhIGNvdW50cnlcbiAgICovXG4gIGdldENvdW50cnkoaXNvY29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb3VudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmNvdW50cnlTZWxlY3RvckZhY3RvcnkoaXNvY29kZSkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgcmVnaW9ucyBmb3Igc3BlY2lmaWVkIGNvdW50cnkgYnkgYGNvdW50cnlJc29Db2RlYFxuICAgKiBAcGFyYW0gY291bnRyeUlzb0NvZGVcbiAgICovXG4gIGxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCByZWdpb25zXG4gICAqL1xuICBnZXRSZWdpb25zKCk6IE9ic2VydmFibGU8UmVnaW9uW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0QWxsUmVnaW9ucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGJpbGxpbmcgY291bnRyaWVzXG4gICAqL1xuICBnZXRBbGxCaWxsaW5nQ291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldEFsbEJpbGxpbmdDb3VudHJpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYmlsbGluZyBjb3VudHJpZXNcbiAgICovXG4gIGxvYWRCaWxsaW5nQ291bnRyaWVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkQmlsbGluZ0NvdW50cmllcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbmluZyBvcmRlciBsaXN0XG4gICAqL1xuICBjbGVhck9yZGVyTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuQ2xlYXJVc2VyT3JkZXJzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHVzZXIncyBwYXNzd29yZCBpcyBzdWNjZXNzZnVsbHkgcmVzZXRcbiAgICovXG4gIGlzUGFzc3dvcmRSZXNldCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0UmVzZXRQYXNzd29yZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHVzZXIncyBkZXRhaWxzXG4gICAqIEBwYXJhbSB1c2VyRGV0YWlscyB0byBiZSB1cGRhdGVkXG4gICAqL1xuICB1cGRhdGVQZXJzb25hbERldGFpbHModXNlcm5hbWU6IHN0cmluZywgdXNlckRldGFpbHM6IFVzZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5VcGRhdGVVc2VyRGV0YWlscyh7IHVzZXJuYW1lLCB1c2VyRGV0YWlscyB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBwZXJzb25hbCBkZXRhaWxzIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBwZXJzb25hbCBkZXRhaWxzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldFVwZGF0ZVBlcnNvbmFsRGV0YWlsc1Jlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBwZXJzb25hbCBkZXRhaWxzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSB1cGRhdGUgdXNlciBkZXRhaWxzIHByb2Nlc3Npbmcgc3RhdGVcbiAgICovXG4gIHJlc2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUHJvY2Vzc2luZ1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5SZXNldFVwZGF0ZVVzZXJEZXRhaWxzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IG5ldyBwYXNzd29yZC4gIFBhcnQgb2YgdGhlIGZvcmdvdCBwYXNzd29yZCBmbG93LlxuICAgKiBAcGFyYW0gdG9rZW5cbiAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAqL1xuICByZXNldFBhc3N3b3JkKHRva2VuOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVzZXRQYXNzd29yZCh7IHRva2VuLCBwYXNzd29yZCB9KSk7XG4gIH1cblxuICAvKlxuICAgKiBSZXF1ZXN0IGFuIGVtYWlsIHRvIHJlc2V0IGEgZm9yZ290dGVuIHBhc3N3b3JkLlxuICAgKi9cbiAgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodXNlckVtYWlsQWRkcmVzczogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3QodXNlckVtYWlsQWRkcmVzcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHVzZXIncyBlbWFpbFxuICAgKiBAcGFyYW0gdWlkIHRvIGJlIHVwZGF0ZWRcbiAgICovXG4gIHVwZGF0ZUVtYWlsKHVpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBuZXdVaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLlVwZGF0ZUVtYWlsQWN0aW9uKHsgdWlkLCBwYXNzd29yZCwgbmV3VWlkIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIGVtYWlsIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlRW1haWxSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFVQREFURV9FTUFJTF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgZW1haWwgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlRW1haWxSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBlbWFpbCBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFVwZGF0ZUVtYWlsUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHVwZGF0ZSB1c2VyJ3MgZW1haWwgcHJvY2Vzc2luZyBzdGF0ZVxuICAgKi9cbiAgcmVzZXRVcGRhdGVFbWFpbFJlc3VsdFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5SZXNldFVwZGF0ZUVtYWlsQWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBhc3N3b3JkIGZvciBhbiBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICogQHBhcmFtIHVzZXJJZCB0aGUgdXNlciBpZCBmb3Igd2hpY2ggdGhlIHBhc3N3b3JkIHdpbGwgYmUgdXBkYXRlZFxuICAgKiBAcGFyYW0gb2xkUGFzc3dvcmQgdGhlIGN1cnJlbnQgcGFzc3dvcmQgdGhhdCB3aWxsIGJlIGNoYW5nZWRcbiAgICogQHBhcmFtIG5ld1Bhc3N3b3JkIHRoZSBuZXcgcGFzc3dvcmRcbiAgICovXG4gIHVwZGF0ZVBhc3N3b3JkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9sZFBhc3N3b3JkOiBzdHJpbmcsXG4gICAgbmV3UGFzc3dvcmQ6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5VcGRhdGVQYXNzd29yZCh7IHVzZXJJZCwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgcGFzc3dvcmQgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRVcGRhdGVQYXNzd29yZFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoZnJvbVN0b3JlLlVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSBwYXNzd29yZCBmYWlsdXJlIG91dGNvbWUuXG4gICAqL1xuICBnZXRVcGRhdGVQYXNzd29yZFJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShmcm9tU3RvcmUuVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHBhc3N3b3JkIHByb2Nlc3Mgc3VjY2VzcyBvdXRjb21lLlxuICAgKi9cbiAgZ2V0VXBkYXRlUGFzc3dvcmRSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KGZyb21TdG9yZS5VUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHVwZGF0ZSBwYXNzd29yZCBwcm9jZXNzIHN0YXRlLiBUaGUgc3RhdGUgbmVlZHMgdG8gYmUgcmVzZXQgYWZ0ZXIgdGhlIHByb2Nlc3NcbiAgICogY29uY2x1ZGVzLCByZWdhcmRsZXNzIGlmIGl0J3MgYSBzdWNjZXNzIG9yIGFuIGVycm9yXG4gICAqL1xuICByZXNldFVwZGF0ZVBhc3N3b3JkUHJvY2Vzc1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5VcGRhdGVQYXNzd29yZFJlc2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbGwgY29uc2VudHNcbiAgICogQHBhcmFtIHVzZXJJZCB1c2VyIElEIGZvciB3aGljaCB0byByZXRyaWV2ZSBjb25zZW50c1xuICAgKi9cbiAgbG9hZENvbnNlbnRzKHVzZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRVc2VyQ29uc2VudHModXNlcklkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgY29uc2VudHNcbiAgICovXG4gIGdldENvbnNlbnRzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRDb25zZW50c1ZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29uc2VudHMgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRDb25zZW50c1Jlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldENvbnNlbnRzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRDb25zZW50c1N1Y2Nlc3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zZW50cyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRDb25zZW50c1Jlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRDb25zZW50c0Vycm9yKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBwcm9jZXNzaW5nIHN0YXRlIGZvciBjb25zZW50IHJldHJpZXZhbFxuICAgKi9cbiAgcmVzZXRDb25zZW50c1Byb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVzZXRMb2FkVXNlckNvbnNlbnRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmUgY29uc2VudCBmb3Igc3BlY2lmaWVkIGNvbnNlbnQgdGVtcGxhdGUgSUQgYW5kIHZlcnNpb24uXG4gICAqIEBwYXJhbSB1c2VySWQgYW5kIElEIG9mIGEgdXNlciBnaXZpbmcgdGhlIGNvbnNlbnRcbiAgICogQHBhcmFtIGNvbnNlbnRUZW1wbGF0ZUlkIGEgdGVtcGxhdGUgSUQgZm9yIHdoaWNoIHRvIGdpdmUgYSBjb25zZW50XG4gICAqIEBwYXJhbSBjb25zZW50VGVtcGxhdGVWZXJzaW9uIGEgdGVtcGxhdGUgdmVyc2lvbiBmb3Igd2hpY2ggdG8gZ2l2ZSBhIGNvbnNlbnRcbiAgICovXG4gIGdpdmVDb25zZW50KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNvbnNlbnRUZW1wbGF0ZUlkOiBzdHJpbmcsXG4gICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkdpdmVVc2VyQ29uc2VudCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY29uc2VudFRlbXBsYXRlSWQsXG4gICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0R2l2ZUNvbnNlbnRSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZW50cyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZmxhZ3NcbiAgICovXG4gIHJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5SZXNldEdpdmVVc2VyQ29uc2VudFByb2Nlc3MoKSk7XG4gIH1cblxuICAvKipcbiAgICogV2l0aGRyYXcgY29uc2VudCBmb3IgdGhlIGdpdmVuIGBjb25zZW50Q29kZWBcbiAgICogQHBhcmFtIHVzZXJJZCBhIHVzZXIgSUQgZm9yIHdoaWNoIHRvIHdpdGhkcmF3IHRoZSBjb25zZW50XG4gICAqIEBwYXJhbSBjb25zZW50Q29kZSBmb3Igd2hpY2ggdG8gd2l0aGRyYXcgdGhlIGNvbnNlbnRcbiAgICovXG4gIHdpdGhkcmF3Q29uc2VudCh1c2VySWQ6IHN0cmluZywgY29uc2VudENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLldpdGhkcmF3VXNlckNvbnNlbnQoeyB1c2VySWQsIGNvbnNlbnRDb2RlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aXRoZHJhdyBjb25zZW50IHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aXRoZHJhdyBjb25zZW50IHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aXRoZHJhdyBjb25zZW50IHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHByb2Nlc3MgZmxhZ3MgZm9yIHdpdGhkcmF3IGNvbnNlbnRcbiAgICovXG4gIHJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVzZXRXaXRoZHJhd1VzZXJDb25zZW50UHJvY2VzcygpKTtcbiAgfVxufVxuIl19