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
        return this.getConsent(templateId).pipe(map(consent => {
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
        return this.getConsent(templateId).pipe(map(consent => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL2NvbnNlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUU1RDs7R0FFRztBQUVILElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekIsWUFDWSx3QkFBa0QsRUFDbEQsa0JBQXNDO1FBRHRDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUMvQyxDQUFDO0lBRUo7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLFlBQW9CO1FBQzdCLE9BQU8sS0FBSyxDQUNWLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQ2hELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQ3ZELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw2QkFBNkIsQ0FBQyxVQUFrQjtRQUM5QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGlDQUFpQyxDQUFDLFVBQWtCO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQ3JDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztnQkFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7Z0JBQzNELENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGNBQWMsQ0FBQyxPQUFtQztRQUNoRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7WUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGtCQUFrQixDQUFDLE9BQW1DO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUMzRCxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7T0FFRztJQUNILHNCQUFzQixDQUNwQixPQUFtQztRQUVuQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQVEsT0FBNEIsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxPQUFtQztRQUMvQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQVEsT0FBbUIsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQ2pELENBQUM7Q0FDRixDQUFBOztZQXhHdUMsd0JBQXdCO1lBQzlCLGtCQUFrQjs7O0FBSHZDLGNBQWM7SUFEMUIsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLGNBQWMsQ0EwRzFCO1NBMUdZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL2Fub255bW91cy1jb25zZW50cy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBDb25zZW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLWNvbnNlbnQuc2VydmljZSc7XG5cbi8qKlxuICogVW5pZmllZCBmYWNhZGUgZm9yIGJvdGggYW5vbnltb3VzIGFuZCByZWdpc3RlcmVkIHVzZXIgY29uc2VudHMuXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29uc2VudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBlaXRoZXIgYW5vbnltb3VzIGNvbnNlbnQgb3IgcmVnaXN0ZXJlZCBjb25zZW50IGFzIHRoZXkgYXJlIGVtbWl0ZWQuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIHJldHVybiBlaXRoZXIgYW5vbnltb3VzIG9yIHJlZ2lzdGVyZWQgY29uc2VudC5cbiAgICovXG4gIGdldENvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnQgfCBDb25zZW50PiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGUpLFxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGB0ZW1wbGF0ZUlkYCdzIHRlbXBsYXRlIGhhcyBhIGdpdmVuIGNvbnNlbnQuXG4gICAqIFRoZSBtZXRob2QgcmV0dXJucyBgZmFsc2VgIGlmIHRoZSBjb25zZW50IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgaXQncyB3aXRoZHJhd24uIE90aGVyd2lzZSwgYHRydWVgIGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBvZiBhIHRlbXBsYXRlIHdoaWNoJ3MgY29uc2VudCBzaG91bGQgYmUgY2hlY2tlZFxuICAgKi9cbiAgY2hlY2tDb25zZW50R2l2ZW5CeVRlbXBsYXRlSWQodGVtcGxhdGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uc2VudCh0ZW1wbGF0ZUlkKS5waXBlKFxuICAgICAgbWFwKGNvbnNlbnQgPT4ge1xuICAgICAgICBpZiAoIWNvbnNlbnQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pc0Fub255bW91c0NvbnNlbnRUeXBlKGNvbnNlbnQpXG4gICAgICAgICAgPyB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KVxuICAgICAgICAgIDogdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCk7XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYHRlbXBsYXRlSWRgJ3MgdGVtcGxhdGUgaGFzIGEgd2l0aGRyYXduIGNvbnNlbnQuXG4gICAqIFRoZSBtZXRob2QgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgZG9lc24ndCBleGlzdCBvciBpZiBpdCdzIHdpdGhkcmF3bi4gT3RoZXJ3aXNlLCBgZmFsc2VgIGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBvZiBhIHRlbXBsYXRlIHdoaWNoJ3MgY29uc2VudCBzaG91bGQgYmUgY2hlY2tlZFxuICAgKi9cbiAgY2hlY2tDb25zZW50V2l0aGRyYXduQnlUZW1wbGF0ZUlkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnNlbnQodGVtcGxhdGVJZCkucGlwZShcbiAgICAgIG1hcChjb25zZW50ID0+IHtcbiAgICAgICAgaWYgKCFjb25zZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pc0Fub255bW91c0NvbnNlbnRUeXBlKGNvbnNlbnQpXG4gICAgICAgICAgPyB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudClcbiAgICAgICAgICA6IHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KTtcbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQ2hlY2tzIHRoZSBwcm92aWRlZCBgY29uc2VudGAncyB0eXBlIGFuZCBkZWxlZ2F0ZXMgdG8gYW4gYXBwcm9wcmlhdGUgbWV0aG9kIC0gYGFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KWAgb3IgYHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudEdpdmVuYFxuICAgKlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gY2hlY2tcbiAgICovXG4gIGlzQ29uc2VudEdpdmVuKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQgfCBDb25zZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50VHlwZShjb25zZW50KVxuICAgICAgPyB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KVxuICAgICAgOiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBDaGVja3MgdGhlIHByb3ZpZGVkIGBjb25zZW50YCdzIHR5cGUgYW5kIGRlbGVnYXRlcyB0byBhbiBhcHByb3ByaWF0ZSBtZXRob2QgLSBgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KWAgb3IgYHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bmBcbiAgICpcbiAgICogQHBhcmFtIGNvbnNlbnQgYSBjb25zZW50IHRvIGNoZWNrXG4gICAqL1xuICBpc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCB8IENvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0Fub255bW91c0NvbnNlbnRUeXBlKGNvbnNlbnQpXG4gICAgICA/IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KVxuICAgICAgOiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGNvbnNlbnQgaXMgb2YgdHlwZSBgQW5vbnltb3VzQ29uc2VudGAuIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICovXG4gIGlzQW5vbnltb3VzQ29uc2VudFR5cGUoXG4gICAgY29uc2VudDogQW5vbnltb3VzQ29uc2VudCB8IENvbnNlbnRcbiAgKTogY29uc2VudCBpcyBBbm9ueW1vdXNDb25zZW50IHtcbiAgICBpZiAoIWNvbnNlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGNvbnNlbnQgYXMgQW5vbnltb3VzQ29uc2VudCkudGVtcGxhdGVDb2RlICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGNvbnNlbnQgaXMgb2YgdHlwZSBgQ29uc2VudGAuIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICovXG4gIGlzQ29uc2VudFR5cGUoY29uc2VudDogQW5vbnltb3VzQ29uc2VudCB8IENvbnNlbnQpOiBjb25zZW50IGlzIENvbnNlbnQge1xuICAgIGlmICghY29uc2VudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAoY29uc2VudCBhcyBDb25zZW50KS5jb2RlICE9PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==