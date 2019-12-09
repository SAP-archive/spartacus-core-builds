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
export class CartEntryEffects {
    /**
     * @param {?} actions$
     * @param {?} cartEntryConnector
     */
    constructor(actions$, cartEntryConnector) {
        this.actions$ = actions$;
        this.cartEntryConnector = cartEntryConnector;
        this.addEntry$ = this.actions$.pipe(ofType(CartActions.CART_ADD_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.cartEntryConnector
            .add(payload.userId, payload.cartId, payload.productCode, payload.quantity)
            .pipe(map((/**
         * @param {?} entry
         * @return {?}
         */
        (entry) => new CartActions.CartAddEntrySuccess(Object.assign({}, entry, { userId: payload.userId, cartId: payload.cartId })))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new CartActions.CartAddEntryFail(makeErrorSerializable(error)))))))));
        this.addEntries$ = this.actions$.pipe(ofType(CartActions.CART_ADD_ENTRIES), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            /** @type {?} */
            const addEntry = (/**
             * @param {?} products
             * @param {?} userId
             * @param {?} cartId
             * @return {?}
             */
            (products, userId, cartId) => {
                if (products && products.length) {
                    const [product, ...leftEntries] = products;
                    return this.cartEntryConnector
                        .add(userId, cartId, product.productCode, product.quantity)
                        .pipe(mergeMap((/**
                     * @return {?}
                     */
                    () => {
                        return addEntry(leftEntries, userId, cartId);
                    })));
                }
                return of({});
            });
            return addEntry(payload.products, payload.userId, payload.cartId).pipe(mergeMap((/**
             * @return {?}
             */
            () => {
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
            error => from([
                new CartActions.CartAddEntriesFail(makeErrorSerializable(error)),
                new CartActions.CartFailAddEntryProcess(),
            ]))));
        })));
        this.removeEntry$ = this.actions$.pipe(ofType(CartActions.CART_REMOVE_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.cartEntryConnector
            .remove(payload.userId, payload.cartId, payload.entry)
            .pipe(map((/**
         * @return {?}
         */
        () => {
            return new CartActions.CartRemoveEntrySuccess({
                userId: payload.userId,
                cartId: payload.cartId,
            });
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new CartActions.CartRemoveEntryFail(makeErrorSerializable(error)))))))));
        this.updateEntry$ = this.actions$.pipe(ofType(CartActions.CART_UPDATE_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.cartEntryConnector
            .update(payload.userId, payload.cartId, payload.entry, payload.qty)
            .pipe(map((/**
         * @return {?}
         */
        () => {
            return new CartActions.CartUpdateEntrySuccess({
                userId: payload.userId,
                cartId: payload.cartId,
            });
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new CartActions.CartUpdateEntryFail(makeErrorSerializable(error)))))))));
    }
}
CartEntryEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartEntryEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartEntryConnector }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQtZW50cnkuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUkvQyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQW1JM0IsWUFDVSxRQUFpQixFQUNqQixrQkFBc0M7UUFEdEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBbkloRCxjQUFTLEdBRUwsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWdDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDekQsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2pCLElBQUksQ0FBQyxrQkFBa0I7YUFDcEIsR0FBRyxDQUNGLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsV0FBVyxFQUNuQixPQUFPLENBQUMsUUFBUSxDQUNqQjthQUNBLElBQUksQ0FDSCxHQUFHOzs7O1FBQ0QsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUNiLElBQUksV0FBVyxDQUFDLG1CQUFtQixtQkFDOUIsS0FBSyxJQUNSLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFDdEIsRUFDTCxFQUNELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNuRSxDQUNGLEVBQ0osQ0FDRixDQUFDO1FBR0YsZ0JBQVcsR0FLUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNwQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFrQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzNELFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTs7a0JBQ1gsUUFBUTs7Ozs7O1lBQUcsQ0FDZixRQUFRLEVBQ1IsTUFBTSxFQUNOLE1BQU0sRUFDd0IsRUFBRTtnQkFDaEMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTswQkFDekIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxXQUFXLENBQUMsR0FBRyxRQUFRO29CQUMxQyxPQUFPLElBQUksQ0FBQyxrQkFBa0I7eUJBQzNCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQzt5QkFDMUQsSUFBSSxDQUNILFFBQVE7OztvQkFBQyxHQUFHLEVBQUU7d0JBQ1osT0FBTyxRQUFRLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDL0MsQ0FBQyxFQUFDLENBQ0gsQ0FBQztpQkFDTDtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUE7WUFDRCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDcEUsUUFBUTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNaLE9BQU87b0JBQ0wsSUFBSSxXQUFXLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDO29CQUN6QyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUM7d0JBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt3QkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixTQUFTLEVBQUU7NEJBQ1QsVUFBVSxFQUFFLElBQUk7eUJBQ2pCO3FCQUNGLENBQUM7aUJBQ0gsQ0FBQztZQUNKLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixJQUFJLENBQUM7Z0JBQ0gsSUFBSSxXQUFXLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksV0FBVyxDQUFDLHVCQUF1QixFQUFFO2FBQzFDLENBQUMsRUFDSCxDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YsaUJBQVksR0FFUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNyQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFnQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ3pELFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUNqQixJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNyRCxJQUFJLENBQ0gsR0FBRzs7O1FBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDNUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07YUFDdkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNsRSxFQUNGLENBQ0YsRUFDSixDQUNGLENBQUM7UUFHRixpQkFBWSxHQUVSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEVBQ3JDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWdDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDekQsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2pCLElBQUksQ0FBQyxrQkFBa0I7YUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDbEUsSUFBSSxDQUNILEdBQUc7OztRQUFDLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUM7Z0JBQzVDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2FBQ3ZCLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbEUsRUFDRixDQUNGLEVBQ0osQ0FDRixDQUFDO0lBS0MsQ0FBQzs7O1lBdklMLFVBQVU7Ozs7WUFSRixPQUFPO1lBSVAsa0JBQWtCOztBQU96QjtJQURDLE1BQU0sRUFBRTtzQ0FDRSxVQUFVO21EQTJCbkI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSSxVQUFVO3FEQStDckI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSyxVQUFVO3NEQXNCdEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSyxVQUFVO3NEQXNCdEI7OztJQWhJRixxQ0E0QkU7O0lBRUYsdUNBZ0RFOztJQUVGLHdDQXVCRTs7SUFFRix3Q0F1QkU7Ozs7O0lBR0Esb0NBQXlCOzs7OztJQUN6Qiw4Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ2FydEVudHJ5Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9lbnRyeS9jYXJ0LWVudHJ5LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydE1vZGlmaWNhdGlvbiB9IGZyb20gJ3Byb2plY3RzL2NvcmUvc3JjL21vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFbnRyeUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgYWRkRW50cnkkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0RW50cnlDb25uZWN0b3JcbiAgICAgICAgLmFkZChcbiAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICBwYXlsb2FkLnByb2R1Y3RDb2RlLFxuICAgICAgICAgIHBheWxvYWQucXVhbnRpdHlcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAoZW50cnk6IGFueSkgPT5cbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIC4uLmVudHJ5LFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWRkRW50cmllcyQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cmllc1N1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyaWVzRmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQ2FydEZhaWxBZGRFbnRyeVByb2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJJRVMpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cmllcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgY29uc3QgYWRkRW50cnkgPSAoXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZFxuICAgICAgKTogT2JzZXJ2YWJsZTxDYXJ0TW9kaWZpY2F0aW9uPiA9PiB7XG4gICAgICAgIGlmIChwcm9kdWN0cyAmJiBwcm9kdWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBbcHJvZHVjdCwgLi4ubGVmdEVudHJpZXNdID0gcHJvZHVjdHM7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2FydEVudHJ5Q29ubmVjdG9yXG4gICAgICAgICAgICAuYWRkKHVzZXJJZCwgY2FydElkLCBwcm9kdWN0LnByb2R1Y3RDb2RlLCBwcm9kdWN0LnF1YW50aXR5KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1lcmdlTWFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkRW50cnkobGVmdEVudHJpZXMsIHVzZXJJZCwgY2FydElkKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKHt9KTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gYWRkRW50cnkocGF5bG9hZC5wcm9kdWN0cywgcGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKS5waXBlKFxuICAgICAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cmllc1N1Y2Nlc3Moe30pLFxuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgICAgICAgYWRkRW50cmllczogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF07XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJpZXNGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpLFxuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRGYWlsQWRkRW50cnlQcm9jZXNzKCksXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVFbnRyeSQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeUZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfRU5UUlkpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRFbnRyeUNvbm5lY3RvclxuICAgICAgICAucmVtb3ZlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbnRyeSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5U3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeUZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZUVudHJ5JDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlTdWNjZXNzIHwgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DQVJUX1VQREFURV9FTlRSWSksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydEVudHJ5Q29ubmVjdG9yXG4gICAgICAgIC51cGRhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVudHJ5LCBwYXlsb2FkLnF0eSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5U3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeUZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRFbnRyeUNvbm5lY3RvcjogQ2FydEVudHJ5Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==