import { Action } from '@ngrx/store';
export declare const LOGIN = "[Auth] Login";
export declare const LOGOUT = "[Auth] Logout";
export declare const LOGOUT_CUSTOMER_SUPPORT_AGENT = "[Auth] Logout Customer Support Agent";
export declare class Login implements Action {
    readonly type = "[Auth] Login";
}
export declare class Logout implements Action {
    readonly type = "[Auth] Logout";
}
export declare type LoginLogoutAction = Login | Logout;
