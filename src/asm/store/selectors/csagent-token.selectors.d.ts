import { MemoizedSelector } from '@ngrx/store';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { UserToken } from '../../../auth/models/token-types.model';
import { StateWithAsm } from '../asm-state';
export declare const getCustomerSupportAgentTokenState: MemoizedSelector<StateWithAsm, LoaderState<UserToken>>;
export declare const getCustomerSupportAgentToken: MemoizedSelector<StateWithAsm, UserToken>;
export declare const getCustomerSupportAgentTokenLoading: MemoizedSelector<StateWithAsm, boolean>;
