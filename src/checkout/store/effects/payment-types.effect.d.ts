import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../../../cart/store/actions/index';
import { PaymentTypeConnector } from '../../connectors/payment-type/payment-type.connector';
import { CheckoutActions } from '../actions/index';
export declare class PaymentTypesEffects {
    private actions$;
    private paymentTypeConnector;
    loadPaymentTypes$: Observable<CheckoutActions.LoadPaymentTypesSuccess | CheckoutActions.LoadPaymentTypesFail>;
    setPaymentType$: Observable<CheckoutActions.SetPaymentTypeSuccess | CheckoutActions.SetPaymentTypeFail | CartActions.LoadCartSuccess | CheckoutActions.ClearCheckoutData>;
    constructor(actions$: Actions, paymentTypeConnector: PaymentTypeConnector);
}
