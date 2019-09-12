import { MemoizedSelector } from '@ngrx/store';
import { Cart } from '../../../model/cart.model';
import { OrderEntry } from '../../../model/order.model';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { CartsState, CartState, StateWithCart } from '../cart-state';
export declare const getCartsState: MemoizedSelector<StateWithCart, CartsState>;
export declare const getActiveCartState: MemoizedSelector<StateWithCart, LoaderState<CartState>>;
export declare const getCartState: MemoizedSelector<StateWithCart, CartState>;
export declare const getCartContent: MemoizedSelector<StateWithCart, Cart>;
export declare const getCartRefresh: MemoizedSelector<StateWithCart, boolean>;
export declare const getCartLoaded: MemoizedSelector<StateWithCart, boolean>;
export declare const getCartLoading: MemoizedSelector<any, boolean>;
export declare const getCartMergeComplete: MemoizedSelector<StateWithCart, boolean>;
export declare const getCartEntriesMap: MemoizedSelector<StateWithCart, {
    [code: string]: OrderEntry;
}>;
export declare const getCartEntrySelectorFactory: (productCode: string) => MemoizedSelector<StateWithCart, OrderEntry, import("@ngrx/store").DefaultProjectorFn<OrderEntry>>;
export declare const getCartEntries: MemoizedSelector<StateWithCart, OrderEntry[]>;
