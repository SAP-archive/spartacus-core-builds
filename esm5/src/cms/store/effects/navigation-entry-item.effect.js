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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc5QztJQWdGRSxvQ0FDVSxRQUFpQixFQUNqQixxQkFBNEMsRUFDNUMsY0FBOEI7UUFIeEMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBakZ4Qyx5QkFBb0IsR0FHaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsRUFDNUMsR0FBRyxDQUFDLFVBQUMsTUFBeUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ2xFLEdBQUcsQ0FBQyxVQUFB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QztJQUM5RSxDQUFDOztnQkFHbUIsT0FBTztnQkFDTSxxQkFBcUI7Z0JBQzVCLGNBQWM7O0lBakZ4QztRQURDLE1BQU0sRUFBRTs0RUF5RFA7SUExRFMsMEJBQTBCO1FBRHRDLFVBQVUsRUFBRTtPQUNBLDBCQUEwQixDQXFGdEM7SUFBRCxpQ0FBQztDQUFBLEFBckZELElBcUZDO1NBckZZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmlsdGVyLCBtYXAsIG1lcmdlTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uRW50cnlJdGVtRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkTmF2aWdhdGlvbkl0ZW1zJDogT2JzZXJ2YWJsZTxcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtc1N1Y2Nlc3NcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ21zQWN0aW9ucy5MT0FEX0NNU19OQVZJR0FUSU9OX0lURU1TKSxcbiAgICBtYXAoKGFjdGlvbjogQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWRzOiB0aGlzLmdldElkTGlzdEJ5SXRlbVR5cGUocGF5bG9hZC5pdGVtcyksXG4gICAgICAgIG5vZGVJZDogcGF5bG9hZC5ub2RlSWQsXG4gICAgICB9O1xuICAgIH0pLFxuICAgIG1lcmdlTWFwKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEuaWRzLmNvbXBvbmVudElkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgICBmaWx0ZXIocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUgIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgbWFwKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlLnN0YXRlLmNvbnRleHQpLFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgbWVyZ2VNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgICAgIC8vIGRvd25sb2FkIGFsbCBpdGVtcyBpbiBvbmUgcmVxdWVzdFxuICAgICAgICAgICAgdGhpcy5jbXNDb21wb25lbnRDb25uZWN0b3JcbiAgICAgICAgICAgICAgLmdldExpc3QoZGF0YS5pZHMuY29tcG9uZW50SWRzLCBwYWdlQ29udGV4dClcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50cyA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zU3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBkYXRhLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXNGYWlsKFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5pZHMucGFnZUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRPRE86IGZ1dHVyZSB3b3JrXG4gICAgICAgIC8vIGRpc3BhdGNoIGFjdGlvbiB0byBsb2FkIGNtcyBwYWdlIG9uZSBieSBvbmVcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5pZHMubWVkaWFJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUT0RPOiBmdXR1cmUgd29ya1xuICAgICAgICAvLyBzZW5kIHJlcXVlc3QgdG8gZ2V0IGxpc3Qgb2YgbWVkaWFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvZihcbiAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zRmFpbChcbiAgICAgICAgICAgIGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgJ25hdmlnYXRpb24gbm9kZXMgYXJlIGVtcHR5J1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIC8vIFdlIG9ubHkgY29uc2lkZXIgMyBpdGVtIHR5cGVzOiBjbXMgcGFnZSwgY21zIGNvbXBvbmVudCwgYW5kIG1lZGlhLlxuICBnZXRJZExpc3RCeUl0ZW1UeXBlKFxuICAgIGl0ZW1MaXN0OiBhbnlbXVxuICApOiB7IHBhZ2VJZHM6IHN0cmluZ1tdOyBjb21wb25lbnRJZHM6IHN0cmluZ1tdOyBtZWRpYUlkczogc3RyaW5nW10gfSB7XG4gICAgY29uc3QgcGFnZUlkczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBjb21wb25lbnRJZHM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgbWVkaWFJZHM6IHN0cmluZ1tdID0gW107XG5cbiAgICBpdGVtTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RDTVNDb21wb25lbnQnKSB7XG4gICAgICAgIGNvbXBvbmVudElkcy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0UGFnZScpIHtcbiAgICAgICAgcGFnZUlkcy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0TWVkaWEnKSB7XG4gICAgICAgIG1lZGlhSWRzLnB1c2goaXRlbS5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgcGFnZUlkczogcGFnZUlkcywgY29tcG9uZW50SWRzOiBjb21wb25lbnRJZHMsIG1lZGlhSWRzOiBtZWRpYUlkcyB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc0NvbXBvbmVudENvbm5lY3RvcjogQ21zQ29tcG9uZW50Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==