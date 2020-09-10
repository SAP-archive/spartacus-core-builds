import { LoaderState } from '../../state/utils/loader/loader-state';
import { CardType, PaymentDetails, PaymentType } from '../../model/cart.model';
import { Address, AddressValidation } from '../../model/address.model';
import { DeliveryMode, Order } from '../../model/order.model';
export declare const CHECKOUT_FEATURE = "checkout";
export declare const CHECKOUT_DETAILS = "[Checkout] Checkout Details";
export declare const SET_DELIVERY_ADDRESS_PROCESS_ID = "setDeliveryAddress";
export declare const SET_DELIVERY_MODE_PROCESS_ID = "setDeliveryMode";
export declare const SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID = "setSupportedDeliveryMode";
export declare const SET_PAYMENT_DETAILS_PROCESS_ID = "setPaymentDetails";
export declare const GET_PAYMENT_TYPES_PROCESS_ID = "getPaymentTypes";
export declare const SET_COST_CENTER_PROCESS_ID = "setCostCenter";
export interface StateWithCheckout {
    [CHECKOUT_FEATURE]: CheckoutState;
}
export interface AddressVerificationState {
    results: AddressValidation | string;
}
export interface CardTypesState {
    entities: {
        [code: string]: CardType;
    };
}
export interface CheckoutStepsState {
    poNumber: {
        po: string;
        costCenter: string;
    };
    address: Address;
    deliveryMode: {
        supported: {
            [code: string]: DeliveryMode;
        };
        selected: string;
    };
    paymentDetails: PaymentDetails;
    orderDetails: Order;
}
export interface PaymentTypesState {
    entities: {
        [code: string]: PaymentType;
    };
    selected: string;
}
export interface CheckoutState {
    steps: LoaderState<CheckoutStepsState>;
    cardTypes: CardTypesState;
    addressVerification: AddressVerificationState;
    paymentTypes: PaymentTypesState;
}
