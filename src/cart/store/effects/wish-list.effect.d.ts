import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserIdService } from '../../../auth/user-auth/facade/user-id.service';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { SaveCartConnector } from '../../connectors/save-cart/save-cart.connecter';
import { CartActions } from '../actions';
import { StateWithMultiCart } from '../multi-cart-state';
import * as ɵngcc0 from '@angular/core';
export declare class WishListEffects {
    private actions$;
    private cartConnector;
    private saveCartConnector;
    private userIdService;
    private store;
    createWishList$: Observable<CartActions.CreateWishListSuccess | CartActions.CreateWishListFail>;
    loadWishList$: Observable<CartActions.LoadWishListSuccess | CartActions.RemoveCart | CartActions.CreateWishList | CartActions.LoadWishListFail>;
    resetWishList$: Observable<CartActions.LoadWishListSuccess | CartActions.LoadWishListFail>;
    constructor(actions$: Actions, cartConnector: CartConnector, saveCartConnector: SaveCartConnector, userIdService: UserIdService, store: Store<StateWithMultiCart>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WishListEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<WishListEffects>;
}

//# sourceMappingURL=wish-list.effect.d.ts.map