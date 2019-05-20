import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/delivery-countries.action';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
export declare class DeliveryCountriesEffects {
    private actions$;
    private userPaymentConnector;
    loadDeliveryCountries$: Observable<fromAction.DeliveryCountriesAction>;
    constructor(actions$: Actions, userPaymentConnector: UserPaymentConnector);
}
