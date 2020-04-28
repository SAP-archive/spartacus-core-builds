import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NEVER, of } from 'rxjs';
import { bufferCount, catchError, exhaustMap, filter, map, switchMapTo, tap, } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import { getActiveCurrency } from '../selectors/currencies.selectors';
var CurrenciesEffects = /** @class */ (function () {
    function CurrenciesEffects(actions$, siteConnector, winRef, state) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.state = state;
        this.loadCurrencies$ = this.actions$.pipe(ofType(SiteContextActions.LOAD_CURRENCIES), exhaustMap(function () {
            return _this.siteConnector.getCurrencies().pipe(map(function (currencies) {
                return new SiteContextActions.LoadCurrenciesSuccess(currencies);
            }), catchError(function (error) {
                return of(new SiteContextActions.LoadCurrenciesFail(makeErrorSerializable(error)));
            }));
        }));
        this.persist$ = this.actions$.pipe(ofType(SiteContextActions.SET_ACTIVE_CURRENCY), tap(function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        }), switchMapTo(NEVER));
        this.activateCurrency$ = this.state.select(getActiveCurrency).pipe(bufferCount(2, 1), 
        // avoid dispatching `change` action when we're just setting the initial value:
        filter(function (_a) {
            var _b = __read(_a, 1), previous = _b[0];
            return !!previous;
        }), map(function (_a) {
            var _b = __read(_a, 2), previous = _b[0], current = _b[1];
            return new SiteContextActions.CurrencyChange({ previous: previous, current: current });
        }));
    }
    CurrenciesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector },
        { type: WindowRef },
        { type: Store }
    ]; };
    __decorate([
        Effect()
    ], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
    __decorate([
        Effect()
    ], CurrenciesEffects.prototype, "persist$", void 0);
    __decorate([
        Effect()
    ], CurrenciesEffects.prototype, "activateCurrency$", void 0);
    CurrenciesEffects = __decorate([
        Injectable()
    ], CurrenciesEffects);
    return CurrenciesEffects;
}());
export { CurrenciesEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL2VmZmVjdHMvY3VycmVuY2llcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUNMLFdBQVcsRUFDWCxVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFJdEU7SUFpREUsMkJBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsTUFBaUIsRUFDakIsS0FBa0M7UUFKNUMsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFuRDVDLG9CQUFlLEdBR1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsRUFDMUMsVUFBVSxDQUFDO1lBQ1QsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUNELFVBQUMsVUFBVTtnQkFDVCxPQUFBLElBQUksa0JBQWtCLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDO1lBQXhELENBQXdELENBQzNELEVBQ0QsVUFBVSxDQUFDLFVBQUMsS0FBSztnQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLGtCQUFrQixDQUFDLGtCQUFrQixDQUN2QyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsQ0FDRixDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0YsYUFBUSxHQUFxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0MsTUFBTSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLEVBQzlDLEdBQUcsQ0FBQyxVQUFDLE1BQTRDO1lBQy9DLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUNuQixDQUFDO1FBR0Ysc0JBQWlCLEdBRWIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQzNDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLCtFQUErRTtRQUMvRSxNQUFNLENBQUMsVUFBQyxFQUFVO2dCQUFWLGtCQUFVLEVBQVQsZ0JBQVE7WUFBTSxPQUFBLENBQUMsQ0FBQyxRQUFRO1FBQVYsQ0FBVSxDQUFDLEVBQ2xDLEdBQUcsQ0FDRCxVQUFDLEVBQW1CO2dCQUFuQixrQkFBbUIsRUFBbEIsZ0JBQVEsRUFBRSxlQUFPO1lBQ2pCLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO1FBQTVELENBQTRELENBQy9ELENBQ0YsQ0FBQztJQU9DLENBQUM7O2dCQUpnQixPQUFPO2dCQUNGLGFBQWE7Z0JBQ3BCLFNBQVM7Z0JBQ1YsS0FBSzs7SUFuRHRCO1FBREMsTUFBTSxFQUFFOzhEQXFCUDtJQUdGO1FBREMsTUFBTSxFQUFFO3VEQVNQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7Z0VBWVA7SUEvQ1MsaUJBQWlCO1FBRDdCLFVBQVUsRUFBRTtPQUNBLGlCQUFpQixDQXVEN0I7SUFBRCx3QkFBQztDQUFBLEFBdkRELElBdURDO1NBdkRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5FVkVSLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgYnVmZmVyQ291bnQsXG4gIGNhdGNoRXJyb3IsXG4gIGV4aGF1c3RNYXAsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzd2l0Y2hNYXBUbyxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBnZXRBY3RpdmVDdXJyZW5jeSB9IGZyb20gJy4uL3NlbGVjdG9ycy9jdXJyZW5jaWVzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1cnJlbmNpZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDdXJyZW5jaWVzJDogT2JzZXJ2YWJsZTxcbiAgICB8IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQ3VycmVuY2llc1N1Y2Nlc3NcbiAgICB8IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQ3VycmVuY2llc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxPQURfQ1VSUkVOQ0lFUyksXG4gICAgZXhoYXVzdE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zaXRlQ29ubmVjdG9yLmdldEN1cnJlbmNpZXMoKS5waXBlKFxuICAgICAgICBtYXAoXG4gICAgICAgICAgKGN1cnJlbmNpZXMpID0+XG4gICAgICAgICAgICBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzU3VjY2VzcyhjdXJyZW5jaWVzKVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXNGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHBlcnNpc3QkOiBPYnNlcnZhYmxlPHZvaWQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShTaXRlQ29udGV4dEFjdGlvbnMuU0VUX0FDVElWRV9DVVJSRU5DWSksXG4gICAgdGFwKChhY3Rpb246IFNpdGVDb250ZXh0QWN0aW9ucy5TZXRBY3RpdmVDdXJyZW5jeSkgPT4ge1xuICAgICAgaWYgKHRoaXMud2luUmVmLnNlc3Npb25TdG9yYWdlKSB7XG4gICAgICAgIHRoaXMud2luUmVmLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbmN5JywgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgfVxuICAgIH0pLFxuICAgIHN3aXRjaE1hcFRvKE5FVkVSKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhY3RpdmF0ZUN1cnJlbmN5JDogT2JzZXJ2YWJsZTxcbiAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ3VycmVuY3lDaGFuZ2VcbiAgPiA9IHRoaXMuc3RhdGUuc2VsZWN0KGdldEFjdGl2ZUN1cnJlbmN5KS5waXBlKFxuICAgIGJ1ZmZlckNvdW50KDIsIDEpLFxuXG4gICAgLy8gYXZvaWQgZGlzcGF0Y2hpbmcgYGNoYW5nZWAgYWN0aW9uIHdoZW4gd2UncmUganVzdCBzZXR0aW5nIHRoZSBpbml0aWFsIHZhbHVlOlxuICAgIGZpbHRlcigoW3ByZXZpb3VzXSkgPT4gISFwcmV2aW91cyksXG4gICAgbWFwKFxuICAgICAgKFtwcmV2aW91cywgY3VycmVudF0pID0+XG4gICAgICAgIG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuQ3VycmVuY3lDaGFuZ2UoeyBwcmV2aW91cywgY3VycmVudCB9KVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3RvcixcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByaXZhdGUgc3RhdGU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0PlxuICApIHt9XG59XG4iXX0=