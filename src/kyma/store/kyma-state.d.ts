import { LoaderState } from '../../state/utils/loader/loader-state';
import { OpenIdToken } from '../models/kyma-token-types.model';
export declare const KYMA_FEATURE = "kyma";
export declare const OPEN_ID_TOKEN_DATA = "[Kyma Auth] Open ID Token Data";
export interface StateWithKyma {
    [KYMA_FEATURE]: KymaState;
}
export interface KymaState {
    openIdToken: LoaderState<OpenIdToken>;
}
