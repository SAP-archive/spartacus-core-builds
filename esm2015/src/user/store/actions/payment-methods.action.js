/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvcGF5bWVudC1tZXRob2RzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLDJDQUEyQyxDQUFDOztBQUduRCxNQUFNLE9BQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUMzRSxNQUFNLE9BQU8sOEJBQThCLEdBQ3pDLHVDQUF1Qzs7QUFDekMsTUFBTSxPQUFPLGlDQUFpQyxHQUM1QywwQ0FBMEM7O0FBRTVDLE1BQU0sT0FBTywrQkFBK0IsR0FDMUMsd0NBQXdDOztBQUMxQyxNQUFNLE9BQU8sb0NBQW9DLEdBQy9DLDZDQUE2Qzs7QUFDL0MsTUFBTSxPQUFPLHVDQUF1QyxHQUNsRCxnREFBZ0Q7O0FBRWxELE1BQU0sT0FBTywwQkFBMEIsR0FBRyxtQ0FBbUM7O0FBQzdFLE1BQU0sT0FBTywrQkFBK0IsR0FDMUMsd0NBQXdDOztBQUMxQyxNQUFNLE9BQU8sa0NBQWtDLEdBQzdDLDRDQUE0QztBQUU5QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCOzs7O0lBRTFELFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQztJQUcxQyxDQUFDO0NBQ0Y7OztJQUpDLHNDQUEwQzs7SUFDOUIseUNBQXNCOztBQUtwQyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsZ0JBQWdCOzs7O0lBRTlELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRHBCLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLDhCQUE4QixDQUFDO0lBRy9DLENBQUM7Q0FDRjs7O0lBSkMsMENBQStDOztJQUNuQyw2Q0FBbUI7O0FBS2pDLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxtQkFBbUI7Ozs7SUFFcEUsWUFBbUIsT0FBeUI7UUFDMUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQURuQyxTQUFJLEdBQUcsaUNBQWlDLENBQUM7SUFHbEQsQ0FBQztDQUNGOzs7SUFKQyw2Q0FBa0Q7O0lBQ3RDLGdEQUFnQzs7QUFLOUMsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGdCQUFnQjs7OztJQUUvRCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRFgsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsK0JBQStCLENBQUM7SUFHaEQsQ0FBQztDQUNGOzs7SUFKQywyQ0FBZ0Q7O0lBQ3BDLDhDQUFtQjs7QUFLakMsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGdCQUFnQjs7OztJQUVuRSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURwQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxvQ0FBb0MsQ0FBQztJQUdyRCxDQUFDO0NBQ0Y7OztJQUpDLCtDQUFxRDs7SUFDekMsa0RBQW1COztBQUtqQyxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsbUJBQW1COzs7O0lBRXpFLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx1Q0FBdUMsQ0FBQztJQUd4RCxDQUFDO0NBQ0Y7OztJQUpDLGtEQUF3RDs7SUFDNUMscURBQW1COztBQUtqQyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCOzs7O0lBRTNELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRywwQkFBMEIsQ0FBQztJQUczQyxDQUFDO0NBQ0Y7OztJQUpDLHVDQUEyQzs7SUFDL0IsMENBQW1COztBQUtqQyxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZ0JBQWdCOzs7O0lBRS9ELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRHBCLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBR2hELENBQUM7Q0FDRjs7O0lBSkMsMkNBQWdEOztJQUNwQyw4Q0FBbUI7O0FBS2pDLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxtQkFBbUI7Ozs7SUFFckUsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQURYLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtDQUFrQyxDQUFDO0lBR25ELENBQUM7Q0FDRjs7O0lBSkMsOENBQW1EOztJQUN2QyxpREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVU0VSX1BBWU1FTlRfTUVUSE9EUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFMgPSAnW1VzZXJdIExvYWQgVXNlciBQYXltZW50IE1ldGhvZHMnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFNfRkFJTCA9XG4gICdbVXNlcl0gTG9hZCBVc2VyIFBheW1lbnQgTWV0aG9kcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTX1NVQ0NFU1MgPVxuICAnW1VzZXJdIExvYWQgVXNlciBQYXltZW50IE1ldGhvZHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EID1cbiAgJ1tVc2VyXSBTZXQgRGVmYXVsdCBVc2VyIFBheW1lbnQgTWV0aG9kJztcbmV4cG9ydCBjb25zdCBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EX0ZBSUwgPVxuICAnW1VzZXJdIFNldCBEZWZhdWx0IFVzZXIgUGF5bWVudCBNZXRob2QgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRF9TVUNDRVNTID1cbiAgJ1tVc2VyXSBTZXQgRGVmYXVsdCBVc2VyIFBheW1lbnQgTWV0aG9kIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0QgPSAnW1VzZXJdIERlbGV0ZSBVc2VyIFBheW1lbnQgTWV0aG9kJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRF9GQUlMID1cbiAgJ1tVc2VyXSBEZWxldGUgVXNlciBQYXltZW50IE1ldGhvZCBGYWlsJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRF9TVUNDRVNTID1cbiAgJ1tVc2VyXSBEZWxldGUgVXNlciAgUGF5bWVudCBNZXRob2QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlclBheW1lbnRNZXRob2RzIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlclBheW1lbnRNZXRob2RzRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlclBheW1lbnRNZXRob2RzU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudERldGFpbHNbXSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZFN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlclBheW1lbnRNZXRob2QgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9VU0VSX1BBWU1FTlRfTUVUSE9EO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVVc2VyUGF5bWVudE1ldGhvZEZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9VU0VSX1BBWU1FTlRfTUVUSE9EX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJQYXltZW50TWV0aG9kU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFVzZXJQYXltZW50TWV0aG9kc0FjdGlvbiA9XG4gIHwgTG9hZFVzZXJQYXltZW50TWV0aG9kc1xuICB8IExvYWRVc2VyUGF5bWVudE1ldGhvZHNGYWlsXG4gIHwgTG9hZFVzZXJQYXltZW50TWV0aG9kc1N1Y2Nlc3NcbiAgfCBTZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RcbiAgfCBTZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RGYWlsXG4gIHwgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kU3VjY2Vzc1xuICB8IERlbGV0ZVVzZXJQYXltZW50TWV0aG9kXG4gIHwgRGVsZXRlVXNlclBheW1lbnRNZXRob2RGYWlsXG4gIHwgRGVsZXRlVXNlclBheW1lbnRNZXRob2RTdWNjZXNzO1xuIl19