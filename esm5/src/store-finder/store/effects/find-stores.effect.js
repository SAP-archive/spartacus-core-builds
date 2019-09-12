/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
import { StoreFinderActions } from '../actions/index';
var FindStoresEffect = /** @class */ (function () {
    function FindStoresEffect(actions$, storeFinderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.findStores$ = this.actions$.pipe(ofType(StoreFinderActions.FIND_STORES), map((/**
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
                return new StoreFinderActions.FindStoresSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new StoreFinderActions.FindStoresFail(makeErrorSerializable(error)));
            })));
        })));
        this.findStoreById$ = this.actions$.pipe(ofType(StoreFinderActions.FIND_STORE_BY_ID), map((/**
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
            function (data) { return new StoreFinderActions.FindStoreByIdSuccess(data); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new StoreFinderActions.FindStoreByIdFail(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9lZmZlY3RzL2ZpbmQtc3RvcmVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RDtJQUVFLDBCQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQztRQUZwRCxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUlwRCxnQkFBVyxHQUVQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLEVBQ3RDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXFDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM5RCxRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBQSxLQUFJLENBQUMsb0JBQW9CO2lCQUN0QixNQUFNLENBQ0wsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLFlBQVksRUFDcEIsT0FBTyxDQUFDLGlCQUFpQixDQUMxQjtpQkFDQSxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDTixJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O29CQUM5QixVQUFBLEtBQUs7d0JBQ0gsT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLGNBQWM7b0JBQXhELENBQXdELEVBQzNELENBQUM7aUJBQ0g7Z0JBRUQsT0FBTyxJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLENBQ25DLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0Y7UUF4QkgsQ0F3QkcsRUFDSixDQUNGLENBQUM7UUFHRixtQkFBYyxHQUdWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsRUFDM0MsR0FBRzs7OztRQUFDLFVBQUMsTUFBd0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ2pFLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZixPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBakQsQ0FBaUQsRUFBQyxFQUM5RCxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksa0JBQWtCLENBQUMsaUJBQWlCLENBQ3RDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0Y7UUFURCxDQVNDLEVBQ0YsQ0FDRixDQUFDO0lBeERDLENBQUM7O2dCQUxMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFJUCxvQkFBb0I7O0lBVzNCO1FBREMsTUFBTSxFQUFFOzBDQUNJLFVBQVU7eURBZ0NyQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNPLFVBQVU7NERBa0J4QjtJQUNKLHVCQUFDO0NBQUEsQUE5REQsSUE4REM7U0E3RFksZ0JBQWdCOzs7SUFNM0IsdUNBaUNFOztJQUVGLDBDQW1CRTs7Ozs7SUExREEsb0NBQXlCOzs7OztJQUN6QixnREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXNFZmZlY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJDb25uZWN0b3I6IFN0b3JlRmluZGVyQ29ubmVjdG9yXG4gICkge31cblxuICBARWZmZWN0KClcbiAgZmluZFN0b3JlcyQ6IE9ic2VydmFibGU8XG4gICAgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZXNTdWNjZXNzIHwgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFN0b3JlRmluZGVyQWN0aW9ucy5GSU5EX1NUT1JFUyksXG4gICAgbWFwKChhY3Rpb246IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5zdG9yZUZpbmRlckNvbm5lY3RvclxuICAgICAgICAuc2VhcmNoKFxuICAgICAgICAgIHBheWxvYWQucXVlcnlUZXh0LFxuICAgICAgICAgIHBheWxvYWQuc2VhcmNoQ29uZmlnLFxuICAgICAgICAgIHBheWxvYWQubG9uZ2l0dWRlTGF0aXR1ZGVcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5jb3VudHJ5SXNvQ29kZSkge1xuICAgICAgICAgICAgICBkYXRhLnN0b3JlcyA9IGRhdGEuc3RvcmVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBzdG9yZSA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUgPT09IHBheWxvYWQuY291bnRyeUlzb0NvZGVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBmaW5kU3RvcmVCeUlkJDogT2JzZXJ2YWJsZTxcbiAgICB8IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVCeUlkU3VjY2Vzc1xuICAgIHwgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZUJ5SWRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFN0b3JlRmluZGVyQWN0aW9ucy5GSU5EX1NUT1JFX0JZX0lEKSxcbiAgICBtYXAoKGFjdGlvbjogU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZUJ5SWQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5zdG9yZUZpbmRlckNvbm5lY3Rvci5nZXQocGF5bG9hZC5zdG9yZUlkKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZUJ5SWRTdWNjZXNzKGRhdGEpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVCeUlkRmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==