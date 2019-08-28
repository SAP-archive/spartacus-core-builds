/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { USERID_CURRENT } from '../../occ/utils/occ-constants';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { REGISTER_USER_PROCESS_ID, REMOVE_USER_PROCESS_ID, UPDATE_EMAIL_PROCESS_ID, UPDATE_PASSWORD_PROCESS_ID, UPDATE_USER_DETAILS_PROCESS_ID, } from '../store/user-state';
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
        return this.store.pipe(select(UsersSelectors.getDetails), tap((/**
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
        this.store.dispatch(new UserActions.LoadUserDetails(USERID_CURRENT));
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
        this.store.dispatch(new UserActions.RegisterUser(userRegisterFormData));
    };
    /**
     * Returns the register user process loading flag
     */
    /**
     * Returns the register user process loading flag
     * @return {?}
     */
    UserService.prototype.getRegisterUserResultLoading = /**
     * Returns the register user process loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(REGISTER_USER_PROCESS_ID)));
    };
    /**
     * Returns the register user process success flag
     */
    /**
     * Returns the register user process success flag
     * @return {?}
     */
    UserService.prototype.getRegisterUserResultSuccess = /**
     * Returns the register user process success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(REGISTER_USER_PROCESS_ID)));
    };
    /**
     * Returns the register user process error flag
     */
    /**
     * Returns the register user process error flag
     * @return {?}
     */
    UserService.prototype.getRegisterUserResultError = /**
     * Returns the register user process error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(REGISTER_USER_PROCESS_ID)));
    };
    /**
     * Resets the register user process flags
     */
    /**
     * Resets the register user process flags
     * @return {?}
     */
    UserService.prototype.resetRegisterUserProcessState = /**
     * Resets the register user process flags
     * @return {?}
     */
    function () {
        return this.store.dispatch(new UserActions.ResetRegisterUserProcess());
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
        this.store.dispatch(new UserActions.RemoveUser(USERID_CURRENT));
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
        return this.store.pipe(select(getProcessLoadingFactory(REMOVE_USER_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessErrorFactory(REMOVE_USER_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessSuccessFactory(REMOVE_USER_PROCESS_ID)));
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
        this.store.dispatch(new UserActions.RemoveUserReset());
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
        return this.store.pipe(select(UsersSelectors.getAllTitles));
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
        this.store.dispatch(new UserActions.LoadTitles());
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
        return this.store.pipe(select(UsersSelectors.getResetPassword));
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
        this.store.dispatch(new UserActions.UpdateUserDetails({
            username: USERID_CURRENT,
            userDetails: userDetails,
        }));
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
        this.store.dispatch(new UserActions.ResetUpdateUserDetails());
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
        this.store.dispatch(new UserActions.ResetPassword({ token: token, password: password }));
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
        this.store.dispatch(new UserActions.ForgotPasswordEmailRequest(userEmailAddress));
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
        this.store.dispatch(new UserActions.UpdateEmailAction({
            uid: USERID_CURRENT,
            password: password,
            newUid: newUid,
        }));
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
        this.store.dispatch(new UserActions.ResetUpdateEmailAction());
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
        this.store.dispatch(new UserActions.UpdatePassword({
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
        return this.store.pipe(select(getProcessLoadingFactory(UPDATE_PASSWORD_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessErrorFactory(UPDATE_PASSWORD_PROCESS_ID)));
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
        return this.store.pipe(select(getProcessSuccessFactory(UPDATE_PASSWORD_PROCESS_ID)));
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
        this.store.dispatch(new UserActions.UpdatePasswordReset());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRS9ELE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixzQkFBc0IsRUFFdEIsdUJBQXVCLEVBQ3ZCLDBCQUEwQixFQUMxQiw4QkFBOEIsR0FDL0IsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QjtJQUVFLHFCQUFzQixLQUFvRDtRQUFwRCxVQUFLLEdBQUwsS0FBSyxDQUErQztJQUFHLENBQUM7SUFFOUU7O09BRUc7Ozs7O0lBQ0gseUJBQUc7Ozs7SUFBSDtRQUFBLGlCQVNDO1FBUkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFDakMsR0FBRzs7OztRQUFDLFVBQUEsT0FBTztZQUNULElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtRQUNILENBQUMs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ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyLCBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQge1xuICBSRUdJU1RFUl9VU0VSX1BST0NFU1NfSUQsXG4gIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQsXG4gIFN0YXRlV2l0aFVzZXIsXG4gIFVQREFURV9FTUFJTF9QUk9DRVNTX0lELFxuICBVUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCxcbiAgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lELFxufSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB1c2VyXG4gICAqL1xuICBnZXQoKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXREZXRhaWxzKSxcbiAgICAgIHRhcChkZXRhaWxzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRldGFpbHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIHVzZXIncyBkZXRhaWxzXG4gICAqL1xuICBsb2FkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyRGV0YWlscyhVU0VSSURfQ1VSUkVOVCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbmV3IHVzZXJcbiAgICpcbiAgICogQHBhcmFtIHN1Ym1pdEZvcm1EYXRhIGFzIFVzZXJSZWdpc3RlckZvcm1EYXRhXG4gICAqL1xuICByZWdpc3Rlcih1c2VyUmVnaXN0ZXJGb3JtRGF0YTogVXNlclNpZ25VcCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlZ2lzdGVyVXNlcih1c2VyUmVnaXN0ZXJGb3JtRGF0YSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlZ2lzdGVyIHVzZXIgcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFJlZ2lzdGVyVXNlclJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlZ2lzdGVyIHVzZXIgcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFJlZ2lzdGVyVXNlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlZ2lzdGVyIHVzZXIgcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRSZWdpc3RlclVzZXJSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgcmVnaXN0ZXIgdXNlciBwcm9jZXNzIGZsYWdzXG4gICAqL1xuICByZXNldFJlZ2lzdGVyVXNlclByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRSZWdpc3RlclVzZXJQcm9jZXNzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB1c2VyIGFjY291bnQsIHRoYXQncyBhbHNvIGNhbGxlZCBjbG9zZSB1c2VyJ3MgYWNjb3VudFxuICAgKi9cbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlbW92ZVVzZXIoVVNFUklEX0NVUlJFTlQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZW1vdmUgdXNlciBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFJlbW92ZVVzZXJSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFJFTU9WRV9VU0VSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVtb3ZlIHVzZXIgZmFpbHVyZSBvdXRjb21lLlxuICAgKi9cbiAgZ2V0UmVtb3ZlVXNlclJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShSRU1PVkVfVVNFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbW92ZSB1c2VyIHByb2Nlc3Mgc3VjY2VzcyBvdXRjb21lLlxuICAgKi9cbiAgZ2V0UmVtb3ZlVXNlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHJlbW92ZSB1c2VyIHByb2Nlc3Mgc3RhdGUuIFRoZSBzdGF0ZSBuZWVkcyB0byBiZSByZXNldCBhZnRlciB0aGUgcHJvY2Vzc1xuICAgKiBjb25jbHVkZXMsIHJlZ2FyZGxlc3MgaWYgaXQncyBhIHN1Y2Nlc3Mgb3IgYW4gZXJyb3JcbiAgICovXG4gIHJlc2V0UmVtb3ZlVXNlclByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5SZW1vdmVVc2VyUmVzZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aXRsZXNcbiAgICovXG4gIGdldFRpdGxlcygpOiBPYnNlcnZhYmxlPFRpdGxlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRBbGxUaXRsZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGl0bGVzXG4gICAqL1xuICBsb2FkVGl0bGVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRUaXRsZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdXNlcidzIHBhc3N3b3JkIGlzIHN1Y2Nlc3NmdWxseSByZXNldFxuICAgKi9cbiAgaXNQYXNzd29yZFJlc2V0KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFJlc2V0UGFzc3dvcmQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB1c2VyJ3MgZGV0YWlsc1xuICAgKiBAcGFyYW0gdXNlckRldGFpbHMgdG8gYmUgdXBkYXRlZFxuICAgKi9cbiAgdXBkYXRlUGVyc29uYWxEZXRhaWxzKHVzZXJEZXRhaWxzOiBVc2VyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyRGV0YWlscyh7XG4gICAgICAgIHVzZXJuYW1lOiBVU0VSSURfQ1VSUkVOVCxcbiAgICAgICAgdXNlckRldGFpbHMsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBwZXJzb25hbCBkZXRhaWxzIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBwZXJzb25hbCBkZXRhaWxzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldFVwZGF0ZVBlcnNvbmFsRGV0YWlsc1Jlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBwZXJzb25hbCBkZXRhaWxzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSB1cGRhdGUgdXNlciBkZXRhaWxzIHByb2Nlc3Npbmcgc3RhdGVcbiAgICovXG4gIHJlc2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUHJvY2Vzc2luZ1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0VXBkYXRlVXNlckRldGFpbHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgbmV3IHBhc3N3b3JkLiAgUGFydCBvZiB0aGUgZm9yZ290IHBhc3N3b3JkIGZsb3cuXG4gICAqIEBwYXJhbSB0b2tlblxuICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICovXG4gIHJlc2V0UGFzc3dvcmQodG9rZW46IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0UGFzc3dvcmQoeyB0b2tlbiwgcGFzc3dvcmQgfSkpO1xuICB9XG5cbiAgLypcbiAgICogUmVxdWVzdCBhbiBlbWFpbCB0byByZXNldCBhIGZvcmdvdHRlbiBwYXNzd29yZC5cbiAgICovXG4gIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3M6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3QodXNlckVtYWlsQWRkcmVzcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHVzZXIncyBlbWFpbFxuICAgKi9cbiAgdXBkYXRlRW1haWwocGFzc3dvcmQ6IHN0cmluZywgbmV3VWlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZUVtYWlsQWN0aW9uKHtcbiAgICAgICAgdWlkOiBVU0VSSURfQ1VSUkVOVCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIG5ld1VpZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIGVtYWlsIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlRW1haWxSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFVQREFURV9FTUFJTF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgZW1haWwgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlRW1haWxSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBlbWFpbCBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFVwZGF0ZUVtYWlsUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHVwZGF0ZSB1c2VyJ3MgZW1haWwgcHJvY2Vzc2luZyBzdGF0ZVxuICAgKi9cbiAgcmVzZXRVcGRhdGVFbWFpbFJlc3VsdFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0VXBkYXRlRW1haWxBY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcGFzc3dvcmQgZm9yIHRoZSB1c2VyXG4gICAqIEBwYXJhbSBvbGRQYXNzd29yZCB0aGUgY3VycmVudCBwYXNzd29yZCB0aGF0IHdpbGwgYmUgY2hhbmdlZFxuICAgKiBAcGFyYW0gbmV3UGFzc3dvcmQgdGhlIG5ldyBwYXNzd29yZFxuICAgKi9cbiAgdXBkYXRlUGFzc3dvcmQob2xkUGFzc3dvcmQ6IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuVXBkYXRlUGFzc3dvcmQoe1xuICAgICAgICB1c2VySWQ6IFVTRVJJRF9DVVJSRU5ULFxuICAgICAgICBvbGRQYXNzd29yZCxcbiAgICAgICAgbmV3UGFzc3dvcmQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHBhc3N3b3JkIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlUGFzc3dvcmRSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSBwYXNzd29yZCBmYWlsdXJlIG91dGNvbWUuXG4gICAqL1xuICBnZXRVcGRhdGVQYXNzd29yZFJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShVUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgcGFzc3dvcmQgcHJvY2VzcyBzdWNjZXNzIG91dGNvbWUuXG4gICAqL1xuICBnZXRVcGRhdGVQYXNzd29yZFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSB1cGRhdGUgcGFzc3dvcmQgcHJvY2VzcyBzdGF0ZS4gVGhlIHN0YXRlIG5lZWRzIHRvIGJlIHJlc2V0IGFmdGVyIHRoZSBwcm9jZXNzXG4gICAqIGNvbmNsdWRlcywgcmVnYXJkbGVzcyBpZiBpdCdzIGEgc3VjY2VzcyBvciBhbiBlcnJvclxuICAgKi9cbiAgcmVzZXRVcGRhdGVQYXNzd29yZFByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVQYXNzd29yZFJlc2V0KCkpO1xuICB9XG59XG4iXX0=