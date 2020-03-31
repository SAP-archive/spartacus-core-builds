import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
var UpdateEmailEffects = /** @class */ (function () {
    function UpdateEmailEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updateEmail$ = this.actions$.pipe(ofType(UserActions.UPDATE_EMAIL), map(function (action) { return action.payload; }), concatMap(function (payload) {
            return _this.userAccountConnector
                .updateEmail(payload.uid, payload.password, payload.newUid)
                .pipe(map(function () { return new UserActions.UpdateEmailSuccessAction(payload.newUid); }), catchError(function (error) {
                return of(new UserActions.UpdateEmailErrorAction(makeErrorSerializable(error)));
            }));
        }));
    }
    UpdateEmailEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConnector }
    ]; };
    __decorate([
        Effect()
    ], UpdateEmailEffects.prototype, "updateEmail$", void 0);
    UpdateEmailEffects = __decorate([
        Injectable()
    ], UpdateEmailEffects);
    return UpdateEmailEffects;
}());
export { UpdateEmailEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLWVtYWlsLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DO0lBQ0UsNEJBQ1UsUUFBaUIsRUFDakIsb0JBQW1DO1FBRjdDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUFJN0MsaUJBQVksR0FFUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFDaEMsR0FBRyxDQUFDLFVBQUMsTUFBcUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzlELFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDaEIsT0FBQSxLQUFJLENBQUMsb0JBQW9CO2lCQUN0QixXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQzFELElBQUksQ0FDSCxHQUFHLENBQUMsY0FBTSxPQUFBLElBQUksV0FBVyxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBeEQsQ0FBd0QsQ0FBQyxFQUNuRSxVQUFVLENBQUMsVUFBQyxLQUFLO2dCQUNmLE9BQUEsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUNwQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsQ0FDRixDQUNGO1FBWEgsQ0FXRyxDQUNKLENBQ0YsQ0FBQztJQXRCQyxDQUFDOztnQkFGZ0IsT0FBTztnQkFDSyxhQUFhOztJQUk3QztRQURDLE1BQU0sRUFBRTs0REFvQlA7SUExQlMsa0JBQWtCO1FBRDlCLFVBQVUsRUFBRTtPQUNBLGtCQUFrQixDQTJCOUI7SUFBRCx5QkFBQztDQUFBLEFBM0JELElBMkJDO1NBM0JZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXBkYXRlRW1haWxFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBY2NvdW50Q29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cblxuICBARWZmZWN0KClcbiAgdXBkYXRlRW1haWwkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVwZGF0ZUVtYWlsU3VjY2Vzc0FjdGlvbiB8IFVzZXJBY3Rpb25zLlVwZGF0ZUVtYWlsRXJyb3JBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuVVBEQVRFX0VNQUlMKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuVXBkYXRlRW1haWxBY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBjb25jYXRNYXAoKHBheWxvYWQpID0+XG4gICAgICB0aGlzLnVzZXJBY2NvdW50Q29ubmVjdG9yXG4gICAgICAgIC51cGRhdGVFbWFpbChwYXlsb2FkLnVpZCwgcGF5bG9hZC5wYXNzd29yZCwgcGF5bG9hZC5uZXdVaWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiBuZXcgVXNlckFjdGlvbnMuVXBkYXRlRW1haWxTdWNjZXNzQWN0aW9uKHBheWxvYWQubmV3VWlkKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZUVtYWlsRXJyb3JBY3Rpb24oXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xufVxuIl19