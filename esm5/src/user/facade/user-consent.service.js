/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { iif } from 'rxjs';
import { filter, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_CURRENT } from '../../occ/index';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { GIVE_CONSENT_PROCESS_ID, WITHDRAW_CONSENT_PROCESS_ID, } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
var UserConsentService = /** @class */ (function () {
    function UserConsentService(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves all consents.
     */
    /**
     * Retrieves all consents.
     * @return {?}
     */
    UserConsentService.prototype.loadConsents = /**
     * Retrieves all consents.
     * @return {?}
     */
    function () {
        var _this = this;
        this.withUserId((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            return _this.store.dispatch(new UserActions.LoadUserConsents(userId));
        }));
    };
    /**
     * Returns all consent templates. If `loadIfMissing` parameter is set to `true`, the method triggers the load if consent templates.
     * @param loadIfMissing is set to `true`, the method will load templates if those are not already present. The default value is `false`.
     */
    /**
     * Returns all consent templates. If `loadIfMissing` parameter is set to `true`, the method triggers the load if consent templates.
     * @param {?=} loadIfMissing is set to `true`, the method will load templates if those are not already present. The default value is `false`.
     * @return {?}
     */
    UserConsentService.prototype.getConsents = /**
     * Returns all consent templates. If `loadIfMissing` parameter is set to `true`, the method triggers the load if consent templates.
     * @param {?=} loadIfMissing is set to `true`, the method will load templates if those are not already present. The default value is `false`.
     * @return {?}
     */
    function (loadIfMissing) {
        var _this = this;
        if (loadIfMissing === void 0) { loadIfMissing = false; }
        return iif((/**
         * @return {?}
         */
        function () { return loadIfMissing; }), this.store.pipe(select(UsersSelectors.getConsentsValue), withLatestFrom(this.getConsentsResultLoading(), this.getConsentsResultSuccess()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), _templates = _b[0], loading = _b[1], _success = _b[2];
            return !loading;
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), templates = _b[0], _loading = _b[1], success = _b[2];
            if (!templates || templates.length === 0) {
                // avoid infite loop - if we've already attempted to load templates and we got an empty array as the response
                if (!success) {
                    _this.loadConsents();
                }
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
        }))), this.store.pipe(select(UsersSelectors.getConsentsValue)));
    };
    /**
     * Returns the consents loading flag
     */
    /**
     * Returns the consents loading flag
     * @return {?}
     */
    UserConsentService.prototype.getConsentsResultLoading = /**
     * Returns the consents loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getConsentsLoading));
    };
    /**
     * Returns the consents success flag
     */
    /**
     * Returns the consents success flag
     * @return {?}
     */
    UserConsentService.prototype.getConsentsResultSuccess = /**
     * Returns the consents success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getConsentsSuccess));
    };
    /**
     * Returns the consents error flag
     */
    /**
     * Returns the consents error flag
     * @return {?}
     */
    UserConsentService.prototype.getConsentsResultError = /**
     * Returns the consents error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getConsentsError));
    };
    /**
     * Resets the processing state for consent retrieval
     */
    /**
     * Resets the processing state for consent retrieval
     * @return {?}
     */
    UserConsentService.prototype.resetConsentsProcessState = /**
     * Resets the processing state for consent retrieval
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ResetLoadUserConsents());
    };
    /**
     * Returns the registered consent for the given template ID.
     *
     * As a side-effect, the method will call `getConsents(true)` to load the templates if those are not present.
     *
     * @param templateId a template ID by which to filter the registered templates.
     */
    /**
     * Returns the registered consent for the given template ID.
     *
     * As a side-effect, the method will call `getConsents(true)` to load the templates if those are not present.
     *
     * @param {?} templateId a template ID by which to filter the registered templates.
     * @return {?}
     */
    UserConsentService.prototype.getConsent = /**
     * Returns the registered consent for the given template ID.
     *
     * As a side-effect, the method will call `getConsents(true)` to load the templates if those are not present.
     *
     * @param {?} templateId a template ID by which to filter the registered templates.
     * @return {?}
     */
    function (templateId) {
        var _this = this;
        return this.authService.isUserLoggedIn().pipe(filter(Boolean), tap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return _this.getConsents(true); })), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return _this.store.pipe(select(UsersSelectors.getConsentByTemplateId(templateId)));
        })), filter((/**
         * @param {?} template
         * @return {?}
         */
        function (template) { return Boolean(template); })), map((/**
         * @param {?} template
         * @return {?}
         */
        function (template) { return template.currentConsent; })));
    };
    /**
     * Returns `true` if the consent is truthy and if `consentWithdrawnDate` doesn't exist.
     * Otherwise, `false` is returned.
     *
     * @param consent to check
     */
    /**
     * Returns `true` if the consent is truthy and if `consentWithdrawnDate` doesn't exist.
     * Otherwise, `false` is returned.
     *
     * @param {?} consent to check
     * @return {?}
     */
    UserConsentService.prototype.isConsentGiven = /**
     * Returns `true` if the consent is truthy and if `consentWithdrawnDate` doesn't exist.
     * Otherwise, `false` is returned.
     *
     * @param {?} consent to check
     * @return {?}
     */
    function (consent) {
        return (Boolean(consent) &&
            Boolean(consent.consentGivenDate) &&
            !Boolean(consent.consentWithdrawnDate));
    };
    /**
     * Returns `true` if the consent is either falsy or if `consentWithdrawnDate` is present.
     * Otherwise, `false` is returned.
     *
     * @param consent to check
     */
    /**
     * Returns `true` if the consent is either falsy or if `consentWithdrawnDate` is present.
     * Otherwise, `false` is returned.
     *
     * @param {?} consent to check
     * @return {?}
     */
    UserConsentService.prototype.isConsentWithdrawn = /**
     * Returns `true` if the consent is either falsy or if `consentWithdrawnDate` is present.
     * Otherwise, `false` is returned.
     *
     * @param {?} consent to check
     * @return {?}
     */
    function (consent) {
        if (Boolean(consent)) {
            return Boolean(consent.consentWithdrawnDate);
        }
        return true;
    };
    /**
     * Give consent for specified consent template ID and version.
     * @param consentTemplateId a template ID for which to give a consent
     * @param consentTemplateVersion a template version for which to give a consent
     */
    /**
     * Give consent for specified consent template ID and version.
     * @param {?} consentTemplateId a template ID for which to give a consent
     * @param {?} consentTemplateVersion a template version for which to give a consent
     * @return {?}
     */
    UserConsentService.prototype.giveConsent = /**
     * Give consent for specified consent template ID and version.
     * @param {?} consentTemplateId a template ID for which to give a consent
     * @param {?} consentTemplateVersion a template version for which to give a consent
     * @return {?}
     */
    function (consentTemplateId, consentTemplateVersion) {
        var _this = this;
        this.withUserId((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            return _this.store.dispatch(new UserActions.GiveUserConsent({
                userId: userId,
                consentTemplateId: consentTemplateId,
                consentTemplateVersion: consentTemplateVersion,
            }));
        }));
    };
    /**
     * Returns the give consent process loading flag
     */
    /**
     * Returns the give consent process loading flag
     * @return {?}
     */
    UserConsentService.prototype.getGiveConsentResultLoading = /**
     * Returns the give consent process loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the give consent process success flag
     */
    /**
     * Returns the give consent process success flag
     * @return {?}
     */
    UserConsentService.prototype.getGiveConsentResultSuccess = /**
     * Returns the give consent process success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the give consent process error flag
     */
    /**
     * Returns the give consent process error flag
     * @return {?}
     */
    UserConsentService.prototype.getGiveConsentResultError = /**
     * Returns the give consent process error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Resents the give consent process flags
     */
    /**
     * Resents the give consent process flags
     * @return {?}
     */
    UserConsentService.prototype.resetGiveConsentProcessState = /**
     * Resents the give consent process flags
     * @return {?}
     */
    function () {
        return this.store.dispatch(new UserActions.ResetGiveUserConsentProcess());
    };
    /**
     * Withdraw consent for the given `consentCode`
     * @param consentCode for which to withdraw the consent
     */
    /**
     * Withdraw consent for the given `consentCode`
     * @param {?} consentCode for which to withdraw the consent
     * @return {?}
     */
    UserConsentService.prototype.withdrawConsent = /**
     * Withdraw consent for the given `consentCode`
     * @param {?} consentCode for which to withdraw the consent
     * @return {?}
     */
    function (consentCode) {
        var _this = this;
        this.withUserId((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            return _this.store.dispatch(new UserActions.WithdrawUserConsent({
                userId: userId,
                consentCode: consentCode,
            }));
        }));
    };
    /**
     * Returns the withdraw consent process loading flag
     */
    /**
     * Returns the withdraw consent process loading flag
     * @return {?}
     */
    UserConsentService.prototype.getWithdrawConsentResultLoading = /**
     * Returns the withdraw consent process loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the withdraw consent process success flag
     */
    /**
     * Returns the withdraw consent process success flag
     * @return {?}
     */
    UserConsentService.prototype.getWithdrawConsentResultSuccess = /**
     * Returns the withdraw consent process success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the withdraw consent process error flag
     */
    /**
     * Returns the withdraw consent process error flag
     * @return {?}
     */
    UserConsentService.prototype.getWithdrawConsentResultError = /**
     * Returns the withdraw consent process error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Resets the process flags for withdraw consent
     */
    /**
     * Resets the process flags for withdraw consent
     * @return {?}
     */
    UserConsentService.prototype.resetWithdrawConsentProcessState = /**
     * Resets the process flags for withdraw consent
     * @return {?}
     */
    function () {
        return this.store.dispatch(new UserActions.ResetWithdrawUserConsentProcess());
    };
    /**
     * Filters the provided `templateList`' templates by hiding the template IDs specified in `hideTemplateIds`.
     * If the `hideTemplateIds` is empty, the provided `templateList` is returned.
     *
     * @param templateList a list of consent templates to filter
     * @param hideTemplateIds template IDs to hide
     */
    /**
     * Filters the provided `templateList`' templates by hiding the template IDs specified in `hideTemplateIds`.
     * If the `hideTemplateIds` is empty, the provided `templateList` is returned.
     *
     * @param {?} templateList a list of consent templates to filter
     * @param {?=} hideTemplateIds template IDs to hide
     * @return {?}
     */
    UserConsentService.prototype.filterConsentTemplates = /**
     * Filters the provided `templateList`' templates by hiding the template IDs specified in `hideTemplateIds`.
     * If the `hideTemplateIds` is empty, the provided `templateList` is returned.
     *
     * @param {?} templateList a list of consent templates to filter
     * @param {?=} hideTemplateIds template IDs to hide
     * @return {?}
     */
    function (templateList, hideTemplateIds) {
        var e_1, _a;
        if (hideTemplateIds === void 0) { hideTemplateIds = []; }
        if (hideTemplateIds.length === 0) {
            return templateList;
        }
        /** @type {?} */
        var updatedTemplateList = [];
        try {
            for (var templateList_1 = tslib_1.__values(templateList), templateList_1_1 = templateList_1.next(); !templateList_1_1.done; templateList_1_1 = templateList_1.next()) {
                var template = templateList_1_1.value;
                /** @type {?} */
                var show = !hideTemplateIds.includes(template.id);
                if (show) {
                    updatedTemplateList.push(template);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (templateList_1_1 && !templateList_1_1.done && (_a = templateList_1.return)) _a.call(templateList_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return updatedTemplateList;
    };
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     * @private
     * @param {?} callback
     * @return {?}
     */
    UserConsentService.prototype.withUserId = /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     * @private
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        if (this.authService) {
            this.authService
                .getOccUserId()
                .pipe(take(1))
                .subscribe((/**
             * @param {?} userId
             * @return {?}
             */
            function (userId) { return callback(userId); }));
        }
        else {
            // TODO(issue:#5628) Deprecated since 1.3.0
            callback(OCC_USER_ID_CURRENT);
        }
    };
    UserConsentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserConsentService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    /** @nocollapse */ UserConsentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserConsentService_Factory() { return new UserConsentService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserConsentService, providedIn: "root" });
    return UserConsentService;
}());
export { UserConsentService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserConsentService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    UserConsentService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1jb25zZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUNMLE1BQU0sRUFDTixHQUFHLEVBQ0gsU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUNMLHVCQUF1QixFQUV2QiwyQkFBMkIsR0FDNUIsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUU3QjtJQWtCRSw0QkFDWSxLQUFvRCxFQUNwRCxXQUF5QjtRQUR6QixVQUFLLEdBQUwsS0FBSyxDQUErQztRQUNwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYztJQUNsQyxDQUFDO0lBRUo7O09BRUc7Ozs7O0lBQ0gseUNBQVk7Ozs7SUFBWjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFBLE1BQU07WUFDcEIsT0FBQSxLQUFJLENB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Q0FBVTs7Ozs7OztJQUFsQixVQUFtQixRQUFrQztRQUNuRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVc7aUJBQ2IsWUFBWSxFQUFFO2lCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2IsU0FBUzs7OztZQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFoQixDQUFnQixFQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNMLDJDQUEyQztZQUMzQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7O2dCQXZSRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQTdCZ0IsS0FBSztnQkFVYixXQUFXOzs7NkJBWHBCO0NBb1RDLEFBeFJELElBd1JDO1NBclJZLGtCQUFrQjs7Ozs7O0lBZ0IzQixtQ0FBOEQ7Ozs7O0lBQzlELHlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnNlbnQsIENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQsXG4gIFN0YXRlV2l0aFVzZXIsXG4gIFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQ29uc2VudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogIFVzZSBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgKiAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSBpbnN0ZWFkXG4gICAqXG4gICAqICBUT0RPKGlzc3VlOiM1NjI4KSBEZXByZWNhdGVkIHNpbmNlIDEuMy4wXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+KTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlPzogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYWxsIGNvbnNlbnRzLlxuICAgKi9cbiAgbG9hZENvbnNlbnRzKCk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyQ29uc2VudHModXNlcklkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGNvbnNlbnQgdGVtcGxhdGVzLiBJZiBgbG9hZElmTWlzc2luZ2AgcGFyYW1ldGVyIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBtZXRob2QgdHJpZ2dlcnMgdGhlIGxvYWQgaWYgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAqIEBwYXJhbSBsb2FkSWZNaXNzaW5nIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBtZXRob2Qgd2lsbCBsb2FkIHRlbXBsYXRlcyBpZiB0aG9zZSBhcmUgbm90IGFscmVhZHkgcHJlc2VudC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICovXG4gIGdldENvbnNlbnRzKGxvYWRJZk1pc3NpbmcgPSBmYWxzZSk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gaWlmKFxuICAgICAgKCkgPT4gbG9hZElmTWlzc2luZyxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRzVmFsdWUpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICB0aGlzLmdldENvbnNlbnRzUmVzdWx0TG9hZGluZygpLFxuICAgICAgICAgIHRoaXMuZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKChbX3RlbXBsYXRlcywgbG9hZGluZywgX3N1Y2Nlc3NdKSA9PiAhbG9hZGluZyksXG4gICAgICAgIHRhcCgoW3RlbXBsYXRlcywgX2xvYWRpbmcsIHN1Y2Nlc3NdKSA9PiB7XG4gICAgICAgICAgaWYgKCF0ZW1wbGF0ZXMgfHwgdGVtcGxhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gYXZvaWQgaW5maXRlIGxvb3AgLSBpZiB3ZSd2ZSBhbHJlYWR5IGF0dGVtcHRlZCB0byBsb2FkIHRlbXBsYXRlcyBhbmQgd2UgZ290IGFuIGVtcHR5IGFycmF5IGFzIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMubG9hZENvbnNlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IEJvb2xlYW4odGVtcGxhdGVzKSksXG4gICAgICAgIG1hcCgoW3RlbXBsYXRlcywgX2xvYWRpbmddKSA9PiB0ZW1wbGF0ZXMpXG4gICAgICApLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zZW50c1ZhbHVlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0Q29uc2VudHNSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRzU3VjY2VzcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnNlbnRzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldENvbnNlbnRzUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2VudHNFcnJvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgcHJvY2Vzc2luZyBzdGF0ZSBmb3IgY29uc2VudCByZXRyaWV2YWxcbiAgICovXG4gIHJlc2V0Q29uc2VudHNQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRMb2FkVXNlckNvbnNlbnRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlZ2lzdGVyZWQgY29uc2VudCBmb3IgdGhlIGdpdmVuIHRlbXBsYXRlIElELlxuICAgKlxuICAgKiBBcyBhIHNpZGUtZWZmZWN0LCB0aGUgbWV0aG9kIHdpbGwgY2FsbCBgZ2V0Q29uc2VudHModHJ1ZSlgIHRvIGxvYWQgdGhlIHRlbXBsYXRlcyBpZiB0aG9zZSBhcmUgbm90IHByZXNlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUlkIGEgdGVtcGxhdGUgSUQgYnkgd2hpY2ggdG8gZmlsdGVyIHRoZSByZWdpc3RlcmVkIHRlbXBsYXRlcy5cbiAgICovXG4gIGdldENvbnNlbnQodGVtcGxhdGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb25zZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgdGFwKF8gPT4gdGhpcy5nZXRDb25zZW50cyh0cnVlKSksXG4gICAgICBzd2l0Y2hNYXAoXyA9PlxuICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRCeVRlbXBsYXRlSWQodGVtcGxhdGVJZCkpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBmaWx0ZXIodGVtcGxhdGUgPT4gQm9vbGVhbih0ZW1wbGF0ZSkpLFxuICAgICAgbWFwKHRlbXBsYXRlID0+IHRlbXBsYXRlLmN1cnJlbnRDb25zZW50KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgaXMgdHJ1dGh5IGFuZCBpZiBgY29uc2VudFdpdGhkcmF3bkRhdGVgIGRvZXNuJ3QgZXhpc3QuXG4gICAqIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIGNvbnNlbnQgdG8gY2hlY2tcbiAgICovXG4gIGlzQ29uc2VudEdpdmVuKGNvbnNlbnQ6IENvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbihjb25zZW50KSAmJlxuICAgICAgQm9vbGVhbihjb25zZW50LmNvbnNlbnRHaXZlbkRhdGUpICYmXG4gICAgICAhQm9vbGVhbihjb25zZW50LmNvbnNlbnRXaXRoZHJhd25EYXRlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgaXMgZWl0aGVyIGZhbHN5IG9yIGlmIGBjb25zZW50V2l0aGRyYXduRGF0ZWAgaXMgcHJlc2VudC5cbiAgICogT3RoZXJ3aXNlLCBgZmFsc2VgIGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBAcGFyYW0gY29uc2VudCB0byBjaGVja1xuICAgKi9cbiAgaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQ6IENvbnNlbnQpOiBib29sZWFuIHtcbiAgICBpZiAoQm9vbGVhbihjb25zZW50KSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oY29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmUgY29uc2VudCBmb3Igc3BlY2lmaWVkIGNvbnNlbnQgdGVtcGxhdGUgSUQgYW5kIHZlcnNpb24uXG4gICAqIEBwYXJhbSBjb25zZW50VGVtcGxhdGVJZCBhIHRlbXBsYXRlIElEIGZvciB3aGljaCB0byBnaXZlIGEgY29uc2VudFxuICAgKiBAcGFyYW0gY29uc2VudFRlbXBsYXRlVmVyc2lvbiBhIHRlbXBsYXRlIHZlcnNpb24gZm9yIHdoaWNoIHRvIGdpdmUgYSBjb25zZW50XG4gICAqL1xuICBnaXZlQ29uc2VudChjb25zZW50VGVtcGxhdGVJZDogc3RyaW5nLCBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQodXNlcklkID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY29uc2VudFRlbXBsYXRlSWQsXG4gICAgICAgICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbixcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGdpdmUgY29uc2VudCBwcm9jZXNzIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0R2l2ZUNvbnNlbnRSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGdpdmUgY29uc2VudCBwcm9jZXNzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0R2l2ZUNvbnNlbnRSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGdpdmUgY29uc2VudCBwcm9jZXNzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldEdpdmVDb25zZW50UmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2VudHMgdGhlIGdpdmUgY29uc2VudCBwcm9jZXNzIGZsYWdzXG4gICAqL1xuICByZXNldEdpdmVDb25zZW50UHJvY2Vzc1N0YXRlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5SZXNldEdpdmVVc2VyQ29uc2VudFByb2Nlc3MoKSk7XG4gIH1cblxuICAvKipcbiAgICogV2l0aGRyYXcgY29uc2VudCBmb3IgdGhlIGdpdmVuIGBjb25zZW50Q29kZWBcbiAgICogQHBhcmFtIGNvbnNlbnRDb2RlIGZvciB3aGljaCB0byB3aXRoZHJhdyB0aGUgY29uc2VudFxuICAgKi9cbiAgd2l0aGRyYXdDb25zZW50KGNvbnNlbnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQodXNlcklkID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuV2l0aGRyYXdVc2VyQ29uc2VudCh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNvbnNlbnRDb2RlLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2l0aGRyYXcgY29uc2VudCBwcm9jZXNzIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShXSVRIRFJBV19DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2l0aGRyYXcgY29uc2VudCBwcm9jZXNzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShXSVRIRFJBV19DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2l0aGRyYXcgY29uc2VudCBwcm9jZXNzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShXSVRIRFJBV19DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBwcm9jZXNzIGZsYWdzIGZvciB3aXRoZHJhdyBjb25zZW50XG4gICAqL1xuICByZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5SZXNldFdpdGhkcmF3VXNlckNvbnNlbnRQcm9jZXNzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgdGhlIHByb3ZpZGVkIGB0ZW1wbGF0ZUxpc3RgJyB0ZW1wbGF0ZXMgYnkgaGlkaW5nIHRoZSB0ZW1wbGF0ZSBJRHMgc3BlY2lmaWVkIGluIGBoaWRlVGVtcGxhdGVJZHNgLlxuICAgKiBJZiB0aGUgYGhpZGVUZW1wbGF0ZUlkc2AgaXMgZW1wdHksIHRoZSBwcm92aWRlZCBgdGVtcGxhdGVMaXN0YCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlTGlzdCBhIGxpc3Qgb2YgY29uc2VudCB0ZW1wbGF0ZXMgdG8gZmlsdGVyXG4gICAqIEBwYXJhbSBoaWRlVGVtcGxhdGVJZHMgdGVtcGxhdGUgSURzIHRvIGhpZGVcbiAgICovXG4gIGZpbHRlckNvbnNlbnRUZW1wbGF0ZXMoXG4gICAgdGVtcGxhdGVMaXN0OiBDb25zZW50VGVtcGxhdGVbXSxcbiAgICBoaWRlVGVtcGxhdGVJZHM6IHN0cmluZ1tdID0gW11cbiAgKTogQ29uc2VudFRlbXBsYXRlW10ge1xuICAgIGlmIChoaWRlVGVtcGxhdGVJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVMaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRUZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZVtdID0gW107XG4gICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZUxpc3QpIHtcbiAgICAgIGNvbnN0IHNob3cgPSAhaGlkZVRlbXBsYXRlSWRzLmluY2x1ZGVzKHRlbXBsYXRlLmlkKTtcbiAgICAgIGlmIChzaG93KSB7XG4gICAgICAgIHVwZGF0ZWRUZW1wbGF0ZUxpc3QucHVzaCh0ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZWRUZW1wbGF0ZUxpc3Q7XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSBtZXRob2QgdG8gZGlzdGlucXVpc2ggcHJlIC8gcG9zdCAxLjMuMCBpbiBhIGNvbnZlbmllbnQgd2F5LlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSB3aXRoVXNlcklkKGNhbGxiYWNrOiAodXNlcklkOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRoU2VydmljZSkge1xuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZSh1c2VySWQgPT4gY2FsbGJhY2sodXNlcklkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8oaXNzdWU6IzU2MjgpIERlcHJlY2F0ZWQgc2luY2UgMS4zLjBcbiAgICAgIGNhbGxiYWNrKE9DQ19VU0VSX0lEX0NVUlJFTlQpO1xuICAgIH1cbiAgfVxufVxuIl19