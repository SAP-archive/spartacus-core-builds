import { MemoizedSelector } from '@ngrx/store';
import { User } from '../../../model/misc.model';
import { StateWithUser, UserDetailsState } from '../user-state';
export declare const getDetailsState: MemoizedSelector<StateWithUser, UserDetailsState>;
export declare const getDetails: MemoizedSelector<StateWithUser, User>;
