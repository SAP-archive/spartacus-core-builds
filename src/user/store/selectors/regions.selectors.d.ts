import { MemoizedSelector } from '@ngrx/store';
import { RegionsState, StateWithUser } from '../user-state';
import { Region } from '../../../model/address.model';
import { LoaderState } from '../../../state/utils/loader/loader-state';
export declare const getRegionsLoaderState: MemoizedSelector<StateWithUser, LoaderState<RegionsState>>;
export declare const getAllRegions: MemoizedSelector<StateWithUser, Region[]>;
export declare const getRegionsDataAndLoading: MemoizedSelector<StateWithUser, {
    loaded: boolean;
    loading: boolean;
    regions: Region[];
    country: string;
}>;
export declare const getRegionsCountry: MemoizedSelector<StateWithUser, string>;
export declare const getRegionsLoading: MemoizedSelector<StateWithUser, boolean>;
export declare const getRegionsLoaded: MemoizedSelector<StateWithUser, boolean>;
