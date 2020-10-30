import { Observable } from 'rxjs';
import { AnonymousConsent, ConsentTemplate } from '../../model/consent.model';
import { AnonymousConsentTemplatesAdapter } from './anonymous-consent-templates.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentTemplatesConnector {
    protected adapter: AnonymousConsentTemplatesAdapter;
    constructor(adapter: AnonymousConsentTemplatesAdapter);
    loadAnonymousConsentTemplates(): Observable<ConsentTemplate[]>;
    loadAnonymousConsents(): Observable<AnonymousConsent[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentTemplatesConnector, never>;
}

//# sourceMappingURL=anonymous-consent-templates.connector.d.ts.map