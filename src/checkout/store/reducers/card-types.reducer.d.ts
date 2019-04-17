import { CardTypesState } from '../checkout-state';
import * as fromAction from '../actions/index';
import { CardType } from '../../../occ/occ-models/index';
export declare const initialState: CardTypesState;
export declare function reducer(state: CardTypesState, action: fromAction.CardTypesAction | fromAction.CheckoutMiscsDataAction): CardTypesState;
export declare const getCardTypesEntites: (state: CardTypesState) => {
    [code: string]: CardType;
};
