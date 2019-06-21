import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromActions from './../actions/cart.action';
import { CartDataService } from '../../facade/cart-data.service';
import { CartConnector } from '../../connectors/cart/cart.connector';
export declare class CartEffects {
    private actions$;
    private cartConnector;
    private cartData;
    loadCart$: Observable<fromActions.LoadCartFail | fromActions.LoadCartSuccess>;
    createCart$: Observable<fromActions.MergeCartSuccess | fromActions.CreateCartSuccess | fromActions.CreateCartFail>;
    mergeCart$: Observable<fromActions.CreateCart>;
    constructor(actions$: Actions, cartConnector: CartConnector, cartData: CartDataService);
    private isMissingData;
}
