import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageService } from '../../../global-message/facade/global-message.service';
import { CartVoucherConnector } from '../../connectors/voucher/cart-voucher.connector';
import { CartActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class CartVoucherEffects {
    private actions$;
    private cartVoucherConnector;
    private messageService;
    constructor(actions$: Actions, cartVoucherConnector: CartVoucherConnector, messageService: GlobalMessageService);
    addCartVoucher$: Observable<CartActions.CartVoucherAction | CartActions.LoadCart | CartActions.CartProcessesDecrement>;
    removeCartVoucher$: Observable<CartActions.CartVoucherAction | CartActions.LoadCart>;
    private showGlobalMessage;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartVoucherEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CartVoucherEffects>;
}

//# sourceMappingURL=cart-voucher.effect.d.ts.map