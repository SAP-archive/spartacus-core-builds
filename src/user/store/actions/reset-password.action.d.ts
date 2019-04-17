import { Action } from '@ngrx/store';
export declare const RESET_PASSWORD = "[User] Reset Password";
export declare const RESET_PASSWORD_SUCCESS = "[User] Reset Password Success";
export declare const RESET_PASSWORD_FAIL = "[User] Reset Password Fail";
export declare class ResetPassword implements Action {
    payload: {
        token: string;
        password: string;
    };
    readonly type = "[User] Reset Password";
    constructor(payload: {
        token: string;
        password: string;
    });
}
export declare class ResetPasswordFail implements Action {
    payload: any;
    readonly type = "[User] Reset Password Fail";
    constructor(payload: any);
}
export declare class ResetPasswordSuccess implements Action {
    readonly type = "[User] Reset Password Success";
}
export declare type ResetPasswordAction = ResetPassword | ResetPasswordFail | ResetPasswordSuccess;
