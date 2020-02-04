/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { initialLoaderState, StateEntityLoaderSelectors, StateEntitySelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getCmsState } from './feature.selectors';
// TODO(issue:6027) - delete this method
/**
 * @deprecated as of 2.0, this method will be removed.
 * @type {?}
 */
const getComponentEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => Object.keys(state.entities).reduce((/**
 * @param {?} acc
 * @param {?} cur
 * @return {?}
 */
(acc, cur) => {
    acc[cur] = state.entities[cur].value;
    return acc;
}), {}));
const ɵ0 = getComponentEntitiesSelector;
// TODO(issue:6027) - delete this method
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.component;
/**
 * @deprecated as of 2.0, this method will be removed in favour of `getComponentsState`
 * @type {?}
 */
export const getComponentState = createSelector(getCmsState, (ɵ1));
// TODO(issue:6027) - delete this method
/**
 * @deprecated as of 2.0, this method will be removed.
 * @type {?}
 */
export const getComponentEntities = createSelector(getComponentState, getComponentEntitiesSelector);
// TODO(issue:6027) - delete this method
/**
 * @deprecated as of 2.0, this method will be removed in favour of `componentsLoaderStateSelectorFactory`
 * @type {?}
 */
export const componentStateSelectorFactory = (/**
 * @param {?} uid
 * @return {?}
 */
(uid) => {
    return createSelector(getComponentState, (/**
     * @param {?} entities
     * @return {?}
     */
    entities => {
        // the whole component entities are empty
        if (Object.keys(entities.entities).length === 0) {
            return undefined;
        }
        else {
            return StateEntityLoaderSelectors.entityStateSelector(entities, uid);
        }
    }));
});
// TODO(issue:6027) - delete this method
/**
 * @deprecated as of 2.0, this method will be removed in favour of `componentsSelectorFactory`
 * @type {?}
 */
