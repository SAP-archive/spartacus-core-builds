import { __decorate, __read, __spread } from "tslib";
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
        this.loadComponent$ = createEffect(function () { return function (_a) {
            var _b = _a === void 0 ? {} : _a, scheduler = _b.scheduler, _c = _b.debounce, debounce = _c === void 0 ? 0 : _c;
            return _this.actions$.pipe(ofType(CmsActions.LOAD_CMS_COMPONENT), groupBy(function (actions) { return serializePageContext(actions.payload.pageContext); }), mergeMap(function (actionGroup) {
                return actionGroup.pipe(bufferDebounceTime(debounce, scheduler), mergeMap(function (actions) {
                    return _this.loadComponentsEffect(actions.map(function (action) { return action.payload.uid; }), actions[0].payload.pageContext);
                }));
            }), withdrawOn(_this.contextChange$));
        }; });
    }
    ComponentsEffects.prototype.loadComponentsEffect = function (componentUids, pageContext) {
        var _this = this;
        // TODO: remove, deprecated behavior since 1.4
        if (!this.featureConfigService.isLevel('1.4')) {
            return merge.apply(void 0, __spread(componentUids.map(function (uid) {
                return _this.cmsComponentLoader.get(uid, pageContext).pipe(map(function (component) {
                    return new CmsActions.LoadCmsComponentSuccess({
                        component: component,
                        uid: component.uid,
                        pageContext: pageContext,
                    });
                }), catchError(function (error) {
                    return of(new CmsActions.LoadCmsComponentFail({
                        uid: uid,
                        error: makeErrorSerializable(error),
                        pageContext: pageContext,
                    }));
                }));
            })));
        }
        // END OF (TODO: remove, deprecated behavior since 1.4)
        return this.cmsComponentLoader.getList(componentUids, pageContext).pipe(switchMap(function (components) {
            return from(components.map(function (component) {
                return new CmsActions.LoadCmsComponentSuccess({
                    component: component,
                    uid: component.uid,
                    pageContext: pageContext,
                });
            }));
        }), catchError(function (error) {
            return from(componentUids.map(function (uid) {
                return new CmsActions.LoadCmsComponentFail({
                    uid: uid,
                    error: makeErrorSerializable(error),
                    pageContext: pageContext,
                });
            }));
        }));
    };
    ComponentsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsComponentConnector },
        { type: FeatureConfigService }
    ]; };
    ComponentsEffects = __decorate([
        Injectable()
    ], ComponentsEffects);
    return ComponentsEffects;
}());
export { ComponentsEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvY29tcG9uZW50cy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUdoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDO0lBQ0UsMkJBQ1UsUUFBaUIsRUFDakIsa0JBQXlDLEVBQ3pDLG9CQUEwQztRQUhwRCxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsdUJB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VSxDQUFDLFVBQUEsS0FBSztZQUNkLE9BQUEsSUFBSSxDQUNGLGFBQWEsQ0FBQyxHQUFHLENBQ2YsVUFBQSxHQUFHO2dCQUNELE9BQUEsSUFBSSxVQUFVLENBQUMsb0JBQW9CLENBQUM7b0JBQ2xDLEdBQUcsS0FBQTtvQkFDSCxLQUFLLEVBQUUscUJBQXFCLENBQUMsS0FBSyxDQUFDO29CQUNuQyxXQUFXLGFBQUE7aUJBQ1osQ0FBQztZQUpGLENBSUUsQ0FDTCxDQUNGO1FBVEQsQ0FTQyxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWpHbUIsT0FBTztnQkFDRyxxQkFBcUI7Z0JBQ25CLG9CQUFvQjs7SUFKekMsaUJBQWlCO1FBRDdCLFVBQVUsRUFBRTtPQUNBLGlCQUFpQixDQW9HN0I7SUFBRCx3QkFBQztDQUFBLEFBcEdELElBb0dDO1NBcEdZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGdyb3VwQnksIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBidWZmZXJEZWJvdW5jZVRpbWUgfSBmcm9tICcuLi8uLi8uLi91dGlsL2J1ZmZlci1kZWJvdW5jZS10aW1lJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBzZXJpYWxpemVQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxzL2Ntcy11dGlscyc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRMb2FkZXI6IENtc0NvbXBvbmVudENvbm5lY3RvcixcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWdTZXJ2aWNlOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dPVVQsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dJTlxuICAgIClcbiAgKTtcblxuICBsb2FkQ29tcG9uZW50JCA9IGNyZWF0ZUVmZmVjdChcbiAgICAoKSA9PiAoeyBzY2hlZHVsZXIsIGRlYm91bmNlID0gMCB9ID0ge30pOiBPYnNlcnZhYmxlPFxuICAgICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD5cbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICAgID4gPT5cbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlPENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudD4oQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlQpLFxuICAgICAgICBncm91cEJ5KGFjdGlvbnMgPT4gc2VyaWFsaXplUGFnZUNvbnRleHQoYWN0aW9ucy5wYXlsb2FkLnBhZ2VDb250ZXh0KSksXG4gICAgICAgIG1lcmdlTWFwKGFjdGlvbkdyb3VwID0+XG4gICAgICAgICAgYWN0aW9uR3JvdXAucGlwZShcbiAgICAgICAgICAgIGJ1ZmZlckRlYm91bmNlVGltZShkZWJvdW5jZSwgc2NoZWR1bGVyKSxcbiAgICAgICAgICAgIG1lcmdlTWFwKGFjdGlvbnMgPT5cbiAgICAgICAgICAgICAgdGhpcy5sb2FkQ29tcG9uZW50c0VmZmVjdChcbiAgICAgICAgICAgICAgICBhY3Rpb25zLm1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQudWlkKSxcbiAgICAgICAgICAgICAgICBhY3Rpb25zWzBdLnBheWxvYWQucGFnZUNvbnRleHRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICAgICAgKVxuICApO1xuXG4gIHByaXZhdGUgbG9hZENvbXBvbmVudHNFZmZlY3QoXG4gICAgY29tcG9uZW50VWlkczogc3RyaW5nW10sXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8XG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD5cbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgPiB7XG4gICAgLy8gVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIGJlaGF2aW9yIHNpbmNlIDEuNFxuICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjQnKSkge1xuICAgICAgcmV0dXJuIG1lcmdlKFxuICAgICAgICAuLi5jb21wb25lbnRVaWRzLm1hcCh1aWQgPT5cbiAgICAgICAgICB0aGlzLmNtc0NvbXBvbmVudExvYWRlci5nZXQodWlkLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICAgY29tcG9uZW50ID0+XG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgdWlkOiBjb21wb25lbnQudWlkLFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsKHtcbiAgICAgICAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gRU5EIE9GIChUT0RPOiByZW1vdmUsIGRlcHJlY2F0ZWQgYmVoYXZpb3Igc2luY2UgMS40KVxuXG4gICAgcmV0dXJuIHRoaXMuY21zQ29tcG9uZW50TG9hZGVyLmdldExpc3QoY29tcG9uZW50VWlkcywgcGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY29tcG9uZW50cyA9PlxuICAgICAgICBmcm9tKFxuICAgICAgICAgIGNvbXBvbmVudHMubWFwKFxuICAgICAgICAgICAgY29tcG9uZW50ID0+XG4gICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgdWlkOiBjb21wb25lbnQudWlkLFxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgZnJvbShcbiAgICAgICAgICBjb21wb25lbnRVaWRzLm1hcChcbiAgICAgICAgICAgIHVpZCA9PlxuICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbCh7XG4gICAgICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==