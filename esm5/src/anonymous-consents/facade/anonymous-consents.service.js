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
        return this.authService.isUserLoggedIn().pipe(filter(function (authenticated) { return !authenticated; }), tap(function (_) { return _this.getTemplates(true); }), switchMap(function (_) {
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
        return this.getTemplates(true).pipe(switchMap(function (_) {
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
        return combineLatest([
            this.isBannerDismissed(),
            this.getTemplatesUpdated(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), dismissed = _b[0], updated = _b[1];
            return !dismissed || updated;
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBRUwsd0JBQXdCLEdBRXpCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHdEU7SUFDRSxrQ0FDWSxLQUF3QyxFQUN4QyxXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUFtQztRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDO0lBRUo7O09BRUc7SUFDSCxnREFBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksd0JBQXdCLENBQUMsNkJBQTZCLEVBQUUsQ0FDN0QsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILCtDQUFZLEdBQVosVUFBYSxhQUFxQjtRQUFsQyxpQkFtQkM7UUFuQlksOEJBQUEsRUFBQSxxQkFBcUI7UUFDaEMsT0FBTyxH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T0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBTSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVEQUFvQixHQUFwQixVQUFxQixXQUFtQjtRQUN0QyxJQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBdUIsQ0FBQztRQUMvRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILGtEQUFlLEdBQWYsVUFDRSxXQUErQixFQUMvQixnQkFBb0M7UUFFcEMsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVELElBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEUsT0FBTyxjQUFjLEtBQUssbUJBQW1CLENBQUM7SUFDaEQsQ0FBQzs7Z0JBM1RrQixLQUFLO2dCQUNDLFdBQVc7OztJQUh6Qix3QkFBd0I7UUFEcEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLHdCQUF3QixDQThUcEM7bUNBN1VEO0NBNlVDLEFBOVRELElBOFRDO1NBOVRZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLFxuICBDb25zZW50VGVtcGxhdGUsXG59IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMgfSBmcm9tICcuLi9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHM+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGxvYWRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZGl0aW9uYWxseSB0cmlnZ2VycyB0aGUgbG9hZCBvZiB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIGlmOlxuICAgKiAgIC0gYGxvYWRJZk1pc3NpbmdgIHBhcmFtZXRlciBpcyBzZXQgdG8gYHRydWVgXG4gICAqICAgLSB0aGUgYHRlbXBsYXRlc2AgaW4gdGhlIHN0b3JlIGFyZSBgdW5kZWZpbmVkYFxuICAgKlxuICAgKiBPdGhld2lzZSBpdCBqdXN0IHJldHVybnMgdGhlIHZhbHVlIGZyb20gdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcGFyYW0gbG9hZElmTWlzc2luZyBzZXR0aW5nIHRvIGB0cnVlYCB3aWxsIHRyaWdnZXIgdGhlIGxvYWQgb2YgdGhlIHRlbXBsYXRlcyBpZiB0aGUgY3VycmVudGx5IHN0b3JlZCB0ZW1wbGF0ZXMgYXJlIGB1bmRlZmluZWRgXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMobG9hZElmTWlzc2luZyA9IGZhbHNlKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PiBsb2FkSWZNaXNzaW5nLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1ZhbHVlKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5nZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpKSxcbiAgICAgICAgZmlsdGVyKChbX3RlbXBsYXRlcywgbG9hZGluZ10pID0+ICFsb2FkaW5nKSxcbiAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IHtcbiAgICAgICAgICBpZiAoIUJvb2xlYW4odGVtcGxhdGVzKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGVtcGxhdGVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IEJvb2xlYW4odGVtcGxhdGVzKSksXG4gICAgICAgIG1hcCgoW3RlbXBsYXRlcywgX2xvYWRpbmddKSA9PiB0ZW1wbGF0ZXMpXG4gICAgICApLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1ZhbHVlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIHdpdGggdGhlIGdpdmVuIHRlbXBsYXRlIGNvZGUuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgYSB0ZW1wbGF0ZSBjb2RlIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRUZW1wbGF0ZSh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlKHRlbXBsYXRlQ29kZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgbG9hZGluZyBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNMb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBzdWNjZXNzIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIGVycm9yIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNFcnJvcilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgbG9hZGluZywgc3VjY2VzcyBhbmQgZXJyb3IgaW5kaWNhdG9ycyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIHJlc2V0TG9hZFRlbXBsYXRlc1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlJlc2V0TG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cy5cbiAgICovXG4gIGdldENvbnNlbnRzKCk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50cylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1dHMgdGhlIHByb3ZpZGVkIGFub255bW91cyBjb25zZW50cyBpbnRvIHRoZSBzdG9yZS5cbiAgICovXG4gIHNldENvbnNlbnRzKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuU2V0QW5vbnltb3VzQ29uc2VudHMoY29uc2VudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhbm9ueW1vdXMgY29uc2VudCBmb3IgdGhlIGdpdmVuIHRlbXBsYXRlIElELlxuICAgKlxuICAgKiBBcyBhIHNpZGUtZWZmZWN0LCB0aGUgbWV0aG9kIHdpbGwgY2FsbCBgZ2V0VGVtcGxhdGVzKHRydWUpYCB0byBsb2FkIHRoZSB0ZW1wbGF0ZXMgaWYgdGhvc2UgYXJlIG5vdCBwcmVzZW50LlxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBhIHRlbXBsYXRlIElEIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRDb25zZW50KHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudD4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkucGlwZShcbiAgICAgIGZpbHRlcihhdXRoZW50aWNhdGVkID0+ICFhdXRoZW50aWNhdGVkKSxcbiAgICAgIHRhcChfID0+IHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpKSxcbiAgICAgIHN3aXRjaE1hcChfID0+XG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICBBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50QnlUZW1wbGF0ZUNvZGUoXG4gICAgICAgICAgICAgIHRlbXBsYXRlSWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmUgYSBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYHRlbXBsYXRlQ29kZWBcbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBmb3Igd2hpY2ggdG8gZ2l2ZSB0aGUgY29uc2VudFxuICAgKi9cbiAgZ2l2ZUNvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5HaXZlQW5vbnltb3VzQ29uc2VudCh0ZW1wbGF0ZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzJyBzdGF0ZSB0byBnaXZlbi5cbiAgICovXG4gIGdpdmVBbGxDb25zZW50cygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpLnBpcGUoXG4gICAgICB0YXAodGVtcGxhdGVzID0+XG4gICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHRoaXMuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGBjb25zZW50YCBpcyBnaXZlbi5cbiAgICogQHBhcmFtIGNvbnNlbnQgYSBjb25zZW50IHRvIHRlc3RcbiAgICovXG4gIGlzQ29uc2VudEdpdmVuKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY29uc2VudCAmJiBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLkdJVkVOO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpdGhkcmF3IGEgY29uc2VudCBmb3IgdGhlIGdpdmVuIGB0ZW1wbGF0ZUNvZGVgXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIHdpdGhkcmF3IHRoZSBjb25zZW50XG4gICAqL1xuICB3aXRoZHJhd0NvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5XaXRoZHJhd0Fub255bW91c0NvbnNlbnQodGVtcGxhdGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cycgc3RhdGUgdG8gd2l0aGRyYXduLlxuICAgKi9cbiAgd2l0aGRyYXdBbGxDb25zZW50cygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpLnBpcGUoXG4gICAgICB0YXAodGVtcGxhdGVzID0+XG4gICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHRoaXMud2l0aGRyYXdDb25zZW50KHRlbXBsYXRlLmlkKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBgY29uc2VudGAgaXMgd2l0aGRyYXduLlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgKi9cbiAgaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgY29uc2VudCAmJiBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLldJVEhEUkFXTlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZGlzbWlzc2VkIHN0YXRlIG9mIHRoZSBhbm9ueW1vdXMgY29uc2VudHMgYmFubmVyLlxuICAgKiBAcGFyYW0gZGlzbWlzc2VkIHRoZSBiYW5uZXIgd2lsbCBiZSBkaXNtaXNzZWQgaWYgYHRydWVgIGlzIHBhc3NlZCwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgdmlzaWJsZS5cbiAgICovXG4gIHRvZ2dsZUJhbm5lckRpc21pc3NlZChkaXNtaXNzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50c0Jhbm5lckRpc3NtaXNzZWQoXG4gICAgICAgIGRpc21pc3NlZFxuICAgICAgKVxuICAgICk7XG4gICAgaWYgKGRpc21pc3NlZCkge1xuICAgICAgdGhpcy50b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGJhbm5lciB3YXMgZGlzbWlzc2VkLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICovXG4gIGlzQmFubmVyRGlzbWlzc2VkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudHNCYW5uZXJEaXNtaXNzZWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY29uc2VudCB0ZW1wbGF0ZXMgd2VyZSB1cGRhdGVkIG9uIHRoZSBiYWNrLWVuZC5cbiAgICogSWYgdGhlIHRlbXBsYXRlcyBhcmUgbm90IHByZXNlbnQgaW4gdGhlIHN0b3JlLCBpdCB0cmlnZ2VycyB0aGUgbG9hZC5cbiAgICovXG4gIGdldFRlbXBsYXRlc1VwZGF0ZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoXyA9PlxuICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNVcGRhdGUpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGB1cGRhdGVkYCBzbGljZSBvZiB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHVwZGF0ZWRcbiAgICovXG4gIHRvZ2dsZVRlbXBsYXRlc1VwZGF0ZWQodXBkYXRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNVcGRhdGVkKFxuICAgICAgICB1cGRhdGVkXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBlaXRoZXIgdGhlIGJhbm5lciBpcyBub3QgZGlzbWlzc2VkIG9yIGlmIHRoZSB0ZW1wbGF0ZXMgd2VyZSB1cGRhdGVkIG9uIHRoZSBiYWNrLWVuZC5cbiAgICogT3RoZXJ3aXNlLCBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAqL1xuICBpc0Jhbm5lclZpc2libGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5pc0Jhbm5lckRpc21pc3NlZCgpLFxuICAgICAgdGhpcy5nZXRUZW1wbGF0ZXNVcGRhdGVkKCksXG4gICAgXSkucGlwZShtYXAoKFtkaXNtaXNzZWQsIHVwZGF0ZWRdKSA9PiAhZGlzbWlzc2VkIHx8IHVwZGF0ZWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGVyZSdzIGEgbWlzc21hdGNoIGluIHRlbXBsYXRlIHZlcnNpb25zIGJldHdlZW4gdGhlIHByb3ZpZGVkIGBjdXJyZW50VGVtcGxhdGVzYCBhbmQgYG5ld1RlbXBsYXRlc2BcbiAgICogQHBhcmFtIGN1cnJlbnRUZW1wbGF0ZXMgY3VycmVudCB0ZW1wbGF0ZXMgdG8gY2hlY2tcbiAgICogQHBhcmFtIG5ld1RlbXBsYXRlcyBuZXcgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAqL1xuICBkZXRlY3RVcGRhdGVkVGVtcGxhdGVzKFxuICAgIGN1cnJlbnRUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdLFxuICAgIG5ld1RlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW11cbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKG5ld1RlbXBsYXRlcy5sZW5ndGggIT09IGN1cnJlbnRUZW1wbGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1RlbXBsYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmV3VGVtcGxhdGUgPSBuZXdUZW1wbGF0ZXNbaV07XG4gICAgICBjb25zdCBjdXJyZW50VGVtcGxhdGUgPSBjdXJyZW50VGVtcGxhdGVzW2ldO1xuICAgICAgaWYgKG5ld1RlbXBsYXRlLnZlcnNpb24gIT09IGN1cnJlbnRUZW1wbGF0ZS52ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIHVzaW5nIGBKU09OLnN0cmluZ2lmeSgpYCBhbmQgZW5jb2RlcyB1c2luZyBgZW5jb2RlVVJJQ29tcG9uZW50KClgIG1ldGhvZHNcbiAgICogQHBhcmFtIGNvbnNlbnRzIHRvIHNlcmlhbGl6ZSBhbmQgZW5jb2RlXG4gICAqL1xuICBzZXJpYWxpemVBbmRFbmNvZGUoY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSk6IHN0cmluZyB7XG4gICAgaWYgKCFjb25zZW50cykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBzZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoY29uc2VudHMpO1xuICAgIGNvbnN0IGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQoc2VyaWFsaXplZCk7XG4gICAgcmV0dXJuIGVuY29kZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVjb2RlcyB1c2luZyBgZGVjb2RlVVJJQ29tcG9uZW50KClgIGFuZCBkZXNlcmlhbGl6ZXMgdXNpbmcgYEpTT04ucGFyc2UoKWBcbiAgICogQHBhcmFtIHJhd0NvbnNlbnRzIHRvIGRlY29kZSBhbiBkZXNlcmlhbGl6ZVxuICAgKi9cbiAgZGVjb2RlQW5kRGVzZXJpYWxpemUocmF3Q29uc2VudHM6IHN0cmluZyk6IEFub255bW91c0NvbnNlbnRbXSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGRlY29kZVVSSUNvbXBvbmVudChyYXdDb25zZW50cyk7XG4gICAgY29uc3QgdW5zZXJpYWxpemVkID0gSlNPTi5wYXJzZShkZWNvZGVkKSBhcyBBbm9ueW1vdXNDb25zZW50W107XG4gICAgcmV0dXJuIHVuc2VyaWFsaXplZDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBDb21wYXJlcyB0aGUgZ2l2ZW4gYG5ld0NvbnNlbnRzYCBhbmQgYHByZXZpb3VzQ29uc2VudHNgIGFuZCByZXR1cm5zIGB0cnVlYCBpZiB0aGVyZSBhcmUgZGlmZmVyZW5jZXMgKHRoZSBgbmV3Q29uc2VudHNgIGFyZSB1cGRhdGVzKS5cbiAgICogT3RoZXJ3aXNlIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICpcbiAgICogQHBhcmFtIG5ld0NvbnNlbnRzIG5ldyBjb25zZW50cyB0byBjb21wYXJlXG4gICAqIEBwYXJhbSBwcmV2aW91c0NvbnNlbnRzIG9sZCBjb25zZW50cyB0byBjb21wYXJlXG4gICAqL1xuICBjb25zZW50c1VwZGF0ZWQoXG4gICAgbmV3Q29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSxcbiAgICBwcmV2aW91c0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W11cbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbmV3UmF3Q29uc2VudHMgPSB0aGlzLnNlcmlhbGl6ZUFuZEVuY29kZShuZXdDb25zZW50cyk7XG4gICAgY29uc3QgcHJldmlvdXNSYXdDb25zZW50cyA9IHRoaXMuc2VyaWFsaXplQW5kRW5jb2RlKHByZXZpb3VzQ29uc2VudHMpO1xuICAgIHJldHVybiBuZXdSYXdDb25zZW50cyAhPT0gcHJldmlvdXNSYXdDb25zZW50cztcbiAgfVxufVxuIl19