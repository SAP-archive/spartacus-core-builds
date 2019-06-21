import { MemoizedSelector } from '@ngrx/store';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { StateWithAuth } from '../auth-state';
import { ClientToken } from '../../models/token-types.model';
export declare const getClientTokenState: MemoizedSelector<StateWithAuth, LoaderState<ClientToken>>;
