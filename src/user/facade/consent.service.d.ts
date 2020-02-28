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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNvbnNlbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL2Fub255bW91cy1jb25zZW50cy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBDb25zZW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLWNvbnNlbnQuc2VydmljZSc7XG4vKipcbiAqIFVuaWZpZWQgZmFjYWRlIGZvciBib3RoIGFub255bW91cyBhbmQgcmVnaXN0ZXJlZCB1c2VyIGNvbnNlbnRzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb25zZW50U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZTtcbiAgICBjb25zdHJ1Y3Rvcihhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSwgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgZWl0aGVyIGFub255bW91cyBjb25zZW50IG9yIHJlZ2lzdGVyZWQgY29uc2VudCBhcyB0aGV5IGFyZSBlbW1pdGVkLlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIHJldHVybiBlaXRoZXIgYW5vbnltb3VzIG9yIHJlZ2lzdGVyZWQgY29uc2VudC5cbiAgICAgKi9cbiAgICBnZXRDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50IHwgQ29uc2VudD47XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBgdGVtcGxhdGVJZGAncyB0ZW1wbGF0ZSBoYXMgYSBnaXZlbiBjb25zZW50LlxuICAgICAqIFRoZSBtZXRob2QgcmV0dXJucyBgZmFsc2VgIGlmIHRoZSBjb25zZW50IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgaXQncyB3aXRoZHJhd24uIE90aGVyd2lzZSwgYHRydWVgIGlzIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRlbXBsYXRlSWQgb2YgYSB0ZW1wbGF0ZSB3aGljaCdzIGNvbnNlbnQgc2hvdWxkIGJlIGNoZWNrZWRcbiAgICAgKi9cbiAgICBjaGVja0NvbnNlbnRHaXZlbkJ5VGVtcGxhdGVJZCh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgYHRlbXBsYXRlSWRgJ3MgdGVtcGxhdGUgaGFzIGEgd2l0aGRyYXduIGNvbnNlbnQuXG4gICAgICogVGhlIG1ldGhvZCByZXR1cm5zIGB0cnVlYCBpZiB0aGUgY29uc2VudCBkb2Vzbid0IGV4aXN0IG9yIGlmIGl0J3Mgd2l0aGRyYXduLiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBvZiBhIHRlbXBsYXRlIHdoaWNoJ3MgY29uc2VudCBzaG91bGQgYmUgY2hlY2tlZFxuICAgICAqL1xuICAgIGNoZWNrQ29uc2VudFdpdGhkcmF3bkJ5VGVtcGxhdGVJZCh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQ2hlY2tzIHRoZSBwcm92aWRlZCBgY29uc2VudGAncyB0eXBlIGFuZCBkZWxlZ2F0ZXMgdG8gYW4gYXBwcm9wcmlhdGUgbWV0aG9kIC0gYGFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KWAgb3IgYHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudEdpdmVuYFxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnNlbnQgYSBjb25zZW50IHRvIGNoZWNrXG4gICAgICovXG4gICAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCB8IENvbnNlbnQpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQ2hlY2tzIHRoZSBwcm92aWRlZCBgY29uc2VudGAncyB0eXBlIGFuZCBkZWxlZ2F0ZXMgdG8gYW4gYXBwcm9wcmlhdGUgbWV0aG9kIC0gYGFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudClgIG9yIGB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd25gXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gY2hlY2tcbiAgICAgKi9cbiAgICBpc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCB8IENvbnNlbnQpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBjb25zZW50IGlzIG9mIHR5cGUgYEFub255bW91c0NvbnNlbnRgLiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgaXNBbm9ueW1vdXNDb25zZW50VHlwZShjb25zZW50OiBBbm9ueW1vdXNDb25zZW50IHwgQ29uc2VudCk6IGNvbnNlbnQgaXMgQW5vbnltb3VzQ29uc2VudDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgY29uc2VudCBpcyBvZiB0eXBlIGBDb25zZW50YC4gT3RoZXJ3aXNlLCBgZmFsc2VgIGlzIHJldHVybmVkLlxuICAgICAqL1xuICAgIGlzQ29uc2VudFR5cGUoY29uc2VudDogQW5vbnltb3VzQ29uc2VudCB8IENvbnNlbnQpOiBjb25zZW50IGlzIENvbnNlbnQ7XG59XG4iXX0=