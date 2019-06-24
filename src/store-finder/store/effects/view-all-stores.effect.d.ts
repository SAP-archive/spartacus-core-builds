import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
import * as fromAction from './../actions/view-all-stores.action';
export declare class ViewAllStoresEffect {
    private actions$;
    private storeFinderConnector;
    constructor(actions$: Actions, storeFinderConnector: StoreFinderConnector);
    viewAllStores$: Observable<fromAction.ViewAllStoresSuccess | fromAction.ViewAllStoresFail>;
}
