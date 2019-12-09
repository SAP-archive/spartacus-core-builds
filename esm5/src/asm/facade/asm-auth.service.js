/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { OCC_USER_ID_CURRENT } from '../../occ/utils/occ-constants';
import { AuthService } from '../../auth/facade/auth.service';
import { AsmSelectors } from '../store/selectors/index';
import { AsmActions } from '../store/actions/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
var AsmAuthService = /** @class */ (function () {
    function AsmAuthService(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Loads a user token for a customer support agent
     * @param userId
     * @param password
     */
    /**
     * Loads a user token for a customer support agent
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    AsmAuthService.prototype.authorizeCustomerSupportAgent = /**
     * Loads a user token for a customer support agent
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    function (userId, password) {
        this.store.dispatch(new AsmActions.LoadCustomerSupportAgentToken({
            userId: userId,
            password: password,
        }));
    };
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param customerSupportAgentToken
     * @param customerId
     */
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param {?} customerSupportAgentToken
     * @param {?} customerId
     * @return {?}
     */
    AsmAuthService.prototype.startCustomerEmulationSession = /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param {?} customerSupportAgentToken
     * @param {?} customerId
     * @return {?}
     */
    function (customerSupportAgentToken, customerId) {
        this.authService.authorizeWithToken(tslib_1.__assign({}, customerSupportAgentToken, { userId: customerId }));
    };
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param userToken
     */
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param {?} userToken
     * @return {?}
     */
    AsmAuthService.prototype.isCustomerEmulationToken = /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param {?} userToken
     * @return {?}
     */
    function (userToken) {
        return (Boolean(userToken) &&
            Boolean(userToken.userId) &&
            userToken.userId !== OCC_USER_ID_CURRENT);
    };
    /**
     * Returns the customer support agent's token
     */
    /**
     * Returns the customer support agent's token
     * @return {?}
     */
    AsmAuthService.prototype.getCustomerSupportAgentToken = /**
     * Returns the customer support agent's token
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AsmSelectors.getCustomerSupportAgentToken));
    };
    /**
     * Returns the customer support agent's token loading status
     */
    /**
     * Returns the customer support agent's token loading status
     * @return {?}
     */
    AsmAuthService.prototype.getCustomerSupportAgentTokenLoading = /**
     * Returns the customer support agent's token loading status
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AsmSelectors.getCustomerSupportAgentTokenLoading));
    };
    /**
     * Logout a customer support agent
     */
    /**
     * Logout a customer support agent
     * @return {?}
     */
    AsmAuthService.prototype.logoutCustomerSupportAgent = /**
     * Logout a customer support agent
     * @return {?}
     */
    function () {
        this.store.dispatch(new AsmActions.LogoutCustomerSupportAgent());
    };
    AsmAuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AsmAuthService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    /** @nocollapse */ AsmAuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmAuthService_Factory() { return new AsmAuthService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: AsmAuthService, providedIn: "root" });
    return AsmAuthService;
}());
export { AsmAuthService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vZmFjYWRlL2FzbS1hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRXBEO0lBSUUsd0JBQ1ksS0FBMEIsRUFDMUIsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOzs7O09BSUc7Ozs7Ozs7SUFDSCxzREFBNkI7Ozs7OztJQUE3QixVQUE4QixNQUFjLEVBQUUsUUFBZ0I7UUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksVUFBVSxDQUFDLDZCQUE2QixDQUFDO1lBQzNDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0ksc0RBQTZCOzs7Ozs7O0lBQXBDLFVBQ0UseUJBQW9DLEVBQ3BDLFVBQWtCO1FBRWxCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLHNCQUM5Qix5QkFBeUIsSUFDNUIsTUFBTSxFQUFFLFVBQVUsSUFDbEIsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGlEQUF3Qjs7Ozs7SUFBeEIsVUFBeUIsU0FBb0I7UUFDM0MsT0FBTyxDQUNMLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDbEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDekIsU0FBUyxDQUFDLE1BQU0sS0FBSyxtQkFBbUIsQ0FDekMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxxREFBNEI7Ozs7SUFBNUI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw0REFBbUM7Ozs7SUFBbkM7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLG1DQUFtQyxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsbURBQTBCOzs7O0lBQTFCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQXhFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVhnQixLQUFLO2dCQUliLFdBQVc7Ozt5QkFMcEI7Q0FtRkMsQUF6RUQsSUF5RUM7U0F0RVksY0FBYzs7Ozs7O0lBRXZCLCtCQUFvQzs7Ozs7SUFDcEMscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9hdXRoL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBc21TZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQXNtIH0gZnJvbSAnLi4vc3RvcmUvYXNtLXN0YXRlJztcbmltcG9ydCB7IEFzbUFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBc20+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIHVzZXIgdG9rZW4gZm9yIGEgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBwYXNzd29yZFxuICAgKi9cbiAgYXV0aG9yaXplQ3VzdG9tZXJTdXBwb3J0QWdlbnQodXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFzbUFjdGlvbnMuTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4oe1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhbiBBU00gY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24uXG4gICAqIEEgY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24gaXMgc3RvcGVkIGJ5IGNhbGxpbmcgbG9nb3V0KCkuXG4gICAqIEBwYXJhbSBjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuXG4gICAqIEBwYXJhbSBjdXN0b21lcklkXG4gICAqL1xuICBwdWJsaWMgc3RhcnRDdXN0b21lckVtdWxhdGlvblNlc3Npb24oXG4gICAgY3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbjogVXNlclRva2VuLFxuICAgIGN1c3RvbWVySWQ6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhvcml6ZVdpdGhUb2tlbih7XG4gICAgICAuLi5jdXN0b21lclN1cHBvcnRBZ2VudFRva2VuLFxuICAgICAgdXNlcklkOiBjdXN0b21lcklkLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGEgZ2l2ZW4gdG9rZW4gaXMgYSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiB0b2tlbi5cbiAgICogQHBhcmFtIHVzZXJUb2tlblxuICAgKi9cbiAgaXNDdXN0b21lckVtdWxhdGlvblRva2VuKHVzZXJUb2tlbjogVXNlclRva2VuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4odXNlclRva2VuKSAmJlxuICAgICAgQm9vbGVhbih1c2VyVG9rZW4udXNlcklkKSAmJlxuICAgICAgdXNlclRva2VuLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQ1VSUkVOVFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudCdzIHRva2VuXG4gICAqL1xuICBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKCk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQXNtU2VsZWN0b3JzLmdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzdXBwb3J0IGFnZW50J3MgdG9rZW4gbG9hZGluZyBzdGF0dXNcbiAgICovXG4gIGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5Mb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQXNtU2VsZWN0b3JzLmdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5Mb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0IGEgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudFxuICAgKi9cbiAgbG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXNtQWN0aW9ucy5Mb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpKTtcbiAgfVxufVxuIl19