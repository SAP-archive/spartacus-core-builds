import { MemoizedSelector } from '@ngrx/store';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { ClientToken } from '../../models/token-types.model';
import { StateWithAuth } from '../auth-state';
export declare const getClientTokenState: MemoizedSelector<StateWithAuth, LoaderState<ClientToken>>;
