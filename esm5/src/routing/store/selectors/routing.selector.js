/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { ROUTING_FEATURE } from '../routing-state';
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
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL3NlbGVjdG9ycy9yb3V0aW5nLnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUVyQixPQUFPLEVBQWUsZUFBZSxFQUFTLE1BQU0sa0JBQWtCLENBQUM7O0FBRXZFLE1BQU0sS0FBTyxxQkFBcUIsR0FHOUIscUJBQXFCLENBQVEsZUFBZSxDQUFDOzs7OztBQU8vQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWTs7QUFMdkIsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixxQkFBcUIsT0FFdEI7Ozs7O0FBT0MsVUFBQyxZQUF5QjtJQUN4QixPQUFBLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUFoRSxDQUFnRTs7QUFOcEUsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixjQUFjLE9BR2Y7Ozs7O0FBT0MsVUFBQyxZQUF5QjtJQUN4QixPQUFBLFlBQVksQ0FBQyxTQUFTLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPO0FBQXhELENBQXdEOztBQU41RCxNQUFNLEtBQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsY0FBYyxPQUdmOzs7OztBQUlDLFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTOztBQUZ0QixNQUFNLEtBQU8sWUFBWSxHQUFtQyxjQUFjLENBQ3hFLGtCQUFrQixPQUVuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIE1lbW9pemVkU2VsZWN0b3IsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0ZXJTdGF0ZSwgUk9VVElOR19GRUFUVVJFLCBTdGF0ZSB9IGZyb20gJy4uL3JvdXRpbmctc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgZ2V0Um91dGVyRmVhdHVyZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIFN0YXRlXG4+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPFN0YXRlPihST1VUSU5HX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0Um91dGVyU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgUm91dGVyU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Um91dGVyRmVhdHVyZVN0YXRlLFxuICBzdGF0ZSA9PiBzdGF0ZS5yb3V0ZXJcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29udGV4dDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBQYWdlQ29udGV4dFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJTdGF0ZSxcbiAgKHJvdXRpbmdTdGF0ZTogUm91dGVyU3RhdGUpID0+XG4gICAgKHJvdXRpbmdTdGF0ZS5zdGF0ZSAmJiByb3V0aW5nU3RhdGUuc3RhdGUuY29udGV4dCkgfHwgeyBpZDogJycgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHRQYWdlQ29udGV4dDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBQYWdlQ29udGV4dFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJTdGF0ZSxcbiAgKHJvdXRpbmdTdGF0ZTogUm91dGVyU3RhdGUpID0+XG4gICAgcm91dGluZ1N0YXRlLm5leHRTdGF0ZSAmJiByb3V0aW5nU3RhdGUubmV4dFN0YXRlLmNvbnRleHRcbik7XG5cbmV4cG9ydCBjb25zdCBpc05hdmlnYXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBib29sZWFuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXROZXh0UGFnZUNvbnRleHQsXG4gIGNvbnRleHQgPT4gISFjb250ZXh0XG4pO1xuIl19