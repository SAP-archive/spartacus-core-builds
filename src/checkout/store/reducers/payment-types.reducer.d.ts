import { PaymentType } from '../../../model/cart.model';
import { CheckoutActions } from '../actions/index';
import { PaymentTypesState } from '../checkout-state';
export declare const initialState: PaymentTypesState;
export declare function reducer(state: PaymentTypesState, action: CheckoutActions.PaymentTypesAction | CheckoutActions.ClearCheckoutData | CheckoutActions.CheckoutClearMiscsData): PaymentTypesState;
export declare const getPaymentTypesEntites: (state: PaymentTypesState) => {
    [code: string]: PaymentType;
};
export declare const getSelectedPaymentType: (state: PaymentTypesState) => string;
