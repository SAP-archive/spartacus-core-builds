/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvY2hlY2tvdXQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFNckQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLGlDQUFpQzs7QUFDckUsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHNDQUFzQzs7QUFDL0UsTUFBTSxPQUFPLDRCQUE0QixHQUN2Qyx5Q0FBeUM7O0FBRTNDLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxpQ0FBaUM7O0FBQ3JFLE1BQU0sT0FBTyx5QkFBeUIsR0FBRyxzQ0FBc0M7O0FBQy9FLE1BQU0sT0FBTyw0QkFBNEIsR0FDdkMseUNBQXlDOztBQUUzQyxNQUFNLE9BQU8sNkJBQTZCLEdBQ3hDLDBDQUEwQzs7QUFDNUMsTUFBTSxPQUFPLGtDQUFrQyxHQUM3QywrQ0FBK0M7O0FBQ2pELE1BQU0sT0FBTyxxQ0FBcUMsR0FDaEQsa0RBQWtEOztBQUNwRCxNQUFNLE9BQU8sOEJBQThCLEdBQ3pDLDJDQUEyQzs7QUFFN0MsTUFBTSxPQUFPLGlCQUFpQixHQUFHLDhCQUE4Qjs7QUFDL0QsTUFBTSxPQUFPLHNCQUFzQixHQUFHLG1DQUFtQzs7QUFDekUsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHNDQUFzQzs7QUFFL0UsTUFBTSxPQUFPLHNCQUFzQixHQUFHLG1DQUFtQzs7QUFDekUsTUFBTSxPQUFPLDJCQUEyQixHQUN0Qyx3Q0FBd0M7O0FBQzFDLE1BQU0sT0FBTyw4QkFBOEIsR0FDekMsMkNBQTJDOztBQUU3QyxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsZ0NBQWdD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SSxHQUFHLG1CQUFtQixDQUFDO0lBQ3RDLENBQUM7Q0FBQTs7O0lBREMsaUNBQW9DOztBQUd0QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCOzs7O0lBRXZELFlBQW1CLE9BQTJDO1FBQzVELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRFAsWUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBR3RDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXNDOztJQUMxQixzQ0FBa0Q7O0FBS2hFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBZ0I7Ozs7SUFFM0QsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEaEIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsMEJBQTBCLENBQUM7SUFHM0MsQ0FBQztDQUNGOzs7SUFKQyx1Q0FBMkM7O0lBQy9CLDBDQUFtQjs7QUFLakMsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG1CQUFtQjs7OztJQUVqRSxZQUFtQixPQUF3QjtRQUN6QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQURQLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRGxDLFNBQUksR0FBRyw2QkFBNkIsQ0FBQztJQUc5QyxDQUFDO0NBQ0Y7OztJQUpDLDBDQUE4Qzs7SUFDbEMsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQge1xuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBDSEVDS09VVF9ERVRBSUxTIH0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NoZWNrb3V0Lm1vZGVsJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSwgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgQUREX0RFTElWRVJZX0FERFJFU1MgPSAnW0NoZWNrb3V0XSBBZGQgRGVsaXZlcnkgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgQUREX0RFTElWRVJZX0FERFJFU1NfRkFJTCA9ICdbQ2hlY2tvdXRdIEFkZCBEZWxpdmVyeSBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IEFERF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBBZGQgRGVsaXZlcnkgQWRkcmVzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9BRERSRVNTID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9BRERSRVNTX0ZBSUwgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyA9XG4gICdbQ2hlY2tvdXRdIExvYWQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzJztcbmV4cG9ydCBjb25zdCBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19GQUlMID1cbiAgJ1tDaGVja291dF0gTG9hZCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIExvYWQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfTU9ERSA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBNb2RlJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfTU9ERV9GQUlMID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IE1vZGUgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREVfU1VDQ0VTUyA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBNb2RlIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBWU1FTlRfREVUQUlMUyA9ICdbQ2hlY2tvdXRdIENyZWF0ZSBQYXltZW50IERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QQVlNRU5UX0RFVEFJTFNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIENyZWF0ZSBQYXltZW50IERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gQ3JlYXRlIFBheW1lbnQgRGV0YWlscyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX0RFVEFJTFMgPSAnW0NoZWNrb3V0XSBTZXQgUGF5bWVudCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBTRVRfUEFZTUVOVF9ERVRBSUxTX0ZBSUwgPSAnW0NoZWNrb3V0XSBTZXQgUGF5bWVudCBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFNldCBQYXltZW50IERldGFpbHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBQTEFDRV9PUkRFUiA9ICdbQ2hlY2tvdXRdIFBsYWNlIE9yZGVyJztcbmV4cG9ydCBjb25zdCBQTEFDRV9PUkRFUl9GQUlMID0gJ1tDaGVja291dF0gUGxhY2UgT3JkZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgUExBQ0VfT1JERVJfU1VDQ0VTUyA9ICdbQ2hlY2tvdXRdIFBsYWNlIE9yZGVyIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfU1RFUCA9ICdbQ2hlY2tvdXRdIENsZWFyIE9uZSBDaGVja291dCBTdGVwJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9EQVRBID0gJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGF0YSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NIRUNLT1VUX0RFVEFJTFMgPSAnW0NoZWNrb3V0XSBMb2FkIENoZWNrb3V0IERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0hFQ0tPVVRfREVUQUlMU19GQUlMID1cbiAgJ1tDaGVja291dF0gTG9hZCBDaGVja291dCBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0hFQ0tPVVRfREVUQUlMU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gTG9hZCBDaGVja291dCBEZXRhaWxzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgQWRkRGVsaXZlcnlBZGRyZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9ERUxJVkVSWV9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGFkZHJlc3M6IEFkZHJlc3MgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGREZWxpdmVyeUFkZHJlc3NGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9ERUxJVkVSWV9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGREZWxpdmVyeUFkZHJlc3NTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGRyZXNzKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGFkZHJlc3M6IEFkZHJlc3MgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeUFkZHJlc3NGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGRyZXNzKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERlbGl2ZXJ5TW9kZVtdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IHNlbGVjdGVkTW9kZUlkOiBzdHJpbmcgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeU1vZGVGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeU1vZGVTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlscyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVBheW1lbnREZXRhaWxzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudERldGFpbHMpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlscyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldFBheW1lbnREZXRhaWxzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudERldGFpbHMpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBMQUNFX09SREVSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBMQUNFX09SREVSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT3JkZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dFN0ZXAgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfU1RFUDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RBVEE7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2hlY2tvdXREZXRhaWxzIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NIRUNLT1VUX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoQ0hFQ0tPVVRfREVUQUlMUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDaGVja291dERldGFpbHNGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENIRUNLT1VUX0RFVEFJTFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2hlY2tvdXREZXRhaWxzU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGVja291dERldGFpbHMpIHtcbiAgICBzdXBlcihDSEVDS09VVF9ERVRBSUxTKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDaGVja291dEFjdGlvbiA9XG4gIHwgQWRkRGVsaXZlcnlBZGRyZXNzXG4gIHwgQWRkRGVsaXZlcnlBZGRyZXNzRmFpbFxuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBTZXREZWxpdmVyeUFkZHJlc3NcbiAgfCBTZXREZWxpdmVyeUFkZHJlc3NGYWlsXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gIHwgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsXG4gIHwgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzXG4gIHwgU2V0RGVsaXZlcnlNb2RlXG4gIHwgU2V0RGVsaXZlcnlNb2RlRmFpbFxuICB8IFNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgfCBDbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc1xuICB8IENyZWF0ZVBheW1lbnREZXRhaWxzRmFpbFxuICB8IENyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2Vzc1xuICB8IFNldFBheW1lbnREZXRhaWxzXG4gIHwgU2V0UGF5bWVudERldGFpbHNGYWlsXG4gIHwgU2V0UGF5bWVudERldGFpbHNTdWNjZXNzXG4gIHwgUGxhY2VPcmRlclxuICB8IFBsYWNlT3JkZXJGYWlsXG4gIHwgUGxhY2VPcmRlclN1Y2Nlc3NcbiAgfCBDbGVhckNoZWNrb3V0U3RlcFxuICB8IENsZWFyQ2hlY2tvdXREYXRhXG4gIHwgTG9hZENoZWNrb3V0RGV0YWlsc1xuICB8IExvYWRDaGVja291dERldGFpbHNGYWlsXG4gIHwgTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3M7XG4iXX0=