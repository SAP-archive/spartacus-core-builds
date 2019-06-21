/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromActions from './../actions';
import { CartEntryConnector } from '../../connectors/entry/cart-entry.connector';
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
            function (error) { return of(new fromActions.AddEntryFail(error)); })));
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
            function (error) { return of(new fromActions.RemoveEntryFail(error)); })));
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
            function (error) { return of(new fromActions.UpdateEntryFail(error)); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQtZW50cnkuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxLQUFLLFdBQVcsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFakY7SUFxREUsMEJBQ1UsUUFBaUIsRUFDakIsa0JBQXNDO1FBRmhELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBcERoRCxjQUFTLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUM3QixHQUFHOzs7O1FBQUMsVUFBQyxNQUE0QixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDckQsUUFBUTs7OztRQUFDLFVBQUEsT0FBTztZQUNkLE9BQUEsS0FBSSxDQUFDLGtCQUFrQjtpQkFDcEIsR0FBRyxDQUNGLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsV0FBVyxFQUNuQixPQUFPLENBQUMsUUFBUSxDQUNqQjtpQkFDQSxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUF0QyxDQUFzQyxFQUFDLEVBQzNELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsRUFBQyxDQUM3RDtRQVZILENBVUcsRUFDSixDQUNGLENBQUM7UUFHRixpQkFBWSxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFDaEMsR0FBRzs7OztRQUFDLFVBQUMsTUFBNEIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ3JELFFBQVE7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZCxPQUFBLEtBQUksQ0FBQyxrQkFBa0I7aUJBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQztpQkFDckQsSUFBSSxDQUNILEdBQUc7OztZQUFDO2dCQUNGLE9BQU8sSUFBSSxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUM5QyxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTFDLENBQTBDLEVBQUMsQ0FDaEU7UUFQSCxDQU9HLEVBQ0osQ0FDRixDQUFDO1FBR0YsaUJBQVksR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hELE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQ2hDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQTRCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNyRCxRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBQSxLQUFJLENBQUMsa0JBQWtCO2lCQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDbEUsSUFBSSxDQUNILEdBQUc7OztZQUFDO2dCQUNGLE9BQU8sSUFBSSxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUM5QyxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTFDLENBQTBDLEVBQUMsQ0FDaEU7UUFQSCxDQU9HLEVBQ0osQ0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBeERMLFVBQVU7Ozs7Z0JBTkYsT0FBTztnQkFJUCxrQkFBa0I7O0lBS3pCO1FBREMsTUFBTSxFQUFFOzBDQUNFLFVBQVU7dURBZ0JuQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7MERBYXRCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ssVUFBVTswREFhdEI7SUFNSix1QkFBQztDQUFBLEFBekRELElBeURDO1NBeERZLGdCQUFnQjs7O0lBQzNCLHFDQWlCRTs7SUFFRix3Q0FjRTs7SUFFRix3Q0FjRTs7Ozs7SUFHQSxvQ0FBeUI7Ozs7O0lBQ3pCLDhDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IENhcnRFbnRyeUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvZW50cnkvY2FydC1lbnRyeS5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydEVudHJ5RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBhZGRFbnRyeSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuQUREX0VOVFJZKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuQWRkRW50cnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRFbnRyeUNvbm5lY3RvclxuICAgICAgICAuYWRkKFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQuY2FydElkLFxuICAgICAgICAgIHBheWxvYWQucHJvZHVjdENvZGUsXG4gICAgICAgICAgcGF5bG9hZC5xdWFudGl0eVxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZW50cnk6IGFueSkgPT4gbmV3IGZyb21BY3Rpb25zLkFkZEVudHJ5U3VjY2VzcyhlbnRyeSkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLkFkZEVudHJ5RmFpbChlcnJvcikpKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVFbnRyeSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVNT1ZFX0VOVFJZKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuQWRkRW50cnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRFbnRyeUNvbm5lY3RvclxuICAgICAgICAucmVtb3ZlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbnRyeSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuUmVtb3ZlRW50cnlTdWNjZXNzKCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuUmVtb3ZlRW50cnlGYWlsKGVycm9yKSkpXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZUVudHJ5JDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5VUERBVEVfRU5UUlkpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5BZGRFbnRyeSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydEVudHJ5Q29ubmVjdG9yXG4gICAgICAgIC51cGRhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVudHJ5LCBwYXlsb2FkLnF0eSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuVXBkYXRlRW50cnlTdWNjZXNzKCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuVXBkYXRlRW50cnlGYWlsKGVycm9yKSkpXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRFbnRyeUNvbm5lY3RvcjogQ2FydEVudHJ5Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==