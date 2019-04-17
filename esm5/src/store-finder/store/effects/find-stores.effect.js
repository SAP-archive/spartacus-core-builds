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
import { OccStoreFinderService } from '../../occ/store-finder.service';
var FindStoresEffect = /** @class */ (function () {
    function FindStoresEffect(actions$, occStoreFinderService) {
        var _this = this;
        this.actions$ = actions$;
        this.occStoreFinderService = occStoreFinderService;
        this.findStores$ = this.actions$.pipe(ofType(fromAction.FIND_STORES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occStoreFinderService
                .findStores(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
                .pipe(map(function (data) {
                data.geolocation = payload.longitudeLatitude;
                if (payload.countryIsoCode) {
                    data.stores = data.stores.filter(function (store) {
                        return store.address.country.isocode === payload.countryIsoCode;
                    });
                }
                return new fromAction.FindStoresSuccess(data);
            }), catchError(function (error) { return of(new fromAction.FindStoresFail(error)); }));
        }));
        this.findStoreById$ = this.actions$.pipe(ofType(fromAction.FIND_STORE_BY_ID), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.occStoreFinderService.findStoreById(payload.storeId).pipe(map(function (data) { return new fromAction.FindStoreByIdSuccess(data); }), catchError(function (error) { return of(new fromAction.FindStoreByIdFail(error)); }));
        }));
    }
    FindStoresEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FindStoresEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OccStoreFinderService }
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
    FindStoresEffect.prototype.occStoreFinderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9lZmZlY3RzL2ZpbmQtc3RvcmVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEtBQUssVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXZFO0lBRUUsMEJBQ1UsUUFBaUIsRUFDakIscUJBQTRDO1FBRnRELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBSXRELGdCQUFXLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMvQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUM5QixHQUFHLENBQUMsVUFBQyxNQUE2QixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDdEQsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQUEsS0FBSSxDQUFDLHFCQUFxQjtpQkFDdkIsVUFBVSxDQUNULE9BQU8sQ0FBQyxTQUFTLEVBQ2pCLE9BQU8sQ0FBQyxZQUFZLEVBQ3BCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDMUI7aUJBQ0EsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7Z0JBRTdDLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDOUIsVUFBQSxLQUFLO3dCQUNILE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxjQUFjO29CQUF4RCxDQUF3RCxDQUMzRCxDQUFDO2lCQUNIO2dCQUVELE9BQU8sSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQzlEO1FBcEJILENBb0JHLENBQ0osQ0FDRixDQUFDO1FBR0YsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFDbkMsR0FBRyxDQUFDLFVBQUMsTUFBZ0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3pELFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZixPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDNUQsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQXpDLENBQXlDLENBQUMsRUFDdEQsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FDakU7UUFIRCxDQUdDLENBQ0YsQ0FDRixDQUFDO0lBekNDLENBQUM7O2dCQUxMLFVBQVU7Ozs7Z0JBVEYsT0FBTztnQkFPUCxxQkFBcUI7O0lBVTVCO1FBREMsTUFBTSxFQUFFOzBDQUNJLFVBQVU7eURBMEJyQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNPLFVBQVU7NERBU3hCO0lBQ0osdUJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTlDWSxnQkFBZ0I7OztJQU0zQix1Q0EyQkU7O0lBRUYsMENBVUU7Ozs7O0lBM0NBLG9DQUF5Qjs7Ozs7SUFDekIsaURBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLy4uL2FjdGlvbnMvZmluZC1zdG9yZXMuYWN0aW9uJztcblxuaW1wb3J0IHsgT2NjU3RvcmVGaW5kZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3N0b3JlLWZpbmRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXNFZmZlY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjU3RvcmVGaW5kZXJTZXJ2aWNlOiBPY2NTdG9yZUZpbmRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBmaW5kU3RvcmVzJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9uLkZJTkRfU1RPUkVTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbi5GaW5kU3RvcmVzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5vY2NTdG9yZUZpbmRlclNlcnZpY2VcbiAgICAgICAgLmZpbmRTdG9yZXMoXG4gICAgICAgICAgcGF5bG9hZC5xdWVyeVRleHQsXG4gICAgICAgICAgcGF5bG9hZC5zZWFyY2hDb25maWcsXG4gICAgICAgICAgcGF5bG9hZC5sb25naXR1ZGVMYXRpdHVkZVxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIGRhdGEuZ2VvbG9jYXRpb24gPSBwYXlsb2FkLmxvbmdpdHVkZUxhdGl0dWRlO1xuXG4gICAgICAgICAgICBpZiAocGF5bG9hZC5jb3VudHJ5SXNvQ29kZSkge1xuICAgICAgICAgICAgICBkYXRhLnN0b3JlcyA9IGRhdGEuc3RvcmVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBzdG9yZSA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUgPT09IHBheWxvYWQuY291bnRyeUlzb0NvZGVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9uLkZpbmRTdG9yZXNTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb24uRmluZFN0b3Jlc0ZhaWwoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZmluZFN0b3JlQnlJZCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5GSU5EX1NUT1JFX0JZX0lEKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbi5GaW5kU3RvcmVCeUlkKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMub2NjU3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZUJ5SWQocGF5bG9hZC5zdG9yZUlkKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBuZXcgZnJvbUFjdGlvbi5GaW5kU3RvcmVCeUlkU3VjY2VzcyhkYXRhKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb24uRmluZFN0b3JlQnlJZEZhaWwoZXJyb3IpKSlcbiAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=