import { Observable } from 'rxjs';
import { ConsentTemplate } from '../../model/consent.model';
export declare abstract class AnonymousConsentTemplatesAdapter {
    /**
     * Abstract method used to load anonymous consents.
     */
    abstract loadAnonymousConsentTemplates(): Observable<ConsentTemplate[]>;
}
