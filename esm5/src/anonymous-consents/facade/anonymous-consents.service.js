/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ANONYMOUS_CONSENT_STATUS, } from '../../model/index';
import { AnonymousConsentsActions } from '../store/actions/index';
import { AnonymousConsentsSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var AnonymousConsentsService = /** @class */ (function () {
    function AnonymousConsentsService(store) {
        this.store = store;
    }
    /**
     * Retrieves the anonymous consent templates.
     */
    /**
     * Retrieves the anonymous consent templates.
     * @return {?}
     */
    AnonymousConsentsService.prototype.loadTemplates = /**
     * Retrieves the anonymous consent templates.
     * @return {?}
     */
    function () {
        this.store.dispatch(new AnonymousConsentsActions.LoadAnonymousConsentTemplates());
    };
    /**
     * Returns all the anonymous consent templates.
     */
    /**
     * Returns all the anonymous consent templates.
     * @return {?}
     */
    AnonymousConsentsService.prototype.getTemplates = /**
     * Returns all the anonymous consent templates.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesValue));
    };
    /**
     * Returns the anonymous consent templates with the given template code.
     * @param templateCode a template code by which to filter anonymous consent templates.
     */
    /**
     * Returns the anonymous consent templates with the given template code.
     * @param {?} templateCode a template code by which to filter anonymous consent templates.
     * @return {?}
     */
    AnonymousConsentsService.prototype.getTemplate = /**
     * Returns the anonymous consent templates with the given template code.
     * @param {?} templateCode a template code by which to filter anonymous consent templates.
     * @return {?}
     */
    function (templateCode) {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplate(templateCode)));
    };
    /**
     * Returns an indicator for the loading status for the anonymous consent templates.
     */
    /**
     * Returns an indicator for the loading status for the anonymous consent templates.
     * @return {?}
     */
    AnonymousConsentsService.prototype.getLoadTemplatesLoading = /**
     * Returns an indicator for the loading status for the anonymous consent templates.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesLoading));
    };
    /**
     * Returns an indicator for the success status for the anonymous consent templates.
     */
    /**
     * Returns an indicator for the success status for the anonymous consent templates.
     * @return {?}
     */
    AnonymousConsentsService.prototype.getLoadTemplatesSuccess = /**
     * Returns an indicator for the success status for the anonymous consent templates.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesSuccess));
    };
    /**
     * Returns an indicator for the error status for the anonymous consent templates.
     */
    /**
     * Returns an indicator for the error status for the anonymous consent templates.
     * @return {?}
     */
    AnonymousConsentsService.prototype.getLoadTemplatesError = /**
     * Returns an indicator for the error status for the anonymous consent templates.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesError));
    };
    /**
     * Resets the loading, success and error indicators for the anonymous consent templates.
     */
    /**
     * Resets the loading, success and error indicators for the anonymous consent templates.
     * @return {?}
     */
    AnonymousConsentsService.prototype.resetLoadTemplatesState = /**
     * Resets the loading, success and error indicators for the anonymous consent templates.
     * @return {?}
     */
    function () {
        this.store.dispatch(new AnonymousConsentsActions.ResetLoadAnonymousConsentTemplates());
    };
    /**
     * Returns all the anonymous consents.
     */
    /**
     * Returns all the anonymous consents.
     * @return {?}
     */
    AnonymousConsentsService.prototype.getConsents = /**
     * Returns all the anonymous consents.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsents));
    };
    /**
     * Puts the provided anonymous consents into the store.
     */
    /**
     * Puts the provided anonymous consents into the store.
     * @param {?} consents
     * @return {?}
     */
    AnonymousConsentsService.prototype.setConsents = /**
     * Puts the provided anonymous consents into the store.
     * @param {?} consents
     * @return {?}
     */
    function (consents) {
        return this.store.dispatch(new AnonymousConsentsActions.SetAnonymousConsents(consents));
    };
    /**
     * Returns the anonymous consent with the given template code.
     * @param templateCode a template code by which to filter anonymous consent templates.
     */
    /**
     * Returns the anonymous consent with the given template code.
     * @param {?} templateCode a template code by which to filter anonymous consent templates.
     * @return {?}
     */
    AnonymousConsentsService.prototype.getConsent = /**
     * Returns the anonymous consent with the given template code.
     * @param {?} templateCode a template code by which to filter anonymous consent templates.
     * @return {?}
     */
    function (templateCode) {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentByTemplateCode(templateCode)));
    };
    /**
     * Give a consent for the given `templateCode`
     * @param templateCode for which to give the consent
     */
    /**
     * Give a consent for the given `templateCode`
     * @param {?} templateCode for which to give the consent
     * @return {?}
     */
    AnonymousConsentsService.prototype.giveConsent = /**
     * Give a consent for the given `templateCode`
     * @param {?} templateCode for which to give the consent
     * @return {?}
     */
    function (templateCode) {
        this.store.dispatch(new AnonymousConsentsActions.GiveAnonymousConsent(templateCode));
    };
    /**
     * Sets all the anonymous consents' state to given.
     */
    /**
     * Sets all the anonymous consents' state to given.
     * @return {?}
     */
    AnonymousConsentsService.prototype.giveAllConsents = /**
     * Sets all the anonymous consents' state to given.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getTemplates().pipe(tap((/**
         * @param {?} templates
         * @return {?}
         */
        function (templates) {
            return templates.forEach((/**
             * @param {?} template
             * @return {?}
             */
            function (template) { return _this.giveConsent(template.id); }));
        })));
    };
    /**
     * Returns `true` if the provided `consent` is given.
     * @param consent a consent to test
     */
    /**
     * Returns `true` if the provided `consent` is given.
     * @param {?} consent a consent to test
     * @return {?}
     */
    AnonymousConsentsService.prototype.isConsentGiven = /**
     * Returns `true` if the provided `consent` is given.
     * @param {?} consent a consent to test
     * @return {?}
     */
    function (consent) {
        return consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN;
    };
    /**
     * Withdraw a consent for the given `templateCode`
     * @param templateCode for which to withdraw the consent
     */
    /**
     * Withdraw a consent for the given `templateCode`
     * @param {?} templateCode for which to withdraw the consent
     * @return {?}
     */
    AnonymousConsentsService.prototype.withdrawConsent = /**
     * Withdraw a consent for the given `templateCode`
     * @param {?} templateCode for which to withdraw the consent
     * @return {?}
     */
    function (templateCode) {
        this.store.dispatch(new AnonymousConsentsActions.WithdrawAnonymousConsent(templateCode));
    };
    /**
     * Sets all the anonymous consents' state to withdrawn.
     */
    /**
     * Sets all the anonymous consents' state to withdrawn.
     * @return {?}
     */
    AnonymousConsentsService.prototype.withdrawAllConsents = /**
     * Sets all the anonymous consents' state to withdrawn.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getTemplates().pipe(tap((/**
         * @param {?} templates
         * @return {?}
         */
        function (templates) {
            return templates.forEach((/**
             * @param {?} template
             * @return {?}
             */
            function (template) { return _this.withdrawConsent(template.id); }));
        })));
    };
    /**
     * Returns `true` if the provided `consent` is withdrawn.
     * @param consent a consent to test
     */
    /**
     * Returns `true` if the provided `consent` is withdrawn.
     * @param {?} consent a consent to test
     * @return {?}
     */
    AnonymousConsentsService.prototype.isConsentWithdrawn = /**
     * Returns `true` if the provided `consent` is withdrawn.
     * @param {?} consent a consent to test
     * @return {?}
     */
    function (consent) {
        return consent.consentState === ANONYMOUS_CONSENT_STATUS.WITHDRAWN;
    };
    /**
     * Toggles the visibility of the anonymous consents banner.
     * @param visible the banner is visible if `true`, otherwise it's hidden
     */
    /**
     * Toggles the visibility of the anonymous consents banner.
     * @param {?} visible the banner is visible if `true`, otherwise it's hidden
     * @return {?}
     */
    AnonymousConsentsService.prototype.toggleAnonymousConsentsBannerVisibility = /**
     * Toggles the visibility of the anonymous consents banner.
     * @param {?} visible the banner is visible if `true`, otherwise it's hidden
     * @return {?}
     */
    function (visible) {
        this.store.dispatch(new AnonymousConsentsActions.ToggleAnonymousConsentsBannerVisibility(visible));
        if (!visible) {
            this.toggleTemplatesUpdated(false);
        }
    };
    /**
     * Returns `true` if the banner is visible, `false` otherwise
     */
    /**
     * Returns `true` if the banner is visible, `false` otherwise
     * @return {?}
     */
    AnonymousConsentsService.prototype.isAnonymousConsentsBannerVisible = /**
     * Returns `true` if the banner is visible, `false` otherwise
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentsBannerVisibility));
    };
    /**
     * Returns `true` if the consent templates were updated on the back-end.
     */
    /**
     * Returns `true` if the consent templates were updated on the back-end.
     * @return {?}
     */
    AnonymousConsentsService.prototype.getTemplatesUpdated = /**
     * Returns `true` if the consent templates were updated on the back-end.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesUpdate));
    };
    /**
     * Toggles the `updated` slice of the state
     * @param updated
     */
    /**
     * Toggles the `updated` slice of the state
     * @param {?} updated
     * @return {?}
     */
    AnonymousConsentsService.prototype.toggleTemplatesUpdated = /**
     * Toggles the `updated` slice of the state
     * @param {?} updated
     * @return {?}
     */
    function (updated) {
        this.store.dispatch(new AnonymousConsentsActions.ToggleAnonymousConsentTemplatesUpdated(updated));
    };
    /**
     * Returns `true` if there's a missmatch in template versions between the provided `currentTemplates` and `newTemplates`
     * @param currentTemplates current templates to check
     * @param newTemplates new templates to check
     */
    /**
     * Returns `true` if there's a missmatch in template versions between the provided `currentTemplates` and `newTemplates`
     * @param {?} currentTemplates current templates to check
     * @param {?} newTemplates new templates to check
     * @return {?}
     */
    AnonymousConsentsService.prototype.detectUpdatedTemplates = /**
     * Returns `true` if there's a missmatch in template versions between the provided `currentTemplates` and `newTemplates`
     * @param {?} currentTemplates current templates to check
     * @param {?} newTemplates new templates to check
     * @return {?}
     */
    function (currentTemplates, newTemplates) {
        if (newTemplates.length !== currentTemplates.length) {
            return true;
        }
        for (var i = 0; i < newTemplates.length; i++) {
            /** @type {?} */
            var newTemplate = newTemplates[i];
            /** @type {?} */
            var currentTemplate = currentTemplates[i];
            if (newTemplate.version !== currentTemplate.version) {
                return true;
            }
        }
        return false;
    };
    AnonymousConsentsService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AnonymousConsentsService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ AnonymousConsentsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentsService_Factory() { return new AnonymousConsentsService(i0.ɵɵinject(i1.Store)); }, token: AnonymousConsentsService, providedIn: "root" });
    return AnonymousConsentsService;
}());
export { AnonymousConsentsService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AnonymousConsentsService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUVMLHdCQUF3QixHQUV6QixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFFdEU7SUFFRSxrQ0FBc0IsS0FBd0M7UUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBbUM7SUFBRyxDQUFDO0lBRWxFOztPQUVHOzs7OztJQUNILGdEQUFhOzs7O0lBQWI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSx3QkFBd0IsQ0FBQyw2QkFBNkIsRUFBRSxDQUM3RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILCtDQUFZOzs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsMEJBQTBCLENBQUMsaUNBQWlDLENBQUMsQ0FDckUsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDhDQUFXOzs7OztJQUFYLFVBQVksWUFBb0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxDQUNyRSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMERBQXVCOzs7O0lBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLDBCQUEwQixDQUFDLG1DQUFtQyxDQUFDLENBQ3ZFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMERBQXVCOzs7O0lBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLDBCQUEwQixDQUFDLG1DQUFtQyxDQUFDLENBQ3ZFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsd0RBQXFCOzs7O0lBQXJCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLDBCQUEwQixDQUFDLGlDQUFpQyxDQUFDLENBQ3JFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMERBQXVCOzs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksd0JBQXdCLENBQUMsa0NBQWtDLEVBQUUsQ0FDbEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw4Q0FBVzs7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLDBCQUEwQixDQUFDLG9CQUFvQixDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILDhDQUFXOzs7OztJQUFYLFVBQVksUUFBNEI7UUFDdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDeEIsSUFBSSx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FDNUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDZDQUFVOzs7OztJQUFWLFVBQVcsWUFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLDBCQUEwQixDQUFDLGlDQUFpQyxDQUMxRCxZQUFZLENBQ2IsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCw4Q0FBVzs7Ozs7SUFBWCxVQUFZLFlBQW9CO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGtEQUFlOzs7O0lBQWY7UUFBQSxpQkFNQztRQUxDLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDN0IsR0FBRzs7OztRQUFDLFVBQUEsU0FBUztZQUNYLE9BQUEsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QixDQUE2QixFQUFDO1FBQTVELENBQTRELEVBQzdELENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGlEQUFjOzs7OztJQUFkLFVBQWUsT0FBeUI7UUFDdEMsT0FBTyxPQUFPLENBQUMsWUFBWSxLQUFLLHdCQUF3QixDQUFDLEtBQUssQ0FBQztJQUNqRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxrREFBZTs7Ozs7SUFBZixVQUFnQixZQUFvQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FDcEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxzREFBbUI7Ozs7SUFBbkI7UUFBQSxpQkFNQztRQUxDLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDN0IsR0FBRzs7OztRQUFDLFVBQUEsU0FBUztZQUNYLE9BQUEsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFqQyxDQUFpQyxFQUFDO1FBQWhFLENBQWdFLEVBQ2pFLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHFEQUFrQjs7Ozs7SUFBbEIsVUFBbUIsT0FBeUI7UUFDMUMsT0FBTyxPQUFPLENBQUMsWUFBWSxLQUFLLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwwRUFBdUM7Ozs7O0lBQXZDLFVBQXdDLE9BQWdCO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHdCQUF3QixDQUFDLHVDQUF1QyxDQUNsRSxPQUFPLENBQ1IsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtRUFBZ0M7Ozs7SUFBaEM7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsMEJBQTBCLENBQUMsb0NBQW9DLENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxzREFBbUI7Ozs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsMEJBQTBCLENBQUMsa0NBQWtDLENBQUMsQ0FDdEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHlEQUFzQjs7Ozs7SUFBdEIsVUFBdUIsT0FBZ0I7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksd0JBQXdCLENBQUMsc0NBQXNDLENBQ2pFLE9BQU8sQ0FDUixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILHlEQUFzQjs7Ozs7O0lBQXRCLFVBQ0UsZ0JBQW1DLEVBQ25DLFlBQStCO1FBRS9CLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7WUFDbkQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDdEMsV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7O2dCQUM3QixlQUFlLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksV0FBVyxDQUFDLE9BQU8sS0FBSyxlQUFlLENBQUMsT0FBTyxFQUFFO2dCQUNuRCxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQW5PRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQVpqQixLQUFLOzs7bUNBRHRCO0NBaVBDLEFBcE9ELElBb09DO1NBbk9ZLHdCQUF3Qjs7Ozs7O0lBQ3ZCLHlDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50LFxuICBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cyB9IGZyb20gJy4uL3N0b3JlL2Fub255bW91cy1jb25zZW50cy1zdGF0ZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cz4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgbG9hZFRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGVzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNWYWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcyB3aXRoIHRoZSBnaXZlbiB0ZW1wbGF0ZSBjb2RlLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGEgdGVtcGxhdGUgY29kZSBieSB3aGljaCB0byBmaWx0ZXIgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGUodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZSh0ZW1wbGF0ZUNvZGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIGxvYWRpbmcgc3RhdHVzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0TG9hZFRlbXBsYXRlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgc3VjY2VzcyBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRMb2FkVGVtcGxhdGVzU3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNTdWNjZXNzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBlcnJvciBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRMb2FkVGVtcGxhdGVzRXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzRXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGxvYWRpbmcsIHN1Y2Nlc3MgYW5kIGVycm9yIGluZGljYXRvcnMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICByZXNldExvYWRUZW1wbGF0ZXNTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5SZXNldExvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIHRoZSBhbm9ueW1vdXMgY29uc2VudHMuXG4gICAqL1xuICBnZXRDb25zZW50cygpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXRzIHRoZSBwcm92aWRlZCBhbm9ueW1vdXMgY29uc2VudHMgaW50byB0aGUgc3RvcmUuXG4gICAqL1xuICBzZXRDb25zZW50cyhjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlNldEFub255bW91c0NvbnNlbnRzKGNvbnNlbnRzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgd2l0aCB0aGUgZ2l2ZW4gdGVtcGxhdGUgY29kZS5cbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBhIHRlbXBsYXRlIGNvZGUgYnkgd2hpY2ggdG8gZmlsdGVyIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldENvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50QnlUZW1wbGF0ZUNvZGUoXG4gICAgICAgICAgdGVtcGxhdGVDb2RlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmUgYSBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYHRlbXBsYXRlQ29kZWBcbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBmb3Igd2hpY2ggdG8gZ2l2ZSB0aGUgY29uc2VudFxuICAgKi9cbiAgZ2l2ZUNvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5HaXZlQW5vbnltb3VzQ29uc2VudCh0ZW1wbGF0ZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzJyBzdGF0ZSB0byBnaXZlbi5cbiAgICovXG4gIGdpdmVBbGxDb25zZW50cygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKCkucGlwZShcbiAgICAgIHRhcCh0ZW1wbGF0ZXMgPT5cbiAgICAgICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4gdGhpcy5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCkpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgYGNvbnNlbnRgIGlzIGdpdmVuLlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgKi9cbiAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLkdJVkVOO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpdGhkcmF3IGEgY29uc2VudCBmb3IgdGhlIGdpdmVuIGB0ZW1wbGF0ZUNvZGVgXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIHdpdGhkcmF3IHRoZSBjb25zZW50XG4gICAqL1xuICB3aXRoZHJhd0NvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5XaXRoZHJhd0Fub255bW91c0NvbnNlbnQodGVtcGxhdGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cycgc3RhdGUgdG8gd2l0aGRyYXduLlxuICAgKi9cbiAgd2l0aGRyYXdBbGxDb25zZW50cygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKCkucGlwZShcbiAgICAgIHRhcCh0ZW1wbGF0ZXMgPT5cbiAgICAgICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4gdGhpcy53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuaWQpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGBjb25zZW50YCBpcyB3aXRoZHJhd24uXG4gICAqIEBwYXJhbSBjb25zZW50IGEgY29uc2VudCB0byB0ZXN0XG4gICAqL1xuICBpc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLldJVEhEUkFXTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBhbm9ueW1vdXMgY29uc2VudHMgYmFubmVyLlxuICAgKiBAcGFyYW0gdmlzaWJsZSB0aGUgYmFubmVyIGlzIHZpc2libGUgaWYgYHRydWVgLCBvdGhlcndpc2UgaXQncyBoaWRkZW5cbiAgICovXG4gIHRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuVG9nZ2xlQW5vbnltb3VzQ29uc2VudHNCYW5uZXJWaXNpYmlsaXR5KFxuICAgICAgICB2aXNpYmxlXG4gICAgICApXG4gICAgKTtcbiAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlVGVtcGxhdGVzVXBkYXRlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBiYW5uZXIgaXMgdmlzaWJsZSwgYGZhbHNlYCBvdGhlcndpc2VcbiAgICovXG4gIGlzQW5vbnltb3VzQ29uc2VudHNCYW5uZXJWaXNpYmxlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudHNCYW5uZXJWaXNpYmlsaXR5KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgdGVtcGxhdGVzIHdlcmUgdXBkYXRlZCBvbiB0aGUgYmFjay1lbmQuXG4gICAqL1xuICBnZXRUZW1wbGF0ZXNVcGRhdGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1VwZGF0ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGB1cGRhdGVkYCBzbGljZSBvZiB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHVwZGF0ZWRcbiAgICovXG4gIHRvZ2dsZVRlbXBsYXRlc1VwZGF0ZWQodXBkYXRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNVcGRhdGVkKFxuICAgICAgICB1cGRhdGVkXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGVyZSdzIGEgbWlzc21hdGNoIGluIHRlbXBsYXRlIHZlcnNpb25zIGJldHdlZW4gdGhlIHByb3ZpZGVkIGBjdXJyZW50VGVtcGxhdGVzYCBhbmQgYG5ld1RlbXBsYXRlc2BcbiAgICogQHBhcmFtIGN1cnJlbnRUZW1wbGF0ZXMgY3VycmVudCB0ZW1wbGF0ZXMgdG8gY2hlY2tcbiAgICogQHBhcmFtIG5ld1RlbXBsYXRlcyBuZXcgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAqL1xuICBkZXRlY3RVcGRhdGVkVGVtcGxhdGVzKFxuICAgIGN1cnJlbnRUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdLFxuICAgIG5ld1RlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW11cbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKG5ld1RlbXBsYXRlcy5sZW5ndGggIT09IGN1cnJlbnRUZW1wbGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1RlbXBsYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmV3VGVtcGxhdGUgPSBuZXdUZW1wbGF0ZXNbaV07XG4gICAgICBjb25zdCBjdXJyZW50VGVtcGxhdGUgPSBjdXJyZW50VGVtcGxhdGVzW2ldO1xuICAgICAgaWYgKG5ld1RlbXBsYXRlLnZlcnNpb24gIT09IGN1cnJlbnRUZW1wbGF0ZS52ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19