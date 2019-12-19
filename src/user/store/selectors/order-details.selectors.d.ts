import { MemoizedSelector } from '@ngrx/store';
import { Order } from '../../../model/order.model';
import { StateWithUser } from '../user-state';
import { LoaderState } from '../../../state/utils/loader/loader-state';
export declare const getOrderState: MemoizedSelector<StateWithUser, LoaderState<Order>>;
export declare const getOrderDetails: MemoizedSelector<StateWithUser, Order>;
