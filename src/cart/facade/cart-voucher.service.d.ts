import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserIdService } from '../../auth/index';
import * as fromProcessStore from '../../process/store/process-state';
import { ActiveCartService } from './active-cart.service';
import * as ɵngcc0 from '@angular/core';
export declare class CartVoucherService {
    protected store: Store<fromProcessStore.StateWithProcess<void>>;
    protected activeCartService: ActiveCartService;
    protected userIdService: UserIdService;
    constructor(store: Store<fromProcessStore.StateWithProcess<void>>, activeCartService: ActiveCartService, userIdService: UserIdService);
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
}

//# sourceMappingURL=cart-voucher.service.d.ts.map