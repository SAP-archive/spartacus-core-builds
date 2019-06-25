import { MemoizedSelector } from '@ngrx/store';
import { UserToken } from '../../models/token-types.model';
import { StateWithAuth, UserTokenState } from '../auth-state';
export declare const getUserTokenState: MemoizedSelector<StateWithAuth, UserTokenState>;
export declare const getUserToken: MemoizedSelector<StateWithAuth, UserToken>;
