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
    state => state.component));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL2NvbXBvbmVudC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRS9ELE9BQU8sRUFDTCxrQkFBa0IsRUFFbEIsMEJBQTBCLEVBQzFCLG9CQUFvQixFQUNwQixvQkFBb0IsR0FDckIsTUFBTSw0QkFBNEIsQ0FBQztBQVFwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7OztNQU01Qyw0QkFBNEI7Ozs7QUFBRyxDQUFDLEtBQXFCLEVBQU8sRUFBRSxDQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNOzs7OztBQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNyQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQTs7Ozs7OztBQVdOLENBQUMsS0FBZSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUzs7Ozs7QUFMdEMsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFdBQVcsT0FFWjs7Ozs7O0FBTUQsTUFBTSxPQUFPLG9CQUFvQixHQUc3QixjQUFjLENBQ2hCLGlCQUFpQixFQUNqQiw0QkFBNEIsQ0FDN0I7Ozs7OztBQU1ELE1BQU0sT0FBTyw2QkFBNkI7Ozs7QUFBRyxDQUMzQyxHQUFXLEVBQ3VDLEVBQUU7SUFDcEQsT0FBTyxjQUFjLENBQ25CLGlCQUFpQjs7OztJQUNqQixRQUFRLENBQUMsRUFBRTtRQUNULHlDQUF5QztRQUN6QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0MsT0FBTyxTQUFTLENBQUM7U0FDbEI7YUFBTTtZQUNMLE9BQU8sMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUE7Ozs7OztBQU1ELE1BQU0sT0FBTyx3QkFBd0I7Ozs7QUFBRyxDQUN0QyxHQUFXLEVBQzBCLEVBQUU7SUFDdkMsT0FBTyxjQUFjLENBQ25CLDZCQUE2QixDQUFDLEdBQUcsQ0FBQzs7OztJQUNsQyxLQUFLLENBQUMsRUFBRTtRQUNOLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7Ozs7QUFPQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVOztBQUwzQixNQUFNLE9BQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsV0FBVyxPQUVaOztBQUVELE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7QUFBRyxDQUM5QyxHQUFXLEVBQ3dDLEVBQUU7SUFDckQsT0FBTyxjQUFjLENBQ25CLGtCQUFrQjs7OztJQUNsQixlQUFlLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLEVBQzdFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLG9DQUFvQzs7Ozs7QUFBRyxDQUNsRCxHQUFXLEVBQ1gsT0FBZSxFQUN1QyxFQUFFO0lBQ3hELE9BQU8sY0FBYyxDQUNuQixnQ0FBZ0MsQ0FBQyxHQUFHLENBQUM7Ozs7SUFDckMsaUJBQWlCLENBQUMsRUFBRSxDQUNsQixDQUFDLGlCQUFpQjtRQUNoQixpQkFBaUIsQ0FBQyxXQUFXO1FBQzdCLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxrQkFBa0IsRUFDckIsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sc0NBQXNDOzs7OztBQUFHLENBQ3BELEdBQVcsRUFDWCxPQUFlLEVBQzBCLEVBQUU7SUFDM0MsT0FBTyxjQUFjLENBQ25CLG9DQUFvQyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7Ozs7SUFDbEQsV0FBVyxDQUFDLEVBQUUsQ0FDWixvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLEVBQ2pFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLDZCQUE2Qjs7OztBQUFHLENBQzNDLEdBQVcsRUFDbUMsRUFBRTtJQUNoRCxPQUFPLGNBQWMsQ0FDbkIsZ0NBQWdDLENBQUMsR0FBRyxDQUFDOzs7O0lBQ3JDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDekIsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8seUJBQXlCOzs7OztBQUFHLENBQ3ZDLEdBQVcsRUFDWCxPQUFlLEVBQytCLEVBQUU7SUFDaEQsT0FBTyxjQUFjLENBQ25CLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxFQUNsQyxzQ0FBc0MsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDOzs7OztJQUNwRCxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN6QixJQUFJLGNBQWMsSUFBSSxNQUFNLEVBQUU7WUFDNUIsT0FBTyxjQUFjLENBQUM7U0FDdkI7YUFBTTtZQUNMLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQge1xuICBpbml0aWFsTG9hZGVyU3RhdGUsXG4gIExvYWRlclN0YXRlLFxuICBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycyxcbiAgU3RhdGVFbnRpdHlTZWxlY3RvcnMsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQge1xuICBDbXNTdGF0ZSxcbiAgQ29tcG9uZW50c0NvbnRleHQsXG4gIENvbXBvbmVudHNTdGF0ZSxcbiAgQ29tcG9uZW50U3RhdGUsXG4gIFN0YXRlV2l0aENtcyxcbn0gZnJvbSAnLi4vY21zLXN0YXRlJztcbmltcG9ydCB7IGdldENtc1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9ycyc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgYXMgb2YgMi4wLCB0aGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQuXG4gKi9cbi8vIFRPRE8oaXNzdWU6NjAyNykgLSBkZWxldGUgdGhpcyBtZXRob2RcbmNvbnN0IGdldENvbXBvbmVudEVudGl0aWVzU2VsZWN0b3IgPSAoc3RhdGU6IENvbXBvbmVudFN0YXRlKTogYW55ID0+XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgYWNjW2N1cl0gPSBzdGF0ZS5lbnRpdGllc1tjdXJdLnZhbHVlO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBhcyBvZiAyLjAsIHRoaXMgbWV0aG9kIHdpbGwgYmUgcmVtb3ZlZCBpbiBmYXZvdXIgb2YgYGdldENvbXBvbmVudHNTdGF0ZWBcbiAqL1xuLy8gVE9ETyhpc3N1ZTo2MDI3KSAtIGRlbGV0ZSB0aGlzIG1ldGhvZFxuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIENvbXBvbmVudFN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5jb21wb25lbnRcbik7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgYXMgb2YgMi4wLCB0aGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQuXG4gKi9cbi8vIFRPRE8oaXNzdWU6NjAyNykgLSBkZWxldGUgdGhpcyBtZXRob2RcbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICB7IFtpZDogc3RyaW5nXTogYW55IH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q29tcG9uZW50U3RhdGUsXG4gIGdldENvbXBvbmVudEVudGl0aWVzU2VsZWN0b3Jcbik7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgYXMgb2YgMi4wLCB0aGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQgaW4gZmF2b3VyIG9mIGBjb21wb25lbnRzTG9hZGVyU3RhdGVTZWxlY3RvckZhY3RvcnlgXG4gKi9cbi8vIFRPRE8oaXNzdWU6NjAyNykgLSBkZWxldGUgdGhpcyBtZXRob2RcbmV4cG9ydCBjb25zdCBjb21wb25lbnRTdGF0ZVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBMb2FkZXJTdGF0ZTxhbnk+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRDb21wb25lbnRTdGF0ZSxcbiAgICBlbnRpdGllcyA9PiB7XG4gICAgICAvLyB0aGUgd2hvbGUgY29tcG9uZW50IGVudGl0aWVzIGFyZSBlbXB0eVxuICAgICAgaWYgKE9iamVjdC5rZXlzKGVudGl0aWVzLmVudGl0aWVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycy5lbnRpdHlTdGF0ZVNlbGVjdG9yKGVudGl0aWVzLCB1aWQpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgYXMgb2YgMi4wLCB0aGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQgaW4gZmF2b3VyIG9mIGBjb21wb25lbnRzU2VsZWN0b3JGYWN0b3J5YFxuICovXG4vLyBUT0RPKGlzc3VlOjYwMjcpIC0gZGVsZXRlIHRoaXMgbWV0aG9kXG5leHBvcnQgY29uc3QgY29tcG9uZW50U2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIGFueT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50U3RhdGVTZWxlY3RvckZhY3RvcnkodWlkKSxcbiAgICBzdGF0ZSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50c1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIENvbXBvbmVudHNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDbXNTdGF0ZSxcbiAgc3RhdGUgPT4gc3RhdGUuY29tcG9uZW50c1xuKTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHNDb250ZXh0U2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIENvbXBvbmVudHNDb250ZXh0PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRDb21wb25lbnRzU3RhdGUsXG4gICAgY29tcG9uZW50c1N0YXRlID0+IFN0YXRlRW50aXR5U2VsZWN0b3JzLmVudGl0eVNlbGVjdG9yKGNvbXBvbmVudHNTdGF0ZSwgdWlkKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHNMb2FkZXJTdGF0ZVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmcsXG4gIGNvbnRleHQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIExvYWRlclN0YXRlPGJvb2xlYW4+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRzQ29udGV4dFNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIGNvbXBvbmVudHNDb250ZXh0ID0+XG4gICAgICAoY29tcG9uZW50c0NvbnRleHQgJiZcbiAgICAgICAgY29tcG9uZW50c0NvbnRleHQucGFnZUNvbnRleHQgJiZcbiAgICAgICAgY29tcG9uZW50c0NvbnRleHQucGFnZUNvbnRleHRbY29udGV4dF0pIHx8XG4gICAgICBpbml0aWFsTG9hZGVyU3RhdGVcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzQ29udGV4dEV4aXN0c1NlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmcsXG4gIGNvbnRleHQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGNvbXBvbmVudHNMb2FkZXJTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpLFxuICAgIGxvYWRlclN0YXRlID0+XG4gICAgICBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJWYWx1ZVNlbGVjdG9yKGxvYWRlclN0YXRlKSB8fCBmYWxzZVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHNEYXRhU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIENtc0NvbXBvbmVudD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50c0NvbnRleHRTZWxlY3RvckZhY3RvcnkodWlkKSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5jb21wb25lbnRcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZyxcbiAgY29udGV4dDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ21zQ29tcG9uZW50PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRzRGF0YVNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIGNvbXBvbmVudHNDb250ZXh0RXhpc3RzU2VsZWN0b3JGYWN0b3J5KHVpZCwgY29udGV4dCksXG4gICAgKGNvbXBvbmVudFN0YXRlLCBleGlzdHMpID0+IHtcbiAgICAgIGlmIChjb21wb25lbnRTdGF0ZSAmJiBleGlzdHMpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuIl19