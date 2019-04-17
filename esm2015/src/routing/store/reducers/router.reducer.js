/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { createSelector, createFeatureSelector, } from '@ngrx/store';
import * as fromNgrxRouter from '@ngrx/router-store';
import * as fromActions from '../actions';
import { ROUTING_FEATURE } from '../../state';
import { PageType } from '../../../occ/occ-models/index';
/**
 * @record
 */
export function RouterState() { }
if (false) {
    /** @type {?} */
    RouterState.prototype.redirectUrl;
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
        case fromNgrxRouter.ROUTER_NAVIGATION:
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
export const getRouterState = createSelector(getRouterFeatureState, (state) => state[ROUTING_FEATURE]);
/** @type {?} */
export const getPageContext = createSelector(getRouterState, (routingState) => routingState.state.context);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQ0wsY0FBYyxFQUNkLHFCQUFxQixHQUd0QixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEtBQUssY0FBYyxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sS0FBSyxXQUFXLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBR3pELGlDQUdDOzs7SUFEQyxrQ0FBb0I7OztBQUd0QixNQUFNLE9BQU8sWUFBWSxHQUFnQjtJQUN2QyxXQUFXLEVBQUUsRUFBRTtJQUNmLFlBQVksRUFBRSxDQUFDO0lBQ2YsS0FBSyxFQUFFO1FBQ0wsR0FBRyxFQUFFLEVBQUU7UUFDUCxXQUFXLEVBQUUsRUFBRTtRQUNmLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELFdBQVcsRUFBRSxLQUFLO0tBQ25CO0NBQ0Y7Ozs7QUFFRCxrREFNQzs7O0lBTEMsMkNBQVk7O0lBQ1osbURBQW9COztJQUNwQiw4Q0FBZTs7SUFDZiwrQ0FBcUI7O0lBQ3JCLG1EQUFxQjs7Ozs7QUFHdkIsMkJBRUM7OztJQURDLHVCQUFvQjs7Ozs7QUFHdEIsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE1BQU0sRUFBRSxPQUFPO0tBQ2hCLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixRQUFxQixZQUFZLEVBQ2pDLE1BQVc7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QUFFLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDckU7aUJBQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6RDtpQkFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDN0MsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckU7aUJBQU0sSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7OzBCQUNsQixTQUFTLEdBQ2IsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQzlELE9BQU8sR0FBRzt3QkFDUixFQUFFLEVBQUUsU0FBUzt3QkFDYixJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7cUJBQzVCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxHQUFHO3dCQUNSLEVBQUUsRUFBRSxVQUFVO3dCQUNkLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTtxQkFDNUIsQ0FBQztpQkFDSDthQUNGO1NBQ0Y7UUFFRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQzVELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0ICogYXMgZnJvbU5ncnhSb3V0ZXIgZnJvbSAnQG5ncngvcm91dGVyLXN0b3JlJztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBST1VUSU5HX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ntcy1yb3V0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyU3RhdGVcbiAgZXh0ZW5kcyBmcm9tTmdyeFJvdXRlci5Sb3V0ZXJSZWR1Y2VyU3RhdGU8QWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdD4ge1xuICByZWRpcmVjdFVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBSb3V0ZXJTdGF0ZSA9IHtcbiAgcmVkaXJlY3RVcmw6ICcnLFxuICBuYXZpZ2F0aW9uSWQ6IDAsXG4gIHN0YXRlOiB7XG4gICAgdXJsOiAnJyxcbiAgICBxdWVyeVBhcmFtczoge30sXG4gICAgcGFyYW1zOiB7fSxcbiAgICBjb250ZXh0OiB7XG4gICAgICBpZDogJycsXG4gICAgfSxcbiAgICBjbXNSZXF1aXJlZDogZmFsc2UsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICB1cmw6IHN0cmluZztcbiAgcXVlcnlQYXJhbXM6IFBhcmFtcztcbiAgcGFyYW1zOiBQYXJhbXM7XG4gIGNvbnRleHQ6IFBhZ2VDb250ZXh0O1xuICBjbXNSZXF1aXJlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIHJvdXRlcjogUm91dGVyU3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgcm91dGVyOiByZWR1Y2VyLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGU6IFJvdXRlclN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGFueVxuKTogUm91dGVyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9ucy5TQVZFX1JFRElSRUNUX1VSTDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZGlyZWN0VXJsOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgZnJvbUFjdGlvbnMuQ0xFQVJfUkVESVJFQ1RfVVJMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVkaXJlY3RVcmw6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfTkFWSUdBVElPTjpcbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9FUlJPUjpcbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9DQU5DRUw6IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZVxuICAgICAgICA/IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlLnVybFxuICAgICAgICA6ICcnO1xuICAgICAgY29uc3QgY29udGV4dElkID0gYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGVcbiAgICAgICAgPyBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZS5jb250ZXh0LmlkXG4gICAgICAgIDogJyc7XG4gICAgICBsZXQgcmVkaXJlY3RVcmw7XG4gICAgICBpZiAoXG4gICAgICAgIGNvbnRleHRJZCA9PT0gJ2xvZ2luJyB8fFxuICAgICAgICBjb250ZXh0SWQgPT09ICdyZWdpc3RlcicgfHxcbiAgICAgICAgY3VycmVudFVybCA9PT0gc3RhdGUucmVkaXJlY3RVcmxcbiAgICAgICkge1xuICAgICAgICByZWRpcmVjdFVybCA9IHN0YXRlLnJlZGlyZWN0VXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVkaXJlY3RVcmwgPSAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVkaXJlY3RVcmw6IHJlZGlyZWN0VXJsLFxuICAgICAgICBzdGF0ZTogYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUsXG4gICAgICAgIG5hdmlnYXRpb25JZDogYWN0aW9uLnBheWxvYWQuZXZlbnQuaWQsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPj4oJ1JvdXRlclJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldFJvdXRlckZlYXR1cmVTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBhbnlcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8XG4gIGZyb21OZ3J4Um91dGVyLlJvdXRlclJlZHVjZXJTdGF0ZTxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PlxuPihST1VUSU5HX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0Um91dGVyU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBhbnk+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJvdXRlckZlYXR1cmVTdGF0ZSxcbiAgKHN0YXRlOiBhbnkpID0+IHN0YXRlW1JPVVRJTkdfRkVBVFVSRV1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29udGV4dDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBQYWdlQ29udGV4dFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJTdGF0ZSxcbiAgKHJvdXRpbmdTdGF0ZTogYW55KSA9PiByb3V0aW5nU3RhdGUuc3RhdGUuY29udGV4dFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFJlZGlyZWN0VXJsOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgYW55PiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJTdGF0ZSxcbiAgc3RhdGUgPT4gc3RhdGUucmVkaXJlY3RVcmxcbik7XG5cbi8qIFRoZSBzZXJpYWxpemVyIGlzIHRoZXJlIHRvIHBhcnNlIHRoZSBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuYW5kIHRvIHJlZHVjZSB0aGUgYW1vdW50IG9mIHByb3BlcnRpZXMgdG8gYmUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyLlxuICovXG5leHBvcnQgY2xhc3MgQ3VzdG9tU2VyaWFsaXplclxuICBpbXBsZW1lbnRzXG4gICAgZnJvbU5ncnhSb3V0ZXIuUm91dGVyU3RhdGVTZXJpYWxpemVyPEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgc2VyaWFsaXplKHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCB7XG4gICAgY29uc3QgeyB1cmwgfSA9IHJvdXRlclN0YXRlO1xuICAgIGNvbnN0IHsgcXVlcnlQYXJhbXMgfSA9IHJvdXRlclN0YXRlLnJvb3Q7XG5cbiAgICBsZXQgc3RhdGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QgPSByb3V0ZXJTdGF0ZS5yb290IGFzIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG4gICAgbGV0IGNtc1JlcXVpcmVkID0gZmFsc2U7XG4gICAgbGV0IGNvbnRleHQ6IFBhZ2VDb250ZXh0O1xuXG4gICAgd2hpbGUgKHN0YXRlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0YXRlID0gc3RhdGUuZmlyc3RDaGlsZCBhcyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuXG4gICAgICAvLyB3ZSB1c2UgY29udGV4dCBpbmZvcm1hdGlvbiBlbWJlZGRlZCBpbiBDbXMgZHJpdmVuIHJvdXRlcyBmcm9tIGFueSBwYXJlbnQgcm91dGVcbiAgICAgIGlmIChzdGF0ZS5kYXRhICYmIHN0YXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IHN0YXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGFzc3VtZSwgdGhhdCBhbnkgcm91dGUgdGhhdCBoYXMgQ21zUGFnZUd1YXJkIG9yIGl0J3MgY2hpbGRcbiAgICAgIC8vIGlzIGNtc1JlcXVpcmVkXG4gICAgICBpZiAoXG4gICAgICAgICFjbXNSZXF1aXJlZCAmJlxuICAgICAgICAoY29udGV4dCB8fFxuICAgICAgICAgIChzdGF0ZS5yb3V0ZUNvbmZpZyAmJlxuICAgICAgICAgICAgc3RhdGUucm91dGVDb25maWcuY2FuQWN0aXZhdGUgJiZcbiAgICAgICAgICAgIHN0YXRlLnJvdXRlQ29uZmlnLmNhbkFjdGl2YXRlLmZpbmQoXG4gICAgICAgICAgICAgIHggPT4geCAmJiB4Lmd1YXJkTmFtZSA9PT0gJ0Ntc1BhZ2VHdWFyZCdcbiAgICAgICAgICAgICkpKVxuICAgICAgKSB7XG4gICAgICAgIGNtc1JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IHN0YXRlO1xuXG4gICAgLy8gd2UgZ2l2ZSBzbWFydGVkaXQgcHJldmlldyBwYWdlIGEgUGFnZUNvbnRleHRcbiAgICBpZiAoc3RhdGUudXJsLmxlbmd0aCA+IDAgJiYgc3RhdGUudXJsWzBdLnBhdGggPT09ICdjeC1wcmV2aWV3Jykge1xuICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgaWQ6ICdzbWFydGVkaXQtcHJldmlldycsXG4gICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHBhcmFtc1sncHJvZHVjdENvZGUnXSwgdHlwZTogUGFnZVR5cGUuUFJPRFVDVF9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtc1snY2F0ZWdvcnlDb2RlJ10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHBhcmFtc1snY2F0ZWdvcnlDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zWydicmFuZENvZGUnXSkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydicmFuZENvZGUnXSwgdHlwZTogUGFnZVR5cGUuQ0FURUdPUllfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNbJ3F1ZXJ5J10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6ICdzZWFyY2gnLCB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZGF0YS5wYWdlTGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogc3RhdGUuZGF0YS5wYWdlTGFiZWwsIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmICghY29udGV4dCkge1xuICAgICAgICBpZiAoc3RhdGUudXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBwYWdlTGFiZWwgPVxuICAgICAgICAgICAgJy8nICsgc3RhdGUudXJsLm1hcCh1cmxTZWdtZW50ID0+IHVybFNlZ21lbnQucGF0aCkuam9pbignLycpO1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBpZDogcGFnZUxhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIGlkOiAnaG9tZXBhZ2UnLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyB1cmwsIHF1ZXJ5UGFyYW1zLCBwYXJhbXMsIGNvbnRleHQsIGNtc1JlcXVpcmVkIH07XG4gIH1cbn1cbiJdfQ==