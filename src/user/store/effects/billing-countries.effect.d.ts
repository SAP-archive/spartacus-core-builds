import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/billing-countries.action';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
export declare class BillingCountriesEffect {
    private actions$;
    private userPaymentConnector;
    loadBillingCountries$: Observable<fromAction.BillingCountriesAction>;
    constructor(actions$: Actions, userPaymentConnector: UserPaymentConnector);
}
