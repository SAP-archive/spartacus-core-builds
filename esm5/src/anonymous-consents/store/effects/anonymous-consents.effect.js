/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, fromEvent, iif, Observable, of } from 'rxjs';
import { catchError, concatMap, debounceTime, distinctUntilChanged, filter, map, mergeMap, switchMap, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthActions, AuthService } from '../../../auth/index';
import { ANONYMOUS_CONSENTS_FEATURE, isFeatureEnabled, } from '../../../features-config/index';
import { SiteContextActions } from '../../../site-context/index';
import { DEFAULT_LOCAL_STORAGE_KEY } from '../../../state/index';
import { UserConsentService } from '../../../user/facade/user-consent.service';
import { UserActions } from '../../../user/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { WindowRef } from '../../../window/index';
import { AnonymousConsentsConfig } from '../../config/anonymous-consents-config';
import { AnonymousConsentTemplatesConnector } from '../../connectors/anonymous-consent-templates.connector';
import { AnonymousConsentsService } from '../../facade/index';
import { AnonymousConsentsActions } from '../actions/index';
import { ANONYMOUS_CONSENTS_STORE_FEATURE, } from '../anonymous-consents-state';
var AnonymousConsentsEffects = /** @class */ (function () {
    function AnonymousConsentsEffects(actions$, anonymousConsentTemplatesConnector, authService, anonymousConsentsConfig, anonymousConsentService, userConsentService, winRef) {
        var _this = this;
        this.actions$ = actions$;
        this.anonymousConsentTemplatesConnector = anonymousConsentTemplatesConnector;
        this.authService = authService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.anonymousConsentService = anonymousConsentService;
        this.userConsentService = userConsentService;
        this.winRef = winRef;
        this.handleLogoutAndLanguageChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT), filter((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE);
        })), withLatestFrom(this.authService.isUserLoggedIn()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), _ = _b[0], isUserLoggedIn = _b[1];
            return !isUserLoggedIn;
        })), map((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return new AnonymousConsentsActions.LoadAnonymousConsentTemplates(); })));
        this.loadAnonymousConsentTemplates$ = this.actions$.pipe(ofType(AnonymousConsentsActions.LOAD_ANONYMOUS_CONSENT_TEMPLATES), filter((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE);
        })), concatMap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return _this.anonymousConsentTemplatesConnector
                .loadAnonymousConsentTemplates()
                .pipe(withLatestFrom(_this.anonymousConsentService.getTemplates()), mergeMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), newConsentTemplates = _b[0], currentConsentTemplates = _b[1];
                /** @type {?} */
                var updated = false;
                if (Boolean(currentConsentTemplates) &&
                    currentConsentTemplates.length !== 0) {
                    updated = _this.anonymousConsentService.detectUpdatedTemplates(currentConsentTemplates, newConsentTemplates);
                }
                return [
                    new AnonymousConsentsActions.LoadAnonymousConsentTemplatesSuccess(newConsentTemplates),
                    new AnonymousConsentsActions.ToggleAnonymousConsentTemplatesUpdated(updated),
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new AnonymousConsentsActions.LoadAnonymousConsentTemplatesFail(makeErrorSerializable(error)));
            })));
        })));
        this.transferAnonymousConsentsToUser$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), filter((/**
         * @return {?}
         */
        function () {
            return isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) && Boolean(_this.anonymousConsentsConfig.anonymousConsents);
        })), withLatestFrom(this.actions$.pipe(ofType(UserActions.REGISTER_USER_SUCCESS))), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), registerAction = _b[1];
            return Boolean(registerAction);
        })), switchMap((/**
         * @return {?}
         */
        function () {
            return _this.anonymousConsentService.getConsents().pipe(withLatestFrom(_this.authService.getOccUserId(), _this.anonymousConsentService.getTemplates(), _this.authService.isUserLoggedIn()), filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 4), loggedIn = _b[3];
                return loggedIn;
            })), concatMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var e_1, _b, e_2, _c;
                var _d = tslib_1.__read(_a, 4), consents = _d[0], userId = _d[1], templates = _d[2], _loggedIn = _d[3];
                /** @type {?} */
                var actions = [];
                try {
                    for (var consents_1 = tslib_1.__values(consents), consents_1_1 = consents_1.next(); !consents_1_1.done; consents_1_1 = consents_1.next()) {
                        var consent = consents_1_1.value;
                        if (_this.anonymousConsentService.isConsentGiven(consent) &&
                            (!_this.anonymousConsentsConfig.anonymousConsents
                                .requiredConsents ||
                                !_this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(consent.templateCode))) {
                            try {
                                for (var templates_1 = (e_2 = void 0, tslib_1.__values(templates)), templates_1_1 = templates_1.next(); !templates_1_1.done; templates_1_1 = templates_1.next()) {
                                    var template = templates_1_1.value;
                                    if (template.id === consent.templateCode) {
                                        actions.push(new UserActions.TransferAnonymousConsent({
                                            userId: userId,
                                            consentTemplateId: template.id,
                                            consentTemplateVersion: template.version,
                                        }));
                                        break;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (templates_1_1 && !templates_1_1.done && (_c = templates_1.return)) _c.call(templates_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (consents_1_1 && !consents_1_1.done && (_b = consents_1.return)) _b.call(consents_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (actions.length > 0) {
                    return actions;
                }
                return EMPTY;
            })));
        })));
        this.giveRequiredConsentsToUser$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), filter((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) &&
                Boolean(_this.anonymousConsentsConfig.anonymousConsents) &&
                Boolean(_this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
                Boolean(action);
        })), concatMap((/**
         * @return {?}
         */
        function () {
            return _this.userConsentService.getConsentsResultSuccess().pipe(withLatestFrom(_this.authService.getOccUserId(), _this.userConsentService.getConsents(), _this.authService.isUserLoggedIn()), filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 4), loggedIn = _b[3];
                return loggedIn;
            })), tap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 4), loaded = _b[0], _userId = _b[1], _templates = _b[2], _loggedIn = _b[3];
                if (!loaded) {
                    _this.userConsentService.loadConsents();
                }
            })), map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 4), _loaded = _b[0], userId = _b[1], templates = _b[2], _loggedIn = _b[3];
                return { userId: userId, templates: templates };
            })), concatMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var e_3, _b;
                var userId = _a.userId, templates = _a.templates;
                /** @type {?} */
                var actions = [];
                try {
                    for (var templates_2 = tslib_1.__values(templates), templates_2_1 = templates_2.next(); !templates_2_1.done; templates_2_1 = templates_2.next()) {
                        var template = templates_2_1.value;
                        if ((!template.currentConsent ||
                            !template.currentConsent.consentGivenDate ||
                            template.currentConsent.consentWithdrawnDate) &&
                            _this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id)) {
                            actions.push(new UserActions.GiveUserConsent({
                                userId: userId,
                                consentTemplateId: template.id,
                                consentTemplateVersion: template.version,
                            }));
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (templates_2_1 && !templates_2_1.done && (_b = templates_2.return)) _b.call(templates_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                if (actions.length > 0) {
                    return actions;
                }
                return EMPTY;
            })));
        })));
        this.synchronizeBannerAcrossTabs$ = iif((/**
         * @return {?}
         */
        function () { return _this.checkFeatureAndSsrEnabled(); }), fromEvent(this.winRef.nativeWindow, 'storage').pipe(filter((/**
         * @param {?} storageEvent
         * @return {?}
         */
        function (storageEvent) { return _this.checkStorageEvent(storageEvent); })), distinctUntilChanged(), 
        // Clicking on "Allow All" on the banner hides the banner, causing an infinite loop of firing events.
        debounceTime(100), map((/**
         * @param {?} storageEvent
         * @return {?}
         */
        function (storageEvent) {
            /** @type {?} */
            var newState = JSON.parse(storageEvent.newValue);
            /** @type {?} */
            var newUiFlag = ((/** @type {?} */ (newState[ANONYMOUS_CONSENTS_STORE_FEATURE]))).ui.bannerVisible;
            return newUiFlag;
        })), distinctUntilChanged(), map((/**
         * @param {?} newUiFlag
         * @return {?}
         */
        function (newUiFlag) {
            return new AnonymousConsentsActions.ToggleAnonymousConsentsBannerVisibility(newUiFlag);
        }))), EMPTY);
        this.synchronizeConsentStateAcrossTabs$ = iif((/**
         * @return {?}
         */
        function () { return _this.checkFeatureAndSsrEnabled(); }), fromEvent(this.winRef.nativeWindow, 'storage').pipe(filter((/**
         * @param {?} storageEvent
         * @return {?}
         */
        function (storageEvent) { return _this.checkStorageEvent(storageEvent); })), distinctUntilChanged(), 
        // Clicking on "Allow All" on the banner hides the banner, causing an infinite loop of firing events.
        debounceTime(100), mergeMap((/**
         * @param {?} storageEvent
         * @return {?}
         */
        function (storageEvent) {
            /** @type {?} */
            var newState = JSON.parse(storageEvent.newValue);
            /** @type {?} */
            var newConsets = ((/** @type {?} */ (newState[ANONYMOUS_CONSENTS_STORE_FEATURE]))).consents;
            /** @type {?} */
            var oldState = JSON.parse(storageEvent.oldValue);
            /** @type {?} */
            var oldConsents = ((/** @type {?} */ (oldState[ANONYMOUS_CONSENTS_STORE_FEATURE]))).consents;
            if (_this.anonymousConsentService.consentsUpdated(newConsets, oldConsents)) {
                return _this.createStateUpdateActions(newConsets);
            }
            return EMPTY;
        }))), EMPTY);
    }
    /**
     * @private
     * @return {?}
     */
    AnonymousConsentsEffects.prototype.checkFeatureAndSsrEnabled = /**
     * @private
     * @return {?}
     */
    function () {
        return (isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) && Boolean(this.winRef.nativeWindow));
    };
    /**
     * @private
     * @param {?} storageEvent
     * @return {?}
     */
    AnonymousConsentsEffects.prototype.checkStorageEvent = /**
     * @private
     * @param {?} storageEvent
     * @return {?}
     */
    function (storageEvent) {
        return (Boolean(storageEvent) &&
            storageEvent.key === DEFAULT_LOCAL_STORAGE_KEY &&
            storageEvent.newValue !== null &&
            storageEvent.oldValue !== null);
    };
    /**
     * @private
     * @param {?} newConsets
     * @return {?}
     */
    AnonymousConsentsEffects.prototype.createStateUpdateActions = /**
     * @private
     * @param {?} newConsets
     * @return {?}
     */
    function (newConsets) {
        var e_4, _a;
        /** @type {?} */
        var consentStateActions = [];
        try {
            for (var newConsets_1 = tslib_1.__values(newConsets), newConsets_1_1 = newConsets_1.next(); !newConsets_1_1.done; newConsets_1_1 = newConsets_1.next()) {
                var consent = newConsets_1_1.value;
                if (this.anonymousConsentService.isConsentGiven(consent)) {
                    consentStateActions.push(new AnonymousConsentsActions.GiveAnonymousConsent(consent.templateCode));
                }
                else if (this.anonymousConsentService.isConsentWithdrawn(consent)) {
                    consentStateActions.push(new AnonymousConsentsActions.WithdrawAnonymousConsent(consent.templateCode));
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (newConsets_1_1 && !newConsets_1_1.done && (_a = newConsets_1.return)) _a.call(newConsets_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return consentStateActions;
    };
    AnonymousConsentsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AnonymousConsentsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: AnonymousConsentTemplatesConnector },
        { type: AuthService },
        { type: AnonymousConsentsConfig },
        { type: AnonymousConsentsService },
        { type: UserConsentService },
        { type: WindowRef }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AnonymousConsentsEffects.prototype, "handleLogoutAndLanguageChange$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AnonymousConsentsEffects.prototype, "loadAnonymousConsentTemplates$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AnonymousConsentsEffects.prototype, "transferAnonymousConsentsToUser$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AnonymousConsentsEffects.prototype, "giveRequiredConsentsToUser$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AnonymousConsentsEffects.prototype, "synchronizeBannerAcrossTabs$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AnonymousConsentsEffects.prototype, "synchronizeConsentStateAcrossTabs$", void 0);
    return AnonymousConsentsEffects;
}());
export { AnonymousConsentsEffects };
if (false) {
    /** @type {?} */
    AnonymousConsentsEffects.prototype.handleLogoutAndLanguageChange$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.loadAnonymousConsentTemplates$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.transferAnonymousConsentsToUser$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.giveRequiredConsentsToUser$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.synchronizeBannerAcrossTabs$;
    /** @type {?} */
    AnonymousConsentsEffects.prototype.synchronizeConsentStateAcrossTabs$;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.anonymousConsentTemplatesConnector;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.anonymousConsentsConfig;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.anonymousConsentService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.userConsentService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsEffects.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0QsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0QsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixnQkFBZ0IsR0FDakIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9B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Q0FDbkQsT0FBTyxDQUFDLFlBQVksQ0FDckIsQ0FDRixDQUFDO2lCQUNIO2FBQ0Y7Ozs7Ozs7OztRQUVELE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQzs7Z0JBeFNGLFVBQVU7Ozs7Z0JBbkNGLE9BQU87Z0JBMkJQLGtDQUFrQztnQkFickIsV0FBVztnQkFZeEIsdUJBQXVCO2dCQUV2Qix3QkFBd0I7Z0JBTnhCLGtCQUFrQjtnQkFHbEIsU0FBUzs7SUFhaEI7UUFEQyxNQUFNLEVBQUU7MENBQ3VCLFVBQVU7b0ZBVXhDO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ3VCLFVBQVU7b0ZBMEN4QztJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUN5QixVQUFVO3NGQTZEMUM7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDb0IsVUFBVTtpRkE2RHJDO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ3FCLFVBQVU7a0ZBMEJ0QztJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUMyQixVQUFVO3dGQWlDNUM7SUF3REosK0JBQUM7Q0FBQSxBQW5URCxJQW1UQztTQWxUWSx3QkFBd0I7OztJQUNuQyxrRUFXRTs7SUFFRixrRUEyQ0U7O0lBRUYsb0VBOERFOztJQUVGLCtEQThERTs7SUFFRixnRUEyQkU7O0lBRUYsc0VBa0NFOzs7OztJQWdEQSw0Q0FBeUI7Ozs7O0lBQ3pCLHNFQUE4RTs7Ozs7SUFDOUUsK0NBQWdDOzs7OztJQUNoQywyREFBd0Q7Ozs7O0lBQ3hELDJEQUF5RDs7Ozs7SUFDekQsc0RBQThDOzs7OztJQUM5QywwQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgRU1QVFksIGZyb21FdmVudCwgaWlmLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMsIEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvaW5kZXgnO1xuaW1wb3J0IHsgREVGQVVMVF9MT0NBTF9TVE9SQUdFX0tFWSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IFVzZXJDb25zZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvZmFjYWRlL3VzZXItY29uc2VudC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi8uLi93aW5kb3cvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYW5vbnltb3VzLWNvbnNlbnRzLWNvbmZpZyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuY29ubmVjdG9yJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnRzU3RhdGUsXG4gIEFOT05ZTU9VU19DT05TRU5UU19TVE9SRV9GRUFUVVJFLFxufSBmcm9tICcuLi9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGhhbmRsZUxvZ291dEFuZExhbmd1YWdlQ2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSwgQXV0aEFjdGlvbnMuTE9HT1VUKSxcbiAgICBmaWx0ZXIoXyA9PlxuICAgICAgaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLCBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSlcbiAgICApLFxuICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSksXG4gICAgZmlsdGVyKChbXywgaXNVc2VyTG9nZ2VkSW5dKSA9PiAhaXNVc2VyTG9nZ2VkSW4pLFxuICAgIG1hcChfID0+IG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMkOiBPYnNlcnZhYmxlPFxuICAgIEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Bbm9ueW1vdXNDb25zZW50c0FjdGlvbnNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxPQURfQU5PTllNT1VTX0NPTlNFTlRfVEVNUExBVEVTKSxcbiAgICBmaWx0ZXIoXyA9PlxuICAgICAgaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLCBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSlcbiAgICApLFxuICAgIGNvbmNhdE1hcChfID0+XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3JcbiAgICAgICAgLmxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRUZW1wbGF0ZXMoKSksXG4gICAgICAgICAgbWVyZ2VNYXAoKFtuZXdDb25zZW50VGVtcGxhdGVzLCBjdXJyZW50Q29uc2VudFRlbXBsYXRlc10pID0+IHtcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIEJvb2xlYW4oY3VycmVudENvbnNlbnRUZW1wbGF0ZXMpICYmXG4gICAgICAgICAgICAgIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZWQgPSB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmRldGVjdFVwZGF0ZWRUZW1wbGF0ZXMoXG4gICAgICAgICAgICAgICAgY3VycmVudENvbnNlbnRUZW1wbGF0ZXMsXG4gICAgICAgICAgICAgICAgbmV3Q29uc2VudFRlbXBsYXRlc1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzU3VjY2VzcyhcbiAgICAgICAgICAgICAgICBuZXdDb25zZW50VGVtcGxhdGVzXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuVG9nZ2xlQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1VwZGF0ZWQoXG4gICAgICAgICAgICAgICAgdXBkYXRlZFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB0cmFuc2ZlckFub255bW91c0NvbnNlbnRzVG9Vc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5UcmFuc2ZlckFub255bW91c0NvbnNlbnQgfCBPYnNlcnZhYmxlPG5ldmVyPlxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZTxBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcz4oXG4gICAgICBBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTU1xuICAgICksXG4gICAgZmlsdGVyKFxuICAgICAgKCkgPT5cbiAgICAgICAgaXNGZWF0dXJlRW5hYmxlZChcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFXG4gICAgICAgICkgJiYgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzKVxuICAgICksXG4gICAgd2l0aExhdGVzdEZyb20oXG4gICAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZTxVc2VyQWN0aW9ucy5SZWdpc3RlclVzZXJTdWNjZXNzPihcbiAgICAgICAgICBVc2VyQWN0aW9ucy5SRUdJU1RFUl9VU0VSX1NVQ0NFU1NcbiAgICAgICAgKVxuICAgICAgKVxuICAgICksXG4gICAgZmlsdGVyKChbLCByZWdpc3RlckFjdGlvbl0pID0+IEJvb2xlYW4ocmVnaXN0ZXJBY3Rpb24pKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHMoKS5waXBlKFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZ2V0VGVtcGxhdGVzKCksXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpXG4gICAgICAgICksXG4gICAgICAgIGZpbHRlcigoWywgLCAsIGxvZ2dlZEluXSkgPT4gbG9nZ2VkSW4pLFxuICAgICAgICBjb25jYXRNYXAoKFtjb25zZW50cywgdXNlcklkLCB0ZW1wbGF0ZXMsIF9sb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICBjb25zdCBhY3Rpb25zOiBVc2VyQWN0aW9ucy5UcmFuc2ZlckFub255bW91c0NvbnNlbnRbXSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBjb25zZW50cykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpICYmXG4gICAgICAgICAgICAgICghdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50c1xuICAgICAgICAgICAgICAgIC5yZXF1aXJlZENvbnNlbnRzIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgIGNvbnNlbnQudGVtcGxhdGVDb2RlXG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wbGF0ZS5pZCA9PT0gY29uc2VudC50ZW1wbGF0ZUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudCh7XG4gICAgICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZUlkOiB0ZW1wbGF0ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiB0ZW1wbGF0ZS52ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2l2ZVJlcXVpcmVkQ29uc2VudHNUb1VzZXIkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudCB8IE9ic2VydmFibGU8bmV2ZXI+XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlPEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5TdWNjZXNzPihcbiAgICAgIEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTl9TVUNDRVNTXG4gICAgKSxcbiAgICBmaWx0ZXIoXG4gICAgICBhY3Rpb24gPT5cbiAgICAgICAgaXNGZWF0dXJlRW5hYmxlZChcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFXG4gICAgICAgICkgJiZcbiAgICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzKSAmJlxuICAgICAgICBCb29sZWFuKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50c1xuICAgICAgICApICYmXG4gICAgICAgIEJvb2xlYW4oYWN0aW9uKVxuICAgICksXG4gICAgY29uY2F0TWFwKCgpID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50c1Jlc3VsdFN1Y2Nlc3MoKS5waXBlKFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzKCksXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpXG4gICAgICAgICksXG4gICAgICAgIGZpbHRlcigoWywgLCAsIGxvZ2dlZEluXSkgPT4gbG9nZ2VkSW4pLFxuICAgICAgICB0YXAoKFtsb2FkZWQsIF91c2VySWQsIF90ZW1wbGF0ZXMsIF9sb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChbX2xvYWRlZCwgdXNlcklkLCB0ZW1wbGF0ZXMsIF9sb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICByZXR1cm4geyB1c2VySWQsIHRlbXBsYXRlcyB9O1xuICAgICAgICB9KSxcbiAgICAgICAgY29uY2F0TWFwKCh7IHVzZXJJZCwgdGVtcGxhdGVzIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBhY3Rpb25zOiBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRbXSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICghdGVtcGxhdGUuY3VycmVudENvbnNlbnQgfHxcbiAgICAgICAgICAgICAgICAhdGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudEdpdmVuRGF0ZSB8fFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRXaXRoZHJhd25EYXRlKSAmJlxuICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUuaWRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50KHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZUlkOiB0ZW1wbGF0ZS5pZCxcbiAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IHRlbXBsYXRlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHN5bmNocm9uaXplQmFubmVyQWNyb3NzVGFicyQ6IE9ic2VydmFibGU8XG4gICAgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eVxuICA+ID0gaWlmKFxuICAgICgpID0+IHRoaXMuY2hlY2tGZWF0dXJlQW5kU3NyRW5hYmxlZCgpLFxuICAgIGZyb21FdmVudDxTdG9yYWdlRXZlbnQ+KHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdywgJ3N0b3JhZ2UnKS5waXBlKFxuICAgICAgZmlsdGVyKHN0b3JhZ2VFdmVudCA9PiB0aGlzLmNoZWNrU3RvcmFnZUV2ZW50KHN0b3JhZ2VFdmVudCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIC8vIENsaWNraW5nIG9uIFwiQWxsb3cgQWxsXCIgb24gdGhlIGJhbm5lciBoaWRlcyB0aGUgYmFubmVyLCBjYXVzaW5nIGFuIGluZmluaXRlIGxvb3Agb2YgZmlyaW5nIGV2ZW50cy5cbiAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgbWFwKHN0b3JhZ2VFdmVudCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gSlNPTi5wYXJzZShzdG9yYWdlRXZlbnQubmV3VmFsdWUpO1xuICAgICAgICBjb25zdCBuZXdVaUZsYWcgPSAobmV3U3RhdGVbXG4gICAgICAgICAgQU5PTllNT1VTX0NPTlNFTlRTX1NUT1JFX0ZFQVRVUkVcbiAgICAgICAgXSBhcyBBbm9ueW1vdXNDb25zZW50c1N0YXRlKS51aS5iYW5uZXJWaXNpYmxlO1xuXG4gICAgICAgIHJldHVybiBuZXdVaUZsYWc7XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBtYXAoXG4gICAgICAgIG5ld1VpRmxhZyA9PlxuICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuVG9nZ2xlQW5vbnltb3VzQ29uc2VudHNCYW5uZXJWaXNpYmlsaXR5KFxuICAgICAgICAgICAgbmV3VWlGbGFnXG4gICAgICAgICAgKVxuICAgICAgKVxuICAgICksXG4gICAgRU1QVFlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc3luY2hyb25pemVDb25zZW50U3RhdGVBY3Jvc3NUYWJzJDogT2JzZXJ2YWJsZTxcbiAgICB8IChcbiAgICAgICAgfCBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuR2l2ZUFub255bW91c0NvbnNlbnRcbiAgICAgICAgfCBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuV2l0aGRyYXdBbm9ueW1vdXNDb25zZW50KVxuICAgIHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IGlpZihcbiAgICAoKSA9PiB0aGlzLmNoZWNrRmVhdHVyZUFuZFNzckVuYWJsZWQoKSxcbiAgICBmcm9tRXZlbnQ8U3RvcmFnZUV2ZW50Pih0aGlzLndpblJlZi5uYXRpdmVXaW5kb3csICdzdG9yYWdlJykucGlwZShcbiAgICAgIGZpbHRlcihzdG9yYWdlRXZlbnQgPT4gdGhpcy5jaGVja1N0b3JhZ2VFdmVudChzdG9yYWdlRXZlbnQpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAvLyBDbGlja2luZyBvbiBcIkFsbG93IEFsbFwiIG9uIHRoZSBiYW5uZXIgaGlkZXMgdGhlIGJhbm5lciwgY2F1c2luZyBhbiBpbmZpbml0ZSBsb29wIG9mIGZpcmluZyBldmVudHMuXG4gICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgIG1lcmdlTWFwKHN0b3JhZ2VFdmVudCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gSlNPTi5wYXJzZShzdG9yYWdlRXZlbnQubmV3VmFsdWUpO1xuICAgICAgICBjb25zdCBuZXdDb25zZXRzID0gKG5ld1N0YXRlW1xuICAgICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19TVE9SRV9GRUFUVVJFXG4gICAgICAgIF0gYXMgQW5vbnltb3VzQ29uc2VudHNTdGF0ZSkuY29uc2VudHM7XG5cbiAgICAgICAgY29uc3Qgb2xkU3RhdGUgPSBKU09OLnBhcnNlKHN0b3JhZ2VFdmVudC5vbGRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG9sZENvbnNlbnRzID0gKG9sZFN0YXRlW1xuICAgICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19TVE9SRV9GRUFUVVJFXG4gICAgICAgIF0gYXMgQW5vbnltb3VzQ29uc2VudHNTdGF0ZSkuY29uc2VudHM7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuY29uc2VudHNVcGRhdGVkKG5ld0NvbnNldHMsIG9sZENvbnNlbnRzKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZVVwZGF0ZUFjdGlvbnMobmV3Q29uc2V0cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICB9KVxuICAgICksXG4gICAgRU1QVFlcbiAgKTtcblxuICBwcml2YXRlIGNoZWNrRmVhdHVyZUFuZFNzckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGlzRmVhdHVyZUVuYWJsZWQoXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFXG4gICAgICApICYmIEJvb2xlYW4odGhpcy53aW5SZWYubmF0aXZlV2luZG93KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrU3RvcmFnZUV2ZW50KHN0b3JhZ2VFdmVudDogU3RvcmFnZUV2ZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4oc3RvcmFnZUV2ZW50KSAmJlxuICAgICAgc3RvcmFnZUV2ZW50LmtleSA9PT0gREVGQVVMVF9MT0NBTF9TVE9SQUdFX0tFWSAmJlxuICAgICAgc3RvcmFnZUV2ZW50Lm5ld1ZhbHVlICE9PSBudWxsICYmXG4gICAgICBzdG9yYWdlRXZlbnQub2xkVmFsdWUgIT09IG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTdGF0ZVVwZGF0ZUFjdGlvbnMoXG4gICAgbmV3Q29uc2V0czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IChcbiAgICB8IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5HaXZlQW5vbnltb3VzQ29uc2VudFxuICAgIHwgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLldpdGhkcmF3QW5vbnltb3VzQ29uc2VudClbXSB7XG4gICAgY29uc3QgY29uc2VudFN0YXRlQWN0aW9uczogKFxuICAgICAgfCBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuR2l2ZUFub255bW91c0NvbnNlbnRcbiAgICAgIHwgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLldpdGhkcmF3QW5vbnltb3VzQ29uc2VudClbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBuZXdDb25zZXRzKSB7XG4gICAgICBpZiAodGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KSkge1xuICAgICAgICBjb25zZW50U3RhdGVBY3Rpb25zLnB1c2goXG4gICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5HaXZlQW5vbnltb3VzQ29uc2VudChcbiAgICAgICAgICAgIGNvbnNlbnQudGVtcGxhdGVDb2RlXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50KSkge1xuICAgICAgICBjb25zZW50U3RhdGVBY3Rpb25zLnB1c2goXG4gICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5XaXRoZHJhd0Fub255bW91c0NvbnNlbnQoXG4gICAgICAgICAgICBjb25zZW50LnRlbXBsYXRlQ29kZVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uc2VudFN0YXRlQWN0aW9ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yOiBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFNlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxufVxuIl19