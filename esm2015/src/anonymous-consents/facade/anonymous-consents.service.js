import { __decorate } from "tslib";
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
let AnonymousConsentsService = class AnonymousConsentsService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves the anonymous consent templates.
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
     * @param loadIfMissing setting to `true` will trigger the load of the templates if the currently stored templates are `undefined`
     */
    getTemplates(loadIfMissing = false) {
        return iif(() => loadIfMissing, this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesValue), withLatestFrom(this.getLoadTemplatesLoading()), filter(([_templates, loading]) => !loading), tap(([templates, _loading]) => {
            if (!Boolean(templates)) {
                this.loadTemplates();
            }
        }), filter(([templates, _loading]) => Boolean(templates)), map(([templates, _loading]) => templates)), this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesValue)));
    }
    /**
     * Returns the anonymous consent templates with the given template code.
     * @param templateCode a template code by which to filter anonymous consent templates.
     */
    getTemplate(templateCode) {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplate(templateCode)));
    }
    /**
     * Returns an indicator for the loading status for the anonymous consent templates.
     */
    getLoadTemplatesLoading() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesLoading));
    }
    /**
     * Returns an indicator for the success status for the anonymous consent templates.
     */
    getLoadTemplatesSuccess() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesSuccess));
    }
    /**
     * Returns an indicator for the error status for the anonymous consent templates.
     */
    getLoadTemplatesError() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesError));
    }
    /**
     * Resets the loading, success and error indicators for the anonymous consent templates.
     */
    resetLoadTemplatesState() {
        this.store.dispatch(new AnonymousConsentsActions.ResetLoadAnonymousConsentTemplates());
    }
    /**
     * Returns all the anonymous consents.
     */
    getConsents() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsents));
    }
    /**
     * Puts the provided anonymous consents into the store.
     */
    setConsents(consents) {
        return this.store.dispatch(new AnonymousConsentsActions.SetAnonymousConsents(consents));
    }
    /**
     * Returns the anonymous consent for the given template ID.
     *
     * As a side-effect, the method will call `getTemplates(true)` to load the templates if those are not present.
     *
     * @param templateId a template ID by which to filter anonymous consent templates.
     */
    getConsent(templateId) {
        return this.authService.isUserLoggedIn().pipe(filter((authenticated) => !authenticated), tap(() => this.getTemplates(true)), switchMap(() => this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentByTemplateCode(templateId)))));
    }
    /**
     * Give a consent for the given `templateCode`
     * @param templateCode for which to give the consent
     */
    giveConsent(templateCode) {
        this.store.dispatch(new AnonymousConsentsActions.GiveAnonymousConsent(templateCode));
    }
    /**
     * Sets all the anonymous consents' state to given.
     */
    giveAllConsents() {
        return this.getTemplates(true).pipe(tap((templates) => templates.forEach((template) => this.giveConsent(template.id))));
    }
    /**
     * Returns `true` if the provided `consent` is given.
     * @param consent a consent to test
     */
    isConsentGiven(consent) {
        return consent && consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN;
    }
    /**
     * Withdraw a consent for the given `templateCode`
     * @param templateCode for which to withdraw the consent
     */
    withdrawConsent(templateCode) {
        this.store.dispatch(new AnonymousConsentsActions.WithdrawAnonymousConsent(templateCode));
    }
    /**
     * Sets all the anonymous consents' state to withdrawn.
     */
    withdrawAllConsents() {
        return this.getTemplates(true).pipe(tap((templates) => templates.forEach((template) => this.withdrawConsent(template.id))));
    }
    /**
     * Returns `true` if the provided `consent` is withdrawn.
     * @param consent a consent to test
     */
    isConsentWithdrawn(consent) {
        return (consent && consent.consentState === ANONYMOUS_CONSENT_STATUS.WITHDRAWN);
    }
    /**
     * Toggles the dismissed state of the anonymous consents banner.
     * @param dismissed the banner will be dismissed if `true` is passed, otherwise it will be visible.
     */
    toggleBannerDismissed(dismissed) {
        this.store.dispatch(new AnonymousConsentsActions.ToggleAnonymousConsentsBannerDissmissed(dismissed));
        if (dismissed) {
            this.toggleTemplatesUpdated(false);
        }
    }
    /**
     * Returns `true` if the banner was dismissed, `false` otherwise.
     */
    isBannerDismissed() {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentsBannerDismissed));
    }
    /**
     * Returns `true` if the consent templates were updated on the back-end.
     * If the templates are not present in the store, it triggers the load.
     */
    getTemplatesUpdated() {
        return this.getTemplates(true).pipe(switchMap(() => this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesUpdate))));
    }
    /**
     * Toggles the `updated` slice of the state
     * @param updated
     */
    toggleTemplatesUpdated(updated) {
        this.store.dispatch(new AnonymousConsentsActions.ToggleAnonymousConsentTemplatesUpdated(updated));
    }
    /**
     * Returns `true` if either the banner is not dismissed or if the templates were updated on the back-end.
     * Otherwise, it returns `false`.
     */
    isBannerVisible() {
        return combineLatest([
            this.isBannerDismissed(),
            this.getTemplatesUpdated(),
        ]).pipe(map(([dismissed, updated]) => !dismissed || updated));
    }
    /**
     * Returns `true` if there's a missmatch in template versions between the provided `currentTemplates` and `newTemplates`
     * @param currentTemplates current templates to check
     * @param newTemplates new templates to check
     */
    detectUpdatedTemplates(currentTemplates, newTemplates) {
        if (newTemplates.length !== currentTemplates.length) {
            return true;
        }
        for (let i = 0; i < newTemplates.length; i++) {
            const newTemplate = newTemplates[i];
            const currentTemplate = currentTemplates[i];
            if (newTemplate.version !== currentTemplate.version) {
                return true;
            }
        }
        return false;
    }
    /**
     * Serializes using `JSON.stringify()` and encodes using `encodeURIComponent()` methods
     * @param consents to serialize and encode
     */
    serializeAndEncode(consents) {
        if (!consents) {
            return '';
        }
        const serialized = JSON.stringify(consents);
        const encoded = encodeURIComponent(serialized);
        return encoded;
    }
    /**
     * Decodes using `decodeURIComponent()` and deserializes using `JSON.parse()`
     * @param rawConsents to decode an deserialize
     */
    decodeAndDeserialize(rawConsents) {
        const decoded = decodeURIComponent(rawConsents);
        const unserialized = JSON.parse(decoded);
        return unserialized;
    }
    /**
     *
     * Compares the given `newConsents` and `previousConsents` and returns `true` if there are differences (the `newConsents` are updates).
     * Otherwise it returns `false`.
     *
     * @param newConsents new consents to compare
     * @param previousConsents old consents to compare
     */
    consentsUpdated(newConsents, previousConsents) {
        const newRawConsents = this.serializeAndEncode(newConsents);
        const previousRawConsents = this.serializeAndEncode(previousConsents);
        return newRawConsents !== previousRawConsents;
    }
};
AnonymousConsentsService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
AnonymousConsentsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentsService_Factory() { return new AnonymousConsentsService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: AnonymousConsentsService, providedIn: "root" });
AnonymousConsentsService = __decorate([
    Injectable({ providedIn: 'root' })
], AnonymousConsentsService);
export { AnonymousConsentsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBRUwsd0JBQXdCLEdBRXpCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHdEUsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFDbkMsWUFDWSxLQUF3QyxFQUN4QyxXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUFtQztRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDO0lBRUo7O09BRUc7SUFDSCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksd0JBQXdCLENBQUMsNkJBQTZCLEVBQUUsQ0FDN0QsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILFlBQVksQ0FBQyxhQUFhLEdBQUcsS0FBSztRQUNoQyxPQUFPLEdBQUcsQ0FDUixH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LEVBQy9CLGdCQUFvQztRQUVwQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUQsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RSxPQUFPLGNBQWMsS0FBSyxtQkFBbUIsQ0FBQztJQUNoRCxDQUFDO0NBQ0YsQ0FBQTs7WUE1VG9CLEtBQUs7WUFDQyxXQUFXOzs7QUFIekIsd0JBQXdCO0lBRHBDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0Qix3QkFBd0IsQ0E4VHBDO1NBOVRZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLFxuICBDb25zZW50VGVtcGxhdGUsXG59IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMgfSBmcm9tICcuLi9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHM+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGxvYWRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZGl0aW9uYWxseSB0cmlnZ2VycyB0aGUgbG9hZCBvZiB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIGlmOlxuICAgKiAgIC0gYGxvYWRJZk1pc3NpbmdgIHBhcmFtZXRlciBpcyBzZXQgdG8gYHRydWVgXG4gICAqICAgLSB0aGUgYHRlbXBsYXRlc2AgaW4gdGhlIHN0b3JlIGFyZSBgdW5kZWZpbmVkYFxuICAgKlxuICAgKiBPdGhld2lzZSBpdCBqdXN0IHJldHVybnMgdGhlIHZhbHVlIGZyb20gdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcGFyYW0gbG9hZElmTWlzc2luZyBzZXR0aW5nIHRvIGB0cnVlYCB3aWxsIHRyaWdnZXIgdGhlIGxvYWQgb2YgdGhlIHRlbXBsYXRlcyBpZiB0aGUgY3VycmVudGx5IHN0b3JlZCB0ZW1wbGF0ZXMgYXJlIGB1bmRlZmluZWRgXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMobG9hZElmTWlzc2luZyA9IGZhbHNlKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PiBsb2FkSWZNaXNzaW5nLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1ZhbHVlKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5nZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpKSxcbiAgICAgICAgZmlsdGVyKChbX3RlbXBsYXRlcywgbG9hZGluZ10pID0+ICFsb2FkaW5nKSxcbiAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IHtcbiAgICAgICAgICBpZiAoIUJvb2xlYW4odGVtcGxhdGVzKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGVtcGxhdGVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IEJvb2xlYW4odGVtcGxhdGVzKSksXG4gICAgICAgIG1hcCgoW3RlbXBsYXRlcywgX2xvYWRpbmddKSA9PiB0ZW1wbGF0ZXMpXG4gICAgICApLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1ZhbHVlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIHdpdGggdGhlIGdpdmVuIHRlbXBsYXRlIGNvZGUuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgYSB0ZW1wbGF0ZSBjb2RlIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRUZW1wbGF0ZSh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlKHRlbXBsYXRlQ29kZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgbG9hZGluZyBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNMb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBzdWNjZXNzIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIGVycm9yIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNFcnJvcilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgbG9hZGluZywgc3VjY2VzcyBhbmQgZXJyb3IgaW5kaWNhdG9ycyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIHJlc2V0TG9hZFRlbXBsYXRlc1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlJlc2V0TG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cy5cbiAgICovXG4gIGdldENvbnNlbnRzKCk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50cylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1dHMgdGhlIHByb3ZpZGVkIGFub255bW91cyBjb25zZW50cyBpbnRvIHRoZSBzdG9yZS5cbiAgICovXG4gIHNldENvbnNlbnRzKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuU2V0QW5vbnltb3VzQ29uc2VudHMoY29uc2VudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhbm9ueW1vdXMgY29uc2VudCBmb3IgdGhlIGdpdmVuIHRlbXBsYXRlIElELlxuICAgKlxuICAgKiBBcyBhIHNpZGUtZWZmZWN0LCB0aGUgbWV0aG9kIHdpbGwgY2FsbCBgZ2V0VGVtcGxhdGVzKHRydWUpYCB0byBsb2FkIHRoZSB0ZW1wbGF0ZXMgaWYgdGhvc2UgYXJlIG5vdCBwcmVzZW50LlxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBhIHRlbXBsYXRlIElEIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRDb25zZW50KHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudD4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkucGlwZShcbiAgICAgIGZpbHRlcigoYXV0aGVudGljYXRlZCkgPT4gIWF1dGhlbnRpY2F0ZWQpLFxuICAgICAgdGFwKCgpID0+IHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KFxuICAgICAgICAgICAgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudEJ5VGVtcGxhdGVDb2RlKFxuICAgICAgICAgICAgICB0ZW1wbGF0ZUlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlIGEgY29uc2VudCBmb3IgdGhlIGdpdmVuIGB0ZW1wbGF0ZUNvZGVgXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIGdpdmUgdGhlIGNvbnNlbnRcbiAgICovXG4gIGdpdmVDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuR2l2ZUFub255bW91c0NvbnNlbnQodGVtcGxhdGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cycgc3RhdGUgdG8gZ2l2ZW4uXG4gICAqL1xuICBnaXZlQWxsQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlcyh0cnVlKS5waXBlKFxuICAgICAgdGFwKCh0ZW1wbGF0ZXMpID0+XG4gICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4gdGhpcy5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCkpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgYGNvbnNlbnRgIGlzIGdpdmVuLlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgKi9cbiAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb25zZW50ICYmIGNvbnNlbnQuY29uc2VudFN0YXRlID09PSBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMuR0lWRU47XG4gIH1cblxuICAvKipcbiAgICogV2l0aGRyYXcgYSBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYHRlbXBsYXRlQ29kZWBcbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBmb3Igd2hpY2ggdG8gd2l0aGRyYXcgdGhlIGNvbnNlbnRcbiAgICovXG4gIHdpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLldpdGhkcmF3QW5vbnltb3VzQ29uc2VudCh0ZW1wbGF0ZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzJyBzdGF0ZSB0byB3aXRoZHJhd24uXG4gICAqL1xuICB3aXRoZHJhd0FsbENvbnNlbnRzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRUZW1wbGF0ZXModHJ1ZSkucGlwZShcbiAgICAgIHRhcCgodGVtcGxhdGVzKSA9PlxuICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHRoaXMud2l0aGRyYXdDb25zZW50KHRlbXBsYXRlLmlkKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBgY29uc2VudGAgaXMgd2l0aGRyYXduLlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgKi9cbiAgaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgY29uc2VudCAmJiBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLldJVEhEUkFXTlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZGlzbWlzc2VkIHN0YXRlIG9mIHRoZSBhbm9ueW1vdXMgY29uc2VudHMgYmFubmVyLlxuICAgKiBAcGFyYW0gZGlzbWlzc2VkIHRoZSBiYW5uZXIgd2lsbCBiZSBkaXNtaXNzZWQgaWYgYHRydWVgIGlzIHBhc3NlZCwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgdmlzaWJsZS5cbiAgICovXG4gIHRvZ2dsZUJhbm5lckRpc21pc3NlZChkaXNtaXNzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50c0Jhbm5lckRpc3NtaXNzZWQoXG4gICAgICAgIGRpc21pc3NlZFxuICAgICAgKVxuICAgICk7XG4gICAgaWYgKGRpc21pc3NlZCkge1xuICAgICAgdGhpcy50b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGJhbm5lciB3YXMgZGlzbWlzc2VkLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICovXG4gIGlzQmFubmVyRGlzbWlzc2VkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudHNCYW5uZXJEaXNtaXNzZWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY29uc2VudCB0ZW1wbGF0ZXMgd2VyZSB1cGRhdGVkIG9uIHRoZSBiYWNrLWVuZC5cbiAgICogSWYgdGhlIHRlbXBsYXRlcyBhcmUgbm90IHByZXNlbnQgaW4gdGhlIHN0b3JlLCBpdCB0cmlnZ2VycyB0aGUgbG9hZC5cbiAgICovXG4gIGdldFRlbXBsYXRlc1VwZGF0ZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBgdXBkYXRlZGAgc2xpY2Ugb2YgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSB1cGRhdGVkXG4gICAqL1xuICB0b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKHVwZGF0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZChcbiAgICAgICAgdXBkYXRlZFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgZWl0aGVyIHRoZSBiYW5uZXIgaXMgbm90IGRpc21pc3NlZCBvciBpZiB0aGUgdGVtcGxhdGVzIHdlcmUgdXBkYXRlZCBvbiB0aGUgYmFjay1lbmQuXG4gICAqIE90aGVyd2lzZSwgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgKi9cbiAgaXNCYW5uZXJWaXNpYmxlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuaXNCYW5uZXJEaXNtaXNzZWQoKSxcbiAgICAgIHRoaXMuZ2V0VGVtcGxhdGVzVXBkYXRlZCgpLFxuICAgIF0pLnBpcGUobWFwKChbZGlzbWlzc2VkLCB1cGRhdGVkXSkgPT4gIWRpc21pc3NlZCB8fCB1cGRhdGVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlcmUncyBhIG1pc3NtYXRjaCBpbiB0ZW1wbGF0ZSB2ZXJzaW9ucyBiZXR3ZWVuIHRoZSBwcm92aWRlZCBgY3VycmVudFRlbXBsYXRlc2AgYW5kIGBuZXdUZW1wbGF0ZXNgXG4gICAqIEBwYXJhbSBjdXJyZW50VGVtcGxhdGVzIGN1cnJlbnQgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAqIEBwYXJhbSBuZXdUZW1wbGF0ZXMgbmV3IHRlbXBsYXRlcyB0byBjaGVja1xuICAgKi9cbiAgZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhcbiAgICBjdXJyZW50VGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSxcbiAgICBuZXdUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChuZXdUZW1wbGF0ZXMubGVuZ3RoICE9PSBjdXJyZW50VGVtcGxhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdUZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1RlbXBsYXRlID0gbmV3VGVtcGxhdGVzW2ldO1xuICAgICAgY29uc3QgY3VycmVudFRlbXBsYXRlID0gY3VycmVudFRlbXBsYXRlc1tpXTtcbiAgICAgIGlmIChuZXdUZW1wbGF0ZS52ZXJzaW9uICE9PSBjdXJyZW50VGVtcGxhdGUudmVyc2lvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyB1c2luZyBgSlNPTi5zdHJpbmdpZnkoKWAgYW5kIGVuY29kZXMgdXNpbmcgYGVuY29kZVVSSUNvbXBvbmVudCgpYCBtZXRob2RzXG4gICAqIEBwYXJhbSBjb25zZW50cyB0byBzZXJpYWxpemUgYW5kIGVuY29kZVxuICAgKi9cbiAgc2VyaWFsaXplQW5kRW5jb2RlKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiBzdHJpbmcge1xuICAgIGlmICghY29uc2VudHMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGNvbnNlbnRzKTtcbiAgICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHNlcmlhbGl6ZWQpO1xuICAgIHJldHVybiBlbmNvZGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29kZXMgdXNpbmcgYGRlY29kZVVSSUNvbXBvbmVudCgpYCBhbmQgZGVzZXJpYWxpemVzIHVzaW5nIGBKU09OLnBhcnNlKClgXG4gICAqIEBwYXJhbSByYXdDb25zZW50cyB0byBkZWNvZGUgYW4gZGVzZXJpYWxpemVcbiAgICovXG4gIGRlY29kZUFuZERlc2VyaWFsaXplKHJhd0NvbnNlbnRzOiBzdHJpbmcpOiBBbm9ueW1vdXNDb25zZW50W10ge1xuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQocmF3Q29uc2VudHMpO1xuICAgIGNvbnN0IHVuc2VyaWFsaXplZCA9IEpTT04ucGFyc2UoZGVjb2RlZCkgYXMgQW5vbnltb3VzQ29uc2VudFtdO1xuICAgIHJldHVybiB1bnNlcmlhbGl6ZWQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQ29tcGFyZXMgdGhlIGdpdmVuIGBuZXdDb25zZW50c2AgYW5kIGBwcmV2aW91c0NvbnNlbnRzYCBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlcmUgYXJlIGRpZmZlcmVuY2VzICh0aGUgYG5ld0NvbnNlbnRzYCBhcmUgdXBkYXRlcykuXG4gICAqIE90aGVyd2lzZSBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAqXG4gICAqIEBwYXJhbSBuZXdDb25zZW50cyBuZXcgY29uc2VudHMgdG8gY29tcGFyZVxuICAgKiBAcGFyYW0gcHJldmlvdXNDb25zZW50cyBvbGQgY29uc2VudHMgdG8gY29tcGFyZVxuICAgKi9cbiAgY29uc2VudHNVcGRhdGVkKFxuICAgIG5ld0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10sXG4gICAgcHJldmlvdXNDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5ld1Jhd0NvbnNlbnRzID0gdGhpcy5zZXJpYWxpemVBbmRFbmNvZGUobmV3Q29uc2VudHMpO1xuICAgIGNvbnN0IHByZXZpb3VzUmF3Q29uc2VudHMgPSB0aGlzLnNlcmlhbGl6ZUFuZEVuY29kZShwcmV2aW91c0NvbnNlbnRzKTtcbiAgICByZXR1cm4gbmV3UmF3Q29uc2VudHMgIT09IHByZXZpb3VzUmF3Q29uc2VudHM7XG4gIH1cbn1cbiJdfQ==