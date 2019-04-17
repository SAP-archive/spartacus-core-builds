import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction } from '../../../state';
export declare const UPDATE_PASSWORD = "[User] Update Password";
export declare const UPDATE_PASSWORD_FAIL = "[User] Update Password Fail";
export declare const UPDATE_PASSWORD_SUCCESS = "[User] Update Password Success";
export declare const UPDATE_PASSWORD_RESET = "[User] Reset Update Password Process State";
export declare class UpdatePassword extends EntityLoadAction {
    payload: {
        userId: string;
        oldPassword: string;
        newPassword: string;
    };
    readonly type = "[User] Update Password";
    constructor(payload: {
        userId: string;
        oldPassword: string;
        newPassword: string;
    });
}
export declare class UpdatePasswordFail extends EntityFailAction {
    payload: any;
    readonly type = "[User] Update Password Fail";
    constructor(payload: any);
}
export declare class UpdatePasswordSuccess extends EntitySuccessAction {
    readonly type = "[User] Update Password Success";
    constructor();
}
export declare class UpdatePasswordReset extends EntityResetAction {
    readonly type = "[User] Reset Update Password Process State";
    constructor();
}
export declare type UpdatePasswordAction = UpdatePassword | UpdatePasswordFail | UpdatePasswordSuccess | UpdatePasswordReset;
