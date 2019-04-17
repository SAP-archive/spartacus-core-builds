import { MemoizedSelector } from '@ngrx/store';
import { StateWithUser } from '../user-state';
import { OrderHistoryList } from '../../../occ/occ-models/index';
import { LoaderState } from '../../../state/utils/loader/loader-state';
export declare const getOrdersState: MemoizedSelector<StateWithUser, LoaderState<OrderHistoryList>>;
export declare const getOrdersLoaded: MemoizedSelector<StateWithUser, boolean>;
export declare const getOrders: MemoizedSelector<StateWithUser, OrderHistoryList>;
