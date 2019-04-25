import { LoaderState } from '../../state/utils/loader/loader-state';
import { UIOrderEntry } from '../model';
export declare const CART_FEATURE = "cart";
export declare const CART_DATA = "[Cart] Cart Data";
export interface StateWithCart {
    [CART_FEATURE]: CartsState;
}
export interface CartsState {
    active: LoaderState<CartState>;
}
export interface CartState {
    content: any;
    entries: {
        [code: string]: UIOrderEntry;
    };
    refresh: boolean;
    cartMergeComplete: boolean;
}
