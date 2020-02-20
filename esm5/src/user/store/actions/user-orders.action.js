import { __extends } from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
export { LoadUserOrdersSuccess };
var ClearUserOrders = /** @class */ (function (_super) {
    __extends(ClearUserOrders, _super);
    function ClearUserOrders() {
        var _this = _super.call(this, USER_ORDERS) || this;
        _this.type = CLEAR_USER_ORDERS;
        return _this;
    }
    return ClearUserOrders;
}(StateLoaderActions.LoaderResetAction));
export { ClearUserOrders };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLW9yZGVycy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcseUJBQXlCLENBQUM7QUFDMUQsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQUcsOEJBQThCLENBQUM7QUFDcEUsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFDMUUsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsMEJBQTBCLENBQUM7QUFFNUQ7SUFBb0Msa0NBQW1DO0lBRXJFLHdCQUNTLE9BS047UUFOSCxZQVFFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQVJRLGFBQU8sR0FBUCxPQUFPLENBS2I7UUFQTSxVQUFJLEdBQUcsZ0JBQWdCLENBQUM7O0lBVWpDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFaRCxDQUFvQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FZdEU7O0FBRUQ7SUFBd0Msc0NBQW1DO0lBRXpFLDRCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sV0FBVyxFQUFFLE9BQU8sQ0FBQyxTQUM1QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFHdEMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLGtCQUFrQixDQUFDLGdCQUFnQixHQUsxRTs7QUFFRDtJQUEyQyx5Q0FBc0M7SUFFL0UsK0JBQW1CLE9BQXlCO1FBQTVDLFlBQ0Usa0JBQU0sV0FBVyxDQUFDLFNBQ25CO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWtCO1FBRG5DLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTJDLGtCQUFrQixDQUFDLG1CQUFtQixHQUtoRjs7QUFFRDtJQUFxQyxtQ0FBb0M7SUFFdkU7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQUhRLFVBQUksR0FBRyxpQkFBaUIsQ0FBQzs7SUFHbEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXFDLGtCQUFrQixDQUFDLGlCQUFpQixHQUt4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBVU0VSX09SREVSUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX09SREVSUyA9ICdbVXNlcl0gTG9hZCBVc2VyIE9yZGVycyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX09SREVSU19GQUlMID0gJ1tVc2VyXSBMb2FkIFVzZXIgT3JkZXJzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9PUkRFUlNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBVc2VyIE9yZGVycyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9VU0VSX09SREVSUyA9ICdbVXNlcl0gQ2xlYXIgVXNlciBPcmRlcnMnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJPcmRlcnMgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfT1JERVJTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBwYWdlU2l6ZTogbnVtYmVyO1xuICAgICAgY3VycmVudFBhZ2U/OiBudW1iZXI7XG4gICAgICBzb3J0Pzogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoVVNFUl9PUkRFUlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlck9yZGVyc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfT1JERVJTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX09SREVSUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyT3JkZXJzU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9PUkRFUlNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IE9yZGVySGlzdG9yeUxpc3QpIHtcbiAgICBzdXBlcihVU0VSX09SREVSUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyVXNlck9yZGVycyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9VU0VSX09SREVSUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoVVNFUl9PUkRFUlMpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJPcmRlcnNBY3Rpb24gPVxuICB8IExvYWRVc2VyT3JkZXJzXG4gIHwgTG9hZFVzZXJPcmRlcnNGYWlsXG4gIHwgTG9hZFVzZXJPcmRlcnNTdWNjZXNzXG4gIHwgQ2xlYXJVc2VyT3JkZXJzO1xuIl19