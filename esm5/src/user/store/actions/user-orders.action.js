import { __extends } from "tslib";
import { StateUtils } from '../../../state/utils/index';
import { USER_ORDERS } from '../user-state';
export var LOAD_USER_ORDERS = '[User] Load User Orders';
export var LOAD_USER_ORDERS_FAIL = '[User] Load User Orders Fail';
export var LOAD_USER_ORDERS_SUCCESS = '[User] Load User Orders Success';
export var CLEAR_USER_ORDERS = '[User] Clear User Orders';
var LoadUserOrders = /** @class */ (function (_super) {
    __extends(LoadUserOrders, _super);
    function LoadUserOrders(payload) {
        var _this = _super.call(this, USER_ORDERS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS;
        return _this;
    }
    return LoadUserOrders;
}(StateUtils.LoaderLoadAction));
export { LoadUserOrders };
var LoadUserOrdersFail = /** @class */ (function (_super) {
    __extends(LoadUserOrdersFail, _super);
    function LoadUserOrdersFail(payload) {
        var _this = _super.call(this, USER_ORDERS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS_FAIL;
        return _this;
    }
    return LoadUserOrdersFail;
}(StateUtils.LoaderFailAction));
export { LoadUserOrdersFail };
var LoadUserOrdersSuccess = /** @class */ (function (_super) {
    __extends(LoadUserOrdersSuccess, _super);
    function LoadUserOrdersSuccess(payload) {
        var _this = _super.call(this, USER_ORDERS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS_SUCCESS;
        return _this;
    }
    return LoadUserOrdersSuccess;
}(StateUtils.LoaderSuccessAction));
export { LoadUserOrdersSuccess };
var ClearUserOrders = /** @class */ (function (_super) {
    __extends(ClearUserOrders, _super);
    function ClearUserOrders() {
        var _this = _super.call(this, USER_ORDERS) || this;
        _this.type = CLEAR_USER_ORDERS;
        return _this;
    }
    return ClearUserOrders;
}(StateUtils.LoaderResetAction));
export { ClearUserOrders };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLW9yZGVycy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVDLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLHlCQUF5QixDQUFDO0FBQzFELE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHLDhCQUE4QixDQUFDO0FBQ3BFLE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUFHLGlDQUFpQyxDQUFDO0FBQzFFLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLDBCQUEwQixDQUFDO0FBRTVEO0lBQW9DLGtDQUEyQjtJQUU3RCx3QkFDUyxPQUtOO1FBTkgsWUFRRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFSUSxhQUFPLEdBQVAsT0FBTyxDQUtiO1FBUE0sVUFBSSxHQUFHLGdCQUFnQixDQUFDOztJQVVqQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBb0MsVUFBVSxDQUFDLGdCQUFnQixHQVk5RDs7QUFFRDtJQUF3QyxzQ0FBMkI7SUFFakUsNEJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxXQUFXLEVBQUUsT0FBTyxDQUFDLFNBQzVCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUd0QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBd0MsVUFBVSxDQUFDLGdCQUFnQixHQUtsRTs7QUFFRDtJQUEyQyx5Q0FBOEI7SUFFdkUsK0JBQW1CLE9BQXlCO1FBQTVDLFlBQ0Usa0JBQU0sV0FBVyxDQUFDLFNBQ25CO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWtCO1FBRG5DLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTJDLFVBQVUsQ0FBQyxtQkFBbUIsR0FLeEU7O0FBRUQ7SUFBcUMsbUNBQTRCO0lBRS9EO1FBQUEsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFIUSxVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyxVQUFVLENBQUMsaUJBQWlCLEdBS2hFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBVU0VSX09SREVSUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX09SREVSUyA9ICdbVXNlcl0gTG9hZCBVc2VyIE9yZGVycyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX09SREVSU19GQUlMID0gJ1tVc2VyXSBMb2FkIFVzZXIgT3JkZXJzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9PUkRFUlNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBVc2VyIE9yZGVycyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9VU0VSX09SREVSUyA9ICdbVXNlcl0gQ2xlYXIgVXNlciBPcmRlcnMnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJPcmRlcnMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX09SREVSUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgcGFnZVNpemU6IG51bWJlcjtcbiAgICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgICAgc29ydD86IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFVTRVJfT1JERVJTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJPcmRlcnNGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9PUkRFUlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfT1JERVJTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJPcmRlcnNTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9PUkRFUlNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IE9yZGVySGlzdG9yeUxpc3QpIHtcbiAgICBzdXBlcihVU0VSX09SREVSUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyVXNlck9yZGVycyBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfVVNFUl9PUkRFUlM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFVTRVJfT1JERVJTKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBVc2VyT3JkZXJzQWN0aW9uID1cbiAgfCBMb2FkVXNlck9yZGVyc1xuICB8IExvYWRVc2VyT3JkZXJzRmFpbFxuICB8IExvYWRVc2VyT3JkZXJzU3VjY2Vzc1xuICB8IENsZWFyVXNlck9yZGVycztcbiJdfQ==