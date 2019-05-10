import { MemoizedSelector } from '@ngrx/store';
import { StateWithSiteContext, CurrenciesState, CurrencyEntities } from '../state';
import { Currency } from '../../../model/misc.model';
export declare const getCurrenciesState: MemoizedSelector<StateWithSiteContext, CurrenciesState>;
export declare const getCurrenciesEntities: MemoizedSelector<StateWithSiteContext, CurrencyEntities>;
export declare const getActiveCurrency: MemoizedSelector<StateWithSiteContext, string>;
export declare const getAllCurrencies: MemoizedSelector<StateWithSiteContext, Currency[]>;
