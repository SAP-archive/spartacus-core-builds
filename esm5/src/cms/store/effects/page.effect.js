import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, groupBy, map, mergeMap, switchMap, take, } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { RoutingService } from '../../../routing/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CmsPageConnector } from '../../connectors/page/cms-page.connector';
import { serializePageContext } from '../../utils/cms-utils';
import { CmsActions } from '../actions/index';
var PageEffects = /** @class */ (function () {
    function PageEffects(actions$, cmsPageConnector, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsPageConnector = cmsPageConnector;
        this.routingService = routingService;
        this.refreshPage$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN), switchMap(function (_) {
            return _this.routingService.getRouterState().pipe(filter(function (routerState) {
                return routerState &&
                    routerState.state &&
                    routerState.state.cmsRequired &&
                    !routerState.nextState;
            }), take(1), map(function (routerState) { return routerState.state.context; }), mergeMap(function (context) { return of(new CmsActions.LoadCmsPageData(context)); }));
        }));
        this.loadPageData$ = this.actions$.pipe(ofType(CmsActions.LOAD_CMS_PAGE_DATA), map(function (action) { return action.payload; }), groupBy(function (pageContext) { return serializePageContext(pageContext); }), mergeMap(function (group) {
            return group.pipe(switchMap(function (pageContext) {
                return _this.cmsPageConnector.get(pageContext).pipe(mergeMap(function (cmsStructure) {
                    var actions = [
                        new CmsActions.CmsGetComponentFromPage(cmsStructure.components.map(function (component) { return ({
                            component: component,
                            pageContext: pageContext,
                        }); })),
                        new CmsActions.LoadCmsPageDataSuccess(pageContext, cmsStructure.page),
                    ];
                    var pageLabel = cmsStructure.page.label;
                    // For content pages the page label returned from backend can be different than page ID initially assumed from route.
                    // In such a case let's save the success response not only for initially assumed page ID, but also for correct page label.
                    if (pageLabel && pageLabel !== pageContext.id) {
                        actions.unshift(new CmsActions.CmsSetPageSuccessIndex({ id: pageLabel, type: pageContext.type }, cmsStructure.page));
                    }
                    return actions;
                }), catchError(function (error) {
                    return of(new CmsActions.LoadCmsPageDataFail(pageContext, makeErrorSerializable(error)));
                }));
            }));
        }));
    }
    PageEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsPageConnector },
        { type: RoutingService }
    ]; };
    __decorate([
        Effect()
    ], PageEffects.prototype, "refreshPage$", void 0);
    __decorate([
        Effect()
    ], PageEffects.prototype, "loadPageData$", void 0);
    PageEffects = __decorate([
        Injectable()
    ], PageEffects);
    return PageEffects;
}());
export { PageEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksR0FDTCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDO0lBMkVFLHFCQUNVLFFBQWlCLEVBQ2pCLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUh4QyxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE1RXhDLGlCQUFZLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuRCxN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QUFVLEVBQUU7T0FDQSxXQUFXLENBZ0Z2QjtJQUFELGtCQUFDO0NBQUEsQUFoRkQsSUFnRkM7U0FoRlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZmlsdGVyLFxuICBncm91cEJ5LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ21zUGFnZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcGFnZS9jbXMtcGFnZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IHNlcmlhbGl6ZVBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY21zLXV0aWxzJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2hQYWdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dPVVQsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dJTlxuICAgICksXG4gICAgc3dpdGNoTWFwKF8gPT5cbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgcm91dGVyU3RhdGUgPT5cbiAgICAgICAgICAgIHJvdXRlclN0YXRlICYmXG4gICAgICAgICAgICByb3V0ZXJTdGF0ZS5zdGF0ZSAmJlxuICAgICAgICAgICAgcm91dGVyU3RhdGUuc3RhdGUuY21zUmVxdWlyZWQgJiZcbiAgICAgICAgICAgICFyb3V0ZXJTdGF0ZS5uZXh0U3RhdGVcbiAgICAgICAgKSxcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgbWFwKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlLnN0YXRlLmNvbnRleHQpLFxuICAgICAgICBtZXJnZU1hcChjb250ZXh0ID0+IG9mKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShjb250ZXh0KSkpXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkUGFnZURhdGEkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENtc0FjdGlvbnMuTE9BRF9DTVNfUEFHRV9EQVRBKSxcbiAgICBtYXAoKGFjdGlvbjogQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KHBhZ2VDb250ZXh0ID0+IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KHBhZ2VDb250ZXh0KSksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICAgIHRoaXMuY21zUGFnZUNvbm5lY3Rvci5nZXQocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICBtZXJnZU1hcCgoY21zU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhY3Rpb25zOiBBY3Rpb25bXSA9IFtcbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5DbXNHZXRDb21wb25lbnRGcm9tUGFnZShcbiAgICAgICAgICAgICAgICAgIGNtc1N0cnVjdHVyZS5jb21wb25lbnRzLm1hcChjb21wb25lbnQgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhU3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgY21zU3RydWN0dXJlLnBhZ2VcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2VMYWJlbCA9IGNtc1N0cnVjdHVyZS5wYWdlLmxhYmVsO1xuICAgICAgICAgICAgICAvLyBGb3IgY29udGVudCBwYWdlcyB0aGUgcGFnZSBsYWJlbCByZXR1cm5lZCBmcm9tIGJhY2tlbmQgY2FuIGJlIGRpZmZlcmVudCB0aGFuIHBhZ2UgSUQgaW5pdGlhbGx5IGFzc3VtZWQgZnJvbSByb3V0ZS5cbiAgICAgICAgICAgICAgLy8gSW4gc3VjaCBhIGNhc2UgbGV0J3Mgc2F2ZSB0aGUgc3VjY2VzcyByZXNwb25zZSBub3Qgb25seSBmb3IgaW5pdGlhbGx5IGFzc3VtZWQgcGFnZSBJRCwgYnV0IGFsc28gZm9yIGNvcnJlY3QgcGFnZSBsYWJlbC5cbiAgICAgICAgICAgICAgaWYgKHBhZ2VMYWJlbCAmJiBwYWdlTGFiZWwgIT09IHBhZ2VDb250ZXh0LmlkKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy51bnNoaWZ0KFxuICAgICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuQ21zU2V0UGFnZVN1Y2Nlc3NJbmRleChcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogcGFnZUxhYmVsLCB0eXBlOiBwYWdlQ29udGV4dC50eXBlIH0sXG4gICAgICAgICAgICAgICAgICAgIGNtc1N0cnVjdHVyZS5wYWdlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YUZhaWwoXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc1BhZ2VDb25uZWN0b3I6IENtc1BhZ2VDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19