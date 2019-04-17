import { Action } from '@ngrx/store';
export declare const FORGOT_PASSWORD_EMAIL_REQUEST = "[User] Forgot Password Email Request";
export declare const FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS = "[User] Forgot Password Email Request Success";
export declare const FORGOT_PASSWORD_EMAIL_REQUEST_FAIL = "[User] Forgot Password Email Request Fail";
export declare class ForgotPasswordEmailRequest implements Action {
    payload: string;
    readonly type = "[User] Forgot Password Email Request";
    constructor(payload: string);
}
export declare class ForgotPasswordEmailRequestFail implements Action {
    payload: any;
    readonly type = "[User] Forgot Password Email Request Fail";
    constructor(payload: any);
}
export declare class ForgotPasswordEmailRequestSuccess implements Action {
    readonly type = "[User] Forgot Password Email Request Success";
}
export declare type ForgotPasswordEmailRequestAction = ForgotPasswordEmailRequest | ForgotPasswordEmailRequestFail | ForgotPasswordEmailRequestSuccess;
