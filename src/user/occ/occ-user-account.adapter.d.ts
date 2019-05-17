import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/misc.model';
import { ConsentTemplate, ConsentTemplateList } from '../../occ/occ-models/additional-occ.models';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { UserAccountAdapter } from '../connectors/account/user-account.adapter';
import { UserRegisterFormData } from '../model/user.model';
export declare class OccUserAccountAdapter implements UserAccountAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    private getUserEndpoint;
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
