import * as fromUpdateEmailAction from '../../../user/store/actions/update-email.action';
import { UserToken } from '../../models/token-types.model';
import { AuthActions } from '../actions/index';
export declare const initialState: UserToken;
export declare function reducer(state: UserToken, action: AuthActions.UserTokenAction | fromUpdateEmailAction.UpdateEmailSuccessAction): UserToken;
