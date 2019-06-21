import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { CartEntryConnector } from '../../connectors/entry/cart-entry.connector';
export declare class CartEntryEffects {
    private actions$;
    private cartEntryConnector;
    addEntry$: Observable<any>;
    removeEntry$: Observable<any>;
    updateEntry$: Observable<any>;
    constructor(actions$: Actions, cartEntryConnector: CartEntryConnector);
}
