import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
var CurrenciesEffects = /** @class */ (function () {
    function CurrenciesEffects(actions$, siteConnector, winRef) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadCurrencies$ = this.actions$.pipe(ofType(SiteContextActions.LOAD_CURRENCIES), exhaustMap(function () {
            return _this.siteConnector.getCurrencies().pipe(map(function (currencies) { return new SiteContextActions.LoadCurrenciesSuccess(currencies); }), catchError(function (error) {
                return of(new SiteContextActions.LoadCurrenciesFail(makeErrorSerializable(error)));
            }));
        }));
        this.activateCurrency$ = this.actions$.pipe(ofType(SiteContextActions.SET_ACTIVE_CURRENCY), tap(function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        }), map(function () { return new SiteContextActions.CurrencyChange(); }));
    }
    CurrenciesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector },
        { type: WindowRef }
    ]; };
    __decorate([
        Effect()
    ], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
    __decorate([
        Effect()
    ], CurrenciesEffects.prototype, "activateCurrency$", void 0);
    CurrenciesEffects = __decorate([
        Injectable()
    ], CurrenciesEffects);
    return CurrenciesEffects;
}());
export { CurrenciesEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL2VmZmVjdHMvY3VycmVuY2llcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHdEQ7SUFvQ0UsMkJBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsTUFBaUI7UUFIM0IsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFyQzNCLG9CQUFlLEdBR1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsRUFDMUMsVUFBVSxDQUFDO1lBQ1QsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUNELFVBQUEsVUFBVSxJQUFJLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsRUFBeEQsQ0FBd0QsQ0FDdkUsRUFDRCxVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksa0JBQWtCLENBQUMsa0JBQWtCLENBQ3ZDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxDQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixzQkFBaUIsR0FFYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLEVBQzlDLEdBQUcsQ0FBQyxVQUFDLE1BQTRDO1lBQy9DLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxFQUF2QyxDQUF1QyxDQUFDLENBQ25ELENBQUM7SUFNQyxDQUFDOztnQkFIZ0IsT0FBTztnQkFDRixhQUFhO2dCQUNwQixTQUFTOztJQXJDM0I7UUFEQyxNQUFNLEVBQUU7OERBb0JQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7Z0VBV1A7SUFsQ1MsaUJBQWlCO1FBRDdCLFVBQVUsRUFBRTtPQUNBLGlCQUFpQixDQXlDN0I7SUFBRCx3QkFBQztDQUFBLEFBekNELElBeUNDO1NBekNZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXJyZW5jaWVzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ3VycmVuY2llcyQ6IE9ic2VydmFibGU8XG4gICAgfCBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXNTdWNjZXNzXG4gICAgfCBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5MT0FEX0NVUlJFTkNJRVMpLFxuICAgIGV4aGF1c3RNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2l0ZUNvbm5lY3Rvci5nZXRDdXJyZW5jaWVzKCkucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIGN1cnJlbmNpZXMgPT4gbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQ3VycmVuY2llc1N1Y2Nlc3MoY3VycmVuY2llcylcbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQ3VycmVuY2llc0ZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWN0aXZhdGVDdXJyZW5jeSQ6IE9ic2VydmFibGU8XG4gICAgU2l0ZUNvbnRleHRBY3Rpb25zLkN1cnJlbmN5Q2hhbmdlXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5TRVRfQUNUSVZFX0NVUlJFTkNZKSxcbiAgICB0YXAoKGFjdGlvbjogU2l0ZUNvbnRleHRBY3Rpb25zLlNldEFjdGl2ZUN1cnJlbmN5KSA9PiB7XG4gICAgICBpZiAodGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVuY3knLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSksXG4gICAgbWFwKCgpID0+IG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuQ3VycmVuY3lDaGFuZ2UoKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3RvcixcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmXG4gICkge31cbn1cbiJdfQ==