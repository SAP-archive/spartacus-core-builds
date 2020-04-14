import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/index';
import * as fromProcessStore from '../../process/store/process-state';
import { ActiveCartService } from './active-cart.service';
import * as ɵngcc0 from '@angular/core';
export declare class CartVoucherService {
    protected store: Store<fromProcessStore.StateWithProcess<void>>;
    protected authService: AuthService;
    protected activeCartService: ActiveCartService;
    constructor(store: Store<fromProcessStore.StateWithProcess<void>>, authService: AuthService, activeCartService: ActiveCartService);
    addVoucher(voucherId: string, cartId?: string): void;
    removeVoucher(voucherId: string, cartId?: string): void;
    /**
     * Get add voucher process error flag
     * @deprecated since 2.0
     */
    getAddVoucherResultError(): Observable<boolean>;
    /**
     * Get add voucher process success flag
     * @deprecated since 2.0
     */
    getAddVoucherResultSuccess(): Observable<boolean>;
    /**
     * Get add voucher process loading flag
     * @deprecated since 2.0
     */
    getAddVoucherResultLoading(): Observable<boolean>;
    /**
     * Reset add voucher process
     * @deprecated since 2.0
     */
    resetAddVoucherProcessingState(): void;
    private combineUserAndCartId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartVoucherService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CartVoucherService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY2FydC12b3VjaGVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21Qcm9jZXNzU3RvcmUgZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9hY3RpdmUtY2FydC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRWb3VjaGVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxmcm9tUHJvY2Vzc1N0b3JlLlN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8ZnJvbVByb2Nlc3NTdG9yZS5TdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIGFkZFZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcsIGNhcnRJZD86IHN0cmluZyk6IHZvaWQ7XG4gICAgcmVtb3ZlVm91Y2hlcih2b3VjaGVySWQ6IHN0cmluZywgY2FydElkPzogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgYWRkIHZvdWNoZXIgcHJvY2VzcyBlcnJvciBmbGFnXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4wXG4gICAgICovXG4gICAgZ2V0QWRkVm91Y2hlclJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogR2V0IGFkZCB2b3VjaGVyIHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4wXG4gICAgICovXG4gICAgZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBHZXQgYWRkIHZvdWNoZXIgcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjBcbiAgICAgKi9cbiAgICBnZXRBZGRWb3VjaGVyUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlc2V0IGFkZCB2b3VjaGVyIHByb2Nlc3NcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjBcbiAgICAgKi9cbiAgICByZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTogdm9pZDtcbiAgICBwcml2YXRlIGNvbWJpbmVVc2VyQW5kQ2FydElkO1xufVxuIl19