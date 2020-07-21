import { __decorate } from "tslib";
import { Injectable, InjectionToken } from '@angular/core';
import * as fromNgrxRouter from '@ngrx/router-store';
import { PageType } from '../../../model/cms.model';
import { RoutingConfigService } from '../../configurable-routes/routing-config.service';
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
    switch (action.type) {
        case fromNgrxRouter.ROUTER_NAVIGATION: {
            return Object.assign(Object.assign({}, state), { nextState: action.payload.routerState, navigationId: action.payload.event.id });
        }
        case fromNgrxRouter.ROUTER_ERROR:
        case fromNgrxRouter.ROUTER_CANCEL: {
            return Object.assign(Object.assign({}, state), { nextState: undefined });
        }
        case fromNgrxRouter.ROUTER_NAVIGATED: {
            return {
                state: action.payload.routerState,
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
let CustomSerializer = class CustomSerializer {
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
};
CustomSerializer.ctorParameters = () => [
    { type: RoutingConfigService }
];
CustomSerializer = __decorate([
    Injectable()
], CustomSerializer);
export { CustomSerializer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxLQUFLLGNBQWMsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFTeEYsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFnQjtJQUN2QyxZQUFZLEVBQUUsQ0FBQztJQUNmLEtBQUssRUFBRTtRQUNMLEdBQUcsRUFBRSxFQUFFO1FBQ1AsV0FBVyxFQUFFLEVBQUU7UUFDZixNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxFQUFFO1NBQ1A7UUFDRCxXQUFXLEVBQUUsS0FBSztRQUNsQixhQUFhLEVBQUUsU0FBUztLQUN6QjtJQUNELFNBQVMsRUFBRSxTQUFTO0NBQ3JCLENBQUM7QUFFRixNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsTUFBTSxFQUFFLE9BQU87S0FDaEIsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixRQUFxQixZQUFZLEVBQ2pDLE1BQVc7SUFFWCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNyQyx1Q0FDSyxLQUFLLEtBQ1IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUNyQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUNyQztTQUNIO1FBRUQsS0FBSyxj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O3FCQUFNO29CQUNMLE9BQU8sR0FBRzt3QkFDUixFQUFFLEVBQUUsVUFBVTt3QkFDZCxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7cUJBQzVCLENBQUM7aUJBQ0g7YUFDRjtTQUNGO1FBRUQsT0FBTztZQUNMLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRztZQUNwQixXQUFXLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ3pDLE1BQU07WUFDTixPQUFPO1lBQ1AsV0FBVztZQUNYLGFBQWE7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSyxtQkFBbUIsQ0FBQyxJQUFZO1FBQ3RDLDBFQUEwRTtRQUMxRSwwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUdGLENBQUE7O1lBRG9DLG9CQUFvQjs7QUF6RzVDLGdCQUFnQjtJQUQ1QixVQUFVLEVBQUU7R0FDQSxnQkFBZ0IsQ0EwRzVCO1NBMUdZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBmcm9tTmdyeFJvdXRlciBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlck1hcCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlndXJhYmxlLXJvdXRlcy9yb3V0aW5nLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY21zLXJvdXRlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBSb3V0ZXJTdGF0ZSxcbiAgU3RhdGUsXG59IGZyb20gJy4uL3JvdXRpbmctc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBSb3V0ZXJTdGF0ZSA9IHtcbiAgbmF2aWdhdGlvbklkOiAwLFxuICBzdGF0ZToge1xuICAgIHVybDogJycsXG4gICAgcXVlcnlQYXJhbXM6IHt9LFxuICAgIHBhcmFtczoge30sXG4gICAgY29udGV4dDoge1xuICAgICAgaWQ6ICcnLFxuICAgIH0sXG4gICAgY21zUmVxdWlyZWQ6IGZhbHNlLFxuICAgIHNlbWFudGljUm91dGU6IHVuZGVmaW5lZCxcbiAgfSxcbiAgbmV4dFN0YXRlOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIHJvdXRlcjogcmVkdWNlcixcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlOiBSb3V0ZXJTdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBhbnlcbik6IFJvdXRlclN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX05BVklHQVRJT046IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXh0U3RhdGU6IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlLFxuICAgICAgICBuYXZpZ2F0aW9uSWQ6IGFjdGlvbi5wYXlsb2FkLmV2ZW50LmlkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9FUlJPUjpcbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9DQU5DRUw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXh0U3RhdGU6IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfTkFWSUdBVEVEOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0ZTogYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUsXG4gICAgICAgIG5hdmlnYXRpb25JZDogYWN0aW9uLnBheWxvYWQuZXZlbnQuaWQsXG4gICAgICAgIG5leHRTdGF0ZTogdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8XG4gIFN0YXRlXG4+PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPj4oJ1JvdXRlclJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuLyogVGhlIHNlcmlhbGl6ZXIgaXMgdGhlcmUgdG8gcGFyc2UgdGhlIFJvdXRlclN0YXRlU25hcHNob3QsXG5hbmQgdG8gcmVkdWNlIHRoZSBhbW91bnQgb2YgcHJvcGVydGllcyB0byBiZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXN0b21TZXJpYWxpemVyXG4gIGltcGxlbWVudHNcbiAgICBmcm9tTmdyeFJvdXRlci5Sb3V0ZXJTdGF0ZVNlcmlhbGl6ZXI8QWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdD4ge1xuICBzZXJpYWxpemUocm91dGVyU3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90IHtcbiAgICBsZXQgc3RhdGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QgPSByb3V0ZXJTdGF0ZS5yb290IGFzIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG4gICAgbGV0IGNtc1JlcXVpcmVkID0gZmFsc2U7XG4gICAgbGV0IGNvbnRleHQ6IFBhZ2VDb250ZXh0O1xuICAgIGxldCBzZW1hbnRpY1JvdXRlOiBzdHJpbmc7XG4gICAgbGV0IHVybFN0cmluZyA9ICcnO1xuXG4gICAgd2hpbGUgKHN0YXRlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0YXRlID0gc3RhdGUuZmlyc3RDaGlsZCBhcyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuICAgICAgdXJsU3RyaW5nICs9XG4gICAgICAgICcvJyArIHN0YXRlLnVybC5tYXAoKHVybFNlZ21lbnQpID0+IHVybFNlZ21lbnQucGF0aCkuam9pbignLycpO1xuXG4gICAgICAvLyB3ZSB1c2Ugc2VtYW50aWMgcm91dGUgaW5mb3JtYXRpb24gZW1iZWRkZWQgZnJvbSBhbnkgcGFyZW50IHJvdXRlXG4gICAgICBpZiAoc3RhdGUuZGF0YT8uY3hSb3V0ZSkge1xuICAgICAgICBzZW1hbnRpY1JvdXRlID0gc3RhdGUuZGF0YT8uY3hSb3V0ZTtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgdXNlIGNvbnRleHQgaW5mb3JtYXRpb24gZW1iZWRkZWQgaW4gQ21zIGRyaXZlbiByb3V0ZXMgZnJvbSBhbnkgcGFyZW50IHJvdXRlXG4gICAgICBpZiAoc3RhdGUuZGF0YSAmJiBzdGF0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBzdGF0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0O1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhc3N1bWUsIHRoYXQgYW55IHJvdXRlIHRoYXQgaGFzIENtc1BhZ2VHdWFyZCBvciBpdCdzIGNoaWxkXG4gICAgICAvLyBpcyBjbXNSZXF1aXJlZFxuICAgICAgaWYgKFxuICAgICAgICAhY21zUmVxdWlyZWQgJiZcbiAgICAgICAgKGNvbnRleHQgfHxcbiAgICAgICAgICAoc3RhdGUucm91dGVDb25maWcgJiZcbiAgICAgICAgICAgIHN0YXRlLnJvdXRlQ29uZmlnLmNhbkFjdGl2YXRlICYmXG4gICAgICAgICAgICBzdGF0ZS5yb3V0ZUNvbmZpZy5jYW5BY3RpdmF0ZS5maW5kKFxuICAgICAgICAgICAgICAoeCkgPT4geCAmJiB4Lmd1YXJkTmFtZSA9PT0gJ0Ntc1BhZ2VHdWFyZCdcbiAgICAgICAgICAgICkpKVxuICAgICAgKSB7XG4gICAgICAgIGNtc1JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBgc2VtYW50aWNSb3V0ZWAgY291bGRuJ3QgYmUgYWxyZWFkeSByZWNvZ25pemVkIHVzaW5nIGBkYXRhLmN4Um91dGVgIHByb3BlcnR5XG4gICAgLy8gbGV0J3MgbG9va3VwIHRoZSByb3V0aW5nIGNvbmZpZ3VyYXRpb24gdG8gZmluZCB0aGUgc2VtYW50aWMgcm91dGUgdGhhdCBoYXMgZXhhY3RseSB0aGUgc2FtZSBjb25maWd1cmVkIHBhdGggYXMgdGhlIGN1cnJlbnQgVVJMLlxuICAgIC8vIFRoaXMgd2lsbCB3b3JrIG9ubHkgZm9yIHNpbXBsZSBVUkxzIHdpdGhvdXQgYW55IGR5bmFtaWMgcm91dGluZyBwYXJhbWV0ZXJzLlxuICAgIHNlbWFudGljUm91dGUgPSBzZW1hbnRpY1JvdXRlIHx8IHRoaXMubG9va3VwU2VtYW50aWNSb3V0ZSh1cmxTdHJpbmcpO1xuXG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IHN0YXRlO1xuICAgIC8vIHdlIGdpdmUgc21hcnRlZGl0IHByZXZpZXcgcGFnZSBhIFBhZ2VDb250ZXh0XG4gICAgaWYgKHN0YXRlLnVybC5sZW5ndGggPiAwICYmIHN0YXRlLnVybFswXS5wYXRoID09PSAnY3gtcHJldmlldycpIHtcbiAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgIGlkOiAnc21hcnRlZGl0LXByZXZpZXcnLFxuICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zWydwcm9kdWN0Q29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ3Byb2R1Y3RDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNbJ2NhdGVnb3J5Q29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ2NhdGVnb3J5Q29kZSddLCB0eXBlOiBQYWdlVHlwZS5DQVRFR09SWV9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtc1snYnJhbmRDb2RlJ10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHBhcmFtc1snYnJhbmRDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZGF0YS5wYWdlTGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogc3RhdGUuZGF0YS5wYWdlTGFiZWwsIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmICghY29udGV4dCkge1xuICAgICAgICBpZiAoc3RhdGUudXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBwYWdlTGFiZWwgPVxuICAgICAgICAgICAgJy8nICsgc3RhdGUudXJsLm1hcCgodXJsU2VnbWVudCkgPT4gdXJsU2VnbWVudC5wYXRoKS5qb2luKCcvJyk7XG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIGlkOiBwYWdlTGFiZWwsXG4gICAgICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgaWQ6ICdob21lcGFnZScsXG4gICAgICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1cmw6IHJvdXRlclN0YXRlLnVybCxcbiAgICAgIHF1ZXJ5UGFyYW1zOiByb3V0ZXJTdGF0ZS5yb290LnF1ZXJ5UGFyYW1zLFxuICAgICAgcGFyYW1zLFxuICAgICAgY29udGV4dCxcbiAgICAgIGNtc1JlcXVpcmVkLFxuICAgICAgc2VtYW50aWNSb3V0ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNlbWFudGljIHJvdXRlIG5hbWUgZm9yIGdpdmVuIHBhZ2UgbGFiZWwuXG4gICAqXG4gICAqICpOT1RFKjogSXQgd29ya3Mgb25seSBmb3Igc2ltcGxlIHN0YXRpYyB1cmxzIHRoYXQgYXJlIGVxdWFsIHRvIHRoZSBwYWdlIGxhYmVsXG4gICAqIG9mIGNtcy1kcml2ZW4gY29udGVudCBwYWdlLiBGb3IgZXhhbXBsZTogYC9teS1hY2NvdW50L2FkZHJlc3MtYm9va2AuXG4gICAqXG4gICAqIEl0IGRvZXNuJ3Qgd29yayBmb3IgVVJMcyB3aXRoIGR5bmFtaWMgcGFyYW1ldGVycy4gQnV0IHN1Y2ggY2FzZSBjYW4gYmUgaGFuZGxlZFxuICAgKiBieSByZWFkaW5nIHRoZSBkZWZpbmVkIGBkYXRhLmN4Um91dGVgIGZyb20gdGhlIEFuZ3VsYXIgUm91dGVzLlxuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBwYXRoIHRvIGJlIGZvdW5kIGluIHRoZSByb3V0aW5nIGNvbmZpZ1xuICAgKi9cbiAgcHJpdmF0ZSBsb29rdXBTZW1hbnRpY1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gUGFnZSBsYWJlbCBpcyBhc3N1bWVkIHRvIHN0YXJ0IHdpdGggYC9gLCBidXQgU3BhcnRhY3VzIGNvbmZpZ3VyZWQgcGF0aHNcbiAgICAvLyBkb24ndCBzdGFydCB3aXRoIHNsYXNoLiBTbyB3ZSByZW1vdmUgdGhlIGxlYWRpbmcgc2xhc2g6XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZy5nZXRSb3V0ZU5hbWUocGF0aC5zdWJzdHIoMSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0aW5nQ29uZmlnOiBSb3V0aW5nQ29uZmlnU2VydmljZSkge31cbn1cbiJdfQ==