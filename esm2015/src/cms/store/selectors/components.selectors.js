/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { initialLoaderState, StateEntitySelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getCmsState } from './feature.selectors';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
state => state.components;
/** @type {?} */
export const getComponentsState = createSelector(getCmsState, (ɵ0));
/** @type {?} */
export const componentsContextSelectorFactory = (/**
 * @param {?} uid
 * @return {?}
 */
(uid) => {
    return createSelector(getComponentsState, (/**
     * @param {?} componentsState
     * @return {?}
     */
    componentsState => StateEntitySelectors.entitySelector(componentsState, uid)));
});
/** @type {?} */
export const componentsLoaderStateSelectorFactory = (/**
 * @param {?} uid
 * @param {?} context
 * @return {?}
 */
(uid, context) => {
    return createSelector(componentsContextSelectorFactory(uid), (/**
     * @param {?} componentsContext
     * @return {?}
     */
    componentsContext => (componentsContext &&
        componentsContext.pageContext &&
        componentsContext.pageContext[context]) ||
        initialLoaderState));
});
/** @type {?} */
export const componentsContextExistsSelectorFactory = (/**
 * @param {?} uid
 * @param {?} context
 * @return {?}
 */
(uid, context) => {
    return createSelector(componentsLoaderStateSelectorFactory(uid, context), (/**
     * @param {?} loaderState
     * @return {?}
     */
    loaderState => StateLoaderSelectors.loaderValueSelector(loaderState) || false));
});
/** @type {?} */
export const componentsDataSelectorFactory = (/**
 * @param {?} uid
 * @return {?}
 */
(uid) => {
    return createSelector(componentsContextSelectorFactory(uid), (/**
     * @param {?} state
     * @return {?}
     */
    state => (state ? state.component : undefined)));
});
/** @type {?} */
export const componentsSelectorFactory = (/**
 * @param {?} uid
 * @param {?} context
 * @return {?}
 */
(uid, context) => {
    return createSelector(componentsDataSelectorFactory(uid), componentsContextExistsSelectorFactory(uid, context), (/**
     * @param {?} componentState
     * @param {?} exists
     * @return {?}
     */
    (componentState, exists) => {
        if (componentState && exists) {
            return componentState;
        }
        else {
            return undefined;
        }
    }));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9jb21wb25lbnRzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUNMLGtCQUFrQixFQUVsQixvQkFBb0IsRUFDcEIsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUM7QUFFcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztBQU9oRCxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVOztBQUwzQixNQUFNLE9BQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsV0FBVyxPQUVaOztBQUVELE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7QUFBRyxDQUM5QyxHQUFXLEVBQ3dDLEVBQUU7SUFDckQsT0FBTyxjQUFjLENBQ25CLGtCQUFrQjs7OztJQUNsQixlQUFlLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLEVBQzdFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLG9DQUFvQzs7Ozs7QUFBRyxDQUNsRCxHQUFXLEVBQ1gsT0FBZSxFQUN1QyxFQUFFO0lBQ3hELE9BQU8sY0FBYyxDQUNuQixnQ0FBZ0MsQ0FBQyxHQUFHLENBQUM7Ozs7SUFDckMsaUJBQWlCLENBQUMsRUFBRSxDQUNsQixDQUFDLGlCQUFpQjtRQUNoQixpQkFBaUIsQ0FBQyxXQUFXO1FBQzdCLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxrQkFBa0IsRUFDckIsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sc0NBQXNDOzs7OztBQUFHLENBQ3BELEdBQVcsRUFDWCxPQUFlLEVBQzBCLEVBQUU7SUFDM0MsT0FBTyxjQUFjLENBQ25CLG9DQUFvQyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7Ozs7SUFDbEQsV0FBVyxDQUFDLEVBQUUsQ0FDWixvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLEVBQ2pFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLDZCQUE2Qjs7OztBQUFHLENBQzNDLEdBQVcsRUFDbUMsRUFBRTtJQUNoRCxPQUFPLGNBQWMsQ0FDbkIsZ0NBQWdDLENBQUMsR0FBRyxDQUFDOzs7O0lBQ3JDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUMvQyxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0FBQUcsQ0FDdkMsR0FBVyxFQUNYLE9BQWUsRUFDK0IsRUFBRTtJQUNoRCxPQUFPLGNBQWMsQ0FDbkIsNkJBQTZCLENBQUMsR0FBRyxDQUFDLEVBQ2xDLHNDQUFzQyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7Ozs7O0lBQ3BELENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3pCLElBQUksY0FBYyxJQUFJLE1BQU0sRUFBRTtZQUM1QixPQUFPLGNBQWMsQ0FBQztTQUN2QjthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7XG4gIGluaXRpYWxMb2FkZXJTdGF0ZSxcbiAgTG9hZGVyU3RhdGUsXG4gIFN0YXRlRW50aXR5U2VsZWN0b3JzLFxuICBTdGF0ZUxvYWRlclNlbGVjdG9ycyxcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50c0NvbnRleHQsIENvbXBvbmVudHNTdGF0ZSwgU3RhdGVXaXRoQ21zIH0gZnJvbSAnLi4vY21zLXN0YXRlJztcbmltcG9ydCB7IGdldENtc1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgQ29tcG9uZW50c1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICBzdGF0ZSA9PiBzdGF0ZS5jb21wb25lbnRzXG4pO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c0NvbnRleHRTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ29tcG9uZW50c0NvbnRleHQ+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldENvbXBvbmVudHNTdGF0ZSxcbiAgICBjb21wb25lbnRzU3RhdGUgPT4gU3RhdGVFbnRpdHlTZWxlY3RvcnMuZW50aXR5U2VsZWN0b3IoY29tcG9uZW50c1N0YXRlLCB1aWQpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c0xvYWRlclN0YXRlU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZyxcbiAgY29udGV4dDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgTG9hZGVyU3RhdGU8Ym9vbGVhbj4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGNvbXBvbmVudHNDb250ZXh0U2VsZWN0b3JGYWN0b3J5KHVpZCksXG4gICAgY29tcG9uZW50c0NvbnRleHQgPT5cbiAgICAgIChjb21wb25lbnRzQ29udGV4dCAmJlxuICAgICAgICBjb21wb25lbnRzQ29udGV4dC5wYWdlQ29udGV4dCAmJlxuICAgICAgICBjb21wb25lbnRzQ29udGV4dC5wYWdlQ29udGV4dFtjb250ZXh0XSkgfHxcbiAgICAgIGluaXRpYWxMb2FkZXJTdGF0ZVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHNDb250ZXh0RXhpc3RzU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZyxcbiAgY29udGV4dDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50c0xvYWRlclN0YXRlU2VsZWN0b3JGYWN0b3J5KHVpZCwgY29udGV4dCksXG4gICAgbG9hZGVyU3RhdGUgPT5cbiAgICAgIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3IobG9hZGVyU3RhdGUpIHx8IGZhbHNlXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c0RhdGFTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ21zQ29tcG9uZW50PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRzQ29udGV4dFNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIHN0YXRlID0+IChzdGF0ZSA/IHN0YXRlLmNvbXBvbmVudCA6IHVuZGVmaW5lZClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZyxcbiAgY29udGV4dDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ21zQ29tcG9uZW50PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRzRGF0YVNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIGNvbXBvbmVudHNDb250ZXh0RXhpc3RzU2VsZWN0b3JGYWN0b3J5KHVpZCwgY29udGV4dCksXG4gICAgKGNvbXBvbmVudFN0YXRlLCBleGlzdHMpID0+IHtcbiAgICAgIGlmIChjb21wb25lbnRTdGF0ZSAmJiBleGlzdHMpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuIl19