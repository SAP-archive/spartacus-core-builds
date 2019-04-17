import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/address-verification.action';
import { OccUserService } from '../../../user/occ/user.service';
export declare class AddressVerificationEffect {
    private actions$;
    private occUserService;
    verifyAddress$: Observable<fromAction.VerifyAddressSuccess | fromAction.VerifyAddressFail>;
    constructor(actions$: Actions, occUserService: OccUserService);
}
