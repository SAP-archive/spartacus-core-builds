/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { CART_FEATURE, } from '../cart-state';
/** @type {?} */
const getCartContentSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.content);
const ɵ0 = getCartContentSelector;
/** @type {?} */
const getCartRefreshSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.refresh);
const ɵ1 = getCartRefreshSelector;
/** @type {?} */
const getCartEntriesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.entries);
const ɵ2 = getCartEntriesSelector;
/** @type {?} */
const getCartMergeCompleteSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.cartMergeComplete);
const ɵ3 = getCartMergeCompleteSelector;
/** @type {?} */
export const getCartsState = createFeatureSelector(CART_FEATURE);
const ɵ4 = /**
 * @param {?} cartsState
 * @return {?}
 */
(cartsState) => cartsState.active;
/** @type {?} */
export const getActiveCartState = createSelector(getCartsState, (ɵ4));
const ɵ5 = /**
 * @param {?} state
 * @return {?}
 */
state => StateLoaderSelectors.loaderValueSelector(state);
/** @type {?} */
export const getCartState = createSelector(getActiveCartState, (ɵ5));
/** @type {?} */
export const getCartContent = createSelector(getCartState, getCartContentSelector);
/** @type {?} */
export const getCartRefresh = createSelector(getCartState, getCartRefreshSelector);
const ɵ6 = /**
 * @param {?} state
 * @return {?}
 */
state => StateLoaderSelectors.loaderSuccessSelector(state) &&
    !StateLoaderSelectors.loaderLoadingSelector(state) &&
    !StateLoaderSelectors.loaderValueSelector(state).refresh;
/** @type {?} */
export const getCartLoaded = createSelector(getActiveCartState, (ɵ6));
const ɵ7 = /**
 * @param {?} state
 * @return {?}
 */
