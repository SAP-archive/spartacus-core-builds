import { MemoizedSelector } from '@ngrx/store';
import { OrderDetailsState, StateWithUser } from '../user-state';
import { Order } from '../../../model/order.model';
export declare const getOrderState: MemoizedSelector<StateWithUser, OrderDetailsState>;
export declare const getOrderDetails: MemoizedSelector<StateWithUser, Order>;
