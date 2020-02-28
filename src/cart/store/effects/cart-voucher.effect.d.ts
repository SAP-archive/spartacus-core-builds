import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageService } from '../../../global-message/facade/global-message.service';
import { CartVoucherConnector } from '../../connectors/voucher/cart-voucher.connector';
import { CartActions } from '../actions/index';
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx effects will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
import * as ɵngcc0 from '@angular/core';
export declare class CartVoucherEffects {
    private actions$;
    private cartVoucherConnector;
    private messageService;
    constructor(actions$: Actions, cartVoucherConnector: CartVoucherConnector, messageService: GlobalMessageService);
    addCartVoucher$: Observable<CartActions.CartVoucherAction | CartActions.LoadCart | CartActions.CartProcessesDecrement>;
    removeCartVoucher$: Observable<CartActions.CartVoucherAction | CartActions.CartProcessesDecrement | CartActions.LoadCart>;
    private showGlobalMessage;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartVoucherEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CartVoucherEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJjYXJ0LXZvdWNoZXIuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7OztBQVFBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvZmFjYWRlL2dsb2JhbC1tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydFZvdWNoZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3ZvdWNoZXIvY2FydC12b3VjaGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNVxuICpcbiAqIHNwYXJ0YWN1cyBuZ3J4IGVmZmVjdHMgd2lsbCBubyBsb25nZXIgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUElcbiAqXG4gKiBUT0RPKGlzc3VlOiM0NTA3KVxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0Vm91Y2hlckVmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSBjYXJ0Vm91Y2hlckNvbm5lY3RvcjtcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBjYXJ0Vm91Y2hlckNvbm5lY3RvcjogQ2FydFZvdWNoZXJDb25uZWN0b3IsIG1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSk7XG4gICAgYWRkQ2FydFZvdWNoZXIkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNhcnRWb3VjaGVyQWN0aW9uIHwgQ2FydEFjdGlvbnMuTG9hZENhcnQgfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50PjtcbiAgICByZW1vdmVDYXJ0Vm91Y2hlciQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQ2FydFZvdWNoZXJBY3Rpb24gfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50IHwgQ2FydEFjdGlvbnMuTG9hZENhcnQ+O1xuICAgIHByaXZhdGUgc2hvd0dsb2JhbE1lc3NhZ2U7XG59XG4iXX0=