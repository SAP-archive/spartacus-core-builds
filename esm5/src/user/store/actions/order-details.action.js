/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, LoaderResetAction, } from '../../../state/utils/loader/loader.action';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { USER_ORDER_DETAILS, CANCEL_ORDER_PROCESS_ID } from '../user-state';
/** @type {?} */
export var LOAD_ORDER_DETAILS = '[User] Load Order Details';
/** @type {?} */
export var LOAD_ORDER_DETAILS_FAIL = '[User] Load Order Details Fail';
/** @type {?} */
export var LOAD_ORDER_DETAILS_SUCCESS = '[User] Load Order Details Success';
/** @type {?} */
export var CLEAR_ORDER_DETAILS = '[User] Clear Order Details';
/** @type {?} */
export var CANCEL_ORDER = '[User] Cancel Order';
/** @type {?} */
export var CANCEL_ORDER_FAIL = '[User] Cancel Order Fail';
/** @type {?} */
export var CANCEL_ORDER_SUCCESS = '[User] Cancel Order Success';
/** @type {?} */
export var RESET_CANCEL_ORDER_PROCESS = '[User] Reset Cancel Order Process';
var LoadOrderDetails = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOrderDetails, _super);
    function LoadOrderDetails(payload) {
        var _this = _super.call(this, USER_ORDER_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_DETAILS;
        return _this;
    }
    return LoadOrderDetails;
}(LoaderLoadAction));
export { LoadOrderDetails };
if (false) {
    /** @type {?} */
    LoadOrderDetails.prototype.type;
    /** @type {?} */
    LoadOrderDetails.prototype.payload;
}
var LoadOrderDetailsFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOrderDetailsFail, _super);
    function LoadOrderDetailsFail(payload) {
        var _this = _super.call(this, USER_ORDER_DETAILS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_DETAILS_FAIL;
        return _this;
    }
    return LoadOrderDetailsFail;
}(LoaderFailAction));
export { LoadOrderDetailsFail };
if (false) {
    /** @type {?} */
    LoadOrderDetailsFail.prototype.type;
    /** @type {?} */
    LoadOrderDetailsFail.prototype.payload;
}
var LoadOrderDetailsSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOrderDetailsSuccess, _super);
    function LoadOrderDetailsSuccess(payload) {
        var _this = _super.call(this, USER_ORDER_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_DETAILS_SUCCESS;
        return _this;
    }
    return LoadOrderDetailsSuccess;
}(LoaderSuccessAction));
export { LoadOrderDetailsSuccess };
if (false) {
    /** @type {?} */
    LoadOrderDetailsSuccess.prototype.type;
    /** @type {?} */
    LoadOrderDetailsSuccess.prototype.payload;
}
var ClearOrderDetails = /** @class */ (function (_super) {
    tslib_1.__extends(ClearOrderDetails, _super);
    function ClearOrderDetails() {
        var _this = _super.call(this, USER_ORDER_DETAILS) || this;
        _this.type = CLEAR_ORDER_DETAILS;
        return _this;
    }
    return ClearOrderDetails;
}(LoaderResetAction));
export { ClearOrderDetails };
if (false) {
    /** @type {?} */
    ClearOrderDetails.prototype.type;
}
var CancelOrder = /** @class */ (function (_super) {
    tslib_1.__extends(CancelOrder, _super);
    function CancelOrder(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = CANCEL_ORDER;
        return _this;
    }
    return CancelOrder;
}(StateEntityLoaderActions.EntityLoadAction));
export { CancelOrder };
if (false) {
    /** @type {?} */
    CancelOrder.prototype.type;
    /** @type {?} */
    CancelOrder.prototype.payload;
}
var CancelOrderFail = /** @class */ (function (_super) {
    tslib_1.__extends(CancelOrderFail, _super);
    function CancelOrderFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = CANCEL_ORDER_FAIL;
        return _this;
    }
    return CancelOrderFail;
}(StateEntityLoaderActions.EntityFailAction));
export { CancelOrderFail };
if (false) {
    /** @type {?} */
    CancelOrderFail.prototype.type;
    /** @type {?} */
    CancelOrderFail.prototype.payload;
}
var CancelOrderSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CancelOrderSuccess, _super);
    function CancelOrderSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID) || this;
        _this.type = CANCEL_ORDER_SUCCESS;
        return _this;
    }
    return CancelOrderSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { CancelOrderSuccess };
