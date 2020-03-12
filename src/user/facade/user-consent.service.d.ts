import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { Consent, ConsentTemplate } from '../../model/consent.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import * as ɵngcc0 from '@angular/core';
export declare class UserConsentService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService?: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * @deprecated since version 1.3
     *  Use constructor(store: Store<StateWithUser | StateWithProcess<void>>,
     *  authService: AuthService) instead
     *
     *  TODO(issue:#5628) Deprecated since 1.3.0
     */
    constructor(store: Store<StateWithUser | StateWithProcess<void>>);
    /**
     * Retrieves all consents.
     */
    loadConsents(): void;
    /**
     * Returns all consent templates. If `loadIfMissing` parameter is set to `true`, the method triggers the load if consent templates.
     * @param loadIfMissing is set to `true`, the method will load templates if those are not already present. The default value is `false`.
     */
    getConsents(loadIfMissing?: boolean): Observable<ConsentTemplate[]>;
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
     * Returns the registered consent for the given template ID.
     *
     * As a side-effect, the method will call `getConsents(true)` to load the templates if those are not present.
     *
     * @param templateId a template ID by which to filter the registered templates.
     */
    getConsent(templateId: string): Observable<Consent>;
    /**
     * Returns `true` if the consent is truthy and if `consentWithdrawnDate` doesn't exist.
     * Otherwise, `false` is returned.
     *
     * @param consent to check
     */
    isConsentGiven(consent: Consent): boolean;
    /**
     * Returns `true` if the consent is either falsy or if `consentWithdrawnDate` is present.
     * Otherwise, `false` is returned.
     *
     * @param consent to check
     */
    isConsentWithdrawn(consent: Consent): boolean;
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
    /**
     * Filters the provided `templateList`' templates by hiding the template IDs specified in `hideTemplateIds`.
     * If the `hideTemplateIds` is empty, the provided `templateList` is returned.
     *
     * @param templateList a list of consent templates to filter
     * @param hideTemplateIds template IDs to hide
     */
    filterConsentTemplates(templateList: ConsentTemplate[], hideTemplateIds?: string[]): ConsentTemplate[];
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    private withUserId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserConsentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidXNlci1jb25zZW50LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1IQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc2VudCwgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJDb25zZW50U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlPzogQXV0aFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqICBVc2UgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICAgKiAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSBpbnN0ZWFkXG4gICAgICpcbiAgICAgKiAgVE9ETyhpc3N1ZTojNTYyOCkgRGVwcmVjYXRlZCBzaW5jZSAxLjMuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4pO1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgY29uc2VudHMuXG4gICAgICovXG4gICAgbG9hZENvbnNlbnRzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgY29uc2VudCB0ZW1wbGF0ZXMuIElmIGBsb2FkSWZNaXNzaW5nYCBwYXJhbWV0ZXIgaXMgc2V0IHRvIGB0cnVlYCwgdGhlIG1ldGhvZCB0cmlnZ2VycyB0aGUgbG9hZCBpZiBjb25zZW50IHRlbXBsYXRlcy5cbiAgICAgKiBAcGFyYW0gbG9hZElmTWlzc2luZyBpcyBzZXQgdG8gYHRydWVgLCB0aGUgbWV0aG9kIHdpbGwgbG9hZCB0ZW1wbGF0ZXMgaWYgdGhvc2UgYXJlIG5vdCBhbHJlYWR5IHByZXNlbnQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICovXG4gICAgZ2V0Q29uc2VudHMobG9hZElmTWlzc2luZz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb25zZW50cyBsb2FkaW5nIGZsYWdcbiAgICAgKi9cbiAgICBnZXRDb25zZW50c1Jlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb25zZW50cyBzdWNjZXNzIGZsYWdcbiAgICAgKi9cbiAgICBnZXRDb25zZW50c1Jlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb25zZW50cyBlcnJvciBmbGFnXG4gICAgICovXG4gICAgZ2V0Q29uc2VudHNSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgcHJvY2Vzc2luZyBzdGF0ZSBmb3IgY29uc2VudCByZXRyaWV2YWxcbiAgICAgKi9cbiAgICByZXNldENvbnNlbnRzUHJvY2Vzc1N0YXRlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVnaXN0ZXJlZCBjb25zZW50IGZvciB0aGUgZ2l2ZW4gdGVtcGxhdGUgSUQuXG4gICAgICpcbiAgICAgKiBBcyBhIHNpZGUtZWZmZWN0LCB0aGUgbWV0aG9kIHdpbGwgY2FsbCBgZ2V0Q29uc2VudHModHJ1ZSlgIHRvIGxvYWQgdGhlIHRlbXBsYXRlcyBpZiB0aG9zZSBhcmUgbm90IHByZXNlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBhIHRlbXBsYXRlIElEIGJ5IHdoaWNoIHRvIGZpbHRlciB0aGUgcmVnaXN0ZXJlZCB0ZW1wbGF0ZXMuXG4gICAgICovXG4gICAgZ2V0Q29uc2VudCh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnNlbnQ+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IGlzIHRydXRoeSBhbmQgaWYgYGNvbnNlbnRXaXRoZHJhd25EYXRlYCBkb2Vzbid0IGV4aXN0LlxuICAgICAqIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25zZW50IHRvIGNoZWNrXG4gICAgICovXG4gICAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQ29uc2VudCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgaXMgZWl0aGVyIGZhbHN5IG9yIGlmIGBjb25zZW50V2l0aGRyYXduRGF0ZWAgaXMgcHJlc2VudC5cbiAgICAgKiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uc2VudCB0byBjaGVja1xuICAgICAqL1xuICAgIGlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50OiBDb25zZW50KTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBHaXZlIGNvbnNlbnQgZm9yIHNwZWNpZmllZCBjb25zZW50IHRlbXBsYXRlIElEIGFuZCB2ZXJzaW9uLlxuICAgICAqIEBwYXJhbSBjb25zZW50VGVtcGxhdGVJZCBhIHRlbXBsYXRlIElEIGZvciB3aGljaCB0byBnaXZlIGEgY29uc2VudFxuICAgICAqIEBwYXJhbSBjb25zZW50VGVtcGxhdGVWZXJzaW9uIGEgdGVtcGxhdGUgdmVyc2lvbiBmb3Igd2hpY2ggdG8gZ2l2ZSBhIGNvbnNlbnRcbiAgICAgKi9cbiAgICBnaXZlQ29uc2VudChjb25zZW50VGVtcGxhdGVJZDogc3RyaW5nLCBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGdpdmUgY29uc2VudCBwcm9jZXNzIGxvYWRpbmcgZmxhZ1xuICAgICAqL1xuICAgIGdldEdpdmVDb25zZW50UmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGdpdmUgY29uc2VudCBwcm9jZXNzIHN1Y2Nlc3MgZmxhZ1xuICAgICAqL1xuICAgIGdldEdpdmVDb25zZW50UmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGdpdmUgY29uc2VudCBwcm9jZXNzIGVycm9yIGZsYWdcbiAgICAgKi9cbiAgICBnZXRHaXZlQ29uc2VudFJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVzZW50cyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZmxhZ3NcbiAgICAgKi9cbiAgICByZXNldEdpdmVDb25zZW50UHJvY2Vzc1N0YXRlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogV2l0aGRyYXcgY29uc2VudCBmb3IgdGhlIGdpdmVuIGBjb25zZW50Q29kZWBcbiAgICAgKiBAcGFyYW0gY29uc2VudENvZGUgZm9yIHdoaWNoIHRvIHdpdGhkcmF3IHRoZSBjb25zZW50XG4gICAgICovXG4gICAgd2l0aGRyYXdDb25zZW50KGNvbnNlbnRDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICAgKi9cbiAgICBnZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgd2l0aGRyYXcgY29uc2VudCBwcm9jZXNzIHN1Y2Nlc3MgZmxhZ1xuICAgICAqL1xuICAgIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3aXRoZHJhdyBjb25zZW50IHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgICAqL1xuICAgIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBwcm9jZXNzIGZsYWdzIGZvciB3aXRoZHJhdyBjb25zZW50XG4gICAgICovXG4gICAgcmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBGaWx0ZXJzIHRoZSBwcm92aWRlZCBgdGVtcGxhdGVMaXN0YCcgdGVtcGxhdGVzIGJ5IGhpZGluZyB0aGUgdGVtcGxhdGUgSURzIHNwZWNpZmllZCBpbiBgaGlkZVRlbXBsYXRlSWRzYC5cbiAgICAgKiBJZiB0aGUgYGhpZGVUZW1wbGF0ZUlkc2AgaXMgZW1wdHksIHRoZSBwcm92aWRlZCBgdGVtcGxhdGVMaXN0YCBpcyByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUxpc3QgYSBsaXN0IG9mIGNvbnNlbnQgdGVtcGxhdGVzIHRvIGZpbHRlclxuICAgICAqIEBwYXJhbSBoaWRlVGVtcGxhdGVJZHMgdGVtcGxhdGUgSURzIHRvIGhpZGVcbiAgICAgKi9cbiAgICBmaWx0ZXJDb25zZW50VGVtcGxhdGVzKHRlbXBsYXRlTGlzdDogQ29uc2VudFRlbXBsYXRlW10sIGhpZGVUZW1wbGF0ZUlkcz86IHN0cmluZ1tdKTogQ29uc2VudFRlbXBsYXRlW107XG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBtZXRob2QgdG8gZGlzdGlucXVpc2ggcHJlIC8gcG9zdCAxLjMuMCBpbiBhIGNvbnZlbmllbnQgd2F5LlxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSB3aXRoVXNlcklkO1xufVxuIl19