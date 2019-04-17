import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OccStoreFinderService } from '../../occ/store-finder.service';
export declare class ViewAllStoresEffect {
    private actions$;
    private occStoreFinderService;
    constructor(actions$: Actions, occStoreFinderService: OccStoreFinderService);
    viewAllStores$: Observable<any>;
}
