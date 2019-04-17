import { MemoizedSelector } from '@ngrx/store';
import { CheckoutState, CardTypesState } from '../checkout-state';
import { CardType } from '../../../occ/occ-models/index';
export declare const getCardTypesState: MemoizedSelector<CheckoutState, CardTypesState>;
export declare const getCardTypesEntites: MemoizedSelector<CheckoutState, {
    [code: string]: CardType;
}>;
export declare const getAllCardTypes: MemoizedSelector<CheckoutState, CardType[]>;
