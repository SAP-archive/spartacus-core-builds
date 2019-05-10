/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUVMLHFCQUFxQixFQUNyQixjQUFjLEdBRWYsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxLQUFLLGNBQWMsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEtBQUssV0FBVyxNQUFNLFlBQVksQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUVwRCxpQ0FJQzs7O0lBRkMsa0NBQW9COztJQUNwQixnQ0FBeUM7OztBQUczQyxNQUFNLEtBQU8sWUFBWSxHQUFnQjtJQUN2QyxXQUFXLEVBQUUsRUFBRTtJQUNmLFlBQVksRUFBRSxDQUFDO0lBQ2YsS0FBSyxFQUFFO1FBQ0wsR0FBRyxFQUFFLEVBQUU7UUFDUCxXQUFXLEVBQUUsRUFBRTtRQUNmLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELFdBQVcsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsU0FBUyxFQUFFLFNBQVM7Q0FDckI7Ozs7QUFFRCxrREFNQzs7O0lBTEMsMkNBQVk7O0lBQ1osbURBQW9COztJQUNwQiw4Q0FBZTs7SUFDZiwrQ0FBcUI7O0lBQ3JCLG1EQUFxQjs7Ozs7QUFHdkIsMkJBRUM7OztJQURDLHVCQUFvQjs7Ozs7QUFHdEIsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE1BQU0sRUFBRSxPQUFPO0tBQ2hCLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFpQyxFQUNqQyxNQUFXO0lBRFgsc0JBQUEsRUFBQSxvQkFBaUM7SUFHakMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDbEMsNEJBQ0ssS0FBSyxJQUNSLFdBQVcsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUMzQjtTQUNIO1FBQ0QsS0FBSyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNuQyw0QkFDSyxLQUFLLElBQ1IsV0FBVyxFQUFFLEVBQUUsSUFDZjtTQUNIO1FBQ0QsS0FBSyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNyQyw0QkFDSyxLQUFLLElBQ1IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUNyQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUNyQztTQUNIO1FBRUQsS0FBSyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFDckMsS0FBSyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ2pDLEtBQUssY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztnQkFDM0IsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztnQkFDM0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUc7Z0JBQ2hDLENBQUMsQ0FBQyxFQUFFOztnQkFDQSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO2dCQUMxQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3ZDLENBQUMsQ0FBQyxFQUFFOztnQkFDRixXQUFXLFNBQUE7WUFDZixJQUNFLFNBQVMsS0FBSyxPQUFPO2dCQUNyQixTQUFTLEtBQUssVUFBVTtnQkFDeEIsVUFBVSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQ2hDO2dCQUNBLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNMLFdBQVcsR0FBRyxFQUFFLENBQUM7YUFDbEI7WUFFRCxPQUFPO2dCQUNMLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO2dCQUNqQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckMsU0FBUyxFQUFFLFNBQVM7YUFDckIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxDQUFDLENBQUM7WUFDUCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7QUFDSCxDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUEwQixnQkFBZ0IsQ0FBQzs7QUFFakUsTUFBTSxLQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLEdBRzlCLHFCQUFxQixDQUFRLGVBQWUsQ0FBQzs7QUFFakQsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixxQkFBcUIsRUFDckIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVksQ0FDdEI7O0FBRUQsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixjQUFjLEVBQ2QsVUFBQyxZQUF5QjtJQUN4QixPQUFBLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUFoRSxDQUFnRSxDQUNuRTs7QUFFRCxNQUFNLEtBQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsY0FBYyxFQUNkLFVBQUMsWUFBeUI7SUFDeEIsT0FBQSxZQUFZLENBQUMsU0FBUyxJQUFJLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTztBQUF4RCxDQUF3RCxDQUMzRDs7QUFFRCxNQUFNLEtBQU8sWUFBWSxHQUFtQyxjQUFjLENBQ3hFLGtCQUFrQixFQUNsQixVQUFBLE9BQU8sSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUNyQjs7QUFFRCxNQUFNLEtBQU8sY0FBYyxHQUFrQyxjQUFjLENBQ3pFLGNBQWMsRUFDZCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCLENBQzNCOzs7O0FBS0Q7Ozs7SUFBQTtJQXFFQSxDQUFDOzs7OztJQWxFQyxvQ0FBUzs7OztJQUFULFVBQVUsV0FBZ0M7UUFDaEMsSUFBQSxxQkFBRztRQUNILElBQUEsMENBQVc7O1lBRWYsS0FBSyxHQUE4QixtQkFBQSxXQUFXLENBQUMsSUFBSSxFQUE2Qjs7WUFDaEYsV0FBVyxHQUFHLEtBQUs7O1lBQ25CLE9BQW9CO1FBRXhCLE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUN2QixLQUFLLEdBQUcsbUJBQUEsS0FBSyxDQUFDLFVBQVUsRUFBNkIsQ0FBQztZQUV0RCxpRkFBaUY7WUFDakYsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzlDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2FBQ3hDO1lBRUQsZ0VBQWdFO1lBQ2hFLGlCQUFpQjtZQUNqQixJQUNFLENBQUMsV0FBVztnQkFDWixDQUFDLE9BQU87b0JBQ04sQ0FBQyxLQUFLLENBQUMsV0FBVzt3QkFDaEIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXO3dCQUM3QixLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2hDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssY0FBYyxFQUFuQyxDQUFtQyxDQUN6QyxDQUFDLENBQUMsRUFDUDtnQkFDQSxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7UUFDTyxJQUFBLHFCQUFNO1FBRWQsK0NBQStDO1FBQy9DLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtZQUM5RCxPQUFPLEdBQUc7Z0JBQ1IsRUFBRSxFQUFFLG1CQUFtQjtnQkFDdkIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZO2FBQzVCLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN0RTtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDakMsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hFO2lCQUFNLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUM5QixPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDckU7aUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQzdDLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JFO2lCQUFNLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzt3QkFDbEIsU0FBUyxHQUNiLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsQ0FBQyxJQUFJLEVBQWYsQ0FBZSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDOUQsT0FBTyxHQUFHO3dCQUNSLEVBQUUsRUFBRSxTQUFTO3dCQUNiLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTtxQkFDNUIsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxPQUFPLEdBQUc7d0JBQ1IsRUFBRSxFQUFFLFVBQVU7d0JBQ2QsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZO3FCQUM1QixDQUFDO2lCQUNIO2FBQ0Y7U0FDRjtRQUVELE9BQU8sRUFBRSxHQUFHLEtBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFyRUQsSUFxRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcmFtcywgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIEFjdGlvblJlZHVjZXJNYXAsXG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIE1lbW9pemVkU2VsZWN0b3IsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCAqIGFzIGZyb21OZ3J4Um91dGVyIGZyb20gJ0BuZ3J4L3JvdXRlci1zdG9yZSc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgUk9VVElOR19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY21zLXJvdXRlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXJTdGF0ZVxuICBleHRlbmRzIGZyb21OZ3J4Um91dGVyLlJvdXRlclJlZHVjZXJTdGF0ZTxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG4gIG5leHRTdGF0ZT86IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Q7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFJvdXRlclN0YXRlID0ge1xuICByZWRpcmVjdFVybDogJycsXG4gIG5hdmlnYXRpb25JZDogMCxcbiAgc3RhdGU6IHtcbiAgICB1cmw6ICcnLFxuICAgIHF1ZXJ5UGFyYW1zOiB7fSxcbiAgICBwYXJhbXM6IHt9LFxuICAgIGNvbnRleHQ6IHtcbiAgICAgIGlkOiAnJyxcbiAgICB9LFxuICAgIGNtc1JlcXVpcmVkOiBmYWxzZSxcbiAgfSxcbiAgbmV4dFN0YXRlOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICB1cmw6IHN0cmluZztcbiAgcXVlcnlQYXJhbXM6IFBhcmFtcztcbiAgcGFyYW1zOiBQYXJhbXM7XG4gIGNvbnRleHQ6IFBhZ2VDb250ZXh0O1xuICBjbXNSZXF1aXJlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIHJvdXRlcjogUm91dGVyU3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgcm91dGVyOiByZWR1Y2VyLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGU6IFJvdXRlclN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGFueVxuKTogUm91dGVyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9ucy5TQVZFX1JFRElSRUNUX1VSTDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZGlyZWN0VXJsOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgZnJvbUFjdGlvbnMuQ0xFQVJfUkVESVJFQ1RfVVJMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVkaXJlY3RVcmw6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfTkFWSUdBVElPTjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5leHRTdGF0ZTogYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUsXG4gICAgICAgIG5hdmlnYXRpb25JZDogYWN0aW9uLnBheWxvYWQuZXZlbnQuaWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX05BVklHQVRFRDpcbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9FUlJPUjpcbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9DQU5DRUw6IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZVxuICAgICAgICA/IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlLnVybFxuICAgICAgICA6ICcnO1xuICAgICAgY29uc3QgY29udGV4dElkID0gYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGVcbiAgICAgICAgPyBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZS5jb250ZXh0LmlkXG4gICAgICAgIDogJyc7XG4gICAgICBsZXQgcmVkaXJlY3RVcmw7XG4gICAgICBpZiAoXG4gICAgICAgIGNvbnRleHRJZCA9PT0gJ2xvZ2luJyB8fFxuICAgICAgICBjb250ZXh0SWQgPT09ICdyZWdpc3RlcicgfHxcbiAgICAgICAgY3VycmVudFVybCA9PT0gc3RhdGUucmVkaXJlY3RVcmxcbiAgICAgICkge1xuICAgICAgICByZWRpcmVjdFVybCA9IHN0YXRlLnJlZGlyZWN0VXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVkaXJlY3RVcmwgPSAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVkaXJlY3RVcmw6IHJlZGlyZWN0VXJsLFxuICAgICAgICBzdGF0ZTogYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUsXG4gICAgICAgIG5hdmlnYXRpb25JZDogYWN0aW9uLnBheWxvYWQuZXZlbnQuaWQsXG4gICAgICAgIG5leHRTdGF0ZTogdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxTdGF0ZT4+KCdSb3V0ZXJSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSb3V0ZXJGZWF0dXJlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgU3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8U3RhdGU+KFJPVVRJTkdfRkVBVFVSRSk7XG5cbmV4cG9ydCBjb25zdCBnZXRSb3V0ZXJTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBSb3V0ZXJTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJGZWF0dXJlU3RhdGUsXG4gIHN0YXRlID0+IHN0YXRlLnJvdXRlclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VDb250ZXh0OiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIFBhZ2VDb250ZXh0XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJvdXRlclN0YXRlLFxuICAocm91dGluZ1N0YXRlOiBSb3V0ZXJTdGF0ZSkgPT5cbiAgICAocm91dGluZ1N0YXRlLnN0YXRlICYmIHJvdXRpbmdTdGF0ZS5zdGF0ZS5jb250ZXh0KSB8fCB7IGlkOiAnJyB9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0TmV4dFBhZ2VDb250ZXh0OiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIFBhZ2VDb250ZXh0XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJvdXRlclN0YXRlLFxuICAocm91dGluZ1N0YXRlOiBSb3V0ZXJTdGF0ZSkgPT5cbiAgICByb3V0aW5nU3RhdGUubmV4dFN0YXRlICYmIHJvdXRpbmdTdGF0ZS5uZXh0U3RhdGUuY29udGV4dFxuKTtcblxuZXhwb3J0IGNvbnN0IGlzTmF2aWdhdGluZzogTWVtb2l6ZWRTZWxlY3RvcjxhbnksIGJvb2xlYW4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE5leHRQYWdlQ29udGV4dCxcbiAgY29udGV4dCA9PiAhIWNvbnRleHRcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRSZWRpcmVjdFVybDogTWVtb2l6ZWRTZWxlY3RvcjxhbnksIHN0cmluZz4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Um91dGVyU3RhdGUsXG4gIHN0YXRlID0+IHN0YXRlLnJlZGlyZWN0VXJsXG4pO1xuXG4vKiBUaGUgc2VyaWFsaXplciBpcyB0aGVyZSB0byBwYXJzZSB0aGUgUm91dGVyU3RhdGVTbmFwc2hvdCxcbmFuZCB0byByZWR1Y2UgdGhlIGFtb3VudCBvZiBwcm9wZXJ0aWVzIHRvIGJlIHBhc3NlZCB0byB0aGUgcmVkdWNlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEN1c3RvbVNlcmlhbGl6ZXJcbiAgaW1wbGVtZW50c1xuICAgIGZyb21OZ3J4Um91dGVyLlJvdXRlclN0YXRlU2VyaWFsaXplcjxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gIHNlcmlhbGl6ZShyb3V0ZXJTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICAgIGNvbnN0IHsgdXJsIH0gPSByb3V0ZXJTdGF0ZTtcbiAgICBjb25zdCB7IHF1ZXJ5UGFyYW1zIH0gPSByb3V0ZXJTdGF0ZS5yb290O1xuXG4gICAgbGV0IHN0YXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90ID0gcm91dGVyU3RhdGUucm9vdCBhcyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuICAgIGxldCBjbXNSZXF1aXJlZCA9IGZhbHNlO1xuICAgIGxldCBjb250ZXh0OiBQYWdlQ29udGV4dDtcblxuICAgIHdoaWxlIChzdGF0ZS5maXJzdENoaWxkKSB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLmZpcnN0Q2hpbGQgYXMgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcblxuICAgICAgLy8gd2UgdXNlIGNvbnRleHQgaW5mb3JtYXRpb24gZW1iZWRkZWQgaW4gQ21zIGRyaXZlbiByb3V0ZXMgZnJvbSBhbnkgcGFyZW50IHJvdXRlXG4gICAgICBpZiAoc3RhdGUuZGF0YSAmJiBzdGF0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBzdGF0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0O1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhc3N1bWUsIHRoYXQgYW55IHJvdXRlIHRoYXQgaGFzIENtc1BhZ2VHdWFyZCBvciBpdCdzIGNoaWxkXG4gICAgICAvLyBpcyBjbXNSZXF1aXJlZFxuICAgICAgaWYgKFxuICAgICAgICAhY21zUmVxdWlyZWQgJiZcbiAgICAgICAgKGNvbnRleHQgfHxcbiAgICAgICAgICAoc3RhdGUucm91dGVDb25maWcgJiZcbiAgICAgICAgICAgIHN0YXRlLnJvdXRlQ29uZmlnLmNhbkFjdGl2YXRlICYmXG4gICAgICAgICAgICBzdGF0ZS5yb3V0ZUNvbmZpZy5jYW5BY3RpdmF0ZS5maW5kKFxuICAgICAgICAgICAgICB4ID0+IHggJiYgeC5ndWFyZE5hbWUgPT09ICdDbXNQYWdlR3VhcmQnXG4gICAgICAgICAgICApKSlcbiAgICAgICkge1xuICAgICAgICBjbXNSZXF1aXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBzdGF0ZTtcblxuICAgIC8vIHdlIGdpdmUgc21hcnRlZGl0IHByZXZpZXcgcGFnZSBhIFBhZ2VDb250ZXh0XG4gICAgaWYgKHN0YXRlLnVybC5sZW5ndGggPiAwICYmIHN0YXRlLnVybFswXS5wYXRoID09PSAnY3gtcHJldmlldycpIHtcbiAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgIGlkOiAnc21hcnRlZGl0LXByZXZpZXcnLFxuICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zWydwcm9kdWN0Q29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ3Byb2R1Y3RDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNbJ2NhdGVnb3J5Q29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ2NhdGVnb3J5Q29kZSddLCB0eXBlOiBQYWdlVHlwZS5DQVRFR09SWV9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtc1snYnJhbmRDb2RlJ10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHBhcmFtc1snYnJhbmRDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZGF0YS5wYWdlTGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogc3RhdGUuZGF0YS5wYWdlTGFiZWwsIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmICghY29udGV4dCkge1xuICAgICAgICBpZiAoc3RhdGUudXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBwYWdlTGFiZWwgPVxuICAgICAgICAgICAgJy8nICsgc3RhdGUudXJsLm1hcCh1cmxTZWdtZW50ID0+IHVybFNlZ21lbnQucGF0aCkuam9pbignLycpO1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBpZDogcGFnZUxhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIGlkOiAnaG9tZXBhZ2UnLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyB1cmwsIHF1ZXJ5UGFyYW1zLCBwYXJhbXMsIGNvbnRleHQsIGNtc1JlcXVpcmVkIH07XG4gIH1cbn1cbiJdfQ==