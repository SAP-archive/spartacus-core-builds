import { Observable } from 'rxjs';
import { CheckoutCostCenterAdapter } from './checkout-cost-center.adapter';
import { Cart } from '../../../model/cart.model';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutCostCenterConnector {
    protected adapter: CheckoutCostCenterAdapter;
    constructor(adapter: CheckoutCostCenterAdapter);
    setCostCenter(userId: string, cartId: string, costCenterId: string): Observable<Cart>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutCostCenterConnector, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29zdC1jZW50ZXIuY29ubmVjdG9yLmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LWNvc3QtY2VudGVyLmNvbm5lY3Rvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7O0FBSUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dENvc3RDZW50ZXJBZGFwdGVyIH0gZnJvbSAnLi9jaGVja291dC1jb3N0LWNlbnRlci5hZGFwdGVyJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0Q29zdENlbnRlckNvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IENoZWNrb3V0Q29zdENlbnRlckFkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlcjogQ2hlY2tvdXRDb3N0Q2VudGVyQWRhcHRlcik7XG4gICAgc2V0Q29zdENlbnRlcih1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGNvc3RDZW50ZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0Pjtcbn1cbiJdfQ==