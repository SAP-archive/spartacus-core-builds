import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnonymousConsentTemplatesAdapter } from '../../../anonymous-consents/connectors/anonymous-consent-templates.adapter';
import { AnonymousConsent, ConsentTemplate } from '../../../model/consent.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccAnonymousConsentTemplatesAdapter implements AnonymousConsentTemplatesAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    loadAnonymousConsentTemplates(): Observable<ConsentTemplate[]>;
    loadAnonymousConsents(): Observable<AnonymousConsent[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccAnonymousConsentTemplatesAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccAnonymousConsentTemplatesAdapter>;
}

//# sourceMappingURL=occ-anonymous-consent-templates.adapter.d.ts.map