import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { CheckoutActions } from '../store/actions/index';
import { CheckoutSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../cart/facade/active-cart.service";
import * as i3 from "../../auth/user-auth/facade/user-id.service";
export class CheckoutCostCenterService {
    constructor(checkoutStore, activeCartService, userIdService) {
        this.checkoutStore = checkoutStore;
        this.activeCartService = activeCartService;
        this.userIdService = userIdService;
    }
    /**
     * Set cost center to cart
     * @param costCenterId : cost center id
     */
    setCostCenter(costCenterId) {
        let cartId;
        this.activeCartService
            .getActiveCartId()
            .pipe(take(1))
            .subscribe((activeCartId) => (cartId = activeCartId));
        this.userIdService.invokeWithUserId((userId) => {
            if (userId && userId !== OCC_USER_ID_ANONYMOUS && cartId) {
                this.checkoutStore.dispatch(new CheckoutActions.SetCostCenter({
                    userId: userId,
                    cartId: cartId,
                    costCenterId: costCenterId,
                }));
            }
        });
    }
    /**
     * Get cost center id from cart
     */
    getCostCenter() {
        return combineLatest([
            this.activeCartService.getActive(),
            this.checkoutStore.pipe(select(CheckoutSelectors.getCostCenter)),
        ]).pipe(filter(([cart]) => Boolean(cart)), map(([cart, costCenterId]) => {
            if (costCenterId === undefined && cart.costCenter) {
                costCenterId = cart.costCenter.code;
                this.checkoutStore.dispatch(new CheckoutActions.SetCostCenterSuccess(cart.costCenter.code));
            }
            return costCenterId;
        }));
    }
}
CheckoutCostCenterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutCostCenterService_Factory() { return new CheckoutCostCenterService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.ActiveCartService), i0.ɵɵinject(i3.UserIdService)); }, token: CheckoutCostCenterService, providedIn: "root" });
CheckoutCostCenterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutCostCenterService.ctorParameters = () => [
    { type: Store },
    { type: ActiveCartService },
    { type: UserIdService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29zdC1jZW50ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NoZWNrb3V0L2ZhY2FkZS9jaGVja291dC1jb3N0LWNlbnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUs3RCxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLFlBQ1ksYUFBZ0UsRUFDaEUsaUJBQW9DLEVBQ3BDLGFBQTRCO1FBRjVCLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ3JDLENBQUM7SUFFSjs7O09BR0c7SUFDSCxhQUFhLENBQUMsWUFBb0I7UUFDaEMsSUFBSSxNQUFNLENBQUM7UUFDWCxJQUFJLENBQUMsaUJBQWlCO2FBQ25CLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM3QyxJQUFJLE1BQU0sSUFBSSxNQUFNLEtBQUsscUJBQXFCLElBQUksTUFBTSxFQUFFO2dCQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDO29CQUNoQyxNQUFNLEVBQUUsTUFBTTtvQkFDZCxNQUFNLEVBQUUsTUFBTTtvQkFDZCxZQUFZLEVBQUUsWUFBWTtpQkFDM0IsQ0FBQyxDQUNILENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYTtRQUNYLE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2pFLENBQUMsQ0FBQyxJQUFJLENBQ0wsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pELFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQy9ELENBQUM7YUFDSDtZQUNELE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O1lBckRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBYmdCLEtBQUs7WUFJYixpQkFBaUI7WUFEakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVzZXJJZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9mYWNhZGUvdXNlci1pZC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2hlY2tvdXQgfSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dENvc3RDZW50ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlcklkU2VydmljZTogVXNlcklkU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNldCBjb3N0IGNlbnRlciB0byBjYXJ0XG4gICAqIEBwYXJhbSBjb3N0Q2VudGVySWQgOiBjb3N0IGNlbnRlciBpZFxuICAgKi9cbiAgc2V0Q29zdENlbnRlcihjb3N0Q2VudGVySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjYXJ0SWQ7XG4gICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoYWN0aXZlQ2FydElkKSA9PiAoY2FydElkID0gYWN0aXZlQ2FydElkKSk7XG5cbiAgICB0aGlzLnVzZXJJZFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICBpZiAodXNlcklkICYmIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTICYmIGNhcnRJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRDb3N0Q2VudGVyKHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiBjYXJ0SWQsXG4gICAgICAgICAgICBjb3N0Q2VudGVySWQ6IGNvc3RDZW50ZXJJZCxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjb3N0IGNlbnRlciBpZCBmcm9tIGNhcnRcbiAgICovXG4gIGdldENvc3RDZW50ZXIoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgICAgdGhpcy5jaGVja291dFN0b3JlLnBpcGUoc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldENvc3RDZW50ZXIpKSxcbiAgICBdKS5waXBlKFxuICAgICAgZmlsdGVyKChbY2FydF0pID0+IEJvb2xlYW4oY2FydCkpLFxuICAgICAgbWFwKChbY2FydCwgY29zdENlbnRlcklkXSkgPT4ge1xuICAgICAgICBpZiAoY29zdENlbnRlcklkID09PSB1bmRlZmluZWQgJiYgY2FydC5jb3N0Q2VudGVyKSB7XG4gICAgICAgICAgY29zdENlbnRlcklkID0gY2FydC5jb3N0Q2VudGVyLmNvZGU7XG4gICAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRDb3N0Q2VudGVyU3VjY2VzcyhjYXJ0LmNvc3RDZW50ZXIuY29kZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3N0Q2VudGVySWQ7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==