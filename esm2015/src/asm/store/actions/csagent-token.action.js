/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions } from '../../../state/utils/index';
import { CSAGENT_TOKEN_DATA } from '../asm-state';
import { LOGOUT_CUSTOMER_SUPPORT_AGENT } from '../../../auth/store/actions/login-logout.action';
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
export class LogoutCustomerSupportAgent {
    constructor() {
        this.type = LOGOUT_CUSTOMER_SUPPORT_AGENT;
    }
}
if (false) {
    /** @type {?} */
    LogoutCustomerSupportAgent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL3N0b3JlL2FjdGlvbnMvY3NhZ2VudC10b2tlbi5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7QUFFaEcsTUFBTSxPQUFPLGlDQUFpQyxHQUM1QywwQ0FBMEM7O0FBQzVDLE1BQU0sT0FBTyxzQ0FBc0MsR0FDakQsK0NBQStDOztBQUNqRCxNQUFNLE9BQU8seUNBQXlDLEdBQ3BELGtEQUFrRDtBQUVwRCxNQUFNLE9BQU8sNkJBQThCLFNBQVEsa0JBQWtCLENBQUMsZ0JBQWdCOzs7O0lBR3BGLFlBQW1CLE9BQTZDO1FBQzlELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRFQsWUFBTyxHQUFQLE9BQU8sQ0FBc0M7UUFGdkQsU0FBSSxHQUFHLGlDQUFpQyxDQUFDO0lBSWxELENBQUM7Q0FDRjs7O0lBTEMsNkNBQWtEOztJQUV0QyxnREFBb0Q7O0FBS2xFLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxrQkFBa0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFeEYsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQURULFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHNDQUFzQyxDQUFDO0lBR3ZELENBQUM7Q0FDRjs7O0lBSkMsaURBQXVEOztJQUMzQyxvREFBbUI7O0FBS2pDLE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSxrQkFBa0IsQ0FBQyxtQkFBbUI7Ozs7SUFFOUYsWUFBbUIsT0FBa0I7UUFDbkMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFEVCxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRDVCLFNBQUksR0FBRyx5Q0FBeUMsQ0FBQztJQUcxRCxDQUFDO0NBQ0Y7OztJQUpDLG9EQUEwRDs7SUFDOUMsdURBQXlCOztBQUt2QyxNQUFNLE9BQU8sMEJBQTBCO0lBQXZDO1FBQ1csU0FBSSxHQUFHLDZCQUE2QixDQUFDO0lBQ2hELENBQUM7Q0FBQTs7O0lBREMsMENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgQ1NBR0VOVF9UT0tFTl9EQVRBIH0gZnJvbSAnLi4vYXNtLXN0YXRlJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IExPR09VVF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2xvZ2luLWxvZ291dC5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOID1cbiAgJ1tBdXRoXSBMb2FkIEN1c3RvbWVyIFNlcnZpY2UgQWdlbnQgVG9rZW4nO1xuZXhwb3J0IGNvbnN0IExPQURfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTl9GQUlMID1cbiAgJ1tBdXRoXSBMb2FkIEN1c3RvbWVyIFNlcnZpY2UgQWdlbnQgVG9rZW4gRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOX1NVQ0NFU1MgPVxuICAnW0F1dGhdIExvYWQgQ3VzdG9tZXIgU2VydmljZSBBZ2VudCBUb2tlbiBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihDU0FHRU5UX1RPS0VOX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU5fRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENTQUdFTlRfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlclRva2VuKSB7XG4gICAgc3VwZXIoQ1NBR0VOVF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9HT1VUX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlQ7XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkFjdGlvbiA9XG4gIHwgTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5cbiAgfCBMb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkZhaWxcbiAgfCBMb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlblN1Y2Nlc3NcbiAgfCBMb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudDtcbiJdfQ==