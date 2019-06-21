/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, groupBy, map, mergeMap, switchMap, take, } from 'rxjs/operators';
import { RoutingService } from '../../../routing/index';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import * as componentActions from '../actions/component.action';
export class ComponentEffects {
    /**
     * @param {?} actions$
     * @param {?} cmsComponentLoader
     * @param {?} routingService
     */
    constructor(actions$, cmsComponentLoader, routingService) {
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.routingService = routingService;
        this.loadComponent$ = this.actions$.pipe(ofType(componentActions.LOAD_COMPONENT), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), groupBy((/**
         * @param {?} uid
         * @return {?}
         */
        uid => uid)), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        group => group.pipe(switchMap((/**
         * @param {?} uid
         * @return {?}
         */
        uid => {
            return this.routingService.getRouterState().pipe(filter((/**
             * @param {?} routerState
             * @return {?}
             */
            routerState => routerState !== undefined)), map((/**
             * @param {?} routerState
             * @return {?}
             */
            routerState => routerState.state.context)), take(1), mergeMap((/**
             * @param {?} pageContext
             * @return {?}
             */
            pageContext => this.cmsComponentLoader.get(uid, pageContext).pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => new componentActions.LoadComponentSuccess(data, uid))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new componentActions.LoadComponentFail(uid, error))))))));
        }))))));
    }
}
ComponentEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector },
    { type: RoutingService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ComponentEffects.prototype, "loadComponent$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksR0FDTCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEtBQUssZ0JBQWdCLE1BQU0sNkJBQTZCLENBQUM7QUFHaEUsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBQzNCLFlBQ1UsUUFBaUIsRUFDakIsa0JBQXlDLEVBQ3pDLGNBQThCO1FBRjlCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF1QjtRQUN6QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFJeEMsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsRUFDdkMsR0FBRzs7OztRQUFDLENBQUMsTUFBc0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUMvRCxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFDbkIsUUFBUTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2YsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxNQUFNOzs7O1lBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFDLEVBQ2hELEdBQUc7Ozs7WUFBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLEVBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxRQUFROzs7O1lBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRCxHQUFHOzs7O1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFDN0QsRUFDRCxVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQ3ZELENBQ0YsRUFDRixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxFQUNGLENBQ0YsQ0FBQztJQTVCQyxDQUFDOzs7WUFOTCxVQUFVOzs7O1lBZkYsT0FBTztZQVlQLHFCQUFxQjtZQURyQixjQUFjOztBQWFyQjtJQURDLE1BQU0sRUFBRTtzQ0FDTyxVQUFVO3dEQXlCeEI7OztJQTFCRiwwQ0EwQkU7Ozs7O0lBL0JBLG9DQUF5Qjs7Ozs7SUFDekIsOENBQWlEOzs7OztJQUNqRCwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgY29tcG9uZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NvbXBvbmVudC5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRMb2FkZXI6IENtc0NvbXBvbmVudENvbm5lY3RvcixcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRDb21wb25lbnQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGNvbXBvbmVudEFjdGlvbnMuTE9BRF9DT01QT05FTlQpLFxuICAgIG1hcCgoYWN0aW9uOiBjb21wb25lbnRBY3Rpb25zLkxvYWRDb21wb25lbnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KHVpZCA9PiB1aWQpLFxuICAgIG1lcmdlTWFwKGdyb3VwID0+XG4gICAgICBncm91cC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAodWlkID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUgIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgICBtYXAocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUuc3RhdGUuY29udGV4dCksXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgbWVyZ2VNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgICAgICAgdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0KHVpZCwgcGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICAgICAgZGF0YSA9PiBuZXcgY29tcG9uZW50QWN0aW9ucy5Mb2FkQ29tcG9uZW50U3VjY2VzcyhkYXRhLCB1aWQpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgICAgICBvZihuZXcgY29tcG9uZW50QWN0aW9ucy5Mb2FkQ29tcG9uZW50RmFpbCh1aWQsIGVycm9yKSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==