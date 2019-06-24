/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
import { CART_FEATURE, } from '../cart-state';
/** @type {?} */
export const getCartContentSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.content);
/** @type {?} */
export const getRefreshSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.refresh);
/** @type {?} */
export const getEntriesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.entries);
/** @type {?} */
export const getCartMergeCompleteSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.cartMergeComplete);
/** @type {?} */
export const getCartsState = createFeatureSelector(CART_FEATURE);
const ɵ0 = /**
 * @param {?} cartsState
 * @return {?}
 */
(cartsState) => cartsState.active;
/** @type {?} */
export const getActiveCartState = createSelector(getCartsState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
state => loaderValueSelector(state);
/** @type {?} */
export const getCartState = createSelector(getActiveCartState, (ɵ1));
/** @type {?} */
export const getCartContent = createSelector(getCartState, getCartContentSelector);
/** @type {?} */
export const getCartRefresh = createSelector(getCartState, getRefreshSelector);
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
state => loaderSuccessSelector(state) &&
    !loaderLoadingSelector(state) &&
    !loaderValueSelector(state).refresh;
/** @type {?} */
export const getCartLoaded = createSelector(getActiveCartState, (ɵ2));
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
state => loaderLoadingSelector(state);
/** @type {?} */
export const getCartLoading = createSelector(getActiveCartState, (ɵ3));
/** @type {?} */
export const getCartMergeComplete = createSelector(getCartState, getCartMergeCompleteSelector);
/** @type {?} */
export const getCartEntriesMap = createSelector(getCartState, getEntriesSelector);
/** @type {?} */
export const getCartEntrySelectorFactory = (/**
 * @param {?} productCode
 * @return {?}
 */
(productCode) => {
    return createSelector(getCartEntriesMap, (/**
     * @param {?} entries
     * @return {?}
     */
    entries => {
        if (entries) {
            return entries[productCode];
        }
    }));
});
const ɵ4 = /**
 * @param {?} entities
 * @return {?}
 */
entities => {
    return Object.keys(entities).map((/**
     * @param {?} code
     * @return {?}
     */
    code => entities[code]));
};
/** @type {?} */
export const getCartEntries = createSelector(getCartEntriesMap, (ɵ4));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUlyQixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBR0wsWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDOztBQUV2QixNQUFNLE9BQU8sc0JBQXNCOzs7O0FBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBOztBQUN6RSxNQUFNLE9BQU8sa0JBQWtCOzs7O0FBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBOztBQUNyRSxNQUFNLE9BQU8sa0JBQWtCOzs7O0FBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBOztBQUNyRSxNQUFNLE9BQU8sNEJBQTRCOzs7O0FBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FDL0QsS0FBSyxDQUFDLGlCQUFpQixDQUFBOztBQUV6QixNQUFNLE9BQU8sYUFBYSxHQUd0QixxQkFBcUIsQ0FBYSxZQUFZLENBQUM7Ozs7O0FBT2pELENBQUMsVUFBc0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU07O0FBTC9DLE1BQU0sT0FBTyxrQkFBa0IsR0FHM0IsY0FBYyxDQUNoQixhQUFhLE9BRWQ7Ozs7O0FBT0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7O0FBTHJDLE1BQU0sT0FBTyxZQUFZLEdBR3JCLGNBQWMsQ0FDaEIsa0JBQWtCLE9BRW5COztBQUVELE1BQU0sT0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLHNCQUFzQixDQUN2Qjs7QUFFRCxNQUFNLE9BQU8sY0FBYyxHQUd2QixjQUFjLENBQ2hCLFlBQVksRUFDWixrQkFBa0IsQ0FDbkI7Ozs7O0FBSUMsS0FBSyxDQUFDLEVBQUUsQ0FDTixxQkFBcUIsQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7SUFDN0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOztBQUx2QyxNQUFNLE9BQU8sYUFBYSxHQUFtQyxjQUFjLENBQ3pFLGtCQUFrQixPQUtuQjs7Ozs7QUFJQyxLQUFLLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQzs7QUFGdkMsTUFBTSxPQUFPLGNBQWMsR0FBbUMsY0FBYyxDQUMxRSxrQkFBa0IsT0FFbkI7O0FBRUQsTUFBTSxPQUFPLG9CQUFvQixHQUc3QixjQUFjLENBQ2hCLFlBQVksRUFDWiw0QkFBNEIsQ0FDN0I7O0FBRUQsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFlBQVksRUFDWixrQkFBa0IsQ0FDbkI7O0FBRUQsTUFBTSxPQUFPLDJCQUEyQjs7OztBQUFHLENBQ3pDLFdBQVcsRUFDd0IsRUFBRTtJQUNyQyxPQUFPLGNBQWMsQ0FDbkIsaUJBQWlCOzs7O0lBQ2pCLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOzs7OztBQU9DLFFBQVEsQ0FBQyxFQUFFO0lBQ1QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUc7Ozs7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO0FBQzNELENBQUM7O0FBUEgsTUFBTSxPQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixpQkFBaUIsT0FJbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBNZW1vaXplZFNlbGVjdG9yLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIGxvYWRlckxvYWRpbmdTZWxlY3RvcixcbiAgbG9hZGVyU3VjY2Vzc1NlbGVjdG9yLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQge1xuICBDYXJ0c1N0YXRlLFxuICBDYXJ0U3RhdGUsXG4gIENBUlRfRkVBVFVSRSxcbiAgU3RhdGVXaXRoQ2FydCxcbn0gZnJvbSAnLi4vY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0Q29udGVudFNlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+IHN0YXRlLmNvbnRlbnQ7XG5leHBvcnQgY29uc3QgZ2V0UmVmcmVzaFNlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+IHN0YXRlLnJlZnJlc2g7XG5leHBvcnQgY29uc3QgZ2V0RW50cmllc1NlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+IHN0YXRlLmVudHJpZXM7XG5leHBvcnQgY29uc3QgZ2V0Q2FydE1lcmdlQ29tcGxldGVTZWxlY3RvciA9IChzdGF0ZTogQ2FydFN0YXRlKSA9PlxuICBzdGF0ZS5jYXJ0TWVyZ2VDb21wbGV0ZTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRzU3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Q2FydHNTdGF0ZT4oQ0FSVF9GRUFUVVJFKTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZUNhcnRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgTG9hZGVyU3RhdGU8Q2FydFN0YXRlPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0c1N0YXRlLFxuICAoY2FydHNTdGF0ZTogQ2FydHNTdGF0ZSkgPT4gY2FydHNTdGF0ZS5hY3RpdmVcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBY3RpdmVDYXJ0U3RhdGUsXG4gIHN0YXRlID0+IGxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydENvbnRlbnQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRDYXJ0Q29udGVudFNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydFJlZnJlc2g6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRSZWZyZXNoU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0TG9hZGVkOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgYm9vbGVhbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QWN0aXZlQ2FydFN0YXRlLFxuICBzdGF0ZSA9PlxuICAgIGxvYWRlclN1Y2Nlc3NTZWxlY3RvcihzdGF0ZSkgJiZcbiAgICAhbG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKSAmJlxuICAgICFsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKS5yZWZyZXNoXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydExvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBib29sZWFuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBY3RpdmVDYXJ0U3RhdGUsXG4gIHN0YXRlID0+IGxvYWRlckxvYWRpbmdTZWxlY3RvcihzdGF0ZSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0TWVyZ2VDb21wbGV0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0U3RhdGUsXG4gIGdldENhcnRNZXJnZUNvbXBsZXRlU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0RW50cmllc01hcDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICB7IFtjb2RlOiBzdHJpbmddOiBPcmRlckVudHJ5IH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRFbnRyaWVzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0RW50cnlTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHByb2R1Y3RDb2RlXG4pOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgT3JkZXJFbnRyeT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0Q2FydEVudHJpZXNNYXAsXG4gICAgZW50cmllcyA9PiB7XG4gICAgICBpZiAoZW50cmllcykge1xuICAgICAgICByZXR1cm4gZW50cmllc1twcm9kdWN0Q29kZV07XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRFbnRyaWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIE9yZGVyRW50cnlbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0RW50cmllc01hcCxcbiAgZW50aXRpZXMgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhlbnRpdGllcykubWFwKGNvZGUgPT4gZW50aXRpZXNbY29kZV0pO1xuICB9XG4pO1xuIl19