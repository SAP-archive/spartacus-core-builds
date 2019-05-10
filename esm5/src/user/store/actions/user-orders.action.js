/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { USER_ORDERS } from '../user-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
/** @type {?} */
export var LOAD_USER_ORDERS = '[User] Load User Orders';
/** @type {?} */
export var LOAD_USER_ORDERS_FAIL = '[User] Load User Orders Fail';
/** @type {?} */
export var LOAD_USER_ORDERS_SUCCESS = '[User] Load User Orders Success';
/** @type {?} */
export var CLEAR_USER_ORDERS = '[User] Clear User Orders';
var LoadUserOrders = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserOrders, _super);
    function LoadUserOrders(payload) {
        var _this = _super.call(this, USER_ORDERS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS;
        return _this;
    }
    return LoadUserOrders;
}(LoaderLoadAction));
export { LoadUserOrders };
if (false) {
    /** @type {?} */
    LoadUserOrders.prototype.type;
    /** @type {?} */
    LoadUserOrders.prototype.payload;
}
var LoadUserOrdersFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserOrdersFail, _super);
    function LoadUserOrdersFail(payload) {
        var _this = _super.call(this, USER_ORDERS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS_FAIL;
        return _this;
    }
    return LoadUserOrdersFail;
}(LoaderFailAction));
export { LoadUserOrdersFail };
if (false) {
    /** @type {?} */
    LoadUserOrdersFail.prototype.type;
    /** @type {?} */
    LoadUserOrdersFail.prototype.payload;
}
var LoadUserOrdersSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserOrdersSuccess, _super);
    function LoadUserOrdersSuccess(payload) {
        var _this = _super.call(this, USER_ORDERS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS_SUCCESS;
        return _this;
    }
    return LoadUserOrdersSuccess;
}(LoaderSuccessAction));
export { LoadUserOrdersSuccess };
if (false) {
    /** @type {?} */
    LoadUserOrdersSuccess.prototype.type;
    /** @type {?} */
    LoadUserOrdersSuccess.prototype.payload;
}
var ClearUserOrders = /** @class */ (function () {
    function ClearUserOrders() {
        this.type = CLEAR_USER_ORDERS;
    }
    return ClearUserOrders;
}());
export { ClearUserOrders };
if (false) {
    /** @type {?} */
    ClearUserOrders.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLW9yZGVycy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLDJDQUEyQyxDQUFDOztBQUduRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLEtBQU8scUJBQXFCLEdBQUcsOEJBQThCOztBQUNuRSxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUN6RSxNQUFNLEtBQU8saUJBQWlCLEdBQUcsMEJBQTBCO0FBRTNEO0lBQW9DLDBDQUFnQjtJQUVsRCx3QkFDUyxPQUtOO1FBTkgsWUFRRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFSUSxhQUFPLEdBQVAsT0FBTyxDQUtiO1FBUE0sVUFBSSxHQUFHLGdCQUFnQixDQUFDOztJQVVqQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBb0MsZ0JBQWdCLEdBWW5EOzs7O0lBWEMsOEJBQWlDOztJQUUvQixpQ0FLQzs7QUFNTDtJQUF3Qyw4Q0FBZ0I7SUFFdEQsNEJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxXQUFXLEVBQUUsT0FBTyxDQUFDLFNBQzVCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUd0QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBd0MsZ0JBQWdCLEdBS3ZEOzs7O0lBSkMsa0NBQXNDOztJQUMxQixxQ0FBbUI7O0FBS2pDO0lBQTJDLGlEQUFtQjtJQUU1RCwrQkFBbUIsT0FBeUI7UUFBNUMsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFEbkMsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsbUJBQW1CLEdBSzdEOzs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBZ0M7O0FBSzlDO0lBRUU7UUFEUyxTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDbkIsQ0FBQztJQUNsQixzQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsK0JBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVVNFUl9PUkRFUlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7XG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfT1JERVJTID0gJ1tVc2VyXSBMb2FkIFVzZXIgT3JkZXJzJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfT1JERVJTX0ZBSUwgPSAnW1VzZXJdIExvYWQgVXNlciBPcmRlcnMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX09SREVSU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIFVzZXIgT3JkZXJzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1VTRVJfT1JERVJTID0gJ1tVc2VyXSBDbGVhciBVc2VyIE9yZGVycyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlck9yZGVycyBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX09SREVSUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgcGFnZVNpemU6IG51bWJlcjtcbiAgICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgICAgc29ydD86IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFVTRVJfT1JERVJTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJPcmRlcnNGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfT1JERVJTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX09SREVSUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyT3JkZXJzU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX09SREVSU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT3JkZXJIaXN0b3J5TGlzdCkge1xuICAgIHN1cGVyKFVTRVJfT1JERVJTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJVc2VyT3JkZXJzIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1VTRVJfT1JERVJTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJPcmRlcnNBY3Rpb24gPVxuICB8IExvYWRVc2VyT3JkZXJzXG4gIHwgTG9hZFVzZXJPcmRlcnNGYWlsXG4gIHwgTG9hZFVzZXJPcmRlcnNTdWNjZXNzXG4gIHwgQ2xlYXJVc2VyT3JkZXJzO1xuIl19