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
var ConsentService = /** @class */ (function () {
    function ConsentService(anonymousConsentsService, userConsentService) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.userConsentService = userConsentService;
    }
    /**
     * Returns either anonymous consent or registered consent as they are emmited.
     * @param templateCode for which to return either anonymous or registered consent.
     */
    ConsentService.prototype.getConsent = function (templateCode) {
        return merge(this.userConsentService.getConsent(templateCode), this.anonymousConsentsService.getConsent(templateCode));
    };
    /**
     * Checks if the `templateId`'s template has a given consent.
     * The method returns `false` if the consent doesn't exist or if it's withdrawn. Otherwise, `true` is returned.
     *
     * @param templateId of a template which's consent should be checked
     */
    ConsentService.prototype.checkConsentGivenByTemplateId = function (templateId) {
        var _this = this;
        return this.getConsent(templateId).pipe(map(function (consent) {
            if (!consent) {
                return false;
            }
            return _this.isAnonymousConsentType(consent)
                ? _this.anonymousConsentsService.isConsentGiven(consent)
                : _this.userConsentService.isConsentGiven(consent);
        }), distinctUntilChanged());
    };
    /**
     * Checks if the `templateId`'s template has a withdrawn consent.
     * The method returns `true` if the consent doesn't exist or if it's withdrawn. Otherwise, `false` is returned.
     *
     * @param templateId of a template which's consent should be checked
     */
    ConsentService.prototype.checkConsentWithdrawnByTemplateId = function (templateId) {
        var _this = this;
        return this.getConsent(templateId).pipe(map(function (consent) {
            if (!consent) {
                return true;
            }
            return _this.isAnonymousConsentType(consent)
                ? _this.anonymousConsentsService.isConsentWithdrawn(consent)
                : _this.userConsentService.isConsentWithdrawn(consent);
        }), distinctUntilChanged());
    };
    /**
     *
     * Checks the provided `consent`'s type and delegates to an appropriate method - `anonymousConsentsService.isConsentGiven(consent)` or `this.userConsentService.isConsentGiven`
     *
     * @param consent a consent to check
     */
    ConsentService.prototype.isConsentGiven = function (consent) {
        return this.isAnonymousConsentType(consent)
            ? this.anonymousConsentsService.isConsentGiven(consent)
            : this.userConsentService.isConsentGiven(consent);
    };
    /**
     *
     * Checks the provided `consent`'s type and delegates to an appropriate method - `anonymousConsentsService.isConsentWithdrawn(consent)` or `this.userConsentService.isConsentWithdrawn`
     *
     * @param consent a consent to check
     */
    ConsentService.prototype.isConsentWithdrawn = function (consent) {
        return this.isAnonymousConsentType(consent)
            ? this.anonymousConsentsService.isConsentWithdrawn(consent)
            : this.userConsentService.isConsentWithdrawn(consent);
    };
    /**
     * Returns `true` if the provided consent is of type `AnonymousConsent`. Otherwise, `false` is returned.
     */
    ConsentService.prototype.isAnonymousConsentType = function (consent) {
        if (!consent) {
            return false;
        }
        return consent.templateCode !== undefined;
    };
    /**
     * Returns `true` if the provided consent is of type `Consent`. Otherwise, `false` is returned.
     */
    ConsentService.prototype.isConsentType = function (consent) {
        if (!consent) {
            return false;
        }
        return consent.code !== undefined;
    };
    ConsentService.ctorParameters = function () { return [
        { type: AnonymousConsentsService },
        { type: UserConsentService }
    ]; };
    ConsentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConsentService_Factory() { return new ConsentService(i0.ɵɵinject(i1.AnonymousConsentsService), i0.ɵɵinject(i2.UserConsentService)); }, token: ConsentService, providedIn: "root" });
    ConsentService = __decorate([
        Injectable({ providedIn: 'root' })
    ], ConsentService);
    return ConsentService;
}());
export { ConsentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL2NvbnNlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUU1RDs7R0FFRztBQUVIO0lBQ0Usd0JBQ1ksd0JBQWtELEVBQ2xELGtCQUFzQztRQUR0Qyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDL0MsQ0FBQztJQUVKOzs7T0FHRztJQUNILG1DQUFVLEdBQVYsVUFBVyxZQUFvQjtRQUM3QixPQUFPLEtBQUssQ0FDVixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUNoRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsc0RBQTZCLEdBQTdCLFVBQThCLFVBQWtCO1FBQWhELGlCQWFDO1FBWkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDckMsR0FBRyxDQUFDLFVBQUMsT0FBTztZQUNWLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELE9BQU8sS0FBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztnQkFDekMsQ0FBQyxDQUFDLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMERBQWlDLEdBQWpDLFVBQWtDLFVBQWtCO1FBQXBELGlCQWFDO1FBWkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDckMsR0FBRyxDQUFDLFVBQUMsT0FBTztZQUNWLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELE9BQU8sS0FBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztnQkFDekMsQ0FBQyxDQUFDLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7Z0JBQzNELENBQUMsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHVDQUFjLEdBQWQsVUFBZSxPQUFtQztRQUNoRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7WUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDJDQUFrQixHQUFsQixVQUFtQixPQUFtQztRQUNwRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7WUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDM0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCwrQ0FBc0IsR0FBdEIsVUFDRSxPQUFtQztRQUVuQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQVEsT0FBNEIsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7T0FFRztJQUNILHNDQUFhLEdBQWIsVUFBYyxPQUFtQztRQUMvQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQVEsT0FBbUIsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQ2pELENBQUM7O2dCQXZHcUMsd0JBQXdCO2dCQUM5QixrQkFBa0I7OztJQUh2QyxjQUFjO1FBRDFCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixjQUFjLENBMEcxQjt5QkFySEQ7Q0FxSEMsQUExR0QsSUEwR0M7U0ExR1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW5vbnltb3VzLWNvbnNlbnRzL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIENvbnNlbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQ29uc2VudFNlcnZpY2UgfSBmcm9tICcuL3VzZXItY29uc2VudC5zZXJ2aWNlJztcblxuLyoqXG4gKiBVbmlmaWVkIGZhY2FkZSBmb3IgYm90aCBhbm9ueW1vdXMgYW5kIHJlZ2lzdGVyZWQgdXNlciBjb25zZW50cy5cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb25zZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGVpdGhlciBhbm9ueW1vdXMgY29uc2VudCBvciByZWdpc3RlcmVkIGNvbnNlbnQgYXMgdGhleSBhcmUgZW1taXRlZC5cbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBmb3Igd2hpY2ggdG8gcmV0dXJuIGVpdGhlciBhbm9ueW1vdXMgb3IgcmVnaXN0ZXJlZCBjb25zZW50LlxuICAgKi9cbiAgZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudCB8IENvbnNlbnQ+IHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50KHRlbXBsYXRlQ29kZSksXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRDb25zZW50KHRlbXBsYXRlQ29kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYHRlbXBsYXRlSWRgJ3MgdGVtcGxhdGUgaGFzIGEgZ2l2ZW4gY29uc2VudC5cbiAgICogVGhlIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAgaWYgdGhlIGNvbnNlbnQgZG9lc24ndCBleGlzdCBvciBpZiBpdCdzIHdpdGhkcmF3bi4gT3RoZXJ3aXNlLCBgdHJ1ZWAgaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUlkIG9mIGEgdGVtcGxhdGUgd2hpY2gncyBjb25zZW50IHNob3VsZCBiZSBjaGVja2VkXG4gICAqL1xuICBjaGVja0NvbnNlbnRHaXZlbkJ5VGVtcGxhdGVJZCh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25zZW50KHRlbXBsYXRlSWQpLnBpcGUoXG4gICAgICBtYXAoKGNvbnNlbnQpID0+IHtcbiAgICAgICAgaWYgKCFjb25zZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50VHlwZShjb25zZW50KVxuICAgICAgICAgID8gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudClcbiAgICAgICAgICA6IHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpO1xuICAgICAgfSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGB0ZW1wbGF0ZUlkYCdzIHRlbXBsYXRlIGhhcyBhIHdpdGhkcmF3biBjb25zZW50LlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgaXQncyB3aXRoZHJhd24uIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlSWQgb2YgYSB0ZW1wbGF0ZSB3aGljaCdzIGNvbnNlbnQgc2hvdWxkIGJlIGNoZWNrZWRcbiAgICovXG4gIGNoZWNrQ29uc2VudFdpdGhkcmF3bkJ5VGVtcGxhdGVJZCh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25zZW50KHRlbXBsYXRlSWQpLnBpcGUoXG4gICAgICBtYXAoKGNvbnNlbnQpID0+IHtcbiAgICAgICAgaWYgKCFjb25zZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pc0Fub255bW91c0NvbnNlbnRUeXBlKGNvbnNlbnQpXG4gICAgICAgICAgPyB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudClcbiAgICAgICAgICA6IHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KTtcbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQ2hlY2tzIHRoZSBwcm92aWRlZCBgY29uc2VudGAncyB0eXBlIGFuZCBkZWxlZ2F0ZXMgdG8gYW4gYXBwcm9wcmlhdGUgbWV0aG9kIC0gYGFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KWAgb3IgYHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudEdpdmVuYFxuICAgKlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gY2hlY2tcbiAgICovXG4gIGlzQ29uc2VudEdpdmVuKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQgfCBDb25zZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50VHlwZShjb25zZW50KVxuICAgICAgPyB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KVxuICAgICAgOiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBDaGVja3MgdGhlIHByb3ZpZGVkIGBjb25zZW50YCdzIHR5cGUgYW5kIGRlbGVnYXRlcyB0byBhbiBhcHByb3ByaWF0ZSBtZXRob2QgLSBgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KWAgb3IgYHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bmBcbiAgICpcbiAgICogQHBhcmFtIGNvbnNlbnQgYSBjb25zZW50IHRvIGNoZWNrXG4gICAqL1xuICBpc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCB8IENvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0Fub255bW91c0NvbnNlbnRUeXBlKGNvbnNlbnQpXG4gICAgICA/IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KVxuICAgICAgOiB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGNvbnNlbnQgaXMgb2YgdHlwZSBgQW5vbnltb3VzQ29uc2VudGAuIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICovXG4gIGlzQW5vbnltb3VzQ29uc2VudFR5cGUoXG4gICAgY29uc2VudDogQW5vbnltb3VzQ29uc2VudCB8IENvbnNlbnRcbiAgKTogY29uc2VudCBpcyBBbm9ueW1vdXNDb25zZW50IHtcbiAgICBpZiAoIWNvbnNlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGNvbnNlbnQgYXMgQW5vbnltb3VzQ29uc2VudCkudGVtcGxhdGVDb2RlICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGNvbnNlbnQgaXMgb2YgdHlwZSBgQ29uc2VudGAuIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICovXG4gIGlzQ29uc2VudFR5cGUoY29uc2VudDogQW5vbnltb3VzQ29uc2VudCB8IENvbnNlbnQpOiBjb25zZW50IGlzIENvbnNlbnQge1xuICAgIGlmICghY29uc2VudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAoY29uc2VudCBhcyBDb25zZW50KS5jb2RlICE9PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==