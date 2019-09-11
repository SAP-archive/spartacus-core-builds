/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
export class ConsignmentTrackingEffects {
    /**
     * @param {?} actions$
     * @param {?} userOrderConnector
     */
    constructor(actions$, userOrderConnector) {
        this.actions$ = actions$;
        this.userOrderConnector = userOrderConnector;
        this.loadConsignmentTracking$ = this.actions$.pipe(ofType(UserActions.LOAD_CONSIGNMENT_TRACKING), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userOrderConnector
                .getConsignmentTracking(payload.orderCode, payload.consignmentCode)
                .pipe(map((/**
             * @param {?} tracking
             * @return {?}
             */
            (tracking) => new UserActions.LoadConsignmentTrackingSuccess(tracking))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.LoadConsignmentTrackingFail(makeErrorSerializable(error))))));
        })));
    }
}
ConsignmentTrackingEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConsignmentTrackingEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserOrderConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ConsignmentTrackingEffects.prototype, "loadConsignmentTracking$", void 0);
if (false) {
    /** @type {?} */
    ConsignmentTrackingEffects.prototype.loadConsignmentTracking$;
    /**
     * @type {?}
     * @private
     */
    ConsignmentTrackingEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ConsignmentTrackingEffects.prototype.userOrderConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9jb25zaWdubWVudC10cmFja2luZy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHMUUsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUEwQnJDLFlBQ1UsUUFBaUIsRUFDakIsa0JBQXNDO1FBRHRDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQTFCaEQsNkJBQXdCLEdBRXBCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLEVBQzdDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQTJDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDcEUsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQjtpQkFDM0Isc0JBQXNCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDO2lCQUNsRSxJQUFJLENBQ0gsR0FBRzs7OztZQUNELENBQUMsUUFBNkIsRUFBRSxFQUFFLENBQ2hDLElBQUksV0FBVyxDQUFDLDhCQUE4QixDQUFDLFFBQVEsQ0FBQyxFQUMzRCxFQUNELFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsMkJBQTJCLENBQ3pDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGLEVBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQTlCTCxVQUFVOzs7O1lBUkYsT0FBTztZQUlQLGtCQUFrQjs7QUFPekI7SUFEQyxNQUFNLEVBQUU7c0NBQ2lCLFVBQVU7NEVBc0JsQzs7O0lBdkJGLDhEQXVCRTs7Ozs7SUFHQSw4Q0FBeUI7Ozs7O0lBQ3pCLHdEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2lnbm1lbnQtdHJhY2tpbmcubW9kZWwnO1xuaW1wb3J0IHsgVXNlck9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnNpZ25tZW50VHJhY2tpbmdFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDb25zaWdubWVudFRyYWNraW5nJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Db25zaWdubWVudFRyYWNraW5nQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfQ09OU0lHTk1FTlRfVFJBQ0tJTkcpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5Mb2FkQ29uc2lnbm1lbnRUcmFja2luZykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJPcmRlckNvbm5lY3RvclxuICAgICAgICAuZ2V0Q29uc2lnbm1lbnRUcmFja2luZyhwYXlsb2FkLm9yZGVyQ29kZSwgcGF5bG9hZC5jb25zaWdubWVudENvZGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICh0cmFja2luZzogQ29uc2lnbm1lbnRUcmFja2luZykgPT5cbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRDb25zaWdubWVudFRyYWNraW5nU3VjY2Vzcyh0cmFja2luZylcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZENvbnNpZ25tZW50VHJhY2tpbmdGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyT3JkZXJDb25uZWN0b3I6IFVzZXJPcmRlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=