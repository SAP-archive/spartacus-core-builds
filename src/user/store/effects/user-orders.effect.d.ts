import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserOrdersEffect {
    private actions$;
    private orderConnector;
    constructor(actions$: Actions, orderConnector: UserOrderConnector);
    loadUserOrders$: Observable<UserActions.UserOrdersAction>;
    resetUserOrders$: Observable<UserActions.ClearUserOrders>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserOrdersEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserOrdersEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbInVzZXItb3JkZXJzLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7OztBQU1BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXJPcmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJPcmRlcnNFZmZlY3Qge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSBvcmRlckNvbm5lY3RvcjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgb3JkZXJDb25uZWN0b3I6IFVzZXJPcmRlckNvbm5lY3Rvcik7XG4gICAgbG9hZFVzZXJPcmRlcnMkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLlVzZXJPcmRlcnNBY3Rpb24+O1xuICAgIHJlc2V0VXNlck9yZGVycyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuQ2xlYXJVc2VyT3JkZXJzPjtcbn1cbiJdfQ==