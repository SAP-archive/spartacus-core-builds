import { Action } from '@ngrx/store';
import { Address, AddressValidation } from '../../../model/address.model';
export declare const VERIFY_ADDRESS = "[Checkout] Verify Address";
export declare const VERIFY_ADDRESS_FAIL = "[Checkout] Verify Address Fail";
export declare const VERIFY_ADDRESS_SUCCESS = "[Checkout] Verify Address Success";
export declare const CLEAR_ADDRESS_VERIFICATION_RESULTS = "[Checkout] Clear Address Verification Results";
export declare class VerifyAddress implements Action {
    payload: {
        userId: string;
        address: Address;
    };
    readonly type = "[Checkout] Verify Address";
    constructor(payload: {
        userId: string;
        address: Address;
    });
}
export declare class VerifyAddressFail implements Action {
    payload: any;
    readonly type = "[Checkout] Verify Address Fail";
    constructor(payload: any);
}
export declare class VerifyAddressSuccess implements Action {
    payload: AddressValidation;
    readonly type = "[Checkout] Verify Address Success";
    constructor(payload: AddressValidation);
}
export declare class ClearAddressVerificationResults implements Action {
    readonly type = "[Checkout] Clear Address Verification Results";
    constructor();
}
export declare type AddressVerificationActions = VerifyAddress | VerifyAddressFail | VerifyAddressSuccess | ClearAddressVerificationResults;
