/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CountryType } from '../../../model/address.model';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
import * as fromAction from '../actions/delivery-countries.action';
export class DeliveryCountriesEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     */
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadDeliveryCountries$ = this.actions$.pipe(ofType(fromAction.LOAD_DELIVERY_COUNTRIES), switchMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getCountries(CountryType.SHIPPING).pipe(map((/**
             * @param {?} countries
             * @return {?}
             */
            countries => new fromAction.LoadDeliveryCountriesSuccess(countries))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromAction.LoadDeliveryCountriesFail(makeHttpErrorSerializable(error))))));
        })));
    }
}
DeliveryCountriesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DeliveryCountriesEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], DeliveryCountriesEffects.prototype, "loadDeliveryCountries$", void 0);
if (false) {
    /** @type {?} */
    DeliveryCountriesEffects.prototype.loadDeliveryCountries$;
    /**
     * @type {?}
     * @private
     */
    DeliveryCountriesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DeliveryCountriesEffects.prototype.siteConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvZGVsaXZlcnktY291bnRyaWVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxLQUFLLFVBQVUsTUFBTSxzQ0FBc0MsQ0FBQztBQUduRSxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQXNCbkMsWUFDVSxRQUFpQixFQUNqQixhQUE0QjtRQUQ1QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBdEJ0QywyQkFBc0IsR0FFbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsRUFDMUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUMvRCxHQUFHOzs7O1lBQ0QsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsRUFDcEUsRUFDRCxVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUNBLElBQUksVUFBVSxDQUFDLHlCQUF5QixDQUN0Qyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FDakMsQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUExQkwsVUFBVTs7OztZQVJGLE9BQU87WUFJUCxhQUFhOztBQU9wQjtJQURDLE1BQU0sRUFBRTtzQ0FDZSxVQUFVO3dFQWtCaEM7OztJQW5CRiwwREFtQkU7Ozs7O0lBR0EsNENBQXlCOzs7OztJQUN6QixpREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ291bnRyeVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9kZWxpdmVyeS1jb3VudHJpZXMuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5Q291bnRyaWVzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb24uRGVsaXZlcnlDb3VudHJpZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5MT0FEX0RFTElWRVJZX0NPVU5UUklFUyksXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0Q291bnRyaWVzKENvdW50cnlUeXBlLlNISVBQSU5HKS5waXBlKFxuICAgICAgICBtYXAoXG4gICAgICAgICAgY291bnRyaWVzID0+IG5ldyBmcm9tQWN0aW9uLkxvYWREZWxpdmVyeUNvdW50cmllc1N1Y2Nlc3MoY291bnRyaWVzKVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgZnJvbUFjdGlvbi5Mb2FkRGVsaXZlcnlDb3VudHJpZXNGYWlsKFxuICAgICAgICAgICAgICBtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==