import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { queueScheduler } from 'rxjs';
import { filter, map, observeOn, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
export class UserCostCenterService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Load all visible active cost centers for the currently login user
     */
    loadActiveCostCenters() {
        this.authService.invokeWithUserId((userId) => {
            if (userId && userId !== OCC_USER_ID_ANONYMOUS) {
                this.store.dispatch(new UserActions.LoadActiveCostCenters(userId));
            }
        });
    }
    getCostCentersState() {
        return this.store.select(UsersSelectors.getCostCentersState);
    }
    /**
     * Get all visible active cost centers
     */
    getActiveCostCenters() {
        return this.getCostCentersState().pipe(observeOn(queueScheduler), tap((process) => {
            if (!(process.loading || process.success || process.error)) {
                this.loadActiveCostCenters();
            }
        }), filter((process) => process.success || process.error), map((result) => result.value));
    }
    /**
     * Get the addresses of the cost center's unit based on cost center id
     * @param costCenterId cost center id
     */
    getCostCenterAddresses(costCenterId) {
        return this.getActiveCostCenters().pipe(map((costCenters) => {
            const costCenter = costCenters.find((cc) => cc.code === costCenterId);
            if (costCenter && costCenter.unit) {
                return costCenter.unit.addresses;
            }
            else {
                return [];
            }
        }));
    }
}
UserCostCenterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserCostCenterService_Factory() { return new UserCostCenterService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserCostCenterService, providedIn: "root" });
UserCostCenterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
UserCostCenterService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvdXNlci9mYWNhZGUvdXNlci1jb3N0LWNlbnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWMsY0FBYyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQU0xRCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQ1ksS0FBb0QsRUFDcEQsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOztPQUVHO0lBQ0gscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sSUFBSSxNQUFNLEtBQUsscUJBQXFCLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDcEU7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxtQkFBbUI7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQ3BDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFDekIsR0FBRyxDQUFDLENBQUMsT0FBa0MsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUNKLENBQUMsT0FBa0MsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUN6RSxFQUNELEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILHNCQUFzQixDQUFDLFlBQW9CO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQixNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDO1lBQ3RFLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O1lBekRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBZlEsS0FBSztZQUdMLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHF1ZXVlU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgb2JzZXJ2ZU9uLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBDb3N0Q2VudGVyIH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JnLXVuaXQubW9kZWwnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb3N0Q2VudGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkIGFsbCB2aXNpYmxlIGFjdGl2ZSBjb3N0IGNlbnRlcnMgZm9yIHRoZSBjdXJyZW50bHkgbG9naW4gdXNlclxuICAgKi9cbiAgbG9hZEFjdGl2ZUNvc3RDZW50ZXJzKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICBpZiAodXNlcklkICYmIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRBY3RpdmVDb3N0Q2VudGVycyh1c2VySWQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29zdENlbnRlcnNTdGF0ZSgpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPENvc3RDZW50ZXJbXT4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29zdENlbnRlcnNTdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB2aXNpYmxlIGFjdGl2ZSBjb3N0IGNlbnRlcnNcbiAgICovXG4gIGdldEFjdGl2ZUNvc3RDZW50ZXJzKCk6IE9ic2VydmFibGU8Q29zdENlbnRlcltdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29zdENlbnRlcnNTdGF0ZSgpLnBpcGUoXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpLFxuICAgICAgdGFwKChwcm9jZXNzOiBMb2FkZXJTdGF0ZTxDb3N0Q2VudGVyW10+KSA9PiB7XG4gICAgICAgIGlmICghKHByb2Nlc3MubG9hZGluZyB8fCBwcm9jZXNzLnN1Y2Nlc3MgfHwgcHJvY2Vzcy5lcnJvcikpIHtcbiAgICAgICAgICB0aGlzLmxvYWRBY3RpdmVDb3N0Q2VudGVycygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKHByb2Nlc3M6IExvYWRlclN0YXRlPENvc3RDZW50ZXJbXT4pID0+IHByb2Nlc3Muc3VjY2VzcyB8fCBwcm9jZXNzLmVycm9yXG4gICAgICApLFxuICAgICAgbWFwKChyZXN1bHQpID0+IHJlc3VsdC52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYWRkcmVzc2VzIG9mIHRoZSBjb3N0IGNlbnRlcidzIHVuaXQgYmFzZWQgb24gY29zdCBjZW50ZXIgaWRcbiAgICogQHBhcmFtIGNvc3RDZW50ZXJJZCBjb3N0IGNlbnRlciBpZFxuICAgKi9cbiAgZ2V0Q29zdENlbnRlckFkZHJlc3Nlcyhjb3N0Q2VudGVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlQ29zdENlbnRlcnMoKS5waXBlKFxuICAgICAgbWFwKChjb3N0Q2VudGVycykgPT4ge1xuICAgICAgICBjb25zdCBjb3N0Q2VudGVyID0gY29zdENlbnRlcnMuZmluZCgoY2MpID0+IGNjLmNvZGUgPT09IGNvc3RDZW50ZXJJZCk7XG4gICAgICAgIGlmIChjb3N0Q2VudGVyICYmIGNvc3RDZW50ZXIudW5pdCkge1xuICAgICAgICAgIHJldHVybiBjb3N0Q2VudGVyLnVuaXQuYWRkcmVzc2VzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=