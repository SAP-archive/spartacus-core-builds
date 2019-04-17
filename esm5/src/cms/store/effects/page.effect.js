/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, mergeMap, filter, take, } from 'rxjs/operators';
import * as componentActions from '../actions/component.action';
import * as pageActions from '../actions/page.action';
import { RoutingService } from '../../../routing/index';
import { LOGIN, LOGOUT } from '../../../auth/store/actions/login-logout.action';
import { LANGUAGE_CHANGE } from '../../../site-context/store/actions/languages.action';
import { CmsPageLoader } from '../../services/cms-page.loader';
var PageEffects = /** @class */ (function () {
    function PageEffects(actions$, cmsPageLoader, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsPageLoader = cmsPageLoader;
        this.routingService = routingService;
        this.refreshPage$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), switchMap(function (_) {
            return _this.routingService.getRouterState().pipe(filter(function (routerState) {
                return routerState && routerState.state && routerState.state.cmsRequired;
            }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (context) { return of(new pageActions.LoadPageData(context)); }));
        }));
        this.loadPageData$ = this.actions$.pipe(ofType(pageActions.LOAD_PAGE_DATA), map(function (action) { return action.payload; }), switchMap(function (pageContext) {
            return _this.cmsPageLoader.get(pageContext).pipe(mergeMap(function (cmsStructure) {
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
        { type: CmsPageLoader },
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
    PageEffects.prototype.cmsPageLoader;
    /**
     * @type {?}
     * @private
     */
    PageEffects.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsR0FBRyxFQUNILFVBQVUsRUFDVixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEdBQ0wsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssZ0JBQWdCLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxLQUFLLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRy9EO0lBcUNFLHFCQUNVLFFBQWlCLEVBQ2pCLGFBQWlDLEVBQ2pDLGNBQThCO1FBSHhDLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFDakMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBckN4QyxpQkFBWSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkQsTUFBTSxDQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQ3RDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDVCxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUN2QyxNQUFNLENBQ0osVUFBQSxXQUFXO2dCQUNULE9BQUEsV0FBVyxJQUFJLFdBQVcsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQWpFLENBQWlFLENBQ3BFLEVBQ0QsR0FBRyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQXpCLENBQXlCLENBQUMsRUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFFBQVEsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUMvRDtRQVJELENBUUMsQ0FDRixDQUNGLENBQUM7UUFHRixrQkFBYSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFDbEMsR0FBRyxDQUFDLFVBQUMsTUFBZ0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3pELFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDbkIsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzdDLFFBQVEsQ0FBQyxVQUFDLFlBQStCO2dCQUN2QyxPQUFPO29CQUNMLElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUNuRSxJQUFJLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7aUJBQ25FLENBQUM7WUFDSixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7Z0JBekNMLFVBQVU7Ozs7Z0JBdEJNLE9BQU87Z0JBbUJmLGFBQWE7Z0JBSGIsY0FBYzs7SUFTckI7UUFEQyxNQUFNLEVBQUU7MENBQ0ssVUFBVTtxREFhdEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDTSxVQUFVO3NEQWdCdkI7SUFPSixrQkFBQztDQUFBLEFBMUNELElBMENDO1NBekNZLFdBQVc7OztJQUN0QixtQ0FjRTs7SUFFRixvQ0FpQkU7Ozs7O0lBR0EsK0JBQXlCOzs7OztJQUN6QixvQ0FBeUM7Ozs7O0lBQ3pDLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIG1hcCxcbiAgY2F0Y2hFcnJvcixcbiAgc3dpdGNoTWFwLFxuICBtZXJnZU1hcCxcbiAgZmlsdGVyLFxuICB0YWtlLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGNvbXBvbmVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uJztcbmltcG9ydCAqIGFzIHBhZ2VBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcGFnZS5hY3Rpb24nO1xuXG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgTE9HSU4sIExPR09VVCB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9sb2dpbi1sb2dvdXQuYWN0aW9uJztcbmltcG9ydCB7IExBTkdVQUdFX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2xhbmd1YWdlcy5hY3Rpb24nO1xuaW1wb3J0IHsgQ21zUGFnZUxvYWRlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1wYWdlLmxvYWRlcic7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVmcmVzaFBhZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKExBTkdVQUdFX0NIQU5HRSwgTE9HT1VULCBMT0dJTiksXG4gICAgc3dpdGNoTWFwKF8gPT5cbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgcm91dGVyU3RhdGUgPT5cbiAgICAgICAgICAgIHJvdXRlclN0YXRlICYmIHJvdXRlclN0YXRlLnN0YXRlICYmIHJvdXRlclN0YXRlLnN0YXRlLmNtc1JlcXVpcmVkXG4gICAgICAgICksXG4gICAgICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgbWVyZ2VNYXAoY29udGV4dCA9PiBvZihuZXcgcGFnZUFjdGlvbnMuTG9hZFBhZ2VEYXRhKGNvbnRleHQpKSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRQYWdlRGF0YSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUocGFnZUFjdGlvbnMuTE9BRF9QQUdFX0RBVEEpLFxuICAgIG1hcCgoYWN0aW9uOiBwYWdlQWN0aW9ucy5Mb2FkUGFnZURhdGEpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY21zUGFnZUxvYWRlci5nZXQocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgIG1lcmdlTWFwKChjbXNTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5ldyBwYWdlQWN0aW9ucy5Mb2FkUGFnZURhdGFTdWNjZXNzKHBhZ2VDb250ZXh0LCBjbXNTdHJ1Y3R1cmUucGFnZSksXG4gICAgICAgICAgICBuZXcgY29tcG9uZW50QWN0aW9ucy5HZXRDb21wb25lbnRGcm9tUGFnZShjbXNTdHJ1Y3R1cmUuY29tcG9uZW50cyksXG4gICAgICAgICAgXTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgIHJldHVybiBvZihuZXcgcGFnZUFjdGlvbnMuTG9hZFBhZ2VEYXRhRmFpbChwYWdlQ29udGV4dCwgZXJyb3IpKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zUGFnZUxvYWRlcjogQ21zUGFnZUxvYWRlcjxhbnk+LFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==