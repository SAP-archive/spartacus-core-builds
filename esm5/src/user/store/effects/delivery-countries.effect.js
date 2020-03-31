import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CountryType } from '../../../model/address.model';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserActions } from '../actions/index';
var DeliveryCountriesEffects = /** @class */ (function () {
    function DeliveryCountriesEffects(actions$, siteConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadDeliveryCountries$ = this.actions$.pipe(ofType(UserActions.LOAD_DELIVERY_COUNTRIES), switchMap(function () {
            return _this.siteConnector.getCountries(CountryType.SHIPPING).pipe(map(function (countries) { return new UserActions.LoadDeliveryCountriesSuccess(countries); }), catchError(function (error) {
                return of(new UserActions.LoadDeliveryCountriesFail(makeErrorSerializable(error)));
            }));
        }));
    }
    DeliveryCountriesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector }
    ]; };
    __decorate([
        Effect()
    ], DeliveryCountriesEffects.prototype, "loadDeliveryCountries$", void 0);
    DeliveryCountriesEffects = __decorate([
        Injectable()
    ], DeliveryCountriesEffects);
    return DeliveryCountriesEffects;
}());
export { DeliveryCountriesEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvZGVsaXZlcnktY291bnRyaWVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQztJQXNCRSxrQ0FDVSxRQUFpQixFQUNqQixhQUE0QjtRQUZ0QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUF0QnRDLDJCQUFzQixHQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUMzQyxTQUFTLENBQUM7WUFDUixPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQy9ELEdBQUcsQ0FDRCxVQUFDLFNBQVMsSUFBSyxPQUFBLElBQUksV0FBVyxDQUFDLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxFQUF2RCxDQUF1RCxDQUN2RSxFQUNELFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMseUJBQXlCLENBQ3ZDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxDQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFGZ0IsT0FBTztnQkFDRixhQUFhOztJQXRCdEM7UUFEQyxNQUFNLEVBQUU7NEVBbUJQO0lBcEJTLHdCQUF3QjtRQURwQyxVQUFVLEVBQUU7T0FDQSx3QkFBd0IsQ0EwQnBDO0lBQUQsK0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQTFCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ291bnRyeVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5Q291bnRyaWVzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLkRlbGl2ZXJ5Q291bnRyaWVzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfREVMSVZFUllfQ09VTlRSSUVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2l0ZUNvbm5lY3Rvci5nZXRDb3VudHJpZXMoQ291bnRyeVR5cGUuU0hJUFBJTkcpLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAoY291bnRyaWVzKSA9PiBuZXcgVXNlckFjdGlvbnMuTG9hZERlbGl2ZXJ5Q291bnRyaWVzU3VjY2Vzcyhjb3VudHJpZXMpXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWREZWxpdmVyeUNvdW50cmllc0ZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=