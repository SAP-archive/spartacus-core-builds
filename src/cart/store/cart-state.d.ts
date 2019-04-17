import { OrderEntry } from '../../occ/occ-models/index';
import { LoaderState } from '../../state/utils/loader/loader-state';
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
        [code: string]: OrderEntry;
    };
    refresh: boolean;
    cartMergeComplete: boolean;
}
