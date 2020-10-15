import { Observable } from 'rxjs';
import { AnonymousConsent, ConsentTemplate } from '../../model/consent.model';
import { AnonymousConsentTemplatesAdapter } from './anonymous-consent-templates.adapter';
export declare class AnonymousConsentTemplatesConnector {
    protected adapter: AnonymousConsentTemplatesAdapter;
    constructor(adapter: AnonymousConsentTemplatesAdapter);
    loadAnonymousConsentTemplates(): Observable<ConsentTemplate[]>;
    loadAnonymousConsents(): Observable<AnonymousConsent[]> | null;
}
