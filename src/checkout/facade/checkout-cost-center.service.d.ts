import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithCheckout } from '../store/checkout-state';
export declare class CheckoutCostCenterService {
    protected checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>;
    protected authService: AuthService;
    protected activeCartService: ActiveCartService;
    constructor(checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>, authService: AuthService, activeCartService: ActiveCartService);
    /**
     * Set cost center to cart
     * @param costCenterId : cost center id
     */
    setCostCenter(costCenterId: string): void;
    /**
     * Get cost center id from cart
     */
    getCostCenter(): Observable<string>;
}
