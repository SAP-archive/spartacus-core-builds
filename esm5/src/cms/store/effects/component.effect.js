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
import { makeErrorSerializable, serializePageContext, } from '../../../util/serialization-utils';
import { withdrawOn } from '../../../util/withdraw-on';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBR2hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsb0JBQW9CLEdBQ3JCLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QztJQUVFLDBCQUNVLFFBQWlCLEVBQ2pCLGtCQUF5QyxFQUN6QyxvQkFBMEM7UUFIcEQsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFDekMs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QUFDLEtBQUssQ0FBQyxFQUM1QixXQUFXLENBQ1o7WUFKRCxDQUlDLEVBQ0osQ0FDRjtRQVRELENBU0MsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOztnQkFwR0YsVUFBVTs7OztnQkFsQkYsT0FBTztnQkFlUCxxQkFBcUI7Z0JBVnJCLG9CQUFvQjs7SUFrSDdCLHVCQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0FwR1ksZ0JBQWdCOzs7Ozs7SUFPM0IsMENBTUU7O0lBRUYsMENBcUJFOzs7OztJQWxDQSxvQ0FBeUI7Ozs7O0lBQ3pCLDhDQUFpRDs7Ozs7SUFDakQsZ0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgY3JlYXRlRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZyb20sIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZ3JvdXBCeSwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGJ1ZmZlckRlYm91bmNlVGltZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYnVmZmVyLWRlYm91bmNlLXRpbWUnO1xuaW1wb3J0IHtcbiAgbWFrZUVycm9yU2VyaWFsaXphYmxlLFxuICBzZXJpYWxpemVQYWdlQ29udGV4dCxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcbmltcG9ydCB7IENtc0NvbXBvbmVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEVmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zQ29tcG9uZW50TG9hZGVyOiBDbXNDb21wb25lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnU2VydmljZTogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgY29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgQXV0aEFjdGlvbnMuTE9HT1VULFxuICAgICAgQXV0aEFjdGlvbnMuTE9HSU5cbiAgICApXG4gICk7XG5cbiAgbG9hZENvbXBvbmVudCQgPSBjcmVhdGVFZmZlY3QoXG4gICAgKCkgPT4gKHsgc2NoZWR1bGVyLCBkZWJvdW5jZSA9IDAgfSA9IHt9KTogT2JzZXJ2YWJsZTxcbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzczxDbXNDb21wb25lbnQ+XG4gICAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgICA+ID0+XG4gICAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZTxDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQ+KENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UKSxcbiAgICAgICAgZ3JvdXBCeShhY3Rpb25zID0+IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KGFjdGlvbnMucGFnZUNvbnRleHQpKSxcbiAgICAgICAgbWVyZ2VNYXAoYWN0aW9uR3JvdXAgPT5cbiAgICAgICAgICBhY3Rpb25Hcm91cC5waXBlKFxuICAgICAgICAgICAgYnVmZmVyRGVib3VuY2VUaW1lKGRlYm91bmNlLCBzY2hlZHVsZXIpLFxuICAgICAgICAgICAgbWVyZ2VNYXAoYWN0aW9ucyA9PlxuICAgICAgICAgICAgICB0aGlzLmxvYWRDb21wb25lbnRzRWZmZWN0KFxuICAgICAgICAgICAgICAgIGFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgICAgICAgICAgYWN0aW9uc1swXS5wYWdlQ29udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBsb2FkQ29tcG9uZW50c0VmZmVjdChcbiAgICBjb21wb25lbnRVaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8Q21zQ29tcG9uZW50PlxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICA+IHtcbiAgICAvLyBUT0RPOiByZW1vdmUsIGRlcHJlY2F0ZWQgYmVoYXZpb3Igc2luY2UgMS40XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuNCcpKSB7XG4gICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgIC4uLmNvbXBvbmVudFVpZHMubWFwKGNvbXBvbmVudFVpZCA9PlxuICAgICAgICAgIHRoaXMuY21zQ29tcG9uZW50TG9hZGVyLmdldChjb21wb25lbnRVaWQsIHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICBjb21wb25lbnQgPT5cbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsKFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50VWlkLFxuICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBFTkQgT0YgKFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBiZWhhdmlvciBzaW5jZSAxLjQpXG5cbiAgICByZXR1cm4gdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0TGlzdChjb21wb25lbnRVaWRzLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb21wb25lbnRzID0+XG4gICAgICAgIGZyb20oXG4gICAgICAgICAgY29tcG9uZW50cy5tYXAoXG4gICAgICAgICAgICBjb21wb25lbnQgPT5cbiAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRleHRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgZnJvbShcbiAgICAgICAgICBjb21wb25lbnRVaWRzLm1hcChcbiAgICAgICAgICAgIHVpZCA9PlxuICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbChcbiAgICAgICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICBwYWdlQ29udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19