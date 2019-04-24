import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/index';
import { AddMessage } from '../../../global-message/index';
import { ProductImageNormalizer } from '../../../product/index';
import { OccOrderService } from '../../../user/index';
import * as fromUserActions from '../../../user/store/actions/index';
import { CartDeliveryConnector } from '../../../cart/connectors/delivery/cart-delivery.connector';
import { CartPaymentConnector } from '../../../cart/connectors/payment/cart-payment.connector';
export declare class CheckoutEffects {
    private actions$;
    private cartDeliveryConnector;
    private cartPaymentConnector;
    private occOrderService;
    private productImageConverter;
    addDeliveryAddress$: Observable<fromUserActions.LoadUserAddresses | fromActions.SetDeliveryAddress | fromActions.AddDeliveryAddressFail>;
    setDeliveryAddress$: Observable<fromActions.SetDeliveryAddressSuccess | fromActions.SetDeliveryAddressFail>;
    loadSupportedDeliveryModes$: Observable<fromActions.LoadSupportedDeliveryModesSuccess | fromActions.LoadSupportedDeliveryModesFail>;
    setDeliveryMode$: Observable<fromActions.SetDeliveryModeSuccess | fromActions.SetDeliveryModeFail>;
    createPaymentDetails$: Observable<fromUserActions.LoadUserPaymentMethods | fromActions.CreatePaymentDetailsSuccess | fromActions.CreatePaymentDetailsFail>;
    setPaymentDetails$: Observable<fromActions.SetPaymentDetailsSuccess | fromActions.SetPaymentDetailsFail>;
    placeOrder$: Observable<fromActions.PlaceOrderSuccess | AddMessage | fromActions.PlaceOrderFail>;
    constructor(actions$: Actions, cartDeliveryConnector: CartDeliveryConnector, cartPaymentConnector: CartPaymentConnector, occOrderService: OccOrderService, productImageConverter: ProductImageNormalizer);
}
