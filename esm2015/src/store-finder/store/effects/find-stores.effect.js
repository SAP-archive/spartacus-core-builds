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
        error => of(new fromAction.FindStoresFail(makeErrorSerializable(error)))))))));
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
        error => of(new fromAction.FindStoreByIdFail(makeErrorSerializable(error)))))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9lZmZlY3RzL2ZpbmQtc3RvcmVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEtBQUssVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBRzlELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLFlBQ1UsUUFBaUIsRUFDakIsb0JBQTBDO1FBRDFDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUlwRCxnQkFBVyxHQUVQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUM5QixHQUFHOzs7O1FBQUMsQ0FBQyxNQUE2QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ3RELFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUNqQixJQUFJLENBQUMsb0JBQW9CO2FBQ3RCLE1BQU0sQ0FDTCxPQUFPLENBQUMsU0FBUyxFQUNqQixPQUFPLENBQUMsWUFBWSxFQUNwQixPQUFPLENBQUMsaUJBQWlCLENBQzFCO2FBQ0EsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNULElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7Z0JBQzlCLEtBQUssQ0FBQyxFQUFFLENBQ04sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQzNELENBQUM7YUFDSDtZQUVELE9BQU8sSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNoRSxDQUNGLEVBQ0osQ0FDRixDQUFDO1FBR0YsbUJBQWMsR0FFVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNuQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFnQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ3pELFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2pELEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFDLEVBQ3RELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNuRSxDQUNGLEVBQ0YsQ0FDRixDQUFDO0lBL0NDLENBQUM7OztZQUxMLFVBQVU7Ozs7WUFQRixPQUFPO1lBSVAsb0JBQW9COztBQVczQjtJQURDLE1BQU0sRUFBRTtzQ0FDSSxVQUFVO3FEQTRCckI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDTyxVQUFVO3dEQWF4Qjs7O0lBN0NGLHVDQTZCRTs7SUFFRiwwQ0FjRTs7Ozs7SUFqREEsb0NBQXlCOzs7OztJQUN6QixnREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4vLi4vYWN0aW9ucy9maW5kLXN0b3Jlcy5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmluZFN0b3Jlc0VmZmVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlckNvbm5lY3RvcjogU3RvcmVGaW5kZXJDb25uZWN0b3JcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBmaW5kU3RvcmVzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9uLkZpbmRTdG9yZXNTdWNjZXNzIHwgZnJvbUFjdGlvbi5GaW5kU3RvcmVzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9uLkZJTkRfU1RPUkVTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbi5GaW5kU3RvcmVzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5zdG9yZUZpbmRlckNvbm5lY3RvclxuICAgICAgICAuc2VhcmNoKFxuICAgICAgICAgIHBheWxvYWQucXVlcnlUZXh0LFxuICAgICAgICAgIHBheWxvYWQuc2VhcmNoQ29uZmlnLFxuICAgICAgICAgIHBheWxvYWQubG9uZ2l0dWRlTGF0aXR1ZGVcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5jb3VudHJ5SXNvQ29kZSkge1xuICAgICAgICAgICAgICBkYXRhLnN0b3JlcyA9IGRhdGEuc3RvcmVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBzdG9yZSA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUgPT09IHBheWxvYWQuY291bnRyeUlzb0NvZGVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9uLkZpbmRTdG9yZXNTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9uLkZpbmRTdG9yZXNGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZmluZFN0b3JlQnlJZCQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbi5GaW5kU3RvcmVCeUlkU3VjY2VzcyB8IGZyb21BY3Rpb24uRmluZFN0b3JlQnlJZEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5GSU5EX1NUT1JFX0JZX0lEKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbi5GaW5kU3RvcmVCeUlkKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuc3RvcmVGaW5kZXJDb25uZWN0b3IuZ2V0KHBheWxvYWQuc3RvcmVJZCkucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gbmV3IGZyb21BY3Rpb24uRmluZFN0b3JlQnlJZFN1Y2Nlc3MoZGF0YSkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGZyb21BY3Rpb24uRmluZFN0b3JlQnlJZEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=