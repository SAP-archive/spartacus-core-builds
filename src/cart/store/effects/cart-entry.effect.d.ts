import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartEntryConnector } from '../../connectors/entry/cart-entry.connector';
import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx effects will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
export declare class CartEntryEffects {
    private actions$;
    private cartEntryConnector;
    private contextChange$;
    addEntry$: Observable<CartActions.CartAddEntrySuccess | CartActions.CartAddEntryFail | DeprecatedCartActions.LoadCart | CartActions.CartProcessesDecrement>;
    removeEntry$: Observable<CartActions.CartRemoveEntrySuccess | CartActions.CartRemoveEntryFail | CartActions.CartProcessesDecrement | DeprecatedCartActions.LoadCart>;
    updateEntry$: Observable<CartActions.CartUpdateEntrySuccess | CartActions.CartUpdateEntryFail | CartActions.CartProcessesDecrement | DeprecatedCartActions.LoadCart>;
    constructor(actions$: Actions, cartEntryConnector: CartEntryConnector);
}
