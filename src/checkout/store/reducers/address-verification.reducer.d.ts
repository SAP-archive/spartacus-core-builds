import * as fromAction from '../actions/index';
import { AddressVerificationState } from '../checkout-state';
export declare const initialState: AddressVerificationState;
export declare function reducer(state: AddressVerificationState, action: fromAction.AddressVerificationActions): AddressVerificationState;
export declare const getAddressVerificationResults: (state: AddressVerificationState) => string | import("../../../occ").AddressValidation;
