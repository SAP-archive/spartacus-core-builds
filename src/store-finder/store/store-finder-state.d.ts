import { StateUtils } from '../../state/utils';
import { StoreEntities } from '../model';
export declare const STORE_FINDER_FEATURE = "stores";
export declare const STORE_FINDER_DATA = "[StoreFinder] Store Finder Data";
export interface StateWithStoreFinder {
    [STORE_FINDER_FEATURE]: StoresState;
}
export interface StoresState {
    findStores: StateUtils.LoaderState<FindStoresState>;
    viewAllStores: StateUtils.LoaderState<ViewAllStoresState>;
}
export interface FindStoresState {
    findStoresEntities: StoreEntities;
}
export interface ViewAllStoresState {
    viewAllStoresEntities: StoreEntities;
}
