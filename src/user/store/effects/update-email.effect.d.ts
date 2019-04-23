import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OccUserService } from '../../occ/index';
import * as fromUpdateEmailAction from '../actions/update-email.action';
export declare class UpdateEmailEffects {
    private actions$;
    private occUserService;
    constructor(actions$: Actions, occUserService: OccUserService);
    updateEmail$: Observable<fromUpdateEmailAction.UpdateEmailSuccessAction | fromUpdateEmailAction.UpdateEmailErrorAction>;
}
