/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { CART_FEATURE, } from '../cart-state';
/** @type {?} */
var getCartContentSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.content; });
var ɵ0 = getCartContentSelector;
/** @type {?} */
var getCartRefreshSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.refresh; });
var ɵ1 = getCartRefreshSelector;
/** @type {?} */
var getCartEntriesSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.entries; });
var ɵ2 = getCartEntriesSelector;
/** @type {?} */
var getCartMergeCompleteSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return state.cartMergeComplete;
});
var ɵ3 = getCartMergeCompleteSelector;
/** @type {?} */
export var getCartsState = createFeatureSelector(CART_FEATURE);
var ɵ4 = /**
 * @param {?} cartsState
 * @return {?}
 */
function (cartsState) { return cartsState.active; };
/** @type {?} */
export var getActiveCartState = createSelector(getCartsState, (ɵ4));
var ɵ5 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return StateLoaderSelectors.loaderValueSelector(state); };
/** @type {?} */
export var getCartState = createSelector(getActiveCartState, (ɵ5));
/** @type {?} */
export var getCartContent = createSelector(getCartState, getCartContentSelector);
/** @type {?} */
export var getCartRefresh = createSelector(getCartState, getCartRefreshSelector);
var ɵ6 = /**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return (StateLoaderSelectors.loaderSuccessSelector(state) &&
        !StateLoaderSelectors.loaderLoadingSelector(state) &&
        !StateLoaderSelectors.loaderValueSelector(state).refresh) ||
        (StateLoaderSelectors.loaderErrorSelector(state) &&
            !StateLoaderSelectors.loaderLoadingSelector(state) &&
            !StateLoaderSelectors.loaderValueSelector(state).refresh);
};
/** @type {?} */
export var getCartLoaded = createSelector(getActiveCartState, (ɵ6));
var ɵ7 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return StateLoaderSelectors.loaderLoadingSelector(state); };
/** @type {?} */
export var getCartLoading = createSelector(getActiveCartState, (ɵ7));
/** @type {?} */
export var getCartMergeComplete = createSelector(getCartState, getCartMergeCompleteSelector);
/** @type {?} */
export var getCartEntriesMap = createSelector(getCartState, getCartEntriesSelector);
/** @type {?} */
export var getCartEntrySelectorFactory = (/**
 * @param {?} productCode
 * @return {?}
 */
function (productCode) {
    return createSelector(getCartEntriesMap, (/**
     * @param {?} entries
     * @return {?}
     */
    function (entries) {
        if (entries) {
            return entries[productCode];
        }
    }));
});
var ɵ8 = /**
 * @param {?} entities
 * @return {?}
 */
