/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ComponentEffects = /** @class */ (function () {
    function ComponentEffects(actions$, cmsComponentLoader, featureConfigService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.featureConfigService = featureConfigService;
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN));
        this.loadComponent$ = createEffect((/**
         * @return {?}
         */
        function () { return (/**
         * @param {?=} __0
         * @return {?}
         */
        function (_a) {
            var _b = _a === void 0 ? {} : _a, scheduler = _b.scheduler, _c = _b.debounce, debounce = _c === void 0 ? 0 : _c;
            return _this.actions$.pipe(ofType(CmsActions.LOAD_CMS_COMPONENT), groupBy((/**
             * @param {?} actions
             * @return {?}
             */
            function (actions) { return serializePageContext(actions.pageContext); })), mergeMap((/**
             * @param {?} actionGroup
             * @return {?}
             */
            function (actionGroup) {
                return actionGroup.pipe(bufferDebounceTime(debounce, scheduler), mergeMap((/**
                 * @param {?} actions
                 * @return {?}
                 */
                function (actions) {
                    return _this.loadComponentsEffect(actions.map((/**
                     * @param {?} action
                     * @return {?}
                     */
                    function (action) { return action.payload; })), actions[0].pageContext);
                })));
            })), withdrawOn(_this.contextChange$));
        }); }));
    }
    /**
     * @private
     * @param {?} componentUids
     * @param {?} pageContext
     * @return {?}
     */
    ComponentEffects.prototype.loadComponentsEffect = /**
     * @private
     * @param {?} componentUids
     * @param {?} pageContext
     * @return {?}
     */
    function (componentUids, pageContext) {
        var _this = this;
        // TODO: remove, deprecated behavior since 1.4
        if (!this.featureConfigService.isLevel('1.4')) {
            return merge.apply(void 0, tslib_1.__spread(componentUids.map((/**
             * @param {?} componentUid
             * @return {?}
             */
            function (componentUid) {
                return _this.cmsComponentLoader.get(componentUid, pageContext).pipe(map((/**
                 * @param {?} component
                 * @return {?}
                 */
                function (component) {
                    return new CmsActions.LoadCmsComponentSuccess(component, component.uid, pageContext);
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return of(new CmsActions.LoadCmsComponentFail(componentUid, makeErrorSerializable(error), pageContext));
                })));
            }))));
        }
        // END OF (TODO: remove, deprecated behavior since 1.4)
        return this.cmsComponentLoader.getList(componentUids, pageContext).pipe(switchMap((/**
         * @param {?} components
         * @return {?}
         */
        function (components) {
            return from(components.map((/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
                return new CmsActions.LoadCmsComponentSuccess(component, component.uid, pageContext);
            })));
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return from(componentUids.map((/**
             * @param {?} uid
             * @return {?}
             */
            function (uid) {
                return new CmsActions.LoadCmsComponentFail(uid, makeErrorSerializable(error), pageContext);
            })));
        })));
    };
    ComponentEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsComponentConnector },
        { type: FeatureConfigService }
    ]; };
    return ComponentEffects;
}());
export { ComponentEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBR2hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUM7SUFFRSwwQkFDVSxRQUFpQixFQUNqQixrQkFBeUMsRUFDekMsb0JBQTBDO1FBSHBELGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1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b0JBQW9CLENBQ2pDLEdBQUcsRUFDSCxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFDNUIsV0FBVyxDQUNaO1lBSkQsQ0FJQyxFQUNKLENBQ0Y7UUFURCxDQVNDLEVBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBcEdGLFVBQVU7Ozs7Z0JBaEJGLE9BQU87Z0JBWVAscUJBQXFCO2dCQVByQixvQkFBb0I7O0lBZ0g3Qix1QkFBQztDQUFBLEFBckdELElBcUdDO1NBcEdZLGdCQUFnQjs7Ozs7O0lBTzNCLDBDQU1FOztJQUVGLDBDQXFCRTs7Ozs7SUFsQ0Esb0NBQXlCOzs7OztJQUN6Qiw4Q0FBaUQ7Ozs7O0lBQ2pELGdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGdyb3VwQnksIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBidWZmZXJEZWJvdW5jZVRpbWUgfSBmcm9tICcuLi8uLi8uLi91dGlsL2J1ZmZlci1kZWJvdW5jZS10aW1lJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBzZXJpYWxpemVQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxzL2Ntcy11dGlscyc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc0NvbXBvbmVudExvYWRlcjogQ21zQ29tcG9uZW50Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZ1NlcnZpY2U6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGNvbnRleHRDaGFuZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR09VVCxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR0lOXG4gICAgKVxuICApO1xuXG4gIGxvYWRDb21wb25lbnQkID0gY3JlYXRlRWZmZWN0KFxuICAgICgpID0+ICh7IHNjaGVkdWxlciwgZGVib3VuY2UgPSAwIH0gPSB7fSk6IE9ic2VydmFibGU8XG4gICAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8Q21zQ29tcG9uZW50PlxuICAgICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsXG4gICAgPiA9PlxuICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGU8Q21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50PihDbXNBY3Rpb25zLkxPQURfQ01TX0NPTVBPTkVOVCksXG4gICAgICAgIGdyb3VwQnkoYWN0aW9ucyA9PiBzZXJpYWxpemVQYWdlQ29udGV4dChhY3Rpb25zLnBhZ2VDb250ZXh0KSksXG4gICAgICAgIG1lcmdlTWFwKGFjdGlvbkdyb3VwID0+XG4gICAgICAgICAgYWN0aW9uR3JvdXAucGlwZShcbiAgICAgICAgICAgIGJ1ZmZlckRlYm91bmNlVGltZShkZWJvdW5jZSwgc2NoZWR1bGVyKSxcbiAgICAgICAgICAgIG1lcmdlTWFwKGFjdGlvbnMgPT5cbiAgICAgICAgICAgICAgdGhpcy5sb2FkQ29tcG9uZW50c0VmZmVjdChcbiAgICAgICAgICAgICAgICBhY3Rpb25zLm1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgICAgICAgICAgICAgIGFjdGlvbnNbMF0ucGFnZUNvbnRleHRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICAgICAgKVxuICApO1xuXG4gIHByaXZhdGUgbG9hZENvbXBvbmVudHNFZmZlY3QoXG4gICAgY29tcG9uZW50VWlkczogc3RyaW5nW10sXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8XG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD5cbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgPiB7XG4gICAgLy8gVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIGJlaGF2aW9yIHNpbmNlIDEuNFxuICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjQnKSkge1xuICAgICAgcmV0dXJuIG1lcmdlKFxuICAgICAgICAuLi5jb21wb25lbnRVaWRzLm1hcChjb21wb25lbnRVaWQgPT5cbiAgICAgICAgICB0aGlzLmNtc0NvbXBvbmVudExvYWRlci5nZXQoY29tcG9uZW50VWlkLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICAgY29tcG9uZW50ID0+XG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQudWlkLFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbChcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFVpZCxcbiAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gRU5EIE9GIChUT0RPOiByZW1vdmUsIGRlcHJlY2F0ZWQgYmVoYXZpb3Igc2luY2UgMS40KVxuXG4gICAgcmV0dXJuIHRoaXMuY21zQ29tcG9uZW50TG9hZGVyLmdldExpc3QoY29tcG9uZW50VWlkcywgcGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY29tcG9uZW50cyA9PlxuICAgICAgICBmcm9tKFxuICAgICAgICAgIGNvbXBvbmVudHMubWFwKFxuICAgICAgICAgICAgY29tcG9uZW50ID0+XG4gICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzKFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQudWlkLFxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgIGZyb20oXG4gICAgICAgICAgY29tcG9uZW50VWlkcy5tYXAoXG4gICAgICAgICAgICB1aWQgPT5cbiAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwoXG4gICAgICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRleHRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==