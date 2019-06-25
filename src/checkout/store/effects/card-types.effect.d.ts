import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
export declare class CardTypesEffects {
    private actions$;
    private checkoutPaymentConnector;
    loadCardTypes$: Observable<CheckoutActions.LoadCardTypesSuccess | CheckoutActions.LoadCardTypesFail>;
    constructor(actions$: Actions, checkoutPaymentConnector: CheckoutPaymentConnector);
}
