import { StateUtils } from '../../../state/utils/index';
import { UserToken } from '../../../auth/models/token-types.model';
import { Action } from '@ngrx/store';
export declare const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN = "[Auth] Load Customer Service Agent Token";
export declare const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_FAIL = "[Auth] Load Customer Service Agent Token Fail";
export declare const LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN_SUCCESS = "[Auth] Load Customer Service Agent Token Success";
export declare class LoadCustomerSupportAgentToken extends StateUtils.LoaderLoadAction {
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
export declare class LoadCustomerSupportAgentTokenFail extends StateUtils.LoaderFailAction {
    payload: any;
    readonly type = "[Auth] Load Customer Service Agent Token Fail";
    constructor(payload: any);
}
export declare class LoadCustomerSupportAgentTokenSuccess extends StateUtils.LoaderSuccessAction {
    payload: UserToken;
    readonly type = "[Auth] Load Customer Service Agent Token Success";
    constructor(payload: UserToken);
}
export declare class LogoutCustomerSupportAgent implements Action {
    readonly type = "[Auth] Logout Customer Support Agent";
}
export declare type CustomerSupportAgentTokenAction = LoadCustomerSupportAgentToken | LoadCustomerSupportAgentTokenFail | LoadCustomerSupportAgentTokenSuccess | LogoutCustomerSupportAgent;
