import { CheckoutActions } from '../actions/index';
import { OrderTypesState } from '../checkout-state';
export declare const initialState: OrderTypesState;
export declare function reducer(state: OrderTypesState, action: CheckoutActions.OrderTypesActions | CheckoutActions.CheckoutAction): OrderTypesState;
