/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions, StateEntityLoaderActions, } from '../../../state/utils/index';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { CHECKOUT_DETAILS, SET_DELIVERY_ADDRESS_PROCESS_ID, SET_PAYMENT_DETAILS_PROCESS_ID, SET_DELIVERY_MODE_PROCESS_ID, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID, } from '../checkout-state';
/** @type {?} */
export var CLEAR_CHECKOUT_DELIVERY_ADDRESS = '[Checkout] Clear Checkout Delivery Address';
/** @type {?} */
export var CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Clear Checkout Delivery Address Success';
/** @type {?} */
export var CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL = '[Checkout] Clear Checkout Delivery Address Fail';
/** @type {?} */
export var CLEAR_CHECKOUT_DELIVERY_MODE = '[Checkout] Clear Checkout Delivery Mode';
/** @type {?} */
export var CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS = '[Checkout] Clear Checkout Delivery Mode Success';
/** @type {?} */
export var CLEAR_CHECKOUT_DELIVERY_MODE_FAIL = '[Checkout] Clear Checkout Delivery Mode Fail';
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
export var RESET_SET_DELIVERY_ADDRESS_PROCESS = '[Checkout] Reset Set Delivery Address Process';
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
export var RESET_SET_DELIVERY_MODE_PROCESS = '[Checkout] Reset Set Delivery Mode Process';
/** @type {?} */
export var SET_SUPPORTED_DELIVERY_MODES = '[Checkout] Set Supported Delivery Modes';
/** @type {?} */
export var SET_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Set Supported Delivery Modes Fail';
/** @type {?} */
export var SET_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Set Supported Delivery Modes Success';
/** @type {?} */
export var RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS = '[Checkout] Reset Set Supported Delivery Modes Process';
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
export var RESET_SET_PAYMENT_DETAILS_PROCESS = '[Checkout] Reset Set Payment Details Process';
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
var SetDeliveryAddress = /** @class */ (function (_super) {
    tslib_1.__extends(SetDeliveryAddress, _super);
    function SetDeliveryAddress(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_ADDRESS;
        return _this;
    }
    return SetDeliveryAddress;
}(StateEntityLoaderActions.EntityLoadAction));
export { SetDeliveryAddress };
if (false) {
    /** @type {?} */
    SetDeliveryAddress.prototype.type;
    /** @type {?} */
    SetDeliveryAddress.prototype.payload;
}
var SetDeliveryAddressFail = /** @class */ (function (_super) {
    tslib_1.__extends(SetDeliveryAddressFail, _super);
    function SetDeliveryAddressFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_ADDRESS_FAIL;
        return _this;
    }
    return SetDeliveryAddressFail;
}(StateEntityLoaderActions.EntityFailAction));
export { SetDeliveryAddressFail };
if (false) {
    /** @type {?} */
    SetDeliveryAddressFail.prototype.type;
    /** @type {?} */
    SetDeliveryAddressFail.prototype.payload;
}
var SetDeliveryAddressSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(SetDeliveryAddressSuccess, _super);
    function SetDeliveryAddressSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_ADDRESS_SUCCESS;
        return _this;
    }
    return SetDeliveryAddressSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { SetDeliveryAddressSuccess };
