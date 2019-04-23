/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, take, } from 'rxjs/operators';
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
                return routerState && routerState.state && routerState.state.cmsRequired;
            }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (context) { return of(new pageActions.LoadPageData(context)); }));
        }));
        this.loadPageData$ = this.actions$.pipe(ofType(pageActions.LOAD_PAGE_DATA), map(function (action) { return action.payload; }), switchMap(function (pageContext) {
            return _this.cmsPageConnector.get(pageContext).pipe(mergeMap(function (cmsStructure) {
                return [
                    new pageActions.LoadPageDataSuccess(pageContext, cmsStructure.page),
                    new componentActions.GetComponentFromPage(cmsStructure.components),
                ];
            }), catchError(function (error) {
                return of(new pageActions.LoadPageDataFail(pageContext, error));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixHQUFHLEVBQ0gsUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLEdBQ0wsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssZ0JBQWdCLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxLQUFLLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFdkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFNUU7SUFxQ0UscUJBQ1UsUUFBaUIsRUFDakIsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBSHhDLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXJDeEMsaUJBQVksR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ25ELE1BQU0sQ0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUN0QyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ1QsT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDdkMsTUFBTSxDQUNKLFVBQUEsV0FBVztnQkFDVCxPQUFBLFdBQVcsSUFBSSxXQUFXLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUFqRSxDQUFpRSxDQUNwRSxFQUNELEdBQUcsQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUF6QixDQUF5QixDQUFDLEVBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxRQUFRLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FDL0Q7UUFSRCxDQVFDLENBQ0YsQ0FDRixDQUFDO1FBR0Ysa0JBQWEsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BELE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxVQUFDLE1BQWdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN6RCxTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ25CLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2hELFFBQVEsQ0FBQyxVQUFDLFlBQStCO2dCQUN2QyxPQUFPO29CQUNMLElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUNuRSxJQUFJLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7aUJBQ25FLENBQUM7WUFDSixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7Z0JBekNMLFVBQVU7Ozs7Z0JBdEJGLE9BQU87Z0JBb0JQLGdCQUFnQjtnQkFKaEIsY0FBYzs7SUFTckI7UUFEQyxNQUFNLEVBQUU7MENBQ0ssVUFBVTtxREFhdEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDTSxVQUFVO3NEQWdCdkI7SUFPSixrQkFBQztDQUFBLEFBMUNELElBMENDO1NBekNZLFdBQVc7OztJQUN0QixtQ0FjRTs7SUFFRixvQ0FpQkU7Ozs7O0lBR0EsK0JBQXlCOzs7OztJQUN6Qix1Q0FBMEM7Ozs7O0lBQzFDLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGNvbXBvbmVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uJztcbmltcG9ydCAqIGFzIHBhZ2VBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcGFnZS5hY3Rpb24nO1xuXG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgTE9HSU4sIExPR09VVCB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9sb2dpbi1sb2dvdXQuYWN0aW9uJztcbmltcG9ydCB7IExBTkdVQUdFX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2xhbmd1YWdlcy5hY3Rpb24nO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IENtc1BhZ2VDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2hQYWdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShMQU5HVUFHRV9DSEFOR0UsIExPR09VVCwgTE9HSU4pLFxuICAgIHN3aXRjaE1hcChfID0+XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIHJvdXRlclN0YXRlID0+XG4gICAgICAgICAgICByb3V0ZXJTdGF0ZSAmJiByb3V0ZXJTdGF0ZS5zdGF0ZSAmJiByb3V0ZXJTdGF0ZS5zdGF0ZS5jbXNSZXF1aXJlZFxuICAgICAgICApLFxuICAgICAgICBtYXAocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUuc3RhdGUuY29udGV4dCksXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIG1lcmdlTWFwKGNvbnRleHQgPT4gb2YobmV3IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YShjb250ZXh0KSkpXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkUGFnZURhdGEkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKHBhZ2VBY3Rpb25zLkxPQURfUEFHRV9EQVRBKSxcbiAgICBtYXAoKGFjdGlvbjogcGFnZUFjdGlvbnMuTG9hZFBhZ2VEYXRhKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNtc1BhZ2VDb25uZWN0b3IuZ2V0KHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICBtZXJnZU1hcCgoY21zU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbCkgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXcgcGFnZUFjdGlvbnMuTG9hZFBhZ2VEYXRhU3VjY2VzcyhwYWdlQ29udGV4dCwgY21zU3RydWN0dXJlLnBhZ2UpLFxuICAgICAgICAgICAgbmV3IGNvbXBvbmVudEFjdGlvbnMuR2V0Q29tcG9uZW50RnJvbVBhZ2UoY21zU3RydWN0dXJlLmNvbXBvbmVudHMpLFxuICAgICAgICAgIF07XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICByZXR1cm4gb2YobmV3IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YUZhaWwocGFnZUNvbnRleHQsIGVycm9yKSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc1BhZ2VDb25uZWN0b3I6IENtc1BhZ2VDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19