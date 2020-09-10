import { MemoizedSelector } from '@ngrx/store';
import { PaymentType } from '../../../model/cart.model';
import { PaymentTypesState, StateWithCheckout } from '../checkout-state';
export declare const getPaymentTypesState: MemoizedSelector<StateWithCheckout, PaymentTypesState>;
export declare const getPaymentTypesEntites: MemoizedSelector<StateWithCheckout, {
    [code: string]: PaymentType;
}>;
export declare const getAllPaymentTypes: MemoizedSelector<StateWithCheckout, PaymentType[]>;
export declare const getSelectedPaymentType: MemoizedSelector<StateWithCheckout, string>;
