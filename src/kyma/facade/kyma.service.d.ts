import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OpenIdToken } from '../models/kyma-token-types.model';
import { StateWithKyma } from '../store/kyma-state';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<KymaService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImt5bWEuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFjQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3BlbklkVG9rZW4gfSBmcm9tICcuLi9tb2RlbHMva3ltYS10b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhLeW1hIH0gZnJvbSAnLi4vc3RvcmUva3ltYS1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBLeW1hU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhLeW1hPjtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoS3ltYT4pO1xuICAgIC8qKlxuICAgICAqIEF1dGhvcml6ZXMgdXNpbmcgdGhlIEt5bWEgT0F1dGggY2xpZW50IHdpdGggc2NvcGUgYG9wZW5pZGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlcm5hbWUgYSB1c2VybmFtZVxuICAgICAqIEBwYXJhbSBwYXNzd29yZCBhIHBhc3N3b3JkXG4gICAgICovXG4gICAgYXV0aG9yaXplT3BlbklkKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGBPcGVuSWRUb2tlbmAsIHdoaWNoIHdhcyBwcmV2aW91c2x5IHJldHJpZXZlZCB1c2luZyBgYXV0aG9yaXplT3BlbklkYCBtZXRob2QuXG4gICAgICovXG4gICAgZ2V0T3BlbklkVG9rZW4oKTogT2JzZXJ2YWJsZTxPcGVuSWRUb2tlbj47XG59XG4iXX0=