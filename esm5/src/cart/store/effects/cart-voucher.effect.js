import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GlobalMessageService } from '../../../global-message/facade/global-message.service';
import { GlobalMessageType } from '../../../global-message/models/global-message.model';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartVoucherConnector } from '../../connectors/voucher/cart-voucher.connector';
import { CartActions } from '../actions/index';
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx effects will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
var CartVoucherEffects = /** @class */ (function () {
    function CartVoucherEffects(actions$, cartVoucherConnector, messageService) {
        var _this = this;
        this.actions$ = actions$;
        this.cartVoucherConnector = cartVoucherConnector;
        this.messageService = messageService;
        this.addCartVoucher$ = this.actions$.pipe(ofType(CartActions.CART_ADD_VOUCHER), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartVoucherConnector
                .add(payload.userId, payload.cartId, payload.voucherId)
                .pipe(map(function () {
                _this.showGlobalMessage('voucher.applyVoucherSuccess', payload.voucherId, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                return new CartActions.CartAddVoucherSuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
            }), catchError(function (error) {
                return from([
                    new CartActions.CartAddVoucherFail(makeErrorSerializable(error)),
                    new CartActions.CartProcessesDecrement(payload.cartId),
                    new CartActions.LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                ]);
            }));
        }));
        this.removeCartVoucher$ = this.actions$.pipe(ofType(CartActions.CART_REMOVE_VOUCHER), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartVoucherConnector
                .remove(payload.userId, payload.cartId, payload.voucherId)
                .pipe(map(function () {
                _this.showGlobalMessage('voucher.removeVoucherSuccess', payload.voucherId, GlobalMessageType.MSG_TYPE_INFO);
                return new CartActions.CartRemoveVoucherSuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
            }), catchError(function (error) {
                return from([
                    new CartActions.CartRemoveVoucherFail(makeErrorSerializable(error)),
                    new CartActions.CartProcessesDecrement(payload.cartId),
                    new CartActions.LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                ]);
            }));
        }));
    }
    CartVoucherEffects.prototype.showGlobalMessage = function (text, param, messageType) {
        this.messageService.add({ key: text, params: { voucherCode: param } }, messageType);
    };
    CartVoucherEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartVoucherConnector },
        { type: GlobalMessageService }
    ]; };
    __decorate([
        Effect()
    ], CartVoucherEffects.prototype, "addCartVoucher$", void 0);
    __decorate([
        Effect()
    ], CartVoucherEffects.prototype, "removeCartVoucher$", void 0);
    CartVoucherEffects = __decorate([
        Injectable()
    ], CartVoucherEffects);
    return CartVoucherEffects;
}());
export { CartVoucherEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvY2FydC12b3VjaGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN4RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0M7Ozs7OztHQU1HO0FBRUg7SUFDRSw0QkFDVSxRQUFpQixFQUNqQixvQkFBMEMsRUFDMUMsY0FBb0M7UUFIOUMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBSTlDLG9CQUFlLEdBSVgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFDcEMsR0FBRyxDQUFDLFVBQUMsTUFBa0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFD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LG9CQUFvQjs7SUFJOUM7UUFEQyxNQUFNLEVBQUU7K0RBbUNQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7a0VBcUNQO0lBakZTLGtCQUFrQjtRQUQ5QixVQUFVLEVBQUU7T0FDQSxrQkFBa0IsQ0E2RjlCO0lBQUQseUJBQUM7Q0FBQSxBQTdGRCxJQTZGQztTQTdGWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvZmFjYWRlL2dsb2JhbC1tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENhcnRWb3VjaGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy92b3VjaGVyL2NhcnQtdm91Y2hlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNVxuICpcbiAqIHNwYXJ0YWN1cyBuZ3J4IGVmZmVjdHMgd2lsbCBubyBsb25nZXIgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUElcbiAqXG4gKiBUT0RPKGlzc3VlOiM0NTA3KVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFZvdWNoZXJFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRWb3VjaGVyQ29ubmVjdG9yOiBDYXJ0Vm91Y2hlckNvbm5lY3RvcixcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGFkZENhcnRWb3VjaGVyJDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRWb3VjaGVyQWN0aW9uXG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICAgIHwgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DQVJUX0FERF9WT1VDSEVSKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRWb3VjaGVyQ29ubmVjdG9yXG4gICAgICAgIC5hZGQocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLnZvdWNoZXJJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoXG4gICAgICAgICAgICAgICd2b3VjaGVyLmFwcGx5Vm91Y2hlclN1Y2Nlc3MnLFxuICAgICAgICAgICAgICBwYXlsb2FkLnZvdWNoZXJJZCxcbiAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlclN1Y2Nlc3Moe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlckZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVtb3ZlQ2FydFZvdWNoZXIkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuQ2FydFZvdWNoZXJBY3Rpb25cbiAgICB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX1ZPVUNIRVIpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydFZvdWNoZXJDb25uZWN0b3JcbiAgICAgICAgLnJlbW92ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQudm91Y2hlcklkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZShcbiAgICAgICAgICAgICAgJ3ZvdWNoZXIucmVtb3ZlVm91Y2hlclN1Y2Nlc3MnLFxuICAgICAgICAgICAgICBwYXlsb2FkLnZvdWNoZXJJZCxcbiAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfSU5GT1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXJTdWNjZXNzKHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXJGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnQocGF5bG9hZC5jYXJ0SWQpLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIHByaXZhdGUgc2hvd0dsb2JhbE1lc3NhZ2UoXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIHBhcmFtOiBzdHJpbmcsXG4gICAgbWVzc2FnZVR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlXG4gICkge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgeyBrZXk6IHRleHQsIHBhcmFtczogeyB2b3VjaGVyQ29kZTogcGFyYW0gfSB9LFxuICAgICAgbWVzc2FnZVR5cGVcbiAgICApO1xuICB9XG59XG4iXX0=