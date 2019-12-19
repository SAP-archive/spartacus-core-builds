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
var OrderReturnRequestEffect = /** @class */ (function () {
    function OrderReturnRequestEffect(actions$, orderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.createReturnRequest$ = this.actions$.pipe(ofType(UserActions.CREATE_ORDER_RETURN_REQUEST), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.orderConnector
                .return(payload.userId, payload.returnRequestInput)
                .pipe(map((/**
             * @param {?} returnRequest
             * @return {?}
             */
            function (returnRequest) {
                return new UserActions.CreateOrderReturnRequestSuccess(returnRequest);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.CreateOrderReturnRequestFail(makeErrorSerializable(error)));
            })));
        })));
        this.loadReturnRequest$ = this.actions$.pipe(ofType(UserActions.LOAD_ORDER_RETURN_REQUEST), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.orderConnector
                .getReturnRequestDetail(payload.userId, payload.returnRequestCode)
                .pipe(map((/**
             * @param {?} returnRequest
             * @return {?}
             */
            function (returnRequest) {
                return new UserActions.LoadOrderReturnRequestSuccess(returnRequest);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.LoadOrderReturnRequestFail(makeErrorSerializable(error)));
            })));
        })));
        this.cancelReturnRequest$ = this.actions$.pipe(ofType(UserActions.CANCEL_ORDER_RETURN_REQUEST), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.orderConnector
                .cancelReturnRequest(payload.userId, payload.returnRequestCode, payload.returnRequestModification)
                .pipe(map((/**
             * @param {?} _
             * @return {?}
             */
            function (_) { return new UserActions.CancelOrderReturnRequestSuccess(); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.CancelOrderReturnRequestFail(makeErrorSerializable(error)));
            })));
        })));
        this.loadReturnRequestList$ = this.actions$.pipe(ofType(UserActions.LOAD_ORDER_RETURN_REQUEST_LIST), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.orderConnector
                .getReturnRequestList(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map((/**
             * @param {?} returnRequestList
             * @return {?}
             */
            function (returnRequestList) {
                return new UserActions.LoadOrderReturnRequestListSuccess(returnRequestList);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.LoadOrderReturnRequestListFail(makeErrorSerializable(error)));
            })));
        })));
    }
    OrderReturnRequestEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderReturnRequestEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserOrderConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], OrderReturnRequestEffect.prototype, "createReturnRequest$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], OrderReturnRequestEffect.prototype, "loadReturnRequest$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], OrderReturnRequestEffect.prototype, "cancelReturnRequest$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], OrderReturnRequestEffect.prototype, "loadReturnRequestList$", void 0);
    return OrderReturnRequestEffect;
}());
export { OrderReturnRequestEffect };
if (false) {
    /** @type {?} */
    OrderReturnRequestEffect.prototype.createReturnRequest$;
    /** @type {?} */
    OrderReturnRequestEffect.prototype.loadReturnRequest$;
    /** @type {?} */
    OrderReturnRequestEffect.prototype.cancelReturnRequest$;
    /** @type {?} */
    OrderReturnRequestEffect.prototype.loadReturnRequestList$;
    /**
     * @type {?}
     * @private
     */
    OrderReturnRequestEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    OrderReturnRequestEffect.prototype.orderConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3QuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9vcmRlci1yZXR1cm4tcmVxdWVzdC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0M7SUE4R0Usa0NBQ1UsUUFBaUIsRUFDakIsY0FBa0M7UUFGNUMsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQTdHNUMseUJBQW9CLEdBRWhCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLEVBQy9DLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQTRDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNyRSxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBTyxLQUFJLENBQUMsY0FBYztpQkFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFD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QSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsOEJBQThCLENBQzVDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFqSEwsVUFBVTs7OztnQkFSRixPQUFPO2dCQUtQLGtCQUFrQjs7SUFNekI7UUFEQyxNQUFNLEVBQUU7MENBQ2EsVUFBVTswRUFzQjlCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ1csVUFBVTt3RUFzQjVCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ2EsVUFBVTswRUF1QjlCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ2UsVUFBVTs0RUE2QmhDO0lBTUosK0JBQUM7Q0FBQSxBQWxIRCxJQWtIQztTQWpIWSx3QkFBd0I7OztJQUNuQyx3REF1QkU7O0lBRUYsc0RBdUJFOztJQUVGLHdEQXdCRTs7SUFFRiwwREE4QkU7Ozs7O0lBR0EsNENBQXlCOzs7OztJQUN6QixrREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdCwgUmV0dXJuUmVxdWVzdExpc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlck9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJSZXR1cm5SZXF1ZXN0RWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZVJldHVyblJlcXVlc3QkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLk9yZGVyUmV0dXJuUmVxdWVzdEFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5DUkVBVEVfT1JERVJfUkVUVVJOX1JFUVVFU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5DcmVhdGVPcmRlclJldHVyblJlcXVlc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vcmRlckNvbm5lY3RvclxuICAgICAgICAucmV0dXJuKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLnJldHVyblJlcXVlc3RJbnB1dClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKHJldHVyblJlcXVlc3Q6IFJldHVyblJlcXVlc3QpID0+XG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5DcmVhdGVPcmRlclJldHVyblJlcXVlc3RTdWNjZXNzKHJldHVyblJlcXVlc3QpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRSZXR1cm5SZXF1ZXN0JDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5PcmRlclJldHVyblJlcXVlc3RBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9PUkRFUl9SRVRVUk5fUkVRVUVTVCksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vcmRlckNvbm5lY3RvclxuICAgICAgICAuZ2V0UmV0dXJuUmVxdWVzdERldGFpbChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5yZXR1cm5SZXF1ZXN0Q29kZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKHJldHVyblJlcXVlc3Q6IFJldHVyblJlcXVlc3QpID0+XG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJSZXR1cm5SZXF1ZXN0U3VjY2VzcyhyZXR1cm5SZXF1ZXN0KVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJSZXR1cm5SZXF1ZXN0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY2FuY2VsUmV0dXJuUmVxdWVzdCQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuT3JkZXJSZXR1cm5SZXF1ZXN0QWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkNBTkNFTF9PUkRFUl9SRVRVUk5fUkVRVUVTVCksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkNhbmNlbE9yZGVyUmV0dXJuUmVxdWVzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyQ29ubmVjdG9yXG4gICAgICAgIC5jYW5jZWxSZXR1cm5SZXF1ZXN0KFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQucmV0dXJuUmVxdWVzdENvZGUsXG4gICAgICAgICAgcGF5bG9hZC5yZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKF8gPT4gbmV3IFVzZXJBY3Rpb25zLkNhbmNlbE9yZGVyUmV0dXJuUmVxdWVzdFN1Y2Nlc3MoKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5DYW5jZWxPcmRlclJldHVyblJlcXVlc3RGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkUmV0dXJuUmVxdWVzdExpc3QkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLk9yZGVyUmV0dXJuUmVxdWVzdEFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX09SREVSX1JFVFVSTl9SRVFVRVNUX0xJU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyQ29ubmVjdG9yXG4gICAgICAgIC5nZXRSZXR1cm5SZXF1ZXN0TGlzdChcbiAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBwYXlsb2FkLnBhZ2VTaXplLFxuICAgICAgICAgIHBheWxvYWQuY3VycmVudFBhZ2UsXG4gICAgICAgICAgcGF5bG9hZC5zb3J0XG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKHJldHVyblJlcXVlc3RMaXN0OiBSZXR1cm5SZXF1ZXN0TGlzdCkgPT5cbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0U3VjY2VzcyhcbiAgICAgICAgICAgICAgICByZXR1cm5SZXF1ZXN0TGlzdFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb3JkZXJDb25uZWN0b3I6IFVzZXJPcmRlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=