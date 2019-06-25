/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { CHECKOUT_DETAILS } from '../checkout-state';
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
export class SetDeliveryAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class SetDeliveryAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class SetDeliveryAddressSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class LoadSupportedDeliveryModes {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class LoadSupportedDeliveryModesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class LoadSupportedDeliveryModesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class SetDeliveryMode {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class SetDeliveryModeFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class SetDeliveryModeSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class SetPaymentDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class SetPaymentDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class SetPaymentDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
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
export class LoadCheckoutDetails extends LoaderLoadAction {
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
export class LoadCheckoutDetailsFail extends LoaderFailAction {
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
export class LoadCheckoutDetailsSuccess extends LoaderSuccessAction {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvY2hlY2tvdXQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFckQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLGlDQUFpQzs7QUFDckUsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHNDQUFzQzs7QUFDL0UsTUFBTSxPQUFPLDRCQUE0QixHQUN2Qyx5Q0FBeUM7O0FBRTNDLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxpQ0FBaUM7O0FBQ3JFLE1BQU0sT0FBTyx5QkFBeUIsR0FBRyxzQ0FBc0M7O0FBQy9FLE1BQU0sT0FBTyw0QkFBNEIsR0FDdkMseUNBQXlDOztBQUUzQyxNQUFNLE9BQU8sNkJBQTZCLEdBQ3hDLDBDQUEwQzs7QUFDNUMsTUFBTSxPQUFPLGtDQUFrQyxHQUM3QywrQ0FBK0M7O0FBQ2pELE1BQU0sT0FBTyxxQ0FBcUMsR0FDaEQsa0RBQWtEOztBQUNwRCxNQUFNLE9BQU8sOEJBQThCLEdBQ3pDLDJDQUEyQzs7QUFFN0MsTUFBTSxPQUFPLGlCQUFpQixHQUFHLDhCQUE4Qjs7QUFDL0QsTUFBTSxPQUFPLHNCQUFzQixHQUFHLG1DQUFtQzs7QUFDekUsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHNDQUFzQzs7QUFFL0UsTUFBTSxPQUFPLHNCQUFzQixHQUFHLG1DQUFtQzs7QUFDekUsTUFBTSxPQUFPLDJCQUEyQixHQUN0Qyx3Q0FBd0M7O0FBQzFDLE1BQU0sT0FBTyw4QkFBOEIsR0FDekMsMkNBQTJDOztBQUU3QyxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsZ0NBQWdD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QUdwQyxNQUFNLE9BQU8saUJBQWlCO0lBQTlCO1FBQ1csU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ3RDLENBQUM7Q0FBQTs7O0lBREMsaUNBQW9DOztBQUd0QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCOzs7O0lBRXZELFlBQW1CLE9BQTJDO1FBQzVELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRFAsWUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBR3RDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXNDOztJQUMxQixzQ0FBa0Q7O0FBS2hFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBZ0I7Ozs7SUFFM0QsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEaEIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsMEJBQTBCLENBQUM7SUFHM0MsQ0FBQztDQUNGOzs7SUFKQyx1Q0FBMkM7O0lBQy9CLDBDQUFtQjs7QUFLakMsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG1CQUFtQjs7OztJQUVqRSxZQUFtQixPQUF3QjtRQUN6QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQURQLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRGxDLFNBQUksR0FBRyw2QkFBNkIsQ0FBQztJQUc5QyxDQUFDO0NBQ0Y7OztJQUpDLDBDQUE4Qzs7SUFDbEMsNkNBQStCOztBQUs3QyxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBQ1csU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBQzVDLENBQUM7Q0FBQTs7O0lBREMsc0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSwgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQge1xuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xuaW1wb3J0IHsgQ0hFQ0tPVVRfREVUQUlMUyB9IGZyb20gJy4uL2NoZWNrb3V0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IEFERF9ERUxJVkVSWV9BRERSRVNTID0gJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IEFERF9ERUxJVkVSWV9BRERSRVNTX0ZBSUwgPSAnW0NoZWNrb3V0XSBBZGQgRGVsaXZlcnkgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTUyA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTU19GQUlMID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVMgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlcyc7XG5leHBvcnQgY29uc3QgTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIExvYWQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9TVVBQT1JURURfREVMSVZFUllfTU9ERVMgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMnO1xuXG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREUgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREVfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBNb2RlIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9QQVlNRU5UX0RFVEFJTFMgPSAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIENyZWF0ZSBQYXltZW50IERldGFpbHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9ERVRBSUxTID0gJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMU19GQUlMID0gJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBTZXQgUGF5bWVudCBEZXRhaWxzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUExBQ0VfT1JERVIgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlcic7XG5leHBvcnQgY29uc3QgUExBQ0VfT1JERVJfRkFJTCA9ICdbQ2hlY2tvdXRdIFBsYWNlIE9yZGVyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlciBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX1NURVAgPSAnW0NoZWNrb3V0XSBDbGVhciBPbmUgQ2hlY2tvdXQgU3RlcCc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREFUQSA9ICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERhdGEnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DSEVDS09VVF9ERVRBSUxTID0gJ1tDaGVja291dF0gTG9hZCBDaGVja291dCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIExvYWQgQ2hlY2tvdXQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIExvYWQgQ2hlY2tvdXQgRGV0YWlscyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NMRUFSX01JU0NTX0RBVEEgPSAnW0NoZWNrb3V0XSBDbGVhciBNaXNjcyBEYXRhJztcblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRGVsaXZlcnlBZGRyZXNzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRGVsaXZlcnlBZGRyZXNzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkcmVzcykge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5QWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkcmVzcykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEZWxpdmVyeU1vZGVbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfTU9ERTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBzZWxlY3RlZE1vZGVJZDogc3RyaW5nIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfTU9ERV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfTU9ERV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGF5bWVudERldGFpbHMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlsc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBheW1lbnREZXRhaWxzKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGF5bWVudERldGFpbHMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1BBWU1FTlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlsc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1BBWU1FTlRfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGF5bWVudERldGFpbHNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBheW1lbnREZXRhaWxzKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlclN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUExBQ0VfT1JERVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IE9yZGVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUztcbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXRTdGVwIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX1NURVA7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGF0YSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9EQVRBO1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlscyBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENIRUNLT1VUX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2hlY2tvdXREZXRhaWxzRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDSEVDS09VVF9ERVRBSUxTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0hFQ0tPVVRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hlY2tvdXREZXRhaWxzKSB7XG4gICAgc3VwZXIoQ0hFQ0tPVVRfREVUQUlMUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q2xlYXJNaXNjc0RhdGEgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0hFQ0tPVVRfQ0xFQVJfTUlTQ1NfREFUQTtcbn1cblxuZXhwb3J0IHR5cGUgQ2hlY2tvdXRBY3Rpb24gPVxuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc1xuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgfCBBZGREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzRmFpbFxuICB8IFNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1xuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbFxuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2Vzc1xuICB8IFNldERlbGl2ZXJ5TW9kZVxuICB8IFNldERlbGl2ZXJ5TW9kZUZhaWxcbiAgfCBTZXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gIHwgQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gIHwgQ3JlYXRlUGF5bWVudERldGFpbHNcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc0ZhaWxcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3NcbiAgfCBTZXRQYXltZW50RGV0YWlsc1xuICB8IFNldFBheW1lbnREZXRhaWxzRmFpbFxuICB8IFNldFBheW1lbnREZXRhaWxzU3VjY2Vzc1xuICB8IFBsYWNlT3JkZXJcbiAgfCBQbGFjZU9yZGVyRmFpbFxuICB8IFBsYWNlT3JkZXJTdWNjZXNzXG4gIHwgQ2xlYXJDaGVja291dFN0ZXBcbiAgfCBDbGVhckNoZWNrb3V0RGF0YVxuICB8IExvYWRDaGVja291dERldGFpbHNcbiAgfCBMb2FkQ2hlY2tvdXREZXRhaWxzRmFpbFxuICB8IExvYWRDaGVja291dERldGFpbHNTdWNjZXNzXG4gIHwgQ2hlY2tvdXRDbGVhck1pc2NzRGF0YTtcbiJdfQ==