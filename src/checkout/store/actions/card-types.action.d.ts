import { Action } from '@ngrx/store';
import { CardType } from '../../../occ/occ-models/index';
export declare const LOAD_CARD_TYPES = "[Checkout] Load Card Types";
export declare const LOAD_CARD_TYPES_FAIL = "[Checkout] Load Card Fail";
export declare const LOAD_CARD_TYPES_SUCCESS = "[Checkout] Load Card Success";
export declare class LoadCardTypes implements Action {
    readonly type = "[Checkout] Load Card Types";
    constructor();
}
export declare class LoadCardTypesFail implements Action {
    payload: any;
    readonly type = "[Checkout] Load Card Fail";
    constructor(payload: any);
}
export declare class LoadCardTypesSuccess implements Action {
    payload: CardType[];
    readonly type = "[Checkout] Load Card Success";
    constructor(payload: CardType[]);
}
export declare type CardTypesAction = LoadCardTypes | LoadCardTypesFail | LoadCardTypesSuccess;
