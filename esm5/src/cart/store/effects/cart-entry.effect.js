/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from, Observable } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartEntryConnector } from '../../connectors/entry/cart-entry.connector';
import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
var CartEntryEffects = /** @class */ (function () {
    function CartEntryEffects(actions$, cartEntryConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.cartEntryConnector = cartEntryConnector;
        this.addEntry$ = this.actions$.pipe(ofType(CartActions.CART_ADD_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.cartEntryConnector
                .add(payload.userId, payload.cartId, payload.productCode, payload.quantity)
                .pipe(map((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) {
                return new CartActions.CartAddEntrySuccess(tslib_1.__assign({}, entry, { userId: payload.userId, cartId: payload.cartId }));
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return from([
                    new CartActions.CartAddEntryFail(makeErrorSerializable(error)),
                    new CartActions.CartProcessesDecrement(payload.cartId),
                    new DeprecatedCartActions.LoadCart({
                        cartId: payload.cartId,
                        userId: payload.userId,
                    }),
                ]);
            })));
        })));
        this.removeEntry$ = this.actions$.pipe(ofType(CartActions.CART_REMOVE_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.cartEntryConnector
                .remove(payload.userId, payload.cartId, payload.entry)
                .pipe(map((/**
             * @return {?}
             */
            function () {
                return new CartActions.CartRemoveEntrySuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return from([
                    new CartActions.CartRemoveEntryFail(makeErrorSerializable(error)),
                    new CartActions.CartProcessesDecrement(payload.cartId),
                    new DeprecatedCartActions.LoadCart({
                        cartId: payload.cartId,
                        userId: payload.userId,
                    }),
                ]);
            })));
        })));
        this.updateEntry$ = this.actions$.pipe(ofType(CartActions.CART_UPDATE_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.cartEntryConnector
                .update(payload.userId, payload.cartId, payload.entry, payload.qty)
                .pipe(map((/**
             * @return {?}
             */
            function () {
                return new CartActions.CartUpdateEntrySuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return from([
                    new CartActions.CartUpdateEntryFail(makeErrorSerializable(error)),
                    new CartActions.CartProcessesDecrement(payload.cartId),
                    new DeprecatedCartActions.LoadCart({
                        cartId: payload.cartId,
                        userId: payload.userId,
                    }),
                ]);
            })));
        })));
    }
    CartEntryEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartEntryEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartEntryConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEntryEffects.prototype, "addEntry$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEntryEffects.prototype, "removeEntry$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEntryEffects.prototype, "updateEntry$", void 0);
    return CartEntryEffects;
}());
export { CartEntryEffects };
if (false) {
    /** @type {?} */
    CartEntryEffects.prototype.addEntry$;
    /** @type {?} */
    CartEntryEffects.prototype.removeEntry$;
    /** @type {?} */
    CartEntryEffects.prototype.updateEntry$;
    /**
     * @type {?}
     * @private
     */
    CartEntryEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CartEntryEffects.prototype.cartEntryConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQtZW50cnkuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxLQUFLLHFCQUFxQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQztJQTRHRSwwQkFDVSxRQUFpQixFQUNqQixrQkFBc0M7UUFGaEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUEzR2hELGNBQVMsR0FLTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFDbEMsR0FBRzs7OztRQUFDLFVBQUMsTUFBZ0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ3pELFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZixPQUFPLEtBQUksQ0FBQyxrQkFBa0I7aUJBQzNCLEdBQUcsQ0FDRixPQUFPLENBQUMsTUFBTSxFQUNk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QUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLElBQUksQ0FBQztvQkFDSCxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakUsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDdEQsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7d0JBQ2pDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt3QkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3FCQUN2QixDQUFDO2lCQUNILENBQUM7WUFQRixDQU9FLEVBQ0gsQ0FDRjtRQW5CSCxDQW1CRyxFQUNKLENBQ0YsQ0FBQztJQUtDLENBQUM7O2dCQS9HTCxVQUFVOzs7O2dCQVJGLE9BQU87Z0JBSVAsa0JBQWtCOztJQU96QjtRQURDLE1BQU0sRUFBRTswQ0FDRSxVQUFVO3VEQXFDbkI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSyxVQUFVOzBEQThCdEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSyxVQUFVOzBEQThCdEI7SUFNSix1QkFBQztDQUFBLEFBaEhELElBZ0hDO1NBL0dZLGdCQUFnQjs7O0lBQzNCLHFDQXNDRTs7SUFFRix3Q0ErQkU7O0lBRUYsd0NBK0JFOzs7OztJQUdBLG9DQUF5Qjs7Ozs7SUFDekIsOENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGNvbmNhdE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENhcnRFbnRyeUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvZW50cnkvY2FydC1lbnRyeS5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgRGVwcmVjYXRlZENhcnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY2FydC5hY3Rpb24nO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFbnRyeUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgYWRkRW50cnkkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5RmFpbFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydEVudHJ5Q29ubmVjdG9yXG4gICAgICAgIC5hZGQoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICBwYXlsb2FkLnF1YW50aXR5XG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKGVudHJ5OiBhbnkpID0+XG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeUZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbW92ZUVudHJ5JDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeUZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWSksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRFbnRyeUNvbm5lY3RvclxuICAgICAgICAucmVtb3ZlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbnRyeSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5U3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeUZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVFbnRyeSQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUlkpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBjb25jYXRNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0RW50cnlDb25uZWN0b3JcbiAgICAgICAgLnVwZGF0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW50cnksIHBheWxvYWQucXR5KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlTdWNjZXNzKHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnQocGF5bG9hZC5jYXJ0SWQpLFxuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRFbnRyeUNvbm5lY3RvcjogQ2FydEVudHJ5Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==