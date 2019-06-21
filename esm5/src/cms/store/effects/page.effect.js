/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.refreshPage$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return _this.routingService.getRouterState().pipe(take(1), filter((/**
             * @param {?} routerState
             * @return {?}
             */
            function (routerState) {
                return routerState &&
                    routerState.state &&
                    routerState.state.cmsRequired &&
                    !routerState.nextState;
            })), map((/**
             * @param {?} routerState
             * @return {?}
             */
            function (routerState) { return routerState.state.context; })), mergeMap((/**
             * @param {?} context
             * @return {?}
             */
            function (context) { return of(new pageActions.LoadPageData(context)); })));
        })));
        this.loadPageData$ = this.actions$.pipe(ofType(pageActions.LOAD_PAGE_DATA), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), groupBy((/**
         * @param {?} pageContext
         * @return {?}
         */
        function (pageContext) { return pageContext.type + pageContext.id; })), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            return group.pipe(switchMap((/**
             * @param {?} pageContext
             * @return {?}
             */
            function (pageContext) {
                return _this.cmsPageConnector.get(pageContext).pipe(mergeMap((/**
                 * @param {?} cmsStructure
                 * @return {?}
                 */
                function (cmsStructure) {
                    return [
                        new componentActions.GetComponentFromPage(cmsStructure.components),
                        new pageActions.LoadPageDataSuccess(pageContext, cmsStructure.page),
                    ];
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return of(new pageActions.LoadPageDataFail(pageContext, error));
                })));
            })));
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxHQUNMLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLGdCQUFnQixNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxXQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTVFO0lBa0RFLHFCQUNVLFFBQWlCLEVBQ2pCLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUh4QyxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFsRHhDLGlCQUFZLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuRCxNQUFNLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFDdEMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQztZQUNULE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ3ZDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxNQUFNOzs7O1lBQ0osVUFBQSxXQUFXO2dCQUNULE9BQUEsV0FBVztvQkFDWCxXQUFXLENBQUMsS0FBSztvQkFDakIsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXO29CQUM3QixDQUFDLFdBQVcsQ0FBQyxTQUFTO1lBSHRCLENBR3NCLEVBQ3pCLEVBQ0QsR0FBRzs7OztZQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQXpCLENBQXlCLEVBQUMsRUFDN0MsUUFBUTs7OztZQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUF6QyxDQUF5QyxFQUFDLENBQy9EO1FBWEQsQ0FXQyxFQUNGLENBQ0YsQ0FBQztRQUdGLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwRCxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUNsQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFnQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDekQsT0FBTzs7OztRQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsRUFBRSxFQUFqQyxDQUFpQyxFQUFDLEVBQ3pELFFBQVE7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDWixPQUFBLEtBQUssQ0FBQyxJQUFJLENBQ1IsU0FBUzs7OztZQUFDLFVBQUEsV0FBVztnQkFDbkIsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDaEQsUUFBUTs7OztnQkFBQyxVQUFDLFlBQStCO29CQUN2QyxPQUFPO3dCQUNMLElBQUksZ0JBQWdCLENBQUMsb0JBQW9CLENBQ3ZDLFlBQVksQ0FBQyxVQUFVLENBQ3hCO3dCQUNELElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUNqQyxXQUFXLEVBQ1gsWUFBWSxDQUFDLElBQUksQ0FDbEI7cUJBQ0YsQ0FBQztnQkFDSixDQUFDLEVBQUMsRUFDRixVQUFVOzs7O2dCQUFDLFVBQUEsS0FBSztvQkFDZCxPQUFPLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsQ0FBQyxFQUFDLENBQ0gsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUNIO1FBbkJELENBbUJDLEVBQ0YsQ0FDRixDQUFDO0lBTUMsQ0FBQzs7Z0JBdERMLFVBQVU7Ozs7Z0JBdkJGLE9BQU87Z0JBcUJQLGdCQUFnQjtnQkFKaEIsY0FBYzs7SUFTckI7UUFEQyxNQUFNLEVBQUU7MENBQ0ssVUFBVTtxREFnQnRCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ00sVUFBVTtzREEwQnZCO0lBT0osa0JBQUM7Q0FBQSxBQXZERCxJQXVEQztTQXREWSxXQUFXOzs7SUFDdEIsbUNBaUJFOztJQUVGLG9DQTJCRTs7Ozs7SUFHQSwrQkFBeUI7Ozs7O0lBQ3pCLHVDQUEwQzs7Ozs7SUFDMUMscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZmlsdGVyLFxuICBncm91cEJ5LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgY29tcG9uZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NvbXBvbmVudC5hY3Rpb24nO1xuaW1wb3J0ICogYXMgcGFnZUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wYWdlLmFjdGlvbic7XG5cbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBMT0dJTiwgTE9HT1VUIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2xvZ2luLWxvZ291dC5hY3Rpb24nO1xuaW1wb3J0IHsgTEFOR1VBR0VfQ0hBTkdFIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvbGFuZ3VhZ2VzLmFjdGlvbic7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ21zUGFnZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcGFnZS9jbXMtcGFnZS5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVmcmVzaFBhZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKExBTkdVQUdFX0NIQU5HRSwgTE9HT1VULCBMT0dJTiksXG4gICAgc3dpdGNoTWFwKF8gPT5cbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgcm91dGVyU3RhdGUgPT5cbiAgICAgICAgICAgIHJvdXRlclN0YXRlICYmXG4gICAgICAgICAgICByb3V0ZXJTdGF0ZS5zdGF0ZSAmJlxuICAgICAgICAgICAgcm91dGVyU3RhdGUuc3RhdGUuY21zUmVxdWlyZWQgJiZcbiAgICAgICAgICAgICFyb3V0ZXJTdGF0ZS5uZXh0U3RhdGVcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlLnN0YXRlLmNvbnRleHQpLFxuICAgICAgICBtZXJnZU1hcChjb250ZXh0ID0+IG9mKG5ldyBwYWdlQWN0aW9ucy5Mb2FkUGFnZURhdGEoY29udGV4dCkpKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZFBhZ2VEYXRhJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShwYWdlQWN0aW9ucy5MT0FEX1BBR0VfREFUQSksXG4gICAgbWFwKChhY3Rpb246IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkocGFnZUNvbnRleHQgPT4gcGFnZUNvbnRleHQudHlwZSArIHBhZ2VDb250ZXh0LmlkKSxcbiAgICBtZXJnZU1hcChncm91cCA9PlxuICAgICAgZ3JvdXAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNQYWdlQ29ubmVjdG9yLmdldChwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIG1lcmdlTWFwKChjbXNTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IGNvbXBvbmVudEFjdGlvbnMuR2V0Q29tcG9uZW50RnJvbVBhZ2UoXG4gICAgICAgICAgICAgICAgICBjbXNTdHJ1Y3R1cmUuY29tcG9uZW50c1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgbmV3IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YVN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgIGNtc1N0cnVjdHVyZS5wYWdlXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBvZihuZXcgcGFnZUFjdGlvbnMuTG9hZFBhZ2VEYXRhRmFpbChwYWdlQ29udGV4dCwgZXJyb3IpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc1BhZ2VDb25uZWN0b3I6IENtc1BhZ2VDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19