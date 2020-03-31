import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, take } from 'rxjs/operators';
import { RoutingService } from '../../../routing/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
var NavigationEntryItemEffects = /** @class */ (function () {
    function NavigationEntryItemEffects(actions$, cmsComponentConnector, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsComponentConnector = cmsComponentConnector;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(CmsActions.LOAD_CMS_NAVIGATION_ITEMS), map(function (action) { return action.payload; }), map(function (payload) {
            return {
                ids: _this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId,
            };
        }), mergeMap(function (data) {
            if (data.ids.componentIds.length > 0) {
                return _this.routingService.getRouterState().pipe(filter(function (routerState) { return routerState !== undefined; }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (pageContext) {
                    // download all items in one request
                    return _this.cmsComponentConnector
                        .getList(data.ids.componentIds, pageContext)
                        .pipe(map(function (components) {
                        return new CmsActions.LoadCmsNavigationItemsSuccess({
                            nodeId: data.nodeId,
                            components: components,
                        });
                    }), catchError(function (error) {
                        return of(new CmsActions.LoadCmsNavigationItemsFail(data.nodeId, makeErrorSerializable(error)));
                    }));
                }));
            }
            else if (data.ids.pageIds.length > 0) {
                // TODO: future work
                // dispatch action to load cms page one by one
            }
            else if (data.ids.mediaIds.length > 0) {
                // TODO: future work
                // send request to get list of media
            }
            else {
                return of(new CmsActions.LoadCmsNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
            }
        }));
    }
    // We only consider 3 item types: cms page, cms component, and media.
    NavigationEntryItemEffects.prototype.getIdListByItemType = function (itemList) {
        var pageIds = [];
        var componentIds = [];
        var mediaIds = [];
        itemList.forEach(function (item) {
            if (item.superType === 'AbstractCMSComponent') {
                componentIds.push(item.id);
            }
            else if (item.superType === 'AbstractPage') {
                pageIds.push(item.id);
            }
            else if (item.superType === 'AbstractMedia') {
                mediaIds.push(item.id);
            }
        });
        return { pageIds: pageIds, componentIds: componentIds, mediaIds: mediaIds };
    };
    NavigationEntryItemEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsComponentConnector },
        { type: RoutingService }
    ]; };
    __decorate([
        Effect()
    ], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);
    NavigationEntryItemEffects = __decorate([
        Injectable()
    ], NavigationEntryItemEffects);
    return NavigationEntryItemEffects;
}());
export { NavigationEntryItemEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc5QztJQWdGRSxvQ0FDVSxRQUFpQixFQUNqQixxQkFBNEMsRUFDNUMsY0FBOEI7UUFIeEMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBakZ4Qyx5QkFBb0IsR0FHaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsRUFDNUMsR0FBRyxDQUFDLFVBQUMsTUFBeUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ2xFLEdBQUcsQ0FBQyxVQUFD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QztJQUM5RSxDQUFDOztnQkFHbUIsT0FBTztnQkFDTSxxQkFBcUI7Z0JBQzVCLGNBQWM7O0lBakZ4QztRQURDLE1BQU0sRUFBRTs0RUF5RFA7SUExRFMsMEJBQTBCO1FBRHRDLFVBQVUsRUFBRTtPQUNBLDBCQUEwQixDQXFGdEM7SUFBRCxpQ0FBQztDQUFBLEFBckZELElBcUZDO1NBckZZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmlsdGVyLCBtYXAsIG1lcmdlTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uRW50cnlJdGVtRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkTmF2aWdhdGlvbkl0ZW1zJDogT2JzZXJ2YWJsZTxcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtc1N1Y2Nlc3NcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ21zQWN0aW9ucy5MT0FEX0NNU19OQVZJR0FUSU9OX0lURU1TKSxcbiAgICBtYXAoKGFjdGlvbjogQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZHM6IHRoaXMuZ2V0SWRMaXN0QnlJdGVtVHlwZShwYXlsb2FkLml0ZW1zKSxcbiAgICAgICAgbm9kZUlkOiBwYXlsb2FkLm5vZGVJZCxcbiAgICAgIH07XG4gICAgfSksXG4gICAgbWVyZ2VNYXAoKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmlkcy5jb21wb25lbnRJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKChyb3V0ZXJTdGF0ZSkgPT4gcm91dGVyU3RhdGUgIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgbWFwKChyb3V0ZXJTdGF0ZSkgPT4gcm91dGVyU3RhdGUuc3RhdGUuY29udGV4dCksXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBtZXJnZU1hcCgocGFnZUNvbnRleHQpID0+XG4gICAgICAgICAgICAvLyBkb3dubG9hZCBhbGwgaXRlbXMgaW4gb25lIHJlcXVlc3RcbiAgICAgICAgICAgIHRoaXMuY21zQ29tcG9uZW50Q29ubmVjdG9yXG4gICAgICAgICAgICAgIC5nZXRMaXN0KGRhdGEuaWRzLmNvbXBvbmVudElkcywgcGFnZUNvbnRleHQpXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICAgICAgIChjb21wb25lbnRzKSA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zU3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBkYXRhLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtc0ZhaWwoXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLmlkcy5wYWdlSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gVE9ETzogZnV0dXJlIHdvcmtcbiAgICAgICAgLy8gZGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgY21zIHBhZ2Ugb25lIGJ5IG9uZVxuICAgICAgfSBlbHNlIGlmIChkYXRhLmlkcy5tZWRpYUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRPRE86IGZ1dHVyZSB3b3JrXG4gICAgICAgIC8vIHNlbmQgcmVxdWVzdCB0byBnZXQgbGlzdCBvZiBtZWRpYVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXNGYWlsKFxuICAgICAgICAgICAgZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAnbmF2aWdhdGlvbiBub2RlcyBhcmUgZW1wdHknXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG5cbiAgLy8gV2Ugb25seSBjb25zaWRlciAzIGl0ZW0gdHlwZXM6IGNtcyBwYWdlLCBjbXMgY29tcG9uZW50LCBhbmQgbWVkaWEuXG4gIGdldElkTGlzdEJ5SXRlbVR5cGUoXG4gICAgaXRlbUxpc3Q6IGFueVtdXG4gICk6IHsgcGFnZUlkczogc3RyaW5nW107IGNvbXBvbmVudElkczogc3RyaW5nW107IG1lZGlhSWRzOiBzdHJpbmdbXSB9IHtcbiAgICBjb25zdCBwYWdlSWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNvbXBvbmVudElkczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBtZWRpYUlkczogc3RyaW5nW10gPSBbXTtcblxuICAgIGl0ZW1MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0Q01TQ29tcG9uZW50Jykge1xuICAgICAgICBjb21wb25lbnRJZHMucHVzaChpdGVtLmlkKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdFBhZ2UnKSB7XG4gICAgICAgIHBhZ2VJZHMucHVzaChpdGVtLmlkKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdE1lZGlhJykge1xuICAgICAgICBtZWRpYUlkcy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7IHBhZ2VJZHM6IHBhZ2VJZHMsIGNvbXBvbmVudElkczogY29tcG9uZW50SWRzLCBtZWRpYUlkczogbWVkaWFJZHMgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRDb25uZWN0b3I6IENtc0NvbXBvbmVudENvbm5lY3RvcixcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG59XG4iXX0=