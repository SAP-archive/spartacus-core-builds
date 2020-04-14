import { Cart } from '../../model/cart.model';
import { EntityProcessesLoaderState } from '../../state/utils/entity-processes-loader/entity-processes-loader-state';
export declare const MULTI_CART_FEATURE = "cart";
export declare const MULTI_CART_DATA = "[Multi Cart] Multi Cart Data";
/**
 * Add voucher process const
 * @deprecated since 2.0
 */
export declare const ADD_VOUCHER_PROCESS_ID = "addVoucher";
export interface StateWithMultiCart {
    [MULTI_CART_FEATURE]: MultiCartState;
}
export interface MultiCartState {
    carts: EntityProcessesLoaderState<Cart>;
    active: string;
    wishList: string;
}
