import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { merge } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { AnonymousConsentsService } from '../../anonymous-consents/index';
import { UserConsentService } from './user-consent.service';
import * as i0 from "@angular/core";
import * as i1 from "../../anonymous-consents/facade/anonymous-consents.service";
import * as i2 from "./user-consent.service";
/**
 * Unified facade for both anonymous and registered user consents.
 */
let ConsentService = class ConsentService {
    constructor(anonymousConsentsService, userConsentService) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.userConsentService = userConsentService;
    }
    /**
     * Returns either anonymous consent or registered consent as they are emmited.
     * @param templateCode for which to return either anonymous or registered consent.
     */
    getConsent(templateCode) {
        return merge(this.userConsentService.getConsent(templateCode), this.anonymousConsentsService.getConsent(templateCode));
    }
    /**
     * Checks if the `templateId`'s template has a given consent.
     * The method returns `false` if the consent doesn't exist or if it's withdrawn. Otherwise, `true` is returned.
     *
     * @param templateId of a template which's consent should be checked
     */
    checkConsentGivenByTemplateId(templateId) {
        return this.getConsent(templateId).pipe(map((consent) => {
            if (!consent) {
                return false;
            }
            return this.isAnonymousConsentType(consent)
                ? this.anonymousConsentsService.isConsentGiven(consent)
                : this.userConsentService.isConsentGiven(consent);
        }), distinctUntilChanged());
    }
    /**
     * Checks if the `templateId`'s template has a withdrawn consent.
     * The method returns `true` if the consent doesn't exist or if it's withdrawn. Otherwise, `false` is returned.
     *
     * @param templateId of a template which's consent should be checked
     */
    checkConsentWithdrawnByTemplateId(templateId) {
        return this.getConsent(templateId).pipe(map((consent) => {
            if (!consent) {
                return true;
            }
            return this.isAnonymousConsentType(consent)
                ? this.anonymousConsentsService.isConsentWithdrawn(consent)
                : this.userConsentService.isConsentWithdrawn(consent);
        }), distinctUntilChanged());
    }
    /**
     *
     * Checks the provided `consent`'s type and delegates to an appropriate method - `anonymousConsentsService.isConsentGiven(consent)` or `this.userConsentService.isConsentGiven`
     *
     * @param consent a consent to check
     */
    isConsentGiven(consent) {
        return this.isAnonymousConsentType(consent)
            ? this.anonymousConsentsService.isConsentGiven(consent)
            : this.userConsentService.isConsentGiven(consent);
    }
    /**
     *
     * Checks the provided `consent`'s type and delegates to an appropriate method - `anonymousConsentsService.isConsentWithdrawn(consent)` or `this.userConsentService.isConsentWithdrawn`
     *
     * @param consent a consent to check
     */
    isConsentWithdrawn(consent) {
        return this.isAnonymousConsentType(consent)
            ? this.anonymousConsentsService.isConsentWithdrawn(consent)
            : this.userConsentService.isConsentWithdrawn(consent);
    }
    /**
     * Returns `true` if the provided consent is of type `AnonymousConsent`. Otherwise, `false` is returned.
     */
    isAnonymousConsentType(consent) {
        if (!consent) {
            return false;
        }
        return consent.templateCode !== undefined;
    }
    /**
     * Returns `true` if the provided consent is of type `Consent`. Otherwise, `false` is returned.
     */
    isConsentType(consent) {
        if (!consent) {
            return false;
        }
        return consent.code !== undefined;
    }
};
ConsentService.ctorParameters = () => [
    { type: AnonymousConsentsService },
    { type: UserConsentService }
];
ConsentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConsentService_Factory() { return new ConsentService(i0.ɵɵinject(i1.AnonymousConsentsService), i0.ɵɵinject(i2.UserConsentService)); }, token: ConsentService, providedIn: "root" });
ConsentService = __decorate([
    Injectable({ providedIn: 'root' })
], ConsentService);
export { ConsentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL2NvbnNlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUU1RDs7R0FFRztBQUVILElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekIsWUFDWSx3QkFBa0QsRUFDbEQsa0JBQXNDO1FBRHRDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUMvQyxDQUFDO0lBRUo7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLFlBQW9CO1FBQzdCLE9BQU8sS0FBSyxDQUNWLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQ2hELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQ3ZELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw2QkFBNkIsQ0FBQyxVQUFrQjtRQUM5QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztnQkFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsaUNBQWlDLENBQUMsVUFBa0I7UUFDbEQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDckMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO2dCQUMzRCxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsT0FBbUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUN2RCxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxrQkFBa0IsQ0FBQyxPQUFtQztRQUNwRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7WUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDM0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQkFBc0IsQ0FDcEIsT0FBbUM7UUFFbkMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFRLE9BQTRCLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhLENBQUMsT0FBbUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFRLE9BQW1CLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7WUF4R3VDLHdCQUF3QjtZQUM5QixrQkFBa0I7OztBQUh2QyxjQUFjO0lBRDFCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixjQUFjLENBMEcxQjtTQTFHWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hbm9ueW1vdXMtY29uc2VudHMvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCwgQ29uc2VudCB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IFVzZXJDb25zZW50U2VydmljZSB9IGZyb20gJy4vdXNlci1jb25zZW50LnNlcnZpY2UnO1xuXG4vKipcbiAqIFVuaWZpZWQgZmFjYWRlIGZvciBib3RoIGFub255bW91cyBhbmQgcmVnaXN0ZXJlZCB1c2VyIGNvbnNlbnRzLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZWl0aGVyIGFub255bW91cyBjb25zZW50IG9yIHJlZ2lzdGVyZWQgY29uc2VudCBhcyB0aGV5IGFyZSBlbW1pdGVkLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGZvciB3aGljaCB0byByZXR1cm4gZWl0aGVyIGFub255bW91cyBvciByZWdpc3RlcmVkIGNvbnNlbnQuXG4gICAqL1xuICBnZXRDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50IHwgQ29uc2VudD4ge1xuICAgIHJldHVybiBtZXJnZShcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnQodGVtcGxhdGVDb2RlKSxcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldENvbnNlbnQodGVtcGxhdGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBgdGVtcGxhdGVJZGAncyB0ZW1wbGF0ZSBoYXMgYSBnaXZlbiBjb25zZW50LlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgYGZhbHNlYCBpZiB0aGUgY29uc2VudCBkb2Vzbid0IGV4aXN0IG9yIGlmIGl0J3Mgd2l0aGRyYXduLiBPdGhlcndpc2UsIGB0cnVlYCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlSWQgb2YgYSB0ZW1wbGF0ZSB3aGljaCdzIGNvbnNlbnQgc2hvdWxkIGJlIGNoZWNrZWRcbiAgICovXG4gIGNoZWNrQ29uc2VudEdpdmVuQnlUZW1wbGF0ZUlkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnNlbnQodGVtcGxhdGVJZCkucGlwZShcbiAgICAgIG1hcCgoY29uc2VudCkgPT4ge1xuICAgICAgICBpZiAoIWNvbnNlbnQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pc0Fub255bW91c0NvbnNlbnRUeXBlKGNvbnNlbnQpXG4gICAgICAgICAgPyB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KVxuICAgICAgICAgIDogdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCk7XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYHRlbXBsYXRlSWRgJ3MgdGVtcGxhdGUgaGFzIGEgd2l0aGRyYXduIGNvbnNlbnQuXG4gICAqIFRoZSBtZXRob2QgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgZG9lc24ndCBleGlzdCBvciBpZiBpdCdzIHdpdGhkcmF3bi4gT3RoZXJ3aXNlLCBgZmFsc2VgIGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBvZiBhIHRlbXBsYXRlIHdoaWNoJ3MgY29uc2VudCBzaG91bGQgYmUgY2hlY2tlZFxuICAgKi9cbiAgY2hlY2tDb25zZW50V2l0aGRyYXduQnlUZW1wbGF0ZUlkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnNlbnQodGVtcGxhdGVJZCkucGlwZShcbiAgICAgIG1hcCgoY29uc2VudCkgPT4ge1xuICAgICAgICBpZiAoIWNvbnNlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmlzQW5vbnltb3VzQ29uc2VudFR5cGUoY29uc2VudClcbiAgICAgICAgICA/IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KVxuICAgICAgICAgIDogdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQpO1xuICAgICAgfSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBDaGVja3MgdGhlIHByb3ZpZGVkIGBjb25zZW50YCdzIHR5cGUgYW5kIGRlbGVnYXRlcyB0byBhbiBhcHByb3ByaWF0ZSBtZXRob2QgLSBgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpYCBvciBgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW5gXG4gICAqXG4gICAqIEBwYXJhbSBjb25zZW50IGEgY29uc2VudCB0byBjaGVja1xuICAgKi9cbiAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCB8IENvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0Fub255bW91c0NvbnNlbnRUeXBlKGNvbnNlbnQpXG4gICAgICA/IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpXG4gICAgICA6IHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIENoZWNrcyB0aGUgcHJvdmlkZWQgYGNvbnNlbnRgJ3MgdHlwZSBhbmQgZGVsZWdhdGVzIHRvIGFuIGFwcHJvcHJpYXRlIG1ldGhvZCAtIGBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQpYCBvciBgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduYFxuICAgKlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gY2hlY2tcbiAgICovXG4gIGlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50IHwgQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQW5vbnltb3VzQ29uc2VudFR5cGUoY29uc2VudClcbiAgICAgID8gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQpXG4gICAgICA6IHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgY29uc2VudCBpcyBvZiB0eXBlIGBBbm9ueW1vdXNDb25zZW50YC4gT3RoZXJ3aXNlLCBgZmFsc2VgIGlzIHJldHVybmVkLlxuICAgKi9cbiAgaXNBbm9ueW1vdXNDb25zZW50VHlwZShcbiAgICBjb25zZW50OiBBbm9ueW1vdXNDb25zZW50IHwgQ29uc2VudFxuICApOiBjb25zZW50IGlzIEFub255bW91c0NvbnNlbnQge1xuICAgIGlmICghY29uc2VudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAoY29uc2VudCBhcyBBbm9ueW1vdXNDb25zZW50KS50ZW1wbGF0ZUNvZGUgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgY29uc2VudCBpcyBvZiB0eXBlIGBDb25zZW50YC4gT3RoZXJ3aXNlLCBgZmFsc2VgIGlzIHJldHVybmVkLlxuICAgKi9cbiAgaXNDb25zZW50VHlwZShjb25zZW50OiBBbm9ueW1vdXNDb25zZW50IHwgQ29uc2VudCk6IGNvbnNlbnQgaXMgQ29uc2VudCB7XG4gICAgaWYgKCFjb25zZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIChjb25zZW50IGFzIENvbnNlbnQpLmNvZGUgIT09IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19