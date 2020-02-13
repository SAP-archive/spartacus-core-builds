/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
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
                .getConsignmentTracking(payload.orderCode, payload.consignmentCode, payload.userId)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9jb25zaWdubWVudC10cmFja2luZy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUE4QnJDLFlBQ1UsUUFBaUIsRUFDakIsa0JBQXNDO1FBRHRDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQTlCaEQsNkJBQXdCLEdBRXBCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLEVBQzdDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQTJDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDcEUsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQjtpQkFDM0Isc0JBQXNCLENBQ3JCLE9BQU8sQ0FBQyxTQUFTLEVBQ2pCLE9BQU8sQ0FBQyxlQUFlLEVBQ3ZCLE9BQU8sQ0FBQyxNQUFNLENBQ2Y7aUJBQ0EsSUFBSSxDQUNILEdBQUc7Ozs7WUFDRCxDQUFDLFFBQTZCLEVBQUUsRUFBRSxDQUNoQyxJQUFJLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxRQUFRLENBQUMsRUFDM0QsRUFDRCxVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLDJCQUEyQixDQUN6QyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUFsQ0wsVUFBVTs7OztZQVJGLE9BQU87WUFLUCxrQkFBa0I7O0FBTXpCO0lBREMsTUFBTSxFQUFFO3NDQUNpQixVQUFVOzRFQTBCbEM7OztJQTNCRiw4REEyQkU7Ozs7O0lBR0EsOENBQXlCOzs7OztJQUN6Qix3REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyT3JkZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25zaWdubWVudFRyYWNraW5nRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ29uc2lnbm1lbnRUcmFja2luZyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuQ29uc2lnbm1lbnRUcmFja2luZ0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX0NPTlNJR05NRU5UX1RSQUNLSU5HKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZENvbnNpZ25tZW50VHJhY2tpbmcpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyT3JkZXJDb25uZWN0b3JcbiAgICAgICAgLmdldENvbnNpZ25tZW50VHJhY2tpbmcoXG4gICAgICAgICAgcGF5bG9hZC5vcmRlckNvZGUsXG4gICAgICAgICAgcGF5bG9hZC5jb25zaWdubWVudENvZGUsXG4gICAgICAgICAgcGF5bG9hZC51c2VySWRcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAodHJhY2tpbmc6IENvbnNpZ25tZW50VHJhY2tpbmcpID0+XG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkQ29uc2lnbm1lbnRUcmFja2luZ1N1Y2Nlc3ModHJhY2tpbmcpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRDb25zaWdubWVudFRyYWNraW5nRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlck9yZGVyQ29ubmVjdG9yOiBVc2VyT3JkZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19