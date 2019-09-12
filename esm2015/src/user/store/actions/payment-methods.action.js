/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions } from '../../../state/utils/index';
import { USER_PAYMENT_METHODS } from '../user-state';
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
export class LoadUserPaymentMethods extends StateLoaderActions.LoaderLoadAction {
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
export class LoadUserPaymentMethodsFail extends StateLoaderActions.LoaderFailAction {
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
export class LoadUserPaymentMethodsSuccess extends StateLoaderActions.LoaderSuccessAction {
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
export class SetDefaultUserPaymentMethod extends StateLoaderActions.LoaderLoadAction {
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
export class SetDefaultUserPaymentMethodFail extends StateLoaderActions.LoaderFailAction {
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
export class SetDefaultUserPaymentMethodSuccess extends StateLoaderActions.LoaderSuccessAction {
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
export class DeleteUserPaymentMethod extends StateLoaderActions.LoaderLoadAction {
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
export class DeleteUserPaymentMethodFail extends StateLoaderActions.LoaderFailAction {
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
export class DeleteUserPaymentMethodSuccess extends StateLoaderActions.LoaderSuccessAction {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvcGF5bWVudC1tZXRob2RzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVyRCxNQUFNLE9BQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUMzRSxNQUFNLE9BQU8sOEJBQThCLEdBQ3pDLHVDQUF1Qzs7QUFDekMsTUFBTSxPQUFPLGlDQUFpQyxHQUM1QywwQ0FBMEM7O0FBRTVDLE1BQU0sT0FBTywrQkFBK0IsR0FDMUMsd0NBQXdDOztBQUMxQyxNQUFNLE9BQU8sb0NBQW9DLEdBQy9DLDZDQUE2Qzs7QUFDL0MsTUFBTSxPQUFPLHVDQUF1QyxHQUNsRCxnREFBZ0Q7O0FBRWxELE1BQU0sT0FBTywwQkFBMEIsR0FBRyxtQ0FBbUM7O0FBQzdFLE1BQU0sT0FBTywrQkFBK0IsR0FDMUMsd0NBQXdDOztBQUMxQyxNQUFNLE9BQU8sa0NBQWtDLEdBQzdDLDRDQUE0QztBQUU5QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsa0JBQWtCLENBQUMsZ0JBQWdCOzs7O0lBRTdFLFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQztJQUcxQyxDQUFDO0NBQ0Y7OztJQUpDLHNDQUEwQzs7SUFDOUIseUNBQXNCOztBQUtwQyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsa0JBQWtCLENBQUMsZ0JBQWdCOzs7O0lBRWpGLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRHBCLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLDhCQUE4QixDQUFDO0lBRy9DLENBQUM7Q0FDRjs7O0lBSkMsMENBQStDOztJQUNuQyw2Q0FBbUI7O0FBS2pDLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxrQkFBa0IsQ0FBQyxtQkFBbUI7Ozs7SUFFdkYsWUFBbUIsT0FBeUI7UUFDMUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQURuQyxTQUFJLEdBQUcsaUNBQWlDLENBQUM7SUFHbEQsQ0FBQztDQUNGOzs7SUFKQyw2Q0FBa0Q7O0lBQ3RDLGdEQUFnQzs7QUFLOUMsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUVsRixZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRFgsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsK0JBQStCLENBQUM7SUFHaEQsQ0FBQztDQUNGOzs7SUFKQywyQ0FBZ0Q7O0lBQ3BDLDhDQUFtQjs7QUFLakMsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUV0RixZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURwQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxvQ0FBb0MsQ0FBQztJQUdyRCxDQUFDO0NBQ0Y7OztJQUpDLCtDQUFxRDs7SUFDekMsa0RBQW1COztBQUtqQyxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsa0JBQWtCLENBQUMsbUJBQW1COzs7O0lBRTVGLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx1Q0FBdUMsQ0FBQztJQUd4RCxDQUFDO0NBQ0Y7OztJQUpDLGtEQUF3RDs7SUFDNUMscURBQW1COztBQUtqQyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsa0JBQWtCLENBQUMsZ0JBQWdCOzs7O0lBRTlFLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRywwQkFBMEIsQ0FBQztJQUczQyxDQUFDO0NBQ0Y7OztJQUpDLHVDQUEyQzs7SUFDL0IsMENBQW1COztBQUtqQyxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsa0JBQWtCLENBQUMsZ0JBQWdCOzs7O0lBRWxGLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRHBCLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBR2hELENBQUM7Q0FDRjs7O0lBSkMsMkNBQWdEOztJQUNwQyw4Q0FBbUI7O0FBS2pDLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxrQkFBa0IsQ0FBQyxtQkFBbUI7Ozs7SUFFeEYsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQURYLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtDQUFrQyxDQUFDO0lBR25ELENBQUM7Q0FDRjs7O0lBSkMsOENBQW1EOztJQUN2QyxpREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgVVNFUl9QQVlNRU5UX01FVEhPRFMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFMgPSAnW1VzZXJdIExvYWQgVXNlciBQYXltZW50IE1ldGhvZHMnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFNfRkFJTCA9XG4gICdbVXNlcl0gTG9hZCBVc2VyIFBheW1lbnQgTWV0aG9kcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTX1NVQ0NFU1MgPVxuICAnW1VzZXJdIExvYWQgVXNlciBQYXltZW50IE1ldGhvZHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EID1cbiAgJ1tVc2VyXSBTZXQgRGVmYXVsdCBVc2VyIFBheW1lbnQgTWV0aG9kJztcbmV4cG9ydCBjb25zdCBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EX0ZBSUwgPVxuICAnW1VzZXJdIFNldCBEZWZhdWx0IFVzZXIgUGF5bWVudCBNZXRob2QgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRF9TVUNDRVNTID1cbiAgJ1tVc2VyXSBTZXQgRGVmYXVsdCBVc2VyIFBheW1lbnQgTWV0aG9kIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0QgPSAnW1VzZXJdIERlbGV0ZSBVc2VyIFBheW1lbnQgTWV0aG9kJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRF9GQUlMID1cbiAgJ1tVc2VyXSBEZWxldGUgVXNlciBQYXltZW50IE1ldGhvZCBGYWlsJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRF9TVUNDRVNTID1cbiAgJ1tVc2VyXSBEZWxldGUgVXNlciAgUGF5bWVudCBNZXRob2QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlclBheW1lbnRNZXRob2RzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJQYXltZW50TWV0aG9kc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyUGF5bWVudE1ldGhvZHNTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudERldGFpbHNbXSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlclBheW1lbnRNZXRob2QgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlclBheW1lbnRNZXRob2RGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlclBheW1lbnRNZXRob2RTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFVzZXJQYXltZW50TWV0aG9kc0FjdGlvbiA9XG4gIHwgTG9hZFVzZXJQYXltZW50TWV0aG9kc1xuICB8IExvYWRVc2VyUGF5bWVudE1ldGhvZHNGYWlsXG4gIHwgTG9hZFVzZXJQYXltZW50TWV0aG9kc1N1Y2Nlc3NcbiAgfCBTZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RcbiAgfCBTZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RGYWlsXG4gIHwgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kU3VjY2Vzc1xuICB8IERlbGV0ZVVzZXJQYXltZW50TWV0aG9kXG4gIHwgRGVsZXRlVXNlclBheW1lbnRNZXRob2RGYWlsXG4gIHwgRGVsZXRlVXNlclBheW1lbnRNZXRob2RTdWNjZXNzO1xuIl19