import { MemoizedSelector } from '@ngrx/store';
import { CartsState, CartState, StateWithCart } from '../cart-state';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { Cart } from '../../../model/cart.model';
import { OrderEntry } from '../../../model/order.model';
export declare const getCartContentSelector: (state: CartState) => any;
export declare const getRefreshSelector: (state: CartState) => boolean;
export declare const getEntriesSelector: (state: CartState) => {
    [code: string]: OrderEntry;
};
export declare const getCartMergeCompleteSelector: (state: CartState) => boolean;
export declare const getCartsState: MemoizedSelector<StateWithCart, CartsState>;
export declare const getActiveCartState: MemoizedSelector<StateWithCart, LoaderState<CartState>>;
export declare const getCartState: MemoizedSelector<StateWithCart, CartState>;
export declare const getCartContent: MemoizedSelector<StateWithCart, Cart>;
export declare const getRefresh: MemoizedSelector<StateWithCart, boolean>;
export declare const getLoaded: MemoizedSelector<any, boolean>;
export declare const getCartMergeComplete: MemoizedSelector<StateWithCart, boolean>;
export declare const getEntriesMap: MemoizedSelector<any, {
    [code: string]: OrderEntry;
}>;
export declare const getEntrySelectorFactory: (productCode: any) => MemoizedSelector<any, OrderEntry>;
export declare const getEntries: MemoizedSelector<any, OrderEntry[]>;
