/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions, StateLoaderActions, } from '../../../state/index';
import { GIVE_CONSENT_PROCESS_ID, USER_CONSENTS, WITHDRAW_CONSENT_PROCESS_ID, } from '../user-state';
/** @type {?} */
export var LOAD_USER_CONSENTS = '[User] Load User Consents';
/** @type {?} */
export var LOAD_USER_CONSENTS_SUCCESS = '[User] Load User Consents Success';
/** @type {?} */
export var LOAD_USER_CONSENTS_FAIL = '[User] Load User Consents Fail';
/** @type {?} */
export var RESET_LOAD_USER_CONSENTS = '[User] Reset Load User Consents';
/** @type {?} */
export var GIVE_USER_CONSENT = '[User] Give User Consent';
/** @type {?} */
export var GIVE_USER_CONSENT_FAIL = '[User] Give User Consent Fail';
/** @type {?} */
export var GIVE_USER_CONSENT_SUCCESS = '[User] Give User Consent Success';
/** @type {?} */
export var RESET_GIVE_USER_CONSENT_PROCESS = '[User] Reset Give User Consent Process';
/** @type {?} */
export var WITHDRAW_USER_CONSENT = '[User] Withdraw User Consent';
/** @type {?} */
export var WITHDRAW_USER_CONSENT_FAIL = '[User] Withdraw User Consent Fail';
/** @type {?} */
export var WITHDRAW_USER_CONSENT_SUCCESS = '[User] Withdraw User Consent Success';
/** @type {?} */
export var RESET_WITHDRAW_USER_CONSENT_PROCESS = '[User] Reset Withdraw User Consent Process';
var LoadUserConsents = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserConsents, _super);
    function LoadUserConsents(payload) {
        var _this = _super.call(this, USER_CONSENTS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_CONSENTS;
        return _this;
    }
    return LoadUserConsents;
}(StateLoaderActions.LoaderLoadAction));
export { LoadUserConsents };
if (false) {
    /** @type {?} */
    LoadUserConsents.prototype.type;
    /** @type {?} */
    LoadUserConsents.prototype.payload;
}
var LoadUserConsentsFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserConsentsFail, _super);
    function LoadUserConsentsFail(payload) {
        var _this = _super.call(this, USER_CONSENTS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_CONSENTS_FAIL;
        return _this;
    }
    return LoadUserConsentsFail;
}(StateLoaderActions.LoaderFailAction));
export { LoadUserConsentsFail };
if (false) {
    /** @type {?} */
    LoadUserConsentsFail.prototype.type;
    /** @type {?} */
    LoadUserConsentsFail.prototype.payload;
}
var LoadUserConsentsSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserConsentsSuccess, _super);
    function LoadUserConsentsSuccess(payload) {
        var _this = _super.call(this, USER_CONSENTS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_CONSENTS_SUCCESS;
        return _this;
    }
    return LoadUserConsentsSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { LoadUserConsentsSuccess };
if (false) {
    /** @type {?} */
    LoadUserConsentsSuccess.prototype.type;
    /** @type {?} */
    LoadUserConsentsSuccess.prototype.payload;
}
var ResetLoadUserConsents = /** @class */ (function (_super) {
    tslib_1.__extends(ResetLoadUserConsents, _super);
    function ResetLoadUserConsents() {
        var _this = _super.call(this, USER_CONSENTS) || this;
        _this.type = RESET_LOAD_USER_CONSENTS;
        return _this;
    }
    return ResetLoadUserConsents;
}(StateLoaderActions.LoaderResetAction));
export { ResetLoadUserConsents };
if (false) {
    /** @type {?} */
    ResetLoadUserConsents.prototype.type;
}
var GiveUserConsent = /** @class */ (function (_super) {
    tslib_1.__extends(GiveUserConsent, _super);
    function GiveUserConsent(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = GIVE_USER_CONSENT;
        return _this;
    }
    return GiveUserConsent;
}(StateEntityLoaderActions.EntityLoadAction));
export { GiveUserConsent };
if (false) {
    /** @type {?} */
    GiveUserConsent.prototype.type;
    /** @type {?} */
    GiveUserConsent.prototype.payload;
}
var GiveUserConsentFail = /** @class */ (function (_super) {
    tslib_1.__extends(GiveUserConsentFail, _super);
    function GiveUserConsentFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID, payload) || this;
        _this.type = GIVE_USER_CONSENT_FAIL;
        return _this;
    }
    return GiveUserConsentFail;
}(StateEntityLoaderActions.EntityFailAction));
export { GiveUserConsentFail };
if (false) {
    /** @type {?} */
    GiveUserConsentFail.prototype.type;
}
var GiveUserConsentSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(GiveUserConsentSuccess, _super);
    function GiveUserConsentSuccess(consentTemplate) {
        var _this = _super.call(this, PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID) || this;
        _this.consentTemplate = consentTemplate;
        _this.type = GIVE_USER_CONSENT_SUCCESS;
        return _this;
    }
    return GiveUserConsentSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { GiveUserConsentSuccess };
