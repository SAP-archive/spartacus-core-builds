import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
export declare class ViewAllStoresEffect {
    private actions$;
    private storeFinderConnector;
    constructor(actions$: Actions, storeFinderConnector: StoreFinderConnector);
    viewAllStores$: Observable<any>;
}
