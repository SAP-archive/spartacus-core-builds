import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { Consent, ConsentTemplate } from '../../model/consent.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import * as ɵngcc0 from '@angular/core';
export declare class UserConsentService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserConsentService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidXNlci1jb25zZW50LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0dBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDb25zZW50LCBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlckNvbnNlbnRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PjtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBjb25zZW50cy5cbiAgICAgKi9cbiAgICBsb2FkQ29uc2VudHMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBjb25zZW50IHRlbXBsYXRlcy4gSWYgYGxvYWRJZk1pc3NpbmdgIHBhcmFtZXRlciBpcyBzZXQgdG8gYHRydWVgLCB0aGUgbWV0aG9kIHRyaWdnZXJzIHRoZSBsb2FkIGlmIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgICAqIEBwYXJhbSBsb2FkSWZNaXNzaW5nIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBtZXRob2Qgd2lsbCBsb2FkIHRlbXBsYXRlcyBpZiB0aG9zZSBhcmUgbm90IGFscmVhZHkgcHJlc2VudC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBnZXRDb25zZW50cyhsb2FkSWZNaXNzaW5nPzogYm9vbGVhbik6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIGxvYWRpbmcgZmxhZ1xuICAgICAqL1xuICAgIGdldENvbnNlbnRzUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIHN1Y2Nlc3MgZmxhZ1xuICAgICAqL1xuICAgIGdldENvbnNlbnRzUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIGVycm9yIGZsYWdcbiAgICAgKi9cbiAgICBnZXRDb25zZW50c1Jlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBwcm9jZXNzaW5nIHN0YXRlIGZvciBjb25zZW50IHJldHJpZXZhbFxuICAgICAqL1xuICAgIHJlc2V0Q29uc2VudHNQcm9jZXNzU3RhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZWdpc3RlcmVkIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiB0ZW1wbGF0ZSBJRC5cbiAgICAgKlxuICAgICAqIEFzIGEgc2lkZS1lZmZlY3QsIHRoZSBtZXRob2Qgd2lsbCBjYWxsIGBnZXRDb25zZW50cyh0cnVlKWAgdG8gbG9hZCB0aGUgdGVtcGxhdGVzIGlmIHRob3NlIGFyZSBub3QgcHJlc2VudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUlkIGEgdGVtcGxhdGUgSUQgYnkgd2hpY2ggdG8gZmlsdGVyIHRoZSByZWdpc3RlcmVkIHRlbXBsYXRlcy5cbiAgICAgKi9cbiAgICBnZXRDb25zZW50KHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgaXMgdHJ1dGh5IGFuZCBpZiBgY29uc2VudFdpdGhkcmF3bkRhdGVgIGRvZXNuJ3QgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlLCBgZmFsc2VgIGlzIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnNlbnQgdG8gY2hlY2tcbiAgICAgKi9cbiAgICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBDb25zZW50KTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY29uc2VudCBpcyBlaXRoZXIgZmFsc3kgb3IgaWYgYGNvbnNlbnRXaXRoZHJhd25EYXRlYCBpcyBwcmVzZW50LlxuICAgICAqIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25zZW50IHRvIGNoZWNrXG4gICAgICovXG4gICAgaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQ6IENvbnNlbnQpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEdpdmUgY29uc2VudCBmb3Igc3BlY2lmaWVkIGNvbnNlbnQgdGVtcGxhdGUgSUQgYW5kIHZlcnNpb24uXG4gICAgICogQHBhcmFtIGNvbnNlbnRUZW1wbGF0ZUlkIGEgdGVtcGxhdGUgSUQgZm9yIHdoaWNoIHRvIGdpdmUgYSBjb25zZW50XG4gICAgICogQHBhcmFtIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24gYSB0ZW1wbGF0ZSB2ZXJzaW9uIGZvciB3aGljaCB0byBnaXZlIGEgY29uc2VudFxuICAgICAqL1xuICAgIGdpdmVDb25zZW50KGNvbnNlbnRUZW1wbGF0ZUlkOiBzdHJpbmcsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAgICovXG4gICAgZ2V0R2l2ZUNvbnNlbnRSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAgICovXG4gICAgZ2V0R2l2ZUNvbnNlbnRSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgICAqL1xuICAgIGdldEdpdmVDb25zZW50UmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXNlbnRzIHRoZSBnaXZlIGNvbnNlbnQgcHJvY2VzcyBmbGFnc1xuICAgICAqL1xuICAgIHJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBXaXRoZHJhdyBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYGNvbnNlbnRDb2RlYFxuICAgICAqIEBwYXJhbSBjb25zZW50Q29kZSBmb3Igd2hpY2ggdG8gd2l0aGRyYXcgdGhlIGNvbnNlbnRcbiAgICAgKi9cbiAgICB3aXRoZHJhd0NvbnNlbnQoY29uc2VudENvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgd2l0aGRyYXcgY29uc2VudCBwcm9jZXNzIGxvYWRpbmcgZmxhZ1xuICAgICAqL1xuICAgIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3aXRoZHJhdyBjb25zZW50IHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAgICovXG4gICAgZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBlcnJvciBmbGFnXG4gICAgICovXG4gICAgZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHByb2Nlc3MgZmxhZ3MgZm9yIHdpdGhkcmF3IGNvbnNlbnRcbiAgICAgKi9cbiAgICByZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEZpbHRlcnMgdGhlIHByb3ZpZGVkIGB0ZW1wbGF0ZUxpc3RgJyB0ZW1wbGF0ZXMgYnkgaGlkaW5nIHRoZSB0ZW1wbGF0ZSBJRHMgc3BlY2lmaWVkIGluIGBoaWRlVGVtcGxhdGVJZHNgLlxuICAgICAqIElmIHRoZSBgaGlkZVRlbXBsYXRlSWRzYCBpcyBlbXB0eSwgdGhlIHByb3ZpZGVkIGB0ZW1wbGF0ZUxpc3RgIGlzIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRlbXBsYXRlTGlzdCBhIGxpc3Qgb2YgY29uc2VudCB0ZW1wbGF0ZXMgdG8gZmlsdGVyXG4gICAgICogQHBhcmFtIGhpZGVUZW1wbGF0ZUlkcyB0ZW1wbGF0ZSBJRHMgdG8gaGlkZVxuICAgICAqL1xuICAgIGZpbHRlckNvbnNlbnRUZW1wbGF0ZXModGVtcGxhdGVMaXN0OiBDb25zZW50VGVtcGxhdGVbXSwgaGlkZVRlbXBsYXRlSWRzPzogc3RyaW5nW10pOiBDb25zZW50VGVtcGxhdGVbXTtcbn1cbiJdfQ==