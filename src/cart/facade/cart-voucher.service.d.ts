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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY2FydC12b3VjaGVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7QUFXQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tUHJvY2Vzc1N0b3JlIGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvY2FydC1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0Vm91Y2hlclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydCB8IGZyb21Qcm9jZXNzU3RvcmUuU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydCB8IGZyb21Qcm9jZXNzU3RvcmUuU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSk7XG4gICAgYWRkVm91Y2hlcih2b3VjaGVySWQ6IHN0cmluZywgY2FydElkPzogc3RyaW5nKTogdm9pZDtcbiAgICByZW1vdmVWb3VjaGVyKHZvdWNoZXJJZDogc3RyaW5nLCBjYXJ0SWQ/OiBzdHJpbmcpOiB2b2lkO1xuICAgIGdldEFkZFZvdWNoZXJSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGdldEFkZFZvdWNoZXJSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgZ2V0QWRkVm91Y2hlclJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICByZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTogdm9pZDtcbiAgICBwcml2YXRlIGNvbWJpbmVVc2VyQW5kQ2FydElkO1xufVxuIl19