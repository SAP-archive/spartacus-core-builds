import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
import * as ɵngcc0 from '@angular/core';
export declare class UserPaymentMethodsEffects {
    private actions$;
    private userPaymentMethodConnector;
    loadUserPaymentMethods$: Observable<Action>;
    setDefaultUserPaymentMethod$: Observable<Action>;
    deleteUserPaymentMethod$: Observable<Action>;
    constructor(actions$: Actions, userPaymentMethodConnector: UserPaymentConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserPaymentMethodsEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserPaymentMethodsEffects>;
}

//# sourceMappingURL=payment-methods.effect.d.ts.map