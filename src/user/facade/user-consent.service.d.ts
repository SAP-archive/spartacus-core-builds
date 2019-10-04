import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ConsentTemplate } from '../../model/consent.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
export declare class UserConsentService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService?: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * @deprecated since version 1.3
     *  Use constructor(store: Store<StateWithUser | StateWithProcess<void>>,
     *  authService: AuthService) instead
     */
    constructor(store: Store<StateWithUser | StateWithProcess<void>>);
    /**
     * Retrieves all consents.
     */
    loadConsents(): void;
    /**
     * Returns all consents
     */
    getConsents(): Observable<ConsentTemplate[]>;
    /**
     * Returns the consents loading flag
     */
    getConsentsResultLoading(): Observable<boolean>;
    /**
     * Returns the consents success flag
     */
    getConsentsResultSuccess(): Observable<boolean>;
    /**
     * Returns the consents error flag
     */
    getConsentsResultError(): Observable<boolean>;
    /**
     * Resets the processing state for consent retrieval
     */
    resetConsentsProcessState(): void;
    /**
     * Give consent for specified consent template ID and version.
     * @param consentTemplateId a template ID for which to give a consent
     * @param consentTemplateVersion a template version for which to give a consent
     */
    giveConsent(consentTemplateId: string, consentTemplateVersion: number): void;
    /**
     * Returns the give consent process loading flag
     */
    getGiveConsentResultLoading(): Observable<boolean>;
    /**
     * Returns the give consent process success flag
     */
    getGiveConsentResultSuccess(): Observable<boolean>;
    /**
     * Returns the give consent process error flag
     */
    getGiveConsentResultError(): Observable<boolean>;
    /**
     * Resents the give consent process flags
     */
    resetGiveConsentProcessState(): void;
    /**
     * Withdraw consent for the given `consentCode`
     * @param consentCode for which to withdraw the consent
     */
    withdrawConsent(consentCode: string): void;
    /**
     * Returns the withdraw consent process loading flag
     */
    getWithdrawConsentResultLoading(): Observable<boolean>;
    /**
     * Returns the withdraw consent process success flag
     */
    getWithdrawConsentResultSuccess(): Observable<boolean>;
    /**
     * Returns the withdraw consent process error flag
     */
    getWithdrawConsentResultError(): Observable<boolean>;
    /**
     * Resets the process flags for withdraw consent
     */
    resetWithdrawConsentProcessState(): void;
}
