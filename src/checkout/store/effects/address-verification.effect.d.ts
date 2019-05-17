import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/address-verification.action';
import { UserAddressConnector } from '../../../user/connectors/address/user-address.connector';
export declare class AddressVerificationEffect {
    private actions$;
    private userAddressConnector;
    verifyAddress$: Observable<fromAction.VerifyAddressSuccess | fromAction.VerifyAddressFail>;
    constructor(actions$: Actions, userAddressConnector: UserAddressConnector);
}