export const componentSelectorFactory = (/**
 * @param {?} uid
 * @return {?}
 */
(uid) => {
    return createSelector(componentStateSelectorFactory(uid), (/**
     * @param {?} state
     * @return {?}
     */
    state => {
        if (state) {
            return StateLoaderSelectors.loaderValueSelector(state);
        }
        else {
            return undefined;
        }
    }));
});
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
state => state.components;
/** @type {?} */
export const getComponentsState = createSelector(getCmsState, (ɵ2));
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
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL2NvbXBvbmVudC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRS9ELE9BQU8sRUFDTCxrQkFBa0IsRUFFbEIsMEJBQTBCLEVBQzFCLG9CQUFvQixFQUNwQixvQkFBb0IsR0FDckIsTUFBTSw0QkFBNEIsQ0FBQztBQVFwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7OztNQU01Qyw0QkFBNEI7Ozs7QUFBRyxDQUFDLEtBQXFCLEVBQU8sRUFBRSxDQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNOzs7OztBQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNyQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQTs7Ozs7OztBQVdOLENBQUMsS0FBZSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUzs7Ozs7QUFMdEMsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFdBQVcsT0FFWjs7Ozs7O0FBTUQsTUFBTSxPQUFPLG9CQUFvQixHQUc3QixjQUFjLENBQ2hCLGlCQUFpQixFQUNqQiw0QkFBNEIsQ0FDN0I7Ozs7OztBQU1ELE1BQU0sT0FBTyw2QkFBNkI7Ozs7QUFBRyxDQUMzQyxHQUFXLEVBQ3VDLEVBQUU7SUFDcEQsT0FBTyxjQUFjLENBQ25CLGlCQUFpQjs7OztJQUNqQixRQUFRLENBQUMsRUFBRTtRQUNULHlD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ZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7XG4gIGluaXRpYWxMb2FkZXJTdGF0ZSxcbiAgTG9hZGVyU3RhdGUsXG4gIFN0YXRlRW50aXR5TG9hZGVyU2VsZWN0b3JzLFxuICBTdGF0ZUVudGl0eVNlbGVjdG9ycyxcbiAgU3RhdGVMb2FkZXJTZWxlY3RvcnMsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7XG4gIENtc1N0YXRlLFxuICBDb21wb25lbnRzQ29udGV4dCxcbiAgQ29tcG9uZW50c1N0YXRlLFxuICBDb21wb25lbnRTdGF0ZSxcbiAgU3RhdGVXaXRoQ21zLFxufSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0Q21zU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3JzJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBhcyBvZiAyLjAsIHRoaXMgbWV0aG9kIHdpbGwgYmUgcmVtb3ZlZC5cbiAqL1xuLy8gVE9ETyhpc3N1ZTo2MDI3KSAtIGRlbGV0ZSB0aGlzIG1ldGhvZFxuY29uc3QgZ2V0Q29tcG9uZW50RW50aXRpZXNTZWxlY3RvciA9IChzdGF0ZTogQ29tcG9uZW50U3RhdGUpOiBhbnkgPT5cbiAgT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgICBhY2NbY3VyXSA9IHN0YXRlLmVudGl0aWVzW2N1cl0udmFsdWU7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGFzIG9mIDIuMCwgdGhpcyBtZXRob2Qgd2lsbCBiZSByZW1vdmVkIGluIGZhdm91ciBvZiBgZ2V0Q29tcG9uZW50c1N0YXRlYFxuICovXG4vLyBUT0RPKGlzc3VlOjYwMjcpIC0gZGVsZXRlIHRoaXMgbWV0aG9kXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgQ29tcG9uZW50U3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q21zU3RhdGUsXG4gIChzdGF0ZTogQ21zU3RhdGUpID0+IHN0YXRlLmNvbXBvbmVudFxuKTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBhcyBvZiAyLjAsIHRoaXMgbWV0aG9kIHdpbGwgYmUgcmVtb3ZlZC5cbiAqL1xuLy8gVE9ETyhpc3N1ZTo2MDI3KSAtIGRlbGV0ZSB0aGlzIG1ldGhvZFxuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudEVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIHsgW2lkOiBzdHJpbmddOiBhbnkgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDb21wb25lbnRTdGF0ZSxcbiAgZ2V0Q29tcG9uZW50RW50aXRpZXNTZWxlY3RvclxuKTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBhcyBvZiAyLjAsIHRoaXMgbWV0aG9kIHdpbGwgYmUgcmVtb3ZlZCBpbiBmYXZvdXIgb2YgYGNvbXBvbmVudHNMb2FkZXJTdGF0ZVNlbGVjdG9yRmFjdG9yeWBcbiAqL1xuLy8gVE9ETyhpc3N1ZTo2MDI3KSAtIGRlbGV0ZSB0aGlzIG1ldGhvZFxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudFN0YXRlU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIExvYWRlclN0YXRlPGFueT4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldENvbXBvbmVudFN0YXRlLFxuICAgIGVudGl0aWVzID0+IHtcbiAgICAgIC8vIHRoZSB3aG9sZSBjb21wb25lbnQgZW50aXRpZXMgYXJlIGVtcHR5XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZW50aXRpZXMuZW50aXRpZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFN0YXRlRW50aXR5TG9hZGVyU2VsZWN0b3JzLmVudGl0eVN0YXRlU2VsZWN0b3IoZW50aXRpZXMsIHVpZCk7XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBhcyBvZiAyLjAsIHRoaXMgbWV0aG9kIHdpbGwgYmUgcmVtb3ZlZCBpbiBmYXZvdXIgb2YgYGNvbXBvbmVudHNTZWxlY3RvckZhY3RvcnlgXG4gKi9cbi8vIFRPRE8oaXNzdWU6NjAyNykgLSBkZWxldGUgdGhpcyBtZXRob2RcbmV4cG9ydCBjb25zdCBjb21wb25lbnRTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgYW55PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIHN0YXRlID0+IHtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgQ29tcG9uZW50c1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICBzdGF0ZSA9PiBzdGF0ZS5jb21wb25lbnRzXG4pO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c0NvbnRleHRTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ29tcG9uZW50c0NvbnRleHQ+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldENvbXBvbmVudHNTdGF0ZSxcbiAgICBjb21wb25lbnRzU3RhdGUgPT4gU3RhdGVFbnRpdHlTZWxlY3RvcnMuZW50aXR5U2VsZWN0b3IoY29tcG9uZW50c1N0YXRlLCB1aWQpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c0xvYWRlclN0YXRlU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZyxcbiAgY29udGV4dDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgTG9hZGVyU3RhdGU8Ym9vbGVhbj4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGNvbXBvbmVudHNDb250ZXh0U2VsZWN0b3JGYWN0b3J5KHVpZCksXG4gICAgY29tcG9uZW50c0NvbnRleHQgPT5cbiAgICAgIChjb21wb25lbnRzQ29udGV4dCAmJlxuICAgICAgICBjb21wb25lbnRzQ29udGV4dC5wYWdlQ29udGV4dCAmJlxuICAgICAgICBjb21wb25lbnRzQ29udGV4dC5wYWdlQ29udGV4dFtjb250ZXh0XSkgfHxcbiAgICAgIGluaXRpYWxMb2FkZXJTdGF0ZVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHNDb250ZXh0RXhpc3RzU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZyxcbiAgY29udGV4dDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50c0xvYWRlclN0YXRlU2VsZWN0b3JGYWN0b3J5KHVpZCwgY29udGV4dCksXG4gICAgbG9hZGVyU3RhdGUgPT5cbiAgICAgIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3IobG9hZGVyU3RhdGUpIHx8IGZhbHNlXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c0RhdGFTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ21zQ29tcG9uZW50PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRzQ29udGV4dFNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIHN0YXRlID0+IChzdGF0ZSA/IHN0YXRlLmNvbXBvbmVudCA6IHVuZGVmaW5lZClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZyxcbiAgY29udGV4dDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ21zQ29tcG9uZW50PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRzRGF0YVNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIGNvbXBvbmVudHNDb250ZXh0RXhpc3RzU2VsZWN0b3JGYWN0b3J5KHVpZCwgY29udGV4dCksXG4gICAgKGNvbXBvbmVudFN0YXRlLCBleGlzdHMpID0+IHtcbiAgICAgIGlmIChjb21wb25lbnRTdGF0ZSAmJiBleGlzdHMpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuIl19