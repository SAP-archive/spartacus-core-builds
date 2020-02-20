import { __decorate, __read, __values } from "tslib";
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
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    UserConsentService.prototype.withUserId = function (callback) {
        if (this.authService) {
            this.authService
                .getOccUserId()
                .pipe(take(1))
                .subscribe(function (userId) { return callback(userId); });
        }
        else {
            // TODO(issue:#5628) Deprecated since 1.3.0
            callback(OCC_USER_ID_CURRENT);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1jb25zZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLEdBQUcsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdEQsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0saURBQWlELENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLDJCQUEyQixHQUM1QixNQUFNLHFCQUFxQixDQUFDOzs7O0FBSzdCO0lBZUUsNEJBQ1ksS0FBb0QsRUFDcEQsV0FBeUI7UUFEekIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWM7SUFDbEMsQ0FBQztJQUVKOztPQUVHO0lBQ0gseUNBQVksR0FBWjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFBLE1BQU07WUFDcEIsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUE3RCxDQUE2RCxDQUM5RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILHdDQUFXLEdBQVgsVUFBWSxhQUFxQjtRQUFqQyxpQkF1QkM7UUF2QlcsOEJBQUEsRUFBQSxxQkFBcUI7UUFDL0IsT0FBTyxHQUFHLENBQ1IsY0FBTSxPQUFBLGFBQWEsRUFBYixDQUFhLEVBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLE1BQU0sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFDdkMsY0FBYyxDQUNaLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUMvQixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FDaEMsRUFDRCxNQUFNLENBQUMsVUFBQyxFQUErQjtnQkFBL0Isa0JBQStCLEVBQTlCLGtCQUFVLEVBQUUsZUFBTyxFQUFFLGdCQUFRO1lBQU0sT0FBQSxDQUFDLE9BQU87UUFBUixDQUFRLENBQUMsRUFDckQsR0FBRyxDQUFDLFVBQUMsRUFBOEI7Z0JBQTlCLGtCQUE4QixFQUE3QixpQkFBUyxFQUFFLGdCQUFRLEVBQUUsZUFBTztZQUNoQyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN4Qyw2R0FBNkc7Z0JBQzdHLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ1osS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQjthQUNGO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLFVBQUMsRUFBcUI7Z0JBQXJCLGtCQUFxQixFQUFwQixpQkFBUyxFQUFFLGdCQUFRO1lBQU0sT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQWxCLENBQWtCLENBQUMsRUFDckQsR0FBRyxDQUFDLFVBQUMsRUFBcUI7Z0JBQXJCLGtCQUFxQixFQUFwQixpQkFBUyxFQUFFLGdCQUFRO1lBQU0sT0FBQSxTQUFTO1FBQVQsQ0FBUyxDQUFDLENBQzFDLEVBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxREFBd0IsR0FBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7T0FFRztJQUNILHFEQUF3QixHQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsbURBQXNCLEdBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzREFBeUIsR0FBekI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHVDQUFVLEdBQVYsVUFBVyxVQUFrQjtRQUE3QixpQkFZQztRQVhDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUF0QixDQUFzQixDQUFDLEVBQ2hDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDVCxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLE1BQU0sQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDMUQ7UUFGRCxDQUVDLENBQ0YsRUFDRCxNQUFNLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQWpCLENBQWlCLENBQUMsRUFDckMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLGNBQWMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUN6QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMkNBQWMsR0FBZCxVQUFlLE9BQWdCO1FBQzdCLE9BQU8sQ0FDTCxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7WUFDakMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCwrQ0FBa0IsR0FBbEIsVUFBbUIsT0FBZ0I7UUFDakMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsd0NBQVcsR0FBWCxVQUFZLGlCQUF5QixFQUFFLHNCQUE4QjtRQUFyRSxpQkFVQztRQVRDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQSxNQUFNO1lBQ3BCLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQztnQkFDOUIsTUFBTSxRQUFBO2dCQUNOLGlCQUFpQixtQkFBQTtnQkFDakIsc0JBQXNCLHdCQUFBO2FBQ3ZCLENBQUMsQ0FDSDtRQU5ELENBTUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0RBQTJCLEdBQTNCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FDMUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHdEQUEyQixHQUEzQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxzREFBeUIsR0FBekI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gseURBQTRCLEdBQTVCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRDQUFlLEdBQWYsVUFBZ0IsV0FBbUI7UUFBbkMsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUEsTUFBTTtZQUNwQixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbEMsTUFBTSxRQUFBO2dCQUNOLFdBQVcsYUFBQTthQUNaLENBQUMsQ0FDSDtRQUxELENBS0MsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsNERBQStCLEdBQS9CO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILDREQUErQixHQUEvQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQzlELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCwwREFBNkIsR0FBN0I7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUM1RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsNkRBQWdDLEdBQWhDO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDeEIsSUFBSSxXQUFXLENBQUMsK0JBQStCLEVBQUUsQ0FDbEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxtREFBc0IsR0FBdEIsVUFDRSxZQUErQixFQUMvQixlQUE4Qjs7UUFBOUIsZ0NBQUEsRUFBQSxvQkFBOEI7UUFFOUIsSUFBSSxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQyxPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUVELElBQU0sbUJBQW1CLEdBQXNCLEVBQUUsQ0FBQzs7WUFDbEQsS0FBdUIsSUFBQSxpQkFBQSxTQUFBLFlBQVksQ0FBQSwwQ0FBQSxvRUFBRTtnQkFBaEMsSUFBTSxRQUFRLHlCQUFBO2dCQUNqQixJQUFNLElBQUksR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLElBQUksRUFBRTtvQkFDUixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3BDO2FBQ0Y7Ozs7Ozs7OztRQUVELE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNLLHVDQUFVLEdBQWxCLFVBQW1CLFFBQWtDO1FBQ25ELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVztpQkFDYixZQUFZLEVBQUU7aUJBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDYixTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsMkNBQTJDO1lBQzNDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Z0JBcFFrQixLQUFLO2dCQUNFLFdBQVc7OztJQWpCMUIsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQkFBa0IsQ0FxUjlCOzZCQXBURDtDQW9UQyxBQXJSRCxJQXFSQztTQXJSWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDb25zZW50LCBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRQcm9jZXNzRXJyb3JGYWN0b3J5LFxuICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnksXG4gIGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lELFxuICBTdGF0ZVdpdGhVc2VyLFxuICBXSVRIRFJBV19DT05TRU5UX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckNvbnNlbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqICBVc2UgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICogIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgaW5zdGVhZFxuICAgKlxuICAgKiAgVE9ETyhpc3N1ZTojNTYyOCkgRGVwcmVjYXRlZCBzaW5jZSAxLjMuMFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pik7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZT86IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCBjb25zZW50cy5cbiAgICovXG4gIGxvYWRDb25zZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQodXNlcklkID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzKHVzZXJJZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBjb25zZW50IHRlbXBsYXRlcy4gSWYgYGxvYWRJZk1pc3NpbmdgIHBhcmFtZXRlciBpcyBzZXQgdG8gYHRydWVgLCB0aGUgbWV0aG9kIHRyaWdnZXJzIHRoZSBsb2FkIGlmIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgKiBAcGFyYW0gbG9hZElmTWlzc2luZyBpcyBzZXQgdG8gYHRydWVgLCB0aGUgbWV0aG9kIHdpbGwgbG9hZCB0ZW1wbGF0ZXMgaWYgdGhvc2UgYXJlIG5vdCBhbHJlYWR5IHByZXNlbnQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAqL1xuICBnZXRDb25zZW50cyhsb2FkSWZNaXNzaW5nID0gZmFsc2UpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgcmV0dXJuIGlpZihcbiAgICAgICgpID0+IGxvYWRJZk1pc3NpbmcsXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zZW50c1ZhbHVlKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5nZXRDb25zZW50c1Jlc3VsdExvYWRpbmcoKSxcbiAgICAgICAgICB0aGlzLmdldENvbnNlbnRzUmVzdWx0U3VjY2VzcygpXG4gICAgICAgICksXG4gICAgICAgIGZpbHRlcigoW190ZW1wbGF0ZXMsIGxvYWRpbmcsIF9zdWNjZXNzXSkgPT4gIWxvYWRpbmcpLFxuICAgICAgICB0YXAoKFt0ZW1wbGF0ZXMsIF9sb2FkaW5nLCBzdWNjZXNzXSkgPT4ge1xuICAgICAgICAgIGlmICghdGVtcGxhdGVzIHx8IHRlbXBsYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGF2b2lkIGluZml0ZSBsb29wIC0gaWYgd2UndmUgYWxyZWFkeSBhdHRlbXB0ZWQgdG8gbG9hZCB0ZW1wbGF0ZXMgYW5kIHdlIGdvdCBhbiBlbXB0eSBhcnJheSBhcyB0aGUgcmVzcG9uc2VcbiAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLmxvYWRDb25zZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW3RlbXBsYXRlcywgX2xvYWRpbmddKSA9PiBCb29sZWFuKHRlbXBsYXRlcykpLFxuICAgICAgICBtYXAoKFt0ZW1wbGF0ZXMsIF9sb2FkaW5nXSkgPT4gdGVtcGxhdGVzKVxuICAgICAgKSxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2VudHNWYWx1ZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zZW50cyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldENvbnNlbnRzUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zZW50c0xvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zZW50cyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldENvbnNlbnRzUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zZW50c1N1Y2Nlc3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zZW50cyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRDb25zZW50c1Jlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNlbnRzRXJyb3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHByb2Nlc3Npbmcgc3RhdGUgZm9yIGNvbnNlbnQgcmV0cmlldmFsXG4gICAqL1xuICByZXNldENvbnNlbnRzUHJvY2Vzc1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0TG9hZFVzZXJDb25zZW50cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZWdpc3RlcmVkIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiB0ZW1wbGF0ZSBJRC5cbiAgICpcbiAgICogQXMgYSBzaWRlLWVmZmVjdCwgdGhlIG1ldGhvZCB3aWxsIGNhbGwgYGdldENvbnNlbnRzKHRydWUpYCB0byBsb2FkIHRoZSB0ZW1wbGF0ZXMgaWYgdGhvc2UgYXJlIG5vdCBwcmVzZW50LlxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBhIHRlbXBsYXRlIElEIGJ5IHdoaWNoIHRvIGZpbHRlciB0aGUgcmVnaXN0ZXJlZCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRDb25zZW50KHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudD4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHRhcChfID0+IHRoaXMuZ2V0Q29uc2VudHModHJ1ZSkpLFxuICAgICAgc3dpdGNoTWFwKF8gPT5cbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zZW50QnlUZW1wbGF0ZUlkKHRlbXBsYXRlSWQpKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgZmlsdGVyKHRlbXBsYXRlID0+IEJvb2xlYW4odGVtcGxhdGUpKSxcbiAgICAgIG1hcCh0ZW1wbGF0ZSA9PiB0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IGlzIHRydXRoeSBhbmQgaWYgYGNvbnNlbnRXaXRoZHJhd25EYXRlYCBkb2Vzbid0IGV4aXN0LlxuICAgKiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwYXJhbSBjb25zZW50IHRvIGNoZWNrXG4gICAqL1xuICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBDb25zZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4oY29uc2VudCkgJiZcbiAgICAgIEJvb2xlYW4oY29uc2VudC5jb25zZW50R2l2ZW5EYXRlKSAmJlxuICAgICAgIUJvb2xlYW4oY29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IGlzIGVpdGhlciBmYWxzeSBvciBpZiBgY29uc2VudFdpdGhkcmF3bkRhdGVgIGlzIHByZXNlbnQuXG4gICAqIE90aGVyd2lzZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIGNvbnNlbnQgdG8gY2hlY2tcbiAgICovXG4gIGlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50OiBDb25zZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKEJvb2xlYW4oY29uc2VudCkpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGNvbnNlbnQuY29uc2VudFdpdGhkcmF3bkRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlIGNvbnNlbnQgZm9yIHNwZWNpZmllZCBjb25zZW50IHRlbXBsYXRlIElEIGFuZCB2ZXJzaW9uLlxuICAgKiBAcGFyYW0gY29uc2VudFRlbXBsYXRlSWQgYSB0ZW1wbGF0ZSBJRCBmb3Igd2hpY2ggdG8gZ2l2ZSBhIGNvbnNlbnRcbiAgICogQHBhcmFtIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24gYSB0ZW1wbGF0ZSB2ZXJzaW9uIGZvciB3aGljaCB0byBnaXZlIGEgY29uc2VudFxuICAgKi9cbiAgZ2l2ZUNvbnNlbnQoY29uc2VudFRlbXBsYXRlSWQ6IHN0cmluZywgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudCh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZUlkLFxuICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24sXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBnaXZlIGNvbnNlbnQgcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldEdpdmVDb25zZW50UmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBnaXZlIGNvbnNlbnQgcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldEdpdmVDb25zZW50UmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBnaXZlIGNvbnNlbnQgcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRHaXZlQ29uc2VudFJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNlbnRzIHRoZSBnaXZlIGNvbnNlbnQgcHJvY2VzcyBmbGFnc1xuICAgKi9cbiAgcmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRHaXZlVXNlckNvbnNlbnRQcm9jZXNzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpdGhkcmF3IGNvbnNlbnQgZm9yIHRoZSBnaXZlbiBgY29uc2VudENvZGVgXG4gICAqIEBwYXJhbSBjb25zZW50Q29kZSBmb3Igd2hpY2ggdG8gd2l0aGRyYXcgdGhlIGNvbnNlbnRcbiAgICovXG4gIHdpdGhkcmF3Q29uc2VudChjb25zZW50Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLldpdGhkcmF3VXNlckNvbnNlbnQoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjb25zZW50Q29kZSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFdpdGhkcmF3Q29uc2VudFJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpdGhkcmF3IGNvbnNlbnQgcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRXaXRoZHJhd0NvbnNlbnRSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgcHJvY2VzcyBmbGFncyBmb3Igd2l0aGRyYXcgY29uc2VudFxuICAgKi9cbiAgcmVzZXRXaXRoZHJhd0NvbnNlbnRQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuUmVzZXRXaXRoZHJhd1VzZXJDb25zZW50UHJvY2VzcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHRoZSBwcm92aWRlZCBgdGVtcGxhdGVMaXN0YCcgdGVtcGxhdGVzIGJ5IGhpZGluZyB0aGUgdGVtcGxhdGUgSURzIHNwZWNpZmllZCBpbiBgaGlkZVRlbXBsYXRlSWRzYC5cbiAgICogSWYgdGhlIGBoaWRlVGVtcGxhdGVJZHNgIGlzIGVtcHR5LCB0aGUgcHJvdmlkZWQgYHRlbXBsYXRlTGlzdGAgaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUxpc3QgYSBsaXN0IG9mIGNvbnNlbnQgdGVtcGxhdGVzIHRvIGZpbHRlclxuICAgKiBAcGFyYW0gaGlkZVRlbXBsYXRlSWRzIHRlbXBsYXRlIElEcyB0byBoaWRlXG4gICAqL1xuICBmaWx0ZXJDb25zZW50VGVtcGxhdGVzKFxuICAgIHRlbXBsYXRlTGlzdDogQ29uc2VudFRlbXBsYXRlW10sXG4gICAgaGlkZVRlbXBsYXRlSWRzOiBzdHJpbmdbXSA9IFtdXG4gICk6IENvbnNlbnRUZW1wbGF0ZVtdIHtcbiAgICBpZiAoaGlkZVRlbXBsYXRlSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRlbXBsYXRlTGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkVGVtcGxhdGVMaXN0OiBDb25zZW50VGVtcGxhdGVbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVMaXN0KSB7XG4gICAgICBjb25zdCBzaG93ID0gIWhpZGVUZW1wbGF0ZUlkcy5pbmNsdWRlcyh0ZW1wbGF0ZS5pZCk7XG4gICAgICBpZiAoc2hvdykge1xuICAgICAgICB1cGRhdGVkVGVtcGxhdGVMaXN0LnB1c2godGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVkVGVtcGxhdGVMaXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIGRpc3RpbnF1aXNoIHByZSAvIHBvc3QgMS4zLjAgaW4gYSBjb252ZW5pZW50IHdheS5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgd2l0aFVzZXJJZChjYWxsYmFjazogKHVzZXJJZDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UpIHtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUodXNlcklkID0+IGNhbGxiYWNrKHVzZXJJZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPKGlzc3VlOiM1NjI4KSBEZXByZWNhdGVkIHNpbmNlIDEuMy4wXG4gICAgICBjYWxsYmFjayhPQ0NfVVNFUl9JRF9DVVJSRU5UKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==