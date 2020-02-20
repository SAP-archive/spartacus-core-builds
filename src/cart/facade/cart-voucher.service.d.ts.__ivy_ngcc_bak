import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/index';
import * as fromProcessStore from '../../process/store/process-state';
import { StateWithCart } from '../store/cart-state';
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
}
