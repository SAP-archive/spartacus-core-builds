import { MemoizedSelector } from '@ngrx/store';
import { CheckoutState, CheckoutStepsState } from '../checkout-state';
import { DeliveryMode, Address, Order, PaymentDetails } from '../../../occ/occ-models/index';
export declare const getCheckoutStepsState: MemoizedSelector<CheckoutState, CheckoutStepsState>;
export declare const getDeliveryAddress: MemoizedSelector<CheckoutState, Address>;
export declare const getDeliveryMode: MemoizedSelector<CheckoutState, {
    supported: {
        [code: string]: DeliveryMode;
    };
    selected: string;
}>;
export declare const getSupportedDeliveryModes: MemoizedSelector<CheckoutState, DeliveryMode[]>;
export declare const getSelectedCode: MemoizedSelector<CheckoutState, string>;
export declare const getSelectedDeliveryMode: MemoizedSelector<CheckoutState, DeliveryMode>;
export declare const getPaymentDetails: MemoizedSelector<CheckoutState, PaymentDetails>;
export declare const getCheckoutOrderDetails: MemoizedSelector<CheckoutState, Order>;
