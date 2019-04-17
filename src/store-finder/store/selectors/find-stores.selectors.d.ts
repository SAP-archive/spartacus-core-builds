import { MemoizedSelector } from '@ngrx/store';
import { FindStoresState, StateWithStoreFinder } from '../store-finder-state';
import { LoaderState } from '../../../state/utils/loader/loader-state';
export declare const getFindStoresState: MemoizedSelector<StateWithStoreFinder, LoaderState<FindStoresState>>;
export declare const getFindStoresEntities: MemoizedSelector<StateWithStoreFinder, FindStoresState>;
export declare const getStoresLoading: MemoizedSelector<StateWithStoreFinder, boolean>;
