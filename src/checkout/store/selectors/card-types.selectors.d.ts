import { MemoizedSelector } from '@ngrx/store';
import { CardTypesState, StateWithCheckout } from '../checkout-state';
import { CardType } from '../../../occ/occ-models/index';
export declare const getCardTypesState: MemoizedSelector<StateWithCheckout, CardTypesState>;
export declare const getCardTypesEntites: MemoizedSelector<StateWithCheckout, {
    [code: string]: CardType;
}>;
export declare const getAllCardTypes: MemoizedSelector<StateWithCheckout, CardType[]>;
