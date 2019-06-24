import * as fromAction from '../actions/index';
import { CartState } from '../cart-state';
export declare const initialState: CartState;
export declare function reducer(state: CartState, action: fromAction.CartAction | fromAction.CartEntryAction): CartState;
