/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ProductImageNormalizer } from '../../../product/index';
import { CURRENCY_CHANGE, LANGUAGE_CHANGE } from '../../../site-context/index';
import * as fromActions from './../actions/cart.action';
import { CartDataService } from '../../facade/cart-data.service';
import { OccCartService } from '../../occ/cart.service';
export class CartEffects {
    /**
     * @param {?} actions$
     * @param {?} productImageConverter
     * @param {?} occCartService
     * @param {?} cartData
     */
    constructor(actions$, productImageConverter, occCartService, cartData) {
        this.actions$ = actions$;
        this.productImageConverter = productImageConverter;
        this.occCartService = occCartService;
        this.cartData = cartData;
        this.loadCart$ = this.actions$.pipe(ofType(fromActions.LOAD_CART, LANGUAGE_CHANGE, CURRENCY_CHANGE), map((action) => action.payload), mergeMap(payload => {
            /** @type {?} */
            const loadCartParams = {
                userId: (payload && payload.userId) || this.cartData.userId,
                cartId: (payload && payload.cartId) || this.cartData.cartId,
                details: payload && payload.details !== undefined
                    ? payload.details
                    : this.cartData.getDetails,
            };
            if (this.isMissingData(loadCartParams)) {
                return of(new fromActions.LoadCartFail({}));
            }
            return this.occCartService
                .loadCart(loadCartParams.userId, loadCartParams.cartId, loadCartParams.details)
                .pipe(map((cart) => {
                if (cart && cart.entries) {
                    for (const entry of cart.entries) {
                        this.productImageConverter.convertProduct(entry.product);
                    }
                }
                return new fromActions.LoadCartSuccess(cart);
            }), catchError(error => of(new fromActions.LoadCartFail(error))));
        }));
        this.createCart$ = this.actions$.pipe(ofType(fromActions.CREATE_CART), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService
                .createCart(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap((cart) => {
                if (cart.entries) {
                    for (const entry of cart.entries) {
                        this.productImageConverter.convertProduct(entry.product);
                    }
                }
                if (payload.oldCartId) {
                    return [
                        new fromActions.CreateCartSuccess(cart),
                        new fromActions.MergeCartSuccess(),
                    ];
                }
                return [new fromActions.CreateCartSuccess(cart)];
            }), catchError(error => of(new fromActions.CreateCartFail(error))));
        }));
        this.mergeCart$ = this.actions$.pipe(ofType(fromActions.MERGE_CART), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService.loadCart(payload.userId, 'current').pipe(map(currentCart => {
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
    isMissingData(payload) {
        return payload.userId === undefined || payload.cartId === undefined;
    }
}
CartEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductImageNormalizer },
    { type: OccCartService },
    { type: CartDataService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0UsT0FBTyxLQUFLLFdBQVcsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSXhELE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBOEZ0QixZQUNVLFFBQWlCLEVBQ2pCLHFCQUE2QyxFQUM3QyxjQUE4QixFQUM5QixRQUF5QjtRQUh6QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFDN0MsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBaEduQyxjQUFTLEdBRUwsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUMsRUFDL0Qs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RTs7Ozs7SUFHQSwrQkFBeUI7Ozs7O0lBQ3pCLDRDQUFxRDs7Ozs7SUFDckQscUNBQXNDOzs7OztJQUN0QywrQkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUHJvZHVjdEltYWdlTm9ybWFsaXplciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgQ1VSUkVOQ1lfQ0hBTkdFLCBMQU5HVUFHRV9DSEFOR0UgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi8uLi9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnREYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZENhcnQkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLkxvYWRDYXJ0RmFpbCB8IGZyb21BY3Rpb25zLkxvYWRDYXJ0U3VjY2Vzc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX0NBUlQsIExBTkdVQUdFX0NIQU5HRSwgQ1VSUkVOQ1lfQ0hBTkdFKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgICAgcGF5bG9hZD86IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBkZXRhaWxzPzogYm9vbGVhbiB9O1xuICAgICAgfSkgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgY29uc3QgbG9hZENhcnRQYXJhbXMgPSB7XG4gICAgICAgIHVzZXJJZDogKHBheWxvYWQgJiYgcGF5bG9hZC51c2VySWQpIHx8IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IChwYXlsb2FkICYmIHBheWxvYWQuY2FydElkKSB8fCB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgZGV0YWlsczpcbiAgICAgICAgICBwYXlsb2FkICYmIHBheWxvYWQuZGV0YWlscyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHBheWxvYWQuZGV0YWlsc1xuICAgICAgICAgICAgOiB0aGlzLmNhcnREYXRhLmdldERldGFpbHMsXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5pc01pc3NpbmdEYXRhKGxvYWRDYXJ0UGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gb2YobmV3IGZyb21BY3Rpb25zLkxvYWRDYXJ0RmFpbCh7fSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5vY2NDYXJ0U2VydmljZVxuICAgICAgICAubG9hZENhcnQoXG4gICAgICAgICAgbG9hZENhcnRQYXJhbXMudXNlcklkLFxuICAgICAgICAgIGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCxcbiAgICAgICAgICBsb2FkQ2FydFBhcmFtcy5kZXRhaWxzXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChjYXJ0OiBDYXJ0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FydCAmJiBjYXJ0LmVudHJpZXMpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBjYXJ0LmVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RJbWFnZUNvbnZlcnRlci5jb252ZXJ0UHJvZHVjdChlbnRyeS5wcm9kdWN0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3MoY2FydCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuTG9hZENhcnRGYWlsKGVycm9yKSkpXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tQWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzXG4gICAgfCBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2Vzc1xuICAgIHwgZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuQ1JFQVRFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NDYXJ0U2VydmljZVxuICAgICAgICAuY3JlYXRlQ2FydChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vbGRDYXJ0SWQsIHBheWxvYWQudG9NZXJnZUNhcnRHdWlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKGNhcnQ6IENhcnQpID0+IHtcbiAgICAgICAgICAgIGlmIChjYXJ0LmVudHJpZXMpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBjYXJ0LmVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RJbWFnZUNvbnZlcnRlci5jb252ZXJ0UHJvZHVjdChlbnRyeS5wcm9kdWN0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBheWxvYWQub2xkQ2FydElkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzKGNhcnQpLFxuICAgICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzKCksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW25ldyBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyhjYXJ0KV07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydEZhaWwoZXJyb3IpKSlcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBtZXJnZUNhcnQkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLkNyZWF0ZUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5NRVJHRV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTWVyZ2VDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NDYXJ0U2VydmljZS5sb2FkQ2FydChwYXlsb2FkLnVzZXJJZCwgJ2N1cnJlbnQnKS5waXBlKFxuICAgICAgICBtYXAoY3VycmVudENhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydCh7XG4gICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIHRvTWVyZ2VDYXJ0R3VpZDogY3VycmVudENhcnQgPyBjdXJyZW50Q2FydC5ndWlkIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0SW1hZ2VDb252ZXJ0ZXI6IFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIsXG4gICAgcHJpdmF0ZSBvY2NDYXJ0U2VydmljZTogT2NjQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGlzTWlzc2luZ0RhdGEocGF5bG9hZCkge1xuICAgIHJldHVybiBwYXlsb2FkLnVzZXJJZCA9PT0gdW5kZWZpbmVkIHx8IHBheWxvYWQuY2FydElkID09PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==