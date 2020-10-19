import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserAddressConnector } from '../../../user/connectors/address/user-address.connector';
import { CheckoutActions } from '../actions/index';
export declare class AddressVerificationEffect {
    private actions$;
    private userAddressConnector;
    verifyAddress$: Observable<CheckoutActions.VerifyAddressSuccess | CheckoutActions.VerifyAddressFail>;
    constructor(actions$: Actions, userAddressConnector: UserAddressConnector);
}
