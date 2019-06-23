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
import * as componentActions from '../actions/component.action';
import * as pageActions from '../actions/page.action';
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
        context => of(new pageActions.LoadPageData(context))))))));
        this.loadPageData$ = this.actions$.pipe(ofType(pageActions.LOAD_PAGE_DATA), map((/**
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
                new componentActions.GetComponentFromPage(cmsStructure.components),
                new pageActions.LoadPageDataSuccess(pageContext, cmsStructure.page),
            ];
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new pageActions.LoadPageDataFail(pageContext, makeErrorSerializable(error))))))))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxHQUNMLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTVFLE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEtBQUssV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBR3RELE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFzRHRCLFlBQ1UsUUFBaUIsRUFDakIsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBRjlCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF2RHhDLGlCQUFZLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuRCxNQUFNLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFDdEMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ3ZDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxNQUFNOzs7O1FBQ0osV0FBVyxDQUFDLEVBQUUsQ0FDWixXQUFXO1lBQ1gsV0FBVyxDQUFDLEtBQUs7WUFDakIsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQzdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDekIsRUFDRCxHQUFHOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQyxFQUM3QyxRQUFROzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FDL0QsRUFDRixDQUNGLENBQUM7UUFHRixrQkFBYSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFDbEMsR0FBRzs7OztRQUFDLENBQUMsTUFBZ0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUN6RCxPQUFPOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxFQUFFLEVBQUMsRUFDekQsUUFBUTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2YsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3pDLFFBQVE7Ozs7UUFBQyxDQUFDLFlBQStCLEVBQUUsRUFBRTtZQUMzQyxPQUFPO2dCQUNMLElBQUksZ0JBQWdCLENBQUMsb0JBQW9CLENBQ3ZDLFlBQVksQ0FBQyxVQUFVLENBQ3hCO2dCQUNELElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUNqQyxXQUFXLEVBQ1gsWUFBWSxDQUFDLElBQUksQ0FDbEI7YUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FDOUIsV0FBVyxFQUNYLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGLEVBQ0YsQ0FDRixFQUNGLENBQ0YsRUFDRixDQUNGLENBQUM7SUFNQyxDQUFDOzs7WUEzREwsVUFBVTs7OztZQXJCRixPQUFPO1lBZ0JQLGdCQUFnQjtZQUhoQixjQUFjOztBQVdyQjtJQURDLE1BQU0sRUFBRTtzQ0FDSyxVQUFVO2lEQWdCdEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDTSxVQUFVO2tEQStCdkI7OztJQW5ERixtQ0FpQkU7O0lBRUYsb0NBZ0NFOzs7OztJQUdBLCtCQUF5Qjs7Ozs7SUFDekIsdUNBQTBDOzs7OztJQUMxQyxxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMT0dJTiwgTE9HT1VUIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2xvZ2luLWxvZ291dC5hY3Rpb24nO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IExBTkdVQUdFX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2xhbmd1YWdlcy5hY3Rpb24nO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENtc1BhZ2VDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgKiBhcyBjb21wb25lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY29tcG9uZW50LmFjdGlvbic7XG5pbXBvcnQgKiBhcyBwYWdlQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3BhZ2UuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2hQYWdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShMQU5HVUFHRV9DSEFOR0UsIExPR09VVCwgTE9HSU4pLFxuICAgIHN3aXRjaE1hcChfID0+XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIHJvdXRlclN0YXRlID0+XG4gICAgICAgICAgICByb3V0ZXJTdGF0ZSAmJlxuICAgICAgICAgICAgcm91dGVyU3RhdGUuc3RhdGUgJiZcbiAgICAgICAgICAgIHJvdXRlclN0YXRlLnN0YXRlLmNtc1JlcXVpcmVkICYmXG4gICAgICAgICAgICAhcm91dGVyU3RhdGUubmV4dFN0YXRlXG4gICAgICAgICksXG4gICAgICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgbWVyZ2VNYXAoY29udGV4dCA9PiBvZihuZXcgcGFnZUFjdGlvbnMuTG9hZFBhZ2VEYXRhKGNvbnRleHQpKSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRQYWdlRGF0YSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUocGFnZUFjdGlvbnMuTE9BRF9QQUdFX0RBVEEpLFxuICAgIG1hcCgoYWN0aW9uOiBwYWdlQWN0aW9ucy5Mb2FkUGFnZURhdGEpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KHBhZ2VDb250ZXh0ID0+IHBhZ2VDb250ZXh0LnR5cGUgKyBwYWdlQ29udGV4dC5pZCksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICAgIHRoaXMuY21zUGFnZUNvbm5lY3Rvci5nZXQocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICBtZXJnZU1hcCgoY21zU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBjb21wb25lbnRBY3Rpb25zLkdldENvbXBvbmVudEZyb21QYWdlKFxuICAgICAgICAgICAgICAgICAgY21zU3RydWN0dXJlLmNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG5ldyBwYWdlQWN0aW9ucy5Mb2FkUGFnZURhdGFTdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgICBjbXNTdHJ1Y3R1cmUucGFnZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgbmV3IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YUZhaWwoXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc1BhZ2VDb25uZWN0b3I6IENtc1BhZ2VDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19