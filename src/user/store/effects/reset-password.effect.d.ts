import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/index';
import { OccUserService } from '../../occ/user.service';
import { AddMessage } from '../../../global-message/index';
export declare class ResetPasswordEffects {
    private actions$;
    private occUserService;
    resetPassword$: Observable<fromActions.ResetPasswordSuccess | AddMessage | fromActions.ResetPasswordFail>;
    constructor(actions$: Actions, occUserService: OccUserService);
}
