import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
import * as fromAction from './../actions/find-stores.action';
export declare class FindStoresEffect {
    private actions$;
    private storeFinderConnector;
    constructor(actions$: Actions, storeFinderConnector: StoreFinderConnector);
    findStores$: Observable<fromAction.FindStoresSuccess | fromAction.FindStoresFail>;
    findStoreById$: Observable<fromAction.FindStoreByIdSuccess | fromAction.FindStoreByIdFail>;
}
