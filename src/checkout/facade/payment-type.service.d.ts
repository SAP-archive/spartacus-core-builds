import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { PaymentType } from '../../model/cart.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithCheckout } from '../store/checkout-state';
import * as ɵngcc0 from '@angular/core';
export declare class PaymentTypeService {
    protected checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>;
    protected authService: AuthService;
    protected activeCartService: ActiveCartService;
    constructor(checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>, authService: AuthService, activeCartService: ActiveCartService);
    /**
     * Get payment types
     */
    getPaymentTypes(): Observable<PaymentType[]>;
    /**
     * Load the supported payment types
     */
    loadPaymentTypes(): void;
    /**
     * Set payment type to cart
     * @param typeCode
     * @param poNumber : purchase order number
     */
    setPaymentType(typeCode: string, poNumber?: string): void;
    /**
     * Get the selected payment type
     */
    getSelectedPaymentType(): Observable<string>;
    /**
     * Get whether the selected payment type is "ACCOUNT" payment
     */
    isAccountPayment(): Observable<boolean>;
    /**
     * Get PO Number
     */
    getPoNumber(): Observable<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentTypeService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsicGF5bWVudC10eXBlLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBQYXltZW50VHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDaGVja291dCB9IGZyb20gJy4uL3N0b3JlL2NoZWNrb3V0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBheW1lbnRUeXBlU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBHZXQgcGF5bWVudCB0eXBlc1xuICAgICAqL1xuICAgIGdldFBheW1lbnRUeXBlcygpOiBPYnNlcnZhYmxlPFBheW1lbnRUeXBlW10+O1xuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIHN1cHBvcnRlZCBwYXltZW50IHR5cGVzXG4gICAgICovXG4gICAgbG9hZFBheW1lbnRUeXBlcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCBwYXltZW50IHR5cGUgdG8gY2FydFxuICAgICAqIEBwYXJhbSB0eXBlQ29kZVxuICAgICAqIEBwYXJhbSBwb051bWJlciA6IHB1cmNoYXNlIG9yZGVyIG51bWJlclxuICAgICAqL1xuICAgIHNldFBheW1lbnRUeXBlKHR5cGVDb2RlOiBzdHJpbmcsIHBvTnVtYmVyPzogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNlbGVjdGVkIHBheW1lbnQgdHlwZVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUGF5bWVudFR5cGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIHRoZSBzZWxlY3RlZCBwYXltZW50IHR5cGUgaXMgXCJBQ0NPVU5UXCIgcGF5bWVudFxuICAgICAqL1xuICAgIGlzQWNjb3VudFBheW1lbnQoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBHZXQgUE8gTnVtYmVyXG4gICAgICovXG4gICAgZ2V0UG9OdW1iZXIoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xufVxuIl19