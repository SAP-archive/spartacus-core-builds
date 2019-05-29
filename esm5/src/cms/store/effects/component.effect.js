/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, groupBy, map, mergeMap, switchMap, take, } from 'rxjs/operators';
import { RoutingService } from '../../../routing/index';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import * as componentActions from '../actions/component.action';
var ComponentEffects = /** @class */ (function () {
    function ComponentEffects(actions$, cmsComponentLoader, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.routingService = routingService;
        this.loadComponent$ = this.actions$.pipe(ofType(componentActions.LOAD_COMPONENT), map(function (action) { return action.payload; }), groupBy(function (uid) { return uid; }), mergeMap(function (group) {
            return group.pipe(switchMap(function (uid) {
                return _this.routingService.getRouterState().pipe(filter(function (routerState) { return routerState !== undefined; }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (pageContext) {
                    return _this.cmsComponentLoader.get(uid, pageContext).pipe(map(function (data) { return new componentActions.LoadComponentSuccess(data, uid); }), catchError(function (error) {
                        return of(new componentActions.LoadComponentFail(uid, error));
                    }));
                }));
            }));
        }));
    }
    ComponentEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsComponentConnector },
        { type: RoutingService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ComponentEffects.prototype, "loadComponent$", void 0);
    return ComponentEffects;
}());
export { ComponentEffects };
if (false) {
    /** @type {?} */
    ComponentEffects.prototype.loadComponent$;
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.cmsComponentLoader;
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksR0FDTCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEtBQUssZ0JBQWdCLE1BQU0sNkJBQTZCLENBQUM7QUFFaEU7SUFFRSwwQkFDVSxRQUFpQixFQUNqQixrQkFBeUMsRUFDekMsY0FBOEI7UUFIeEMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFDekMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSXhDLG1CQUFjLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQ3ZDLEdBQUcsQ0FBQyxVQUFDLE1BQXNDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUMvRCxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLEVBQ25CLFFBQVEsQ0FBQyxVQUFBLEtBQUs7WUFDWixPQUFBLEtBQUssQ0FBQyxJQUFJLENBQ1IsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDWCxPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxNQUFNLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLEtBQUssU0FBUyxFQUF6QixDQUF5QixDQUFDLEVBQ2hELEdBQUcsQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUF6QixDQUF5QixDQUFDLEVBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxRQUFRLENBQUMsVUFBQSxXQUFXO29CQUNsQixPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDaEQsR0FBRyxDQUNELFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQXBELENBQW9ELENBQzdELEVBQ0QsVUFBVSxDQUFDLFVBQUEsS0FBSzt3QkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFBdEQsQ0FBc0QsQ0FDdkQsQ0FDRjtnQkFQRCxDQU9DLENBQ0YsQ0FDRixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQ0g7UUFsQkQsQ0FrQkMsQ0FDRixDQUNGLENBQUM7SUE1QkMsQ0FBQzs7Z0JBTkwsVUFBVTs7OztnQkFmRixPQUFPO2dCQVlQLHFCQUFxQjtnQkFEckIsY0FBYzs7SUFhckI7UUFEQyxNQUFNLEVBQUU7MENBQ08sVUFBVTs0REF5QnhCO0lBQ0osdUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQWxDWSxnQkFBZ0I7OztJQU8zQiwwQ0EwQkU7Ozs7O0lBL0JBLG9DQUF5Qjs7Ozs7SUFDekIsOENBQWlEOzs7OztJQUNqRCwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgY29tcG9uZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NvbXBvbmVudC5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRMb2FkZXI6IENtc0NvbXBvbmVudENvbm5lY3RvcixcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRDb21wb25lbnQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGNvbXBvbmVudEFjdGlvbnMuTE9BRF9DT01QT05FTlQpLFxuICAgIG1hcCgoYWN0aW9uOiBjb21wb25lbnRBY3Rpb25zLkxvYWRDb21wb25lbnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KHVpZCA9PiB1aWQpLFxuICAgIG1lcmdlTWFwKGdyb3VwID0+XG4gICAgICBncm91cC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAodWlkID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUgIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgICBtYXAocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUuc3RhdGUuY29udGV4dCksXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgbWVyZ2VNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgICAgICAgdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0KHVpZCwgcGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICAgICAgZGF0YSA9PiBuZXcgY29tcG9uZW50QWN0aW9ucy5Mb2FkQ29tcG9uZW50U3VjY2VzcyhkYXRhLCB1aWQpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgICAgICBvZihuZXcgY29tcG9uZW50QWN0aW9ucy5Mb2FkQ29tcG9uZW50RmFpbCh1aWQsIGVycm9yKSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==