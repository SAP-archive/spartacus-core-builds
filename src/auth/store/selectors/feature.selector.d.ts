import { MemoizedSelector } from '@ngrx/store';
import { AuthState, StateWithAuth } from '../auth-state';
export declare const getAuthState: MemoizedSelector<StateWithAuth, AuthState>;
