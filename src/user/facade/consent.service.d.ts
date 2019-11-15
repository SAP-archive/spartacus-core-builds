import { Observable } from 'rxjs';
import { AnonymousConsentsService } from '../../anonymous-consents/index';
import { AnonymousConsent, Consent } from '../../model/index';
import { UserConsentService } from './user-consent.service';
export declare class ConsentService {
    protected anonymousConsentsService: AnonymousConsentsService;
    protected userConsentService: UserConsentService;
    constructor(anonymousConsentsService: AnonymousConsentsService, userConsentService: UserConsentService);
    /**
     * Returns either anonymous consent or registered consent as they are emmited.
     * @param templateCode for which to return either anonymous or registered consent.
     */
    getConsent(templateCode: string): Observable<AnonymousConsent | Consent>;
    /**
     * Checks if the `templateCode`'s template has a given consent.
     * The method returns `false` if the consent doesn't exist or if it's withdrawn. Otherwise, `true` is returned.
     *
     * @param templateCode of a template which's consent should be checked
     */
    isConsentGiven(templateCode: string): Observable<boolean>;
    /**
     * Checks if the `templateCode`'s template has a withdrawn consent.
     * The method returns `true` if the consent doesn't exist or if it's withdrawn. Otherwise, `false` is returned.
     *
     * @param templateCode of a template which's consent should be checked
     */
    isConsentWithdrawn(templateCode: string): Observable<boolean>;
    /**
     * Returns `true` if the provided consent is of type `AnonymousConsent`. Otherwise, `false` is returned.
     */
    isAnonymousConsentType(consent: AnonymousConsent | Consent): consent is AnonymousConsent;
    /**
     * Returns `true` if the provided consent is of type `Consent`. Otherwise, `false` is returned.
     */
    isConsentType(consent: AnonymousConsent | Consent): consent is Consent;
}
