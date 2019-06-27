import { UserActions } from '../actions/index';
import { BillingCountriesState } from '../user-state';
export declare const initialState: BillingCountriesState;
export declare function reducer(state: BillingCountriesState, action: UserActions.BillingCountriesAction | UserActions.ClearUserMiscsData): BillingCountriesState;
