import { MemoizedSelector } from '@ngrx/store';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { CheckoutState, CheckoutStepsState, StateWithCheckout } from '../checkout-state';
import { DeliveryMode, Address, Order, PaymentDetails } from '../../../occ/occ-models/index';
export declare const getDeliveryAddressSelector: (state: CheckoutStepsState) => Address;
export declare const getDeliveryModeSelector: (state: CheckoutStepsState) => {
    supported: {
        [code: string]: DeliveryMode;
    };
    selected: string;
};
export declare const getPaymentDetailsSelector: (state: CheckoutStepsState) => PaymentDetails;
export declare const getOrderDetailsSelector: (state: CheckoutStepsState) => Order;
export declare const getCheckoutState: MemoizedSelector<StateWithCheckout, CheckoutState>;
export declare const getCheckoutStepsState: MemoizedSelector<StateWithCheckout, LoaderState<CheckoutStepsState>>;
export declare const getCheckoutSteps: MemoizedSelector<StateWithCheckout, CheckoutStepsState>;
export declare const getDeliveryAddress: MemoizedSelector<StateWithCheckout, Address>;
export declare const getDeliveryMode: MemoizedSelector<StateWithCheckout, {
    supported: {
        [code: string]: DeliveryMode;
    };
    selected: string;
}>;
export declare const getSupportedDeliveryModes: MemoizedSelector<StateWithCheckout, DeliveryMode[]>;
export declare const getSelectedCode: MemoizedSelector<StateWithCheckout, string>;
export declare const getSelectedDeliveryMode: MemoizedSelector<StateWithCheckout, DeliveryMode>;
export declare const getPaymentDetails: MemoizedSelector<StateWithCheckout, PaymentDetails>;
export declare const getCheckoutOrderDetails: MemoizedSelector<StateWithCheckout, Order>;
export declare const getCheckoutDetailsLoaded: MemoizedSelector<StateWithCheckout, boolean>;
