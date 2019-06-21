import * as fromUpdateEmailAction from '../actions/update-email.action';
import * as fromUserDetailsAction from '../actions/user-details.action';
import { User } from '../../../model/misc.model';
export declare const initialState: User;
export declare function reducer(state: User, action: fromUserDetailsAction.UserDetailsAction | fromUpdateEmailAction.EmailActions): User;
