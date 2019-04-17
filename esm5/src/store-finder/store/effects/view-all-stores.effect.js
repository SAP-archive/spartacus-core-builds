/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OccStoreFinderService } from '../../occ/store-finder.service';
import * as fromAction from './../actions/view-all-stores.action';
var ViewAllStoresEffect = /** @class */ (function () {
    function ViewAllStoresEffect(actions$, occStoreFinderService) {
        var _this = this;
        this.actions$ = actions$;
        this.occStoreFinderService = occStoreFinderService;
        this.viewAllStores$ = this.actions$.pipe(ofType(fromAction.VIEW_ALL_STORES), switchMap(function () {
            return _this.occStoreFinderService.storesCount().pipe(map(function (data) { return new fromAction.ViewAllStoresSuccess(data); }), catchError(function (error) { return of(new fromAction.ViewAllStoresFail(error)); }));
        }));
    }
    ViewAllStoresEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ViewAllStoresEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OccStoreFinderService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ViewAllStoresEffect.prototype, "viewAllStores$", void 0);
    return ViewAllStoresEffect;
}());
export { ViewAllStoresEffect };
if (false) {
    /** @type {?} */
    ViewAllStoresEffect.prototype.viewAllStores$;
    /**
     * @type {?}
     * @private
     */
    ViewAllStoresEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ViewAllStoresEffect.prototype.occStoreFinderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvZWZmZWN0cy92aWV3LWFsbC1zdG9yZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdkUsT0FBTyxLQUFLLFVBQVUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVsRTtJQUVFLDZCQUNVLFFBQWlCLEVBQ2pCLHFCQUE0QztRQUZ0RCxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUl0RCxtQkFBYyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFDbEMsU0FBUyxDQUFDO1lBQ1IsT0FBTyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUNsRCxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxFQUN0RCxVQUFVLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUNqRSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQVhDLENBQUM7O2dCQUxMLFVBQVU7Ozs7Z0JBVEYsT0FBTztnQkFLUCxxQkFBcUI7O0lBWTVCO1FBREMsTUFBTSxFQUFFOzBDQUNPLFVBQVU7K0RBUXhCO0lBQ0osMEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWhCWSxtQkFBbUI7OztJQU05Qiw2Q0FTRTs7Ozs7SUFiQSx1Q0FBeUI7Ozs7O0lBQ3pCLG9EQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2NjU3RvcmVGaW5kZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3N0b3JlLWZpbmRlci5zZXJ2aWNlJztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLy4uL2FjdGlvbnMvdmlldy1hbGwtc3RvcmVzLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWV3QWxsU3RvcmVzRWZmZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY1N0b3JlRmluZGVyU2VydmljZTogT2NjU3RvcmVGaW5kZXJTZXJ2aWNlXG4gICkge31cblxuICBARWZmZWN0KClcbiAgdmlld0FsbFN0b3JlcyQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5WSUVXX0FMTF9TVE9SRVMpLFxuICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NTdG9yZUZpbmRlclNlcnZpY2Uuc3RvcmVzQ291bnQoKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBuZXcgZnJvbUFjdGlvbi5WaWV3QWxsU3RvcmVzU3VjY2VzcyhkYXRhKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb24uVmlld0FsbFN0b3Jlc0ZhaWwoZXJyb3IpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcbn1cbiJdfQ==