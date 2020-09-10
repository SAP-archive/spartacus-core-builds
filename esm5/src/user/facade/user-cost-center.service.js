import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { queueScheduler } from 'rxjs';
import { filter, map, observeOn, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
var UserCostCenterService = /** @class */ (function () {
    function UserCostCenterService(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Load all visible active cost centers for the currently login user
     */
    UserCostCenterService.prototype.loadActiveCostCenters = function () {
        var _this = this;
        this.authService.invokeWithUserId(function (userId) {
            if (userId && userId !== OCC_USER_ID_ANONYMOUS) {
                _this.store.dispatch(new UserActions.LoadActiveCostCenters(userId));
            }
        });
    };
    UserCostCenterService.prototype.getCostCentersState = function () {
        return this.store.select(UsersSelectors.getCostCentersState);
    };
    /**
     * Get all visible active cost centers
     */
    UserCostCenterService.prototype.getActiveCostCenters = function () {
        var _this = this;
        return this.getCostCentersState().pipe(observeOn(queueScheduler), tap(function (process) {
            if (!(process.loading || process.success || process.error)) {
                _this.loadActiveCostCenters();
            }
        }), filter(function (process) { return process.success || process.error; }), map(function (result) { return result.value; }));
    };
    /**
     * Get the addresses of the cost center's unit based on cost center id
     * @param costCenterId cost center id
     */
    UserCostCenterService.prototype.getCostCenterAddresses = function (costCenterId) {
        return this.getActiveCostCenters().pipe(map(function (costCenters) {
            var costCenter = costCenters.find(function (cc) { return cc.code === costCenterId; });
            if (costCenter && costCenter.unit) {
                return costCenter.unit.addresses;
            }
            else {
                return [];
            }
        }));
    };
    UserCostCenterService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    UserCostCenterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserCostCenterService_Factory() { return new UserCostCenterService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserCostCenterService, providedIn: "root" });
    UserCostCenterService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserCostCenterService);
    return UserCostCenterService;
}());
export { UserCostCenterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItY29zdC1jZW50ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBYyxjQUFjLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBS3RFO0lBQ0UsK0JBQ1ksS0FBb0QsRUFDcEQsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOztPQUVHO0lBQ0gscURBQXFCLEdBQXJCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFVBQUMsTUFBTTtZQUN2QyxJQUFJLE1BQU0sSUFBSSxNQUFNLEtBQUsscUJBQXFCLEVBQUU7Z0JBQzlDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDcEU7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxtREFBbUIsR0FBM0I7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7T0FFRztJQUNILG9EQUFvQixHQUFwQjtRQUFBLGlCQWFDO1FBWkMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQ3BDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFDekIsR0FBRyxDQUFDLFVBQUMsT0FBa0M7WUFDckMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUQsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7YUFDOUI7UUFDSCxDQUFDLENBQUMsRUFDRixNQUFNLENBQ0osVUFBQyxPQUFrQyxJQUFLLE9BQUEsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFoQyxDQUFnQyxDQUN6RSxFQUNELEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVosQ0FBWSxDQUFDLENBQzlCLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsc0RBQXNCLEdBQXRCLFVBQXVCLFlBQW9CO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsVUFBQyxXQUFXO1lBQ2QsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEVBQUUsQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUF4QixDQUF3QixDQUFDLENBQUM7WUFDdEUsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLElBQUksRUFBRTtnQkFDakMsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXBEa0IsS0FBSztnQkFDQyxXQUFXOzs7SUFIekIscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxxQkFBcUIsQ0F1RGpDO2dDQXZFRDtDQXVFQyxBQXZERCxJQXVEQztTQXZEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHF1ZXVlU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgb2JzZXJ2ZU9uLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDb3N0Q2VudGVyLCBCMkJBZGRyZXNzIH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JnLXVuaXQubW9kZWwnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb3N0Q2VudGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkIGFsbCB2aXNpYmxlIGFjdGl2ZSBjb3N0IGNlbnRlcnMgZm9yIHRoZSBjdXJyZW50bHkgbG9naW4gdXNlclxuICAgKi9cbiAgbG9hZEFjdGl2ZUNvc3RDZW50ZXJzKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICBpZiAodXNlcklkICYmIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRBY3RpdmVDb3N0Q2VudGVycyh1c2VySWQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29zdENlbnRlcnNTdGF0ZSgpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPENvc3RDZW50ZXJbXT4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29zdENlbnRlcnNTdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB2aXNpYmxlIGFjdGl2ZSBjb3N0IGNlbnRlcnNcbiAgICovXG4gIGdldEFjdGl2ZUNvc3RDZW50ZXJzKCk6IE9ic2VydmFibGU8Q29zdENlbnRlcltdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29zdENlbnRlcnNTdGF0ZSgpLnBpcGUoXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpLFxuICAgICAgdGFwKChwcm9jZXNzOiBMb2FkZXJTdGF0ZTxDb3N0Q2VudGVyW10+KSA9PiB7XG4gICAgICAgIGlmICghKHByb2Nlc3MubG9hZGluZyB8fCBwcm9jZXNzLnN1Y2Nlc3MgfHwgcHJvY2Vzcy5lcnJvcikpIHtcbiAgICAgICAgICB0aGlzLmxvYWRBY3RpdmVDb3N0Q2VudGVycygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKHByb2Nlc3M6IExvYWRlclN0YXRlPENvc3RDZW50ZXJbXT4pID0+IHByb2Nlc3Muc3VjY2VzcyB8fCBwcm9jZXNzLmVycm9yXG4gICAgICApLFxuICAgICAgbWFwKChyZXN1bHQpID0+IHJlc3VsdC52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYWRkcmVzc2VzIG9mIHRoZSBjb3N0IGNlbnRlcidzIHVuaXQgYmFzZWQgb24gY29zdCBjZW50ZXIgaWRcbiAgICogQHBhcmFtIGNvc3RDZW50ZXJJZCBjb3N0IGNlbnRlciBpZFxuICAgKi9cbiAgZ2V0Q29zdENlbnRlckFkZHJlc3Nlcyhjb3N0Q2VudGVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QjJCQWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlQ29zdENlbnRlcnMoKS5waXBlKFxuICAgICAgbWFwKChjb3N0Q2VudGVycykgPT4ge1xuICAgICAgICBjb25zdCBjb3N0Q2VudGVyID0gY29zdENlbnRlcnMuZmluZCgoY2MpID0+IGNjLmNvZGUgPT09IGNvc3RDZW50ZXJJZCk7XG4gICAgICAgIGlmIChjb3N0Q2VudGVyICYmIGNvc3RDZW50ZXIudW5pdCkge1xuICAgICAgICAgIHJldHVybiBjb3N0Q2VudGVyLnVuaXQuYWRkcmVzc2VzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=