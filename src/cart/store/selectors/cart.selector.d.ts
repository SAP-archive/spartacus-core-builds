import { MemoizedSelector } from '@ngrx/store';
import { Cart } from '../../../model/cart.model';
import { OrderEntry } from '../../../model/order.model';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { CartsState, CartState, StateWithCart } from '../cart-state';
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
export declare const getCartRefresh: MemoizedSelector<StateWithCart, boolean>;
export declare const getCartLoaded: MemoizedSelector<any, boolean>;
export declare const getCartLoading: MemoizedSelector<any, boolean>;
export declare const getCartMergeComplete: MemoizedSelector<StateWithCart, boolean>;
export declare const getCartEntriesMap: MemoizedSelector<any, {
    [code: string]: OrderEntry;
}>;
export declare const getCartEntrySelectorFactory: (productCode: any) => MemoizedSelector<any, OrderEntry, import("@ngrx/store/src/selector").DefaultProjectorFn<OrderEntry>>;
export declare const getCartEntries: MemoizedSelector<any, OrderEntry[]>;