state => StateLoaderSelectors.loaderLoadingSelector(state);
/** @type {?} */
export const getCartLoading = createSelector(getActiveCartState, (ɵ7));
/** @type {?} */
export const getCartMergeComplete = createSelector(getCartState, getCartMergeCompleteSelector);
/** @type {?} */
export const getCartEntriesMap = createSelector(getCartState, getCartEntriesSelector);
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
const ɵ8 = /**
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
export const getCartEntries = createSelector(getCartEntriesMap, (ɵ8));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUdyQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRSxPQUFPLEVBR0wsWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDOztNQUVqQixzQkFBc0I7Ozs7QUFBRyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7OztNQUM1RCxzQkFBc0I7Ozs7QUFBRyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7OztNQUM1RCxzQkFBc0I7Ozs7QUFBRyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7OztNQUM1RCw0QkFBNEI7Ozs7QUFBRyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUN4RCxLQUFLLENBQUMsaUJBQWlCLENBQUE7OztBQUV6QixNQUFNLE9BQU8sYUFBYSxHQUd0QixxQkFBcUIsQ0FBYSxZQUFZLENBQUM7Ozs7O0FBT2pELENBQUMsVUFBc0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU07O0FBTC9DLE1BQU0sT0FBTyxrQkFBa0IsR0FHM0IsY0FBYyxDQUNoQixhQUFhLE9BRWQ7Ozs7O0FBT0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7O0FBTDFELE1BQU0sT0FBTyxZQUFZLEdBR3JCLGNBQWMsQ0FDaEIsa0JBQWtCLE9BRW5COztBQUVELE1BQU0sT0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLHNCQUFzQixDQUN2Qjs7QUFFRCxNQUFNLE9BQU8sY0FBYyxHQUd2QixjQUFjLENBQ2hCLFlBQVksRUFDWixzQkFBc0IsQ0FDdkI7Ozs7O0FBT0MsS0FBSyxDQUFDLEVBQUUsQ0FDTixvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7SUFDakQsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7SUFDbEQsQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOztBQVI1RCxNQUFNLE9BQU8sYUFBYSxHQUd0QixjQUFjLENBQ2hCLGtCQUFrQixPQUtuQjs7Ozs7QUFJQyxLQUFLLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQzs7QUFGNUQsTUFBTSxPQUFPLGNBQWMsR0FBbUMsY0FBYyxDQUMxRSxrQkFBa0IsT0FFbkI7O0FBRUQsTUFBTSxPQUFPLG9CQUFvQixHQUc3QixjQUFjLENBQ2hCLFlBQVksRUFDWiw0QkFBNEIsQ0FDN0I7O0FBRUQsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFlBQVksRUFDWixzQkFBc0IsQ0FDdkI7O0FBRUQsTUFBTSxPQUFPLDJCQUEyQjs7OztBQUFHLENBQ3pDLFdBQW1CLEVBQzBCLEVBQUU7SUFDL0MsT0FBTyxjQUFjLENBQ25CLGlCQUFpQjs7OztJQUNqQixPQUFPLENBQUMsRUFBRTtRQUNSLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7Ozs7QUFPQyxRQUFRLENBQUMsRUFBRTtJQUNULE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztBQUMzRCxDQUFDOztBQVBILE1BQU0sT0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsaUJBQWlCLE9BSWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyU2VsZWN0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIENhcnRzU3RhdGUsXG4gIENhcnRTdGF0ZSxcbiAgQ0FSVF9GRUFUVVJFLFxuICBTdGF0ZVdpdGhDYXJ0LFxufSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcblxuY29uc3QgZ2V0Q2FydENvbnRlbnRTZWxlY3RvciA9IChzdGF0ZTogQ2FydFN0YXRlKSA9PiBzdGF0ZS5jb250ZW50O1xuY29uc3QgZ2V0Q2FydFJlZnJlc2hTZWxlY3RvciA9IChzdGF0ZTogQ2FydFN0YXRlKSA9PiBzdGF0ZS5yZWZyZXNoO1xuY29uc3QgZ2V0Q2FydEVudHJpZXNTZWxlY3RvciA9IChzdGF0ZTogQ2FydFN0YXRlKSA9PiBzdGF0ZS5lbnRyaWVzO1xuY29uc3QgZ2V0Q2FydE1lcmdlQ29tcGxldGVTZWxlY3RvciA9IChzdGF0ZTogQ2FydFN0YXRlKSA9PlxuICBzdGF0ZS5jYXJ0TWVyZ2VDb21wbGV0ZTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRzU3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Q2FydHNTdGF0ZT4oQ0FSVF9GRUFUVVJFKTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZUNhcnRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgTG9hZGVyU3RhdGU8Q2FydFN0YXRlPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0c1N0YXRlLFxuICAoY2FydHNTdGF0ZTogQ2FydHNTdGF0ZSkgPT4gY2FydHNTdGF0ZS5hY3RpdmVcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBY3RpdmVDYXJ0U3RhdGUsXG4gIHN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydENvbnRlbnQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRDYXJ0Q29udGVudFNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydFJlZnJlc2g6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRDYXJ0UmVmcmVzaFNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydExvYWRlZDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBY3RpdmVDYXJ0U3RhdGUsXG4gIHN0YXRlID0+XG4gICAgU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyU3VjY2Vzc1NlbGVjdG9yKHN0YXRlKSAmJlxuICAgICFTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpICYmXG4gICAgIVN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpLnJlZnJlc2hcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0TG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxhbnksIGJvb2xlYW4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFjdGl2ZUNhcnRTdGF0ZSxcbiAgc3RhdGUgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRNZXJnZUNvbXBsZXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRTdGF0ZSxcbiAgZ2V0Q2FydE1lcmdlQ29tcGxldGVTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRFbnRyaWVzTWFwOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICB7IFtjb2RlOiBzdHJpbmddOiBPcmRlckVudHJ5IH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRDYXJ0RW50cmllc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEVudHJ5U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBwcm9kdWN0Q29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENhcnQsIE9yZGVyRW50cnk+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldENhcnRFbnRyaWVzTWFwLFxuICAgIGVudHJpZXMgPT4ge1xuICAgICAgaWYgKGVudHJpZXMpIHtcbiAgICAgICAgcmV0dXJuIGVudHJpZXNbcHJvZHVjdENvZGVdO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0RW50cmllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgT3JkZXJFbnRyeVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRFbnRyaWVzTWFwLFxuICBlbnRpdGllcyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudGl0aWVzKS5tYXAoY29kZSA9PiBlbnRpdGllc1tjb2RlXSk7XG4gIH1cbik7XG4iXX0=