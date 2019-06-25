import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../../../cart/store/actions/index';
import { AddMessage } from '../../../global-message/index';
import * as fromUserActions from '../../../user/store/actions/index';
import { CheckoutConnector } from '../../connectors/checkout/checkout.connector';
import { CheckoutDeliveryConnector } from '../../connectors/delivery/checkout-delivery.connector';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import * as fromActions from '../actions/index';
export declare class CheckoutEffects {
    private actions$;
    private checkoutDeliveryConnector;
    private checkoutPaymentConnector;
    private checkoutConnector;
    addDeliveryAddress$: Observable<fromUserActions.LoadUserAddresses | fromActions.SetDeliveryAddress | fromActions.AddDeliveryAddressFail>;
    setDeliveryAddress$: Observable<fromActions.SetDeliveryAddressSuccess | fromActions.LoadSupportedDeliveryModes | fromActions.SetDeliveryAddressFail>;
    loadSupportedDeliveryModes$: Observable<fromActions.LoadSupportedDeliveryModesSuccess | fromActions.LoadSupportedDeliveryModesFail>;
    clearCheckoutMiscsDataOnLanguageChange$: Observable<fromActions.CheckoutClearMiscsData>;
    clearDeliveryModesOnCurrencyChange$: Observable<fromActions.ClearSupportedDeliveryModes>;
    clearCheckoutDataOnLogout$: Observable<fromActions.ClearCheckoutData>;
    setDeliveryMode$: Observable<fromActions.SetDeliveryModeSuccess | fromActions.SetDeliveryModeFail | CartActions.LoadCart>;
    createPaymentDetails$: Observable<fromUserActions.LoadUserPaymentMethods | fromActions.CreatePaymentDetailsSuccess | fromActions.CreatePaymentDetailsFail>;
    setPaymentDetails$: Observable<fromActions.SetPaymentDetailsSuccess | fromActions.SetPaymentDetailsFail>;
    placeOrder$: Observable<fromActions.PlaceOrderSuccess | AddMessage | fromActions.PlaceOrderFail>;
    loadCheckoutDetails$: Observable<fromActions.LoadCheckoutDetailsSuccess | fromActions.LoadCheckoutDetailsFail>;
    reloadDetailsOnMergeCart$: Observable<fromActions.LoadCheckoutDetails>;
    constructor(actions$: Actions, checkoutDeliveryConnector: CheckoutDeliveryConnector, checkoutPaymentConnector: CheckoutPaymentConnector, checkoutConnector: CheckoutConnector);
}
