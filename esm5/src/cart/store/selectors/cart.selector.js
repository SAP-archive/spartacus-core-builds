/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { CART_FEATURE, } from '../cart-state';
import { loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
/** @type {?} */
export var getCartContentSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.content; });
/** @type {?} */
export var getRefreshSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.refresh; });
/** @type {?} */
export var getEntriesSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.entries; });
/** @type {?} */
export var getCartMergeCompleteSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return state.cartMergeComplete;
});
/** @type {?} */
export var getCartsState = createFeatureSelector(CART_FEATURE);
var ɵ0 = /**
 * @param {?} cartsState
 * @return {?}
 */
function (cartsState) { return cartsState.active; };
/** @type {?} */
export var getActiveCartState = createSelector(getCartsState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return loaderValueSelector(state); };
/** @type {?} */
export var getCartState = createSelector(getActiveCartState, (ɵ1));
/** @type {?} */
export var getCartContent = createSelector(getCartState, getCartContentSelector);
/** @type {?} */
export var getRefresh = createSelector(getCartState, getRefreshSelector);
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return loaderSuccessSelector(state) &&
        !loaderLoadingSelector(state) &&
        !loaderValueSelector(state).refresh;
};
/** @type {?} */
export var getLoaded = createSelector(getActiveCartState, (ɵ2));
/** @type {?} */
export var getCartMergeComplete = createSelector(getCartState, getCartMergeCompleteSelector);
/** @type {?} */
export var getEntriesMap = createSelector(getCartState, getEntriesSelector);
/** @type {?} */
export var getEntrySelectorFactory = (/**
 * @param {?} productCode
 * @return {?}
 */
function (productCode) {
    return createSelector(getEntriesMap, (/**
     * @param {?} entries
     * @return {?}
     */
    function (entries) {
        if (entries) {
            return entries[productCode];
        }
    }));
});
var ɵ3 = /**
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
export var getEntries = createSelector(getEntriesMap, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQ0wsWUFBWSxHQUliLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLG1CQUFtQixHQUNwQixNQUFNLDhDQUE4QyxDQUFDOztBQUt0RCxNQUFNLEtBQU8sc0JBQXNCOzs7O0FBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQUE7O0FBQ3pFLE1BQU0sS0FBTyxrQkFBa0I7Ozs7QUFBRyxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQTs7QUFDckUsTUFBTSxLQUFPLGtCQUFrQjs7OztBQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFBOztBQUNyRSxNQUFNLEtBQU8sNEJBQTRCOzs7O0FBQUcsVUFBQyxLQUFnQjtJQUMzRCxPQUFBLEtBQUssQ0FBQyxpQkFBaUI7QUFBdkIsQ0FBdUIsQ0FBQTs7QUFFekIsTUFBTSxLQUFPLGFBQWEsR0FHdEIscUJBQXFCLENBQWEsWUFBWSxDQUFDOzs7OztBQU9qRCxVQUFDLFVBQXNCLElBQUssT0FBQSxVQUFVLENBQUMsTUFBTSxFQUFqQixDQUFpQjs7QUFML0MsTUFBTSxLQUFPLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLGFBQWEsT0FFZDs7Ozs7QUFPQyxVQUFBLEtBQUssSUFBSSxPQUFBLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQjs7QUFMckMsTUFBTSxLQUFPLFlBQVksR0FHckIsY0FBYyxDQUNoQixrQkFBa0IsT0FFbkI7O0FBRUQsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixZQUFZLEVBQ1osc0JBQXNCLENBQ3ZCOztBQUVELE1BQU0sS0FBTyxVQUFVLEdBR25CLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLGtCQUFrQixDQUNuQjs7Ozs7QUFJQyxVQUFBLEtBQUs7SUFDSCxPQUFBLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87QUFGbkMsQ0FFbUM7O0FBTHZDLE1BQU0sS0FBTyxTQUFTLEdBQW1DLGNBQWMsQ0FDckUsa0JBQWtCLE9BS25COztBQUVELE1BQU0sS0FBTyxvQkFBb0IsR0FHN0IsY0FBYyxDQUNoQixZQUFZLEVBQ1osNEJBQTRCLENBQzdCOztBQUVELE1BQU0sS0FBTyxhQUFhLEdBR3RCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLGtCQUFrQixDQUNuQjs7QUFFRCxNQUFNLEtBQU8sdUJBQXVCOzs7O0FBQUcsVUFDckMsV0FBVztJQUVYLE9BQU8sY0FBYyxDQUNuQixhQUFhOzs7O0lBQ2IsVUFBQSxPQUFPO1FBQ0wsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOzs7OztBQUlDLFVBQUEsUUFBUTtJQUNOLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQWQsQ0FBYyxFQUFDLENBQUM7QUFDM0QsQ0FBQzs7QUFKSCxNQUFNLEtBQU8sVUFBVSxHQUF3QyxjQUFjLENBQzNFLGFBQWEsT0FJZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIE1lbW9pemVkU2VsZWN0b3IsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIENBUlRfRkVBVFVSRSxcbiAgQ2FydHNTdGF0ZSxcbiAgQ2FydFN0YXRlLFxuICBTdGF0ZVdpdGhDYXJ0LFxufSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcbmltcG9ydCB7XG4gIGxvYWRlckxvYWRpbmdTZWxlY3RvcixcbiAgbG9hZGVyU3VjY2Vzc1NlbGVjdG9yLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGdldENhcnRDb250ZW50U2VsZWN0b3IgPSAoc3RhdGU6IENhcnRTdGF0ZSkgPT4gc3RhdGUuY29udGVudDtcbmV4cG9ydCBjb25zdCBnZXRSZWZyZXNoU2VsZWN0b3IgPSAoc3RhdGU6IENhcnRTdGF0ZSkgPT4gc3RhdGUucmVmcmVzaDtcbmV4cG9ydCBjb25zdCBnZXRFbnRyaWVzU2VsZWN0b3IgPSAoc3RhdGU6IENhcnRTdGF0ZSkgPT4gc3RhdGUuZW50cmllcztcbmV4cG9ydCBjb25zdCBnZXRDYXJ0TWVyZ2VDb21wbGV0ZVNlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+XG4gIHN0YXRlLmNhcnRNZXJnZUNvbXBsZXRlO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydHNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgQ2FydHNTdGF0ZVxuPiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDYXJ0c1N0YXRlPihDQVJUX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlQ2FydFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBMb2FkZXJTdGF0ZTxDYXJ0U3RhdGU+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRzU3RhdGUsXG4gIChjYXJ0c1N0YXRlOiBDYXJ0c1N0YXRlKSA9PiBjYXJ0c1N0YXRlLmFjdGl2ZVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgQ2FydFN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFjdGl2ZUNhcnRTdGF0ZSxcbiAgc3RhdGUgPT4gbG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0Q29udGVudDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgQ2FydFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0U3RhdGUsXG4gIGdldENhcnRDb250ZW50U2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRSZWZyZXNoOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRTdGF0ZSxcbiAgZ2V0UmVmcmVzaFNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9hZGVkOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgYm9vbGVhbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QWN0aXZlQ2FydFN0YXRlLFxuICBzdGF0ZSA9PlxuICAgIGxvYWRlclN1Y2Nlc3NTZWxlY3RvcihzdGF0ZSkgJiZcbiAgICAhbG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKSAmJlxuICAgICFsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKS5yZWZyZXNoXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydE1lcmdlQ29tcGxldGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRDYXJ0TWVyZ2VDb21wbGV0ZVNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0RW50cmllc01hcDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICB7IFtjb2RlOiBzdHJpbmddOiBPcmRlckVudHJ5IH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRFbnRyaWVzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRFbnRyeVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgcHJvZHVjdENvZGVcbik6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBPcmRlckVudHJ5PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRFbnRyaWVzTWFwLFxuICAgIGVudHJpZXMgPT4ge1xuICAgICAgaWYgKGVudHJpZXMpIHtcbiAgICAgICAgcmV0dXJuIGVudHJpZXNbcHJvZHVjdENvZGVdO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFbnRyaWVzOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgT3JkZXJFbnRyeVtdPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRFbnRyaWVzTWFwLFxuICBlbnRpdGllcyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudGl0aWVzKS5tYXAoY29kZSA9PiBlbnRpdGllc1tjb2RlXSk7XG4gIH1cbik7XG4iXX0=