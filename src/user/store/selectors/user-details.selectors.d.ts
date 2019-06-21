import { MemoizedSelector } from '@ngrx/store';
import { StateWithUser, UserDetailsState } from '../user-state';
import { User } from '../../../model/misc.model';
export declare const getDetailsState: MemoizedSelector<StateWithUser, UserDetailsState>;
export declare const getDetails: MemoizedSelector<StateWithUser, User>;
