/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
import * as fromNgrxRouter from '@ngrx/router-store';
import { PageType } from '../../../model/cms.model';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxLQUFLLGNBQWMsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBU3BELE1BQU0sS0FBTyxZQUFZLEdBQWdCO0lBQ3ZDLFlBQVksRUFBRSxDQUFDO0lBQ2YsS0FBSyxFQUFFO1FBQ0wsR0FBRyxFQUFFLEVBQUU7UUFDUCxXQUFXLEVBQUUsRUFBRTtRQUNmLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELFdBQVcsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsU0FBUyxFQUFFLFNBQVM7Q0FDckI7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsTUFBTSxFQUFFLE9BQU87S0FDaEIsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQWlDLEVBQ2pDLE1BQVc7SUFEWCxzQkFBQSxFQUFBLG9CQUFpQztJQUdqQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNyQyw0QkFDSyxLQUFLLElBQ1IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUNyQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUNyQztTQUNIO1FBRUQsS0FBSyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ2pDLEtBQUssY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pDLDRCQUNLLEtBQUssSUFDUixTQUFTLEVBQUUsU0FBUyxJQUNwQjtTQUNIO1FBRUQsS0FBSyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwQyxPQUFPO2dCQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7Z0JBQ2pDLFlBQVksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxTQUFTLEVBQUUsU0FBUzthQUNyQixDQUFDO1NBQ0g7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtBQUNILENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQTBCLGdCQUFnQixDQUFDOztBQUVqRSxNQUFNLEtBQU8sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCOzs7O0FBS0Q7Ozs7SUFBQTtJQXFFQSxDQUFDOzs7OztJQWxFQyxvQ0FBUzs7OztJQUFULFVBQVUsV0FBZ0M7UUFDaEMsSUFBQSxxQkFBRztRQUNILElBQUEsMENBQVc7O1lBRWYsS0FBSyxHQUE4QixtQkFBQSxXQUFXLENBQUMsSUFBSSxFQUE2Qjs7WUFDaEYsV0FBVyxHQUFHLEtBQUs7O1lBQ25CLE9BQW9CO1FBRXhCLE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUN2QixLQUFLLEdBQUcsbUJBQUEsS0FBSyxDQUFDLFVBQVUsRUFBNkIsQ0FBQztZQUV0RCxpRkFBaUY7WUFDakYsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzlDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2FBQ3hDO1lBRUQsZ0VBQWdFO1lBQ2hFLGlCQUFpQjtZQUNqQixJQUNFLENBQUMsV0FBVztnQkFDWixDQUFDLE9BQU87b0JBQ04sQ0FBQyxLQUFLLENBQUMsV0FBVzt3QkFDaEIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXO3dCQUM3QixLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJOzs7O3dCQUNoQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLGNBQWMsRUFBbkMsQ0FBbUMsRUFDekMsQ0FBQyxDQUFDLEVBQ1A7Z0JBQ0EsV0FBVyxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNGO1FBQ08sSUFBQSxxQkFBTTtRQUVkLCtDQUErQztRQUMvQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDOUQsT0FBTyxHQUFHO2dCQUNSLEVBQUUsRUFBRSxtQkFBbUI7Z0JBQ3ZCLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTthQUM1QixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUN6QixPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdEU7aUJBQU0sSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN4RTtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDOUIsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3JFO2lCQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUM3QyxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyRTtpQkFBTSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNuQixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7d0JBQ2xCLFNBQVMsR0FDYixHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7O29CQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsVUFBVSxDQUFDLElBQUksRUFBZixDQUFlLEVBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUM5RCxPQUFPLEdBQUc7d0JBQ1IsRUFBRSxFQUFFLFNBQVM7d0JBQ2IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZO3FCQUM1QixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLE9BQU8sR0FBRzt3QkFDUixFQUFFLEVBQUUsVUFBVTt3QkFDZCxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7cUJBQzVCLENBQUM7aUJBQ0g7YUFDRjtTQUNGO1FBRUQsT0FBTyxFQUFFLEdBQUcsS0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXJFRCxJQXFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBmcm9tTmdyeFJvdXRlciBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlck1hcCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY21zLXJvdXRlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBSb3V0ZXJTdGF0ZSxcbiAgU3RhdGUsXG59IGZyb20gJy4uL3JvdXRpbmctc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBSb3V0ZXJTdGF0ZSA9IHtcbiAgbmF2aWdhdGlvbklkOiAwLFxuICBzdGF0ZToge1xuICAgIHVybDogJycsXG4gICAgcXVlcnlQYXJhbXM6IHt9LFxuICAgIHBhcmFtczoge30sXG4gICAgY29udGV4dDoge1xuICAgICAgaWQ6ICcnLFxuICAgIH0sXG4gICAgY21zUmVxdWlyZWQ6IGZhbHNlLFxuICB9LFxuICBuZXh0U3RhdGU6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgcm91dGVyOiByZWR1Y2VyLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGU6IFJvdXRlclN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGFueVxuKTogUm91dGVyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfTkFWSUdBVElPTjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5leHRTdGF0ZTogYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUsXG4gICAgICAgIG5hdmlnYXRpb25JZDogYWN0aW9uLnBheWxvYWQuZXZlbnQuaWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX0VSUk9SOlxuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX0NBTkNFTDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5leHRTdGF0ZTogdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9OQVZJR0FURUQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXRlOiBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZSxcbiAgICAgICAgbmF2aWdhdGlvbklkOiBhY3Rpb24ucGF5bG9hZC5ldmVudC5pZCxcbiAgICAgICAgbmV4dFN0YXRlOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+PignUm91dGVyUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG4vKiBUaGUgc2VyaWFsaXplciBpcyB0aGVyZSB0byBwYXJzZSB0aGUgUm91dGVyU3RhdGVTbmFwc2hvdCxcbmFuZCB0byByZWR1Y2UgdGhlIGFtb3VudCBvZiBwcm9wZXJ0aWVzIHRvIGJlIHBhc3NlZCB0byB0aGUgcmVkdWNlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEN1c3RvbVNlcmlhbGl6ZXJcbiAgaW1wbGVtZW50c1xuICAgIGZyb21OZ3J4Um91dGVyLlJvdXRlclN0YXRlU2VyaWFsaXplcjxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gIHNlcmlhbGl6ZShyb3V0ZXJTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICAgIGNvbnN0IHsgdXJsIH0gPSByb3V0ZXJTdGF0ZTtcbiAgICBjb25zdCB7IHF1ZXJ5UGFyYW1zIH0gPSByb3V0ZXJTdGF0ZS5yb290O1xuXG4gICAgbGV0IHN0YXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90ID0gcm91dGVyU3RhdGUucm9vdCBhcyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuICAgIGxldCBjbXNSZXF1aXJlZCA9IGZhbHNlO1xuICAgIGxldCBjb250ZXh0OiBQYWdlQ29udGV4dDtcblxuICAgIHdoaWxlIChzdGF0ZS5maXJzdENoaWxkKSB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLmZpcnN0Q2hpbGQgYXMgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcblxuICAgICAgLy8gd2UgdXNlIGNvbnRleHQgaW5mb3JtYXRpb24gZW1iZWRkZWQgaW4gQ21zIGRyaXZlbiByb3V0ZXMgZnJvbSBhbnkgcGFyZW50IHJvdXRlXG4gICAgICBpZiAoc3RhdGUuZGF0YSAmJiBzdGF0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBzdGF0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0O1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhc3N1bWUsIHRoYXQgYW55IHJvdXRlIHRoYXQgaGFzIENtc1BhZ2VHdWFyZCBvciBpdCdzIGNoaWxkXG4gICAgICAvLyBpcyBjbXNSZXF1aXJlZFxuICAgICAgaWYgKFxuICAgICAgICAhY21zUmVxdWlyZWQgJiZcbiAgICAgICAgKGNvbnRleHQgfHxcbiAgICAgICAgICAoc3RhdGUucm91dGVDb25maWcgJiZcbiAgICAgICAgICAgIHN0YXRlLnJvdXRlQ29uZmlnLmNhbkFjdGl2YXRlICYmXG4gICAgICAgICAgICBzdGF0ZS5yb3V0ZUNvbmZpZy5jYW5BY3RpdmF0ZS5maW5kKFxuICAgICAgICAgICAgICB4ID0+IHggJiYgeC5ndWFyZE5hbWUgPT09ICdDbXNQYWdlR3VhcmQnXG4gICAgICAgICAgICApKSlcbiAgICAgICkge1xuICAgICAgICBjbXNSZXF1aXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBzdGF0ZTtcblxuICAgIC8vIHdlIGdpdmUgc21hcnRlZGl0IHByZXZpZXcgcGFnZSBhIFBhZ2VDb250ZXh0XG4gICAgaWYgKHN0YXRlLnVybC5sZW5ndGggPiAwICYmIHN0YXRlLnVybFswXS5wYXRoID09PSAnY3gtcHJldmlldycpIHtcbiAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgIGlkOiAnc21hcnRlZGl0LXByZXZpZXcnLFxuICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zWydwcm9kdWN0Q29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ3Byb2R1Y3RDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNbJ2NhdGVnb3J5Q29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ2NhdGVnb3J5Q29kZSddLCB0eXBlOiBQYWdlVHlwZS5DQVRFR09SWV9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtc1snYnJhbmRDb2RlJ10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHBhcmFtc1snYnJhbmRDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZGF0YS5wYWdlTGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogc3RhdGUuZGF0YS5wYWdlTGFiZWwsIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmICghY29udGV4dCkge1xuICAgICAgICBpZiAoc3RhdGUudXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBwYWdlTGFiZWwgPVxuICAgICAgICAgICAgJy8nICsgc3RhdGUudXJsLm1hcCh1cmxTZWdtZW50ID0+IHVybFNlZ21lbnQucGF0aCkuam9pbignLycpO1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBpZDogcGFnZUxhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIGlkOiAnaG9tZXBhZ2UnLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyB1cmwsIHF1ZXJ5UGFyYW1zLCBwYXJhbXMsIGNvbnRleHQsIGNtc1JlcXVpcmVkIH07XG4gIH1cbn1cbiJdfQ==