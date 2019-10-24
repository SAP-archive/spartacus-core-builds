import { CartActions } from '../actions/index';
import { CartState } from '../cart-state';
export declare const initialState: CartState;
export declare function reducer(state: CartState, action: CartActions.CartAction | CartActions.CartEntryAction | CartActions.CartVoucherAction): CartState;
