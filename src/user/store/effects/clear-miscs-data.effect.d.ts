import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
export declare class ClearMiscsDataEffect {
    private actions$;
    clearMiscsData$: Observable<Action>;
    constructor(actions$: Actions);
}
