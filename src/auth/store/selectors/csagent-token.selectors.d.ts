import { MemoizedSelector } from '@ngrx/store';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { UserToken } from '../../models/token-types.model';
import { StateWithAuth } from '../auth-state';
export declare const getCustomerSupportAgentTokenState: MemoizedSelector<StateWithAuth, LoaderState<UserToken>>;
export declare const getCustomerSupportAgentToken: MemoizedSelector<StateWithAuth, UserToken>;
export declare const getCustomerSupportAgentTokenLoading: MemoizedSelector<StateWithAuth, boolean>;
