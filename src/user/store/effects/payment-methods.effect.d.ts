import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
import * as ɵngcc0 from '@angular/core';
export declare class UserPaymentMethodsEffects {
    private actions$;
    private userPaymentMethodConnector;
    loadUserPaymentMethods$: Observable<Action>;
    setDefaultUserPaymentMethod$: Observable<Action>;
    deleteUserPaymentMethod$: Observable<Action>;
    constructor(actions$: Actions, userPaymentMethodConnector: UserPaymentConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserPaymentMethodsEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserPaymentMethodsEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJwYXltZW50LW1ldGhvZHMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXJQYXltZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wYXltZW50L3VzZXItcGF5bWVudC5jb25uZWN0b3InO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlclBheW1lbnRNZXRob2RzRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHVzZXJQYXltZW50TWV0aG9kQ29ubmVjdG9yO1xuICAgIGxvYWRVc2VyUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPEFjdGlvbj47XG4gICAgc2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kJDogT2JzZXJ2YWJsZTxBY3Rpb24+O1xuICAgIGRlbGV0ZVVzZXJQYXltZW50TWV0aG9kJDogT2JzZXJ2YWJsZTxBY3Rpb24+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCB1c2VyUGF5bWVudE1ldGhvZENvbm5lY3RvcjogVXNlclBheW1lbnRDb25uZWN0b3IpO1xufVxuIl19