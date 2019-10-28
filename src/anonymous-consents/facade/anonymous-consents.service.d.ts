import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AnonymousConsent, ConsentTemplate } from '../../model/index';
import { StateWithAnonymousConsents } from '../store/anonymous-consents-state';
export declare class AnonymousConsentsService {
    protected store: Store<StateWithAnonymousConsents>;
    constructor(store: Store<StateWithAnonymousConsents>);
    /**
     * Retrieves the anonymous consent templates.
     */
    loadTemplates(): void;
    /**
     * Returns all the anonymous consent templates.
     */
    getTemplates(): Observable<ConsentTemplate[]>;
    /**
     * Returns the anonymous consent templates with the given template code.
     * @param templateCode a template code by which to filter anonymous consent templates.
     */
    getTemplate(templateCode: string): Observable<ConsentTemplate>;
    /**
     * Returns an indicator for the loading status for the anonymous consent templates.
     */
    getLoadTemplatesLoading(): Observable<boolean>;
    /**
     * Returns an indicator for the success status for the anonymous consent templates.
     */
    getLoadTemplatesSuccess(): Observable<boolean>;
    /**
     * Returns an indicator for the error status for the anonymous consent templates.
     */
    getLoadTemplatesError(): Observable<boolean>;
    /**
     * Resets the loading, success and error indicators for the anonymous consent templates.
     */
    resetLoadTemplatesState(): void;
    /**
     * Returns all the anonymous consents.
     */
    getConsents(): Observable<AnonymousConsent[]>;
    /**
     * Puts the provided anonymous consents into the store.
     */
    setConsents(consents: AnonymousConsent[]): void;
    /**
     * Returns the anonymous consent with the given template code.
     * @param templateCode a template code by which to filter anonymous consent templates.
     */
    getConsent(templateCode: string): Observable<AnonymousConsent>;
    /**
     * Give a consent for the given `templateCode`
     * @param templateCode for which to give the consent
     */
    giveConsent(templateCode: string): void;
    /**
     * Sets all the anonymous consents' state to given.
     */
    giveAllConsents(): Observable<ConsentTemplate[]>;
    /**
     * Returns `true` if the provided `consent` is given.
     * @param consent a consent to test
     */
    isConsentGiven(consent: AnonymousConsent): boolean;
    /**
     * Withdraw a consent for the given `templateCode`
     * @param templateCode for which to withdraw the consent
     */
    withdrawConsent(templateCode: string): void;
    /**
     * Sets all the anonymous consents' state to withdrawn.
     */
    withdrawAllConsents(): Observable<ConsentTemplate[]>;
    /**
     * Returns `true` if the provided `consent` is withdrawn.
     * @param consent a consent to test
     */
    isConsentWithdrawn(consent: AnonymousConsent): boolean;
    /**
     * Toggles the visibility of the anonymous consents banner.
     * @param visible the banner is visible if `true`, otherwise it's hidden
     */
    toggleBannerVisibility(visible: boolean): void;
    /**
     * Returns `true` if the banner is visible, `false` otherwise
     */
    isBannerVisible(): Observable<boolean>;
    /**
     * Returns `true` if the consent templates were updated on the back-end.
     */
    getTemplatesUpdated(): Observable<boolean>;
    /**
     * Toggles the `updated` slice of the state
     * @param updated
     */
    toggleTemplatesUpdated(updated: boolean): void;
    /**
     * Returns `true` if there's a missmatch in template versions between the provided `currentTemplates` and `newTemplates`
     * @param currentTemplates current templates to check
     * @param newTemplates new templates to check
     */
    detectUpdatedTemplates(currentTemplates: ConsentTemplate[], newTemplates: ConsentTemplate[]): boolean;
    /**
     * Serializes using `JSON.stringify()` and encodes using `encodeURIComponent()` methods
     * @param consents to serialize and encode
     */
    serializeAndEncode(consents: AnonymousConsent[]): string;
    /**
     * Decodes using `decodeURIComponent()` and deserializes using `JSON.parse()`
     * @param rawConsents to decode an deserialize
     */
    decodeAndDeserialize(rawConsents: string): AnonymousConsent[];
    /**
     *
     * Compares the given `newConsents` and `previousConsents` and returns `true` if there are differences (the `newConsents` are updates).
     * Otherwise it returns `false`.
     *
     * @param newConsents new consents to compare
     * @param previousConsents old consents to compare
     */
    consentsUpdated(newConsents: AnonymousConsent[], previousConsents: AnonymousConsent[]): boolean;
}
