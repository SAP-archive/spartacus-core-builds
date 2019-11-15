/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { merge } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { AnonymousConsentsService } from '../../anonymous-consents/index';
import { UserConsentService } from './user-consent.service';
import * as i0 from "@angular/core";
import * as i1 from "../../anonymous-consents/facade/anonymous-consents.service";
import * as i2 from "./user-consent.service";
export class ConsentService {
    /**
     * @param {?} anonymousConsentsService
     * @param {?} userConsentService
     */
    constructor(anonymousConsentsService, userConsentService) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.userConsentService = userConsentService;
    }
    /**
     * Returns either anonymous consent or registered consent as they are emmited.
     * @param {?} templateCode for which to return either anonymous or registered consent.
     * @return {?}
     */
    getConsent(templateCode) {
        return merge(this.userConsentService.getConsent(templateCode), this.anonymousConsentsService.getConsent(templateCode));
    }
    /**
     * Checks if the `templateCode`'s template has a given consent.
     * The method returns `false` if the consent doesn't exist or if it's withdrawn. Otherwise, `true` is returned.
     *
     * @param {?} templateCode of a template which's consent should be checked
     * @return {?}
     */
    isConsentGiven(templateCode) {
        return this.getConsent(templateCode).pipe(map((/**
         * @param {?} consent
         * @return {?}
         */
        consent => {
            if (!consent) {
                return false;
            }
            return this.isAnonymousConsentType(consent)
                ? this.anonymousConsentsService.isConsentGiven(consent)
                : this.userConsentService.isConsentGiven(consent);
        })), distinctUntilChanged());
    }
    /**
     * Checks if the `templateCode`'s template has a withdrawn consent.
     * The method returns `true` if the consent doesn't exist or if it's withdrawn. Otherwise, `false` is returned.
     *
     * @param {?} templateCode of a template which's consent should be checked
     * @return {?}
     */
    isConsentWithdrawn(templateCode) {
        return this.getConsent(templateCode).pipe(map((/**
         * @param {?} consent
         * @return {?}
         */
        consent => {
            if (!consent) {
                return true;
            }
            return this.isAnonymousConsentType(consent)
                ? this.anonymousConsentsService.isConsentWithdrawn(consent)
                : this.userConsentService.isConsentWithdrawn(consent);
        })), distinctUntilChanged());
    }
    /**
     * Returns `true` if the provided consent is of type `AnonymousConsent`. Otherwise, `false` is returned.
     * @param {?} consent
     * @return {?}
     */
    isAnonymousConsentType(consent) {
        return ((/** @type {?} */ (consent))).templateCode !== undefined;
    }
    /**
     * Returns `true` if the provided consent is of type `Consent`. Otherwise, `false` is returned.
     * @param {?} consent
     * @return {?}
     */
    isConsentType(consent) {
        return ((/** @type {?} */ (consent))).code !== undefined;
    }
}
ConsentService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ConsentService.ctorParameters = () => [
    { type: AnonymousConsentsService },
    { type: UserConsentService }
];
/** @nocollapse */ ConsentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConsentService_Factory() { return new ConsentService(i0.ɵɵinject(i1.AnonymousConsentsService), i0.ɵɵinject(i2.UserConsentService)); }, token: ConsentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ConsentService.prototype.anonymousConsentsService;
    /**
     * @type {?}
     * @protected
     */
    ConsentService.prototype.userConsentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL2NvbnNlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUc1RCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFDekIsWUFDWSx3QkFBa0QsRUFDbEQsa0JBQXNDO1FBRHRDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUMvQyxDQUFDOzs7Ozs7SUFNSixVQUFVLENBQUMsWUFBb0I7UUFDN0IsT0FBTyxLQUFLLENBQ1YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFDaEQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBUUQsY0FBYyxDQUFDLFlBQW9CO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztnQkFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFRRCxrQkFBa0IsQ0FBQyxZQUFvQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUN2QyxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO2dCQUMzRCxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxzQkFBc0IsQ0FDcEIsT0FBbUM7UUFFbkMsT0FBTyxDQUFDLG1CQUFBLE9BQU8sRUFBb0IsQ0FBQyxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBS0QsYUFBYSxDQUFDLE9BQW1DO1FBQy9DLE9BQU8sQ0FBQyxtQkFBQSxPQUFPLEVBQVcsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7SUFDakQsQ0FBQzs7O1lBMUVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFKekIsd0JBQXdCO1lBRXhCLGtCQUFrQjs7Ozs7Ozs7SUFLdkIsa0RBQTREOzs7OztJQUM1RCw0Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL2Fub255bW91cy1jb25zZW50cy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBDb25zZW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLWNvbnNlbnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29uc2VudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBlaXRoZXIgYW5vbnltb3VzIGNvbnNlbnQgb3IgcmVnaXN0ZXJlZCBjb25zZW50IGFzIHRoZXkgYXJlIGVtbWl0ZWQuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIHJldHVybiBlaXRoZXIgYW5vbnltb3VzIG9yIHJlZ2lzdGVyZWQgY29uc2VudC5cbiAgICovXG4gIGdldENvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnQgfCBDb25zZW50PiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGUpLFxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGB0ZW1wbGF0ZUNvZGVgJ3MgdGVtcGxhdGUgaGFzIGEgZ2l2ZW4gY29uc2VudC5cbiAgICogVGhlIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAgaWYgdGhlIGNvbnNlbnQgZG9lc24ndCBleGlzdCBvciBpZiBpdCdzIHdpdGhkcmF3bi4gT3RoZXJ3aXNlLCBgdHJ1ZWAgaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgb2YgYSB0ZW1wbGF0ZSB3aGljaCdzIGNvbnNlbnQgc2hvdWxkIGJlIGNoZWNrZWRcbiAgICovXG4gIGlzQ29uc2VudEdpdmVuKHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGUpLnBpcGUoXG4gICAgICBtYXAoY29uc2VudCA9PiB7XG4gICAgICAgIGlmICghY29uc2VudCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmlzQW5vbnltb3VzQ29uc2VudFR5cGUoY29uc2VudClcbiAgICAgICAgICA/IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpXG4gICAgICAgICAgOiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KTtcbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBgdGVtcGxhdGVDb2RlYCdzIHRlbXBsYXRlIGhhcyBhIHdpdGhkcmF3biBjb25zZW50LlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgaXQncyB3aXRoZHJhd24uIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBvZiBhIHRlbXBsYXRlIHdoaWNoJ3MgY29uc2VudCBzaG91bGQgYmUgY2hlY2tlZFxuICAgKi9cbiAgaXNDb25zZW50V2l0aGRyYXduKHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGUpLnBpcGUoXG4gICAgICBtYXAoY29uc2VudCA9PiB7XG4gICAgICAgIGlmICghY29uc2VudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50VHlwZShjb25zZW50KVxuICAgICAgICAgID8gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQpXG4gICAgICAgICAgOiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudCk7XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBjb25zZW50IGlzIG9mIHR5cGUgYEFub255bW91c0NvbnNlbnRgLiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBpc0Fub255bW91c0NvbnNlbnRUeXBlKFxuICAgIGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQgfCBDb25zZW50XG4gICk6IGNvbnNlbnQgaXMgQW5vbnltb3VzQ29uc2VudCB7XG4gICAgcmV0dXJuIChjb25zZW50IGFzIEFub255bW91c0NvbnNlbnQpLnRlbXBsYXRlQ29kZSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBjb25zZW50IGlzIG9mIHR5cGUgYENvbnNlbnRgLiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBpc0NvbnNlbnRUeXBlKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQgfCBDb25zZW50KTogY29uc2VudCBpcyBDb25zZW50IHtcbiAgICByZXR1cm4gKGNvbnNlbnQgYXMgQ29uc2VudCkuY29kZSAhPT0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=