/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class AsmAuthService {
    /**
     * @param {?} store
     * @param {?} authService
     */
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Loads a user token for a customer support agent
     * @param {?} userId
     * @param {?} password
     * @return {?}
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
     * @param {?} customerSupportAgentToken
     * @param {?} customerId
     * @return {?}
     */
    startCustomerEmulationSession(customerSupportAgentToken, customerId) {
        this.authService.authorizeWithToken(Object.assign({}, customerSupportAgentToken, { userId: customerId }));
    }
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param {?} userToken
     * @return {?}
     */
    isCustomerEmulationToken(userToken) {
        return (Boolean(userToken) &&
            Boolean(userToken.userId) &&
            userToken.userId !== OCC_USER_ID_CURRENT);
    }
    /**
     * Returns the customer support agent's token
     * @return {?}
     */
    getCustomerSupportAgentToken() {
        return this.store.pipe(select(AsmSelectors.getCustomerSupportAgentToken));
    }
    /**
     * Returns the customer support agent's token loading status
     * @return {?}
     */
    getCustomerSupportAgentTokenLoading() {
        return this.store.pipe(select(AsmSelectors.getCustomerSupportAgentTokenLoading));
    }
    /**
     * Logout a customer support agent
     * @return {?}
     */
    logoutCustomerSupportAgent() {
        this.getCustomerSupportAgentToken()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} userToken
         * @return {?}
         */
        userToken => {
            this.store.dispatch(new AsmActions.LogoutCustomerSupportAgent());
            this.store.dispatch(new AuthActions.RevokeUserToken(userToken));
        }));
    }
}
AsmAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AsmAuthService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
/** @nocollapse */ AsmAuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmAuthService_Factory() { return new AsmAuthService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: AsmAuthService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AsmAuthService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    AsmAuthService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vZmFjYWRlL2FzbS1hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUt4RCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFDekIsWUFDWSxLQUEwQixFQUMxQixXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDOzs7Ozs7O0lBT0osNkJBQTZCLENBQUMsTUFBYyxFQUFFLFFBQWdCO1FBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQztZQUMzQyxNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFRTSw2QkFBNkIsQ0FDbEMseUJBQW9DLEVBQ3BDLFVBQWtCO1FBRWxCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLG1CQUM5Qix5QkFBeUIsSUFDNUIsTUFBTSxFQUFFLFVBQVUsSUFDbEIsQ0FBQztJQUNMLENBQUM7Ozs7OztJQU1ELHdCQUF3QixDQUFDLFNBQW9CO1FBQzNDLE9BQU8sQ0FDTCxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxNQUFNLEtBQUssbUJBQW1CLENBQ3pDLENBQUM7SUFDSixDQUFDOzs7OztJQUtELDRCQUE0QjtRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7O0lBS0QsbUNBQW1DO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsbUNBQW1DLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsMEJBQTBCO1FBQ3hCLElBQUksQ0FBQyw0QkFBNEIsRUFBRTthQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7OztZQTdFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFiZ0IsS0FBSztZQUdiLFdBQVc7Ozs7Ozs7O0lBYWhCLCtCQUFvQzs7Ozs7SUFDcEMscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9hdXRoL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgQXNtQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQXNtIH0gZnJvbSAnLi4vc3RvcmUvYXNtLXN0YXRlJztcbmltcG9ydCB7IEFzbVNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21BdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQXNtPixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogTG9hZHMgYSB1c2VyIHRva2VuIGZvciBhIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnRcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICovXG4gIGF1dGhvcml6ZUN1c3RvbWVyU3VwcG9ydEFnZW50KHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBc21BY3Rpb25zLkxvYWRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKHtcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYW4gQVNNIGN1c3RvbWVyIGVtdWxhdGlvbiBzZXNzaW9uLlxuICAgKiBBIGN1c3RvbWVyIGVtdWxhdGlvbiBzZXNzaW9uIGlzIHN0b3BlZCBieSBjYWxsaW5nIGxvZ291dCgpLlxuICAgKiBAcGFyYW0gY3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlblxuICAgKiBAcGFyYW0gY3VzdG9tZXJJZFxuICAgKi9cbiAgcHVibGljIHN0YXJ0Q3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uKFxuICAgIGN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW46IFVzZXJUb2tlbixcbiAgICBjdXN0b21lcklkOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5hdXRob3JpemVXaXRoVG9rZW4oe1xuICAgICAgLi4uY3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbixcbiAgICAgIHVzZXJJZDogY3VzdG9tZXJJZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBhIGdpdmVuIHRva2VuIGlzIGEgY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24gdG9rZW4uXG4gICAqIEBwYXJhbSB1c2VyVG9rZW5cbiAgICovXG4gIGlzQ3VzdG9tZXJFbXVsYXRpb25Ub2tlbih1c2VyVG9rZW46IFVzZXJUb2tlbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBCb29sZWFuKHVzZXJUb2tlbikgJiZcbiAgICAgIEJvb2xlYW4odXNlclRva2VuLnVzZXJJZCkgJiZcbiAgICAgIHVzZXJUb2tlbi51c2VySWQgIT09IE9DQ19VU0VSX0lEX0NVUlJFTlRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnQncyB0b2tlblxuICAgKi9cbiAgZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbigpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KEFzbVNlbGVjdG9ycy5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudCdzIHRva2VuIGxvYWRpbmcgc3RhdHVzXG4gICAqL1xuICBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEFzbVNlbGVjdG9ycy5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBhIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnRcbiAgICovXG4gIGxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbigpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSh1c2VyVG9rZW4gPT4ge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBc21BY3Rpb25zLkxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCkpO1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5SZXZva2VVc2VyVG9rZW4odXNlclRva2VuKSk7XG4gICAgICB9KTtcbiAgfVxufVxuIl19