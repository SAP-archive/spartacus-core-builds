/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
import { CART_FEATURE, } from '../cart-state';
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
export var getCartRefresh = createSelector(getCartState, getRefreshSelector);
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
export var getCartLoaded = createSelector(getActiveCartState, (ɵ2));
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return loaderLoadingSelector(state); };
/** @type {?} */
export var getCartLoading = createSelector(getActiveCartState, (ɵ3));
/** @type {?} */
export var getCartMergeComplete = createSelector(getCartState, getCartMergeCompleteSelector);
/** @type {?} */
export var getCartEntriesMap = createSelector(getCartState, getEntriesSelector);
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
var ɵ4 = /**
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
export var getCartEntries = createSelector(getCartEntriesMap, (ɵ4));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUlyQixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBR0wsWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDOztBQUV2QixNQUFNLEtBQU8sc0JBQXNCOzs7O0FBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQUE7O0FBQ3pFLE1BQU0sS0FBTyxrQkFBa0I7Ozs7QUFBRyxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQTs7QUFDckUsTUFBTSxLQUFPLGtCQUFrQjs7OztBQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFBOztBQUNyRSxNQUFNLEtBQU8sNEJBQTRCOzs7O0FBQUcsVUFBQyxLQUFnQjtJQUMzRCxPQUFBLEtBQUssQ0FBQyxpQkFBaUI7QUFBdkIsQ0FBdUIsQ0FBQTs7QUFFekIsTUFBTSxLQUFPLGFBQWEsR0FHdEIscUJBQXFCLENBQWEsWUFBWSxDQUFDOzs7OztBQU9qRCxVQUFDLFVBQXNCLElBQUssT0FBQSxVQUFVLENBQUMsTUFBTSxFQUFqQixDQUFpQjs7QUFML0MsTUFBTSxLQUFPLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLGFBQWEsT0FFZDs7Ozs7QUFPQyxVQUFBLEtBQUssSUFBSSxPQUFBLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQjs7QUFMckMsTUFBTSxLQUFPLFlBQVksR0FHckIsY0FBYyxDQUNoQixrQkFBa0IsT0FFbkI7O0FBRUQsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixZQUFZLEVBQ1osc0JBQXNCLENBQ3ZCOztBQUVELE1BQU0sS0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLGtCQUFrQixDQUNuQjs7Ozs7QUFJQyxVQUFBLEtBQUs7SUFDSCxPQUFBLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87QUFGbkMsQ0FFbUM7O0FBTHZDLE1BQU0sS0FBTyxhQUFhLEdBQW1DLGNBQWMsQ0FDekUsa0JBQWtCLE9BS25COzs7OztBQUlDLFVBQUEsS0FBSyxJQUFJLE9BQUEscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCOztBQUZ2QyxNQUFNLEtBQU8sY0FBYyxHQUFtQyxjQUFjLENBQzFFLGtCQUFrQixPQUVuQjs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBRzdCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLDRCQUE0QixDQUM3Qjs7QUFFRCxNQUFNLEtBQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLGtCQUFrQixDQUNuQjs7QUFFRCxNQUFNLEtBQU8sMkJBQTJCOzs7O0FBQUcsVUFDekMsV0FBVztJQUVYLE9BQU8sY0FBYyxDQUNuQixpQkFBaUI7Ozs7SUFDakIsVUFBQSxPQUFPO1FBQ0wsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOzs7OztBQU9DLFVBQUEsUUFBUTtJQUNOLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQWQsQ0FBYyxFQUFDLENBQUM7QUFDM0QsQ0FBQzs7QUFQSCxNQUFNLEtBQU8sY0FBYyxHQUd2QixjQUFjLENBQ2hCLGlCQUFpQixPQUlsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIE1lbW9pemVkU2VsZWN0b3IsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgbG9hZGVyTG9hZGluZ1NlbGVjdG9yLFxuICBsb2FkZXJTdWNjZXNzU2VsZWN0b3IsXG4gIGxvYWRlclZhbHVlU2VsZWN0b3IsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7XG4gIENhcnRzU3RhdGUsXG4gIENhcnRTdGF0ZSxcbiAgQ0FSVF9GRUFUVVJFLFxuICBTdGF0ZVdpdGhDYXJ0LFxufSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGdldENhcnRDb250ZW50U2VsZWN0b3IgPSAoc3RhdGU6IENhcnRTdGF0ZSkgPT4gc3RhdGUuY29udGVudDtcbmV4cG9ydCBjb25zdCBnZXRSZWZyZXNoU2VsZWN0b3IgPSAoc3RhdGU6IENhcnRTdGF0ZSkgPT4gc3RhdGUucmVmcmVzaDtcbmV4cG9ydCBjb25zdCBnZXRFbnRyaWVzU2VsZWN0b3IgPSAoc3RhdGU6IENhcnRTdGF0ZSkgPT4gc3RhdGUuZW50cmllcztcbmV4cG9ydCBjb25zdCBnZXRDYXJ0TWVyZ2VDb21wbGV0ZVNlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+XG4gIHN0YXRlLmNhcnRNZXJnZUNvbXBsZXRlO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydHNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgQ2FydHNTdGF0ZVxuPiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDYXJ0c1N0YXRlPihDQVJUX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlQ2FydFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBMb2FkZXJTdGF0ZTxDYXJ0U3RhdGU+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRzU3RhdGUsXG4gIChjYXJ0c1N0YXRlOiBDYXJ0c1N0YXRlKSA9PiBjYXJ0c1N0YXRlLmFjdGl2ZVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgQ2FydFN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFjdGl2ZUNhcnRTdGF0ZSxcbiAgc3RhdGUgPT4gbG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0Q29udGVudDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgQ2FydFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0U3RhdGUsXG4gIGdldENhcnRDb250ZW50U2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0UmVmcmVzaDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0U3RhdGUsXG4gIGdldFJlZnJlc2hTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRMb2FkZWQ6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBib29sZWFuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBY3RpdmVDYXJ0U3RhdGUsXG4gIHN0YXRlID0+XG4gICAgbG9hZGVyU3VjY2Vzc1NlbGVjdG9yKHN0YXRlKSAmJlxuICAgICFsb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpICYmXG4gICAgIWxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpLnJlZnJlc2hcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0TG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxhbnksIGJvb2xlYW4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFjdGl2ZUNhcnRTdGF0ZSxcbiAgc3RhdGUgPT4gbG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRNZXJnZUNvbXBsZXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRTdGF0ZSxcbiAgZ2V0Q2FydE1lcmdlQ29tcGxldGVTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRFbnRyaWVzTWFwOiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIHsgW2NvZGU6IHN0cmluZ106IE9yZGVyRW50cnkgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0U3RhdGUsXG4gIGdldEVudHJpZXNTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRFbnRyeVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgcHJvZHVjdENvZGVcbik6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBPcmRlckVudHJ5PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRDYXJ0RW50cmllc01hcCxcbiAgICBlbnRyaWVzID0+IHtcbiAgICAgIGlmIChlbnRyaWVzKSB7XG4gICAgICAgIHJldHVybiBlbnRyaWVzW3Byb2R1Y3RDb2RlXTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEVudHJpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgT3JkZXJFbnRyeVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRFbnRyaWVzTWFwLFxuICBlbnRpdGllcyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudGl0aWVzKS5tYXAoY29kZSA9PiBlbnRpdGllc1tjb2RlXSk7XG4gIH1cbik7XG4iXX0=