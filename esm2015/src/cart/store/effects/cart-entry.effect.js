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
export class CartEntryEffects {
    /**
     * @param {?} actions$
     * @param {?} cartService
     */
    constructor(actions$, cartService) {
        this.actions$ = actions$;
        this.cartService = cartService;
        this.addEntry$ = this.actions$.pipe(ofType(fromActions.ADD_ENTRY), map((action) => action.payload), mergeMap(payload => this.cartService
            .addEntry(payload.userId, payload.cartId, payload.productCode, payload.quantity)
            .pipe(map((entry) => new fromActions.AddEntrySuccess(entry)), catchError(error => of(new fromActions.AddEntryFail(error))))));
        this.removeEntry$ = this.actions$.pipe(ofType(fromActions.REMOVE_ENTRY), map((action) => action.payload), mergeMap(payload => this.cartService
            .removeEntry(payload.userId, payload.cartId, payload.entry)
            .pipe(map(() => {
            return new fromActions.RemoveEntrySuccess();
        }), catchError(error => of(new fromActions.RemoveEntryFail(error))))));
        this.updateEntry$ = this.actions$.pipe(ofType(fromActions.UPDATE_ENTRY), map((action) => action.payload), mergeMap(payload => this.cartService
            .updateEntry(payload.userId, payload.cartId, payload.entry, payload.qty)
            .pipe(map(() => {
            return new fromActions.UpdateEntrySuccess();
        }), catchError(error => of(new fromActions.UpdateEntryFail(error))))));
    }
}
CartEntryEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartEntryEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccCartService }
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
    CartEntryEffects.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQtZW50cnkuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxLQUFLLFdBQVcsTUFBTSxjQUFjLENBQUM7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3hELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBb0QzQixZQUFvQixRQUFpQixFQUFVLFdBQTJCO1FBQXRELGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFsRDFFLGNBQVMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzdDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQzdCLEdBQUcsQ0FBQyxDQUFDLE1BQTRCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDckQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2pCLElBQUksQ0FBQyxXQUFXO2FBQ2IsUUFBUSxDQUNQLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsV0FBVyxFQUNuQixPQUFPLENBQUMsUUFBUSxDQUNqQjthQUNBLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMzRCxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDN0QsQ0FDSixDQUNGLENBQUM7UUFHRixpQkFBWSxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFDaEMsR0FBRyxDQUFDLENBQUMsTUFBNEIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNyRCxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDakIsSUFBSSxDQUFDLFdBQVc7YUFDYixXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDMUQsSUFBSSxDQUNILEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUMsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2hFLENBQ0osQ0FDRixDQUFDO1FBR0YsaUJBQVksR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hELE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQ2hDLEdBQUcsQ0FBQyxDQUFDLE1BQTRCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDckQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2pCLElBQUksQ0FBQyxXQUFXO2FBQ2IsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDdkUsSUFBSSxDQUNILEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUMsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2hFLENBQ0osQ0FDRixDQUFDO0lBRTJFLENBQUM7OztZQXJEL0UsVUFBVTs7OztZQVBGLE9BQU87WUFLUCxjQUFjOztBQUtyQjtJQURDLE1BQU0sRUFBRTtzQ0FDRSxVQUFVO21EQWdCbkI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSyxVQUFVO3NEQWF0QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNLLFVBQVU7c0RBYXRCOzs7SUFqREYscUNBaUJFOztJQUVGLHdDQWNFOztJQUVGLHdDQWNFOzs7OztJQUVVLG9DQUF5Qjs7Ozs7SUFBRSx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4vLi4vYWN0aW9ucyc7XG5cbmltcG9ydCB7IE9jY0NhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2NhcnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RW50cnlFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGFkZEVudHJ5JDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5BRERfRU5UUlkpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5BZGRFbnRyeSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydFNlcnZpY2VcbiAgICAgICAgLmFkZEVudHJ5KFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQuY2FydElkLFxuICAgICAgICAgIHBheWxvYWQucHJvZHVjdENvZGUsXG4gICAgICAgICAgcGF5bG9hZC5xdWFudGl0eVxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZW50cnk6IGFueSkgPT4gbmV3IGZyb21BY3Rpb25zLkFkZEVudHJ5U3VjY2VzcyhlbnRyeSkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLkFkZEVudHJ5RmFpbChlcnJvcikpKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVFbnRyeSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVNT1ZFX0VOVFJZKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuQWRkRW50cnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAgIC5yZW1vdmVFbnRyeShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW50cnkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLlJlbW92ZUVudHJ5U3VjY2VzcygpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlJlbW92ZUVudHJ5RmFpbChlcnJvcikpKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVFbnRyeSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuVVBEQVRFX0VOVFJZKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuQWRkRW50cnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAgIC51cGRhdGVFbnRyeShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW50cnksIHBheWxvYWQucXR5KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5VcGRhdGVFbnRyeVN1Y2Nlc3MoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5VcGRhdGVFbnRyeUZhaWwoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIGNhcnRTZXJ2aWNlOiBPY2NDYXJ0U2VydmljZSkge31cbn1cbiJdfQ==