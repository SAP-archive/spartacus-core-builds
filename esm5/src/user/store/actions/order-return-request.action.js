/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { USER_RETURN_REQUESTS, USER_RETURN_REQUEST_DETAILS, CANCEL_RETURN_PROCESS_ID, } from '../user-state';
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, LoaderResetAction, } from '../../../state/utils/loader/loader.action';
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
/** @type {?} */
export var CREATE_ORDER_RETURN_REQUEST = '[User] Create Order Return Request';
/** @type {?} */
export var CREATE_ORDER_RETURN_REQUEST_FAIL = '[User] Create Order Return Request Fail';
/** @type {?} */
export var CREATE_ORDER_RETURN_REQUEST_SUCCESS = '[User] Create Order Return Request Success';
/** @type {?} */
export var LOAD_ORDER_RETURN_REQUEST = '[User] Load Order Return Request details';
/** @type {?} */
export var LOAD_ORDER_RETURN_REQUEST_FAIL = '[User] Load Order Return Request details Fail';
/** @type {?} */
export var LOAD_ORDER_RETURN_REQUEST_SUCCESS = '[User] Load Order Return Request details Success';
/** @type {?} */
export var CANCEL_ORDER_RETURN_REQUEST = '[User] Cancel Order Return Request';
/** @type {?} */
export var CANCEL_ORDER_RETURN_REQUEST_FAIL = '[User] Cancel Order Return Request Fail';
/** @type {?} */
export var CANCEL_ORDER_RETURN_REQUEST_SUCCESS = '[User] Cancel Order Return Request Success';
/** @type {?} */
export var LOAD_ORDER_RETURN_REQUEST_LIST = '[User] Load User Order Return Request List';
/** @type {?} */
export var LOAD_ORDER_RETURN_REQUEST_LIST_FAIL = '[User] Load User Order Return Request List Fail';
/** @type {?} */
export var LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS = '[User] Load User Order Return Request List Success';
/** @type {?} */
export var CLEAR_ORDER_RETURN_REQUEST = '[User] Clear Order Return Request Details';
/** @type {?} */
export var CLEAR_ORDER_RETURN_REQUEST_LIST = '[User] Clear Order Return Request List';
/** @type {?} */
export var RESET_CANCEL_RETURN_PROCESS = '[User] Reset Cancel Return Request Process';
var CreateOrderReturnRequest = /** @class */ (function (_super) {
    tslib_1.__extends(CreateOrderReturnRequest, _super);
    function CreateOrderReturnRequest(payload) {
        var _this = _super.call(this, USER_RETURN_REQUEST_DETAILS) || this;
        _this.payload = payload;
        _this.type = CREATE_ORDER_RETURN_REQUEST;
        return _this;
    }
    return CreateOrderReturnRequest;
}(LoaderLoadAction));
export { CreateOrderReturnRequest };
if (false) {
    /** @type {?} */
    CreateOrderReturnRequest.prototype.type;
    /** @type {?} */
    CreateOrderReturnRequest.prototype.payload;
}
var CreateOrderReturnRequestFail = /** @class */ (function (_super) {
    tslib_1.__extends(CreateOrderReturnRequestFail, _super);
    function CreateOrderReturnRequestFail(payload) {
        var _this = _super.call(this, USER_RETURN_REQUEST_DETAILS, payload) || this;
        _this.payload = payload;
        _this.type = CREATE_ORDER_RETURN_REQUEST_FAIL;
        return _this;
    }
    return CreateOrderReturnRequestFail;
}(LoaderFailAction));
export { CreateOrderReturnRequestFail };
if (false) {
    /** @type {?} */
    CreateOrderReturnRequestFail.prototype.type;
    /** @type {?} */
    CreateOrderReturnRequestFail.prototype.payload;
}
var CreateOrderReturnRequestSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CreateOrderReturnRequestSuccess, _super);
    function CreateOrderReturnRequestSuccess(payload) {
        var _this = _super.call(this, USER_RETURN_REQUEST_DETAILS) || this;
        _this.payload = payload;
        _this.type = CREATE_ORDER_RETURN_REQUEST_SUCCESS;
        return _this;
    }
    return CreateOrderReturnRequestSuccess;
}(LoaderSuccessAction));
export { CreateOrderReturnRequestSuccess };
if (false) {
    /** @type {?} */
    CreateOrderReturnRequestSuccess.prototype.type;
    /** @type {?} */
    CreateOrderReturnRequestSuccess.prototype.payload;
}
var LoadOrderReturnRequest = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOrderReturnRequest, _super);
    function LoadOrderReturnRequest(payload) {
        var _this = _super.call(this, USER_RETURN_REQUEST_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_RETURN_REQUEST;
        return _this;
    }
    return LoadOrderReturnRequest;
}(LoaderLoadAction));
export { LoadOrderReturnRequest };
if (false) {
    /** @type {?} */
    LoadOrderReturnRequest.prototype.type;
    /** @type {?} */
    LoadOrderReturnRequest.prototype.payload;
}
var LoadOrderReturnRequestFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOrderReturnRequestFail, _super);
    function LoadOrderReturnRequestFail(payload) {
        var _this = _super.call(this, USER_RETURN_REQUEST_DETAILS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_RETURN_REQUEST_FAIL;
        return _this;
    }
    return LoadOrderReturnRequestFail;
}(LoaderFailAction));
export { LoadOrderReturnRequestFail };
if (false) {
    /** @type {?} */
    LoadOrderReturnRequestFail.prototype.type;
    /** @type {?} */
    LoadOrderReturnRequestFail.prototype.payload;
}
var LoadOrderReturnRequestSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOrderReturnRequestSuccess, _super);
    function LoadOrderReturnRequestSuccess(payload) {
        var _this = _super.call(this, USER_RETURN_REQUEST_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_RETURN_REQUEST_SUCCESS;
        return _this;
    }
    return LoadOrderReturnRequestSuccess;
}(LoaderSuccessAction));
export { LoadOrderReturnRequestSuccess };
if (false) {
    /** @type {?} */
    LoadOrderReturnRequestSuccess.prototype.type;
    /** @type {?} */
    LoadOrderReturnRequestSuccess.prototype.payload;
}
var CancelOrderReturnRequest = /** @class */ (function (_super) {
    tslib_1.__extends(CancelOrderReturnRequest, _super);
    function CancelOrderReturnRequest(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = CANCEL_ORDER_RETURN_REQUEST;
        return _this;
    }
    return CancelOrderReturnRequest;
}(StateEntityLoaderActions.EntityLoadAction));
export { CancelOrderReturnRequest };
if (false) {
    /** @type {?} */
    CancelOrderReturnRequest.prototype.type;
    /** @type {?} */
    CancelOrderReturnRequest.prototype.payload;
}
var CancelOrderReturnRequestFail = /** @class */ (function (_super) {
    tslib_1.__extends(CancelOrderReturnRequestFail, _super);
    function CancelOrderReturnRequestFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = CANCEL_ORDER_RETURN_REQUEST_FAIL;
        return _this;
    }
    return CancelOrderReturnRequestFail;
}(StateEntityLoaderActions.EntityFailAction));
export { CancelOrderReturnRequestFail };
if (false) {
    /** @type {?} */
    CancelOrderReturnRequestFail.prototype.type;
    /** @type {?} */
    CancelOrderReturnRequestFail.prototype.payload;
}
var CancelOrderReturnRequestSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CancelOrderReturnRequestSuccess, _super);
    function CancelOrderReturnRequestSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID) || this;
        _this.type = CANCEL_ORDER_RETURN_REQUEST_SUCCESS;
        return _this;
    }
    return CancelOrderReturnRequestSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { CancelOrderReturnRequestSuccess };
