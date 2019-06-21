import { StoreFinderSearchConfig } from '../../model/search-config';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
import { GeoPoint } from '../../../model/misc.model';
export declare const ON_HOLD = "[StoreFinder] On Hold";
export declare const FIND_STORES = "[StoreFinder] Find Stores";
export declare const FIND_STORES_FAIL = "[StoreFinder] Find Stores Fail";
export declare const FIND_STORES_SUCCESS = "[StoreFinder] Find Stores Success";
export declare const FIND_STORE_BY_ID = "[StoreFinder] Find a Store by Id";
export declare const FIND_STORE_BY_ID_FAIL = "[StoreFinder] Find a Store by Id Fail";
export declare const FIND_STORE_BY_ID_SUCCESS = "[StoreFinder] Find a Store by Id Success";
export declare class OnHold extends LoaderLoadAction {
    readonly type = "[StoreFinder] On Hold";
    constructor();
}
export declare class FindStores extends LoaderLoadAction {
    payload: {
        queryText: string;
        longitudeLatitude?: GeoPoint;
        useMyLocation?: boolean;
        searchConfig?: StoreFinderSearchConfig;
        countryIsoCode?: string;
    };
    readonly type = "[StoreFinder] Find Stores";
    constructor(payload: {
        queryText: string;
        longitudeLatitude?: GeoPoint;
        useMyLocation?: boolean;
        searchConfig?: StoreFinderSearchConfig;
        countryIsoCode?: string;
    });
}
export declare class FindStoresFail extends LoaderFailAction {
    payload: any;
    readonly type = "[StoreFinder] Find Stores Fail";
    constructor(payload: any);
}
export declare class FindStoresSuccess extends LoaderSuccessAction {
    payload: any;
    readonly type = "[StoreFinder] Find Stores Success";
    constructor(payload: any);
}
export declare class FindStoreById extends LoaderLoadAction {
    payload: {
        storeId: string;
    };
    readonly type = "[StoreFinder] Find a Store by Id";
    constructor(payload: {
        storeId: string;
    });
}
export declare class FindStoreByIdFail extends LoaderFailAction {
    payload: any;
    readonly type = "[StoreFinder] Find a Store by Id Fail";
    constructor(payload: any);
}
export declare class FindStoreByIdSuccess extends LoaderSuccessAction {
    payload: any;
    readonly type = "[StoreFinder] Find a Store by Id Success";
    constructor(payload: any);
}
export declare type FindStoresAction = OnHold | FindStores | FindStoresFail | FindStoresSuccess | FindStoreById | FindStoreByIdFail | FindStoreByIdSuccess;
