import { __extends } from "tslib";
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, LoaderResetAction, } from '../../../state/utils/loader/loader.action';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateUtils } from '../../../state/utils/index';
import { USER_ORDER_DETAILS, CANCEL_ORDER_PROCESS_ID } from '../user-state';
export var LOAD_ORDER_DETAILS = '[User] Load Order Details';
export var LOAD_ORDER_DETAILS_FAIL = '[User] Load Order Details Fail';
export var LOAD_ORDER_DETAILS_SUCCESS = '[User] Load Order Details Success';
export var CLEAR_ORDER_DETAILS = '[User] Clear Order Details';
export var CANCEL_ORDER = '[User] Cancel Order';
export var CANCEL_ORDER_FAIL = '[User] Cancel Order Fail';
export var CANCEL_ORDER_SUCCESS = '[User] Cancel Order Success';
export var RESET_CANCEL_ORDER_PROCESS = '[User] Reset Cancel Order Process';
var LoadOrderDetails = /** @class */ (function (_super) {
    __extends(LoadOrderDetails, _super);
    function LoadOrderDetails(payload) {
        var _this = _super.call(this, USER_ORDER_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_DETAILS;
        return _this;
    }
    return LoadOrderDetails;
}(LoaderLoadAction));
export { LoadOrderDetails };
var LoadOrderDetailsFail = /** @class */ (function (_super) {
    __extends(LoadOrderDetailsFail, _super);
    function LoadOrderDetailsFail(payload) {
        var _this = _super.call(this, USER_ORDER_DETAILS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_DETAILS_FAIL;
        return _this;
    }
    return LoadOrderDetailsFail;
}(LoaderFailAction));
export { LoadOrderDetailsFail };
var LoadOrderDetailsSuccess = /** @class */ (function (_super) {
    __extends(LoadOrderDetailsSuccess, _super);
    function LoadOrderDetailsSuccess(payload) {
        var _this = _super.call(this, USER_ORDER_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_DETAILS_SUCCESS;
        return _this;
    }
    return LoadOrderDetailsSuccess;
}(LoaderSuccessAction));
export { LoadOrderDetailsSuccess };
var ClearOrderDetails = /** @class */ (function (_super) {
    __extends(ClearOrderDetails, _super);
    function ClearOrderDetails() {
        var _this = _super.call(this, USER_ORDER_DETAILS) || this;
        _this.type = CLEAR_ORDER_DETAILS;
        return _this;
    }
    return ClearOrderDetails;
}(LoaderResetAction));
export { ClearOrderDetails };
var CancelOrder = /** @class */ (function (_super) {
    __extends(CancelOrder, _super);
    function CancelOrder(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = CANCEL_ORDER;
        return _this;
    }
    return CancelOrder;
}(StateUtils.EntityLoadAction));
export { CancelOrder };
var CancelOrderFail = /** @class */ (function (_super) {
    __extends(CancelOrderFail, _super);
    function CancelOrderFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = CANCEL_ORDER_FAIL;
        return _this;
    }
    return CancelOrderFail;
}(StateUtils.EntityFailAction));
export { CancelOrderFail };
var CancelOrderSuccess = /** @class */ (function (_super) {
    __extends(CancelOrderSuccess, _super);
    function CancelOrderSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID) || this;
        _this.type = CANCEL_ORDER_SUCCESS;
        return _this;
    }
    return CancelOrderSuccess;
}(StateUtils.EntitySuccessAction));
export { CancelOrderSuccess };
var ResetCancelOrderProcess = /** @class */ (function (_super) {
    __extends(ResetCancelOrderProcess, _super);
    function ResetCancelOrderProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID) || this;
        _this.type = RESET_CANCEL_ORDER_PROCESS;
        return _this;
    }
    return ResetCancelOrderProcess;
}(StateUtils.EntityLoaderResetAction));
export { ResetCancelOrderProcess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL29yZGVyLWRldGFpbHMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsaUJBQWlCLEdBQ2xCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUUsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsMkJBQTJCLENBQUM7QUFDOUQsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsZ0NBQWdDLENBQUM7QUFDeEUsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQUcsbUNBQW1DLENBQUM7QUFDOUUsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsNEJBQTRCLENBQUM7QUFFaEUsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFHLHFCQUFxQixDQUFDO0FBQ2xELE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLDBCQUEwQixDQUFDO0FBQzVELE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHLDZCQUE2QixDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxJQUFNLDBCQUEwQixHQUFHLG1DQUFtQyxDQUFDO0FBRTlFO0lBQXNDLG9DQUFnQjtJQUVwRCwwQkFDUyxPQUdOO1FBSkgsWUFNRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQU5RLGFBQU8sR0FBUCxPQUFPLENBR2I7UUFMTSxVQUFJLEdBQUcsa0JBQWtCLENBQUM7O0lBUW5DLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFWRCxDQUFzQyxnQkFBZ0IsR0FVckQ7O0FBRUQ7SUFBMEMsd0NBQWdCO0lBRXhELDhCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sa0JBQWtCLEVBQUUsT0FBTyxDQUFDLFNBQ25DO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMEMsZ0JBQWdCLEdBS3pEOztBQUVEO0lBQTZDLDJDQUFtQjtJQUU5RCxpQ0FBbUIsT0FBYztRQUFqQyxZQUNFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQU87UUFEeEIsVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQUczQyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNkMsbUJBQW1CLEdBSy9EOztBQUVEO0lBQXVDLHFDQUFpQjtJQUV0RDtRQUFBLFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7UUFIUSxVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxpQkFBaUIsR0FLdkQ7O0FBRUQ7SUFBaUMsK0JBQTJCO0lBRTFELHFCQUNTLE9BSU47UUFMSCxZQU9FLGtCQUFNLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxTQUNoRDtRQVBRLGFBQU8sR0FBUCxPQUFPLENBSWI7UUFOTSxVQUFJLEdBQUcsWUFBWSxDQUFDOztJQVM3QixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBaUMsVUFBVSxDQUFDLGdCQUFnQixHQVczRDs7QUFFRDtJQUFxQyxtQ0FBMkI7SUFFOUQseUJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLFNBQ3pEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUdsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsVUFBVSxDQUFDLGdCQUFnQixHQUsvRDs7QUFFRDtJQUF3QyxzQ0FBOEI7SUFFcEU7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxTQUNoRDtRQUhRLFVBQUksR0FBRyxvQkFBb0IsQ0FBQzs7SUFHckMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLFVBQVUsQ0FBQyxtQkFBbUIsR0FLckU7O0FBRUQ7SUFBNkMsMkNBQWtDO0lBRTdFO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsU0FDaEQ7UUFIUSxVQUFJLEdBQUcsMEJBQTBCLENBQUM7O0lBRzNDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFMRCxDQUE2QyxVQUFVLENBQUMsdUJBQXVCLEdBSzlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3JkZXIsXG4gIENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbiAgTG9hZGVyUmVzZXRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgVVNFUl9PUkRFUl9ERVRBSUxTLCBDQU5DRUxfT1JERVJfUFJPQ0VTU19JRCB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9PUkRFUl9ERVRBSUxTID0gJ1tVc2VyXSBMb2FkIE9yZGVyIERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IExPQURfT1JERVJfREVUQUlMU19GQUlMID0gJ1tVc2VyXSBMb2FkIE9yZGVyIERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9PUkRFUl9ERVRBSUxTX1NVQ0NFU1MgPSAnW1VzZXJdIExvYWQgT3JkZXIgRGV0YWlscyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9PUkRFUl9ERVRBSUxTID0gJ1tVc2VyXSBDbGVhciBPcmRlciBEZXRhaWxzJztcblxuZXhwb3J0IGNvbnN0IENBTkNFTF9PUkRFUiA9ICdbVXNlcl0gQ2FuY2VsIE9yZGVyJztcbmV4cG9ydCBjb25zdCBDQU5DRUxfT1JERVJfRkFJTCA9ICdbVXNlcl0gQ2FuY2VsIE9yZGVyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENBTkNFTF9PUkRFUl9TVUNDRVNTID0gJ1tVc2VyXSBDYW5jZWwgT3JkZXIgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfQ0FOQ0VMX09SREVSX1BST0NFU1MgPSAnW1VzZXJdIFJlc2V0IENhbmNlbCBPcmRlciBQcm9jZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRPcmRlckRldGFpbHMgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1JERVJfREVUQUlMUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgb3JkZXJDb2RlOiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihVU0VSX09SREVSX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3JkZXJEZXRhaWxzRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9PUkRFUl9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX09SREVSX0RFVEFJTFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3JkZXJEZXRhaWxzU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9PUkRFUl9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBPcmRlcikge1xuICAgIHN1cGVyKFVTRVJfT1JERVJfREVUQUlMUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyT3JkZXJEZXRhaWxzIGV4dGVuZHMgTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfT1JERVJfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoVVNFUl9PUkRFUl9ERVRBSUxTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FuY2VsT3JkZXIgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FOQ0VMX09SREVSO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBvcmRlckNvZGU6IHN0cmluZztcbiAgICAgIGNhbmNlbFJlcXVlc3RJbnB1dDogQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0O1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBDQU5DRUxfT1JERVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbmNlbE9yZGVyRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQU5DRUxfT1JERVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQ0FOQ0VMX09SREVSX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlclN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FOQ0VMX09SREVSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQ0FOQ0VMX09SREVSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldENhbmNlbE9yZGVyUHJvY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfQ0FOQ0VMX09SREVSX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQ0FOQ0VMX09SREVSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIE9yZGVyRGV0YWlsc0FjdGlvbiA9XG4gIHwgTG9hZE9yZGVyRGV0YWlsc1xuICB8IExvYWRPcmRlckRldGFpbHNGYWlsXG4gIHwgTG9hZE9yZGVyRGV0YWlsc1N1Y2Nlc3NcbiAgfCBDbGVhck9yZGVyRGV0YWlsc1xuICB8IENhbmNlbE9yZGVyXG4gIHwgQ2FuY2VsT3JkZXJGYWlsXG4gIHwgQ2FuY2VsT3JkZXJTdWNjZXNzO1xuIl19