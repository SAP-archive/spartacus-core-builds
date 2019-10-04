import { LoaderState } from '../../state/utils/loader/loader-state';
import { ClientToken, UserToken } from '../models/token-types.model';
export declare const AUTH_FEATURE = "auth";
export declare const CLIENT_TOKEN_DATA = "[Auth] Client Token Data";
export declare const CSAGENT_TOKEN_DATA = "[Auth] Customer Support Agent Token Data";
export interface StateWithAuth {
    [AUTH_FEATURE]: AuthState;
}
export interface AuthState {
    userToken: UserTokenState;
    clientToken: LoaderState<ClientToken>;
    csagentToken: LoaderState<UserToken>;
}
export interface UserTokenState {
    token: UserToken;
}
