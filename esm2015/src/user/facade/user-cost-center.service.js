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
let UserCostCenterService = class UserCostCenterService {
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
};
UserCostCenterService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
UserCostCenterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserCostCenterService_Factory() { return new UserCostCenterService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserCostCenterService, providedIn: "root" });
UserCostCenterService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserCostCenterService);
export { UserCostCenterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItY29zdC1jZW50ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBYyxjQUFjLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBS3RFLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBQ2hDLFlBQ1ksS0FBb0QsRUFDcEQsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOztPQUVHO0lBQ0gscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sSUFBSSxNQUFNLEtBQUsscUJBQXFCLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDcEU7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxtQkFBbUI7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQ3BDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFDekIsR0FBRyxDQUFDLENBQUMsT0FBa0MsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUNKLENBQUMsT0FBa0MsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUN6RSxFQUNELEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILHNCQUFzQixDQUFDLFlBQW9CO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQixNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDO1lBQ3RFLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFyRG9CLEtBQUs7WUFDQyxXQUFXOzs7QUFIekIscUJBQXFCO0lBSGpDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxxQkFBcUIsQ0F1RGpDO1NBdkRZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgcXVldWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBvYnNlcnZlT24sIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENvc3RDZW50ZXIsIEIyQkFkZHJlc3MgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmctdW5pdC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckNvc3RDZW50ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIExvYWQgYWxsIHZpc2libGUgYWN0aXZlIGNvc3QgY2VudGVycyBmb3IgdGhlIGN1cnJlbnRseSBsb2dpbiB1c2VyXG4gICAqL1xuICBsb2FkQWN0aXZlQ29zdENlbnRlcnMoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIGlmICh1c2VySWQgJiYgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuTG9hZEFjdGl2ZUNvc3RDZW50ZXJzKHVzZXJJZCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3N0Q2VudGVyc1N0YXRlKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8Q29zdENlbnRlcltdPj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb3N0Q2VudGVyc1N0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHZpc2libGUgYWN0aXZlIGNvc3QgY2VudGVyc1xuICAgKi9cbiAgZ2V0QWN0aXZlQ29zdENlbnRlcnMoKTogT2JzZXJ2YWJsZTxDb3N0Q2VudGVyW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb3N0Q2VudGVyc1N0YXRlKCkucGlwZShcbiAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlciksXG4gICAgICB0YXAoKHByb2Nlc3M6IExvYWRlclN0YXRlPENvc3RDZW50ZXJbXT4pID0+IHtcbiAgICAgICAgaWYgKCEocHJvY2Vzcy5sb2FkaW5nIHx8IHByb2Nlc3Muc3VjY2VzcyB8fCBwcm9jZXNzLmVycm9yKSkge1xuICAgICAgICAgIHRoaXMubG9hZEFjdGl2ZUNvc3RDZW50ZXJzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAocHJvY2VzczogTG9hZGVyU3RhdGU8Q29zdENlbnRlcltdPikgPT4gcHJvY2Vzcy5zdWNjZXNzIHx8IHByb2Nlc3MuZXJyb3JcbiAgICAgICksXG4gICAgICBtYXAoKHJlc3VsdCkgPT4gcmVzdWx0LnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhZGRyZXNzZXMgb2YgdGhlIGNvc3QgY2VudGVyJ3MgdW5pdCBiYXNlZCBvbiBjb3N0IGNlbnRlciBpZFxuICAgKiBAcGFyYW0gY29zdENlbnRlcklkIGNvc3QgY2VudGVyIGlkXG4gICAqL1xuICBnZXRDb3N0Q2VudGVyQWRkcmVzc2VzKGNvc3RDZW50ZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxCMkJBZGRyZXNzW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmVDb3N0Q2VudGVycygpLnBpcGUoXG4gICAgICBtYXAoKGNvc3RDZW50ZXJzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvc3RDZW50ZXIgPSBjb3N0Q2VudGVycy5maW5kKChjYykgPT4gY2MuY29kZSA9PT0gY29zdENlbnRlcklkKTtcbiAgICAgICAgaWYgKGNvc3RDZW50ZXIgJiYgY29zdENlbnRlci51bml0KSB7XG4gICAgICAgICAgcmV0dXJuIGNvc3RDZW50ZXIudW5pdC5hZGRyZXNzZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==