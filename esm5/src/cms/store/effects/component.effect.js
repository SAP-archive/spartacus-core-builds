/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, withLatestFrom, } from 'rxjs/operators';
import { RoutingService } from '../../../routing/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
import { bufferDebounceTime } from '../../../util/buffer-debounce-time';
import { AuthActions } from '../../../auth/store/actions/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { withdrawOn } from '../../../util/withdraw-on';
var ComponentEffects = /** @class */ (function () {
    function ComponentEffects(actions$, cmsComponentLoader, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.routingService = routingService;
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
        { type: RoutingService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN4QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixHQUFHLEVBQ0gsUUFBUSxFQUNSLFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJdkQ7SUFFRSwwQkFDVSxRQUFpQixFQUNqQixrQkFBeUMsRUFDekMsY0FBOEI7UUFIeEMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFDekMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR2hDLHdCQUFtQixHQUV2QixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDM0MsTUFBTTs7OztRQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxLQUFLLFNBQVMsRUFBekIsQ0FBeUIsRUFBQyxFQUNoRCxHQUFHOzs7O1FBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBekIsQ0FBeUIsRUFBQyxDQUM5QyxDQUFDO1FBRU0sbUJBQWMsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzdELE1BQU0sQ0FDSixrQkFBa0IsQ0FBQyxlQUFlLEVBQ2xDLFdBQVcsQ0FBQyxNQUFNLEVBQ2xCLFdBQVcsQ0FBQyxLQUFLLENBQ2xCLENBQ0YsQ0FBQztRQUVGLG1CQUFjLEdBQUcsWUFBWTs7O1FBQzNCOzs7O1FBQU0sVUFBQyxFQUFnQztnQkFBaEMsNEJBQWdDLEVBQTlCLHdCQUFTLEVBQUUsZ0JBQVksRUFBWixpQ0FBWTtZQUk5QixPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQ3JDLEdBQUc7Ozs7WUFBQyxVQUFDLE1BQW1DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM1RCxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQ3ZDLGNBQWMsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsRUFDeEMsUUFBUTs7OztZQUFDLFVBQUMsRUFBNEI7b0JBQTVCLDBCQUE0QixFQUEzQixxQkFBYSxFQUFFLG1CQUFXO2dCQUNuQyxPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO1lBQXJELENBQXFELEVBQ3RELEVBQ0QsVUFBVSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FDaEM7UUFURCxDQVNDLElBQUEsRUFDSixDQUFDO0lBaENDLENBQUM7Ozs7Ozs7SUFrQ0ksK0NBQW9COzs7Ozs7SUFBNUIsVUFDRSxhQUF1QixFQUN2QixXQUF3QjtRQUt4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDckUsU0FBUzs7OztRQUFDLFVBQUEsVUFBVTtZQUNsQixPQUFBLElBQUksQ0FDRixVQUFVLENBQUMsR0FBRzs7OztZQUNaLFVBQUEsU0FBUztnQkFDUCxPQUFBLElBQUksVUFBVSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDO1lBQWhFLENBQWdFLEVBQ25FLENBQ0Y7UUFMRCxDQUtDLEVBQ0YsRUFDRCxVQUFVOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2QsT0FBQSxJQUFJLENBQ0YsYUFBYSxDQUFDLEdBQUc7Ozs7WUFDZixVQUFBLEdBQUc7Z0JBQ0QsT0FBQSxJQUFJLFVBQVUsQ0FBQyxvQkFBb0IsQ0FDakMsR0FBRyxFQUNILHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QjtZQUhELENBR0MsRUFDSixDQUNGO1FBUkQsQ0FRQyxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXBFRixVQUFVOzs7O2dCQXJCRixPQUFPO2dCQVlQLHFCQUFxQjtnQkFGUixjQUFjOztJQWdGcEMsdUJBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQXBFWSxnQkFBZ0I7Ozs7OztJQU8zQiwrQ0FLRTs7Ozs7SUFFRiwwQ0FNRTs7SUFFRiwwQ0FlRTs7Ozs7SUFuQ0Esb0NBQXlCOzs7OztJQUN6Qiw4Q0FBaUQ7Ozs7O0lBQ2pELDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0LCBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGJ1ZmZlckRlYm91bmNlVGltZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYnVmZmVyLWRlYm91bmNlLXRpbWUnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgd2l0aGRyYXdPbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvd2l0aGRyYXctb24nO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEVmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zQ29tcG9uZW50TG9hZGVyOiBDbXNDb21wb25lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgY3VycmVudFBhZ2VDb250ZXh0JDogT2JzZXJ2YWJsZTxcbiAgICBQYWdlQ29udGV4dFxuICA+ID0gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgZmlsdGVyKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlICE9PSB1bmRlZmluZWQpLFxuICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KVxuICApO1xuXG4gIHByaXZhdGUgY29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgQXV0aEFjdGlvbnMuTE9HT1VULFxuICAgICAgQXV0aEFjdGlvbnMuTE9HSU5cbiAgICApXG4gICk7XG5cbiAgbG9hZENvbXBvbmVudCQgPSBjcmVhdGVFZmZlY3QoXG4gICAgKCkgPT4gKHsgc2NoZWR1bGVyLCBkZWJvdW5jZSA9IDAgfSA9IHt9KTogT2JzZXJ2YWJsZTxcbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzczxDbXNDb21wb25lbnQ+XG4gICAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgICA+ID0+XG4gICAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZShDbXNBY3Rpb25zLkxPQURfQ01TX0NPTVBPTkVOVCksXG4gICAgICAgIG1hcCgoYWN0aW9uOiBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgICAgYnVmZmVyRGVib3VuY2VUaW1lKGRlYm91bmNlLCBzY2hlZHVsZXIpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmN1cnJlbnRQYWdlQ29udGV4dCQpLFxuICAgICAgICBtZXJnZU1hcCgoW2NvbXBvbmVudFVpZHMsIHBhZ2VDb250ZXh0XSkgPT5cbiAgICAgICAgICB0aGlzLmxvYWRDb21wb25lbnRzRWZmZWN0KGNvbXBvbmVudFVpZHMsIHBhZ2VDb250ZXh0KVxuICAgICAgICApLFxuICAgICAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBsb2FkQ29tcG9uZW50c0VmZmVjdChcbiAgICBjb21wb25lbnRVaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8Q21zQ29tcG9uZW50PlxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICA+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0TGlzdChjb21wb25lbnRVaWRzLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb21wb25lbnRzID0+XG4gICAgICAgIGZyb20oXG4gICAgICAgICAgY29tcG9uZW50cy5tYXAoXG4gICAgICAgICAgICBjb21wb25lbnQgPT5cbiAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3MoY29tcG9uZW50LCBjb21wb25lbnQudWlkKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgZnJvbShcbiAgICAgICAgICBjb21wb25lbnRVaWRzLm1hcChcbiAgICAgICAgICAgIHVpZCA9PlxuICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbChcbiAgICAgICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19