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
var ConsignmentTrackingEffects = /** @class */ (function () {
    function ConsignmentTrackingEffects(actions$, userOrderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userOrderConnector = userOrderConnector;
        this.loadConsignmentTracking$ = this.actions$.pipe(ofType(UserActions.LOAD_CONSIGNMENT_TRACKING), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userOrderConnector
                .getConsignmentTracking(payload.orderCode, payload.consignmentCode)
                .pipe(map((/**
             * @param {?} tracking
             * @return {?}
             */
            function (tracking) {
                return new UserActions.LoadConsignmentTrackingSuccess(tracking);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.LoadConsignmentTrackingFail(makeErrorSerializable(error)));
            })));
        })));
    }
    ConsignmentTrackingEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConsignmentTrackingEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserOrderConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ConsignmentTrackingEffects.prototype, "loadConsignmentTracking$", void 0);
    return ConsignmentTrackingEffects;
}());
export { ConsignmentTrackingEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9jb25zaWdubWVudC10cmFja2luZy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUU7SUEyQkUsb0NBQ1UsUUFBaUIsRUFDakIsa0JBQXNDO1FBRmhELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBMUJoRCw2QkFBd0IsR0FFcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsRUFDN0MsR0FBRzs7OztRQUFDLFVBQUMsTUFBMkMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ3BFLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZixPQUFPLEtBQUksQ0FBQyxrQkFBa0I7aUJBQzNCLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztpQkFDbEUsSUFBSSxDQUNILEdBQUc7Ozs7WUFDRCxVQUFDLFFBQTZCO2dCQUM1QixPQUFBLElBQUksV0FBVyxDQUFDLDhCQUE4QixDQUFDLFFBQVEsQ0FBQztZQUF4RCxDQUF3RCxFQUMzRCxFQUNELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsMkJBQTJCLENBQ3pDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkE5QkwsVUFBVTs7OztnQkFSRixPQUFPO2dCQUlQLGtCQUFrQjs7SUFPekI7UUFEQyxNQUFNLEVBQUU7MENBQ2lCLFVBQVU7Z0ZBc0JsQztJQU1KLGlDQUFDO0NBQUEsQUEvQkQsSUErQkM7U0E5QlksMEJBQTBCOzs7SUFDckMsOERBdUJFOzs7OztJQUdBLDhDQUF5Qjs7Ozs7SUFDekIsd0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyT3JkZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uc2lnbm1lbnRUcmFja2luZ0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZENvbnNpZ25tZW50VHJhY2tpbmckOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLkNvbnNpZ25tZW50VHJhY2tpbmdBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9DT05TSUdOTUVOVF9UUkFDS0lORyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRDb25zaWdubWVudFRyYWNraW5nKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlck9yZGVyQ29ubmVjdG9yXG4gICAgICAgIC5nZXRDb25zaWdubWVudFRyYWNraW5nKHBheWxvYWQub3JkZXJDb2RlLCBwYXlsb2FkLmNvbnNpZ25tZW50Q29kZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKHRyYWNraW5nOiBDb25zaWdubWVudFRyYWNraW5nKSA9PlxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZENvbnNpZ25tZW50VHJhY2tpbmdTdWNjZXNzKHRyYWNraW5nKVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkQ29uc2lnbm1lbnRUcmFja2luZ0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJPcmRlckNvbm5lY3RvcjogVXNlck9yZGVyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==