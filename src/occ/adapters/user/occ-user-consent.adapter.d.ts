import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { UserConsentAdapter } from '../../../user/connectors/consent/user-consent.adapter';
import { ConsentTemplate } from '../../../model/consent.model';
export declare class OccUserConsentAdapter implements UserConsentAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    private getUserEndpoint;
    loadConsents(userId: string): Observable<ConsentTemplate[]>;
    giveConsent(userId: string, consentTemplateId: string, consentTemplateVersion: number): Observable<ConsentTemplate>;
    withdrawConsent(userId: string, consentCode: string): Observable<{}>;
}
