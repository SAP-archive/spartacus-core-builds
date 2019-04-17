/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { USER_PAYMENT_METHODS } from '../user-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
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
}(LoaderLoadAction));
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
}(LoaderFailAction));
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
}(LoaderSuccessAction));
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
}(LoaderLoadAction));
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
}(LoaderFailAction));
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
}(LoaderSuccessAction));
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
}(LoaderLoadAction));
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
}(LoaderFailAction));
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
}(LoaderSuccessAction));
export { DeleteUserPaymentMethodSuccess };
if (false) {
    /** @type {?} */
    DeleteUserPaymentMethodSuccess.prototype.type;
    /** @type {?} */
    DeleteUserPaymentMethodSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvcGF5bWVudC1tZXRob2RzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFbkQsTUFBTSxLQUFPLHlCQUF5QixHQUFHLGtDQUFrQzs7QUFDM0UsTUFBTSxLQUFPLDhCQUE4QixHQUN6Qyx1Q0FBdUM7O0FBQ3pDLE1BQU0sS0FBTyxpQ0FBaUMsR0FDNUMsMENBQTBDOztBQUU1QyxNQUFNLEtBQU8sK0JBQStCLEdBQzFDLHdDQUF3Qzs7QUFDMUMsTUFBTSxLQUFPLG9DQUFvQyxHQUMvQyw2Q0FBNkM7O0FBQy9DLE1BQU0sS0FBTyx1Q0FBdUMsR0FDbEQsZ0RBQWdEOztBQUVsRCxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsbUNBQW1DOztBQUM3RSxNQUFNLEtBQU8sK0JBQStCLEdBQzFDLHdDQUF3Qzs7QUFDMUMsTUFBTSxLQUFPLGtDQUFrQyxHQUM3Qyw0Q0FBNEM7QUFFOUM7SUFBNEMsa0RBQWdCO0lBRTFELGdDQUFtQixPQUFlO1FBQWxDLFlBQ0Usa0JBQU0sb0JBQW9CLENBQUMsU0FDNUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcseUJBQXlCLENBQUM7O0lBRzFDLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0QyxnQkFBZ0IsR0FLM0Q7Ozs7SUFKQyxzQ0FBMEM7O0lBQzlCLHlDQUFzQjs7QUFLcEM7SUFBZ0Qsc0RBQWdCO0lBRTlELG9DQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sb0JBQW9CLEVBQUUsT0FBTyxDQUFDLFNBQ3JDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLDhCQUE4QixDQUFDOztJQUcvQyxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBZ0QsZ0JBQWdCLEdBSy9EOzs7O0lBSkMsMENBQStDOztJQUNuQyw2Q0FBbUI7O0FBS2pDO0lBQW1ELHlEQUFtQjtJQUVwRSx1Q0FBbUIsT0FBeUI7UUFBNUMsWUFDRSxrQkFBTSxvQkFBb0IsQ0FBQyxTQUM1QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFrQjtRQURuQyxVQUFJLEdBQUcsaUNBQWlDLENBQUM7O0lBR2xELENBQUM7SUFDSCxvQ0FBQztBQUFELENBQUMsQUFMRCxDQUFtRCxtQkFBbUIsR0FLckU7Ozs7SUFKQyw2Q0FBa0Q7O0lBQ3RDLGdEQUFnQzs7QUFLOUM7SUFBaUQsdURBQWdCO0lBRS9ELHFDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sb0JBQW9CLENBQUMsU0FDNUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsK0JBQStCLENBQUM7O0lBR2hELENBQUM7SUFDSCxrQ0FBQztBQUFELENBQUMsQUFMRCxDQUFpRCxnQkFBZ0IsR0FLaEU7Ozs7SUFKQywyQ0FBZ0Q7O0lBQ3BDLDhDQUFtQjs7QUFLakM7SUFBcUQsMkRBQWdCO0lBRW5FLHlDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sb0JBQW9CLEVBQUUsT0FBTyxDQUFDLFNBQ3JDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLG9DQUFvQyxDQUFDOztJQUdyRCxDQUFDO0lBQ0gsc0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUQsZ0JBQWdCLEdBS3BFOzs7O0lBSkMsK0NBQXFEOztJQUN6QyxrREFBbUI7O0FBS2pDO0lBQXdELDhEQUFtQjtJQUV6RSw0Q0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLG9CQUFvQixDQUFDLFNBQzVCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHVDQUF1QyxDQUFDOztJQUd4RCxDQUFDO0lBQ0gseUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBd0QsbUJBQW1CLEdBSzFFOzs7O0lBSkMsa0RBQXdEOztJQUM1QyxxREFBbUI7O0FBS2pDO0lBQTZDLG1EQUFnQjtJQUUzRCxpQ0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLG9CQUFvQixDQUFDLFNBQzVCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQUczQyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNkMsZ0JBQWdCLEdBSzVEOzs7O0lBSkMsdUNBQTJDOztJQUMvQiwwQ0FBbUI7O0FBS2pDO0lBQWlELHVEQUFnQjtJQUUvRCxxQ0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxTQUNyQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRywrQkFBK0IsQ0FBQzs7SUFHaEQsQ0FBQztJQUNILGtDQUFDO0FBQUQsQ0FBQyxBQUxELENBQWlELGdCQUFnQixHQUtoRTs7OztJQUpDLDJDQUFnRDs7SUFDcEMsOENBQW1COztBQUtqQztJQUFvRCwwREFBbUI7SUFFckUsd0NBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxvQkFBb0IsQ0FBQyxTQUM1QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxrQ0FBa0MsQ0FBQzs7SUFHbkQsQ0FBQztJQUNILHFDQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9ELG1CQUFtQixHQUt0RTs7OztJQUpDLDhDQUFtRDs7SUFDdkMsaURBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVVNFUl9QQVlNRU5UX01FVEhPRFMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EUyA9ICdbVXNlcl0gTG9hZCBVc2VyIFBheW1lbnQgTWV0aG9kcyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EU19GQUlMID1cbiAgJ1tVc2VyXSBMb2FkIFVzZXIgUGF5bWVudCBNZXRob2RzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFNfU1VDQ0VTUyA9XG4gICdbVXNlcl0gTG9hZCBVc2VyIFBheW1lbnQgTWV0aG9kcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0QgPVxuICAnW1VzZXJdIFNldCBEZWZhdWx0IFVzZXIgUGF5bWVudCBNZXRob2QnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0RfRkFJTCA9XG4gICdbVXNlcl0gU2V0IERlZmF1bHQgVXNlciBQYXltZW50IE1ldGhvZCBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EX1NVQ0NFU1MgPVxuICAnW1VzZXJdIFNldCBEZWZhdWx0IFVzZXIgUGF5bWVudCBNZXRob2QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRCA9ICdbVXNlcl0gRGVsZXRlIFVzZXIgUGF5bWVudCBNZXRob2QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1BBWU1FTlRfTUVUSE9EX0ZBSUwgPVxuICAnW1VzZXJdIERlbGV0ZSBVc2VyIFBheW1lbnQgTWV0aG9kIEZhaWwnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1BBWU1FTlRfTUVUSE9EX1NVQ0NFU1MgPVxuICAnW1VzZXJdIERlbGV0ZSBVc2VyICBQYXltZW50IE1ldGhvZCBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyUGF5bWVudE1ldGhvZHMgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyUGF5bWVudE1ldGhvZHNGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyUGF5bWVudE1ldGhvZHNTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXltZW50RGV0YWlsc1tdKSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2QgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZEZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVVc2VyUGF5bWVudE1ldGhvZCBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJQYXltZW50TWV0aG9kRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlclBheW1lbnRNZXRob2RTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXNlclBheW1lbnRNZXRob2RzQWN0aW9uID1cbiAgfCBMb2FkVXNlclBheW1lbnRNZXRob2RzXG4gIHwgTG9hZFVzZXJQYXltZW50TWV0aG9kc0ZhaWxcbiAgfCBMb2FkVXNlclBheW1lbnRNZXRob2RzU3VjY2Vzc1xuICB8IFNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZFxuICB8IFNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZEZhaWxcbiAgfCBTZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RTdWNjZXNzXG4gIHwgRGVsZXRlVXNlclBheW1lbnRNZXRob2RcbiAgfCBEZWxldGVVc2VyUGF5bWVudE1ldGhvZEZhaWxcbiAgfCBEZWxldGVVc2VyUGF5bWVudE1ldGhvZFN1Y2Nlc3M7XG4iXX0=