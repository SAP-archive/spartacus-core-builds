import { Observable } from 'rxjs';
import { User } from '../../../model/misc.model';
import { ConsentTemplate, ConsentTemplateList } from '../../../occ/occ-models/additional-occ.models';
import { UserRegisterFormData } from '../../../user/model/user.model';
import { UserAccountAdapter } from './user-account.adapter';
export declare class UserAccountConnector {
    protected adapter: UserAccountAdapter;
    constructor(adapter: UserAccountAdapter);
    register(user: UserRegisterFormData): Observable<User>;
    requestForgotPasswordEmail(userEmailAddress: string): Observable<{}>;
    resetPassword(token: string, newPassword: string): Observable<{}>;
    updateEmail(userId: string, currentPassword: string, newUserId: string): Observable<{}>;
    updatePassword(userId: string, oldPassword: string, newPassword: string): Observable<{}>;
    remove(userId: string): Observable<{}>;
    loadConsents(userId: string): Observable<ConsentTemplateList>;
    giveConsent(userId: string, consentTemplateId: string, consentTemplateVersion: number): Observable<ConsentTemplate>;
    withdrawConsent(userId: string, consentCode: string): Observable<{}>;
}
