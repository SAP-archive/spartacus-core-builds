/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ComponentEffects = /** @class */ (function () {
    function ComponentEffects(actions$, cmsComponentLoader, routingService, featureConfigService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.routingService = routingService;
        this.featureConfigService = featureConfigService;
        this.currentPageContext$ = this.routingService.getRouterState().pipe(filter((/**
         * @param {?} routerState
         * @return {?}
         */
        function (routerState) { return routerState !== undefined; })), map((/**
         * @param {?} routerState
         * @return {?}
         */
        function (routerState) { return routerState.state.context; })));
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
            return _this.actions$.pipe(ofType(CmsActions.LOAD_CMS_COMPONENT), map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), bufferDebounceTime(debounce, scheduler), withLatestFrom(_this.currentPageContext$), mergeMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), componentUids = _b[0], pageContext = _b[1];
                return _this.loadComponentsEffect(componentUids, pageContext);
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
                    return new CmsActions.LoadCmsComponentSuccess(component, component.uid);
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return of(new CmsActions.LoadCmsComponentFail(componentUid, makeErrorSerializable(error)));
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
                return new CmsActions.LoadCmsComponentSuccess(component, component.uid);
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
                return new CmsActions.LoadCmsComponentFail(uid, makeErrorSerializable(error));
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
        { type: RoutingService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUd2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUVoRztJQUVFLDBCQUNVLFFBQWlCLEVBQ2pCLGtCQUF5QyxFQUN6QyxjQUE4QixFQUM5QixvQkFBMEM7UUFKcEQsaUJBS0k7UUFKTSxhQUFRLEdB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LENBQ0Y7UUFMRCxDQUtDLEVBQ0YsRUFDRCxVQUFVOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2QsT0FBQSxJQUFJLENBQ0YsYUFBYSxDQUFDLEdBQUc7Ozs7WUFDZixVQUFBLEdBQUc7Z0JBQ0QsT0FBQSxJQUFJLFVBQVUsQ0FBQyxvQkFBb0IsQ0FDakMsR0FBRyxFQUNILHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QjtZQUhELENBR0MsRUFDSixDQUNGO1FBUkQsQ0FRQyxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQTVGRixVQUFVOzs7O2dCQXRCRixPQUFPO2dCQVlQLHFCQUFxQjtnQkFGUixjQUFjO2dCQVUzQixvQkFBb0I7O0lBK0Y3Qix1QkFBQztDQUFBLEFBN0ZELElBNkZDO1NBNUZZLGdCQUFnQjs7Ozs7O0lBUTNCLCtDQUtFOzs7OztJQUVGLDBDQU1FOztJQUVGLDBDQWVFOzs7OztJQXBDQSxvQ0FBeUI7Ozs7O0lBQ3pCLDhDQUFpRDs7Ozs7SUFDakQsMENBQXNDOzs7OztJQUN0QyxnREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgZnJvbSwgbWVyZ2UsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0LCBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGJ1ZmZlckRlYm91bmNlVGltZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYnVmZmVyLWRlYm91bmNlLXRpbWUnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgd2l0aGRyYXdPbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvd2l0aGRyYXctb24nO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRMb2FkZXI6IENtc0NvbXBvbmVudENvbm5lY3RvcixcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWdTZXJ2aWNlOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBjdXJyZW50UGFnZUNvbnRleHQkOiBPYnNlcnZhYmxlPFxuICAgIFBhZ2VDb250ZXh0XG4gID4gPSB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICBmaWx0ZXIocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUgIT09IHVuZGVmaW5lZCksXG4gICAgbWFwKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlLnN0YXRlLmNvbnRleHQpXG4gICk7XG5cbiAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dPVVQsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dJTlxuICAgIClcbiAgKTtcblxuICBsb2FkQ29tcG9uZW50JCA9IGNyZWF0ZUVmZmVjdChcbiAgICAoKSA9PiAoeyBzY2hlZHVsZXIsIGRlYm91bmNlID0gMCB9ID0ge30pOiBPYnNlcnZhYmxlPFxuICAgICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD5cbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICAgID4gPT5cbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlKENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UKSxcbiAgICAgICAgbWFwKChhY3Rpb246IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgICAgICBidWZmZXJEZWJvdW5jZVRpbWUoZGVib3VuY2UsIHNjaGVkdWxlciksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuY3VycmVudFBhZ2VDb250ZXh0JCksXG4gICAgICAgIG1lcmdlTWFwKChbY29tcG9uZW50VWlkcywgcGFnZUNvbnRleHRdKSA9PlxuICAgICAgICAgIHRoaXMubG9hZENvbXBvbmVudHNFZmZlY3QoY29tcG9uZW50VWlkcywgcGFnZUNvbnRleHQpXG4gICAgICAgICksXG4gICAgICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgICAgIClcbiAgKTtcblxuICBwcml2YXRlIGxvYWRDb21wb25lbnRzRWZmZWN0KFxuICAgIGNvbXBvbmVudFVpZHM6IHN0cmluZ1tdLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzczxDbXNDb21wb25lbnQ+XG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsXG4gID4ge1xuICAgIC8vIFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBiZWhhdmlvciBzaW5jZSAxLjRcbiAgICBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS40JykpIHtcbiAgICAgIHJldHVybiBtZXJnZShcbiAgICAgICAgLi4uY29tcG9uZW50VWlkcy5tYXAoY29tcG9uZW50VWlkID0+XG4gICAgICAgICAgdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0KGNvbXBvbmVudFVpZCwgcGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAgIGNvbXBvbmVudCA9PlxuICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzKGNvbXBvbmVudCwgY29tcG9uZW50LnVpZClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsKFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50VWlkLFxuICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gRU5EIE9GIChUT0RPOiByZW1vdmUsIGRlcHJlY2F0ZWQgYmVoYXZpb3Igc2luY2UgMS40KVxuXG4gICAgcmV0dXJuIHRoaXMuY21zQ29tcG9uZW50TG9hZGVyLmdldExpc3QoY29tcG9uZW50VWlkcywgcGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY29tcG9uZW50cyA9PlxuICAgICAgICBmcm9tKFxuICAgICAgICAgIGNvbXBvbmVudHMubWFwKFxuICAgICAgICAgICAgY29tcG9uZW50ID0+XG4gICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzKGNvbXBvbmVudCwgY29tcG9uZW50LnVpZClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgIGZyb20oXG4gICAgICAgICAgY29tcG9uZW50VWlkcy5tYXAoXG4gICAgICAgICAgICB1aWQgPT5cbiAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwoXG4gICAgICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==