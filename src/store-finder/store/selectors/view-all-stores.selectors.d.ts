import { MemoizedSelector } from '@ngrx/store';
import { StateWithStoreFinder, ViewAllStoresState } from '../store-finder-state';
import { LoaderState } from '../../../state/utils/loader/loader-state';
export declare const getViewAllStoresState: MemoizedSelector<StateWithStoreFinder, LoaderState<ViewAllStoresState>>;
export declare const getViewAllStoresEntities: MemoizedSelector<StateWithStoreFinder, ViewAllStoresState>;
export declare const getViewAllStoresLoading: MemoizedSelector<StateWithStoreFinder, boolean>;
