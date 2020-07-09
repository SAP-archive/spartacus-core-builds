import { __decorate, __read } from "tslib";
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
var AnonymousConsentsService = /** @class */ (function () {
    function AnonymousConsentsService(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves the anonymous consent templates.
     */
    AnonymousConsentsService.prototype.loadTemplates = function () {
        this.store.dispatch(new AnonymousConsentsActions.LoadAnonymousConsentTemplates());
    };
    /**
     * Conditionally triggers the load of the anonymous consent templates if:
     *   - `loadIfMissing` parameter is set to `true`
     *   - the `templates` in the store are `undefined`
     *
     * Othewise it just returns the value from the store.
     *
     * @param loadIfMissing setting to `true` will trigger the load of the templates if the currently stored templates are `undefined`
     */
    AnonymousConsentsService.prototype.getTemplates = function (loadIfMissing) {
        var _this = this;
        if (loadIfMissing === void 0) { loadIfMissing = false; }
        return iif(function () { return loadIfMissing; }, this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesValue), withLatestFrom(this.getLoadTemplatesLoading()), filter(function (_a) {
            var _b = __read(_a, 2), _templates = _b[0], loading = _b[1];
            return !loading;
        }), tap(function (_a) {
            var _b = __read(_a, 2), templates = _b[0], _loading = _b[1];
            if (!Boolean(templates)) {
                _this.loadTemplates();
            }
        }), filter(function (_a) {
            var _b = __read(_a, 2), templates = _b[0], _loading = _b[1];
            return Boolean(templates);
        }), map(function (_a) {
            var _b = __read(_a, 2), templates = _b[0], _loading = _b[1];
            return templates;
        })), this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesValue)));
    };
    /**
     * Returns the anonymous consent templates with the given template code.
     * @param templateCode a template code by which to filter anonymous consent templates.
     */
    AnonymousConsentsService.prototype.getTemplate = function (templateCode) {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplate(templateCode)));
    };
    /**
     * Returns an indicator for the loading status for the anonymous consent templates.
     */
    AnonymousConsentsService.prototype.getLoadTemplatesLoading = function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesLoading));
    };
    /**
     * Returns an indicator for the success status for the anonymous consent templates.
     */
    AnonymousConsentsService.prototype.getLoadTemplatesSuccess = function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesSuccess));
    };
    /**
     * Returns an indicator for the error status for the anonymous consent templates.
     */
    AnonymousConsentsService.prototype.getLoadTemplatesError = function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesError));
    };
    /**
     * Resets the loading, success and error indicators for the anonymous consent templates.
     */
    AnonymousConsentsService.prototype.resetLoadTemplatesState = function () {
        this.store.dispatch(new AnonymousConsentsActions.ResetLoadAnonymousConsentTemplates());
    };
    /**
     * Returns all the anonymous consents.
     */
    AnonymousConsentsService.prototype.getConsents = function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsents));
    };
    /**
     * Puts the provided anonymous consents into the store.
     */
    AnonymousConsentsService.prototype.setConsents = function (consents) {
        return this.store.dispatch(new AnonymousConsentsActions.SetAnonymousConsents(consents));
    };
    /**
     * Returns the anonymous consent for the given template ID.
     *
     * As a side-effect, the method will call `getTemplates(true)` to load the templates if those are not present.
     *
     * @param templateId a template ID by which to filter anonymous consent templates.
     */
    AnonymousConsentsService.prototype.getConsent = function (templateId) {
        var _this = this;
        return this.authService.isUserLoggedIn().pipe(filter(function (authenticated) { return !authenticated; }), tap(function () { return _this.getTemplates(true); }), switchMap(function () {
            return _this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentByTemplateCode(templateId)));
        }));
    };
    /**
     * Give a consent for the given `templateCode`
     * @param templateCode for which to give the consent
     */
    AnonymousConsentsService.prototype.giveConsent = function (templateCode) {
        this.store.dispatch(new AnonymousConsentsActions.GiveAnonymousConsent(templateCode));
    };
    /**
     * Sets all the anonymous consents' state to given.
     */
    AnonymousConsentsService.prototype.giveAllConsents = function () {
        var _this = this;
        return this.getTemplates(true).pipe(tap(function (templates) {
            return templates.forEach(function (template) { return _this.giveConsent(template.id); });
        }));
    };
    /**
     * Returns `true` if the provided `consent` is given.
     * @param consent a consent to test
     */
    AnonymousConsentsService.prototype.isConsentGiven = function (consent) {
        return consent && consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN;
    };
    /**
     * Withdraw a consent for the given `templateCode`
     * @param templateCode for which to withdraw the consent
     */
    AnonymousConsentsService.prototype.withdrawConsent = function (templateCode) {
        this.store.dispatch(new AnonymousConsentsActions.WithdrawAnonymousConsent(templateCode));
    };
    /**
     * Sets all the anonymous consents' state to withdrawn.
     */
    AnonymousConsentsService.prototype.withdrawAllConsents = function () {
        var _this = this;
        return this.getTemplates(true).pipe(tap(function (templates) {
            return templates.forEach(function (template) { return _this.withdrawConsent(template.id); });
        }));
    };
    /**
     * Returns `true` if the provided `consent` is withdrawn.
     * @param consent a consent to test
     */
    AnonymousConsentsService.prototype.isConsentWithdrawn = function (consent) {
        return (consent && consent.consentState === ANONYMOUS_CONSENT_STATUS.WITHDRAWN);
    };
    /**
     * Toggles the dismissed state of the anonymous consents banner.
     * @param dismissed the banner will be dismissed if `true` is passed, otherwise it will be visible.
     */
    AnonymousConsentsService.prototype.toggleBannerDismissed = function (dismissed) {
        this.store.dispatch(new AnonymousConsentsActions.ToggleAnonymousConsentsBannerDissmissed(dismissed));
        if (dismissed) {
            this.toggleTemplatesUpdated(false);
        }
    };
    /**
     * Returns `true` if the banner was dismissed, `false` otherwise.
     */
    AnonymousConsentsService.prototype.isBannerDismissed = function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentsBannerDismissed));
    };
    /**
     * Returns `true` if the consent templates were updated on the back-end.
     * If the templates are not present in the store, it triggers the load.
     */
    AnonymousConsentsService.prototype.getTemplatesUpdated = function () {
        var _this = this;
        return this.getTemplates(true).pipe(switchMap(function () {
            return _this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesUpdate));
        }));
    };
    /**
     * Toggles the `updated` slice of the state
     * @param updated
     */
    AnonymousConsentsService.prototype.toggleTemplatesUpdated = function (updated) {
        this.store.dispatch(new AnonymousConsentsActions.ToggleAnonymousConsentTemplatesUpdated(updated));
    };
    /**
     * Returns `true` if either the banner is not dismissed or if the templates were updated on the back-end.
     * Otherwise, it returns `false`.
     */
    AnonymousConsentsService.prototype.isBannerVisible = function () {
        var _this = this;
        return combineLatest([
            this.isBannerDismissed(),
            this.getTemplatesUpdated(),
        ]).pipe(tap(function () { return _this.checkConsentVersions(); }), map(function (_a) {
            var _b = __read(_a, 2), dismissed = _b[0], updated = _b[1];
            return !dismissed || updated;
        }));
    };
    /**
     * Dispatches an action to trigger the check
     * whether the anonymous consent version have been updated
     */
    AnonymousConsentsService.prototype.checkConsentVersions = function () {
        this.store.dispatch(new AnonymousConsentsActions.AnonymousConsentCheckUpdatedVersions());
    };
    /**
     * Returns `true` if there's a missmatch in template versions between the provided `currentTemplates` and `newTemplates`
     * @param currentTemplates current templates to check
     * @param newTemplates new templates to check
     */
    AnonymousConsentsService.prototype.detectUpdatedTemplates = function (currentTemplates, newTemplates) {
        if (newTemplates.length !== currentTemplates.length) {
            return true;
        }
        for (var i = 0; i < newTemplates.length; i++) {
            var newTemplate = newTemplates[i];
            var currentTemplate = currentTemplates[i];
            if (newTemplate.version !== currentTemplate.version) {
                return true;
            }
        }
        return false;
    };
    /**
     * Serializes using `JSON.stringify()` and encodes using `encodeURIComponent()` methods
     * @param consents to serialize and encode
     */
    AnonymousConsentsService.prototype.serializeAndEncode = function (consents) {
        if (!consents) {
            return '';
        }
        var serialized = JSON.stringify(consents);
        var encoded = encodeURIComponent(serialized);
        return encoded;
    };
    /**
     * Decodes using `decodeURIComponent()` and deserializes using `JSON.parse()`
     * @param rawConsents to decode an deserialize
     */
    AnonymousConsentsService.prototype.decodeAndDeserialize = function (rawConsents) {
        var decoded = decodeURIComponent(rawConsents);
        var unserialized = JSON.parse(decoded);
        return unserialized;
    };
    /**
     *
     * Compares the given `newConsents` and `previousConsents` and returns `true` if there are differences (the `newConsents` are updates).
     * Otherwise it returns `false`.
     *
     * @param newConsents new consents to compare
     * @param previousConsents old consents to compare
     */
    AnonymousConsentsService.prototype.consentsUpdated = function (newConsents, previousConsents) {
        var newRawConsents = this.serializeAndEncode(newConsents);
        var previousRawConsents = this.serializeAndEncode(previousConsents);
        return newRawConsents !== previousRawConsents;
    };
    AnonymousConsentsService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    AnonymousConsentsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentsService_Factory() { return new AnonymousConsentsService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: AnonymousConsentsService, providedIn: "root" });
    AnonymousConsentsService = __decorate([
        Injectable({ providedIn: 'root' })
    ], AnonymousConsentsService);
    return AnonymousConsentsService;
}());
export { AnonymousConsentsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBRUwsd0JBQXdCLEdBRXpCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHdEU7SUFDRSxrQ0FDWSxLQUF3QyxFQUN4QyxXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUFtQztRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDO0lBRUo7O09BRUc7SUFDSCxnREFBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksd0JBQXdCLENBQUMsNkJBQTZCLEVBQUUsQ0FDN0QsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILCtDQUFZLEdBQVosVUFBYSxhQUFxQjtRQUFsQyxpQkFtQkM7UUFuQlksOEJBQUEsRUFBQSxxQkFBcUI7UUFDaEMsT0FBTyxH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fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLFxuICBDb25zZW50VGVtcGxhdGUsXG59IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMgfSBmcm9tICcuLi9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHM+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGxvYWRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZGl0aW9uYWxseSB0cmlnZ2VycyB0aGUgbG9hZCBvZiB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIGlmOlxuICAgKiAgIC0gYGxvYWRJZk1pc3NpbmdgIHBhcmFtZXRlciBpcyBzZXQgdG8gYHRydWVgXG4gICAqICAgLSB0aGUgYHRlbXBsYXRlc2AgaW4gdGhlIHN0b3JlIGFyZSBgdW5kZWZpbmVkYFxuICAgKlxuICAgKiBPdGhld2lzZSBpdCBqdXN0IHJldHVybnMgdGhlIHZhbHVlIGZyb20gdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcGFyYW0gbG9hZElmTWlzc2luZyBzZXR0aW5nIHRvIGB0cnVlYCB3aWxsIHRyaWdnZXIgdGhlIGxvYWQgb2YgdGhlIHRlbXBsYXRlcyBpZiB0aGUgY3VycmVudGx5IHN0b3JlZCB0ZW1wbGF0ZXMgYXJlIGB1bmRlZmluZWRgXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMobG9hZElmTWlzc2luZyA9IGZhbHNlKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PiBsb2FkSWZNaXNzaW5nLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1ZhbHVlKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5nZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpKSxcbiAgICAgICAgZmlsdGVyKChbX3RlbXBsYXRlcywgbG9hZGluZ10pID0+ICFsb2FkaW5nKSxcbiAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IHtcbiAgICAgICAgICBpZiAoIUJvb2xlYW4odGVtcGxhdGVzKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGVtcGxhdGVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IEJvb2xlYW4odGVtcGxhdGVzKSksXG4gICAgICAgIG1hcCgoW3RlbXBsYXRlcywgX2xvYWRpbmddKSA9PiB0ZW1wbGF0ZXMpXG4gICAgICApLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1ZhbHVlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIHdpdGggdGhlIGdpdmVuIHRlbXBsYXRlIGNvZGUuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgYSB0ZW1wbGF0ZSBjb2RlIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRUZW1wbGF0ZSh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlKHRlbXBsYXRlQ29kZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgbG9hZGluZyBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNMb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBzdWNjZXNzIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIGVycm9yIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNFcnJvcilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgbG9hZGluZywgc3VjY2VzcyBhbmQgZXJyb3IgaW5kaWNhdG9ycyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIHJlc2V0TG9hZFRlbXBsYXRlc1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlJlc2V0TG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cy5cbiAgICovXG4gIGdldENvbnNlbnRzKCk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50cylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1dHMgdGhlIHByb3ZpZGVkIGFub255bW91cyBjb25zZW50cyBpbnRvIHRoZSBzdG9yZS5cbiAgICovXG4gIHNldENvbnNlbnRzKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuU2V0QW5vbnltb3VzQ29uc2VudHMoY29uc2VudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhbm9ueW1vdXMgY29uc2VudCBmb3IgdGhlIGdpdmVuIHRlbXBsYXRlIElELlxuICAgKlxuICAgKiBBcyBhIHNpZGUtZWZmZWN0LCB0aGUgbWV0aG9kIHdpbGwgY2FsbCBgZ2V0VGVtcGxhdGVzKHRydWUpYCB0byBsb2FkIHRoZSB0ZW1wbGF0ZXMgaWYgdGhvc2UgYXJlIG5vdCBwcmVzZW50LlxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBhIHRlbXBsYXRlIElEIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRDb25zZW50KHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudD4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkucGlwZShcbiAgICAgIGZpbHRlcigoYXV0aGVudGljYXRlZCkgPT4gIWF1dGhlbnRpY2F0ZWQpLFxuICAgICAgdGFwKCgpID0+IHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KFxuICAgICAgICAgICAgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudEJ5VGVtcGxhdGVDb2RlKFxuICAgICAgICAgICAgICB0ZW1wbGF0ZUlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlIGEgY29uc2VudCBmb3IgdGhlIGdpdmVuIGB0ZW1wbGF0ZUNvZGVgXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIGdpdmUgdGhlIGNvbnNlbnRcbiAgICovXG4gIGdpdmVDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuR2l2ZUFub255bW91c0NvbnNlbnQodGVtcGxhdGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cycgc3RhdGUgdG8gZ2l2ZW4uXG4gICAqL1xuICBnaXZlQWxsQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlcyh0cnVlKS5waXBlKFxuICAgICAgdGFwKCh0ZW1wbGF0ZXMpID0+XG4gICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4gdGhpcy5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCkpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgYGNvbnNlbnRgIGlzIGdpdmVuLlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgKi9cbiAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb25zZW50ICYmIGNvbnNlbnQuY29uc2VudFN0YXRlID09PSBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMuR0lWRU47XG4gIH1cblxuICAvKipcbiAgICogV2l0aGRyYXcgYSBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYHRlbXBsYXRlQ29kZWBcbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBmb3Igd2hpY2ggdG8gd2l0aGRyYXcgdGhlIGNvbnNlbnRcbiAgICovXG4gIHdpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLldpdGhkcmF3QW5vbnltb3VzQ29uc2VudCh0ZW1wbGF0ZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzJyBzdGF0ZSB0byB3aXRoZHJhd24uXG4gICAqL1xuICB3aXRoZHJhd0FsbENvbnNlbnRzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRUZW1wbGF0ZXModHJ1ZSkucGlwZShcbiAgICAgIHRhcCgodGVtcGxhdGVzKSA9PlxuICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHRoaXMud2l0aGRyYXdDb25zZW50KHRlbXBsYXRlLmlkKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBgY29uc2VudGAgaXMgd2l0aGRyYXduLlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgKi9cbiAgaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgY29uc2VudCAmJiBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLldJVEhEUkFXTlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZGlzbWlzc2VkIHN0YXRlIG9mIHRoZSBhbm9ueW1vdXMgY29uc2VudHMgYmFubmVyLlxuICAgKiBAcGFyYW0gZGlzbWlzc2VkIHRoZSBiYW5uZXIgd2lsbCBiZSBkaXNtaXNzZWQgaWYgYHRydWVgIGlzIHBhc3NlZCwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgdmlzaWJsZS5cbiAgICovXG4gIHRvZ2dsZUJhbm5lckRpc21pc3NlZChkaXNtaXNzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50c0Jhbm5lckRpc3NtaXNzZWQoXG4gICAgICAgIGRpc21pc3NlZFxuICAgICAgKVxuICAgICk7XG4gICAgaWYgKGRpc21pc3NlZCkge1xuICAgICAgdGhpcy50b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGJhbm5lciB3YXMgZGlzbWlzc2VkLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICovXG4gIGlzQmFubmVyRGlzbWlzc2VkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudHNCYW5uZXJEaXNtaXNzZWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY29uc2VudCB0ZW1wbGF0ZXMgd2VyZSB1cGRhdGVkIG9uIHRoZSBiYWNrLWVuZC5cbiAgICogSWYgdGhlIHRlbXBsYXRlcyBhcmUgbm90IHByZXNlbnQgaW4gdGhlIHN0b3JlLCBpdCB0cmlnZ2VycyB0aGUgbG9hZC5cbiAgICovXG4gIGdldFRlbXBsYXRlc1VwZGF0ZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBgdXBkYXRlZGAgc2xpY2Ugb2YgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSB1cGRhdGVkXG4gICAqL1xuICB0b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKHVwZGF0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZChcbiAgICAgICAgdXBkYXRlZFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgZWl0aGVyIHRoZSBiYW5uZXIgaXMgbm90IGRpc21pc3NlZCBvciBpZiB0aGUgdGVtcGxhdGVzIHdlcmUgdXBkYXRlZCBvbiB0aGUgYmFjay1lbmQuXG4gICAqIE90aGVyd2lzZSwgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgKi9cbiAgaXNCYW5uZXJWaXNpYmxlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuaXNCYW5uZXJEaXNtaXNzZWQoKSxcbiAgICAgIHRoaXMuZ2V0VGVtcGxhdGVzVXBkYXRlZCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5jaGVja0NvbnNlbnRWZXJzaW9ucygpKSxcbiAgICAgIG1hcCgoW2Rpc21pc3NlZCwgdXBkYXRlZF0pID0+ICFkaXNtaXNzZWQgfHwgdXBkYXRlZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uIHRvIHRyaWdnZXIgdGhlIGNoZWNrXG4gICAqIHdoZXRoZXIgdGhlIGFub255bW91cyBjb25zZW50IHZlcnNpb24gaGF2ZSBiZWVuIHVwZGF0ZWRcbiAgICovXG4gIHByaXZhdGUgY2hlY2tDb25zZW50VmVyc2lvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuQW5vbnltb3VzQ29uc2VudENoZWNrVXBkYXRlZFZlcnNpb25zKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZXJlJ3MgYSBtaXNzbWF0Y2ggaW4gdGVtcGxhdGUgdmVyc2lvbnMgYmV0d2VlbiB0aGUgcHJvdmlkZWQgYGN1cnJlbnRUZW1wbGF0ZXNgIGFuZCBgbmV3VGVtcGxhdGVzYFxuICAgKiBAcGFyYW0gY3VycmVudFRlbXBsYXRlcyBjdXJyZW50IHRlbXBsYXRlcyB0byBjaGVja1xuICAgKiBAcGFyYW0gbmV3VGVtcGxhdGVzIG5ldyB0ZW1wbGF0ZXMgdG8gY2hlY2tcbiAgICovXG4gIGRldGVjdFVwZGF0ZWRUZW1wbGF0ZXMoXG4gICAgY3VycmVudFRlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW10sXG4gICAgbmV3VGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXVxuICApOiBib29sZWFuIHtcbiAgICBpZiAobmV3VGVtcGxhdGVzLmxlbmd0aCAhPT0gY3VycmVudFRlbXBsYXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3VGVtcGxhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdUZW1wbGF0ZSA9IG5ld1RlbXBsYXRlc1tpXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUZW1wbGF0ZSA9IGN1cnJlbnRUZW1wbGF0ZXNbaV07XG4gICAgICBpZiAobmV3VGVtcGxhdGUudmVyc2lvbiAhPT0gY3VycmVudFRlbXBsYXRlLnZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgdXNpbmcgYEpTT04uc3RyaW5naWZ5KClgIGFuZCBlbmNvZGVzIHVzaW5nIGBlbmNvZGVVUklDb21wb25lbnQoKWAgbWV0aG9kc1xuICAgKiBAcGFyYW0gY29uc2VudHMgdG8gc2VyaWFsaXplIGFuZCBlbmNvZGVcbiAgICovXG4gIHNlcmlhbGl6ZUFuZEVuY29kZShjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdKTogc3RyaW5nIHtcbiAgICBpZiAoIWNvbnNlbnRzKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShjb25zZW50cyk7XG4gICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudChzZXJpYWxpemVkKTtcbiAgICByZXR1cm4gZW5jb2RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvZGVzIHVzaW5nIGBkZWNvZGVVUklDb21wb25lbnQoKWAgYW5kIGRlc2VyaWFsaXplcyB1c2luZyBgSlNPTi5wYXJzZSgpYFxuICAgKiBAcGFyYW0gcmF3Q29uc2VudHMgdG8gZGVjb2RlIGFuIGRlc2VyaWFsaXplXG4gICAqL1xuICBkZWNvZGVBbmREZXNlcmlhbGl6ZShyYXdDb25zZW50czogc3RyaW5nKTogQW5vbnltb3VzQ29uc2VudFtdIHtcbiAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KHJhd0NvbnNlbnRzKTtcbiAgICBjb25zdCB1bnNlcmlhbGl6ZWQgPSBKU09OLnBhcnNlKGRlY29kZWQpIGFzIEFub255bW91c0NvbnNlbnRbXTtcbiAgICByZXR1cm4gdW5zZXJpYWxpemVkO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIENvbXBhcmVzIHRoZSBnaXZlbiBgbmV3Q29uc2VudHNgIGFuZCBgcHJldmlvdXNDb25zZW50c2AgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZXJlIGFyZSBkaWZmZXJlbmNlcyAodGhlIGBuZXdDb25zZW50c2AgYXJlIHVwZGF0ZXMpLlxuICAgKiBPdGhlcndpc2UgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgKlxuICAgKiBAcGFyYW0gbmV3Q29uc2VudHMgbmV3IGNvbnNlbnRzIHRvIGNvbXBhcmVcbiAgICogQHBhcmFtIHByZXZpb3VzQ29uc2VudHMgb2xkIGNvbnNlbnRzIHRvIGNvbXBhcmVcbiAgICovXG4gIGNvbnNlbnRzVXBkYXRlZChcbiAgICBuZXdDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdLFxuICAgIHByZXZpb3VzQ29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXVxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBuZXdSYXdDb25zZW50cyA9IHRoaXMuc2VyaWFsaXplQW5kRW5jb2RlKG5ld0NvbnNlbnRzKTtcbiAgICBjb25zdCBwcmV2aW91c1Jhd0NvbnNlbnRzID0gdGhpcy5zZXJpYWxpemVBbmRFbmNvZGUocHJldmlvdXNDb25zZW50cyk7XG4gICAgcmV0dXJuIG5ld1Jhd0NvbnNlbnRzICE9PSBwcmV2aW91c1Jhd0NvbnNlbnRzO1xuICB9XG59XG4iXX0=