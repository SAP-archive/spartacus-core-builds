import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsentTemplate } from '../../../model/consent.model';
import { UserConsentAdapter } from '../../../user/connectors/consent/user-consent.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccUserConsentAdapter implements UserConsentAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    loadConsents(userId: string): Observable<ConsentTemplate[]>;
    giveConsent(userId: string, consentTemplateId: string, consentTemplateVersion: number): Observable<ConsentTemplate>;
    withdrawConsent(userId: string, consentCode: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccUserConsentAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccUserConsentAdapter>;
}

//# sourceMappingURL=occ-user-consent.adapter.d.ts.map