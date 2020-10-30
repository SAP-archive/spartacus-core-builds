import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
import { StoreFinderActions } from '../actions/index';
export declare class ViewAllStoresEffect {
    private actions$;
    private storeFinderConnector;
    constructor(actions$: Actions, storeFinderConnector: StoreFinderConnector);
    viewAllStores$: Observable<StoreFinderActions.ViewAllStoresSuccess | StoreFinderActions.ViewAllStoresFail>;
}
