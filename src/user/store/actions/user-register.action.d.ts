import { Action } from '@ngrx/store';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction } from '../../../state';
import { UserSignUp } from '../../../model/misc.model';
export declare const REGISTER_USER = "[User] Register User";
export declare const REGISTER_USER_FAIL = "[User] Register User Fail";
export declare const REGISTER_USER_SUCCESS = "[User] Register User Success";
export declare const REMOVE_USER = "[User] Remove User";
export declare const REMOVE_USER_FAIL = "[User] Remove User Fail";
export declare const REMOVE_USER_SUCCESS = "[User] Remove User Success";
export declare const REMOVE_USER_RESET = "[User] Reset Remove User Process State";
export declare class RegisterUser implements Action {
    payload: UserSignUp;
    readonly type = "[User] Register User";
    constructor(payload: UserSignUp);
}
export declare class RegisterUserFail implements Action {
    payload: any;
    readonly type = "[User] Register User Fail";
    constructor(payload: any);
}
export declare class RegisterUserSuccess implements Action {
    readonly type = "[User] Register User Success";
    constructor();
}
export declare class RemoveUser extends EntityLoadAction {
    payload: string;
    readonly type = "[User] Remove User";
    constructor(payload: string);
}
export declare class RemoveUserFail extends EntityFailAction {
    payload: any;
    readonly type = "[User] Remove User Fail";
    constructor(payload: any);
}
export declare class RemoveUserSuccess extends EntitySuccessAction {
    readonly type = "[User] Remove User Success";
    constructor();
}
export declare class RemoveUserReset extends EntityResetAction {
    readonly type = "[User] Reset Remove User Process State";
    constructor();
}
export declare type UserRegisterOrRemoveAction = RegisterUser | RegisterUserFail | RegisterUserSuccess | RemoveUser | RemoveUserFail | RemoveUserSuccess | RemoveUserReset;
