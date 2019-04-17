import { EntityFailAction, EntityLoadAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
export declare const LOAD_NAVIGATION_ITEMS = "[Cms] Load NavigationEntry items";
export declare const LOAD_NAVIGATION_ITEMS_FAIL = "[Cms] Load NavigationEntry items Fail";
export declare const LOAD_NAVIGATION_ITEMS_SUCCESS = "[Cms] Load NavigationEntry items Success";
export declare class LoadNavigationItems extends EntityLoadAction {
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
export declare class LoadNavigationItemsFail extends EntityFailAction {
    payload: any;
    readonly type = "[Cms] Load NavigationEntry items Fail";
    constructor(nodeId: string, payload: any);
}
export declare class LoadNavigationItemsSuccess extends EntitySuccessAction {
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
export declare type NavigationEntryItemAction = LoadNavigationItems | LoadNavigationItemsFail | LoadNavigationItemsSuccess;
