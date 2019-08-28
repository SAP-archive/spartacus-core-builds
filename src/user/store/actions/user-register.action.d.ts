import { UserSignUp } from '../../../model/misc.model';
import { StateEntityLoaderActions } from '../../../state/utils/index';
export declare const REGISTER_USER = "[User] Register User";
export declare const REGISTER_USER_FAIL = "[User] Register User Fail";
export declare const REGISTER_USER_SUCCESS = "[User] Register User Success";
export declare const RESET_REGISTER_USER_PROCESS = "[User] Reset Register User Process";
export declare const REMOVE_USER = "[User] Remove User";
export declare const REMOVE_USER_FAIL = "[User] Remove User Fail";
export declare const REMOVE_USER_SUCCESS = "[User] Remove User Success";
export declare const REMOVE_USER_RESET = "[User] Reset Remove User Process State";
export declare class RegisterUser extends StateEntityLoaderActions.EntityLoadAction {
    payload: UserSignUp;
    readonly type = "[User] Register User";
    constructor(payload: UserSignUp);
}
export declare class RegisterUserFail extends StateEntityLoaderActions.EntityFailAction {
    payload: any;
    readonly type = "[User] Register User Fail";
    constructor(payload: any);
}
export declare class RegisterUserSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    readonly type = "[User] Register User Success";
    constructor();
}
export declare class ResetRegisterUserProcess extends StateEntityLoaderActions.EntityResetAction {
    readonly type = "[User] Reset Register User Process";
    constructor();
}
export declare class RemoveUser extends StateEntityLoaderActions.EntityLoadAction {
    payload: string;
    readonly type = "[User] Remove User";
    constructor(payload: string);
}
export declare class RemoveUserFail extends StateEntityLoaderActions.EntityFailAction {
    payload: any;
    readonly type = "[User] Remove User Fail";
    constructor(payload: any);
}
export declare class RemoveUserSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    readonly type = "[User] Remove User Success";
    constructor();
}
export declare class RemoveUserReset extends StateEntityLoaderActions.EntityResetAction {
    readonly type = "[User] Reset Remove User Process State";
    constructor();
}
export declare type UserRegisterOrRemoveAction = RegisterUser | RegisterUserFail | RegisterUserSuccess | ResetRegisterUserProcess | RemoveUser | RemoveUserFail | RemoveUserSuccess | RemoveUserReset;
