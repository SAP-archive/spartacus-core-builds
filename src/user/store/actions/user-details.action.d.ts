import { Action } from '@ngrx/store';
import { User } from '../../../occ/occ-models/index';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction } from '../../../state';
export declare const LOAD_USER_DETAILS = "[User] Load User Details";
export declare const LOAD_USER_DETAILS_FAIL = "[User] Load User Details Fail";
export declare const LOAD_USER_DETAILS_SUCCESS = "[User] Load User Details Success";
export declare const UPDATE_USER_DETAILS = "[User] Update User Details";
export declare const UPDATE_USER_DETAILS_FAIL = "[User] Update User Details Fail";
export declare const UPDATE_USER_DETAILS_SUCCESS = "[User] Update User Details Success";
export declare const RESET_USER_DETAILS = "[User] Reset User Details";
export declare class LoadUserDetails implements Action {
    payload: string;
    readonly type = "[User] Load User Details";
    constructor(payload: string);
}
export declare class LoadUserDetailsFail implements Action {
    payload: any;
    readonly type = "[User] Load User Details Fail";
    constructor(payload: any);
}
export declare class LoadUserDetailsSuccess implements Action {
    payload: User;
    readonly type = "[User] Load User Details Success";
    constructor(payload: User);
}
export declare class UpdateUserDetails extends EntityLoadAction {
    payload: {
        username: string;
        userDetails: User;
    };
    readonly type = "[User] Update User Details";
    constructor(payload: {
        username: string;
        userDetails: User;
    });
}
export declare class UpdateUserDetailsFail extends EntityFailAction {
    payload: any;
    readonly type = "[User] Update User Details Fail";
    constructor(payload: any);
}
export declare class UpdateUserDetailsSuccess extends EntitySuccessAction {
    userUpdates: User;
    readonly type = "[User] Update User Details Success";
    constructor(userUpdates: User);
}
export declare class ResetUpdateUserDetails extends EntityResetAction {
    readonly type = "[User] Reset User Details";
    constructor();
}
export declare type UserDetailsAction = LoadUserDetails | LoadUserDetailsFail | LoadUserDetailsSuccess | UpdateUserDetails | UpdateUserDetailsFail | UpdateUserDetailsSuccess | ResetUpdateUserDetails;
