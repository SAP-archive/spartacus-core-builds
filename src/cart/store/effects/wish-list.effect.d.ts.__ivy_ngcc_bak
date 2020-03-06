import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/facade/auth.service';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { SaveCartConnector } from '../../connectors/save-cart/save-cart.connecter';
import { CartActions } from '../actions';
import { StateWithMultiCart } from '../multi-cart-state';
export declare class WishListEffects {
    private actions$;
    private cartConnector;
    private saveCartConnector;
    private authService;
    private store;
    createWishList$: Observable<CartActions.CreateWishListSuccess | CartActions.CreateWishListFail>;
    loadWishList$: Observable<CartActions.LoadWishListSuccess | CartActions.CreateWishList | CartActions.LoadCartFail>;
    resetWishList$: Observable<CartActions.LoadWishListSuccess | CartActions.LoadCartFail>;
    constructor(actions$: Actions, cartConnector: CartConnector, saveCartConnector: SaveCartConnector, authService: AuthService, store: Store<StateWithMultiCart>);
}
