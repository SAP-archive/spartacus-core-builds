import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import * as fromAction from '../actions/card-types.action';
export declare class CardTypesEffects {
    private actions$;
    private checkoutPaymentConnector;
    loadCardTypes$: Observable<fromAction.LoadCardTypesSuccess | fromAction.LoadCardTypesFail>;
    constructor(actions$: Actions, checkoutPaymentConnector: CheckoutPaymentConnector);
}
