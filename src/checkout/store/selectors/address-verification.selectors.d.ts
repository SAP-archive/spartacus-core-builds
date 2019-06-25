import { MemoizedSelector } from '@ngrx/store';
import { AddressValidation } from '../../../model/address.model';
import { AddressVerificationState, StateWithCheckout } from '../checkout-state';
export declare const getAddressVerificationResultsState: MemoizedSelector<StateWithCheckout, AddressVerificationState>;
export declare const getAddressVerificationResults: MemoizedSelector<StateWithCheckout, string | AddressValidation>;
