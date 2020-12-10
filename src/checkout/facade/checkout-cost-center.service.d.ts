import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithCheckout } from '../store/checkout-state';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutCostCenterService {
    protected checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>;
    protected activeCartService: ActiveCartService;
    protected userIdService: UserIdService;
    constructor(checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>, activeCartService: ActiveCartService, userIdService: UserIdService);
    /**
     * Set cost center to cart
     * @param costCenterId : cost center id
     */
    setCostCenter(costCenterId: string): void;
    /**
     * Get cost center id from cart
     */
    getCostCenter(): Observable<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutCostCenterService, never>;
}

//# sourceMappingURL=checkout-cost-center.service.d.ts.map