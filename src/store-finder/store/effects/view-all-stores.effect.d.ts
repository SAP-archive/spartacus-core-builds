import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
import { StoreFinderActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ViewAllStoresEffect {
    private actions$;
    private storeFinderConnector;
    constructor(actions$: Actions, storeFinderConnector: StoreFinderConnector);
    viewAllStores$: Observable<StoreFinderActions.ViewAllStoresSuccess | StoreFinderActions.ViewAllStoresFail>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ViewAllStoresEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ViewAllStoresEffect>;
}

//# sourceMappingURL=view-all-stores.effect.d.ts.map