function (entities) {
    return Object.keys(entities).map((/**
     * @param {?} code
     * @return {?}
     */
    function (code) { return entities[code]; }));
};
/** @type {?} */
export var getCartEntries = createSelector(getCartEntriesMap, (ɵ8));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUdyQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRSxPQUFPLEVBR0wsWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDOztJQUVqQixzQkFBc0I7Ozs7QUFBRyxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQTs7O0lBQzVELHNCQUFzQjs7OztBQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFBOzs7SUFDNUQsc0JBQXNCOzs7O0FBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQUE7OztJQUM1RCw0QkFBNEI7Ozs7QUFBRyxVQUFDLEtBQWdCO0lBQ3BELE9BQUEsS0FBSyxDQUFDLGlCQUFpQjtBQUF2QixDQUF1QixDQUFBOzs7QUFFekIsTUFBTSxLQUFPLGFBQWEsR0FHdEIscUJBQXFCLENBQWEsWUFBWSxDQUFDOzs7OztBQU9qRCxVQUFDLFVBQXNCLElBQUssT0FBQSxVQUFVLENBQUMsTUFBTSxFQUFqQixDQUFpQjs7QUFML0MsTUFBTSxLQUFPLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLGFBQWEsT0FFZDs7Ozs7QUFPQyxVQUFBLEtBQUssSUFBSSxPQUFBLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUEvQyxDQUErQzs7QUFMMUQsTUFBTSxLQUFPLFlBQVksR0FHckIsY0FBYyxDQUNoQixrQkFBa0IsT0FFbkI7O0FBRUQsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixZQUFZLEVBQ1osc0JBQXNCLENBQ3ZCOztBQUVELE1BQU0sS0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLHNCQUFzQixDQUN2Qjs7Ozs7QUFPQyxVQUFBLEtBQUs7SUFDSCxPQUFBLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQ2hELENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQ2xELENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzNELENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1lBQzlDLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1lBQ2xELENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBTDNELENBSzJEOztBQVgvRCxNQUFNLEtBQU8sYUFBYSxHQUd0QixjQUFjLENBQ2hCLGtCQUFrQixPQVFuQjs7Ozs7QUFJQyxVQUFBLEtBQUssSUFBSSxPQUFBLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUFqRCxDQUFpRDs7QUFGNUQsTUFBTSxLQUFPLGNBQWMsR0FBbUMsY0FBYyxDQUMxRSxrQkFBa0IsT0FFbkI7O0FBRUQsTUFBTSxLQUFPLG9CQUFvQixHQUc3QixjQUFjLENBQ2hCLFlBQVksRUFDWiw0QkFBNEIsQ0FDN0I7O0FBRUQsTUFBTSxLQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFlBQVksRUFDWixzQkFBc0IsQ0FDdkI7O0FBRUQsTUFBTSxLQUFPLDJCQUEyQjs7OztBQUFHLFVBQ3pDLFdBQW1CO0lBRW5CLE9BQU8sY0FBYyxDQUNuQixpQkFBaUI7Ozs7SUFDakIsVUFBQSxPQUFPO1FBQ0wsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOzs7OztBQU9DLFVBQUEsUUFBUTtJQUNOLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQWQsQ0FBYyxFQUFDLENBQUM7QUFDM0QsQ0FBQzs7QUFQSCxNQUFNLEtBQU8sY0FBYyxHQUd2QixjQUFjLENBQ2hCLGlCQUFpQixPQUlsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIE1lbW9pemVkU2VsZWN0b3IsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlclNlbGVjdG9ycyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBDYXJ0c1N0YXRlLFxuICBDYXJ0U3RhdGUsXG4gIENBUlRfRkVBVFVSRSxcbiAgU3RhdGVXaXRoQ2FydCxcbn0gZnJvbSAnLi4vY2FydC1zdGF0ZSc7XG5cbmNvbnN0IGdldENhcnRDb250ZW50U2VsZWN0b3IgPSAoc3RhdGU6IENhcnRTdGF0ZSkgPT4gc3RhdGUuY29udGVudDtcbmNvbnN0IGdldENhcnRSZWZyZXNoU2VsZWN0b3IgPSAoc3RhdGU6IENhcnRTdGF0ZSkgPT4gc3RhdGUucmVmcmVzaDtcbmNvbnN0IGdldENhcnRFbnRyaWVzU2VsZWN0b3IgPSAoc3RhdGU6IENhcnRTdGF0ZSkgPT4gc3RhdGUuZW50cmllcztcbmNvbnN0IGdldENhcnRNZXJnZUNvbXBsZXRlU2VsZWN0b3IgPSAoc3RhdGU6IENhcnRTdGF0ZSkgPT5cbiAgc3RhdGUuY2FydE1lcmdlQ29tcGxldGU7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0c1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBDYXJ0c1N0YXRlXG4+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPENhcnRzU3RhdGU+KENBUlRfRkVBVFVSRSk7XG5cbmV4cG9ydCBjb25zdCBnZXRBY3RpdmVDYXJ0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIExvYWRlclN0YXRlPENhcnRTdGF0ZT5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydHNTdGF0ZSxcbiAgKGNhcnRzU3RhdGU6IENhcnRzU3RhdGUpID0+IGNhcnRzU3RhdGUuYWN0aXZlXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBDYXJ0U3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QWN0aXZlQ2FydFN0YXRlLFxuICBzdGF0ZSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRDb250ZW50OiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBDYXJ0XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRTdGF0ZSxcbiAgZ2V0Q2FydENvbnRlbnRTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRSZWZyZXNoOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRTdGF0ZSxcbiAgZ2V0Q2FydFJlZnJlc2hTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRMb2FkZWQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QWN0aXZlQ2FydFN0YXRlLFxuICBzdGF0ZSA9PlxuICAgIChTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJTdWNjZXNzU2VsZWN0b3Ioc3RhdGUpICYmXG4gICAgICAhU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKSAmJlxuICAgICAgIVN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpLnJlZnJlc2gpIHx8XG4gICAgKFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlckVycm9yU2VsZWN0b3Ioc3RhdGUpICYmXG4gICAgICAhU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKSAmJlxuICAgICAgIVN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpLnJlZnJlc2gpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydExvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBib29sZWFuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBY3RpdmVDYXJ0U3RhdGUsXG4gIHN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlckxvYWRpbmdTZWxlY3RvcihzdGF0ZSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0TWVyZ2VDb21wbGV0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0U3RhdGUsXG4gIGdldENhcnRNZXJnZUNvbXBsZXRlU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0RW50cmllc01hcDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgeyBbY29kZTogc3RyaW5nXTogT3JkZXJFbnRyeSB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRTdGF0ZSxcbiAgZ2V0Q2FydEVudHJpZXNTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRFbnRyeVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgcHJvZHVjdENvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDYXJ0LCBPcmRlckVudHJ5PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRDYXJ0RW50cmllc01hcCxcbiAgICBlbnRyaWVzID0+IHtcbiAgICAgIGlmIChlbnRyaWVzKSB7XG4gICAgICAgIHJldHVybiBlbnRyaWVzW3Byb2R1Y3RDb2RlXTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEVudHJpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIE9yZGVyRW50cnlbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0RW50cmllc01hcCxcbiAgZW50aXRpZXMgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhlbnRpdGllcykubWFwKGNvZGUgPT4gZW50aXRpZXNbY29kZV0pO1xuICB9XG4pO1xuIl19