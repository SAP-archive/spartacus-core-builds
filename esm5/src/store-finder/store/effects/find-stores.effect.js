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
import * as fromAction from './../actions/find-stores.action';
var FindStoresEffect = /** @class */ (function () {
    function FindStoresEffect(actions$, storeFinderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.findStores$ = this.actions$.pipe(ofType(fromAction.FIND_STORES), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.storeFinderConnector
                .search(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (payload.countryIsoCode) {
                    data.stores = data.stores.filter((/**
                     * @param {?} store
                     * @return {?}
                     */
                    function (store) {
                        return store.address.country.isocode === payload.countryIsoCode;
                    }));
                }
                return new fromAction.FindStoresSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromAction.FindStoresFail(makeErrorSerializable(error)));
            })));
        })));
        this.findStoreById$ = this.actions$.pipe(ofType(fromAction.FIND_STORE_BY_ID), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.storeFinderConnector.get(payload.storeId).pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new fromAction.FindStoreByIdSuccess(data); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromAction.FindStoreByIdFail(makeErrorSerializable(error)));
            })));
        })));
    }
    FindStoresEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FindStoresEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: StoreFinderConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], FindStoresEffect.prototype, "findStores$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], FindStoresEffect.prototype, "findStoreById$", void 0);
    return FindStoresEffect;
}());
export { FindStoresEffect };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9lZmZlY3RzL2ZpbmQtc3RvcmVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEtBQUssVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBRTlEO0lBRUUsMEJBQ1UsUUFBaUIsRUFDakIsb0JBQTBDO1FBRnBELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBSXBELGdCQUFXLEdBRVAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQzlCLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQTZCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUN0RCxRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBQSxLQUFJLENBQUMsb0JBQW9CO2lCQUN0QixNQUFNLENBQ0wsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLFlBQVksRUFDcEIsT0FBTyxDQUFDLGlCQUFpQixDQUMxQjtpQkFDQSxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDTixJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O29CQUM5QixVQUFBLEtBQUs7d0JBQ0gsT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLGNBQWM7b0JBQXhELENBQXdELEVBQzNELENBQUM7aUJBQ0g7Z0JBRUQsT0FBTyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQS9ELENBQStELEVBQ2hFLENBQ0Y7UUFwQkgsQ0FvQkcsRUFDSixDQUNGLENBQUM7UUFHRixtQkFBYyxHQUVWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQ25DLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQWdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUN6RCxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2pELEdBQUc7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksVUFBVSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUF6QyxDQUF5QyxFQUFDLEVBQ3RELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFsRSxDQUFrRSxFQUNuRSxDQUNGO1FBTEQsQ0FLQyxFQUNGLENBQ0YsQ0FBQztJQS9DQyxDQUFDOztnQkFMTCxVQUFVOzs7O2dCQVBGLE9BQU87Z0JBSVAsb0JBQW9COztJQVczQjtRQURDLE1BQU0sRUFBRTswQ0FDSSxVQUFVO3lEQTRCckI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVOzREQWF4QjtJQUNKLHVCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FwRFksZ0JBQWdCOzs7SUFNM0IsdUNBNkJFOztJQUVGLDBDQWNFOzs7OztJQWpEQSxvQ0FBeUI7Ozs7O0lBQ3pCLGdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi8uLi9hY3Rpb25zL2ZpbmQtc3RvcmVzLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVzRWZmZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyQ29ubmVjdG9yOiBTdG9yZUZpbmRlckNvbm5lY3RvclxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGZpbmRTdG9yZXMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb24uRmluZFN0b3Jlc1N1Y2Nlc3MgfCBmcm9tQWN0aW9uLkZpbmRTdG9yZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb24uRklORF9TVE9SRVMpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9uLkZpbmRTdG9yZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLnN0b3JlRmluZGVyQ29ubmVjdG9yXG4gICAgICAgIC5zZWFyY2goXG4gICAgICAgICAgcGF5bG9hZC5xdWVyeVRleHQsXG4gICAgICAgICAgcGF5bG9hZC5zZWFyY2hDb25maWcsXG4gICAgICAgICAgcGF5bG9hZC5sb25naXR1ZGVMYXRpdHVkZVxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmNvdW50cnlJc29Db2RlKSB7XG4gICAgICAgICAgICAgIGRhdGEuc3RvcmVzID0gZGF0YS5zdG9yZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIHN0b3JlID0+XG4gICAgICAgICAgICAgICAgICBzdG9yZS5hZGRyZXNzLmNvdW50cnkuaXNvY29kZSA9PT0gcGF5bG9hZC5jb3VudHJ5SXNvQ29kZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb24uRmluZFN0b3Jlc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21BY3Rpb24uRmluZFN0b3Jlc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBmaW5kU3RvcmVCeUlkJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9uLkZpbmRTdG9yZUJ5SWRTdWNjZXNzIHwgZnJvbUFjdGlvbi5GaW5kU3RvcmVCeUlkRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9uLkZJTkRfU1RPUkVfQllfSUQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9uLkZpbmRTdG9yZUJ5SWQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5zdG9yZUZpbmRlckNvbm5lY3Rvci5nZXQocGF5bG9hZC5zdG9yZUlkKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBuZXcgZnJvbUFjdGlvbi5GaW5kU3RvcmVCeUlkU3VjY2VzcyhkYXRhKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbi5GaW5kU3RvcmVCeUlkRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==