/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
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
], CartEntryEffects.prototype, "removeEntry$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CartEntryEffects.prototype, "updateEntry$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQtZW50cnkuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBaUYzQixZQUNVLFFBQWlCLEVBQ2pCLGtCQUFzQztRQUR0QyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFqRmhELGNBQVMsR0FFTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFDbEMsR0FBRzs7OztRQUFDLENBQUMsTUFBZ0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUN6RCxRQUFROzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDakIsSUFBSSxDQUFDLGtCQUFrQjthQUNwQixHQUFHLENBQ0YsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxXQUFX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L2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENhcnRFbnRyeUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvZW50cnkvY2FydC1lbnRyeS5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFbnRyeUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgYWRkRW50cnkkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0RW50cnlDb25uZWN0b3JcbiAgICAgICAgLmFkZChcbiAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICBwYXlsb2FkLnByb2R1Y3RDb2RlLFxuICAgICAgICAgIHBheWxvYWQucXVhbnRpdHlcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAoZW50cnk6IGFueSkgPT5cbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIC4uLmVudHJ5LFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVtb3ZlRW50cnkkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnlGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0RW50cnlDb25uZWN0b3JcbiAgICAgICAgLnJlbW92ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW50cnkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3Moe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnlGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVFbnRyeSQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeUZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUlkpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRFbnRyeUNvbm5lY3RvclxuICAgICAgICAudXBkYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbnRyeSwgcGF5bG9hZC5xdHkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeVN1Y2Nlc3Moe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0RW50cnlDb25uZWN0b3I6IENhcnRFbnRyeUNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=