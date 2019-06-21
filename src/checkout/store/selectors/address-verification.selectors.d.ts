import { MemoizedSelector } from '@ngrx/store';
import { AddressVerificationState, StateWithCheckout } from '../checkout-state';
import { AddressValidation } from '../../../model/address.model';
export declare const getAddressVerificationResultsState: MemoizedSelector<StateWithCheckout, AddressVerificationState>;
export declare const getAddressVerificationResults: MemoizedSelector<StateWithCheckout, string | AddressValidation>;
