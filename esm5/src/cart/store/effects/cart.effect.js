/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ProductImageConverterService } from '../../../product/index';
import { CURRENCY_CHANGE, LANGUAGE_CHANGE } from '../../../site-context/index';
import * as fromActions from './../actions/cart.action';
import { CartDataService } from '../../facade/cart-data.service';
import { OccCartService } from '../../occ/cart.service';
var CartEffects = /** @class */ (function () {
    function CartEffects(actions$, productImageConverter, occCartService, cartData) {
        var _this = this;
        this.actions$ = actions$;
        this.productImageConverter = productImageConverter;
        this.occCartService = occCartService;
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
            return _this.occCartService
                .loadCart(loadCartParams.userId, loadCartParams.cartId, loadCartParams.details)
                .pipe(map(function (cart) {
                var e_1, _a;
                if (cart && cart.entries) {
                    try {
                        for (var _b = tslib_1.__values(cart.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var entry = _c.value;
                            _this.productImageConverter.convertProduct(entry.product);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return new fromActions.LoadCartSuccess(cart);
            }), catchError(function (error) { return of(new fromActions.LoadCartFail(error)); }));
        }));
        this.createCart$ = this.actions$.pipe(ofType(fromActions.CREATE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .createCart(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap(function (cart) {
                var e_2, _a;
                if (cart.entries) {
                    try {
                        for (var _b = tslib_1.__values(cart.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var entry = _c.value;
                            _this.productImageConverter.convertProduct(entry.product);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                if (payload.oldCartId) {
                    return [
                        new fromActions.CreateCartSuccess(cart),
                        new fromActions.MergeCartSuccess(),
                    ];
                }
                return [new fromActions.CreateCartSuccess(cart)];
            }), catchError(function (error) { return of(new fromActions.CreateCartFail(error)); }));
        }));
        this.mergeCart$ = this.actions$.pipe(ofType(fromActions.MERGE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService.loadCart(payload.userId, 'current').pipe(map(function (currentCart) {
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
        { type: ProductImageConverterService },
        { type: OccCartService },
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
    CartEffects.prototype.productImageConverter;
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.occCartService;
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.cartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0UsT0FBTyxLQUFLLFdBQVcsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3hEO0lBK0ZFLHFCQUNVLFFBQWlCLEVBQ2pCLHFCQUFtRCxFQUNuRCxjQUE4QixFQUM5QixRQUF5QjtRQUpuQyxpQkFLSTtRQUpNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUE4QjtRQUNuRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFoR25DLGNBQVMsR0FFTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxFQUMvRCxHQUFHLENBQ0Qs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SSxVQUFVO29EQTRCckI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDRyxVQUFVO21EQWNwQjtJQVlKLGtCQUFDO0NBQUEsQUF6R0QsSUF5R0M7U0F4R1ksV0FBVzs7O0lBQ3RCLGdDQTJDRTs7SUFFRixrQ0E2QkU7O0lBRUYsaUNBZUU7Ozs7O0lBR0EsK0JBQXlCOzs7OztJQUN6Qiw0Q0FBMkQ7Ozs7O0lBQzNELHFDQUFzQzs7Ozs7SUFDdEMsK0JBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFByb2R1Y3RJbWFnZUNvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2luZGV4JztcbmltcG9ydCB7IENVUlJFTkNZX0NIQU5HRSwgTEFOR1VBR0VfQ0hBTkdFIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4vLi4vYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5Mb2FkQ2FydEZhaWwgfCBmcm9tQWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3NcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9DQVJULCBMQU5HVUFHRV9DSEFOR0UsIENVUlJFTkNZX0NIQU5HRSksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjoge1xuICAgICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICAgIHBheWxvYWQ/OiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgZGV0YWlscz86IGJvb2xlYW4gfTtcbiAgICAgIH0pID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIGNvbnN0IGxvYWRDYXJ0UGFyYW1zID0ge1xuICAgICAgICB1c2VySWQ6IChwYXlsb2FkICYmIHBheWxvYWQudXNlcklkKSB8fCB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiAocGF5bG9hZCAmJiBwYXlsb2FkLmNhcnRJZCkgfHwgdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgIGRldGFpbHM6XG4gICAgICAgICAgcGF5bG9hZCAmJiBwYXlsb2FkLmRldGFpbHMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBwYXlsb2FkLmRldGFpbHNcbiAgICAgICAgICAgIDogdGhpcy5jYXJ0RGF0YS5nZXREZXRhaWxzLFxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuaXNNaXNzaW5nRGF0YShsb2FkQ2FydFBhcmFtcykpIHtcbiAgICAgICAgcmV0dXJuIG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkQ2FydEZhaWwoe30pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMub2NjQ2FydFNlcnZpY2VcbiAgICAgICAgLmxvYWRDYXJ0KFxuICAgICAgICAgIGxvYWRDYXJ0UGFyYW1zLnVzZXJJZCxcbiAgICAgICAgICBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQsXG4gICAgICAgICAgbG9hZENhcnRQYXJhbXMuZGV0YWlsc1xuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhcnQgJiYgY2FydC5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgY2FydC5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2VDb252ZXJ0ZXIuY29udmVydFByb2R1Y3QoZW50cnkucHJvZHVjdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuTG9hZENhcnRTdWNjZXNzKGNhcnQpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLkxvYWRDYXJ0RmFpbChlcnJvcikpKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbUFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzc1xuICAgIHwgZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3NcbiAgICB8IGZyb21BY3Rpb25zLkNyZWF0ZUNhcnRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkNSRUFURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjQ2FydFNlcnZpY2VcbiAgICAgICAgLmNyZWF0ZUNhcnQocGF5bG9hZC51c2VySWQsIHBheWxvYWQub2xkQ2FydElkLCBwYXlsb2FkLnRvTWVyZ2VDYXJ0R3VpZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChjYXJ0OiBDYXJ0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FydC5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgY2FydC5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2VDb252ZXJ0ZXIuY29udmVydFByb2R1Y3QoZW50cnkucHJvZHVjdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXlsb2FkLm9sZENhcnRJZCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyhjYXJ0KSxcbiAgICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2VzcygpLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3MoY2FydCldO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLkNyZWF0ZUNhcnRGYWlsKGVycm9yKSkpXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbWVyZ2VDYXJ0JDogT2JzZXJ2YWJsZTxmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTUVSR0VfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLk1lcmdlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjQ2FydFNlcnZpY2UubG9hZENhcnQocGF5bG9hZC51c2VySWQsICdjdXJyZW50JykucGlwZShcbiAgICAgICAgbWFwKGN1cnJlbnRDYXJ0ID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgIG9sZENhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdEltYWdlQ29udmVydGVyOiBQcm9kdWN0SW1hZ2VDb252ZXJ0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjQ2FydFNlcnZpY2U6IE9jY0NhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydERhdGE6IENhcnREYXRhU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBpc01pc3NpbmdEYXRhKHBheWxvYWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZC51c2VySWQgPT09IHVuZGVmaW5lZCB8fCBwYXlsb2FkLmNhcnRJZCA9PT0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=