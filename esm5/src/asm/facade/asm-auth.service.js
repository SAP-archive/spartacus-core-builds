import { __assign, __decorate } from "tslib";
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
    AsmAuthService.prototype.authorizeCustomerSupportAgent = function (userId, password) {
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
    AsmAuthService.prototype.startCustomerEmulationSession = function (customerSupportAgentToken, customerId) {
        this.authService.authorizeWithToken(__assign(__assign({}, customerSupportAgentToken), { userId: customerId }));
    };
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param userToken
     */
    AsmAuthService.prototype.isCustomerEmulationToken = function (userToken) {
        return (Boolean(userToken) &&
            Boolean(userToken.userId) &&
            userToken.userId !== OCC_USER_ID_CURRENT);
    };
    /**
     * Returns the customer support agent's token
     */
    AsmAuthService.prototype.getCustomerSupportAgentToken = function () {
        return this.store.pipe(select(AsmSelectors.getCustomerSupportAgentToken));
    };
    /**
     * Returns the customer support agent's token loading status
     */
    AsmAuthService.prototype.getCustomerSupportAgentTokenLoading = function () {
        return this.store.pipe(select(AsmSelectors.getCustomerSupportAgentTokenLoading));
    };
    /**
     * Logout a customer support agent
     */
    AsmAuthService.prototype.logoutCustomerSupportAgent = function () {
        var _this = this;
        this.getCustomerSupportAgentToken()
            .pipe(take(1))
            .subscribe(function (userToken) {
            _this.store.dispatch(new AsmActions.LogoutCustomerSupportAgent());
            _this.store.dispatch(new AuthActions.RevokeUserToken(userToken));
        });
    };
    AsmAuthService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    AsmAuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmAuthService_Factory() { return new AsmAuthService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: AsmAuthService, providedIn: "root" });
    AsmAuthService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AsmAuthService);
    return AsmAuthService;
}());
export { AsmAuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vZmFjYWRlL2FzbS1hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUt4RDtJQUNFLHdCQUNZLEtBQTBCLEVBQzFCLFdBQXdCO1FBRHhCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2pDLENBQUM7SUFFSjs7OztPQUlHO0lBQ0gsc0RBQTZCLEdBQTdCLFVBQThCLE1BQWMsRUFBRSxRQUFnQjtRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxVQUFVLENBQUMsNkJBQTZCLENBQUM7WUFDM0MsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHNEQUE2QixHQUFwQyxVQUNFLHlCQUFvQyxFQUNwQyxVQUFrQjtRQUVsQixJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQix1QkFDOUIseUJBQXlCLEtBQzVCLE1BQU0sRUFBRSxVQUFVLElBQ2xCLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaURBQXdCLEdBQXhCLFVBQXlCLFNBQW9CO1FBQzNDLE9BQU8sQ0FDTCxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxNQUFNLEtBQUssbUJBQW1CLENBQ3pDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxREFBNEIsR0FBNUI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRDs7T0FFRztJQUNILDREQUFtQyxHQUFuQztRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsbUNBQW1DLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILG1EQUEwQixHQUExQjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLDRCQUE0QixFQUFFO2FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsVUFBQSxTQUFTO1lBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQztZQUNqRSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQXhFa0IsS0FBSztnQkFDQyxXQUFXOzs7SUFIekIsY0FBYztRQUgxQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csY0FBYyxDQTJFMUI7eUJBMUZEO0NBMEZDLEFBM0VELElBMkVDO1NBM0VZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL2F1dGgvbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBBc21BY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBc20gfSBmcm9tICcuLi9zdG9yZS9hc20tc3RhdGUnO1xuaW1wb3J0IHsgQXNtU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBc20+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIHVzZXIgdG9rZW4gZm9yIGEgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBwYXNzd29yZFxuICAgKi9cbiAgYXV0aG9yaXplQ3VzdG9tZXJTdXBwb3J0QWdlbnQodXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFzbUFjdGlvbnMuTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4oe1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhbiBBU00gY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24uXG4gICAqIEEgY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24gaXMgc3RvcGVkIGJ5IGNhbGxpbmcgbG9nb3V0KCkuXG4gICAqIEBwYXJhbSBjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuXG4gICAqIEBwYXJhbSBjdXN0b21lcklkXG4gICAqL1xuICBwdWJsaWMgc3RhcnRDdXN0b21lckVtdWxhdGlvblNlc3Npb24oXG4gICAgY3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbjogVXNlclRva2VuLFxuICAgIGN1c3RvbWVySWQ6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhvcml6ZVdpdGhUb2tlbih7XG4gICAgICAuLi5jdXN0b21lclN1cHBvcnRBZ2VudFRva2VuLFxuICAgICAgdXNlcklkOiBjdXN0b21lcklkLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGEgZ2l2ZW4gdG9rZW4gaXMgYSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiB0b2tlbi5cbiAgICogQHBhcmFtIHVzZXJUb2tlblxuICAgKi9cbiAgaXNDdXN0b21lckVtdWxhdGlvblRva2VuKHVzZXJUb2tlbjogVXNlclRva2VuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4odXNlclRva2VuKSAmJlxuICAgICAgQm9vbGVhbih1c2VyVG9rZW4udXNlcklkKSAmJlxuICAgICAgdXNlclRva2VuLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQ1VSUkVOVFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudCdzIHRva2VuXG4gICAqL1xuICBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKCk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQXNtU2VsZWN0b3JzLmdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzdXBwb3J0IGFnZW50J3MgdG9rZW4gbG9hZGluZyBzdGF0dXNcbiAgICovXG4gIGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5Mb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQXNtU2VsZWN0b3JzLmdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5Mb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0IGEgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudFxuICAgKi9cbiAgbG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHVzZXJUb2tlbiA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFzbUFjdGlvbnMuTG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQoKSk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLlJldm9rZVVzZXJUb2tlbih1c2VyVG9rZW4pKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=