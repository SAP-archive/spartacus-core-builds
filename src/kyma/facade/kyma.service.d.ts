import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OpenIdToken } from '../models/kyma-token-types.model';
import { StateWithKyma } from '../store/kyma-state';
export declare class KymaService {
    protected store: Store<StateWithKyma>;
    constructor(store: Store<StateWithKyma>);
    /**
     * Authorizes using the Kyma OAuth client with scope `openid`.
     *
     * @param username a username
     * @param password a password
     */
    authorizeOpenId(username: string, password: string): void;
    /**
     * Returns the `OpenIdToken`, which was previously retrieved using `authorizeOpenId` method.
     */
    getOpenIdToken(): Observable<OpenIdToken>;
}
