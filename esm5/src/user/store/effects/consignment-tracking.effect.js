import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
var ConsignmentTrackingEffects = /** @class */ (function () {
    function ConsignmentTrackingEffects(actions$, userOrderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userOrderConnector = userOrderConnector;
        this.loadConsignmentTracking$ = this.actions$.pipe(ofType(UserActions.LOAD_CONSIGNMENT_TRACKING), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.userOrderConnector
                .getConsignmentTracking(payload.orderCode, payload.consignmentCode, payload.userId)
                .pipe(map(function (tracking) {
                return new UserActions.LoadConsignmentTrackingSuccess(tracking);
            }), catchError(function (error) {
                return of(new UserActions.LoadConsignmentTrackingFail(makeErrorSerializable(error)));
            }));
        }));
    }
    ConsignmentTrackingEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserOrderConnector }
    ]; };
    __decorate([
        Effect()
    ], ConsignmentTrackingEffects.prototype, "loadConsignmentTracking$", void 0);
    ConsignmentTrackingEffects = __decorate([
        Injectable()
    ], ConsignmentTrackingEffects);
    return ConsignmentTrackingEffects;
}());
export { ConsignmentTrackingEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9jb25zaWdubWVudC10cmFja2luZy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DO0lBOEJFLG9DQUNVLFFBQWlCLEVBQ2pCLGtCQUFzQztRQUZoRCxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQTlCaEQsNkJBQXdCLEdBRXBCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLEVBQzdDLEdBQUcsQ0FBQyxVQUFDLE1BQTJDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUNwRSxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBTyxLQUFJLENBQUMsa0JBQWtCO2lCQUMzQixzQkFBc0IsQ0FDckIsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLGVBQWUsRUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FDZjtpQkFDQSxJQUFJLENBQ0gsR0FBRyxDQUNELFVBQUMsUUFBNkI7Z0JBQzVCLE9BQUEsSUFBSSxXQUFXLENBQUMsOEJBQThCLENBQUMsUUFBUSxDQUFDO1lBQXhELENBQXdELENBQzNELEVBQ0QsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQywyQkFBMkIsQ0FDekMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7WUFKRCxDQUlDLENBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQUZnQixPQUFPO2dCQUNHLGtCQUFrQjs7SUE5QmhEO1FBREMsTUFBTSxFQUFFO2dGQTJCUDtJQTVCUywwQkFBMEI7UUFEdEMsVUFBVSxFQUFFO09BQ0EsMEJBQTBCLENBa0N0QztJQUFELGlDQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FsQ1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlck9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uc2lnbm1lbnRUcmFja2luZ0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZENvbnNpZ25tZW50VHJhY2tpbmckOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLkNvbnNpZ25tZW50VHJhY2tpbmdBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9DT05TSUdOTUVOVF9UUkFDS0lORyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRDb25zaWdubWVudFRyYWNraW5nKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlck9yZGVyQ29ubmVjdG9yXG4gICAgICAgIC5nZXRDb25zaWdubWVudFRyYWNraW5nKFxuICAgICAgICAgIHBheWxvYWQub3JkZXJDb2RlLFxuICAgICAgICAgIHBheWxvYWQuY29uc2lnbm1lbnRDb2RlLFxuICAgICAgICAgIHBheWxvYWQudXNlcklkXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKHRyYWNraW5nOiBDb25zaWdubWVudFRyYWNraW5nKSA9PlxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZENvbnNpZ25tZW50VHJhY2tpbmdTdWNjZXNzKHRyYWNraW5nKVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkQ29uc2lnbm1lbnRUcmFja2luZ0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJPcmRlckNvbm5lY3RvcjogVXNlck9yZGVyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==