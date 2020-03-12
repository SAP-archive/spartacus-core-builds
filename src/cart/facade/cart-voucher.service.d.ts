import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/index';
import * as fromProcessStore from '../../process/store/process-state';
import { StateWithCart } from '../store/cart-state';
import * as ɵngcc0 from '@angular/core';
export declare class CartVoucherService {
    protected store: Store<StateWithCart | fromProcessStore.StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithCart | fromProcessStore.StateWithProcess<void>>, authService: AuthService);
    addVoucher(voucherId: string, cartId?: string): void;
    removeVoucher(voucherId: string, cartId?: string): void;
    getAddVoucherResultError(): Observable<boolean>;
    getAddVoucherResultSuccess(): Observable<boolean>;
    getAddVoucherResultLoading(): Observable<boolean>;
    resetAddVoucherProcessingState(): void;
    private combineUserAndCartId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartVoucherService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CartVoucherService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY2FydC12b3VjaGVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21Qcm9jZXNzU3RvcmUgZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aENhcnQgfSBmcm9tICcuLi9zdG9yZS9jYXJ0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRWb3VjaGVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDYXJ0IHwgZnJvbVByb2Nlc3NTdG9yZS5TdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PjtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDYXJ0IHwgZnJvbVByb2Nlc3NTdG9yZS5TdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICBhZGRWb3VjaGVyKHZvdWNoZXJJZDogc3RyaW5nLCBjYXJ0SWQ/OiBzdHJpbmcpOiB2b2lkO1xuICAgIHJlbW92ZVZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcsIGNhcnRJZD86IHN0cmluZyk6IHZvaWQ7XG4gICAgZ2V0QWRkVm91Y2hlclJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBnZXRBZGRWb3VjaGVyUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpOiB2b2lkO1xuICAgIHByaXZhdGUgY29tYmluZVVzZXJBbmRDYXJ0SWQ7XG59XG4iXX0=