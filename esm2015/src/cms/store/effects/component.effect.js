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
import { makeErrorSerializable, serializePageContext, } from '../../../util/serialization-utils';
import { withdrawOn } from '../../../util/withdraw-on';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHaEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixvQkFBb0IsR0FDckIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQUMzQixZQUNVLFFBQWlCLEVBQ2pCLGtCQUF5QyxFQUN6QyxvQkFBMEM7UUFGMUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENB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QW9COzs7Ozs7O0lBcUIzQiwwQ0FNRTs7SUFFRiwwQ0FxQkU7Ozs7O0lBbENBLG9DQUF5Qjs7Ozs7SUFDekIsOENBQWlEOzs7OztJQUNqRCxnREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZnJvbSwgbWVyZ2UsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBncm91cEJ5LCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgYnVmZmVyRGVib3VuY2VUaW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9idWZmZXItZGVib3VuY2UtdGltZSc7XG5pbXBvcnQge1xuICBtYWtlRXJyb3JTZXJpYWxpemFibGUsXG4gIHNlcmlhbGl6ZVBhZ2VDb250ZXh0LFxufSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgd2l0aGRyYXdPbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvd2l0aGRyYXctb24nO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRMb2FkZXI6IENtc0NvbXBvbmVudENvbm5lY3RvcixcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWdTZXJ2aWNlOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dPVVQsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dJTlxuICAgIClcbiAgKTtcblxuICBsb2FkQ29tcG9uZW50JCA9IGNyZWF0ZUVmZmVjdChcbiAgICAoKSA9PiAoeyBzY2hlZHVsZXIsIGRlYm91bmNlID0gMCB9ID0ge30pOiBPYnNlcnZhYmxlPFxuICAgICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD5cbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICAgID4gPT5cbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlPENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudD4oQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlQpLFxuICAgICAgICBncm91cEJ5KGFjdGlvbnMgPT4gc2VyaWFsaXplUGFnZUNvbnRleHQoYWN0aW9ucy5wYWdlQ29udGV4dCkpLFxuICAgICAgICBtZXJnZU1hcChhY3Rpb25Hcm91cCA9PlxuICAgICAgICAgIGFjdGlvbkdyb3VwLnBpcGUoXG4gICAgICAgICAgICBidWZmZXJEZWJvdW5jZVRpbWUoZGVib3VuY2UsIHNjaGVkdWxlciksXG4gICAgICAgICAgICBtZXJnZU1hcChhY3Rpb25zID0+XG4gICAgICAgICAgICAgIHRoaXMubG9hZENvbXBvbmVudHNFZmZlY3QoXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgICAgICAgICAgICBhY3Rpb25zWzBdLnBhZ2VDb250ZXh0XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgICAgIClcbiAgKTtcblxuICBwcml2YXRlIGxvYWRDb21wb25lbnRzRWZmZWN0KFxuICAgIGNvbXBvbmVudFVpZHM6IHN0cmluZ1tdLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzczxDbXNDb21wb25lbnQ+XG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsXG4gID4ge1xuICAgIC8vIFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBiZWhhdmlvciBzaW5jZSAxLjRcbiAgICBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS40JykpIHtcbiAgICAgIHJldHVybiBtZXJnZShcbiAgICAgICAgLi4uY29tcG9uZW50VWlkcy5tYXAoY29tcG9uZW50VWlkID0+XG4gICAgICAgICAgdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0KGNvbXBvbmVudFVpZCwgcGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAgIGNvbXBvbmVudCA9PlxuICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwoXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRVaWQsXG4gICAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIEVORCBPRiAoVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIGJlaGF2aW9yIHNpbmNlIDEuNClcblxuICAgIHJldHVybiB0aGlzLmNtc0NvbXBvbmVudExvYWRlci5nZXRMaXN0KGNvbXBvbmVudFVpZHMsIHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNvbXBvbmVudHMgPT5cbiAgICAgICAgZnJvbShcbiAgICAgICAgICBjb21wb25lbnRzLm1hcChcbiAgICAgICAgICAgIGNvbXBvbmVudCA9PlxuICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzcyhcbiAgICAgICAgICAgICAgICBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgICAgICBwYWdlQ29udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICBmcm9tKFxuICAgICAgICAgIGNvbXBvbmVudFVpZHMubWFwKFxuICAgICAgICAgICAgdWlkID0+XG4gICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsKFxuICAgICAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=