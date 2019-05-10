/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import * as fromNgrxRouter from '@ngrx/router-store';
import * as fromActions from '../actions';
import { ROUTING_FEATURE } from '../../state';
import { PageType } from '../../../model/cms.model';
/**
 * @record
 */
export function RouterState() { }
if (false) {
    /** @type {?} */
    RouterState.prototype.redirectUrl;
    /** @type {?|undefined} */
    RouterState.prototype.nextState;
}
/** @type {?} */
export const initialState = {
    redirectUrl: '',
    navigationId: 0,
    state: {
        url: '',
        queryParams: {},
        params: {},
        context: {
            id: '',
        },
        cmsRequired: false,
    },
    nextState: undefined,
};
/**
 * @record
 */
export function ActivatedRouterStateSnapshot() { }
if (false) {
    /** @type {?} */
    ActivatedRouterStateSnapshot.prototype.url;
    /** @type {?} */
    ActivatedRouterStateSnapshot.prototype.queryParams;
    /** @type {?} */
    ActivatedRouterStateSnapshot.prototype.params;
    /** @type {?} */
    ActivatedRouterStateSnapshot.prototype.context;
    /** @type {?} */
    ActivatedRouterStateSnapshot.prototype.cmsRequired;
}
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.router;
}
/**
 * @return {?}
 */
