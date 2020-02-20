import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserAddressConnector } from '../../../user/connectors/address/user-address.connector';
import { CheckoutActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class AddressVerificationEffect {
    private actions$;
    private userAddressConnector;
    verifyAddress$: Observable<CheckoutActions.VerifyAddressSuccess | CheckoutActions.VerifyAddressFail>;
    constructor(actions$: Actions, userAddressConnector: UserAddressConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressVerificationEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AddressVerificationEffect>;
}

//# sourceMappingURL=address-verification.effect.d.ts.map