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
                .search(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
                .pipe(map(function (data) {
                if (payload.countryIsoCode) {
                    data.stores = data.stores.filter(function (store) {
                        return store.address.country.isocode === payload.countryIsoCode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9lZmZlY3RzL2ZpbmQtc3RvcmVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHdEQ7SUFDRSwwQkFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFJcEQsZ0JBQVcsR0FFUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUN0QyxHQUFHLENBQUMsVUFBQyxNQUFxQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDOUQsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQUEsS0FBSSxDQUFDLG9CQUFvQjtpQkFDdEIsTUFBTSxDQUNMLE9BQU8sQ0FBQyxTQUFTLEVBQ2pCLE9BQU8sQ0FBQyxZQUFZLEVBQ3BCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDMUI7aUJBQ0EsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQ04sSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFO29CQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUM5QixVQUFBLEtBQUs7d0JBQ0gsT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLGNBQWM7b0JBQXhELENBQXdELENBQzNELENBQUM7aUJBQ0g7Z0JBRUQsT0FBTyxJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLENBQ25DLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxDQUNGLENBQ0Y7UUF4QkgsQ0F3QkcsQ0FDSixDQUNGLENBQUM7UUFHRixtQkFBYyxHQUdWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsRUFDM0MsR0FBRyxDQUFDLFVBQUMsTUFBd0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ2pFLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZixPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBakQsQ0FBaUQsQ0FBQyxFQUM5RCxVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksa0JBQWtCLENBQUMsaUJBQWlCLENBQ3RDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxDQUNGLENBQ0Y7UUFURCxDQVNDLENBQ0YsQ0FDRixDQUFDO0lBeERDLENBQUM7O2dCQUZnQixPQUFPO2dCQUNLLG9CQUFvQjs7SUFJcEQ7UUFEQyxNQUFNLEVBQUU7eURBaUNQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7NERBbUJQO0lBNURTLGdCQUFnQjtRQUQ1QixVQUFVLEVBQUU7T0FDQSxnQkFBZ0IsQ0E2RDVCO0lBQUQsdUJBQUM7Q0FBQSxBQTdERCxJQTZEQztTQTdEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXNFZmZlY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJDb25uZWN0b3I6IFN0b3JlRmluZGVyQ29ubmVjdG9yXG4gICkge31cblxuICBARWZmZWN0KClcbiAgZmluZFN0b3JlcyQ6IE9ic2VydmFibGU8XG4gICAgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZXNTdWNjZXNzIHwgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFN0b3JlRmluZGVyQWN0aW9ucy5GSU5EX1NUT1JFUyksXG4gICAgbWFwKChhY3Rpb246IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5zdG9yZUZpbmRlckNvbm5lY3RvclxuICAgICAgICAuc2VhcmNoKFxuICAgICAgICAgIHBheWxvYWQucXVlcnlUZXh0LFxuICAgICAgICAgIHBheWxvYWQuc2VhcmNoQ29uZmlnLFxuICAgICAgICAgIHBheWxvYWQubG9uZ2l0dWRlTGF0aXR1ZGVcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5jb3VudHJ5SXNvQ29kZSkge1xuICAgICAgICAgICAgICBkYXRhLnN0b3JlcyA9IGRhdGEuc3RvcmVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBzdG9yZSA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUgPT09IHBheWxvYWQuY291bnRyeUlzb0NvZGVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBmaW5kU3RvcmVCeUlkJDogT2JzZXJ2YWJsZTxcbiAgICB8IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVCeUlkU3VjY2Vzc1xuICAgIHwgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZUJ5SWRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFN0b3JlRmluZGVyQWN0aW9ucy5GSU5EX1NUT1JFX0JZX0lEKSxcbiAgICBtYXAoKGFjdGlvbjogU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZUJ5SWQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5zdG9yZUZpbmRlckNvbm5lY3Rvci5nZXQocGF5bG9hZC5zdG9yZUlkKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZUJ5SWRTdWNjZXNzKGRhdGEpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVCeUlkRmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==