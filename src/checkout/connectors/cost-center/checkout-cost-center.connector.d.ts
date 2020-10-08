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

//# sourceMappingURL=checkout-cost-center.connector.d.ts.map