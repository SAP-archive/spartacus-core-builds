import { UserActions } from '../actions/index';
import { TitlesState } from '../user-state';
export declare const initialState: TitlesState;
export declare function reducer(state: TitlesState, action: UserActions.TitlesAction | UserActions.ClearUserMiscsData): TitlesState;
