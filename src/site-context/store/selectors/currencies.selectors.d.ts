import { MemoizedSelector } from '@ngrx/store';
import { Currency } from '../../../occ/occ-models/occ.models';
import { StateWithSiteContext, CurrenciesState, CurrencyEntities } from '../state';
export declare const getCurrenciesState: MemoizedSelector<StateWithSiteContext, CurrenciesState>;
export declare const getCurrenciesEntities: MemoizedSelector<StateWithSiteContext, CurrencyEntities>;
export declare const getActiveCurrency: MemoizedSelector<StateWithSiteContext, string>;
export declare const getAllCurrencies: MemoizedSelector<StateWithSiteContext, Currency[]>;
