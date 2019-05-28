import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/card-types.action';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
export declare class CardTypesEffects {
    private actions$;
    private checkoutPaymentConnector;
    loadCardTypes$: Observable<fromAction.LoadCardTypesSuccess | fromAction.LoadCardTypesFail>;
    constructor(actions$: Actions, checkoutPaymentConnector: CheckoutPaymentConnector);
}