export function getReducers() {
    return {
        router: reducer,
    };
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromActions.SAVE_REDIRECT_URL: {
            return Object.assign({}, state, { redirectUrl: action.payload });
        }
        case fromActions.CLEAR_REDIRECT_URL: {
            return Object.assign({}, state, { redirectUrl: '' });
        }
        case fromNgrxRouter.ROUTER_NAVIGATION: {
            return Object.assign({}, state, { nextState: action.payload.routerState, navigationId: action.payload.event.id });
        }
        case fromNgrxRouter.ROUTER_NAVIGATED:
        case fromNgrxRouter.ROUTER_ERROR:
        case fromNgrxRouter.ROUTER_CANCEL: {
            /** @type {?} */
            const currentUrl = action.payload.routerState
                ? action.payload.routerState.url
                : '';
            /** @type {?} */
            const contextId = action.payload.routerState
                ? action.payload.routerState.context.id
                : '';
            /** @type {?} */
            let redirectUrl;
            if (contextId === 'login' ||
                contextId === 'register' ||
                currentUrl === state.redirectUrl) {
                redirectUrl = state.redirectUrl;
            }
            else {
                redirectUrl = '';
            }
            return {
                redirectUrl: redirectUrl,
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
/** @type {?} */
export const reducerToken = new InjectionToken('RouterReducers');
/** @type {?} */
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/** @type {?} */
export const getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
/** @type {?} */
export const getRouterState = createSelector(getRouterFeatureState, state => state.router);
/** @type {?} */
export const getPageContext = createSelector(getRouterState, (routingState) => (routingState.state && routingState.state.context) || { id: '' });
/** @type {?} */
export const getNextPageContext = createSelector(getRouterState, (routingState) => routingState.nextState && routingState.nextState.context);
/** @type {?} */
export const isNavigating = createSelector(getNextPageContext, context => !!context);
/** @type {?} */
export const getRedirectUrl = createSelector(getRouterState, state => state.redirectUrl);
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
export class CustomSerializer {
    /**
     * @param {?} routerState
     * @return {?}
     */
    serialize(routerState) {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        /** @type {?} */
        let state = (/** @type {?} */ (routerState.root));
        /** @type {?} */
        let cmsRequired = false;
        /** @type {?} */
        let context;
        while (state.firstChild) {
            state = (/** @type {?} */ (state.firstChild));
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
                        state.routeConfig.canActivate.find(x => x && x.guardName === 'CmsPageGuard')))) {
                cmsRequired = true;
            }
        }
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
            else if (params['query']) {
                context = { id: 'search', type: PageType.CONTENT_PAGE };
            }
            else if (state.data.pageLabel !== undefined) {
                context = { id: state.data.pageLabel, type: PageType.CONTENT_PAGE };
            }
            else if (!context) {
                if (state.url.length > 0) {
                    /** @type {?} */
                    const pageLabel = '/' + state.url.map(urlSegment => urlSegment.path).join('/');
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
        return { url, queryParams, params, context, cmsRequired };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBRUwscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEtBQUssY0FBYyxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sS0FBSyxXQUFXLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXBELGlDQUlDOzs7SUFGQyxrQ0FBb0I7O0lBQ3BCLGdDQUF5Qzs7O0FBRzNDLE1BQU0sT0FBTyxZQUFZLEdBQWdCO0lBQ3ZDLFdBQVcsRUFBRSxFQUFFO0lBQ2YsWUFBWSxFQUFFLENBQUM7SUFDZixLQUFLLEVBQUU7UUFDTCxHQUFHLEVBQUUsRUFBRTtRQUNQLFdBQVcsRUFBRSxFQUFFO1FBQ2YsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsRUFBRTtTQUNQO1FBQ0QsV0FBVyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxTQUFTLEVBQUUsU0FBUztDQUNyQjs7OztBQUVELGtEQU1DOzs7SUFMQywyQ0FBWTs7SUFDWixtREFBb0I7O0lBQ3BCLDhDQUFlOztJQUNmLCtDQUFxQjs7SUFDckIsbURBQXFCOzs7OztBQUd2QiwyQkFFQzs7O0lBREMsdUJBQW9COzs7OztBQUd0QixNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsTUFBTSxFQUFFLE9BQU87S0FDaEIsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFB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RyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQzlELE9BQU8sR0FBRzt3QkFDUixFQUFFLEVBQUUsU0FBUzt3QkFDYixJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7cUJBQzVCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxHQUFHO3dCQUNSLEVBQUUsRUFBRSxVQUFVO3dCQUNkLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTtxQkFDNUIsQ0FBQztpQkFDSDthQUNGO1NBQ0Y7UUFFRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQzVELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFyYW1zLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0ICogYXMgZnJvbU5ncnhSb3V0ZXIgZnJvbSAnQG5ncngvcm91dGVyLXN0b3JlJztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBST1VUSU5HX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJy4uLy4uL21vZGVscy9jbXMtcm91dGUnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlclN0YXRlXG4gIGV4dGVuZHMgZnJvbU5ncnhSb3V0ZXIuUm91dGVyUmVkdWNlclN0YXRlPEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgcmVkaXJlY3RVcmw6IHN0cmluZztcbiAgbmV4dFN0YXRlPzogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdDtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUm91dGVyU3RhdGUgPSB7XG4gIHJlZGlyZWN0VXJsOiAnJyxcbiAgbmF2aWdhdGlvbklkOiAwLFxuICBzdGF0ZToge1xuICAgIHVybDogJycsXG4gICAgcXVlcnlQYXJhbXM6IHt9LFxuICAgIHBhcmFtczoge30sXG4gICAgY29udGV4dDoge1xuICAgICAgaWQ6ICcnLFxuICAgIH0sXG4gICAgY21zUmVxdWlyZWQ6IGZhbHNlLFxuICB9LFxuICBuZXh0U3RhdGU6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCB7XG4gIHVybDogc3RyaW5nO1xuICBxdWVyeVBhcmFtczogUGFyYW1zO1xuICBwYXJhbXM6IFBhcmFtcztcbiAgY29udGV4dDogUGFnZUNvbnRleHQ7XG4gIGNtc1JlcXVpcmVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgcm91dGVyOiBSb3V0ZXJTdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICByb3V0ZXI6IHJlZHVjZXIsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZTogUm91dGVyU3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogYW55XG4pOiBSb3V0ZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb25zLlNBVkVfUkVESVJFQ1RfVVJMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVkaXJlY3RVcmw6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBmcm9tQWN0aW9ucy5DTEVBUl9SRURJUkVDVF9VUkw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWRpcmVjdFVybDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9OQVZJR0FUSU9OOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmV4dFN0YXRlOiBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZSxcbiAgICAgICAgbmF2aWdhdGlvbklkOiBhY3Rpb24ucGF5bG9hZC5ldmVudC5pZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfTkFWSUdBVEVEOlxuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX0VSUk9SOlxuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX0NBTkNFTDoge1xuICAgICAgY29uc3QgY3VycmVudFVybCA9IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlXG4gICAgICAgID8gYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUudXJsXG4gICAgICAgIDogJyc7XG4gICAgICBjb25zdCBjb250ZXh0SWQgPSBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZVxuICAgICAgICA/IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlLmNvbnRleHQuaWRcbiAgICAgICAgOiAnJztcbiAgICAgIGxldCByZWRpcmVjdFVybDtcbiAgICAgIGlmIChcbiAgICAgICAgY29udGV4dElkID09PSAnbG9naW4nIHx8XG4gICAgICAgIGNvbnRleHRJZCA9PT0gJ3JlZ2lzdGVyJyB8fFxuICAgICAgICBjdXJyZW50VXJsID09PSBzdGF0ZS5yZWRpcmVjdFVybFxuICAgICAgKSB7XG4gICAgICAgIHJlZGlyZWN0VXJsID0gc3RhdGUucmVkaXJlY3RVcmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWRpcmVjdFVybCA9ICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWRpcmVjdFVybDogcmVkaXJlY3RVcmwsXG4gICAgICAgIHN0YXRlOiBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZSxcbiAgICAgICAgbmF2aWdhdGlvbklkOiBhY3Rpb24ucGF5bG9hZC5ldmVudC5pZCxcbiAgICAgICAgbmV4dFN0YXRlOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPj4oJ1JvdXRlclJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldFJvdXRlckZlYXR1cmVTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBTdGF0ZVxuPiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxTdGF0ZT4oUk9VVElOR19GRUFUVVJFKTtcblxuZXhwb3J0IGNvbnN0IGdldFJvdXRlclN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIFJvdXRlclN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJvdXRlckZlYXR1cmVTdGF0ZSxcbiAgc3RhdGUgPT4gc3RhdGUucm91dGVyXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUNvbnRleHQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgUGFnZUNvbnRleHRcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Um91dGVyU3RhdGUsXG4gIChyb3V0aW5nU3RhdGU6IFJvdXRlclN0YXRlKSA9PlxuICAgIChyb3V0aW5nU3RhdGUuc3RhdGUgJiYgcm91dGluZ1N0YXRlLnN0YXRlLmNvbnRleHQpIHx8IHsgaWQ6ICcnIH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXROZXh0UGFnZUNvbnRleHQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgUGFnZUNvbnRleHRcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Um91dGVyU3RhdGUsXG4gIChyb3V0aW5nU3RhdGU6IFJvdXRlclN0YXRlKSA9PlxuICAgIHJvdXRpbmdTdGF0ZS5uZXh0U3RhdGUgJiYgcm91dGluZ1N0YXRlLm5leHRTdGF0ZS5jb250ZXh0XG4pO1xuXG5leHBvcnQgY29uc3QgaXNOYXZpZ2F0aW5nOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgYm9vbGVhbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0TmV4dFBhZ2VDb250ZXh0LFxuICBjb250ZXh0ID0+ICEhY29udGV4dFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFJlZGlyZWN0VXJsOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgc3RyaW5nPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJTdGF0ZSxcbiAgc3RhdGUgPT4gc3RhdGUucmVkaXJlY3RVcmxcbik7XG5cbi8qIFRoZSBzZXJpYWxpemVyIGlzIHRoZXJlIHRvIHBhcnNlIHRoZSBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuYW5kIHRvIHJlZHVjZSB0aGUgYW1vdW50IG9mIHByb3BlcnRpZXMgdG8gYmUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyLlxuICovXG5leHBvcnQgY2xhc3MgQ3VzdG9tU2VyaWFsaXplclxuICBpbXBsZW1lbnRzXG4gICAgZnJvbU5ncnhSb3V0ZXIuUm91dGVyU3RhdGVTZXJpYWxpemVyPEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgc2VyaWFsaXplKHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCB7XG4gICAgY29uc3QgeyB1cmwgfSA9IHJvdXRlclN0YXRlO1xuICAgIGNvbnN0IHsgcXVlcnlQYXJhbXMgfSA9IHJvdXRlclN0YXRlLnJvb3Q7XG5cbiAgICBsZXQgc3RhdGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QgPSByb3V0ZXJTdGF0ZS5yb290IGFzIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG4gICAgbGV0IGNtc1JlcXVpcmVkID0gZmFsc2U7XG4gICAgbGV0IGNvbnRleHQ6IFBhZ2VDb250ZXh0O1xuXG4gICAgd2hpbGUgKHN0YXRlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0YXRlID0gc3RhdGUuZmlyc3RDaGlsZCBhcyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuXG4gICAgICAvLyB3ZSB1c2UgY29udGV4dCBpbmZvcm1hdGlvbiBlbWJlZGRlZCBpbiBDbXMgZHJpdmVuIHJvdXRlcyBmcm9tIGFueSBwYXJlbnQgcm91dGVcbiAgICAgIGlmIChzdGF0ZS5kYXRhICYmIHN0YXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IHN0YXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGFzc3VtZSwgdGhhdCBhbnkgcm91dGUgdGhhdCBoYXMgQ21zUGFnZUd1YXJkIG9yIGl0J3MgY2hpbGRcbiAgICAgIC8vIGlzIGNtc1JlcXVpcmVkXG4gICAgICBpZiAoXG4gICAgICAgICFjbXNSZXF1aXJlZCAmJlxuICAgICAgICAoY29udGV4dCB8fFxuICAgICAgICAgIChzdGF0ZS5yb3V0ZUNvbmZpZyAmJlxuICAgICAgICAgICAgc3RhdGUucm91dGVDb25maWcuY2FuQWN0aXZhdGUgJiZcbiAgICAgICAgICAgIHN0YXRlLnJvdXRlQ29uZmlnLmNhbkFjdGl2YXRlLmZpbmQoXG4gICAgICAgICAgICAgIHggPT4geCAmJiB4Lmd1YXJkTmFtZSA9PT0gJ0Ntc1BhZ2VHdWFyZCdcbiAgICAgICAgICAgICkpKVxuICAgICAgKSB7XG4gICAgICAgIGNtc1JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IHN0YXRlO1xuXG4gICAgLy8gd2UgZ2l2ZSBzbWFydGVkaXQgcHJldmlldyBwYWdlIGEgUGFnZUNvbnRleHRcbiAgICBpZiAoc3RhdGUudXJsLmxlbmd0aCA+IDAgJiYgc3RhdGUudXJsWzBdLnBhdGggPT09ICdjeC1wcmV2aWV3Jykge1xuICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgaWQ6ICdzbWFydGVkaXQtcHJldmlldycsXG4gICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHBhcmFtc1sncHJvZHVjdENvZGUnXSwgdHlwZTogUGFnZVR5cGUuUFJPRFVDVF9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtc1snY2F0ZWdvcnlDb2RlJ10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHBhcmFtc1snY2F0ZWdvcnlDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zWydicmFuZENvZGUnXSkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydicmFuZENvZGUnXSwgdHlwZTogUGFnZVR5cGUuQ0FURUdPUllfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNbJ3F1ZXJ5J10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6ICdzZWFyY2gnLCB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZGF0YS5wYWdlTGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogc3RhdGUuZGF0YS5wYWdlTGFiZWwsIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmICghY29udGV4dCkge1xuICAgICAgICBpZiAoc3RhdGUudXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBwYWdlTGFiZWwgPVxuICAgICAgICAgICAgJy8nICsgc3RhdGUudXJsLm1hcCh1cmxTZWdtZW50ID0+IHVybFNlZ21lbnQucGF0aCkuam9pbignLycpO1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBpZDogcGFnZUxhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIGlkOiAnaG9tZXBhZ2UnLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyB1cmwsIHF1ZXJ5UGFyYW1zLCBwYXJhbXMsIGNvbnRleHQsIGNtc1JlcXVpcmVkIH07XG4gIH1cbn1cbiJdfQ==