import { UserToken } from '../../models/token-types.model';
import * as fromUpdateEmailAction from './../../../user/store/actions/update-email.action';
import * as fromAction from './../actions/user-token.action';
export declare const initialState: UserToken;
export declare function reducer(state: UserToken, action: fromAction.UserTokenAction | fromUpdateEmailAction.UpdateEmailSuccessAction): UserToken;
