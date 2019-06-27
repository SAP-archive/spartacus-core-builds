/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
import { StoreFinderActions } from '../actions/index';
export class FindStoresEffect {
    /**
     * @param {?} actions$
     * @param {?} storeFinderConnector
     */
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.findStores$ = this.actions$.pipe(ofType(StoreFinderActions.FIND_STORES), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.storeFinderConnector
            .search(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
            .pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (payload.countryIsoCode) {
                data.stores = data.stores.filter((/**
                 * @param {?} store
                 * @return {?}
                 */
                store => store.address.country.isocode === payload.countryIsoCode));
            }
            return new StoreFinderActions.FindStoresSuccess(data);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new StoreFinderActions.FindStoresFail(makeErrorSerializable(error)))))))));
        this.findStoreById$ = this.actions$.pipe(ofType(StoreFinderActions.FIND_STORE_BY_ID), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.storeFinderConnector.get(payload.storeId).pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => new StoreFinderActions.FindStoreByIdSuccess(data))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new StoreFinderActions.FindStoreByIdFail(makeErrorSerializable(error)))))))));
    }
}
FindStoresEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FindStoresEffect.ctorParameters = () => [
    { type: Actions },
    { type: StoreFinderConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], FindStoresEffect.prototype, "findStores$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], FindStoresEffect.prototype, "findStoreById$", void 0);
if (false) {
    /** @type {?} */
    FindStoresEffect.prototype.findStores$;
    /** @type {?} */
    FindStoresEffect.prototype.findStoreById$;
    /**
     * @type {?}
     * @private
     */
    FindStoresEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    FindStoresEffect.prototype.storeFinderConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9lZmZlY3RzL2ZpbmQtc3RvcmVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUd0RCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUMzQixZQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQztRQUQxQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFJcEQsZ0JBQVcsR0FFUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUN0QyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFxQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzlELFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUNqQixJQUFJLENBQUMsb0JBQW9CO2FBQ3RCLE1BQU0sQ0FDTCxPQUFPLENBQUMsU0FBUyxFQUNqQixPQUFPLENBQUMsWUFBWSxFQUNwQixPQUFPLENBQUMsaUJBQWlCLENBQzFCO2FBQ0EsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNULElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7Z0JBQzlCLEtBQUssQ0FBQyxFQUFFLENBQ04sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQzNELENBQUM7YUFDSDtZQUVELE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUNBLElBQUksa0JBQWtCLENBQUMsY0FBYyxDQUNuQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRixFQUNGLENBQ0YsRUFDSixDQUNGLENBQUM7UUFHRixtQkFBYyxHQUdWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsRUFDM0MsR0FBRzs7OztRQUFDLENBQUMsTUFBd0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUNqRSxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNqRCxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFDLEVBQzlELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FDdEMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0YsRUFDRixDQUNGLEVBQ0YsQ0FDRixDQUFDO0lBeERDLENBQUM7OztZQUxMLFVBQVU7Ozs7WUFQRixPQUFPO1lBSVAsb0JBQW9COztBQVczQjtJQURDLE1BQU0sRUFBRTtzQ0FDSSxVQUFVO3FEQWdDckI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDTyxVQUFVO3dEQWtCeEI7OztJQXRERix1Q0FpQ0U7O0lBRUYsMENBbUJFOzs7OztJQTFEQSxvQ0FBeUI7Ozs7O0lBQ3pCLGdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmluZFN0b3Jlc0VmZmVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlckNvbm5lY3RvcjogU3RvcmVGaW5kZXJDb25uZWN0b3JcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBmaW5kU3RvcmVzJDogT2JzZXJ2YWJsZTxcbiAgICBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc1N1Y2Nlc3MgfCBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU3RvcmVGaW5kZXJBY3Rpb25zLkZJTkRfU1RPUkVTKSxcbiAgICBtYXAoKGFjdGlvbjogU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLnN0b3JlRmluZGVyQ29ubmVjdG9yXG4gICAgICAgIC5zZWFyY2goXG4gICAgICAgICAgcGF5bG9hZC5xdWVyeVRleHQsXG4gICAgICAgICAgcGF5bG9hZC5zZWFyY2hDb25maWcsXG4gICAgICAgICAgcGF5bG9hZC5sb25naXR1ZGVMYXRpdHVkZVxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmNvdW50cnlJc29Db2RlKSB7XG4gICAgICAgICAgICAgIGRhdGEuc3RvcmVzID0gZGF0YS5zdG9yZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIHN0b3JlID0+XG4gICAgICAgICAgICAgICAgICBzdG9yZS5hZGRyZXNzLmNvdW50cnkuaXNvY29kZSA9PT0gcGF5bG9hZC5jb3VudHJ5SXNvQ29kZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGZpbmRTdG9yZUJ5SWQkOiBPYnNlcnZhYmxlPFxuICAgIHwgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZUJ5SWRTdWNjZXNzXG4gICAgfCBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3JlQnlJZEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU3RvcmVGaW5kZXJBY3Rpb25zLkZJTkRfU1RPUkVfQllfSUQpLFxuICAgIG1hcCgoYWN0aW9uOiBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3JlQnlJZCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLnN0b3JlRmluZGVyQ29ubmVjdG9yLmdldChwYXlsb2FkLnN0b3JlSWQpLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3JlQnlJZFN1Y2Nlc3MoZGF0YSkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZUJ5SWRGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xufVxuIl19