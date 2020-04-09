import { Cart } from '../../../model/cart.model';
import { LoaderAction } from '../../../state/utils/loader/loader.action';
import { CartActions } from '../actions/index';
export declare const activeCartInitialState = "";
export declare const wishListInitialState = "";
export declare function activeCartReducer(state: string, action: CartActions.CartAction | CartActions.MultiCartActions): string;
export declare const cartEntitiesInitialState: any;
export declare function cartEntitiesReducer(state: any, action: LoaderAction): Cart;
export declare function wishListReducer(state: string, action: CartActions.WishListActions | CartActions.ClearCartState): string;
