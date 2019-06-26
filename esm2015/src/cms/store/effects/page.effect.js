/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, groupBy, map, mergeMap, switchMap, take, } from 'rxjs/operators';
import { LOGIN, LOGOUT } from '../../../auth/store/actions/login-logout.action';
import { RoutingService } from '../../../routing/index';
import { LANGUAGE_CHANGE } from '../../../site-context/store/actions/languages.action';
import { makeErrorSerializable } from '../../../util/serialization-utils';
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
        this.refreshPage$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.routingService.getRouterState().pipe(take(1), filter((/**
         * @param {?} routerState
         * @return {?}
         */
        routerState => routerState &&
            routerState.state &&
            routerState.state.cmsRequired &&
            !routerState.nextState)), map((/**
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
        pageContext => pageContext.type + pageContext.id)), mergeMap((/**
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
            return [
                new CmsActions.CmsGetComponentFromPage(cmsStructure.components),
                new CmsActions.LoadCmsPageDataSuccess(pageContext, cmsStructure.page),
            ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxHQUNMLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc5QyxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBb0R0QixZQUNVLFFBQWlCLEVBQ2pCLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUY5QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBckR4QyxpQkFBWSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkQsTUFBTSxDQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQ3RDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUN2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsTUFBTTs7OztRQUNKLFdBQVcsQ0FBQyxFQUFFLENBQ1osV0FBVztZQUNYLFdBQVcsQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUM3QixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQ3pCLEVBQ0QsR0FBRzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsRUFDN0MsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQ2pFLEVBQ0YsQ0FDRixDQUFDO1FBR0Ysa0JBQWEsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BELE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFDckMsR0FBRzs7OztRQUFDLENBQUMsTUFBa0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUMzRCxPQUFPOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxFQUFFLEVBQUMsRUFDekQsUUFBUTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2YsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3pDLFFBQVE7Ozs7UUFBQyxDQUFDLFlBQStCLEVBQUUsRUFBRTtZQUMzQyxPQUFPO2dCQUNMLElBQUksVUFBVSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7Z0JBQy9ELElBQUksVUFBVSxDQUFDLHNCQUFzQixDQUNuQyxXQUFXLEVBQ1gsWUFBWSxDQUFDLElBQUksQ0FDbEI7YUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLFVBQVUsQ0FBQyxtQkFBbUIsQ0FDaEMsV0FBVyxFQUNYLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGLEVBQ0YsQ0FDRixFQUNGLENBQ0YsRUFDRixDQUNGLENBQUM7SUFNQyxDQUFDOzs7WUF6REwsVUFBVTs7OztZQXBCRixPQUFPO1lBZ0JQLGdCQUFnQjtZQUhoQixjQUFjOztBQVVyQjtJQURDLE1BQU0sRUFBRTtzQ0FDSyxVQUFVO2lEQWdCdEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDTSxVQUFVO2tEQTZCdkI7OztJQWpERixtQ0FpQkU7O0lBRUYsb0NBOEJFOzs7OztJQUdBLCtCQUF5Qjs7Ozs7SUFDekIsdUNBQTBDOzs7OztJQUMxQyxxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMT0dJTiwgTE9HT1VUIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2xvZ2luLWxvZ291dC5hY3Rpb24nO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IExBTkdVQUdFX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2xhbmd1YWdlcy5hY3Rpb24nO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENtc1BhZ2VDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZWZyZXNoUGFnZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoTEFOR1VBR0VfQ0hBTkdFLCBMT0dPVVQsIExPR0lOKSxcbiAgICBzd2l0Y2hNYXAoXyA9PlxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICByb3V0ZXJTdGF0ZSA9PlxuICAgICAgICAgICAgcm91dGVyU3RhdGUgJiZcbiAgICAgICAgICAgIHJvdXRlclN0YXRlLnN0YXRlICYmXG4gICAgICAgICAgICByb3V0ZXJTdGF0ZS5zdGF0ZS5jbXNSZXF1aXJlZCAmJlxuICAgICAgICAgICAgIXJvdXRlclN0YXRlLm5leHRTdGF0ZVxuICAgICAgICApLFxuICAgICAgICBtYXAocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUuc3RhdGUuY29udGV4dCksXG4gICAgICAgIG1lcmdlTWFwKGNvbnRleHQgPT4gb2YobmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKGNvbnRleHQpKSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRQYWdlRGF0YSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ21zQWN0aW9ucy5MT0FEX0NNU19QQUdFX0RBVEEpLFxuICAgIG1hcCgoYWN0aW9uOiBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkocGFnZUNvbnRleHQgPT4gcGFnZUNvbnRleHQudHlwZSArIHBhZ2VDb250ZXh0LmlkKSxcbiAgICBtZXJnZU1hcChncm91cCA9PlxuICAgICAgZ3JvdXAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5jbXNQYWdlQ29ubmVjdG9yLmdldChwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIG1lcmdlTWFwKChjbXNTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuQ21zR2V0Q29tcG9uZW50RnJvbVBhZ2UoY21zU3RydWN0dXJlLmNvbXBvbmVudHMpLFxuICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YVN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgIGNtc1N0cnVjdHVyZS5wYWdlXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGFGYWlsKFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNQYWdlQ29ubmVjdG9yOiBDbXNQYWdlQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==