import { Action } from '@ngrx/store';
import { UserSignUp } from '../../../model/misc.model';
import { StateUtils } from '../../../state/utils/index';
export declare const REGISTER_USER = "[User] Register User";
export declare const REGISTER_USER_FAIL = "[User] Register User Fail";
export declare const REGISTER_USER_SUCCESS = "[User] Register User Success";
export declare const RESET_REGISTER_USER_PROCESS = "[User] Reset Register User Process";
export declare const REGISTER_GUEST = "[User] Register Guest";
export declare const REGISTER_GUEST_FAIL = "[User] Register Guest Fail";
export declare const REGISTER_GUEST_SUCCESS = "[User] Register Guest Success";
export declare const REMOVE_USER = "[User] Remove User";
export declare const REMOVE_USER_FAIL = "[User] Remove User Fail";
export declare const REMOVE_USER_SUCCESS = "[User] Remove User Success";
export declare const REMOVE_USER_RESET = "[User] Reset Remove User Process State";
export declare class RegisterUser extends StateUtils.EntityLoadAction {
    payload: UserSignUp;
    readonly type = "[User] Register User";
    constructor(payload: UserSignUp);
}
export declare class RegisterUserFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[User] Register User Fail";
    constructor(payload: any);
}
export declare class RegisterUserSuccess extends StateUtils.EntitySuccessAction {
    readonly type = "[User] Register User Success";
    constructor();
}
export declare class ResetRegisterUserProcess extends StateUtils.EntityLoaderResetAction {
    readonly type = "[User] Reset Register User Process";
    constructor();
}
export declare class RegisterGuest implements Action {
    payload: {
        guid: string;
        password: string;
    };
    readonly type = "[User] Register Guest";
    constructor(payload: {
        guid: string;
        password: string;
    });
}
export declare class RegisterGuestFail implements Action {
    payload: any;
    readonly type = "[User] Register Guest Fail";
    constructor(payload: any);
}
export declare class RegisterGuestSuccess implements Action {
    readonly type = "[User] Register Guest Success";
}
export declare class RemoveUser extends StateUtils.EntityLoadAction {
    payload: string;
    readonly type = "[User] Remove User";
    constructor(payload: string);
}
export declare class RemoveUserFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[User] Remove User Fail";
    constructor(payload: any);
}
export declare class RemoveUserSuccess extends StateUtils.EntitySuccessAction {
    readonly type = "[User] Remove User Success";
    constructor();
}
export declare class RemoveUserReset extends StateUtils.EntityLoaderResetAction {
    readonly type = "[User] Reset Remove User Process State";
    constructor();
}
export declare type UserRegisterOrRemoveAction = RegisterUser | RegisterUserFail | RegisterUserSuccess | ResetRegisterUserProcess | RegisterGuest | RegisterGuestFail | RegisterGuestSuccess | RemoveUser | RemoveUserFail | RemoveUserSuccess | RemoveUserReset;
