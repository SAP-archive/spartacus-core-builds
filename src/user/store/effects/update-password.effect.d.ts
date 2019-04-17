import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OccUserService } from '../../occ/index';
import * as fromActions from '../actions/update-password.action';
export declare class UpdatePasswordEffects {
    private actions$;
    private occUserService;
    constructor(actions$: Actions, occUserService: OccUserService);
    updatePassword$: Observable<fromActions.UpdatePasswordSuccess | fromActions.UpdatePasswordFail>;
}
