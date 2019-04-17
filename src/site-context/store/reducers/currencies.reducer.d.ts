import * as fromCurrencies from '../actions/currencies.action';
import { CurrenciesState } from '../state';
export declare const initialState: CurrenciesState;
export declare function reducer(state: CurrenciesState, action: fromCurrencies.CurrenciesAction): CurrenciesState;
