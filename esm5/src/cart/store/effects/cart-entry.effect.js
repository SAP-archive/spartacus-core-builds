/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartEntryConnector } from '../../connectors/entry/cart-entry.connector';
import * as fromActions from './../actions';
var CartEntryEffects = /** @class */ (function () {
    function CartEntryEffects(actions$, cartEntryConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.cartEntryConnector = cartEntryConnector;
        this.addEntry$ = this.actions$.pipe(ofType(fromActions.ADD_ENTRY), map((/**
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
            function (entry) { return new fromActions.AddEntrySuccess(entry); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.AddEntryFail(makeErrorSerializable(error)));
            })));
        })));
        this.removeEntry$ = this.actions$.pipe(ofType(fromActions.REMOVE_ENTRY), map((/**
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
                return new fromActions.RemoveEntrySuccess();
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.RemoveEntryFail(makeErrorSerializable(error)));
            })));
        })));
        this.updateEntry$ = this.actions$.pipe(ofType(fromActions.UPDATE_ENTRY), map((/**
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
                return new fromActions.UpdateEntrySuccess();
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.UpdateEntryFail(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQtZW50cnkuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxLQUFLLFdBQVcsTUFBTSxjQUFjLENBQUM7QUFFNUM7SUFpRUUsMEJBQ1UsUUFBaUIsRUFDakIsa0JBQXNDO1FBRmhELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBaEVoRCxjQUFTLEdBRUwsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQzdCLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQTRCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNyRCxRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBQSxLQUFJLENBQUMsa0JBQWtCO2lCQUNwQixHQUFHLENBQ0YsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxXQUFXLEVBQ25CLE9BQU8sQ0FBQyxRQUFRLENBQ2pCO2lCQUNBLElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQXRDLENBQXNDLEVBQUMsRUFDcEQsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUE5RCxDQUE4RCxFQUMvRCxDQUNGO1FBWkgsQ0FZRyxFQUNKLENBQ0YsQ0FBQztRQUdGLGlCQUFZLEdBRVIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQ2hDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQTRCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNyRCxRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBQSxLQUFJLENBQUMsa0JBQWtCO2lCQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQ3JELElBQUksQ0FDSCxHQUFHOzs7WUFBQztnQkFDRixPQUFPLElBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDOUMsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFqRSxDQUFpRSxFQUNsRSxDQUNGO1FBVEgsQ0FTRyxFQUNKLENBQ0YsQ0FBQztRQUdGLGlCQUFZLEdBRVIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQ2hDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQTRCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNyRCxRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBQSxLQUFJLENBQUMsa0JBQWtCO2lCQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDbEUsSUFBSSxDQUNILEdBQUc7OztZQUFDO2dCQUNGLE9BQU8sSUFBSSxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUM5QyxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQWpFLENBQWlFLEVBQ2xFLENBQ0Y7UUFUSCxDQVNHLEVBQ0osQ0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBcEVMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFJUCxrQkFBa0I7O0lBTXpCO1FBREMsTUFBTSxFQUFFOzBDQUNFLFVBQVU7dURBb0JuQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7MERBaUJ0QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7MERBaUJ0QjtJQU1KLHVCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FwRVksZ0JBQWdCOzs7SUFDM0IscUNBcUJFOztJQUVGLHdDQWtCRTs7SUFFRix3Q0FrQkU7Ozs7O0lBR0Esb0NBQXlCOzs7OztJQUN6Qiw4Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ2FydEVudHJ5Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9lbnRyeS9jYXJ0LWVudHJ5LmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLy4uL2FjdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydEVudHJ5RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBhZGRFbnRyeSQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuQWRkRW50cnlTdWNjZXNzIHwgZnJvbUFjdGlvbnMuQWRkRW50cnlGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkFERF9FTlRSWSksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkFkZEVudHJ5KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0RW50cnlDb25uZWN0b3JcbiAgICAgICAgLmFkZChcbiAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICBwYXlsb2FkLnByb2R1Y3RDb2RlLFxuICAgICAgICAgIHBheWxvYWQucXVhbnRpdHlcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZW50cnkgPT4gbmV3IGZyb21BY3Rpb25zLkFkZEVudHJ5U3VjY2VzcyhlbnRyeSkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5BZGRFbnRyeUZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVFbnRyeSQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuUmVtb3ZlRW50cnlTdWNjZXNzIHwgZnJvbUFjdGlvbnMuUmVtb3ZlRW50cnlGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlJFTU9WRV9FTlRSWSksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkFkZEVudHJ5KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0RW50cnlDb25uZWN0b3JcbiAgICAgICAgLnJlbW92ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW50cnkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLlJlbW92ZUVudHJ5U3VjY2VzcygpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5SZW1vdmVFbnRyeUZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVFbnRyeSQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuVXBkYXRlRW50cnlTdWNjZXNzIHwgZnJvbUFjdGlvbnMuVXBkYXRlRW50cnlGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlVQREFURV9FTlRSWSksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkFkZEVudHJ5KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0RW50cnlDb25uZWN0b3JcbiAgICAgICAgLnVwZGF0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW50cnksIHBheWxvYWQucXR5KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5VcGRhdGVFbnRyeVN1Y2Nlc3MoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbnMuVXBkYXRlRW50cnlGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydEVudHJ5Q29ubmVjdG9yOiBDYXJ0RW50cnlDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19