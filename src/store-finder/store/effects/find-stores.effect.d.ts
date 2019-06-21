import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
export declare class FindStoresEffect {
    private actions$;
    private storeFinderConnector;
    constructor(actions$: Actions, storeFinderConnector: StoreFinderConnector);
    findStores$: Observable<any>;
    findStoreById$: Observable<any>;
}
