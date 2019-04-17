import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AddMessage } from '../../../global-message/index';
import * as fromActions from '../actions/index';
import { OccUserService } from '../../occ/user.service';
export declare class ForgotPasswordEffects {
    private actions$;
    private occUserService;
    requestForgotPasswordEmail$: Observable<fromActions.ForgotPasswordEmailRequestSuccess | AddMessage | fromActions.ForgotPasswordEmailRequestFail>;
    constructor(actions$: Actions, occUserService: OccUserService);
}
