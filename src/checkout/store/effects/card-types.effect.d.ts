import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class CardTypesEffects {
    private actions$;
    private checkoutPaymentConnector;
    loadCardTypes$: Observable<CheckoutActions.LoadCardTypesSuccess | CheckoutActions.LoadCardTypesFail>;
    constructor(actions$: Actions, checkoutPaymentConnector: CheckoutPaymentConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CardTypesEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CardTypesEffects>;
}

//# sourceMappingURL=card-types.effect.d.ts.map