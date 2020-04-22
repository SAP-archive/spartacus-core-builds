import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
import { StoreFinderActions } from '../actions/index';
var FindStoresEffect = /** @class */ (function () {
    function FindStoresEffect(actions$, storeFinderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.findStores$ = this.actions$.pipe(ofType(StoreFinderActions.FIND_STORES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.storeFinderConnector
                .search(payload.queryText, payload.searchConfig, payload.longitudeLatitude, payload.radius)
                .pipe(map(function (data) {
                if (payload.countryIsoCode) {
                    data.stores = data.stores.filter(function (store) {
                        return store.address.country.isocode === payload.countryIsoCode;
                    });
                    data.stores.sort(function (a, b) {
                        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                    });
                }
                return new StoreFinderActions.FindStoresSuccess(data);
            }), catchError(function (error) {
                return of(new StoreFinderActions.FindStoresFail(makeErrorSerializable(error)));
            }));
        }));
        this.findStoreById$ = this.actions$.pipe(ofType(StoreFinderActions.FIND_STORE_BY_ID), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.storeFinderConnector.get(payload.storeId).pipe(map(function (data) { return new StoreFinderActions.FindStoreByIdSuccess(data); }), catchError(function (error) {
                return of(new StoreFinderActions.FindStoreByIdFail(makeErrorSerializable(error)));
            }));
        }));
    }
    FindStoresEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: StoreFinderConnector }
    ]; };
    __decorate([
        Effect()
    ], FindStoresEffect.prototype, "findStores$", void 0);
    __decorate([
        Effect()
    ], FindStoresEffect.prototype, "findStoreById$", void 0);
    FindStoresEffect = __decorate([
        Injectable()
    ], FindStoresEffect);
    return FindStoresEffect;
}());
export { FindStoresEffect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9lZmZlY3RzL2ZpbmQtc3RvcmVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHdEQ7SUFDRSwwQkFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFJcEQsZ0JBQVcsR0FFUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUN0QyxHQUFHLENBQUMsVUFBQyxNQUFxQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDOUQsUUFBUSxDQUFDLFVBQUMsT0FBTztZQUNmLE9BQUEsS0FBSSxDQUFDLG9CQUFvQjtpQkFDdEIsTUFBTSxDQUNMLE9BQU8sQ0FBQyxTQUFTLEVBQ2pCLE9BQU8sQ0FBQyxZQUFZLEVBQ3BCLE9BQU8sQ0FBQyxpQkFBaUIsRUFDekIsT0FBTyxDQUFDLE1BQU0sQ0FDZjtpQkFDQSxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsSUFBSTtnQkFDUCxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQzlCLFVBQUMsS0FBSzt3QkFDSixPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsY0FBYztvQkFBeEQsQ0FBd0QsQ0FDM0QsQ0FBQztvQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNwQixPQUFBLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUE5QyxDQUE4QyxDQUMvQyxDQUFDO2lCQUNIO2dCQUVELE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQyxLQUFLO2dCQUNmLE9BQUEsRUFBRSxDQUNBLElBQUksa0JBQWtCLENBQUMsY0FBYyxDQUNuQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsQ0FDRixDQUNGO1FBNUJILENBNEJHLENBQ0osQ0FDRixDQUFDO1FBR0YsbUJBQWMsR0FHVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLEVBQzNDLEdBQUcsQ0FBQyxVQUFDLE1BQXdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUNqRSxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2hCLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNqRCxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFqRCxDQUFpRCxDQUFDLEVBQ2hFLFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQ0EsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FDdEMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7WUFKRCxDQUlDLENBQ0YsQ0FDRjtRQVRELENBU0MsQ0FDRixDQUNGLENBQUM7SUE1REMsQ0FBQzs7Z0JBRmdCLE9BQU87Z0JBQ0ssb0JBQW9COztJQUlwRDtRQURDLE1BQU0sRUFBRTt5REFxQ1A7SUFHRjtRQURDLE1BQU0sRUFBRTs0REFtQlA7SUFoRVMsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtPQUNBLGdCQUFnQixDQWlFNUI7SUFBRCx1QkFBQztDQUFBLEFBakVELElBaUVDO1NBakVZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmluZFN0b3Jlc0VmZmVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlckNvbm5lY3RvcjogU3RvcmVGaW5kZXJDb25uZWN0b3JcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBmaW5kU3RvcmVzJDogT2JzZXJ2YWJsZTxcbiAgICBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc1N1Y2Nlc3MgfCBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU3RvcmVGaW5kZXJBY3Rpb25zLkZJTkRfU1RPUkVTKSxcbiAgICBtYXAoKGFjdGlvbjogU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT5cbiAgICAgIHRoaXMuc3RvcmVGaW5kZXJDb25uZWN0b3JcbiAgICAgICAgLnNlYXJjaChcbiAgICAgICAgICBwYXlsb2FkLnF1ZXJ5VGV4dCxcbiAgICAgICAgICBwYXlsb2FkLnNlYXJjaENvbmZpZyxcbiAgICAgICAgICBwYXlsb2FkLmxvbmdpdHVkZUxhdGl0dWRlLFxuICAgICAgICAgIHBheWxvYWQucmFkaXVzXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5jb3VudHJ5SXNvQ29kZSkge1xuICAgICAgICAgICAgICBkYXRhLnN0b3JlcyA9IGRhdGEuc3RvcmVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoc3RvcmUpID0+XG4gICAgICAgICAgICAgICAgICBzdG9yZS5hZGRyZXNzLmNvdW50cnkuaXNvY29kZSA9PT0gcGF5bG9hZC5jb3VudHJ5SXNvQ29kZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBkYXRhLnN0b3Jlcy5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgICAgICAgIGEubmFtZSA8IGIubmFtZSA/IC0xIDogYS5uYW1lID4gYi5uYW1lID8gMSA6IDBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGZpbmRTdG9yZUJ5SWQkOiBPYnNlcnZhYmxlPFxuICAgIHwgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZUJ5SWRTdWNjZXNzXG4gICAgfCBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3JlQnlJZEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU3RvcmVGaW5kZXJBY3Rpb25zLkZJTkRfU1RPUkVfQllfSUQpLFxuICAgIG1hcCgoYWN0aW9uOiBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3JlQnlJZCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT5cbiAgICAgIHRoaXMuc3RvcmVGaW5kZXJDb25uZWN0b3IuZ2V0KHBheWxvYWQuc3RvcmVJZCkucGlwZShcbiAgICAgICAgbWFwKChkYXRhKSA9PiBuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZUJ5SWRTdWNjZXNzKGRhdGEpKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZUJ5SWRGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xufVxuIl19