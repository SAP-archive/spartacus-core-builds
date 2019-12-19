/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { USER_ORDERS } from '../user-state';
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
export { LoadUserOrdersSuccess };
if (false) {
    /** @type {?} */
    LoadUserOrdersSuccess.prototype.type;
    /** @type {?} */
    LoadUserOrdersSuccess.prototype.payload;
}
var ClearUserOrders = /** @class */ (function (_super) {
    tslib_1.__extends(ClearUserOrders, _super);
    function ClearUserOrders() {
        var _this = _super.call(this, USER_ORDERS) || this;
        _this.type = CLEAR_USER_ORDERS;
        return _this;
    }
    return ClearUserOrders;
}(StateLoaderActions.LoaderResetAction));
export { ClearUserOrders };
if (false) {
    /** @type {?} */
    ClearUserOrders.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLW9yZGVycy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU1QyxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLEtBQU8scUJBQXFCLEdBQUcsOEJBQThCOztBQUNuRSxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUN6RSxNQUFNLEtBQU8saUJBQWlCLEdBQUcsMEJBQTBCO0FBRTNEO0lBQW9DLDBDQUFtQztJQUVyRSx3QkFDUyxPQUtOO1FBTkgsWUFRRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFSUSxhQUFPLEdBQVAsT0FBTyxDQUtiO1FBUE0sVUFBSSxHQUFHLGdCQUFnQixDQUFDOztJQVVqQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBb0Msa0JBQWtCLENBQUMsZ0JBQWdCLEdBWXRFOzs7O0lBWEMsOEJBQWlDOztJQUUvQixpQ0FLQzs7QUFNTDtJQUF3Qyw4Q0FBbUM7SUFFekUsNEJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxXQUFXLEVBQUUsT0FBTyxDQUFDLFNBQzVCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUd0QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBd0Msa0JBQWtCLENBQUMsZ0JBQWdCLEdBSzFFOzs7O0lBSkMsa0NBQXNDOztJQUMxQixxQ0FBbUI7O0FBS2pDO0lBQTJDLGlEQUFzQztJQUUvRSwrQkFBbUIsT0FBeUI7UUFBNUMsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFEbkMsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsa0JBQWtCLENBQUMsbUJBQW1CLEdBS2hGOzs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBZ0M7O0FBSzlDO0lBQXFDLDJDQUFvQztJQUV2RTtRQUFBLFlBQ0Usa0JBQU0sV0FBVyxDQUFDLFNBQ25CO1FBSFEsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUdsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsa0JBQWtCLENBQUMsaUJBQWlCLEdBS3hFOzs7O0lBSkMsK0JBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IFVTRVJfT1JERVJTIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfT1JERVJTID0gJ1tVc2VyXSBMb2FkIFVzZXIgT3JkZXJzJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfT1JERVJTX0ZBSUwgPSAnW1VzZXJdIExvYWQgVXNlciBPcmRlcnMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX09SREVSU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIFVzZXIgT3JkZXJzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1VTRVJfT1JERVJTID0gJ1tVc2VyXSBDbGVhciBVc2VyIE9yZGVycyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlck9yZGVycyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9PUkRFUlM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIHBhZ2VTaXplOiBudW1iZXI7XG4gICAgICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgICAgIHNvcnQ/OiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihVU0VSX09SREVSUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyT3JkZXJzRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9PUkRFUlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfT1JERVJTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJPcmRlcnNTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX09SREVSU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT3JkZXJIaXN0b3J5TGlzdCkge1xuICAgIHN1cGVyKFVTRVJfT1JERVJTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJVc2VyT3JkZXJzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1VTRVJfT1JERVJTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihVU0VSX09SREVSUyk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyc0FjdGlvbiA9XG4gIHwgTG9hZFVzZXJPcmRlcnNcbiAgfCBMb2FkVXNlck9yZGVyc0ZhaWxcbiAgfCBMb2FkVXNlck9yZGVyc1N1Y2Nlc3NcbiAgfCBDbGVhclVzZXJPcmRlcnM7XG4iXX0=