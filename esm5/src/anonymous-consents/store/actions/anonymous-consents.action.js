/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { ANONYMOUS_CONSENTS } from '../anonymous-consents-state';
/** @type {?} */
export var LOAD_ANONYMOUS_CONSENT_TEMPLATES = '[Anonymous Consents] Load Anonymous Consent Templates';
/** @type {?} */
export var LOAD_ANONYMOUS_CONSENT_TEMPLATES_SUCCESS = '[Anonymous Consents] Load Anonymous Consent Templates Success';
/** @type {?} */
export var LOAD_ANONYMOUS_CONSENT_TEMPLATES_FAIL = '[Anonymous Consents] Load Anonymous Consent Templates Fail';
/** @type {?} */
export var RESET_LOAD_ANONYMOUS_CONSENT_TEMPLATES = '[Anonymous Consents] Reset Load Anonymous Consent Templates';
/** @type {?} */
export var GET_ALL_ANONYMOUS_CONSENTS = '[Anonymous Consents] Get All Anonymous Consents';
/** @type {?} */
export var GET_ANONYMOUS_CONSENT = '[Anonymous Consents] Get Anonymous Consent';
/** @type {?} */
export var SET_ANONYMOUS_CONSENTS = '[Anonymous Consents] Set Anonymous Consents';
/** @type {?} */
export var GIVE_ANONYMOUS_CONSENT = '[Anonymous Consents] Give Anonymous Consent';
/** @type {?} */
export var WITHDRAW_ANONYMOUS_CONSENT = '[Anonymous Consents] Withdraw Anonymous Consent';
/** @type {?} */
export var TOGGLE_ANONYMOUS_CONSENTS_BANNER_VISIBILITY = '[Anonymous Consents] Toggle Anonymous Consents Banner Visibility';
/** @type {?} */
export var TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED = '[Anonymous Consents] Anonymous Consent Templates Updated';
var LoadAnonymousConsentTemplates = /** @class */ (function (_super) {
    tslib_1.__extends(LoadAnonymousConsentTemplates, _super);
    function LoadAnonymousConsentTemplates() {
        var _this = _super.call(this, ANONYMOUS_CONSENTS) || this;
        _this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES;
        return _this;
    }
    return LoadAnonymousConsentTemplates;
}(StateLoaderActions.LoaderLoadAction));
export { LoadAnonymousConsentTemplates };
if (false) {
    /** @type {?} */
    LoadAnonymousConsentTemplates.prototype.type;
}
var LoadAnonymousConsentTemplatesSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadAnonymousConsentTemplatesSuccess, _super);
    function LoadAnonymousConsentTemplatesSuccess(payload) {
        var _this = _super.call(this, ANONYMOUS_CONSENTS) || this;
        _this.payload = payload;
        _this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES_SUCCESS;
        return _this;
    }
    return LoadAnonymousConsentTemplatesSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { LoadAnonymousConsentTemplatesSuccess };
