import { ClientToken } from '../../models/token-types.model';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
export declare const LOAD_CLIENT_TOKEN = "[Token] Create Client Token";
export declare const LOAD_CLIENT_TOKEN_FAIL = "[Token] Create Client Token Fail";
export declare const LOAD_CLIENT_TOKEN_SUCCESS = "[Token] Create Client Token Success";
export declare class LoadClientToken extends LoaderLoadAction {
    readonly type = "[Token] Create Client Token";
    constructor();
}
export declare class LoadClientTokenFail extends LoaderFailAction {
    payload: any;
    readonly type = "[Token] Create Client Token Fail";
    constructor(payload: any);
}
export declare class LoadClientTokenSuccess extends LoaderSuccessAction {
    payload: ClientToken;
    readonly type = "[Token] Create Client Token Success";
    constructor(payload: ClientToken);
}
export declare type ClientTokenAction = LoadClientToken | LoadClientTokenFail | LoadClientTokenSuccess;
