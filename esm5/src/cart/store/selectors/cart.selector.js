/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
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
function (state) { return loaderValueSelector(state); };
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
    return loaderSuccessSelector(state) &&
        !loaderLoadingSelector(state) &&
        !loaderValueSelector(state).refresh;
};
/** @type {?} */
export var getCartLoaded = createSelector(getActiveCartState, (ɵ6));
var ɵ7 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return loaderLoadingSelector(state); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUlyQixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBR0wsWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDOztJQUVqQixzQkFBc0I7Ozs7QUFBRyxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQTs7O0lBQzVELHNCQUFzQjs7OztBQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFBOzs7SUFDNUQsc0JBQXNCOzs7O0FBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQUE7OztJQUM1RCw0QkFBNEI7Ozs7QUFBRyxVQUFDLEtBQWdCO0lBQ3BELE9BQUEsS0FBSyxDQUFDLGlCQUFpQjtBQUF2QixDQUF1QixDQUFBOzs7QUFFekIsTUFBTSxLQUFPLGFBQWEsR0FHdEIscUJBQXFCLENBQWEsWUFBWSxDQUFDOzs7OztBQU9qRCxVQUFDLFVBQXNCLElBQUssT0FBQSxVQUFVLENBQUMsTUFBTSxFQUFqQixDQUFpQjs7QUFML0MsTUFBTSxLQUFPLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLGFBQWEsT0FFZDs7Ozs7QUFPQyxVQUFBLEtBQUssSUFBSSxPQUFBLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQjs7QUFMckMsTUFBTSxLQUFPLFlBQVksR0FHckIsY0FBYyxDQUNoQixrQkFBa0IsT0FFbkI7O0FBRUQsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixZQUFZLEVBQ1osc0JBQXNCLENBQ3ZCOztBQUVELE1BQU0sS0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLHNCQUFzQixDQUN2Qjs7Ozs7QUFPQyxVQUFBLEtBQUs7SUFDSCxPQUFBLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87QUFGbkMsQ0FFbUM7O0FBUnZDLE1BQU0sS0FBTyxhQUFhLEdBR3RCLGNBQWMsQ0FDaEIsa0JBQWtCLE9BS25COzs7OztBQUlDLFVBQUEsS0FBSyxJQUFJLE9BQUEscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCOztBQUZ2QyxNQUFNLEtBQU8sY0FBYyxHQUFtQyxjQUFjLENBQzFFLGtCQUFrQixPQUVuQjs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBRzdCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLDRCQUE0QixDQUM3Qjs7QUFFRCxNQUFNLEtBQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLHNCQUFzQixDQUN2Qjs7QUFFRCxNQUFNLEtBQU8sMkJBQTJCOzs7O0FBQUcsVUFDekMsV0FBbUI7SUFFbkIsT0FBTyxjQUFjLENBQ25CLGlCQUFpQjs7OztJQUNqQixVQUFBLE9BQU87UUFDTCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUE7Ozs7O0FBT0MsVUFBQSxRQUFRO0lBQ04sT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBZCxDQUFjLEVBQUMsQ0FBQztBQUMzRCxDQUFDOztBQVBILE1BQU0sS0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsaUJBQWlCLE9BSWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBsb2FkZXJMb2FkaW5nU2VsZWN0b3IsXG4gIGxvYWRlclN1Y2Nlc3NTZWxlY3RvcixcbiAgbG9hZGVyVmFsdWVTZWxlY3Rvcixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5zZWxlY3RvcnMnO1xuaW1wb3J0IHtcbiAgQ2FydHNTdGF0ZSxcbiAgQ2FydFN0YXRlLFxuICBDQVJUX0ZFQVRVUkUsXG4gIFN0YXRlV2l0aENhcnQsXG59IGZyb20gJy4uL2NhcnQtc3RhdGUnO1xuXG5jb25zdCBnZXRDYXJ0Q29udGVudFNlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+IHN0YXRlLmNvbnRlbnQ7XG5jb25zdCBnZXRDYXJ0UmVmcmVzaFNlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+IHN0YXRlLnJlZnJlc2g7XG5jb25zdCBnZXRDYXJ0RW50cmllc1NlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+IHN0YXRlLmVudHJpZXM7XG5jb25zdCBnZXRDYXJ0TWVyZ2VDb21wbGV0ZVNlbGVjdG9yID0gKHN0YXRlOiBDYXJ0U3RhdGUpID0+XG4gIHN0YXRlLmNhcnRNZXJnZUNvbXBsZXRlO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydHNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgQ2FydHNTdGF0ZVxuPiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDYXJ0c1N0YXRlPihDQVJUX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlQ2FydFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBMb2FkZXJTdGF0ZTxDYXJ0U3RhdGU+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcnRzU3RhdGUsXG4gIChjYXJ0c1N0YXRlOiBDYXJ0c1N0YXRlKSA9PiBjYXJ0c1N0YXRlLmFjdGl2ZVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgQ2FydFN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFjdGl2ZUNhcnRTdGF0ZSxcbiAgc3RhdGUgPT4gbG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0Q29udGVudDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgQ2FydFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0U3RhdGUsXG4gIGdldENhcnRDb250ZW50U2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0UmVmcmVzaDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2FydCxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0U3RhdGUsXG4gIGdldENhcnRSZWZyZXNoU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0TG9hZGVkOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFjdGl2ZUNhcnRTdGF0ZSxcbiAgc3RhdGUgPT5cbiAgICBsb2FkZXJTdWNjZXNzU2VsZWN0b3Ioc3RhdGUpICYmXG4gICAgIWxvYWRlckxvYWRpbmdTZWxlY3RvcihzdGF0ZSkgJiZcbiAgICAhbG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSkucmVmcmVzaFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgYm9vbGVhbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QWN0aXZlQ2FydFN0YXRlLFxuICBzdGF0ZSA9PiBsb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydE1lcmdlQ29tcGxldGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydFN0YXRlLFxuICBnZXRDYXJ0TWVyZ2VDb21wbGV0ZVNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEVudHJpZXNNYXA6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENhcnQsXG4gIHsgW2NvZGU6IHN0cmluZ106IE9yZGVyRW50cnkgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJ0U3RhdGUsXG4gIGdldENhcnRFbnRyaWVzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0RW50cnlTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHByb2R1Y3RDb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ2FydCwgT3JkZXJFbnRyeT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0Q2FydEVudHJpZXNNYXAsXG4gICAgZW50cmllcyA9PiB7XG4gICAgICBpZiAoZW50cmllcykge1xuICAgICAgICByZXR1cm4gZW50cmllc1twcm9kdWN0Q29kZV07XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRFbnRyaWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDYXJ0LFxuICBPcmRlckVudHJ5W11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FydEVudHJpZXNNYXAsXG4gIGVudGl0aWVzID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZW50aXRpZXMpLm1hcChjb2RlID0+IGVudGl0aWVzW2NvZGVdKTtcbiAgfVxuKTtcbiJdfQ==