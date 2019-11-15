/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, iif } from 'rxjs';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
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
        return consent.consentState === ANONYMOUS_CONSENT_STATUS.WITHDRAWN;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFFTCx3QkFBd0IsR0FFekIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBR3RFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFDbkMsWUFBc0IsS0FBd0M7UUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBbUM7SUFBRyxDQUFDOzs7OztJQUtsRSxhQUFhO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksd0JBQXdCLENBQUMsNkJBQTZCLEVBQUUsQ0FDN0QsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7Ozs7O0lBV0QsWUFBWSxDQUFDLGFBQWEsR0FBRyxLQUFLO1FBQ2hDLE9BQU8sR0FBRzs7O1FBQ1IsR0FBRyxFQUFFLENBQUMsYUFBYSxHQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixNQUFNLENBQUMsMEJBQTBCLENBQUMsaUNBQWlDLENBQUMsRUFDcEUsY0FBYyxD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TUQsa0JBQWtCLENBQUMsUUFBNEI7UUFDN0MsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O2NBQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDOztjQUNyQyxPQUFPLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDO1FBQzlDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQU1ELG9CQUFvQixDQUFDLFdBQW1COztjQUNoQyxPQUFPLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxDQUFDOztjQUN6QyxZQUFZLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBc0I7UUFDOUQsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Ozs7Ozs7OztJQVVELGVBQWUsQ0FDYixXQUErQixFQUMvQixnQkFBb0M7O2NBRTlCLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDOztjQUNyRCxtQkFBbUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsT0FBTyxjQUFjLEtBQUssbUJBQW1CLENBQUM7SUFDaEQsQ0FBQzs7O1lBaFRGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFaakIsS0FBSzs7Ozs7Ozs7SUFjUix5Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgaWlmLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLFxuICBDb25zZW50VGVtcGxhdGUsXG59IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMgfSBmcm9tICcuLi9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHM+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGxvYWRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZGl0aW9uYWxseSB0cmlnZ2VycyB0aGUgbG9hZCBvZiB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIGlmOlxuICAgKiAgIC0gYGxvYWRJZk1pc3NpbmdgIHBhcmFtZXRlciBpcyBzZXQgdG8gYHRydWVgXG4gICAqICAgLSB0aGUgYHRlbXBsYXRlc2AgaW4gdGhlIHN0b3JlIGFyZSBgdW5kZWZpbmVkYFxuICAgKlxuICAgKiBPdGhld2lzZSBpdCBqdXN0IHJldHVybnMgdGhlIHZhbHVlIGZyb20gdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcGFyYW0gbG9hZElmTWlzc2luZyBzZXR0aW5nIHRvIGB0cnVlYCB3aWxsIHRyaWdnZXIgdGhlIGxvYWQgb2YgdGhlIHRlbXBsYXRlcyBpZiB0aGUgY3VycmVudGx5IHN0b3JlZCB0ZW1wbGF0ZXMgYXJlIGB1bmRlZmluZWRgXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMobG9hZElmTWlzc2luZyA9IGZhbHNlKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PiBsb2FkSWZNaXNzaW5nLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1ZhbHVlKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5nZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpKSxcbiAgICAgICAgZmlsdGVyKChbX3RlbXBsYXRlcywgbG9hZGluZ10pID0+ICFsb2FkaW5nKSxcbiAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IHtcbiAgICAgICAgICBpZiAoIUJvb2xlYW4odGVtcGxhdGVzKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGVtcGxhdGVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IEJvb2xlYW4odGVtcGxhdGVzKSksXG4gICAgICAgIG1hcCgoW3RlbXBsYXRlcywgX2xvYWRpbmddKSA9PiB0ZW1wbGF0ZXMpXG4gICAgICApLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1ZhbHVlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIHdpdGggdGhlIGdpdmVuIHRlbXBsYXRlIGNvZGUuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgYSB0ZW1wbGF0ZSBjb2RlIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRUZW1wbGF0ZSh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlKHRlbXBsYXRlQ29kZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgbG9hZGluZyBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNMb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBzdWNjZXNzIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIGVycm9yIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNFcnJvcilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgbG9hZGluZywgc3VjY2VzcyBhbmQgZXJyb3IgaW5kaWNhdG9ycyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIHJlc2V0TG9hZFRlbXBsYXRlc1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlJlc2V0TG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cy5cbiAgICovXG4gIGdldENvbnNlbnRzKCk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50cylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1dHMgdGhlIHByb3ZpZGVkIGFub255bW91cyBjb25zZW50cyBpbnRvIHRoZSBzdG9yZS5cbiAgICovXG4gIHNldENvbnNlbnRzKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuU2V0QW5vbnltb3VzQ29uc2VudHMoY29uc2VudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhbm9ueW1vdXMgY29uc2VudCB3aXRoIHRoZSBnaXZlbiB0ZW1wbGF0ZSBjb2RlLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGEgdGVtcGxhdGUgY29kZSBieSB3aGljaCB0byBmaWx0ZXIgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0Q29uc2VudCh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRCeVRlbXBsYXRlQ29kZShcbiAgICAgICAgICB0ZW1wbGF0ZUNvZGVcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZSBhIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiBgdGVtcGxhdGVDb2RlYFxuICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGZvciB3aGljaCB0byBnaXZlIHRoZSBjb25zZW50XG4gICAqL1xuICBnaXZlQ29uc2VudCh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkdpdmVBbm9ueW1vdXNDb25zZW50KHRlbXBsYXRlQ29kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYWxsIHRoZSBhbm9ueW1vdXMgY29uc2VudHMnIHN0YXRlIHRvIGdpdmVuLlxuICAgKi9cbiAgZ2l2ZUFsbENvbnNlbnRzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRUZW1wbGF0ZXModHJ1ZSkucGlwZShcbiAgICAgIHRhcCh0ZW1wbGF0ZXMgPT5cbiAgICAgICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4gdGhpcy5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCkpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgYGNvbnNlbnRgIGlzIGdpdmVuLlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgKi9cbiAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLkdJVkVOO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpdGhkcmF3IGEgY29uc2VudCBmb3IgdGhlIGdpdmVuIGB0ZW1wbGF0ZUNvZGVgXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIHdpdGhkcmF3IHRoZSBjb25zZW50XG4gICAqL1xuICB3aXRoZHJhd0NvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5XaXRoZHJhd0Fub255bW91c0NvbnNlbnQodGVtcGxhdGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cycgc3RhdGUgdG8gd2l0aGRyYXduLlxuICAgKi9cbiAgd2l0aGRyYXdBbGxDb25zZW50cygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpLnBpcGUoXG4gICAgICB0YXAodGVtcGxhdGVzID0+XG4gICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHRoaXMud2l0aGRyYXdDb25zZW50KHRlbXBsYXRlLmlkKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBgY29uc2VudGAgaXMgd2l0aGRyYXduLlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgKi9cbiAgaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY29uc2VudC5jb25zZW50U3RhdGUgPT09IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5XSVRIRFJBV047XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZGlzbWlzc2VkIHN0YXRlIG9mIHRoZSBhbm9ueW1vdXMgY29uc2VudHMgYmFubmVyLlxuICAgKiBAcGFyYW0gZGlzbWlzc2VkIHRoZSBiYW5uZXIgd2lsbCBiZSBkaXNtaXNzZWQgaWYgYHRydWVgIGlzIHBhc3NlZCwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgdmlzaWJsZS5cbiAgICovXG4gIHRvZ2dsZUJhbm5lckRpc21pc3NlZChkaXNtaXNzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50c0Jhbm5lckRpc3NtaXNzZWQoXG4gICAgICAgIGRpc21pc3NlZFxuICAgICAgKVxuICAgICk7XG4gICAgaWYgKGRpc21pc3NlZCkge1xuICAgICAgdGhpcy50b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGJhbm5lciB3YXMgZGlzbWlzc2VkLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICovXG4gIGlzQmFubmVyRGlzbWlzc2VkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudHNCYW5uZXJEaXNtaXNzZWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY29uc2VudCB0ZW1wbGF0ZXMgd2VyZSB1cGRhdGVkIG9uIHRoZSBiYWNrLWVuZC5cbiAgICogSWYgdGhlIHRlbXBsYXRlcyBhcmUgbm90IHByZXNlbnQgaW4gdGhlIHN0b3JlLCBpdCB0cmlnZ2VycyB0aGUgbG9hZC5cbiAgICovXG4gIGdldFRlbXBsYXRlc1VwZGF0ZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoXyA9PlxuICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNVcGRhdGUpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGB1cGRhdGVkYCBzbGljZSBvZiB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHVwZGF0ZWRcbiAgICovXG4gIHRvZ2dsZVRlbXBsYXRlc1VwZGF0ZWQodXBkYXRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNVcGRhdGVkKFxuICAgICAgICB1cGRhdGVkXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBlaXRoZXIgdGhlIGJhbm5lciBpcyBub3QgZGlzbWlzc2VkIG9yIGlmIHRoZSB0ZW1wbGF0ZXMgd2VyZSB1cGRhdGVkIG9uIHRoZSBiYWNrLWVuZC5cbiAgICogT3RoZXJ3aXNlLCBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAqL1xuICBpc0Jhbm5lclZpc2libGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5pc0Jhbm5lckRpc21pc3NlZCgpLFxuICAgICAgdGhpcy5nZXRUZW1wbGF0ZXNVcGRhdGVkKCksXG4gICAgXSkucGlwZShtYXAoKFtkaXNtaXNzZWQsIHVwZGF0ZWRdKSA9PiAhZGlzbWlzc2VkIHx8IHVwZGF0ZWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGVyZSdzIGEgbWlzc21hdGNoIGluIHRlbXBsYXRlIHZlcnNpb25zIGJldHdlZW4gdGhlIHByb3ZpZGVkIGBjdXJyZW50VGVtcGxhdGVzYCBhbmQgYG5ld1RlbXBsYXRlc2BcbiAgICogQHBhcmFtIGN1cnJlbnRUZW1wbGF0ZXMgY3VycmVudCB0ZW1wbGF0ZXMgdG8gY2hlY2tcbiAgICogQHBhcmFtIG5ld1RlbXBsYXRlcyBuZXcgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAqL1xuICBkZXRlY3RVcGRhdGVkVGVtcGxhdGVzKFxuICAgIGN1cnJlbnRUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdLFxuICAgIG5ld1RlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW11cbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKG5ld1RlbXBsYXRlcy5sZW5ndGggIT09IGN1cnJlbnRUZW1wbGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1RlbXBsYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmV3VGVtcGxhdGUgPSBuZXdUZW1wbGF0ZXNbaV07XG4gICAgICBjb25zdCBjdXJyZW50VGVtcGxhdGUgPSBjdXJyZW50VGVtcGxhdGVzW2ldO1xuICAgICAgaWYgKG5ld1RlbXBsYXRlLnZlcnNpb24gIT09IGN1cnJlbnRUZW1wbGF0ZS52ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIHVzaW5nIGBKU09OLnN0cmluZ2lmeSgpYCBhbmQgZW5jb2RlcyB1c2luZyBgZW5jb2RlVVJJQ29tcG9uZW50KClgIG1ldGhvZHNcbiAgICogQHBhcmFtIGNvbnNlbnRzIHRvIHNlcmlhbGl6ZSBhbmQgZW5jb2RlXG4gICAqL1xuICBzZXJpYWxpemVBbmRFbmNvZGUoY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSk6IHN0cmluZyB7XG4gICAgaWYgKCFjb25zZW50cykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBzZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoY29uc2VudHMpO1xuICAgIGNvbnN0IGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQoc2VyaWFsaXplZCk7XG4gICAgcmV0dXJuIGVuY29kZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVjb2RlcyB1c2luZyBgZGVjb2RlVVJJQ29tcG9uZW50KClgIGFuZCBkZXNlcmlhbGl6ZXMgdXNpbmcgYEpTT04ucGFyc2UoKWBcbiAgICogQHBhcmFtIHJhd0NvbnNlbnRzIHRvIGRlY29kZSBhbiBkZXNlcmlhbGl6ZVxuICAgKi9cbiAgZGVjb2RlQW5kRGVzZXJpYWxpemUocmF3Q29uc2VudHM6IHN0cmluZyk6IEFub255bW91c0NvbnNlbnRbXSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGRlY29kZVVSSUNvbXBvbmVudChyYXdDb25zZW50cyk7XG4gICAgY29uc3QgdW5zZXJpYWxpemVkID0gSlNPTi5wYXJzZShkZWNvZGVkKSBhcyBBbm9ueW1vdXNDb25zZW50W107XG4gICAgcmV0dXJuIHVuc2VyaWFsaXplZDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBDb21wYXJlcyB0aGUgZ2l2ZW4gYG5ld0NvbnNlbnRzYCBhbmQgYHByZXZpb3VzQ29uc2VudHNgIGFuZCByZXR1cm5zIGB0cnVlYCBpZiB0aGVyZSBhcmUgZGlmZmVyZW5jZXMgKHRoZSBgbmV3Q29uc2VudHNgIGFyZSB1cGRhdGVzKS5cbiAgICogT3RoZXJ3aXNlIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICpcbiAgICogQHBhcmFtIG5ld0NvbnNlbnRzIG5ldyBjb25zZW50cyB0byBjb21wYXJlXG4gICAqIEBwYXJhbSBwcmV2aW91c0NvbnNlbnRzIG9sZCBjb25zZW50cyB0byBjb21wYXJlXG4gICAqL1xuICBjb25zZW50c1VwZGF0ZWQoXG4gICAgbmV3Q29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSxcbiAgICBwcmV2aW91c0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W11cbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbmV3UmF3Q29uc2VudHMgPSB0aGlzLnNlcmlhbGl6ZUFuZEVuY29kZShuZXdDb25zZW50cyk7XG4gICAgY29uc3QgcHJldmlvdXNSYXdDb25zZW50cyA9IHRoaXMuc2VyaWFsaXplQW5kRW5jb2RlKHByZXZpb3VzQ29uc2VudHMpO1xuICAgIHJldHVybiBuZXdSYXdDb25zZW50cyAhPT0gcHJldmlvdXNSYXdDb25zZW50cztcbiAgfVxufVxuIl19