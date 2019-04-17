import { BillingCountriesState } from '../user-state';
import * as fromAction from '../actions/billing-countries.action';
import { ClearMiscsData } from '../actions/index';
export declare const initialState: BillingCountriesState;
export declare function reducer(state: BillingCountriesState, action: fromAction.BillingCountriesAction | ClearMiscsData): BillingCountriesState;