if (false) {
    /** @type {?} */
    GiveUserConsentSuccess.prototype.type;
    /** @type {?} */
    GiveUserConsentSuccess.prototype.consentTemplate;
}
var ResetGiveUserConsentProcess = /** @class */ (function (_super) {
    tslib_1.__extends(ResetGiveUserConsentProcess, _super);
    function ResetGiveUserConsentProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID) || this;
        _this.type = RESET_GIVE_USER_CONSENT_PROCESS;
        return _this;
    }
    return ResetGiveUserConsentProcess;
}(StateEntityLoaderActions.EntityResetAction));
export { ResetGiveUserConsentProcess };
if (false) {
    /** @type {?} */
    ResetGiveUserConsentProcess.prototype.type;
}
var WithdrawUserConsent = /** @class */ (function (_super) {
    tslib_1.__extends(WithdrawUserConsent, _super);
    function WithdrawUserConsent(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = WITHDRAW_USER_CONSENT;
        return _this;
    }
    return WithdrawUserConsent;
}(StateEntityLoaderActions.EntityLoadAction));
export { WithdrawUserConsent };
if (false) {
    /** @type {?} */
    WithdrawUserConsent.prototype.type;
    /** @type {?} */
    WithdrawUserConsent.prototype.payload;
}
var WithdrawUserConsentFail = /** @class */ (function (_super) {
    tslib_1.__extends(WithdrawUserConsentFail, _super);
    function WithdrawUserConsentFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID, payload) || this;
        _this.type = WITHDRAW_USER_CONSENT_FAIL;
        return _this;
    }
    return WithdrawUserConsentFail;
}(StateEntityLoaderActions.EntityFailAction));
export { WithdrawUserConsentFail };
if (false) {
    /** @type {?} */
    WithdrawUserConsentFail.prototype.type;
}
var WithdrawUserConsentSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(WithdrawUserConsentSuccess, _super);
    function WithdrawUserConsentSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID) || this;
        _this.type = WITHDRAW_USER_CONSENT_SUCCESS;
        return _this;
    }
    return WithdrawUserConsentSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { WithdrawUserConsentSuccess };
