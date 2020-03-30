import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { Title, User, UserSignUp } from '../../model/misc.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import * as ɵngcc0 from '@angular/core';
export declare class UserService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * Returns a user
     */
    get(): Observable<User>;
    /**
     * Loads the user's details
     */
    load(): void;
    /**
     * Register a new user
     *
     * @param submitFormData as UserRegisterFormData
     */
    register(userRegisterFormData: UserSignUp): void;
    /**
     * Register a new user from guest
     *
     * @param guid
     * @param password
     */
    registerGuest(guid: string, password: string): void;
    /**
     * Returns the register user process loading flag
     */
    getRegisterUserResultLoading(): Observable<boolean>;
    /**
     * Returns the register user process success flag
     */
    getRegisterUserResultSuccess(): Observable<boolean>;
    /**
     * Returns the register user process error flag
     */
    getRegisterUserResultError(): Observable<boolean>;
    /**
     * Resets the register user process flags
     */
    resetRegisterUserProcessState(): void;
    /**
     * Remove user account, that's also called close user's account
     */
    remove(): void;
    /**
     * Returns the remove user loading flag
     */
    getRemoveUserResultLoading(): Observable<boolean>;
    /**
     * Returns the remove user failure outcome.
     */
    getRemoveUserResultError(): Observable<boolean>;
    /**
     * Returns the remove user process success outcome.
     */
    getRemoveUserResultSuccess(): Observable<boolean>;
    /**
     * Resets the remove user process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     */
    resetRemoveUserProcessState(): void;
    /**
     * Returns titles
     */
    getTitles(): Observable<Title[]>;
    /**
     * Retrieves titles
     */
    loadTitles(): void;
    /**
     * Return whether user's password is successfully reset
     */
    isPasswordReset(): Observable<boolean>;
    /**
     * Updates the user's details
     * @param userDetails to be updated
     */
    updatePersonalDetails(userDetails: User): void;
    /**
     * Returns the update user's personal details loading flag
     */
    getUpdatePersonalDetailsResultLoading(): Observable<boolean>;
    /**
     * Returns the update user's personal details error flag
     */
    getUpdatePersonalDetailsResultError(): Observable<boolean>;
    /**
     * Returns the update user's personal details success flag
     */
    getUpdatePersonalDetailsResultSuccess(): Observable<boolean>;
    /**
     * Resets the update user details processing state
     */
    resetUpdatePersonalDetailsProcessingState(): void;
    /**
     * Reset new password.  Part of the forgot password flow.
     * @param token
     * @param password
     */
    resetPassword(token: string, password: string): void;
    requestForgotPasswordEmail(userEmailAddress: string): void;
    /**
     * Updates the user's email
     */
    updateEmail(password: string, newUid: string): void;
    /**
     * Returns the update user's email success flag
     */
    getUpdateEmailResultSuccess(): Observable<boolean>;
    /**
     * Returns the update user's email error flag
     */
    getUpdateEmailResultError(): Observable<boolean>;
    /**
     * Returns the update user's email loading flag
     */
    getUpdateEmailResultLoading(): Observable<boolean>;
    /**
     * Resets the update user's email processing state
     */
    resetUpdateEmailResultState(): void;
    /**
     * Updates the password for the user
     * @param oldPassword the current password that will be changed
     * @param newPassword the new password
     */
    updatePassword(oldPassword: string, newPassword: string): void;
    /**
     * Returns the update password loading flag
     */
    getUpdatePasswordResultLoading(): Observable<boolean>;
    /**
     * Returns the update password failure outcome.
     */
    getUpdatePasswordResultError(): Observable<boolean>;
    /**
     * Returns the update password process success outcome.
     */
    getUpdatePasswordResultSuccess(): Observable<boolean>;
    /**
     * Resets the update password process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     */
    resetUpdatePasswordProcessState(): void;
    private withUserId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtKQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIsIFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdXNlclxuICAgICAqL1xuICAgIGdldCgpOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSB1c2VyJ3MgZGV0YWlsc1xuICAgICAqL1xuICAgIGxvYWQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3VibWl0Rm9ybURhdGEgYXMgVXNlclJlZ2lzdGVyRm9ybURhdGFcbiAgICAgKi9cbiAgICByZWdpc3Rlcih1c2VyUmVnaXN0ZXJGb3JtRGF0YTogVXNlclNpZ25VcCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgdXNlciBmcm9tIGd1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZ3VpZFxuICAgICAqIEBwYXJhbSBwYXNzd29yZFxuICAgICAqL1xuICAgIHJlZ2lzdGVyR3Vlc3QoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZWdpc3RlciB1c2VyIHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAgICovXG4gICAgZ2V0UmVnaXN0ZXJVc2VyUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlZ2lzdGVyIHVzZXIgcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICAgKi9cbiAgICBnZXRSZWdpc3RlclVzZXJSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVnaXN0ZXIgdXNlciBwcm9jZXNzIGVycm9yIGZsYWdcbiAgICAgKi9cbiAgICBnZXRSZWdpc3RlclVzZXJSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgcmVnaXN0ZXIgdXNlciBwcm9jZXNzIGZsYWdzXG4gICAgICovXG4gICAgcmVzZXRSZWdpc3RlclVzZXJQcm9jZXNzU3RhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdXNlciBhY2NvdW50LCB0aGF0J3MgYWxzbyBjYWxsZWQgY2xvc2UgdXNlcidzIGFjY291bnRcbiAgICAgKi9cbiAgICByZW1vdmUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZW1vdmUgdXNlciBsb2FkaW5nIGZsYWdcbiAgICAgKi9cbiAgICBnZXRSZW1vdmVVc2VyUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlbW92ZSB1c2VyIGZhaWx1cmUgb3V0Y29tZS5cbiAgICAgKi9cbiAgICBnZXRSZW1vdmVVc2VyUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZW1vdmUgdXNlciBwcm9jZXNzIHN1Y2Nlc3Mgb3V0Y29tZS5cbiAgICAgKi9cbiAgICBnZXRSZW1vdmVVc2VyUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgcmVtb3ZlIHVzZXIgcHJvY2VzcyBzdGF0ZS4gVGhlIHN0YXRlIG5lZWRzIHRvIGJlIHJlc2V0IGFmdGVyIHRoZSBwcm9jZXNzXG4gICAgICogY29uY2x1ZGVzLCByZWdhcmRsZXNzIGlmIGl0J3MgYSBzdWNjZXNzIG9yIGFuIGVycm9yXG4gICAgICovXG4gICAgcmVzZXRSZW1vdmVVc2VyUHJvY2Vzc1N0YXRlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aXRsZXNcbiAgICAgKi9cbiAgICBnZXRUaXRsZXMoKTogT2JzZXJ2YWJsZTxUaXRsZVtdPjtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGl0bGVzXG4gICAgICovXG4gICAgbG9hZFRpdGxlcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybiB3aGV0aGVyIHVzZXIncyBwYXNzd29yZCBpcyBzdWNjZXNzZnVsbHkgcmVzZXRcbiAgICAgKi9cbiAgICBpc1Bhc3N3b3JkUmVzZXQoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSB1c2VyJ3MgZGV0YWlsc1xuICAgICAqIEBwYXJhbSB1c2VyRGV0YWlscyB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgdXBkYXRlUGVyc29uYWxEZXRhaWxzKHVzZXJEZXRhaWxzOiBVc2VyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIHBlcnNvbmFsIGRldGFpbHMgbG9hZGluZyBmbGFnXG4gICAgICovXG4gICAgZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgcGVyc29uYWwgZGV0YWlscyBlcnJvciBmbGFnXG4gICAgICovXG4gICAgZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIHBlcnNvbmFsIGRldGFpbHMgc3VjY2VzcyBmbGFnXG4gICAgICovXG4gICAgZ2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgdXBkYXRlIHVzZXIgZGV0YWlscyBwcm9jZXNzaW5nIHN0YXRlXG4gICAgICovXG4gICAgcmVzZXRVcGRhdGVQZXJzb25hbERldGFpbHNQcm9jZXNzaW5nU3RhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXNldCBuZXcgcGFzc3dvcmQuICBQYXJ0IG9mIHRoZSBmb3Jnb3QgcGFzc3dvcmQgZmxvdy5cbiAgICAgKiBAcGFyYW0gdG9rZW5cbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICAgKi9cbiAgICByZXNldFBhc3N3b3JkKHRva2VuOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkO1xuICAgIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3M6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgdXNlcidzIGVtYWlsXG4gICAgICovXG4gICAgdXBkYXRlRW1haWwocGFzc3dvcmQ6IHN0cmluZywgbmV3VWlkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgZW1haWwgc3VjY2VzcyBmbGFnXG4gICAgICovXG4gICAgZ2V0VXBkYXRlRW1haWxSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBlbWFpbCBlcnJvciBmbGFnXG4gICAgICovXG4gICAgZ2V0VXBkYXRlRW1haWxSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgZW1haWwgbG9hZGluZyBmbGFnXG4gICAgICovXG4gICAgZ2V0VXBkYXRlRW1haWxSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSB1cGRhdGUgdXNlcidzIGVtYWlsIHByb2Nlc3Npbmcgc3RhdGVcbiAgICAgKi9cbiAgICByZXNldFVwZGF0ZUVtYWlsUmVzdWx0U3RhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwYXNzd29yZCBmb3IgdGhlIHVzZXJcbiAgICAgKiBAcGFyYW0gb2xkUGFzc3dvcmQgdGhlIGN1cnJlbnQgcGFzc3dvcmQgdGhhdCB3aWxsIGJlIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0gbmV3UGFzc3dvcmQgdGhlIG5ldyBwYXNzd29yZFxuICAgICAqL1xuICAgIHVwZGF0ZVBhc3N3b3JkKG9sZFBhc3N3b3JkOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVwZGF0ZSBwYXNzd29yZCBsb2FkaW5nIGZsYWdcbiAgICAgKi9cbiAgICBnZXRVcGRhdGVQYXNzd29yZFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgcGFzc3dvcmQgZmFpbHVyZSBvdXRjb21lLlxuICAgICAqL1xuICAgIGdldFVwZGF0ZVBhc3N3b3JkUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgcGFzc3dvcmQgcHJvY2VzcyBzdWNjZXNzIG91dGNvbWUuXG4gICAgICovXG4gICAgZ2V0VXBkYXRlUGFzc3dvcmRSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSB1cGRhdGUgcGFzc3dvcmQgcHJvY2VzcyBzdGF0ZS4gVGhlIHN0YXRlIG5lZWRzIHRvIGJlIHJlc2V0IGFmdGVyIHRoZSBwcm9jZXNzXG4gICAgICogY29uY2x1ZGVzLCByZWdhcmRsZXNzIGlmIGl0J3MgYSBzdWNjZXNzIG9yIGFuIGVycm9yXG4gICAgICovXG4gICAgcmVzZXRVcGRhdGVQYXNzd29yZFByb2Nlc3NTdGF0ZSgpOiB2b2lkO1xuICAgIHByaXZhdGUgd2l0aFVzZXJJZDtcbn1cbiJdfQ==