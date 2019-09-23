/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions, StateEntityLoaderActions, } from '../../../state/utils/index';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { CHECKOUT_DETAILS, SET_DELIVERY_ADDRESS_PROCESS_ID, SET_PAYMENT_DETAILS_PROCESS_ID, SET_DELIVERY_MODE_PROCESS_ID, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID, } from '../checkout-state';
/** @type {?} */
export const CLEAR_CHECKOUT_DELIVERY_ADDRESS = '[Checkout] Clear Checkout Delivery Address';
/** @type {?} */
export const CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Clear Checkout Delivery Address Success';
/** @type {?} */
export const CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL = '[Checkout] Clear Checkout Delivery Address Fail';
/** @type {?} */
export const CLEAR_CHECKOUT_DELIVERY_MODE = '[Checkout] Clear Checkout Delivery Mode';
/** @type {?} */
export const CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS = '[Checkout] Clear Checkout Delivery Mode Success';
/** @type {?} */
export const CLEAR_CHECKOUT_DELIVERY_MODE_FAIL = '[Checkout] Clear Checkout Delivery Mode Fail';
/** @type {?} */
export const ADD_DELIVERY_ADDRESS = '[Checkout] Add Delivery Address';
/** @type {?} */
export const ADD_DELIVERY_ADDRESS_FAIL = '[Checkout] Add Delivery Address Fail';
/** @type {?} */
export const ADD_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Add Delivery Address Success';
/** @type {?} */
export const SET_DELIVERY_ADDRESS = '[Checkout] Set Delivery Address';
/** @type {?} */
export const SET_DELIVERY_ADDRESS_FAIL = '[Checkout] Set Delivery Address Fail';
/** @type {?} */
export const SET_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Set Delivery Address Success';
/** @type {?} */
export const RESET_SET_DELIVERY_ADDRESS_PROCESS = '[Checkout] Reset Set Delivery Address Process';
/** @type {?} */
export const LOAD_SUPPORTED_DELIVERY_MODES = '[Checkout] Load Supported Delivery Modes';
/** @type {?} */
export const LOAD_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Load Supported Delivery Modes Fail';
/** @type {?} */
export const LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Load Supported Delivery Modes Success';
/** @type {?} */
export const CLEAR_SUPPORTED_DELIVERY_MODES = '[Checkout] Clear Supported Delivery Modes';
/** @type {?} */
export const SET_DELIVERY_MODE = '[Checkout] Set Delivery Mode';
/** @type {?} */
export const SET_DELIVERY_MODE_FAIL = '[Checkout] Set Delivery Mode Fail';
/** @type {?} */
export const SET_DELIVERY_MODE_SUCCESS = '[Checkout] Set Delivery Mode Success';
/** @type {?} */
export const RESET_SET_DELIVERY_MODE_PROCESS = '[Checkout] Reset Set Delivery Mode Process';
/** @type {?} */
export const SET_SUPPORTED_DELIVERY_MODES = '[Checkout] Set Supported Delivery Modes';
/** @type {?} */
export const SET_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Set Supported Delivery Modes Fail';
/** @type {?} */
export const SET_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Set Supported Delivery Modes Success';
/** @type {?} */
export const RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS = '[Checkout] Reset Set Supported Delivery Modes Process';
/** @type {?} */
export const CREATE_PAYMENT_DETAILS = '[Checkout] Create Payment Details';
/** @type {?} */
export const CREATE_PAYMENT_DETAILS_FAIL = '[Checkout] Create Payment Details Fail';
/** @type {?} */
export const CREATE_PAYMENT_DETAILS_SUCCESS = '[Checkout] Create Payment Details Success';
/** @type {?} */
export const SET_PAYMENT_DETAILS = '[Checkout] Set Payment Details';
/** @type {?} */
export const SET_PAYMENT_DETAILS_FAIL = '[Checkout] Set Payment Details Fail';
/** @type {?} */
export const SET_PAYMENT_DETAILS_SUCCESS = '[Checkout] Set Payment Details Success';
/** @type {?} */
export const RESET_SET_PAYMENT_DETAILS_PROCESS = '[Checkout] Reset Set Payment Details Process';
/** @type {?} */
export const PLACE_ORDER = '[Checkout] Place Order';
/** @type {?} */
export const PLACE_ORDER_FAIL = '[Checkout] Place Order Fail';
/** @type {?} */
export const PLACE_ORDER_SUCCESS = '[Checkout] Place Order Success';
/** @type {?} */
export const CLEAR_CHECKOUT_STEP = '[Checkout] Clear One Checkout Step';
/** @type {?} */
export const CLEAR_CHECKOUT_DATA = '[Checkout] Clear Checkout Data';
/** @type {?} */
export const LOAD_CHECKOUT_DETAILS = '[Checkout] Load Checkout Details';
/** @type {?} */
export const LOAD_CHECKOUT_DETAILS_FAIL = '[Checkout] Load Checkout Details Fail';
/** @type {?} */
export const LOAD_CHECKOUT_DETAILS_SUCCESS = '[Checkout] Load Checkout Details Success';
/** @type {?} */
export const CHECKOUT_CLEAR_MISCS_DATA = '[Checkout] Clear Miscs Data';
export class AddDeliveryAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS;
    }
}
if (false) {
    /** @type {?} */
    AddDeliveryAddress.prototype.type;
    /** @type {?} */
    AddDeliveryAddress.prototype.payload;
}
export class AddDeliveryAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    AddDeliveryAddressFail.prototype.type;
    /** @type {?} */
    AddDeliveryAddressFail.prototype.payload;
}
export class AddDeliveryAddressSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    AddDeliveryAddressSuccess.prototype.type;
    /** @type {?} */
    AddDeliveryAddressSuccess.prototype.payload;
}
export class SetDeliveryAddress extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID);
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryAddress.prototype.type;
    /** @type {?} */
    SetDeliveryAddress.prototype.payload;
}
export class SetDeliveryAddressFail extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID, payload);
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryAddressFail.prototype.type;
    /** @type {?} */
    SetDeliveryAddressFail.prototype.payload;
}
export class SetDeliveryAddressSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID);
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryAddressSuccess.prototype.type;
    /** @type {?} */
    SetDeliveryAddressSuccess.prototype.payload;
}
export class ResetSetDeliveryAddressProcess extends StateEntityLoaderActions.EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID);
        this.type = RESET_SET_DELIVERY_ADDRESS_PROCESS;
    }
}
if (false) {
    /** @type {?} */
    ResetSetDeliveryAddressProcess.prototype.type;
}
export class LoadSupportedDeliveryModes extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID);
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES;
    }
}
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModes.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModes.prototype.payload;
}
export class LoadSupportedDeliveryModesFail extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID);
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModesFail.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModesFail.prototype.payload;
}
export class LoadSupportedDeliveryModesSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID);
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModesSuccess.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModesSuccess.prototype.payload;
}
export class ResetLoadSupportedDeliveryModesProcess extends StateEntityLoaderActions.EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID);
        this.type = RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS;
    }
}
if (false) {
    /** @type {?} */
    ResetLoadSupportedDeliveryModesProcess.prototype.type;
}
export class SetDeliveryMode extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID);
        this.payload = payload;
        this.type = SET_DELIVERY_MODE;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryMode.prototype.type;
    /** @type {?} */
    SetDeliveryMode.prototype.payload;
}
export class SetDeliveryModeFail extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID, payload);
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_FAIL;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryModeFail.prototype.type;
    /** @type {?} */
    SetDeliveryModeFail.prototype.payload;
}
export class SetDeliveryModeSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID);
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryModeSuccess.prototype.type;
    /** @type {?} */
    SetDeliveryModeSuccess.prototype.payload;
}
export class ResetSetDeliveryModeProcess extends StateEntityLoaderActions.EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID);
        this.type = RESET_SET_DELIVERY_MODE_PROCESS;
    }
}
if (false) {
    /** @type {?} */
    ResetSetDeliveryModeProcess.prototype.type;
}
export class CreatePaymentDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    CreatePaymentDetails.prototype.type;
    /** @type {?} */
    CreatePaymentDetails.prototype.payload;
}
export class CreatePaymentDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CreatePaymentDetailsFail.prototype.type;
    /** @type {?} */
    CreatePaymentDetailsFail.prototype.payload;
}
export class CreatePaymentDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CreatePaymentDetailsSuccess.prototype.type;
    /** @type {?} */
    CreatePaymentDetailsSuccess.prototype.payload;
}
export class SetPaymentDetails extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID);
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    SetPaymentDetails.prototype.type;
    /** @type {?} */
    SetPaymentDetails.prototype.payload;
}
export class SetPaymentDetailsFail extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID, payload);
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    SetPaymentDetailsFail.prototype.type;
    /** @type {?} */
    SetPaymentDetailsFail.prototype.payload;
}
export class SetPaymentDetailsSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID);
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    SetPaymentDetailsSuccess.prototype.type;
    /** @type {?} */
    SetPaymentDetailsSuccess.prototype.payload;
}
export class ResetSetPaymentDetailsProcess extends StateEntityLoaderActions.EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID);
        this.type = RESET_SET_PAYMENT_DETAILS_PROCESS;
    }
}
if (false) {
    /** @type {?} */
    ResetSetPaymentDetailsProcess.prototype.type;
}
export class PlaceOrder {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER;
    }
}
if (false) {
    /** @type {?} */
    PlaceOrder.prototype.type;
    /** @type {?} */
    PlaceOrder.prototype.payload;
}
export class PlaceOrderFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_FAIL;
    }
}
if (false) {
    /** @type {?} */
    PlaceOrderFail.prototype.type;
    /** @type {?} */
    PlaceOrderFail.prototype.payload;
}
export class PlaceOrderSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    PlaceOrderSuccess.prototype.type;
    /** @type {?} */
    PlaceOrderSuccess.prototype.payload;
}
export class ClearSupportedDeliveryModes {
    constructor() {
        this.type = CLEAR_SUPPORTED_DELIVERY_MODES;
    }
}
if (false) {
    /** @type {?} */
    ClearSupportedDeliveryModes.prototype.type;
}
export class ClearCheckoutStep {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_STEP;
    }
}
if (false) {
    /** @type {?} */
    ClearCheckoutStep.prototype.type;
    /** @type {?} */
    ClearCheckoutStep.prototype.payload;
}
export class ClearCheckoutData {
    constructor() {
        this.type = CLEAR_CHECKOUT_DATA;
    }
}
if (false) {
    /** @type {?} */
    ClearCheckoutData.prototype.type;
}
export class LoadCheckoutDetails extends StateLoaderActions.LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CHECKOUT_DETAILS);
        this.payload = payload;
        this.type = LOAD_CHECKOUT_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    LoadCheckoutDetails.prototype.type;
    /** @type {?} */
    LoadCheckoutDetails.prototype.payload;
}
export class LoadCheckoutDetailsFail extends StateLoaderActions.LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CHECKOUT_DETAILS, payload);
        this.payload = payload;
        this.type = LOAD_CHECKOUT_DETAILS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadCheckoutDetailsFail.prototype.type;
    /** @type {?} */
    LoadCheckoutDetailsFail.prototype.payload;
}
export class LoadCheckoutDetailsSuccess extends StateLoaderActions.LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CHECKOUT_DETAILS);
        this.payload = payload;
        this.type = LOAD_CHECKOUT_DETAILS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadCheckoutDetailsSuccess.prototype.type;
    /** @type {?} */
    LoadCheckoutDetailsSuccess.prototype.payload;
}
export class CheckoutClearMiscsData {
    constructor() {
        this.type = CHECKOUT_CLEAR_MISCS_DATA;
    }
}
if (false) {
    /** @type {?} */
    CheckoutClearMiscsData.prototype.type;
}
export class ClearCheckoutDeliveryAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS;
    }
}
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryAddress.prototype.type;
    /** @type {?} */
    ClearCheckoutDeliveryAddress.prototype.payload;
}
export class ClearCheckoutDeliveryAddressSuccess {
    constructor() {
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryAddressSuccess.prototype.type;
}
export class ClearCheckoutDeliveryAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryAddressFail.prototype.type;
    /** @type {?} */
    ClearCheckoutDeliveryAddressFail.prototype.payload;
}
export class ClearCheckoutDeliveryMode {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE;
    }
}
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryMode.prototype.type;
    /** @type {?} */
    ClearCheckoutDeliveryMode.prototype.payload;
}
export class ClearCheckoutDeliveryModeSuccess {
    /**
     * @param {?=} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryModeSuccess.prototype.type;
    /** @type {?} */
    ClearCheckoutDeliveryModeSuccess.prototype.payload;
}
export class ClearCheckoutDeliveryModeFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE_FAIL;
    }
}
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryModeFail.prototype.type;
    /** @type {?} */
    ClearCheckoutDeliveryModeFail.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvY2hlY2tvdXQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLHdCQUF3QixHQUN6QixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLCtCQUErQixFQUMvQiw4QkFBOEIsRUFDOUIsNEJBQTRCLEVBQzVCLHNDQUFzQyxHQUN2QyxNQUFNLG1CQUFtQixDQUFDOztBQUUzQixNQUFNLE9BQU8sK0JBQStCLEdBQzFDLDRDQUE0Qzs7QUFDOUMsTUFBTSxPQUFPLHVDQUF1QyxHQUNsRCxvREFBb0Q7O0FBQ3RELE1BQU0sT0FBTyxvQ0FBb0MsR0FDL0MsaURBQWlEOztBQUVuRCxNQUFNLE9BQU8sNEJBQTRCLEdBQ3ZDLHlDQUF5Qzs7QUFDM0MsTUFBTSxPQUFPLG9DQUFvQyxHQUMvQyxpREFBaUQ7O0FBQ25ELE1BQU0sT0FBTyxpQ0FBaUMsR0FDNUMsOENBQThDOztBQUVoRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsaUNBQWlDOztBQUNyRSxNQUFNLE9BQU8seUJBQXlCLEdBQUcsc0NBQXNDOztBQUMvRSxNQUFNLE9BQU8sNEJBQTRCLEdBQ3ZDLHlDQUF5Qzs7QUFFM0MsTUFBTSxPQUFPLG9CQUFvQixHQUFHLGlDQUFpQzs7QUFDckUsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHNDQUFzQzs7QUFDL0UsTUFBTSxPQUFPLDRCQUE0QixHQUN2Qyx5Q0FBeUM7O0FBQzNDLE1BQU0sT0FBTyxrQ0FBa0MsR0FDN0MsK0NBQStDOztBQUVqRCxNQUFNLE9BQU8sNkJBQTZCLEdBQ3hDLDBDQUEwQzs7QUFDNUMsTUFBTSxPQUFPLGtDQUFr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QUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUsIE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgU3RhdGVMb2FkZXJBY3Rpb25zLFxuICBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9jaGVja291dC5tb2RlbCc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgQ0hFQ0tPVVRfREVUQUlMUyxcbiAgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCxcbiAgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lELFxuICBTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lELFxuICBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTUyA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IEFkZHJlc3MgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTU19GQUlMID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgQWRkcmVzcyBGYWlsJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREUgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBNb2RlJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBNb2RlIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREVfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IE1vZGUgRmFpbCc7XG5cbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTUyA9ICdbQ2hlY2tvdXRdIEFkZCBEZWxpdmVyeSBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTU19GQUlMID0gJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIEFkZCBEZWxpdmVyeSBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1MgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1NfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgQWRkcmVzcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9TRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTID1cbiAgJ1tDaGVja291dF0gUmVzZXQgU2V0IERlbGl2ZXJ5IEFkZHJlc3MgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyA9XG4gICdbQ2hlY2tvdXRdIExvYWQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzJztcbmV4cG9ydCBjb25zdCBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19GQUlMID1cbiAgJ1tDaGVja291dF0gTG9hZCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIExvYWQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfTU9ERSA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBNb2RlJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfTU9ERV9GQUlMID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IE1vZGUgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREVfU1VDQ0VTUyA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBNb2RlIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1NFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1MgPVxuICAnW0NoZWNrb3V0XSBSZXNldCBTZXQgRGVsaXZlcnkgTW9kZSBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERVMgPVxuICAnW0NoZWNrb3V0XSBTZXQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzJztcbmV4cG9ydCBjb25zdCBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBTZXQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFNldCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfU1VQUE9SVEVEX1NFVF9ERUxJVkVSWV9NT0RFU19QUk9DRVNTID1cbiAgJ1tDaGVja291dF0gUmVzZXQgU2V0IFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9QQVlNRU5UX0RFVEFJTFMgPSAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIENyZWF0ZSBQYXltZW50IERldGFpbHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9ERVRBSUxTID0gJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMU19GQUlMID0gJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBTZXQgUGF5bWVudCBEZXRhaWxzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1NFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFJlc2V0IFNldCBQYXltZW50IERldGFpbHMgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBQTEFDRV9PUkRFUiA9ICdbQ2hlY2tvdXRdIFBsYWNlIE9yZGVyJztcbmV4cG9ydCBjb25zdCBQTEFDRV9PUkRFUl9GQUlMID0gJ1tDaGVja291dF0gUGxhY2UgT3JkZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgUExBQ0VfT1JERVJfU1VDQ0VTUyA9ICdbQ2hlY2tvdXRdIFBsYWNlIE9yZGVyIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfU1RFUCA9ICdbQ2hlY2tvdXRdIENsZWFyIE9uZSBDaGVja291dCBTdGVwJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9EQVRBID0gJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGF0YSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NIRUNLT1VUX0RFVEFJTFMgPSAnW0NoZWNrb3V0XSBMb2FkIENoZWNrb3V0IERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0hFQ0tPVVRfREVUQUlMU19GQUlMID1cbiAgJ1tDaGVja291dF0gTG9hZCBDaGVja291dCBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0hFQ0tPVVRfREVUQUlMU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gTG9hZCBDaGVja291dCBEZXRhaWxzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfQ0xFQVJfTUlTQ1NfREFUQSA9ICdbQ2hlY2tvdXRdIENsZWFyIE1pc2NzIERhdGEnO1xuXG5leHBvcnQgY2xhc3MgQWRkRGVsaXZlcnlBZGRyZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9ERUxJVkVSWV9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGFkZHJlc3M6IEFkZHJlc3MgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGREZWxpdmVyeUFkZHJlc3NGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9ERUxJVkVSWV9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGREZWxpdmVyeUFkZHJlc3NTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGRyZXNzKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5QWRkcmVzc0ZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGRyZXNzKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1NFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERlbGl2ZXJ5TW9kZVtdKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1NVUFBPUlRFRF9TRVRfREVMSVZFUllfTU9ERVNfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5TW9kZSBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IHNlbGVjdGVkTW9kZUlkOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeU1vZGVGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX01PREVfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfTU9ERV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1NFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVBheW1lbnREZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9QQVlNRU5UX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXltZW50RGV0YWlscykge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldFBheW1lbnREZXRhaWxzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1BBWU1FTlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldFBheW1lbnREZXRhaWxzRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9QQVlNRU5UX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGF5bWVudERldGFpbHNTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudERldGFpbHMpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0U2V0UGF5bWVudERldGFpbHNQcm9jZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1NFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBMQUNFX09SREVSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBMQUNFX09SREVSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT3JkZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dFN0ZXAgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfU1RFUDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RBVEE7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2hlY2tvdXREZXRhaWxzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENIRUNLT1VUX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2hlY2tvdXREZXRhaWxzRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0hFQ0tPVVRfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0hFQ0tPVVRfREVUQUlMUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDaGVja291dERldGFpbHNTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGVja291dERldGFpbHMpIHtcbiAgICBzdXBlcihDSEVDS09VVF9ERVRBSUxTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDbGVhck1pc2NzRGF0YSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDSEVDS09VVF9DTEVBUl9NSVNDU19EQVRBO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREVfU1VDQ0VTUztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICBjb25zdHJ1Y3RvcihwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4yXG4gICAqIFVzZSBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkgaW5zdGVhZFxuICAgKlxuICAgKiBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMlxuICAgKi9cbiAgY29uc3RydWN0b3IoKTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ/OiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZUZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgdHlwZSBDaGVja291dEFjdGlvbiA9XG4gIHwgQWRkRGVsaXZlcnlBZGRyZXNzXG4gIHwgQWRkRGVsaXZlcnlBZGRyZXNzRmFpbFxuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBTZXREZWxpdmVyeUFkZHJlc3NcbiAgfCBTZXREZWxpdmVyeUFkZHJlc3NGYWlsXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICB8IFJlc2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2Vzc1xuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gIHwgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsXG4gIHwgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzXG4gIHwgU2V0RGVsaXZlcnlNb2RlXG4gIHwgU2V0RGVsaXZlcnlNb2RlRmFpbFxuICB8IFNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgfCBSZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3NcbiAgfCBDbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc1xuICB8IENyZWF0ZVBheW1lbnREZXRhaWxzRmFpbFxuICB8IENyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2Vzc1xuICB8IFNldFBheW1lbnREZXRhaWxzXG4gIHwgU2V0UGF5bWVudERldGFpbHNGYWlsXG4gIHwgU2V0UGF5bWVudERldGFpbHNTdWNjZXNzXG4gIHwgUmVzZXRTZXRQYXltZW50RGV0YWlsc1Byb2Nlc3NcbiAgfCBQbGFjZU9yZGVyXG4gIHwgUGxhY2VPcmRlckZhaWxcbiAgfCBQbGFjZU9yZGVyU3VjY2Vzc1xuICB8IENsZWFyQ2hlY2tvdXRTdGVwXG4gIHwgQ2xlYXJDaGVja291dERhdGFcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzXG4gIHwgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICB8IENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlRmFpbFxuICB8IENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gIHwgTG9hZENoZWNrb3V0RGV0YWlsc1xuICB8IExvYWRDaGVja291dERldGFpbHNGYWlsXG4gIHwgTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3NcbiAgfCBDaGVja291dENsZWFyTWlzY3NEYXRhO1xuIl19