import { StateLoaderActions } from '../../../state/utils/index';
import { UserToken } from '../../models/token-types.model';
export declare const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN = "[Auth] Load Customer Service Agent Token";
export declare const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_FAIL = "[Auth] Load Customer Service Agent Token Fail";
export declare const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_SUCCESS = "[Auth] Load Customer Service Agent Token Success";
export declare class LoadCustomerSupportAgentToken extends StateLoaderActions.LoaderLoadAction {
    payload: {
        userId: string;
        password: string;
    };
    readonly type = "[Auth] Load Customer Service Agent Token";
    constructor(payload: {
        userId: string;
        password: string;
    });
}
export declare class LoadCustomerSupportAgentTokenFail extends StateLoaderActions.LoaderFailAction {
    payload: any;
    readonly type = "[Auth] Load Customer Service Agent Token Fail";
    constructor(payload: any);
}
export declare class LoadCustomerSupportAgentTokenSuccess extends StateLoaderActions.LoaderSuccessAction {
    payload: UserToken;
    readonly type = "[Auth] Load Customer Service Agent Token Success";
    constructor(payload: UserToken);
}
export declare type CustomerSupportAgentTokenAction = LoadCustomerSupportAgentToken | LoadCustomerSupportAgentTokenFail | LoadCustomerSupportAgentTokenSuccess;
