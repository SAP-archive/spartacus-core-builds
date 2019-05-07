/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { CURRENCY_CHANGE, LANGUAGE_CHANGE } from '../../../site-context/index';
import * as fromActions from './../actions/cart.action';
import { CartDataService } from '../../facade/cart-data.service';
import { CartConnector } from '../../connectors/cart/cart.connector';
var CartEffects = /** @class */ (function () {
    function CartEffects(actions$, cartConnector, cartData) {
        var _this = this;
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.cartData = cartData;
        this.loadCart$ = this.actions$.pipe(ofType(fromActions.LOAD_CART, LANGUAGE_CHANGE, CURRENCY_CHANGE), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            /** @type {?} */
            var loadCartParams = {
                userId: (payload && payload.userId) || _this.cartData.userId,
                cartId: (payload && payload.cartId) || _this.cartData.cartId,
                details: payload && payload.details !== undefined
                    ? payload.details
                    : _this.cartData.getDetails,
            };
            if (_this.isMissingData(loadCartParams)) {
                return of(new fromActions.LoadCartFail({}));
            }
            return _this.cartConnector
                .load(loadCartParams.userId, loadCartParams.cartId, loadCartParams.details)
                .pipe(map(function (cart) {
                return new fromActions.LoadCartSuccess(cart);
            }), catchError(function (error) { return of(new fromActions.LoadCartFail(error)); }));
        }));
        this.createCart$ = this.actions$.pipe(ofType(fromActions.CREATE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector
                .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap(function (cart) {
                if (payload.oldCartId) {
                    return [
                        new fromActions.CreateCartSuccess(cart),
                        new fromActions.MergeCartSuccess({
                            userId: payload.userId,
                            cartId: cart.code,
                        }),
                    ];
                }
                return [new fromActions.CreateCartSuccess(cart)];
            }), catchError(function (error) { return of(new fromActions.CreateCartFail(error)); }));
        }));
        this.mergeCart$ = this.actions$.pipe(ofType(fromActions.MERGE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector.load(payload.userId, 'current').pipe(map(function (currentCart) {
                return new fromActions.CreateCart({
                    userId: payload.userId,
                    oldCartId: payload.cartId,
                    toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                });
            }));
        }));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    CartEffects.prototype.isMissingData = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return payload.userId === undefined || payload.cartId === undefined;
    };
    CartEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartConnector },
        { type: CartDataService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEffects.prototype, "loadCart$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEffects.prototype, "createCart$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEffects.prototype, "mergeCart$", void 0);
    return CartEffects;
}());
export { CartEffects };
if (false) {
    /** @type {?} */
    CartEffects.prototype.loadCart$;
    /** @type {?} */
    CartEffects.prototype.createCart$;
    /** @type {?} */
    CartEffects.prototype.mergeCart$;
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.cartConnector;
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.cartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0UsT0FBTyxLQUFLLFdBQVcsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR3JFO0lBd0ZFLHFCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLFFBQXlCO1FBSG5DLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQXhGbkMsY0FBUyxHQUVMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDLEVBQy9ELEdBQUcsQ0FDRCxVQUFDLE1BR0EsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUNyQixFQUNELFFBQVEsQ0FBQyxVQUFBLE9BQU87O2dCQUNSLGNBQWMsR0FB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QUFDLFVBQVUsQ0FBQztvQkFDaEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO29CQUN0QixTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU07b0JBQ3pCLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7aUJBQzVELENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7Ozs7O0lBRUksbUNBQWE7Ozs7O0lBQXJCLFVBQXNCLE9BQU87UUFDM0IsT0FBTyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztJQUN0RSxDQUFDOztnQkFoR0YsVUFBVTs7OztnQkFURixPQUFPO2dCQU1QLGFBQWE7Z0JBRGIsZUFBZTs7SUFPdEI7UUFEQyxNQUFNLEVBQUU7MENBQ0UsVUFBVTtrREFxQ25CO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ksVUFBVTtvREEwQnJCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0csVUFBVTttREFjcEI7SUFXSixrQkFBQztDQUFBLEFBakdELElBaUdDO1NBaEdZLFdBQVc7OztJQUN0QixnQ0FzQ0U7O0lBRUYsa0NBMkJFOztJQUVGLGlDQWVFOzs7OztJQUdBLCtCQUF5Qjs7Ozs7SUFDekIsb0NBQW9DOzs7OztJQUNwQywrQkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENVUlJFTkNZX0NIQU5HRSwgTEFOR1VBR0VfQ0hBTkdFIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4vLi4vYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVSUNhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5Mb2FkQ2FydEZhaWwgfCBmcm9tQWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3NcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9DQVJULCBMQU5HVUFHRV9DSEFOR0UsIENVUlJFTkNZX0NIQU5HRSksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjoge1xuICAgICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICAgIHBheWxvYWQ/OiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgZGV0YWlscz86IGJvb2xlYW4gfTtcbiAgICAgIH0pID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIGNvbnN0IGxvYWRDYXJ0UGFyYW1zID0ge1xuICAgICAgICB1c2VySWQ6IChwYXlsb2FkICYmIHBheWxvYWQudXNlcklkKSB8fCB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiAocGF5bG9hZCAmJiBwYXlsb2FkLmNhcnRJZCkgfHwgdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgIGRldGFpbHM6XG4gICAgICAgICAgcGF5bG9hZCAmJiBwYXlsb2FkLmRldGFpbHMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBwYXlsb2FkLmRldGFpbHNcbiAgICAgICAgICAgIDogdGhpcy5jYXJ0RGF0YS5nZXREZXRhaWxzLFxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuaXNNaXNzaW5nRGF0YShsb2FkQ2FydFBhcmFtcykpIHtcbiAgICAgICAgcmV0dXJuIG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkQ2FydEZhaWwoe30pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAubG9hZChcbiAgICAgICAgICBsb2FkQ2FydFBhcmFtcy51c2VySWQsXG4gICAgICAgICAgbG9hZENhcnRQYXJhbXMuY2FydElkLFxuICAgICAgICAgIGxvYWRDYXJ0UGFyYW1zLmRldGFpbHNcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGNhcnQ6IFVJQ2FydCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3MoY2FydCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuTG9hZENhcnRGYWlsKGVycm9yKSkpXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tQWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzXG4gICAgfCBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2Vzc1xuICAgIHwgZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuQ1JFQVRFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQub2xkQ2FydElkLCBwYXlsb2FkLnRvTWVyZ2VDYXJ0R3VpZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChjYXJ0OiBVSUNhcnQpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLm9sZENhcnRJZCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyhjYXJ0KSxcbiAgICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW25ldyBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyhjYXJ0KV07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydEZhaWwoZXJyb3IpKSlcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBtZXJnZUNhcnQkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLkNyZWF0ZUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5NRVJHRV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTWVyZ2VDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmxvYWQocGF5bG9hZC51c2VySWQsICdjdXJyZW50JykucGlwZShcbiAgICAgICAgbWFwKGN1cnJlbnRDYXJ0ID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgIG9sZENhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgaXNNaXNzaW5nRGF0YShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHBheWxvYWQudXNlcklkID09PSB1bmRlZmluZWQgfHwgcGF5bG9hZC5jYXJ0SWQgPT09IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19