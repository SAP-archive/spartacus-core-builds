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
var FindStoresEffect = /** @class */ (function () {
    function FindStoresEffect(actions$, storeFinderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.findStores$ = this.actions$.pipe(ofType(fromAction.FIND_STORES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.storeFinderConnector
                .search(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
                .pipe(map(function (data) {
                if (payload.countryIsoCode) {
                    data.stores = data.stores.filter(function (store) {
                        return store.address.country.isocode === payload.countryIsoCode;
                    });
                }
                return new fromAction.FindStoresSuccess(data);
            }), catchError(function (error) { return of(new fromAction.FindStoresFail(error)); }));
        }));
        this.findStoreById$ = this.actions$.pipe(ofType(fromAction.FIND_STORE_BY_ID), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.storeFinderConnector.get(payload.storeId).pipe(map(function (data) { return new fromAction.FindStoreByIdSuccess(data); }), catchError(function (error) { return of(new fromAction.FindStoreByIdFail(error)); }));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9lZmZlY3RzL2ZpbmQtc3RvcmVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEtBQUssVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRS9FO0lBRUUsMEJBQ1UsUUFBaUIsRUFDakIsb0JBQTBDO1FBRnBELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBSXBELGdCQUFXLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMvQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUM5QixHQUFHLENBQUMsVUFBQyxNQUE2QixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDdEQsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQUEsS0FBSSxDQUFDLG9CQUFvQjtpQkFDdEIsTUFBTSxDQUNMLE9BQU8sQ0FBQyxTQUFTLEVBQ2pCLE9BQU8sQ0FBQyxZQUFZLEVBQ3BCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDMUI7aUJBQ0EsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQ04sSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFO29CQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUM5QixVQUFBLEtBQUs7d0JBQ0gsT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLGNBQWM7b0JBQXhELENBQXdELENBQzNELENBQUM7aUJBQ0g7Z0JBRUQsT0FBTyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FDOUQ7UUFsQkgsQ0FrQkcsQ0FDSixDQUNGLENBQUM7UUFHRixtQkFBYyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNuQyxHQUFHLENBQUMsVUFBQyxNQUFnQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDekQsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNmLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNqRCxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxFQUN0RCxVQUFVLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUNqRTtRQUhELENBR0MsQ0FDRixDQUNGLENBQUM7SUF2Q0MsQ0FBQzs7Z0JBTEwsVUFBVTs7OztnQkFSRixPQUFPO2dCQU1QLG9CQUFvQjs7SUFVM0I7UUFEQyxNQUFNLEVBQUU7MENBQ0ksVUFBVTt5REF3QnJCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ08sVUFBVTs0REFTeEI7SUFDSix1QkFBQztDQUFBLEFBN0NELElBNkNDO1NBNUNZLGdCQUFnQjs7O0lBTTNCLHVDQXlCRTs7SUFFRiwwQ0FVRTs7Ozs7SUF6Q0Esb0NBQXlCOzs7OztJQUN6QixnREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4vLi4vYWN0aW9ucy9maW5kLXN0b3Jlcy5hY3Rpb24nO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3N0b3JlLWZpbmRlci5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmluZFN0b3Jlc0VmZmVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlckNvbm5lY3RvcjogU3RvcmVGaW5kZXJDb25uZWN0b3JcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBmaW5kU3RvcmVzJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9uLkZJTkRfU1RPUkVTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbi5GaW5kU3RvcmVzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5zdG9yZUZpbmRlckNvbm5lY3RvclxuICAgICAgICAuc2VhcmNoKFxuICAgICAgICAgIHBheWxvYWQucXVlcnlUZXh0LFxuICAgICAgICAgIHBheWxvYWQuc2VhcmNoQ29uZmlnLFxuICAgICAgICAgIHBheWxvYWQubG9uZ2l0dWRlTGF0aXR1ZGVcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5jb3VudHJ5SXNvQ29kZSkge1xuICAgICAgICAgICAgICBkYXRhLnN0b3JlcyA9IGRhdGEuc3RvcmVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBzdG9yZSA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUgPT09IHBheWxvYWQuY291bnRyeUlzb0NvZGVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9uLkZpbmRTdG9yZXNTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb24uRmluZFN0b3Jlc0ZhaWwoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZmluZFN0b3JlQnlJZCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5GSU5EX1NUT1JFX0JZX0lEKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbi5GaW5kU3RvcmVCeUlkKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuc3RvcmVGaW5kZXJDb25uZWN0b3IuZ2V0KHBheWxvYWQuc3RvcmVJZCkucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gbmV3IGZyb21BY3Rpb24uRmluZFN0b3JlQnlJZFN1Y2Nlc3MoZGF0YSkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9uLkZpbmRTdG9yZUJ5SWRGYWlsKGVycm9yKSkpXG4gICAgICApXG4gICAgKVxuICApO1xufVxuIl19