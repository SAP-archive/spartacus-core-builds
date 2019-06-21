import { MemoizedSelector } from '@ngrx/store';
import { UserState, StateWithUser } from '../user-state';
export declare const getUserState: MemoizedSelector<StateWithUser, UserState>;
