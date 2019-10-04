/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions } from '../../../state/utils/index';
import { CSAGENT_TOKEN_DATA } from '../auth-state';
/** @type {?} */
export const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN = '[Auth] Load Customer Service Agent Token';
/** @type {?} */
export const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_FAIL = '[Auth] Load Customer Service Agent Token Fail';
/** @type {?} */
export const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_SUCCESS = '[Auth] Load Customer Service Agent Token Success';
export class LoadCustomerSupportAgentToken extends StateLoaderActions.LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CSAGENT_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN;
    }
}
if (false) {
    /** @type {?} */
    LoadCustomerSupportAgentToken.prototype.type;
    /** @type {?} */
    LoadCustomerSupportAgentToken.prototype.payload;
}
export class LoadCustomerSupportAgentTokenFail extends StateLoaderActions.LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CSAGENT_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadCustomerSupportAgentTokenFail.prototype.type;
    /** @type {?} */
    LoadCustomerSupportAgentTokenFail.prototype.payload;
}
export class LoadCustomerSupportAgentTokenSuccess extends StateLoaderActions.LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CSAGENT_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadCustomerSupportAgentTokenSuccess.prototype.type;
    /** @type {?} */
    LoadCustomerSupportAgentTokenSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9hY3Rpb25zL2NzYWdlbnQtdG9rZW4uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRW5ELE1BQU0sT0FBTyxpQ0FBaUMsR0FDNUMsMENBQTBDOztBQUM1QyxNQUFNLE9BQU8sc0NBQXNDLEdBQ2pELCtDQUErQzs7QUFDakQsTUFBTSxPQUFPLHlDQUF5QyxHQUNwRCxrREFBa0Q7QUFFcEQsTUFBTSxPQUFPLDZCQUE4QixTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUdwRixZQUFtQixPQUE2QztRQUM5RCxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQURULFlBQU8sR0FBUCxPQUFPLENBQXNDO1FBRnZELFNBQUksR0FBRyxpQ0FBaUMsQ0FBQztJQUlsRCxDQUFDO0NBQ0Y7OztJQUxDLDZDQUFrRDs7SUFFdEMsZ0RBQW9EOztBQUtsRSxNQUFNLE9BQU8saUNBQWtDLFNBQVEsa0JBQWtCLENBQUMsZ0JBQWdCOzs7O0lBRXhGLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFEVCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxzQ0FBc0MsQ0FBQztJQUd2RCxDQUFDO0NBQ0Y7OztJQUpDLGlEQUF1RDs7SUFDM0Msb0RBQW1COztBQUtqQyxNQUFNLE9BQU8sb0NBQXFDLFNBQVEsa0JBQWtCLENBQUMsbUJBQW1COzs7O0lBRTlGLFlBQW1CLE9BQWtCO1FBQ25DLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRFQsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUQ1QixTQUFJLEdBQUcseUNBQXlDLENBQUM7SUFHMUQsQ0FBQztDQUNGOzs7SUFKQyxvREFBMEQ7O0lBQzlDLHVEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBDU0FHRU5UX1RPS0VOX0RBVEEgfSBmcm9tICcuLi9hdXRoLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTiA9XG4gICdbQXV0aF0gTG9hZCBDdXN0b21lciBTZXJ2aWNlIEFnZW50IFRva2VuJztcbmV4cG9ydCBjb25zdCBMT0FEX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU5fRkFJTCA9XG4gICdbQXV0aF0gTG9hZCBDdXN0b21lciBTZXJ2aWNlIEFnZW50IFRva2VuIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTl9TVUNDRVNTID1cbiAgJ1tBdXRoXSBMb2FkIEN1c3RvbWVyIFNlcnZpY2UgQWdlbnQgVG9rZW4gU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbiBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoQ1NBR0VOVF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5GYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDU0FHRU5UX1RPS0VOX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlblN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU5fU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJUb2tlbikge1xuICAgIHN1cGVyKENTQUdFTlRfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuQWN0aW9uID1cbiAgfCBMb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlblxuICB8IExvYWRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuRmFpbFxuICB8IExvYWRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuU3VjY2VzcztcbiJdfQ==