import { Injectable, InjectionToken } from '@angular/core';
import * as fromNgrxRouter from '@ngrx/router-store';
import { PageType } from '../../../model/cms.model';
import { RoutingConfigService } from '../../configurable-routes/routing-config.service';
import { HOME_PAGE_CONTEXT, SMART_EDIT_CONTEXT, } from '../../models/page-context.model';
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
                id: SMART_EDIT_CONTEXT,
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
                        // We like URLs to be driven by the backend, the CMS actually returns the homepage
                        // if no page label is given. Our logic however requires an id. undefined doesn't work.
                        id: HOME_PAGE_CONTEXT,
                        // We currently need to support a hardcoded page type, since the internal store uses the page
                        // type to store the content.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9yb3V0aW5nL3N0b3JlL3JlZHVjZXJzL3JvdXRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sS0FBSyxjQUFjLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRXhGLE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsa0JBQWtCLEdBQ25CLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPcEUsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFnQjtJQUN2QyxZQUFZLEVBQUUsQ0FBQztJQUNmLEtBQUssRUFBRTtRQUNMLEdBQUcsRUFBRSxFQUFFO1FBQ1AsV0FBVyxFQUFFLEVBQUU7UUFDZixNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxFQUFFO1NBQ1A7UUFDRCxXQUFXLEVBQUUsS0FBSztRQUNsQixhQUFhLEVBQUUsU0FBUztLQUN6QjtJQUNELFNBQVMsRUFBRSxTQUFTO0NBQ3JCLENBQUM7QUFFRixNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsTUFBTSxFQUFFLE9BQU87S0FDaEIsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixRQUFxQixZQUFZLEVBQ2pDLE1BQVc7O0lBRVgsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDckMsdUNBQ0ss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WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgZnJvbU5ncnhSb3V0ZXIgZnJvbSAnQG5ncngvcm91dGVyLXN0b3JlJztcbmltcG9ydCB7IEFjdGlvblJlZHVjZXJNYXAgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvcm91dGluZy1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ntcy1yb3V0ZSc7XG5pbXBvcnQge1xuICBIT01FX1BBR0VfQ09OVEVYVCxcbiAgUGFnZUNvbnRleHQsXG4gIFNNQVJUX0VESVRfQ09OVEVYVCxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDSEFOR0VfTkVYVF9QQUdFX0NPTlRFWFQgfSBmcm9tICcuLi9hY3Rpb25zL3JvdXRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgUm91dGVyU3RhdGUsXG4gIFN0YXRlLFxufSBmcm9tICcuLi9yb3V0aW5nLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUm91dGVyU3RhdGUgPSB7XG4gIG5hdmlnYXRpb25JZDogMCxcbiAgc3RhdGU6IHtcbiAgICB1cmw6ICcnLFxuICAgIHF1ZXJ5UGFyYW1zOiB7fSxcbiAgICBwYXJhbXM6IHt9LFxuICAgIGNvbnRleHQ6IHtcbiAgICAgIGlkOiAnJyxcbiAgICB9LFxuICAgIGNtc1JlcXVpcmVkOiBmYWxzZSxcbiAgICBzZW1hbnRpY1JvdXRlOiB1bmRlZmluZWQsXG4gIH0sXG4gIG5leHRTdGF0ZTogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICByb3V0ZXI6IHJlZHVjZXIsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZTogUm91dGVyU3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogYW55XG4pOiBSb3V0ZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9OQVZJR0FUSU9OOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmV4dFN0YXRlOiBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZSxcbiAgICAgICAgbmF2aWdhdGlvbklkOiBhY3Rpb24ucGF5bG9hZC5ldmVudC5pZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfRVJST1I6XG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfQ0FOQ0VMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmV4dFN0YXRlOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0hBTkdFX05FWFRfUEFHRV9DT05URVhUOiB7XG4gICAgICByZXR1cm4gc3RhdGUubmV4dFN0YXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBuZXh0U3RhdGU6IHsgLi4uc3RhdGUubmV4dFN0YXRlLCBjb250ZXh0OiBhY3Rpb24ucGF5bG9hZCB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiBzdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9OQVZJR0FURUQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUsXG4gICAgICAgICAgY29udGV4dDpcbiAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gcHJlc2VydmUgYWxyZWFkeSByZXNvbHZlZCBjb250ZXh0LFxuICAgICAgICAgICAgLy8gaW4gY2FzZSBpdCB3YXMgY2hhbmdlZCB3aGlsZSBuYXZpZ2F0aW5nXG4gICAgICAgICAgICBzdGF0ZS5uZXh0U3RhdGU/LmNvbnRleHQgPz8gYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUuY29udGV4dCxcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbklkOiBhY3Rpb24ucGF5bG9hZC5ldmVudC5pZCxcbiAgICAgICAgbmV4dFN0YXRlOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxcbiAgU3RhdGVcbj4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+PignUm91dGVyUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG4vKiBUaGUgc2VyaWFsaXplciBpcyB0aGVyZSB0byBwYXJzZSB0aGUgUm91dGVyU3RhdGVTbmFwc2hvdCxcbmFuZCB0byByZWR1Y2UgdGhlIGFtb3VudCBvZiBwcm9wZXJ0aWVzIHRvIGJlIHBhc3NlZCB0byB0aGUgcmVkdWNlci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbVNlcmlhbGl6ZXJcbiAgaW1wbGVtZW50c1xuICAgIGZyb21OZ3J4Um91dGVyLlJvdXRlclN0YXRlU2VyaWFsaXplcjxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gIHNlcmlhbGl6ZShyb3V0ZXJTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICAgIGxldCBzdGF0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCA9IHJvdXRlclN0YXRlLnJvb3QgYXMgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcbiAgICBsZXQgY21zUmVxdWlyZWQgPSBmYWxzZTtcbiAgICBsZXQgY29udGV4dDogUGFnZUNvbnRleHQ7XG4gICAgbGV0IHNlbWFudGljUm91dGU6IHN0cmluZztcbiAgICBsZXQgdXJsU3RyaW5nID0gJyc7XG5cbiAgICB3aGlsZSAoc3RhdGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5maXJzdENoaWxkIGFzIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG4gICAgICB1cmxTdHJpbmcgKz1cbiAgICAgICAgJy8nICsgc3RhdGUudXJsLm1hcCgodXJsU2VnbWVudCkgPT4gdXJsU2VnbWVudC5wYXRoKS5qb2luKCcvJyk7XG5cbiAgICAgIC8vIHdlIHVzZSBzZW1hbnRpYyByb3V0ZSBpbmZvcm1hdGlvbiBlbWJlZGRlZCBmcm9tIGFueSBwYXJlbnQgcm91dGVcbiAgICAgIGlmIChzdGF0ZS5kYXRhPy5jeFJvdXRlKSB7XG4gICAgICAgIHNlbWFudGljUm91dGUgPSBzdGF0ZS5kYXRhPy5jeFJvdXRlO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSB1c2UgY29udGV4dCBpbmZvcm1hdGlvbiBlbWJlZGRlZCBpbiBDbXMgZHJpdmVuIHJvdXRlcyBmcm9tIGFueSBwYXJlbnQgcm91dGVcbiAgICAgIGlmIChzdGF0ZS5kYXRhICYmIHN0YXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IHN0YXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGFzc3VtZSwgdGhhdCBhbnkgcm91dGUgdGhhdCBoYXMgQ21zUGFnZUd1YXJkIG9yIGl0J3MgY2hpbGRcbiAgICAgIC8vIGlzIGNtc1JlcXVpcmVkXG4gICAgICBpZiAoXG4gICAgICAgICFjbXNSZXF1aXJlZCAmJlxuICAgICAgICAoY29udGV4dCB8fFxuICAgICAgICAgIChzdGF0ZS5yb3V0ZUNvbmZpZyAmJlxuICAgICAgICAgICAgc3RhdGUucm91dGVDb25maWcuY2FuQWN0aXZhdGUgJiZcbiAgICAgICAgICAgIHN0YXRlLnJvdXRlQ29uZmlnLmNhbkFjdGl2YXRlLmZpbmQoXG4gICAgICAgICAgICAgICh4KSA9PiB4ICYmIHguZ3VhcmROYW1lID09PSAnQ21zUGFnZUd1YXJkJ1xuICAgICAgICAgICAgKSkpXG4gICAgICApIHtcbiAgICAgICAgY21zUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGBzZW1hbnRpY1JvdXRlYCBjb3VsZG4ndCBiZSBhbHJlYWR5IHJlY29nbml6ZWQgdXNpbmcgYGRhdGEuY3hSb3V0ZWAgcHJvcGVydHlcbiAgICAvLyBsZXQncyBsb29rdXAgdGhlIHJvdXRpbmcgY29uZmlndXJhdGlvbiB0byBmaW5kIHRoZSBzZW1hbnRpYyByb3V0ZSB0aGF0IGhhcyBleGFjdGx5IHRoZSBzYW1lIGNvbmZpZ3VyZWQgcGF0aCBhcyB0aGUgY3VycmVudCBVUkwuXG4gICAgLy8gVGhpcyB3aWxsIHdvcmsgb25seSBmb3Igc2ltcGxlIFVSTHMgd2l0aG91dCBhbnkgZHluYW1pYyByb3V0aW5nIHBhcmFtZXRlcnMuXG4gICAgc2VtYW50aWNSb3V0ZSA9IHNlbWFudGljUm91dGUgfHwgdGhpcy5sb29rdXBTZW1hbnRpY1JvdXRlKHVybFN0cmluZyk7XG5cbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gc3RhdGU7XG4gICAgLy8gd2UgZ2l2ZSBzbWFydGVkaXQgcHJldmlldyBwYWdlIGEgUGFnZUNvbnRleHRcbiAgICBpZiAoc3RhdGUudXJsLmxlbmd0aCA+IDAgJiYgc3RhdGUudXJsWzBdLnBhdGggPT09ICdjeC1wcmV2aWV3Jykge1xuICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgaWQ6IFNNQVJUX0VESVRfQ09OVEVYVCxcbiAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmFtc1sncHJvZHVjdENvZGUnXSkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydwcm9kdWN0Q29kZSddLCB0eXBlOiBQYWdlVHlwZS5QUk9EVUNUX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zWydjYXRlZ29yeUNvZGUnXSkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydjYXRlZ29yeUNvZGUnXSwgdHlwZTogUGFnZVR5cGUuQ0FURUdPUllfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNbJ2JyYW5kQ29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ2JyYW5kQ29kZSddLCB0eXBlOiBQYWdlVHlwZS5DQVRFR09SWV9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmRhdGEucGFnZUxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHN0YXRlLmRhdGEucGFnZUxhYmVsLCB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgaWYgKHN0YXRlLnVybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgcGFnZUxhYmVsID1cbiAgICAgICAgICAgICcvJyArIHN0YXRlLnVybC5tYXAoKHVybFNlZ21lbnQpID0+IHVybFNlZ21lbnQucGF0aCkuam9pbignLycpO1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBpZDogcGFnZUxhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIC8vIFdlIGxpa2UgVVJMcyB0byBiZSBkcml2ZW4gYnkgdGhlIGJhY2tlbmQsIHRoZSBDTVMgYWN0dWFsbHkgcmV0dXJucyB0aGUgaG9tZXBhZ2VcbiAgICAgICAgICAgIC8vIGlmIG5vIHBhZ2UgbGFiZWwgaXMgZ2l2ZW4uIE91ciBsb2dpYyBob3dldmVyIHJlcXVpcmVzIGFuIGlkLiB1bmRlZmluZWQgZG9lc24ndCB3b3JrLlxuICAgICAgICAgICAgaWQ6IEhPTUVfUEFHRV9DT05URVhULFxuXG4gICAgICAgICAgICAvLyBXZSBjdXJyZW50bHkgbmVlZCB0byBzdXBwb3J0IGEgaGFyZGNvZGVkIHBhZ2UgdHlwZSwgc2luY2UgdGhlIGludGVybmFsIHN0b3JlIHVzZXMgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIHR5cGUgdG8gc3RvcmUgdGhlIGNvbnRlbnQuXG4gICAgICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1cmw6IHJvdXRlclN0YXRlLnVybCxcbiAgICAgIHF1ZXJ5UGFyYW1zOiByb3V0ZXJTdGF0ZS5yb290LnF1ZXJ5UGFyYW1zLFxuICAgICAgcGFyYW1zLFxuICAgICAgY29udGV4dCxcbiAgICAgIGNtc1JlcXVpcmVkLFxuICAgICAgc2VtYW50aWNSb3V0ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNlbWFudGljIHJvdXRlIG5hbWUgZm9yIGdpdmVuIHBhZ2UgbGFiZWwuXG4gICAqXG4gICAqICpOT1RFKjogSXQgd29ya3Mgb25seSBmb3Igc2ltcGxlIHN0YXRpYyB1cmxzIHRoYXQgYXJlIGVxdWFsIHRvIHRoZSBwYWdlIGxhYmVsXG4gICAqIG9mIGNtcy1kcml2ZW4gY29udGVudCBwYWdlLiBGb3IgZXhhbXBsZTogYC9teS1hY2NvdW50L2FkZHJlc3MtYm9va2AuXG4gICAqXG4gICAqIEl0IGRvZXNuJ3Qgd29yayBmb3IgVVJMcyB3aXRoIGR5bmFtaWMgcGFyYW1ldGVycy4gQnV0IHN1Y2ggY2FzZSBjYW4gYmUgaGFuZGxlZFxuICAgKiBieSByZWFkaW5nIHRoZSBkZWZpbmVkIGBkYXRhLmN4Um91dGVgIGZyb20gdGhlIEFuZ3VsYXIgUm91dGVzLlxuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBwYXRoIHRvIGJlIGZvdW5kIGluIHRoZSByb3V0aW5nIGNvbmZpZ1xuICAgKi9cbiAgcHJpdmF0ZSBsb29rdXBTZW1hbnRpY1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gUGFnZSBsYWJlbCBpcyBhc3N1bWVkIHRvIHN0YXJ0IHdpdGggYC9gLCBidXQgU3BhcnRhY3VzIGNvbmZpZ3VyZWQgcGF0aHNcbiAgICAvLyBkb24ndCBzdGFydCB3aXRoIHNsYXNoLiBTbyB3ZSByZW1vdmUgdGhlIGxlYWRpbmcgc2xhc2g6XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZy5nZXRSb3V0ZU5hbWUocGF0aC5zdWJzdHIoMSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0aW5nQ29uZmlnOiBSb3V0aW5nQ29uZmlnU2VydmljZSkge31cbn1cbiJdfQ==