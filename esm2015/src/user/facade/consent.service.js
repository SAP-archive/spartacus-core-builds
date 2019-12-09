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
/**
 * Unified facade for both anonymous and registered user consents.
 */
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
     * Checks if the `templateId`'s template has a given consent.
     * The method returns `false` if the consent doesn't exist or if it's withdrawn. Otherwise, `true` is returned.
     *
     * @param {?} templateId of a template which's consent should be checked
     * @return {?}
     */
    checkConsentGivenByTemplateId(templateId) {
        return this.getConsent(templateId).pipe(map((/**
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
     * Checks if the `templateId`'s template has a withdrawn consent.
     * The method returns `true` if the consent doesn't exist or if it's withdrawn. Otherwise, `false` is returned.
     *
     * @param {?} templateId of a template which's consent should be checked
     * @return {?}
     */
    checkConsentWithdrawnByTemplateId(templateId) {
        return this.getConsent(templateId).pipe(map((/**
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
     *
     * Checks the provided `consent`'s type and delegates to an appropriate method - `anonymousConsentsService.isConsentGiven(consent)` or `this.userConsentService.isConsentGiven`
     *
     * @param {?} consent a consent to check
     * @return {?}
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
     * @param {?} consent a consent to check
     * @return {?}
     */
    isConsentWithdrawn(consent) {
        return this.isAnonymousConsentType(consent)
            ? this.anonymousConsentsService.isConsentWithdrawn(consent)
            : this.userConsentService.isConsentWithdrawn(consent);
    }
    /**
     * Returns `true` if the provided consent is of type `AnonymousConsent`. Otherwise, `false` is returned.
     * @param {?} consent
     * @return {?}
     */
    isAnonymousConsentType(consent) {
        if (!consent) {
            return false;
        }
        return ((/** @type {?} */ (consent))).templateCode !== undefined;
    }
    /**
     * Returns `true` if the provided consent is of type `Consent`. Otherwise, `false` is returned.
     * @param {?} consent
     * @return {?}
     */
    isConsentType(consent) {
        if (!consent) {
            return false;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL2NvbnNlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQU01RCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFDekIsWUFDWSx3QkFBa0QsRUFDbEQsa0JBQXNDO1FBRHRDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUMvQyxDQUFDOzs7Ozs7SUFNSixVQUFVLENBQUMsWUFBb0I7UUFDN0IsT0FBTyxLQUFLLENBQ1YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFDaEQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBUUQsNkJBQTZCLENBQUMsVUFBa0I7UUFDOUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDckMsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQVFELGlDQUFpQyxDQUFDLFVBQWtCO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQ3JDLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztnQkFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7Z0JBQzNELENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBUUQsY0FBYyxDQUFDLE9BQW1DO1FBQ2hELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7Ozs7SUFRRCxrQkFBa0IsQ0FBQyxPQUFtQztRQUNwRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7WUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDM0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFLRCxzQkFBc0IsQ0FDcEIsT0FBbUM7UUFFbkMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLENBQUMsbUJBQUEsT0FBTyxFQUFvQixDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFLRCxhQUFhLENBQUMsT0FBbUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLENBQUMsbUJBQUEsT0FBTyxFQUFXLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQ2pELENBQUM7OztZQTFHRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBUHpCLHdCQUF3QjtZQUV4QixrQkFBa0I7Ozs7Ozs7O0lBUXZCLGtEQUE0RDs7Ozs7SUFDNUQsNENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hbm9ueW1vdXMtY29uc2VudHMvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCwgQ29uc2VudCB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IFVzZXJDb25zZW50U2VydmljZSB9IGZyb20gJy4vdXNlci1jb25zZW50LnNlcnZpY2UnO1xuXG4vKipcbiAqIFVuaWZpZWQgZmFjYWRlIGZvciBib3RoIGFub255bW91cyBhbmQgcmVnaXN0ZXJlZCB1c2VyIGNvbnNlbnRzLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZWl0aGVyIGFub255bW91cyBjb25zZW50IG9yIHJlZ2lzdGVyZWQgY29uc2VudCBhcyB0aGV5IGFyZSBlbW1pdGVkLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGZvciB3aGljaCB0byByZXR1cm4gZWl0aGVyIGFub255bW91cyBvciByZWdpc3RlcmVkIGNvbnNlbnQuXG4gICAqL1xuICBnZXRDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50IHwgQ29uc2VudD4ge1xuICAgIHJldHVybiBtZXJnZShcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnQodGVtcGxhdGVDb2RlKSxcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldENvbnNlbnQodGVtcGxhdGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBgdGVtcGxhdGVJZGAncyB0ZW1wbGF0ZSBoYXMgYSBnaXZlbiBjb25zZW50LlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgYGZhbHNlYCBpZiB0aGUgY29uc2VudCBkb2Vzbid0IGV4aXN0IG9yIGlmIGl0J3Mgd2l0aGRyYXduLiBPdGhlcndpc2UsIGB0cnVlYCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlSWQgb2YgYSB0ZW1wbGF0ZSB3aGljaCdzIGNvbnNlbnQgc2hvdWxkIGJlIGNoZWNrZWRcbiAgICovXG4gIGNoZWNrQ29uc2VudEdpdmVuQnlUZW1wbGF0ZUlkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnNlbnQodGVtcGxhdGVJZCkucGlwZShcbiAgICAgIG1hcChjb25zZW50ID0+IHtcbiAgICAgICAgaWYgKCFjb25zZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50VHlwZShjb25zZW50KVxuICAgICAgICAgID8gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudClcbiAgICAgICAgICA6IHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpO1xuICAgICAgfSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGB0ZW1wbGF0ZUlkYCdzIHRlbXBsYXRlIGhhcyBhIHdpdGhkcmF3biBjb25zZW50LlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgaXQncyB3aXRoZHJhd24uIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlSWQgb2YgYSB0ZW1wbGF0ZSB3aGljaCdzIGNvbnNlbnQgc2hvdWxkIGJlIGNoZWNrZWRcbiAgICovXG4gIGNoZWNrQ29uc2VudFdpdGhkcmF3bkJ5VGVtcGxhdGVJZCh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25zZW50KHRlbXBsYXRlSWQpLnBpcGUoXG4gICAgICBtYXAoY29uc2VudCA9PiB7XG4gICAgICAgIGlmICghY29uc2VudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50VHlwZShjb25zZW50KVxuICAgICAgICAgID8gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQpXG4gICAgICAgICAgOiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudCk7XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIENoZWNrcyB0aGUgcHJvdmlkZWQgYGNvbnNlbnRgJ3MgdHlwZSBhbmQgZGVsZWdhdGVzIHRvIGFuIGFwcHJvcHJpYXRlIG1ldGhvZCAtIGBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudClgIG9yIGB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbmBcbiAgICpcbiAgICogQHBhcmFtIGNvbnNlbnQgYSBjb25zZW50IHRvIGNoZWNrXG4gICAqL1xuICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50IHwgQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQW5vbnltb3VzQ29uc2VudFR5cGUoY29uc2VudClcbiAgICAgID8gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudClcbiAgICAgIDogdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQ2hlY2tzIHRoZSBwcm92aWRlZCBgY29uc2VudGAncyB0eXBlIGFuZCBkZWxlZ2F0ZXMgdG8gYW4gYXBwcm9wcmlhdGUgbWV0aG9kIC0gYGFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudClgIG9yIGB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd25gXG4gICAqXG4gICAqIEBwYXJhbSBjb25zZW50IGEgY29uc2VudCB0byBjaGVja1xuICAgKi9cbiAgaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQgfCBDb25zZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50VHlwZShjb25zZW50KVxuICAgICAgPyB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudClcbiAgICAgIDogdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBjb25zZW50IGlzIG9mIHR5cGUgYEFub255bW91c0NvbnNlbnRgLiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBpc0Fub255bW91c0NvbnNlbnRUeXBlKFxuICAgIGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQgfCBDb25zZW50XG4gICk6IGNvbnNlbnQgaXMgQW5vbnltb3VzQ29uc2VudCB7XG4gICAgaWYgKCFjb25zZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIChjb25zZW50IGFzIEFub255bW91c0NvbnNlbnQpLnRlbXBsYXRlQ29kZSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBjb25zZW50IGlzIG9mIHR5cGUgYENvbnNlbnRgLiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBpc0NvbnNlbnRUeXBlKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQgfCBDb25zZW50KTogY29uc2VudCBpcyBDb25zZW50IHtcbiAgICBpZiAoIWNvbnNlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGNvbnNlbnQgYXMgQ29uc2VudCkuY29kZSAhPT0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=