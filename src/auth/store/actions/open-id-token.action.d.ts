import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
import { OpenIdToken } from '../../models/token-types.model';
export declare const LOAD_OPEN_ID_TOKEN = "[Token] Create Open ID Token";
export declare const LOAD_OPEN_ID_TOKEN_FAIL = "[Token] Create Open ID Token Fail";
export declare const LOAD_OPEN_ID_TOKEN_SUCCESS = "[Token] Create Open ID Token Success";
export declare class LoadOpenIdToken extends LoaderLoadAction {
    payload: {
        username: string;
        password: string;
    };
    readonly type = "[Token] Create Open ID Token";
    constructor(payload: {
        username: string;
        password: string;
    });
}
export declare class LoadOpenIdTokenFail extends LoaderFailAction {
    payload: any;
    readonly type = "[Token] Create Open ID Token Fail";
    constructor(payload: any);
}
export declare class LoadOpenIdTokenSuccess extends LoaderSuccessAction {
    payload: OpenIdToken;
    readonly type = "[Token] Create Open ID Token Success";
    constructor(payload: OpenIdToken);
}
export declare type OpenIdTokenActions = LoadOpenIdToken | LoadOpenIdTokenFail | LoadOpenIdTokenSuccess;
