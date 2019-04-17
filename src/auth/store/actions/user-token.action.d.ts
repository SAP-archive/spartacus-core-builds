import { Action } from '@ngrx/store';
import { UserToken } from '../../models/token-types.model';
export declare const LOAD_USER_TOKEN = "[Auth] Load User Token";
export declare const LOAD_USER_TOKEN_FAIL = "[Auth] Load User Token Fail";
export declare const LOAD_USER_TOKEN_SUCCESS = "[Auth] Load User Token Success";
export declare const REFRESH_USER_TOKEN = "[Auth] Refresh User Token";
export declare const REFRESH_USER_TOKEN_FAIL = "[Auth] Refresh User Token Fail";
export declare const REFRESH_USER_TOKEN_SUCCESS = "[Auth] Refresh User Token Success";
export declare class LoadUserToken implements Action {
    payload: {
        userId: string;
        password: string;
    };
    readonly type = "[Auth] Load User Token";
    constructor(payload: {
        userId: string;
        password: string;
    });
}
export declare class LoadUserTokenFail implements Action {
    payload: any;
    readonly type = "[Auth] Load User Token Fail";
    constructor(payload: any);
}
export declare class LoadUserTokenSuccess implements Action {
    payload: UserToken;
    readonly type = "[Auth] Load User Token Success";
    constructor(payload: UserToken);
}
export declare class RefreshUserToken implements Action {
    payload: {
        userId: string;
        refreshToken: string;
    };
    readonly type = "[Auth] Refresh User Token";
    constructor(payload: {
        userId: string;
        refreshToken: string;
    });
}
export declare class RefreshUserTokenSuccess implements Action {
    payload: UserToken;
    readonly type = "[Auth] Refresh User Token Success";
    constructor(payload: UserToken);
}
export declare class RefreshUserTokenFail implements Action {
    payload: any;
    readonly type = "[Auth] Refresh User Token Fail";
    constructor(payload: any);
}
export declare type UserTokenAction = LoadUserToken | LoadUserTokenFail | LoadUserTokenSuccess | RefreshUserToken | RefreshUserTokenFail | RefreshUserTokenSuccess;
