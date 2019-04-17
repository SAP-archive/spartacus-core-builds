import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/index';
import { OccCartService } from '../../../cart/index';
import { AddMessage } from '../../../global-message/index';
import { ProductImageConverterService } from '../../../product/index';
import { OccOrderService } from '../../../user/index';
import * as fromUserActions from '../../../user/store/actions/index';
export declare class CheckoutEffects {
    private actions$;
    private occCartService;
    private occOrderService;
    private productImageConverter;
    addDeliveryAddress$: Observable<fromUserActions.LoadUserAddresses | fromActions.SetDeliveryAddress | fromActions.AddDeliveryAddressFail>;
    setDeliveryAddress$: Observable<fromActions.SetDeliveryAddressSuccess | fromActions.SetDeliveryAddressFail>;
    loadSupportedDeliveryModes$: Observable<fromActions.LoadSupportedDeliveryModesSuccess | fromActions.LoadSupportedDeliveryModesFail>;
    setDeliveryMode$: Observable<fromActions.SetDeliveryModeSuccess | fromActions.SetDeliveryModeFail>;
    createPaymentDetails$: Observable<fromUserActions.LoadUserPaymentMethods | fromActions.CreatePaymentDetailsSuccess | fromActions.CreatePaymentDetailsFail>;
    setPaymentDetails$: Observable<fromActions.SetPaymentDetailsSuccess | fromActions.SetPaymentDetailsFail>;
    placeOrder$: Observable<fromActions.PlaceOrderSuccess | AddMessage | fromActions.PlaceOrderFail>;
    private domparser;
    constructor(actions$: Actions, occCartService: OccCartService, occOrderService: OccOrderService, productImageConverter: ProductImageConverterService);
    private getPaymentSopResponseParams;
    private getParamsForPaymentProvider;
    private extractPaymentDetailsFromHtml;
    private convertToMap;
}
