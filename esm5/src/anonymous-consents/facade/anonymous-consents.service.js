/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
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
     * Toggles the dismissed state of the anonymous consents banner.
     * @param dismissed the banner will be dismissed if `true` is passed, otherwise it will be visible.
     */
    /**
     * Toggles the dismissed state of the anonymous consents banner.
     * @param {?} dismissed the banner will be dismissed if `true` is passed, otherwise it will be visible.
     * @return {?}
     */
    AnonymousConsentsService.prototype.toggleBannerDismissed = /**
     * Toggles the dismissed state of the anonymous consents banner.
     * @param {?} dismissed the banner will be dismissed if `true` is passed, otherwise it will be visible.
     * @return {?}
     */
    function (dismissed) {
        this.store.dispatch(new AnonymousConsentsActions.ToggleAnonymousConsentsBannerDissmissed(dismissed));
        if (dismissed) {
            this.toggleTemplatesUpdated(false);
        }
    };
    /**
     * Returns `true` if the banner was dismissed, `false` otherwise.
     */
    /**
     * Returns `true` if the banner was dismissed, `false` otherwise.
     * @return {?}
     */
    AnonymousConsentsService.prototype.isBannerDismissed = /**
     * Returns `true` if the banner was dismissed, `false` otherwise.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentsBannerDismissed));
    };
    /**
     * Returns `true` if the consent templates were updated on the back-end.
     * If the templates are not present in the store, it triggers the load.
     */
    /**
     * Returns `true` if the consent templates were updated on the back-end.
     * If the templates are not present in the store, it triggers the load.
     * @return {?}
     */
    AnonymousConsentsService.prototype.getTemplatesUpdated = /**
     * Returns `true` if the consent templates were updated on the back-end.
     * If the templates are not present in the store, it triggers the load.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getTemplates().pipe(tap((/**
         * @param {?} templates
         * @return {?}
         */
        function (templates) {
            if (!Boolean(templates)) {
                _this.loadTemplates();
            }
        })), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return _this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesUpdate));
        })));
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
     * Returns `true` if either the banner is not dismissed or if the templates were updated on the back-end.
     * Otherwise, it returns `false`.
     */
    /**
     * Returns `true` if either the banner is not dismissed or if the templates were updated on the back-end.
     * Otherwise, it returns `false`.
     * @return {?}
     */
    AnonymousConsentsService.prototype.isBannerVisible = /**
     * Returns `true` if either the banner is not dismissed or if the templates were updated on the back-end.
     * Otherwise, it returns `false`.
     * @return {?}
     */
    function () {
        return combineLatest([
            this.isBannerDismissed(),
            this.getTemplatesUpdated(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), dismissed = _b[0], updated = _b[1];
            return !dismissed || updated;
        })));
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
    /**
     * Serializes using `JSON.stringify()` and encodes using `encodeURIComponent()` methods
     * @param consents to serialize and encode
     */
    /**
     * Serializes using `JSON.stringify()` and encodes using `encodeURIComponent()` methods
     * @param {?} consents to serialize and encode
     * @return {?}
     */
    AnonymousConsentsService.prototype.serializeAndEncode = /**
     * Serializes using `JSON.stringify()` and encodes using `encodeURIComponent()` methods
     * @param {?} consents to serialize and encode
     * @return {?}
     */
    function (consents) {
        if (!consents) {
            return '';
        }
        /** @type {?} */
        var serialized = JSON.stringify(consents);
        /** @type {?} */
        var encoded = encodeURIComponent(serialized);
        return encoded;
    };
    /**
     * Decodes using `decodeURIComponent()` and deserializes using `JSON.parse()`
     * @param rawConsents to decode an deserialize
     */
    /**
     * Decodes using `decodeURIComponent()` and deserializes using `JSON.parse()`
     * @param {?} rawConsents to decode an deserialize
     * @return {?}
     */
    AnonymousConsentsService.prototype.decodeAndDeserialize = /**
     * Decodes using `decodeURIComponent()` and deserializes using `JSON.parse()`
     * @param {?} rawConsents to decode an deserialize
     * @return {?}
     */
    function (rawConsents) {
        /** @type {?} */
        var decoded = decodeURIComponent(rawConsents);
        /** @type {?} */
        var unserialized = (/** @type {?} */ (JSON.parse(decoded)));
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
    /**
     *
     * Compares the given `newConsents` and `previousConsents` and returns `true` if there are differences (the `newConsents` are updates).
     * Otherwise it returns `false`.
     *
     * @param {?} newConsents new consents to compare
     * @param {?} previousConsents old consents to compare
     * @return {?}
     */
    AnonymousConsentsService.prototype.consentsUpdated = /**
     *
     * Compares the given `newConsents` and `previousConsents` and returns `true` if there are differences (the `newConsents` are updates).
     * Otherwise it returns `false`.
     *
     * @param {?} newConsents new consents to compare
     * @param {?} previousConsents old consents to compare
     * @return {?}
     */
    function (newConsents, previousConsents) {
        /** @type {?} */
        var newRawConsents = this.serializeAndEncode(newConsents);
        /** @type {?} */
        var previousRawConsents = this.serializeAndEncode(previousConsents);
        return newRawConsents !== previousRawConsents;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBRUwsd0JBQXdCLEdBRXpCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUV0RTtJQUVFLGtDQUFzQixLQUF3QztRQUF4QyxVQUFLLEdBQUwsS0FBSyxDQUFtQztJQUFHLENBQUM7SUFFbEU7O09BRUc7Ozs7O0lBQ0gsZ0RBQWE7Ozs7SUFBYjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHdCQUF3QixDQUFDLDZCQUE2QixFQUFFLENBQzdELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsK0NBQVk7Ozs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUNyRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsOENBQVc7Ozs7O0lBQVgsVUFBWSxZQUFvQjtRQUM5QixPQUFPLElBQUks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O1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxxREFBa0I7Ozs7O0lBQWxCLFVBQW1CLFFBQTRCO1FBQzdDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNYOztZQUNLLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7WUFDckMsT0FBTyxHQUFHLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztRQUM5QyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCx1REFBb0I7Ozs7O0lBQXBCLFVBQXFCLFdBQW1COztZQUNoQyxPQUFPLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxDQUFDOztZQUN6QyxZQUFZLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBc0I7UUFDOUQsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7Ozs7Ozs7Ozs7SUFDSCxrREFBZTs7Ozs7Ozs7O0lBQWYsVUFDRSxXQUErQixFQUMvQixnQkFBb0M7O1lBRTlCLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDOztZQUNyRCxtQkFBbUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsT0FBTyxjQUFjLEtBQUssbUJBQW1CLENBQUM7SUFDaEQsQ0FBQzs7Z0JBaFNGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBWmpCLEtBQUs7OzttQ0FEdEI7Q0E4U0MsQUFqU0QsSUFpU0M7U0FoU1ksd0JBQXdCOzs7Ozs7SUFDdkIseUNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50LFxuICBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cyB9IGZyb20gJy4uL3N0b3JlL2Fub255bW91cy1jb25zZW50cy1zdGF0ZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cz4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgbG9hZFRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGVzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNWYWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcyB3aXRoIHRoZSBnaXZlbiB0ZW1wbGF0ZSBjb2RlLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGEgdGVtcGxhdGUgY29kZSBieSB3aGljaCB0byBmaWx0ZXIgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGUodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZSh0ZW1wbGF0ZUNvZGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIGxvYWRpbmcgc3RhdHVzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0TG9hZFRlbXBsYXRlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgc3VjY2VzcyBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRMb2FkVGVtcGxhdGVzU3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNTdWNjZXNzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBlcnJvciBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRMb2FkVGVtcGxhdGVzRXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzRXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGxvYWRpbmcsIHN1Y2Nlc3MgYW5kIGVycm9yIGluZGljYXRvcnMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICByZXNldExvYWRUZW1wbGF0ZXNTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5SZXNldExvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIHRoZSBhbm9ueW1vdXMgY29uc2VudHMuXG4gICAqL1xuICBnZXRDb25zZW50cygpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXRzIHRoZSBwcm92aWRlZCBhbm9ueW1vdXMgY29uc2VudHMgaW50byB0aGUgc3RvcmUuXG4gICAqL1xuICBzZXRDb25zZW50cyhjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlNldEFub255bW91c0NvbnNlbnRzKGNvbnNlbnRzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgd2l0aCB0aGUgZ2l2ZW4gdGVtcGxhdGUgY29kZS5cbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBhIHRlbXBsYXRlIGNvZGUgYnkgd2hpY2ggdG8gZmlsdGVyIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldENvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50QnlUZW1wbGF0ZUNvZGUoXG4gICAgICAgICAgdGVtcGxhdGVDb2RlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmUgYSBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYHRlbXBsYXRlQ29kZWBcbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBmb3Igd2hpY2ggdG8gZ2l2ZSB0aGUgY29uc2VudFxuICAgKi9cbiAgZ2l2ZUNvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5HaXZlQW5vbnltb3VzQ29uc2VudCh0ZW1wbGF0ZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzJyBzdGF0ZSB0byBnaXZlbi5cbiAgICovXG4gIGdpdmVBbGxDb25zZW50cygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKCkucGlwZShcbiAgICAgIHRhcCh0ZW1wbGF0ZXMgPT5cbiAgICAgICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4gdGhpcy5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCkpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgYGNvbnNlbnRgIGlzIGdpdmVuLlxuICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgKi9cbiAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLkdJVkVOO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpdGhkcmF3IGEgY29uc2VudCBmb3IgdGhlIGdpdmVuIGB0ZW1wbGF0ZUNvZGVgXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIHdpdGhkcmF3IHRoZSBjb25zZW50XG4gICAqL1xuICB3aXRoZHJhd0NvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5XaXRoZHJhd0Fub255bW91c0NvbnNlbnQodGVtcGxhdGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cycgc3RhdGUgdG8gd2l0aGRyYXduLlxuICAgKi9cbiAgd2l0aGRyYXdBbGxDb25zZW50cygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKCkucGlwZShcbiAgICAgIHRhcCh0ZW1wbGF0ZXMgPT5cbiAgICAgICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4gdGhpcy53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuaWQpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGBjb25zZW50YCBpcyB3aXRoZHJhd24uXG4gICAqIEBwYXJhbSBjb25zZW50IGEgY29uc2VudCB0byB0ZXN0XG4gICAqL1xuICBpc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLldJVEhEUkFXTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBkaXNtaXNzZWQgc3RhdGUgb2YgdGhlIGFub255bW91cyBjb25zZW50cyBiYW5uZXIuXG4gICAqIEBwYXJhbSBkaXNtaXNzZWQgdGhlIGJhbm5lciB3aWxsIGJlIGRpc21pc3NlZCBpZiBgdHJ1ZWAgaXMgcGFzc2VkLCBvdGhlcndpc2UgaXQgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgdG9nZ2xlQmFubmVyRGlzbWlzc2VkKGRpc21pc3NlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyRGlzc21pc3NlZChcbiAgICAgICAgZGlzbWlzc2VkXG4gICAgICApXG4gICAgKTtcbiAgICBpZiAoZGlzbWlzc2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZVRlbXBsYXRlc1VwZGF0ZWQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYmFubmVyIHdhcyBkaXNtaXNzZWQsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgKi9cbiAgaXNCYW5uZXJEaXNtaXNzZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50c0Jhbm5lckRpc21pc3NlZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IHRlbXBsYXRlcyB3ZXJlIHVwZGF0ZWQgb24gdGhlIGJhY2stZW5kLlxuICAgKiBJZiB0aGUgdGVtcGxhdGVzIGFyZSBub3QgcHJlc2VudCBpbiB0aGUgc3RvcmUsIGl0IHRyaWdnZXJzIHRoZSBsb2FkLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGVzVXBkYXRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRUZW1wbGF0ZXMoKS5waXBlKFxuICAgICAgdGFwKHRlbXBsYXRlcyA9PiB7XG4gICAgICAgIGlmICghQm9vbGVhbih0ZW1wbGF0ZXMpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkVGVtcGxhdGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKF8gPT5cbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBgdXBkYXRlZGAgc2xpY2Ugb2YgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSB1cGRhdGVkXG4gICAqL1xuICB0b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKHVwZGF0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZChcbiAgICAgICAgdXBkYXRlZFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgZWl0aGVyIHRoZSBiYW5uZXIgaXMgbm90IGRpc21pc3NlZCBvciBpZiB0aGUgdGVtcGxhdGVzIHdlcmUgdXBkYXRlZCBvbiB0aGUgYmFjay1lbmQuXG4gICAqIE90aGVyd2lzZSwgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgKi9cbiAgaXNCYW5uZXJWaXNpYmxlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuaXNCYW5uZXJEaXNtaXNzZWQoKSxcbiAgICAgIHRoaXMuZ2V0VGVtcGxhdGVzVXBkYXRlZCgpLFxuICAgIF0pLnBpcGUobWFwKChbZGlzbWlzc2VkLCB1cGRhdGVkXSkgPT4gIWRpc21pc3NlZCB8fCB1cGRhdGVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlcmUncyBhIG1pc3NtYXRjaCBpbiB0ZW1wbGF0ZSB2ZXJzaW9ucyBiZXR3ZWVuIHRoZSBwcm92aWRlZCBgY3VycmVudFRlbXBsYXRlc2AgYW5kIGBuZXdUZW1wbGF0ZXNgXG4gICAqIEBwYXJhbSBjdXJyZW50VGVtcGxhdGVzIGN1cnJlbnQgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAqIEBwYXJhbSBuZXdUZW1wbGF0ZXMgbmV3IHRlbXBsYXRlcyB0byBjaGVja1xuICAgKi9cbiAgZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhcbiAgICBjdXJyZW50VGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSxcbiAgICBuZXdUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChuZXdUZW1wbGF0ZXMubGVuZ3RoICE9PSBjdXJyZW50VGVtcGxhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdUZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1RlbXBsYXRlID0gbmV3VGVtcGxhdGVzW2ldO1xuICAgICAgY29uc3QgY3VycmVudFRlbXBsYXRlID0gY3VycmVudFRlbXBsYXRlc1tpXTtcbiAgICAgIGlmIChuZXdUZW1wbGF0ZS52ZXJzaW9uICE9PSBjdXJyZW50VGVtcGxhdGUudmVyc2lvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyB1c2luZyBgSlNPTi5zdHJpbmdpZnkoKWAgYW5kIGVuY29kZXMgdXNpbmcgYGVuY29kZVVSSUNvbXBvbmVudCgpYCBtZXRob2RzXG4gICAqIEBwYXJhbSBjb25zZW50cyB0byBzZXJpYWxpemUgYW5kIGVuY29kZVxuICAgKi9cbiAgc2VyaWFsaXplQW5kRW5jb2RlKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiBzdHJpbmcge1xuICAgIGlmICghY29uc2VudHMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGNvbnNlbnRzKTtcbiAgICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHNlcmlhbGl6ZWQpO1xuICAgIHJldHVybiBlbmNvZGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29kZXMgdXNpbmcgYGRlY29kZVVSSUNvbXBvbmVudCgpYCBhbmQgZGVzZXJpYWxpemVzIHVzaW5nIGBKU09OLnBhcnNlKClgXG4gICAqIEBwYXJhbSByYXdDb25zZW50cyB0byBkZWNvZGUgYW4gZGVzZXJpYWxpemVcbiAgICovXG4gIGRlY29kZUFuZERlc2VyaWFsaXplKHJhd0NvbnNlbnRzOiBzdHJpbmcpOiBBbm9ueW1vdXNDb25zZW50W10ge1xuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQocmF3Q29uc2VudHMpO1xuICAgIGNvbnN0IHVuc2VyaWFsaXplZCA9IEpTT04ucGFyc2UoZGVjb2RlZCkgYXMgQW5vbnltb3VzQ29uc2VudFtdO1xuICAgIHJldHVybiB1bnNlcmlhbGl6ZWQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQ29tcGFyZXMgdGhlIGdpdmVuIGBuZXdDb25zZW50c2AgYW5kIGBwcmV2aW91c0NvbnNlbnRzYCBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlcmUgYXJlIGRpZmZlcmVuY2VzICh0aGUgYG5ld0NvbnNlbnRzYCBhcmUgdXBkYXRlcykuXG4gICAqIE90aGVyd2lzZSBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAqXG4gICAqIEBwYXJhbSBuZXdDb25zZW50cyBuZXcgY29uc2VudHMgdG8gY29tcGFyZVxuICAgKiBAcGFyYW0gcHJldmlvdXNDb25zZW50cyBvbGQgY29uc2VudHMgdG8gY29tcGFyZVxuICAgKi9cbiAgY29uc2VudHNVcGRhdGVkKFxuICAgIG5ld0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10sXG4gICAgcHJldmlvdXNDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5ld1Jhd0NvbnNlbnRzID0gdGhpcy5zZXJpYWxpemVBbmRFbmNvZGUobmV3Q29uc2VudHMpO1xuICAgIGNvbnN0IHByZXZpb3VzUmF3Q29uc2VudHMgPSB0aGlzLnNlcmlhbGl6ZUFuZEVuY29kZShwcmV2aW91c0NvbnNlbnRzKTtcbiAgICByZXR1cm4gbmV3UmF3Q29uc2VudHMgIT09IHByZXZpb3VzUmF3Q29uc2VudHM7XG4gIH1cbn1cbiJdfQ==