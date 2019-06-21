/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as fromAction from './../actions/find-stores.action';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
export class FindStoresEffect {
    /**
     * @param {?} actions$
     * @param {?} storeFinderConnector
     */
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.findStores$ = this.actions$.pipe(ofType(fromAction.FIND_STORES), map((/**
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
            return new fromAction.FindStoresSuccess(data);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromAction.FindStoresFail(error))))))));
        this.findStoreById$ = this.actions$.pipe(ofType(fromAction.FIND_STORE_BY_ID), map((/**
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
        data => new fromAction.FindStoreByIdSuccess(data))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromAction.FindStoreByIdFail(error))))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9lZmZlY3RzL2ZpbmQtc3RvcmVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEtBQUssVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRy9FLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLFlBQ1UsUUFBaUIsRUFDakIsb0JBQTBDO1FBRDFDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUlwRCxnQkFBVyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFDOUIsR0FBRzs7OztRQUFDLENBQUMsTUFBNkIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUN0RCxRQUFROzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDakIsSUFBSSxDQUFDLG9CQUFvQjthQUN0QixNQUFNLENBQ0wsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLFlBQVksRUFDcEIsT0FBTyxDQUFDLGlCQUFpQixDQUMxQjthQUNBLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O2dCQUM5QixLQUFLLENBQUMsRUFBRSxDQUNOLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsY0FBYyxFQUMzRCxDQUFDO2FBQ0g7WUFFRCxPQUFPLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUM5RCxFQUNKLENBQ0YsQ0FBQztRQUdGLG1CQUFjLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsRCxNQUFNLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQ25DLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWdDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDekQsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFDdEQsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FDakUsRUFDRixDQUNGLENBQUM7SUF2Q0MsQ0FBQzs7O1lBTEwsVUFBVTs7OztZQVJGLE9BQU87WUFNUCxvQkFBb0I7O0FBVTNCO0lBREMsTUFBTSxFQUFFO3NDQUNJLFVBQVU7cURBd0JyQjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNPLFVBQVU7d0RBU3hCOzs7SUFyQ0YsdUNBeUJFOztJQUVGLDBDQVVFOzs7OztJQXpDQSxvQ0FBeUI7Ozs7O0lBQ3pCLGdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi8uLi9hY3Rpb25zL2ZpbmQtc3RvcmVzLmFjdGlvbic7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmNvbm5lY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVzRWZmZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyQ29ubmVjdG9yOiBTdG9yZUZpbmRlckNvbm5lY3RvclxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGZpbmRTdG9yZXMkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb24uRklORF9TVE9SRVMpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9uLkZpbmRTdG9yZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLnN0b3JlRmluZGVyQ29ubmVjdG9yXG4gICAgICAgIC5zZWFyY2goXG4gICAgICAgICAgcGF5bG9hZC5xdWVyeVRleHQsXG4gICAgICAgICAgcGF5bG9hZC5zZWFyY2hDb25maWcsXG4gICAgICAgICAgcGF5bG9hZC5sb25naXR1ZGVMYXRpdHVkZVxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmNvdW50cnlJc29Db2RlKSB7XG4gICAgICAgICAgICAgIGRhdGEuc3RvcmVzID0gZGF0YS5zdG9yZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIHN0b3JlID0+XG4gICAgICAgICAgICAgICAgICBzdG9yZS5hZGRyZXNzLmNvdW50cnkuaXNvY29kZSA9PT0gcGF5bG9hZC5jb3VudHJ5SXNvQ29kZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb24uRmluZFN0b3Jlc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbi5GaW5kU3RvcmVzRmFpbChlcnJvcikpKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBmaW5kU3RvcmVCeUlkJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9uLkZJTkRfU1RPUkVfQllfSUQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9uLkZpbmRTdG9yZUJ5SWQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5zdG9yZUZpbmRlckNvbm5lY3Rvci5nZXQocGF5bG9hZC5zdG9yZUlkKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBuZXcgZnJvbUFjdGlvbi5GaW5kU3RvcmVCeUlkU3VjY2VzcyhkYXRhKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb24uRmluZFN0b3JlQnlJZEZhaWwoZXJyb3IpKSlcbiAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=