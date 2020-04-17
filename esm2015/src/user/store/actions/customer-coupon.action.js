import { CUSTOMER_COUPONS, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, CLAIM_CUSTOMER_COUPON_PROCESS_ID, } from '../user-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, LoaderResetAction, } from '../../../state/utils/loader/loader.action';
import { EntityFailAction, EntityLoadAction, EntityLoaderResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { PROCESS_FEATURE } from '../../../process/store';
export const LOAD_CUSTOMER_COUPONS = '[User] Load Customer Coupons';
export const LOAD_CUSTOMER_COUPONS_FAIL = '[User] Load Customer Coupons Fail';
export const LOAD_CUSTOMER_COUPONS_SUCCESS = '[User] Load Customer Coupons Success';
export const RESET_LOAD_CUSTOMER_COUPONS = '[User] Reset Load Customer Coupons';
export const SUBSCRIBE_CUSTOMER_COUPON = '[User] Subscribe Customer Notification Coupon';
export const SUBSCRIBE_CUSTOMER_COUPON_FAIL = '[User] Subscribe Customer Coupon Notification Fail';
export const SUBSCRIBE_CUSTOMER_COUPON_SUCCESS = '[User] Subscribe Customer Coupon Notification Success';
export const RESET_SUBSCRIBE_CUSTOMER_COUPON_PROCESS = '[User] Reset Subscribe Customer Coupon Process';
export const UNSUBSCRIBE_CUSTOMER_COUPON = '[User] Unsubscribe Customer Notification Coupon';
export const UNSUBSCRIBE_CUSTOMER_COUPON_FAIL = '[User] Unsubscribe Customer Coupon Notification Fail';
export const UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS = '[User] Unsubscribe Customer Coupon Notification Success';
export const RESET_UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS = '[User] Reset Unsubscribe Customer Coupon Process';
export const CLAIM_CUSTOMER_COUPON = '[User] Claim Customer';
export const CLAIM_CUSTOMER_COUPON_FAIL = '[User] Claim Customer Fail';
export const CLAIM_CUSTOMER_COUPON_SUCCESS = '[User] Claim Customer Success';
export class LoadCustomerCoupons extends LoaderLoadAction {
    constructor(payload) {
        super(CUSTOMER_COUPONS);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_COUPONS;
    }
}
export class LoadCustomerCouponsFail extends LoaderFailAction {
    constructor(payload) {
        super(CUSTOMER_COUPONS, payload);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_COUPONS_FAIL;
    }
}
export class LoadCustomerCouponsSuccess extends LoaderSuccessAction {
    constructor(payload) {
        super(CUSTOMER_COUPONS);
        this.payload = payload;
        this.type = LOAD_CUSTOMER_COUPONS_SUCCESS;
    }
}
export class ResetLoadCustomerCoupons extends LoaderResetAction {
    constructor() {
        super(CUSTOMER_COUPONS);
        this.type = RESET_LOAD_CUSTOMER_COUPONS;
    }
}
// Subscribe coupon notification actions
export class SubscribeCustomerCoupon extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
        this.payload = payload;
        this.type = SUBSCRIBE_CUSTOMER_COUPON;
    }
}
export class SubscribeCustomerCouponFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = SUBSCRIBE_CUSTOMER_COUPON_FAIL;
    }
}
export class SubscribeCustomerCouponSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = SUBSCRIBE_CUSTOMER_COUPON_SUCCESS;
    }
}
export class ResetSubscribeCustomerCouponProcess extends EntityLoaderResetAction {
    constructor() {
        super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
        this.type = RESET_SUBSCRIBE_CUSTOMER_COUPON_PROCESS;
    }
}
export class UnsubscribeCustomerCoupon extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
        this.payload = payload;
        this.type = UNSUBSCRIBE_CUSTOMER_COUPON;
    }
}
export class UnsubscribeCustomerCouponFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UNSUBSCRIBE_CUSTOMER_COUPON_FAIL;
    }
}
export class UnsubscribeCustomerCouponSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS;
    }
}
export class ResetUnsubscribeCustomerCouponProcess extends EntityLoaderResetAction {
    constructor() {
        super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
        this.type = RESET_UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS;
    }
}
export class ClaimCustomerCoupon extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID);
        this.payload = payload;
        this.type = CLAIM_CUSTOMER_COUPON;
    }
}
export class ClaimCustomerCouponFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = CLAIM_CUSTOMER_COUPON_FAIL;
    }
}
export class ClaimCustomerCouponSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID, payload);
        this.payload = payload;
        this.type = CLAIM_CUSTOMER_COUPON_SUCCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvY3VzdG9tZXItY291cG9uLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLG9DQUFvQyxFQUNwQyxzQ0FBc0MsRUFDdEMsZ0NBQWdDLEdBQ2pDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQixpQkFBaUIsR0FDbEIsTUFBTSwyQ0FBMkMsQ0FBQztBQU1uRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLDhCQUE4QixDQUFDO0FBQ3BFLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHLG1DQUFtQyxDQUFDO0FBQzlFLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUN4QyxzQ0FBc0MsQ0FBQztBQUN6QyxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBRyxvQ0FBb0MsQ0FBQztBQUVoRixNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FDcEMsK0NBQStDLENBQUM7QUFDbEQsTUFBTSxDQUFDLE1BQU0sOEJBQThCLEdBQ3pDLG9EQUFvRCxDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUM1Qyx1REFBdUQsQ0FBQztBQUMxRCxNQUFNLENBQUMsTUFBTSx1Q0FBdUMsR0FDbEQsZ0RBQWdELENBQUM7QUFFbkQsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQ3RDLGlEQUFpRCxDQUFDO0FBQ3BELE1BQU0sQ0FBQyxNQUFNLGdD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T01FUl9DT1VQT05fUFJPQ0VTU19JRCxcbiAgVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsXG4gIENMQUlNX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lELFxufSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7XG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb24sXG4gIExvYWRlclJlc2V0QWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQge1xuICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCxcbiAgQ3VzdG9tZXJDb3Vwb25Ob3RpZmljYXRpb24sXG4gIEN1c3RvbWVyQ291cG9uMkN1c3RvbWVyLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jdXN0b21lci1jb3Vwb24ubW9kZWwnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5TG9hZGVyUmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NVU1RPTUVSX0NPVVBPTlMgPSAnW1VzZXJdIExvYWQgQ3VzdG9tZXIgQ291cG9ucyc7XG5leHBvcnQgY29uc3QgTE9BRF9DVVNUT01FUl9DT1VQT05TX0ZBSUwgPSAnW1VzZXJdIExvYWQgQ3VzdG9tZXIgQ291cG9ucyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NVU1RPTUVSX0NPVVBPTlNfU1VDQ0VTUyA9XG4gICdbVXNlcl0gTG9hZCBDdXN0b21lciBDb3Vwb25zIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX0xPQURfQ1VTVE9NRVJfQ09VUE9OUyA9ICdbVXNlcl0gUmVzZXQgTG9hZCBDdXN0b21lciBDb3Vwb25zJztcblxuZXhwb3J0IGNvbnN0IFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT04gPVxuICAnW1VzZXJdIFN1YnNjcmliZSBDdXN0b21lciBOb3RpZmljYXRpb24gQ291cG9uJztcbmV4cG9ydCBjb25zdCBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX0ZBSUwgPVxuICAnW1VzZXJdIFN1YnNjcmliZSBDdXN0b21lciBDb3Vwb24gTm90aWZpY2F0aW9uIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fU1VDQ0VTUyA9XG4gICdbVXNlcl0gU3Vic2NyaWJlIEN1c3RvbWVyIENvdXBvbiBOb3RpZmljYXRpb24gU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTID1cbiAgJ1tVc2VyXSBSZXNldCBTdWJzY3JpYmUgQ3VzdG9tZXIgQ291cG9uIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OID1cbiAgJ1tVc2VyXSBVbnN1YnNjcmliZSBDdXN0b21lciBOb3RpZmljYXRpb24gQ291cG9uJztcbmV4cG9ydCBjb25zdCBVTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fRkFJTCA9XG4gICdbVXNlcl0gVW5zdWJzY3JpYmUgQ3VzdG9tZXIgQ291cG9uIE5vdGlmaWNhdGlvbiBGYWlsJztcbmV4cG9ydCBjb25zdCBVTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fU1VDQ0VTUyA9XG4gICdbVXNlcl0gVW5zdWJzY3JpYmUgQ3VzdG9tZXIgQ291cG9uIE5vdGlmaWNhdGlvbiBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9VTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTUyA9XG4gICdbVXNlcl0gUmVzZXQgVW5zdWJzY3JpYmUgQ3VzdG9tZXIgQ291cG9uIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ0xBSU1fQ1VTVE9NRVJfQ09VUE9OID0gJ1tVc2VyXSBDbGFpbSBDdXN0b21lcic7XG5leHBvcnQgY29uc3QgQ0xBSU1fQ1VTVE9NRVJfQ09VUE9OX0ZBSUwgPSAnW1VzZXJdIENsYWltIEN1c3RvbWVyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENMQUlNX0NVU1RPTUVSX0NPVVBPTl9TVUNDRVNTID0gJ1tVc2VyXSBDbGFpbSBDdXN0b21lciBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRDdXN0b21lckNvdXBvbnMgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ1VTVE9NRVJfQ09VUE9OUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgcGFnZVNpemU6IG51bWJlcjtcbiAgICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgICAgc29ydD86IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKENVU1RPTUVSX0NPVVBPTlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ3VzdG9tZXJDb3Vwb25zRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DVVNUT01FUl9DT1VQT05TX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDVVNUT01FUl9DT1VQT05TLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEN1c3RvbWVyQ291cG9uc1N1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ1VTVE9NRVJfQ09VUE9OU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQpIHtcbiAgICBzdXBlcihDVVNUT01FUl9DT1VQT05TKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRMb2FkQ3VzdG9tZXJDb3Vwb25zIGV4dGVuZHMgTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfTE9BRF9DVVNUT01FUl9DT1VQT05TO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihDVVNUT01FUl9DT1VQT05TKTtcbiAgfVxufVxuXG4vLyBTdWJzY3JpYmUgY291cG9uIG5vdGlmaWNhdGlvbiBhY3Rpb25zXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24gZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT047XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNvdXBvbkNvZGU6IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25GYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUN1c3RvbWVyQ291cG9uU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ3VzdG9tZXJDb3Vwb25Ob3RpZmljYXRpb24pIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0U3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25Qcm9jZXNzIGV4dGVuZHMgRW50aXR5TG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24gZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY291cG9uQ29kZTogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25GYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uUHJvY2VzcyBleHRlbmRzIEVudGl0eUxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1VOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhaW1DdXN0b21lckNvdXBvbiBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xBSU1fQ1VTVE9NRVJfQ09VUE9OO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjb3Vwb25Db2RlO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBDTEFJTV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYWltQ3VzdG9tZXJDb3Vwb25GYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEFJTV9DVVNUT01FUl9DT1VQT05fRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQ0xBSU1fQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFpbUN1c3RvbWVyQ291cG9uU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xBSU1fQ1VTVE9NRVJfQ09VUE9OX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDdXN0b21lckNvdXBvbjJDdXN0b21lcikge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQ0xBSU1fQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ3VzdG9tZXJDb3Vwb25BY3Rpb24gPVxuICB8IExvYWRDdXN0b21lckNvdXBvbnNcbiAgfCBMb2FkQ3VzdG9tZXJDb3Vwb25zRmFpbFxuICB8IExvYWRDdXN0b21lckNvdXBvbnNTdWNjZXNzXG4gIHwgUmVzZXRMb2FkQ3VzdG9tZXJDb3Vwb25zXG4gIHwgU3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25cbiAgfCBTdWJzY3JpYmVDdXN0b21lckNvdXBvbkZhaWxcbiAgfCBTdWJzY3JpYmVDdXN0b21lckNvdXBvblN1Y2Nlc3NcbiAgfCBSZXNldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUHJvY2Vzc1xuICB8IFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25cbiAgfCBVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uRmFpbFxuICB8IFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25TdWNjZXNzXG4gIHwgUmVzZXRVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uUHJvY2Vzc1xuICB8IENsYWltQ3VzdG9tZXJDb3Vwb25cbiAgfCBDbGFpbUN1c3RvbWVyQ291cG9uRmFpbFxuICB8IENsYWltQ3VzdG9tZXJDb3Vwb25TdWNjZXNzO1xuIl19