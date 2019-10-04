/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { CSAGENT_TOKEN_DATA } from '../auth-state';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9hY3Rpb25zL2NzYWdlbnQtdG9rZW4uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVuRCxNQUFNLEtBQU8saUNBQWlDLEdBQzVDLDBDQUEwQzs7QUFDNUMsTUFBTSxLQUFPLHNDQUFzQyxHQUNqRCwrQ0FBK0M7O0FBQ2pELE1BQU0sS0FBTyx5Q0FBeUMsR0FDcEQsa0RBQWtEO0FBRXBEO0lBQW1ELHlEQUFtQztJQUdwRix1Q0FBbUIsT0FBNkM7UUFBaEUsWUFDRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFzQztRQUZ2RCxVQUFJLEdBQUcsaUNBQWlDLENBQUM7O0lBSWxELENBQUM7SUFDSCxvQ0FBQztBQUFELENBQUMsQUFORCxDQUFtRCxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FNckY7Ozs7SUFMQyw2Q0FBa0Q7O0lBRXRDLGdEQUFvRDs7QUFLbEU7SUFBdUQsNkRBQW1DO0lBRXhGLDJDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsc0NBQXNDLENBQUM7O0lBR3ZELENBQUM7SUFDSCx3Q0FBQztBQUFELENBQUMsQUFMRCxDQUF1RCxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLekY7Ozs7SUFKQyxpREFBdUQ7O0lBQzNDLG9EQUFtQjs7QUFLakM7SUFBMEQsZ0VBQXNDO0lBRTlGLDhDQUFtQixPQUFrQjtRQUFyQyxZQUNFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVc7UUFENUIsVUFBSSxHQUFHLHlDQUF5QyxDQUFDOztJQUcxRCxDQUFDO0lBQ0gsMkNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMEQsa0JBQWtCLENBQUMsbUJBQW1CLEdBSy9GOzs7O0lBSkMsb0RBQTBEOztJQUM5Qyx1REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgQ1NBR0VOVF9UT0tFTl9EQVRBIH0gZnJvbSAnLi4vYXV0aC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4gPVxuICAnW0F1dGhdIExvYWQgQ3VzdG9tZXIgU2VydmljZSBBZ2VudCBUb2tlbic7XG5leHBvcnQgY29uc3QgTE9BRF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOX0ZBSUwgPVxuICAnW0F1dGhdIExvYWQgQ3VzdG9tZXIgU2VydmljZSBBZ2VudCBUb2tlbiBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU5fU1VDQ0VTUyA9XG4gICdbQXV0aF0gTG9hZCBDdXN0b21lciBTZXJ2aWNlIEFnZW50IFRva2VuIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4gZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENTQUdFTlRfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ1NBR0VOVF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5TdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyVG9rZW4pIHtcbiAgICBzdXBlcihDU0FHRU5UX1RPS0VOX0RBVEEpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkFjdGlvbiA9XG4gIHwgTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5cbiAgfCBMb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkZhaWxcbiAgfCBMb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlblN1Y2Nlc3M7XG4iXX0=