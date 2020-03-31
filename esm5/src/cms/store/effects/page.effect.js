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
        this.refreshPage$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN), switchMap(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksR0FDTCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDO0lBMkVFLHFCQUNVLFFBQWlCLEVBQ2pCLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUh4QyxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE1RXhDLGlCQUFZLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuRCxNQUFNLENBQ0osa0JBQWtCLENBQUMsZUFBZSxFQUNsQyxXQUFXLENBQUMsTUFBTSxFQUNsQixXQUFXLENBQUMsS0FBSyxDQUNsQixFQUNELFNBQVMsQ0FBQztZQUNSLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FDSixVQUFDLFdBQVc7Z0JBQ1YsT0FBQSxXQUFXO29CQUNYLFdBQVcsQ0FBQyxLQUFLO29CQUNqQixXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVc7b0JBQzdCLENBQUMsV0FBVyxDQUFDLFNBQVM7WUFIdEIsQ0FHc0IsQ0FDekIsRUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRyxDQUFDLFVBQUMsV0FBVyxJQUFLLE9BQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQXpCLENBQXlCLENBQUMsRUFDL0MsUUFBUSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQ25FO1FBWEQsQ0FXQyxDQUNGLENBQ0YsQ0FBQztRQUdGLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwRCxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQ3JDLEdBQUcsQ0FBQyxVQUFDLE1BQWtDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUMzRCxPQUFPLENBQUMsVUFBQyxXQUFXLElBQUssT0FBQSxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxFQUMzRCxRQUFRLENBQUMsVUFBQyxLQUFLO1lBQ2IsT0FBQSxLQUFLLENBQUMsSUFBSSxDQUNSLFNBQVMsQ0FBQyxVQUFDLFdBQVc7Z0JBQ3BCLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3pDLFFBQVEsQ0FBQyxVQUFDLFlBQStCO29CQUN2QyxJQUFNLE9BQU8sR0FBYTt3QkFDeEIsSUFBSSxVQUFVLENBQUMsdUJBQXVCLENBQ3BDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsQ0FBQzs0QkFDMUMsU0FBUyxXQUFBOzRCQUNULFdBQVcsYUFBQTt5QkFDWixDQUFDLEVBSHlDLENBR3pDLENBQUMsQ0FDSjt3QkFDRCxJQUFJLFVBQVUsQ0FBQyxzQkFBc0IsQ0FDbkMsV0FBVyxFQUNYLFlBQVksQ0FBQyxJQUFJLENBQ2xCO3FCQUNGLENBQUM7b0JBRUYsSUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQzFDLHFIQUFxSDtvQkFDckgsMEhBQTBIO29CQUMxSCxJQUFJLFNBQVMsSUFBSSxTQUFTLEtBQUssV0FBVyxDQUFDLEVBQUUsRUFBRTt3QkFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FDYixJQUFJLFVBQVUsQ0FBQyxzQkFBc0IsQ0FDbkMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQ3pDLFlBQVksQ0FBQyxJQUFJLENBQ2xCLENBQ0YsQ0FBQztxQkFDSDtvQkFFRCxPQUFPLE9BQU8sQ0FBQztnQkFDakIsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUMsS0FBSztvQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLFVBQVUsQ0FBQyxtQkFBbUIsQ0FDaEMsV0FBVyxFQUNYLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO2dCQUxELENBS0MsQ0FDRixDQUNGO1lBckNELENBcUNDLENBQ0YsQ0FDRjtRQXpDRCxDQXlDQyxDQUNGLENBQ0YsQ0FBQztJQU1DLENBQUM7O2dCQUhnQixPQUFPO2dCQUNDLGdCQUFnQjtnQkFDbEIsY0FBYzs7SUE1RXhDO1FBREMsTUFBTSxFQUFFO3FEQXFCUDtJQUdGO1FBREMsTUFBTSxFQUFFO3NEQWlEUDtJQXpFUyxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVcsQ0FnRnZCO0lBQUQsa0JBQUM7Q0FBQSxBQWhGRCxJQWdGQztTQWhGWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDbXNQYWdlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wYWdlL2Ntcy1wYWdlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgc2VyaWFsaXplUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlscy9jbXMtdXRpbHMnO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVmcmVzaFBhZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR09VVCxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR0lOXG4gICAgKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKHJvdXRlclN0YXRlKSA9PlxuICAgICAgICAgICAgcm91dGVyU3RhdGUgJiZcbiAgICAgICAgICAgIHJvdXRlclN0YXRlLnN0YXRlICYmXG4gICAgICAgICAgICByb3V0ZXJTdGF0ZS5zdGF0ZS5jbXNSZXF1aXJlZCAmJlxuICAgICAgICAgICAgIXJvdXRlclN0YXRlLm5leHRTdGF0ZVxuICAgICAgICApLFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXAoKHJvdXRlclN0YXRlKSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgbWVyZ2VNYXAoKGNvbnRleHQpID0+IG9mKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShjb250ZXh0KSkpXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkUGFnZURhdGEkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENtc0FjdGlvbnMuTE9BRF9DTVNfUEFHRV9EQVRBKSxcbiAgICBtYXAoKGFjdGlvbjogQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KChwYWdlQ29udGV4dCkgPT4gc2VyaWFsaXplUGFnZUNvbnRleHQocGFnZUNvbnRleHQpKSxcbiAgICBtZXJnZU1hcCgoZ3JvdXApID0+XG4gICAgICBncm91cC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKHBhZ2VDb250ZXh0KSA9PlxuICAgICAgICAgIHRoaXMuY21zUGFnZUNvbm5lY3Rvci5nZXQocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICBtZXJnZU1hcCgoY21zU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhY3Rpb25zOiBBY3Rpb25bXSA9IFtcbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5DbXNHZXRDb21wb25lbnRGcm9tUGFnZShcbiAgICAgICAgICAgICAgICAgIGNtc1N0cnVjdHVyZS5jb21wb25lbnRzLm1hcCgoY29tcG9uZW50KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGFTdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgICBjbXNTdHJ1Y3R1cmUucGFnZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgY29uc3QgcGFnZUxhYmVsID0gY21zU3RydWN0dXJlLnBhZ2UubGFiZWw7XG4gICAgICAgICAgICAgIC8vIEZvciBjb250ZW50IHBhZ2VzIHRoZSBwYWdlIGxhYmVsIHJldHVybmVkIGZyb20gYmFja2VuZCBjYW4gYmUgZGlmZmVyZW50IHRoYW4gcGFnZSBJRCBpbml0aWFsbHkgYXNzdW1lZCBmcm9tIHJvdXRlLlxuICAgICAgICAgICAgICAvLyBJbiBzdWNoIGEgY2FzZSBsZXQncyBzYXZlIHRoZSBzdWNjZXNzIHJlc3BvbnNlIG5vdCBvbmx5IGZvciBpbml0aWFsbHkgYXNzdW1lZCBwYWdlIElELCBidXQgYWxzbyBmb3IgY29ycmVjdCBwYWdlIGxhYmVsLlxuICAgICAgICAgICAgICBpZiAocGFnZUxhYmVsICYmIHBhZ2VMYWJlbCAhPT0gcGFnZUNvbnRleHQuaWQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnVuc2hpZnQoXG4gICAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5DbXNTZXRQYWdlU3VjY2Vzc0luZGV4KFxuICAgICAgICAgICAgICAgICAgICB7IGlkOiBwYWdlTGFiZWwsIHR5cGU6IHBhZ2VDb250ZXh0LnR5cGUgfSxcbiAgICAgICAgICAgICAgICAgICAgY21zU3RydWN0dXJlLnBhZ2VcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGFGYWlsKFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNQYWdlQ29ubmVjdG9yOiBDbXNQYWdlQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==