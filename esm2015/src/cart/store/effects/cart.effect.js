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
import { CartConnector } from '../../connectors/cart/cart.connector';
export class CartEffects {
    /**
     * @param {?} actions$
     * @param {?} productImageConverter
     * @param {?} cartConnector
     * @param {?} cartData
     */
    constructor(actions$, productImageConverter, cartConnector, cartData) {
        this.actions$ = actions$;
        this.productImageConverter = productImageConverter;
        this.cartConnector = cartConnector;
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
            return this.cartConnector
                .load(loadCartParams.userId, loadCartParams.cartId, loadCartParams.details)
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
            return this.cartConnector
                .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
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
            return this.cartConnector.load(payload.userId, 'current').pipe(map(currentCart => {
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
    { type: CartConnector },
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
    CartEffects.prototype.cartConnector;
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.cartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0UsT0FBTyxLQUFLLFdBQVcsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR3JFLE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBOEZ0QixZQUNVLFFBQWlCLEVBQ2pCLHFCQUE2QyxFQUM3QyxhQUE0QixFQUM1QixRQUF5QjtRQUh6QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFDN0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFoR25DLGNBQVMsR0FFTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxFQUMvRCxH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Ozs7OztJQUdBLCtCQUF5Qjs7Ozs7SUFDekIsNENBQXFEOzs7OztJQUNyRCxvQ0FBb0M7Ozs7O0lBQ3BDLCtCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9pbmRleCc7XG5pbXBvcnQgeyBDVVJSRU5DWV9DSEFOR0UsIExBTkdVQUdFX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLy4uL2FjdGlvbnMvY2FydC5hY3Rpb24nO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2NhcnQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZENhcnQkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLkxvYWRDYXJ0RmFpbCB8IGZyb21BY3Rpb25zLkxvYWRDYXJ0U3VjY2Vzc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX0NBUlQsIExBTkdVQUdFX0NIQU5HRSwgQ1VSUkVOQ1lfQ0hBTkdFKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgICAgcGF5bG9hZD86IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBkZXRhaWxzPzogYm9vbGVhbiB9O1xuICAgICAgfSkgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgY29uc3QgbG9hZENhcnRQYXJhbXMgPSB7XG4gICAgICAgIHVzZXJJZDogKHBheWxvYWQgJiYgcGF5bG9hZC51c2VySWQpIHx8IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IChwYXlsb2FkICYmIHBheWxvYWQuY2FydElkKSB8fCB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgZGV0YWlsczpcbiAgICAgICAgICBwYXlsb2FkICYmIHBheWxvYWQuZGV0YWlscyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHBheWxvYWQuZGV0YWlsc1xuICAgICAgICAgICAgOiB0aGlzLmNhcnREYXRhLmdldERldGFpbHMsXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5pc01pc3NpbmdEYXRhKGxvYWRDYXJ0UGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gb2YobmV3IGZyb21BY3Rpb25zLkxvYWRDYXJ0RmFpbCh7fSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5sb2FkKFxuICAgICAgICAgIGxvYWRDYXJ0UGFyYW1zLnVzZXJJZCxcbiAgICAgICAgICBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQsXG4gICAgICAgICAgbG9hZENhcnRQYXJhbXMuZGV0YWlsc1xuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhcnQgJiYgY2FydC5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgY2FydC5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2VDb252ZXJ0ZXIuY29udmVydFByb2R1Y3QoZW50cnkucHJvZHVjdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuTG9hZENhcnRTdWNjZXNzKGNhcnQpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLkxvYWRDYXJ0RmFpbChlcnJvcikpKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbUFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzc1xuICAgIHwgZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3NcbiAgICB8IGZyb21BY3Rpb25zLkNyZWF0ZUNhcnRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkNSRUFURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuY3JlYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9sZENhcnRJZCwgcGF5bG9hZC50b01lcmdlQ2FydEd1aWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhcnQuZW50cmllcykge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGNhcnQuZW50cmllcykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdEltYWdlQ29udmVydGVyLmNvbnZlcnRQcm9kdWN0KGVudHJ5LnByb2R1Y3QpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5vbGRDYXJ0SWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3MoY2FydCksXG4gICAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3MoKSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbbmV3IGZyb21BY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzKGNhcnQpXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0RmFpbChlcnJvcikpKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLk1FUkdFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZChwYXlsb2FkLnVzZXJJZCwgJ2N1cnJlbnQnKS5waXBlKFxuICAgICAgICBtYXAoY3VycmVudENhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuQ3JlYXRlQ2FydCh7XG4gICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIHRvTWVyZ2VDYXJ0R3VpZDogY3VycmVudENhcnQgPyBjdXJyZW50Q2FydC5ndWlkIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0SW1hZ2VDb252ZXJ0ZXI6IFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIsXG4gICAgcHJpdmF0ZSBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgY2FydERhdGE6IENhcnREYXRhU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBpc01pc3NpbmdEYXRhKHBheWxvYWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZC51c2VySWQgPT09IHVuZGVmaW5lZCB8fCBwYXlsb2FkLmNhcnRJZCA9PT0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=