if (false) {
    /** @type {?} */
    SetDeliveryAddressSuccess.prototype.type;
    /** @type {?} */
    SetDeliveryAddressSuccess.prototype.payload;
}
var ResetSetDeliveryAddressProcess = /** @class */ (function (_super) {
    tslib_1.__extends(ResetSetDeliveryAddressProcess, _super);
    function ResetSetDeliveryAddressProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID) || this;
        _this.type = RESET_SET_DELIVERY_ADDRESS_PROCESS;
        return _this;
    }
    return ResetSetDeliveryAddressProcess;
}(StateEntityLoaderActions.EntityResetAction));
export { ResetSetDeliveryAddressProcess };
if (false) {
    /** @type {?} */
    ResetSetDeliveryAddressProcess.prototype.type;
}
var LoadSupportedDeliveryModes = /** @class */ (function (_super) {
    tslib_1.__extends(LoadSupportedDeliveryModes, _super);
    function LoadSupportedDeliveryModes(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = LOAD_SUPPORTED_DELIVERY_MODES;
        return _this;
    }
    return LoadSupportedDeliveryModes;
}(StateEntityLoaderActions.EntityLoadAction));
export { LoadSupportedDeliveryModes };
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModes.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModes.prototype.payload;
}
var LoadSupportedDeliveryModesFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadSupportedDeliveryModesFail, _super);
    function LoadSupportedDeliveryModesFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
        return _this;
    }
    return LoadSupportedDeliveryModesFail;
}(StateEntityLoaderActions.EntityFailAction));
export { LoadSupportedDeliveryModesFail };
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModesFail.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModesFail.prototype.payload;
}
var LoadSupportedDeliveryModesSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadSupportedDeliveryModesSuccess, _super);
    function LoadSupportedDeliveryModesSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
        return _this;
    }
    return LoadSupportedDeliveryModesSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { LoadSupportedDeliveryModesSuccess };
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModesSuccess.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModesSuccess.prototype.payload;
}
var ResetLoadSupportedDeliveryModesProcess = /** @class */ (function (_super) {
    tslib_1.__extends(ResetLoadSupportedDeliveryModesProcess, _super);
    function ResetLoadSupportedDeliveryModesProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.type = RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS;
        return _this;
    }
    return ResetLoadSupportedDeliveryModesProcess;
}(StateEntityLoaderActions.EntityResetAction));
export { ResetLoadSupportedDeliveryModesProcess };
if (false) {
    /** @type {?} */
    ResetLoadSupportedDeliveryModesProcess.prototype.type;
}
var SetDeliveryMode = /** @class */ (function (_super) {
    tslib_1.__extends(SetDeliveryMode, _super);
    function SetDeliveryMode(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_MODE;
        return _this;
    }
    return SetDeliveryMode;
}(StateEntityLoaderActions.EntityLoadAction));
export { SetDeliveryMode };
if (false) {
    /** @type {?} */
    SetDeliveryMode.prototype.type;
    /** @type {?} */
    SetDeliveryMode.prototype.payload;
}
var SetDeliveryModeFail = /** @class */ (function (_super) {
    tslib_1.__extends(SetDeliveryModeFail, _super);
    function SetDeliveryModeFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_MODE_FAIL;
        return _this;
    }
    return SetDeliveryModeFail;
}(StateEntityLoaderActions.EntityFailAction));
export { SetDeliveryModeFail };
if (false) {
    /** @type {?} */
    SetDeliveryModeFail.prototype.type;
    /** @type {?} */
    SetDeliveryModeFail.prototype.payload;
}
var SetDeliveryModeSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(SetDeliveryModeSuccess, _super);
    function SetDeliveryModeSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_MODE_SUCCESS;
        return _this;
    }
    return SetDeliveryModeSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { SetDeliveryModeSuccess };
if (false) {
    /** @type {?} */
    SetDeliveryModeSuccess.prototype.type;
    /** @type {?} */
    SetDeliveryModeSuccess.prototype.payload;
}
var ResetSetDeliveryModeProcess = /** @class */ (function (_super) {
    tslib_1.__extends(ResetSetDeliveryModeProcess, _super);
    function ResetSetDeliveryModeProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID) || this;
        _this.type = RESET_SET_DELIVERY_MODE_PROCESS;
        return _this;
    }
    return ResetSetDeliveryModeProcess;
}(StateEntityLoaderActions.EntityResetAction));
export { ResetSetDeliveryModeProcess };
if (false) {
    /** @type {?} */
    ResetSetDeliveryModeProcess.prototype.type;
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
var SetPaymentDetails = /** @class */ (function (_super) {
    tslib_1.__extends(SetPaymentDetails, _super);
    function SetPaymentDetails(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_PAYMENT_DETAILS;
        return _this;
    }
    return SetPaymentDetails;
}(StateEntityLoaderActions.EntityLoadAction));
export { SetPaymentDetails };
if (false) {
    /** @type {?} */
    SetPaymentDetails.prototype.type;
    /** @type {?} */
    SetPaymentDetails.prototype.payload;
}
var SetPaymentDetailsFail = /** @class */ (function (_super) {
    tslib_1.__extends(SetPaymentDetailsFail, _super);
    function SetPaymentDetailsFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SET_PAYMENT_DETAILS_FAIL;
        return _this;
    }
    return SetPaymentDetailsFail;
}(StateEntityLoaderActions.EntityFailAction));
export { SetPaymentDetailsFail };
if (false) {
    /** @type {?} */
    SetPaymentDetailsFail.prototype.type;
    /** @type {?} */
    SetPaymentDetailsFail.prototype.payload;
}
var SetPaymentDetailsSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(SetPaymentDetailsSuccess, _super);
    function SetPaymentDetailsSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_PAYMENT_DETAILS_SUCCESS;
        return _this;
    }
    return SetPaymentDetailsSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { SetPaymentDetailsSuccess };
