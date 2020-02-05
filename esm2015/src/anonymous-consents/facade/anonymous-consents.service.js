/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, iif } from 'rxjs';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { ANONYMOUS_CONSENT_STATUS, } from '../../model/index';
import { AnonymousConsentsActions } from '../store/actions/index';
import { AnonymousConsentsSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
export class AnonymousConsentsService {
    /**
     * @param {?} store
     * @param {?} authService
     */
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves the anonymous consent templates.
     * @return {?}
     */
    loadTemplates() {
        this.store.dispatch(new AnonymousConsentsActions.LoadAnonymousConsentTemplates());
    }
    /**
     * Conditionally triggers the load of the anonymous consent templates if:
     *   - `loadIfMissing` parameter is set to `true`
     *   - the `templates` in the store are `undefined`
     *
     * Othewise it just returns the value from the store.
     *
     * @param {?=} loadIfMissing setting to `true` will trigger the load of the templates if the currently stored templates are `undefined`
     * @return {?}
     */
    getTemplates(loadIfMissing = false) {
        return iif((/**
         * @return {?}
         */
        () => loadIfMissing), this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesValue), withLatestFrom(this.getLoadTemplatesLoading()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([_templates, loading]) => !loading)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([templates, _loading]) => {
            if (!Boolean(templates)) {
                this.loadTemplates();
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([templates, _loading]) => Boolean(templates))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([templates, _loading]) => templates))), this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesValue)));
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
     * Returns the anonymous consent for the given template ID.
     *
     * As a side-effect, the method will call `getTemplates(true)` to load the templates if those are not present.
     *
     * @param {?} templateId a template ID by which to filter anonymous consent templates.
     * @return {?}
     */
    getConsent(templateId) {
        return this.authService.isUserLoggedIn().pipe(filter((/**
         * @param {?} authenticated
         * @return {?}
         */
        authenticated => !authenticated)), tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.getTemplates(true))), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentByTemplateCode(templateId))))));
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
        return this.getTemplates(true).pipe(tap((/**
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
        return consent && consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN;
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
        return this.getTemplates(true).pipe(tap((/**
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
        return (consent && consent.consentState === ANONYMOUS_CONSENT_STATUS.WITHDRAWN);
    }
    /**
     * Toggles the dismissed state of the anonymous consents banner.
     * @param {?} dismissed the banner will be dismissed if `true` is passed, otherwise it will be visible.
     * @return {?}
     */
    toggleBannerDismissed(dismissed) {
        this.store.dispatch(new AnonymousConsentsActions.ToggleAnonymousConsentsBannerDissmissed(dismissed));
        if (dismissed) {
            this.toggleTemplatesUpdated(false);
        }
    }
    /**
     * Returns `true` if the banner was dismissed, `false` otherwise.
     * @return {?}
     */
    isBannerDismissed() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentsBannerDismissed));
    }
    /**
     * Returns `true` if the consent templates were updated on the back-end.
     * If the templates are not present in the store, it triggers the load.
     * @return {?}
     */
    getTemplatesUpdated() {
        return this.getTemplates(true).pipe(switchMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesUpdate)))));
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
     * Returns `true` if either the banner is not dismissed or if the templates were updated on the back-end.
     * Otherwise, it returns `false`.
     * @return {?}
     */
    isBannerVisible() {
        return combineLatest([
            this.isBannerDismissed(),
            this.getTemplatesUpdated(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([dismissed, updated]) => !dismissed || updated)));
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
    /**
     * Serializes using `JSON.stringify()` and encodes using `encodeURIComponent()` methods
     * @param {?} consents to serialize and encode
     * @return {?}
     */
    serializeAndEncode(consents) {
        if (!consents) {
            return '';
        }
        /** @type {?} */
        const serialized = JSON.stringify(consents);
        /** @type {?} */
        const encoded = encodeURIComponent(serialized);
        return encoded;
    }
    /**
     * Decodes using `decodeURIComponent()` and deserializes using `JSON.parse()`
     * @param {?} rawConsents to decode an deserialize
     * @return {?}
     */
    decodeAndDeserialize(rawConsents) {
        /** @type {?} */
        const decoded = decodeURIComponent(rawConsents);
        /** @type {?} */
        const unserialized = (/** @type {?} */ (JSON.parse(decoded)));
        return unserialized;
    }
    /**
     *
     * Compares the given `newConsents` and `previousConsents` and returns `true` if there are differences (the `newConsents` are updates).
     * Otherwise it returns `false`.
     *
     * @param {?} newConsents new consents to compare
     * @param {?} previousConsents old consents to compare
     * @return {?}
     */
    consentsUpdated(newConsents, previousConsents) {
        /** @type {?} */
        const newRawConsents = this.serializeAndEncode(newConsents);
        /** @type {?} */
        const previousRawConsents = this.serializeAndEncode(previousConsents);
        return newRawConsents !== previousRawConsents;
    }
}
AnonymousConsentsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AnonymousConsentsService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
/** @nocollapse */ AnonymousConsentsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentsService_Factory() { return new AnonymousConsentsService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: AnonymousConsentsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AnonymousConsentsService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    AnonymousConsentsService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBRUwsd0JBQXdCLEdBRXpCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHdEUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFDbkMsWUFDWSxLQUF3QyxFQUN4QyxXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUFtQztRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDOzs7OztJQUtKLGFBQWE7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSx3QkFBd0IsQ0FBQyw2QkFBNkIsRUFBRSxDQUM3RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7Ozs7SUFXRCxZQUFZLENBQUMsYUFBYSxHQUFHLEtBQUs7UUFDaEMsT0FBTyxHQUFHOzs7UUFDUixHQUFHLEVBQUUsQ0FBQyxhQUFh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LE1BQU0sRUFBRTs7OztZQWJqQixLQUFLO1lBR2IsV0FBVzs7Ozs7Ozs7SUFhaEIseUNBQWtEOzs7OztJQUNsRCwrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgaWlmLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnQsXG4gIEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUyxcbiAgQ29uc2VudFRlbXBsYXRlLFxufSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aEFub255bW91c0NvbnNlbnRzIH0gZnJvbSAnLi4vc3RvcmUvYW5vbnltb3VzLWNvbnNlbnRzLXN0YXRlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEFub255bW91c0NvbnNlbnRzPixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBsb2FkVGVtcGxhdGVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmRpdGlvbmFsbHkgdHJpZ2dlcnMgdGhlIGxvYWQgb2YgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcyBpZjpcbiAgICogICAtIGBsb2FkSWZNaXNzaW5nYCBwYXJhbWV0ZXIgaXMgc2V0IHRvIGB0cnVlYFxuICAgKiAgIC0gdGhlIGB0ZW1wbGF0ZXNgIGluIHRoZSBzdG9yZSBhcmUgYHVuZGVmaW5lZGBcbiAgICpcbiAgICogT3RoZXdpc2UgaXQganVzdCByZXR1cm5zIHRoZSB2YWx1ZSBmcm9tIHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHBhcmFtIGxvYWRJZk1pc3Npbmcgc2V0dGluZyB0byBgdHJ1ZWAgd2lsbCB0cmlnZ2VyIHRoZSBsb2FkIG9mIHRoZSB0ZW1wbGF0ZXMgaWYgdGhlIGN1cnJlbnRseSBzdG9yZWQgdGVtcGxhdGVzIGFyZSBgdW5kZWZpbmVkYFxuICAgKi9cbiAgZ2V0VGVtcGxhdGVzKGxvYWRJZk1pc3NpbmcgPSBmYWxzZSk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gaWlmKFxuICAgICAgKCkgPT4gbG9hZElmTWlzc2luZyxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNWYWx1ZSksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuZ2V0TG9hZFRlbXBsYXRlc0xvYWRpbmcoKSksXG4gICAgICAgIGZpbHRlcigoW190ZW1wbGF0ZXMsIGxvYWRpbmddKSA9PiAhbG9hZGluZyksXG4gICAgICAgIHRhcCgoW3RlbXBsYXRlcywgX2xvYWRpbmddKSA9PiB7XG4gICAgICAgICAgaWYgKCFCb29sZWFuKHRlbXBsYXRlcykpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFRlbXBsYXRlcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW3RlbXBsYXRlcywgX2xvYWRpbmddKSA9PiBCb29sZWFuKHRlbXBsYXRlcykpLFxuICAgICAgICBtYXAoKFt0ZW1wbGF0ZXMsIF9sb2FkaW5nXSkgPT4gdGVtcGxhdGVzKVxuICAgICAgKSxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNWYWx1ZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcyB3aXRoIHRoZSBnaXZlbiB0ZW1wbGF0ZSBjb2RlLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGEgdGVtcGxhdGUgY29kZSBieSB3aGljaCB0byBmaWx0ZXIgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGUodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZSh0ZW1wbGF0ZUNvZGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIGxvYWRpbmcgc3RhdHVzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0TG9hZFRlbXBsYXRlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgc3VjY2VzcyBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRMb2FkVGVtcGxhdGVzU3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNTdWNjZXNzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBlcnJvciBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRMb2FkVGVtcGxhdGVzRXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzRXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGxvYWRpbmcsIHN1Y2Nlc3MgYW5kIGVycm9yIGluZGljYXRvcnMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICByZXNldExvYWRUZW1wbGF0ZXNTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5SZXNldExvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIHRoZSBhbm9ueW1vdXMgY29uc2VudHMuXG4gICAqL1xuICBnZXRDb25zZW50cygpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXRzIHRoZSBwcm92aWRlZCBhbm9ueW1vdXMgY29uc2VudHMgaW50byB0aGUgc3RvcmUuXG4gICAqL1xuICBzZXRDb25zZW50cyhjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlNldEFub255bW91c0NvbnNlbnRzKGNvbnNlbnRzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiB0ZW1wbGF0ZSBJRC5cbiAgICpcbiAgICogQXMgYSBzaWRlLWVmZmVjdCwgdGhlIG1ldGhvZCB3aWxsIGNhbGwgYGdldFRlbXBsYXRlcyh0cnVlKWAgdG8gbG9hZCB0aGUgdGVtcGxhdGVzIGlmIHRob3NlIGFyZSBub3QgcHJlc2VudC5cbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlSWQgYSB0ZW1wbGF0ZSBJRCBieSB3aGljaCB0byBmaWx0ZXIgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0Q29uc2VudCh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpLnBpcGUoXG4gICAgICBmaWx0ZXIoYXV0aGVudGljYXRlZCA9PiAhYXV0aGVudGljYXRlZCksXG4gICAgICB0YXAoXyA9PiB0aGlzLmdldFRlbXBsYXRlcyh0cnVlKSksXG4gICAgICBzd2l0Y2hNYXAoXyA9PlxuICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KFxuICAgICAgICAgICAgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudEJ5VGVtcGxhdGVDb2RlKFxuICAgICAgICAgICAgICB0ZW1wbGF0ZUlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlIGEgY29uc2VudCBmb3IgdGhlIGdpdmVuIGB0ZW1wbGF0ZUNvZGVgXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIGdpdmUgdGhlIGNvbnNlbnRcbiAgICovXG4gIGdpdmVDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuR2l2ZUFub255bW91c0NvbnNlbnQodGVtcGxhdGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cycgc3RhdGUgdG8gZ2l2ZW4uXG4gICAqL1xuICBnaXZlQWxsQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlcyh0cnVlKS5waXBlKFxuICAgICAgdGFwKHRlbXBsYXRlcyA9PlxuICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB0aGlzLmdpdmVDb25zZW50KHRlbXBsYXRlLmlkKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBgY29uc2VudGAgaXMgZ2l2ZW4uXG4gICAqIEBwYXJhbSBjb25zZW50IGEgY29uc2VudCB0byB0ZXN0XG4gICAqL1xuICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNvbnNlbnQgJiYgY29uc2VudC5jb25zZW50U3RhdGUgPT09IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaXRoZHJhdyBhIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiBgdGVtcGxhdGVDb2RlYFxuICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGZvciB3aGljaCB0byB3aXRoZHJhdyB0aGUgY29uc2VudFxuICAgKi9cbiAgd2l0aGRyYXdDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuV2l0aGRyYXdBbm9ueW1vdXNDb25zZW50KHRlbXBsYXRlQ29kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYWxsIHRoZSBhbm9ueW1vdXMgY29uc2VudHMnIHN0YXRlIHRvIHdpdGhkcmF3bi5cbiAgICovXG4gIHdpdGhkcmF3QWxsQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlcyh0cnVlKS5waXBlKFxuICAgICAgdGFwKHRlbXBsYXRlcyA9PlxuICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB0aGlzLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5pZCkpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgYGNvbnNlbnRgIGlzIHdpdGhkcmF3bi5cbiAgICogQHBhcmFtIGNvbnNlbnQgYSBjb25zZW50IHRvIHRlc3RcbiAgICovXG4gIGlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvbnNlbnQgJiYgY29uc2VudC5jb25zZW50U3RhdGUgPT09IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5XSVRIRFJBV05cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGRpc21pc3NlZCBzdGF0ZSBvZiB0aGUgYW5vbnltb3VzIGNvbnNlbnRzIGJhbm5lci5cbiAgICogQHBhcmFtIGRpc21pc3NlZCB0aGUgYmFubmVyIHdpbGwgYmUgZGlzbWlzc2VkIGlmIGB0cnVlYCBpcyBwYXNzZWQsIG90aGVyd2lzZSBpdCB3aWxsIGJlIHZpc2libGUuXG4gICAqL1xuICB0b2dnbGVCYW5uZXJEaXNtaXNzZWQoZGlzbWlzc2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuVG9nZ2xlQW5vbnltb3VzQ29uc2VudHNCYW5uZXJEaXNzbWlzc2VkKFxuICAgICAgICBkaXNtaXNzZWRcbiAgICAgIClcbiAgICApO1xuICAgIGlmIChkaXNtaXNzZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlVGVtcGxhdGVzVXBkYXRlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBiYW5uZXIgd2FzIGRpc21pc3NlZCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAqL1xuICBpc0Jhbm5lckRpc21pc3NlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRzQmFubmVyRGlzbWlzc2VkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgdGVtcGxhdGVzIHdlcmUgdXBkYXRlZCBvbiB0aGUgYmFjay1lbmQuXG4gICAqIElmIHRoZSB0ZW1wbGF0ZXMgYXJlIG5vdCBwcmVzZW50IGluIHRoZSBzdG9yZSwgaXQgdHJpZ2dlcnMgdGhlIGxvYWQuXG4gICAqL1xuICBnZXRUZW1wbGF0ZXNVcGRhdGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlcyh0cnVlKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKF8gPT5cbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBgdXBkYXRlZGAgc2xpY2Ugb2YgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSB1cGRhdGVkXG4gICAqL1xuICB0b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKHVwZGF0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZChcbiAgICAgICAgdXBkYXRlZFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgZWl0aGVyIHRoZSBiYW5uZXIgaXMgbm90IGRpc21pc3NlZCBvciBpZiB0aGUgdGVtcGxhdGVzIHdlcmUgdXBkYXRlZCBvbiB0aGUgYmFjay1lbmQuXG4gICAqIE90aGVyd2lzZSwgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgKi9cbiAgaXNCYW5uZXJWaXNpYmxlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuaXNCYW5uZXJEaXNtaXNzZWQoKSxcbiAgICAgIHRoaXMuZ2V0VGVtcGxhdGVzVXBkYXRlZCgpLFxuICAgIF0pLnBpcGUobWFwKChbZGlzbWlzc2VkLCB1cGRhdGVkXSkgPT4gIWRpc21pc3NlZCB8fCB1cGRhdGVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlcmUncyBhIG1pc3NtYXRjaCBpbiB0ZW1wbGF0ZSB2ZXJzaW9ucyBiZXR3ZWVuIHRoZSBwcm92aWRlZCBgY3VycmVudFRlbXBsYXRlc2AgYW5kIGBuZXdUZW1wbGF0ZXNgXG4gICAqIEBwYXJhbSBjdXJyZW50VGVtcGxhdGVzIGN1cnJlbnQgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAqIEBwYXJhbSBuZXdUZW1wbGF0ZXMgbmV3IHRlbXBsYXRlcyB0byBjaGVja1xuICAgKi9cbiAgZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhcbiAgICBjdXJyZW50VGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSxcbiAgICBuZXdUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChuZXdUZW1wbGF0ZXMubGVuZ3RoICE9PSBjdXJyZW50VGVtcGxhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdUZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1RlbXBsYXRlID0gbmV3VGVtcGxhdGVzW2ldO1xuICAgICAgY29uc3QgY3VycmVudFRlbXBsYXRlID0gY3VycmVudFRlbXBsYXRlc1tpXTtcbiAgICAgIGlmIChuZXdUZW1wbGF0ZS52ZXJzaW9uICE9PSBjdXJyZW50VGVtcGxhdGUudmVyc2lvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyB1c2luZyBgSlNPTi5zdHJpbmdpZnkoKWAgYW5kIGVuY29kZXMgdXNpbmcgYGVuY29kZVVSSUNvbXBvbmVudCgpYCBtZXRob2RzXG4gICAqIEBwYXJhbSBjb25zZW50cyB0byBzZXJpYWxpemUgYW5kIGVuY29kZVxuICAgKi9cbiAgc2VyaWFsaXplQW5kRW5jb2RlKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiBzdHJpbmcge1xuICAgIGlmICghY29uc2VudHMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGNvbnNlbnRzKTtcbiAgICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHNlcmlhbGl6ZWQpO1xuICAgIHJldHVybiBlbmNvZGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29kZXMgdXNpbmcgYGRlY29kZVVSSUNvbXBvbmVudCgpYCBhbmQgZGVzZXJpYWxpemVzIHVzaW5nIGBKU09OLnBhcnNlKClgXG4gICAqIEBwYXJhbSByYXdDb25zZW50cyB0byBkZWNvZGUgYW4gZGVzZXJpYWxpemVcbiAgICovXG4gIGRlY29kZUFuZERlc2VyaWFsaXplKHJhd0NvbnNlbnRzOiBzdHJpbmcpOiBBbm9ueW1vdXNDb25zZW50W10ge1xuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQocmF3Q29uc2VudHMpO1xuICAgIGNvbnN0IHVuc2VyaWFsaXplZCA9IEpTT04ucGFyc2UoZGVjb2RlZCkgYXMgQW5vbnltb3VzQ29uc2VudFtdO1xuICAgIHJldHVybiB1bnNlcmlhbGl6ZWQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQ29tcGFyZXMgdGhlIGdpdmVuIGBuZXdDb25zZW50c2AgYW5kIGBwcmV2aW91c0NvbnNlbnRzYCBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlcmUgYXJlIGRpZmZlcmVuY2VzICh0aGUgYG5ld0NvbnNlbnRzYCBhcmUgdXBkYXRlcykuXG4gICAqIE90aGVyd2lzZSBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAqXG4gICAqIEBwYXJhbSBuZXdDb25zZW50cyBuZXcgY29uc2VudHMgdG8gY29tcGFyZVxuICAgKiBAcGFyYW0gcHJldmlvdXNDb25zZW50cyBvbGQgY29uc2VudHMgdG8gY29tcGFyZVxuICAgKi9cbiAgY29uc2VudHNVcGRhdGVkKFxuICAgIG5ld0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10sXG4gICAgcHJldmlvdXNDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5ld1Jhd0NvbnNlbnRzID0gdGhpcy5zZXJpYWxpemVBbmRFbmNvZGUobmV3Q29uc2VudHMpO1xuICAgIGNvbnN0IHByZXZpb3VzUmF3Q29uc2VudHMgPSB0aGlzLnNlcmlhbGl6ZUFuZEVuY29kZShwcmV2aW91c0NvbnNlbnRzKTtcbiAgICByZXR1cm4gbmV3UmF3Q29uc2VudHMgIT09IHByZXZpb3VzUmF3Q29uc2VudHM7XG4gIH1cbn1cbiJdfQ==