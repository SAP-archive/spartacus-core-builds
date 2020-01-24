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
import { makeErrorSerializable, serializePageContext, } from '../../../util/serialization-utils';
import { CmsPageConnector } from '../../connectors/page/cms-page.connector';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxHQUNMLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG9CQUFvQixHQUNyQixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QztJQTBFRSxxQkFDVSxRQUFpQixFQUNqQixnQkFBa0MsRUFDbEMsY0FBOEI7UUFIeEMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBMUV4QyxpQkFBWSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkQsTUFBTSxDQUNKLGtCQUFrQixD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QUdBLCtCQUF5Qjs7Ozs7SUFDekIsdUNBQTBDOzs7OztJQUMxQyxxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgbWFrZUVycm9yU2VyaWFsaXphYmxlLFxuICBzZXJpYWxpemVQYWdlQ29udGV4dCxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENtc1BhZ2VDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZWZyZXNoUGFnZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgQXV0aEFjdGlvbnMuTE9HT1VULFxuICAgICAgQXV0aEFjdGlvbnMuTE9HSU5cbiAgICApLFxuICAgIHN3aXRjaE1hcChfID0+XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIHJvdXRlclN0YXRlID0+XG4gICAgICAgICAgICByb3V0ZXJTdGF0ZSAmJlxuICAgICAgICAgICAgcm91dGVyU3RhdGUuc3RhdGUgJiZcbiAgICAgICAgICAgIHJvdXRlclN0YXRlLnN0YXRlLmNtc1JlcXVpcmVkICYmXG4gICAgICAgICAgICAhcm91dGVyU3RhdGUubmV4dFN0YXRlXG4gICAgICAgICksXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgbWVyZ2VNYXAoY29udGV4dCA9PiBvZihuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEoY29udGV4dCkpKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZFBhZ2VEYXRhJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDbXNBY3Rpb25zLkxPQURfQ01TX1BBR0VfREFUQSksXG4gICAgbWFwKChhY3Rpb246IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZ3JvdXBCeShwYWdlQ29udGV4dCA9PiBzZXJpYWxpemVQYWdlQ29udGV4dChwYWdlQ29udGV4dCkpLFxuICAgIG1lcmdlTWFwKGdyb3VwID0+XG4gICAgICBncm91cC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgICB0aGlzLmNtc1BhZ2VDb25uZWN0b3IuZ2V0KHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgbWVyZ2VNYXAoKGNtc1N0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYWN0aW9uczogQWN0aW9uW10gPSBbXG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuQ21zR2V0Q29tcG9uZW50RnJvbVBhZ2UoXG4gICAgICAgICAgICAgICAgICBjbXNTdHJ1Y3R1cmUuY29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGFTdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgICBjbXNTdHJ1Y3R1cmUucGFnZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgY29uc3QgcGFnZUxhYmVsID0gY21zU3RydWN0dXJlLnBhZ2UubGFiZWw7XG4gICAgICAgICAgICAgIC8vIEZvciBjb250ZW50IHBhZ2VzIHRoZSBwYWdlIGxhYmVsIHJldHVybmVkIGZyb20gYmFja2VuZCBjYW4gYmUgZGlmZmVyZW50IHRoYW4gcGFnZSBJRCBpbml0aWFsbHkgYXNzdW1lZCBmcm9tIHJvdXRlLlxuICAgICAgICAgICAgICAvLyBJbiBzdWNoIGEgY2FzZSBsZXQncyBzYXZlIHRoZSBzdWNjZXNzIHJlc3BvbnNlIG5vdCBvbmx5IGZvciBpbml0aWFsbHkgYXNzdW1lZCBwYWdlIElELCBidXQgYWxzbyBmb3IgY29ycmVjdCBwYWdlIGxhYmVsLlxuICAgICAgICAgICAgICBpZiAocGFnZUxhYmVsICYmIHBhZ2VMYWJlbCAhPT0gcGFnZUNvbnRleHQuaWQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnVuc2hpZnQoXG4gICAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5DbXNTZXRQYWdlU3VjY2Vzc0luZGV4KFxuICAgICAgICAgICAgICAgICAgICB7IGlkOiBwYWdlTGFiZWwsIHR5cGU6IHBhZ2VDb250ZXh0LnR5cGUgfSxcbiAgICAgICAgICAgICAgICAgICAgY21zU3RydWN0dXJlLnBhZ2VcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhRmFpbChcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zUGFnZUNvbm5lY3RvcjogQ21zUGFnZUNvbm5lY3RvcixcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG59XG4iXX0=