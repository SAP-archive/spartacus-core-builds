/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserActions } from '../actions/index';
import { UserInterestsConnector } from '../../connectors/interests/user-interests.connector';
import { makeErrorSerializable } from '../../../util/serialization-utils';
var ProductInterestsEffect = /** @class */ (function () {
    function ProductInterestsEffect(actions$, userInterestsConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userInterestsConnector = userInterestsConnector;
        this.loadProductInteres$ = this.actions$.pipe(ofType(UserActions.LOAD_PRODUCT_INTERESTS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userInterestsConnector
                .getInterests(payload.userId, payload.pageSize, payload.currentPage, payload.sort, payload.productCode, payload.notificationType)
                .pipe(map((/**
             * @param {?} interests
             * @return {?}
             */
            function (interests) {
                return new UserActions.LoadProductInterestsSuccess(interests);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.LoadProductInterestsFail(makeErrorSerializable(error)));
            })));
        })));
        this.removeProductInterest$ = this.actions$.pipe(ofType(UserActions.REMOVE_PRODUCT_INTEREST), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userInterestsConnector
                .removeInterest(payload.userId, payload.item)
                .pipe(switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return [
                new UserActions.LoadProductInterests(payload.singleDelete
                    ? {
                        userId: payload.userId,
                        productCode: payload.item.product.code,
                        notificationType: payload.item.productInterestEntry[0].interestType,
                    }
                    : { userId: payload.userId }),
                new UserActions.RemoveProductInterestSuccess(data),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.RemoveProductInterestFail(makeErrorSerializable(error)));
            })));
        })));
        this.addProductInterest$ = this.actions$.pipe(ofType(UserActions.ADD_PRODUCT_INTEREST), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userInterestsConnector
                .addInterest(payload.userId, payload.productCode, payload.notificationType)
                .pipe(switchMap((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return [
                new UserActions.LoadProductInterests({
                    userId: payload.userId,
                    productCode: payload.productCode,
                    notificationType: payload.notificationType,
                }),
                new UserActions.AddProductInterestSuccess(res),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.AddProductInterestFail(makeErrorSerializable(error)));
            })));
        })));
    }
    ProductInterestsEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductInterestsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserInterestsConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductInterestsEffect.prototype, "loadProductInteres$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductInterestsEffect.prototype, "removeProductInterest$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductInterestsEffect.prototype, "addProductInterest$", void 0);
    return ProductInterestsEffect;
}());
export { ProductInterestsEffect };
if (false) {
    /** @type {?} */
    ProductInterestsEffect.prototype.loadProductInteres$;
    /** @type {?} */
    ProductInterestsEffect.prototype.removeProductInterest$;
    /** @type {?} */
    ProductInterestsEffect.prototype.addProductInterest$;
    /**
     * @type {?}
     * @private
     */
    ProductInterestsEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProductInterestsEffect.prototype.userInterestsConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRlcmVzdHMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LWludGVyZXN0cy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUU7SUFFRSxnQ0FDVSxRQUFpQixFQUNqQixzQkFBOEM7UUFGeEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFJeEQsd0JBQW1CLEdBRWYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsRUFDMUMsR0FBRzs7OztRQUFDLFVBQUMsTUFBd0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ2pFLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZixPQUFPLEtBQUksQ0FBQyxzQkFBc0I7aUJBQy9CLFlBQVksQ0FDWCxPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxRQUFRLEVBQ2hCLE9B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LHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0Y7UUF0QkgsQ0FzQkcsRUFDSixDQUNGLENBQUM7SUE5RkMsQ0FBQzs7Z0JBTEwsVUFBVTs7OztnQkFUTSxPQUFPO2dCQU1mLHNCQUFzQjs7SUFXN0I7UUFEQyxNQUFNLEVBQUU7MENBQ1ksVUFBVTt1RUE0QjdCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ2UsVUFBVTswRUE2QmhDO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ1ksVUFBVTt1RUE0QjdCO0lBQ0osNkJBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQW5HWSxzQkFBc0I7OztJQU1qQyxxREE2QkU7O0lBRUYsd0RBOEJFOztJQUVGLHFEQTZCRTs7Ozs7SUFoR0EsMENBQXlCOzs7OztJQUN6Qix3REFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VySW50ZXJlc3RzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9pbnRlcmVzdHMvdXNlci1pbnRlcmVzdHMuY29ubmVjdG9yJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW50ZXJlc3RzRWZmZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJJbnRlcmVzdHNDb25uZWN0b3I6IFVzZXJJbnRlcmVzdHNDb25uZWN0b3JcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBsb2FkUHJvZHVjdEludGVyZXMkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlByb2R1Y3RJbnRlcmVzdHNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9QUk9EVUNUX0lOVEVSRVNUUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRQcm9kdWN0SW50ZXJlc3RzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckludGVyZXN0c0Nvbm5lY3RvclxuICAgICAgICAuZ2V0SW50ZXJlc3RzKFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQucGFnZVNpemUsXG4gICAgICAgICAgcGF5bG9hZC5jdXJyZW50UGFnZSxcbiAgICAgICAgICBwYXlsb2FkLnNvcnQsXG4gICAgICAgICAgcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICBwYXlsb2FkLm5vdGlmaWNhdGlvblR5cGVcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGludGVyZXN0czogUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkxvYWRQcm9kdWN0SW50ZXJlc3RzU3VjY2VzcyhpbnRlcmVzdHMpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFByb2R1Y3RJbnRlcmVzdHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVQcm9kdWN0SW50ZXJlc3QkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuUmVtb3ZlUHJvZHVjdEludGVyZXN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMudXNlckludGVyZXN0c0Nvbm5lY3RvclxuICAgICAgICAucmVtb3ZlSW50ZXJlc3QocGF5bG9hZC51c2VySWQsIHBheWxvYWQuaXRlbSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGRhdGEgPT4gW1xuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRQcm9kdWN0SW50ZXJlc3RzKFxuICAgICAgICAgICAgICBwYXlsb2FkLnNpbmdsZURlbGV0ZVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogcGF5bG9hZC5pdGVtLnByb2R1Y3QuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVHlwZTpcbiAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLml0ZW0ucHJvZHVjdEludGVyZXN0RW50cnlbMF0uaW50ZXJlc3RUeXBlLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogeyB1c2VySWQ6IHBheWxvYWQudXNlcklkIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuUmVtb3ZlUHJvZHVjdEludGVyZXN0U3VjY2VzcyhkYXRhKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlJlbW92ZVByb2R1Y3RJbnRlcmVzdEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRQcm9kdWN0SW50ZXJlc3QkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkFERF9QUk9EVUNUX0lOVEVSRVNUKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuQWRkUHJvZHVjdEludGVyZXN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMudXNlckludGVyZXN0c0Nvbm5lY3RvclxuICAgICAgICAuYWRkSW50ZXJlc3QoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICBwYXlsb2FkLm5vdGlmaWNhdGlvblR5cGVcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKHJlczogYW55KSA9PiBbXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFByb2R1Y3RJbnRlcmVzdHMoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVHlwZTogcGF5bG9hZC5ub3RpZmljYXRpb25UeXBlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuQWRkUHJvZHVjdEludGVyZXN0U3VjY2VzcyhyZXMpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuQWRkUHJvZHVjdEludGVyZXN0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=