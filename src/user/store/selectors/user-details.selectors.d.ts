import { MemoizedSelector } from '@ngrx/store';
import { User } from '../../../occ/occ-models/index';
import { StateWithUser, UserDetailsState } from '../user-state';
export declare const getDetailsState: MemoizedSelector<StateWithUser, UserDetailsState>;
export declare const getDetails: MemoizedSelector<StateWithUser, User>;
