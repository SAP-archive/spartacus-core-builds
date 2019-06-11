import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConsentTemplate } from '../../model/consent.model';
import * as fromProcessStore from '../../process/store/process-state';
import * as fromStore from '../store/index';
export declare class UserConsentService {
    protected store: Store<fromStore.StateWithUser | fromProcessStore.StateWithProcess<void>>;
    constructor(store: Store<fromStore.StateWithUser | fromProcessStore.StateWithProcess<void>>);
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