import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as DeprecatedCartActions from '../../../cart/store/actions/cart.action';
import { CartActions } from '../../../cart/store/actions/index';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import { UserActions } from '../../../user/store/actions/index';
import { CheckoutConnector } from '../../connectors/checkout/checkout.connector';
import { CheckoutDeliveryConnector } from '../../connectors/delivery/checkout-delivery.connector';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutEffects {
    private actions$;
    private checkoutDeliveryConnector;
    private checkoutPaymentConnector;
    private checkoutConnector;
    private contextChange$;
    addDeliveryAddress$: Observable<UserActions.LoadUserAddresses | CheckoutActions.SetDeliveryAddress | CheckoutActions.AddDeliveryAddressFail>;
    setDeliveryAddress$: Observable<CheckoutActions.SetDeliveryAddressSuccess | CheckoutActions.ClearSupportedDeliveryModes | CheckoutActions.ClearCheckoutDeliveryMode | CheckoutActions.ResetLoadSupportedDeliveryModesProcess | CheckoutActions.LoadSupportedDeliveryModes | CheckoutActions.SetDeliveryAddressFail>;
    loadSupportedDeliveryModes$: Observable<CheckoutActions.LoadSupportedDeliveryModesSuccess | CheckoutActions.LoadSupportedDeliveryModesFail>;
    clearCheckoutMiscsDataOnLanguageChange$: Observable<CheckoutActions.CheckoutClearMiscsData | CheckoutActions.ResetLoadSupportedDeliveryModesProcess>;
    clearDeliveryModesOnCurrencyChange$: Observable<CheckoutActions.ClearSupportedDeliveryModes>;
    clearCheckoutDataOnLogout$: Observable<CheckoutActions.ClearCheckoutData>;
    clearCheckoutDataOnLogin$: Observable<CheckoutActions.ClearCheckoutData>;
    setDeliveryMode$: Observable<CheckoutActions.SetDeliveryModeSuccess | CheckoutActions.SetDeliveryModeFail | DeprecatedCartActions.LoadCart>;
    createPaymentDetails$: Observable<UserActions.LoadUserPaymentMethods | CheckoutActions.CreatePaymentDetailsSuccess | CheckoutActions.CreatePaymentDetailsFail>;
    setPaymentDetails$: Observable<CheckoutActions.SetPaymentDetailsSuccess | CheckoutActions.SetPaymentDetailsFail>;
    placeOrder$: Observable<CheckoutActions.PlaceOrderSuccess | GlobalMessageActions.AddMessage | CheckoutActions.PlaceOrderFail | CartActions.RemoveCart>;
    loadCheckoutDetails$: Observable<CheckoutActions.LoadCheckoutDetailsSuccess | CheckoutActions.LoadCheckoutDetailsFail>;
    reloadDetailsOnMergeCart$: Observable<CheckoutActions.LoadCheckoutDetails>;
    clearCheckoutDeliveryAddress$: Observable<CheckoutActions.ClearCheckoutDeliveryAddressFail | CheckoutActions.ClearCheckoutDeliveryAddressSuccess>;
    clearCheckoutDeliveryMode$: Observable<CheckoutActions.ClearCheckoutDeliveryModeFail | CheckoutActions.ClearCheckoutDeliveryModeSuccess | CartActions.CartProcessesDecrement | CartActions.LoadCart>;
    constructor(actions$: Actions, checkoutDeliveryConnector: CheckoutDeliveryConnector, checkoutPaymentConnector: CheckoutPaymentConnector, checkoutConnector: CheckoutConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CheckoutEffects>;
}

//# sourceMappingURL=checkout.effect.d.ts.map