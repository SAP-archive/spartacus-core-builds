/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, iif } from 'rxjs';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
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
     * Conditionally triggers the load of the anonymous consent templates if:
     *   - `loadIfMissing` parameter is set to `true`
     *   - the `templates` in the store are `undefined`
     *
     * Othewise it just returns the value from the store.
     *
     * @param loadIfMissing setting to `true` will trigger the load of the templates if the currently stored templates are `undefined`
     */
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
    AnonymousConsentsService.prototype.getTemplates = /**
     * Conditionally triggers the load of the anonymous consent templates if:
     *   - `loadIfMissing` parameter is set to `true`
     *   - the `templates` in the store are `undefined`
     *
     * Othewise it just returns the value from the store.
     *
     * @param {?=} loadIfMissing setting to `true` will trigger the load of the templates if the currently stored templates are `undefined`
     * @return {?}
     */
    function (loadIfMissing) {
        var _this = this;
        if (loadIfMissing === void 0) { loadIfMissing = false; }
        return iif((/**
         * @return {?}
         */
        function () { return loadIfMissing; }), this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesValue), withLatestFrom(this.getLoadTemplatesLoading()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), _templates = _b[0], loading = _b[1];
            return !loading;
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), templates = _b[0], _loading = _b[1];
            if (!Boolean(templates)) {
                _this.loadTemplates();
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), templates = _b[0], _loading = _b[1];
            return Boolean(templates);
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), templates = _b[0], _loading = _b[1];
            return templates;
        }))), this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentTemplatesValue)));
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
        return this.getTemplates(true).pipe(tap((/**
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
        return this.getTemplates(true).pipe(tap((/**
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
        return this.getTemplates(true).pipe(switchMap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBRUwsd0JBQXdCLEdBRXpCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUV0RTtJQUVFLGtDQUFzQixLQUF3QztRQUF4QyxVQUFLLEdBQUwsS0FBSyxDQUFtQztJQUFHLENBQUM7SUFFbEU7O09BRUc7Ozs7O0lBQ0gsZ0RBQWE7Ozs7SUFBYjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHdCQUF3QixDQUFDLDZCQUE2QixFQUFFLENBQzdELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7O0lBQ0gsK0NBQVk7Ozs7Ozs7Ozs7SUFBWixVQUFhLGFBQXFCO1FBQWxDLGlCQW1CQztRQW5CWSw4QkFBQSxFQUFBLHFCQUFxQjtRQUNoQyxPQUFPLEdBQUc7OztRQUNSLGNBQU0sT0FBQSxhQUFhLEVBQWIsQ0FBYSxHQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixNQUFNLENBQUMsMEJBQTBCLENBQUMsaUNBQWlDLENBQUMsRUFDcEUsY0FBYyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEVBQzlDLE1BQU07Ozs7UUFBQyxVQUFDLEVBQXFCO2dCQUFyQiwwQkFBcUIsRUFBcEIsa0JBQVUsRUFBRSxlQUFPO1lBQU0sT0FBQSxDQUFDLE9BQU87UUFBUixDQUFRLEVBQUMsRUFDM0MsR0FBRzs7OztRQUFDLFVBQUMsRUFBcUI7Z0JBQXJCLDBCQUFxQixFQUFwQixpQkFBUyxFQUFFLGdCQUFRO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFBQyxVQUFDLEVBQXFCO2dCQUFyQiwwQkFBcUIsRUFBcEIsaUJBQVMsRUFBRSxnQkFBUTtZQUFNLE9BQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUFsQixDQUFrQixFQUFDLEVBQ3JELEdBQUc7Ozs7UUFBQyxVQUFDLEVBQXFCO2dCQUFyQiwwQkFBcUIsRUFBcEIsaUJBQVMsRUFBRSxnQkFBUTtZQUFNLE9BQUEsU0FBUztRQUFULENBQVMsRUFBQyxDQUMxQyxFQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUNyRSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCw4Q0FBVzs7Ozs7SUFBWCxVQUFZLFlBQW9CO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSiwwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLENBQUMsQ0FDckUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDBEQUF1Qjs7OztJQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDBEQUF1Qjs7OztJQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHdEQUFxQjs7OztJQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUNyRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDBEQUF1Qjs7OztJQUF2QjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHdCQUF3QixDQUFDLGtDQUFrQyxFQUFFLENBQ2xFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsOENBQVc7Ozs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCw4Q0FBVzs7Ozs7SUFBWCxVQUFZLFFBQTRCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ3hCLElBQUksd0JBQXdCLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQzVELENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCw2Q0FBVTs7Ozs7SUFBVixVQUFXLFlBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSiwwQkFBMEIsQ0FBQyxpQ0FBaUMsQ0FDMUQsWUFBWSxDQUNiLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsOENBQVc7Ozs7O0lBQVgsVUFBWSxZQUFvQjtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FDaEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxrREFBZTs7OztJQUFmO1FBQUEsaUJBTUM7UUFMQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNqQyxHQUFHOzs7O1FBQUMsVUFBQSxTQUFTO1lBQ1gsT0FBQSxTQUFTLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQTdCLENBQTZCLEVBQUM7UUFBNUQsQ0FBNEQsRUFDN0QsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsaURBQWM7Ozs7O0lBQWQsVUFBZSxPQUF5QjtRQUN0QyxPQUFPLE9BQU8sQ0FBQyxZQUFZLEtBQUssd0JBQXdCLENBQUMsS0FBSyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGtEQUFlOzs7OztJQUFmLFVBQWdCLFlBQW9CO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHNEQUFtQjs7OztJQUFuQjtRQUFBLGlCQU1DO1FBTEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDakMsR0FBRzs7OztRQUFDLFVBQUEsU0FBUztZQUNYLE9BQUEsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFqQyxDQUFpQyxFQUFDO1FBQWhFLENBQWdFLEVBQ2pFLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHFEQUFrQjs7Ozs7SUFBbEIsVUFBbUIsT0FBeUI7UUFDMUMsT0FBTyxPQUFPLENBQUMsWUFBWSxLQUFLLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCx3REFBcUI7Ozs7O0lBQXJCLFVBQXNCLFNBQWtCO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHdCQUF3QixDQUFDLHVDQUF1QyxDQUNsRSxTQUFTLENBQ1YsQ0FDRixDQUFDO1FBQ0YsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsb0RBQWlCOzs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLDBCQUEwQixDQUFDLG1DQUFtQyxDQUFDLENBQ3ZFLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxzREFBbUI7Ozs7O0lBQW5CO1FBQUEsaUJBUUM7UUFQQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNqQyxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ1QsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixNQUFNLENBQUMsMEJBQTBCLENBQUMsa0NBQWtDLENBQUMsQ0FDdEU7UUFGRCxDQUVDLEVBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gseURBQXNCOzs7OztJQUF0QixVQUF1QixPQUFnQjtRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSx3QkFBd0IsQ0FBQyxzQ0FBc0MsQ0FDakUsT0FBTyxDQUNSLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGtEQUFlOzs7OztJQUFmO1FBQ0UsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtTQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQW9CO2dCQUFwQiwwQkFBb0IsRUFBbkIsaUJBQVMsRUFBRSxlQUFPO1lBQU0sT0FBQSxDQUFDLFNBQVMsSUFBSSxPQUFPO1FBQXJCLENBQXFCLEVBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gseURBQXNCOzs7Ozs7SUFBdEIsVUFDRSxnQkFBbUMsRUFDbkMsWUFBK0I7UUFFL0IsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUNuRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUN0QyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQzs7Z0JBQzdCLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxXQUFXLENBQUMsT0FBTyxLQUFLLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ25ELE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gscURBQWtCOzs7OztJQUFsQixVQUFtQixRQUE0QjtRQUM3QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDWDs7WUFDSyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7O1lBQ3JDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7UUFDOUMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsdURBQW9COzs7OztJQUFwQixVQUFxQixXQUFtQjs7WUFDaEMsT0FBTyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7WUFDekMsWUFBWSxHQUFHLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQXNCO1FBQzlELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7O0lBQ0gsa0RBQWU7Ozs7Ozs7OztJQUFmLFVBQ0UsV0FBK0IsRUFDL0IsZ0JBQW9DOztZQUU5QixjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7WUFDckQsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLE9BQU8sY0FBYyxLQUFLLG1CQUFtQixDQUFDO0lBQ2hELENBQUM7O2dCQWhURixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQVpqQixLQUFLOzs7bUNBRHRCO0NBOFRDLEFBalRELElBaVRDO1NBaFRZLHdCQUF3Qjs7Ozs7O0lBQ3ZCLHlDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50LFxuICBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cyB9IGZyb20gJy4uL3N0b3JlL2Fub255bW91cy1jb25zZW50cy1zdGF0ZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cz4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgbG9hZFRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25kaXRpb25hbGx5IHRyaWdnZXJzIHRoZSBsb2FkIG9mIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMgaWY6XG4gICAqICAgLSBgbG9hZElmTWlzc2luZ2AgcGFyYW1ldGVyIGlzIHNldCB0byBgdHJ1ZWBcbiAgICogICAtIHRoZSBgdGVtcGxhdGVzYCBpbiB0aGUgc3RvcmUgYXJlIGB1bmRlZmluZWRgXG4gICAqXG4gICAqIE90aGV3aXNlIGl0IGp1c3QgcmV0dXJucyB0aGUgdmFsdWUgZnJvbSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEBwYXJhbSBsb2FkSWZNaXNzaW5nIHNldHRpbmcgdG8gYHRydWVgIHdpbGwgdHJpZ2dlciB0aGUgbG9hZCBvZiB0aGUgdGVtcGxhdGVzIGlmIHRoZSBjdXJyZW50bHkgc3RvcmVkIHRlbXBsYXRlcyBhcmUgYHVuZGVmaW5lZGBcbiAgICovXG4gIGdldFRlbXBsYXRlcyhsb2FkSWZNaXNzaW5nID0gZmFsc2UpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIGlpZihcbiAgICAgICgpID0+IGxvYWRJZk1pc3NpbmcsXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVmFsdWUpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmdldExvYWRUZW1wbGF0ZXNMb2FkaW5nKCkpLFxuICAgICAgICBmaWx0ZXIoKFtfdGVtcGxhdGVzLCBsb2FkaW5nXSkgPT4gIWxvYWRpbmcpLFxuICAgICAgICB0YXAoKFt0ZW1wbGF0ZXMsIF9sb2FkaW5nXSkgPT4ge1xuICAgICAgICAgIGlmICghQm9vbGVhbih0ZW1wbGF0ZXMpKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRUZW1wbGF0ZXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKFt0ZW1wbGF0ZXMsIF9sb2FkaW5nXSkgPT4gQm9vbGVhbih0ZW1wbGF0ZXMpKSxcbiAgICAgICAgbWFwKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IHRlbXBsYXRlcylcbiAgICAgICksXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVmFsdWUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMgd2l0aCB0aGUgZ2l2ZW4gdGVtcGxhdGUgY29kZS5cbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBhIHRlbXBsYXRlIGNvZGUgYnkgd2hpY2ggdG8gZmlsdGVyIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldFRlbXBsYXRlKHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGUodGVtcGxhdGVDb2RlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBsb2FkaW5nIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0xvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIHN1Y2Nlc3Mgc3RhdHVzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0TG9hZFRlbXBsYXRlc1N1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzU3VjY2VzcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgZXJyb3Igc3RhdHVzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0TG9hZFRlbXBsYXRlc0Vycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Vycm9yKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBsb2FkaW5nLCBzdWNjZXNzIGFuZCBlcnJvciBpbmRpY2F0b3JzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKi9cbiAgcmVzZXRMb2FkVGVtcGxhdGVzU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuUmVzZXRMb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzLlxuICAgKi9cbiAgZ2V0Q29uc2VudHMoKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUHV0cyB0aGUgcHJvdmlkZWQgYW5vbnltb3VzIGNvbnNlbnRzIGludG8gdGhlIHN0b3JlLlxuICAgKi9cbiAgc2V0Q29uc2VudHMoY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5TZXRBbm9ueW1vdXNDb25zZW50cyhjb25zZW50cylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFub255bW91cyBjb25zZW50IHdpdGggdGhlIGdpdmVuIHRlbXBsYXRlIGNvZGUuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgYSB0ZW1wbGF0ZSBjb2RlIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudEJ5VGVtcGxhdGVDb2RlKFxuICAgICAgICAgIHRlbXBsYXRlQ29kZVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlIGEgY29uc2VudCBmb3IgdGhlIGdpdmVuIGB0ZW1wbGF0ZUNvZGVgXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIGdpdmUgdGhlIGNvbnNlbnRcbiAgICovXG4gIGdpdmVDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuR2l2ZUFub255bW91c0NvbnNlbnQodGVtcGxhdGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cycgc3RhdGUgdG8gZ2l2ZW4uXG4gICAqL1xuICBnaXZlQWxsQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlcyh0cnVlKS5waXBlKFxuICAgICAgdGFwKHRlbXBsYXRlcyA9PlxuICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB0aGlzLmdpdmVDb25zZW50KHRlbXBsYXRlLmlkKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBgY29uc2VudGAgaXMgZ2l2ZW4uXG4gICAqIEBwYXJhbSBjb25zZW50IGEgY29uc2VudCB0byB0ZXN0XG4gICAqL1xuICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNvbnNlbnQuY29uc2VudFN0YXRlID09PSBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMuR0lWRU47XG4gIH1cblxuICAvKipcbiAgICogV2l0aGRyYXcgYSBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYHRlbXBsYXRlQ29kZWBcbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBmb3Igd2hpY2ggdG8gd2l0aGRyYXcgdGhlIGNvbnNlbnRcbiAgICovXG4gIHdpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLldpdGhkcmF3QW5vbnltb3VzQ29uc2VudCh0ZW1wbGF0ZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzJyBzdGF0ZSB0byB3aXRoZHJhd24uXG4gICAqL1xuICB3aXRoZHJhd0FsbENvbnNlbnRzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRUZW1wbGF0ZXModHJ1ZSkucGlwZShcbiAgICAgIHRhcCh0ZW1wbGF0ZXMgPT5cbiAgICAgICAgdGVtcGxhdGVzLmZvckVhY2godGVtcGxhdGUgPT4gdGhpcy53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuaWQpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGBjb25zZW50YCBpcyB3aXRoZHJhd24uXG4gICAqIEBwYXJhbSBjb25zZW50IGEgY29uc2VudCB0byB0ZXN0XG4gICAqL1xuICBpc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLldJVEhEUkFXTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBkaXNtaXNzZWQgc3RhdGUgb2YgdGhlIGFub255bW91cyBjb25zZW50cyBiYW5uZXIuXG4gICAqIEBwYXJhbSBkaXNtaXNzZWQgdGhlIGJhbm5lciB3aWxsIGJlIGRpc21pc3NlZCBpZiBgdHJ1ZWAgaXMgcGFzc2VkLCBvdGhlcndpc2UgaXQgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgdG9nZ2xlQmFubmVyRGlzbWlzc2VkKGRpc21pc3NlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyRGlzc21pc3NlZChcbiAgICAgICAgZGlzbWlzc2VkXG4gICAgICApXG4gICAgKTtcbiAgICBpZiAoZGlzbWlzc2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZVRlbXBsYXRlc1VwZGF0ZWQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYmFubmVyIHdhcyBkaXNtaXNzZWQsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgKi9cbiAgaXNCYW5uZXJEaXNtaXNzZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50c0Jhbm5lckRpc21pc3NlZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IHRlbXBsYXRlcyB3ZXJlIHVwZGF0ZWQgb24gdGhlIGJhY2stZW5kLlxuICAgKiBJZiB0aGUgdGVtcGxhdGVzIGFyZSBub3QgcHJlc2VudCBpbiB0aGUgc3RvcmUsIGl0IHRyaWdnZXJzIHRoZSBsb2FkLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGVzVXBkYXRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRUZW1wbGF0ZXModHJ1ZSkucGlwZShcbiAgICAgIHN3aXRjaE1hcChfID0+XG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1VwZGF0ZSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYHVwZGF0ZWRgIHNsaWNlIG9mIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgKi9cbiAgdG9nZ2xlVGVtcGxhdGVzVXBkYXRlZCh1cGRhdGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuVG9nZ2xlQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1VwZGF0ZWQoXG4gICAgICAgIHVwZGF0ZWRcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIGVpdGhlciB0aGUgYmFubmVyIGlzIG5vdCBkaXNtaXNzZWQgb3IgaWYgdGhlIHRlbXBsYXRlcyB3ZXJlIHVwZGF0ZWQgb24gdGhlIGJhY2stZW5kLlxuICAgKiBPdGhlcndpc2UsIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICovXG4gIGlzQmFubmVyVmlzaWJsZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmlzQmFubmVyRGlzbWlzc2VkKCksXG4gICAgICB0aGlzLmdldFRlbXBsYXRlc1VwZGF0ZWQoKSxcbiAgICBdKS5waXBlKG1hcCgoW2Rpc21pc3NlZCwgdXBkYXRlZF0pID0+ICFkaXNtaXNzZWQgfHwgdXBkYXRlZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZXJlJ3MgYSBtaXNzbWF0Y2ggaW4gdGVtcGxhdGUgdmVyc2lvbnMgYmV0d2VlbiB0aGUgcHJvdmlkZWQgYGN1cnJlbnRUZW1wbGF0ZXNgIGFuZCBgbmV3VGVtcGxhdGVzYFxuICAgKiBAcGFyYW0gY3VycmVudFRlbXBsYXRlcyBjdXJyZW50IHRlbXBsYXRlcyB0byBjaGVja1xuICAgKiBAcGFyYW0gbmV3VGVtcGxhdGVzIG5ldyB0ZW1wbGF0ZXMgdG8gY2hlY2tcbiAgICovXG4gIGRldGVjdFVwZGF0ZWRUZW1wbGF0ZXMoXG4gICAgY3VycmVudFRlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW10sXG4gICAgbmV3VGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXVxuICApOiBib29sZWFuIHtcbiAgICBpZiAobmV3VGVtcGxhdGVzLmxlbmd0aCAhPT0gY3VycmVudFRlbXBsYXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3VGVtcGxhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdUZW1wbGF0ZSA9IG5ld1RlbXBsYXRlc1tpXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUZW1wbGF0ZSA9IGN1cnJlbnRUZW1wbGF0ZXNbaV07XG4gICAgICBpZiAobmV3VGVtcGxhdGUudmVyc2lvbiAhPT0gY3VycmVudFRlbXBsYXRlLnZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgdXNpbmcgYEpTT04uc3RyaW5naWZ5KClgIGFuZCBlbmNvZGVzIHVzaW5nIGBlbmNvZGVVUklDb21wb25lbnQoKWAgbWV0aG9kc1xuICAgKiBAcGFyYW0gY29uc2VudHMgdG8gc2VyaWFsaXplIGFuZCBlbmNvZGVcbiAgICovXG4gIHNlcmlhbGl6ZUFuZEVuY29kZShjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdKTogc3RyaW5nIHtcbiAgICBpZiAoIWNvbnNlbnRzKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShjb25zZW50cyk7XG4gICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudChzZXJpYWxpemVkKTtcbiAgICByZXR1cm4gZW5jb2RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvZGVzIHVzaW5nIGBkZWNvZGVVUklDb21wb25lbnQoKWAgYW5kIGRlc2VyaWFsaXplcyB1c2luZyBgSlNPTi5wYXJzZSgpYFxuICAgKiBAcGFyYW0gcmF3Q29uc2VudHMgdG8gZGVjb2RlIGFuIGRlc2VyaWFsaXplXG4gICAqL1xuICBkZWNvZGVBbmREZXNlcmlhbGl6ZShyYXdDb25zZW50czogc3RyaW5nKTogQW5vbnltb3VzQ29uc2VudFtdIHtcbiAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KHJhd0NvbnNlbnRzKTtcbiAgICBjb25zdCB1bnNlcmlhbGl6ZWQgPSBKU09OLnBhcnNlKGRlY29kZWQpIGFzIEFub255bW91c0NvbnNlbnRbXTtcbiAgICByZXR1cm4gdW5zZXJpYWxpemVkO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIENvbXBhcmVzIHRoZSBnaXZlbiBgbmV3Q29uc2VudHNgIGFuZCBgcHJldmlvdXNDb25zZW50c2AgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZXJlIGFyZSBkaWZmZXJlbmNlcyAodGhlIGBuZXdDb25zZW50c2AgYXJlIHVwZGF0ZXMpLlxuICAgKiBPdGhlcndpc2UgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgKlxuICAgKiBAcGFyYW0gbmV3Q29uc2VudHMgbmV3IGNvbnNlbnRzIHRvIGNvbXBhcmVcbiAgICogQHBhcmFtIHByZXZpb3VzQ29uc2VudHMgb2xkIGNvbnNlbnRzIHRvIGNvbXBhcmVcbiAgICovXG4gIGNvbnNlbnRzVXBkYXRlZChcbiAgICBuZXdDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdLFxuICAgIHByZXZpb3VzQ29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXVxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBuZXdSYXdDb25zZW50cyA9IHRoaXMuc2VyaWFsaXplQW5kRW5jb2RlKG5ld0NvbnNlbnRzKTtcbiAgICBjb25zdCBwcmV2aW91c1Jhd0NvbnNlbnRzID0gdGhpcy5zZXJpYWxpemVBbmRFbmNvZGUocHJldmlvdXNDb25zZW50cyk7XG4gICAgcmV0dXJuIG5ld1Jhd0NvbnNlbnRzICE9PSBwcmV2aW91c1Jhd0NvbnNlbnRzO1xuICB9XG59XG4iXX0=