import { CardType } from '../../../model/cart.model';
import { CheckoutActions } from '../actions/index';
import { CardTypesState } from '../checkout-state';
export declare const initialState: CardTypesState;
export declare function reducer(state: CardTypesState, action: CheckoutActions.CardTypesAction | CheckoutActions.CheckoutClearMiscsData): CardTypesState;
export declare const getCardTypesEntites: (state: CardTypesState) => {
    [code: string]: CardType;
};
