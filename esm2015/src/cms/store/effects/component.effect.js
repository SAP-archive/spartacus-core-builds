/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ComponentEffects {
    /**
     * @param {?} actions$
     * @param {?} cmsComponentLoader
     * @param {?} routingService
     */
    constructor(actions$, cmsComponentLoader, routingService) {
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.routingService = routingService;
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
    { type: RoutingService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUt2RCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFDM0IsWUFDVSxRQUFpQixFQUNqQixrQkFBeUMsRUFDekMsY0FBOEI7UUFGOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBQ3pDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUdoQyx3QkFBbUIsR0FFdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzNDLE1BQU07Ozs7UUFBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUMsRUFDaEQsR0FBRzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FDOUMsQ0FBQztRQUVNLG1CQUFjLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3RCxNQUFNLENBQ0osa0JBQWtCLENBQUMsZUFBZSxFQUNsQyxXQUFXLENBQUMsTUFBTSxFQUNsQixXQUFXLENBQUMsS0FBSyxDQUNsQixDQUNGLENBQUM7UUFFRixtQkFBYyxHQUFHLFlBQVk7OztRQUMzQixHQUFHLEVBQUU7Ozs7UUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBR3JDLEVBQUUsQ0FDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUNyQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFtQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzVELGtCQUFrQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFDdkMsY0FBYyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUN4QyxRQUFROzs7O1FBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQ3hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLEVBQ3RELEVBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FDaEMsQ0FBQSxFQUNKLENBQUM7SUFoQ0MsQ0FBQzs7Ozs7OztJQWtDSSxvQkFBb0IsQ0FDMUIsYUFBdUIsRUFDdkIsV0FBd0I7UUFLeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3JFLFNBQVM7Ozs7UUFBQyxVQUFVLENBQUMsRUFBRSxDQUNyQixJQUFJLENBQ0YsVUFBVSxDQUFDLEdBQUc7Ozs7UUFDWixTQUFTLENBQUMsRUFBRSxDQUNWLElBQUksVUFBVSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ25FLENBQ0YsRUFDRixFQUNELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixJQUFJLENBQ0YsYUFBYSxDQUFDLEdBQUc7Ozs7UUFDZixHQUFHLENBQUMsRUFBRSxDQUNKLElBQUksVUFBVSxDQUFDLG9CQUFvQixDQUNqQyxHQUFHLEVBQ0gscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLEVBQ0osQ0FDRixFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXBFRixVQUFVOzs7O1lBckJGLE9BQU87WUFZUCxxQkFBcUI7WUFGUixjQUFjOzs7Ozs7O0lBbUJsQywrQ0FLRTs7Ozs7SUFFRiwwQ0FNRTs7SUFFRiwwQ0FlRTs7Ozs7SUFuQ0Esb0NBQXlCOzs7OztJQUN6Qiw4Q0FBaUQ7Ozs7O0lBQ2pELDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0LCBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGJ1ZmZlckRlYm91bmNlVGltZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYnVmZmVyLWRlYm91bmNlLXRpbWUnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgd2l0aGRyYXdPbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvd2l0aGRyYXctb24nO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEVmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zQ29tcG9uZW50TG9hZGVyOiBDbXNDb21wb25lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgY3VycmVudFBhZ2VDb250ZXh0JDogT2JzZXJ2YWJsZTxcbiAgICBQYWdlQ29udGV4dFxuICA+ID0gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgZmlsdGVyKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlICE9PSB1bmRlZmluZWQpLFxuICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KVxuICApO1xuXG4gIHByaXZhdGUgY29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgQXV0aEFjdGlvbnMuTE9HT1VULFxuICAgICAgQXV0aEFjdGlvbnMuTE9HSU5cbiAgICApXG4gICk7XG5cbiAgbG9hZENvbXBvbmVudCQgPSBjcmVhdGVFZmZlY3QoXG4gICAgKCkgPT4gKHsgc2NoZWR1bGVyLCBkZWJvdW5jZSA9IDAgfSA9IHt9KTogT2JzZXJ2YWJsZTxcbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzczxDbXNDb21wb25lbnQ+XG4gICAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgICA+ID0+XG4gICAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZShDbXNBY3Rpb25zLkxPQURfQ01TX0NPTVBPTkVOVCksXG4gICAgICAgIG1hcCgoYWN0aW9uOiBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgICAgYnVmZmVyRGVib3VuY2VUaW1lKGRlYm91bmNlLCBzY2hlZHVsZXIpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmN1cnJlbnRQYWdlQ29udGV4dCQpLFxuICAgICAgICBtZXJnZU1hcCgoW2NvbXBvbmVudFVpZHMsIHBhZ2VDb250ZXh0XSkgPT5cbiAgICAgICAgICB0aGlzLmxvYWRDb21wb25lbnRzRWZmZWN0KGNvbXBvbmVudFVpZHMsIHBhZ2VDb250ZXh0KVxuICAgICAgICApLFxuICAgICAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBsb2FkQ29tcG9uZW50c0VmZmVjdChcbiAgICBjb21wb25lbnRVaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8Q21zQ29tcG9uZW50PlxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICA+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0TGlzdChjb21wb25lbnRVaWRzLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb21wb25lbnRzID0+XG4gICAgICAgIGZyb20oXG4gICAgICAgICAgY29tcG9uZW50cy5tYXAoXG4gICAgICAgICAgICBjb21wb25lbnQgPT5cbiAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3MoY29tcG9uZW50LCBjb21wb25lbnQudWlkKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgZnJvbShcbiAgICAgICAgICBjb21wb25lbnRVaWRzLm1hcChcbiAgICAgICAgICAgIHVpZCA9PlxuICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbChcbiAgICAgICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19