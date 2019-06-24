/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { CURRENCY_CHANGE, LANGUAGE_CHANGE } from '../../../site-context/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { CartDataService } from '../../facade/cart-data.service';
import * as fromActions from './../actions/cart.action';
export class CartEffects {
    /**
     * @param {?} actions$
     * @param {?} cartConnector
     * @param {?} cartData
     */
    constructor(actions$, cartConnector, cartData) {
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.cartData = cartData;
        this.loadCart$ = this.actions$.pipe(ofType(fromActions.LOAD_CART, LANGUAGE_CHANGE, CURRENCY_CHANGE), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
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
                .pipe(map((/**
             * @param {?} cart
             * @return {?}
             */
            (cart) => {
                return new fromActions.LoadCartSuccess(cart);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.LoadCartFail(makeErrorSerializable(error))))));
        })));
        this.createCart$ = this.actions$.pipe(ofType(fromActions.CREATE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.cartConnector
                .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap((/**
             * @param {?} cart
             * @return {?}
             */
            (cart) => {
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
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.CreateCartFail(makeErrorSerializable(error))))));
        })));
        this.mergeCart$ = this.actions$.pipe(ofType(fromActions.MERGE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.cartConnector.load(payload.userId, 'current').pipe(map((/**
             * @param {?} currentCart
             * @return {?}
             */
            currentCart => {
                return new fromActions.CreateCart({
                    userId: payload.userId,
                    oldCartId: payload.cartId,
                    toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                });
            })));
        })));
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
    CartEffects.prototype.cartConnector;
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.cartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEtBQUssV0FBVyxNQUFNLDBCQUEwQixDQUFDO0FBR3hELE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUEyRnRCLFlBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsUUFBeUI7UUFGekIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQTVGbkMsY0FBUyxHQUVMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDLEVBQy9ELEdBQUc7Ozs7UUFDRCxDQUFDLE1BR0EsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFDckIsRUFDRCxRQUFROzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7O2tCQUNYLGNBQWMsR0FBRztnQkFDckIsTUFBTSxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQzNELE1BQU0sRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUMzRCxPQUFPLEVBQ0wsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssU0FBUztvQkFDdEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPO29CQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO2FBQy9CO1lBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QztZQUVELE9BQU8sSUFBSSxDQUFDLGFBQWE7aUJBQ3RCLElBQUksQ0FDSCxjQUFjLENBQUMsTUFBTSxFQUNyQixjQUFjLENBQUMsTUFBTSxFQUNyQixjQUFjLENBQUMsT0FBTyxDQUN2QjtpQkFDQSxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDL0QsQ0FDRixDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLGdCQUFXLEdBSVAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQy9CLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQThCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDdkQsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWE7aUJBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztpQkFDbEUsSUFBSSxDQUNILFNBQVM7Ozs7WUFBQyxDQUFDLElBQVUsRUFBRSxFQUFFO2dCQUN2QixJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0JBQ3JCLE9BQU87d0JBQ0wsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO3dCQUN2QyxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQzs0QkFDL0IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNOzRCQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7eUJBQ2xCLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDtnQkFDRCxPQUFPLENBQUMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ2pFLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixlQUFVLEdBQXVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNqRSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUM5QixHQUFHOzs7O1FBQUMsQ0FBQyxNQUE2QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ3RELFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUM1RCxHQUFHOzs7O1lBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDO29CQUNoQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07b0JBQ3RCLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTTtvQkFDekIsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUztpQkFDNUQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFNQyxDQUFDOzs7Ozs7SUFFSSxhQUFhLENBQUMsT0FBTztRQUMzQixPQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ3RFLENBQUM7OztZQXBHRixVQUFVOzs7O1lBVkYsT0FBTztZQU1QLGFBQWE7WUFDYixlQUFlOztBQU10QjtJQURDLE1BQU0sRUFBRTtzQ0FDRSxVQUFVOzhDQXVDbkI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSSxVQUFVO2dEQTRCckI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDRyxVQUFVOytDQWNwQjs7O0lBeEZGLGdDQXdDRTs7SUFFRixrQ0E2QkU7O0lBRUYsaUNBZUU7Ozs7O0lBR0EsK0JBQXlCOzs7OztJQUN6QixvQ0FBb0M7Ozs7O0lBQ3BDLCtCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ1VSUkVOQ1lfQ0hBTkdFLCBMQU5HVUFHRV9DSEFOR0UgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2NhcnQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4vLi4vYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuTG9hZENhcnRGYWlsIHwgZnJvbUFjdGlvbnMuTG9hZENhcnRTdWNjZXNzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfQ0FSVCwgTEFOR1VBR0VfQ0hBTkdFLCBDVVJSRU5DWV9DSEFOR0UpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IHtcbiAgICAgICAgdHlwZTogc3RyaW5nO1xuICAgICAgICBwYXlsb2FkPzogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGRldGFpbHM/OiBib29sZWFuIH07XG4gICAgICB9KSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICBjb25zdCBsb2FkQ2FydFBhcmFtcyA9IHtcbiAgICAgICAgdXNlcklkOiAocGF5bG9hZCAmJiBwYXlsb2FkLnVzZXJJZCkgfHwgdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgIGNhcnRJZDogKHBheWxvYWQgJiYgcGF5bG9hZC5jYXJ0SWQpIHx8IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICBkZXRhaWxzOlxuICAgICAgICAgIHBheWxvYWQgJiYgcGF5bG9hZC5kZXRhaWxzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gcGF5bG9hZC5kZXRhaWxzXG4gICAgICAgICAgICA6IHRoaXMuY2FydERhdGEuZ2V0RGV0YWlscyxcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmlzTWlzc2luZ0RhdGEobG9hZENhcnRQYXJhbXMpKSB7XG4gICAgICAgIHJldHVybiBvZihuZXcgZnJvbUFjdGlvbnMuTG9hZENhcnRGYWlsKHt9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmxvYWQoXG4gICAgICAgICAgbG9hZENhcnRQYXJhbXMudXNlcklkLFxuICAgICAgICAgIGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCxcbiAgICAgICAgICBsb2FkQ2FydFBhcmFtcy5kZXRhaWxzXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChjYXJ0OiBDYXJ0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLkxvYWRDYXJ0U3VjY2VzcyhjYXJ0KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbnMuTG9hZENhcnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGVDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21BY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3NcbiAgICB8IGZyb21BY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzXG4gICAgfCBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5DUkVBVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkNyZWF0ZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmNyZWF0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vbGRDYXJ0SWQsIHBheWxvYWQudG9NZXJnZUNhcnRHdWlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKGNhcnQ6IENhcnQpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLm9sZENhcnRJZCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyhjYXJ0KSxcbiAgICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW25ldyBmcm9tQWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyhjYXJ0KV07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21BY3Rpb25zLkNyZWF0ZUNhcnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBtZXJnZUNhcnQkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLkNyZWF0ZUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5NRVJHRV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTWVyZ2VDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmxvYWQocGF5bG9hZC51c2VySWQsICdjdXJyZW50JykucGlwZShcbiAgICAgICAgbWFwKGN1cnJlbnRDYXJ0ID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgIG9sZENhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgaXNNaXNzaW5nRGF0YShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHBheWxvYWQudXNlcklkID09PSB1bmRlZmluZWQgfHwgcGF5bG9hZC5jYXJ0SWQgPT09IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19