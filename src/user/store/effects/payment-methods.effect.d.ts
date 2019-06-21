import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
export declare class UserPaymentMethodsEffects {
    private actions$;
    private userPaymentMethodConnector;
    loadUserPaymentMethods$: Observable<any>;
    setDefaultUserPaymentMethod$: Observable<any>;
    deleteUserPaymentMethod$: Observable<any>;
    constructor(actions$: Actions, userPaymentMethodConnector: UserPaymentConnector);
}
