import * as fromActions from '../actions/user-addresses.action';
import { Address } from '../../../model/address.model';
export declare const initialState: Address[];
export declare function reducer(state: Address[], action: fromActions.UserAddressesAction): Address[];
