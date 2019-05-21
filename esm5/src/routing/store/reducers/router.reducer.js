/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
import * as fromNgrxRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { PageType } from '../../../model/cms.model';
import { ROUTING_FEATURE } from '../../state';
import * as fromActions from '../actions';
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
export var initialState = {
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
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromActions.SAVE_REDIRECT_URL: {
            return tslib_1.__assign({}, state, { redirectUrl: action.payload });
        }
        case fromActions.CLEAR_REDIRECT_URL: {
            return tslib_1.__assign({}, state, { redirectUrl: '' });
        }
        case fromNgrxRouter.ROUTER_NAVIGATION: {
            return tslib_1.__assign({}, state, { nextState: action.payload.routerState, navigationId: action.payload.event.id });
        }
        case fromNgrxRouter.ROUTER_NAVIGATED:
        case fromNgrxRouter.ROUTER_ERROR:
        case fromNgrxRouter.ROUTER_CANCEL: {
            /** @type {?} */
            var currentUrl = action.payload.routerState
                ? action.payload.routerState.url
                : '';
            /** @type {?} */
            var contextId = action.payload.routerState
                ? action.payload.routerState.context.id
                : '';
            /** @type {?} */
            var redirectUrl = void 0;
            if (
            // TODO: Should be rafactored, utilizimg semantic pages configuration
            contextId === '/login' ||
                contextId === '/login/register' ||
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
export var reducerToken = new InjectionToken('RouterReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/** @type {?} */
export var getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
/** @type {?} */
export var getRouterState = createSelector(getRouterFeatureState, function (state) { return state.router; });
/** @type {?} */
export var getPageContext = createSelector(getRouterState, function (routingState) {
    return (routingState.state && routingState.state.context) || { id: '' };
});
/** @type {?} */
export var getNextPageContext = createSelector(getRouterState, function (routingState) {
    return routingState.nextState && routingState.nextState.context;
});
/** @type {?} */
export var isNavigating = createSelector(getNextPageContext, function (context) { return !!context; });
/** @type {?} */
export var getRedirectUrl = createSelector(getRouterState, function (state) { return state.redirectUrl; });
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
var /* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    /**
     * @param {?} routerState
     * @return {?}
     */
    CustomSerializer.prototype.serialize = /**
     * @param {?} routerState
     * @return {?}
     */
    function (routerState) {
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        /** @type {?} */
        var state = (/** @type {?} */ (routerState.root));
        /** @type {?} */
        var cmsRequired = false;
        /** @type {?} */
        var context;
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
                        state.routeConfig.canActivate.find(function (x) { return x && x.guardName === 'CmsPageGuard'; })))) {
                cmsRequired = true;
            }
        }
        var params = state.params;
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
                    /** @type {?} */
                    var pageLabel = '/' + state.url.map(function (urlSegment) { return urlSegment.path; }).join('/');
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
        return { url: url, queryParams: queryParams, params: params, context: context, cmsRequired: cmsRequired };
    };
    return CustomSerializer;
}());
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
export { CustomSerializer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxLQUFLLGNBQWMsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBRUwscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUVyQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEtBQUssV0FBVyxNQUFNLFlBQVksQ0FBQzs7OztBQUUxQyxpQ0FJQzs7O0lBRkMsa0NBQW9COztJQUNwQixnQ0FBeUM7OztBQUczQyxNQUFNLEtBQU8sWUFBWSxHQUFnQjtJQUN2QyxXQUFXLEVBQUUsRUFBRTtJQUNmLFlBQVksRUFBRSxDQUFDO0lBQ2YsS0FBSyxFQUFFO1FBQ0wsR0FBRyxFQUFFLEVBQUU7UUFDUCxXQUFXLEVBQUUsRUFBRTtRQUNmLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELFdBQVcsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsU0FBUyxFQUFFLFNBQVM7Q0FDckI7Ozs7QUFFRCxrREFNQzs7O0lBTEMsMkNBQVk7O0lBQ1osbURBQW9COztJQUNwQiw4Q0FBZTs7SUFDZiwrQ0FBcUI7O0lBQ3JCLG1EQUFxQjs7Ozs7QUFHdkIsMkJBRUM7OztJQURDLHVCQUFvQjs7Ozs7QUFHdEIsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE1BQU0sRUFBRSxPQUFPO0tBQ2hCLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVB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QyxJQUFJLEVBQWYsQ0FBZSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDOUQsT0FBTyxHQUFHO3dCQUNSLEVBQUUsRUFBRSxTQUFTO3dCQUNiLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTtxQkFDNUIsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxPQUFPLEdBQUc7d0JBQ1IsRUFBRSxFQUFFLFVBQVU7d0JBQ2QsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZO3FCQUM1QixDQUFDO2lCQUNIO2FBQ0Y7U0FDRjtRQUVELE9BQU8sRUFBRSxHQUFHLEtBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFyRUQsSUFxRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcmFtcywgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBmcm9tTmdyeFJvdXRlciBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ntcy1yb3V0ZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgUk9VVElOR19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyU3RhdGVcbiAgZXh0ZW5kcyBmcm9tTmdyeFJvdXRlci5Sb3V0ZXJSZWR1Y2VyU3RhdGU8QWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdD4ge1xuICByZWRpcmVjdFVybDogc3RyaW5nO1xuICBuZXh0U3RhdGU/OiBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBSb3V0ZXJTdGF0ZSA9IHtcbiAgcmVkaXJlY3RVcmw6ICcnLFxuICBuYXZpZ2F0aW9uSWQ6IDAsXG4gIHN0YXRlOiB7XG4gICAgdXJsOiAnJyxcbiAgICBxdWVyeVBhcmFtczoge30sXG4gICAgcGFyYW1zOiB7fSxcbiAgICBjb250ZXh0OiB7XG4gICAgICBpZDogJycsXG4gICAgfSxcbiAgICBjbXNSZXF1aXJlZDogZmFsc2UsXG4gIH0sXG4gIG5leHRTdGF0ZTogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90IHtcbiAgdXJsOiBzdHJpbmc7XG4gIHF1ZXJ5UGFyYW1zOiBQYXJhbXM7XG4gIHBhcmFtczogUGFyYW1zO1xuICBjb250ZXh0OiBQYWdlQ29udGV4dDtcbiAgY21zUmVxdWlyZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICByb3V0ZXI6IFJvdXRlclN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIHJvdXRlcjogcmVkdWNlcixcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlOiBSb3V0ZXJTdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBhbnlcbik6IFJvdXRlclN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbnMuU0FWRV9SRURJUkVDVF9VUkw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWRpcmVjdFVybDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIGZyb21BY3Rpb25zLkNMRUFSX1JFRElSRUNUX1VSTDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZGlyZWN0VXJsOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX05BVklHQVRJT046IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXh0U3RhdGU6IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlLFxuICAgICAgICBuYXZpZ2F0aW9uSWQ6IGFjdGlvbi5wYXlsb2FkLmV2ZW50LmlkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9OQVZJR0FURUQ6XG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfRVJST1I6XG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfQ0FOQ0VMOiB7XG4gICAgICBjb25zdCBjdXJyZW50VXJsID0gYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGVcbiAgICAgICAgPyBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZS51cmxcbiAgICAgICAgOiAnJztcbiAgICAgIGNvbnN0IGNvbnRleHRJZCA9IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlXG4gICAgICAgID8gYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUuY29udGV4dC5pZFxuICAgICAgICA6ICcnO1xuICAgICAgbGV0IHJlZGlyZWN0VXJsO1xuICAgICAgaWYgKFxuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmFmYWN0b3JlZCwgdXRpbGl6aW1nIHNlbWFudGljIHBhZ2VzIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29udGV4dElkID09PSAnL2xvZ2luJyB8fFxuICAgICAgICBjb250ZXh0SWQgPT09ICcvbG9naW4vcmVnaXN0ZXInIHx8XG4gICAgICAgIGN1cnJlbnRVcmwgPT09IHN0YXRlLnJlZGlyZWN0VXJsXG4gICAgICApIHtcbiAgICAgICAgcmVkaXJlY3RVcmwgPSBzdGF0ZS5yZWRpcmVjdFVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZGlyZWN0VXJsID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZGlyZWN0VXJsOiByZWRpcmVjdFVybCxcbiAgICAgICAgc3RhdGU6IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlLFxuICAgICAgICBuYXZpZ2F0aW9uSWQ6IGFjdGlvbi5wYXlsb2FkLmV2ZW50LmlkLFxuICAgICAgICBuZXh0U3RhdGU6IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+PignUm91dGVyUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Um91dGVyRmVhdHVyZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIFN0YXRlXG4+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPFN0YXRlPihST1VUSU5HX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0Um91dGVyU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgUm91dGVyU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Um91dGVyRmVhdHVyZVN0YXRlLFxuICBzdGF0ZSA9PiBzdGF0ZS5yb3V0ZXJcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29udGV4dDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBQYWdlQ29udGV4dFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJTdGF0ZSxcbiAgKHJvdXRpbmdTdGF0ZTogUm91dGVyU3RhdGUpID0+XG4gICAgKHJvdXRpbmdTdGF0ZS5zdGF0ZSAmJiByb3V0aW5nU3RhdGUuc3RhdGUuY29udGV4dCkgfHwgeyBpZDogJycgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHRQYWdlQ29udGV4dDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBQYWdlQ29udGV4dFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJTdGF0ZSxcbiAgKHJvdXRpbmdTdGF0ZTogUm91dGVyU3RhdGUpID0+XG4gICAgcm91dGluZ1N0YXRlLm5leHRTdGF0ZSAmJiByb3V0aW5nU3RhdGUubmV4dFN0YXRlLmNvbnRleHRcbik7XG5cbmV4cG9ydCBjb25zdCBpc05hdmlnYXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBib29sZWFuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXROZXh0UGFnZUNvbnRleHQsXG4gIGNvbnRleHQgPT4gISFjb250ZXh0XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVkaXJlY3RVcmw6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBzdHJpbmc+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJvdXRlclN0YXRlLFxuICBzdGF0ZSA9PiBzdGF0ZS5yZWRpcmVjdFVybFxuKTtcblxuLyogVGhlIHNlcmlhbGl6ZXIgaXMgdGhlcmUgdG8gcGFyc2UgdGhlIFJvdXRlclN0YXRlU25hcHNob3QsXG5hbmQgdG8gcmVkdWNlIHRoZSBhbW91bnQgb2YgcHJvcGVydGllcyB0byBiZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21TZXJpYWxpemVyXG4gIGltcGxlbWVudHNcbiAgICBmcm9tTmdyeFJvdXRlci5Sb3V0ZXJTdGF0ZVNlcmlhbGl6ZXI8QWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdD4ge1xuICBzZXJpYWxpemUocm91dGVyU3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90IHtcbiAgICBjb25zdCB7IHVybCB9ID0gcm91dGVyU3RhdGU7XG4gICAgY29uc3QgeyBxdWVyeVBhcmFtcyB9ID0gcm91dGVyU3RhdGUucm9vdDtcblxuICAgIGxldCBzdGF0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCA9IHJvdXRlclN0YXRlLnJvb3QgYXMgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcbiAgICBsZXQgY21zUmVxdWlyZWQgPSBmYWxzZTtcbiAgICBsZXQgY29udGV4dDogUGFnZUNvbnRleHQ7XG5cbiAgICB3aGlsZSAoc3RhdGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5maXJzdENoaWxkIGFzIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG5cbiAgICAgIC8vIHdlIHVzZSBjb250ZXh0IGluZm9ybWF0aW9uIGVtYmVkZGVkIGluIENtcyBkcml2ZW4gcm91dGVzIGZyb20gYW55IHBhcmVudCByb3V0ZVxuICAgICAgaWYgKHN0YXRlLmRhdGEgJiYgc3RhdGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gc3RhdGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dDtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXNzdW1lLCB0aGF0IGFueSByb3V0ZSB0aGF0IGhhcyBDbXNQYWdlR3VhcmQgb3IgaXQncyBjaGlsZFxuICAgICAgLy8gaXMgY21zUmVxdWlyZWRcbiAgICAgIGlmIChcbiAgICAgICAgIWNtc1JlcXVpcmVkICYmXG4gICAgICAgIChjb250ZXh0IHx8XG4gICAgICAgICAgKHN0YXRlLnJvdXRlQ29uZmlnICYmXG4gICAgICAgICAgICBzdGF0ZS5yb3V0ZUNvbmZpZy5jYW5BY3RpdmF0ZSAmJlxuICAgICAgICAgICAgc3RhdGUucm91dGVDb25maWcuY2FuQWN0aXZhdGUuZmluZChcbiAgICAgICAgICAgICAgeCA9PiB4ICYmIHguZ3VhcmROYW1lID09PSAnQ21zUGFnZUd1YXJkJ1xuICAgICAgICAgICAgKSkpXG4gICAgICApIHtcbiAgICAgICAgY21zUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gc3RhdGU7XG5cbiAgICAvLyB3ZSBnaXZlIHNtYXJ0ZWRpdCBwcmV2aWV3IHBhZ2UgYSBQYWdlQ29udGV4dFxuICAgIGlmIChzdGF0ZS51cmwubGVuZ3RoID4gMCAmJiBzdGF0ZS51cmxbMF0ucGF0aCA9PT0gJ2N4LXByZXZpZXcnKSB7XG4gICAgICBjb250ZXh0ID0ge1xuICAgICAgICBpZDogJ3NtYXJ0ZWRpdC1wcmV2aWV3JyxcbiAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmFtc1sncHJvZHVjdENvZGUnXSkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydwcm9kdWN0Q29kZSddLCB0eXBlOiBQYWdlVHlwZS5QUk9EVUNUX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zWydjYXRlZ29yeUNvZGUnXSkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydjYXRlZ29yeUNvZGUnXSwgdHlwZTogUGFnZVR5cGUuQ0FURUdPUllfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNbJ2JyYW5kQ29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ2JyYW5kQ29kZSddLCB0eXBlOiBQYWdlVHlwZS5DQVRFR09SWV9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmRhdGEucGFnZUxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHN0YXRlLmRhdGEucGFnZUxhYmVsLCB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgaWYgKHN0YXRlLnVybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgcGFnZUxhYmVsID1cbiAgICAgICAgICAgICcvJyArIHN0YXRlLnVybC5tYXAodXJsU2VnbWVudCA9PiB1cmxTZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgaWQ6IHBhZ2VMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBpZDogJ2hvbWVwYWdlJyxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXJsLCBxdWVyeVBhcmFtcywgcGFyYW1zLCBjb250ZXh0LCBjbXNSZXF1aXJlZCB9O1xuICB9XG59XG4iXX0=