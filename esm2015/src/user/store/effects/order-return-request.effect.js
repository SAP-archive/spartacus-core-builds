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
export class OrderReturnRequestEffect {
    /**
     * @param {?} actions$
     * @param {?} orderConnector
     */
    constructor(actions$, orderConnector) {
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.createReturnRequest$ = this.actions$.pipe(ofType(UserActions.CREATE_ORDER_RETURN_REQUEST), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.orderConnector
                .return(payload.userId, payload.returnRequestInput)
                .pipe(map((/**
             * @param {?} returnRequest
             * @return {?}
             */
            (returnRequest) => new UserActions.CreateOrderReturnRequestSuccess(returnRequest))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.CreateOrderReturnRequestFail(makeErrorSerializable(error))))));
        })));
        this.loadReturnRequest$ = this.actions$.pipe(ofType(UserActions.LOAD_ORDER_RETURN_REQUEST), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.orderConnector
                .getReturnRequestDetail(payload.userId, payload.returnRequestCode)
                .pipe(map((/**
             * @param {?} returnRequest
             * @return {?}
             */
            (returnRequest) => new UserActions.LoadOrderReturnRequestSuccess(returnRequest))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.LoadOrderReturnRequestFail(makeErrorSerializable(error))))));
        })));
        this.cancelReturnRequest$ = this.actions$.pipe(ofType(UserActions.CANCEL_ORDER_RETURN_REQUEST), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.orderConnector
                .cancelReturnRequest(payload.userId, payload.returnRequestCode, payload.returnRequestModification)
                .pipe(map((/**
             * @param {?} _
             * @return {?}
             */
            _ => new UserActions.CancelOrderReturnRequestSuccess())), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.CancelOrderReturnRequestFail(makeErrorSerializable(error))))));
        })));
        this.loadReturnRequestList$ = this.actions$.pipe(ofType(UserActions.LOAD_ORDER_RETURN_REQUEST_LIST), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.orderConnector
                .getReturnRequestList(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map((/**
             * @param {?} returnRequestList
             * @return {?}
             */
            (returnRequestList) => new UserActions.LoadOrderReturnRequestListSuccess(returnRequestList))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.LoadOrderReturnRequestListFail(makeErrorSerializable(error))))));
        })));
    }
}
OrderReturnRequestEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderReturnRequestEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserOrderConnector }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3QuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9vcmRlci1yZXR1cm4tcmVxdWVzdC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUE2R25DLFlBQ1UsUUFBaUIsRUFDakIsY0FBa0M7UUFEbEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUE3RzVDLHlCQUFvQixHQUVoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQyxFQUMvQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUE0QyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ3JFLFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxjQUFjO2lCQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMs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QyxLQUFLLENBQUMsQ0FDN0IsQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUFqSEwsVUFBVTs7OztZQVJGLE9BQU87WUFLUCxrQkFBa0I7O0FBTXpCO0lBREMsTUFBTSxFQUFFO3NDQUNhLFVBQVU7c0VBc0I5QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNXLFVBQVU7b0VBc0I1QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNhLFVBQVU7c0VBdUI5QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNlLFVBQVU7d0VBNkJoQzs7O0lBMUdGLHdEQXVCRTs7SUFFRixzREF1QkU7O0lBRUYsd0RBd0JFOztJQUVGLDBEQThCRTs7Ozs7SUFHQSw0Q0FBeUI7Ozs7O0lBQ3pCLGtEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0LCBSZXR1cm5SZXF1ZXN0TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyT3JkZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlclJldHVyblJlcXVlc3RFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgY3JlYXRlUmV0dXJuUmVxdWVzdCQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuT3JkZXJSZXR1cm5SZXF1ZXN0QWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkNSRUFURV9PUkRFUl9SRVRVUk5fUkVRVUVTVCksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyQ29ubmVjdG9yXG4gICAgICAgIC5yZXR1cm4ocGF5bG9hZC51c2VySWQsIHBheWxvYWQucmV0dXJuUmVxdWVzdElucHV0KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAocmV0dXJuUmVxdWVzdDogUmV0dXJuUmVxdWVzdCkgPT5cbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdFN1Y2Nlc3MocmV0dXJuUmVxdWVzdClcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuQ3JlYXRlT3JkZXJSZXR1cm5SZXF1ZXN0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZFJldHVyblJlcXVlc3QkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLk9yZGVyUmV0dXJuUmVxdWVzdEFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX09SREVSX1JFVFVSTl9SRVFVRVNUKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZE9yZGVyUmV0dXJuUmVxdWVzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyQ29ubmVjdG9yXG4gICAgICAgIC5nZXRSZXR1cm5SZXF1ZXN0RGV0YWlsKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLnJldHVyblJlcXVlc3RDb2RlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAocmV0dXJuUmVxdWVzdDogUmV0dXJuUmVxdWVzdCkgPT5cbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3RTdWNjZXNzKHJldHVyblJlcXVlc3QpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3RGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjYW5jZWxSZXR1cm5SZXF1ZXN0JDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5PcmRlclJldHVyblJlcXVlc3RBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuQ0FOQ0VMX09SREVSX1JFVFVSTl9SRVFVRVNUKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuQ2FuY2VsT3JkZXJSZXR1cm5SZXF1ZXN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub3JkZXJDb25uZWN0b3JcbiAgICAgICAgLmNhbmNlbFJldHVyblJlcXVlc3QoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5yZXR1cm5SZXF1ZXN0Q29kZSxcbiAgICAgICAgICBwYXlsb2FkLnJldHVyblJlcXVlc3RNb2RpZmljYXRpb25cbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXyA9PiBuZXcgVXNlckFjdGlvbnMuQ2FuY2VsT3JkZXJSZXR1cm5SZXF1ZXN0U3VjY2VzcygpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkNhbmNlbE9yZGVyUmV0dXJuUmVxdWVzdEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRSZXR1cm5SZXF1ZXN0TGlzdCQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuT3JkZXJSZXR1cm5SZXF1ZXN0QWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfT1JERVJfUkVUVVJOX1JFUVVFU1RfTElTVCksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub3JkZXJDb25uZWN0b3JcbiAgICAgICAgLmdldFJldHVyblJlcXVlc3RMaXN0KFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQucGFnZVNpemUsXG4gICAgICAgICAgcGF5bG9hZC5jdXJyZW50UGFnZSxcbiAgICAgICAgICBwYXlsb2FkLnNvcnRcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAocmV0dXJuUmVxdWVzdExpc3Q6IFJldHVyblJlcXVlc3RMaXN0KSA9PlxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3RTdWNjZXNzKFxuICAgICAgICAgICAgICAgIHJldHVyblJlcXVlc3RMaXN0XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3RGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvcmRlckNvbm5lY3RvcjogVXNlck9yZGVyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==