import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartEntryConnector } from '../../connectors/entry/cart-entry.connector';
import * as fromActions from './../actions/index';
export declare class CartEntryEffects {
    private actions$;
    private cartEntryConnector;
    addEntry$: Observable<fromActions.AddEntrySuccess | fromActions.AddEntryFail>;
    removeEntry$: Observable<fromActions.RemoveEntrySuccess | fromActions.RemoveEntryFail>;
    updateEntry$: Observable<fromActions.UpdateEntrySuccess | fromActions.UpdateEntryFail>;
    constructor(actions$: Actions, cartEntryConnector: CartEntryConnector);
}