if (false) {
    /** @type {?} */
    SetPaymentDetailsSuccess.prototype.type;
    /** @type {?} */
    SetPaymentDetailsSuccess.prototype.payload;
}
var ResetSetPaymentDetailsProcess = /** @class */ (function (_super) {
    tslib_1.__extends(ResetSetPaymentDetailsProcess, _super);
    function ResetSetPaymentDetailsProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.type = RESET_SET_PAYMENT_DETAILS_PROCESS;
        return _this;
    }
    return ResetSetPaymentDetailsProcess;
}(StateEntityLoaderActions.EntityResetAction));
export { ResetSetPaymentDetailsProcess };
if (false) {
    /** @type {?} */
    ResetSetPaymentDetailsProcess.prototype.type;
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
var ClearCheckoutDeliveryAddress = /** @class */ (function () {
    function ClearCheckoutDeliveryAddress(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS;
    }
    return ClearCheckoutDeliveryAddress;
}());
export { ClearCheckoutDeliveryAddress };
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryAddress.prototype.type;
    /** @type {?} */
    ClearCheckoutDeliveryAddress.prototype.payload;
}
var ClearCheckoutDeliveryAddressSuccess = /** @class */ (function () {
    function ClearCheckoutDeliveryAddressSuccess() {
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS;
    }
    return ClearCheckoutDeliveryAddressSuccess;
}());
export { ClearCheckoutDeliveryAddressSuccess };
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryAddressSuccess.prototype.type;
}
var ClearCheckoutDeliveryAddressFail = /** @class */ (function () {
    function ClearCheckoutDeliveryAddressFail(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL;
    }
    return ClearCheckoutDeliveryAddressFail;
}());
export { ClearCheckoutDeliveryAddressFail };
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryAddressFail.prototype.type;
    /** @type {?} */
    ClearCheckoutDeliveryAddressFail.prototype.payload;
}
var ClearCheckoutDeliveryMode = /** @class */ (function () {
    function ClearCheckoutDeliveryMode(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE;
    }
    return ClearCheckoutDeliveryMode;
}());
export { ClearCheckoutDeliveryMode };
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryMode.prototype.type;
    /** @type {?} */
    ClearCheckoutDeliveryMode.prototype.payload;
}
var ClearCheckoutDeliveryModeSuccess = /** @class */ (function () {
    function ClearCheckoutDeliveryModeSuccess() {
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS;
    }
    return ClearCheckoutDeliveryModeSuccess;
}());
export { ClearCheckoutDeliveryModeSuccess };
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryModeSuccess.prototype.type;
}
var ClearCheckoutDeliveryModeFail = /** @class */ (function () {
    function ClearCheckoutDeliveryModeFail(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE_FAIL;
    }
    return ClearCheckoutDeliveryModeFail;
}());
export { ClearCheckoutDeliveryModeFail };
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryModeFail.prototype.type;
    /** @type {?} */
    ClearCheckoutDeliveryModeFail.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvY2hlY2tvdXQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUNMLGtCQUFrQixFQUNsQix3QkFBd0IsR0FDekIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQiwrQkFBK0IsRUFDL0IsOEJBQThCLEVBQzlCLDRCQUE0QixFQUM1QixzQ0FBc0MsR0FDdkMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFM0IsTUFBTSxLQUFPLCtCQUErQixHQUMxQyw0Q0FBNEM7O0FBQzlDLE1BQU0sS0FBTyx1Q0FBdUMsR0FDbEQsb0RBQW9EOztBQUN0RCxNQUFNLEtBQU8sb0NBQW9DLEdBQy9DLGlEQUFpRDs7QUFFbkQsTUFBTSxLQUFPLDRCQUE0QixHQUN2Qyx5Q0FBeUM7O0FBQzNDLE1BQU0sS0FBTyxvQ0FBb0MsR0FDL0MsaURBQWlEOztBQUNuRCxNQUFNLEtBQU8saUNBQWlDLEdBQzVDLDhDQUE4Qzs7QUFFaEQsTUFBTSxLQUFPLG9CQUFvQixHQUFHLGlDQUFpQzs7QUFDckUsTUFBTSxLQUFPLHlCQUF5QixHQUFHLHNDQUFzQzs7QUFDL0UsTUFBTSxLQUFPLDRCQUE0QixHQUN2Qyx5Q0FBeUM7O0FBRTNDLE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxpQ0FBaUM7O0FBQ3JFLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxzQ0FBc0M7O0FBQy9FLE1BQU0sS0FBTyw0QkFBNEIsR0FDdkMseUNBQXlDOztBQUMzQyxNQUFNLEtBQU8sa0NBQWtDLEdBQzdDLCtDQUErQzs7QUFFakQsTUFBTSxLQUFPLDZCQUE2QixHQUN4QywwQ0FBMEM7O0FBQzVDLE1BQU0sS0FBTyxrQ0FBa0MsR0FDN0MsK0NBQStDOztBQUNqRCxNQUFNLEtBQU8scUNBQXFDLEdBQ2hELGtEQUFrRDs7QUFDcEQsTUFBTSxLQUFPLDhCQUE4QixHQUN6QywyQ0FBMkM7O0FBRTdDLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyw4QkFBOEI7O0FBQy9ELE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxtQ0FBbUM7O0FBQ3pFLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxzQ0FBc0M7O0FBQy9FLE1BQU0sS0FBTywrQkFBK0IsR0FDMUMsNENBQTRDOztBQUU5QyxNQUFNLEtBQU8sNEJBQTRCLEdBQ3ZDLHlDQUF5Qzs7QUFDM0MsTUFBTSxLQUFPLGlDQUFpQyxHQUM1Qyw4Q0FBOEM7O0FBQ2hELE1BQU0sS0FBTyxvQ0FBb0MsR0FDL0MsaURBQWlEOztBQUNuRCxNQUFNLEtBQU8sMENBQTBDLEdBQ3JELHVEQUF1RDs7QUFFekQsTUFBTSxLQUFPLHNCQUFzQixHQUFHLG1DQUFtQzs7QUFDekUsTUFBTSxLQUFPLDJCQUEyQixHQUN0Qyx3Q0FBd0M7O0FBQzFDLE1BQU0sS0FBTyw4QkFBOEIsR0FDekMsMkNBQTJDOztBQUU3QyxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsZ0NBQWdDOztBQUNuRSxNQUFNLEtBQU8sd0JBQXdCLEdBQUcscUNBQXFDOztBQUM3RSxNQUFNLEtBQU8sMkJBQTJCLEdBQ3RDLHdDQUF3Qzs7QUFDMUMsTUFBTSxLQUFPLGlDQUFpQyxHQUM1Qyw4Q0FBOEM7O0FBRWhELE1BQU0sS0FBTyxXQUFXLEdBQUcsd0JBQXdCOztBQUNuRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsNkJBQTZCOztBQUM3RCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsZ0NBQWdDOztBQUVuRSxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsb0NBQW9DOztBQUN2RSxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsZ0NBQWdDOztBQUVuRSxNQUFNLEtBQU8scUJBQXFCLEdBQUcsa0NBQWtDOztBQUN2RSxNQUFNLEtBQU8sMEJBQTBCLEdBQ3JDLHVDQUF1Qzs7QUFDekMsTUFBTSxLQUFPLDZCQUE2QixHQUN4QywwQ0FBMEM7O0FBRTVDLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyw2QkFBNkI7QUFFdEU7SUFFRSw0QkFDUyxPQUE2RDtRQUE3RCxZQUFPLEdBQVAsT0FBTyxDQUFzRDtRQUY3RCxTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFHbEMsQ0FBQztJQUNOLHlCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7SUFKQyxrQ0FBcUM7O0lBRW5DLHFDQUFvRTs7QUFJeEU7SUFFRSxnQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBQ1IsQ0FBQztJQUNyQyw2QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsc0NBQTBDOztJQUM5Qix5Q0FBbUI7O0FBR2pDO0lBRUUsbUNBQW1CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFEMUIsU0FBSSxHQUFHLDRCQUE0QixDQUFDO0lBQ1AsQ0FBQztJQUN6QyxnQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMseUNBQTZDOztJQUNqQyw0Q0FBdUI7O0FBR3JDO0lBQXdDLDhDQUF5QztJQUUvRSw0QkFDUyxPQUE2RDtRQUR0RSxZQUdFLGtCQUFNLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQyxTQUN4RDtRQUhRLGFBQU8sR0FBUCxPQUFPLENBQXNEO1FBRjdELFVBQUksR0FBRyxvQkFBb0IsQ0FBQzs7SUFLckMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQVBELENBQXdDLHdCQUF3QixDQUFDLGdCQUFnQixHQU9oRjs7OztJQU5DLGtDQUFxQzs7SUFFbkMscUNBQW9FOztBQU14RTtJQUE0QyxrREFBeUM7SUFFbkYsZ0NBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxlQUFlLEVBQUUsK0JBQStCLEVBQUUsT0FBTyxDQUFDLFNBQ2pFO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUcxQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBS3BGOzs7O0lBSkMsc0NBQTBDOztJQUM5Qix5Q0FBbUI7O0FBS2pDO0lBQStDLHFEQUE0QztJQUV6RixtQ0FBbUIsT0FBZ0I7UUFBbkMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsK0JBQStCLENBQUMsU0FDeEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUztRQUQxQixVQUFJLEdBQUcsNEJBQTRCLENBQUM7O0lBRzdDLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUFMRCxDQUErQyx3QkFBd0IsQ0FBQyxtQkFBbUIsR0FLMUY7Ozs7SUFKQyx5Q0FBNkM7O0lBQ2pDLDRDQUF1Qjs7QUFLckM7SUFBb0QsMERBQTBDO0lBRTVGO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsK0JBQStCLENBQUMsU0FDeEQ7UUFIUSxVQUFJLEdBQUcsa0NBQWtDLENBQUM7O0lBR25ELENBQUM7SUFDSCxxQ0FBQztBQUFELENBQUMsQUFMRCxDQUFvRCx3QkFBd0IsQ0FBQyxpQkFBaUIsR0FLN0Y7Ozs7SUFKQyw4Q0FBbUQ7O0FBTXJEO0lBQWdELHNEQUF5QztJQUV2RixvQ0FBbUIsT0FBMkM7UUFBOUQsWUFDRSxrQkFBTSxlQUFlLEVBQUUsc0NBQXNDLENBQUMsU0FDL0Q7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsVUFBSSxHQUFHLDZCQUE2QixDQUFDOztJQUc5QyxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBZ0Qsd0JBQXdCLENBQUMsZ0JBQWdCLEdBS3hGOzs7O0lBSkMsMENBQThDOztJQUNsQyw2Q0FBa0Q7O0FBS2hFO0lBQW9ELDBEQUF5QztJQUUzRix3Q0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQ0FBc0MsQ0FBQyxTQUMvRDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxrQ0FBa0MsQ0FBQzs7SUFHbkQsQ0FBQztJQUNILHFDQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9ELHdCQUF3QixDQUFDLGdCQUFnQixHQUs1Rjs7OztJQUpDLDhDQUFtRDs7SUFDdkMsaURBQW1COztBQUtqQztJQUF1RCw2REFBNEM7SUFFakcsMkNBQW1CLE9BQXVCO1FBQTFDLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHNDQUFzQyxDQUFDLFNBQy9EO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWdCO1FBRGpDLFVBQUksR0FBRyxxQ0FBcUMsQ0FBQzs7SUFHdEQsQ0FBQztJQUNILHdDQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVELHdCQUF3QixDQUFDLG1CQUFtQixHQUtsRzs7OztJQUpDLGlEQUFzRDs7SUFDMUMsb0RBQThCOztBQUs1QztJQUE0RCxrRUFBMEM7SUFFcEc7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQ0FBc0MsQ0FBQyxTQUMvRDtRQUhRLFVBQUksR0FBRywwQ0FBMEMsQ0FBQzs7SUFHM0QsQ0FBQztJQUNILDZDQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRELHdCQUF3QixDQUFDLGlCQUFpQixHQUtyRzs7OztJQUpDLHNEQUEyRDs7QUFNN0Q7SUFBcUMsMkNBQXlDO0lBRTVFLHlCQUNTLE9BQW1FO1FBRDVFLFlBR0Usa0JBQU0sZUFBZSxFQUFFLDRCQUE0QixDQUFDLFNBQ3JEO1FBSFEsYUFBTyxHQUFQLE9BQU8sQ0FBNEQ7UUFGbkUsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUtsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBcUMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBTzdFOzs7O0lBTkMsK0JBQWtDOztJQUVoQyxrQ0FBMEU7O0FBTTlFO0lBQXlDLCtDQUF5QztJQUVoRiw2QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSw0QkFBNEIsRUFBRSxPQUFPLENBQUMsU0FDOUQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5Qyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLakY7Ozs7SUFKQyxtQ0FBdUM7O0lBQzNCLHNDQUFtQjs7QUFLakM7SUFBNEMsa0RBQTRDO0lBRXRGLGdDQUFtQixPQUFlO1FBQWxDLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDRCQUE0QixDQUFDLFNBQ3JEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUcxQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsd0JBQXdCLENBQUMsbUJBQW1CLEdBS3ZGOzs7O0lBSkMsc0NBQTBDOztJQUM5Qix5Q0FBc0I7O0FBS3BDO0lBQWlELHVEQUEwQztJQUV6RjtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDRCQUE0QixDQUFDLFNBQ3JEO1FBSFEsVUFBSSxHQUFHLCtCQUErQixDQUFDOztJQUdoRCxDQUFDO0lBQ0gsa0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBaUQsd0JBQXdCLENBQUMsaUJBQWlCLEdBSzFGOzs7O0lBSkMsMkNBQWdEOztBQU1sRDtJQUVFLDhCQUNTLE9BSU47UUFKTSxZQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBT3BDLENBQUM7SUFDTiwyQkFBQztBQUFELENBQUMsQUFURCxJQVNDOzs7O0lBUkMsb0NBQXVDOztJQUVyQyx1Q0FJQzs7QUFJTDtJQUVFLGtDQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFDVixDQUFDO0lBQ3JDLCtCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyx3Q0FBNEM7O0lBQ2hDLDJDQUFtQjs7QUFHakM7SUFFRSxxQ0FBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFEakMsU0FBSSxHQUFHLDhCQUE4QixDQUFDO0lBQ0YsQ0FBQztJQUNoRCxrQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsMkNBQStDOztJQUNuQyw4Q0FBOEI7O0FBRzVDO0lBQXVDLDZDQUF5QztJQUU5RSwyQkFDUyxPQUlOO1FBTEgsWUFPRSxrQkFBTSxlQUFlLEVBQUUsOEJBQThCLENBQUMsU0FDdkQ7UUFQUSxhQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sVUFBSSxHQUFHLG1CQUFtQixDQUFDOztJQVNwQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBdUMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBVy9FOzs7O0lBVkMsaUNBQW9DOztJQUVsQyxvQ0FJQzs7QUFNTDtJQUEyQyxpREFBeUM7SUFFbEYsK0JBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxlQUFlLEVBQUUsOEJBQThCLEVBQUUsT0FBTyxDQUFDLFNBQ2hFO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBS25GOzs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBbUI7O0FBS2pDO0lBQThDLG9EQUE0QztJQUV4RixrQ0FBbUIsT0FBdUI7UUFBMUMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsOEJBQThCLENBQUMsU0FDdkQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFEakMsVUFBSSxHQUFHLDJCQUEyQixDQUFDOztJQUc1QyxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBOEMsd0JBQXdCLENBQUMsbUJBQW1CLEdBS3pGOzs7O0lBSkMsd0NBQTRDOztJQUNoQywyQ0FBOEI7O0FBSzVDO0lBQW1ELHlEQUEwQztJQUUzRjtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDhCQUE4QixDQUFDLFNBQ3ZEO1FBSFEsVUFBSSxHQUFHLGlDQUFpQyxDQUFDOztJQUdsRCxDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUQsd0JBQXdCLENBQUMsaUJBQWlCLEdBSzVGOzs7O0lBSkMsNkNBQWtEOztBQU1wRDtJQUVFLG9CQUFtQixPQUEyQztRQUEzQyxZQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxTQUFJLEdBQUcsV0FBVyxDQUFDO0lBQ3FDLENBQUM7SUFDcEUsaUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDBCQUE0Qjs7SUFDaEIsNkJBQWtEOztBQUdoRTtJQUVFLHdCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDQyxDQUFDO0lBQ3JDLHFCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw4QkFBaUM7O0lBQ3JCLGlDQUFtQjs7QUFHakM7SUFFRSwyQkFBbUIsT0FBYztRQUFkLFlBQU8sR0FBUCxPQUFPLENBQU87UUFEeEIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ0EsQ0FBQztJQUN2Qyx3QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQW9DOztJQUN4QixvQ0FBcUI7O0FBR25DO0lBQUE7UUFDVyxTQUFJLEdBQUcsOEJBQThCLENBQUM7SUFDakQsQ0FBQztJQUFELGtDQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQywyQ0FBK0M7O0FBR2pEO0lBRUUsMkJBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUNDLENBQUM7SUFDeEMsd0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLGlDQUFvQzs7SUFDeEIsb0NBQXNCOztBQUdwQztJQUFBO1FBQ1csU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ3RDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsaUNBQW9DOztBQUd0QztJQUF5QywrQ0FBbUM7SUFFMUUsNkJBQW1CLE9BQTJDO1FBQTlELFlBQ0Usa0JBQU0sZ0JBQWdCLENBQUMsU0FDeEI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsVUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUd0QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBSzNFOzs7O0lBSkMsbUNBQXNDOztJQUMxQixzQ0FBa0Q7O0FBS2hFO0lBQTZDLG1EQUFtQztJQUU5RSxpQ0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxTQUNqQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRywwQkFBMEIsQ0FBQzs7SUFHM0MsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTZDLGtCQUFrQixDQUFDLGdCQUFnQixHQUsvRTs7OztJQUpDLHVDQUEyQzs7SUFDL0IsMENBQW1COztBQUtqQztJQUFnRCxzREFBc0M7SUFFcEYsb0NBQW1CLE9BQXdCO1FBQTNDLFlBQ0Usa0JBQU0sZ0JBQWdCLENBQUMsU0FDeEI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFEbEMsVUFBSSxHQUFHLDZCQUE2QixDQUFDOztJQUc5QyxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBZ0Qsa0JBQWtCLENBQUMsbUJBQW1CLEdBS3JGOzs7O0lBSkMsMENBQThDOztJQUNsQyw2Q0FBK0I7O0FBSzdDO0lBQUE7UUFDVyxTQUFJLEdBQUcseUJBQXlCLENBQUM7SUFDNUMsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyxzQ0FBMEM7O0FBRzVDO0lBRUUsc0NBQW1CLE9BQTJDO1FBQTNDLFlBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFNBQUksR0FBRywrQkFBK0IsQ0FBQztJQUNpQixDQUFDO0lBQ3BFLG1DQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw0Q0FBZ0Q7O0lBQ3BDLCtDQUFrRDs7QUFHaEU7SUFFRTtRQURTLFNBQUksR0FBRyx1Q0FBdUMsQ0FBQztJQUN6QyxDQUFDO0lBQ2xCLDBDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxtREFBd0Q7O0FBSTFEO0lBRUUsMENBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxvQ0FBb0MsQ0FBQztJQUNuQixDQUFDO0lBQ3JDLHVDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxnREFBcUQ7O0lBQ3pDLG1EQUFtQjs7QUFHakM7SUFFRSxtQ0FBbUIsT0FBMkM7UUFBM0MsWUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsU0FBSSxHQUFHLDRCQUE0QixDQUFDO0lBQ29CLENBQUM7SUFDcEUsZ0NBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHlDQUE2Qzs7SUFDakMsNENBQWtEOztBQUdoRTtJQUVFO1FBRFMsU0FBSSxHQUFHLG9DQUFvQyxDQUFDO0lBQ3RDLENBQUM7SUFDbEIsdUNBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLGdEQUFxRDs7QUFJdkQ7SUFFRSx1Q0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGlDQUFpQyxDQUFDO0lBQ2hCLENBQUM7SUFDckMsb0NBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDZDQUFrRDs7SUFDdEMsZ0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSwgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQge1xuICBTdGF0ZUxvYWRlckFjdGlvbnMsXG4gIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucyxcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NoZWNrb3V0Lm1vZGVsJztcbmltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBDSEVDS09VVF9ERVRBSUxTLFxuICBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lELFxuICBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQsXG4gIFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQsXG4gIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lELFxufSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgQWRkcmVzcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBBZGRyZXNzIEZhaWwnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERSA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IE1vZGUnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREVfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IE1vZGUgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9GQUlMID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgTW9kZSBGYWlsJztcblxuZXhwb3J0IGNvbnN0IEFERF9ERUxJVkVSWV9BRERSRVNTID0gJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IEFERF9ERUxJVkVSWV9BRERSRVNTX0ZBSUwgPSAnW0NoZWNrb3V0XSBBZGQgRGVsaXZlcnkgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTUyA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTU19GQUlMID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1NFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1MgPVxuICAnW0NoZWNrb3V0XSBSZXNldCBTZXQgRGVsaXZlcnkgQWRkcmVzcyBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTID1cbiAgJ1tDaGVja291dF0gTG9hZCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gTG9hZCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IE1vZGUnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFX0ZBSUwgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfTU9ERV9TVUNDRVNTID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IE1vZGUgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFJlc2V0IFNldCBEZWxpdmVyeSBNb2RlIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyA9XG4gICdbQ2hlY2tvdXRdIFNldCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMnO1xuZXhwb3J0IGNvbnN0IFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIFNldCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gU2V0IFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9TVVBQT1JURURfU0VUX0RFTElWRVJZX01PREVTX1BST0NFU1MgPVxuICAnW0NoZWNrb3V0XSBSZXNldCBTZXQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBWU1FTlRfREVUQUlMUyA9ICdbQ2hlY2tvdXRdIENyZWF0ZSBQYXltZW50IERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIENyZWF0ZSBQYXltZW50IERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gQ3JlYXRlIFBheW1lbnQgRGV0YWlscyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX0RFVEFJTFMgPSAnW0NoZWNrb3V0XSBTZXQgUGF5bWVudCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9ERVRBSUxTX0ZBSUwgPSAnW0NoZWNrb3V0XSBTZXQgUGF5bWVudCBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFNldCBQYXltZW50IERldGFpbHMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTID1cbiAgJ1tDaGVja291dF0gUmVzZXQgU2V0IFBheW1lbnQgRGV0YWlscyBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSID0gJ1tDaGVja291dF0gUGxhY2UgT3JkZXInO1xuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSX0ZBSUwgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlciBGYWlsJztcbmV4cG9ydCBjb25zdCBQTEFDRV9PUkRFUl9TVUNDRVNTID0gJ1tDaGVja291dF0gUGxhY2UgT3JkZXIgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9TVEVQID0gJ1tDaGVja291dF0gQ2xlYXIgT25lIENoZWNrb3V0IFN0ZXAnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RBVEEgPSAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEYXRhJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ0hFQ0tPVVRfREVUQUlMUyA9ICdbQ2hlY2tvdXRdIExvYWQgQ2hlY2tvdXQgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgTE9BRF9DSEVDS09VVF9ERVRBSUxTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBMb2FkIENoZWNrb3V0IERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DSEVDS09VVF9ERVRBSUxTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBMb2FkIENoZWNrb3V0IERldGFpbHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS09VVF9DTEVBUl9NSVNDU19EQVRBID0gJ1tDaGVja291dF0gQ2xlYXIgTWlzY3MgRGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBBZGREZWxpdmVyeUFkZHJlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZHJlc3MpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeUFkZHJlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZHJlc3MpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGVsaXZlcnlNb2RlW10pIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1Byb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfU1VQUE9SVEVEX1NFVF9ERUxJVkVSWV9NT0RFU19QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX01PREU7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgc2VsZWN0ZWRNb2RlSWQ6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5TW9kZUZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfTU9ERV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGF5bWVudERldGFpbHMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlsc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBheW1lbnREZXRhaWxzKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGF5bWVudERldGFpbHMgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGF5bWVudERldGFpbHNGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1BBWU1FTlRfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXltZW50RGV0YWlscykge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRTZXRQYXltZW50RGV0YWlsc1Byb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUExBQ0VfT1JERVI7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlckZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUExBQ0VfT1JERVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBMQUNFX09SREVSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBPcmRlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9TVVBQT1JURURfREVMSVZFUllfTU9ERVM7XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0U3RlcCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9TVEVQO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERhdGEgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREFUQTtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDaGVja291dERldGFpbHMgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NIRUNLT1VUX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoQ0hFQ0tPVVRfREVUQUlMUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDaGVja291dERldGFpbHNGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDSEVDS09VVF9ERVRBSUxTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoZWNrb3V0RGV0YWlscykge1xuICAgIHN1cGVyKENIRUNLT1VUX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja291dENsZWFyTWlzY3NEYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENIRUNLT1VUX0NMRUFSX01JU0NTX0RBVEE7XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREU7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCB0eXBlIENoZWNrb3V0QWN0aW9uID1cbiAgfCBBZGREZWxpdmVyeUFkZHJlc3NcbiAgfCBBZGREZWxpdmVyeUFkZHJlc3NGYWlsXG4gIHwgQWRkRGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICB8IFNldERlbGl2ZXJ5QWRkcmVzc1xuICB8IFNldERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgfCBTZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gIHwgUmVzZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzXG4gIHwgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgfCBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc0ZhaWxcbiAgfCBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3NcbiAgfCBTZXREZWxpdmVyeU1vZGVcbiAgfCBTZXREZWxpdmVyeU1vZGVGYWlsXG4gIHwgU2V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICB8IFJlc2V0U2V0RGVsaXZlcnlNb2RlUHJvY2Vzc1xuICB8IENsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1xuICB8IENyZWF0ZVBheW1lbnREZXRhaWxzXG4gIHwgQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsXG4gIHwgQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzXG4gIHwgU2V0UGF5bWVudERldGFpbHNcbiAgfCBTZXRQYXltZW50RGV0YWlsc0ZhaWxcbiAgfCBTZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3NcbiAgfCBSZXNldFNldFBheW1lbnREZXRhaWxzUHJvY2Vzc1xuICB8IFBsYWNlT3JkZXJcbiAgfCBQbGFjZU9yZGVyRmFpbFxuICB8IFBsYWNlT3JkZXJTdWNjZXNzXG4gIHwgQ2xlYXJDaGVja291dFN0ZXBcbiAgfCBDbGVhckNoZWNrb3V0RGF0YVxuICB8IENsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzRmFpbFxuICB8IENsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gIHwgQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVxuICB8IENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVGYWlsXG4gIHwgQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgfCBMb2FkQ2hlY2tvdXREZXRhaWxzXG4gIHwgTG9hZENoZWNrb3V0RGV0YWlsc0ZhaWxcbiAgfCBMb2FkQ2hlY2tvdXREZXRhaWxzU3VjY2Vzc1xuICB8IENoZWNrb3V0Q2xlYXJNaXNjc0RhdGE7XG4iXX0=