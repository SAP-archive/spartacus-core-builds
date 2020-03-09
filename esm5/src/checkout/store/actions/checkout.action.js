import { __extends } from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions, StateLoaderActions, } from '../../../state/utils/index';
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
}(StateEntityLoaderActions.EntityLoadAction));
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
}(StateEntityLoaderActions.EntityFailAction));
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
}(StateEntityLoaderActions.EntitySuccessAction));
export { SetDeliveryAddressSuccess };
var ResetSetDeliveryAddressProcess = /** @class */ (function (_super) {
    __extends(ResetSetDeliveryAddressProcess, _super);
    function ResetSetDeliveryAddressProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID) || this;
        _this.type = RESET_SET_DELIVERY_ADDRESS_PROCESS;
        return _this;
    }
    return ResetSetDeliveryAddressProcess;
}(StateEntityLoaderActions.EntityResetAction));
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
}(StateEntityLoaderActions.EntityLoadAction));
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
}(StateEntityLoaderActions.EntityFailAction));
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
}(StateEntityLoaderActions.EntitySuccessAction));
export { LoadSupportedDeliveryModesSuccess };
var ResetLoadSupportedDeliveryModesProcess = /** @class */ (function (_super) {
    __extends(ResetLoadSupportedDeliveryModesProcess, _super);
    function ResetLoadSupportedDeliveryModesProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.type = RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS;
        return _this;
    }
    return ResetLoadSupportedDeliveryModesProcess;
}(StateEntityLoaderActions.EntityResetAction));
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
}(StateEntityLoaderActions.EntityLoadAction));
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
}(StateEntityLoaderActions.EntityFailAction));
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
}(StateEntityLoaderActions.EntitySuccessAction));
export { SetDeliveryModeSuccess };
var ResetSetDeliveryModeProcess = /** @class */ (function (_super) {
    __extends(ResetSetDeliveryModeProcess, _super);
    function ResetSetDeliveryModeProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID) || this;
        _this.type = RESET_SET_DELIVERY_MODE_PROCESS;
        return _this;
    }
    return ResetSetDeliveryModeProcess;
}(StateEntityLoaderActions.EntityResetAction));
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
}(StateEntityLoaderActions.EntityLoadAction));
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
}(StateEntityLoaderActions.EntityFailAction));
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
}(StateEntityLoaderActions.EntitySuccessAction));
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
}(StateEntityLoaderActions.EntityLoadAction));
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
}(StateEntityLoaderActions.EntityFailAction));
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
}(StateEntityLoaderActions.EntitySuccessAction));
export { SetPaymentDetailsSuccess };
var ResetSetPaymentDetailsProcess = /** @class */ (function (_super) {
    __extends(ResetSetPaymentDetailsProcess, _super);
    function ResetSetPaymentDetailsProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.type = RESET_SET_PAYMENT_DETAILS_PROCESS;
        return _this;
    }
    return ResetSetPaymentDetailsProcess;
}(StateEntityLoaderActions.EntityResetAction));
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
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
var ClearCheckoutDeliveryMode = /** @class */ (function () {
    function ClearCheckoutDeliveryMode(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE;
    }
    return ClearCheckoutDeliveryMode;
}());
export { ClearCheckoutDeliveryMode };
var ClearCheckoutDeliveryModeSuccess = /** @class */ (function () {
    function ClearCheckoutDeliveryModeSuccess(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS;
    }
    return ClearCheckoutDeliveryModeSuccess;
}());
export { ClearCheckoutDeliveryModeSuccess };
var ClearCheckoutDeliveryModeFail = /** @class */ (function () {
    function ClearCheckoutDeliveryModeFail(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE_FAIL;
    }
    return ClearCheckoutDeliveryModeFail;
}());
export { ClearCheckoutDeliveryModeFail };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvY2hlY2tvdXQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixrQkFBa0IsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLCtCQUErQixFQUMvQiw0QkFBNEIsRUFDNUIsOEJBQThCLEVBQzlCLHNDQUFzQyxHQUN2QyxNQUFNLG1CQUFtQixDQUFDO0FBRTNCLE1BQU0sQ0FBQyxJQUFNLCtCQUErQixHQUMxQyw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLENBQUMsSUFBTSx1Q0FBdUMsR0FDbEQsb0RBQW9ELENBQUM7QUFDdkQsTUFBTSxDQUFDLElBQU0sb0NBQW9DLEdBQy9DLGlEQUFpRCxDQUFDO0FBRXBELE1BQU0sQ0FBQyxJQUFNLDRCQUE0QixHQUN2Qyx5Q0FBeUMsQ0FBQztBQUM1QyxNQUFNLENBQUMsSUFBTSxvQ0FBb0MsR0FDL0MsaURBQWlELENBQUM7QUFDcEQsTUFBTSxDQUFDLElBQU0saUNBQWlDLEdBQzVDLDhDQUE4QyxDQUFDO0FBRWpELE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHLGlDQUFpQyxDQUFDO0FBQ3RFLE1BQU0sQ0FBQyxJQUFNLHlCQUF5QixHQUFHLHNDQUFzQyxDQUFDO0FBQ2hGLE1BQU0sQ0FBQyxJQUFNLDRCQUE0QixHQUN2Qyx5Q0FBeUMsQ0FBQztBQUU1QyxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxpQ0FBaUMsQ0FBQztBQUN0RSxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxzQ0FBc0MsQ0FBQztBQUNoRixNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FDdkMseUNB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LEFBSEQsSUFHQzs7QUFFRDtJQUVFLG1DQUFtQixPQUEyQztRQUEzQyxZQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxTQUFJLEdBQUcsNEJBQTRCLENBQUM7SUFDb0IsQ0FBQztJQUNwRSxnQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBRUUsMENBQW1CLE9BQTJDO1FBQTNDLFlBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFNBQUksR0FBRyxvQ0FBb0MsQ0FBQztJQUNZLENBQUM7SUFDcEUsdUNBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQUVFLHVDQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsaUNBQWlDLENBQUM7SUFDaEIsQ0FBQztJQUNyQyxvQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSwgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLFxuICBTdGF0ZUxvYWRlckFjdGlvbnMsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9jaGVja291dC5tb2RlbCc7XG5pbXBvcnQge1xuICBDSEVDS09VVF9ERVRBSUxTLFxuICBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lELFxuICBTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lELFxuICBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQsXG4gIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lELFxufSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgQWRkcmVzcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBBZGRyZXNzIEZhaWwnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERSA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IE1vZGUnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREVfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IE1vZGUgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9GQUlMID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgTW9kZSBGYWlsJztcblxuZXhwb3J0IGNvbnN0IEFERF9ERUxJVkVSWV9BRERSRVNTID0gJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IEFERF9ERUxJVkVSWV9BRERSRVNTX0ZBSUwgPSAnW0NoZWNrb3V0XSBBZGQgRGVsaXZlcnkgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTUyA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTU19GQUlMID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1NFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1MgPVxuICAnW0NoZWNrb3V0XSBSZXNldCBTZXQgRGVsaXZlcnkgQWRkcmVzcyBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTID1cbiAgJ1tDaGVja291dF0gTG9hZCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gTG9hZCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IE1vZGUnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFX0ZBSUwgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfTU9ERV9TVUNDRVNTID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IE1vZGUgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFJlc2V0IFNldCBEZWxpdmVyeSBNb2RlIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyA9XG4gICdbQ2hlY2tvdXRdIFNldCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMnO1xuZXhwb3J0IGNvbnN0IFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIFNldCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gU2V0IFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9TVVBQT1JURURfU0VUX0RFTElWRVJZX01PREVTX1BST0NFU1MgPVxuICAnW0NoZWNrb3V0XSBSZXNldCBTZXQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBWU1FTlRfREVUQUlMUyA9ICdbQ2hlY2tvdXRdIENyZWF0ZSBQYXltZW50IERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIENyZWF0ZSBQYXltZW50IERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gQ3JlYXRlIFBheW1lbnQgRGV0YWlscyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX0RFVEFJTFMgPSAnW0NoZWNrb3V0XSBTZXQgUGF5bWVudCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9ERVRBSUxTX0ZBSUwgPSAnW0NoZWNrb3V0XSBTZXQgUGF5bWVudCBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFNldCBQYXltZW50IERldGFpbHMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTID1cbiAgJ1tDaGVja291dF0gUmVzZXQgU2V0IFBheW1lbnQgRGV0YWlscyBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSID0gJ1tDaGVja291dF0gUGxhY2UgT3JkZXInO1xuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSX0ZBSUwgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlciBGYWlsJztcbmV4cG9ydCBjb25zdCBQTEFDRV9PUkRFUl9TVUNDRVNTID0gJ1tDaGVja291dF0gUGxhY2UgT3JkZXIgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9TVEVQID0gJ1tDaGVja291dF0gQ2xlYXIgT25lIENoZWNrb3V0IFN0ZXAnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RBVEEgPSAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEYXRhJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ0hFQ0tPVVRfREVUQUlMUyA9ICdbQ2hlY2tvdXRdIExvYWQgQ2hlY2tvdXQgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgTE9BRF9DSEVDS09VVF9ERVRBSUxTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBMb2FkIENoZWNrb3V0IERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DSEVDS09VVF9ERVRBSUxTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBMb2FkIENoZWNrb3V0IERldGFpbHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS09VVF9DTEVBUl9NSVNDU19EQVRBID0gJ1tDaGVja291dF0gQ2xlYXIgTWlzY3MgRGF0YSc7XG5leHBvcnQgY29uc3QgUEFZTUVOVF9QUk9DRVNTX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBQYXltZW50IFByb2Nlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBBZGREZWxpdmVyeUFkZHJlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZHJlc3MpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeUFkZHJlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZHJlc3MpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGVsaXZlcnlNb2RlW10pIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1Byb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfU1VQUE9SVEVEX1NFVF9ERUxJVkVSWV9NT0RFU19QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX01PREU7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgc2VsZWN0ZWRNb2RlSWQ6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5TW9kZUZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfTU9ERV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGF5bWVudERldGFpbHMgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudERldGFpbHMpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXltZW50UHJvY2Vzc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQQVlNRU5UX1BST0NFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlscyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9QQVlNRU5UX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlsc0ZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldFBheW1lbnREZXRhaWxzU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBheW1lbnREZXRhaWxzKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFNldFBheW1lbnREZXRhaWxzUHJvY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9TRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlclN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUExBQ0VfT1JERVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IE9yZGVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUztcbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXRTdGVwIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX1NURVA7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGF0YSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9EQVRBO1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlscyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0hFQ0tPVVRfREVUQUlMUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihDSEVDS09VVF9ERVRBSUxTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlsc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENIRUNLT1VUX0RFVEFJTFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2hlY2tvdXREZXRhaWxzU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0hFQ0tPVVRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hlY2tvdXREZXRhaWxzKSB7XG4gICAgc3VwZXIoQ0hFQ0tPVVRfREVUQUlMUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q2xlYXJNaXNjc0RhdGEgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0hFQ0tPVVRfQ0xFQVJfTUlTQ1NfREFUQTtcbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZUZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgdHlwZSBDaGVja291dEFjdGlvbiA9XG4gIHwgQWRkRGVsaXZlcnlBZGRyZXNzXG4gIHwgQWRkRGVsaXZlcnlBZGRyZXNzRmFpbFxuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBTZXREZWxpdmVyeUFkZHJlc3NcbiAgfCBTZXREZWxpdmVyeUFkZHJlc3NGYWlsXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICB8IFJlc2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2Vzc1xuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gIHwgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsXG4gIHwgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzXG4gIHwgU2V0RGVsaXZlcnlNb2RlXG4gIHwgU2V0RGVsaXZlcnlNb2RlRmFpbFxuICB8IFNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgfCBSZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3NcbiAgfCBDbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc1xuICB8IENyZWF0ZVBheW1lbnREZXRhaWxzRmFpbFxuICB8IENyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2Vzc1xuICB8IFNldFBheW1lbnREZXRhaWxzXG4gIHwgU2V0UGF5bWVudERldGFpbHNGYWlsXG4gIHwgU2V0UGF5bWVudERldGFpbHNTdWNjZXNzXG4gIHwgUmVzZXRTZXRQYXltZW50RGV0YWlsc1Byb2Nlc3NcbiAgfCBQbGFjZU9yZGVyXG4gIHwgUGxhY2VPcmRlckZhaWxcbiAgfCBQbGFjZU9yZGVyU3VjY2Vzc1xuICB8IENsZWFyQ2hlY2tvdXRTdGVwXG4gIHwgQ2xlYXJDaGVja291dERhdGFcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzXG4gIHwgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICB8IENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlRmFpbFxuICB8IENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gIHwgTG9hZENoZWNrb3V0RGV0YWlsc1xuICB8IExvYWRDaGVja291dERldGFpbHNGYWlsXG4gIHwgTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3NcbiAgfCBDaGVja291dENsZWFyTWlzY3NEYXRhO1xuIl19