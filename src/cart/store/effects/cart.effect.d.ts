import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { CartDataService } from '../../facade/cart-data.service';
import { CartActions } from '../actions/index';
export declare class CartEffects {
    private actions$;
    private cartConnector;
    private cartData;
    loadCart$: Observable<CartActions.LoadCartFail | CartActions.LoadMultiCartFail | CartActions.LoadCartSuccess | CartActions.LoadMultiCartSuccess | CartActions.ClearExpiredCoupons | CartActions.ClearCart | CartActions.RemoveCart>;
    createCart$: Observable<CartActions.MergeCartSuccess | CartActions.MergeMultiCartSuccess | CartActions.CreateCartSuccess | CartActions.CreateMultiCartSuccess | CartActions.CreateCartFail | CartActions.CreateMultiCartFail | CartActions.SetFreshCart>;
    mergeCart$: Observable<CartActions.CreateCart>;
    refresh$: Observable<CartActions.LoadCart>;
    resetCartDetailsOnSiteContextChange$: Observable<CartActions.ResetCartDetails | CartActions.ResetMultiCartDetails>;
    addEmail$: Observable<CartActions.AddEmailToCartSuccess | CartActions.AddEmailToCartFail | CartActions.AddEmailToMultiCartFail | CartActions.AddEmailToMultiCartSuccess>;
    deleteCart$: Observable<any>;
    constructor(actions$: Actions, cartConnector: CartConnector, cartData: CartDataService);
    private isMissingData;
}
