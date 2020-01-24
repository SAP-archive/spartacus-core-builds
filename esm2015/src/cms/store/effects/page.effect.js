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
export class PageEffects {
    /**
     * @param {?} actions$
     * @param {?} cmsPageConnector
     * @param {?} routingService
     */
    constructor(actions$, cmsPageConnector, routingService) {
        this.actions$ = actions$;
        this.cmsPageConnector = cmsPageConnector;
        this.routingService = routingService;
        this.refreshPage$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.routingService.getRouterState().pipe(filter((/**
         * @param {?} routerState
         * @return {?}
         */
        routerState => routerState &&
            routerState.state &&
            routerState.state.cmsRequired &&
            !routerState.nextState)), take(1), map((/**
         * @param {?} routerState
         * @return {?}
         */
        routerState => routerState.state.context)), mergeMap((/**
         * @param {?} context
         * @return {?}
         */
        context => of(new CmsActions.LoadCmsPageData(context))))))));
        this.loadPageData$ = this.actions$.pipe(ofType(CmsActions.LOAD_CMS_PAGE_DATA), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), groupBy((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => serializePageContext(pageContext))), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        group => group.pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.cmsPageConnector.get(pageContext).pipe(mergeMap((/**
         * @param {?} cmsStructure
         * @return {?}
         */
        (cmsStructure) => {
            /** @type {?} */
            const actions = [
                new CmsActions.CmsGetComponentFromPage(cmsStructure.components, pageContext),
                new CmsActions.LoadCmsPageDataSuccess(pageContext, cmsStructure.page),
            ];
            /** @type {?} */
            const pageLabel = cmsStructure.page.label;
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
        error => of(new CmsActions.LoadCmsPageDataFail(pageContext, makeErrorSerializable(error))))))))))));
    }
}
PageEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsPageConnector },
    { type: RoutingService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], PageEffects.prototype, "refreshPage$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], PageEffects.prototype, "loadPageData$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxHQUNMLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG9CQUFvQixHQUNyQixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc5QyxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBeUV0QixZQUNVLFFBQWlCLEVBQ2pCLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUY5QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBMUV4QyxpQkFBWSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkQsTUFBTSxDQUNKLGtCQUFrQixDQUFDLGVBQWUsRUFDbEMsV0FBVyxDQUFDLE1BQU0sRUFDbEIsV0FBVyxDQUFDLEtBQUssQ0FDbEIsRUFDRCxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDWixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDdkMsTUFBTTs7OztRQUNKLFdBQVcsQ0FBQyxFQUFFLENBQ1osV0FBVztZQUNYLFdBQVcsQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUM3QixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQ3pCLEVBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUc7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLEVBQzdDLFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUNqRSxFQUNGLENBQ0YsQ0FBQztRQUdGLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwRCxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQ3JDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWtDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDM0QsT0FBTzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLEVBQUMsRUFDekQsUUFBUTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2YsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3pDLFFBQVE7Ozs7UUFBQyxDQUFDLFlBQStCLEVBQUUsRUFBRTs7a0JBQ3JDLE9BQU8sR0FBYTtnQkFDeEIsSUFBSSxVQUFVLENBQUMsdUJBQXVCLENBQ3BDLFlBQVksQ0FBQyxVQUFVLEVBQ3ZCLFdBQVcsQ0FDWjtnQkFDRCxJQUFJLFVBQVUsQ0FBQyxzQkFBc0IsQ0FDbkMsV0FBVyxFQUNYLFlBQVksQ0FBQyxJQUFJLENBQ2xCO2FBQ0Y7O2tCQUVLLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDekMscUhBQXFIO1lBQ3JILDBIQUEwSDtZQUMxSCxJQUFJLFNBQVMsSUFBSSxTQUFTLEtBQUssV0FBVyxDQUFDLEVBQUUsRUFBRTtnQkFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FDYixJQUFJLFVBQVUsQ0FBQyxzQkFBc0IsQ0FDbkMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQ3pDLFlBQVksQ0FBQyxJQUFJLENBQ2xCLENBQ0YsQ0FBQzthQUNIO1lBRUQsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLFVBQVUsQ0FBQyxtQkFBbUIsQ0FDaEMsV0FBVyxFQUNYLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGLEVBQ0YsQ0FDRixFQUNGLENBQ0YsRUFDRixDQUNGLENBQUM7SUFNQyxDQUFDOzs7WUE5RUwsVUFBVTs7OztZQXZCRixPQUFPO1lBbUJQLGdCQUFnQjtZQU5oQixjQUFjOztBQWFyQjtJQURDLE1BQU0sRUFBRTtzQ0FDSyxVQUFVO2lEQW9CdEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDTSxVQUFVO2tEQThDdkI7OztJQXRFRixtQ0FxQkU7O0lBRUYsb0NBK0NFOzs7OztJQUdBLCtCQUF5Qjs7Ozs7SUFDekIsdUNBQTBDOzs7OztJQUMxQyxxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgbWFrZUVycm9yU2VyaWFsaXphYmxlLFxuICBzZXJpYWxpemVQYWdlQ29udGV4dCxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENtc1BhZ2VDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZWZyZXNoUGFnZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgQXV0aEFjdGlvbnMuTE9HT1VULFxuICAgICAgQXV0aEFjdGlvbnMuTE9HSU5cbiAgICApLFxuICAgIHN3aXRjaE1hcChfID0+XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIHJvdXRlclN0YXRlID0+XG4gICAgICAgICAgICByb3V0ZXJTdGF0ZSAmJlxuICAgICAgICAgICAgcm91dGVyU3RhdGUuc3RhdGUgJiZcbiAgICAgICAgICAgIHJvdXRlclN0YXRlLnN0YXRlLmNtc1JlcXVpcmVkICYmXG4gICAgICAgICAgICAhcm91dGVyU3RhdGUubmV4dFN0YXRlXG4gICAgICAgICksXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgbWVyZ2VNYXAoY29udGV4dCA9PiBvZihuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEoY29udGV4dCkpKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZFBhZ2VEYXRhJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDbXNBY3Rpb25zLkxPQURfQ01TX1BBR0VfREFUQSksXG4gICAgbWFwKChhY3Rpb246IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZ3JvdXBCeShwYWdlQ29udGV4dCA9PiBzZXJpYWxpemVQYWdlQ29udGV4dChwYWdlQ29udGV4dCkpLFxuICAgIG1lcmdlTWFwKGdyb3VwID0+XG4gICAgICBncm91cC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgICB0aGlzLmNtc1BhZ2VDb25uZWN0b3IuZ2V0KHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgbWVyZ2VNYXAoKGNtc1N0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYWN0aW9uczogQWN0aW9uW10gPSBbXG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuQ21zR2V0Q29tcG9uZW50RnJvbVBhZ2UoXG4gICAgICAgICAgICAgICAgICBjbXNTdHJ1Y3R1cmUuY29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGFTdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgICBjbXNTdHJ1Y3R1cmUucGFnZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgY29uc3QgcGFnZUxhYmVsID0gY21zU3RydWN0dXJlLnBhZ2UubGFiZWw7XG4gICAgICAgICAgICAgIC8vIEZvciBjb250ZW50IHBhZ2VzIHRoZSBwYWdlIGxhYmVsIHJldHVybmVkIGZyb20gYmFja2VuZCBjYW4gYmUgZGlmZmVyZW50IHRoYW4gcGFnZSBJRCBpbml0aWFsbHkgYXNzdW1lZCBmcm9tIHJvdXRlLlxuICAgICAgICAgICAgICAvLyBJbiBzdWNoIGEgY2FzZSBsZXQncyBzYXZlIHRoZSBzdWNjZXNzIHJlc3BvbnNlIG5vdCBvbmx5IGZvciBpbml0aWFsbHkgYXNzdW1lZCBwYWdlIElELCBidXQgYWxzbyBmb3IgY29ycmVjdCBwYWdlIGxhYmVsLlxuICAgICAgICAgICAgICBpZiAocGFnZUxhYmVsICYmIHBhZ2VMYWJlbCAhPT0gcGFnZUNvbnRleHQuaWQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnVuc2hpZnQoXG4gICAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5DbXNTZXRQYWdlU3VjY2Vzc0luZGV4KFxuICAgICAgICAgICAgICAgICAgICB7IGlkOiBwYWdlTGFiZWwsIHR5cGU6IHBhZ2VDb250ZXh0LnR5cGUgfSxcbiAgICAgICAgICAgICAgICAgICAgY21zU3RydWN0dXJlLnBhZ2VcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhRmFpbChcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zUGFnZUNvbm5lY3RvcjogQ21zUGFnZUNvbm5lY3RvcixcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG59XG4iXX0=