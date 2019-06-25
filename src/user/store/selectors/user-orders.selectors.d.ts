import { MemoizedSelector } from '@ngrx/store';
import { OrderHistoryList } from '../../../model/order.model';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { StateWithUser } from '../user-state';
export declare const getOrdersState: MemoizedSelector<StateWithUser, LoaderState<OrderHistoryList>>;
export declare const getOrdersLoaded: MemoizedSelector<StateWithUser, boolean>;
export declare const getOrders: MemoizedSelector<StateWithUser, OrderHistoryList>;
