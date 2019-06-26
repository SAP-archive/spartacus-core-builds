import { StateLoaderActions } from '../../../state/index';
export declare const VIEW_ALL_STORES = "[StoreFinder] View All Stores";
export declare const VIEW_ALL_STORES_FAIL = "[StoreFinder] View All Stores Fail";
export declare const VIEW_ALL_STORES_SUCCESS = "[StoreFinder] View All Stores Success";
export declare class ViewAllStores extends StateLoaderActions.LoaderLoadAction {
    readonly type = "[StoreFinder] View All Stores";
    constructor();
}
export declare class ViewAllStoresFail extends StateLoaderActions.LoaderFailAction {
    payload: any;
    readonly type = "[StoreFinder] View All Stores Fail";
    constructor(payload: any);
}
export declare class ViewAllStoresSuccess extends StateLoaderActions.LoaderSuccessAction {
    payload: any;
    readonly type = "[StoreFinder] View All Stores Success";
    constructor(payload: any);
}
export declare type ViewAllStoresAction = ViewAllStores | ViewAllStoresFail | ViewAllStoresSuccess;
