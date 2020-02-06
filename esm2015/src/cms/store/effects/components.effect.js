/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, merge, of } from 'rxjs';
import { catchError, groupBy, map, mergeMap, switchMap } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { bufferDebounceTime } from '../../../util/buffer-debounce-time';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { withdrawOn } from '../../../util/withdraw-on';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { serializePageContext } from '../../utils/cms-utils';
import { CmsActions } from '../actions/index';
export class ComponentsEffects {
    /**
     * @param {?} actions$
     * @param {?} cmsComponentLoader
     * @param {?} featureConfigService
     */
    constructor(actions$, cmsComponentLoader, featureConfigService) {
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.featureConfigService = featureConfigService;
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN));
        this.loadComponent$ = createEffect((/**
         * @return {?}
         */
        () => (/**
         * @param {?=} __0
         * @return {?}
         */
        ({ scheduler, debounce = 0 } = {}) => this.actions$.pipe(ofType(CmsActions.LOAD_CMS_COMPONENT), groupBy((/**
         * @param {?} actions
         * @return {?}
         */
        actions => serializePageContext(actions.payload.pageContext))), mergeMap((/**
         * @param {?} actionGroup
         * @return {?}
         */
        actionGroup => actionGroup.pipe(bufferDebounceTime(debounce, scheduler), mergeMap((/**
         * @param {?} actions
         * @return {?}
         */
        actions => this.loadComponentsEffect(actions.map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload.uid)), actions[0].payload.pageContext)))))), withdrawOn(this.contextChange$)))));
    }
    /**
     * @private
     * @param {?} componentUids
     * @param {?} pageContext
     * @return {?}
     */
    loadComponentsEffect(componentUids, pageContext) {
        // TODO: remove, deprecated behavior since 1.4
        if (!this.featureConfigService.isLevel('1.4')) {
            return merge(...componentUids.map((/**
             * @param {?} uid
             * @return {?}
             */
            uid => this.cmsComponentLoader.get(uid, pageContext).pipe(map((/**
             * @param {?} component
             * @return {?}
             */
            component => new CmsActions.LoadCmsComponentSuccess({
                component,
                uid: component.uid,
                pageContext,
            }))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CmsActions.LoadCmsComponentFail({
                uid,
                error: makeErrorSerializable(error),
                pageContext,
            }))))))));
        }
        // END OF (TODO: remove, deprecated behavior since 1.4)
        return this.cmsComponentLoader.getList(componentUids, pageContext).pipe(switchMap((/**
         * @param {?} components
         * @return {?}
         */
        components => from(components.map((/**
         * @param {?} component
         * @return {?}
         */
        component => new CmsActions.LoadCmsComponentSuccess({
            component,
            uid: component.uid,
            pageContext,
        })))))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => from(componentUids.map((/**
         * @param {?} uid
         * @return {?}
         */
        uid => new CmsActions.LoadCmsComponentFail({
            uid,
            error: makeErrorSerializable(error),
            pageContext,
        })))))));
    }
}
ComponentsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentsEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector },
    { type: FeatureConfigService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentsEffects.prototype.contextChange$;
    /** @type {?} */
    ComponentsEffects.prototype.loadComponent$;
    /**
     * @type {?}
     * @private
     */
    ComponentsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ComponentsEffects.prototype.cmsComponentLoader;
    /**
     * @type {?}
     * @private
     */
    ComponentsEffects.prototype.featureConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvY29tcG9uZW50cy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUdoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUM1QixZQUNVLFFBQWlCLEVBQ2pCLGtCQUF5QyxFQUN6QyxvQkFBMEM7UUFGMUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBQ3pDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFHNUMsbUJBQWMsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzdELE1BQU0sQ0FDSixrQkFBa0IsQ0FBQyxlQUFlLEVBQ2xDLFdBQVcsQ0FBQyxNQUFNLEVBQ2xCLFdBQVcsQ0FBQyxLQUFLLENBQ2xCLENBQ0YsQ0FBQztRQUVGLG1CQUFjLEdBQUcsWUFBWTs7O1FBQzNCLEdBQUcsRUFBRTs7OztRQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFHckMsRUFBRSxDQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQThCLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUNsRSxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDLEVBQ3JFLFFBQVE7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRSxDQUNyQixXQUFXLENBQUMsSUFBSSxDQUNkLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFDdkMsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2pCLElBQUksQ0FBQyxvQkFBb0IsQ0FDdkIsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDLEVBQ3pDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUMvQixFQUNGLENBQ0YsRUFDRixFQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQ2hDLENBQUEsRUFDSixDQUFDO0lBL0JDLENBQUM7Ozs7Ozs7SUFpQ0ksb0JBQW9CLENBQzFCLGFBQXVCLEVBQ3ZCLFdBQXdCO1FBS3hCLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QyxPQUFPLEtBQUssQ0FDVixHQUFHLGFBQWEsQ0FBQyxHQUFHOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRCxHQUFHOzs7O1lBQ0QsU0FBUyxDQUFDLEVBQUUsQ0FDVixJQUFJLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDckMsU0FBUztnQkFDVCxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7Z0JBQ2xCLFdBQVc7YUFDWixDQUFDLEVBQ0wsRUFDRCxVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUNBLElBQUksVUFBVSxDQUFDLG9CQUFvQixDQUFDO2dCQUNsQyxHQUFHO2dCQUNILEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLFdBQVc7YUFDWixDQUFDLENBQ0gsRUFDRixDQUNGLEVBQ0YsQ0FDRixDQUFDO1NBQ0g7UUFDRCx1REFBdUQ7UUFFdkQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3JFLFNBQVM7Ozs7UUFBQyxVQUFVLENBQUMsRUFBRSxDQUNyQixJQUFJLENBQ0YsVUFBVSxDQUFDLEdBQUc7Ozs7UUFDWixTQUFTLENBQUMsRUFBRSxDQUNWLElBQUksVUFBVSxDQUFDLHVCQUF1QixDQUFDO1lBQ3JDLFNBQVM7WUFDVCxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7WUFDbEIsV0FBVztTQUNaLENBQUMsRUFDTCxDQUNGLEVBQ0YsRUFDRCxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsSUFBSSxDQUNGLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQ2YsR0FBRyxDQUFDLEVBQUUsQ0FDSixJQUFJLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNsQyxHQUFHO1lBQ0gsS0FBSyxFQUFFLHFCQUFxQixDQUFDLEtBQUssQ0FBQztZQUNuQyxXQUFXO1NBQ1osQ0FBQyxFQUNMLENBQ0YsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7WUFwR0YsVUFBVTs7OztZQWhCRixPQUFPO1lBWVAscUJBQXFCO1lBUHJCLG9CQUFvQjs7Ozs7OztJQW1CM0IsMkNBTUU7O0lBRUYsMkNBcUJFOzs7OztJQWxDQSxxQ0FBeUI7Ozs7O0lBQ3pCLCtDQUFpRDs7Ozs7SUFDakQsaURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgY3JlYXRlRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZyb20sIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZ3JvdXBCeSwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGJ1ZmZlckRlYm91bmNlVGltZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYnVmZmVyLWRlYm91bmNlLXRpbWUnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcbmltcG9ydCB7IENtc0NvbXBvbmVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IHNlcmlhbGl6ZVBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY21zLXV0aWxzJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc0NvbXBvbmVudExvYWRlcjogQ21zQ29tcG9uZW50Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZ1NlcnZpY2U6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGNvbnRleHRDaGFuZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR09VVCxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR0lOXG4gICAgKVxuICApO1xuXG4gIGxvYWRDb21wb25lbnQkID0gY3JlYXRlRWZmZWN0KFxuICAgICgpID0+ICh7IHNjaGVkdWxlciwgZGVib3VuY2UgPSAwIH0gPSB7fSk6IE9ic2VydmFibGU8XG4gICAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8Q21zQ29tcG9uZW50PlxuICAgICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsXG4gICAgPiA9PlxuICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGU8Q21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50PihDbXNBY3Rpb25zLkxPQURfQ01TX0NPTVBPTkVOVCksXG4gICAgICAgIGdyb3VwQnkoYWN0aW9ucyA9PiBzZXJpYWxpemVQYWdlQ29udGV4dChhY3Rpb25zLnBheWxvYWQucGFnZUNvbnRleHQpKSxcbiAgICAgICAgbWVyZ2VNYXAoYWN0aW9uR3JvdXAgPT5cbiAgICAgICAgICBhY3Rpb25Hcm91cC5waXBlKFxuICAgICAgICAgICAgYnVmZmVyRGVib3VuY2VUaW1lKGRlYm91bmNlLCBzY2hlZHVsZXIpLFxuICAgICAgICAgICAgbWVyZ2VNYXAoYWN0aW9ucyA9PlxuICAgICAgICAgICAgICB0aGlzLmxvYWRDb21wb25lbnRzRWZmZWN0KFxuICAgICAgICAgICAgICAgIGFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZC51aWQpLFxuICAgICAgICAgICAgICAgIGFjdGlvbnNbMF0ucGF5bG9hZC5wYWdlQ29udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBsb2FkQ29tcG9uZW50c0VmZmVjdChcbiAgICBjb21wb25lbnRVaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8Q21zQ29tcG9uZW50PlxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICA+IHtcbiAgICAvLyBUT0RPOiByZW1vdmUsIGRlcHJlY2F0ZWQgYmVoYXZpb3Igc2luY2UgMS40XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuNCcpKSB7XG4gICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgIC4uLmNvbXBvbmVudFVpZHMubWFwKHVpZCA9PlxuICAgICAgICAgIHRoaXMuY21zQ29tcG9uZW50TG9hZGVyLmdldCh1aWQsIHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICBjb21wb25lbnQgPT5cbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICB1aWQ6IGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwoe1xuICAgICAgICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBFTkQgT0YgKFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBiZWhhdmlvciBzaW5jZSAxLjQpXG5cbiAgICByZXR1cm4gdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0TGlzdChjb21wb25lbnRVaWRzLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb21wb25lbnRzID0+XG4gICAgICAgIGZyb20oXG4gICAgICAgICAgY29tcG9uZW50cy5tYXAoXG4gICAgICAgICAgICBjb21wb25lbnQgPT5cbiAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICB1aWQ6IGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICBmcm9tKFxuICAgICAgICAgIGNvbXBvbmVudFVpZHMubWFwKFxuICAgICAgICAgICAgdWlkID0+XG4gICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsKHtcbiAgICAgICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19