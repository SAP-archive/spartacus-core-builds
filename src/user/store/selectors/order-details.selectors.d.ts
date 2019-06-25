import { MemoizedSelector } from '@ngrx/store';
import { Order } from '../../../model/order.model';
import { OrderDetailsState, StateWithUser } from '../user-state';
export declare const getOrderState: MemoizedSelector<StateWithUser, OrderDetailsState>;
export declare const getOrderDetails: MemoizedSelector<StateWithUser, Order>;
