import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateWithProcess } from '../../process/store/process-state';
import { AuthService } from '../../auth/facade/auth.service';
import { CostCenter, B2BAddress } from '../../model/org-unit.model';
import { StateWithUser } from '../store/user-state';
import * as ɵngcc0 from '@angular/core';
export declare class UserCostCenterService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * Load all visible active cost centers for the currently login user
     */
    loadActiveCostCenters(): void;
    private getCostCentersState;
    /**
     * Get all visible active cost centers
     */
    getActiveCostCenters(): Observable<CostCenter[]>;
    /**
     * Get the addresses of the cost center's unit based on cost center id
     * @param costCenterId cost center id
     */
    getCostCenterAddresses(costCenterId: string): Observable<B2BAddress[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserCostCenterService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXItY29zdC1jZW50ZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29zdENlbnRlciwgQjJCQWRkcmVzcyB9IGZyb20gJy4uLy4uL21vZGVsL29yZy11bml0Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJDb3N0Q2VudGVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIExvYWQgYWxsIHZpc2libGUgYWN0aXZlIGNvc3QgY2VudGVycyBmb3IgdGhlIGN1cnJlbnRseSBsb2dpbiB1c2VyXG4gICAgICovXG4gICAgbG9hZEFjdGl2ZUNvc3RDZW50ZXJzKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBnZXRDb3N0Q2VudGVyc1N0YXRlO1xuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdmlzaWJsZSBhY3RpdmUgY29zdCBjZW50ZXJzXG4gICAgICovXG4gICAgZ2V0QWN0aXZlQ29zdENlbnRlcnMoKTogT2JzZXJ2YWJsZTxDb3N0Q2VudGVyW10+O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYWRkcmVzc2VzIG9mIHRoZSBjb3N0IGNlbnRlcidzIHVuaXQgYmFzZWQgb24gY29zdCBjZW50ZXIgaWRcbiAgICAgKiBAcGFyYW0gY29zdENlbnRlcklkIGNvc3QgY2VudGVyIGlkXG4gICAgICovXG4gICAgZ2V0Q29zdENlbnRlckFkZHJlc3Nlcyhjb3N0Q2VudGVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QjJCQWRkcmVzc1tdPjtcbn1cbiJdfQ==