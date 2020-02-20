import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserActions } from '../actions/index';
import { UserInterestsConnector } from '../../connectors/interests/user-interests.connector';
import { makeErrorSerializable } from '../../../util/serialization-utils';
var ProductInterestsEffect = /** @class */ (function () {
    function ProductInterestsEffect(actions$, userInterestsConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userInterestsConnector = userInterestsConnector;
        this.loadProductInteres$ = this.actions$.pipe(ofType(UserActions.LOAD_PRODUCT_INTERESTS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.userInterestsConnector
                .getInterests(payload.userId, payload.pageSize, payload.currentPage, payload.sort, payload.productCode, payload.notificationType)
                .pipe(map(function (interests) {
                return new UserActions.LoadProductInterestsSuccess(interests);
            }), catchError(function (error) {
                return of(new UserActions.LoadProductInterestsFail(makeErrorSerializable(error)));
            }));
        }));
        this.removeProductInterest$ = this.actions$.pipe(ofType(UserActions.REMOVE_PRODUCT_INTEREST), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.userInterestsConnector
                .removeInterest(payload.userId, payload.item)
                .pipe(switchMap(function (data) { return [
                new UserActions.LoadProductInterests(payload.singleDelete
                    ? {
                        userId: payload.userId,
                        productCode: payload.item.product.code,
                        notificationType: payload.item.productInterestEntry[0].interestType,
                    }
                    : { userId: payload.userId }),
                new UserActions.RemoveProductInterestSuccess(data),
            ]; }), catchError(function (error) {
                return of(new UserActions.RemoveProductInterestFail(makeErrorSerializable(error)));
            }));
        }));
        this.addProductInterest$ = this.actions$.pipe(ofType(UserActions.ADD_PRODUCT_INTEREST), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.userInterestsConnector
                .addInterest(payload.userId, payload.productCode, payload.notificationType)
                .pipe(switchMap(function (res) { return [
                new UserActions.LoadProductInterests({
                    userId: payload.userId,
                    productCode: payload.productCode,
                    notificationType: payload.notificationType,
                }),
                new UserActions.AddProductInterestSuccess(res),
            ]; }), catchError(function (error) {
                return of(new UserActions.AddProductInterestFail(makeErrorSerializable(error)));
            }));
        }));
    }
    ProductInterestsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserInterestsConnector }
    ]; };
    __decorate([
        Effect()
    ], ProductInterestsEffect.prototype, "loadProductInteres$", void 0);
    __decorate([
        Effect()
    ], ProductInterestsEffect.prototype, "removeProductInterest$", void 0);
    __decorate([
        Effect()
    ], ProductInterestsEffect.prototype, "addProductInterest$", void 0);
    ProductInterestsEffect = __decorate([
        Injectable()
    ], ProductInterestsEffect);
    return ProductInterestsEffect;
}());
export { ProductInterestsEffect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRlcmVzdHMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LWludGVyZXN0cy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRzFFO0lBQ0UsZ0NBQ1UsUUFBaUIsRUFDakIsc0JBQThDO1FBRnhELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBSXhELHdCQUFtQixHQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLEVBQzFDLEdBQUcsQ0FBQyxVQUFDLE1BQXdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUNqRSxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBTyxLQUFJLENBQUMsc0JBQXNCO2lCQUMvQixZQUFZLENBQ1gsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsUUFBUSxFQUNoQixPQUFPLENBQUMsV0FBVyxFQUNuQixP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QUNGO1FBdEJILENBc0JHLENBQ0osQ0FDRixDQUFDO0lBOUZDLENBQUM7O2dCQUZnQixPQUFPO2dCQUNPLHNCQUFzQjs7SUFJeEQ7UUFEQyxNQUFNLEVBQUU7dUVBNkJQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MEVBOEJQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7dUVBNkJQO0lBbEdTLHNCQUFzQjtRQURsQyxVQUFVLEVBQUU7T0FDQSxzQkFBc0IsQ0FtR2xDO0lBQUQsNkJBQUM7Q0FBQSxBQW5HRCxJQW1HQztTQW5HWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VySW50ZXJlc3RzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9pbnRlcmVzdHMvdXNlci1pbnRlcmVzdHMuY29ubmVjdG9yJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW50ZXJlc3RzRWZmZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJJbnRlcmVzdHNDb25uZWN0b3I6IFVzZXJJbnRlcmVzdHNDb25uZWN0b3JcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBsb2FkUHJvZHVjdEludGVyZXMkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlByb2R1Y3RJbnRlcmVzdHNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9QUk9EVUNUX0lOVEVSRVNUUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRQcm9kdWN0SW50ZXJlc3RzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckludGVyZXN0c0Nvbm5lY3RvclxuICAgICAgICAuZ2V0SW50ZXJlc3RzKFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQucGFnZVNpemUsXG4gICAgICAgICAgcGF5bG9hZC5jdXJyZW50UGFnZSxcbiAgICAgICAgICBwYXlsb2FkLnNvcnQsXG4gICAgICAgICAgcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICBwYXlsb2FkLm5vdGlmaWNhdGlvblR5cGVcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGludGVyZXN0czogUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkxvYWRQcm9kdWN0SW50ZXJlc3RzU3VjY2VzcyhpbnRlcmVzdHMpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFByb2R1Y3RJbnRlcmVzdHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVQcm9kdWN0SW50ZXJlc3QkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuUmVtb3ZlUHJvZHVjdEludGVyZXN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMudXNlckludGVyZXN0c0Nvbm5lY3RvclxuICAgICAgICAucmVtb3ZlSW50ZXJlc3QocGF5bG9hZC51c2VySWQsIHBheWxvYWQuaXRlbSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGRhdGEgPT4gW1xuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRQcm9kdWN0SW50ZXJlc3RzKFxuICAgICAgICAgICAgICBwYXlsb2FkLnNpbmdsZURlbGV0ZVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogcGF5bG9hZC5pdGVtLnByb2R1Y3QuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVHlwZTpcbiAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLml0ZW0ucHJvZHVjdEludGVyZXN0RW50cnlbMF0uaW50ZXJlc3RUeXBlLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogeyB1c2VySWQ6IHBheWxvYWQudXNlcklkIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuUmVtb3ZlUHJvZHVjdEludGVyZXN0U3VjY2VzcyhkYXRhKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlJlbW92ZVByb2R1Y3RJbnRlcmVzdEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRQcm9kdWN0SW50ZXJlc3QkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkFERF9QUk9EVUNUX0lOVEVSRVNUKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuQWRkUHJvZHVjdEludGVyZXN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMudXNlckludGVyZXN0c0Nvbm5lY3RvclxuICAgICAgICAuYWRkSW50ZXJlc3QoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICBwYXlsb2FkLm5vdGlmaWNhdGlvblR5cGVcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKHJlczogYW55KSA9PiBbXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFByb2R1Y3RJbnRlcmVzdHMoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVHlwZTogcGF5bG9hZC5ub3RpZmljYXRpb25UeXBlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuQWRkUHJvZHVjdEludGVyZXN0U3VjY2VzcyhyZXMpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuQWRkUHJvZHVjdEludGVyZXN0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=