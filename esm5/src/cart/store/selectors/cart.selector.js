/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return StateLoaderSelectors.loaderSuccessSelector(state) &&
        !StateLoaderSelectors.loaderLoadingSelector(state) &&
        !StateLoaderSelectors.loaderValueSelector(state).refresh;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUdyQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRSxPQUFPLEVBR0wsWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDOztJQUVqQixzQkFBc0I7Ozs7QUFBRyxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQTs7O0lBQzVELHNCQUFzQjs7OztBQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFBOzs7SUFDNUQsc0JBQXNCOzs7O0FBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQUE7OztJQUM1RCw0QkFBNEI7Ozs7QUFBRyxVQUFDLEtBQWdCO0lBQ3BELE9BQUEsS0FBSyxDQUFDLGlCQUFpQjtBQUF2QixDQUF1QixDQUFBOzs7QUFFekIsTUFBTSxLQUFPLGFBQWEsR0FHdEIscUJBQXFCLENBQWEsWUFBWSxDQUFDOzs7OztBQU9qRCxVQUFDLFVBQXNCLElBQUssT0FBQSxVQUFVLENBQUMsTUFBTSxFQUFqQixDQUFpQjs7QUFML0MsTUFBTSxLQUFPLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLGFBQWEsT0FFZDs7Ozs7QUFPQyxVQUFBLEtBQUssSUFBSSxPQUFBLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUEvQyxDQUErQzs7QUFMMUQsTUFBTSxLQUFPLFlBQVksR0FHckIsY0FBYyxDQUNoQixrQkFBa0IsT0FFbkI7O0FBRUQsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixZQUFZLEVBQ1osc0JBQXNCLENBQ3ZCOztBQUVELE1BQU0sS0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLHNCQUFzQixDQUN2Qjs7Ozs7QUFPQyxVQUFBLEtBQUs7SUFDSCxPQUFBLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUNqRCxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUNsRCxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87QUFGeEQsQ0FFd0Q7O0FBUjVELE1BQU0sS0FBTyxhQUFhLEdBR3RCLGNBQWMsQ0FDaEIsa0JBQWtCLE9BS25COzs7OztBQUlDLFVBQUEsS0FBSyxJQUFJLE9BQUEsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQWpELENBQWlEOztBQUY1RCxNQUFNLEtBQU8sY0FBYyxHQUFtQyxjQUFjLENBQzFFLGtCQUFrQixPQUVuQjs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBRzdCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLDRCQUE0QixDQUM3Qjs7QUFFRCxNQUFNLEtBQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLHNCQUFzQixDQUN2Qjs7QUFFRCxNQUFNLEtBQU8sMkJBQTJCOzs7O0FBQUcsVUFDekMsV0FBbUI7SUFFbkIsT0FBTyxjQUFjLENBQ25CLGlCQUFpQjs7OztJQUNqQixVQUFBLE9BQU87UUFDTCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUE7Ozs7O0FBT0MsVUFBQSxRQUFRO0lBQ04sT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBZCxDQUFjLEVBQUMsQ0FBQztBQUMzRCxDQUFDOztBQVBILE1BQU0sS0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsaUJBQWlCLE9BSWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyU2VsZWN0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIENhcnRzU3RhdGUsXG4gIENhcnRTdGF0ZSxcbiAgQ0FSVF9GRUFUVVJFLFxuICBTdGF0ZVdpdGhDYXJ0LFxufSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcblxuY29uc3QgZ2V0Q2FydENvbnRlbnRTZWxlY3RvciA9IChzdGF0ZTogQ2FydFN0YXRlKSA9PiBzdGF0ZS5jb250ZW50O1xuY29uc3QgZ2V0Q2FydFJlZnJlc2hTZWxlY3RvciA9IChzdGF0ZTogQ2FydFN0YXRlKSA9PiBzdGF0ZS5yZWZyZXNoO1xuY29uc3QgZ2V0Q2FydEVudHJpZXNTZWxlY3RvciA9IChzdGF0ZTogQ2FydFN0YXRlKSA9PiBzdGF0ZS5lbnRyaWVzO1xuY29uc3QgZ2V0Q2FydE1lcmdlQ29tcGxldGVTZWxlY3RvciA9IChzdGF0ZTogQ2FydFN0YXRlKSA9PlxuICBzdGF0ZS5jYXJ0TWVyZ2VDb21wbGV0ZTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRzU3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Q2FydHNTdGF0ZT4oQ0FSVF9GRUFUVVJFKTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZUNhcnRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgTG9hZGVyU3RhdGU8Q2FydFN0YXRlPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0c1N0YXRlLFxuICAoY2FydHNTdGF0ZTogQ2FydHNTdGF0ZSkgPT4gY2FydHNTdGF0ZS5hY3RpdmVcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBY3RpdmVDYXJ0U3RhdGUsXG4gIHN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydENvbnRlbnQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRDYXJ0Q29udGVudFNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydFJlZnJlc2g6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRDYXJ0UmVmcmVzaFNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydExvYWRlZDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBY3RpdmVDYXJ0U3RhdGUsXG4gIHN0YXRlID0+XG4gICAgU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyU3VjY2Vzc1NlbGVjdG9yKHN0YXRlKSAmJlxuICAgICFTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpICYmXG4gICAgIVN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpLnJlZnJlc2hcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0TG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxhbnksIGJvb2xlYW4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFjdGl2ZUNhcnRTdGF0ZSxcbiAgc3RhdGUgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRNZXJnZUNvbXBsZXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRTdGF0ZSxcbiAgZ2V0Q2FydE1lcmdlQ29tcGxldGVTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRFbnRyaWVzTWFwOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICB7IFtjb2RlOiBzdHJpbmddOiBPcmRlckVudHJ5IH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRDYXJ0RW50cmllc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEVudHJ5U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBwcm9kdWN0Q29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENhcnQsIE9yZGVyRW50cnk+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldENhcnRFbnRyaWVzTWFwLFxuICAgIGVudHJpZXMgPT4ge1xuICAgICAgaWYgKGVudHJpZXMpIHtcbiAgICAgICAgcmV0dXJuIGVudHJpZXNbcHJvZHVjdENvZGVdO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0RW50cmllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgT3JkZXJFbnRyeVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRFbnRyaWVzTWFwLFxuICBlbnRpdGllcyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudGl0aWVzKS5tYXAoY29kZSA9PiBlbnRpdGllc1tjb2RlXSk7XG4gIH1cbik7XG4iXX0=