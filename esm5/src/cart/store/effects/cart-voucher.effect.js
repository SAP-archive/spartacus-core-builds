/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
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
        this.addCartVoucher$ = this.actions$.pipe(ofType(CartActions.CART_ADD_VOUCHER), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.cartVoucherConnector
                .add(payload.userId, payload.cartId, payload.voucherId)
                .pipe(map((/**
             * @return {?}
             */
            function () {
                _this.showGlobalMessage('voucher.applyVoucherSuccess', payload.voucherId);
                return new CartActions.CartAddVoucherSuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CartActions.CartAddVoucherFail(makeErrorSerializable(error)));
            })));
        })));
        this.removeCartVoucher$ = this.actions$.pipe(ofType(CartActions.CART_REMOVE_VOUCHER), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.cartVoucherConnector
                .remove(payload.userId, payload.cartId, payload.voucherId)
                .pipe(map((/**
             * @return {?}
             */
            function () {
                _this.showGlobalMessage('voucher.removeVoucherSuccess', payload.voucherId);
                return new CartActions.CartRemoveVoucherSuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CartActions.CartRemoveVoucherFail(makeErrorSerializable(error)));
            })));
        })));
    }
    /**
     * @private
     * @param {?} text
     * @param {?} param
     * @return {?}
     */
    CartVoucherEffects.prototype.showGlobalMessage = /**
     * @private
     * @param {?} text
     * @param {?} param
     * @return {?}
     */
    function (text, param) {
        this.messageService.add({ key: text, params: { voucherCode: param } }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    };
    CartVoucherEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartVoucherEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartVoucherConnector },
        { type: GlobalMessageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartVoucherEffects.prototype, "addCartVoucher$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartVoucherEffects.prototype, "removeCartVoucher$", void 0);
    return CartVoucherEffects;
}());
export { CartVoucherEffects };
if (false) {
    /** @type {?} */
    CartVoucherEffects.prototype.addCartVoucher$;
    /** @type {?} */
    CartVoucherEffects.prototype.removeCartVoucher$;
    /**
     * @type {?}
     * @private
     */
    CartVoucherEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CartVoucherEffects.prototype.cartVoucherConnector;
    /**
     * @type {?}
     * @private
     */
    CartVoucherEffects.prototype.messageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvY2FydC12b3VjaGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQztJQUVFLDRCQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQyxFQUMxQyxjQUFvQztRQUg5QyxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFJOUMsb0JBQWUsR0FFWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNwQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFrQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDM0QsUUFBUTs7OztRQUFDLFVBQUEsT0FBTztZQUNkLE9BQU8sS0FBSSxDQUFDLG9CQUFvQjtpQkFDN0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDO2lCQUN0RCxJQUFJLENBQ0gsR0FBRzs7O1lBQUM7Z0JBQ0YsS0FBSSxDQUFDLGlCQUFpQixDQUNwQiw2QkFBNkIsRUFDN0IsT0FBTyxDQUFDLFNBQVMsQ0FDbEIsQ0FBQztnQkFDRixPQUFPLElBQUksV0FBVyxDQUFDLHFCQUFxQixDQUFDO29CQUMzQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07b0JBQ3RCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtpQkFDdkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQXBFLENBQW9FLEVBQ3JFLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRix1QkFBa0IsR0FFZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUN2QyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFxQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDOUQsUUFBUTs7OztRQUFDLFVBQUEsT0FBTztZQUNkLE9BQU8sS0FBSSxDQUFDLG9CQUFvQjtpQkFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDO2lCQUN6RCxJQUFJLENBQ0gsR0FBRzs7O1lBQUM7Z0JBQ0YsS0FBSSxDQUFDLGlCQUFpQixDQUNwQiw4QkFBOEIsRUFDOUIsT0FBTyxDQUFDLFNBQVMsQ0FDbEIsQ0FBQztnQkFDRixPQUFPLElBQUksV0FBVyxDQUFDLHdCQUF3QixDQUFDO29CQUM5QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07b0JBQ3RCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtpQkFDdkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsQ0FDbkMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7WUFKRCxDQUlDLEVBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQTFEQyxDQUFDOzs7Ozs7O0lBNERJLDhDQUFpQjs7Ozs7O0lBQXpCLFVBQTBCLElBQVksRUFBRSxLQUFhO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUNyQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQzdDLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO0lBQ0osQ0FBQzs7Z0JBdkVGLFVBQVU7Ozs7Z0JBVEYsT0FBTztnQkFNUCxvQkFBb0I7Z0JBSHBCLG9CQUFvQjs7SUFlM0I7UUFEQyxNQUFNLEVBQUU7MENBQ1EsVUFBVTsrREF3QnpCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ1csVUFBVTtrRUE0QjVCO0lBUUoseUJBQUM7Q0FBQSxBQXhFRCxJQXdFQztTQXZFWSxrQkFBa0I7OztJQU83Qiw2Q0F5QkU7O0lBRUYsZ0RBNkJFOzs7OztJQTdEQSxzQ0FBeUI7Ozs7O0lBQ3pCLGtEQUFrRDs7Ozs7SUFDbEQsNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ2FydFZvdWNoZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3ZvdWNoZXIvY2FydC12b3VjaGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFZvdWNoZXJFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRWb3VjaGVyQ29ubmVjdG9yOiBDYXJ0Vm91Y2hlckNvbm5lY3RvcixcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGFkZENhcnRWb3VjaGVyJDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5DYXJ0Vm91Y2hlckFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DQVJUX0FERF9WT1VDSEVSKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRWb3VjaGVyQ29ubmVjdG9yXG4gICAgICAgIC5hZGQocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLnZvdWNoZXJJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoXG4gICAgICAgICAgICAgICd2b3VjaGVyLmFwcGx5Vm91Y2hlclN1Y2Nlc3MnLFxuICAgICAgICAgICAgICBwYXlsb2FkLnZvdWNoZXJJZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXJTdWNjZXNzKHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlckZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbW92ZUNhcnRWb3VjaGVyJDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5DYXJ0Vm91Y2hlckFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9WT1VDSEVSKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRWb3VjaGVyQ29ubmVjdG9yXG4gICAgICAgIC5yZW1vdmUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLnZvdWNoZXJJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoXG4gICAgICAgICAgICAgICd2b3VjaGVyLnJlbW92ZVZvdWNoZXJTdWNjZXNzJyxcbiAgICAgICAgICAgICAgcGF5bG9hZC52b3VjaGVySWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBwcml2YXRlIHNob3dHbG9iYWxNZXNzYWdlKHRleHQ6IHN0cmluZywgcGFyYW06IHN0cmluZykge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgeyBrZXk6IHRleHQsIHBhcmFtczogeyB2b3VjaGVyQ29kZTogcGFyYW0gfSB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgKTtcbiAgfVxufVxuIl19