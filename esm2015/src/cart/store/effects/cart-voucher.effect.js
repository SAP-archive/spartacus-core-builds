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
let CartVoucherEffects = class CartVoucherEffects {
    constructor(actions$, cartVoucherConnector, messageService) {
        this.actions$ = actions$;
        this.cartVoucherConnector = cartVoucherConnector;
        this.messageService = messageService;
        this.addCartVoucher$ = this.actions$.pipe(ofType(CartActions.CART_ADD_VOUCHER), map((action) => action.payload), mergeMap(payload => {
            return this.cartVoucherConnector
                .add(payload.userId, payload.cartId, payload.voucherId)
                .pipe(map(() => {
                this.showGlobalMessage('voucher.applyVoucherSuccess', payload.voucherId, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                return new CartActions.CartAddVoucherSuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
            }), catchError(error => {
                var _a;
                if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.errors) {
                    error.error.errors.forEach(err => {
                        if (err.message) {
                            this.messageService.add(err.message, GlobalMessageType.MSG_TYPE_ERROR);
                        }
                    });
                }
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
        this.removeCartVoucher$ = this.actions$.pipe(ofType(CartActions.CART_REMOVE_VOUCHER), map((action) => action.payload), mergeMap(payload => {
            return this.cartVoucherConnector
                .remove(payload.userId, payload.cartId, payload.voucherId)
                .pipe(map(() => {
                this.showGlobalMessage('voucher.removeVoucherSuccess', payload.voucherId, GlobalMessageType.MSG_TYPE_INFO);
                return new CartActions.CartRemoveVoucherSuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                    voucherId: payload.voucherId,
                });
            }), catchError(error => from([
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
            ])));
        }));
    }
    showGlobalMessage(text, param, messageType) {
        this.messageService.add({ key: text, params: { voucherCode: param } }, messageType);
    }
};
CartVoucherEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartVoucherConnector },
    { type: GlobalMessageService }
];
__decorate([
    Effect()
], CartVoucherEffects.prototype, "addCartVoucher$", void 0);
__decorate([
    Effect()
], CartVoucherEffects.prototype, "removeCartVoucher$", void 0);
CartVoucherEffects = __decorate([
    Injectable()
], CartVoucherEffects);
export { CartVoucherEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvY2FydC12b3VjaGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN4RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDN0IsWUFDVSxRQUFpQixFQUNqQixvQkFBMEMsRUFDMUMsY0FBb0M7UUFGcEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUk5QyxvQkFBZSxHQUlYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQ3BDLEdBQUcsQ0FBQyxDQUFDLE1BQWtDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMs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UztpQkFDN0IsQ0FBQztnQkFDRixJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUM7b0JBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtvQkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2lCQUN2QixDQUFDO2FBQ0gsQ0FBQyxDQUNILENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUF2RkMsQ0FBQztJQXlGSSxpQkFBaUIsQ0FDdkIsSUFBWSxFQUNaLEtBQWEsRUFDYixXQUE4QjtRQUU5QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FDckIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUM3QyxXQUFXLENBQ1osQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQXRHcUIsT0FBTztZQUNLLG9CQUFvQjtZQUMxQixvQkFBb0I7O0FBSTlDO0lBREMsTUFBTSxFQUFFOzJEQTZDUDtBQUdGO0lBREMsTUFBTSxFQUFFOzhEQXNDUDtBQTVGUyxrQkFBa0I7SUFEOUIsVUFBVSxFQUFFO0dBQ0Esa0JBQWtCLENBd0c5QjtTQXhHWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvZmFjYWRlL2dsb2JhbC1tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENhcnRWb3VjaGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy92b3VjaGVyL2NhcnQtdm91Y2hlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRWb3VjaGVyRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0Vm91Y2hlckNvbm5lY3RvcjogQ2FydFZvdWNoZXJDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBhZGRDYXJ0Vm91Y2hlciQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0Vm91Y2hlckFjdGlvblxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ0FSVF9BRERfVk9VQ0hFUiksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Vm91Y2hlckNvbm5lY3RvclxuICAgICAgICAuYWRkKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC52b3VjaGVySWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKFxuICAgICAgICAgICAgICAndm91Y2hlci5hcHBseVZvdWNoZXJTdWNjZXNzJyxcbiAgICAgICAgICAgICAgcGF5bG9hZC52b3VjaGVySWQsXG4gICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXJTdWNjZXNzKHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yPy5lcnJvcj8uZXJyb3JzKSB7XG4gICAgICAgICAgICAgIGVycm9yLmVycm9yLmVycm9ycy5mb3JFYWNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlckZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVDYXJ0Vm91Y2hlciQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuQ2FydFZvdWNoZXJBY3Rpb24gfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9WT1VDSEVSKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRWb3VjaGVyQ29ubmVjdG9yXG4gICAgICAgIC5yZW1vdmUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLnZvdWNoZXJJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoXG4gICAgICAgICAgICAgICd2b3VjaGVyLnJlbW92ZVZvdWNoZXJTdWNjZXNzJyxcbiAgICAgICAgICAgICAgcGF5bG9hZC52b3VjaGVySWQsXG4gICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0lORk9cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIHZvdWNoZXJJZDogcGF5bG9hZC52b3VjaGVySWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyRmFpbCh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIHZvdWNoZXJJZDogcGF5bG9hZC52b3VjaGVySWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIHByaXZhdGUgc2hvd0dsb2JhbE1lc3NhZ2UoXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIHBhcmFtOiBzdHJpbmcsXG4gICAgbWVzc2FnZVR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlXG4gICkge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgeyBrZXk6IHRleHQsIHBhcmFtczogeyB2b3VjaGVyQ29kZTogcGFyYW0gfSB9LFxuICAgICAgbWVzc2FnZVR5cGVcbiAgICApO1xuICB9XG59XG4iXX0=