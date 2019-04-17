import { Action } from '@ngrx/store';
import { UserRegisterFormData } from '../../model/user.model';
export declare const REGISTER_USER = "[User] Register User";
export declare const REGISTER_USER_FAIL = "[User] Register User Fail";
export declare const REGISTER_USER_SUCCESS = "[User] Register User Success";
export declare class RegisterUser implements Action {
    payload: UserRegisterFormData;
    readonly type = "[User] Register User";
    constructor(payload: UserRegisterFormData);
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
export declare type UserRegisterAction = RegisterUser | RegisterUserFail | RegisterUserSuccess;
