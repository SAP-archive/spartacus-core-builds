import { MemoizedSelector } from '@ngrx/store';
import { StateWithUser } from '../user-state';
import { Address } from '../../../occ/occ-models/index';
import { LoaderState } from '../../../state/utils/loader/loader-state';
export declare const getAddressesLoaderState: MemoizedSelector<StateWithUser, LoaderState<Address[]>>;
export declare const getAddresses: MemoizedSelector<StateWithUser, Address[]>;
export declare const getAddressesLoading: MemoizedSelector<StateWithUser, boolean>;
