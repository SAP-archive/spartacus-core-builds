/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/index';
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
/** @type {?} */
export var CHECKOUT_CLEAR_MISCS_DATA = '[Checkout] Clear Miscs Data';
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
export { LoadCheckoutDetailsSuccess };
if (false) {
    /** @type {?} */
    LoadCheckoutDetailsSuccess.prototype.type;
    /** @type {?} */
    LoadCheckoutDetailsSuccess.prototype.payload;
}
var CheckoutClearMiscsData = /** @class */ (function () {
    function CheckoutClearMiscsData() {
        this.type = CHECKOUT_CLEAR_MISCS_DATA;
    }
    return CheckoutClearMiscsData;
}());
export { CheckoutClearMiscsData };
if (false) {
    /** @type {?} */
    CheckoutClearMiscsData.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvY2hlY2tvdXQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXJELE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxpQ0FBaUM7O0FBQ3JFLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxzQ0FBc0M7O0FBQy9FLE1BQU0sS0FBTyw0QkFBNEIsR0FDdkMseUNBQXlDOztBQUUzQyxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsaUNBQWlDOztBQUNyRSxNQUFNLEtBQU8seUJBQXlCLEdBQUcsc0NBQXNDOztBQUMvRSxNQUFNLEtBQU8sNEJBQTRCLEdBQ3ZDLHlDQUF5Qzs7QUFFM0MsTUFBTSxLQUFPLDZCQUE2QixHQUN4QywwQ0FBMEM7O0FBQzVDLE1BQU0sS0FBTyxrQ0FBa0MsR0FDN0MsK0NBQStDOztBQUNqRCxNQUFNLEtBQU8scUNBQXFDLEdBQ2hELGtEQUFrRDs7QUFDcEQsTUFBTSxLQUFPLDhCQUE4QixHQUN6QywyQ0FBMkM7O0FBRTdDLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyw4QkFBOEI7O0FBQy9ELE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxtQ0FBbUM7O0FBQ3pFLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxzQ0FBc0M7O0FBRS9FLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxtQ0FBbUM7O0FBQ3pFLE1BQU0sS0FBTywyQkFBMkIsR0FDdEMsd0NBQXdDOztBQUMxQyxNQUFNLEtBQU8sOEJBQThCLEdBQ3pDLDJDQUEyQzs7QUFFN0MsTUFBTSxLQUFPLG1CQUFtQixHQUFHLGdDQUFnQzs7QUFDbkUsTUFBTSxLQUFPLHdCQUF3QixH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SUFKQywwQ0FBOEM7O0lBQ2xDLDZDQUErQjs7QUFLN0M7SUFBQTtRQUNXLFNBQUksR0FBRyx5QkFBeUIsQ0FBQztJQUM1QyxDQUFDO0lBQUQsNkJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLHNDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUsIE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NoZWNrb3V0Lm1vZGVsJztcbmltcG9ydCB7IENIRUNLT1VUX0RFVEFJTFMgfSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTUyA9ICdbQ2hlY2tvdXRdIEFkZCBEZWxpdmVyeSBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTU19GQUlMID0gJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIEFkZCBEZWxpdmVyeSBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1MgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1NfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgQWRkcmVzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTID1cbiAgJ1tDaGVja291dF0gTG9hZCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gTG9hZCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IE1vZGUnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFX0ZBSUwgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfTU9ERV9TVUNDRVNTID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IE1vZGUgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTID0gJ1tDaGVja291dF0gQ3JlYXRlIFBheW1lbnQgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMID1cbiAgJ1tDaGVja291dF0gQ3JlYXRlIFBheW1lbnQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMUyA9ICdbQ2hlY2tvdXRdIFNldCBQYXltZW50IERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX0RFVEFJTFNfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBQYXltZW50IERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSID0gJ1tDaGVja291dF0gUGxhY2UgT3JkZXInO1xuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSX0ZBSUwgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlciBGYWlsJztcbmV4cG9ydCBjb25zdCBQTEFDRV9PUkRFUl9TVUNDRVNTID0gJ1tDaGVja291dF0gUGxhY2UgT3JkZXIgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9TVEVQID0gJ1tDaGVja291dF0gQ2xlYXIgT25lIENoZWNrb3V0IFN0ZXAnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RBVEEgPSAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEYXRhJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ0hFQ0tPVVRfREVUQUlMUyA9ICdbQ2hlY2tvdXRdIExvYWQgQ2hlY2tvdXQgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgTE9BRF9DSEVDS09VVF9ERVRBSUxTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBMb2FkIENoZWNrb3V0IERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DSEVDS09VVF9ERVRBSUxTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBMb2FkIENoZWNrb3V0IERldGFpbHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS09VVF9DTEVBUl9NSVNDU19EQVRBID0gJ1tDaGVja291dF0gQ2xlYXIgTWlzY3MgRGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBBZGREZWxpdmVyeUFkZHJlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZHJlc3MpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeUFkZHJlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5QWRkcmVzc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZHJlc3MpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGVsaXZlcnlNb2RlW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeU1vZGUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX01PREU7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgc2VsZWN0ZWRNb2RlSWQ6IHN0cmluZyB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5TW9kZUZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX01PREVfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX01PREVfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVBheW1lbnREZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9QQVlNRU5UX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXltZW50RGV0YWlscykge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldFBheW1lbnREZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9QQVlNRU5UX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGF5bWVudERldGFpbHNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9QQVlNRU5UX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldFBheW1lbnREZXRhaWxzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXltZW50RGV0YWlscykge31cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUExBQ0VfT1JERVI7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlckZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUExBQ0VfT1JERVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBMQUNFX09SREVSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBPcmRlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9TVVBQT1JURURfREVMSVZFUllfTU9ERVM7XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0U3RlcCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9TVEVQO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERhdGEgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREFUQTtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDaGVja291dERldGFpbHMgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NIRUNLT1VUX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoQ0hFQ0tPVVRfREVUQUlMUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDaGVja291dERldGFpbHNGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDSEVDS09VVF9ERVRBSUxTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoZWNrb3V0RGV0YWlscykge1xuICAgIHN1cGVyKENIRUNLT1VUX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja291dENsZWFyTWlzY3NEYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENIRUNLT1VUX0NMRUFSX01JU0NTX0RBVEE7XG59XG5cbmV4cG9ydCB0eXBlIENoZWNrb3V0QWN0aW9uID1cbiAgfCBBZGREZWxpdmVyeUFkZHJlc3NcbiAgfCBBZGREZWxpdmVyeUFkZHJlc3NGYWlsXG4gIHwgQWRkRGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICB8IFNldERlbGl2ZXJ5QWRkcmVzc1xuICB8IFNldERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgfCBTZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gIHwgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgfCBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc0ZhaWxcbiAgfCBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3NcbiAgfCBTZXREZWxpdmVyeU1vZGVcbiAgfCBTZXREZWxpdmVyeU1vZGVGYWlsXG4gIHwgU2V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICB8IENsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1xuICB8IENyZWF0ZVBheW1lbnREZXRhaWxzXG4gIHwgQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsXG4gIHwgQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzXG4gIHwgU2V0UGF5bWVudERldGFpbHNcbiAgfCBTZXRQYXltZW50RGV0YWlsc0ZhaWxcbiAgfCBTZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3NcbiAgfCBQbGFjZU9yZGVyXG4gIHwgUGxhY2VPcmRlckZhaWxcbiAgfCBQbGFjZU9yZGVyU3VjY2Vzc1xuICB8IENsZWFyQ2hlY2tvdXRTdGVwXG4gIHwgQ2xlYXJDaGVja291dERhdGFcbiAgfCBMb2FkQ2hlY2tvdXREZXRhaWxzXG4gIHwgTG9hZENoZWNrb3V0RGV0YWlsc0ZhaWxcbiAgfCBMb2FkQ2hlY2tvdXREZXRhaWxzU3VjY2Vzc1xuICB8IENoZWNrb3V0Q2xlYXJNaXNjc0RhdGE7XG4iXX0=