if (false) {
    /** @type {?} */
    LoadAnonymousConsentTemplatesSuccess.prototype.type;
    /** @type {?} */
    LoadAnonymousConsentTemplatesSuccess.prototype.payload;
}
var LoadAnonymousConsentTemplatesFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadAnonymousConsentTemplatesFail, _super);
    function LoadAnonymousConsentTemplatesFail(payload) {
        var _this = _super.call(this, ANONYMOUS_CONSENTS, payload) || this;
        _this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES_FAIL;
        return _this;
    }
    return LoadAnonymousConsentTemplatesFail;
}(StateLoaderActions.LoaderFailAction));
export { LoadAnonymousConsentTemplatesFail };
if (false) {
    /** @type {?} */
    LoadAnonymousConsentTemplatesFail.prototype.type;
}
var ResetLoadAnonymousConsentTemplates = /** @class */ (function (_super) {
    tslib_1.__extends(ResetLoadAnonymousConsentTemplates, _super);
    function ResetLoadAnonymousConsentTemplates() {
        var _this = _super.call(this, ANONYMOUS_CONSENTS) || this;
        _this.type = RESET_LOAD_ANONYMOUS_CONSENT_TEMPLATES;
        return _this;
    }
    return ResetLoadAnonymousConsentTemplates;
}(StateLoaderActions.LoaderResetAction));
export { ResetLoadAnonymousConsentTemplates };
if (false) {
    /** @type {?} */
    ResetLoadAnonymousConsentTemplates.prototype.type;
}
var GetAllAnonymousConsents = /** @class */ (function () {
    function GetAllAnonymousConsents() {
        this.type = GET_ALL_ANONYMOUS_CONSENTS;
    }
    return GetAllAnonymousConsents;
}());
export { GetAllAnonymousConsents };
if (false) {
    /** @type {?} */
    GetAllAnonymousConsents.prototype.type;
}
var GetAnonymousConsent = /** @class */ (function () {
    function GetAnonymousConsent(templateCode) {
        this.templateCode = templateCode;
        this.type = GET_ANONYMOUS_CONSENT;
    }
    return GetAnonymousConsent;
}());
export { GetAnonymousConsent };
if (false) {
    /** @type {?} */
    GetAnonymousConsent.prototype.type;
    /** @type {?} */
    GetAnonymousConsent.prototype.templateCode;
}
var SetAnonymousConsents = /** @class */ (function () {
    function SetAnonymousConsents(payload) {
        this.payload = payload;
        this.type = SET_ANONYMOUS_CONSENTS;
    }
    return SetAnonymousConsents;
}());
export { SetAnonymousConsents };
if (false) {
    /** @type {?} */
    SetAnonymousConsents.prototype.type;
    /** @type {?} */
    SetAnonymousConsents.prototype.payload;
}
var GiveAnonymousConsent = /** @class */ (function () {
    function GiveAnonymousConsent(templateCode) {
        this.templateCode = templateCode;
        this.type = GIVE_ANONYMOUS_CONSENT;
    }
    return GiveAnonymousConsent;
}());
export { GiveAnonymousConsent };
if (false) {
    /** @type {?} */
    GiveAnonymousConsent.prototype.type;
    /** @type {?} */
    GiveAnonymousConsent.prototype.templateCode;
}
var WithdrawAnonymousConsent = /** @class */ (function () {
    function WithdrawAnonymousConsent(templateCode) {
        this.templateCode = templateCode;
        this.type = WITHDRAW_ANONYMOUS_CONSENT;
    }
    return WithdrawAnonymousConsent;
}());
export { WithdrawAnonymousConsent };
if (false) {
    /** @type {?} */
    WithdrawAnonymousConsent.prototype.type;
    /** @type {?} */
    WithdrawAnonymousConsent.prototype.templateCode;
}
var ToggleAnonymousConsentsBannerVisibility = /** @class */ (function () {
    function ToggleAnonymousConsentsBannerVisibility(visible) {
        this.visible = visible;
        this.type = TOGGLE_ANONYMOUS_CONSENTS_BANNER_VISIBILITY;
    }
    return ToggleAnonymousConsentsBannerVisibility;
}());
export { ToggleAnonymousConsentsBannerVisibility };
if (false) {
    /** @type {?} */
    ToggleAnonymousConsentsBannerVisibility.prototype.type;
    /** @type {?} */
    ToggleAnonymousConsentsBannerVisibility.prototype.visible;
}
var ToggleAnonymousConsentTemplatesUpdated = /** @class */ (function () {
    function ToggleAnonymousConsentTemplatesUpdated(updated) {
        this.updated = updated;
        this.type = TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED;
    }
    return ToggleAnonymousConsentTemplatesUpdated;
}());
export { ToggleAnonymousConsentTemplatesUpdated };
if (false) {
    /** @type {?} */
    ToggleAnonymousConsentTemplatesUpdated.prototype.type;
    /** @type {?} */
    ToggleAnonymousConsentTemplatesUpdated.prototype.updated;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvYWN0aW9ucy9hbm9ueW1vdXMtY29uc2VudHMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBRWpFLE1BQU0sS0FBTyxnQ0FBZ0MsR0FDM0MsdURBQXVEOztBQUN6RCxNQUFNLEtBQU8sd0NBQXdDLEdBQ25ELCtEQUErRDs7QUFDakUsTUFBTSxLQUFPLHFDQUFxQyxHQUNoRCw0REFBNEQ7O0FBQzlELE1BQU0sS0FBTyxzQ0FBc0MsR0FDakQsNkRBQTZEOztBQUUvRCxNQUFNLEtBQU8sMEJBQTBCLEdBQ3JDLGlEQUFpRDs7QUFDbkQsTUFBTSxLQUFPLHFCQUFxQixHQUNoQyw0Q0FBNEM7O0FBQzlDLE1BQU0sS0FBTyxzQkFBc0IsR0FDakMsNkNBQTZDOztBQUMvQyxNQUFNLEtBQU8sc0JBQXNCLEdBQ2pDLDZDQUE2Qzs7QUFDL0MsTUFBTSxLQUFPLDBCQUEwQixHQUNyQyxpREFBaUQ7O0FBRW5ELE1BQU0sS0FBTywyQ0FBMkMsR0FDdEQsa0VBQWtFOztBQUNwRSxNQUFNLEtBQU8sMENBQTBDLEdBQ3JELDBEQUEwRDtBQUU1RDtJQUFtRCx5REFBbUM7SUFFcEY7UUFBQSxZQUNFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBSFEsVUFBSSxHQUFHLGdDQUFnQyxDQUFDOztJQUdqRCxDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUQsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3JGOzs7O0lBSkMsNkNBQWlEOztBQU1uRDtJQUEwRCxnRUFBc0M7SUFFOUYsOENBQW1CLE9BQTBCO1FBQTdDLFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFEcEMsVUFBSSxHQUFHLHdDQUF3QyxDQUFDOztJQUd6RCxDQUFDO0lBQ0gsMkNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMEQsa0JBQWtCLENBQUMsbUJBQW1CLEdBSy9GOzs7O0lBSkMsb0RBQXlEOztJQUM3Qyx1REFBaUM7O0FBSS9DO0lBQXVELDZEQUFtQztJQUV4RiwyQ0FBWSxPQUFZO1FBQXhCLFlBQ0Usa0JBQU0sa0JBQWtCLEVBQUUsT0FBTyxDQUFDLFNBQ25DO1FBSFEsVUFBSSxHQUFHLHFDQUFxQyxDQUFDOztJQUd0RCxDQUFDO0lBQ0gsd0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBdUQsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3pGOzs7O0lBSkMsaURBQXNEOztBQU14RDtJQUF3RCw4REFBb0M7SUFFMUY7UUFBQSxZQUNFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBSFEsVUFBSSxHQUFHLHNDQUFzQyxDQUFDOztJQUd2RCxDQUFDO0lBQ0gseUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBd0Qsa0JBQWtCLENBQUMsaUJBQWlCLEdBSzNGOzs7O0lBSkMsa0RBQXVEOztBQU16RDtJQUVFO1FBRFMsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBQzVCLENBQUM7SUFDbEIsOEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHVDQUEyQzs7QUFJN0M7SUFFRSw2QkFBbUIsWUFBb0I7UUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFEOUIsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBQ0ksQ0FBQztJQUM3QywwQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsbUNBQXNDOztJQUMxQiwyQ0FBMkI7O0FBR3pDO0lBRUUsOEJBQW1CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBRHJDLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUNVLENBQUM7SUFDcEQsMkJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLG9DQUF1Qzs7SUFDM0IsdUNBQWtDOztBQUdoRDtJQUVFLDhCQUFtQixZQUFvQjtRQUFwQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUQ5QixTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFDRyxDQUFDO0lBQzdDLDJCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxvQ0FBdUM7O0lBQzNCLDRDQUEyQjs7QUFHekM7SUFFRSxrQ0FBbUIsWUFBb0I7UUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFEOUIsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBQ0QsQ0FBQztJQUM3QywrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsd0NBQTJDOztJQUMvQixnREFBMkI7O0FBR3pDO0lBRUUsaURBQW1CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFEMUIsU0FBSSxHQUFHLDJDQUEyQyxDQUFDO0lBQ3RCLENBQUM7SUFDekMsOENBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHVEQUE0RDs7SUFDaEQsMERBQXVCOztBQUdyQztJQUVFLGdEQUFtQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBRDFCLFNBQUksR0FBRywwQ0FBMEMsQ0FBQztJQUNyQixDQUFDO0lBQ3pDLDZDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxzREFBMkQ7O0lBQy9DLHlEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnQsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBBTk9OWU1PVVNfQ09OU0VOVFMgfSBmcm9tICcuLi9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9BTk9OWU1PVVNfQ09OU0VOVF9URU1QTEFURVMgPVxuICAnW0Fub255bW91cyBDb25zZW50c10gTG9hZCBBbm9ueW1vdXMgQ29uc2VudCBUZW1wbGF0ZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfQU5PTllNT1VTX0NPTlNFTlRfVEVNUExBVEVTX1NVQ0NFU1MgPVxuICAnW0Fub255bW91cyBDb25zZW50c10gTG9hZCBBbm9ueW1vdXMgQ29uc2VudCBUZW1wbGF0ZXMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgTE9BRF9BTk9OWU1PVVNfQ09OU0VOVF9URU1QTEFURVNfRkFJTCA9XG4gICdbQW5vbnltb3VzIENvbnNlbnRzXSBMb2FkIEFub255bW91cyBDb25zZW50IFRlbXBsYXRlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBSRVNFVF9MT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFUyA9XG4gICdbQW5vbnltb3VzIENvbnNlbnRzXSBSZXNldCBMb2FkIEFub255bW91cyBDb25zZW50IFRlbXBsYXRlcyc7XG5cbmV4cG9ydCBjb25zdCBHRVRfQUxMX0FOT05ZTU9VU19DT05TRU5UUyA9XG4gICdbQW5vbnltb3VzIENvbnNlbnRzXSBHZXQgQWxsIEFub255bW91cyBDb25zZW50cyc7XG5leHBvcnQgY29uc3QgR0VUX0FOT05ZTU9VU19DT05TRU5UID1cbiAgJ1tBbm9ueW1vdXMgQ29uc2VudHNdIEdldCBBbm9ueW1vdXMgQ29uc2VudCc7XG5leHBvcnQgY29uc3QgU0VUX0FOT05ZTU9VU19DT05TRU5UUyA9XG4gICdbQW5vbnltb3VzIENvbnNlbnRzXSBTZXQgQW5vbnltb3VzIENvbnNlbnRzJztcbmV4cG9ydCBjb25zdCBHSVZFX0FOT05ZTU9VU19DT05TRU5UID1cbiAgJ1tBbm9ueW1vdXMgQ29uc2VudHNdIEdpdmUgQW5vbnltb3VzIENvbnNlbnQnO1xuZXhwb3J0IGNvbnN0IFdJVEhEUkFXX0FOT05ZTU9VU19DT05TRU5UID1cbiAgJ1tBbm9ueW1vdXMgQ29uc2VudHNdIFdpdGhkcmF3IEFub255bW91cyBDb25zZW50JztcblxuZXhwb3J0IGNvbnN0IFRPR0dMRV9BTk9OWU1PVVNfQ09OU0VOVFNfQkFOTkVSX1ZJU0lCSUxJVFkgPVxuICAnW0Fub255bW91cyBDb25zZW50c10gVG9nZ2xlIEFub255bW91cyBDb25zZW50cyBCYW5uZXIgVmlzaWJpbGl0eSc7XG5leHBvcnQgY29uc3QgVE9HR0xFX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFU19VUERBVEVEID1cbiAgJ1tBbm9ueW1vdXMgQ29uc2VudHNdIEFub255bW91cyBDb25zZW50IFRlbXBsYXRlcyBVcGRhdGVkJztcblxuZXhwb3J0IGNsYXNzIExvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9BTk9OWU1PVVNfQ09OU0VOVF9URU1QTEFURVM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKEFOT05ZTU9VU19DT05TRU5UUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQU5PTllNT1VTX0NPTlNFTlRfVEVNUExBVEVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25zZW50VGVtcGxhdGVbXSkge1xuICAgIHN1cGVyKEFOT05ZTU9VU19DT05TRU5UUyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBMb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihBTk9OWU1PVVNfQ09OU0VOVFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldExvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0xPQURfQU5PTllNT1VTX0NPTlNFTlRfVEVNUExBVEVTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihBTk9OWU1PVVNfQ09OU0VOVFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRBbGxBbm9ueW1vdXNDb25zZW50cyB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHRVRfQUxMX0FOT05ZTU9VU19DT05TRU5UUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgR2V0QW5vbnltb3VzQ29uc2VudCB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHRVRfQU5PTllNT1VTX0NPTlNFTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZUNvZGU6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldEFub255bW91c0NvbnNlbnRzIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9BTk9OWU1PVVNfQ09OU0VOVFM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBbm9ueW1vdXNDb25zZW50W10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBHaXZlQW5vbnltb3VzQ29uc2VudCB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHSVZFX0FOT05ZTU9VU19DT05TRU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVDb2RlOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBXaXRoZHJhd0Fub255bW91c0NvbnNlbnQge1xuICByZWFkb25seSB0eXBlID0gV0lUSERSQVdfQU5PTllNT1VTX0NPTlNFTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZUNvZGU6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIFRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eSB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUT0dHTEVfQU5PTllNT1VTX0NPTlNFTlRTX0JBTk5FUl9WSVNJQklMSVRZO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlzaWJsZTogYm9vbGVhbikge31cbn1cblxuZXhwb3J0IGNsYXNzIFRvZ2dsZUFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNVcGRhdGVkIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRPR0dMRV9BTk9OWU1PVVNfQ09OU0VOVF9URU1QTEFURVNfVVBEQVRFRDtcbiAgY29uc3RydWN0b3IocHVibGljIHVwZGF0ZWQ6IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCB0eXBlIEFub255bW91c0NvbnNlbnRzQWN0aW9ucyA9XG4gIHwgTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNcbiAgfCBMb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3NcbiAgfCBMb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0ZhaWxcbiAgfCBSZXNldExvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzXG4gIHwgR2V0QWxsQW5vbnltb3VzQ29uc2VudHNcbiAgfCBTZXRBbm9ueW1vdXNDb25zZW50c1xuICB8IEdldEFub255bW91c0NvbnNlbnRcbiAgfCBHaXZlQW5vbnltb3VzQ29uc2VudFxuICB8IFdpdGhkcmF3QW5vbnltb3VzQ29uc2VudFxuICB8IFRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eVxuICB8IFRvZ2dsZUFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNVcGRhdGVkO1xuIl19