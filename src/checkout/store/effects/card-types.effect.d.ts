import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/card-types.action';
import { CartPaymentConnector } from '../../../cart/connectors/payment/cart-payment.connector';
export declare class CardTypesEffects {
    private actions$;
    private cartPaymentConnector;
    loadCardTypes$: Observable<fromAction.LoadCardTypesSuccess | fromAction.LoadCardTypesFail>;
    constructor(actions$: Actions, cartPaymentConnector: CartPaymentConnector);
}
