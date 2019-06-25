/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { entityStateSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { loaderValueSelector } from '../../../state/utils/loader/loader.selectors';
import { getCmsState } from './feature.selectors';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.navigation; };
/** @type {?} */
export var getNavigationEntryItemState = createSelector(getCmsState, (ɵ0));
/** @type {?} */
export var getSelectedNavigationEntryItemState = (/**
 * @param {?} nodeId
 * @return {?}
 */
function (nodeId) {
    return createSelector(getNavigationEntryItemState, (/**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) { return entityStateSelector(nodes, nodeId); }));
});
/** @type {?} */
export var getNavigationEntryItems = (/**
 * @param {?} nodeId
 * @return {?}
 */
function (nodeId) {
    return createSelector(getSelectedNavigationEntryItemState(nodeId), (/**
     * @param {?} itemState
     * @return {?}
     */
    function (itemState) { return loaderValueSelector(itemState); }));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL25hdmlnYXRpb24tZW50cnktaXRlbS5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWpHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBR25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFPaEQsVUFBQyxLQUFlLElBQUssT0FBQSxLQUFLLENBQUMsVUFBVSxFQUFoQixDQUFnQjs7QUFMdkMsTUFBTSxLQUFPLDJCQUEyQixHQUdwQyxjQUFjLENBQ2hCLFdBQVcsT0FFWjs7QUFFRCxNQUFNLEtBQU8sbUNBQW1DOzs7O0FBQUcsVUFDakQsTUFBYztJQUVkLE9BQU8sY0FBYyxDQUNuQiwyQkFBMkI7Ozs7SUFDM0IsVUFBQSxLQUFLLElBQUksT0FBQSxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQWxDLENBQWtDLEVBQzVDLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLHVCQUF1Qjs7OztBQUFHLFVBQ3JDLE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsbUNBQW1DLENBQUMsTUFBTSxDQUFDOzs7O0lBQzNDLFVBQUEsU0FBUyxJQUFJLE9BQUEsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQTlCLENBQThCLEVBQzVDLENBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVudGl0eUxvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IGVudGl0eVN0YXRlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBsb2FkZXJWYWx1ZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTm9kZUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbC9ub2RlLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIEVudGl0eUxvYWRlclN0YXRlPE5vZGVJdGVtPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDbXNTdGF0ZSxcbiAgKHN0YXRlOiBDbXNTdGF0ZSkgPT4gc3RhdGUubmF2aWdhdGlvblxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkTmF2aWdhdGlvbkVudHJ5SXRlbVN0YXRlID0gKFxuICBub2RlSWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIExvYWRlclN0YXRlPE5vZGVJdGVtPj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbVN0YXRlLFxuICAgIG5vZGVzID0+IGVudGl0eVN0YXRlU2VsZWN0b3Iobm9kZXMsIG5vZGVJZClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXROYXZpZ2F0aW9uRW50cnlJdGVtcyA9IChcbiAgbm9kZUlkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBOb2RlSXRlbT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWROYXZpZ2F0aW9uRW50cnlJdGVtU3RhdGUobm9kZUlkKSxcbiAgICBpdGVtU3RhdGUgPT4gbG9hZGVyVmFsdWVTZWxlY3RvcihpdGVtU3RhdGUpXG4gICk7XG59O1xuIl19