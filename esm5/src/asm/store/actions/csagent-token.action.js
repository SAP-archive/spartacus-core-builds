/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { CSAGENT_TOKEN_DATA } from '../asm-state';
import { LOGOUT_CUSTOMER_SUPPORT_AGENT } from '../../../auth/store/actions/login-logout.action';
/** @type {?} */
export var LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN = '[Auth] Load Customer Service Agent Token';
/** @type {?} */
export var LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_FAIL = '[Auth] Load Customer Service Agent Token Fail';
/** @type {?} */
export var LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_SUCCESS = '[Auth] Load Customer Service Agent Token Success';
var LoadCustomerSupportAgentToken = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCustomerSupportAgentToken, _super);
    function LoadCustomerSupportAgentToken(payload) {
        var _this = _super.call(this, CSAGENT_TOKEN_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN;
        return _this;
    }
    return LoadCustomerSupportAgentToken;
}(StateLoaderActions.LoaderLoadAction));
export { LoadCustomerSupportAgentToken };
if (false) {
    /** @type {?} */
    LoadCustomerSupportAgentToken.prototype.type;
    /** @type {?} */
    LoadCustomerSupportAgentToken.prototype.payload;
}
var LoadCustomerSupportAgentTokenFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCustomerSupportAgentTokenFail, _super);
    function LoadCustomerSupportAgentTokenFail(payload) {
        var _this = _super.call(this, CSAGENT_TOKEN_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_FAIL;
        return _this;
    }
    return LoadCustomerSupportAgentTokenFail;
}(StateLoaderActions.LoaderFailAction));
export { LoadCustomerSupportAgentTokenFail };
if (false) {
    /** @type {?} */
    LoadCustomerSupportAgentTokenFail.prototype.type;
    /** @type {?} */
    LoadCustomerSupportAgentTokenFail.prototype.payload;
}
var LoadCustomerSupportAgentTokenSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCustomerSupportAgentTokenSuccess, _super);
    function LoadCustomerSupportAgentTokenSuccess(payload) {
        var _this = _super.call(this, CSAGENT_TOKEN_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_SUCCESS;
        return _this;
    }
    return LoadCustomerSupportAgentTokenSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { LoadCustomerSupportAgentTokenSuccess };
if (false) {
    /** @type {?} */
    LoadCustomerSupportAgentTokenSuccess.prototype.type;
    /** @type {?} */
    LoadCustomerSupportAgentTokenSuccess.prototype.payload;
}
var LogoutCustomerSupportAgent = /** @class */ (function () {
    function LogoutCustomerSupportAgent() {
        this.type = LOGOUT_CUSTOMER_SUPPORT_AGENT;
    }
    return LogoutCustomerSupportAgent;
}());
export { LogoutCustomerSupportAgent };
if (false) {
    /** @type {?} */
    LogoutCustomerSupportAgent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL3N0b3JlL2FjdGlvbnMvY3NhZ2VudC10b2tlbi5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFbEQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saURBQWlELENBQUM7O0FBRWhHLE1BQU0sS0FBTyxpQ0FBaUMsR0FDNUMsMENBQTBDOztBQUM1QyxNQUFNLEtBQU8sc0NBQXNDLEdBQ2pELCtDQUErQzs7QUFDakQsTUFBTSxLQUFPLHlDQUF5QyxHQUNwRCxrREFBa0Q7QUFFcEQ7SUFBbUQseURBQW1DO0lBR3BGLHVDQUFtQixPQUE2QztRQUFoRSxZQUNFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQXNDO1FBRnZELFVBQUksR0FBRyxpQ0FBaUMsQ0FBQzs7SUFJbEQsQ0FBQztJQUNILG9DQUFDO0FBQUQsQ0FBQyxBQU5ELENBQW1ELGtCQUFrQixDQUFDLGdCQUFnQixHQU1yRjs7OztJQUxDLDZDQUFrRDs7SUFFdEMsZ0RBQW9EOztBQUtsRTtJQUF1RCw2REFBbUM7SUFFeEYsMkNBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxzQ0FBc0MsQ0FBQzs7SUFHdkQsQ0FBQztJQUNILHdDQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVELGtCQUFrQixDQUFDLGdCQUFnQixHQUt6Rjs7OztJQUpDLGlEQUF1RDs7SUFDM0Msb0RBQW1COztBQUtqQztJQUEwRCxnRUFBc0M7SUFFOUYsOENBQW1CLE9BQWtCO1FBQXJDLFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBVztRQUQ1QixVQUFJLEdBQUcseUNBQXlDLENBQUM7O0lBRzFELENBQUM7SUFDSCwyQ0FBQztBQUFELENBQUMsQUFMRCxDQUEwRCxrQkFBa0IsQ0FBQyxtQkFBbUIsR0FLL0Y7Ozs7SUFKQyxvREFBMEQ7O0lBQzlDLHVEQUF5Qjs7QUFLdkM7SUFBQTtRQUNXLFNBQUksR0FBRyw2QkFBNkIsQ0FBQztJQUNoRCxDQUFDO0lBQUQsaUNBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLDBDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uLy4uL2F1dGgvbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IENTQUdFTlRfVE9LRU5fREFUQSB9IGZyb20gJy4uL2FzbS1zdGF0ZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBMT0dPVVRfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVCB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9sb2dpbi1sb2dvdXQuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTiA9XG4gICdbQXV0aF0gTG9hZCBDdXN0b21lciBTZXJ2aWNlIEFnZW50IFRva2VuJztcbmV4cG9ydCBjb25zdCBMT0FEX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU5fRkFJTCA9XG4gICdbQXV0aF0gTG9hZCBDdXN0b21lciBTZXJ2aWNlIEFnZW50IFRva2VuIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTl9TVUNDRVNTID1cbiAgJ1tBdXRoXSBMb2FkIEN1c3RvbWVyIFNlcnZpY2UgQWdlbnQgVG9rZW4gU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbiBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoQ1NBR0VOVF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5GYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDU0FHRU5UX1RPS0VOX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlblN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU5fU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJUb2tlbikge1xuICAgIHN1cGVyKENTQUdFTlRfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPR09VVF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UO1xufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5BY3Rpb24gPVxuICB8IExvYWRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuXG4gIHwgTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5GYWlsXG4gIHwgTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5TdWNjZXNzXG4gIHwgTG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQ7XG4iXX0=