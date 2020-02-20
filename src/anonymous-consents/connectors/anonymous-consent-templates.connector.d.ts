import { Observable } from 'rxjs';
import { ConsentTemplate } from '../../model/consent.model';
import { AnonymousConsentTemplatesAdapter } from './anonymous-consent-templates.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentTemplatesConnector {
    protected adapter: AnonymousConsentTemplatesAdapter;
    constructor(adapter: AnonymousConsentTemplatesAdapter);
    loadAnonymousConsentTemplates(): Observable<ConsentTemplate[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentTemplatesConnector>;
}

//# sourceMappingURL=anonymous-consent-templates.connector.d.ts.map