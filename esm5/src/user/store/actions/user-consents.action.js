/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { LoaderFailAction, LoaderLoadAction, LoaderResetAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
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
}(LoaderLoadAction));
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
}(LoaderFailAction));
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
}(LoaderSuccessAction));
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
}(LoaderResetAction));
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
}(EntityLoadAction));
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
}(EntityFailAction));
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
}(EntitySuccessAction));
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
}(EntityResetAction));
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
}(EntityLoadAction));
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
}(EntityFailAction));
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
}(EntitySuccessAction));
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
}(EntityResetAction));
export { ResetWithdrawUserConsentProcess };
if (false) {
    /** @type {?} */
    ResetWithdrawUserConsentProcess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItY29uc2VudHMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsbUJBQW1CLEdBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixhQUFhLEVBQ2IsMkJBQTJCLEdBQzVCLE1BQU0sZUFBZSxDQUFDOztBQUd2QixNQUFNLEtBQU8sa0JBQWtCLEdBQUcsMkJBQTJCOztBQUM3RCxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsbUNBQW1DOztBQUM3RSxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsZ0NBQWdDOztBQUN2RSxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUV6RSxNQUFNLEtBQU8saUJBQWlCLEdBQUcsMEJBQTBCOztBQUMzRCxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsK0JBQStCOztBQUNyRSxNQUFNLEtBQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUMzRSxNQUFNLEtBQU8sK0JBQStCLEdBQzFDLHdDQUF3Qzs7QUFFMUMsTUFBTSxLQUFPLHFCQUFxQixHQUFHLDhCQUE4Qjs7QUFDbkUsTUFBTSxLQUFPLDBCQUEwQixHQUFHLG1DQUFtQzs7QUFDN0UsTUFBTSxLQUFPLDZCQUE2QixHQUN4QyxzQ0FBc0M7O0FBQ3hDLE1BQU0sS0FBTyxtQ0FBbUMsR0FDOUMsNENBQTRDO0FBRTlDO0lBQXNDLDRD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QyxzQ0FHQzs7QUFNTDtJQUE2QyxtREFBZ0I7SUFFM0QsaUNBQVksT0FBWTtRQUF4QixZQUNFLGtCQUFNLGVBQWUsRUFBRSwyQkFBMkIsRUFBRSxPQUFPLENBQUMsU0FDN0Q7UUFIUSxVQUFJLEdBQUcsMEJBQTBCLENBQUM7O0lBRzNDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFMRCxDQUE2QyxnQkFBZ0IsR0FLNUQ7Ozs7SUFKQyx1Q0FBMkM7O0FBTTdDO0lBQWdELHNEQUFtQjtJQUVqRTtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDJCQUEyQixDQUFDLFNBQ3BEO1FBSFEsVUFBSSxHQUFHLDZCQUE2QixDQUFDOztJQUc5QyxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBZ0QsbUJBQW1CLEdBS2xFOzs7O0lBSkMsMENBQThDOztBQU1oRDtJQUFxRCwyREFBaUI7SUFFcEU7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSwyQkFBMkIsQ0FBQyxTQUNwRDtRQUhRLFVBQUksR0FBRyxtQ0FBbUMsQ0FBQzs7SUFHcEQsQ0FBQztJQUNILHNDQUFDO0FBQUQsQ0FBQyxBQUxELENBQXFELGlCQUFpQixHQUtyRTs7OztJQUpDLCtDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlSZXNldEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQge1xuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJSZXNldEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQsXG4gIFVTRVJfQ09OU0VOVFMsXG4gIFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9DT05TRU5UUyA9ICdbVXNlcl0gTG9hZCBVc2VyIENvbnNlbnRzJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQ09OU0VOVFNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBVc2VyIENvbnNlbnRzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9DT05TRU5UU19GQUlMID0gJ1tVc2VyXSBMb2FkIFVzZXIgQ29uc2VudHMgRmFpbCc7XG5leHBvcnQgY29uc3QgUkVTRVRfTE9BRF9VU0VSX0NPTlNFTlRTID0gJ1tVc2VyXSBSZXNldCBMb2FkIFVzZXIgQ29uc2VudHMnO1xuXG5leHBvcnQgY29uc3QgR0lWRV9VU0VSX0NPTlNFTlQgPSAnW1VzZXJdIEdpdmUgVXNlciBDb25zZW50JztcbmV4cG9ydCBjb25zdCBHSVZFX1VTRVJfQ09OU0VOVF9GQUlMID0gJ1tVc2VyXSBHaXZlIFVzZXIgQ29uc2VudCBGYWlsJztcbmV4cG9ydCBjb25zdCBHSVZFX1VTRVJfQ09OU0VOVF9TVUNDRVNTID0gJ1tVc2VyXSBHaXZlIFVzZXIgQ29uc2VudCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9HSVZFX1VTRVJfQ09OU0VOVF9QUk9DRVNTID1cbiAgJ1tVc2VyXSBSZXNldCBHaXZlIFVzZXIgQ29uc2VudCBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IFdJVEhEUkFXX1VTRVJfQ09OU0VOVCA9ICdbVXNlcl0gV2l0aGRyYXcgVXNlciBDb25zZW50JztcbmV4cG9ydCBjb25zdCBXSVRIRFJBV19VU0VSX0NPTlNFTlRfRkFJTCA9ICdbVXNlcl0gV2l0aGRyYXcgVXNlciBDb25zZW50IEZhaWwnO1xuZXhwb3J0IGNvbnN0IFdJVEhEUkFXX1VTRVJfQ09OU0VOVF9TVUNDRVNTID1cbiAgJ1tVc2VyXSBXaXRoZHJhdyBVc2VyIENvbnNlbnQgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfV0lUSERSQVdfVVNFUl9DT05TRU5UX1BST0NFU1MgPVxuICAnW1VzZXJdIFJlc2V0IFdpdGhkcmF3IFVzZXIgQ29uc2VudCBQcm9jZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyQ29uc2VudHMgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9DT05TRU5UUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFVTRVJfQ09OU0VOVFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlckNvbnNlbnRzRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX0NPTlNFTlRTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0NPTlNFTlRTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJDb25zZW50c1N1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9DT05TRU5UU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uc2VudFRlbXBsYXRlW10pIHtcbiAgICBzdXBlcihVU0VSX0NPTlNFTlRTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRMb2FkVXNlckNvbnNlbnRzIGV4dGVuZHMgTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfTE9BRF9VU0VSX0NPTlNFTlRTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihVU0VSX0NPTlNFTlRTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2l2ZVVzZXJDb25zZW50IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHSVZFX1VTRVJfQ09OU0VOVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY29uc2VudFRlbXBsYXRlSWQ6IHN0cmluZztcbiAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IG51bWJlcjtcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHaXZlVXNlckNvbnNlbnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHSVZFX1VTRVJfQ09OU0VOVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2l2ZVVzZXJDb25zZW50U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0lWRV9VU0VSX0NPTlNFTlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnNlbnRUZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0R2l2ZVVzZXJDb25zZW50UHJvY2VzcyBleHRlbmRzIEVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0dJVkVfVVNFUl9DT05TRU5UX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaXRoZHJhd1VzZXJDb25zZW50IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBXSVRIRFJBV19VU0VSX0NPTlNFTlQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNvbnNlbnRDb2RlOiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpdGhkcmF3VXNlckNvbnNlbnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBXSVRIRFJBV19VU0VSX0NPTlNFTlRfRkFJTDtcbiAgY29uc3RydWN0b3IocGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBXSVRIRFJBV19DT05TRU5UX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaXRoZHJhd1VzZXJDb25zZW50U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gV0lUSERSQVdfVVNFUl9DT05TRU5UX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRXaXRoZHJhd1VzZXJDb25zZW50UHJvY2VzcyBleHRlbmRzIEVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1dJVEhEUkFXX1VTRVJfQ09OU0VOVF9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVXNlckNvbnNlbnRzQWN0aW9uID1cbiAgfCBMb2FkVXNlckNvbnNlbnRzXG4gIHwgTG9hZFVzZXJDb25zZW50c0ZhaWxcbiAgfCBMb2FkVXNlckNvbnNlbnRzU3VjY2Vzc1xuICB8IFJlc2V0TG9hZFVzZXJDb25zZW50c1xuICB8IEdpdmVVc2VyQ29uc2VudFxuICB8IEdpdmVVc2VyQ29uc2VudEZhaWxcbiAgfCBHaXZlVXNlckNvbnNlbnRTdWNjZXNzXG4gIHwgV2l0aGRyYXdVc2VyQ29uc2VudFxuICB8IFdpdGhkcmF3VXNlckNvbnNlbnRGYWlsXG4gIHwgV2l0aGRyYXdVc2VyQ29uc2VudFN1Y2Nlc3NcbiAgfCBSZXNldFdpdGhkcmF3VXNlckNvbnNlbnRQcm9jZXNzO1xuIl19