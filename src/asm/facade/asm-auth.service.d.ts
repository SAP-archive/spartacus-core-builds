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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmAuthService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGguc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhc20tYXV0aC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL2F1dGgvbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aEFzbSB9IGZyb20gJy4uL3N0b3JlL2FzbS1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBc21BdXRoU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBc20+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEFzbT4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogTG9hZHMgYSB1c2VyIHRva2VuIGZvciBhIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnRcbiAgICAgKiBAcGFyYW0gdXNlcklkXG4gICAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAgICovXG4gICAgYXV0aG9yaXplQ3VzdG9tZXJTdXBwb3J0QWdlbnQodXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBhbiBBU00gY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24uXG4gICAgICogQSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiBpcyBzdG9wZWQgYnkgY2FsbGluZyBsb2dvdXQoKS5cbiAgICAgKiBAcGFyYW0gY3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlblxuICAgICAqIEBwYXJhbSBjdXN0b21lcklkXG4gICAgICovXG4gICAgc3RhcnRDdXN0b21lckVtdWxhdGlvblNlc3Npb24oY3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbjogVXNlclRva2VuLCBjdXN0b21lcklkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGEgZ2l2ZW4gdG9rZW4gaXMgYSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiB0b2tlbi5cbiAgICAgKiBAcGFyYW0gdXNlclRva2VuXG4gICAgICovXG4gICAgaXNDdXN0b21lckVtdWxhdGlvblRva2VuKHVzZXJUb2tlbjogVXNlclRva2VuKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzdXBwb3J0IGFnZW50J3MgdG9rZW5cbiAgICAgKi9cbiAgICBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKCk6IE9ic2VydmFibGU8VXNlclRva2VuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzdXBwb3J0IGFnZW50J3MgdG9rZW4gbG9hZGluZyBzdGF0dXNcbiAgICAgKi9cbiAgICBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIExvZ291dCBhIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnRcbiAgICAgKi9cbiAgICBsb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpOiB2b2lkO1xufVxuIl19