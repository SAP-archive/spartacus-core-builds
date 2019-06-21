/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
import * as fromNgrxRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { PageType } from '../../../model/cms.model';
import { ROUTING_FEATURE } from '../state';
/**
 * @record
 */
export function RouterState() { }
if (false) {
    /** @type {?|undefined} */
    RouterState.prototype.nextState;
}
/** @type {?} */
export var initialState = {
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
        case fromNgrxRouter.ROUTER_NAVIGATION: {
            return tslib_1.__assign({}, state, { nextState: action.payload.routerState, navigationId: action.payload.event.id });
        }
        case fromNgrxRouter.ROUTER_ERROR:
        case fromNgrxRouter.ROUTER_CANCEL: {
            return tslib_1.__assign({}, state, { nextState: undefined });
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
/** @type {?} */
export var reducerToken = new InjectionToken('RouterReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/** @type {?} */
export var getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.router; };
/** @type {?} */
export var getRouterState = createSelector(getRouterFeatureState, (ɵ0));
var ɵ1 = /**
 * @param {?} routingState
 * @return {?}
 */
function (routingState) {
    return (routingState.state && routingState.state.context) || { id: '' };
};
/** @type {?} */
export var getPageContext = createSelector(getRouterState, (ɵ1));
var ɵ2 = /**
 * @param {?} routingState
 * @return {?}
 */
function (routingState) {
    return routingState.nextState && routingState.nextState.context;
};
/** @type {?} */
export var getNextPageContext = createSelector(getRouterState, (ɵ2));
var ɵ3 = /**
 * @param {?} context
 * @return {?}
 */
function (context) { return !!context; };
/** @type {?} */
export var isNavigating = createSelector(getNextPageContext, (ɵ3));
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
                        state.routeConfig.canActivate.find((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x && x.guardName === 'CmsPageGuard'; }))))) {
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
                    var pageLabel = '/' + state.url.map((/**
                     * @param {?} urlSegment
                     * @return {?}
                     */
                    function (urlSegment) { return urlSegment.path; })).join('/');
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
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxLQUFLLGNBQWMsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBRUwscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQUUzQyxpQ0FHQzs7O0lBREMsZ0NBQXlDOzs7QUFHM0MsTUFBTSxLQUFPLFlBQVksR0FBZ0I7SUFDdkMsWUFBWSxFQUFFLENBQUM7SUFDZixLQUFLLEVBQUU7UUFDTCxHQUFHLEVBQUUsRUFBRTtRQUNQLFdBQVcsRUFBRSxFQUFFO1FBQ2YsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsRUFBRTtTQUNQO1FBQ0QsV0FBVyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxTQUFTLEVBQUUsU0FBUztDQUNyQjs7OztBQUVELGtEQU1DOzs7SUFMQywyQ0FBWTs7SUFDWixtREFBb0I7O0lBQ3BCLDhDQUFlOztJQUNmLCtDQUFxQjs7SUFDckIsbURBQXFCOzs7OztBQUd2QiwyQkFFQzs7O0lBREMsdUJBQW9COzs7OztBQUd0QixNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsTUFBTSxFQUFFLE9BQU87S0FDaEIsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQWlDLEVBQ2pDLE1BQVc7SUFEWCxzQkFBQSxFQUFBLG9CQUFpQztJQUdqQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNyQyw0QkFDSyxLQUFLLElBQ1IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUNyQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUNyQztTQUNIO1FBRUQsS0FBSyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ2pDLEtBQUssY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pDLDRCQUNLLEtBQUssSUFDUixTQUFTLEVBQUUsU0FBUyxJQUNwQjtTQUNIO1FBRUQsS0FBSyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwQyxPQUFPO2dCQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7Z0JBQ2pDLFlBQVksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxTQUFTLEVBQUUsU0FBUzthQUNyQixDQUFDO1NBQ0g7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtBQUNILENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQTBCLGdCQUFnQixDQUFDOztBQUVqRSxNQUFNLEtBQU8sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCOztBQUVELE1BQU0sS0FBTyxxQkFBcUIsR0FHOUIscUJBQXFCLENBQVEsZUFBZSxDQUFDOzs7OztBQU8vQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWTs7QUFMdkIsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixxQkFBcUIsT0FFdEI7Ozs7O0FBT0MsVUFBQyxZQUF5QjtJQUN4QixPQUFBLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUFoRSxDQUFnRTs7QUFOcEUsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixjQUFjLE9BR2Y7Ozs7O0FBT0MsVUFBQyxZQUF5QjtJQUN4QixPQUFBLFlBQVksQ0FBQyxTQUFTLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPO0FBQXhELENBQXdEOztBQU41RCxNQUFNLEtBQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsY0FBYyxPQUdmOzs7OztBQUlDLFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTOztBQUZ0QixNQUFNLEtBQU8sWUFBWSxHQUFtQyxjQUFjLENBQ3hFLGtCQUFrQixPQUVuQjs7OztBQUtEOzs7O0lBQUE7SUFxRUEsQ0FBQzs7Ozs7SUFsRUMsb0NBQVM7Ozs7SUFBVCxVQUFVLFdBQWdDO1FBQ2hDLElBQUEscUJBQUc7UUFDSCxJQUFBLDBDQUFXOztZQUVmLEtBQUssR0FBOEIsbUJBQUEsV0FBVyxDQUFDLElBQUksRUFBNkI7O1lBQ2hGLFdBQVcsR0FBRyxLQUFLOztZQUNuQixPQUFvQjtRQUV4QixPQUFPLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDdkIsS0FBSyxHQUFHLG1CQUFBLEtBQUssQ0FBQyxVQUFVLEVBQTZCLENBQUM7WUFFdEQsaUZBQWlGO1lBQ2pGLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUM5QyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzthQUN4QztZQUVELGdFQUFnRTtZQUNoRSxpQkFBaUI7WUFDakIsSUFDRSxDQUFDLFdBQVc7Z0JBQ1osQ0FBQyxPQUFPO29CQUNOLENBQUMsS0FBSyxDQUFDLFdBQVc7d0JBQ2hCLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVzt3QkFDN0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSTs7Ozt3QkFDaEMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxjQUFjLEVBQW5DLENBQW1DLEVBQ3pDLENBQUMsQ0FBQyxFQUNQO2dCQUNBLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRjtRQUNPLElBQUEscUJBQU07UUFFZCwrQ0FBK0M7UUFDL0MsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQzlELE9BQU8sR0FBRztnQkFDUixFQUFFLEVBQUUsbUJBQW1CO2dCQUN2QixJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7YUFDNUIsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDekIsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3RFO2lCQUFNLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDeEU7aUJBQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNyRTtpQkFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDN0MsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckU7aUJBQU0sSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O3dCQUNsQixTQUFTLEdBQ2IsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRzs7OztvQkFBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsQ0FBQyxJQUFJLEVBQWYsQ0FBZSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDOUQsT0FBTyxHQUFHO3dCQUNSLEVBQUUsRUFBRSxTQUFTO3dCQUNiLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTtxQkFDNUIsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxPQUFPLEdBQUc7d0JBQ1IsRUFBRSxFQUFFLFVBQVU7d0JBQ2QsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZO3FCQUM1QixDQUFDO2lCQUNIO2FBQ0Y7U0FDRjtRQUVELE9BQU8sRUFBRSxHQUFHLEtBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFyRUQsSUFxRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcmFtcywgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBmcm9tTmdyeFJvdXRlciBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJy4uLy4uL21vZGVscy9jbXMtcm91dGUnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IFJPVVRJTkdfRkVBVFVSRSB9IGZyb20gJy4uL3N0YXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXJTdGF0ZVxuICBleHRlbmRzIGZyb21OZ3J4Um91dGVyLlJvdXRlclJlZHVjZXJTdGF0ZTxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gIG5leHRTdGF0ZT86IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Q7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFJvdXRlclN0YXRlID0ge1xuICBuYXZpZ2F0aW9uSWQ6IDAsXG4gIHN0YXRlOiB7XG4gICAgdXJsOiAnJyxcbiAgICBxdWVyeVBhcmFtczoge30sXG4gICAgcGFyYW1zOiB7fSxcbiAgICBjb250ZXh0OiB7XG4gICAgICBpZDogJycsXG4gICAgfSxcbiAgICBjbXNSZXF1aXJlZDogZmFsc2UsXG4gIH0sXG4gIG5leHRTdGF0ZTogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90IHtcbiAgdXJsOiBzdHJpbmc7XG4gIHF1ZXJ5UGFyYW1zOiBQYXJhbXM7XG4gIHBhcmFtczogUGFyYW1zO1xuICBjb250ZXh0OiBQYWdlQ29udGV4dDtcbiAgY21zUmVxdWlyZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICByb3V0ZXI6IFJvdXRlclN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIHJvdXRlcjogcmVkdWNlcixcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlOiBSb3V0ZXJTdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBhbnlcbik6IFJvdXRlclN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX05BVklHQVRJT046IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXh0U3RhdGU6IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlLFxuICAgICAgICBuYXZpZ2F0aW9uSWQ6IGFjdGlvbi5wYXlsb2FkLmV2ZW50LmlkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9FUlJPUjpcbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9DQU5DRUw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXh0U3RhdGU6IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfTkFWSUdBVEVEOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0ZTogYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUsXG4gICAgICAgIG5hdmlnYXRpb25JZDogYWN0aW9uLnBheWxvYWQuZXZlbnQuaWQsXG4gICAgICAgIG5leHRTdGF0ZTogdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPj4oJ1JvdXRlclJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldFJvdXRlckZlYXR1cmVTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBTdGF0ZVxuPiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxTdGF0ZT4oUk9VVElOR19GRUFUVVJFKTtcblxuZXhwb3J0IGNvbnN0IGdldFJvdXRlclN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIFJvdXRlclN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJvdXRlckZlYXR1cmVTdGF0ZSxcbiAgc3RhdGUgPT4gc3RhdGUucm91dGVyXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUNvbnRleHQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgUGFnZUNvbnRleHRcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Um91dGVyU3RhdGUsXG4gIChyb3V0aW5nU3RhdGU6IFJvdXRlclN0YXRlKSA9PlxuICAgIChyb3V0aW5nU3RhdGUuc3RhdGUgJiYgcm91dGluZ1N0YXRlLnN0YXRlLmNvbnRleHQpIHx8IHsgaWQ6ICcnIH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXROZXh0UGFnZUNvbnRleHQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgUGFnZUNvbnRleHRcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Um91dGVyU3RhdGUsXG4gIChyb3V0aW5nU3RhdGU6IFJvdXRlclN0YXRlKSA9PlxuICAgIHJvdXRpbmdTdGF0ZS5uZXh0U3RhdGUgJiYgcm91dGluZ1N0YXRlLm5leHRTdGF0ZS5jb250ZXh0XG4pO1xuXG5leHBvcnQgY29uc3QgaXNOYXZpZ2F0aW5nOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgYm9vbGVhbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0TmV4dFBhZ2VDb250ZXh0LFxuICBjb250ZXh0ID0+ICEhY29udGV4dFxuKTtcblxuLyogVGhlIHNlcmlhbGl6ZXIgaXMgdGhlcmUgdG8gcGFyc2UgdGhlIFJvdXRlclN0YXRlU25hcHNob3QsXG5hbmQgdG8gcmVkdWNlIHRoZSBhbW91bnQgb2YgcHJvcGVydGllcyB0byBiZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21TZXJpYWxpemVyXG4gIGltcGxlbWVudHNcbiAgICBmcm9tTmdyeFJvdXRlci5Sb3V0ZXJTdGF0ZVNlcmlhbGl6ZXI8QWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdD4ge1xuICBzZXJpYWxpemUocm91dGVyU3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90IHtcbiAgICBjb25zdCB7IHVybCB9ID0gcm91dGVyU3RhdGU7XG4gICAgY29uc3QgeyBxdWVyeVBhcmFtcyB9ID0gcm91dGVyU3RhdGUucm9vdDtcblxuICAgIGxldCBzdGF0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCA9IHJvdXRlclN0YXRlLnJvb3QgYXMgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcbiAgICBsZXQgY21zUmVxdWlyZWQgPSBmYWxzZTtcbiAgICBsZXQgY29udGV4dDogUGFnZUNvbnRleHQ7XG5cbiAgICB3aGlsZSAoc3RhdGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5maXJzdENoaWxkIGFzIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG5cbiAgICAgIC8vIHdlIHVzZSBjb250ZXh0IGluZm9ybWF0aW9uIGVtYmVkZGVkIGluIENtcyBkcml2ZW4gcm91dGVzIGZyb20gYW55IHBhcmVudCByb3V0ZVxuICAgICAgaWYgKHN0YXRlLmRhdGEgJiYgc3RhdGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gc3RhdGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dDtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXNzdW1lLCB0aGF0IGFueSByb3V0ZSB0aGF0IGhhcyBDbXNQYWdlR3VhcmQgb3IgaXQncyBjaGlsZFxuICAgICAgLy8gaXMgY21zUmVxdWlyZWRcbiAgICAgIGlmIChcbiAgICAgICAgIWNtc1JlcXVpcmVkICYmXG4gICAgICAgIChjb250ZXh0IHx8XG4gICAgICAgICAgKHN0YXRlLnJvdXRlQ29uZmlnICYmXG4gICAgICAgICAgICBzdGF0ZS5yb3V0ZUNvbmZpZy5jYW5BY3RpdmF0ZSAmJlxuICAgICAgICAgICAgc3RhdGUucm91dGVDb25maWcuY2FuQWN0aXZhdGUuZmluZChcbiAgICAgICAgICAgICAgeCA9PiB4ICYmIHguZ3VhcmROYW1lID09PSAnQ21zUGFnZUd1YXJkJ1xuICAgICAgICAgICAgKSkpXG4gICAgICApIHtcbiAgICAgICAgY21zUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gc3RhdGU7XG5cbiAgICAvLyB3ZSBnaXZlIHNtYXJ0ZWRpdCBwcmV2aWV3IHBhZ2UgYSBQYWdlQ29udGV4dFxuICAgIGlmIChzdGF0ZS51cmwubGVuZ3RoID4gMCAmJiBzdGF0ZS51cmxbMF0ucGF0aCA9PT0gJ2N4LXByZXZpZXcnKSB7XG4gICAgICBjb250ZXh0ID0ge1xuICAgICAgICBpZDogJ3NtYXJ0ZWRpdC1wcmV2aWV3JyxcbiAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmFtc1sncHJvZHVjdENvZGUnXSkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydwcm9kdWN0Q29kZSddLCB0eXBlOiBQYWdlVHlwZS5QUk9EVUNUX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zWydjYXRlZ29yeUNvZGUnXSkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydjYXRlZ29yeUNvZGUnXSwgdHlwZTogUGFnZVR5cGUuQ0FURUdPUllfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNbJ2JyYW5kQ29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ2JyYW5kQ29kZSddLCB0eXBlOiBQYWdlVHlwZS5DQVRFR09SWV9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmRhdGEucGFnZUxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHN0YXRlLmRhdGEucGFnZUxhYmVsLCB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgaWYgKHN0YXRlLnVybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgcGFnZUxhYmVsID1cbiAgICAgICAgICAgICcvJyArIHN0YXRlLnVybC5tYXAodXJsU2VnbWVudCA9PiB1cmxTZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgaWQ6IHBhZ2VMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBpZDogJ2hvbWVwYWdlJyxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXJsLCBxdWVyeVBhcmFtcywgcGFyYW1zLCBjb250ZXh0LCBjbXNSZXF1aXJlZCB9O1xuICB9XG59XG4iXX0=