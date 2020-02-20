import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { AuthActions } from '../../auth/store/actions';
import { OCC_USER_ID_CURRENT } from '../../occ/utils/occ-constants';
import { AsmActions } from '../store/actions/index';
import { AsmSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
let AsmAuthService = class AsmAuthService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Loads a user token for a customer support agent
     * @param userId
     * @param password
     */
    authorizeCustomerSupportAgent(userId, password) {
        this.store.dispatch(new AsmActions.LoadCustomerSupportAgentToken({
            userId: userId,
            password: password,
        }));
    }
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param customerSupportAgentToken
     * @param customerId
     */
    startCustomerEmulationSession(customerSupportAgentToken, customerId) {
        this.authService.authorizeWithToken(Object.assign(Object.assign({}, customerSupportAgentToken), { userId: customerId }));
    }
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param userToken
     */
    isCustomerEmulationToken(userToken) {
        return (Boolean(userToken) &&
            Boolean(userToken.userId) &&
            userToken.userId !== OCC_USER_ID_CURRENT);
    }
    /**
     * Returns the customer support agent's token
     */
    getCustomerSupportAgentToken() {
        return this.store.pipe(select(AsmSelectors.getCustomerSupportAgentToken));
    }
    /**
     * Returns the customer support agent's token loading status
     */
    getCustomerSupportAgentTokenLoading() {
        return this.store.pipe(select(AsmSelectors.getCustomerSupportAgentTokenLoading));
    }
    /**
     * Logout a customer support agent
     */
    logoutCustomerSupportAgent() {
        this.getCustomerSupportAgentToken()
            .pipe(take(1))
            .subscribe(userToken => {
            this.store.dispatch(new AsmActions.LogoutCustomerSupportAgent());
            this.store.dispatch(new AuthActions.RevokeUserToken(userToken));
        });
    }
};
AsmAuthService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
AsmAuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmAuthService_Factory() { return new AsmAuthService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: AsmAuthService, providedIn: "root" });
AsmAuthService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AsmAuthService);
export { AsmAuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vZmFjYWRlL2FzbS1hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUt4RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBQ3pCLFlBQ1ksS0FBMEIsRUFDMUIsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOzs7O09BSUc7SUFDSCw2QkFBNkIsQ0FBQyxNQUFjLEVBQUUsUUFBZ0I7UUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksVUFBVSxDQUFDLDZCQUE2QixDQUFDO1lBQzNDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSw2QkFBNkIsQ0FDbEMseUJBQW9DLEVBQ3BDLFVBQWtCO1FBRWxCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlDQUM5Qix5QkFBeUIsS0FDNUIsTUFBTSxFQUFFLFVBQVUsSUFDbEIsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3QkFBd0IsQ0FBQyxTQUFvQjtRQUMzQyxPQUFPLENBQ0wsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNsQixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUN6QixTQUFTLENBQUMsTUFBTSxLQUFLLG1CQUFtQixDQUN6QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsNEJBQTRCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsbUNBQW1DO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsbUNBQW1DLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILDBCQUEwQjtRQUN4QixJQUFJLENBQUMsNEJBQTRCLEVBQUU7YUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YsQ0FBQTs7WUF6RW9CLEtBQUs7WUFDQyxXQUFXOzs7QUFIekIsY0FBYztJQUgxQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csY0FBYyxDQTJFMUI7U0EzRVksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vYXV0aC9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IEFzbUFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aEFzbSB9IGZyb20gJy4uL3N0b3JlL2FzbS1zdGF0ZSc7XG5pbXBvcnQgeyBBc21TZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEFzbT4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgdXNlciB0b2tlbiBmb3IgYSBjdXN0b21lciBzdXBwb3J0IGFnZW50XG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAqL1xuICBhdXRob3JpemVDdXN0b21lclN1cHBvcnRBZ2VudCh1c2VySWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQXNtQWN0aW9ucy5Mb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbih7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGFuIEFTTSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbi5cbiAgICogQSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiBpcyBzdG9wZWQgYnkgY2FsbGluZyBsb2dvdXQoKS5cbiAgICogQHBhcmFtIGN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5cbiAgICogQHBhcmFtIGN1c3RvbWVySWRcbiAgICovXG4gIHB1YmxpYyBzdGFydEN1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbihcbiAgICBjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuOiBVc2VyVG9rZW4sXG4gICAgY3VzdG9tZXJJZDogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuYXV0aG9yaXplV2l0aFRva2VuKHtcbiAgICAgIC4uLmN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4sXG4gICAgICB1c2VySWQ6IGN1c3RvbWVySWQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgYSBnaXZlbiB0b2tlbiBpcyBhIGN1c3RvbWVyIGVtdWxhdGlvbiBzZXNzaW9uIHRva2VuLlxuICAgKiBAcGFyYW0gdXNlclRva2VuXG4gICAqL1xuICBpc0N1c3RvbWVyRW11bGF0aW9uVG9rZW4odXNlclRva2VuOiBVc2VyVG9rZW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbih1c2VyVG9rZW4pICYmXG4gICAgICBCb29sZWFuKHVzZXJUb2tlbi51c2VySWQpICYmXG4gICAgICB1c2VyVG9rZW4udXNlcklkICE9PSBPQ0NfVVNFUl9JRF9DVVJSRU5UXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzdXBwb3J0IGFnZW50J3MgdG9rZW5cbiAgICovXG4gIGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChBc21TZWxlY3RvcnMuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnQncyB0b2tlbiBsb2FkaW5nIHN0YXR1c1xuICAgKi9cbiAgZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBc21TZWxlY3RvcnMuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkxvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgYSBjdXN0b21lciBzdXBwb3J0IGFnZW50XG4gICAqL1xuICBsb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4oKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUodXNlclRva2VuID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXNtQWN0aW9ucy5Mb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpKTtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuUmV2b2tlVXNlclRva2VuKHVzZXJUb2tlbikpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==