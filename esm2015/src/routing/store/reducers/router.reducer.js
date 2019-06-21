/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        case fromNgrxRouter.ROUTER_NAVIGATION: {
            return Object.assign({}, state, { nextState: action.payload.routerState, navigationId: action.payload.event.id });
        }
        case fromNgrxRouter.ROUTER_ERROR:
        case fromNgrxRouter.ROUTER_CANCEL: {
            return Object.assign({}, state, { nextState: undefined });
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
export const reducerToken = new InjectionToken('RouterReducers');
/** @type {?} */
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/** @type {?} */
export const getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
state => state.router;
/** @type {?} */
export const getRouterState = createSelector(getRouterFeatureState, (ɵ0));
const ɵ1 = /**
 * @param {?} routingState
 * @return {?}
 */
(routingState) => (routingState.state && routingState.state.context) || { id: '' };
/** @type {?} */
export const getPageContext = createSelector(getRouterState, (ɵ1));
const ɵ2 = /**
 * @param {?} routingState
 * @return {?}
 */
(routingState) => routingState.nextState && routingState.nextState.context;
/** @type {?} */
export const getNextPageContext = createSelector(getRouterState, (ɵ2));
const ɵ3 = /**
 * @param {?} context
 * @return {?}
 */
context => !!context;
/** @type {?} */
export const isNavigating = createSelector(getNextPageContext, (ɵ3));
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
                        state.routeConfig.canActivate.find((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x && x.guardName === 'CmsPageGuard'))))) {
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
            else if (state.data.pageLabel !== undefined) {
                context = { id: state.data.pageLabel, type: PageType.CONTENT_PAGE };
            }
            else if (!context) {
                if (state.url.length > 0) {
                    /** @type {?} */
                    const pageLabel = '/' + state.url.map((/**
                     * @param {?} urlSegment
                     * @return {?}
                     */
                    urlSegment => urlSegment.path)).join('/');
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
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEtBQUssY0FBYyxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFFTCxxQkFBcUIsRUFDckIsY0FBYyxHQUVmLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBRTNDLGlDQUdDOzs7SUFEQyxnQ0FBeUM7OztBQUczQyxNQUFNLE9BQU8sWUFBWSxHQUFnQjtJQUN2QyxZQUFZLEVBQUUsQ0FBQztJQUNmLEtBQUssRUFBRTtRQUNMLEdBQUcsRUFBRSxFQUFFO1FBQ1AsV0FBVyxFQUFFLEVBQUU7UUFDZixNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxFQUFFO1NBQ1A7UUFDRCxXQUFXLEVBQUUsS0FBSztLQUNuQjtJQUNELFNBQVMsRUFBRSxTQUFTO0NBQ3JCOzs7O0FBRUQsa0RBTUM7OztJQUxDLDJDQUFZOztJQUNaLG1EQUFvQjs7SUFDcEIsOENBQWU7O0lBQ2YsK0NBQXFCOztJQUNyQixtREFBcUI7Ozs7O0FBR3ZCLDJCQUVDOzs7SUFEQyx1QkFBb0I7Ozs7O0FBR3RCLE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU87UUFDTCxNQUFNLEVBQUUsT0FBTztLQUNoQixDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsUUFBcUIsWUFBWSxFQUNqQyxNQUFXO0lBRVgsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25C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O2dCQUNuQixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7MEJBQ2xCLFNBQVMsR0FDYixHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7O29CQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQzlELE9BQU8sR0FBRzt3QkFDUixFQUFFLEVBQUUsU0FBUzt3QkFDYixJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7cUJBQzVCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxHQUFHO3dCQUNSLEVBQUUsRUFBRSxVQUFVO3dCQUNkLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTtxQkFDNUIsQ0FBQztpQkFDSDthQUNGO1NBQ0Y7UUFFRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQzVELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFyYW1zLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIGZyb21OZ3J4Um91dGVyIGZyb20gJ0BuZ3J4L3JvdXRlci1zdG9yZSc7XG5pbXBvcnQge1xuICBBY3Rpb25SZWR1Y2VyTWFwLFxuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBNZW1vaXplZFNlbGVjdG9yLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ntcy1yb3V0ZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgUk9VVElOR19GRUFUVVJFIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlclN0YXRlXG4gIGV4dGVuZHMgZnJvbU5ncnhSb3V0ZXIuUm91dGVyUmVkdWNlclN0YXRlPEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgbmV4dFN0YXRlPzogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdDtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUm91dGVyU3RhdGUgPSB7XG4gIG5hdmlnYXRpb25JZDogMCxcbiAgc3RhdGU6IHtcbiAgICB1cmw6ICcnLFxuICAgIHF1ZXJ5UGFyYW1zOiB7fSxcbiAgICBwYXJhbXM6IHt9LFxuICAgIGNvbnRleHQ6IHtcbiAgICAgIGlkOiAnJyxcbiAgICB9LFxuICAgIGNtc1JlcXVpcmVkOiBmYWxzZSxcbiAgfSxcbiAgbmV4dFN0YXRlOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICB1cmw6IHN0cmluZztcbiAgcXVlcnlQYXJhbXM6IFBhcmFtcztcbiAgcGFyYW1zOiBQYXJhbXM7XG4gIGNvbnRleHQ6IFBhZ2VDb250ZXh0O1xuICBjbXNSZXF1aXJlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIHJvdXRlcjogUm91dGVyU3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgcm91dGVyOiByZWR1Y2VyLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGU6IFJvdXRlclN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGFueVxuKTogUm91dGVyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfTkFWSUdBVElPTjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5leHRTdGF0ZTogYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUsXG4gICAgICAgIG5hdmlnYXRpb25JZDogYWN0aW9uLnBheWxvYWQuZXZlbnQuaWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX0VSUk9SOlxuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX0NBTkNFTDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5leHRTdGF0ZTogdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9OQVZJR0FURUQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXRlOiBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZSxcbiAgICAgICAgbmF2aWdhdGlvbklkOiBhY3Rpb24ucGF5bG9hZC5ldmVudC5pZCxcbiAgICAgICAgbmV4dFN0YXRlOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+PignUm91dGVyUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Um91dGVyRmVhdHVyZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIFN0YXRlXG4+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPFN0YXRlPihST1VUSU5HX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0Um91dGVyU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgUm91dGVyU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Um91dGVyRmVhdHVyZVN0YXRlLFxuICBzdGF0ZSA9PiBzdGF0ZS5yb3V0ZXJcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29udGV4dDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBQYWdlQ29udGV4dFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJTdGF0ZSxcbiAgKHJvdXRpbmdTdGF0ZTogUm91dGVyU3RhdGUpID0+XG4gICAgKHJvdXRpbmdTdGF0ZS5zdGF0ZSAmJiByb3V0aW5nU3RhdGUuc3RhdGUuY29udGV4dCkgfHwgeyBpZDogJycgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHRQYWdlQ29udGV4dDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBQYWdlQ29udGV4dFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJTdGF0ZSxcbiAgKHJvdXRpbmdTdGF0ZTogUm91dGVyU3RhdGUpID0+XG4gICAgcm91dGluZ1N0YXRlLm5leHRTdGF0ZSAmJiByb3V0aW5nU3RhdGUubmV4dFN0YXRlLmNvbnRleHRcbik7XG5cbmV4cG9ydCBjb25zdCBpc05hdmlnYXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBib29sZWFuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXROZXh0UGFnZUNvbnRleHQsXG4gIGNvbnRleHQgPT4gISFjb250ZXh0XG4pO1xuXG4vKiBUaGUgc2VyaWFsaXplciBpcyB0aGVyZSB0byBwYXJzZSB0aGUgUm91dGVyU3RhdGVTbmFwc2hvdCxcbmFuZCB0byByZWR1Y2UgdGhlIGFtb3VudCBvZiBwcm9wZXJ0aWVzIHRvIGJlIHBhc3NlZCB0byB0aGUgcmVkdWNlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEN1c3RvbVNlcmlhbGl6ZXJcbiAgaW1wbGVtZW50c1xuICAgIGZyb21OZ3J4Um91dGVyLlJvdXRlclN0YXRlU2VyaWFsaXplcjxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gIHNlcmlhbGl6ZShyb3V0ZXJTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICAgIGNvbnN0IHsgdXJsIH0gPSByb3V0ZXJTdGF0ZTtcbiAgICBjb25zdCB7IHF1ZXJ5UGFyYW1zIH0gPSByb3V0ZXJTdGF0ZS5yb290O1xuXG4gICAgbGV0IHN0YXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90ID0gcm91dGVyU3RhdGUucm9vdCBhcyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuICAgIGxldCBjbXNSZXF1aXJlZCA9IGZhbHNlO1xuICAgIGxldCBjb250ZXh0OiBQYWdlQ29udGV4dDtcblxuICAgIHdoaWxlIChzdGF0ZS5maXJzdENoaWxkKSB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLmZpcnN0Q2hpbGQgYXMgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcblxuICAgICAgLy8gd2UgdXNlIGNvbnRleHQgaW5mb3JtYXRpb24gZW1iZWRkZWQgaW4gQ21zIGRyaXZlbiByb3V0ZXMgZnJvbSBhbnkgcGFyZW50IHJvdXRlXG4gICAgICBpZiAoc3RhdGUuZGF0YSAmJiBzdGF0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBzdGF0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0O1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhc3N1bWUsIHRoYXQgYW55IHJvdXRlIHRoYXQgaGFzIENtc1BhZ2VHdWFyZCBvciBpdCdzIGNoaWxkXG4gICAgICAvLyBpcyBjbXNSZXF1aXJlZFxuICAgICAgaWYgKFxuICAgICAgICAhY21zUmVxdWlyZWQgJiZcbiAgICAgICAgKGNvbnRleHQgfHxcbiAgICAgICAgICAoc3RhdGUucm91dGVDb25maWcgJiZcbiAgICAgICAgICAgIHN0YXRlLnJvdXRlQ29uZmlnLmNhbkFjdGl2YXRlICYmXG4gICAgICAgICAgICBzdGF0ZS5yb3V0ZUNvbmZpZy5jYW5BY3RpdmF0ZS5maW5kKFxuICAgICAgICAgICAgICB4ID0+IHggJiYgeC5ndWFyZE5hbWUgPT09ICdDbXNQYWdlR3VhcmQnXG4gICAgICAgICAgICApKSlcbiAgICAgICkge1xuICAgICAgICBjbXNSZXF1aXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBzdGF0ZTtcblxuICAgIC8vIHdlIGdpdmUgc21hcnRlZGl0IHByZXZpZXcgcGFnZSBhIFBhZ2VDb250ZXh0XG4gICAgaWYgKHN0YXRlLnVybC5sZW5ndGggPiAwICYmIHN0YXRlLnVybFswXS5wYXRoID09PSAnY3gtcHJldmlldycpIHtcbiAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgIGlkOiAnc21hcnRlZGl0LXByZXZpZXcnLFxuICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zWydwcm9kdWN0Q29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ3Byb2R1Y3RDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNbJ2NhdGVnb3J5Q29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ2NhdGVnb3J5Q29kZSddLCB0eXBlOiBQYWdlVHlwZS5DQVRFR09SWV9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtc1snYnJhbmRDb2RlJ10pIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHBhcmFtc1snYnJhbmRDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZGF0YS5wYWdlTGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogc3RhdGUuZGF0YS5wYWdlTGFiZWwsIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmICghY29udGV4dCkge1xuICAgICAgICBpZiAoc3RhdGUudXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBwYWdlTGFiZWwgPVxuICAgICAgICAgICAgJy8nICsgc3RhdGUudXJsLm1hcCh1cmxTZWdtZW50ID0+IHVybFNlZ21lbnQucGF0aCkuam9pbignLycpO1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBpZDogcGFnZUxhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIGlkOiAnaG9tZXBhZ2UnLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyB1cmwsIHF1ZXJ5UGFyYW1zLCBwYXJhbXMsIGNvbnRleHQsIGNtc1JlcXVpcmVkIH07XG4gIH1cbn1cbiJdfQ==