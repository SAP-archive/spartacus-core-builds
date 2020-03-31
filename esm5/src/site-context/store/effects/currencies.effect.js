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
            return _this.siteConnector.getCurrencies().pipe(map(function (currencies) {
                return new SiteContextActions.LoadCurrenciesSuccess(currencies);
            }), catchError(function (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL2VmZmVjdHMvY3VycmVuY2llcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHdEQ7SUFxQ0UsMkJBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsTUFBaUI7UUFIM0IsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVc7UUF0QzNCLG9CQUFlLEdBR1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsRUFDMUMsVUFBVSxDQUFDO1lBQ1QsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUNELFVBQUMsVUFBVTtnQkFDVCxPQUFBLElBQUksa0JBQWtCLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDO1lBQXhELENBQXdELENBQzNELEVBQ0QsVUFBVSxDQUFDLFVBQUMsS0FBSztnQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLGtCQUFrQixDQUFDLGtCQUFrQixDQUN2QyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsQ0FDRixDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0Ysc0JBQWlCLEdBRWIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxFQUM5QyxHQUFHLENBQUMsVUFBQyxNQUE0QztZQUMvQyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO2dCQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoRTtRQUNILENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsRUFBdkMsQ0FBdUMsQ0FBQyxDQUNuRCxDQUFDO0lBTUMsQ0FBQzs7Z0JBSGdCLE9BQU87Z0JBQ0YsYUFBYTtnQkFDcEIsU0FBUzs7SUF0QzNCO1FBREMsTUFBTSxFQUFFOzhEQXFCUDtJQUdGO1FBREMsTUFBTSxFQUFFO2dFQVdQO0lBbkNTLGlCQUFpQjtRQUQ3QixVQUFVLEVBQUU7T0FDQSxpQkFBaUIsQ0EwQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQTFDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VycmVuY2llc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZEN1cnJlbmNpZXMkOiBPYnNlcnZhYmxlPFxuICAgIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzU3VjY2Vzc1xuICAgIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShTaXRlQ29udGV4dEFjdGlvbnMuTE9BRF9DVVJSRU5DSUVTKSxcbiAgICBleGhhdXN0TWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0Q3VycmVuY2llcygpLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAoY3VycmVuY2llcykgPT5cbiAgICAgICAgICAgIG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXNTdWNjZXNzKGN1cnJlbmNpZXMpXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQ3VycmVuY2llc0ZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWN0aXZhdGVDdXJyZW5jeSQ6IE9ic2VydmFibGU8XG4gICAgU2l0ZUNvbnRleHRBY3Rpb25zLkN1cnJlbmN5Q2hhbmdlXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5TRVRfQUNUSVZFX0NVUlJFTkNZKSxcbiAgICB0YXAoKGFjdGlvbjogU2l0ZUNvbnRleHRBY3Rpb25zLlNldEFjdGl2ZUN1cnJlbmN5KSA9PiB7XG4gICAgICBpZiAodGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVuY3knLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSksXG4gICAgbWFwKCgpID0+IG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuQ3VycmVuY3lDaGFuZ2UoKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3RvcixcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmXG4gICkge31cbn1cbiJdfQ==