import { CmsComponent } from '../../../occ/occ-models/index';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
export declare const LOAD_COMPONENT = "[Cms] Load Component";
export declare const LOAD_COMPONENT_FAIL = "[Cms] Load Component Fail";
export declare const LOAD_COMPONENT_SUCCESS = "[Cms] Load Component Success";
export declare const GET_COMPONENET_FROM_PAGE = "[Cms] Get Component from Page";
export declare class LoadComponent extends EntityLoadAction {
    payload: string;
    readonly type = "[Cms] Load Component";
    constructor(payload: string);
}
export declare class LoadComponentFail extends EntityFailAction {
    payload: any;
    readonly type = "[Cms] Load Component Fail";
    constructor(uid: string, payload: any);
}
export declare class LoadComponentSuccess<T extends CmsComponent> extends EntitySuccessAction {
    payload: T;
    readonly type = "[Cms] Load Component Success";
    constructor(payload: T);
}
export declare class GetComponentFromPage<T extends CmsComponent> extends EntitySuccessAction {
    payload: T[];
    readonly type = "[Cms] Get Component from Page";
    constructor(payload: T[]);
}
export declare type ComponentAction<T extends CmsComponent> = LoadComponent | LoadComponentFail | LoadComponentSuccess<T> | GetComponentFromPage<T>;
