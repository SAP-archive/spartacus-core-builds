import { CmsComponent } from '../../../model/cms.model';
import { StateEntityLoaderActions } from '../../../state/index';
export declare const LOAD_CMS_COMPONENT = "[Cms] Load Component";
export declare const LOAD_CMS_COMPONENT_FAIL = "[Cms] Load Component Fail";
export declare const LOAD_CMS_COMPONENT_SUCCESS = "[Cms] Load Component Success";
export declare const CMS_GET_COMPONENET_FROM_PAGE = "[Cms] Get Component from Page";
export declare class LoadCmsComponent extends StateEntityLoaderActions.EntityLoadAction {
    payload: string;
    readonly type = "[Cms] Load Component";
    constructor(payload: string);
}
export declare class LoadCmsComponentFail extends StateEntityLoaderActions.EntityFailAction {
    payload: any;
    readonly type = "[Cms] Load Component Fail";
    constructor(uid: string, payload: any);
}
export declare class LoadCmsComponentSuccess<T extends CmsComponent> extends StateEntityLoaderActions.EntitySuccessAction {
    payload: T;
    readonly type = "[Cms] Load Component Success";
    constructor(payload: T, uid?: string);
}
export declare class CmsGetComponentFromPage<T extends CmsComponent> extends StateEntityLoaderActions.EntitySuccessAction {
    payload: T[];
    readonly type = "[Cms] Get Component from Page";
    constructor(payload: T[]);
}
export declare type CmsComponentAction<T extends CmsComponent> = LoadCmsComponent | LoadCmsComponentFail | LoadCmsComponentSuccess<T> | CmsGetComponentFromPage<T>;
