import { StateEntityLoaderActions } from '../../../state/index';
export declare const LOAD_CMS_NAVIGATION_ITEMS = "[Cms] Load NavigationEntry items";
export declare const LOAD_CMS_NAVIGATION_ITEMS_FAIL = "[Cms] Load NavigationEntry items Fail";
export declare const LOAD_CMS_NAVIGATION_ITEMS_SUCCESS = "[Cms] Load NavigationEntry items Success";
export declare class LoadCmsNavigationItems extends StateEntityLoaderActions.EntityLoadAction {
    payload: {
        nodeId: string;
        items: any[];
    };
    readonly type = "[Cms] Load NavigationEntry items";
    constructor(payload: {
        nodeId: string;
        items: any[];
    });
}
export declare class LoadCmsNavigationItemsFail extends StateEntityLoaderActions.EntityFailAction {
    payload: any;
    readonly type = "[Cms] Load NavigationEntry items Fail";
    constructor(nodeId: string, payload: any);
}
export declare class LoadCmsNavigationItemsSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    payload: {
        nodeId: string;
        components: any[];
    };
    readonly type = "[Cms] Load NavigationEntry items Success";
    constructor(payload: {
        nodeId: string;
        components: any[];
    });
}
export declare type CmsNavigationEntryItemAction = LoadCmsNavigationItems | LoadCmsNavigationItemsFail | LoadCmsNavigationItemsSuccess;
