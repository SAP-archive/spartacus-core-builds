import { CheckoutStepsState } from '../checkout-state';
import { CheckoutActions } from './../actions/index';
export declare const initialState: CheckoutStepsState;
export declare function reducer(state: CheckoutStepsState, action: CheckoutActions.CheckoutAction | CheckoutActions.CheckoutClearMiscsData | CheckoutActions.SetPaymentTypeSuccess): CheckoutStepsState;
