import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/card-types.action';
import { OccMiscsService } from '../../../occ/miscs/miscs.service';
export declare class CardTypesEffects {
    private actions$;
    private occMiscsService;
    loadCardTypes$: Observable<fromAction.LoadCardTypesSuccess | fromAction.LoadCardTypesFail>;
    constructor(actions$: Actions, occMiscsService: OccMiscsService);
}
