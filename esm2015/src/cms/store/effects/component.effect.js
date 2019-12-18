/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, merge, of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, withLatestFrom, } from 'rxjs/operators';
import { RoutingService } from '../../../routing/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
import { bufferDebounceTime } from '../../../util/buffer-debounce-time';
import { AuthActions } from '../../../auth/store/actions/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { withdrawOn } from '../../../util/withdraw-on';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
export class ComponentEffects {
    /**
     * @param {?} actions$
     * @param {?} cmsComponentLoader
     * @param {?} routingService
     * @param {?} featureConfigService
     */
    constructor(actions$, cmsComponentLoader, routingService, featureConfigService) {
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.routingService = routingService;
        this.featureConfigService = featureConfigService;
        this.currentPageContext$ = this.routingService.getRouterState().pipe(filter((/**
         * @param {?} routerState
         * @return {?}
         */
        routerState => routerState !== undefined)), map((/**
         * @param {?} routerState
         * @return {?}
         */
        routerState => routerState.state.context)));
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN));
        this.loadComponent$ = createEffect((/**
         * @return {?}
         */
        () => (/**
         * @param {?=} __0
         * @return {?}
         */
        ({ scheduler, debounce = 0 } = {}) => this.actions$.pipe(ofType(CmsActions.LOAD_CMS_COMPONENT), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), bufferDebounceTime(debounce, scheduler), withLatestFrom(this.currentPageContext$), mergeMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([componentUids, pageContext]) => this.loadComponentsEffect(componentUids, pageContext))), withdrawOn(this.contextChange$)))));
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
             * @param {?} componentUid
             * @return {?}
             */
            componentUid => this.cmsComponentLoader.get(componentUid, pageContext).pipe(map((/**
             * @param {?} component
             * @return {?}
             */
            component => new CmsActions.LoadCmsComponentSuccess(component, component.uid))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CmsActions.LoadCmsComponentFail(componentUid, makeErrorSerializable(error)))))))));
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
        component => new CmsActions.LoadCmsComponentSuccess(component, component.uid)))))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => from(componentUids.map((/**
         * @param {?} uid
         * @return {?}
         */
        uid => new CmsActions.LoadCmsComponentFail(uid, makeErrorSerializable(error))))))));
    }
}
ComponentEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector },
    { type: RoutingService },
    { type: FeatureConfigService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.currentPageContext$;
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.contextChange$;
    /** @type {?} */
    ComponentEffects.prototype.loadComponent$;
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.cmsComponentLoader;
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.featureConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBR2hHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7SUFDM0IsWUFDVSxRQUFpQixFQUNqQixrQkFBeUMsRUFDekMsY0FBOEIsRUFDOUIsb0JBQTBDO1FB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Q0FBQyxvQkFBb0IsQ0FDakMsR0FBRyxFQUNILHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixFQUNKLENBQ0YsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7WUE1RkYsVUFBVTs7OztZQXRCRixPQUFPO1lBWVAscUJBQXFCO1lBRlIsY0FBYztZQVUzQixvQkFBb0I7Ozs7Ozs7SUFXM0IsK0NBS0U7Ozs7O0lBRUYsMENBTUU7O0lBRUYsMENBZUU7Ozs7O0lBcENBLG9DQUF5Qjs7Ozs7SUFDekIsOENBQWlEOzs7OztJQUNqRCwwQ0FBc0M7Ozs7O0lBQ3RDLGdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBmcm9tLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgYnVmZmVyRGVib3VuY2VUaW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9idWZmZXItZGVib3VuY2UtdGltZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc0NvbXBvbmVudExvYWRlcjogQ21zQ29tcG9uZW50Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZ1NlcnZpY2U6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGN1cnJlbnRQYWdlQ29udGV4dCQ6IE9ic2VydmFibGU8XG4gICAgUGFnZUNvbnRleHRcbiAgPiA9IHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgIGZpbHRlcihyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZSAhPT0gdW5kZWZpbmVkKSxcbiAgICBtYXAocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUuc3RhdGUuY29udGV4dClcbiAgKTtcblxuICBwcml2YXRlIGNvbnRleHRDaGFuZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR09VVCxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR0lOXG4gICAgKVxuICApO1xuXG4gIGxvYWRDb21wb25lbnQkID0gY3JlYXRlRWZmZWN0KFxuICAgICgpID0+ICh7IHNjaGVkdWxlciwgZGVib3VuY2UgPSAwIH0gPSB7fSk6IE9ic2VydmFibGU8XG4gICAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8Q21zQ29tcG9uZW50PlxuICAgICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsXG4gICAgPiA9PlxuICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlQpLFxuICAgICAgICBtYXAoKGFjdGlvbjogQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgIGJ1ZmZlckRlYm91bmNlVGltZShkZWJvdW5jZSwgc2NoZWR1bGVyKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5jdXJyZW50UGFnZUNvbnRleHQkKSxcbiAgICAgICAgbWVyZ2VNYXAoKFtjb21wb25lbnRVaWRzLCBwYWdlQ29udGV4dF0pID0+XG4gICAgICAgICAgdGhpcy5sb2FkQ29tcG9uZW50c0VmZmVjdChjb21wb25lbnRVaWRzLCBwYWdlQ29udGV4dClcbiAgICAgICAgKSxcbiAgICAgICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICAgICAgKVxuICApO1xuXG4gIHByaXZhdGUgbG9hZENvbXBvbmVudHNFZmZlY3QoXG4gICAgY29tcG9uZW50VWlkczogc3RyaW5nW10sXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8XG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD5cbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgPiB7XG4gICAgLy8gVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIGJlaGF2aW9yIHNpbmNlIDEuNFxuICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjQnKSkge1xuICAgICAgcmV0dXJuIG1lcmdlKFxuICAgICAgICAuLi5jb21wb25lbnRVaWRzLm1hcChjb21wb25lbnRVaWQgPT5cbiAgICAgICAgICB0aGlzLmNtc0NvbXBvbmVudExvYWRlci5nZXQoY29tcG9uZW50VWlkLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICAgY29tcG9uZW50ID0+XG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3MoY29tcG9uZW50LCBjb21wb25lbnQudWlkKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwoXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRVaWQsXG4gICAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBFTkQgT0YgKFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBiZWhhdmlvciBzaW5jZSAxLjQpXG5cbiAgICByZXR1cm4gdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0TGlzdChjb21wb25lbnRVaWRzLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb21wb25lbnRzID0+XG4gICAgICAgIGZyb20oXG4gICAgICAgICAgY29tcG9uZW50cy5tYXAoXG4gICAgICAgICAgICBjb21wb25lbnQgPT5cbiAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3MoY29tcG9uZW50LCBjb21wb25lbnQudWlkKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgZnJvbShcbiAgICAgICAgICBjb21wb25lbnRVaWRzLm1hcChcbiAgICAgICAgICAgIHVpZCA9PlxuICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbChcbiAgICAgICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19