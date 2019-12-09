/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartEntryConnector } from '../../connectors/entry/cart-entry.connector';
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
        function (action) { return action.payload; })), mergeMap((/**
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
                return of(new CartActions.CartAddEntryFail(makeErrorSerializable(error)));
            })));
        })));
        this.addEntries$ = this.actions$.pipe(ofType(CartActions.CART_ADD_ENTRIES), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            /** @type {?} */
            var addEntry = (/**
             * @param {?} products
             * @param {?} userId
             * @param {?} cartId
             * @return {?}
             */
            function (products, userId, cartId) {
                if (products && products.length) {
                    var _a = tslib_1.__read(products), product = _a[0], leftEntries_1 = _a.slice(1);
                    return _this.cartEntryConnector
                        .add(userId, cartId, product.productCode, product.quantity)
                        .pipe(mergeMap((/**
                     * @return {?}
                     */
                    function () {
                        return addEntry(leftEntries_1, userId, cartId);
                    })));
                }
                return of({});
            });
            return addEntry(payload.products, payload.userId, payload.cartId).pipe(mergeMap((/**
             * @return {?}
             */
            function () {
                return [
                    new CartActions.CartAddEntriesSuccess({}),
                    new CartActions.LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                        extraData: {
                            addEntries: true,
                        },
                    }),
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return from([
                    new CartActions.CartAddEntriesFail(makeErrorSerializable(error)),
                    new CartActions.CartFailAddEntryProcess(),
                ]);
            })));
        })));
        this.removeEntry$ = this.actions$.pipe(ofType(CartActions.CART_REMOVE_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
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
                return of(new CartActions.CartRemoveEntryFail(makeErrorSerializable(error)));
            })));
        })));
        this.updateEntry$ = this.actions$.pipe(ofType(CartActions.CART_UPDATE_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
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
                return of(new CartActions.CartUpdateEntryFail(makeErrorSerializable(error)));
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
    ], CartEntryEffects.prototype, "addEntries$", void 0);
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
    CartEntryEffects.prototype.addEntries$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQtZW50cnkuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQztJQW9JRSwwQkFDVSxRQUFpQixFQUNqQixrQkFBc0M7UUFGaEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFuSWhELGNBQVMsR0FFTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFDbEMsR0FBRzs7OztRQUFDLFVBQUMsTUFBZ0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ3pELFFBQVE7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZCxPQUFBLEtBQUksQ0FBQyxrQkFBa0I7aUJBQ3BCLEdBQUcsQ0FDRixPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFD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Q0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBdklMLFVBQVU7Ozs7Z0JBUkYsT0FBTztnQkFJUCxrQkFBa0I7O0lBT3pCO1FBREMsTUFBTSxFQUFFOzBDQUNFLFVBQVU7dURBMkJuQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNJLFVBQVU7eURBK0NyQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7MERBc0J0QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7MERBc0J0QjtJQU1KLHVCQUFDO0NBQUEsQUF4SUQsSUF3SUM7U0F2SVksZ0JBQWdCOzs7SUFDM0IscUNBNEJFOztJQUVGLHVDQWdERTs7SUFFRix3Q0F1QkU7O0lBRUYsd0NBdUJFOzs7OztJQUdBLG9DQUF5Qjs7Ozs7SUFDekIsOENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENhcnRFbnRyeUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvZW50cnkvY2FydC1lbnRyeS5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENhcnRNb2RpZmljYXRpb24gfSBmcm9tICdwcm9qZWN0cy9jb3JlL3NyYy9tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RW50cnlFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGFkZEVudHJ5JDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlTdWNjZXNzIHwgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWSksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydEVudHJ5Q29ubmVjdG9yXG4gICAgICAgIC5hZGQoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICBwYXlsb2FkLnF1YW50aXR5XG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKGVudHJ5OiBhbnkpID0+XG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFkZEVudHJpZXMkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJpZXNTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cmllc0ZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRGYWlsQWRkRW50cnlQcm9jZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSSUVTKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJpZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIGNvbnN0IGFkZEVudHJ5ID0gKFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWRcbiAgICAgICk6IE9ic2VydmFibGU8Q2FydE1vZGlmaWNhdGlvbj4gPT4ge1xuICAgICAgICBpZiAocHJvZHVjdHMgJiYgcHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgW3Byb2R1Y3QsIC4uLmxlZnRFbnRyaWVzXSA9IHByb2R1Y3RzO1xuICAgICAgICAgIHJldHVybiB0aGlzLmNhcnRFbnRyeUNvbm5lY3RvclxuICAgICAgICAgICAgLmFkZCh1c2VySWQsIGNhcnRJZCwgcHJvZHVjdC5wcm9kdWN0Q29kZSwgcHJvZHVjdC5xdWFudGl0eSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZEVudHJ5KGxlZnRFbnRyaWVzLCB1c2VySWQsIGNhcnRJZCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZih7fSk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGFkZEVudHJ5KHBheWxvYWQucHJvZHVjdHMsIHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJpZXNTdWNjZXNzKHt9KSxcbiAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgICAgICAgIGFkZEVudHJpZXM6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyaWVzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSxcbiAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0RmFpbEFkZEVudHJ5UHJvY2VzcygpLFxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVtb3ZlRW50cnkkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnlGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0RW50cnlDb25uZWN0b3JcbiAgICAgICAgLnJlbW92ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW50cnkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3Moe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnlGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVFbnRyeSQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeUZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUlkpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRFbnRyeUNvbm5lY3RvclxuICAgICAgICAudXBkYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbnRyeSwgcGF5bG9hZC5xdHkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeVN1Y2Nlc3Moe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0RW50cnlDb25uZWN0b3I6IENhcnRFbnRyeUNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=