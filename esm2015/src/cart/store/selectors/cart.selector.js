/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { CART_FEATURE, } from '../cart-state';
import { loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
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
export const getRefresh = createSelector(getCartState, getRefreshSelector);
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
state => loaderSuccessSelector(state) &&
    !loaderLoadingSelector(state) &&
    !loaderValueSelector(state).refresh;
/** @type {?} */
export const getLoaded = createSelector(getActiveCartState, (ɵ2));
/** @type {?} */
export const getCartMergeComplete = createSelector(getCartState, getCartMergeCompleteSelector);
/** @type {?} */
export const getEntriesMap = createSelector(getCartState, getEntriesSelector);
/** @type {?} */
export const getEntrySelectorFactory = (/**
 * @param {?} productCode
 * @return {?}
 */
(productCode) => {
    return createSelector(getEntriesMap, (/**
     * @param {?} entries
     * @return {?}
     */
    entries => {
        if (entries) {
            return entries[productCode];
        }
    }));
});
const ɵ3 = /**
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
export const getEntries = createSelector(getEntriesMap, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQ0wsWUFBWSxHQUliLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLG1CQUFtQixHQUNwQixNQUFNLDhDQUE4QyxDQUFDOztBQUt0RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0FBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBOztBQUN6RSxNQUFNLE9BQU8sa0JBQWtCOzs7O0FBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBOztBQUNyRSxNQUFNLE9BQU8sa0JBQWtCOzs7O0FBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBOztBQUNyRSxNQUFNLE9BQU8sNEJBQTRCOzs7O0FBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FDL0QsS0FBSyxDQUFDLGlCQUFpQixDQUFBOztBQUV6QixNQUFNLE9BQU8sYUFBYSxHQUd0QixxQkFBcUIsQ0FBYSxZQUFZLENBQUM7Ozs7O0FBT2pELENBQUMsVUFBc0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU07O0FBTC9DLE1BQU0sT0FBTyxrQkFBa0IsR0FHM0IsY0FBYyxDQUNoQixhQUFhLE9BRWQ7Ozs7O0FBT0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7O0FBTHJDLE1BQU0sT0FBTyxZQUFZLEdBR3JCLGNBQWMsQ0FDaEIsa0JBQWtCLE9BRW5COztBQUVELE1BQU0sT0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLHNCQUFzQixDQUN2Qjs7QUFFRCxNQUFNLE9BQU8sVUFBVSxHQUduQixjQUFjLENBQ2hCLFlBQVksRUFDWixrQkFBa0IsQ0FDbkI7Ozs7O0FBSUMsS0FBSyxDQUFDLEVBQUUsQ0FDTixxQkFBcUIsQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7SUFDN0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOztBQUx2QyxNQUFNLE9BQU8sU0FBUyxHQUFtQyxjQUFjLENBQ3JFLGtCQUFrQixPQUtuQjs7QUFFRCxNQUFNLE9BQU8sb0JBQW9CLEdBRzdCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLDRCQUE0QixDQUM3Qjs7QUFFRCxNQUFNLE9BQU8sYUFBYSxHQUd0QixjQUFjLENBQ2hCLFlBQVksRUFDWixrQkFBa0IsQ0FDbkI7O0FBRUQsTUFBTSxPQUFPLHVCQUF1Qjs7OztBQUFHLENBQ3JDLFdBQVcsRUFDd0IsRUFBRTtJQUNyQyxPQUFPLGNBQWMsQ0FDbkIsYUFBYTs7OztJQUNiLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOzs7OztBQUlDLFFBQVEsQ0FBQyxFQUFFO0lBQ1QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUc7Ozs7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO0FBQzNELENBQUM7O0FBSkgsTUFBTSxPQUFPLFVBQVUsR0FBd0MsY0FBYyxDQUMzRSxhQUFhLE9BSWQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBNZW1vaXplZFNlbGVjdG9yLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBDQVJUX0ZFQVRVUkUsXG4gIENhcnRzU3RhdGUsXG4gIENhcnRTdGF0ZSxcbiAgU3RhdGVXaXRoQ2FydCxcbn0gZnJvbSAnLi4vY2FydC1zdGF0ZSc7XG5pbXBvcnQge1xuICBsb2FkZXJMb2FkaW5nU2VsZWN0b3IsXG4gIGxvYWRlclN1Y2Nlc3NTZWxlY3RvcixcbiAgbG9hZGVyVmFsdWVTZWxlY3Rvcixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0Q29udGVudFNlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+IHN0YXRlLmNvbnRlbnQ7XG5leHBvcnQgY29uc3QgZ2V0UmVmcmVzaFNlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+IHN0YXRlLnJlZnJlc2g7XG5leHBvcnQgY29uc3QgZ2V0RW50cmllc1NlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+IHN0YXRlLmVudHJpZXM7XG5leHBvcnQgY29uc3QgZ2V0Q2FydE1lcmdlQ29tcGxldGVTZWxlY3RvciA9IChzdGF0ZTogQ2FydFN0YXRlKSA9PlxuICBzdGF0ZS5jYXJ0TWVyZ2VDb21wbGV0ZTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRzU3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Q2FydHNTdGF0ZT4oQ0FSVF9GRUFUVVJFKTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZUNhcnRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgTG9hZGVyU3RhdGU8Q2FydFN0YXRlPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0c1N0YXRlLFxuICAoY2FydHNTdGF0ZTogQ2FydHNTdGF0ZSkgPT4gY2FydHNTdGF0ZS5hY3RpdmVcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBY3RpdmVDYXJ0U3RhdGUsXG4gIHN0YXRlID0+IGxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydENvbnRlbnQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIENhcnRcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRDYXJ0Q29udGVudFNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVmcmVzaDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0U3RhdGUsXG4gIGdldFJlZnJlc2hTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldExvYWRlZDogTWVtb2l6ZWRTZWxlY3RvcjxhbnksIGJvb2xlYW4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFjdGl2ZUNhcnRTdGF0ZSxcbiAgc3RhdGUgPT5cbiAgICBsb2FkZXJTdWNjZXNzU2VsZWN0b3Ioc3RhdGUpICYmXG4gICAgIWxvYWRlckxvYWRpbmdTZWxlY3RvcihzdGF0ZSkgJiZcbiAgICAhbG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSkucmVmcmVzaFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRNZXJnZUNvbXBsZXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRTdGF0ZSxcbiAgZ2V0Q2FydE1lcmdlQ29tcGxldGVTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEVudHJpZXNNYXA6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgeyBbY29kZTogc3RyaW5nXTogT3JkZXJFbnRyeSB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRTdGF0ZSxcbiAgZ2V0RW50cmllc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0RW50cnlTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHByb2R1Y3RDb2RlXG4pOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgT3JkZXJFbnRyeT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0RW50cmllc01hcCxcbiAgICBlbnRyaWVzID0+IHtcbiAgICAgIGlmIChlbnRyaWVzKSB7XG4gICAgICAgIHJldHVybiBlbnRyaWVzW3Byb2R1Y3RDb2RlXTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RW50cmllczogTWVtb2l6ZWRTZWxlY3RvcjxhbnksIE9yZGVyRW50cnlbXT4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0RW50cmllc01hcCxcbiAgZW50aXRpZXMgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhlbnRpdGllcykubWFwKGNvZGUgPT4gZW50aXRpZXNbY29kZV0pO1xuICB9XG4pO1xuIl19