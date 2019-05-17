import { UserAccountAdapter } from './user-account.adapter';
import { Observable } from 'rxjs';
import { User } from '../../../model/misc.model';
import { UserRegisterFormData } from '../../../user/model/user.model';
export declare class UserAccountConnector {
    protected adapter: UserAccountAdapter;
    constructor(adapter: UserAccountAdapter);
    register(user: UserRegisterFormData): Observable<User>;
    requestForgotPasswordEmail(userEmailAddress: string): Observable<{}>;
    resetPassword(token: string, newPassword: string): Observable<{}>;
    updateEmail(userId: string, currentPassword: string, newUserId: string): Observable<{}>;
    updatePassword(userId: string, oldPassword: string, newPassword: string): Observable<{}>;
    remove(userId: string): Observable<{}>;
}
