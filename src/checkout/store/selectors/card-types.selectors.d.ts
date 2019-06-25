import { MemoizedSelector } from '@ngrx/store';
import { CardType } from '../../../model/cart.model';
import { CardTypesState, StateWithCheckout } from '../checkout-state';
export declare const getCardTypesState: MemoizedSelector<StateWithCheckout, CardTypesState>;
export declare const getCardTypesEntites: MemoizedSelector<StateWithCheckout, {
    [code: string]: CardType;
}>;
export declare const getAllCardTypes: MemoizedSelector<StateWithCheckout, CardType[]>;
