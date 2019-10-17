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
export class AnonymousConsentsService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Retrieves the anonymous consent templates.
     * @return {?}
     */
    loadTemplates() {
        this.store.dispatch(new AnonymousConsentsActions.LoadAnonymousConsentTemplates());
    }
    /**
     * Returns all the anonymous consent templates.
     * @return {?}
     */
    getTemplates() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesValue));
    }
    /**
     * Returns the anonymous consent templates with the given template code.
     * @param {?} templateCode a template code by which to filter anonymous consent templates.
     * @return {?}
     */
    getTemplate(templateCode) {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplate(templateCode)));
    }
    /**
     * Returns an indicator for the loading status for the anonymous consent templates.
     * @return {?}
     */
    getLoadTemplatesLoading() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesLoading));
    }
    /**
     * Returns an indicator for the success status for the anonymous consent templates.
     * @return {?}
     */
    getLoadTemplatesSuccess() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesSuccess));
    }
    /**
     * Returns an indicator for the error status for the anonymous consent templates.
     * @return {?}
     */
    getLoadTemplatesError() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesError));
    }
    /**
     * Resets the loading, success and error indicators for the anonymous consent templates.
     * @return {?}
     */
    resetLoadTemplatesState() {
        this.store.dispatch(new AnonymousConsentsActions.ResetLoadAnonymousConsentTemplates());
    }
    /**
     * Returns all the anonymous consents.
     * @return {?}
     */
    getConsents() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsents));
    }
    /**
     * Puts the provided anonymous consents into the store.
     * @param {?} consents
     * @return {?}
     */
    setConsents(consents) {
        return this.store.dispatch(new AnonymousConsentsActions.SetAnonymousConsents(consents));
    }
    /**
     * Returns the anonymous consent with the given template code.
     * @param {?} templateCode a template code by which to filter anonymous consent templates.
     * @return {?}
     */
    getConsent(templateCode) {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentByTemplateCode(templateCode)));
    }
    /**
     * Give a consent for the given `templateCode`
     * @param {?} templateCode for which to give the consent
     * @return {?}
     */
    giveConsent(templateCode) {
        this.store.dispatch(new AnonymousConsentsActions.GiveAnonymousConsent(templateCode));
    }
    /**
     * Sets all the anonymous consents' state to given.
     * @return {?}
     */
    giveAllConsents() {
        return this.getTemplates().pipe(tap((/**
         * @param {?} templates
         * @return {?}
         */
        templates => templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        template => this.giveConsent(template.id))))));
    }
    /**
     * Returns `true` if the provided `consent` is given.
     * @param {?} consent a consent to test
     * @return {?}
     */
    isConsentGiven(consent) {
        return consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN;
    }
    /**
     * Withdraw a consent for the given `templateCode`
     * @param {?} templateCode for which to withdraw the consent
     * @return {?}
     */
    withdrawConsent(templateCode) {
        this.store.dispatch(new AnonymousConsentsActions.WithdrawAnonymousConsent(templateCode));
    }
    /**
     * Sets all the anonymous consents' state to withdrawn.
     * @return {?}
     */
    withdrawAllConsents() {
        return this.getTemplates().pipe(tap((/**
         * @param {?} templates
         * @return {?}
         */
        templates => templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        template => this.withdrawConsent(template.id))))));
    }
    /**
     * Returns `true` if the provided `consent` is withdrawn.
     * @param {?} consent a consent to test
     * @return {?}
     */
    isConsentWithdrawn(consent) {
        return consent.consentState === ANONYMOUS_CONSENT_STATUS.WITHDRAWN;
    }
    /**
     * Toggles the visibility of the anonymous consents banner.
     * @param {?} visible the banner is visible if `true`, otherwise it's hidden
     * @return {?}
     */
    toggleAnonymousConsentsBannerVisibility(visible) {
        this.store.dispatch(new AnonymousConsentsActions.ToggleAnonymousConsentsBannerVisibility(visible));
        if (!visible) {
            this.toggleTemplatesUpdated(false);
        }
    }
    /**
     * Returns `true` if the banner is visible, `false` otherwise
     * @return {?}
     */
    isAnonymousConsentsBannerVisible() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentsBannerVisibility));
    }
    /**
     * Returns `true` if the consent templates were updated on the back-end.
     * @return {?}
     */
    getTemplatesUpdated() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesUpdate));
    }
    /**
     * Toggles the `updated` slice of the state
     * @param {?} updated
     * @return {?}
     */
    toggleTemplatesUpdated(updated) {
        this.store.dispatch(new AnonymousConsentsActions.ToggleAnonymousConsentTemplatesUpdated(updated));
    }
    /**
     * Returns `true` if there's a missmatch in template versions between the provided `currentTemplates` and `newTemplates`
     * @param {?} currentTemplates current templates to check
     * @param {?} newTemplates new templates to check
     * @return {?}
     */
    detectUpdatedTemplates(currentTemplates, newTemplates) {
        if (newTemplates.length !== currentTemplates.length) {
            return true;
        }
        for (let i = 0; i < newTemplates.length; i++) {
            /** @type {?} */
            const newTemplate = newTemplates[i];
            /** @type {?} */
            const currentTemplate = currentTemplates[i];
            if (newTemplate.version !== currentTemplate.version) {
                return true;
            }
        }
        return false;
    }
}
AnonymousConsentsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AnonymousConsentsService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ AnonymousConsentsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentsService_Factory() { return new AnonymousConsentsService(i0.ɵɵinject(i1.Store)); }, token: AnonymousConsentsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AnonymousConsentsService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUVMLHdCQUF3QixHQUV6QixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFHdEUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUNuQyxZQUFzQixLQUF3QztRQUF4QyxVQUFLLEdBQUwsS0FBSyxDQUFtQztJQUFHLENBQUM7Ozs7O0lBS2xFLGFBQWE7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSx3QkFBd0IsQ0FBQyw2QkFBNkIsRUFBRSxDQUM3RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLDBCQUEwQixDQUFDLGlDQUFpQyxDQUFDLENBQ3JFLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFNRCxXQUFXLENBQUMsWUFBb0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxDQUNyRSxDQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUtELHVCQUF1QjtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsMEJBQTBCLENBQUMsbUNBQW1DLENBQUMsQ0FDdkUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsdUJBQXVCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUN2RSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLDBCQUEwQixDQUFDLGlDQUFpQyxDQUFDLENBQ3JFLENBQUM7SUFDSixDQUFDOzs7OztJQUtELHVCQUF1QjtRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSx3QkFBd0IsQ0FBQyxrQ0FBa0MsRUFBRSxDQUNsRSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLDBCQUEwQixDQUFDLG9CQUFvQixDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxXQUFXLENBQUMsUUFBNEI7UUFDdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDeEIsSUFBSSx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FDNUQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQU1ELFVBQVUsQ0FBQyxZQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osMEJBQTBCLENBQUMsaUNBQWlDLENBQzFELFlBQVksQ0FDYixDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQU1ELFdBQVcsQ0FBQyxZQUFvQjtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FDaEUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDN0IsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQ2QsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQzdELENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQU1ELGNBQWMsQ0FBQyxPQUF5QjtRQUN0QyxPQUFPLE9BQU8sQ0FBQyxZQUFZLEtBQUssd0JBQXdCLENBQUMsS0FBSyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQU1ELGVBQWUsQ0FBQyxZQUFvQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FDcEUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDN0IsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQ2QsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQ2pFLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQU1ELGtCQUFrQixDQUFDLE9BQXlCO1FBQzFDLE9BQU8sT0FBTyxDQUFDLFlBQVksS0FBSyx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7SUFDckUsQ0FBQzs7Ozs7O0lBTUQsdUNBQXVDLENBQUMsT0FBZ0I7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksd0JBQXdCLENBQUMsdUNBQXVDLENBQ2xFLE9BQU8sQ0FDUixDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFLRCxnQ0FBZ0M7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLDBCQUEwQixDQUFDLG9DQUFvQyxDQUFDLENBQ3hFLENBQUM7SUFDSixDQUFDOzs7OztJQUtELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsMEJBQTBCLENBQUMsa0NBQWtDLENBQUMsQ0FDdEUsQ0FBQztJQUNKLENBQUM7Ozs7OztJQU1ELHNCQUFzQixDQUFDLE9BQWdCO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHdCQUF3QixDQUFDLHNDQUFzQyxDQUNqRSxPQUFPLENBQ1IsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQU9ELHNCQUFzQixDQUNwQixnQkFBbUMsRUFDbkMsWUFBK0I7UUFFL0IsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUNuRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUN0QyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQzs7a0JBQzdCLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxXQUFXLENBQUMsT0FBTyxLQUFLLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ25ELE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBbk9GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFaakIsS0FBSzs7Ozs7Ozs7SUFjUix5Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLFxuICBDb25zZW50VGVtcGxhdGUsXG59IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMgfSBmcm9tICcuLi9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHM+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGxvYWRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldFRlbXBsYXRlcygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMgd2l0aCB0aGUgZ2l2ZW4gdGVtcGxhdGUgY29kZS5cbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBhIHRlbXBsYXRlIGNvZGUgYnkgd2hpY2ggdG8gZmlsdGVyIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldFRlbXBsYXRlKHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGUodGVtcGxhdGVDb2RlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBsb2FkaW5nIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0xvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIHN1Y2Nlc3Mgc3RhdHVzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0TG9hZFRlbXBsYXRlc1N1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzU3VjY2VzcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgZXJyb3Igc3RhdHVzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0TG9hZFRlbXBsYXRlc0Vycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Vycm9yKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBsb2FkaW5nLCBzdWNjZXNzIGFuZCBlcnJvciBpbmRpY2F0b3JzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgcmVzZXRMb2FkVGVtcGxhdGVzU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuUmVzZXRMb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzLlxuICAgKi9cbiAgZ2V0Q29uc2VudHMoKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUHV0cyB0aGUgcHJvdmlkZWQgYW5vbnltb3VzIGNvbnNlbnRzIGludG8gdGhlIHN0b3JlLlxuICAgKi9cbiAgc2V0Q29uc2VudHMoY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5TZXRBbm9ueW1vdXNDb25zZW50cyhjb25zZW50cylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFub255bW91cyBjb25zZW50IHdpdGggdGhlIGdpdmVuIHRlbXBsYXRlIGNvZGUuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgYSB0ZW1wbGF0ZSBjb2RlIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudEJ5VGVtcGxhdGVDb2RlKFxuICAgICAgICAgIHRlbXBsYXRlQ29kZVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlIGEgY29uc2VudCBmb3IgdGhlIGdpdmVuIGB0ZW1wbGF0ZUNvZGVgXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIGdpdmUgdGhlIGNvbnNlbnRcbiAgICovXG4gIGdpdmVDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuR2l2ZUFub255bW91c0NvbnNlbnQodGVtcGxhdGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cycgc3RhdGUgdG8gZ2l2ZW4uXG4gICAqL1xuICBnaXZlQWxsQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlcygpLnBpcGUoXG4gICAgICB0YXAodGVtcGxhdGVzID0+XG4gICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHRoaXMuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGBjb25zZW50YCBpcyBnaXZlbi5cbiAgICogQHBhcmFtIGNvbnNlbnQgYSBjb25zZW50IHRvIHRlc3RcbiAgICovXG4gIGlzQ29uc2VudEdpdmVuKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY29uc2VudC5jb25zZW50U3RhdGUgPT09IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaXRoZHJhdyBhIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiBgdGVtcGxhdGVDb2RlYFxuICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGZvciB3aGljaCB0byB3aXRoZHJhdyB0aGUgY29uc2VudFxuICAgKi9cbiAgd2l0aGRyYXdDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuV2l0aGRyYXdBbm9ueW1vdXNDb25zZW50KHRlbXBsYXRlQ29kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYWxsIHRoZSBhbm9ueW1vdXMgY29uc2VudHMnIHN0YXRlIHRvIHdpdGhkcmF3bi5cbiAgICovXG4gIHdpdGhkcmF3QWxsQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlcygpLnBpcGUoXG4gICAgICB0YXAodGVtcGxhdGVzID0+XG4gICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHRoaXMud2l0aGRyYXdDb25zZW50KHRlbXBsYXRlLmlkKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBgY29uc2VudGAgaXMgd2l0aGRyYXduLlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgKi9cbiAgaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY29uc2VudC5jb25zZW50U3RhdGUgPT09IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5XSVRIRFJBV047XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgYW5vbnltb3VzIGNvbnNlbnRzIGJhbm5lci5cbiAgICogQHBhcmFtIHZpc2libGUgdGhlIGJhbm5lciBpcyB2aXNpYmxlIGlmIGB0cnVlYCwgb3RoZXJ3aXNlIGl0J3MgaGlkZGVuXG4gICAqL1xuICB0b2dnbGVBbm9ueW1vdXNDb25zZW50c0Jhbm5lclZpc2liaWxpdHkodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eShcbiAgICAgICAgdmlzaWJsZVxuICAgICAgKVxuICAgICk7XG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvZ2dsZVRlbXBsYXRlc1VwZGF0ZWQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYmFubmVyIGlzIHZpc2libGUsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBpc0Fub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJsZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IHRlbXBsYXRlcyB3ZXJlIHVwZGF0ZWQgb24gdGhlIGJhY2stZW5kLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGVzVXBkYXRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNVcGRhdGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBgdXBkYXRlZGAgc2xpY2Ugb2YgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSB1cGRhdGVkXG4gICAqL1xuICB0b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKHVwZGF0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZChcbiAgICAgICAgdXBkYXRlZFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlcmUncyBhIG1pc3NtYXRjaCBpbiB0ZW1wbGF0ZSB2ZXJzaW9ucyBiZXR3ZWVuIHRoZSBwcm92aWRlZCBgY3VycmVudFRlbXBsYXRlc2AgYW5kIGBuZXdUZW1wbGF0ZXNgXG4gICAqIEBwYXJhbSBjdXJyZW50VGVtcGxhdGVzIGN1cnJlbnQgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAqIEBwYXJhbSBuZXdUZW1wbGF0ZXMgbmV3IHRlbXBsYXRlcyB0byBjaGVja1xuICAgKi9cbiAgZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhcbiAgICBjdXJyZW50VGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSxcbiAgICBuZXdUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChuZXdUZW1wbGF0ZXMubGVuZ3RoICE9PSBjdXJyZW50VGVtcGxhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdUZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1RlbXBsYXRlID0gbmV3VGVtcGxhdGVzW2ldO1xuICAgICAgY29uc3QgY3VycmVudFRlbXBsYXRlID0gY3VycmVudFRlbXBsYXRlc1tpXTtcbiAgICAgIGlmIChuZXdUZW1wbGF0ZS52ZXJzaW9uICE9PSBjdXJyZW50VGVtcGxhdGUudmVyc2lvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==