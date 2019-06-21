/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAction from './../actions/view-all-stores.action';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
export class ViewAllStoresEffect {
    /**
     * @param {?} actions$
     * @param {?} storeFinderConnector
     */
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.viewAllStores$ = this.actions$.pipe(ofType(fromAction.VIEW_ALL_STORES), switchMap((/**
         * @return {?}
         */
        () => {
            return this.storeFinderConnector.getCounts().pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => new fromAction.ViewAllStoresSuccess(data))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromAction.ViewAllStoresFail(error)))));
        })));
    }
}
ViewAllStoresEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ViewAllStoresEffect.ctorParameters = () => [
    { type: Actions },
    { type: StoreFinderConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ViewAllStoresEffect.prototype, "viewAllStores$", void 0);
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
    ViewAllStoresEffect.prototype.storeFinderConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvZWZmZWN0cy92aWV3LWFsbC1zdG9yZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxLQUFLLFVBQVUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUcvRSxNQUFNLE9BQU8sbUJBQW1COzs7OztJQUM5QixZQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQztRQUQxQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFJcEQsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQ2xDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDL0MsR0FBRzs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFDdEQsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FDakUsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFYQyxDQUFDOzs7WUFMTCxVQUFVOzs7O1lBUkYsT0FBTztZQU1QLG9CQUFvQjs7QUFVM0I7SUFEQyxNQUFNLEVBQUU7c0NBQ08sVUFBVTsyREFReEI7OztJQVRGLDZDQVNFOzs7OztJQWJBLHVDQUF5Qjs7Ozs7SUFDekIsbURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4vLi4vYWN0aW9ucy92aWV3LWFsbC1zdG9yZXMuYWN0aW9uJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZXdBbGxTdG9yZXNFZmZlY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJDb25uZWN0b3I6IFN0b3JlRmluZGVyQ29ubmVjdG9yXG4gICkge31cblxuICBARWZmZWN0KClcbiAgdmlld0FsbFN0b3JlcyQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5WSUVXX0FMTF9TVE9SRVMpLFxuICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZUZpbmRlckNvbm5lY3Rvci5nZXRDb3VudHMoKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBuZXcgZnJvbUFjdGlvbi5WaWV3QWxsU3RvcmVzU3VjY2VzcyhkYXRhKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb24uVmlld0FsbFN0b3Jlc0ZhaWwoZXJyb3IpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcbn1cbiJdfQ==