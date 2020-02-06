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
var ComponentsEffects = /** @class */ (function () {
    function ComponentsEffects(actions$, cmsComponentLoader, featureConfigService) {
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
            function (actions) { return serializePageContext(actions.payload.pageContext); })), mergeMap((/**
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
                    function (action) { return action.payload.uid; })), actions[0].payload.pageContext);
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
    ComponentsEffects.prototype.loadComponentsEffect = /**
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
             * @param {?} uid
             * @return {?}
             */
            function (uid) {
                return _this.cmsComponentLoader.get(uid, pageContext).pipe(map((/**
                 * @param {?} component
                 * @return {?}
                 */
                function (component) {
                    return new CmsActions.LoadCmsComponentSuccess({
                        component: component,
                        uid: component.uid,
                        pageContext: pageContext,
                    });
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return of(new CmsActions.LoadCmsComponentFail({
                        uid: uid,
                        error: makeErrorSerializable(error),
                        pageContext: pageContext,
                    }));
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
                return new CmsActions.LoadCmsComponentSuccess({
                    component: component,
                    uid: component.uid,
                    pageContext: pageContext,
                });
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
                return new CmsActions.LoadCmsComponentFail({
                    uid: uid,
                    error: makeErrorSerializable(error),
                    pageContext: pageContext,
                });
            })));
        })));
    };
    ComponentsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsComponentConnector },
        { type: FeatureConfigService }
    ]; };
    return ComponentsEffects;
}());
export { ComponentsEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvY29tcG9uZW50cy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHaEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QztJQUVFLDJCQUNVLFFBQWlCLEVBQ2pCLGtCQUF5QyxFQUN6QyxvQkFBMEM7UUFIcEQsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pC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LENBSUUsRUFDTCxDQUNGO1FBVEQsQ0FTQyxFQUNGLEVBQ0QsVUFBVTs7OztRQUFDLFVBQUEsS0FBSztZQUNkLE9BQUEsSUFBSSxDQUNGLGFBQWEsQ0FBQyxHQUFHOzs7O1lBQ2YsVUFBQSxHQUFHO2dCQUNELE9BQUEsSUFBSSxVQUFVLENBQUMsb0JBQW9CLENBQUM7b0JBQ2xDLEdBQUcsS0FBQTtvQkFDSCxLQUFLLEVBQUUscUJBQXFCLENBQUMsS0FBSyxDQUFDO29CQUNuQyxXQUFXLGFBQUE7aUJBQ1osQ0FBQztZQUpGLENBSUUsRUFDTCxDQUNGO1FBVEQsQ0FTQyxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXBHRixVQUFVOzs7O2dCQWhCRixPQUFPO2dCQVlQLHFCQUFxQjtnQkFQckIsb0JBQW9COztJQWdIN0Isd0JBQUM7Q0FBQSxBQXJHRCxJQXFHQztTQXBHWSxpQkFBaUI7Ozs7OztJQU81QiwyQ0FNRTs7SUFFRiwyQ0FxQkU7Ozs7O0lBbENBLHFDQUF5Qjs7Ozs7SUFDekIsK0NBQWlEOzs7OztJQUNqRCxpREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZnJvbSwgbWVyZ2UsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBncm91cEJ5LCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgYnVmZmVyRGVib3VuY2VUaW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9idWZmZXItZGVib3VuY2UtdGltZSc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgd2l0aGRyYXdPbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvd2l0aGRyYXctb24nO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgc2VyaWFsaXplUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlscy9jbXMtdXRpbHMnO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c0VmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zQ29tcG9uZW50TG9hZGVyOiBDbXNDb21wb25lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnU2VydmljZTogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgY29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgQXV0aEFjdGlvbnMuTE9HT1VULFxuICAgICAgQXV0aEFjdGlvbnMuTE9HSU5cbiAgICApXG4gICk7XG5cbiAgbG9hZENvbXBvbmVudCQgPSBjcmVhdGVFZmZlY3QoXG4gICAgKCkgPT4gKHsgc2NoZWR1bGVyLCBkZWJvdW5jZSA9IDAgfSA9IHt9KTogT2JzZXJ2YWJsZTxcbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzczxDbXNDb21wb25lbnQ+XG4gICAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgICA+ID0+XG4gICAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZTxDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQ+KENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UKSxcbiAgICAgICAgZ3JvdXBCeShhY3Rpb25zID0+IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KGFjdGlvbnMucGF5bG9hZC5wYWdlQ29udGV4dCkpLFxuICAgICAgICBtZXJnZU1hcChhY3Rpb25Hcm91cCA9PlxuICAgICAgICAgIGFjdGlvbkdyb3VwLnBpcGUoXG4gICAgICAgICAgICBidWZmZXJEZWJvdW5jZVRpbWUoZGVib3VuY2UsIHNjaGVkdWxlciksXG4gICAgICAgICAgICBtZXJnZU1hcChhY3Rpb25zID0+XG4gICAgICAgICAgICAgIHRoaXMubG9hZENvbXBvbmVudHNFZmZlY3QoXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkLnVpZCksXG4gICAgICAgICAgICAgICAgYWN0aW9uc1swXS5wYXlsb2FkLnBhZ2VDb250ZXh0XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgICAgIClcbiAgKTtcblxuICBwcml2YXRlIGxvYWRDb21wb25lbnRzRWZmZWN0KFxuICAgIGNvbXBvbmVudFVpZHM6IHN0cmluZ1tdLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzczxDbXNDb21wb25lbnQ+XG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsXG4gID4ge1xuICAgIC8vIFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBiZWhhdmlvciBzaW5jZSAxLjRcbiAgICBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS40JykpIHtcbiAgICAgIHJldHVybiBtZXJnZShcbiAgICAgICAgLi4uY29tcG9uZW50VWlkcy5tYXAodWlkID0+XG4gICAgICAgICAgdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0KHVpZCwgcGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAgIGNvbXBvbmVudCA9PlxuICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIHVpZDogY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbCh7XG4gICAgICAgICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIEVORCBPRiAoVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIGJlaGF2aW9yIHNpbmNlIDEuNClcblxuICAgIHJldHVybiB0aGlzLmNtc0NvbXBvbmVudExvYWRlci5nZXRMaXN0KGNvbXBvbmVudFVpZHMsIHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNvbXBvbmVudHMgPT5cbiAgICAgICAgZnJvbShcbiAgICAgICAgICBjb21wb25lbnRzLm1hcChcbiAgICAgICAgICAgIGNvbXBvbmVudCA9PlxuICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHVpZDogY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgIGZyb20oXG4gICAgICAgICAgY29tcG9uZW50VWlkcy5tYXAoXG4gICAgICAgICAgICB1aWQgPT5cbiAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwoe1xuICAgICAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=