import { MemoizedSelector } from '@ngrx/store';
import { Address } from '../../../model/address.model';
import { PaymentDetails } from '../../../model/cart.model';
import { DeliveryMode, Order } from '../../../model/order.model';
import { ReplenishmentOrder } from '../../../model/replenishment-order.model';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { CheckoutState, CheckoutStepsState, StateWithCheckout } from '../checkout-state';
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
export declare const getSelectedDeliveryModeCode: MemoizedSelector<StateWithCheckout, string>;
export declare const getSelectedDeliveryMode: MemoizedSelector<StateWithCheckout, DeliveryMode>;
export declare const getPaymentDetails: MemoizedSelector<StateWithCheckout, PaymentDetails>;
export declare const getCheckoutOrderDetails: MemoizedSelector<StateWithCheckout, Order | ReplenishmentOrder>;
export declare const getCheckoutDetailsLoaded: MemoizedSelector<StateWithCheckout, boolean>;
export declare const getPoNumer: MemoizedSelector<StateWithCheckout, string>;
export declare const getCostCenter: MemoizedSelector<StateWithCheckout, string>;
