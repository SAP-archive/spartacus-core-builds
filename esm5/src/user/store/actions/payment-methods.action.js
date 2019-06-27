/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { USER_PAYMENT_METHODS } from '../user-state';
/** @type {?} */
export var LOAD_USER_PAYMENT_METHODS = '[User] Load User Payment Methods';
/** @type {?} */
export var LOAD_USER_PAYMENT_METHODS_FAIL = '[User] Load User Payment Methods Fail';
/** @type {?} */
export var LOAD_USER_PAYMENT_METHODS_SUCCESS = '[User] Load User Payment Methods Success';
/** @type {?} */
export var SET_DEFAULT_USER_PAYMENT_METHOD = '[User] Set Default User Payment Method';
/** @type {?} */
export var SET_DEFAULT_USER_PAYMENT_METHOD_FAIL = '[User] Set Default User Payment Method Fail';
/** @type {?} */
export var SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS = '[User] Set Default User Payment Method Success';
/** @type {?} */
export var DELETE_USER_PAYMENT_METHOD = '[User] Delete User Payment Method';
/** @type {?} */
export var DELETE_USER_PAYMENT_METHOD_FAIL = '[User] Delete User Payment Method Fail';
/** @type {?} */
export var DELETE_USER_PAYMENT_METHOD_SUCCESS = '[User] Delete User  Payment Method Success';
var LoadUserPaymentMethods = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserPaymentMethods, _super);
    function LoadUserPaymentMethods(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_PAYMENT_METHODS;
        return _this;
    }
    return LoadUserPaymentMethods;
}(StateLoaderActions.LoaderLoadAction));
export { LoadUserPaymentMethods };
if (false) {
    /** @type {?} */
    LoadUserPaymentMethods.prototype.type;
    /** @type {?} */
    LoadUserPaymentMethods.prototype.payload;
}
var LoadUserPaymentMethodsFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserPaymentMethodsFail, _super);
    function LoadUserPaymentMethodsFail(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_PAYMENT_METHODS_FAIL;
        return _this;
    }
    return LoadUserPaymentMethodsFail;
}(StateLoaderActions.LoaderFailAction));
export { LoadUserPaymentMethodsFail };
if (false) {
    /** @type {?} */
    LoadUserPaymentMethodsFail.prototype.type;
    /** @type {?} */
    LoadUserPaymentMethodsFail.prototype.payload;
}
var LoadUserPaymentMethodsSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserPaymentMethodsSuccess, _super);
    function LoadUserPaymentMethodsSuccess(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_PAYMENT_METHODS_SUCCESS;
        return _this;
    }
    return LoadUserPaymentMethodsSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { LoadUserPaymentMethodsSuccess };
if (false) {
    /** @type {?} */
    LoadUserPaymentMethodsSuccess.prototype.type;
    /** @type {?} */
    LoadUserPaymentMethodsSuccess.prototype.payload;
}
var SetDefaultUserPaymentMethod = /** @class */ (function (_super) {
    tslib_1.__extends(SetDefaultUserPaymentMethod, _super);
    function SetDefaultUserPaymentMethod(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = SET_DEFAULT_USER_PAYMENT_METHOD;
        return _this;
    }
    return SetDefaultUserPaymentMethod;
}(StateLoaderActions.LoaderLoadAction));
export { SetDefaultUserPaymentMethod };
if (false) {
    /** @type {?} */
    SetDefaultUserPaymentMethod.prototype.type;
    /** @type {?} */
    SetDefaultUserPaymentMethod.prototype.payload;
}
var SetDefaultUserPaymentMethodFail = /** @class */ (function (_super) {
    tslib_1.__extends(SetDefaultUserPaymentMethodFail, _super);
    function SetDefaultUserPaymentMethodFail(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS, payload) || this;
        _this.payload = payload;
        _this.type = SET_DEFAULT_USER_PAYMENT_METHOD_FAIL;
        return _this;
    }
    return SetDefaultUserPaymentMethodFail;
}(StateLoaderActions.LoaderFailAction));
export { SetDefaultUserPaymentMethodFail };
if (false) {
    /** @type {?} */
    SetDefaultUserPaymentMethodFail.prototype.type;
    /** @type {?} */
    SetDefaultUserPaymentMethodFail.prototype.payload;
}
var SetDefaultUserPaymentMethodSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(SetDefaultUserPaymentMethodSuccess, _super);
    function SetDefaultUserPaymentMethodSuccess(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS;
        return _this;
    }
    return SetDefaultUserPaymentMethodSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { SetDefaultUserPaymentMethodSuccess };
if (false) {
    /** @type {?} */
    SetDefaultUserPaymentMethodSuccess.prototype.type;
    /** @type {?} */
    SetDefaultUserPaymentMethodSuccess.prototype.payload;
}
var DeleteUserPaymentMethod = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteUserPaymentMethod, _super);
    function DeleteUserPaymentMethod(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_PAYMENT_METHOD;
        return _this;
    }
    return DeleteUserPaymentMethod;
}(StateLoaderActions.LoaderLoadAction));
export { DeleteUserPaymentMethod };
if (false) {
    /** @type {?} */
    DeleteUserPaymentMethod.prototype.type;
    /** @type {?} */
    DeleteUserPaymentMethod.prototype.payload;
}
var DeleteUserPaymentMethodFail = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteUserPaymentMethodFail, _super);
    function DeleteUserPaymentMethodFail(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS, payload) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_PAYMENT_METHOD_FAIL;
        return _this;
    }
    return DeleteUserPaymentMethodFail;
}(StateLoaderActions.LoaderFailAction));
export { DeleteUserPaymentMethodFail };
if (false) {
    /** @type {?} */
    DeleteUserPaymentMethodFail.prototype.type;
    /** @type {?} */
    DeleteUserPaymentMethodFail.prototype.payload;
}
var DeleteUserPaymentMethodSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteUserPaymentMethodSuccess, _super);
    function DeleteUserPaymentMethodSuccess(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_PAYMENT_METHOD_SUCCESS;
        return _this;
    }
    return DeleteUserPaymentMethodSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { DeleteUserPaymentMethodSuccess };
