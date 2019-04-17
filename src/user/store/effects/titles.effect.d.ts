import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OccMiscsService } from '../../../occ/miscs/miscs.service';
import * as fromAction from '../actions/titles.action';
export declare class TitlesEffects {
    private actions$;
    private occMiscsService;
    loadTitles$: Observable<fromAction.TitlesAction>;
    private sortTitles;
    constructor(actions$: Actions, occMiscsService: OccMiscsService);
}
