/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, groupBy, map, mergeMap, switchMap, take, } from 'rxjs/operators';
import * as componentActions from '../actions/component.action';
import * as pageActions from '../actions/page.action';
import { RoutingService } from '../../../routing/index';
import { LOGIN, LOGOUT } from '../../../auth/store/actions/login-logout.action';
import { LANGUAGE_CHANGE } from '../../../site-context/store/actions/languages.action';
import { CmsPageConnector } from '../../connectors/page/cms-page.connector';
var PageEffects = /** @class */ (function () {
    function PageEffects(actions$, cmsPageConnector, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsPageConnector = cmsPageConnector;
        this.routingService = routingService;
        this.refreshPage$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), switchMap(function (_) {
            return _this.routingService.getRouterState().pipe(filter(function (routerState) {
                return routerState &&
                    routerState.state &&
                    routerState.state.cmsRequired &&
                    !routerState.nextState;
            }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (context) { return of(new pageActions.LoadPageData(context)); }));
        }));
        this.loadPageData$ = this.actions$.pipe(ofType(pageActions.LOAD_PAGE_DATA), map(function (action) { return action.payload; }), groupBy(function (pageContext) { return pageContext.type + pageContext.id; }), mergeMap(function (group) {
            return group.pipe(switchMap(function (pageContext) {
                return _this.cmsPageConnector.get(pageContext).pipe(mergeMap(function (cmsStructure) {
                    return [
                        new componentActions.GetComponentFromPage(cmsStructure.components),
                        new pageActions.LoadPageDataSuccess(pageContext, cmsStructure.page),
                    ];
                }), catchError(function (error) {
                    return of(new pageActions.LoadPageDataFail(pageContext, error));
                }));
            }));
        }));
    }
    PageEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PageEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsPageConnector },
        { type: RoutingService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], PageEffects.prototype, "refreshPage$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], PageEffects.prototype, "loadPageData$", void 0);
    return PageEffects;
}());
export { PageEffects };
if (false) {
    /** @type {?} */
    PageEffects.prototype.refreshPage$;
    /** @type {?} */
    PageEffects.prototype.loadPageData$;
    /**
     * @type {?}
     * @private
     */
    PageEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    PageEffects.prototype.cmsPageConnector;
    /**
     * @type {?}
     * @private
     */
    PageEffects.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxHQUNMLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLGdCQUFnQixNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxXQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTVFO0lBa0RFLHFCQUNVLFFBQWlCLEVBQ2pCLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUh4QyxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFsRHhDLGlCQUFZLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuRCxNQUFNLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFDdEMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNULE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FDSixVQUFBLFdBQVc7Z0JBQ1QsT0FBQSxXQUFXO29CQUNYLFdBQVcsQ0FBQyxLQUFLO29CQUNqQixXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVc7b0JBQzdCLENBQUMsV0FBVyxDQUFDLFNBQVM7WUFIdEIsQ0FHc0IsQ0FDekIsRUFDRCxHQUFHLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBekIsQ0FBeUIsQ0FBQyxFQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsUUFBUSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLENBQy9EO1FBWEQsQ0FXQyxDQUNGLENBQ0YsQ0FBQztRQUdGLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwRCxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUNsQyxHQUFHLENBQUMsVUFBQyxNQUFnQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDekQsT0FBTyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsRUFBRSxFQUFqQyxDQUFpQyxDQUFDLEVBQ3pELFFBQVEsQ0FBQyxVQUFBLEtBQUs7WUFDWixPQUFBLEtBQUssQ0FBQyxJQUFJLENBQ1IsU0FBUyxDQUFDLFVBQUEsV0FBVztnQkFDbkIsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDaEQsUUFBUSxDQUFDLFVBQUMsWUFBK0I7b0JBQ3ZDLE9BQU87d0JBQ0wsSUFBSSxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FDdkMsWUFBWSxDQUFDLFVBQVUsQ0FDeEI7d0JBQ0QsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQ2pDLFdBQVcsRUFDWCxZQUFZLENBQUMsSUFBSSxDQUNsQjtxQkFDRixDQUFDO2dCQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLENBQUMsQ0FBQyxDQUNILENBQUM7WUFDSixDQUFDLENBQUMsQ0FDSDtRQW5CRCxDQW1CQyxDQUNGLENBQ0YsQ0FBQztJQU1DLENBQUM7O2dCQXRETCxVQUFVOzs7O2dCQXZCRixPQUFPO2dCQXFCUCxnQkFBZ0I7Z0JBSmhCLGNBQWM7O0lBU3JCO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7cURBZ0J0QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNNLFVBQVU7c0RBMEJ2QjtJQU9KLGtCQUFDO0NBQUEsQUF2REQsSUF1REM7U0F0RFksV0FBVzs7O0lBQ3RCLG1DQWlCRTs7SUFFRixvQ0EyQkU7Ozs7O0lBR0EsK0JBQXlCOzs7OztJQUN6Qix1Q0FBMEM7Ozs7O0lBQzFDLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGNvbXBvbmVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uJztcbmltcG9ydCAqIGFzIHBhZ2VBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcGFnZS5hY3Rpb24nO1xuXG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgTE9HSU4sIExPR09VVCB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9sb2dpbi1sb2dvdXQuYWN0aW9uJztcbmltcG9ydCB7IExBTkdVQUdFX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2xhbmd1YWdlcy5hY3Rpb24nO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IENtc1BhZ2VDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2hQYWdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShMQU5HVUFHRV9DSEFOR0UsIExPR09VVCwgTE9HSU4pLFxuICAgIHN3aXRjaE1hcChfID0+XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIHJvdXRlclN0YXRlID0+XG4gICAgICAgICAgICByb3V0ZXJTdGF0ZSAmJlxuICAgICAgICAgICAgcm91dGVyU3RhdGUuc3RhdGUgJiZcbiAgICAgICAgICAgIHJvdXRlclN0YXRlLnN0YXRlLmNtc1JlcXVpcmVkICYmXG4gICAgICAgICAgICAhcm91dGVyU3RhdGUubmV4dFN0YXRlXG4gICAgICAgICksXG4gICAgICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgbWVyZ2VNYXAoY29udGV4dCA9PiBvZihuZXcgcGFnZUFjdGlvbnMuTG9hZFBhZ2VEYXRhKGNvbnRleHQpKSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRQYWdlRGF0YSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUocGFnZUFjdGlvbnMuTE9BRF9QQUdFX0RBVEEpLFxuICAgIG1hcCgoYWN0aW9uOiBwYWdlQWN0aW9ucy5Mb2FkUGFnZURhdGEpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KHBhZ2VDb250ZXh0ID0+IHBhZ2VDb250ZXh0LnR5cGUgKyBwYWdlQ29udGV4dC5pZCksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwYWdlQ29udGV4dCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zUGFnZUNvbm5lY3Rvci5nZXQocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICBtZXJnZU1hcCgoY21zU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBjb21wb25lbnRBY3Rpb25zLkdldENvbXBvbmVudEZyb21QYWdlKFxuICAgICAgICAgICAgICAgICAgY21zU3RydWN0dXJlLmNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG5ldyBwYWdlQWN0aW9ucy5Mb2FkUGFnZURhdGFTdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgICBjbXNTdHJ1Y3R1cmUucGFnZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gb2YobmV3IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YUZhaWwocGFnZUNvbnRleHQsIGVycm9yKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNQYWdlQ29ubmVjdG9yOiBDbXNQYWdlQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==