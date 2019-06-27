import { User } from '../../../model/misc.model';
import { UserActions } from '../actions/index';
export declare const initialState: User;
export declare function reducer(state: User, action: UserActions.UserDetailsAction | UserActions.EmailActions): User;
