/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { initialLoaderState, StateEntitySelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getCmsState } from './feature.selectors';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.components; };
/** @type {?} */
export var getComponentsState = createSelector(getCmsState, (ɵ0));
/** @type {?} */
export var componentsContextSelectorFactory = (/**
 * @param {?} uid
 * @return {?}
 */
function (uid) {
    return createSelector(getComponentsState, (/**
     * @param {?} componentsState
     * @return {?}
     */
    function (componentsState) { return StateEntitySelectors.entitySelector(componentsState, uid); }));
});
/** @type {?} */
export var componentsLoaderStateSelectorFactory = (/**
 * @param {?} uid
 * @param {?} context
 * @return {?}
 */
function (uid, context) {
    return createSelector(componentsContextSelectorFactory(uid), (/**
     * @param {?} componentsContext
     * @return {?}
     */
    function (componentsContext) {
        return (componentsContext &&
            componentsContext.pageContext &&
            componentsContext.pageContext[context]) ||
            initialLoaderState;
    }));
});
/** @type {?} */
export var componentsContextExistsSelectorFactory = (/**
 * @param {?} uid
 * @param {?} context
 * @return {?}
 */
function (uid, context) {
    return createSelector(componentsLoaderStateSelectorFactory(uid, context), (/**
     * @param {?} loaderState
     * @return {?}
     */
    function (loaderState) {
        return StateLoaderSelectors.loaderValueSelector(loaderState) || false;
    }));
});
/** @type {?} */
export var componentsDataSelectorFactory = (/**
 * @param {?} uid
 * @return {?}
 */
function (uid) {
    return createSelector(componentsContextSelectorFactory(uid), (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return (state ? state.component : undefined); }));
});
/** @type {?} */
export var componentsSelectorFactory = (/**
 * @param {?} uid
 * @param {?} context
 * @return {?}
 */
function (uid, context) {
    return createSelector(componentsDataSelectorFactory(uid), componentsContextExistsSelectorFactory(uid, context), (/**
     * @param {?} componentState
     * @param {?} exists
     * @return {?}
     */
    function (componentState, exists) {
        if (componentState && exists) {
            return componentState;
        }
        else {
            return undefined;
        }
    }));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9jb21wb25lbnRzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUNMLGtCQUFrQixFQUVsQixvQkFBb0IsRUFDcEIsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUM7QUFFcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztBQU9oRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQWhCLENBQWdCOztBQUwzQixNQUFNLEtBQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsV0FBVyxPQUVaOztBQUVELE1BQU0sS0FBTyxnQ0FBZ0M7Ozs7QUFBRyxVQUM5QyxHQUFXO0lBRVgsT0FBTyxjQUFjLENBQ25CLGtCQUFrQjs7OztJQUNsQixVQUFBLGVBQWUsSUFBSSxPQUFBLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLEVBQXpELENBQXlELEVBQzdFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLG9DQUFvQzs7Ozs7QUFBRyxVQUNsRCxHQUFXLEVBQ1gsT0FBZTtJQUVmLE9BQU8sY0FBYyxDQUNuQixnQ0FBZ0MsQ0FBQyxHQUFHLENBQUM7Ozs7SUFDckMsVUFBQSxpQkFBaUI7UUFDZixPQUFBLENBQUMsaUJBQWlCO1lBQ2hCLGlCQUFpQixDQUFDLFdBQVc7WUFDN0IsaUJBQWlCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLGtCQUFrQjtJQUhsQixDQUdrQixFQUNyQixDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyxzQ0FBc0M7Ozs7O0FBQUcsVUFDcEQsR0FBVyxFQUNYLE9BQWU7SUFFZixPQUFPLGNBQWMsQ0FDbkIsb0NBQW9DLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7OztJQUNsRCxVQUFBLFdBQVc7UUFDVCxPQUFBLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUs7SUFBOUQsQ0FBOEQsRUFDakUsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sNkJBQTZCOzs7O0FBQUcsVUFDM0MsR0FBVztJQUVYLE9BQU8sY0FBYyxDQUNuQixnQ0FBZ0MsQ0FBQyxHQUFHLENBQUM7Ozs7SUFDckMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQXJDLENBQXFDLEVBQy9DLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLHlCQUF5Qjs7Ozs7QUFBRyxVQUN2QyxHQUFXLEVBQ1gsT0FBZTtJQUVmLE9BQU8sY0FBYyxDQUNuQiw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsRUFDbEMsc0NBQXNDLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQzs7Ozs7SUFDcEQsVUFBQyxjQUFjLEVBQUUsTUFBTTtRQUNyQixJQUFJLGNBQWMsSUFBSSxNQUFNLEVBQUU7WUFDNUIsT0FBTyxjQUFjLENBQUM7U0FDdkI7YUFBTTtZQUNMLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQge1xuICBpbml0aWFsTG9hZGVyU3RhdGUsXG4gIExvYWRlclN0YXRlLFxuICBTdGF0ZUVudGl0eVNlbGVjdG9ycyxcbiAgU3RhdGVMb2FkZXJTZWxlY3RvcnMsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudHNDb250ZXh0LCBDb21wb25lbnRzU3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50c1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIENvbXBvbmVudHNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDbXNTdGF0ZSxcbiAgc3RhdGUgPT4gc3RhdGUuY29tcG9uZW50c1xuKTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHNDb250ZXh0U2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIENvbXBvbmVudHNDb250ZXh0PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRDb21wb25lbnRzU3RhdGUsXG4gICAgY29tcG9uZW50c1N0YXRlID0+IFN0YXRlRW50aXR5U2VsZWN0b3JzLmVudGl0eVNlbGVjdG9yKGNvbXBvbmVudHNTdGF0ZSwgdWlkKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHNMb2FkZXJTdGF0ZVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmcsXG4gIGNvbnRleHQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIExvYWRlclN0YXRlPGJvb2xlYW4+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRzQ29udGV4dFNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIGNvbXBvbmVudHNDb250ZXh0ID0+XG4gICAgICAoY29tcG9uZW50c0NvbnRleHQgJiZcbiAgICAgICAgY29tcG9uZW50c0NvbnRleHQucGFnZUNvbnRleHQgJiZcbiAgICAgICAgY29tcG9uZW50c0NvbnRleHQucGFnZUNvbnRleHRbY29udGV4dF0pIHx8XG4gICAgICBpbml0aWFsTG9hZGVyU3RhdGVcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzQ29udGV4dEV4aXN0c1NlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmcsXG4gIGNvbnRleHQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGNvbXBvbmVudHNMb2FkZXJTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpLFxuICAgIGxvYWRlclN0YXRlID0+XG4gICAgICBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJWYWx1ZVNlbGVjdG9yKGxvYWRlclN0YXRlKSB8fCBmYWxzZVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHNEYXRhU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIENtc0NvbXBvbmVudD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50c0NvbnRleHRTZWxlY3RvckZhY3RvcnkodWlkKSxcbiAgICBzdGF0ZSA9PiAoc3RhdGUgPyBzdGF0ZS5jb21wb25lbnQgOiB1bmRlZmluZWQpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c1NlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmcsXG4gIGNvbnRleHQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIENtc0NvbXBvbmVudD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50c0RhdGFTZWxlY3RvckZhY3RvcnkodWlkKSxcbiAgICBjb21wb25lbnRzQ29udGV4dEV4aXN0c1NlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpLFxuICAgIChjb21wb25lbnRTdGF0ZSwgZXhpc3RzKSA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50U3RhdGUgJiYgZXhpc3RzKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRTdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcbiJdfQ==