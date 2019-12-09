import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartEntryConnector } from '../../connectors/entry/cart-entry.connector';
import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
export declare class CartEntryEffects {
    private actions$;
    private cartEntryConnector;
    addEntry$: Observable<CartActions.CartAddEntrySuccess | CartActions.CartAddEntryFail | DeprecatedCartActions.LoadCart | CartActions.CartProcessesDecrement>;
    removeEntry$: Observable<CartActions.CartRemoveEntrySuccess | CartActions.CartRemoveEntryFail | CartActions.CartProcessesDecrement | DeprecatedCartActions.LoadCart>;
    updateEntry$: Observable<CartActions.CartUpdateEntrySuccess | CartActions.CartUpdateEntryFail | CartActions.CartProcessesDecrement | DeprecatedCartActions.LoadCart>;
    constructor(actions$: Actions, cartEntryConnector: CartEntryConnector);
}
