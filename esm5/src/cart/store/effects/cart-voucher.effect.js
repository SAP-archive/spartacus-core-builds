import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GlobalMessageService } from '../../../global-message/facade/global-message.service';
import { GlobalMessageType } from '../../../global-message/models/global-message.model';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartVoucherConnector } from '../../connectors/voucher/cart-voucher.connector';
import { CartActions } from '../actions/index';
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
                return new CartActions.CartAddVoucherSuccess(__assign({}, payload));
            }), catchError(function (error) {
                var _a;
                if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.errors) {
                    error.error.errors.forEach(function (err) {
                        if (err.message) {
                            _this.messageService.add(err.message, GlobalMessageType.MSG_TYPE_ERROR);
                        }
                    });
                }
                return from([
                    new CartActions.CartAddVoucherFail(__assign(__assign({}, payload), { error: makeErrorSerializable(error) })),
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
                    voucherId: payload.voucherId,
                });
            }), catchError(function (error) {
                return from([
                    new CartActions.CartRemoveVoucherFail({
                        error: makeErrorSerializable(error),
                        cartId: payload.cartId,
                        userId: payload.userId,
                        voucherId: payload.voucherId,
                    }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvY2FydC12b3VjaGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN4RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0M7SUFDRSw0QkFDVSxRQUFpQixFQUNqQixvQkFBMEMsRUFDMUMsY0FBb0M7UUFIOUMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBSTlDLG9CQUFlLEdBSVgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFDcEMsR0FBRyxDQUFDLFVBQUMsTUFBa0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzNELFFBQVEsQ0FB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QUFPLENBQUMsTUFBTTtxQkFDdkIsQ0FBQztpQkFDSCxDQUFDO1lBWEYsQ0FXRSxDQUNILENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUF6RkMsQ0FBQztJQTJGSSw4Q0FBaUIsR0FBekIsVUFDRSxJQUFZLEVBQ1osS0FBYSxFQUNiLFdBQThCO1FBRTlCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUNyQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQzdDLFdBQVcsQ0FDWixDQUFDO0lBQ0osQ0FBQzs7Z0JBdkdtQixPQUFPO2dCQUNLLG9CQUFvQjtnQkFDMUIsb0JBQW9COztJQUk5QztRQURDLE1BQU0sRUFBRTsrREErQ1A7SUFHRjtRQURDLE1BQU0sRUFBRTtrRUFzQ1A7SUE5RlMsa0JBQWtCO1FBRDlCLFVBQVUsRUFBRTtPQUNBLGtCQUFrQixDQTBHOUI7SUFBRCx5QkFBQztDQUFBLEFBMUdELElBMEdDO1NBMUdZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ2FydFZvdWNoZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3ZvdWNoZXIvY2FydC12b3VjaGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFZvdWNoZXJFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRWb3VjaGVyQ29ubmVjdG9yOiBDYXJ0Vm91Y2hlckNvbm5lY3RvcixcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGFkZENhcnRWb3VjaGVyJDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRWb3VjaGVyQWN0aW9uXG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICAgIHwgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DQVJUX0FERF9WT1VDSEVSKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydFZvdWNoZXJDb25uZWN0b3JcbiAgICAgICAgLmFkZChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQudm91Y2hlcklkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZShcbiAgICAgICAgICAgICAgJ3ZvdWNoZXIuYXBwbHlWb3VjaGVyU3VjY2VzcycsXG4gICAgICAgICAgICAgIHBheWxvYWQudm91Y2hlcklkLFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yPy5lcnJvcj8uZXJyb3JzKSB7XG4gICAgICAgICAgICAgIGVycm9yLmVycm9yLmVycm9ycy5mb3JFYWNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyRmFpbCh7XG4gICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVDYXJ0Vm91Y2hlciQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuQ2FydFZvdWNoZXJBY3Rpb24gfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9WT1VDSEVSKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydFZvdWNoZXJDb25uZWN0b3JcbiAgICAgICAgLnJlbW92ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQudm91Y2hlcklkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZShcbiAgICAgICAgICAgICAgJ3ZvdWNoZXIucmVtb3ZlVm91Y2hlclN1Y2Nlc3MnLFxuICAgICAgICAgICAgICBwYXlsb2FkLnZvdWNoZXJJZCxcbiAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfSU5GT1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXJTdWNjZXNzKHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgdm91Y2hlcklkOiBwYXlsb2FkLnZvdWNoZXJJZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlckZhaWwoe1xuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICB2b3VjaGVySWQ6IHBheWxvYWQudm91Y2hlcklkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBwcml2YXRlIHNob3dHbG9iYWxNZXNzYWdlKFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBwYXJhbTogc3RyaW5nLFxuICAgIG1lc3NhZ2VUeXBlOiBHbG9iYWxNZXNzYWdlVHlwZVxuICApIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHsga2V5OiB0ZXh0LCBwYXJhbXM6IHsgdm91Y2hlckNvZGU6IHBhcmFtIH0gfSxcbiAgICAgIG1lc3NhZ2VUeXBlXG4gICAgKTtcbiAgfVxufVxuIl19