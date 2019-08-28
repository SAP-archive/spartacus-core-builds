import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Title, User, UserSignUp } from '../../model/misc.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
export declare class UserService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
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
}
