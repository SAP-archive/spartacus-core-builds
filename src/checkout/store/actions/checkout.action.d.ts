import { Action } from '@ngrx/store';
import { Address } from '../../../model/address.model';
import { PaymentDetails } from '../../../model/cart.model';
import { DeliveryMode, Order } from '../../../model/order.model';
import { StateLoaderActions } from '../../../state/utils/index';
import { CheckoutDetails } from '../../models/checkout.model';
export declare const ADD_DELIVERY_ADDRESS = "[Checkout] Add Delivery Address";
export declare const ADD_DELIVERY_ADDRESS_FAIL = "[Checkout] Add Delivery Address Fail";
export declare const ADD_DELIVERY_ADDRESS_SUCCESS = "[Checkout] Add Delivery Address Success";
export declare const SET_DELIVERY_ADDRESS = "[Checkout] Set Delivery Address";
export declare const SET_DELIVERY_ADDRESS_FAIL = "[Checkout] Set Delivery Address Fail";
export declare const SET_DELIVERY_ADDRESS_SUCCESS = "[Checkout] Set Delivery Address Success";
export declare const LOAD_SUPPORTED_DELIVERY_MODES = "[Checkout] Load Supported Delivery Modes";
export declare const LOAD_SUPPORTED_DELIVERY_MODES_FAIL = "[Checkout] Load Supported Delivery Modes Fail";
export declare const LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = "[Checkout] Load Supported Delivery Modes Success";
export declare const CLEAR_SUPPORTED_DELIVERY_MODES = "[Checkout] Clear Supported Delivery Modes";
export declare const SET_DELIVERY_MODE = "[Checkout] Set Delivery Mode";
export declare const SET_DELIVERY_MODE_FAIL = "[Checkout] Set Delivery Mode Fail";
export declare const SET_DELIVERY_MODE_SUCCESS = "[Checkout] Set Delivery Mode Success";
export declare const CREATE_PAYMENT_DETAILS = "[Checkout] Create Payment Details";
export declare const CREATE_PAYMENT_DETAILS_FAIL = "[Checkout] Create Payment Details Fail";
export declare const CREATE_PAYMENT_DETAILS_SUCCESS = "[Checkout] Create Payment Details Success";
export declare const SET_PAYMENT_DETAILS = "[Checkout] Set Payment Details";
export declare const SET_PAYMENT_DETAILS_FAIL = "[Checkout] Set Payment Details Fail";
export declare const SET_PAYMENT_DETAILS_SUCCESS = "[Checkout] Set Payment Details Success";
export declare const PLACE_ORDER = "[Checkout] Place Order";
export declare const PLACE_ORDER_FAIL = "[Checkout] Place Order Fail";
export declare const PLACE_ORDER_SUCCESS = "[Checkout] Place Order Success";
export declare const CLEAR_CHECKOUT_STEP = "[Checkout] Clear One Checkout Step";
export declare const CLEAR_CHECKOUT_DATA = "[Checkout] Clear Checkout Data";
export declare const LOAD_CHECKOUT_DETAILS = "[Checkout] Load Checkout Details";
export declare const LOAD_CHECKOUT_DETAILS_FAIL = "[Checkout] Load Checkout Details Fail";
export declare const LOAD_CHECKOUT_DETAILS_SUCCESS = "[Checkout] Load Checkout Details Success";
export declare const CHECKOUT_CLEAR_MISCS_DATA = "[Checkout] Clear Miscs Data";
export declare class AddDeliveryAddress implements Action {
    payload: {
        userId: string;
        cartId: string;
        address: Address;
    };
    readonly type = "[Checkout] Add Delivery Address";
    constructor(payload: {
        userId: string;
        cartId: string;
        address: Address;
    });
}
export declare class AddDeliveryAddressFail implements Action {
    payload: any;
    readonly type = "[Checkout] Add Delivery Address Fail";
    constructor(payload: any);
}
export declare class AddDeliveryAddressSuccess implements Action {
    payload: Address;
    readonly type = "[Checkout] Add Delivery Address Success";
    constructor(payload: Address);
}
export declare class SetDeliveryAddress implements Action {
    payload: {
        userId: string;
        cartId: string;
        address: Address;
    };
    readonly type = "[Checkout] Set Delivery Address";
    constructor(payload: {
        userId: string;
        cartId: string;
        address: Address;
    });
}
export declare class SetDeliveryAddressFail implements Action {
    payload: any;
    readonly type = "[Checkout] Set Delivery Address Fail";
    constructor(payload: any);
}
export declare class SetDeliveryAddressSuccess implements Action {
    payload: Address;
    readonly type = "[Checkout] Set Delivery Address Success";
    constructor(payload: Address);
}
export declare class LoadSupportedDeliveryModes implements Action {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Checkout] Load Supported Delivery Modes";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class LoadSupportedDeliveryModesFail implements Action {
    payload: any;
    readonly type = "[Checkout] Load Supported Delivery Modes Fail";
    constructor(payload: any);
}
export declare class LoadSupportedDeliveryModesSuccess implements Action {
    payload: DeliveryMode[];
    readonly type = "[Checkout] Load Supported Delivery Modes Success";
    constructor(payload: DeliveryMode[]);
}
export declare class SetDeliveryMode implements Action {
    payload: {
        userId: string;
        cartId: string;
        selectedModeId: string;
    };
    readonly type = "[Checkout] Set Delivery Mode";
    constructor(payload: {
        userId: string;
        cartId: string;
        selectedModeId: string;
    });
}
export declare class SetDeliveryModeFail implements Action {
    payload: any;
    readonly type = "[Checkout] Set Delivery Mode Fail";
    constructor(payload: any);
}
export declare class SetDeliveryModeSuccess implements Action {
    payload: string;
    readonly type = "[Checkout] Set Delivery Mode Success";
    constructor(payload: string);
}
export declare class CreatePaymentDetails implements Action {
    payload: {
        userId: string;
        cartId: string;
        paymentDetails: PaymentDetails;
    };
    readonly type = "[Checkout] Create Payment Details";
    constructor(payload: {
        userId: string;
        cartId: string;
        paymentDetails: PaymentDetails;
    });
}
export declare class CreatePaymentDetailsFail implements Action {
    payload: any;
    readonly type = "[Checkout] Create Payment Details Fail";
    constructor(payload: any);
}
export declare class CreatePaymentDetailsSuccess implements Action {
    payload: PaymentDetails;
    readonly type = "[Checkout] Create Payment Details Success";
    constructor(payload: PaymentDetails);
}
export declare class SetPaymentDetails implements Action {
    payload: {
        userId: string;
        cartId: string;
        paymentDetails: PaymentDetails;
    };
    readonly type = "[Checkout] Set Payment Details";
    constructor(payload: {
        userId: string;
        cartId: string;
        paymentDetails: PaymentDetails;
    });
}
export declare class SetPaymentDetailsFail implements Action {
    payload: any;
    readonly type = "[Checkout] Set Payment Details Fail";
    constructor(payload: any);
}
export declare class SetPaymentDetailsSuccess implements Action {
    payload: PaymentDetails;
    readonly type = "[Checkout] Set Payment Details Success";
    constructor(payload: PaymentDetails);
}
export declare class PlaceOrder implements Action {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Checkout] Place Order";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class PlaceOrderFail implements Action {
    payload: any;
    readonly type = "[Checkout] Place Order Fail";
    constructor(payload: any);
}
export declare class PlaceOrderSuccess implements Action {
    payload: Order;
    readonly type = "[Checkout] Place Order Success";
    constructor(payload: Order);
}
export declare class ClearSupportedDeliveryModes implements Action {
    readonly type = "[Checkout] Clear Supported Delivery Modes";
}
export declare class ClearCheckoutStep implements Action {
    payload: number;
    readonly type = "[Checkout] Clear One Checkout Step";
    constructor(payload: number);
}
export declare class ClearCheckoutData implements Action {
    readonly type = "[Checkout] Clear Checkout Data";
}
export declare class LoadCheckoutDetails extends StateLoaderActions.LoaderLoadAction {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Checkout] Load Checkout Details";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class LoadCheckoutDetailsFail extends StateLoaderActions.LoaderFailAction {
    payload: any;
    readonly type = "[Checkout] Load Checkout Details Fail";
    constructor(payload: any);
}
export declare class LoadCheckoutDetailsSuccess extends StateLoaderActions.LoaderSuccessAction {
    payload: CheckoutDetails;
    readonly type = "[Checkout] Load Checkout Details Success";
    constructor(payload: CheckoutDetails);
}
export declare class CheckoutClearMiscsData implements Action {
    readonly type = "[Checkout] Clear Miscs Data";
}
export declare type CheckoutAction = AddDeliveryAddress | AddDeliveryAddressFail | AddDeliveryAddressSuccess | SetDeliveryAddress | SetDeliveryAddressFail | SetDeliveryAddressSuccess | LoadSupportedDeliveryModes | LoadSupportedDeliveryModesFail | LoadSupportedDeliveryModesSuccess | SetDeliveryMode | SetDeliveryModeFail | SetDeliveryModeSuccess | ClearSupportedDeliveryModes | CreatePaymentDetails | CreatePaymentDetailsFail | CreatePaymentDetailsSuccess | SetPaymentDetails | SetPaymentDetailsFail | SetPaymentDetailsSuccess | PlaceOrder | PlaceOrderFail | PlaceOrderSuccess | ClearCheckoutStep | ClearCheckoutData | LoadCheckoutDetails | LoadCheckoutDetailsFail | LoadCheckoutDetailsSuccess | CheckoutClearMiscsData;
