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
    constructor() {
        this.type = CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    ClearCheckoutDeliveryModeSuccess.prototype.type;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvY2hlY2tvdXQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLHdCQUF3QixHQUN6QixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLCtCQUErQixFQUMvQiw4QkFBOEIsRUFDOUIsNEJBQTRCLEVBQzVCLHNDQUFzQyxHQUN2QyxNQUFNLG1CQUFtQixDQUFDOztBQUUzQixNQUFNLE9BQU8sK0JBQStCLEdBQzFDLDRDQUE0Qzs7QUFDOUMsTUFBTSxPQUFPLHVDQUF1QyxHQUNsRCxvREFBb0Q7O0FBQ3RELE1BQU0sT0FBTyxvQ0FBb0MsR0FDL0MsaURBQWlEOztBQUVuRCxNQUFNLE9BQU8sNEJBQTRCLEdBQ3ZDLHlDQUF5Qzs7QUFDM0MsTUFBTSxPQUFPLG9DQUFvQyxHQUMvQyxpREFBaUQ7O0FBQ25ELE1BQU0sT0FBTyxpQ0FBaUMsR0FDNUMsOENBQThDOztBQUVoRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsaUNBQWlDOztBQUNyRSxNQUFNLE9BQU8seUJBQXlCLEdBQUcsc0NBQXNDOztBQUMvRSxNQUFNLE9BQU8sNEJBQTRCLEdBQ3ZDLHlDQUF5Qzs7QUFFM0MsTUFBTSxPQUFPLG9CQUFvQixHQUFHLGlDQUFpQzs7QUFDckUsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHNDQUFzQzs7QUFDL0UsTUFBTSxPQUFPLDRCQUE0QixHQUN2Qyx5Q0FBeUM7O0FBQzNDLE1BQU0sT0FBTyxrQ0FBa0MsR0FDN0MsK0NBQStDOztBQUVqRCxNQUFNLE9BQU8sNkJBQTZCLEdBQ3hDLDBDQUEwQzs7QUFDNUMsTUFBTSxPQUFPLGtDQUFr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dG9yZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlLCBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7XG4gIFN0YXRlTG9hZGVyQWN0aW9ucyxcbiAgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xuaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIENIRUNLT1VUX0RFVEFJTFMsXG4gIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQsXG4gIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCxcbiAgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCxcbiAgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL2NoZWNrb3V0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1MgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBBZGRyZXNzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1NfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IEFkZHJlc3MgRmFpbCc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgTW9kZSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgTW9kZSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBNb2RlIEZhaWwnO1xuXG5leHBvcnQgY29uc3QgQUREX0RFTElWRVJZX0FERFJFU1MgPSAnW0NoZWNrb3V0XSBBZGQgRGVsaXZlcnkgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgQUREX0RFTElWRVJZX0FERFJFU1NfRkFJTCA9ICdbQ2hlY2tvdXRdIEFkZCBEZWxpdmVyeSBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IEFERF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBBZGQgRGVsaXZlcnkgQWRkcmVzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9BRERSRVNTID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9BRERSRVNTX0ZBSUwgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IEFkZHJlc3MgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFJlc2V0IFNldCBEZWxpdmVyeSBBZGRyZXNzIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVMgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlcyc7XG5leHBvcnQgY29uc3QgTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIExvYWQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9TVVBQT1JURURfREVMSVZFUllfTU9ERVMgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMnO1xuXG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREUgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREVfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBNb2RlIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9TRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTID1cbiAgJ1tDaGVja291dF0gUmVzZXQgU2V0IERlbGl2ZXJ5IE1vZGUgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTID1cbiAgJ1tDaGVja291dF0gU2V0IFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlcyc7XG5leHBvcnQgY29uc3QgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19GQUlMID1cbiAgJ1tDaGVja291dF0gU2V0IFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBTZXQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1NVUFBPUlRFRF9TRVRfREVMSVZFUllfTU9ERVNfUFJPQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFJlc2V0IFNldCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTID0gJ1tDaGVja291dF0gQ3JlYXRlIFBheW1lbnQgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMID1cbiAgJ1tDaGVja291dF0gQ3JlYXRlIFBheW1lbnQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMUyA9ICdbQ2hlY2tvdXRdIFNldCBQYXltZW50IERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX0RFVEFJTFNfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBQYXltZW50IERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9TRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1MgPVxuICAnW0NoZWNrb3V0XSBSZXNldCBTZXQgUGF5bWVudCBEZXRhaWxzIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUExBQ0VfT1JERVIgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlcic7XG5leHBvcnQgY29uc3QgUExBQ0VfT1JERVJfRkFJTCA9ICdbQ2hlY2tvdXRdIFBsYWNlIE9yZGVyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlciBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX1NURVAgPSAnW0NoZWNrb3V0XSBDbGVhciBPbmUgQ2hlY2tvdXQgU3RlcCc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREFUQSA9ICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERhdGEnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DSEVDS09VVF9ERVRBSUxTID0gJ1tDaGVja291dF0gTG9hZCBDaGVja291dCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIExvYWQgQ2hlY2tvdXQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIExvYWQgQ2hlY2tvdXQgRGV0YWlscyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NMRUFSX01JU0NTX0RBVEEgPSAnW0NoZWNrb3V0XSBDbGVhciBNaXNjcyBEYXRhJztcblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRGVsaXZlcnlBZGRyZXNzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRGVsaXZlcnlBZGRyZXNzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkcmVzcykge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5QWRkcmVzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGFkZHJlc3M6IEFkZHJlc3MgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeUFkZHJlc3NGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkcmVzcykge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9TRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc0ZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEZWxpdmVyeU1vZGVbXSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzUHJvY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9TVVBQT1JURURfU0VUX0RFTElWRVJZX01PREVTX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeU1vZGUgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfTU9ERTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBzZWxlY3RlZE1vZGVJZDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeU1vZGVTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX01PREVfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9TRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlscyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVBheW1lbnREZXRhaWxzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudERldGFpbHMpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlscyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9QQVlNRU5UX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlsc0ZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldFBheW1lbnREZXRhaWxzU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBheW1lbnREZXRhaWxzKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFNldFBheW1lbnREZXRhaWxzUHJvY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9TRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlclN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUExBQ0VfT1JERVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IE9yZGVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUztcbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXRTdGVwIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX1NURVA7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGF0YSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9EQVRBO1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlscyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0hFQ0tPVVRfREVUQUlMUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihDSEVDS09VVF9ERVRBSUxTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlsc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENIRUNLT1VUX0RFVEFJTFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2hlY2tvdXREZXRhaWxzU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0hFQ0tPVVRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hlY2tvdXREZXRhaWxzKSB7XG4gICAgc3VwZXIoQ0hFQ0tPVVRfREVUQUlMUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q2xlYXJNaXNjc0RhdGEgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0hFQ0tPVVRfQ0xFQVJfTUlTQ1NfREFUQTtcbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREVfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IHR5cGUgQ2hlY2tvdXRBY3Rpb24gPVxuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc1xuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgfCBBZGREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzRmFpbFxuICB8IFNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBSZXNldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NcbiAgfCBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1xuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbFxuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2Vzc1xuICB8IFNldERlbGl2ZXJ5TW9kZVxuICB8IFNldERlbGl2ZXJ5TW9kZUZhaWxcbiAgfCBTZXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gIHwgUmVzZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzXG4gIHwgQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gIHwgQ3JlYXRlUGF5bWVudERldGFpbHNcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc0ZhaWxcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3NcbiAgfCBTZXRQYXltZW50RGV0YWlsc1xuICB8IFNldFBheW1lbnREZXRhaWxzRmFpbFxuICB8IFNldFBheW1lbnREZXRhaWxzU3VjY2Vzc1xuICB8IFJlc2V0U2V0UGF5bWVudERldGFpbHNQcm9jZXNzXG4gIHwgUGxhY2VPcmRlclxuICB8IFBsYWNlT3JkZXJGYWlsXG4gIHwgUGxhY2VPcmRlclN1Y2Nlc3NcbiAgfCBDbGVhckNoZWNrb3V0U3RlcFxuICB8IENsZWFyQ2hlY2tvdXREYXRhXG4gIHwgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc1xuICB8IENsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NGYWlsXG4gIHwgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlXG4gIHwgQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZUZhaWxcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICB8IExvYWRDaGVja291dERldGFpbHNcbiAgfCBMb2FkQ2hlY2tvdXREZXRhaWxzRmFpbFxuICB8IExvYWRDaGVja291dERldGFpbHNTdWNjZXNzXG4gIHwgQ2hlY2tvdXRDbGVhck1pc2NzRGF0YTtcbiJdfQ==