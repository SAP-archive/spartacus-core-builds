import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { normalizeHttpError } from '../../../util/normalize-http-error';
import { UserOrderConnector, UserReplenishmentOrderConnector, } from '../../connectors/index';
import { UserActions } from '../actions/index';
export class UserOrdersEffect {
    constructor(actions$, orderConnector, replenishmentOrderConnector) {
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.replenishmentOrderConnector = replenishmentOrderConnector;
        this.loadUserOrders$ = this.actions$.pipe(ofType(UserActions.LOAD_USER_ORDERS), map((action) => action.payload), switchMap((payload) => {
            return (Boolean(payload.replenishmentOrderCode)
                ? this.replenishmentOrderConnector.loadReplenishmentDetailsHistory(payload.userId, payload.replenishmentOrderCode, payload.pageSize, payload.currentPage, payload.sort)
                : this.orderConnector.getHistory(payload.userId, payload.pageSize, payload.currentPage, payload.sort)).pipe(map((orders) => {
                return new UserActions.LoadUserOrdersSuccess(orders);
            }), catchError((error) => of(new UserActions.LoadUserOrdersFail(normalizeHttpError(error)))));
        }));
        this.resetUserOrders$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE), map(() => {
            return new UserActions.ClearUserOrders();
        }));
    }
}
UserOrdersEffect.decorators = [
    { type: Injectable }
];
UserOrdersEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserOrderConnector },
    { type: UserReplenishmentOrderConnector }
];
__decorate([
    Effect()
], UserOrdersEffect.prototype, "loadUserOrders$", void 0);
__decorate([
    Effect()
], UserOrdersEffect.prototype, "resetUserOrders$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItb3JkZXJzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLCtCQUErQixHQUNoQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQ1UsUUFBaUIsRUFDakIsY0FBa0MsRUFDbEMsMkJBQTREO1FBRjVELGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBaUM7UUFJdEUsb0JBQWUsR0FFWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNwQyxHQUFHLENBQUMsQ0FBQyxNQUFrQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQzNELFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3QyxDQUFDLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLCtCQUErQixDQUM5RCxPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxzQkFBc0IsRUFDOUIsT0FBTyxDQUFDLFFBQVEsRUFDaEIsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLElBQUksQ0FDYjtnQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQzVCLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLFFBQVEsRUFDaEIsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLElBQUksQ0FDYixDQUNKLENBQUMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRTtnQkFDL0IsT0FBTyxJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNuQixFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNsRSxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0YscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsRUFDMUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQTFDQyxDQUFDOzs7WUFOTCxVQUFVOzs7WUFaRixPQUFPO1lBT2Qsa0JBQWtCO1lBQ2xCLCtCQUErQjs7QUFhL0I7SUFEQyxNQUFNLEVBQUU7eURBOEJQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7MERBUVAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG5vcm1hbGl6ZUh0dHBFcnJvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvbm9ybWFsaXplLWh0dHAtZXJyb3InO1xuaW1wb3J0IHtcbiAgVXNlck9yZGVyQ29ubmVjdG9yLFxuICBVc2VyUmVwbGVuaXNobWVudE9yZGVyQ29ubmVjdG9yLFxufSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyT3JkZXJzRWZmZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9yZGVyQ29ubmVjdG9yOiBVc2VyT3JkZXJDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByZXBsZW5pc2htZW50T3JkZXJDb25uZWN0b3I6IFVzZXJSZXBsZW5pc2htZW50T3JkZXJDb25uZWN0b3JcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBsb2FkVXNlck9yZGVycyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlck9yZGVyc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX1VTRVJfT1JERVJTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZFVzZXJPcmRlcnMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgIHJldHVybiAoQm9vbGVhbihwYXlsb2FkLnJlcGxlbmlzaG1lbnRPcmRlckNvZGUpXG4gICAgICAgID8gdGhpcy5yZXBsZW5pc2htZW50T3JkZXJDb25uZWN0b3IubG9hZFJlcGxlbmlzaG1lbnREZXRhaWxzSGlzdG9yeShcbiAgICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgcGF5bG9hZC5yZXBsZW5pc2htZW50T3JkZXJDb2RlLFxuICAgICAgICAgICAgcGF5bG9hZC5wYWdlU2l6ZSxcbiAgICAgICAgICAgIHBheWxvYWQuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBwYXlsb2FkLnNvcnRcbiAgICAgICAgICApXG4gICAgICAgIDogdGhpcy5vcmRlckNvbm5lY3Rvci5nZXRIaXN0b3J5KFxuICAgICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICBwYXlsb2FkLnBhZ2VTaXplLFxuICAgICAgICAgICAgcGF5bG9hZC5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHBheWxvYWQuc29ydFxuICAgICAgICAgIClcbiAgICAgICkucGlwZShcbiAgICAgICAgbWFwKChvcmRlcnM6IE9yZGVySGlzdG9yeUxpc3QpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyT3JkZXJzU3VjY2VzcyhvcmRlcnMpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyT3JkZXJzRmFpbChub3JtYWxpemVIdHRwRXJyb3IoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldFVzZXJPcmRlcnMkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLkNsZWFyVXNlck9yZGVyc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFKSxcbiAgICBtYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5DbGVhclVzZXJPcmRlcnMoKTtcbiAgICB9KVxuICApO1xufVxuIl19