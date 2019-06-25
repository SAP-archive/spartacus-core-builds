import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartEntryConnector } from '../../connectors/entry/cart-entry.connector';
import { CartActions } from '../actions/index';
export declare class CartEntryEffects {
    private actions$;
    private cartEntryConnector;
    addEntry$: Observable<CartActions.CartAddEntrySuccess | CartActions.CartAddEntryFail>;
    removeEntry$: Observable<CartActions.CartRemoveEntrySuccess | CartActions.CartRemoveEntryFail>;
    updateEntry$: Observable<CartActions.CartUpdateEntrySuccess | CartActions.CartUpdateEntryFail>;
    constructor(actions$: Actions, cartEntryConnector: CartEntryConnector);
}
