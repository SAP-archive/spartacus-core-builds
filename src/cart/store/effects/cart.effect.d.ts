import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { CartDataService } from '../../facade/cart-data.service';
import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
import { StateWithMultiCart } from '../multi-cart-state';
export declare class CartEffects {
    private actions$;
    private cartConnector;
    private cartData;
    private store?;
    private contextChange$;
    loadCart$: Observable<DeprecatedCartActions.LoadCartFail | CartActions.LoadMultiCartFail | DeprecatedCartActions.LoadCartSuccess | CartActions.LoadMultiCartSuccess | CartActions.ClearExpiredCoupons | DeprecatedCartActions.ClearCart | CartActions.RemoveCart>;
    createCart$: Observable<DeprecatedCartActions.MergeCartSuccess | CartActions.MergeMultiCartSuccess | DeprecatedCartActions.CreateCartSuccess | CartActions.CreateMultiCartSuccess | DeprecatedCartActions.CreateCartFail | CartActions.CreateMultiCartFail | CartActions.SetTempCart>;
    mergeCart$: Observable<DeprecatedCartActions.CreateCart>;
    refresh$: Observable<DeprecatedCartActions.LoadCart | CartActions.CartProcessesDecrement>;
    refreshWithoutProcesses$: Observable<DeprecatedCartActions.LoadCart>;
    resetCartDetailsOnSiteContextChange$: Observable<DeprecatedCartActions.ResetCartDetails | CartActions.ResetMultiCartDetails>;
    addEmail$: Observable<DeprecatedCartActions.AddEmailToCartSuccess | DeprecatedCartActions.AddEmailToCartFail | CartActions.AddEmailToMultiCartFail | CartActions.AddEmailToMultiCartSuccess | CartActions.CartProcessesDecrement | DeprecatedCartActions.LoadCart>;
    deleteCart$: Observable<any>;
    constructor(actions$: Actions, cartConnector: CartConnector, cartData: CartDataService, store: Store<StateWithMultiCart>);
    /**
     * @deprecated since version 1.4
     * Use constructor(actions$: Actions, cartConnector: CartConnector, cartData: CartDataService, store: Store<StateWithMultiCart>) instead
     */
    constructor(actions$: Actions, cartConnector: CartConnector, cartData: CartDataService);
    private isMissingData;
}
