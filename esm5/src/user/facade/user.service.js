/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { USERID_CURRENT } from '../../occ/utils/occ-constants';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import * as fromStore from '../store/index';
import { GIVE_CONSENT_PROCESS_ID, UPDATE_EMAIL_PROCESS_ID, UPDATE_USER_DETAILS_PROCESS_ID, WITHDRAW_CONSENT_PROCESS_ID, } from '../store/user-state';
var UserService = /** @class */ (function () {
    function UserService(store) {
        this.store = store;
    }
    /**
     * Returns a user
     */
    /**
     * Returns a user
     * @return {?}
     */
    UserService.prototype.get = /**
     * Returns a user
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getDetails));
    };
    /**
     * Loads the user's details
     */
    /**
     * Loads the user's details
     * @param {?} userId
     * @return {?}
     */
    UserService.prototype.load = /**
     * Loads the user's details
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        this.store.dispatch(new fromStore.LoadUserDetails(userId));
    };
    /**
     * Register a new user
     *
     * @param submitFormData as UserRegisterFormData
     */
    /**
     * Register a new user
     *
     * @param {?} userRegisterFormData
     * @return {?}
     */
    UserService.prototype.register = /**
     * Register a new user
     *
     * @param {?} userRegisterFormData
     * @return {?}
     */
    function (userRegisterFormData) {
        this.store.dispatch(new fromStore.RegisterUser(userRegisterFormData));
    };
    /**
     * Remove user account, that's also called close user's account
     */
    /**
     * Remove user account, that's also called close user's account
     * @return {?}
     */
    UserService.prototype.remove = /**
     * Remove user account, that's also called close user's account
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.RemoveUser(USERID_CURRENT));
    };
    /**
     * Returns the remove user loading flag
     */
    /**
     * Returns the remove user loading flag
     * @return {?}
     */
    UserService.prototype.getRemoveUserResultLoading = /**
     * Returns the remove user loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(fromStore.REMOVE_USER_PROCESS_ID)));
    };
    /**
     * Returns the remove user failure outcome.
     */
    /**
     * Returns the remove user failure outcome.
     * @return {?}
     */
    UserService.prototype.getRemoveUserResultError = /**
     * Returns the remove user failure outcome.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(fromStore.REMOVE_USER_PROCESS_ID)));
    };
    /**
     * Returns the remove user process success outcome.
     */
    /**
     * Returns the remove user process success outcome.
     * @return {?}
     */
    UserService.prototype.getRemoveUserResultSuccess = /**
     * Returns the remove user process success outcome.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(fromStore.REMOVE_USER_PROCESS_ID)));
    };
    /**
     * Resets the remove user process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     */
    /**
     * Resets the remove user process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     * @return {?}
     */
    UserService.prototype.resetRemoveUserProcessState = /**
     * Resets the remove user process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.RemoveUserReset());
    };
    /**
     * Returns an order's detail
     */
    /**
     * Returns an order's detail
     * @return {?}
     */
    UserService.prototype.getOrderDetails = /**
     * Returns an order's detail
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getOrderDetails));
    };
    /**
     * Retrieves order's details
     *
     * @param userId a user's ID
     * @param orderCode an order code
     */
    /**
     * Retrieves order's details
     *
     * @param {?} userId a user's ID
     * @param {?} orderCode an order code
     * @return {?}
     */
    UserService.prototype.loadOrderDetails = /**
     * Retrieves order's details
     *
     * @param {?} userId a user's ID
     * @param {?} orderCode an order code
     * @return {?}
     */
    function (userId, orderCode) {
        this.store.dispatch(new fromStore.LoadOrderDetails({
            userId: userId,
            orderCode: orderCode,
        }));
    };
    /**
     * Clears order's details
     */
    /**
     * Clears order's details
     * @return {?}
     */
    UserService.prototype.clearOrderDetails = /**
     * Clears order's details
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.ClearOrderDetails());
    };
    /**
     * Returns order history list
     */
    /**
     * Returns order history list
     * @param {?} userId
     * @param {?} pageSize
     * @return {?}
     */
    UserService.prototype.getOrderHistoryList = /**
     * Returns order history list
     * @param {?} userId
     * @param {?} pageSize
     * @return {?}
     */
    function (userId, pageSize) {
        var _this = this;
        return this.store.pipe(select(fromStore.getOrdersState), tap(function (orderListState) {
            /** @type {?} */
            var attemptedLoad = orderListState.loading ||
                orderListState.success ||
                orderListState.error;
            if (!attemptedLoad && !!userId) {
                _this.loadOrderList(userId, pageSize);
            }
        }), map(function (orderListState) { return orderListState.value; }));
    };
    /**
     * Returns a loaded flag for order history list
     */
    /**
     * Returns a loaded flag for order history list
     * @return {?}
     */
    UserService.prototype.getOrderHistoryListLoaded = /**
     * Returns a loaded flag for order history list
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getOrdersLoaded));
    };
    /**
     * Loads all user's payment methods.
     * @param userId a user ID
     */
    /**
     * Loads all user's payment methods.
     * @param {?} userId a user ID
     * @return {?}
     */
    UserService.prototype.loadPaymentMethods = /**
     * Loads all user's payment methods.
     * @param {?} userId a user ID
     * @return {?}
     */
    function (userId) {
        this.store.dispatch(new fromStore.LoadUserPaymentMethods(userId));
    };
    /**
     * Returns all user's payment methods
     */
    /**
     * Returns all user's payment methods
     * @return {?}
     */
    UserService.prototype.getPaymentMethods = /**
     * Returns all user's payment methods
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getPaymentMethods));
    };
    /**
     * Returns a loading flag for payment methods
     */
    /**
     * Returns a loading flag for payment methods
     * @return {?}
     */
    UserService.prototype.getPaymentMethodsLoading = /**
     * Returns a loading flag for payment methods
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getPaymentMethodsLoading));
    };
    /**
     * Sets the payment as a default one
     * @param userId a user ID
     * @param paymentMethodId a payment method ID
     */
    /**
     * Sets the payment as a default one
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    UserService.prototype.setPaymentMethodAsDefault = /**
     * Sets the payment as a default one
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    function (userId, paymentMethodId) {
        this.store.dispatch(new fromStore.SetDefaultUserPaymentMethod({
            userId: userId,
            paymentMethodId: paymentMethodId,
        }));
    };
    /**
     * Deletes the payment method
     *
     * @param userId a user ID
     * @param paymentMethodId a payment method ID
     */
    /**
     * Deletes the payment method
     *
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    UserService.prototype.deletePaymentMethod = /**
     * Deletes the payment method
     *
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    function (userId, paymentMethodId) {
        this.store.dispatch(new fromStore.DeleteUserPaymentMethod({
            userId: userId,
            paymentMethodId: paymentMethodId,
        }));
    };
    /**
     * Retrieves an order list
     * @param userId a user ID
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    /**
     * Retrieves an order list
     * @param {?} userId a user ID
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    UserService.prototype.loadOrderList = /**
     * Retrieves an order list
     * @param {?} userId a user ID
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    function (userId, pageSize, currentPage, sort) {
        this.store.dispatch(new fromStore.LoadUserOrders({
            userId: userId,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort,
        }));
    };
    /**
     * Retrieves user's addresses
     * @param userId a user ID
     */
    /**
     * Retrieves user's addresses
     * @param {?} userId a user ID
     * @return {?}
     */
    UserService.prototype.loadAddresses = /**
     * Retrieves user's addresses
     * @param {?} userId a user ID
     * @return {?}
     */
    function (userId) {
        this.store.dispatch(new fromStore.LoadUserAddresses(userId));
    };
    /**
     * Adds user address
     * @param userId a user ID
     * @param address a user address
     */
    /**
     * Adds user address
     * @param {?} userId a user ID
     * @param {?} address a user address
     * @return {?}
     */
    UserService.prototype.addUserAddress = /**
     * Adds user address
     * @param {?} userId a user ID
     * @param {?} address a user address
     * @return {?}
     */
    function (userId, address) {
        this.store.dispatch(new fromStore.AddUserAddress({
            userId: userId,
            address: address,
        }));
    };
    /**
     * Sets user address as default
     * @param userId a user ID
     * @param addressId a user address ID
     */
    /**
     * Sets user address as default
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    UserService.prototype.setAddressAsDefault = /**
     * Sets user address as default
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    function (userId, addressId) {
        this.store.dispatch(new fromStore.UpdateUserAddress({
            userId: userId,
            addressId: addressId,
            address: { defaultAddress: true },
        }));
    };
    /**
     * Updates existing user address
     * @param userId a user ID
     * @param addressId a user address ID
     * @param address a user address
     */
    /**
     * Updates existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @param {?} address a user address
     * @return {?}
     */
    UserService.prototype.updateUserAddress = /**
     * Updates existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @param {?} address a user address
     * @return {?}
     */
    function (userId, addressId, address) {
        this.store.dispatch(new fromStore.UpdateUserAddress({
            userId: userId,
            addressId: addressId,
            address: address,
        }));
    };
    /**
     * Deletes existing user address
     * @param userId a user ID
     * @param addressId a user address ID
     */
    /**
     * Deletes existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    UserService.prototype.deleteUserAddress = /**
     * Deletes existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    function (userId, addressId) {
        this.store.dispatch(new fromStore.DeleteUserAddress({
            userId: userId,
            addressId: addressId,
        }));
    };
    /**
     * Returns addresses
     */
    /**
     * Returns addresses
     * @return {?}
     */
    UserService.prototype.getAddresses = /**
     * Returns addresses
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getAddresses));
    };
    /**
     * Returns a loading flag for addresses
     */
    /**
     * Returns a loading flag for addresses
     * @return {?}
     */
    UserService.prototype.getAddressesLoading = /**
     * Returns a loading flag for addresses
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getAddressesLoading));
    };
    /**
     * Returns titles
     */
    /**
     * Returns titles
     * @return {?}
     */
    UserService.prototype.getTitles = /**
     * Returns titles
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getAllTitles));
    };
    /**
     * Retrieves titles
     */
    /**
     * Retrieves titles
     * @return {?}
     */
    UserService.prototype.loadTitles = /**
     * Retrieves titles
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.LoadTitles());
    };
    /**
     * Retrieves delivery countries
     */
    /**
     * Retrieves delivery countries
     * @return {?}
     */
    UserService.prototype.loadDeliveryCountries = /**
     * Retrieves delivery countries
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.LoadDeliveryCountries());
    };
    /**
     * Returns all delivery countries
     */
    /**
     * Returns all delivery countries
     * @return {?}
     */
    UserService.prototype.getDeliveryCountries = /**
     * Returns all delivery countries
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getAllDeliveryCountries));
    };
    /**
     * Returns a country based on the provided `isocode`
     * @param isocode an isocode for a country
     */
    /**
     * Returns a country based on the provided `isocode`
     * @param {?} isocode an isocode for a country
     * @return {?}
     */
    UserService.prototype.getCountry = /**
     * Returns a country based on the provided `isocode`
     * @param {?} isocode an isocode for a country
     * @return {?}
     */
    function (isocode) {
        return this.store.pipe(select(fromStore.countrySelectorFactory(isocode)));
    };
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param countryIsoCode
     */
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param {?} countryIsoCode
     * @return {?}
     */
    UserService.prototype.loadRegions = /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        this.store.dispatch(new fromStore.LoadRegions(countryIsoCode));
    };
    /**
     * Returns all regions
     */
    /**
     * Returns all regions
     * @return {?}
     */
    UserService.prototype.getRegions = /**
     * Returns all regions
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getAllRegions));
    };
    /**
     * Returns all billing countries
     */
    /**
     * Returns all billing countries
     * @return {?}
     */
    UserService.prototype.getAllBillingCountries = /**
     * Returns all billing countries
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getAllBillingCountries));
    };
    /**
     * Retrieves billing countries
     */
    /**
     * Retrieves billing countries
     * @return {?}
     */
    UserService.prototype.loadBillingCountries = /**
     * Retrieves billing countries
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.LoadBillingCountries());
    };
    /**
     * Cleaning order list
     */
    /**
     * Cleaning order list
     * @return {?}
     */
    UserService.prototype.clearOrderList = /**
     * Cleaning order list
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.ClearUserOrders());
    };
    /**
     * Return whether user's password is successfully reset
     */
    /**
     * Return whether user's password is successfully reset
     * @return {?}
     */
    UserService.prototype.isPasswordReset = /**
     * Return whether user's password is successfully reset
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getResetPassword));
    };
    /**
     * Updates the user's details
     * @param userDetails to be updated
     */
    /**
     * Updates the user's details
     * @param {?} userDetails to be updated
     * @return {?}
     */
    UserService.prototype.updatePersonalDetails = /**
     * Updates the user's details
     * @param {?} userDetails to be updated
     * @return {?}
     */
    function (userDetails) {
        this.store.dispatch(new fromStore.UpdateUserDetails({ username: USERID_CURRENT, userDetails: userDetails }));
    };
    /**
     * Returns the update user's personal details loading flag
     */
    /**
     * Returns the update user's personal details loading flag
     * @return {?}
     */
    UserService.prototype.getUpdatePersonalDetailsResultLoading = /**
     * Returns the update user's personal details loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    };
    /**
     * Returns the update user's personal details error flag
     */
    /**
     * Returns the update user's personal details error flag
     * @return {?}
     */
    UserService.prototype.getUpdatePersonalDetailsResultError = /**
     * Returns the update user's personal details error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    };
    /**
     * Returns the update user's personal details success flag
     */
    /**
     * Returns the update user's personal details success flag
     * @return {?}
     */
    UserService.prototype.getUpdatePersonalDetailsResultSuccess = /**
     * Returns the update user's personal details success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_USER_DETAILS_PROCESS_ID)));
    };
    /**
     * Resets the update user details processing state
     */
    /**
     * Resets the update user details processing state
     * @return {?}
     */
    UserService.prototype.resetUpdatePersonalDetailsProcessingState = /**
     * Resets the update user details processing state
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.ResetUpdateUserDetails());
    };
    /**
     * Reset new password.  Part of the forgot password flow.
     * @param token
     * @param password
     */
    /**
     * Reset new password.  Part of the forgot password flow.
     * @param {?} token
     * @param {?} password
     * @return {?}
     */
    UserService.prototype.resetPassword = /**
     * Reset new password.  Part of the forgot password flow.
     * @param {?} token
     * @param {?} password
     * @return {?}
     */
    function (token, password) {
        this.store.dispatch(new fromStore.ResetPassword({ token: token, password: password }));
    };
    /*
     * Request an email to reset a forgotten password.
     */
    /*
       * Request an email to reset a forgotten password.
       */
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    UserService.prototype.requestForgotPasswordEmail = /*
       * Request an email to reset a forgotten password.
       */
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    function (userEmailAddress) {
        this.store.dispatch(new fromStore.ForgotPasswordEmailRequest(userEmailAddress));
    };
    /**
     * Updates the user's email
     * @param uid to be updated
     */
    /**
     * Updates the user's email
     * @param {?} uid to be updated
     * @param {?} password
     * @param {?} newUid
     * @return {?}
     */
    UserService.prototype.updateEmail = /**
     * Updates the user's email
     * @param {?} uid to be updated
     * @param {?} password
     * @param {?} newUid
     * @return {?}
     */
    function (uid, password, newUid) {
        this.store.dispatch(new fromStore.UpdateEmailAction({ uid: uid, password: password, newUid: newUid }));
    };
    /**
     * Returns the update user's email success flag
     */
    /**
     * Returns the update user's email success flag
     * @return {?}
     */
    UserService.prototype.getUpdateEmailResultSuccess = /**
     * Returns the update user's email success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_EMAIL_PROCESS_ID)));
    };
    /**
     * Returns the update user's email error flag
     */
    /**
     * Returns the update user's email error flag
     * @return {?}
     */
    UserService.prototype.getUpdateEmailResultError = /**
     * Returns the update user's email error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_EMAIL_PROCESS_ID)));
    };
    /**
     * Returns the update user's email loading flag
     */
    /**
     * Returns the update user's email loading flag
     * @return {?}
     */
    UserService.prototype.getUpdateEmailResultLoading = /**
     * Returns the update user's email loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_EMAIL_PROCESS_ID)));
    };
    /**
     * Resets the update user's email processing state
     */
    /**
     * Resets the update user's email processing state
     * @return {?}
     */
    UserService.prototype.resetUpdateEmailResultState = /**
     * Resets the update user's email processing state
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.ResetUpdateEmailAction());
    };
    /**
     * Updates the password for an authenticated user
     * @param userId the user id for which the password will be updated
     * @param oldPassword the current password that will be changed
     * @param newPassword the new password
     */
    /**
     * Updates the password for an authenticated user
     * @param {?} oldPassword the current password that will be changed
     * @param {?} newPassword the new password
     * @return {?}
     */
    UserService.prototype.updatePassword = /**
     * Updates the password for an authenticated user
     * @param {?} oldPassword the current password that will be changed
     * @param {?} newPassword the new password
     * @return {?}
     */
    function (oldPassword, newPassword) {
        this.store.dispatch(new fromStore.UpdatePassword({
            userId: USERID_CURRENT,
            oldPassword: oldPassword,
            newPassword: newPassword,
        }));
    };
    /**
     * Returns the update password loading flag
     */
    /**
     * Returns the update password loading flag
     * @return {?}
     */
    UserService.prototype.getUpdatePasswordResultLoading = /**
     * Returns the update password loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(fromStore.UPDATE_PASSWORD_PROCESS_ID)));
    };
    /**
     * Returns the update password failure outcome.
     */
    /**
     * Returns the update password failure outcome.
     * @return {?}
     */
    UserService.prototype.getUpdatePasswordResultError = /**
     * Returns the update password failure outcome.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(fromStore.UPDATE_PASSWORD_PROCESS_ID)));
    };
    /**
     * Returns the update password process success outcome.
     */
    /**
     * Returns the update password process success outcome.
     * @return {?}
     */
    UserService.prototype.getUpdatePasswordResultSuccess = /**
     * Returns the update password process success outcome.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(fromStore.UPDATE_PASSWORD_PROCESS_ID)));
    };
    /**
     * Resets the update password process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     */
    /**
     * Resets the update password process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     * @return {?}
     */
    UserService.prototype.resetUpdatePasswordProcessState = /**
     * Resets the update password process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.UpdatePasswordReset());
    };
    /**
     * Retrieves all consents
     * @param userId user ID for which to retrieve consents
     */
    /**
     * Retrieves all consents
     * @param {?} userId user ID for which to retrieve consents
     * @return {?}
     */
    UserService.prototype.loadConsents = /**
     * Retrieves all consents
     * @param {?} userId user ID for which to retrieve consents
     * @return {?}
     */
    function (userId) {
        this.store.dispatch(new fromStore.LoadUserConsents(userId));
    };
    /**
     * Returns all consents
     */
    /**
     * Returns all consents
     * @return {?}
     */
    UserService.prototype.getConsents = /**
     * Returns all consents
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getConsentsValue));
    };
    /**
     * Returns the consents loading flag
     */
    /**
     * Returns the consents loading flag
     * @return {?}
     */
    UserService.prototype.getConsentsResultLoading = /**
     * Returns the consents loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getConsentsLoading));
    };
    /**
     * Returns the consents success flag
     */
    /**
     * Returns the consents success flag
     * @return {?}
     */
    UserService.prototype.getConsentsResultSuccess = /**
     * Returns the consents success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getConsentsSuccess));
    };
    /**
     * Returns the consents error flag
     */
    /**
     * Returns the consents error flag
     * @return {?}
     */
    UserService.prototype.getConsentsResultError = /**
     * Returns the consents error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getConsentsError));
    };
    /**
     * Resets the processing state for consent retrieval
     */
    /**
     * Resets the processing state for consent retrieval
     * @return {?}
     */
    UserService.prototype.resetConsentsProcessState = /**
     * Resets the processing state for consent retrieval
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.ResetLoadUserConsents());
    };
    /**
     * Give consent for specified consent template ID and version.
     * @param userId and ID of a user giving the consent
     * @param consentTemplateId a template ID for which to give a consent
     * @param consentTemplateVersion a template version for which to give a consent
     */
    /**
     * Give consent for specified consent template ID and version.
     * @param {?} userId and ID of a user giving the consent
     * @param {?} consentTemplateId a template ID for which to give a consent
     * @param {?} consentTemplateVersion a template version for which to give a consent
     * @return {?}
     */
    UserService.prototype.giveConsent = /**
     * Give consent for specified consent template ID and version.
     * @param {?} userId and ID of a user giving the consent
     * @param {?} consentTemplateId a template ID for which to give a consent
     * @param {?} consentTemplateVersion a template version for which to give a consent
     * @return {?}
     */
    function (userId, consentTemplateId, consentTemplateVersion) {
        this.store.dispatch(new fromStore.GiveUserConsent({
            userId: userId,
            consentTemplateId: consentTemplateId,
            consentTemplateVersion: consentTemplateVersion,
        }));
    };
    /**
     * Returns the give consent process loading flag
     */
    /**
     * Returns the give consent process loading flag
     * @return {?}
     */
    UserService.prototype.getGiveConsentResultLoading = /**
     * Returns the give consent process loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the give consent process success flag
     */
    /**
     * Returns the give consent process success flag
     * @return {?}
     */
    UserService.prototype.getGiveConsentResultSuccess = /**
     * Returns the give consent process success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the give consent process error flag
     */
    /**
     * Returns the give consent process error flag
     * @return {?}
     */
    UserService.prototype.getGiveConsentResultError = /**
     * Returns the give consent process error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Resents the give consent process flags
     */
    /**
     * Resents the give consent process flags
     * @return {?}
     */
    UserService.prototype.resetGiveConsentProcessState = /**
     * Resents the give consent process flags
     * @return {?}
     */
    function () {
        return this.store.dispatch(new fromStore.ResetGiveUserConsentProcess());
    };
    /**
     * Withdraw consent for the given `consentCode`
     * @param userId a user ID for which to withdraw the consent
     * @param consentCode for which to withdraw the consent
     */
    /**
     * Withdraw consent for the given `consentCode`
     * @param {?} userId a user ID for which to withdraw the consent
     * @param {?} consentCode for which to withdraw the consent
     * @return {?}
     */
    UserService.prototype.withdrawConsent = /**
     * Withdraw consent for the given `consentCode`
     * @param {?} userId a user ID for which to withdraw the consent
     * @param {?} consentCode for which to withdraw the consent
     * @return {?}
     */
    function (userId, consentCode) {
        this.store.dispatch(new fromStore.WithdrawUserConsent({ userId: userId, consentCode: consentCode }));
    };
    /**
     * Returns the withdraw consent process loading flag
     */
    /**
     * Returns the withdraw consent process loading flag
     * @return {?}
     */
    UserService.prototype.getWithdrawConsentResultLoading = /**
     * Returns the withdraw consent process loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the withdraw consent process success flag
     */
    /**
     * Returns the withdraw consent process success flag
     * @return {?}
     */
    UserService.prototype.getWithdrawConsentResultSuccess = /**
     * Returns the withdraw consent process success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the withdraw consent process error flag
     */
    /**
     * Returns the withdraw consent process error flag
     * @return {?}
     */
    UserService.prototype.getWithdrawConsentResultError = /**
     * Returns the withdraw consent process error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Resets the process flags for withdraw consent
     */
    /**
     * Resets the process flags for withdraw consent
     * @return {?}
     */
    UserService.prototype.resetWithdrawConsentProcessState = /**
     * Resets the process flags for withdraw consent
     * @return {?}
     */
    function () {
        return this.store.dispatch(new fromStore.ResetWithdrawUserConsentProcess());
    };
    UserService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return UserService;
}());
export { UserService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4Qix3QkFBd0IsR0FDekIsTUFBTSxpREFBaUQsQ0FBQztBQUN6RCxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLDhCQUE4QixFQUM5QiwyQkFBMkIsR0FDNUIsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QjtJQUVFLHFCQUNZLEtBRVQ7UUFGUyxVQUFLLEdBQUwsS0FBSyxDQUVkO0lBQ0EsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNILHlCQUFHOzs7O0lBQUg7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILDBCQUFJOzs7OztJQUFKLFVBQUssTUFBYztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILDhCQUFROzs7Ozs7SUFBUixVQUFTLG9CQUFn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Qyx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQzlELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gscURBQStCOzs7O0lBQS9CO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtREFBNkI7Ozs7SUFBN0I7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUM1RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHNEQUFnQzs7OztJQUFoQztRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7O2dCQXRwQkYsVUFBVTs7OztnQkF2Qk0sS0FBSzs7SUE4cUJ0QixrQkFBQztDQUFBLEFBdnBCRCxJQXVwQkM7U0F0cEJZLFdBQVc7Ozs7OztJQUVwQiw0QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFkZHJlc3MsIENvdW50cnksIFJlZ2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIsIFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgVVNFUklEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBmcm9tUHJvY2Vzc1N0b3JlIGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRQcm9jZXNzRXJyb3JGYWN0b3J5LFxuICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnksXG4gIGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7XG4gIEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lELFxuICBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCxcbiAgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lELFxuICBXSVRIRFJBV19DT05TRU5UX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFxuICAgICAgZnJvbVN0b3JlLlN0YXRlV2l0aFVzZXIgfCBmcm9tUHJvY2Vzc1N0b3JlLlN0YXRlV2l0aFByb2Nlc3M8dm9pZD5cbiAgICA+XG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhIHVzZXJcbiAgICovXG4gIGdldCgpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0RGV0YWlscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSB1c2VyJ3MgZGV0YWlsc1xuICAgKi9cbiAgbG9hZCh1c2VySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkVXNlckRldGFpbHModXNlcklkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBuZXcgdXNlclxuICAgKlxuICAgKiBAcGFyYW0gc3VibWl0Rm9ybURhdGEgYXMgVXNlclJlZ2lzdGVyRm9ybURhdGFcbiAgICovXG4gIHJlZ2lzdGVyKHVzZXJSZWdpc3RlckZvcm1EYXRhOiBVc2VyU2lnblVwKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlJlZ2lzdGVyVXNlcih1c2VyUmVnaXN0ZXJGb3JtRGF0YSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB1c2VyIGFjY291bnQsIHRoYXQncyBhbHNvIGNhbGxlZCBjbG9zZSB1c2VyJ3MgYWNjb3VudFxuICAgKi9cbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5SZW1vdmVVc2VyKFVTRVJJRF9DVVJSRU5UKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVtb3ZlIHVzZXIgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRSZW1vdmVVc2VyUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShmcm9tU3RvcmUuUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZW1vdmUgdXNlciBmYWlsdXJlIG91dGNvbWUuXG4gICAqL1xuICBnZXRSZW1vdmVVc2VyUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KGZyb21TdG9yZS5SRU1PVkVfVVNFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbW92ZSB1c2VyIHByb2Nlc3Mgc3VjY2VzcyBvdXRjb21lLlxuICAgKi9cbiAgZ2V0UmVtb3ZlVXNlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoZnJvbVN0b3JlLlJFTU9WRV9VU0VSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSByZW1vdmUgdXNlciBwcm9jZXNzIHN0YXRlLiBUaGUgc3RhdGUgbmVlZHMgdG8gYmUgcmVzZXQgYWZ0ZXIgdGhlIHByb2Nlc3NcbiAgICogY29uY2x1ZGVzLCByZWdhcmRsZXNzIGlmIGl0J3MgYSBzdWNjZXNzIG9yIGFuIGVycm9yXG4gICAqL1xuICByZXNldFJlbW92ZVVzZXJQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlJlbW92ZVVzZXJSZXNldCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9yZGVyJ3MgZGV0YWlsXG4gICAqL1xuICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRPcmRlckRldGFpbHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgb3JkZXIncyBkZXRhaWxzXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWQgYSB1c2VyJ3MgSURcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAqL1xuICBsb2FkT3JkZXJEZXRhaWxzKHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkxvYWRPcmRlckRldGFpbHMoe1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgb3JkZXJDb2RlOiBvcmRlckNvZGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIG9yZGVyJ3MgZGV0YWlsc1xuICAgKi9cbiAgY2xlYXJPcmRlckRldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkNsZWFyT3JkZXJEZXRhaWxzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb3JkZXIgaGlzdG9yeSBsaXN0XG4gICAqL1xuICBnZXRPcmRlckhpc3RvcnlMaXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplOiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0T3JkZXJzU3RhdGUpLFxuICAgICAgdGFwKG9yZGVyTGlzdFN0YXRlID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgb3JkZXJMaXN0U3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgIG9yZGVyTGlzdFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICBvcmRlckxpc3RTdGF0ZS5lcnJvcjtcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkICYmICEhdXNlcklkKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JkZXJMaXN0KHVzZXJJZCwgcGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcChvcmRlckxpc3RTdGF0ZSA9PiBvcmRlckxpc3RTdGF0ZS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkZWQgZmxhZyBmb3Igb3JkZXIgaGlzdG9yeSBsaXN0XG4gICAqL1xuICBnZXRPcmRlckhpc3RvcnlMaXN0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRPcmRlcnNMb2FkZWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhbGwgdXNlcidzIHBheW1lbnQgbWV0aG9kcy5cbiAgICogQHBhcmFtIHVzZXJJZCBhIHVzZXIgSURcbiAgICovXG4gIGxvYWRQYXltZW50TWV0aG9kcyh1c2VySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkVXNlclBheW1lbnRNZXRob2RzKHVzZXJJZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIHVzZXIncyBwYXltZW50IG1ldGhvZHNcbiAgICovXG4gIGdldFBheW1lbnRNZXRob2RzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRQYXltZW50TWV0aG9kcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIHBheW1lbnQgbWV0aG9kc1xuICAgKi9cbiAgZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwYXltZW50IGFzIGEgZGVmYXVsdCBvbmVcbiAgICogQHBhcmFtIHVzZXJJZCBhIHVzZXIgSURcbiAgICogQHBhcmFtIHBheW1lbnRNZXRob2RJZCBhIHBheW1lbnQgbWV0aG9kIElEXG4gICAqL1xuICBzZXRQYXltZW50TWV0aG9kQXNEZWZhdWx0KHVzZXJJZDogc3RyaW5nLCBwYXltZW50TWV0aG9kSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLlNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZCh7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBwYXltZW50TWV0aG9kSWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyB0aGUgcGF5bWVudCBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCBhIHVzZXIgSURcbiAgICogQHBhcmFtIHBheW1lbnRNZXRob2RJZCBhIHBheW1lbnQgbWV0aG9kIElEXG4gICAqL1xuICBkZWxldGVQYXltZW50TWV0aG9kKHVzZXJJZDogc3RyaW5nLCBwYXltZW50TWV0aG9kSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkRlbGV0ZVVzZXJQYXltZW50TWV0aG9kKHtcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIHBheW1lbnRNZXRob2RJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYW4gb3JkZXIgbGlzdFxuICAgKiBAcGFyYW0gdXNlcklkIGEgdXNlciBJRFxuICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgKi9cbiAgbG9hZE9yZGVyTGlzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuTG9hZFVzZXJPcmRlcnMoe1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAgIHNvcnQ6IHNvcnQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHVzZXIncyBhZGRyZXNzZXNcbiAgICogQHBhcmFtIHVzZXJJZCBhIHVzZXIgSURcbiAgICovXG4gIGxvYWRBZGRyZXNzZXModXNlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFVzZXJBZGRyZXNzZXModXNlcklkKSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB1c2VyIGFkZHJlc3NcbiAgICogQHBhcmFtIHVzZXJJZCBhIHVzZXIgSURcbiAgICogQHBhcmFtIGFkZHJlc3MgYSB1c2VyIGFkZHJlc3NcbiAgICovXG4gIGFkZFVzZXJBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuQWRkVXNlckFkZHJlc3Moe1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVzZXIgYWRkcmVzcyBhcyBkZWZhdWx0XG4gICAqIEBwYXJhbSB1c2VySWQgYSB1c2VyIElEXG4gICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICovXG4gIHNldEFkZHJlc3NBc0RlZmF1bHQodXNlcklkOiBzdHJpbmcsIGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuVXBkYXRlVXNlckFkZHJlc3Moe1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgYWRkcmVzc0lkOiBhZGRyZXNzSWQsXG4gICAgICAgIGFkZHJlc3M6IHsgZGVmYXVsdEFkZHJlc3M6IHRydWUgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGV4aXN0aW5nIHVzZXIgYWRkcmVzc1xuICAgKiBAcGFyYW0gdXNlcklkIGEgdXNlciBJRFxuICAgKiBAcGFyYW0gYWRkcmVzc0lkIGEgdXNlciBhZGRyZXNzIElEXG4gICAqIEBwYXJhbSBhZGRyZXNzIGEgdXNlciBhZGRyZXNzXG4gICAqL1xuICB1cGRhdGVVc2VyQWRkcmVzcyh1c2VySWQ6IHN0cmluZywgYWRkcmVzc0lkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5VcGRhdGVVc2VyQWRkcmVzcyh7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBhZGRyZXNzSWQ6IGFkZHJlc3NJZCxcbiAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGV4aXN0aW5nIHVzZXIgYWRkcmVzc1xuICAgKiBAcGFyYW0gdXNlcklkIGEgdXNlciBJRFxuICAgKiBAcGFyYW0gYWRkcmVzc0lkIGEgdXNlciBhZGRyZXNzIElEXG4gICAqL1xuICBkZWxldGVVc2VyQWRkcmVzcyh1c2VySWQ6IHN0cmluZywgYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5EZWxldGVVc2VyQWRkcmVzcyh7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBhZGRyZXNzSWQ6IGFkZHJlc3NJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFkZHJlc3Nlc1xuICAgKi9cbiAgZ2V0QWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldEFkZHJlc3NlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIGFkZHJlc3Nlc1xuICAgKi9cbiAgZ2V0QWRkcmVzc2VzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0QWRkcmVzc2VzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGl0bGVzXG4gICAqL1xuICBnZXRUaXRsZXMoKTogT2JzZXJ2YWJsZTxUaXRsZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldEFsbFRpdGxlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aXRsZXNcbiAgICovXG4gIGxvYWRUaXRsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRUaXRsZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGRlbGl2ZXJ5IGNvdW50cmllc1xuICAgKi9cbiAgbG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkRGVsaXZlcnlDb3VudHJpZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgZGVsaXZlcnkgY291bnRyaWVzXG4gICAqL1xuICBnZXREZWxpdmVyeUNvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRBbGxEZWxpdmVyeUNvdW50cmllcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjb3VudHJ5IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBgaXNvY29kZWBcbiAgICogQHBhcmFtIGlzb2NvZGUgYW4gaXNvY29kZSBmb3IgYSBjb3VudHJ5XG4gICAqL1xuICBnZXRDb3VudHJ5KGlzb2NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q291bnRyeT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5jb3VudHJ5U2VsZWN0b3JGYWN0b3J5KGlzb2NvZGUpKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHJlZ2lvbnMgZm9yIHNwZWNpZmllZCBjb3VudHJ5IGJ5IGBjb3VudHJ5SXNvQ29kZWBcbiAgICogQHBhcmFtIGNvdW50cnlJc29Db2RlXG4gICAqL1xuICBsb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgcmVnaW9uc1xuICAgKi9cbiAgZ2V0UmVnaW9ucygpOiBPYnNlcnZhYmxlPFJlZ2lvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldEFsbFJlZ2lvbnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBiaWxsaW5nIGNvdW50cmllc1xuICAgKi9cbiAgZ2V0QWxsQmlsbGluZ0NvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRBbGxCaWxsaW5nQ291bnRyaWVzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGJpbGxpbmcgY291bnRyaWVzXG4gICAqL1xuICBsb2FkQmlsbGluZ0NvdW50cmllcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZEJpbGxpbmdDb3VudHJpZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5pbmcgb3JkZXIgbGlzdFxuICAgKi9cbiAgY2xlYXJPcmRlckxpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkNsZWFyVXNlck9yZGVycygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB1c2VyJ3MgcGFzc3dvcmQgaXMgc3VjY2Vzc2Z1bGx5IHJlc2V0XG4gICAqL1xuICBpc1Bhc3N3b3JkUmVzZXQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFJlc2V0UGFzc3dvcmQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB1c2VyJ3MgZGV0YWlsc1xuICAgKiBAcGFyYW0gdXNlckRldGFpbHMgdG8gYmUgdXBkYXRlZFxuICAgKi9cbiAgdXBkYXRlUGVyc29uYWxEZXRhaWxzKHVzZXJEZXRhaWxzOiBVc2VyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuVXBkYXRlVXNlckRldGFpbHMoeyB1c2VybmFtZTogVVNFUklEX0NVUlJFTlQsIHVzZXJEZXRhaWxzIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIHBlcnNvbmFsIGRldGFpbHMgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRVcGRhdGVQZXJzb25hbERldGFpbHNSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIHBlcnNvbmFsIGRldGFpbHMgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIHBlcnNvbmFsIGRldGFpbHMgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRVcGRhdGVQZXJzb25hbERldGFpbHNSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHVwZGF0ZSB1c2VyIGRldGFpbHMgcHJvY2Vzc2luZyBzdGF0ZVxuICAgKi9cbiAgcmVzZXRVcGRhdGVQZXJzb25hbERldGFpbHNQcm9jZXNzaW5nU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlJlc2V0VXBkYXRlVXNlckRldGFpbHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgbmV3IHBhc3N3b3JkLiAgUGFydCBvZiB0aGUgZm9yZ290IHBhc3N3b3JkIGZsb3cuXG4gICAqIEBwYXJhbSB0b2tlblxuICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICovXG4gIHJlc2V0UGFzc3dvcmQodG9rZW46IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5SZXNldFBhc3N3b3JkKHsgdG9rZW4sIHBhc3N3b3JkIH0pKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJlcXVlc3QgYW4gZW1haWwgdG8gcmVzZXQgYSBmb3Jnb3R0ZW4gcGFzc3dvcmQuXG4gICAqL1xuICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5Gb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdCh1c2VyRW1haWxBZGRyZXNzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdXNlcidzIGVtYWlsXG4gICAqIEBwYXJhbSB1aWQgdG8gYmUgdXBkYXRlZFxuICAgKi9cbiAgdXBkYXRlRW1haWwodWlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG5ld1VpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuVXBkYXRlRW1haWxBY3Rpb24oeyB1aWQsIHBhc3N3b3JkLCBuZXdVaWQgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgZW1haWwgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRVcGRhdGVFbWFpbFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBlbWFpbCBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRVcGRhdGVFbWFpbFJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIGVtYWlsIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlRW1haWxSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFVQREFURV9FTUFJTF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgdXBkYXRlIHVzZXIncyBlbWFpbCBwcm9jZXNzaW5nIHN0YXRlXG4gICAqL1xuICByZXNldFVwZGF0ZUVtYWlsUmVzdWx0U3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlJlc2V0VXBkYXRlRW1haWxBY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcGFzc3dvcmQgZm9yIGFuIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgKiBAcGFyYW0gdXNlcklkIHRoZSB1c2VyIGlkIGZvciB3aGljaCB0aGUgcGFzc3dvcmQgd2lsbCBiZSB1cGRhdGVkXG4gICAqIEBwYXJhbSBvbGRQYXNzd29yZCB0aGUgY3VycmVudCBwYXNzd29yZCB0aGF0IHdpbGwgYmUgY2hhbmdlZFxuICAgKiBAcGFyYW0gbmV3UGFzc3dvcmQgdGhlIG5ldyBwYXNzd29yZFxuICAgKi9cbiAgdXBkYXRlUGFzc3dvcmQob2xkUGFzc3dvcmQ6IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLlVwZGF0ZVBhc3N3b3JkKHtcbiAgICAgICAgdXNlcklkOiBVU0VSSURfQ1VSUkVOVCxcbiAgICAgICAgb2xkUGFzc3dvcmQsXG4gICAgICAgIG5ld1Bhc3N3b3JkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSBwYXNzd29yZCBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFVwZGF0ZVBhc3N3b3JkUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShmcm9tU3RvcmUuVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHBhc3N3b3JkIGZhaWx1cmUgb3V0Y29tZS5cbiAgICovXG4gIGdldFVwZGF0ZVBhc3N3b3JkUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KGZyb21TdG9yZS5VUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgcGFzc3dvcmQgcHJvY2VzcyBzdWNjZXNzIG91dGNvbWUuXG4gICAqL1xuICBnZXRVcGRhdGVQYXNzd29yZFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoZnJvbVN0b3JlLlVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgdXBkYXRlIHBhc3N3b3JkIHByb2Nlc3Mgc3RhdGUuIFRoZSBzdGF0ZSBuZWVkcyB0byBiZSByZXNldCBhZnRlciB0aGUgcHJvY2Vzc1xuICAgKiBjb25jbHVkZXMsIHJlZ2FyZGxlc3MgaWYgaXQncyBhIHN1Y2Nlc3Mgb3IgYW4gZXJyb3JcbiAgICovXG4gIHJlc2V0VXBkYXRlUGFzc3dvcmRQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlVwZGF0ZVBhc3N3b3JkUmVzZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCBjb25zZW50c1xuICAgKiBAcGFyYW0gdXNlcklkIHVzZXIgSUQgZm9yIHdoaWNoIHRvIHJldHJpZXZlIGNvbnNlbnRzXG4gICAqL1xuICBsb2FkQ29uc2VudHModXNlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFVzZXJDb25zZW50cyh1c2VySWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBjb25zZW50c1xuICAgKi9cbiAgZ2V0Q29uc2VudHMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRDb25zZW50c1ZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29uc2VudHMgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRDb25zZW50c1Jlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldENvbnNlbnRzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRDb25zZW50c1N1Y2Nlc3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zZW50cyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRDb25zZW50c1Jlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRDb25zZW50c0Vycm9yKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBwcm9jZXNzaW5nIHN0YXRlIGZvciBjb25zZW50IHJldHJpZXZhbFxuICAgKi9cbiAgcmVzZXRDb25zZW50c1Byb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVzZXRMb2FkVXNlckNvbnNlbnRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmUgY29uc2VudCBmb3Igc3BlY2lmaWVkIGNvbnNlbnQgdGVtcGxhdGUgSUQgYW5kIHZlcnNpb24uXG4gICAqIEBwYXJhbSB1c2VySWQgYW5kIElEIG9mIGEgdXNlciBnaXZpbmcgdGhlIGNvbnNlbnRcbiAgICogQHBhcmFtIGNvbnNlbnRUZW1wbGF0ZUlkIGEgdGVtcGxhdGUgSUQgZm9yIHdoaWNoIHRvIGdpdmUgYSBjb25zZW50XG4gICAqIEBwYXJhbSBjb25zZW50VGVtcGxhdGVWZXJzaW9uIGEgdGVtcGxhdGUgdmVyc2lvbiBmb3Igd2hpY2ggdG8gZ2l2ZSBhIGNvbnNlbnRcbiAgICovXG4gIGdpdmVDb25zZW50KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNvbnNlbnRUZW1wbGF0ZUlkOiBzdHJpbmcsXG4gICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkdpdmVVc2VyQ29uc2VudCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY29uc2VudFRlbXBsYXRlSWQsXG4gICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0R2l2ZUNvbnNlbnRSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZW50cyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZmxhZ3NcbiAgICovXG4gIHJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5SZXNldEdpdmVVc2VyQ29uc2VudFByb2Nlc3MoKSk7XG4gIH1cblxuICAvKipcbiAgICogV2l0aGRyYXcgY29uc2VudCBmb3IgdGhlIGdpdmVuIGBjb25zZW50Q29kZWBcbiAgICogQHBhcmFtIHVzZXJJZCBhIHVzZXIgSUQgZm9yIHdoaWNoIHRvIHdpdGhkcmF3IHRoZSBjb25zZW50XG4gICAqIEBwYXJhbSBjb25zZW50Q29kZSBmb3Igd2hpY2ggdG8gd2l0aGRyYXcgdGhlIGNvbnNlbnRcbiAgICovXG4gIHdpdGhkcmF3Q29uc2VudCh1c2VySWQ6IHN0cmluZywgY29uc2VudENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLldpdGhkcmF3VXNlckNvbnNlbnQoeyB1c2VySWQsIGNvbnNlbnRDb2RlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aXRoZHJhdyBjb25zZW50IHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aXRoZHJhdyBjb25zZW50IHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aXRoZHJhdyBjb25zZW50IHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHByb2Nlc3MgZmxhZ3MgZm9yIHdpdGhkcmF3IGNvbnNlbnRcbiAgICovXG4gIHJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVzZXRXaXRoZHJhd1VzZXJDb25zZW50UHJvY2VzcygpKTtcbiAgfVxufVxuIl19