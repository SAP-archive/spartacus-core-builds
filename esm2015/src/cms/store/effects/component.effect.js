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
export class ComponentEffects {
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
        actions => serializePageContext(actions.pageContext))), mergeMap((/**
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
        action => action.payload)), actions[0].pageContext)))))), withdrawOn(this.contextChange$)))));
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
            component => new CmsActions.LoadCmsComponentSuccess(component, component.uid, pageContext))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CmsActions.LoadCmsComponentFail(componentUid, makeErrorSerializable(error), pageContext))))))));
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
        component => new CmsActions.LoadCmsComponentSuccess(component, component.uid, pageContext)))))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => from(componentUids.map((/**
         * @param {?} uid
         * @return {?}
         */
        uid => new CmsActions.LoadCmsComponentFail(uid, makeErrorSerializable(error), pageContext)))))));
    }
}
ComponentEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector },
    { type: FeatureConfigService }
];
if (false) {
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
    ComponentEffects.prototype.featureConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHaEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc5QyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFDM0IsWUFDVSxRQUFpQixFQUNqQixrQkFBeUMsRUFDekMsb0JBQTBDO1FBRjFDLGFBQVEsR0FBUixRQUFRLENB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QWhCRixPQUFPO1lBWVAscUJBQXFCO1lBUHJCLG9CQUFvQjs7Ozs7OztJQW1CM0IsMENBTUU7O0lBRUYsMENBcUJFOzs7OztJQWxDQSxvQ0FBeUI7Ozs7O0lBQ3pCLDhDQUFpRDs7Ozs7SUFDakQsZ0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgY3JlYXRlRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZyb20sIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZ3JvdXBCeSwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGJ1ZmZlckRlYm91bmNlVGltZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYnVmZmVyLWRlYm91bmNlLXRpbWUnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcbmltcG9ydCB7IENtc0NvbXBvbmVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IHNlcmlhbGl6ZVBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY21zLXV0aWxzJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEVmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zQ29tcG9uZW50TG9hZGVyOiBDbXNDb21wb25lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnU2VydmljZTogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgY29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgQXV0aEFjdGlvbnMuTE9HT1VULFxuICAgICAgQXV0aEFjdGlvbnMuTE9HSU5cbiAgICApXG4gICk7XG5cbiAgbG9hZENvbXBvbmVudCQgPSBjcmVhdGVFZmZlY3QoXG4gICAgKCkgPT4gKHsgc2NoZWR1bGVyLCBkZWJvdW5jZSA9IDAgfSA9IHt9KTogT2JzZXJ2YWJsZTxcbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzczxDbXNDb21wb25lbnQ+XG4gICAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgICA+ID0+XG4gICAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZTxDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQ+KENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UKSxcbiAgICAgICAgZ3JvdXBCeShhY3Rpb25zID0+IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KGFjdGlvbnMucGFnZUNvbnRleHQpKSxcbiAgICAgICAgbWVyZ2VNYXAoYWN0aW9uR3JvdXAgPT5cbiAgICAgICAgICBhY3Rpb25Hcm91cC5waXBlKFxuICAgICAgICAgICAgYnVmZmVyRGVib3VuY2VUaW1lKGRlYm91bmNlLCBzY2hlZHVsZXIpLFxuICAgICAgICAgICAgbWVyZ2VNYXAoYWN0aW9ucyA9PlxuICAgICAgICAgICAgICB0aGlzLmxvYWRDb21wb25lbnRzRWZmZWN0KFxuICAgICAgICAgICAgICAgIGFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgICAgICAgICAgYWN0aW9uc1swXS5wYWdlQ29udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBsb2FkQ29tcG9uZW50c0VmZmVjdChcbiAgICBjb21wb25lbnRVaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8Q21zQ29tcG9uZW50PlxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICA+IHtcbiAgICAvLyBUT0RPOiByZW1vdmUsIGRlcHJlY2F0ZWQgYmVoYXZpb3Igc2luY2UgMS40XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuNCcpKSB7XG4gICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgIC4uLmNvbXBvbmVudFVpZHMubWFwKGNvbXBvbmVudFVpZCA9PlxuICAgICAgICAgIHRoaXMuY21zQ29tcG9uZW50TG9hZGVyLmdldChjb21wb25lbnRVaWQsIHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICBjb21wb25lbnQgPT5cbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsKFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50VWlkLFxuICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBFTkQgT0YgKFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBiZWhhdmlvciBzaW5jZSAxLjQpXG5cbiAgICByZXR1cm4gdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0TGlzdChjb21wb25lbnRVaWRzLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb21wb25lbnRzID0+XG4gICAgICAgIGZyb20oXG4gICAgICAgICAgY29tcG9uZW50cy5tYXAoXG4gICAgICAgICAgICBjb21wb25lbnQgPT5cbiAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRleHRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgZnJvbShcbiAgICAgICAgICBjb21wb25lbnRVaWRzLm1hcChcbiAgICAgICAgICAgIHVpZCA9PlxuICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbChcbiAgICAgICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICBwYWdlQ29udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19