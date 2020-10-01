import { MemoizedSelector } from '@ngrx/store';
import { ORDER_TYPE } from '../../../model/replenishment-order.model';
import { OrderTypesState, StateWithCheckout } from '../checkout-state';
export declare const getSelectedOrderTypeSelector: (state: OrderTypesState) => ORDER_TYPE;
export declare const getOrderTypesState: MemoizedSelector<StateWithCheckout, OrderTypesState>;
export declare const getSelectedOrderType: MemoizedSelector<StateWithCheckout, ORDER_TYPE>;
