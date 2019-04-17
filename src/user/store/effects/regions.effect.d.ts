import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/index';
import { OccMiscsService } from '../../../occ/miscs/miscs.service';
export declare class RegionsEffects {
    private actions$;
    private occMiscsService;
    loadRegions$: Observable<fromActions.RegionsAction>;
    constructor(actions$: Actions, occMiscsService: OccMiscsService);
}
