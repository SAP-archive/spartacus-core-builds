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
            .subscribe((userToken) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vZmFjYWRlL2FzbS1hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUt4RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBQ3pCLFlBQ1ksS0FBMEIsRUFDMUIsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOzs7O09BSUc7SUFDSCw2QkFBNkIsQ0FBQyxNQUFjLEVBQUUsUUFBZ0I7UUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksVUFBVSxDQUFDLDZCQUE2QixDQUFDO1lBQzNDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSw2QkFBNkIsQ0FDbEMseUJBQW9DLEVBQ3BDLFVBQWtCO1FBRWxCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlDQUM5Qix5QkFBeUIsS0FDNUIsTUFBTSxFQUFFLFVBQVUsSUFDbEIsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3QkFBd0IsQ0FBQyxTQUFvQjtRQUMzQyxPQUFPLENBQ0wsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNsQixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUN6QixTQUFTLENBQUMsTUFBTSxLQUFLLG1CQUFtQixDQUN6QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsNEJBQTRCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsbUNBQW1DO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsbUNBQW1DLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILDBCQUEwQjtRQUN4QixJQUFJLENBQUMsNEJBQTRCLEVBQUU7YUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRixDQUFBOztZQXpFb0IsS0FBSztZQUNDLFdBQVc7OztBQUh6QixjQUFjO0lBSDFCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxjQUFjLENBMkUxQjtTQTNFWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9hdXRoL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgQXNtQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQXNtIH0gZnJvbSAnLi4vc3RvcmUvYXNtLXN0YXRlJztcbmltcG9ydCB7IEFzbVNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21BdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQXNtPixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogTG9hZHMgYSB1c2VyIHRva2VuIGZvciBhIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnRcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICovXG4gIGF1dGhvcml6ZUN1c3RvbWVyU3VwcG9ydEFnZW50KHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBc21BY3Rpb25zLkxvYWRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKHtcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYW4gQVNNIGN1c3RvbWVyIGVtdWxhdGlvbiBzZXNzaW9uLlxuICAgKiBBIGN1c3RvbWVyIGVtdWxhdGlvbiBzZXNzaW9uIGlzIHN0b3BlZCBieSBjYWxsaW5nIGxvZ291dCgpLlxuICAgKiBAcGFyYW0gY3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlblxuICAgKiBAcGFyYW0gY3VzdG9tZXJJZFxuICAgKi9cbiAgcHVibGljIHN0YXJ0Q3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uKFxuICAgIGN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW46IFVzZXJUb2tlbixcbiAgICBjdXN0b21lcklkOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5hdXRob3JpemVXaXRoVG9rZW4oe1xuICAgICAgLi4uY3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbixcbiAgICAgIHVzZXJJZDogY3VzdG9tZXJJZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBhIGdpdmVuIHRva2VuIGlzIGEgY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24gdG9rZW4uXG4gICAqIEBwYXJhbSB1c2VyVG9rZW5cbiAgICovXG4gIGlzQ3VzdG9tZXJFbXVsYXRpb25Ub2tlbih1c2VyVG9rZW46IFVzZXJUb2tlbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBCb29sZWFuKHVzZXJUb2tlbikgJiZcbiAgICAgIEJvb2xlYW4odXNlclRva2VuLnVzZXJJZCkgJiZcbiAgICAgIHVzZXJUb2tlbi51c2VySWQgIT09IE9DQ19VU0VSX0lEX0NVUlJFTlRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnQncyB0b2tlblxuICAgKi9cbiAgZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbigpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KEFzbVNlbGVjdG9ycy5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudCdzIHRva2VuIGxvYWRpbmcgc3RhdHVzXG4gICAqL1xuICBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFzbVNlbGVjdG9ycy5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBhIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnRcbiAgICovXG4gIGxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbigpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgodXNlclRva2VuKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFzbUFjdGlvbnMuTG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQoKSk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLlJldm9rZVVzZXJUb2tlbih1c2VyVG9rZW4pKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=