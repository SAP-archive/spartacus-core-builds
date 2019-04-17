/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { USER_PAYMENT_METHODS } from '../user-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
/** @type {?} */
export const LOAD_USER_PAYMENT_METHODS = '[User] Load User Payment Methods';
/** @type {?} */
export const LOAD_USER_PAYMENT_METHODS_FAIL = '[User] Load User Payment Methods Fail';
/** @type {?} */
export const LOAD_USER_PAYMENT_METHODS_SUCCESS = '[User] Load User Payment Methods Success';
/** @type {?} */
export const SET_DEFAULT_USER_PAYMENT_METHOD = '[User] Set Default User Payment Method';
/** @type {?} */
export const SET_DEFAULT_USER_PAYMENT_METHOD_FAIL = '[User] Set Default User Payment Method Fail';
/** @type {?} */
export const SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS = '[User] Set Default User Payment Method Success';
/** @type {?} */
export const DELETE_USER_PAYMENT_METHOD = '[User] Delete User Payment Method';
/** @type {?} */
export const DELETE_USER_PAYMENT_METHOD_FAIL = '[User] Delete User Payment Method Fail';
/** @type {?} */
export const DELETE_USER_PAYMENT_METHOD_SUCCESS = '[User] Delete User  Payment Method Success';
export class LoadUserPaymentMethods extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS;
    }
}
if (false) {
    /** @type {?} */
    LoadUserPaymentMethods.prototype.type;
    /** @type {?} */
    LoadUserPaymentMethods.prototype.payload;
}
export class LoadUserPaymentMethodsFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadUserPaymentMethodsFail.prototype.type;
    /** @type {?} */
    LoadUserPaymentMethodsFail.prototype.payload;
}
export class LoadUserPaymentMethodsSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadUserPaymentMethodsSuccess.prototype.type;
    /** @type {?} */
    LoadUserPaymentMethodsSuccess.prototype.payload;
}
export class SetDefaultUserPaymentMethod extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD;
    }
}
if (false) {
    /** @type {?} */
    SetDefaultUserPaymentMethod.prototype.type;
    /** @type {?} */
    SetDefaultUserPaymentMethod.prototype.payload;
}
export class SetDefaultUserPaymentMethodFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD_FAIL;
    }
}
if (false) {
    /** @type {?} */
    SetDefaultUserPaymentMethodFail.prototype.type;
    /** @type {?} */
    SetDefaultUserPaymentMethodFail.prototype.payload;
}
export class SetDefaultUserPaymentMethodSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    SetDefaultUserPaymentMethodSuccess.prototype.type;
    /** @type {?} */
    SetDefaultUserPaymentMethodSuccess.prototype.payload;
}
export class DeleteUserPaymentMethod extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD;
    }
}
if (false) {
    /** @type {?} */
    DeleteUserPaymentMethod.prototype.type;
    /** @type {?} */
    DeleteUserPaymentMethod.prototype.payload;
}
export class DeleteUserPaymentMethodFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD_FAIL;
    }
}
if (false) {
    /** @type {?} */
    DeleteUserPaymentMethodFail.prototype.type;
    /** @type {?} */
    DeleteUserPaymentMethodFail.prototype.payload;
}
export class DeleteUserPaymentMethodSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    DeleteUserPaymentMethodSuccess.prototype.type;
    /** @type {?} */
    DeleteUserPaymentMethodSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvcGF5bWVudC1tZXRob2RzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLDJDQUEyQyxDQUFDOztBQUVuRCxNQUFNLE9BQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUMzRSxNQUFNLE9BQU8sOEJBQThCLEdBQ3pDLHVDQUF1Qzs7QUFDekMsTUFBTSxPQUFPLGlDQUFpQyxHQUM1QywwQ0FBMEM7O0FBRTVDLE1BQU0sT0FBTywrQkFBK0IsR0FDMUMsd0NBQXdDOztBQUMxQyxNQUFNLE9BQU8sb0NBQW9DLEdBQy9DLDZDQUE2Qzs7QUFDL0MsTUFBTSxPQUFPLHVDQUF1QyxHQUNsRCxnREFBZ0Q7O0FBRWxELE1BQU0sT0FBTywwQkFBMEIsR0FBRyxtQ0FBbUM7O0FBQzdFLE1BQU0sT0FBTywrQkFBK0IsR0FDMUMsd0NBQXdDOztBQUMxQyxNQUFNLE9BQU8sa0NBQWtDLEdBQzdDLDRDQUE0QztBQUU5QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCOzs7O0lBRTFELFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQztJQUcxQyxDQUFDO0NBQ0Y7OztJQUpDLHNDQUEwQzs7SUFDOUIseUNBQXNCOztBQUtwQyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsZ0JBQWdCOzs7O0lBRTlELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRHBCLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLDhCQUE4QixDQUFDO0lBRy9DLENBQUM7Q0FDRjs7O0lBSkMsMENBQStDOztJQUNuQyw2Q0FBbUI7O0FBS2pDLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxtQkFBbUI7Ozs7SUFFcEUsWUFBbUIsT0FBeUI7UUFDMUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQURuQyxTQUFJLEdBQUcsaUNBQWlDLENBQUM7SUFHbEQsQ0FBQztDQUNGOzs7SUFKQyw2Q0FBa0Q7O0lBQ3RDLGdEQUFnQzs7QUFLOUMsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGdCQUFnQjs7OztJQUUvRCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRFgsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsK0JBQStCLENBQUM7SUFHaEQsQ0FBQztDQUNGOzs7SUFKQywyQ0FBZ0Q7O0lBQ3BDLDhDQUFtQjs7QUFLakMsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGdCQUFnQjs7OztJQUVuRSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURwQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxvQ0FBb0MsQ0FBQztJQUdyRCxDQUFDO0NBQ0Y7OztJQUpDLCtDQUFxRDs7SUFDekMsa0RBQW1COztBQUtqQyxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsbUJBQW1COzs7O0lBRXpFLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx1Q0FBdUMsQ0FBQztJQUd4RCxDQUFDO0NBQ0Y7OztJQUpDLGtEQUF3RDs7SUFDNUMscURBQW1COztBQUtqQyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCOzs7O0lBRTNELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRywwQkFBMEIsQ0FBQztJQUczQyxDQUFDO0NBQ0Y7OztJQUpDLHVDQUEyQzs7SUFDL0IsMENBQW1COztBQUtqQyxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZ0JBQWdCOzs7O0lBRS9ELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRHBCLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBR2hELENBQUM7Q0FDRjs7O0lBSkMsMkNBQWdEOztJQUNwQyw4Q0FBbUI7O0FBS2pDLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxtQkFBbUI7Ozs7SUFFckUsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQURYLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtDQUFrQyxDQUFDO0lBR25ELENBQUM7Q0FDRjs7O0lBSkMsOENBQW1EOztJQUN2QyxpREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVU0VSX1BBWU1FTlRfTUVUSE9EUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQge1xuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTID0gJ1tVc2VyXSBMb2FkIFVzZXIgUGF5bWVudCBNZXRob2RzJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTX0ZBSUwgPVxuICAnW1VzZXJdIExvYWQgVXNlciBQYXltZW50IE1ldGhvZHMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EU19TVUNDRVNTID1cbiAgJ1tVc2VyXSBMb2FkIFVzZXIgUGF5bWVudCBNZXRob2RzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRCA9XG4gICdbVXNlcl0gU2V0IERlZmF1bHQgVXNlciBQYXltZW50IE1ldGhvZCc7XG5leHBvcnQgY29uc3QgU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRF9GQUlMID1cbiAgJ1tVc2VyXSBTZXQgRGVmYXVsdCBVc2VyIFBheW1lbnQgTWV0aG9kIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0RfU1VDQ0VTUyA9XG4gICdbVXNlcl0gU2V0IERlZmF1bHQgVXNlciBQYXltZW50IE1ldGhvZCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1BBWU1FTlRfTUVUSE9EID0gJ1tVc2VyXSBEZWxldGUgVXNlciBQYXltZW50IE1ldGhvZCc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0RfRkFJTCA9XG4gICdbVXNlcl0gRGVsZXRlIFVzZXIgUGF5bWVudCBNZXRob2QgRmFpbCc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0RfU1VDQ0VTUyA9XG4gICdbVXNlcl0gRGVsZXRlIFVzZXIgIFBheW1lbnQgTWV0aG9kIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJQYXltZW50TWV0aG9kcyBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJQYXltZW50TWV0aG9kc0ZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJQYXltZW50TWV0aG9kc1N1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBheW1lbnREZXRhaWxzW10pIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZCBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJQYXltZW50TWV0aG9kIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlclBheW1lbnRNZXRob2RGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVVc2VyUGF5bWVudE1ldGhvZFN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9VU0VSX1BBWU1FTlRfTUVUSE9EX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24gPVxuICB8IExvYWRVc2VyUGF5bWVudE1ldGhvZHNcbiAgfCBMb2FkVXNlclBheW1lbnRNZXRob2RzRmFpbFxuICB8IExvYWRVc2VyUGF5bWVudE1ldGhvZHNTdWNjZXNzXG4gIHwgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kXG4gIHwgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kRmFpbFxuICB8IFNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZFN1Y2Nlc3NcbiAgfCBEZWxldGVVc2VyUGF5bWVudE1ldGhvZFxuICB8IERlbGV0ZVVzZXJQYXltZW50TWV0aG9kRmFpbFxuICB8IERlbGV0ZVVzZXJQYXltZW50TWV0aG9kU3VjY2VzcztcbiJdfQ==