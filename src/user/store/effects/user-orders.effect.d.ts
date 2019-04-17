import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromUserOrdersAction from '../actions/user-orders.action';
import { OccOrderService } from '../../occ/index';
export declare class UserOrdersEffect {
    private actions$;
    private occOrderService;
    constructor(actions$: Actions, occOrderService: OccOrderService);
    loadUserOrders$: Observable<fromUserOrdersAction.UserOrdersAction>;
    resetUserOrders$: Observable<Action>;
}
