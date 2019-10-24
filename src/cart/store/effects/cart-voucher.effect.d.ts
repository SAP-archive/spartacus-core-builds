import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageService } from '../../../global-message/facade/global-message.service';
import { CartVoucherConnector } from '../../connectors/voucher/cart-voucher.connector';
import { CartActions } from '../actions/index';
export declare class CartVoucherEffects {
    private actions$;
    private cartVoucherConnector;
    private messageService;
    constructor(actions$: Actions, cartVoucherConnector: CartVoucherConnector, messageService: GlobalMessageService);
    addCartVoucher$: Observable<CartActions.CartVoucherAction>;
    removeCartVoucher$: Observable<CartActions.CartVoucherAction>;
    private showGlobalMessage;
}
