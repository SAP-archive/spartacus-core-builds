import { MemoizedSelector } from '@ngrx/store';
import { CheckoutState, AddressVerificationState } from '../checkout-state';
import { AddressValidation } from '../../../occ/occ-models/occ.models';
export declare const getAddressVerificationResultsState: MemoizedSelector<CheckoutState, AddressVerificationState>;
export declare const getAddressVerificationResults: MemoizedSelector<CheckoutState, string | AddressValidation>;
