/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { OCC_USER_ID_CURRENT } from '../../occ/utils/occ-constants';
import { AuthService } from '../../auth/facade/auth.service';
import { AsmSelectors } from '../store/selectors/index';
import { AsmActions } from '../store/actions/index';
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
        this.store.dispatch(new AsmActions.LogoutCustomerSupportAgent());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vZmFjYWRlL2FzbS1hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLcEQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ3pCLFlBQ1ksS0FBMEIsRUFDMUIsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQzs7Ozs7OztJQU9KLDZCQUE2QixDQUFDLE1BQWMsRUFBRSxRQUFnQjtRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxVQUFVLENBQUMsNkJBQTZCLENBQUM7WUFDM0MsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBUU0sNkJBQTZCLENBQ2xDLHlCQUFvQyxFQUNwQyxVQUFrQjtRQUVsQixJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixtQkFDOUIseUJBQXlCLElBQzVCLE1BQU0sRUFBRSxVQUFVLElBQ2xCLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFNRCx3QkFBd0IsQ0FBQyxTQUFvQjtRQUMzQyxPQUFPLENBQ0wsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNsQixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUN6QixTQUFTLENBQUMsTUFBTSxLQUFLLG1CQUFtQixDQUN6QyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCw0QkFBNEI7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUtELG1DQUFtQztRQUNqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLG1DQUFtQyxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDOzs7OztJQUtELDBCQUEwQjtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBeEVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVhnQixLQUFLO1lBSWIsV0FBVzs7Ozs7Ozs7SUFVaEIsK0JBQW9DOzs7OztJQUNwQyxxQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL2F1dGgvbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEFzbVNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBc20gfSBmcm9tICcuLi9zdG9yZS9hc20tc3RhdGUnO1xuaW1wb3J0IHsgQXNtQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEFzbT4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgdXNlciB0b2tlbiBmb3IgYSBjdXN0b21lciBzdXBwb3J0IGFnZW50XG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAqL1xuICBhdXRob3JpemVDdXN0b21lclN1cHBvcnRBZ2VudCh1c2VySWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQXNtQWN0aW9ucy5Mb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbih7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGFuIEFTTSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbi5cbiAgICogQSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiBpcyBzdG9wZWQgYnkgY2FsbGluZyBsb2dvdXQoKS5cbiAgICogQHBhcmFtIGN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5cbiAgICogQHBhcmFtIGN1c3RvbWVySWRcbiAgICovXG4gIHB1YmxpYyBzdGFydEN1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbihcbiAgICBjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuOiBVc2VyVG9rZW4sXG4gICAgY3VzdG9tZXJJZDogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuYXV0aG9yaXplV2l0aFRva2VuKHtcbiAgICAgIC4uLmN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4sXG4gICAgICB1c2VySWQ6IGN1c3RvbWVySWQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgYSBnaXZlbiB0b2tlbiBpcyBhIGN1c3RvbWVyIGVtdWxhdGlvbiBzZXNzaW9uIHRva2VuLlxuICAgKiBAcGFyYW0gdXNlclRva2VuXG4gICAqL1xuICBpc0N1c3RvbWVyRW11bGF0aW9uVG9rZW4odXNlclRva2VuOiBVc2VyVG9rZW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbih1c2VyVG9rZW4pICYmXG4gICAgICBCb29sZWFuKHVzZXJUb2tlbi51c2VySWQpICYmXG4gICAgICB1c2VyVG9rZW4udXNlcklkICE9PSBPQ0NfVVNFUl9JRF9DVVJSRU5UXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzdXBwb3J0IGFnZW50J3MgdG9rZW5cbiAgICovXG4gIGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChBc21TZWxlY3RvcnMuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnQncyB0b2tlbiBsb2FkaW5nIHN0YXR1c1xuICAgKi9cbiAgZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBc21TZWxlY3RvcnMuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkxvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgYSBjdXN0b21lciBzdXBwb3J0IGFnZW50XG4gICAqL1xuICBsb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBc21BY3Rpb25zLkxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCkpO1xuICB9XG59XG4iXX0=