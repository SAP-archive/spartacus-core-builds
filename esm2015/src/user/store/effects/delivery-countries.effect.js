/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAction from '../actions/delivery-countries.action';
import { OccMiscsService } from '../../../occ/miscs/miscs.service';
export class DeliveryCountriesEffects {
    /**
     * @param {?} actions$
     * @param {?} occMiscsService
     */
    constructor(actions$, occMiscsService) {
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadDeliveryCountries$ = this.actions$.pipe(ofType(fromAction.LOAD_DELIVERY_COUNTRIES), switchMap(() => {
            return this.occMiscsService.loadDeliveryCountries().pipe(map(data => new fromAction.LoadDeliveryCountriesSuccess(data.countries)), catchError(error => of(new fromAction.LoadDeliveryCountriesFail(error))));
        }));
    }
}
DeliveryCountriesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DeliveryCountriesEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccMiscsService }
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
    DeliveryCountriesEffects.prototype.occMiscsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvZGVsaXZlcnktY291bnRyaWVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sS0FBSyxVQUFVLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR25FLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBZ0JuQyxZQUNVLFFBQWlCLEVBQ2pCLGVBQWdDO1FBRGhDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBaEIxQywyQkFBc0IsR0FFbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsRUFDMUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FDdEQsR0FBRyxDQUNELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUNwRSxFQUNELFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ3pFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBcEJMLFVBQVU7Ozs7WUFSRixPQUFPO1lBTVAsZUFBZTs7QUFLdEI7SUFEQyxNQUFNLEVBQUU7c0NBQ2UsVUFBVTt3RUFZaEM7OztJQWJGLDBEQWFFOzs7OztJQUdBLDRDQUF5Qjs7Ozs7SUFDekIsbURBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9kZWxpdmVyeS1jb3VudHJpZXMuYWN0aW9uJztcbmltcG9ydCB7IE9jY01pc2NzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29jYy9taXNjcy9taXNjcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5Q291bnRyaWVzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb24uRGVsaXZlcnlDb3VudHJpZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5MT0FEX0RFTElWRVJZX0NPVU5UUklFUyksXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9jY01pc2NzU2VydmljZS5sb2FkRGVsaXZlcnlDb3VudHJpZXMoKS5waXBlKFxuICAgICAgICBtYXAoXG4gICAgICAgICAgZGF0YSA9PiBuZXcgZnJvbUFjdGlvbi5Mb2FkRGVsaXZlcnlDb3VudHJpZXNTdWNjZXNzKGRhdGEuY291bnRyaWVzKVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9uLkxvYWREZWxpdmVyeUNvdW50cmllc0ZhaWwoZXJyb3IpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjTWlzY3NTZXJ2aWNlOiBPY2NNaXNjc1NlcnZpY2VcbiAgKSB7fVxufVxuIl19