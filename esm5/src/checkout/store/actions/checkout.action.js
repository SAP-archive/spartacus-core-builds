import { __extends } from "tslib";
import { MULTI_CART_DATA } from '../../../cart/store/multi-cart-state';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { StateUtils } from '../../../state/utils/index';
import { CHECKOUT_DETAILS, SET_DELIVERY_ADDRESS_PROCESS_ID, SET_DELIVERY_MODE_PROCESS_ID, SET_PAYMENT_DETAILS_PROCESS_ID, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID, } from '../checkout-state';
export var CLEAR_CHECKOUT_DELIVERY_ADDRESS = '[Checkout] Clear Checkout Delivery Address';
export var CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Clear Checkout Delivery Address Success';
export var CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL = '[Checkout] Clear Checkout Delivery Address Fail';
export var CLEAR_CHECKOUT_DELIVERY_MODE = '[Checkout] Clear Checkout Delivery Mode';
export var CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS = '[Checkout] Clear Checkout Delivery Mode Success';
export var CLEAR_CHECKOUT_DELIVERY_MODE_FAIL = '[Checkout] Clear Checkout Delivery Mode Fail';
export var ADD_DELIVERY_ADDRESS = '[Checkout] Add Delivery Address';
export var ADD_DELIVERY_ADDRESS_FAIL = '[Checkout] Add Delivery Address Fail';
export var ADD_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Add Delivery Address Success';
export var SET_DELIVERY_ADDRESS = '[Checkout] Set Delivery Address';
export var SET_DELIVERY_ADDRESS_FAIL = '[Checkout] Set Delivery Address Fail';
export var SET_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Set Delivery Address Success';
export var RESET_SET_DELIVERY_ADDRESS_PROCESS = '[Checkout] Reset Set Delivery Address Process';
export var LOAD_SUPPORTED_DELIVERY_MODES = '[Checkout] Load Supported Delivery Modes';
export var LOAD_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Load Supported Delivery Modes Fail';
export var LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Load Supported Delivery Modes Success';
export var CLEAR_SUPPORTED_DELIVERY_MODES = '[Checkout] Clear Supported Delivery Modes';
export var SET_DELIVERY_MODE = '[Checkout] Set Delivery Mode';
export var SET_DELIVERY_MODE_FAIL = '[Checkout] Set Delivery Mode Fail';
export var SET_DELIVERY_MODE_SUCCESS = '[Checkout] Set Delivery Mode Success';
export var RESET_SET_DELIVERY_MODE_PROCESS = '[Checkout] Reset Set Delivery Mode Process';
export var SET_SUPPORTED_DELIVERY_MODES = '[Checkout] Set Supported Delivery Modes';
export var SET_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Set Supported Delivery Modes Fail';
export var SET_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Set Supported Delivery Modes Success';
export var RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS = '[Checkout] Reset Set Supported Delivery Modes Process';
export var CREATE_PAYMENT_DETAILS = '[Checkout] Create Payment Details';
export var CREATE_PAYMENT_DETAILS_FAIL = '[Checkout] Create Payment Details Fail';
export var CREATE_PAYMENT_DETAILS_SUCCESS = '[Checkout] Create Payment Details Success';
export var SET_PAYMENT_DETAILS = '[Checkout] Set Payment Details';
export var SET_PAYMENT_DETAILS_FAIL = '[Checkout] Set Payment Details Fail';
export var SET_PAYMENT_DETAILS_SUCCESS = '[Checkout] Set Payment Details Success';
export var RESET_SET_PAYMENT_DETAILS_PROCESS = '[Checkout] Reset Set Payment Details Process';
export var PLACE_ORDER = '[Checkout] Place Order';
export var PLACE_ORDER_FAIL = '[Checkout] Place Order Fail';
export var PLACE_ORDER_SUCCESS = '[Checkout] Place Order Success';
export var CLEAR_CHECKOUT_STEP = '[Checkout] Clear One Checkout Step';
export var CLEAR_CHECKOUT_DATA = '[Checkout] Clear Checkout Data';
export var LOAD_CHECKOUT_DETAILS = '[Checkout] Load Checkout Details';
export var LOAD_CHECKOUT_DETAILS_FAIL = '[Checkout] Load Checkout Details Fail';
export var LOAD_CHECKOUT_DETAILS_SUCCESS = '[Checkout] Load Checkout Details Success';
export var CHECKOUT_CLEAR_MISCS_DATA = '[Checkout] Clear Miscs Data';
export var PAYMENT_PROCESS_SUCCESS = '[Checkout] Payment Process Success';
var AddDeliveryAddress = /** @class */ (function () {
    function AddDeliveryAddress(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS;
    }
    return AddDeliveryAddress;
}());
export { AddDeliveryAddress };
var AddDeliveryAddressFail = /** @class */ (function () {
    function AddDeliveryAddressFail(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_FAIL;
    }
    return AddDeliveryAddressFail;
}());
export { AddDeliveryAddressFail };
var AddDeliveryAddressSuccess = /** @class */ (function () {
    function AddDeliveryAddressSuccess(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_SUCCESS;
    }
    return AddDeliveryAddressSuccess;
}());
export { AddDeliveryAddressSuccess };
var SetDeliveryAddress = /** @class */ (function (_super) {
    __extends(SetDeliveryAddress, _super);
    function SetDeliveryAddress(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_ADDRESS;
        return _this;
    }
    return SetDeliveryAddress;
}(StateUtils.EntityLoadAction));
export { SetDeliveryAddress };
var SetDeliveryAddressFail = /** @class */ (function (_super) {
    __extends(SetDeliveryAddressFail, _super);
    function SetDeliveryAddressFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_ADDRESS_FAIL;
        return _this;
    }
    return SetDeliveryAddressFail;
}(StateUtils.EntityFailAction));
export { SetDeliveryAddressFail };
var SetDeliveryAddressSuccess = /** @class */ (function (_super) {
    __extends(SetDeliveryAddressSuccess, _super);
    function SetDeliveryAddressSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_ADDRESS_SUCCESS;
        return _this;
    }
    return SetDeliveryAddressSuccess;
}(StateUtils.EntitySuccessAction));
export { SetDeliveryAddressSuccess };
var ResetSetDeliveryAddressProcess = /** @class */ (function (_super) {
    __extends(ResetSetDeliveryAddressProcess, _super);
    function ResetSetDeliveryAddressProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID) || this;
        _this.type = RESET_SET_DELIVERY_ADDRESS_PROCESS;
        return _this;
    }
    return ResetSetDeliveryAddressProcess;
}(StateUtils.EntityLoaderResetAction));
export { ResetSetDeliveryAddressProcess };
var LoadSupportedDeliveryModes = /** @class */ (function (_super) {
    __extends(LoadSupportedDeliveryModes, _super);
    function LoadSupportedDeliveryModes(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = LOAD_SUPPORTED_DELIVERY_MODES;
        return _this;
    }
    return LoadSupportedDeliveryModes;
}(StateUtils.EntityLoadAction));
export { LoadSupportedDeliveryModes };
var LoadSupportedDeliveryModesFail = /** @class */ (function (_super) {
    __extends(LoadSupportedDeliveryModesFail, _super);
    function LoadSupportedDeliveryModesFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
        return _this;
    }
    return LoadSupportedDeliveryModesFail;
}(StateUtils.EntityFailAction));
export { LoadSupportedDeliveryModesFail };
var LoadSupportedDeliveryModesSuccess = /** @class */ (function (_super) {
    __extends(LoadSupportedDeliveryModesSuccess, _super);
    function LoadSupportedDeliveryModesSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
        return _this;
    }
    return LoadSupportedDeliveryModesSuccess;
}(StateUtils.EntitySuccessAction));
export { LoadSupportedDeliveryModesSuccess };
var ResetLoadSupportedDeliveryModesProcess = /** @class */ (function (_super) {
    __extends(ResetLoadSupportedDeliveryModesProcess, _super);
    function ResetLoadSupportedDeliveryModesProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.type = RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS;
        return _this;
    }
    return ResetLoadSupportedDeliveryModesProcess;
}(StateUtils.EntityLoaderResetAction));
export { ResetLoadSupportedDeliveryModesProcess };
var SetDeliveryMode = /** @class */ (function (_super) {
    __extends(SetDeliveryMode, _super);
    function SetDeliveryMode(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_MODE;
        return _this;
    }
    return SetDeliveryMode;
}(StateUtils.EntityLoadAction));
export { SetDeliveryMode };
var SetDeliveryModeFail = /** @class */ (function (_super) {
    __extends(SetDeliveryModeFail, _super);
    function SetDeliveryModeFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_MODE_FAIL;
        return _this;
    }
    return SetDeliveryModeFail;
}(StateUtils.EntityFailAction));
export { SetDeliveryModeFail };
var SetDeliveryModeSuccess = /** @class */ (function (_super) {
    __extends(SetDeliveryModeSuccess, _super);
    function SetDeliveryModeSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_MODE_SUCCESS;
        return _this;
    }
    return SetDeliveryModeSuccess;
}(StateUtils.EntitySuccessAction));
export { SetDeliveryModeSuccess };
var ResetSetDeliveryModeProcess = /** @class */ (function (_super) {
    __extends(ResetSetDeliveryModeProcess, _super);
    function ResetSetDeliveryModeProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID) || this;
        _this.type = RESET_SET_DELIVERY_MODE_PROCESS;
        return _this;
    }
    return ResetSetDeliveryModeProcess;
}(StateUtils.EntityLoaderResetAction));
export { ResetSetDeliveryModeProcess };
var CreatePaymentDetails = /** @class */ (function (_super) {
    __extends(CreatePaymentDetails, _super);
    function CreatePaymentDetails(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = CREATE_PAYMENT_DETAILS;
        return _this;
    }
    return CreatePaymentDetails;
}(StateUtils.EntityLoadAction));
export { CreatePaymentDetails };
var CreatePaymentDetailsFail = /** @class */ (function (_super) {
    __extends(CreatePaymentDetailsFail, _super);
    function CreatePaymentDetailsFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = CREATE_PAYMENT_DETAILS_FAIL;
        return _this;
    }
    return CreatePaymentDetailsFail;
}(StateUtils.EntityFailAction));
export { CreatePaymentDetailsFail };
var CreatePaymentDetailsSuccess = /** @class */ (function () {
    function CreatePaymentDetailsSuccess(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_SUCCESS;
    }
    return CreatePaymentDetailsSuccess;
}());
export { CreatePaymentDetailsSuccess };
var PaymentProcessSuccess = /** @class */ (function (_super) {
    __extends(PaymentProcessSuccess, _super);
    function PaymentProcessSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.type = PAYMENT_PROCESS_SUCCESS;
        return _this;
    }
    return PaymentProcessSuccess;
}(StateUtils.EntitySuccessAction));
export { PaymentProcessSuccess };
var SetPaymentDetails = /** @class */ (function (_super) {
    __extends(SetPaymentDetails, _super);
    function SetPaymentDetails(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_PAYMENT_DETAILS;
        return _this;
    }
    return SetPaymentDetails;
}(StateUtils.EntityLoadAction));
export { SetPaymentDetails };
var SetPaymentDetailsFail = /** @class */ (function (_super) {
    __extends(SetPaymentDetailsFail, _super);
    function SetPaymentDetailsFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SET_PAYMENT_DETAILS_FAIL;
        return _this;
    }
    return SetPaymentDetailsFail;
}(StateUtils.EntityFailAction));
export { SetPaymentDetailsFail };
var SetPaymentDetailsSuccess = /** @class */ (function (_super) {
    __extends(SetPaymentDetailsSuccess, _super);
    function SetPaymentDetailsSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_PAYMENT_DETAILS_SUCCESS;
        return _this;
    }
    return SetPaymentDetailsSuccess;
}(StateUtils.EntitySuccessAction));
export { SetPaymentDetailsSuccess };
var ResetSetPaymentDetailsProcess = /** @class */ (function (_super) {
    __extends(ResetSetPaymentDetailsProcess, _super);
    function ResetSetPaymentDetailsProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.type = RESET_SET_PAYMENT_DETAILS_PROCESS;
        return _this;
    }
    return ResetSetPaymentDetailsProcess;
}(StateUtils.EntityLoaderResetAction));
export { ResetSetPaymentDetailsProcess };
var PlaceOrder = /** @class */ (function () {
    function PlaceOrder(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER;
    }
    return PlaceOrder;
}());
export { PlaceOrder };
var PlaceOrderFail = /** @class */ (function () {
    function PlaceOrderFail(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_FAIL;
    }
    return PlaceOrderFail;
}());
export { PlaceOrderFail };
var PlaceOrderSuccess = /** @class */ (function () {
    function PlaceOrderSuccess(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_SUCCESS;
    }
    return PlaceOrderSuccess;
}());
export { PlaceOrderSuccess };
var ClearSupportedDeliveryModes = /** @class */ (function () {
    function ClearSupportedDeliveryModes() {
        this.type = CLEAR_SUPPORTED_DELIVERY_MODES;
    }
    return ClearSupportedDeliveryModes;
}());
export { ClearSupportedDeliveryModes };
var ClearCheckoutStep = /** @class */ (function () {
    function ClearCheckoutStep(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_STEP;
    }
    return ClearCheckoutStep;
}());
export { ClearCheckoutStep };
var ClearCheckoutData = /** @class */ (function () {
    function ClearCheckoutData() {
        this.type = CLEAR_CHECKOUT_DATA;
    }
    return ClearCheckoutData;
}());
export { ClearCheckoutData };
var LoadCheckoutDetails = /** @class */ (function (_super) {
    __extends(LoadCheckoutDetails, _super);
    function LoadCheckoutDetails(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS;
        return _this;
    }
    return LoadCheckoutDetails;
}(StateUtils.LoaderLoadAction));
export { LoadCheckoutDetails };
var LoadCheckoutDetailsFail = /** @class */ (function (_super) {
    __extends(LoadCheckoutDetailsFail, _super);
    function LoadCheckoutDetailsFail(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS_FAIL;
        return _this;
    }
    return LoadCheckoutDetailsFail;
}(StateUtils.LoaderFailAction));
export { LoadCheckoutDetailsFail };
var LoadCheckoutDetailsSuccess = /** @class */ (function (_super) {
    __extends(LoadCheckoutDetailsSuccess, _super);
    function LoadCheckoutDetailsSuccess(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS_SUCCESS;
        return _this;
    }
    return LoadCheckoutDetailsSuccess;
}(StateUtils.LoaderSuccessAction));
export { LoadCheckoutDetailsSuccess };
var CheckoutClearMiscsData = /** @class */ (function () {
    function CheckoutClearMiscsData() {
        this.type = CHECKOUT_CLEAR_MISCS_DATA;
    }
    return CheckoutClearMiscsData;
}());
export { CheckoutClearMiscsData };
var ClearCheckoutDeliveryAddress = /** @class */ (function () {
    function ClearCheckoutDeliveryAddress(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS;
    }
    return ClearCheckoutDeliveryAddress;
}());
export { ClearCheckoutDeliveryAddress };
var ClearCheckoutDeliveryAddressSuccess = /** @class */ (function () {
    function ClearCheckoutDeliveryAddressSuccess() {
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS;
    }
    return ClearCheckoutDeliveryAddressSuccess;
}());
export { ClearCheckoutDeliveryAddressSuccess };
var ClearCheckoutDeliveryAddressFail = /** @class */ (function () {
    function ClearCheckoutDeliveryAddressFail(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL;
    }
    return ClearCheckoutDeliveryAddressFail;
}());
export { ClearCheckoutDeliveryAddressFail };
var ClearCheckoutDeliveryMode = /** @class */ (function (_super) {
    __extends(ClearCheckoutDeliveryMode, _super);
    function ClearCheckoutDeliveryMode(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CLEAR_CHECKOUT_DELIVERY_MODE;
        return _this;
    }
    return ClearCheckoutDeliveryMode;
}(EntityProcessesIncrementAction));
export { ClearCheckoutDeliveryMode };
var ClearCheckoutDeliveryModeSuccess = /** @class */ (function (_super) {
    __extends(ClearCheckoutDeliveryModeSuccess, _super);
    function ClearCheckoutDeliveryModeSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS;
        return _this;
    }
    return ClearCheckoutDeliveryModeSuccess;
}(EntityProcessesDecrementAction));
export { ClearCheckoutDeliveryModeSuccess };
var ClearCheckoutDeliveryModeFail = /** @class */ (function (_super) {
    __extends(ClearCheckoutDeliveryModeFail, _super);
    function ClearCheckoutDeliveryModeFail(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CLEAR_CHECKOUT_DELIVERY_MODE_FAIL;
        return _this;
    }
    return ClearCheckoutDeliveryModeFail;
}(EntityProcessesDecrementAction));
export { ClearCheckoutDeliveryModeFail };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvY2hlY2tvdXQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsOEJBQThCLEdBQy9CLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsK0JBQStCLEVBQy9CLDRCQUE0QixFQUM1Qiw4QkFBOEIsRUFDOUIsc0NBQXNDLEdBQ3ZDLE1BQU0sbUJBQW1CLENBQUM7QUFFM0IsTUFBTSxDQUFDLElBQU0sK0JBQStCLEdBQzFDLDRDQUE0QyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxJQUFNLHVDQUF1QyxHQUNsRCxvREFBb0QsQ0FBQztBQUN2RCxNQUFNLENBQUMsSUFBTSxvQ0FBb0MsR0FDL0MsaURBQWlELENBQUM7QUFFcEQsTUFBTSxDQUFDLElBQU0sNEJBQTRCLEdBQ3ZDLHlDQUF5QyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxJQUFNLG9DQUFvQyxHQUMvQyxpREFBaUQsQ0FBQztBQUNwRCxNQUFNLENBQUMsSUFBTSxpQ0FBaUMsR0FDNUMsOENBQThDLENBQUM7QUFFakQsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsaUNBQWlDLENBQUM7QUFDdEUsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUcsc0NBQXNDLENBQUM7QUFDaEYsTUFBTSxDQUFDLElBQU0sNEJBQTRCLEdBQ3ZDLHlDQUF5QyxDQUFDO0FBRTVDLE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHLGlDQUFpQyxD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QUFvQyxDQUFDO0lBQ25CLENBQUM7SUFDckMsdUNBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQUErQyw2Q0FBOEI7SUFFM0UsbUNBQW1CLE9BQTJDO1FBQTlELFlBQ0Usa0JBQU0sZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FDdkM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsVUFBSSxHQUFHLDRCQUE0QixDQUFDOztJQUc3QyxDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBK0MsOEJBQThCLEdBSzVFOztBQUVEO0lBQXNELG9EQUE4QjtJQUVsRiwwQ0FBbUIsT0FBMkM7UUFBOUQsWUFDRSxrQkFBTSxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUN2QztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxVQUFJLEdBQUcsb0NBQW9DLENBQUM7O0lBR3JELENBQUM7SUFDSCx1Q0FBQztBQUFELENBQUMsQUFMRCxDQUFzRCw4QkFBOEIsR0FLbkY7O0FBRUQ7SUFBbUQsaURBQThCO0lBRS9FLHVDQUFtQixPQUF1RDtRQUExRSxZQUNFLGtCQUFNLGVBQWUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQ3ZDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWdEO1FBRGpFLFVBQUksR0FBRyxpQ0FBaUMsQ0FBQzs7SUFHbEQsQ0FBQztJQUNILG9DQUFDO0FBQUQsQ0FBQyxBQUxELENBQW1ELDhCQUE4QixHQUtoRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfREFUQSB9IGZyb20gJy4uLy4uLy4uL2NhcnQvc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlLCBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24sXG4gIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ0hFQ0tPVVRfREVUQUlMUyxcbiAgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCxcbiAgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCxcbiAgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lELFxuICBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTUyA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IEFkZHJlc3MgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTU19GQUlMID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgQWRkcmVzcyBGYWlsJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREUgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBNb2RlJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBNb2RlIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREVfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IE1vZGUgRmFpbCc7XG5cbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTUyA9ICdbQ2hlY2tvdXRdIEFkZCBEZWxpdmVyeSBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTU19GQUlMID0gJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIEFkZCBEZWxpdmVyeSBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1MgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1NfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgQWRkcmVzcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9TRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTID1cbiAgJ1tDaGVja291dF0gUmVzZXQgU2V0IERlbGl2ZXJ5IEFkZHJlc3MgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyA9XG4gICdbQ2hlY2tvdXRdIExvYWQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzJztcbmV4cG9ydCBjb25zdCBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19GQUlMID1cbiAgJ1tDaGVja291dF0gTG9hZCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIExvYWQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfTU9ERSA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBNb2RlJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfTU9ERV9GQUlMID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IE1vZGUgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREVfU1VDQ0VTUyA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBNb2RlIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1NFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1MgPVxuICAnW0NoZWNrb3V0XSBSZXNldCBTZXQgRGVsaXZlcnkgTW9kZSBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERVMgPVxuICAnW0NoZWNrb3V0XSBTZXQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzJztcbmV4cG9ydCBjb25zdCBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBTZXQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFNldCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfU1VQUE9SVEVEX1NFVF9ERUxJVkVSWV9NT0RFU19QUk9DRVNTID1cbiAgJ1tDaGVja291dF0gUmVzZXQgU2V0IFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9QQVlNRU5UX0RFVEFJTFMgPSAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIENyZWF0ZSBQYXltZW50IERldGFpbHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9ERVRBSUxTID0gJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMU19GQUlMID0gJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBTZXQgUGF5bWVudCBEZXRhaWxzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1NFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFJlc2V0IFNldCBQYXltZW50IERldGFpbHMgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBQTEFDRV9PUkRFUiA9ICdbQ2hlY2tvdXRdIFBsYWNlIE9yZGVyJztcbmV4cG9ydCBjb25zdCBQTEFDRV9PUkRFUl9GQUlMID0gJ1tDaGVja291dF0gUGxhY2UgT3JkZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgUExBQ0VfT1JERVJfU1VDQ0VTUyA9ICdbQ2hlY2tvdXRdIFBsYWNlIE9yZGVyIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfU1RFUCA9ICdbQ2hlY2tvdXRdIENsZWFyIE9uZSBDaGVja291dCBTdGVwJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9EQVRBID0gJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGF0YSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NIRUNLT1VUX0RFVEFJTFMgPSAnW0NoZWNrb3V0XSBMb2FkIENoZWNrb3V0IERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0hFQ0tPVVRfREVUQUlMU19GQUlMID1cbiAgJ1tDaGVja291dF0gTG9hZCBDaGVja291dCBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0hFQ0tPVVRfREVUQUlMU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gTG9hZCBDaGVja291dCBEZXRhaWxzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfQ0xFQVJfTUlTQ1NfREFUQSA9ICdbQ2hlY2tvdXRdIENsZWFyIE1pc2NzIERhdGEnO1xuZXhwb3J0IGNvbnN0IFBBWU1FTlRfUFJPQ0VTU19TVUNDRVNTID0gJ1tDaGVja291dF0gUGF5bWVudCBQcm9jZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgQWRkRGVsaXZlcnlBZGRyZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9ERUxJVkVSWV9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGFkZHJlc3M6IEFkZHJlc3MgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGREZWxpdmVyeUFkZHJlc3NGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9ERUxJVkVSWV9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGREZWxpdmVyeUFkZHJlc3NTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGRyZXNzKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGFkZHJlc3M6IEFkZHJlc3MgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeUFkZHJlc3NGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGRyZXNzKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9TRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEZWxpdmVyeU1vZGVbXSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzUHJvY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfU1VQUE9SVEVEX1NFVF9ERUxJVkVSWV9NT0RFU19QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IHNlbGVjdGVkTW9kZUlkOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeU1vZGVGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeU1vZGVTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1NFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVBheW1lbnREZXRhaWxzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9QQVlNRU5UX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlsc0ZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudERldGFpbHMpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXltZW50UHJvY2Vzc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUEFZTUVOVF9QUk9DRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGF5bWVudERldGFpbHMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1BBWU1FTlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldFBheW1lbnREZXRhaWxzRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldFBheW1lbnREZXRhaWxzU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXltZW50RGV0YWlscykge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRTZXRQYXltZW50RGV0YWlsc1Byb2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1NFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBMQUNFX09SREVSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBMQUNFX09SREVSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT3JkZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dFN0ZXAgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfU1RFUDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RBVEE7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2hlY2tvdXREZXRhaWxzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0hFQ0tPVVRfREVUQUlMUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihDSEVDS09VVF9ERVRBSUxTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlsc0ZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDSEVDS09VVF9ERVRBSUxTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGVja291dERldGFpbHMpIHtcbiAgICBzdXBlcihDSEVDS09VVF9ERVRBSUxTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDbGVhck1pc2NzRGF0YSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDSEVDS09VVF9DTEVBUl9NSVNDU19EQVRBO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2VzcyBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVGYWlsIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREVfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBlcnJvcjogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDaGVja291dEFjdGlvbiA9XG4gIHwgQWRkRGVsaXZlcnlBZGRyZXNzXG4gIHwgQWRkRGVsaXZlcnlBZGRyZXNzRmFpbFxuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBTZXREZWxpdmVyeUFkZHJlc3NcbiAgfCBTZXREZWxpdmVyeUFkZHJlc3NGYWlsXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICB8IFJlc2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2Vzc1xuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gIHwgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsXG4gIHwgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzXG4gIHwgU2V0RGVsaXZlcnlNb2RlXG4gIHwgU2V0RGVsaXZlcnlNb2RlRmFpbFxuICB8IFNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgfCBSZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3NcbiAgfCBDbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc1xuICB8IENyZWF0ZVBheW1lbnREZXRhaWxzRmFpbFxuICB8IENyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2Vzc1xuICB8IFNldFBheW1lbnREZXRhaWxzXG4gIHwgU2V0UGF5bWVudERldGFpbHNGYWlsXG4gIHwgU2V0UGF5bWVudERldGFpbHNTdWNjZXNzXG4gIHwgUmVzZXRTZXRQYXltZW50RGV0YWlsc1Byb2Nlc3NcbiAgfCBQbGFjZU9yZGVyXG4gIHwgUGxhY2VPcmRlckZhaWxcbiAgfCBQbGFjZU9yZGVyU3VjY2Vzc1xuICB8IENsZWFyQ2hlY2tvdXRTdGVwXG4gIHwgQ2xlYXJDaGVja291dERhdGFcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzXG4gIHwgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICB8IENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlRmFpbFxuICB8IENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gIHwgTG9hZENoZWNrb3V0RGV0YWlsc1xuICB8IExvYWRDaGVja291dERldGFpbHNGYWlsXG4gIHwgTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3NcbiAgfCBDaGVja291dENsZWFyTWlzY3NEYXRhO1xuIl19