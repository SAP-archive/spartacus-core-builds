import { __decorate, __read, __values } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { iif } from 'rxjs';
import { filter, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
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
    UserConsentService.prototype.loadConsents = function () {
        var _this = this;
        this.withUserId(function (userId) {
            return _this.store.dispatch(new UserActions.LoadUserConsents(userId));
        });
    };
    /**
     * Returns all consent templates. If `loadIfMissing` parameter is set to `true`, the method triggers the load if consent templates.
     * @param loadIfMissing is set to `true`, the method will load templates if those are not already present. The default value is `false`.
     */
    UserConsentService.prototype.getConsents = function (loadIfMissing) {
        var _this = this;
        if (loadIfMissing === void 0) { loadIfMissing = false; }
        return iif(function () { return loadIfMissing; }, this.store.pipe(select(UsersSelectors.getConsentsValue), withLatestFrom(this.getConsentsResultLoading(), this.getConsentsResultSuccess()), filter(function (_a) {
            var _b = __read(_a, 3), _templates = _b[0], loading = _b[1], _success = _b[2];
            return !loading;
        }), tap(function (_a) {
            var _b = __read(_a, 3), templates = _b[0], _loading = _b[1], success = _b[2];
            if (!templates || templates.length === 0) {
                // avoid infite loop - if we've already attempted to load templates and we got an empty array as the response
                if (!success) {
                    _this.loadConsents();
                }
            }
        }), filter(function (_a) {
            var _b = __read(_a, 2), templates = _b[0], _loading = _b[1];
            return Boolean(templates);
        }), map(function (_a) {
            var _b = __read(_a, 2), templates = _b[0], _loading = _b[1];
            return templates;
        })), this.store.pipe(select(UsersSelectors.getConsentsValue)));
    };
    /**
     * Returns the consents loading flag
     */
    UserConsentService.prototype.getConsentsResultLoading = function () {
        return this.store.pipe(select(UsersSelectors.getConsentsLoading));
    };
    /**
     * Returns the consents success flag
     */
    UserConsentService.prototype.getConsentsResultSuccess = function () {
        return this.store.pipe(select(UsersSelectors.getConsentsSuccess));
    };
    /**
     * Returns the consents error flag
     */
    UserConsentService.prototype.getConsentsResultError = function () {
        return this.store.pipe(select(UsersSelectors.getConsentsError));
    };
    /**
     * Resets the processing state for consent retrieval
     */
    UserConsentService.prototype.resetConsentsProcessState = function () {
        this.store.dispatch(new UserActions.ResetLoadUserConsents());
    };
    /**
     * Returns the registered consent for the given template ID.
     *
     * As a side-effect, the method will call `getConsents(true)` to load the templates if those are not present.
     *
     * @param templateId a template ID by which to filter the registered templates.
     */
    UserConsentService.prototype.getConsent = function (templateId) {
        var _this = this;
        return this.authService.isUserLoggedIn().pipe(filter(Boolean), tap(function (_) { return _this.getConsents(true); }), switchMap(function (_) {
            return _this.store.pipe(select(UsersSelectors.getConsentByTemplateId(templateId)));
        }), filter(function (template) { return Boolean(template); }), map(function (template) { return template.currentConsent; }));
    };
    /**
     * Returns `true` if the consent is truthy and if `consentWithdrawnDate` doesn't exist.
     * Otherwise, `false` is returned.
     *
     * @param consent to check
     */
    UserConsentService.prototype.isConsentGiven = function (consent) {
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
    UserConsentService.prototype.isConsentWithdrawn = function (consent) {
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
    UserConsentService.prototype.giveConsent = function (consentTemplateId, consentTemplateVersion) {
        var _this = this;
        this.withUserId(function (userId) {
            return _this.store.dispatch(new UserActions.GiveUserConsent({
                userId: userId,
                consentTemplateId: consentTemplateId,
                consentTemplateVersion: consentTemplateVersion,
            }));
        });
    };
    /**
     * Returns the give consent process loading flag
     */
    UserConsentService.prototype.getGiveConsentResultLoading = function () {
        return this.store.pipe(select(getProcessLoadingFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the give consent process success flag
     */
    UserConsentService.prototype.getGiveConsentResultSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the give consent process error flag
     */
    UserConsentService.prototype.getGiveConsentResultError = function () {
        return this.store.pipe(select(getProcessErrorFactory(GIVE_CONSENT_PROCESS_ID)));
    };
    /**
     * Resents the give consent process flags
     */
    UserConsentService.prototype.resetGiveConsentProcessState = function () {
        return this.store.dispatch(new UserActions.ResetGiveUserConsentProcess());
    };
    /**
     * Withdraw consent for the given `consentCode`
     * @param consentCode for which to withdraw the consent
     */
    UserConsentService.prototype.withdrawConsent = function (consentCode) {
        var _this = this;
        this.withUserId(function (userId) {
            return _this.store.dispatch(new UserActions.WithdrawUserConsent({
                userId: userId,
                consentCode: consentCode,
            }));
        });
    };
    /**
     * Returns the withdraw consent process loading flag
     */
    UserConsentService.prototype.getWithdrawConsentResultLoading = function () {
        return this.store.pipe(select(getProcessLoadingFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the withdraw consent process success flag
     */
    UserConsentService.prototype.getWithdrawConsentResultSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Returns the withdraw consent process error flag
     */
    UserConsentService.prototype.getWithdrawConsentResultError = function () {
        return this.store.pipe(select(getProcessErrorFactory(WITHDRAW_CONSENT_PROCESS_ID)));
    };
    /**
     * Resets the process flags for withdraw consent
     */
    UserConsentService.prototype.resetWithdrawConsentProcessState = function () {
        return this.store.dispatch(new UserActions.ResetWithdrawUserConsentProcess());
    };
    /**
     * Filters the provided `templateList`' templates by hiding the template IDs specified in `hideTemplateIds`.
     * If the `hideTemplateIds` is empty, the provided `templateList` is returned.
     *
     * @param templateList a list of consent templates to filter
     * @param hideTemplateIds template IDs to hide
     */
    UserConsentService.prototype.filterConsentTemplates = function (templateList, hideTemplateIds) {
        var e_1, _a;
        if (hideTemplateIds === void 0) { hideTemplateIds = []; }
        if (hideTemplateIds.length === 0) {
            return templateList;
        }
        var updatedTemplateList = [];
        try {
            for (var templateList_1 = __values(templateList), templateList_1_1 = templateList_1.next(); !templateList_1_1.done; templateList_1_1 = templateList_1.next()) {
                var template = templateList_1_1.value;
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
    /*
     * Utility method to distinquish user id in a convenient way
     */
    UserConsentService.prototype.withUserId = function (callback) {
        this.authService
            .getOccUserId()
            .pipe(take(1))
            .subscribe(function (userId) { return callback(userId); });
    };
    UserConsentService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    UserConsentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserConsentService_Factory() { return new UserConsentService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserConsentService, providedIn: "root" });
    UserConsentService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserConsentService);
    return UserConsentService;
}());
export { UserConsentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1jb25zZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLEdBQUcsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHN0QsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0saURBQWlELENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLDJCQUEyQixHQUM1QixNQUFNLHFCQUFxQixDQUFDOzs7O0FBSzdCO0lBQ0UsNEJBQ1ksS0FBb0QsRUFDcEQsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOztPQUVHO0lBQ0gseUNBQVksR0FBWjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFBLE1BQU07WUFDcEIsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMs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VSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGtCQUFrQixDQWlROUI7NkJBL1JEO0NBK1JDLEFBalFELElBaVFDO1NBalFZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnNlbnQsIENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRQcm9jZXNzRXJyb3JGYWN0b3J5LFxuICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnksXG4gIGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lELFxuICBTdGF0ZVdpdGhVc2VyLFxuICBXSVRIRFJBV19DT05TRU5UX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckNvbnNlbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbGwgY29uc2VudHMuXG4gICAqL1xuICBsb2FkQ29uc2VudHMoKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJDb25zZW50cyh1c2VySWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgY29uc2VudCB0ZW1wbGF0ZXMuIElmIGBsb2FkSWZNaXNzaW5nYCBwYXJhbWV0ZXIgaXMgc2V0IHRvIGB0cnVlYCwgdGhlIG1ldGhvZCB0cmlnZ2VycyB0aGUgbG9hZCBpZiBjb25zZW50IHRlbXBsYXRlcy5cbiAgICogQHBhcmFtIGxvYWRJZk1pc3NpbmcgaXMgc2V0IHRvIGB0cnVlYCwgdGhlIG1ldGhvZCB3aWxsIGxvYWQgdGVtcGxhdGVzIGlmIHRob3NlIGFyZSBub3QgYWxyZWFkeSBwcmVzZW50LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgKi9cbiAgZ2V0Q29uc2VudHMobG9hZElmTWlzc2luZyA9IGZhbHNlKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PiBsb2FkSWZNaXNzaW5nLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2VudHNWYWx1ZSksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuZ2V0Q29uc2VudHNSZXN1bHRMb2FkaW5nKCksXG4gICAgICAgICAgdGhpcy5nZXRDb25zZW50c1Jlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoKFtfdGVtcGxhdGVzLCBsb2FkaW5nLCBfc3VjY2Vzc10pID0+ICFsb2FkaW5nKSxcbiAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBfbG9hZGluZywgc3VjY2Vzc10pID0+IHtcbiAgICAgICAgICBpZiAoIXRlbXBsYXRlcyB8fCB0ZW1wbGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBhdm9pZCBpbmZpdGUgbG9vcCAtIGlmIHdlJ3ZlIGFscmVhZHkgYXR0ZW1wdGVkIHRvIGxvYWQgdGVtcGxhdGVzIGFuZCB3ZSBnb3QgYW4gZW1wdHkgYXJyYXkgYXMgdGhlIHJlc3BvbnNlXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKFt0ZW1wbGF0ZXMsIF9sb2FkaW5nXSkgPT4gQm9vbGVhbih0ZW1wbGF0ZXMpKSxcbiAgICAgICAgbWFwKChbdGVtcGxhdGVzLCBfbG9hZGluZ10pID0+IHRlbXBsYXRlcylcbiAgICAgICksXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRzVmFsdWUpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29uc2VudHMgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRDb25zZW50c1Jlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2VudHNMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29uc2VudHMgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRDb25zZW50c1Jlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2VudHNTdWNjZXNzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29uc2VudHMgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0Q29uc2VudHNSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zZW50c0Vycm9yKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBwcm9jZXNzaW5nIHN0YXRlIGZvciBjb25zZW50IHJldHJpZXZhbFxuICAgKi9cbiAgcmVzZXRDb25zZW50c1Byb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5SZXNldExvYWRVc2VyQ29uc2VudHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVnaXN0ZXJlZCBjb25zZW50IGZvciB0aGUgZ2l2ZW4gdGVtcGxhdGUgSUQuXG4gICAqXG4gICAqIEFzIGEgc2lkZS1lZmZlY3QsIHRoZSBtZXRob2Qgd2lsbCBjYWxsIGBnZXRDb25zZW50cyh0cnVlKWAgdG8gbG9hZCB0aGUgdGVtcGxhdGVzIGlmIHRob3NlIGFyZSBub3QgcHJlc2VudC5cbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlSWQgYSB0ZW1wbGF0ZSBJRCBieSB3aGljaCB0byBmaWx0ZXIgdGhlIHJlZ2lzdGVyZWQgdGVtcGxhdGVzLlxuICAgKi9cbiAgZ2V0Q29uc2VudCh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnNlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICB0YXAoXyA9PiB0aGlzLmdldENvbnNlbnRzKHRydWUpKSxcbiAgICAgIHN3aXRjaE1hcChfID0+XG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2VudEJ5VGVtcGxhdGVJZCh0ZW1wbGF0ZUlkKSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGZpbHRlcih0ZW1wbGF0ZSA9PiBCb29sZWFuKHRlbXBsYXRlKSksXG4gICAgICBtYXAodGVtcGxhdGUgPT4gdGVtcGxhdGUuY3VycmVudENvbnNlbnQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY29uc2VudCBpcyB0cnV0aHkgYW5kIGlmIGBjb25zZW50V2l0aGRyYXduRGF0ZWAgZG9lc24ndCBleGlzdC5cbiAgICogT3RoZXJ3aXNlLCBgZmFsc2VgIGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBAcGFyYW0gY29uc2VudCB0byBjaGVja1xuICAgKi9cbiAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBCb29sZWFuKGNvbnNlbnQpICYmXG4gICAgICBCb29sZWFuKGNvbnNlbnQuY29uc2VudEdpdmVuRGF0ZSkgJiZcbiAgICAgICFCb29sZWFuKGNvbnNlbnQuY29uc2VudFdpdGhkcmF3bkRhdGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY29uc2VudCBpcyBlaXRoZXIgZmFsc3kgb3IgaWYgYGNvbnNlbnRXaXRoZHJhd25EYXRlYCBpcyBwcmVzZW50LlxuICAgKiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwYXJhbSBjb25zZW50IHRvIGNoZWNrXG4gICAqL1xuICBpc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudDogQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIGlmIChCb29sZWFuKGNvbnNlbnQpKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihjb25zZW50LmNvbnNlbnRXaXRoZHJhd25EYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZSBjb25zZW50IGZvciBzcGVjaWZpZWQgY29uc2VudCB0ZW1wbGF0ZSBJRCBhbmQgdmVyc2lvbi5cbiAgICogQHBhcmFtIGNvbnNlbnRUZW1wbGF0ZUlkIGEgdGVtcGxhdGUgSUQgZm9yIHdoaWNoIHRvIGdpdmUgYSBjb25zZW50XG4gICAqIEBwYXJhbSBjb25zZW50VGVtcGxhdGVWZXJzaW9uIGEgdGVtcGxhdGUgdmVyc2lvbiBmb3Igd2hpY2ggdG8gZ2l2ZSBhIGNvbnNlbnRcbiAgICovXG4gIGdpdmVDb25zZW50KGNvbnNlbnRUZW1wbGF0ZUlkOiBzdHJpbmcsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnQoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjb25zZW50VGVtcGxhdGVJZCxcbiAgICAgICAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0R2l2ZUNvbnNlbnRSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZW50cyB0aGUgZ2l2ZSBjb25zZW50IHByb2Nlc3MgZmxhZ3NcbiAgICovXG4gIHJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0R2l2ZVVzZXJDb25zZW50UHJvY2VzcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaXRoZHJhdyBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYGNvbnNlbnRDb2RlYFxuICAgKiBAcGFyYW0gY29uc2VudENvZGUgZm9yIHdoaWNoIHRvIHdpdGhkcmF3IHRoZSBjb25zZW50XG4gICAqL1xuICB3aXRoZHJhd0NvbnNlbnQoY29uc2VudENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5XaXRoZHJhd1VzZXJDb25zZW50KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY29uc2VudENvZGUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aXRoZHJhdyBjb25zZW50IHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aXRoZHJhdyBjb25zZW50IHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aXRoZHJhdyBjb25zZW50IHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHByb2Nlc3MgZmxhZ3MgZm9yIHdpdGhkcmF3IGNvbnNlbnRcbiAgICovXG4gIHJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLlJlc2V0V2l0aGRyYXdVc2VyQ29uc2VudFByb2Nlc3MoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVycyB0aGUgcHJvdmlkZWQgYHRlbXBsYXRlTGlzdGAnIHRlbXBsYXRlcyBieSBoaWRpbmcgdGhlIHRlbXBsYXRlIElEcyBzcGVjaWZpZWQgaW4gYGhpZGVUZW1wbGF0ZUlkc2AuXG4gICAqIElmIHRoZSBgaGlkZVRlbXBsYXRlSWRzYCBpcyBlbXB0eSwgdGhlIHByb3ZpZGVkIGB0ZW1wbGF0ZUxpc3RgIGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVMaXN0IGEgbGlzdCBvZiBjb25zZW50IHRlbXBsYXRlcyB0byBmaWx0ZXJcbiAgICogQHBhcmFtIGhpZGVUZW1wbGF0ZUlkcyB0ZW1wbGF0ZSBJRHMgdG8gaGlkZVxuICAgKi9cbiAgZmlsdGVyQ29uc2VudFRlbXBsYXRlcyhcbiAgICB0ZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZVtdLFxuICAgIGhpZGVUZW1wbGF0ZUlkczogc3RyaW5nW10gPSBbXVxuICApOiBDb25zZW50VGVtcGxhdGVbXSB7XG4gICAgaWYgKGhpZGVUZW1wbGF0ZUlkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZUxpc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZFRlbXBsYXRlTGlzdDogQ29uc2VudFRlbXBsYXRlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlTGlzdCkge1xuICAgICAgY29uc3Qgc2hvdyA9ICFoaWRlVGVtcGxhdGVJZHMuaW5jbHVkZXModGVtcGxhdGUuaWQpO1xuICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgdXBkYXRlZFRlbXBsYXRlTGlzdC5wdXNoKHRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlZFRlbXBsYXRlTGlzdDtcbiAgfVxuXG4gIC8qXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIGRpc3RpbnF1aXNoIHVzZXIgaWQgaW4gYSBjb252ZW5pZW50IHdheVxuICAgKi9cbiAgcHJpdmF0ZSB3aXRoVXNlcklkKGNhbGxiYWNrOiAodXNlcklkOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHVzZXJJZCA9PiBjYWxsYmFjayh1c2VySWQpKTtcbiAgfVxufVxuIl19