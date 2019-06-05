/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { USERID_CURRENT } from '../../occ/utils/occ-constants';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import * as fromStore from '../store/index';
import { UPDATE_EMAIL_PROCESS_ID, UPDATE_USER_DETAILS_PROCESS_ID, } from '../store/user-state';
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
        var _this = this;
        return this.store.pipe(select(fromStore.getDetails)).pipe(tap((/**
         * @param {?} details
         * @return {?}
         */
        function (details) {
            if (Object.keys(details).length === 0) {
                _this.load();
            }
        })));
    };
    /**
     * Loads the user's details
     */
    /**
     * Loads the user's details
     * @return {?}
     */
    UserService.prototype.load = /**
     * Loads the user's details
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.LoadUserDetails(USERID_CURRENT));
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
     */
    /**
     * Updates the user's email
     * @param {?} password
     * @param {?} newUid
     * @return {?}
     */
    UserService.prototype.updateEmail = /**
     * Updates the user's email
     * @param {?} password
     * @param {?} newUid
     * @return {?}
     */
    function (password, newUid) {
        this.store.dispatch(new fromStore.UpdateEmailAction({ uid: USERID_CURRENT, password: password, newUid: newUid }));
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
     * Updates the password for the user
     * @param oldPassword the current password that will be changed
     * @param newPassword the new password
     */
    /**
     * Updates the password for the user
     * @param {?} oldPassword the current password that will be changed
     * @param {?} newPassword the new password
     * @return {?}
     */
    UserService.prototype.updatePassword = /**
     * Updates the password for the user
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRS9ELE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sS0FBSyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qiw4QkFBOEIsR0FDL0IsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QjtJQUVFLHFCQUNZLEtBRVQ7UUFGUyxVQUFLLEdBQUwsS0FBSyxDQUVkO0lBQ0EsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNILHlCQUFHOzs7O0lBQUg7UUFBQSxpQkFRQztRQVBDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDdkQsR0FBRzs7OztRQUFDLFVBQUEsT0FBTztZQUNULElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMEJBQUk7Ozs7SUFBSjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsOEJBQVE7Ozs7OztJQUFSLFVBQVMsb0JBQWdDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDRCQUFNOzs7O0lBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0RBQTBCOzs7O0lBQTFCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQ25FLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsOENBQXdCOzs7O0lBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQ2pFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0RBQTBCOzs7O0lBQTFCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQ25FLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxpREFBMkI7Ozs7O0lBQTNCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsK0JBQVM7Ozs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxnQ0FBVTs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gscUNBQWU7Ozs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsMkNBQXFCOzs7OztJQUFyQixVQUFzQixXQUFpQjtRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FDM0UsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwyREFBcUM7Ozs7SUFBckM7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUNqRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHlEQUFtQzs7OztJQUFuQztRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQy9ELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMkRBQXFDOzs7O0lBQXJDO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FDakUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwrREFBeUM7Ozs7SUFBekM7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxtQ0FBYTs7Ozs7O0lBQWIsVUFBYyxLQUFhLEVBQUUsUUFBZ0I7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHOzs7Ozs7OztJQUNILGdEQUEwQjs7Ozs7OztJQUExQixVQUEyQixnQkFBd0I7UUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLDBCQUEwQixDQUFDLGdCQUFnQixDQUFDLENBQzNELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSCxpQ0FBVzs7Ozs7O0lBQVgsVUFBWSxRQUFnQixFQUFFLE1BQWM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxRQUFRLFVBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQzNFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsaURBQTJCOzs7O0lBQTNCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FDMUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwrQ0FBeUI7Ozs7SUFBekI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGlEQUEyQjs7OztJQUEzQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsaURBQTJCOzs7O0lBQTNCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsb0NBQWM7Ozs7OztJQUFkLFVBQWUsV0FBbUIsRUFBRSxXQUFtQjtRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDO1lBQzNCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLFdBQVcsYUFBQTtZQUNYLFdBQVcsYUFBQTtTQUNaLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG9EQUE4Qjs7OztJQUE5QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGtEQUE0Qjs7OztJQUE1QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUNyRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG9EQUE4Qjs7OztJQUE5QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gscURBQStCOzs7OztJQUEvQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkE3UEYsVUFBVTs7OztnQkFqQk0sS0FBSzs7SUErUXRCLGtCQUFDO0NBQUEsQUE5UEQsSUE4UEM7U0E3UFksV0FBVzs7Ozs7O0lBRXBCLDRCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyLCBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIGZyb21Qcm9jZXNzU3RvcmUgZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHtcbiAgVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQsXG4gIFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8XG4gICAgICBmcm9tU3RvcmUuU3RhdGVXaXRoVXNlciB8IGZyb21Qcm9jZXNzU3RvcmUuU3RhdGVXaXRoUHJvY2Vzczx2b2lkPlxuICAgID5cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdXNlclxuICAgKi9cbiAgZ2V0KCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXREZXRhaWxzKSkucGlwZShcbiAgICAgIHRhcChkZXRhaWxzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRldGFpbHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIHVzZXIncyBkZXRhaWxzXG4gICAqL1xuICBsb2FkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkVXNlckRldGFpbHMoVVNFUklEX0NVUlJFTlQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyXG4gICAqXG4gICAqIEBwYXJhbSBzdWJtaXRGb3JtRGF0YSBhcyBVc2VyUmVnaXN0ZXJGb3JtRGF0YVxuICAgKi9cbiAgcmVnaXN0ZXIodXNlclJlZ2lzdGVyRm9ybURhdGE6IFVzZXJTaWduVXApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVnaXN0ZXJVc2VyKHVzZXJSZWdpc3RlckZvcm1EYXRhKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHVzZXIgYWNjb3VudCwgdGhhdCdzIGFsc28gY2FsbGVkIGNsb3NlIHVzZXIncyBhY2NvdW50XG4gICAqL1xuICByZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlJlbW92ZVVzZXIoVVNFUklEX0NVUlJFTlQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZW1vdmUgdXNlciBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFJlbW92ZVVzZXJSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KGZyb21TdG9yZS5SRU1PVkVfVVNFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbW92ZSB1c2VyIGZhaWx1cmUgb3V0Y29tZS5cbiAgICovXG4gIGdldFJlbW92ZVVzZXJSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoZnJvbVN0b3JlLlJFTU9WRV9VU0VSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVtb3ZlIHVzZXIgcHJvY2VzcyBzdWNjZXNzIG91dGNvbWUuXG4gICAqL1xuICBnZXRSZW1vdmVVc2VyUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShmcm9tU3RvcmUuUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHJlbW92ZSB1c2VyIHByb2Nlc3Mgc3RhdGUuIFRoZSBzdGF0ZSBuZWVkcyB0byBiZSByZXNldCBhZnRlciB0aGUgcHJvY2Vzc1xuICAgKiBjb25jbHVkZXMsIHJlZ2FyZGxlc3MgaWYgaXQncyBhIHN1Y2Nlc3Mgb3IgYW4gZXJyb3JcbiAgICovXG4gIHJlc2V0UmVtb3ZlVXNlclByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVtb3ZlVXNlclJlc2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGl0bGVzXG4gICAqL1xuICBnZXRUaXRsZXMoKTogT2JzZXJ2YWJsZTxUaXRsZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldEFsbFRpdGxlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aXRsZXNcbiAgICovXG4gIGxvYWRUaXRsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRUaXRsZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdXNlcidzIHBhc3N3b3JkIGlzIHN1Y2Nlc3NmdWxseSByZXNldFxuICAgKi9cbiAgaXNQYXNzd29yZFJlc2V0KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRSZXNldFBhc3N3b3JkKSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdXNlcidzIGRldGFpbHNcbiAgICogQHBhcmFtIHVzZXJEZXRhaWxzIHRvIGJlIHVwZGF0ZWRcbiAgICovXG4gIHVwZGF0ZVBlcnNvbmFsRGV0YWlscyh1c2VyRGV0YWlsczogVXNlcik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLlVwZGF0ZVVzZXJEZXRhaWxzKHsgdXNlcm5hbWU6IFVTRVJJRF9DVVJSRU5ULCB1c2VyRGV0YWlscyB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBwZXJzb25hbCBkZXRhaWxzIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBwZXJzb25hbCBkZXRhaWxzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldFVwZGF0ZVBlcnNvbmFsRGV0YWlsc1Jlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBwZXJzb25hbCBkZXRhaWxzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSB1cGRhdGUgdXNlciBkZXRhaWxzIHByb2Nlc3Npbmcgc3RhdGVcbiAgICovXG4gIHJlc2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUHJvY2Vzc2luZ1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5SZXNldFVwZGF0ZVVzZXJEZXRhaWxzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IG5ldyBwYXNzd29yZC4gIFBhcnQgb2YgdGhlIGZvcmdvdCBwYXNzd29yZCBmbG93LlxuICAgKiBAcGFyYW0gdG9rZW5cbiAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAqL1xuICByZXNldFBhc3N3b3JkKHRva2VuOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVzZXRQYXNzd29yZCh7IHRva2VuLCBwYXNzd29yZCB9KSk7XG4gIH1cblxuICAvKlxuICAgKiBSZXF1ZXN0IGFuIGVtYWlsIHRvIHJlc2V0IGEgZm9yZ290dGVuIHBhc3N3b3JkLlxuICAgKi9cbiAgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodXNlckVtYWlsQWRkcmVzczogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3QodXNlckVtYWlsQWRkcmVzcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHVzZXIncyBlbWFpbFxuICAgKi9cbiAgdXBkYXRlRW1haWwocGFzc3dvcmQ6IHN0cmluZywgbmV3VWlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5VcGRhdGVFbWFpbEFjdGlvbih7IHVpZDogVVNFUklEX0NVUlJFTlQsIHBhc3N3b3JkLCBuZXdVaWQgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgZW1haWwgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRVcGRhdGVFbWFpbFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBlbWFpbCBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRVcGRhdGVFbWFpbFJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIGVtYWlsIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlRW1haWxSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFVQREFURV9FTUFJTF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgdXBkYXRlIHVzZXIncyBlbWFpbCBwcm9jZXNzaW5nIHN0YXRlXG4gICAqL1xuICByZXNldFVwZGF0ZUVtYWlsUmVzdWx0U3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlJlc2V0VXBkYXRlRW1haWxBY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcGFzc3dvcmQgZm9yIHRoZSB1c2VyXG4gICAqIEBwYXJhbSBvbGRQYXNzd29yZCB0aGUgY3VycmVudCBwYXNzd29yZCB0aGF0IHdpbGwgYmUgY2hhbmdlZFxuICAgKiBAcGFyYW0gbmV3UGFzc3dvcmQgdGhlIG5ldyBwYXNzd29yZFxuICAgKi9cbiAgdXBkYXRlUGFzc3dvcmQob2xkUGFzc3dvcmQ6IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLlVwZGF0ZVBhc3N3b3JkKHtcbiAgICAgICAgdXNlcklkOiBVU0VSSURfQ1VSUkVOVCxcbiAgICAgICAgb2xkUGFzc3dvcmQsXG4gICAgICAgIG5ld1Bhc3N3b3JkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSBwYXNzd29yZCBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFVwZGF0ZVBhc3N3b3JkUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShmcm9tU3RvcmUuVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHBhc3N3b3JkIGZhaWx1cmUgb3V0Y29tZS5cbiAgICovXG4gIGdldFVwZGF0ZVBhc3N3b3JkUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KGZyb21TdG9yZS5VUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgcGFzc3dvcmQgcHJvY2VzcyBzdWNjZXNzIG91dGNvbWUuXG4gICAqL1xuICBnZXRVcGRhdGVQYXNzd29yZFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoZnJvbVN0b3JlLlVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgdXBkYXRlIHBhc3N3b3JkIHByb2Nlc3Mgc3RhdGUuIFRoZSBzdGF0ZSBuZWVkcyB0byBiZSByZXNldCBhZnRlciB0aGUgcHJvY2Vzc1xuICAgKiBjb25jbHVkZXMsIHJlZ2FyZGxlc3MgaWYgaXQncyBhIHN1Y2Nlc3Mgb3IgYW4gZXJyb3JcbiAgICovXG4gIHJlc2V0VXBkYXRlUGFzc3dvcmRQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlVwZGF0ZVBhc3N3b3JkUmVzZXQoKSk7XG4gIH1cbn1cbiJdfQ==