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
var ConsentService = /** @class */ (function () {
    function ConsentService(anonymousConsentsService, userConsentService) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.userConsentService = userConsentService;
    }
    /**
     * Returns either anonymous consent or registered consent as they are emmited.
     * @param templateCode for which to return either anonymous or registered consent.
     */
    /**
     * Returns either anonymous consent or registered consent as they are emmited.
     * @param {?} templateCode for which to return either anonymous or registered consent.
     * @return {?}
     */
    ConsentService.prototype.getConsent = /**
     * Returns either anonymous consent or registered consent as they are emmited.
     * @param {?} templateCode for which to return either anonymous or registered consent.
     * @return {?}
     */
    function (templateCode) {
        return merge(this.userConsentService.getConsent(templateCode), this.anonymousConsentsService.getConsent(templateCode));
    };
    /**
     * Checks if the `templateCode`'s template has a given consent.
     * The method returns `false` if the consent doesn't exist or if it's withdrawn. Otherwise, `true` is returned.
     *
     * @param templateCode of a template which's consent should be checked
     */
    /**
     * Checks if the `templateCode`'s template has a given consent.
     * The method returns `false` if the consent doesn't exist or if it's withdrawn. Otherwise, `true` is returned.
     *
     * @param {?} templateCode of a template which's consent should be checked
     * @return {?}
     */
    ConsentService.prototype.isConsentGiven = /**
     * Checks if the `templateCode`'s template has a given consent.
     * The method returns `false` if the consent doesn't exist or if it's withdrawn. Otherwise, `true` is returned.
     *
     * @param {?} templateCode of a template which's consent should be checked
     * @return {?}
     */
    function (templateCode) {
        var _this = this;
        return this.getConsent(templateCode).pipe(map((/**
         * @param {?} consent
         * @return {?}
         */
        function (consent) {
            if (!consent) {
                return false;
            }
            return _this.isAnonymousConsentType(consent)
                ? _this.anonymousConsentsService.isConsentGiven(consent)
                : _this.userConsentService.isConsentGiven(consent);
        })), distinctUntilChanged());
    };
    /**
     * Checks if the `templateCode`'s template has a withdrawn consent.
     * The method returns `true` if the consent doesn't exist or if it's withdrawn. Otherwise, `false` is returned.
     *
     * @param templateCode of a template which's consent should be checked
     */
    /**
     * Checks if the `templateCode`'s template has a withdrawn consent.
     * The method returns `true` if the consent doesn't exist or if it's withdrawn. Otherwise, `false` is returned.
     *
     * @param {?} templateCode of a template which's consent should be checked
     * @return {?}
     */
    ConsentService.prototype.isConsentWithdrawn = /**
     * Checks if the `templateCode`'s template has a withdrawn consent.
     * The method returns `true` if the consent doesn't exist or if it's withdrawn. Otherwise, `false` is returned.
     *
     * @param {?} templateCode of a template which's consent should be checked
     * @return {?}
     */
    function (templateCode) {
        var _this = this;
        return this.getConsent(templateCode).pipe(map((/**
         * @param {?} consent
         * @return {?}
         */
        function (consent) {
            if (!consent) {
                return true;
            }
            return _this.isAnonymousConsentType(consent)
                ? _this.anonymousConsentsService.isConsentWithdrawn(consent)
                : _this.userConsentService.isConsentWithdrawn(consent);
        })), distinctUntilChanged());
    };
    /**
     * Returns `true` if the provided consent is of type `AnonymousConsent`. Otherwise, `false` is returned.
     */
    /**
     * Returns `true` if the provided consent is of type `AnonymousConsent`. Otherwise, `false` is returned.
     * @param {?} consent
     * @return {?}
     */
    ConsentService.prototype.isAnonymousConsentType = /**
     * Returns `true` if the provided consent is of type `AnonymousConsent`. Otherwise, `false` is returned.
     * @param {?} consent
     * @return {?}
     */
    function (consent) {
        return ((/** @type {?} */ (consent))).templateCode !== undefined;
    };
    /**
     * Returns `true` if the provided consent is of type `Consent`. Otherwise, `false` is returned.
     */
    /**
     * Returns `true` if the provided consent is of type `Consent`. Otherwise, `false` is returned.
     * @param {?} consent
     * @return {?}
     */
    ConsentService.prototype.isConsentType = /**
     * Returns `true` if the provided consent is of type `Consent`. Otherwise, `false` is returned.
     * @param {?} consent
     * @return {?}
     */
    function (consent) {
        return ((/** @type {?} */ (consent))).code !== undefined;
    };
    ConsentService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ConsentService.ctorParameters = function () { return [
        { type: AnonymousConsentsService },
        { type: UserConsentService }
    ]; };
    /** @nocollapse */ ConsentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConsentService_Factory() { return new ConsentService(i0.ɵɵinject(i1.AnonymousConsentsService), i0.ɵɵinject(i2.UserConsentService)); }, token: ConsentService, providedIn: "root" });
    return ConsentService;
}());
export { ConsentService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL2NvbnNlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUU1RDtJQUVFLHdCQUNZLHdCQUFrRCxFQUNsRCxrQkFBc0M7UUFEdEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQy9DLENBQUM7SUFFSjs7O09BR0c7Ozs7OztJQUNILG1DQUFVOzs7OztJQUFWLFVBQVcsWUFBb0I7UUFDN0IsT0FBTyxLQUFLLENBQ1YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFDaEQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7SUFDSCx1Q0FBYzs7Ozs7OztJQUFkLFVBQWUsWUFBb0I7UUFBbkMsaUJBYUM7UUFaQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUN2QyxHQUFHOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsT0FBTyxLQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsS0FBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZELENBQUMsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsMkNBQWtCOzs7Ozs7O0lBQWxCLFVBQW1CLFlBQW9CO1FBQXZDLGlCQWFDO1FBWkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDdkMsR0FBRzs7OztRQUFDLFVBQUEsT0FBTztZQUNULElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELE9BQU8sS0FBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztnQkFDekMsQ0FBQyxDQUFDLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7Z0JBQzNELENBQUMsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsK0NBQXNCOzs7OztJQUF0QixVQUNFLE9BQW1DO1FBRW5DLE9BQU8sQ0FBQyxtQkFBQSxPQUFPLEVBQW9CLENBQUMsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsc0NBQWE7Ozs7O0lBQWIsVUFBYyxPQUFtQztRQUMvQyxPQUFPLENBQUMsbUJBQUEsT0FBTyxFQUFXLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQ2pELENBQUM7O2dCQTFFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUp6Qix3QkFBd0I7Z0JBRXhCLGtCQUFrQjs7O3lCQUwzQjtDQWtGQyxBQTNFRCxJQTJFQztTQTFFWSxjQUFjOzs7Ozs7SUFFdkIsa0RBQTREOzs7OztJQUM1RCw0Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL2Fub255bW91cy1jb25zZW50cy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBDb25zZW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLWNvbnNlbnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29uc2VudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBlaXRoZXIgYW5vbnltb3VzIGNvbnNlbnQgb3IgcmVnaXN0ZXJlZCBjb25zZW50IGFzIHRoZXkgYXJlIGVtbWl0ZWQuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIHJldHVybiBlaXRoZXIgYW5vbnltb3VzIG9yIHJlZ2lzdGVyZWQgY29uc2VudC5cbiAgICovXG4gIGdldENvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnQgfCBDb25zZW50PiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGUpLFxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGB0ZW1wbGF0ZUNvZGVgJ3MgdGVtcGxhdGUgaGFzIGEgZ2l2ZW4gY29uc2VudC5cbiAgICogVGhlIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAgaWYgdGhlIGNvbnNlbnQgZG9lc24ndCBleGlzdCBvciBpZiBpdCdzIHdpdGhkcmF3bi4gT3RoZXJ3aXNlLCBgdHJ1ZWAgaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgb2YgYSB0ZW1wbGF0ZSB3aGljaCdzIGNvbnNlbnQgc2hvdWxkIGJlIGNoZWNrZWRcbiAgICovXG4gIGlzQ29uc2VudEdpdmVuKHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGUpLnBpcGUoXG4gICAgICBtYXAoY29uc2VudCA9PiB7XG4gICAgICAgIGlmICghY29uc2VudCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmlzQW5vbnltb3VzQ29uc2VudFR5cGUoY29uc2VudClcbiAgICAgICAgICA/IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpXG4gICAgICAgICAgOiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KTtcbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBgdGVtcGxhdGVDb2RlYCdzIHRlbXBsYXRlIGhhcyBhIHdpdGhkcmF3biBjb25zZW50LlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgaXQncyB3aXRoZHJhd24uIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBvZiBhIHRlbXBsYXRlIHdoaWNoJ3MgY29uc2VudCBzaG91bGQgYmUgY2hlY2tlZFxuICAgKi9cbiAgaXNDb25zZW50V2l0aGRyYXduKHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGUpLnBpcGUoXG4gICAgICBtYXAoY29uc2VudCA9PiB7XG4gICAgICAgIGlmICghY29uc2VudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50VHlwZShjb25zZW50KVxuICAgICAgICAgID8gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQpXG4gICAgICAgICAgOiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudCk7XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBjb25zZW50IGlzIG9mIHR5cGUgYEFub255bW91c0NvbnNlbnRgLiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBpc0Fub255bW91c0NvbnNlbnRUeXBlKFxuICAgIGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQgfCBDb25zZW50XG4gICk6IGNvbnNlbnQgaXMgQW5vbnltb3VzQ29uc2VudCB7XG4gICAgcmV0dXJuIChjb25zZW50IGFzIEFub255bW91c0NvbnNlbnQpLnRlbXBsYXRlQ29kZSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBjb25zZW50IGlzIG9mIHR5cGUgYENvbnNlbnRgLiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBpc0NvbnNlbnRUeXBlKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQgfCBDb25zZW50KTogY29uc2VudCBpcyBDb25zZW50IHtcbiAgICByZXR1cm4gKGNvbnNlbnQgYXMgQ29uc2VudCkuY29kZSAhPT0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=