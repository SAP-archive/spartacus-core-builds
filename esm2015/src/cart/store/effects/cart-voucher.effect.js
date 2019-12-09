/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GlobalMessageService } from '../../../global-message/facade/global-message.service';
import { GlobalMessageType } from '../../../global-message/models/global-message.model';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartVoucherConnector } from '../../connectors/voucher/cart-voucher.connector';
import { CartActions } from '../actions/index';
export class CartVoucherEffects {
    /**
     * @param {?} actions$
     * @param {?} cartVoucherConnector
     * @param {?} messageService
     */
    constructor(actions$, cartVoucherConnector, messageService) {
        this.actions$ = actions$;
        this.cartVoucherConnector = cartVoucherConnector;
        this.messageService = messageService;
        this.addCartVoucher$ = this.actions$.pipe(ofType(CartActions.CART_ADD_VOUCHER), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.cartVoucherConnector
                .add(payload.userId, payload.cartId, payload.voucherId)
                .pipe(map((/**
             * @return {?}
             */
            () => {
                this.showGlobalMessage('voucher.applyVoucherSuccess', payload.voucherId, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                return new CartActions.CartAddVoucherSuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => from([
                new CartActions.CartAddVoucherFail(makeErrorSerializable(error)),
                new CartActions.CartProcessesDecrement(payload.cartId),
                new CartActions.LoadCart({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]))));
        })));
        this.removeCartVoucher$ = this.actions$.pipe(ofType(CartActions.CART_REMOVE_VOUCHER), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.cartVoucherConnector
                .remove(payload.userId, payload.cartId, payload.voucherId)
                .pipe(map((/**
             * @return {?}
             */
            () => {
                this.showGlobalMessage('voucher.removeVoucherSuccess', payload.voucherId, GlobalMessageType.MSG_TYPE_INFO);
                return new CartActions.CartRemoveVoucherSuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => from([
                new CartActions.CartRemoveVoucherFail(makeErrorSerializable(error)),
                new CartActions.CartProcessesDecrement(payload.cartId),
                new CartActions.LoadCart({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]))));
        })));
    }
    /**
     * @private
     * @param {?} text
     * @param {?} param
     * @param {?} messageType
     * @return {?}
     */
    showGlobalMessage(text, param, messageType) {
        this.messageService.add({ key: text, params: { voucherCode: param } }, messageType);
    }
}
CartVoucherEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartVoucherEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartVoucherConnector },
    { type: GlobalMessageService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CartVoucherEffects.prototype, "addCartVoucher$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CartVoucherEffects.prototype, "removeCartVoucher$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvY2FydC12b3VjaGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFDN0IsWUFDVSxRQUFpQixFQUNqQixvQkFBMEMsRUFDMUMsY0FBb0M7UUFGcEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUk5QyxvQkFBZSxHQUlYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQ3BDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWtDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxP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Ozs7WUE3RkYsVUFBVTs7OztZQVRGLE9BQU87WUFNUCxvQkFBb0I7WUFIcEIsb0JBQW9COztBQWUzQjtJQURDLE1BQU0sRUFBRTtzQ0FDUSxVQUFVOzJEQWtDekI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDVyxVQUFVOzhEQW9DNUI7OztJQTFFRiw2Q0FtQ0U7O0lBRUYsZ0RBcUNFOzs7OztJQS9FQSxzQ0FBeUI7Ozs7O0lBQ3pCLGtEQUFrRDs7Ozs7SUFDbEQsNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2ZhY2FkZS9nbG9iYWwtbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDYXJ0Vm91Y2hlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdm91Y2hlci9jYXJ0LXZvdWNoZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0Vm91Y2hlckVmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydFZvdWNoZXJDb25uZWN0b3I6IENhcnRWb3VjaGVyQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICBARWZmZWN0KClcbiAgYWRkQ2FydFZvdWNoZXIkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuQ2FydFZvdWNoZXJBY3Rpb25cbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNBUlRfQUREX1ZPVUNIRVIpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydFZvdWNoZXJDb25uZWN0b3JcbiAgICAgICAgLmFkZChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQudm91Y2hlcklkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZShcbiAgICAgICAgICAgICAgJ3ZvdWNoZXIuYXBwbHlWb3VjaGVyU3VjY2VzcycsXG4gICAgICAgICAgICAgIHBheWxvYWQudm91Y2hlcklkLFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnQocGF5bG9hZC5jYXJ0SWQpLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVDYXJ0Vm91Y2hlciQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0Vm91Y2hlckFjdGlvblxuICAgIHwgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfVk9VQ0hFUiksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Vm91Y2hlckNvbm5lY3RvclxuICAgICAgICAucmVtb3ZlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC52b3VjaGVySWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKFxuICAgICAgICAgICAgICAndm91Y2hlci5yZW1vdmVWb3VjaGVyU3VjY2VzcycsXG4gICAgICAgICAgICAgIHBheWxvYWQudm91Y2hlcklkLFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9JTkZPXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlclN1Y2Nlc3Moe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlckZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudChwYXlsb2FkLmNhcnRJZCksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgcHJpdmF0ZSBzaG93R2xvYmFsTWVzc2FnZShcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgcGFyYW06IHN0cmluZyxcbiAgICBtZXNzYWdlVHlwZTogR2xvYmFsTWVzc2FnZVR5cGVcbiAgKSB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7IGtleTogdGV4dCwgcGFyYW1zOiB7IHZvdWNoZXJDb2RlOiBwYXJhbSB9IH0sXG4gICAgICBtZXNzYWdlVHlwZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==