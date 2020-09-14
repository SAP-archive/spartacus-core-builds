import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { UserToken } from '../../auth/models/token-types.model';
import { StateWithAsm } from '../store/asm-state';
import * as ɵngcc0 from '@angular/core';
export declare class AsmAuthService {
    protected store: Store<StateWithAsm>;
    protected authService: AuthService;
    constructor(store: Store<StateWithAsm>, authService: AuthService);
    /**
     * Loads a user token for a customer support agent
     * @param userId
     * @param password
     */
    authorizeCustomerSupportAgent(userId: string, password: string): void;
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param customerSupportAgentToken
     * @param customerId
     */
    startCustomerEmulationSession(customerSupportAgentToken: UserToken, customerId: string): void;
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param userToken
     */
    isCustomerEmulationToken(userToken: UserToken): boolean;
    /**
     * Returns the customer support agent's token
     */
    getCustomerSupportAgentToken(): Observable<UserToken>;
    /**
     * Returns the customer support agent's token loading status
     */
    getCustomerSupportAgentTokenLoading(): Observable<boolean>;
    /**
     * Logout a customer support agent
     */
    logoutCustomerSupportAgent(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmAuthService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGguc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhc20tYXV0aC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vYXV0aC9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQXNtIH0gZnJvbSAnLi4vc3RvcmUvYXNtLXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFzbUF1dGhTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEFzbT47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoQXNtPiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBMb2FkcyBhIHVzZXIgdG9rZW4gZm9yIGEgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudFxuICAgICAqIEBwYXJhbSB1c2VySWRcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICAgKi9cbiAgICBhdXRob3JpemVDdXN0b21lclN1cHBvcnRBZ2VudCh1c2VySWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU3RhcnRzIGFuIEFTTSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbi5cbiAgICAgKiBBIGN1c3RvbWVyIGVtdWxhdGlvbiBzZXNzaW9uIGlzIHN0b3BlZCBieSBjYWxsaW5nIGxvZ291dCgpLlxuICAgICAqIEBwYXJhbSBjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuXG4gICAgICogQHBhcmFtIGN1c3RvbWVySWRcbiAgICAgKi9cbiAgICBzdGFydEN1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbihjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuOiBVc2VyVG9rZW4sIGN1c3RvbWVySWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgYSBnaXZlbiB0b2tlbiBpcyBhIGN1c3RvbWVyIGVtdWxhdGlvbiBzZXNzaW9uIHRva2VuLlxuICAgICAqIEBwYXJhbSB1c2VyVG9rZW5cbiAgICAgKi9cbiAgICBpc0N1c3RvbWVyRW11bGF0aW9uVG9rZW4odXNlclRva2VuOiBVc2VyVG9rZW4pOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnQncyB0b2tlblxuICAgICAqL1xuICAgIGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnQncyB0b2tlbiBsb2FkaW5nIHN0YXR1c1xuICAgICAqL1xuICAgIGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5Mb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogTG9nb3V0IGEgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudFxuICAgICAqL1xuICAgIGxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCk6IHZvaWQ7XG59XG4iXX0=