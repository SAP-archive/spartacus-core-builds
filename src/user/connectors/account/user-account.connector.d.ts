import { Observable } from 'rxjs';
import { Title, User, UserSignUp } from '../../../model/misc.model';
import { UserAccountAdapter } from './user-account.adapter';
export declare class UserAccountConnector {
    protected adapter: UserAccountAdapter;
    constructor(adapter: UserAccountAdapter);
    register(user: UserSignUp): Observable<User>;
    requestForgotPasswordEmail(userEmailAddress: string): Observable<{}>;
    resetPassword(token: string, newPassword: string): Observable<{}>;
    updateEmail(userId: string, currentPassword: string, newUserId: string): Observable<{}>;
    updatePassword(userId: string, oldPassword: string, newPassword: string): Observable<{}>;
    remove(userId: string): Observable<{}>;
    getTitles(): Observable<Title[]>;
}