if (false) {
    /** @type {?} */
    WithdrawUserConsentSuccess.prototype.type;
}
var ResetWithdrawUserConsentProcess = /** @class */ (function (_super) {
    tslib_1.__extends(ResetWithdrawUserConsentProcess, _super);
    function ResetWithdrawUserConsentProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID) || this;
        _this.type = RESET_WITHDRAW_USER_CONSENT_PROCESS;
        return _this;
    }
    return ResetWithdrawUserConsentProcess;
}(StateEntityLoaderActions.EntityResetAction));
export { ResetWithdrawUserConsentProcess };
if (false) {
    /** @type {?} */
    ResetWithdrawUserConsentProcess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItY29uc2VudHMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsa0JBQWtCLEdBQ25CLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixhQUFhLEVBQ2IsMkJBQTJCLEdBQzVCLE1BQU0sZUFBZSxDQUFDOztBQUV2QixNQUFNLEtBQU8sa0JBQWtCLEdBQUcsMkJBQTJCOztBQUM3RCxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsbUNBQW1DOztBQUM3RSxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsZ0NBQWdDOztBQUN2RSxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUV6RSxNQUFNLEtBQU8saUJBQWlCLEdBQUcsMEJBQTBCOztBQUMzRCxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsK0JBQStCOztBQUNyRSxNQUFNLEtBQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUMzRSxNQUFNLEtBQU8sK0JBQStCLEdBQzFDLHdDQUF3Qzs7QUFFMUMsTUFBTSxLQUFPLHFCQUFxQixHQUFHLDhCQUE4Qjs7QUFDbkUsTUFBTSxLQUFPLDBCQUEwQixHQUFHLG1DQUFtQzs7QUFDN0UsTUFBTSxLQUFPLDZCQUE2QixHQUN4QyxzQ0FBc0M7O0FBQ3hDLE1BQU0sS0FBTyxtQ0FBbUMsR0FDOUMsNENBQTRDO0FBRTlDO0lBQXNDLDRDQUFtQztJQUV2RSwwQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLGFBQWEsQ0FBQyxTQUNyQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyxrQkFBa0IsQ0FBQzs7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Q0FHQzs7QUFNTDtJQUE2QyxtREFBeUM7SUFFcEYsaUNBQVksT0FBWTtRQUF4QixZQUNFLGtCQUFNLGVBQWUsRUFBRSwyQkFBMkIsRUFBRSxPQUFPLENBQUMsU0FDN0Q7UUFIUSxVQUFJLEdBQUcsMEJBQTBCLENBQUM7O0lBRzNDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFMRCxDQUE2Qyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLckY7Ozs7SUFKQyx1Q0FBMkM7O0FBTTdDO0lBQWdELHNEQUE0QztJQUUxRjtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDJCQUEyQixDQUFDLFNBQ3BEO1FBSFEsVUFBSSxHQUFHLDZCQUE2QixDQUFDOztJQUc5QyxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBZ0Qsd0JBQXdCLENBQUMsbUJBQW1CLEdBSzNGOzs7O0lBSkMsMENBQThDOztBQU1oRDtJQUFxRCwyREFBMEM7SUFFN0Y7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSwyQkFBMkIsQ0FBQyxTQUNwRDtRQUhRLFVBQUksR0FBRyxtQ0FBbUMsQ0FBQzs7SUFHcEQsQ0FBQztJQUNILHNDQUFDO0FBQUQsQ0FBQyxBQUxELENBQXFELHdCQUF3QixDQUFDLGlCQUFpQixHQUs5Rjs7OztJQUpDLCtDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucyxcbiAgU3RhdGVMb2FkZXJBY3Rpb25zLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQge1xuICBHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCxcbiAgVVNFUl9DT05TRU5UUyxcbiAgV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lELFxufSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9DT05TRU5UUyA9ICdbVXNlcl0gTG9hZCBVc2VyIENvbnNlbnRzJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQ09OU0VOVFNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBVc2VyIENvbnNlbnRzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9DT05TRU5UU19GQUlMID0gJ1tVc2VyXSBMb2FkIFVzZXIgQ29uc2VudHMgRmFpbCc7XG5leHBvcnQgY29uc3QgUkVTRVRfTE9BRF9VU0VSX0NPTlNFTlRTID0gJ1tVc2VyXSBSZXNldCBMb2FkIFVzZXIgQ29uc2VudHMnO1xuXG5leHBvcnQgY29uc3QgR0lWRV9VU0VSX0NPTlNFTlQgPSAnW1VzZXJdIEdpdmUgVXNlciBDb25zZW50JztcbmV4cG9ydCBjb25zdCBHSVZFX1VTRVJfQ09OU0VOVF9GQUlMID0gJ1tVc2VyXSBHaXZlIFVzZXIgQ29uc2VudCBGYWlsJztcbmV4cG9ydCBjb25zdCBHSVZFX1VTRVJfQ09OU0VOVF9TVUNDRVNTID0gJ1tVc2VyXSBHaXZlIFVzZXIgQ29uc2VudCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9HSVZFX1VTRVJfQ09OU0VOVF9QUk9DRVNTID1cbiAgJ1tVc2VyXSBSZXNldCBHaXZlIFVzZXIgQ29uc2VudCBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IFdJVEhEUkFXX1VTRVJfQ09OU0VOVCA9ICdbVXNlcl0gV2l0aGRyYXcgVXNlciBDb25zZW50JztcbmV4cG9ydCBjb25zdCBXSVRIRFJBV19VU0VSX0NPTlNFTlRfRkFJTCA9ICdbVXNlcl0gV2l0aGRyYXcgVXNlciBDb25zZW50IEZhaWwnO1xuZXhwb3J0IGNvbnN0IFdJVEhEUkFXX1VTRVJfQ09OU0VOVF9TVUNDRVNTID1cbiAgJ1tVc2VyXSBXaXRoZHJhdyBVc2VyIENvbnNlbnQgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfV0lUSERSQVdfVVNFUl9DT05TRU5UX1BST0NFU1MgPVxuICAnW1VzZXJdIFJlc2V0IFdpdGhkcmF3IFVzZXIgQ29uc2VudCBQcm9jZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyQ29uc2VudHMgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfQ09OU0VOVFM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihVU0VSX0NPTlNFTlRTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJDb25zZW50c0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfQ09OU0VOVFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQ09OU0VOVFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlckNvbnNlbnRzU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9DT05TRU5UU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uc2VudFRlbXBsYXRlW10pIHtcbiAgICBzdXBlcihVU0VSX0NPTlNFTlRTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRMb2FkVXNlckNvbnNlbnRzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0xPQURfVVNFUl9DT05TRU5UUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoVVNFUl9DT05TRU5UUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdpdmVVc2VyQ29uc2VudCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEdJVkVfVVNFUl9DT05TRU5UO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjb25zZW50VGVtcGxhdGVJZDogc3RyaW5nO1xuICAgICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogbnVtYmVyO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdpdmVVc2VyQ29uc2VudEZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHSVZFX1VTRVJfQ09OU0VOVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2l2ZVVzZXJDb25zZW50U3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEdJVkVfVVNFUl9DT05TRU5UX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25zZW50VGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldEdpdmVVc2VyQ29uc2VudFByb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfR0lWRV9VU0VSX0NPTlNFTlRfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpdGhkcmF3VXNlckNvbnNlbnQgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBXSVRIRFJBV19VU0VSX0NPTlNFTlQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNvbnNlbnRDb2RlOiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpdGhkcmF3VXNlckNvbnNlbnRGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gV0lUSERSQVdfVVNFUl9DT05TRU5UX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2l0aGRyYXdVc2VyQ29uc2VudFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBXSVRIRFJBV19VU0VSX0NPTlNFTlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBXSVRIRFJBV19DT05TRU5UX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFdpdGhkcmF3VXNlckNvbnNlbnRQcm9jZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1dJVEhEUkFXX1VTRVJfQ09OU0VOVF9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVXNlckNvbnNlbnRzQWN0aW9uID1cbiAgfCBMb2FkVXNlckNvbnNlbnRzXG4gIHwgTG9hZFVzZXJDb25zZW50c0ZhaWxcbiAgfCBMb2FkVXNlckNvbnNlbnRzU3VjY2Vzc1xuICB8IFJlc2V0TG9hZFVzZXJDb25zZW50c1xuICB8IEdpdmVVc2VyQ29uc2VudFxuICB8IEdpdmVVc2VyQ29uc2VudEZhaWxcbiAgfCBHaXZlVXNlckNvbnNlbnRTdWNjZXNzXG4gIHwgUmVzZXRHaXZlVXNlckNvbnNlbnRQcm9jZXNzXG4gIHwgV2l0aGRyYXdVc2VyQ29uc2VudFxuICB8IFdpdGhkcmF3VXNlckNvbnNlbnRGYWlsXG4gIHwgV2l0aGRyYXdVc2VyQ29uc2VudFN1Y2Nlc3NcbiAgfCBSZXNldFdpdGhkcmF3VXNlckNvbnNlbnRQcm9jZXNzO1xuIl19