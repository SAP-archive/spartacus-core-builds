import { MemoizedSelector } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { UserToken } from '../../../auth/models/token-types.model';
import { StateWithAsm } from '../asm-state';
export declare const getCustomerSupportAgentTokenState: MemoizedSelector<StateWithAsm, StateUtils.LoaderState<UserToken>>;
export declare const getCustomerSupportAgentToken: MemoizedSelector<StateWithAsm, UserToken>;
export declare const getCustomerSupportAgentTokenLoading: MemoizedSelector<StateWithAsm, boolean>;
