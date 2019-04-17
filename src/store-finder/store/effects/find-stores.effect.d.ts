import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OccStoreFinderService } from '../../occ/store-finder.service';
export declare class FindStoresEffect {
    private actions$;
    private occStoreFinderService;
    constructor(actions$: Actions, occStoreFinderService: OccStoreFinderService);
    findStores$: Observable<any>;
    findStoreById$: Observable<any>;
}
