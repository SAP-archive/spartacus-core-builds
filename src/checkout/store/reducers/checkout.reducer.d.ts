import { CheckoutStepsState } from '../checkout-state';
import * as fromAction from './../actions/index';
import { Address, DeliveryMode, Order } from '../../../occ/occ-models/index';
export declare const initialState: CheckoutStepsState;
export declare function reducer(state: CheckoutStepsState, action: fromAction.CheckoutAction | fromAction.CheckoutClearMiscsData): CheckoutStepsState;
export declare const getDeliveryAddress: (state: CheckoutStepsState) => Address;
export declare const getDeliveryMode: (state: CheckoutStepsState) => {
    supported: {
        [code: string]: DeliveryMode;
    };
    selected: string;
};
export declare const getPaymentDetails: (state: CheckoutStepsState) => import("../../../occ/occ-models").PaymentDetails;
export declare const getOrderDetails: (state: CheckoutStepsState) => Order;
