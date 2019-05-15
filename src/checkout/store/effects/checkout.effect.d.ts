import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/index';
import { AddMessage } from '../../../global-message/index';
import * as fromUserActions from '../../../user/store/actions/index';
import * as fromCartActions from './../../../cart/store/actions/index';
import { CartDeliveryConnector } from '../../../cart/connectors/delivery/cart-delivery.connector';
import { CartPaymentConnector } from '../../../cart/connectors/payment/cart-payment.connector';
import { CartConnector } from '../../../cart/connectors/cart/cart.connector';
import { OrderConnector } from '../../../user/connectors/order.connector';
export declare class CheckoutEffects {
    private actions$;
    private cartDeliveryConnector;
    private cartConnector;
    private cartPaymentConnector;
    private orderConnector;
    addDeliveryAddress$: Observable<fromUserActions.LoadUserAddresses | fromActions.SetDeliveryAddress | fromActions.AddDeliveryAddressFail>;
    setDeliveryAddress$: Observable<fromActions.SetDeliveryAddressSuccess | fromActions.LoadSupportedDeliveryModes | fromActions.SetDeliveryAddressFail>;
    loadSupportedDeliveryModes$: Observable<fromActions.LoadSupportedDeliveryModesSuccess | fromActions.LoadSupportedDeliveryModesFail>;
    setDeliveryMode$: Observable<fromActions.SetDeliveryModeSuccess | fromActions.SetDeliveryModeFail | fromCartActions.LoadCart>;
    createPaymentDetails$: Observable<fromUserActions.LoadUserPaymentMethods | fromActions.CreatePaymentDetailsSuccess | fromActions.CreatePaymentDetailsFail>;
    setPaymentDetails$: Observable<fromActions.SetPaymentDetailsSuccess | fromActions.SetPaymentDetailsFail>;
    placeOrder$: Observable<fromActions.PlaceOrderSuccess | AddMessage | fromActions.PlaceOrderFail>;
    loadCheckoutDetails$: Observable<fromActions.LoadCheckoutDetailsSuccess | fromActions.LoadCheckoutDetailsFail>;
    reloadDetailsOnMergeCart$: Observable<fromActions.LoadCheckoutDetails>;
    constructor(actions$: Actions, cartDeliveryConnector: CartDeliveryConnector, cartConnector: CartConnector, cartPaymentConnector: CartPaymentConnector, orderConnector: OrderConnector);
}
