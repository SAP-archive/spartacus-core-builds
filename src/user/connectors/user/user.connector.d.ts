import { Observable } from 'rxjs';
import { Title, User, UserSignUp } from '../../../model/misc.model';
import { UserAdapter } from './user.adapter';
export declare class UserConnector {
    protected adapter: UserAdapter;
    constructor(adapter: UserAdapter);
    get(userId: string): Observable<User>;
    update(username: string, user: User): Observable<{}>;
    register(user: UserSignUp): Observable<User>;
    registerGuest(guid: string, password: string): Observable<User>;
    requestForgotPasswordEmail(userEmailAddress: string): Observable<{}>;
    resetPassword(token: string, newPassword: string): Observable<{}>;
    updateEmail(userId: string, currentPassword: string, newUserId: string): Observable<{}>;
    updatePassword(userId: string, oldPassword: string, newPassword: string): Observable<{}>;
    remove(userId: string): Observable<{}>;
    getTitles(): Observable<Title[]>;
}