if (false) {
    /** @type {?} */
    CancelOrderReturnRequestSuccess.prototype.type;
}
var LoadOrderReturnRequestList = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOrderReturnRequestList, _super);
    function LoadOrderReturnRequestList(payload) {
        var _this = _super.call(this, USER_RETURN_REQUESTS) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_RETURN_REQUEST_LIST;
        return _this;
    }
    return LoadOrderReturnRequestList;
}(LoaderLoadAction));
export { LoadOrderReturnRequestList };
if (false) {
    /** @type {?} */
    LoadOrderReturnRequestList.prototype.type;
    /** @type {?} */
    LoadOrderReturnRequestList.prototype.payload;
}
var LoadOrderReturnRequestListFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOrderReturnRequestListFail, _super);
    function LoadOrderReturnRequestListFail(payload) {
        var _this = _super.call(this, USER_RETURN_REQUESTS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_RETURN_REQUEST_LIST_FAIL;
        return _this;
    }
    return LoadOrderReturnRequestListFail;
}(LoaderFailAction));
export { LoadOrderReturnRequestListFail };
if (false) {
    /** @type {?} */
    LoadOrderReturnRequestListFail.prototype.type;
    /** @type {?} */
    LoadOrderReturnRequestListFail.prototype.payload;
}
var LoadOrderReturnRequestListSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOrderReturnRequestListSuccess, _super);
    function LoadOrderReturnRequestListSuccess(payload) {
        var _this = _super.call(this, USER_RETURN_REQUESTS) || this;
        _this.payload = payload;
        _this.type = LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS;
        return _this;
    }
    return LoadOrderReturnRequestListSuccess;
}(LoaderSuccessAction));
export { LoadOrderReturnRequestListSuccess };
if (false) {
    /** @type {?} */
    LoadOrderReturnRequestListSuccess.prototype.type;
    /** @type {?} */
    LoadOrderReturnRequestListSuccess.prototype.payload;
}
var ClearOrderReturnRequest = /** @class */ (function (_super) {
    tslib_1.__extends(ClearOrderReturnRequest, _super);
    function ClearOrderReturnRequest() {
        var _this = _super.call(this, USER_RETURN_REQUEST_DETAILS) || this;
        _this.type = CLEAR_ORDER_RETURN_REQUEST;
        return _this;
    }
    return ClearOrderReturnRequest;
}(LoaderResetAction));
export { ClearOrderReturnRequest };
if (false) {
    /** @type {?} */
    ClearOrderReturnRequest.prototype.type;
}
var ClearOrderReturnRequestList = /** @class */ (function (_super) {
    tslib_1.__extends(ClearOrderReturnRequestList, _super);
    function ClearOrderReturnRequestList() {
        var _this = _super.call(this, USER_RETURN_REQUESTS) || this;
        _this.type = CLEAR_ORDER_RETURN_REQUEST_LIST;
        return _this;
    }
    return ClearOrderReturnRequestList;
}(LoaderResetAction));
export { ClearOrderReturnRequestList };
if (false) {
    /** @type {?} */
    ClearOrderReturnRequestList.prototype.type;
}
var ResetCancelReturnProcess = /** @class */ (function (_super) {
    tslib_1.__extends(ResetCancelReturnProcess, _super);
    function ResetCancelReturnProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID) || this;
        _this.type = RESET_CANCEL_RETURN_PROCESS;
        return _this;
    }
    return ResetCancelReturnProcess;
}(StateEntityLoaderActions.EntityResetAction));
export { ResetCancelReturnProcess };
if (false) {
    /** @type {?} */
    ResetCancelReturnProcess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3QuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy9vcmRlci1yZXR1cm4tcmVxdWVzdC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDJCQUEyQixFQUMzQix3QkFBd0IsR0FDekIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixNQUFNLDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFdkUsTUFBTSxLQUFPLDJCQUEyQixHQUFHLG9DQUFvQzs7QUFDL0UsTUFBTSxLQUFPLGdDQUFnQyxHQUMzQyx5Q0FBeUM7O0FBQzNDLE1BQU0sS0FBTyxtQ0FBbUMsR0FDOUMsNENBQTRDOztBQUU5QyxNQUFNLEtBQU8seUJBQXlCLEdBQ3BDLDBDQUEwQzs7QUFDNUMsTUFBTSxLQUFPLDhCQUE4QixHQUN6QywrQ0FBK0M7O0FBQ2pELE1BQU0sS0FBTyxpQ0FBaUMsR0FDNUMsa0RBQWtEOztBQUVwRCxNQUFNLEtBQU8sMkJBQTJCLEdBQUcsb0NBQW9DOztBQUMvRSxNQUFNLEtBQU8sZ0NBQWdDLEdBQzNDLHlDQUF5Qzs7QUFDM0MsTUFBTSxLQUFPLG1DQUFtQyxHQUM5Qyw0Q0FBNEM7O0FBRTlDLE1BQU0sS0FBTyw4QkFBOEIsR0FDekMsNENBQTRDOztBQUM5QyxNQUFNLEtBQU8sbUNBQW1DLEdBQzlDLGlEQUFpRDs7QUFDbkQsTUFBTSxLQUFPLHNDQUFzQyxHQUNqRCxvREFBb0Q7O0FBRXRELE1BQU0sS0FBTywwQkFBMEIsR0FDckMsMkNBQTJDOztBQUM3QyxNQUFNLEtBQU8sK0JBQStCLEdBQzFDLHdDQUF3Qzs7QUFDMUMsTUFBTSxLQUFPLDJCQUEyQixHQUN0Qyw0Q0FBNEM7QUFFOUM7SUFBOEMsb0RBQWdCO0lBRTVELGtDQUNTLE9BR047UUFKSCxZQU1FLGtCQUFNLDJCQUEyQixDQUFDLFNBQ25DO1FBTlEsYUFBTyxHQUFQLE9BQU8sQ0FHYjtRQUxNLFVBQUksR0FBRywyQkFBMkIsQ0FBQzs7SUFRNUMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQVZELENBQThDLGdCQUFnQixHQVU3RDs7OztJQVRDLHdDQUE0Qzs7SUFFMUMsMkNBR0M7O0FBTUw7SUFBa0Qsd0RBQWdCO0lBRWhFLHNDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sMkJBQTJCLEVBQUUsT0FBTyxDQUFDLFNBQzVDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGdDQUFnQyxDQUFDOztJQUdqRCxDQUFDO0lBQ0gsbUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBa0QsZ0JBQWdCLEdBS2pFOzs7O0lBSkMsNENBQWlEOztJQUNyQywrQ0FBbUI7O0FBS2pDO0lBQXFELDJEQUFtQjtJQUV0RSx5Q0FBbUIsT0FBc0I7UUFBekMsWUFDRSxrQkFBTSwyQkFBMkIsQ0FBQyxTQUNuQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFlO1FBRGhDLFVBQUksR0FBRyxtQ0FBbUMsQ0FBQzs7SUFHcEQsQ0FBQztJQUNILHNDQUFDO0FBQUQsQ0FBQyxBQUxELENBQXFELG1CQUFtQixHQUt2RTs7OztJQUpDLCtDQUFvRDs7SUFDeEMsa0RBQTZCOztBQUszQztJQUE0QyxrREFBZ0I7SUFFMUQsZ0NBQ1MsT0FHTjtRQUpILFlBTUUsa0JBQU0sMkJBQTJCLENBQUMsU0FDbkM7UUFOUSxhQUFPLEdBQVAsT0FBTyxDQUdiO1FBTE0sVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQVExQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBNEMsZ0JBQWdCLEdBVTNEOzs7O0lBVEMsc0NBQTBDOztJQUV4Qyx5Q0FHQzs7QUFNTDtJQUFnRCxzREFBZ0I7SUFFOUQsb0NBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSwyQkFBMkIsRUFBRSxPQUFPLENBQUMsU0FDNUM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsOEJBQThCLENBQUM7O0lBRy9DLENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUFMRCxDQUFnRCxnQkFBZ0IsR0FLL0Q7Ozs7SUFKQywwQ0FBK0M7O0lBQ25DLDZDQUFtQjs7QUFLakM7SUFBbUQseURBQW1CO0lBRXBFLHVDQUFtQixPQUFzQjtRQUF6QyxZQUNFLGtCQUFNLDJCQUEyQixDQUFDLFNBQ25DO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWU7UUFEaEMsVUFBSSxHQUFHLGlDQUFpQyxDQUFDOztJQUdsRCxDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUQsbUJBQW1CLEdBS3JFOzs7O0lBSkMsNkNBQWtEOztJQUN0QyxnREFBNkI7O0FBSzNDO0lBQThDLG9EQUF5QztJQUVyRixrQ0FDUyxPQUlOO1FBTEgsWUFPRSxrQkFBTSxlQUFlLEVBQUUsd0JBQXdCLENBQUMsU0FDakQ7UUFQUSxhQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sVUFBSSxHQUFHLDJCQUEyQixDQUFDOztJQVM1QyxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBOEMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBV3RGOzs7O0lBVkMsd0NBQTRDOztJQUUxQywyQ0FJQzs7QUFNTDtJQUFrRCx3REFBeUM7SUFFekYsc0NBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxlQUFlLEVBQUUsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLFNBQzFEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGdDQUFnQyxDQUFDOztJQUdqRCxDQUFDO0lBQ0gsbUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBa0Qsd0JBQXdCLENBQUMsZ0JBQWdCLEdBSzFGOzs7O0lBSkMsNENBQWlEOztJQUNyQywrQ0FBbUI7O0FBS2pDO0lBQXFELDJEQUE0QztJQUUvRjtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHdCQUF3QixDQUFDLFNBQ2pEO1FBSFEsVUFBSSxHQUFHLG1DQUFtQyxDQUFDOztJQUdwRCxDQUFDO0lBQ0gsc0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUQsd0JBQXdCLENBQUMsbUJBQW1CLEdBS2hHOzs7O0lBSkMsK0NBQW9EOztBQU10RDtJQUFnRCxzREFBZ0I7SUFFOUQsb0NBQ1MsT0FLTjtRQU5ILFlBUUUsa0JBQU0sb0JBQW9CLENBQUMsU0FDNUI7UUFSUSxhQUFPLEdBQVAsT0FBTyxDQUtiO1FBUE0sVUFBSSxHQUFHLDhCQUE4QixDQUFDOztJQVUvQyxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBZ0QsZ0JBQWdCLEdBWS9EOzs7O0lBWEMsMENBQStDOztJQUU3Qyw2Q0FLQzs7QUFNTDtJQUFvRCwwREFBZ0I7SUFFbEUsd0NBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxvQkFBb0IsRUFBRSxPQUFPLENBQUMsU0FDckM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsbUNBQW1DLENBQUM7O0lBR3BELENBQUM7SUFDSCxxQ0FBQztBQUFELENBQUMsQUFMRCxDQUFvRCxnQkFBZ0IsR0FLbkU7Ozs7SUFKQyw4Q0FBb0Q7O0lBQ3hDLGlEQUFtQjs7QUFLakM7SUFBdUQsNkRBQW1CO0lBRXhFLDJDQUFtQixPQUEwQjtRQUE3QyxZQUNFLGtCQUFNLG9CQUFvQixDQUFDLFNBQzVCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQW1CO1FBRHBDLFVBQUksR0FBRyxzQ0FBc0MsQ0FBQzs7SUFHdkQsQ0FBQztJQUNILHdDQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVELG1CQUFtQixHQUt6RTs7OztJQUpDLGlEQUF1RDs7SUFDM0Msb0RBQWlDOztBQUsvQztJQUE2QyxtREFBaUI7SUFFNUQ7UUFBQSxZQUNFLGtCQUFNLDJCQUEyQixDQUFDLFNBQ25DO1FBSFEsVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQUczQyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNkMsaUJBQWlCLEdBSzdEOzs7O0lBSkMsdUNBQTJDOztBQU03QztJQUFpRCx1REFBaUI7SUFFaEU7UUFBQSxZQUNFLGtCQUFNLG9CQUFvQixDQUFDLFNBQzVCO1FBSFEsVUFBSSxHQUFHLCtCQUErQixDQUFDOztJQUdoRCxDQUFDO0lBQ0gsa0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBaUQsaUJBQWlCLEdBS2pFOzs7O0lBSkMsMkNBQWdEOztBQU1sRDtJQUE4QyxvREFBMEM7SUFFdEY7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxTQUNqRDtRQUhRLFVBQUksR0FBRywyQkFBMkIsQ0FBQzs7SUFHNUMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLHdCQUF3QixDQUFDLGlCQUFpQixHQUt2Rjs7OztJQUpDLHdDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFJldHVyblJlcXVlc3QsXG4gIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdExpc3QsXG4gIFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24sXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7XG4gIFVTRVJfUkVUVVJOX1JFUVVFU1RTLFxuICBVU0VSX1JFVFVSTl9SRVFVRVNUX0RFVEFJTFMsXG4gIENBTkNFTF9SRVRVUk5fUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxuICBMb2FkZXJSZXNldEFjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9PUkRFUl9SRVRVUk5fUkVRVUVTVCA9ICdbVXNlcl0gQ3JlYXRlIE9yZGVyIFJldHVybiBSZXF1ZXN0JztcbmV4cG9ydCBjb25zdCBDUkVBVEVfT1JERVJfUkVUVVJOX1JFUVVFU1RfRkFJTCA9XG4gICdbVXNlcl0gQ3JlYXRlIE9yZGVyIFJldHVybiBSZXF1ZXN0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9PUkRFUl9SRVRVUk5fUkVRVUVTVF9TVUNDRVNTID1cbiAgJ1tVc2VyXSBDcmVhdGUgT3JkZXIgUmV0dXJuIFJlcXVlc3QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX09SREVSX1JFVFVSTl9SRVFVRVNUID1cbiAgJ1tVc2VyXSBMb2FkIE9yZGVyIFJldHVybiBSZXF1ZXN0IGRldGFpbHMnO1xuZXhwb3J0IGNvbnN0IExPQURfT1JERVJfUkVUVVJOX1JFUVVFU1RfRkFJTCA9XG4gICdbVXNlcl0gTG9hZCBPcmRlciBSZXR1cm4gUmVxdWVzdCBkZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfT1JERVJfUkVUVVJOX1JFUVVFU1RfU1VDQ0VTUyA9XG4gICdbVXNlcl0gTG9hZCBPcmRlciBSZXR1cm4gUmVxdWVzdCBkZXRhaWxzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ0FOQ0VMX09SREVSX1JFVFVSTl9SRVFVRVNUID0gJ1tVc2VyXSBDYW5jZWwgT3JkZXIgUmV0dXJuIFJlcXVlc3QnO1xuZXhwb3J0IGNvbnN0IENBTkNFTF9PUkRFUl9SRVRVUk5fUkVRVUVTVF9GQUlMID1cbiAgJ1tVc2VyXSBDYW5jZWwgT3JkZXIgUmV0dXJuIFJlcXVlc3QgRmFpbCc7XG5leHBvcnQgY29uc3QgQ0FOQ0VMX09SREVSX1JFVFVSTl9SRVFVRVNUX1NVQ0NFU1MgPVxuICAnW1VzZXJdIENhbmNlbCBPcmRlciBSZXR1cm4gUmVxdWVzdCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfT1JERVJfUkVUVVJOX1JFUVVFU1RfTElTVCA9XG4gICdbVXNlcl0gTG9hZCBVc2VyIE9yZGVyIFJldHVybiBSZXF1ZXN0IExpc3QnO1xuZXhwb3J0IGNvbnN0IExPQURfT1JERVJfUkVUVVJOX1JFUVVFU1RfTElTVF9GQUlMID1cbiAgJ1tVc2VyXSBMb2FkIFVzZXIgT3JkZXIgUmV0dXJuIFJlcXVlc3QgTGlzdCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX09SREVSX1JFVFVSTl9SRVFVRVNUX0xJU1RfU1VDQ0VTUyA9XG4gICdbVXNlcl0gTG9hZCBVc2VyIE9yZGVyIFJldHVybiBSZXF1ZXN0IExpc3QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9PUkRFUl9SRVRVUk5fUkVRVUVTVCA9XG4gICdbVXNlcl0gQ2xlYXIgT3JkZXIgUmV0dXJuIFJlcXVlc3QgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfT1JERVJfUkVUVVJOX1JFUVVFU1RfTElTVCA9XG4gICdbVXNlcl0gQ2xlYXIgT3JkZXIgUmV0dXJuIFJlcXVlc3QgTGlzdCc7XG5leHBvcnQgY29uc3QgUkVTRVRfQ0FOQ0VMX1JFVFVSTl9QUk9DRVNTID1cbiAgJ1tVc2VyXSBSZXNldCBDYW5jZWwgUmV0dXJuIFJlcXVlc3QgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVPcmRlclJldHVyblJlcXVlc3QgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9PUkRFUl9SRVRVUk5fUkVRVUVTVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgcmV0dXJuUmVxdWVzdElucHV0OiBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3Q7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihVU0VSX1JFVFVSTl9SRVFVRVNUX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVPcmRlclJldHVyblJlcXVlc3RGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfT1JERVJfUkVUVVJOX1JFUVVFU1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUkVUVVJOX1JFUVVFU1RfREVUQUlMUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdFN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9PUkRFUl9SRVRVUk5fUkVRVUVTVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmV0dXJuUmVxdWVzdCkge1xuICAgIHN1cGVyKFVTRVJfUkVUVVJOX1JFUVVFU1RfREVUQUlMUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcmRlclJldHVyblJlcXVlc3QgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1JERVJfUkVUVVJOX1JFUVVFU1Q7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihVU0VSX1JFVFVSTl9SRVFVRVNUX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3JkZXJSZXR1cm5SZXF1ZXN0RmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9PUkRFUl9SRVRVUk5fUkVRVUVTVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9SRVRVUk5fUkVRVUVTVF9ERVRBSUxTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE9yZGVyUmV0dXJuUmVxdWVzdFN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1JERVJfUkVUVVJOX1JFUVVFU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJldHVyblJlcXVlc3QpIHtcbiAgICBzdXBlcihVU0VSX1JFVFVSTl9SRVFVRVNUX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlclJldHVyblJlcXVlc3QgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQU5DRUxfT1JERVJfUkVUVVJOX1JFUVVFU1Q7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmc7XG4gICAgICByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uOiBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBDQU5DRUxfUkVUVVJOX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlclJldHVyblJlcXVlc3RGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FOQ0VMX09SREVSX1JFVFVSTl9SRVFVRVNUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIENBTkNFTF9SRVRVUk5fUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbmNlbE9yZGVyUmV0dXJuUmVxdWVzdFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQU5DRUxfT1JERVJfUkVUVVJOX1JFUVVFU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBDQU5DRUxfUkVUVVJOX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdCBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9PUkRFUl9SRVRVUk5fUkVRVUVTVF9MSVNUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgICAgc29ydD86IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFVTRVJfUkVUVVJOX1JFUVVFU1RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3RGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09SREVSX1JFVFVSTl9SRVFVRVNUX0xJU1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUkVUVVJOX1JFUVVFU1RTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3RTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09SREVSX1JFVFVSTl9SRVFVRVNUX0xJU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJldHVyblJlcXVlc3RMaXN0KSB7XG4gICAgc3VwZXIoVVNFUl9SRVRVUk5fUkVRVUVTVFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhck9yZGVyUmV0dXJuUmVxdWVzdCBleHRlbmRzIExvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX09SREVSX1JFVFVSTl9SRVFVRVNUO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihVU0VSX1JFVFVSTl9SRVFVRVNUX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhck9yZGVyUmV0dXJuUmVxdWVzdExpc3QgZXh0ZW5kcyBMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9PUkRFUl9SRVRVUk5fUkVRVUVTVF9MSVNUO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihVU0VSX1JFVFVSTl9SRVFVRVNUUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0Q2FuY2VsUmV0dXJuUHJvY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9DQU5DRUxfUkVUVVJOX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQ0FOQ0VMX1JFVFVSTl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBPcmRlclJldHVyblJlcXVlc3RBY3Rpb24gPVxuICB8IENyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdFxuICB8IENyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdEZhaWxcbiAgfCBDcmVhdGVPcmRlclJldHVyblJlcXVlc3RTdWNjZXNzXG4gIHwgTG9hZE9yZGVyUmV0dXJuUmVxdWVzdFxuICB8IExvYWRPcmRlclJldHVyblJlcXVlc3RGYWlsXG4gIHwgTG9hZE9yZGVyUmV0dXJuUmVxdWVzdFN1Y2Nlc3NcbiAgfCBDYW5jZWxPcmRlclJldHVyblJlcXVlc3RcbiAgfCBDYW5jZWxPcmRlclJldHVyblJlcXVlc3RGYWlsXG4gIHwgQ2FuY2VsT3JkZXJSZXR1cm5SZXF1ZXN0U3VjY2Vzc1xuICB8IExvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0XG4gIHwgTG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3RGYWlsXG4gIHwgTG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3RTdWNjZXNzXG4gIHwgQ2xlYXJPcmRlclJldHVyblJlcXVlc3RcbiAgfCBDbGVhck9yZGVyUmV0dXJuUmVxdWVzdExpc3RcbiAgfCBSZXNldENhbmNlbFJldHVyblByb2Nlc3M7XG4iXX0=