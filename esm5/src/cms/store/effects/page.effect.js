/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, groupBy, map, mergeMap, switchMap, take, } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { RoutingService } from '../../../routing/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CmsPageConnector } from '../../connectors/page/cms-page.connector';
import { serializePageContext } from '../../utils/cms-utils';
import { CmsActions } from '../actions/index';
var PageEffects = /** @class */ (function () {
    function PageEffects(actions$, cmsPageConnector, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsPageConnector = cmsPageConnector;
        this.routingService = routingService;
        this.refreshPage$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return _this.routingService.getRouterState().pipe(filter((/**
             * @param {?} routerState
             * @return {?}
             */
            function (routerState) {
                return routerState &&
                    routerState.state &&
                    routerState.state.cmsRequired &&
                    !routerState.nextState;
            })), take(1), map((/**
             * @param {?} routerState
             * @return {?}
             */
            function (routerState) { return routerState.state.context; })), mergeMap((/**
             * @param {?} context
             * @return {?}
             */
            function (context) { return of(new CmsActions.LoadCmsPageData(context)); })));
        })));
        this.loadPageData$ = this.actions$.pipe(ofType(CmsActions.LOAD_CMS_PAGE_DATA), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), groupBy((/**
         * @param {?} pageContext
         * @return {?}
         */
        function (pageContext) { return serializePageContext(pageContext); })), mergeMap((/**
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
                    /** @type {?} */
                    var actions = [
                        new CmsActions.CmsGetComponentFromPage(cmsStructure.components, pageContext),
                        new CmsActions.LoadCmsPageDataSuccess(pageContext, cmsStructure.page),
                    ];
                    /** @type {?} */
                    var pageLabel = cmsStructure.page.label;
                    // For content pages the page label returned from backend can be different than page ID initially assumed from route.
                    // In such a case let's save the success response not only for initially assumed page ID, but also for correct page label.
                    if (pageLabel && pageLabel !== pageContext.id) {
                        actions.unshift(new CmsActions.CmsSetPageSuccessIndex({ id: pageLabel, type: pageContext.type }, cmsStructure.page));
                    }
                    return actions;
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return of(new CmsActions.LoadCmsPageDataFail(pageContext, makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxHQUNMLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUM7SUEwRUUscUJBQ1UsUUFBaUIsRUFDakIsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBSHhDLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTFFeEMsaUJBQVksR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FB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SUFDdEIsbUNBcUJFOztJQUVGLG9DQStDRTs7Ozs7SUFHQSwrQkFBeUI7Ozs7O0lBQ3pCLHVDQUEwQzs7Ozs7SUFDMUMscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDbXNQYWdlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wYWdlL2Ntcy1wYWdlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgc2VyaWFsaXplUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlscy9jbXMtdXRpbHMnO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVmcmVzaFBhZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR09VVCxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR0lOXG4gICAgKSxcbiAgICBzd2l0Y2hNYXAoXyA9PlxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICByb3V0ZXJTdGF0ZSA9PlxuICAgICAgICAgICAgcm91dGVyU3RhdGUgJiZcbiAgICAgICAgICAgIHJvdXRlclN0YXRlLnN0YXRlICYmXG4gICAgICAgICAgICByb3V0ZXJTdGF0ZS5zdGF0ZS5jbXNSZXF1aXJlZCAmJlxuICAgICAgICAgICAgIXJvdXRlclN0YXRlLm5leHRTdGF0ZVxuICAgICAgICApLFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXAocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUuc3RhdGUuY29udGV4dCksXG4gICAgICAgIG1lcmdlTWFwKGNvbnRleHQgPT4gb2YobmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKGNvbnRleHQpKSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRQYWdlRGF0YSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ21zQWN0aW9ucy5MT0FEX0NNU19QQUdFX0RBVEEpLFxuICAgIG1hcCgoYWN0aW9uOiBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkocGFnZUNvbnRleHQgPT4gc2VyaWFsaXplUGFnZUNvbnRleHQocGFnZUNvbnRleHQpKSxcbiAgICBtZXJnZU1hcChncm91cCA9PlxuICAgICAgZ3JvdXAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5jbXNQYWdlQ29ubmVjdG9yLmdldChwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIG1lcmdlTWFwKChjbXNTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IEFjdGlvbltdID0gW1xuICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkNtc0dldENvbXBvbmVudEZyb21QYWdlKFxuICAgICAgICAgICAgICAgICAgY21zU3RydWN0dXJlLmNvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhU3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgY21zU3RydWN0dXJlLnBhZ2VcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2VMYWJlbCA9IGNtc1N0cnVjdHVyZS5wYWdlLmxhYmVsO1xuICAgICAgICAgICAgICAvLyBGb3IgY29udGVudCBwYWdlcyB0aGUgcGFnZSBsYWJlbCByZXR1cm5lZCBmcm9tIGJhY2tlbmQgY2FuIGJlIGRpZmZlcmVudCB0aGFuIHBhZ2UgSUQgaW5pdGlhbGx5IGFzc3VtZWQgZnJvbSByb3V0ZS5cbiAgICAgICAgICAgICAgLy8gSW4gc3VjaCBhIGNhc2UgbGV0J3Mgc2F2ZSB0aGUgc3VjY2VzcyByZXNwb25zZSBub3Qgb25seSBmb3IgaW5pdGlhbGx5IGFzc3VtZWQgcGFnZSBJRCwgYnV0IGFsc28gZm9yIGNvcnJlY3QgcGFnZSBsYWJlbC5cbiAgICAgICAgICAgICAgaWYgKHBhZ2VMYWJlbCAmJiBwYWdlTGFiZWwgIT09IHBhZ2VDb250ZXh0LmlkKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy51bnNoaWZ0KFxuICAgICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuQ21zU2V0UGFnZVN1Y2Nlc3NJbmRleChcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogcGFnZUxhYmVsLCB0eXBlOiBwYWdlQ29udGV4dC50eXBlIH0sXG4gICAgICAgICAgICAgICAgICAgIGNtc1N0cnVjdHVyZS5wYWdlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YUZhaWwoXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc1BhZ2VDb25uZWN0b3I6IENtc1BhZ2VDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19