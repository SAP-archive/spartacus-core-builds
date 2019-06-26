import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../../../cart/store/actions/index';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import * as fromUserActions from '../../../user/store/actions/index';
import { CheckoutConnector } from '../../connectors/checkout/checkout.connector';
import { CheckoutDeliveryConnector } from '../../connectors/delivery/checkout-delivery.connector';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
export declare class CheckoutEffects {
    private actions$;
    private checkoutDeliveryConnector;
    private checkoutPaymentConnector;
    private checkoutConnector;
    addDeliveryAddress$: Observable<fromUserActions.LoadUserAddresses | CheckoutActions.SetDeliveryAddress | CheckoutActions.AddDeliveryAddressFail>;
    setDeliveryAddress$: Observable<CheckoutActions.SetDeliveryAddressSuccess | CheckoutActions.LoadSupportedDeliveryModes | CheckoutActions.SetDeliveryAddressFail>;
    loadSupportedDeliveryModes$: Observable<CheckoutActions.LoadSupportedDeliveryModesSuccess | CheckoutActions.LoadSupportedDeliveryModesFail>;
    clearCheckoutMiscsDataOnLanguageChange$: Observable<CheckoutActions.CheckoutClearMiscsData>;
    clearDeliveryModesOnCurrencyChange$: Observable<CheckoutActions.ClearSupportedDeliveryModes>;
    clearCheckoutDataOnLogout$: Observable<CheckoutActions.ClearCheckoutData>;
    setDeliveryMode$: Observable<CheckoutActions.SetDeliveryModeSuccess | CheckoutActions.SetDeliveryModeFail | CartActions.LoadCart>;
    createPaymentDetails$: Observable<fromUserActions.LoadUserPaymentMethods | CheckoutActions.CreatePaymentDetailsSuccess | CheckoutActions.CreatePaymentDetailsFail>;
    setPaymentDetails$: Observable<CheckoutActions.SetPaymentDetailsSuccess | CheckoutActions.SetPaymentDetailsFail>;
    placeOrder$: Observable<CheckoutActions.PlaceOrderSuccess | GlobalMessageActions.AddMessage | CheckoutActions.PlaceOrderFail>;
    loadCheckoutDetails$: Observable<CheckoutActions.LoadCheckoutDetailsSuccess | CheckoutActions.LoadCheckoutDetailsFail>;
    reloadDetailsOnMergeCart$: Observable<CheckoutActions.LoadCheckoutDetails>;
    constructor(actions$: Actions, checkoutDeliveryConnector: CheckoutDeliveryConnector, checkoutPaymentConnector: CheckoutPaymentConnector, checkoutConnector: CheckoutConnector);
}
