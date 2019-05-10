/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { CHECKOUT_DETAILS } from '../checkout-state';
/** @type {?} */
export var ADD_DELIVERY_ADDRESS = '[Checkout] Add Delivery Address';
/** @type {?} */
export var ADD_DELIVERY_ADDRESS_FAIL = '[Checkout] Add Delivery Address Fail';
/** @type {?} */
export var ADD_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Add Delivery Address Success';
/** @type {?} */
export var SET_DELIVERY_ADDRESS = '[Checkout] Set Delivery Address';
/** @type {?} */
export var SET_DELIVERY_ADDRESS_FAIL = '[Checkout] Set Delivery Address Fail';
/** @type {?} */
export var SET_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Set Delivery Address Success';
/** @type {?} */
export var LOAD_SUPPORTED_DELIVERY_MODES = '[Checkout] Load Supported Delivery Modes';
/** @type {?} */
export var LOAD_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Load Supported Delivery Modes Fail';
/** @type {?} */
export var LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Load Supported Delivery Modes Success';
/** @type {?} */
export var CLEAR_SUPPORTED_DELIVERY_MODES = '[Checkout] Clear Supported Delivery Modes';
/** @type {?} */
export var SET_DELIVERY_MODE = '[Checkout] Set Delivery Mode';
/** @type {?} */
export var SET_DELIVERY_MODE_FAIL = '[Checkout] Set Delivery Mode Fail';
/** @type {?} */
export var SET_DELIVERY_MODE_SUCCESS = '[Checkout] Set Delivery Mode Success';
/** @type {?} */
export var CREATE_PAYMENT_DETAILS = '[Checkout] Create Payment Details';
/** @type {?} */
export var CREATE_PAYMENT_DETAILS_FAIL = '[Checkout] Create Payment Details Fail';
/** @type {?} */
export var CREATE_PAYMENT_DETAILS_SUCCESS = '[Checkout] Create Payment Details Success';
/** @type {?} */
export var SET_PAYMENT_DETAILS = '[Checkout] Set Payment Details';
/** @type {?} */
export var SET_PAYMENT_DETAILS_FAIL = '[Checkout] Set Payment Details Fail';
/** @type {?} */
export var SET_PAYMENT_DETAILS_SUCCESS = '[Checkout] Set Payment Details Success';
/** @type {?} */
export var PLACE_ORDER = '[Checkout] Place Order';
/** @type {?} */
export var PLACE_ORDER_FAIL = '[Checkout] Place Order Fail';
/** @type {?} */
export var PLACE_ORDER_SUCCESS = '[Checkout] Place Order Success';
/** @type {?} */
export var CLEAR_CHECKOUT_STEP = '[Checkout] Clear One Checkout Step';
/** @type {?} */
export var CLEAR_CHECKOUT_DATA = '[Checkout] Clear Checkout Data';
/** @type {?} */
export var LOAD_CHECKOUT_DETAILS = '[Checkout] Load Checkout Details';
/** @type {?} */
export var LOAD_CHECKOUT_DETAILS_FAIL = '[Checkout] Load Checkout Details Fail';
/** @type {?} */
export var LOAD_CHECKOUT_DETAILS_SUCCESS = '[Checkout] Load Checkout Details Success';
var AddDeliveryAddress = /** @class */ (function () {
    function AddDeliveryAddress(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS;
    }
    return AddDeliveryAddress;
}());
export { AddDeliveryAddress };
if (false) {
    /** @type {?} */
    AddDeliveryAddress.prototype.type;
    /** @type {?} */
    AddDeliveryAddress.prototype.payload;
}
var AddDeliveryAddressFail = /** @class */ (function () {
    function AddDeliveryAddressFail(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_FAIL;
    }
    return AddDeliveryAddressFail;
}());
export { AddDeliveryAddressFail };
if (false) {
    /** @type {?} */
    AddDeliveryAddressFail.prototype.type;
    /** @type {?} */
    AddDeliveryAddressFail.prototype.payload;
}
var AddDeliveryAddressSuccess = /** @class */ (function () {
    function AddDeliveryAddressSuccess(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_SUCCESS;
    }
    return AddDeliveryAddressSuccess;
}());
export { AddDeliveryAddressSuccess };
if (false) {
    /** @type {?} */
    AddDeliveryAddressSuccess.prototype.type;
    /** @type {?} */
    AddDeliveryAddressSuccess.prototype.payload;
}
var SetDeliveryAddress = /** @class */ (function () {
    function SetDeliveryAddress(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS;
    }
    return SetDeliveryAddress;
}());
export { SetDeliveryAddress };
if (false) {
    /** @type {?} */
    SetDeliveryAddress.prototype.type;
    /** @type {?} */
    SetDeliveryAddress.prototype.payload;
}
var SetDeliveryAddressFail = /** @class */ (function () {
    function SetDeliveryAddressFail(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_FAIL;
    }
    return SetDeliveryAddressFail;
}());
export { SetDeliveryAddressFail };
if (false) {
    /** @type {?} */
    SetDeliveryAddressFail.prototype.type;
    /** @type {?} */
    SetDeliveryAddressFail.prototype.payload;
}
var SetDeliveryAddressSuccess = /** @class */ (function () {
    function SetDeliveryAddressSuccess(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_SUCCESS;
    }
    return SetDeliveryAddressSuccess;
}());
export { SetDeliveryAddressSuccess };
if (false) {
    /** @type {?} */
    SetDeliveryAddressSuccess.prototype.type;
    /** @type {?} */
    SetDeliveryAddressSuccess.prototype.payload;
}
var LoadSupportedDeliveryModes = /** @class */ (function () {
    function LoadSupportedDeliveryModes(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES;
    }
    return LoadSupportedDeliveryModes;
}());
export { LoadSupportedDeliveryModes };
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModes.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModes.prototype.payload;
}
var LoadSupportedDeliveryModesFail = /** @class */ (function () {
    function LoadSupportedDeliveryModesFail(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
    }
    return LoadSupportedDeliveryModesFail;
}());
export { LoadSupportedDeliveryModesFail };
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModesFail.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModesFail.prototype.payload;
}
var LoadSupportedDeliveryModesSuccess = /** @class */ (function () {
    function LoadSupportedDeliveryModesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
    }
    return LoadSupportedDeliveryModesSuccess;
}());
export { LoadSupportedDeliveryModesSuccess };
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModesSuccess.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModesSuccess.prototype.payload;
}
var SetDeliveryMode = /** @class */ (function () {
    function SetDeliveryMode(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE;
    }
    return SetDeliveryMode;
}());
export { SetDeliveryMode };
if (false) {
    /** @type {?} */
    SetDeliveryMode.prototype.type;
    /** @type {?} */
    SetDeliveryMode.prototype.payload;
}
var SetDeliveryModeFail = /** @class */ (function () {
    function SetDeliveryModeFail(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_FAIL;
    }
    return SetDeliveryModeFail;
}());
export { SetDeliveryModeFail };
if (false) {
    /** @type {?} */
    SetDeliveryModeFail.prototype.type;
    /** @type {?} */
    SetDeliveryModeFail.prototype.payload;
}
var SetDeliveryModeSuccess = /** @class */ (function () {
    function SetDeliveryModeSuccess(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_SUCCESS;
    }
    return SetDeliveryModeSuccess;
}());
export { SetDeliveryModeSuccess };
if (false) {
    /** @type {?} */
    SetDeliveryModeSuccess.prototype.type;
    /** @type {?} */
    SetDeliveryModeSuccess.prototype.payload;
}
var CreatePaymentDetails = /** @class */ (function () {
    function CreatePaymentDetails(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS;
    }
    return CreatePaymentDetails;
}());
export { CreatePaymentDetails };
if (false) {
    /** @type {?} */
    CreatePaymentDetails.prototype.type;
    /** @type {?} */
    CreatePaymentDetails.prototype.payload;
}
var CreatePaymentDetailsFail = /** @class */ (function () {
    function CreatePaymentDetailsFail(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_FAIL;
    }
    return CreatePaymentDetailsFail;
}());
export { CreatePaymentDetailsFail };
if (false) {
    /** @type {?} */
    CreatePaymentDetailsFail.prototype.type;
    /** @type {?} */
    CreatePaymentDetailsFail.prototype.payload;
}
var CreatePaymentDetailsSuccess = /** @class */ (function () {
    function CreatePaymentDetailsSuccess(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_SUCCESS;
    }
    return CreatePaymentDetailsSuccess;
}());
export { CreatePaymentDetailsSuccess };
if (false) {
    /** @type {?} */
    CreatePaymentDetailsSuccess.prototype.type;
    /** @type {?} */
    CreatePaymentDetailsSuccess.prototype.payload;
}
var SetPaymentDetails = /** @class */ (function () {
    function SetPaymentDetails(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS;
    }
    return SetPaymentDetails;
}());
export { SetPaymentDetails };
if (false) {
    /** @type {?} */
    SetPaymentDetails.prototype.type;
    /** @type {?} */
    SetPaymentDetails.prototype.payload;
}
var SetPaymentDetailsFail = /** @class */ (function () {
    function SetPaymentDetailsFail(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_FAIL;
    }
    return SetPaymentDetailsFail;
}());
export { SetPaymentDetailsFail };
if (false) {
    /** @type {?} */
    SetPaymentDetailsFail.prototype.type;
    /** @type {?} */
    SetPaymentDetailsFail.prototype.payload;
}
var SetPaymentDetailsSuccess = /** @class */ (function () {
    function SetPaymentDetailsSuccess(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_SUCCESS;
    }
    return SetPaymentDetailsSuccess;
}());
export { SetPaymentDetailsSuccess };
if (false) {
    /** @type {?} */
    SetPaymentDetailsSuccess.prototype.type;
    /** @type {?} */
    SetPaymentDetailsSuccess.prototype.payload;
}
var PlaceOrder = /** @class */ (function () {
    function PlaceOrder(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER;
    }
    return PlaceOrder;
}());
export { PlaceOrder };
if (false) {
    /** @type {?} */
    PlaceOrder.prototype.type;
    /** @type {?} */
    PlaceOrder.prototype.payload;
}
var PlaceOrderFail = /** @class */ (function () {
    function PlaceOrderFail(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_FAIL;
    }
    return PlaceOrderFail;
}());
export { PlaceOrderFail };
if (false) {
    /** @type {?} */
    PlaceOrderFail.prototype.type;
    /** @type {?} */
    PlaceOrderFail.prototype.payload;
}
var PlaceOrderSuccess = /** @class */ (function () {
    function PlaceOrderSuccess(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_SUCCESS;
    }
    return PlaceOrderSuccess;
}());
export { PlaceOrderSuccess };
if (false) {
    /** @type {?} */
    PlaceOrderSuccess.prototype.type;
    /** @type {?} */
    PlaceOrderSuccess.prototype.payload;
}
var ClearSupportedDeliveryModes = /** @class */ (function () {
    function ClearSupportedDeliveryModes() {
        this.type = CLEAR_SUPPORTED_DELIVERY_MODES;
    }
    return ClearSupportedDeliveryModes;
}());
export { ClearSupportedDeliveryModes };
if (false) {
    /** @type {?} */
    ClearSupportedDeliveryModes.prototype.type;
}
var ClearCheckoutStep = /** @class */ (function () {
    function ClearCheckoutStep(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_STEP;
    }
    return ClearCheckoutStep;
}());
export { ClearCheckoutStep };
if (false) {
    /** @type {?} */
    ClearCheckoutStep.prototype.type;
    /** @type {?} */
    ClearCheckoutStep.prototype.payload;
}
var ClearCheckoutData = /** @class */ (function () {
    function ClearCheckoutData() {
        this.type = CLEAR_CHECKOUT_DATA;
    }
    return ClearCheckoutData;
}());
export { ClearCheckoutData };
if (false) {
    /** @type {?} */
    ClearCheckoutData.prototype.type;
}
var LoadCheckoutDetails = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCheckoutDetails, _super);
    function LoadCheckoutDetails(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS;
        return _this;
    }
    return LoadCheckoutDetails;
}(LoaderLoadAction));
export { LoadCheckoutDetails };
if (false) {
    /** @type {?} */
    LoadCheckoutDetails.prototype.type;
    /** @type {?} */
    LoadCheckoutDetails.prototype.payload;
}
var LoadCheckoutDetailsFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCheckoutDetailsFail, _super);
    function LoadCheckoutDetailsFail(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS_FAIL;
        return _this;
    }
    return LoadCheckoutDetailsFail;
}(LoaderFailAction));
export { LoadCheckoutDetailsFail };
if (false) {
    /** @type {?} */
    LoadCheckoutDetailsFail.prototype.type;
    /** @type {?} */
    LoadCheckoutDetailsFail.prototype.payload;
}
var LoadCheckoutDetailsSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCheckoutDetailsSuccess, _super);
    function LoadCheckoutDetailsSuccess(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS_SUCCESS;
        return _this;
    }
    return LoadCheckoutDetailsSuccess;
}(LoaderSuccessAction));
export { LoadCheckoutDetailsSuccess };
if (false) {
    /** @type {?} */
    LoadCheckoutDetailsSuccess.prototype.type;
    /** @type {?} */
    LoadCheckoutDetailsSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvY2hlY2tvdXQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBTXJELE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxpQ0FBaUM7O0FBQ3JFLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxzQ0FBc0M7O0FBQy9FLE1BQU0sS0FBTyw0QkFBNEIsR0FDdkMseUNBQXlDOztBQUUzQyxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsaUNBQWlDOztBQUNyRSxNQUFNLEtBQU8seUJBQXlCLEdBQUcsc0NBQXNDOztBQUMvRSxNQUFNLEtBQU8sNEJBQTRCLEdBQ3ZDLHlDQUF5Qzs7QUFFM0MsTUFBTSxLQUFPLDZCQUE2QixHQUN4QywwQ0FBMEM7O0FBQzVDLE1BQU0sS0FBTyxrQ0FBa0MsR0FDN0MsK0NBQStDOztBQUNqRCxNQUFNLEtBQU8scUNBQXFDLEdBQ2hELGtEQUFrRDs7QUFDcEQsTUFBTSxLQUFPLDhCQUE4QixHQUN6QywyQ0FBMkM7O0FBRTdDLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyw4QkFBOEI7O0FBQy9ELE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxtQ0FBbUM7O0FBQ3pFLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxzQ0FBc0M7O0FBRS9FLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxtQ0FBbUM7O0FBQ3pFLE1BQU0sS0FBTywyQkFBMkIsR0FDdEMsd0NBQXdDOztBQUMxQyxNQUFNLEtBQU8sOEJBQThCLEdBQ3pDLDJDQUEyQzs7QUFFN0MsTUFBTSxLQUFPLG1CQUFtQixHQUFHLGdDQUFn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ImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHtcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgQ0hFQ0tPVVRfREVUQUlMUyB9IGZyb20gJy4uL2NoZWNrb3V0LXN0YXRlJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9jaGVja291dC5tb2RlbCc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUsIE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IEFERF9ERUxJVkVSWV9BRERSRVNTID0gJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IEFERF9ERUxJVkVSWV9BRERSRVNTX0ZBSUwgPSAnW0NoZWNrb3V0XSBBZGQgRGVsaXZlcnkgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTUyA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTU19GQUlMID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVMgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlcyc7XG5leHBvcnQgY29uc3QgTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIExvYWQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9TVVBQT1JURURfREVMSVZFUllfTU9ERVMgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMnO1xuXG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREUgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREVfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBNb2RlIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9QQVlNRU5UX0RFVEFJTFMgPSAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIENyZWF0ZSBQYXltZW50IERldGFpbHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9ERVRBSUxTID0gJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMU19GQUlMID0gJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBTZXQgUGF5bWVudCBEZXRhaWxzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUExBQ0VfT1JERVIgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlcic7XG5leHBvcnQgY29uc3QgUExBQ0VfT1JERVJfRkFJTCA9ICdbQ2hlY2tvdXRdIFBsYWNlIE9yZGVyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlciBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX1NURVAgPSAnW0NoZWNrb3V0XSBDbGVhciBPbmUgQ2hlY2tvdXQgU3RlcCc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREFUQSA9ICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERhdGEnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DSEVDS09VVF9ERVRBSUxTID0gJ1tDaGVja291dF0gTG9hZCBDaGVja291dCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIExvYWQgQ2hlY2tvdXQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIExvYWQgQ2hlY2tvdXQgRGV0YWlscyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRGVsaXZlcnlBZGRyZXNzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRGVsaXZlcnlBZGRyZXNzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkcmVzcykge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5QWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkcmVzcykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEZWxpdmVyeU1vZGVbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfTU9ERTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBzZWxlY3RlZE1vZGVJZDogc3RyaW5nIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfTU9ERV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfTU9ERV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGF5bWVudERldGFpbHMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlsc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBheW1lbnREZXRhaWxzKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGF5bWVudERldGFpbHMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1BBWU1FTlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlsc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1BBWU1FTlRfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGF5bWVudERldGFpbHNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBheW1lbnREZXRhaWxzKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlclN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUExBQ0VfT1JERVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IE9yZGVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUztcbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXRTdGVwIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX1NURVA7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGF0YSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9EQVRBO1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlscyBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENIRUNLT1VUX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2hlY2tvdXREZXRhaWxzRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDSEVDS09VVF9ERVRBSUxTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0hFQ0tPVVRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hlY2tvdXREZXRhaWxzKSB7XG4gICAgc3VwZXIoQ0hFQ0tPVVRfREVUQUlMUyk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2hlY2tvdXRBY3Rpb24gPVxuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc1xuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgfCBBZGREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzRmFpbFxuICB8IFNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1xuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbFxuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2Vzc1xuICB8IFNldERlbGl2ZXJ5TW9kZVxuICB8IFNldERlbGl2ZXJ5TW9kZUZhaWxcbiAgfCBTZXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gIHwgQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gIHwgQ3JlYXRlUGF5bWVudERldGFpbHNcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc0ZhaWxcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3NcbiAgfCBTZXRQYXltZW50RGV0YWlsc1xuICB8IFNldFBheW1lbnREZXRhaWxzRmFpbFxuICB8IFNldFBheW1lbnREZXRhaWxzU3VjY2Vzc1xuICB8IFBsYWNlT3JkZXJcbiAgfCBQbGFjZU9yZGVyRmFpbFxuICB8IFBsYWNlT3JkZXJTdWNjZXNzXG4gIHwgQ2xlYXJDaGVja291dFN0ZXBcbiAgfCBDbGVhckNoZWNrb3V0RGF0YVxuICB8IExvYWRDaGVja291dERldGFpbHNcbiAgfCBMb2FkQ2hlY2tvdXREZXRhaWxzRmFpbFxuICB8IExvYWRDaGVja291dERldGFpbHNTdWNjZXNzO1xuIl19