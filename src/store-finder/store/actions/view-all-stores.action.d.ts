import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
export declare const VIEW_ALL_STORES = "[StoreFinder] View All Stores";
export declare const VIEW_ALL_STORES_FAIL = "[StoreFinder] View All Stores Fail";
export declare const VIEW_ALL_STORES_SUCCESS = "[StoreFinder] View All Stores Success";
export declare class ViewAllStores extends LoaderLoadAction {
    readonly type = "[StoreFinder] View All Stores";
    constructor();
}
export declare class ViewAllStoresFail extends LoaderFailAction {
    payload: any;
    readonly type = "[StoreFinder] View All Stores Fail";
    constructor(payload: any);
}
export declare class ViewAllStoresSuccess extends LoaderSuccessAction {
    payload: any;
    readonly type = "[StoreFinder] View All Stores Success";
    constructor(payload: any);
}
export declare type ViewAllStoresAction = ViewAllStores | ViewAllStoresFail | ViewAllStoresSuccess;