if (false) {
    /** @type {?} */
    DeleteUserPaymentMethodSuccess.prototype.type;
    /** @type {?} */
    DeleteUserPaymentMethodSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvcGF5bWVudC1tZXRob2RzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFckQsTUFBTSxLQUFPLHlCQUF5QixHQUFHLGtDQUFrQzs7QUFDM0UsTUFBTSxLQUFPLDhCQUE4QixHQUN6Qyx1Q0FBdUM7O0FBQ3pDLE1BQU0sS0FBTyxpQ0FBaUMsR0FDNUMsMENBQTBDOztBQUU1QyxNQUFNLEtBQU8sK0JBQStCLEdBQzFDLHdDQUF3Qzs7QUFDMUMsTUFBTSxLQUFPLG9DQUFvQyxHQUMvQyw2Q0FBNkM7O0FBQy9DLE1BQU0sS0FBTyx1Q0FBdUMsR0FDbEQsZ0RBQWdEOztBQUVsRCxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsbUNBQW1DOztBQUM3RSxNQUFNLEtBQU8sK0JBQStCLEdBQzFDLHdDQUF3Qzs7QUFDMUMsTUFBTSxLQUFPLGtDQUFrQyxHQUM3Qyw0Q0FBNEM7QUFFOUM7SUFBNEMsa0RBQW1DO0lBRTdFLGdDQUFtQixPQUFlO1FBQWxDLFlBQ0Usa0JBQU0sb0JBQW9CLENBQUMsU0FDNUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcseUJBQXlCLENBQUM7O0lBRzFDLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0QyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLOUU7Ozs7SUFKQyxzQ0FBMEM7O0lBQzlCLHlDQUFzQjs7QUFLcEM7SUFBZ0Qsc0RBQW1DO0lBRWpGLG9DQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sb0JBQW9CLEVBQUUsT0FBTyxDQUFDLFNBQ3JD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ICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IFVTRVJfUEFZTUVOVF9NRVRIT0RTIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTID0gJ1tVc2VyXSBMb2FkIFVzZXIgUGF5bWVudCBNZXRob2RzJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTX0ZBSUwgPVxuICAnW1VzZXJdIExvYWQgVXNlciBQYXltZW50IE1ldGhvZHMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EU19TVUNDRVNTID1cbiAgJ1tVc2VyXSBMb2FkIFVzZXIgUGF5bWVudCBNZXRob2RzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRCA9XG4gICdbVXNlcl0gU2V0IERlZmF1bHQgVXNlciBQYXltZW50IE1ldGhvZCc7XG5leHBvcnQgY29uc3QgU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRF9GQUlMID1cbiAgJ1tVc2VyXSBTZXQgRGVmYXVsdCBVc2VyIFBheW1lbnQgTWV0aG9kIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0RfU1VDQ0VTUyA9XG4gICdbVXNlcl0gU2V0IERlZmF1bHQgVXNlciBQYXltZW50IE1ldGhvZCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1BBWU1FTlRfTUVUSE9EID0gJ1tVc2VyXSBEZWxldGUgVXNlciBQYXltZW50IE1ldGhvZCc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0RfRkFJTCA9XG4gICdbVXNlcl0gRGVsZXRlIFVzZXIgUGF5bWVudCBNZXRob2QgRmFpbCc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0RfU1VDQ0VTUyA9XG4gICdbVXNlcl0gRGVsZXRlIFVzZXIgIFBheW1lbnQgTWV0aG9kIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJQYXltZW50TWV0aG9kcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyUGF5bWVudE1ldGhvZHNGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlclBheW1lbnRNZXRob2RzU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBheW1lbnREZXRhaWxzW10pIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZEZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJQYXltZW50TWV0aG9kIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJQYXltZW50TWV0aG9kRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9VU0VSX1BBWU1FTlRfTUVUSE9EX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJQYXltZW50TWV0aG9kU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9VU0VSX1BBWU1FTlRfTUVUSE9EX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24gPVxuICB8IExvYWRVc2VyUGF5bWVudE1ldGhvZHNcbiAgfCBMb2FkVXNlclBheW1lbnRNZXRob2RzRmFpbFxuICB8IExvYWRVc2VyUGF5bWVudE1ldGhvZHNTdWNjZXNzXG4gIHwgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kXG4gIHwgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kRmFpbFxuICB8IFNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZFN1Y2Nlc3NcbiAgfCBEZWxldGVVc2VyUGF5bWVudE1ldGhvZFxuICB8IERlbGV0ZVVzZXJQYXltZW50TWV0aG9kRmFpbFxuICB8IERlbGV0ZVVzZXJQYXltZW50TWV0aG9kU3VjY2VzcztcbiJdfQ==