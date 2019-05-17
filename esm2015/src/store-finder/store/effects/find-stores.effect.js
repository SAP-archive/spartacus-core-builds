/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.findStores$ = this.actions$.pipe(ofType(fromAction.FIND_STORES), map((action) => action.payload), mergeMap(payload => this.storeFinderConnector
            .search(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
            .pipe(map(data => {
            if (payload.countryIsoCode) {
                data.stores = data.stores.filter(store => store.address.country.isocode === payload.countryIsoCode);
            }
            return new fromAction.FindStoresSuccess(data);
        }), catchError(error => of(new fromAction.FindStoresFail(error))))));
        this.findStoreById$ = this.actions$.pipe(ofType(fromAction.FIND_STORE_BY_ID), map((action) => action.payload), switchMap(payload => this.storeFinderConnector.get(payload.storeId).pipe(map(data => new fromAction.FindStoreByIdSuccess(data)), catchError(error => of(new fromAction.FindStoreByIdFail(error))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9lZmZlY3RzL2ZpbmQtc3RvcmVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEtBQUssVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRy9FLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLFlBQ1UsUUFBaUIsRUFDakIsb0JBQTBDO1FBRDFDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUlwRCxnQkFBVyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFDOUIsR0FBRyxDQUFDLENBQUMsTUFBNkIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUN0RCxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDakIsSUFBSSxDQUFDLG9CQUFvQjthQUN0QixNQUFNLENBQ0wsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLFlBQVksRUFDcEIsT0FBTyxDQUFDLGlCQUFpQixDQUMxQjthQUNBLElBQUksQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQzlCLEtBQUssQ0FBQyxFQUFFLENBQ04sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxjQUFjLENBQzNELENBQUM7YUFDSDtZQUVELE9BQU8sSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQzlELENBQ0osQ0FDRixDQUFDO1FBR0YsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFDbkMsR0FBRyxDQUFDLENBQUMsTUFBZ0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUN6RCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUN0RCxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNqRSxDQUNGLENBQ0YsQ0FBQztJQXZDQyxDQUFDOzs7WUFMTCxVQUFVOzs7O1lBUkYsT0FBTztZQU1QLG9CQUFvQjs7QUFVM0I7SUFEQyxNQUFNLEVBQUU7c0NBQ0ksVUFBVTtxREF3QnJCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ08sVUFBVTt3REFTeEI7OztJQXJDRix1Q0F5QkU7O0lBRUYsMENBVUU7Ozs7O0lBekNBLG9DQUF5Qjs7Ozs7SUFDekIsZ0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLy4uL2FjdGlvbnMvZmluZC1zdG9yZXMuYWN0aW9uJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXNFZmZlY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJDb25uZWN0b3I6IFN0b3JlRmluZGVyQ29ubmVjdG9yXG4gICkge31cblxuICBARWZmZWN0KClcbiAgZmluZFN0b3JlcyQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5GSU5EX1NUT1JFUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb24uRmluZFN0b3JlcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuc3RvcmVGaW5kZXJDb25uZWN0b3JcbiAgICAgICAgLnNlYXJjaChcbiAgICAgICAgICBwYXlsb2FkLnF1ZXJ5VGV4dCxcbiAgICAgICAgICBwYXlsb2FkLnNlYXJjaENvbmZpZyxcbiAgICAgICAgICBwYXlsb2FkLmxvbmdpdHVkZUxhdGl0dWRlXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKHBheWxvYWQuY291bnRyeUlzb0NvZGUpIHtcbiAgICAgICAgICAgICAgZGF0YS5zdG9yZXMgPSBkYXRhLnN0b3Jlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgc3RvcmUgPT5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmFkZHJlc3MuY291bnRyeS5pc29jb2RlID09PSBwYXlsb2FkLmNvdW50cnlJc29Db2RlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbi5GaW5kU3RvcmVzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9uLkZpbmRTdG9yZXNGYWlsKGVycm9yKSkpXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGZpbmRTdG9yZUJ5SWQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb24uRklORF9TVE9SRV9CWV9JRCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb24uRmluZFN0b3JlQnlJZCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLnN0b3JlRmluZGVyQ29ubmVjdG9yLmdldChwYXlsb2FkLnN0b3JlSWQpLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IG5ldyBmcm9tQWN0aW9uLkZpbmRTdG9yZUJ5SWRTdWNjZXNzKGRhdGEpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbi5GaW5kU3RvcmVCeUlkRmFpbChlcnJvcikpKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==