/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
     * Returns the anonymous consent for the given template ID.
     *
     * As a side-effect, the method will call `getTemplates(true)` to load the templates if those are not present.
     *
     * @param templateId a template ID by which to filter anonymous consent templates.
     */
    /**
     * Returns the anonymous consent for the given template ID.
     *
     * As a side-effect, the method will call `getTemplates(true)` to load the templates if those are not present.
     *
     * @param {?} templateId a template ID by which to filter anonymous consent templates.
     * @return {?}
     */
    AnonymousConsentsService.prototype.getConsent = /**
     * Returns the anonymous consent for the given template ID.
     *
     * As a side-effect, the method will call `getTemplates(true)` to load the templates if those are not present.
     *
     * @param {?} templateId a template ID by which to filter anonymous consent templates.
     * @return {?}
     */
    function (templateId) {
        var _this = this;
        return this.authService.isUserLoggedIn().pipe(filter((/**
         * @param {?} authenticated
         * @return {?}
         */
        function (authenticated) { return !authenticated; })), tap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return _this.getTemplates(true); })), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return _this.store.pipe(select(AnonymousConsentsSelectors.getAnonymousConsentByTemplateCode(templateId)));
        })));
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
        { type: Store },
        { type: AuthService }
    ]; };
    /** @nocollapse */ AnonymousConsentsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentsService_Factory() { return new AnonymousConsentsService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: AnonymousConsentsService, providedIn: "root" });
    return AnonymousConsentsService;
}());
export { AnonymousConsentsService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUVMLHdCQUF3QixHQUV6QixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXRFO0lBRUUsa0NBQ1ksS0FBd0MsRUFDeEMsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUM7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNILGdEQUFhOzs7O0lBQWI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSx3QkFBd0IsQ0FBQyw2QkFBNkIsRUFBRSxDQUM3RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7OztJQUNILCtDQUFZOzs7Ozs7Ozs7O0lBQVosVUFBYSxhQUFxQjtRQUFsQyxpQkFtQkM7UUFuQlks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ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLFxuICBDb25zZW50VGVtcGxhdGUsXG59IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMgfSBmcm9tICcuLi9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHM+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGxvYWRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZGl0aW9uYWxseSB0cmlnZ2VycyB0aGUgbG9hZCBvZiB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIGlmOlxuICAgKiAgIC0gYGxvYWRJZk1pc3NpbmdgIHBhcmFtZXRlciBpcyBzZXQgdG8gYHRydWVgXG4gICAqICAgLSB0aGUgYHRlbXBsYXRlc2AgaW4gdGhlIHN0b3JlIGFyZSBgdW5kZWZpbmVkYFxuICAgKlxuICAgKiBPdGhld2lzZSBpdCBqdXN0IHJldHVybnMgdGhlIHZhbHVlIGZyb20gdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcGFyYW0gbG9hZElmTWlzc2luZyBzZXR0aW5nIHRvIGB0cnVlYCB3aWxsIHRyaWdnZXIgdGhlIGxvYWQgb2YgdGhlIHRlbXBsYXRlcyBpZiB0aGUgY3VycmVudGx5IHN0b3JlZCB0ZW1wbGF0ZXMgYXJlIGB1bmRlZmluZWRgXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMobG9hZElmTWlzc2luZyA9IGZhbHNlKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PiBsb2FkSWZNaXNzaW5nLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1ZhbHVlKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5nZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpKSxcbiAgICAgICAgZmlsdGVyKChbX3RlbXBsYXRlcywgbG9hZGluZ10pID0+ICFsb2FkaW5nKSxcbiAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IHtcbiAgICAgICAgICBpZiAoIUJvb2xlYW4odGVtcGxhdGVzKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGVtcGxhdGVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IEJvb2xlYW4odGVtcGxhdGVzKSksXG4gICAgICAgIG1hcCgoW3RlbXBsYXRlcywgX2xvYWRpbmddKSA9PiB0ZW1wbGF0ZXMpXG4gICAgICApLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1ZhbHVlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIHdpdGggdGhlIGdpdmVuIHRlbXBsYXRlIGNvZGUuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgYSB0ZW1wbGF0ZSBjb2RlIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRUZW1wbGF0ZSh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlKHRlbXBsYXRlQ29kZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgbG9hZGluZyBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNMb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBzdWNjZXNzIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQW5vbnltb3VzQ29uc2VudHNTZWxlY3RvcnMuZ2V0QW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIGVycm9yIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIGdldExvYWRUZW1wbGF0ZXNFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNFcnJvcilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgbG9hZGluZywgc3VjY2VzcyBhbmQgZXJyb3IgaW5kaWNhdG9ycyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICovXG4gIHJlc2V0TG9hZFRlbXBsYXRlc1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlJlc2V0TG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cy5cbiAgICovXG4gIGdldENvbnNlbnRzKCk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50cylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1dHMgdGhlIHByb3ZpZGVkIGFub255bW91cyBjb25zZW50cyBpbnRvIHRoZSBzdG9yZS5cbiAgICovXG4gIHNldENvbnNlbnRzKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuU2V0QW5vbnltb3VzQ29uc2VudHMoY29uc2VudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhbm9ueW1vdXMgY29uc2VudCBmb3IgdGhlIGdpdmVuIHRlbXBsYXRlIElELlxuICAgKlxuICAgKiBBcyBhIHNpZGUtZWZmZWN0LCB0aGUgbWV0aG9kIHdpbGwgY2FsbCBgZ2V0VGVtcGxhdGVzKHRydWUpYCB0byBsb2FkIHRoZSB0ZW1wbGF0ZXMgaWYgdGhvc2UgYXJlIG5vdCBwcmVzZW50LlxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBhIHRlbXBsYXRlIElEIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRDb25zZW50KHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudD4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkucGlwZShcbiAgICAgIGZpbHRlcihhdXRoZW50aWNhdGVkID0+ICFhdXRoZW50aWNhdGVkKSxcbiAgICAgIHRhcChfID0+IHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpKSxcbiAgICAgIHN3aXRjaE1hcChfID0+XG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICBBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50QnlUZW1wbGF0ZUNvZGUoXG4gICAgICAgICAgICAgIHRlbXBsYXRlSWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmUgYSBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYHRlbXBsYXRlQ29kZWBcbiAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBmb3Igd2hpY2ggdG8gZ2l2ZSB0aGUgY29uc2VudFxuICAgKi9cbiAgZ2l2ZUNvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5HaXZlQW5vbnltb3VzQ29uc2VudCh0ZW1wbGF0ZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzJyBzdGF0ZSB0byBnaXZlbi5cbiAgICovXG4gIGdpdmVBbGxDb25zZW50cygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGVzKHRydWUpLnBpcGUoXG4gICAgICB0YXAodGVtcGxhdGVzID0+XG4gICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKHRlbXBsYXRlID0+IHRoaXMuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGBjb25zZW50YCBpcyBnaXZlbi5cbiAgICogQHBhcmFtIGNvbnNlbnQgYSBjb25zZW50IHRvIHRlc3RcbiAgICovXG4gIGlzQ29uc2VudEdpdmVuKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY29uc2VudC5jb25zZW50U3RhdGUgPT09IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaXRoZHJhdyBhIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiBgdGVtcGxhdGVDb2RlYFxuICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGZvciB3aGljaCB0byB3aXRoZHJhdyB0aGUgY29uc2VudFxuICAgKi9cbiAgd2l0aGRyYXdDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuV2l0aGRyYXdBbm9ueW1vdXNDb25zZW50KHRlbXBsYXRlQ29kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYWxsIHRoZSBhbm9ueW1vdXMgY29uc2VudHMnIHN0YXRlIHRvIHdpdGhkcmF3bi5cbiAgICovXG4gIHdpdGhkcmF3QWxsQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlcyh0cnVlKS5waXBlKFxuICAgICAgdGFwKHRlbXBsYXRlcyA9PlxuICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB0aGlzLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5pZCkpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgYGNvbnNlbnRgIGlzIHdpdGhkcmF3bi5cbiAgICogQHBhcmFtIGNvbnNlbnQgYSBjb25zZW50IHRvIHRlc3RcbiAgICovXG4gIGlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNvbnNlbnQuY29uc2VudFN0YXRlID09PSBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMuV0lUSERSQVdOO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGRpc21pc3NlZCBzdGF0ZSBvZiB0aGUgYW5vbnltb3VzIGNvbnNlbnRzIGJhbm5lci5cbiAgICogQHBhcmFtIGRpc21pc3NlZCB0aGUgYmFubmVyIHdpbGwgYmUgZGlzbWlzc2VkIGlmIGB0cnVlYCBpcyBwYXNzZWQsIG90aGVyd2lzZSBpdCB3aWxsIGJlIHZpc2libGUuXG4gICAqL1xuICB0b2dnbGVCYW5uZXJEaXNtaXNzZWQoZGlzbWlzc2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuVG9nZ2xlQW5vbnltb3VzQ29uc2VudHNCYW5uZXJEaXNzbWlzc2VkKFxuICAgICAgICBkaXNtaXNzZWRcbiAgICAgIClcbiAgICApO1xuICAgIGlmIChkaXNtaXNzZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlVGVtcGxhdGVzVXBkYXRlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBiYW5uZXIgd2FzIGRpc21pc3NlZCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAqL1xuICBpc0Jhbm5lckRpc21pc3NlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFub255bW91c0NvbnNlbnRzU2VsZWN0b3JzLmdldEFub255bW91c0NvbnNlbnRzQmFubmVyRGlzbWlzc2VkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgdGVtcGxhdGVzIHdlcmUgdXBkYXRlZCBvbiB0aGUgYmFjay1lbmQuXG4gICAqIElmIHRoZSB0ZW1wbGF0ZXMgYXJlIG5vdCBwcmVzZW50IGluIHRoZSBzdG9yZSwgaXQgdHJpZ2dlcnMgdGhlIGxvYWQuXG4gICAqL1xuICBnZXRUZW1wbGF0ZXNVcGRhdGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlcyh0cnVlKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKF8gPT5cbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChBbm9ueW1vdXNDb25zZW50c1NlbGVjdG9ycy5nZXRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBgdXBkYXRlZGAgc2xpY2Ugb2YgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSB1cGRhdGVkXG4gICAqL1xuICB0b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKHVwZGF0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZChcbiAgICAgICAgdXBkYXRlZFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgZWl0aGVyIHRoZSBiYW5uZXIgaXMgbm90IGRpc21pc3NlZCBvciBpZiB0aGUgdGVtcGxhdGVzIHdlcmUgdXBkYXRlZCBvbiB0aGUgYmFjay1lbmQuXG4gICAqIE90aGVyd2lzZSwgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgKi9cbiAgaXNCYW5uZXJWaXNpYmxlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuaXNCYW5uZXJEaXNtaXNzZWQoKSxcbiAgICAgIHRoaXMuZ2V0VGVtcGxhdGVzVXBkYXRlZCgpLFxuICAgIF0pLnBpcGUobWFwKChbZGlzbWlzc2VkLCB1cGRhdGVkXSkgPT4gIWRpc21pc3NlZCB8fCB1cGRhdGVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlcmUncyBhIG1pc3NtYXRjaCBpbiB0ZW1wbGF0ZSB2ZXJzaW9ucyBiZXR3ZWVuIHRoZSBwcm92aWRlZCBgY3VycmVudFRlbXBsYXRlc2AgYW5kIGBuZXdUZW1wbGF0ZXNgXG4gICAqIEBwYXJhbSBjdXJyZW50VGVtcGxhdGVzIGN1cnJlbnQgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAqIEBwYXJhbSBuZXdUZW1wbGF0ZXMgbmV3IHRlbXBsYXRlcyB0byBjaGVja1xuICAgKi9cbiAgZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhcbiAgICBjdXJyZW50VGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSxcbiAgICBuZXdUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChuZXdUZW1wbGF0ZXMubGVuZ3RoICE9PSBjdXJyZW50VGVtcGxhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdUZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1RlbXBsYXRlID0gbmV3VGVtcGxhdGVzW2ldO1xuICAgICAgY29uc3QgY3VycmVudFRlbXBsYXRlID0gY3VycmVudFRlbXBsYXRlc1tpXTtcbiAgICAgIGlmIChuZXdUZW1wbGF0ZS52ZXJzaW9uICE9PSBjdXJyZW50VGVtcGxhdGUudmVyc2lvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyB1c2luZyBgSlNPTi5zdHJpbmdpZnkoKWAgYW5kIGVuY29kZXMgdXNpbmcgYGVuY29kZVVSSUNvbXBvbmVudCgpYCBtZXRob2RzXG4gICAqIEBwYXJhbSBjb25zZW50cyB0byBzZXJpYWxpemUgYW5kIGVuY29kZVxuICAgKi9cbiAgc2VyaWFsaXplQW5kRW5jb2RlKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiBzdHJpbmcge1xuICAgIGlmICghY29uc2VudHMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGNvbnNlbnRzKTtcbiAgICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHNlcmlhbGl6ZWQpO1xuICAgIHJldHVybiBlbmNvZGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29kZXMgdXNpbmcgYGRlY29kZVVSSUNvbXBvbmVudCgpYCBhbmQgZGVzZXJpYWxpemVzIHVzaW5nIGBKU09OLnBhcnNlKClgXG4gICAqIEBwYXJhbSByYXdDb25zZW50cyB0byBkZWNvZGUgYW4gZGVzZXJpYWxpemVcbiAgICovXG4gIGRlY29kZUFuZERlc2VyaWFsaXplKHJhd0NvbnNlbnRzOiBzdHJpbmcpOiBBbm9ueW1vdXNDb25zZW50W10ge1xuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQocmF3Q29uc2VudHMpO1xuICAgIGNvbnN0IHVuc2VyaWFsaXplZCA9IEpTT04ucGFyc2UoZGVjb2RlZCkgYXMgQW5vbnltb3VzQ29uc2VudFtdO1xuICAgIHJldHVybiB1bnNlcmlhbGl6ZWQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQ29tcGFyZXMgdGhlIGdpdmVuIGBuZXdDb25zZW50c2AgYW5kIGBwcmV2aW91c0NvbnNlbnRzYCBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlcmUgYXJlIGRpZmZlcmVuY2VzICh0aGUgYG5ld0NvbnNlbnRzYCBhcmUgdXBkYXRlcykuXG4gICAqIE90aGVyd2lzZSBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAqXG4gICAqIEBwYXJhbSBuZXdDb25zZW50cyBuZXcgY29uc2VudHMgdG8gY29tcGFyZVxuICAgKiBAcGFyYW0gcHJldmlvdXNDb25zZW50cyBvbGQgY29uc2VudHMgdG8gY29tcGFyZVxuICAgKi9cbiAgY29uc2VudHNVcGRhdGVkKFxuICAgIG5ld0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10sXG4gICAgcHJldmlvdXNDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5ld1Jhd0NvbnNlbnRzID0gdGhpcy5zZXJpYWxpemVBbmRFbmNvZGUobmV3Q29uc2VudHMpO1xuICAgIGNvbnN0IHByZXZpb3VzUmF3Q29uc2VudHMgPSB0aGlzLnNlcmlhbGl6ZUFuZEVuY29kZShwcmV2aW91c0NvbnNlbnRzKTtcbiAgICByZXR1cm4gbmV3UmF3Q29uc2VudHMgIT09IHByZXZpb3VzUmF3Q29uc2VudHM7XG4gIH1cbn1cbiJdfQ==