import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
import { StoreFinderActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class FindStoresEffect {
    private actions$;
    private storeFinderConnector;
    constructor(actions$: Actions, storeFinderConnector: StoreFinderConnector);
    findStores$: Observable<StoreFinderActions.FindStoresSuccess | StoreFinderActions.FindStoresFail>;
    findStoreById$: Observable<StoreFinderActions.FindStoreByIdSuccess | StoreFinderActions.FindStoreByIdFail>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FindStoresEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<FindStoresEffect>;
}

//# sourceMappingURL=find-stores.effect.d.ts.map