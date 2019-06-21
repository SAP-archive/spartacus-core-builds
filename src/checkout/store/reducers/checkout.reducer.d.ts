import { CheckoutStepsState } from '../checkout-state';
import * as fromAction from './../actions/index';
export declare const initialState: CheckoutStepsState;
export declare function reducer(state: CheckoutStepsState, action: fromAction.CheckoutAction | fromAction.CheckoutClearMiscsData): CheckoutStepsState;