if (false) {
    /** @type {?} */
    CancelOrderSuccess.prototype.type;
}
var ResetCancelOrderProcess = /** @class */ (function (_super) {
    tslib_1.__extends(ResetCancelOrderProcess, _super);
    function ResetCancelOrderProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID) || this;
        _this.type = RESET_CANCEL_ORDER_PROCESS;
        return _this;
    }
    return ResetCancelOrderProcess;
}(StateEntityLoaderActions.EntityResetAction));
export { ResetCancelOrderProcess };
if (false) {
    /** @type {?} */
    ResetCancelOrderProcess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL29yZGVyLWRldGFpbHMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixNQUFNLDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTVFLE1BQU0sS0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBQzdELE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxnQ0FBZ0M7O0FBQ3ZFLE1BQU0sS0FBTywwQkFBMEIsR0FBRyxtQ0FBbUM7O0FBQzdFLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBRS9ELE1BQU0sS0FBTyxZQUFZLEdBQUcscUJBQXFCOztBQUNqRCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsMEJBQTBCOztBQUMzRCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsNkJBQTZCOztBQUNqRSxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsbUNBQW1DO0FBRTdFO0lBQXNDLDRDQUFnQjtJQUVwRCwwQkFDUyxPQUdOO1FBSkgsWUFNRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQU5RLGFBQU8sR0FBUCxPQUFPLENBR2I7UUFMTSxVQUFJLEdBQUcsa0JBQWtCLENBQUM7O0lBUW5DLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFWRCxDQUFzQyxnQkFBZ0IsR0FVckQ7Ozs7SUFUQyxnQ0FBbUM7O0lBRWpDLG1DQUdDOztBQU1MO0lBQTBDLGdEQUFnQjtJQUV4RCw4QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxTQUNuQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyx1QkFBdUIsQ0FBQzs7SUFHeEMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTBDLGdCQUFnQixHQUt6RDs7OztJQUpDLG9DQUF3Qzs7SUFDNUIsdUNBQW1COztBQUtqQztJQUE2QyxtREFBbUI7SUFFOUQsaUNBQW1CLE9BQWM7UUFBakMsWUFDRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFPO1FBRHhCLFVBQUksR0FBRywwQkFBMEIsQ0FBQzs7SUFHM0MsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTZDLG1CQUFtQixHQUsvRDs7OztJQUpDLHVDQUEyQzs7SUFDL0IsMENBQXFCOztBQUtuQztJQUF1Qyw2Q0FBaUI7SUFFdEQ7UUFBQSxZQUNFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBSFEsVUFBSSxHQUFHLG1CQUFtQixDQUFDOztJQUdwQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBdUMsaUJBQWlCLEdBS3ZEOzs7O0lBSkMsaUNBQW9DOztBQU10QztJQUFpQyx1Q0FBeUM7SUFFeEUscUJBQ1MsT0FJTjtRQUxILFlBT0Usa0JBQU0sZUFBZSxFQUFFLHVCQUF1QixDQUFDLFNBQ2hEO1FBUFEsYUFBTyxHQUFQLE9BQU8sQ0FJYjtRQU5NLFVBQUksR0FBRyxZQUFZLENBQUM7O0lBUzdCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFYRCxDQUFpQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FXekU7Ozs7SUFWQywyQkFBNkI7O0lBRTNCLDhCQUlDOztBQU1MO0lBQXFDLDJDQUF5QztJQUU1RSx5QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSx1QkFBdUIsRUFBRSxPQUFPLENBQUMsU0FDekQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLN0U7Ozs7SUFKQywrQkFBa0M7O0lBQ3RCLGtDQUFtQjs7QUFLakM7SUFBd0MsOENBQTRDO0lBRWxGO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsU0FDaEQ7UUFIUSxVQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBR3JDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3Qyx3QkFBd0IsQ0FBQyxtQkFBbUIsR0FLbkY7Ozs7SUFKQyxrQ0FBcUM7O0FBTXZDO0lBQTZDLG1EQUEwQztJQUVyRjtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHVCQUF1QixDQUFDLFNBQ2hEO1FBSFEsVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQUczQyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNkMsd0JBQXdCLENBQUMsaUJBQWlCLEdBS3RGOzs7O0lBSkMsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3JkZXIsXG4gIENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbiAgTG9hZGVyUmVzZXRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBVU0VSX09SREVSX0RFVEFJTFMsIENBTkNFTF9PUkRFUl9QUk9DRVNTX0lEIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX09SREVSX0RFVEFJTFMgPSAnW1VzZXJdIExvYWQgT3JkZXIgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgTE9BRF9PUkRFUl9ERVRBSUxTX0ZBSUwgPSAnW1VzZXJdIExvYWQgT3JkZXIgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX09SREVSX0RFVEFJTFNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBPcmRlciBEZXRhaWxzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX09SREVSX0RFVEFJTFMgPSAnW1VzZXJdIENsZWFyIE9yZGVyIERldGFpbHMnO1xuXG5leHBvcnQgY29uc3QgQ0FOQ0VMX09SREVSID0gJ1tVc2VyXSBDYW5jZWwgT3JkZXInO1xuZXhwb3J0IGNvbnN0IENBTkNFTF9PUkRFUl9GQUlMID0gJ1tVc2VyXSBDYW5jZWwgT3JkZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgQ0FOQ0VMX09SREVSX1NVQ0NFU1MgPSAnW1VzZXJdIENhbmNlbCBPcmRlciBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9DQU5DRUxfT1JERVJfUFJPQ0VTUyA9ICdbVXNlcl0gUmVzZXQgQ2FuY2VsIE9yZGVyIFByb2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZE9yZGVyRGV0YWlscyBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9PUkRFUl9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBvcmRlckNvZGU6IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFVTRVJfT1JERVJfREVUQUlMUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcmRlckRldGFpbHNGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09SREVSX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfT1JERVJfREVUQUlMUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcmRlckRldGFpbHNTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09SREVSX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IE9yZGVyKSB7XG4gICAgc3VwZXIoVVNFUl9PUkRFUl9ERVRBSUxTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJPcmRlckRldGFpbHMgZXh0ZW5kcyBMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9PUkRFUl9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihVU0VSX09SREVSX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlciBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBTkNFTF9PUkRFUjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgb3JkZXJDb2RlOiBzdHJpbmc7XG4gICAgICBjYW5jZWxSZXF1ZXN0SW5wdXQ6IENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdDtcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQ0FOQ0VMX09SREVSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlckZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQU5DRUxfT1JERVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQ0FOQ0VMX09SREVSX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlclN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQU5DRUxfT1JERVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBDQU5DRUxfT1JERVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0Q2FuY2VsT3JkZXJQcm9jZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0NBTkNFTF9PUkRFUl9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIENBTkNFTF9PUkRFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBPcmRlckRldGFpbHNBY3Rpb24gPVxuICB8IExvYWRPcmRlckRldGFpbHNcbiAgfCBMb2FkT3JkZXJEZXRhaWxzRmFpbFxuICB8IExvYWRPcmRlckRldGFpbHNTdWNjZXNzXG4gIHwgQ2xlYXJPcmRlckRldGFpbHNcbiAgfCBDYW5jZWxPcmRlclxuICB8IENhbmNlbE9yZGVyRmFpbFxuICB8IENhbmNlbE9yZGVyU3VjY2VzcztcbiJdfQ==