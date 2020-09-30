import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
export declare class UserPaymentMethodsEffects {
    private actions$;
    private userPaymentMethodConnector;
    loadUserPaymentMethods$: Observable<Action>;
    setDefaultUserPaymentMethod$: Observable<Action>;
    deleteUserPaymentMethod$: Observable<Action>;
    constructor(actions$: Actions, userPaymentMethodConnector: UserPaymentConnector);
}
