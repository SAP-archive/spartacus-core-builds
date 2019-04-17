/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromActions from './../actions';
import { OccCartService } from '../../occ/cart.service';
var CartEntryEffects = /** @class */ (function () {
    function CartEntryEffects(actions$, cartService) {
        var _this = this;
        this.actions$ = actions$;
        this.cartService = cartService;
        this.addEntry$ = this.actions$.pipe(ofType(fromActions.ADD_ENTRY), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartService
                .addEntry(payload.userId, payload.cartId, payload.productCode, payload.quantity)
                .pipe(map(function (entry) { return new fromActions.AddEntrySuccess(entry); }), catchError(function (error) { return of(new fromActions.AddEntryFail(error)); }));
        }));
        this.removeEntry$ = this.actions$.pipe(ofType(fromActions.REMOVE_ENTRY), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartService
                .removeEntry(payload.userId, payload.cartId, payload.entry)
                .pipe(map(function () {
                return new fromActions.RemoveEntrySuccess();
            }), catchError(function (error) { return of(new fromActions.RemoveEntryFail(error)); }));
        }));
        this.updateEntry$ = this.actions$.pipe(ofType(fromActions.UPDATE_ENTRY), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartService
                .updateEntry(payload.userId, payload.cartId, payload.entry, payload.qty)
                .pipe(map(function () {
                return new fromActions.UpdateEntrySuccess();
            }), catchError(function (error) { return of(new fromActions.UpdateEntryFail(error)); }));
        }));
    }
    CartEntryEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartEntryEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccCartService }
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
    CartEntryEffects.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQtZW50cnkuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxLQUFLLFdBQVcsTUFBTSxjQUFjLENBQUM7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhEO0lBcURFLDBCQUFvQixRQUFpQixFQUFVLFdBQTJCO1FBQTFFLGlCQUE4RTtRQUExRCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBbEQxRSxjQUFTLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUM3QixHQUFHLENBQUMsVUFBQyxNQUE0QixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDckQsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQUEsS0FBSSxDQUFDLFdBQVc7aUJBQ2IsUUFBUSxDQUNQLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsV0FBVyxFQUNuQixPQUFPLENBQUMsUUFBUSxDQUNqQjtpQkFDQSxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLEVBQzNELFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUM3RDtRQVZILENBVUcsQ0FDSixDQUNGLENBQUM7UUFHRixpQkFBWSxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFDaEMsR0FBRyxDQUFDLFVBQUMsTUFBNEIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3JELFFBQVEsQ0FBQyxVQUFBLE9BQU87WUFDZCxPQUFBLEtBQUksQ0FBQyxXQUFXO2lCQUNiLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQztpQkFDMUQsSUFBSSxDQUNILEdBQUcsQ0FBQztnQkFDRixPQUFPLElBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQ2hFO1FBUEgsQ0FPRyxDQUNKLENBQ0YsQ0FBQztRQUdGLGlCQUFZLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoRCxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUNoQyxHQUFHLENBQUMsVUFBQyxNQUE0QixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDckQsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQUEsS0FBSSxDQUFDLFdBQVc7aUJBQ2IsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ3ZFLElBQUksQ0FDSCxHQUFHLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzlDLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUNoRTtRQVBILENBT0csQ0FDSixDQUNGLENBQUM7SUFFMkUsQ0FBQzs7Z0JBckQvRSxVQUFVOzs7O2dCQVBGLE9BQU87Z0JBS1AsY0FBYzs7SUFLckI7UUFEQyxNQUFNLEVBQUU7MENBQ0UsVUFBVTt1REFnQm5CO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ssVUFBVTswREFhdEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSyxVQUFVOzBEQWF0QjtJQUdKLHVCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksZ0JBQWdCOzs7SUFDM0IscUNBaUJFOztJQUVGLHdDQWNFOztJQUVGLHdDQWNFOzs7OztJQUVVLG9DQUF5Qjs7Ozs7SUFBRSx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4vLi4vYWN0aW9ucyc7XG5cbmltcG9ydCB7IE9jY0NhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2NhcnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RW50cnlFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGFkZEVudHJ5JDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5BRERfRU5UUlkpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5BZGRFbnRyeSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydFNlcnZpY2VcbiAgICAgICAgLmFkZEVudHJ5KFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQuY2FydElkLFxuICAgICAgICAgIHBheWxvYWQucHJvZHVjdENvZGUsXG4gICAgICAgICAgcGF5bG9hZC5xdWFudGl0eVxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZW50cnk6IGFueSkgPT4gbmV3IGZyb21BY3Rpb25zLkFkZEVudHJ5U3VjY2VzcyhlbnRyeSkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLkFkZEVudHJ5RmFpbChlcnJvcikpKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVFbnRyeSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVNT1ZFX0VOVFJZKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuQWRkRW50cnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAgIC5yZW1vdmVFbnRyeShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW50cnkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLlJlbW92ZUVudHJ5U3VjY2VzcygpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlJlbW92ZUVudHJ5RmFpbChlcnJvcikpKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVFbnRyeSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuVVBEQVRFX0VOVFJZKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuQWRkRW50cnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAgIC51cGRhdGVFbnRyeShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW50cnksIHBheWxvYWQucXR5KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5VcGRhdGVFbnRyeVN1Y2Nlc3MoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5VcGRhdGVFbnRyeUZhaWwoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIGNhcnRTZXJ2aWNlOiBPY2NDYXJ0U2VydmljZSkge31cbn1cbiJdfQ==