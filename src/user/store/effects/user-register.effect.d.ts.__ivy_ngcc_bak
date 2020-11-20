import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/user-auth/facade/auth.service';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
export declare class UserRegisterEffects {
    private actions$;
    private userConnector;
    private authService;
    registerUser$: Observable<UserActions.UserRegisterOrRemoveAction>;
    registerGuest$: Observable<UserActions.UserRegisterOrRemoveAction>;
    removeUser$: Observable<UserActions.UserRegisterOrRemoveAction>;
    constructor(actions$: Actions, userConnector: UserConnector, authService: AuthService);
}
