import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { CartDataService } from '../../facade/cart-data.service';
import { CartActions } from '../actions/index';
export declare class CartEffects {
    private actions$;
    private cartConnector;
    private cartData;
    loadCart$: Observable<CartActions.LoadCartFail | CartActions.LoadCartSuccess>;
    createCart$: Observable<CartActions.MergeCartSuccess | CartActions.CreateCartSuccess | CartActions.CreateCartFail>;
    mergeCart$: Observable<CartActions.CreateCart>;
    refresh$: Observable<CartActions.LoadCart>;
    resetCartDetailsOnSiteContextChange$: Observable<CartActions.ResetCartDetails>;
    constructor(actions$: Actions, cartConnector: CartConnector, cartData: CartDataService);
    private isMissingData;
}
