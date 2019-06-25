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
import { UsersSelectors } from '../store/selectors/index';
import { UPDATE_EMAIL_PROCESS_ID, UPDATE_USER_DETAILS_PROCESS_ID, } from '../store/user-state';
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
        return this.store.pipe(select(UsersSelectors.getDetails), tap((/**
         * @param {?} details
         * @return {?}
         */
        details => {
            if (Object.keys(details).length === 0) {
                this.load();
            }
        })));
    }
    /**
     * Loads the user's details
     * @return {?}
     */
    load() {
        this.store.dispatch(new fromStore.LoadUserDetails(USERID_CURRENT));
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
     * @return {?}
     */
    remove() {
        this.store.dispatch(new fromStore.RemoveUser(USERID_CURRENT));
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
     * Returns titles
     * @return {?}
     */
    getTitles() {
        return this.store.pipe(select(UsersSelectors.getAllTitles));
    }
    /**
     * Retrieves titles
     * @return {?}
     */
    loadTitles() {
        this.store.dispatch(new fromStore.LoadTitles());
    }
    /**
     * Return whether user's password is successfully reset
     * @return {?}
     */
    isPasswordReset() {
        return this.store.pipe(select(UsersSelectors.getResetPassword));
    }
    /**
     * Updates the user's details
     * @param {?} userDetails to be updated
     * @return {?}
     */
    updatePersonalDetails(userDetails) {
        this.store.dispatch(new fromStore.UpdateUserDetails({ username: USERID_CURRENT, userDetails }));
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
     * @param {?} password
     * @param {?} newUid
     * @return {?}
     */
    updateEmail(password, newUid) {
        this.store.dispatch(new fromStore.UpdateEmailAction({ uid: USERID_CURRENT, password, newUid }));
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
     * Updates the password for the user
     * @param {?} oldPassword the current password that will be changed
     * @param {?} newPassword the new password
     * @return {?}
     */
    updatePassword(oldPassword, newPassword) {
        this.store.dispatch(new fromStore.UpdatePassword({
            userId: USERID_CURRENT,
            oldPassword,
            newPassword,
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRS9ELE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sS0FBSyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsOEJBQThCLEdBQy9CLE1BQU0scUJBQXFCLENBQUM7QUFHN0IsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFDWSxLQUVUO1FBRlMsVUFBSyxHQUFMLEtBQUssQ0FFZDtJQUNBLENBQUM7Ozs7O0lBS0osR0FBRztRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQ2pDLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNaLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUtELElBQUk7UUFDRixJQUFJLENBQUMsS0FB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WUFDM0IsTUFBTSxFQUFFLGNBQWM7WUFDdEIsV0FBVztZQUNYLFdBQVc7U0FDWixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsOEJBQThCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUN2RSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCw0QkFBNEI7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQ3JFLENBQUM7SUFDSixDQUFDOzs7OztJQUtELDhCQUE4QjtRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FDdkUsQ0FBQztJQUNKLENBQUM7Ozs7OztJQU1ELCtCQUErQjtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBOVBGLFVBQVU7Ozs7WUFsQk0sS0FBSzs7Ozs7OztJQXFCbEIsNEJBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIsIFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFVTRVJJRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgZnJvbVByb2Nlc3NTdG9yZSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQge1xuICBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCxcbiAgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lELFxufSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxcbiAgICAgIGZyb21TdG9yZS5TdGF0ZVdpdGhVc2VyIHwgZnJvbVByb2Nlc3NTdG9yZS5TdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+XG4gICAgPlxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB1c2VyXG4gICAqL1xuICBnZXQoKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXREZXRhaWxzKSxcbiAgICAgIHRhcChkZXRhaWxzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRldGFpbHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIHVzZXIncyBkZXRhaWxzXG4gICAqL1xuICBsb2FkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkVXNlckRldGFpbHMoVVNFUklEX0NVUlJFTlQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyXG4gICAqXG4gICAqIEBwYXJhbSBzdWJtaXRGb3JtRGF0YSBhcyBVc2VyUmVnaXN0ZXJGb3JtRGF0YVxuICAgKi9cbiAgcmVnaXN0ZXIodXNlclJlZ2lzdGVyRm9ybURhdGE6IFVzZXJTaWduVXApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVnaXN0ZXJVc2VyKHVzZXJSZWdpc3RlckZvcm1EYXRhKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHVzZXIgYWNjb3VudCwgdGhhdCdzIGFsc28gY2FsbGVkIGNsb3NlIHVzZXIncyBhY2NvdW50XG4gICAqL1xuICByZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlJlbW92ZVVzZXIoVVNFUklEX0NVUlJFTlQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZW1vdmUgdXNlciBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFJlbW92ZVVzZXJSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KGZyb21TdG9yZS5SRU1PVkVfVVNFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbW92ZSB1c2VyIGZhaWx1cmUgb3V0Y29tZS5cbiAgICovXG4gIGdldFJlbW92ZVVzZXJSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoZnJvbVN0b3JlLlJFTU9WRV9VU0VSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVtb3ZlIHVzZXIgcHJvY2VzcyBzdWNjZXNzIG91dGNvbWUuXG4gICAqL1xuICBnZXRSZW1vdmVVc2VyUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShmcm9tU3RvcmUuUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHJlbW92ZSB1c2VyIHByb2Nlc3Mgc3RhdGUuIFRoZSBzdGF0ZSBuZWVkcyB0byBiZSByZXNldCBhZnRlciB0aGUgcHJvY2Vzc1xuICAgKiBjb25jbHVkZXMsIHJlZ2FyZGxlc3MgaWYgaXQncyBhIHN1Y2Nlc3Mgb3IgYW4gZXJyb3JcbiAgICovXG4gIHJlc2V0UmVtb3ZlVXNlclByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVtb3ZlVXNlclJlc2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGl0bGVzXG4gICAqL1xuICBnZXRUaXRsZXMoKTogT2JzZXJ2YWJsZTxUaXRsZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0QWxsVGl0bGVzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRpdGxlc1xuICAgKi9cbiAgbG9hZFRpdGxlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFRpdGxlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB1c2VyJ3MgcGFzc3dvcmQgaXMgc3VjY2Vzc2Z1bGx5IHJlc2V0XG4gICAqL1xuICBpc1Bhc3N3b3JkUmVzZXQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UmVzZXRQYXNzd29yZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHVzZXIncyBkZXRhaWxzXG4gICAqIEBwYXJhbSB1c2VyRGV0YWlscyB0byBiZSB1cGRhdGVkXG4gICAqL1xuICB1cGRhdGVQZXJzb25hbERldGFpbHModXNlckRldGFpbHM6IFVzZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5VcGRhdGVVc2VyRGV0YWlscyh7IHVzZXJuYW1lOiBVU0VSSURfQ1VSUkVOVCwgdXNlckRldGFpbHMgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgcGVyc29uYWwgZGV0YWlscyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFVwZGF0ZVBlcnNvbmFsRGV0YWlsc1Jlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgcGVyc29uYWwgZGV0YWlscyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRVcGRhdGVQZXJzb25hbERldGFpbHNSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgcGVyc29uYWwgZGV0YWlscyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFVwZGF0ZVBlcnNvbmFsRGV0YWlsc1Jlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgdXBkYXRlIHVzZXIgZGV0YWlscyBwcm9jZXNzaW5nIHN0YXRlXG4gICAqL1xuICByZXNldFVwZGF0ZVBlcnNvbmFsRGV0YWlsc1Byb2Nlc3NpbmdTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVzZXRVcGRhdGVVc2VyRGV0YWlscygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBuZXcgcGFzc3dvcmQuICBQYXJ0IG9mIHRoZSBmb3Jnb3QgcGFzc3dvcmQgZmxvdy5cbiAgICogQHBhcmFtIHRva2VuXG4gICAqIEBwYXJhbSBwYXNzd29yZFxuICAgKi9cbiAgcmVzZXRQYXNzd29yZCh0b2tlbjogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlJlc2V0UGFzc3dvcmQoeyB0b2tlbiwgcGFzc3dvcmQgfSkpO1xuICB9XG5cbiAgLypcbiAgICogUmVxdWVzdCBhbiBlbWFpbCB0byByZXNldCBhIGZvcmdvdHRlbiBwYXNzd29yZC5cbiAgICovXG4gIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3M6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0KHVzZXJFbWFpbEFkZHJlc3MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB1c2VyJ3MgZW1haWxcbiAgICovXG4gIHVwZGF0ZUVtYWlsKHBhc3N3b3JkOiBzdHJpbmcsIG5ld1VpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuVXBkYXRlRW1haWxBY3Rpb24oeyB1aWQ6IFVTRVJJRF9DVVJSRU5ULCBwYXNzd29yZCwgbmV3VWlkIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIGVtYWlsIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlRW1haWxSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFVQREFURV9FTUFJTF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgZW1haWwgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0VXBkYXRlRW1haWxSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBlbWFpbCBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFVwZGF0ZUVtYWlsUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHVwZGF0ZSB1c2VyJ3MgZW1haWwgcHJvY2Vzc2luZyBzdGF0ZVxuICAgKi9cbiAgcmVzZXRVcGRhdGVFbWFpbFJlc3VsdFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5SZXNldFVwZGF0ZUVtYWlsQWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBhc3N3b3JkIGZvciB0aGUgdXNlclxuICAgKiBAcGFyYW0gb2xkUGFzc3dvcmQgdGhlIGN1cnJlbnQgcGFzc3dvcmQgdGhhdCB3aWxsIGJlIGNoYW5nZWRcbiAgICogQHBhcmFtIG5ld1Bhc3N3b3JkIHRoZSBuZXcgcGFzc3dvcmRcbiAgICovXG4gIHVwZGF0ZVBhc3N3b3JkKG9sZFBhc3N3b3JkOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5VcGRhdGVQYXNzd29yZCh7XG4gICAgICAgIHVzZXJJZDogVVNFUklEX0NVUlJFTlQsXG4gICAgICAgIG9sZFBhc3N3b3JkLFxuICAgICAgICBuZXdQYXNzd29yZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgcGFzc3dvcmQgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRVcGRhdGVQYXNzd29yZFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoZnJvbVN0b3JlLlVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVwZGF0ZSBwYXNzd29yZCBmYWlsdXJlIG91dGNvbWUuXG4gICAqL1xuICBnZXRVcGRhdGVQYXNzd29yZFJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShmcm9tU3RvcmUuVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXBkYXRlIHBhc3N3b3JkIHByb2Nlc3Mgc3VjY2VzcyBvdXRjb21lLlxuICAgKi9cbiAgZ2V0VXBkYXRlUGFzc3dvcmRSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KGZyb21TdG9yZS5VUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHVwZGF0ZSBwYXNzd29yZCBwcm9jZXNzIHN0YXRlLiBUaGUgc3RhdGUgbmVlZHMgdG8gYmUgcmVzZXQgYWZ0ZXIgdGhlIHByb2Nlc3NcbiAgICogY29uY2x1ZGVzLCByZWdhcmRsZXNzIGlmIGl0J3MgYSBzdWNjZXNzIG9yIGFuIGVycm9yXG4gICAqL1xuICByZXNldFVwZGF0ZVBhc3N3b3JkUHJvY2Vzc1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5VcGRhdGVQYXNzd29yZFJlc2V0KCkpO1xuICB9XG59XG4iXX0=