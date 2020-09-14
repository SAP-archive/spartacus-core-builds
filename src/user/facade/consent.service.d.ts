import { Observable } from 'rxjs';
import { AnonymousConsentsService } from '../../anonymous-consents/index';
import { AnonymousConsent, Consent } from '../../model/index';
import { UserConsentService } from './user-consent.service';
/**
 * Unified facade for both anonymous and registered user consents.
 */
import * as ɵngcc0 from '@angular/core';
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
     * Checks if the `templateId`'s template has a given consent.
     * The method returns `false` if the consent doesn't exist or if it's withdrawn. Otherwise, `true` is returned.
     *
     * @param templateId of a template which's consent should be checked
     */
    checkConsentGivenByTemplateId(templateId: string): Observable<boolean>;
    /**
     * Checks if the `templateId`'s template has a withdrawn consent.
     * The method returns `true` if the consent doesn't exist or if it's withdrawn. Otherwise, `false` is returned.
     *
     * @param templateId of a template which's consent should be checked
     */
    checkConsentWithdrawnByTemplateId(templateId: string): Observable<boolean>;
    /**
     *
     * Checks the provided `consent`'s type and delegates to an appropriate method - `anonymousConsentsService.isConsentGiven(consent)` or `this.userConsentService.isConsentGiven`
     *
     * @param consent a consent to check
     */
    isConsentGiven(consent: AnonymousConsent | Consent): boolean;
    /**
     *
     * Checks the provided `consent`'s type and delegates to an appropriate method - `anonymousConsentsService.isConsentWithdrawn(consent)` or `this.userConsentService.isConsentWithdrawn`
     *
     * @param consent a consent to check
     */
    isConsentWithdrawn(consent: AnonymousConsent | Consent): boolean;
    /**
     * Returns `true` if the provided consent is of type `AnonymousConsent`. Otherwise, `false` is returned.
     */
    isAnonymousConsentType(consent: AnonymousConsent | Consent): consent is AnonymousConsent;
    /**
     * Returns `true` if the provided consent is of type `Consent`. Otherwise, `false` is returned.
     */
    isConsentType(consent: AnonymousConsent | Consent): consent is Consent;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsentService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNvbnNlbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW5vbnltb3VzLWNvbnNlbnRzL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIENvbnNlbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQ29uc2VudFNlcnZpY2UgfSBmcm9tICcuL3VzZXItY29uc2VudC5zZXJ2aWNlJztcbi8qKlxuICogVW5pZmllZCBmYWNhZGUgZm9yIGJvdGggYW5vbnltb3VzIGFuZCByZWdpc3RlcmVkIHVzZXIgY29uc2VudHMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbnNlbnRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLCB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBlaXRoZXIgYW5vbnltb3VzIGNvbnNlbnQgb3IgcmVnaXN0ZXJlZCBjb25zZW50IGFzIHRoZXkgYXJlIGVtbWl0ZWQuXG4gICAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBmb3Igd2hpY2ggdG8gcmV0dXJuIGVpdGhlciBhbm9ueW1vdXMgb3IgcmVnaXN0ZXJlZCBjb25zZW50LlxuICAgICAqL1xuICAgIGdldENvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnQgfCBDb25zZW50PjtcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGB0ZW1wbGF0ZUlkYCdzIHRlbXBsYXRlIGhhcyBhIGdpdmVuIGNvbnNlbnQuXG4gICAgICogVGhlIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAgaWYgdGhlIGNvbnNlbnQgZG9lc24ndCBleGlzdCBvciBpZiBpdCdzIHdpdGhkcmF3bi4gT3RoZXJ3aXNlLCBgdHJ1ZWAgaXMgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBvZiBhIHRlbXBsYXRlIHdoaWNoJ3MgY29uc2VudCBzaG91bGQgYmUgY2hlY2tlZFxuICAgICAqL1xuICAgIGNoZWNrQ29uc2VudEdpdmVuQnlUZW1wbGF0ZUlkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBgdGVtcGxhdGVJZGAncyB0ZW1wbGF0ZSBoYXMgYSB3aXRoZHJhd24gY29uc2VudC5cbiAgICAgKiBUaGUgbWV0aG9kIHJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgaXQncyB3aXRoZHJhd24uIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUlkIG9mIGEgdGVtcGxhdGUgd2hpY2gncyBjb25zZW50IHNob3VsZCBiZSBjaGVja2VkXG4gICAgICovXG4gICAgY2hlY2tDb25zZW50V2l0aGRyYXduQnlUZW1wbGF0ZUlkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBDaGVja3MgdGhlIHByb3ZpZGVkIGBjb25zZW50YCdzIHR5cGUgYW5kIGRlbGVnYXRlcyB0byBhbiBhcHByb3ByaWF0ZSBtZXRob2QgLSBgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpYCBvciBgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW5gXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gY2hlY2tcbiAgICAgKi9cbiAgICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50IHwgQ29uc2VudCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBDaGVja3MgdGhlIHByb3ZpZGVkIGBjb25zZW50YCdzIHR5cGUgYW5kIGRlbGVnYXRlcyB0byBhbiBhcHByb3ByaWF0ZSBtZXRob2QgLSBgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KWAgb3IgYHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bmBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25zZW50IGEgY29uc2VudCB0byBjaGVja1xuICAgICAqL1xuICAgIGlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50IHwgQ29uc2VudCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGNvbnNlbnQgaXMgb2YgdHlwZSBgQW5vbnltb3VzQ29uc2VudGAuIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICAgKi9cbiAgICBpc0Fub255bW91c0NvbnNlbnRUeXBlKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQgfCBDb25zZW50KTogY29uc2VudCBpcyBBbm9ueW1vdXNDb25zZW50O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBjb25zZW50IGlzIG9mIHR5cGUgYENvbnNlbnRgLiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgaXNDb25zZW50VHlwZShjb25zZW50OiBBbm9ueW1vdXNDb25zZW50IHwgQ29uc2VudCk6IGNvbnNlbnQgaXMgQ29uc2VudDtcbn1cbiJdfQ==