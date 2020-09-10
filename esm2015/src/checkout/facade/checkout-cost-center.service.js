import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { CheckoutActions } from '../store/actions/index';
import { CheckoutSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../cart/facade/active-cart.service";
let CheckoutCostCenterService = class CheckoutCostCenterService {
    constructor(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
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
        this.authService.invokeWithUserId((userId) => {
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
};
CheckoutCostCenterService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: ActiveCartService }
];
CheckoutCostCenterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutCostCenterService_Factory() { return new CheckoutCostCenterService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CheckoutCostCenterService, providedIn: "root" });
CheckoutCostCenterService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutCostCenterService);
export { CheckoutCostCenterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29zdC1jZW50ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQtY29zdC1jZW50ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBSzdELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBQ3BDLFlBQ1ksYUFBZ0UsRUFDaEUsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzdDLENBQUM7SUFFSjs7O09BR0c7SUFDSCxhQUFhLENBQUMsWUFBb0I7UUFDaEMsSUFBSSxNQUFNLENBQUM7UUFDWCxJQUFJLENBQUMsaUJBQWlCO2FBQ25CLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sSUFBSSxNQUFNLEtBQUsscUJBQXFCLElBQUksTUFBTSxFQUFFO2dCQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDO29CQUNoQyxNQUFNLEVBQUUsTUFBTTtvQkFDZCxNQUFNLEVBQUUsTUFBTTtvQkFDZCxZQUFZLEVBQUUsWUFBWTtpQkFDM0IsQ0FBQyxDQUNILENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYTtRQUNYLE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2pFLENBQUMsQ0FBQyxJQUFJLENBQ0wsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pELFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQy9ELENBQUM7YUFDSDtZQUNELE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFqRDRCLEtBQUs7WUFDUCxXQUFXO1lBQ0wsaUJBQWlCOzs7QUFKckMseUJBQXlCO0lBSHJDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyx5QkFBeUIsQ0FtRHJDO1NBbkRZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCBtYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2hlY2tvdXQgfSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dENvc3RDZW50ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2V0IGNvc3QgY2VudGVyIHRvIGNhcnRcbiAgICogQHBhcmFtIGNvc3RDZW50ZXJJZCA6IGNvc3QgY2VudGVyIGlkXG4gICAqL1xuICBzZXRDb3N0Q2VudGVyKGNvc3RDZW50ZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGNhcnRJZDtcbiAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlQ2FydElkKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVDYXJ0SWQpID0+IChjYXJ0SWQgPSBhY3RpdmVDYXJ0SWQpKTtcblxuICAgIHRoaXMuYXV0aFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICBpZiAodXNlcklkICYmIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTICYmIGNhcnRJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRDb3N0Q2VudGVyKHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiBjYXJ0SWQsXG4gICAgICAgICAgICBjb3N0Q2VudGVySWQ6IGNvc3RDZW50ZXJJZCxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjb3N0IGNlbnRlciBpZCBmcm9tIGNhcnRcbiAgICovXG4gIGdldENvc3RDZW50ZXIoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgICAgdGhpcy5jaGVja291dFN0b3JlLnBpcGUoc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldENvc3RDZW50ZXIpKSxcbiAgICBdKS5waXBlKFxuICAgICAgZmlsdGVyKChbY2FydF0pID0+IEJvb2xlYW4oY2FydCkpLFxuICAgICAgbWFwKChbY2FydCwgY29zdENlbnRlcklkXSkgPT4ge1xuICAgICAgICBpZiAoY29zdENlbnRlcklkID09PSB1bmRlZmluZWQgJiYgY2FydC5jb3N0Q2VudGVyKSB7XG4gICAgICAgICAgY29zdENlbnRlcklkID0gY2FydC5jb3N0Q2VudGVyLmNvZGU7XG4gICAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRDb3N0Q2VudGVyU3VjY2VzcyhjYXJ0LmNvc3RDZW50ZXIuY29kZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3N0Q2VudGVySWQ7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==