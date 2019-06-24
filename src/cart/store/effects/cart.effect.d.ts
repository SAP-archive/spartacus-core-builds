import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { CartDataService } from '../../facade/cart-data.service';
import * as fromActions from './../actions/cart.action';
export declare class CartEffects {
    private actions$;
    private cartConnector;
    private cartData;
    loadCart$: Observable<fromActions.LoadCartFail | fromActions.LoadCartSuccess>;
    createCart$: Observable<fromActions.MergeCartSuccess | fromActions.CreateCartSuccess | fromActions.CreateCartFail>;
    mergeCart$: Observable<fromActions.CreateCart>;
    refresh$: Observable<fromActions.LoadCart>;
    resetCartDetailsOnSiteContextChange$: Observable<fromActions.ResetCartDetails>;
    constructor(actions$: Actions, cartConnector: CartConnector, cartData: CartDataService);
    private isMissingData;
}
