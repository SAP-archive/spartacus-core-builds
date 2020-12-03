import { Injectable, InjectionToken } from '@angular/core';
import * as fromNgrxRouter from '@ngrx/router-store';
import { PageType } from '../../../model/cms.model';
import { RoutingConfigService } from '../../configurable-routes/routing-config.service';
import { CHANGE_NEXT_PAGE_CONTEXT } from '../actions/router.action';
export const initialState = {
    navigationId: 0,
    state: {
        url: '',
        queryParams: {},
        params: {},
        context: {
            id: '',
        },
        cmsRequired: false,
        semanticRoute: undefined,
    },
    nextState: undefined,
};
export function getReducers() {
    return {
        router: reducer,
    };
}
export function reducer(state = initialState, action) {
    var _a, _b;
    switch (action.type) {
        case fromNgrxRouter.ROUTER_NAVIGATION: {
            return Object.assign(Object.assign({}, state), { nextState: action.payload.routerState, navigationId: action.payload.event.id });
        }
        case fromNgrxRouter.ROUTER_ERROR:
        case fromNgrxRouter.ROUTER_CANCEL: {
            return Object.assign(Object.assign({}, state), { nextState: undefined });
        }
        case CHANGE_NEXT_PAGE_CONTEXT: {
            return state.nextState
                ? Object.assign(Object.assign({}, state), { nextState: Object.assign(Object.assign({}, state.nextState), { context: action.payload }) }) : state;
        }
        case fromNgrxRouter.ROUTER_NAVIGATED: {
            return {
                state: Object.assign(Object.assign({}, action.payload.routerState), { context: (_b = (_a = 
                    // we want to preserve already resolved context,
                    // in case it was changed while navigating
                    state.nextState) === null || _a === void 0 ? void 0 : _a.context) !== null && _b !== void 0 ? _b : action.payload.routerState.context }),
                navigationId: action.payload.event.id,
                nextState: undefined,
            };
        }
        default: {
            return state;
        }
    }
}
export const reducerToken = new InjectionToken('RouterReducers');
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
export class CustomSerializer {
    constructor(routingConfig) {
        this.routingConfig = routingConfig;
    }
    serialize(routerState) {
        var _a, _b;
        let state = routerState.root;
        let cmsRequired = false;
        let context;
        let semanticRoute;
        let urlString = '';
        while (state.firstChild) {
            state = state.firstChild;
            urlString +=
                '/' + state.url.map((urlSegment) => urlSegment.path).join('/');
            // we use semantic route information embedded from any parent route
            if ((_a = state.data) === null || _a === void 0 ? void 0 : _a.cxRoute) {
                semanticRoute = (_b = state.data) === null || _b === void 0 ? void 0 : _b.cxRoute;
            }
            // we use context information embedded in Cms driven routes from any parent route
            if (state.data && state.data.cxCmsRouteContext) {
                context = state.data.cxCmsRouteContext;
            }
            // we assume, that any route that has CmsPageGuard or it's child
            // is cmsRequired
            if (!cmsRequired &&
                (context ||
                    (state.routeConfig &&
                        state.routeConfig.canActivate &&
                        state.routeConfig.canActivate.find((x) => x && x.guardName === 'CmsPageGuard')))) {
                cmsRequired = true;
            }
        }
        // If `semanticRoute` couldn't be already recognized using `data.cxRoute` property
        // let's lookup the routing configuration to find the semantic route that has exactly the same configured path as the current URL.
        // This will work only for simple URLs without any dynamic routing parameters.
        semanticRoute = semanticRoute || this.lookupSemanticRoute(urlString);
        const { params } = state;
        // we give smartedit preview page a PageContext
        if (state.url.length > 0 && state.url[0].path === 'cx-preview') {
            context = {
                id: 'smartedit-preview',
                type: PageType.CONTENT_PAGE,
            };
        }
        else {
            if (params['productCode']) {
                context = { id: params['productCode'], type: PageType.PRODUCT_PAGE };
            }
            else if (params['categoryCode']) {
                context = { id: params['categoryCode'], type: PageType.CATEGORY_PAGE };
            }
            else if (params['brandCode']) {
                context = { id: params['brandCode'], type: PageType.CATEGORY_PAGE };
            }
            else if (state.data.pageLabel !== undefined) {
                context = { id: state.data.pageLabel, type: PageType.CONTENT_PAGE };
            }
            else if (!context) {
                if (state.url.length > 0) {
                    const pageLabel = '/' + state.url.map((urlSegment) => urlSegment.path).join('/');
                    context = {
                        id: pageLabel,
                        type: PageType.CONTENT_PAGE,
                    };
                }
                else {
                    context = {
                        id: 'homepage',
                        type: PageType.CONTENT_PAGE,
                    };
                }
            }
        }
        return {
            url: routerState.url,
            queryParams: routerState.root.queryParams,
            params,
            context,
            cmsRequired,
            semanticRoute,
        };
    }
    /**
     * Returns the semantic route name for given page label.
     *
     * *NOTE*: It works only for simple static urls that are equal to the page label
     * of cms-driven content page. For example: `/my-account/address-book`.
     *
     * It doesn't work for URLs with dynamic parameters. But such case can be handled
     * by reading the defined `data.cxRoute` from the Angular Routes.
     *
     * @param path path to be found in the routing config
     */
    lookupSemanticRoute(path) {
        // Page label is assumed to start with `/`, but Spartacus configured paths
        // don't start with slash. So we remove the leading slash:
        return this.routingConfig.getRouteName(path.substr(1));
    }
}
CustomSerializer.decorators = [
    { type: Injectable }
];
CustomSerializer.ctorParameters = () => [
    { type: RoutingConfigService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9yb3V0aW5nL3N0b3JlL3JlZHVjZXJzL3JvdXRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sS0FBSyxjQUFjLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBUXhGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXBFLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBZ0I7SUFDdkMsWUFBWSxFQUFFLENBQUM7SUFDZixLQUFLLEVBQUU7UUFDTCxHQUFHLEVBQUUsRUFBRTtRQUNQLFdBQVcsRUFBRSxFQUFFO1FBQ2YsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsRUFBRTtTQUNQO1FBQ0QsV0FBVyxFQUFFLEtBQUs7UUFDbEIsYUFBYSxFQUFFLFNBQVM7S0FDekI7SUFDRCxTQUFTLEVBQUUsU0FBUztDQUNyQixDQUFDO0FBRUYsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE1BQU0sRUFBRSxPQUFPO0tBQ2hCLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsUUFBcUIsWUFBWSxFQUNqQyxNQUFXOztJQUVYLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3JDLHVDQUNLLEtBQUssS0FDUixTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQ3JDLFlBQVksRUFB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UUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JFO2lCQUFNLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixNQUFNLFNBQVMsR0FDYixHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pFLE9BQU8sR0FBRzt3QkFDUixFQUFFLEVBQUUsU0FBUzt3QkFDYixJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7cUJBQzVCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxHQUFHO3dCQUNSLEVBQUUsRUFBRSxVQUFVO3dCQUNkLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTtxQkFDNUIsQ0FBQztpQkFDSDthQUNGO1NBQ0Y7UUFFRCxPQUFPO1lBQ0wsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHO1lBQ3BCLFdBQVcsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDekMsTUFBTTtZQUNOLE9BQU87WUFDUCxXQUFXO1lBQ1gsYUFBYTtTQUNkLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNLLG1CQUFtQixDQUFDLElBQVk7UUFDdEMsMEVBQTBFO1FBQzFFLDBEQUEwRDtRQUMxRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUF4R0YsVUFBVTs7O1lBN0ZGLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBmcm9tTmdyeFJvdXRlciBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlck1hcCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlndXJhYmxlLXJvdXRlcy9yb3V0aW5nLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY21zLXJvdXRlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBSb3V0ZXJTdGF0ZSxcbiAgU3RhdGUsXG59IGZyb20gJy4uL3JvdXRpbmctc3RhdGUnO1xuaW1wb3J0IHsgQ0hBTkdFX05FWFRfUEFHRV9DT05URVhUIH0gZnJvbSAnLi4vYWN0aW9ucy9yb3V0ZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUm91dGVyU3RhdGUgPSB7XG4gIG5hdmlnYXRpb25JZDogMCxcbiAgc3RhdGU6IHtcbiAgICB1cmw6ICcnLFxuICAgIHF1ZXJ5UGFyYW1zOiB7fSxcbiAgICBwYXJhbXM6IHt9LFxuICAgIGNvbnRleHQ6IHtcbiAgICAgIGlkOiAnJyxcbiAgICB9LFxuICAgIGNtc1JlcXVpcmVkOiBmYWxzZSxcbiAgICBzZW1hbnRpY1JvdXRlOiB1bmRlZmluZWQsXG4gIH0sXG4gIG5leHRTdGF0ZTogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICByb3V0ZXI6IHJlZHVjZXIsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZTogUm91dGVyU3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogYW55XG4pOiBSb3V0ZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9OQVZJR0FUSU9OOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmV4dFN0YXRlOiBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZSxcbiAgICAgICAgbmF2aWdhdGlvbklkOiBhY3Rpb24ucGF5bG9hZC5ldmVudC5pZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfRVJST1I6XG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfQ0FOQ0VMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmV4dFN0YXRlOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0hBTkdFX05FWFRfUEFHRV9DT05URVhUOiB7XG4gICAgICByZXR1cm4gc3RhdGUubmV4dFN0YXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBuZXh0U3RhdGU6IHsgLi4uc3RhdGUubmV4dFN0YXRlLCBjb250ZXh0OiBhY3Rpb24ucGF5bG9hZCB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiBzdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9OQVZJR0FURUQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUsXG4gICAgICAgICAgY29udGV4dDpcbiAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gcHJlc2VydmUgYWxyZWFkeSByZXNvbHZlZCBjb250ZXh0LFxuICAgICAgICAgICAgLy8gaW4gY2FzZSBpdCB3YXMgY2hhbmdlZCB3aGlsZSBuYXZpZ2F0aW5nXG4gICAgICAgICAgICBzdGF0ZS5uZXh0U3RhdGU/LmNvbnRleHQgPz8gYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUuY29udGV4dCxcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbklkOiBhY3Rpb24ucGF5bG9hZC5ldmVudC5pZCxcbiAgICAgICAgbmV4dFN0YXRlOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxcbiAgU3RhdGVcbj4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+PignUm91dGVyUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG4vKiBUaGUgc2VyaWFsaXplciBpcyB0aGVyZSB0byBwYXJzZSB0aGUgUm91dGVyU3RhdGVTbmFwc2hvdCxcbmFuZCB0byByZWR1Y2UgdGhlIGFtb3VudCBvZiBwcm9wZXJ0aWVzIHRvIGJlIHBhc3NlZCB0byB0aGUgcmVkdWNlci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbVNlcmlhbGl6ZXJcbiAgaW1wbGVtZW50c1xuICAgIGZyb21OZ3J4Um91dGVyLlJvdXRlclN0YXRlU2VyaWFsaXplcjxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gIHNlcmlhbGl6ZShyb3V0ZXJTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICAgIGxldCBzdGF0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCA9IHJvdXRlclN0YXRlLnJvb3QgYXMgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcbiAgICBsZXQgY21zUmVxdWlyZWQgPSBmYWxzZTtcbiAgICBsZXQgY29udGV4dDogUGFnZUNvbnRleHQ7XG4gICAgbGV0IHNlbWFudGljUm91dGU6IHN0cmluZztcbiAgICBsZXQgdXJsU3RyaW5nID0gJyc7XG5cbiAgICB3aGlsZSAoc3RhdGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5maXJzdENoaWxkIGFzIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG4gICAgICB1cmxTdHJpbmcgKz1cbiAgICAgICAgJy8nICsgc3RhdGUudXJsLm1hcCgodXJsU2VnbWVudCkgPT4gdXJsU2VnbWVudC5wYXRoKS5qb2luKCcvJyk7XG5cbiAgICAgIC8vIHdlIHVzZSBzZW1hbnRpYyByb3V0ZSBpbmZvcm1hdGlvbiBlbWJlZGRlZCBmcm9tIGFueSBwYXJlbnQgcm91dGVcbiAgICAgIGlmIChzdGF0ZS5kYXRhPy5jeFJvdXRlKSB7XG4gICAgICAgIHNlbWFudGljUm91dGUgPSBzdGF0ZS5kYXRhPy5jeFJvdXRlO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSB1c2UgY29udGV4dCBpbmZvcm1hdGlvbiBlbWJlZGRlZCBpbiBDbXMgZHJpdmVuIHJvdXRlcyBmcm9tIGFueSBwYXJlbnQgcm91dGVcbiAgICAgIGlmIChzdGF0ZS5kYXRhICYmIHN0YXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IHN0YXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGFzc3VtZSwgdGhhdCBhbnkgcm91dGUgdGhhdCBoYXMgQ21zUGFnZUd1YXJkIG9yIGl0J3MgY2hpbGRcbiAgICAgIC8vIGlzIGNtc1JlcXVpcmVkXG4gICAgICBpZiAoXG4gICAgICAgICFjbXNSZXF1aXJlZCAmJlxuICAgICAgICAoY29udGV4dCB8fFxuICAgICAgICAgIChzdGF0ZS5yb3V0ZUNvbmZpZyAmJlxuICAgICAgICAgICAgc3RhdGUucm91dGVDb25maWcuY2FuQWN0aXZhdGUgJiZcbiAgICAgICAgICAgIHN0YXRlLnJvdXRlQ29uZmlnLmNhbkFjdGl2YXRlLmZpbmQoXG4gICAgICAgICAgICAgICh4KSA9PiB4ICYmIHguZ3VhcmROYW1lID09PSAnQ21zUGFnZUd1YXJkJ1xuICAgICAgICAgICAgKSkpXG4gICAgICApIHtcbiAgICAgICAgY21zUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGBzZW1hbnRpY1JvdXRlYCBjb3VsZG4ndCBiZSBhbHJlYWR5IHJlY29nbml6ZWQgdXNpbmcgYGRhdGEuY3hSb3V0ZWAgcHJvcGVydHlcbiAgICAvLyBsZXQncyBsb29rdXAgdGhlIHJvdXRpbmcgY29uZmlndXJhdGlvbiB0byBmaW5kIHRoZSBzZW1hbnRpYyByb3V0ZSB0aGF0IGhhcyBleGFjdGx5IHRoZSBzYW1lIGNvbmZpZ3VyZWQgcGF0aCBhcyB0aGUgY3VycmVudCBVUkwuXG4gICAgLy8gVGhpcyB3aWxsIHdvcmsgb25seSBmb3Igc2ltcGxlIFVSTHMgd2l0aG91dCBhbnkgZHluYW1pYyByb3V0aW5nIHBhcmFtZXRlcnMuXG4gICAgc2VtYW50aWNSb3V0ZSA9IHNlbWFudGljUm91dGUgfHwgdGhpcy5sb29rdXBTZW1hbnRpY1JvdXRlKHVybFN0cmluZyk7XG5cbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gc3RhdGU7XG4gICAgLy8gd2UgZ2l2ZSBzbWFydGVkaXQgcHJldmlldyBwYWdlIGEgUGFnZUNvbnRleHRcbiAgICBpZiAoc3RhdGUudXJsLmxlbmd0aCA+IDAgJiYgc3RhdGUudXJsWzBdLnBhdGggPT09ICdjeC1wcmV2aWV3Jykge1xuICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgaWQ6ICdzbWFydGVkaXQtcHJldmlldycsXG4gICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHBhcmFtc1sncHJvZHVjdENvZGUnXSwgdHlwZTogUGFnZVR5cGUuUFJPRFVDVF9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtc1snY2F0ZWdvcnlDb2RlJ10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHBhcmFtc1snY2F0ZWdvcnlDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zWydicmFuZENvZGUnXSkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydicmFuZENvZGUnXSwgdHlwZTogUGFnZVR5cGUuQ0FURUdPUllfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5kYXRhLnBhZ2VMYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBzdGF0ZS5kYXRhLnBhZ2VMYWJlbCwgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGlmIChzdGF0ZS51cmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHBhZ2VMYWJlbCA9XG4gICAgICAgICAgICAnLycgKyBzdGF0ZS51cmwubWFwKCh1cmxTZWdtZW50KSA9PiB1cmxTZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgaWQ6IHBhZ2VMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBpZDogJ2hvbWVwYWdlJyxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogcm91dGVyU3RhdGUudXJsLFxuICAgICAgcXVlcnlQYXJhbXM6IHJvdXRlclN0YXRlLnJvb3QucXVlcnlQYXJhbXMsXG4gICAgICBwYXJhbXMsXG4gICAgICBjb250ZXh0LFxuICAgICAgY21zUmVxdWlyZWQsXG4gICAgICBzZW1hbnRpY1JvdXRlLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2VtYW50aWMgcm91dGUgbmFtZSBmb3IgZ2l2ZW4gcGFnZSBsYWJlbC5cbiAgICpcbiAgICogKk5PVEUqOiBJdCB3b3JrcyBvbmx5IGZvciBzaW1wbGUgc3RhdGljIHVybHMgdGhhdCBhcmUgZXF1YWwgdG8gdGhlIHBhZ2UgbGFiZWxcbiAgICogb2YgY21zLWRyaXZlbiBjb250ZW50IHBhZ2UuIEZvciBleGFtcGxlOiBgL215LWFjY291bnQvYWRkcmVzcy1ib29rYC5cbiAgICpcbiAgICogSXQgZG9lc24ndCB3b3JrIGZvciBVUkxzIHdpdGggZHluYW1pYyBwYXJhbWV0ZXJzLiBCdXQgc3VjaCBjYXNlIGNhbiBiZSBoYW5kbGVkXG4gICAqIGJ5IHJlYWRpbmcgdGhlIGRlZmluZWQgYGRhdGEuY3hSb3V0ZWAgZnJvbSB0aGUgQW5ndWxhciBSb3V0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIHBhdGggdG8gYmUgZm91bmQgaW4gdGhlIHJvdXRpbmcgY29uZmlnXG4gICAqL1xuICBwcml2YXRlIGxvb2t1cFNlbWFudGljUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyBQYWdlIGxhYmVsIGlzIGFzc3VtZWQgdG8gc3RhcnQgd2l0aCBgL2AsIGJ1dCBTcGFydGFjdXMgY29uZmlndXJlZCBwYXRoc1xuICAgIC8vIGRvbid0IHN0YXJ0IHdpdGggc2xhc2guIFNvIHdlIHJlbW92ZSB0aGUgbGVhZGluZyBzbGFzaDpcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nQ29uZmlnLmdldFJvdXRlTmFtZShwYXRoLnN1YnN0cigxKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRpbmdDb25maWc6IFJvdXRpbmdDb25maWdTZXJ2aWNlKSB7fVxufVxuIl19