import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { Title, User, UserSignUp } from '../../model/misc.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import * as ɵngcc0 from '@angular/core';
export declare class UserService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService?: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * @deprecated since version 1.3
     *  Use constructor(store: Store<StateWithUser | StateWithProcess<void>>,
     *  authService: AuthService) instead
     *
     *  TODO(issue:#5628) Deprecated since 1.3.0
     */
    constructor(store: Store<StateWithUser | StateWithProcess<void>>);
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
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    private withUserId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4SkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyLCBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PjtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U/OiBBdXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogIFVzZSBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgICAqICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIGluc3RlYWRcbiAgICAgKlxuICAgICAqICBUT0RPKGlzc3VlOiM1NjI4KSBEZXByZWNhdGVkIHNpbmNlIDEuMy4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pik7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHVzZXJcbiAgICAgKi9cbiAgICBnZXQoKTogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgdXNlcidzIGRldGFpbHNcbiAgICAgKi9cbiAgICBsb2FkKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgdXNlclxuICAgICAqXG4gICAgICogQHBhcmFtIHN1Ym1pdEZvcm1EYXRhIGFzIFVzZXJSZWdpc3RlckZvcm1EYXRhXG4gICAgICovXG4gICAgcmVnaXN0ZXIodXNlclJlZ2lzdGVyRm9ybURhdGE6IFVzZXJTaWduVXApOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHVzZXIgZnJvbSBndWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIGd1aWRcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICAgKi9cbiAgICByZWdpc3Rlckd1ZXN0KGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVnaXN0ZXIgdXNlciBwcm9jZXNzIGxvYWRpbmcgZmxhZ1xuICAgICAqL1xuICAgIGdldFJlZ2lzdGVyVXNlclJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZWdpc3RlciB1c2VyIHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAgICovXG4gICAgZ2V0UmVnaXN0ZXJVc2VyUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlZ2lzdGVyIHVzZXIgcHJvY2VzcyBlcnJvciBmbGFnXG4gICAgICovXG4gICAgZ2V0UmVnaXN0ZXJVc2VyUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHJlZ2lzdGVyIHVzZXIgcHJvY2VzcyBmbGFnc1xuICAgICAqL1xuICAgIHJlc2V0UmVnaXN0ZXJVc2VyUHJvY2Vzc1N0YXRlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHVzZXIgYWNjb3VudCwgdGhhdCdzIGFsc28gY2FsbGVkIGNsb3NlIHVzZXIncyBhY2NvdW50XG4gICAgICovXG4gICAgcmVtb3ZlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVtb3ZlIHVzZXIgbG9hZGluZyBmbGFnXG4gICAgICovXG4gICAgZ2V0UmVtb3ZlVXNlclJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZW1vdmUgdXNlciBmYWlsdXJlIG91dGNvbWUuXG4gICAgICovXG4gICAgZ2V0UmVtb3ZlVXNlclJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVtb3ZlIHVzZXIgcHJvY2VzcyBzdWNjZXNzIG91dGNvbWUuXG4gICAgICovXG4gICAgZ2V0UmVtb3ZlVXNlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHJlbW92ZSB1c2VyIHByb2Nlc3Mgc3RhdGUuIFRoZSBzdGF0ZSBuZWVkcyB0byBiZSByZXNldCBhZnRlciB0aGUgcHJvY2Vzc1xuICAgICAqIGNvbmNsdWRlcywgcmVnYXJkbGVzcyBpZiBpdCdzIGEgc3VjY2VzcyBvciBhbiBlcnJvclxuICAgICAqL1xuICAgIHJlc2V0UmVtb3ZlVXNlclByb2Nlc3NTdGF0ZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGl0bGVzXG4gICAgICovXG4gICAgZ2V0VGl0bGVzKCk6IE9ic2VydmFibGU8VGl0bGVbXT47XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRpdGxlc1xuICAgICAqL1xuICAgIGxvYWRUaXRsZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gd2hldGhlciB1c2VyJ3MgcGFzc3dvcmQgaXMgc3VjY2Vzc2Z1bGx5IHJlc2V0XG4gICAgICovXG4gICAgaXNQYXNzd29yZFJlc2V0KCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgdXNlcidzIGRldGFpbHNcbiAgICAgKiBAcGFyYW0gdXNlckRldGFpbHMgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIHVwZGF0ZVBlcnNvbmFsRGV0YWlscyh1c2VyRGV0YWlsczogVXNlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBwZXJzb25hbCBkZXRhaWxzIGxvYWRpbmcgZmxhZ1xuICAgICAqL1xuICAgIGdldFVwZGF0ZVBlcnNvbmFsRGV0YWlsc1Jlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIHBlcnNvbmFsIGRldGFpbHMgZXJyb3IgZmxhZ1xuICAgICAqL1xuICAgIGdldFVwZGF0ZVBlcnNvbmFsRGV0YWlsc1Jlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdXBkYXRlIHVzZXIncyBwZXJzb25hbCBkZXRhaWxzIHN1Y2Nlc3MgZmxhZ1xuICAgICAqL1xuICAgIGdldFVwZGF0ZVBlcnNvbmFsRGV0YWlsc1Jlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHVwZGF0ZSB1c2VyIGRldGFpbHMgcHJvY2Vzc2luZyBzdGF0ZVxuICAgICAqL1xuICAgIHJlc2V0VXBkYXRlUGVyc29uYWxEZXRhaWxzUHJvY2Vzc2luZ1N0YXRlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVzZXQgbmV3IHBhc3N3b3JkLiAgUGFydCBvZiB0aGUgZm9yZ290IHBhc3N3b3JkIGZsb3cuXG4gICAgICogQHBhcmFtIHRva2VuXG4gICAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAgICovXG4gICAgcmVzZXRQYXNzd29yZCh0b2tlbjogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZDtcbiAgICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHVzZXIncyBlbWFpbFxuICAgICAqL1xuICAgIHVwZGF0ZUVtYWlsKHBhc3N3b3JkOiBzdHJpbmcsIG5ld1VpZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIGVtYWlsIHN1Y2Nlc3MgZmxhZ1xuICAgICAqL1xuICAgIGdldFVwZGF0ZUVtYWlsUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVwZGF0ZSB1c2VyJ3MgZW1haWwgZXJyb3IgZmxhZ1xuICAgICAqL1xuICAgIGdldFVwZGF0ZUVtYWlsUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgdXNlcidzIGVtYWlsIGxvYWRpbmcgZmxhZ1xuICAgICAqL1xuICAgIGdldFVwZGF0ZUVtYWlsUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgdXBkYXRlIHVzZXIncyBlbWFpbCBwcm9jZXNzaW5nIHN0YXRlXG4gICAgICovXG4gICAgcmVzZXRVcGRhdGVFbWFpbFJlc3VsdFN0YXRlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFzc3dvcmQgZm9yIHRoZSB1c2VyXG4gICAgICogQHBhcmFtIG9sZFBhc3N3b3JkIHRoZSBjdXJyZW50IHBhc3N3b3JkIHRoYXQgd2lsbCBiZSBjaGFuZ2VkXG4gICAgICogQHBhcmFtIG5ld1Bhc3N3b3JkIHRoZSBuZXcgcGFzc3dvcmRcbiAgICAgKi9cbiAgICB1cGRhdGVQYXNzd29yZChvbGRQYXNzd29yZDogc3RyaW5nLCBuZXdQYXNzd29yZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1cGRhdGUgcGFzc3dvcmQgbG9hZGluZyBmbGFnXG4gICAgICovXG4gICAgZ2V0VXBkYXRlUGFzc3dvcmRSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdXBkYXRlIHBhc3N3b3JkIGZhaWx1cmUgb3V0Y29tZS5cbiAgICAgKi9cbiAgICBnZXRVcGRhdGVQYXNzd29yZFJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdXBkYXRlIHBhc3N3b3JkIHByb2Nlc3Mgc3VjY2VzcyBvdXRjb21lLlxuICAgICAqL1xuICAgIGdldFVwZGF0ZVBhc3N3b3JkUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgdXBkYXRlIHBhc3N3b3JkIHByb2Nlc3Mgc3RhdGUuIFRoZSBzdGF0ZSBuZWVkcyB0byBiZSByZXNldCBhZnRlciB0aGUgcHJvY2Vzc1xuICAgICAqIGNvbmNsdWRlcywgcmVnYXJkbGVzcyBpZiBpdCdzIGEgc3VjY2VzcyBvciBhbiBlcnJvclxuICAgICAqL1xuICAgIHJlc2V0VXBkYXRlUGFzc3dvcmRQcm9jZXNzU3RhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IG1ldGhvZCB0byBkaXN0aW5xdWlzaCBwcmUgLyBwb3N0IDEuMy4wIGluIGEgY29udmVuaWVudCB3YXkuXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIHdpdGhVc2VySWQ7XG59XG4iXX0=