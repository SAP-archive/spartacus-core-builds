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
var getComponentEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return Object.keys(state.entities).reduce((/**
     * @param {?} acc
     * @param {?} cur
     * @return {?}
     */
    function (acc, cur) {
        acc[cur] = state.entities[cur].value;
        return acc;
    }), {});
});
var ɵ0 = getComponentEntitiesSelector;
// TODO(issue:6027) - delete this method
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.component; };
/**
 * @deprecated as of 2.0, this method will be removed in favour of `getComponentsState`
 * @type {?}
 */
export var getComponentState = createSelector(getCmsState, (ɵ1));
// TODO(issue:6027) - delete this method
/**
 * @deprecated as of 2.0, this method will be removed.
 * @type {?}
 */
export var getComponentEntities = createSelector(getComponentState, getComponentEntitiesSelector);
// TODO(issue:6027) - delete this method
/**
 * @deprecated as of 2.0, this method will be removed in favour of `componentsLoaderStateSelectorFactory`
 * @type {?}
 */
export var componentStateSelectorFactory = (/**
 * @param {?} uid
 * @return {?}
 */
function (uid) {
    return createSelector(getComponentState, (/**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
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
export var componentSelectorFactory = (/**
 * @param {?} uid
 * @return {?}
 */
function (uid) {
    return createSelector(componentStateSelectorFactory(uid), (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        if (state) {
            return StateLoaderSelectors.loaderValueSelector(state);
        }
        else {
            return undefined;
        }
    }));
});
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.components; };
/** @type {?} */
export var getComponentsState = createSelector(getCmsState, (ɵ2));
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
    function (state) { return state.component; }));
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
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL2NvbXBvbmVudC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRS9ELE9BQU8sRUFDTCxrQkFBa0IsRUFFbEIsMEJBQTBCLEVBQzFCLG9CQUFvQixFQUNwQixvQkFBb0IsR0FDckIsTUFBTSw0QkFBNEIsQ0FBQztBQVFwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7OztJQU01Qyw0QkFBNEI7Ozs7QUFBRyxVQUFDLEtBQXFCO0lBQ3pELE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTTs7Ozs7SUFBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO1FBQzFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsR0FBRSxFQUFFLENBQUM7QUFITixDQUdNLENBQUE7Ozs7Ozs7QUFXTixVQUFDLEtBQWUsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQWYsQ0FBZTs7Ozs7QUFMdEMsTUFBTSxLQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFdBQVcsT0FFWjs7Ozs7O0FBTUQsTUFBTSxLQUFPLG9CQUFvQixHQUc3QixjQUFjLENBQ2hCLGlCQUFpQixFQUNqQiw0QkFBNEIsQ0FDN0I7Ozs7OztBQU1ELE1BQU0sS0FBTyw2QkFBNkI7Ozs7QUFBRyxVQUMzQyxHQUFXO0lBRVgsT0FBTyxjQUFjLENBQ25CLGlCQUFpQjs7OztJQUNqQixVQUFBLFFBQVE7UUFDTix5Q0FBeUM7UUFDekMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9DLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO2FBQU07WUFDTCxPQUFPLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOzs7Ozs7QUFNRCxNQUFNLEtBQU8sd0JBQXdCOzs7O0FBQUcsVUFDdEMsR0FBVztJQUVYLE9BQU8sY0FBYyxDQUNuQiw2QkFBNkIsQ0FBQyxHQUFHLENBQUM7Ozs7SUFDbEMsVUFBQSxLQUFLO1FBQ0gsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hEO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOzs7OztBQU9DLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFVBQVUsRUFBaEIsQ0FBZ0I7O0FBTDNCLE1BQU0sS0FBTyxrQkFBa0IsR0FHM0IsY0FBYyxDQUNoQixXQUFXLE9BRVo7O0FBRUQsTUFBTSxLQUFPLGdDQUFnQzs7OztBQUFHLFVBQzlDLEdBQVc7SUFFWCxPQUFPLGNBQWMsQ0FDbkIsa0JBQWtCOzs7O0lBQ2xCLFVBQUEsZUFBZSxJQUFJLE9BQUEsb0JBQW9CLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsRUFBekQsQ0FBeUQsRUFDN0UsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sb0NBQW9DOzs7OztBQUFHLFVBQ2xELEdBQVcsRUFDWCxPQUFlO0lBRWYsT0FBTyxjQUFjLENBQ25CLGdDQUFnQyxDQUFDLEdBQUcsQ0FBQzs7OztJQUNyQyxVQUFBLGlCQUFpQjtRQUNmLE9BQUEsQ0FBQyxpQkFBaUI7WUFDaEIsaUJBQWlCLENBQUMsV0FBVztZQUM3QixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekMsa0JBQWtCO0lBSGxCLENBR2tCLEVBQ3JCLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLHNDQUFzQzs7Ozs7QUFBRyxVQUNwRCxHQUFXLEVBQ1gsT0FBZTtJQUVmLE9BQU8sY0FBYyxDQUNuQixvQ0FBb0MsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDOzs7O0lBQ2xELFVBQUEsV0FBVztRQUNULE9BQUEsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSztJQUE5RCxDQUE4RCxFQUNqRSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyw2QkFBNkI7Ozs7QUFBRyxVQUMzQyxHQUFXO0lBRVgsT0FBTyxjQUFjLENBQ25CLGdDQUFnQyxDQUFDLEdBQUcsQ0FBQzs7OztJQUNyQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQWYsQ0FBZSxFQUN6QixDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyx5QkFBeUI7Ozs7O0FBQUcsVUFDdkMsR0FBVyxFQUNYLE9BQWU7SUFFZixPQUFPLGNBQWMsQ0FDbkIsNkJBQTZCLENBQUMsR0FBRyxDQUFDLEVBQ2xDLHNDQUFzQyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7Ozs7O0lBQ3BELFVBQUMsY0FBYyxFQUFFLE1BQU07UUFDckIsSUFBSSxjQUFjLElBQUksTUFBTSxFQUFFO1lBQzVCLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHtcbiAgaW5pdGlhbExvYWRlclN0YXRlLFxuICBMb2FkZXJTdGF0ZSxcbiAgU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMsXG4gIFN0YXRlRW50aXR5U2VsZWN0b3JzLFxuICBTdGF0ZUxvYWRlclNlbGVjdG9ycyxcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQ21zU3RhdGUsXG4gIENvbXBvbmVudHNDb250ZXh0LFxuICBDb21wb25lbnRzU3RhdGUsXG4gIENvbXBvbmVudFN0YXRlLFxuICBTdGF0ZVdpdGhDbXMsXG59IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGFzIG9mIDIuMCwgdGhpcyBtZXRob2Qgd2lsbCBiZSByZW1vdmVkLlxuICovXG4vLyBUT0RPKGlzc3VlOjYwMjcpIC0gZGVsZXRlIHRoaXMgbWV0aG9kXG5jb25zdCBnZXRDb21wb25lbnRFbnRpdGllc1NlbGVjdG9yID0gKHN0YXRlOiBDb21wb25lbnRTdGF0ZSk6IGFueSA9PlxuICBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcykucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgIGFjY1tjdXJdID0gc3RhdGUuZW50aXRpZXNbY3VyXS52YWx1ZTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgYXMgb2YgMi4wLCB0aGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQgaW4gZmF2b3VyIG9mIGBnZXRDb21wb25lbnRzU3RhdGVgXG4gKi9cbi8vIFRPRE8oaXNzdWU6NjAyNykgLSBkZWxldGUgdGhpcyBtZXRob2RcbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICBDb21wb25lbnRTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDbXNTdGF0ZSxcbiAgKHN0YXRlOiBDbXNTdGF0ZSkgPT4gc3RhdGUuY29tcG9uZW50XG4pO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGFzIG9mIDIuMCwgdGhpcyBtZXRob2Qgd2lsbCBiZSByZW1vdmVkLlxuICovXG4vLyBUT0RPKGlzc3VlOjYwMjcpIC0gZGVsZXRlIHRoaXMgbWV0aG9kXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50RW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgeyBbaWQ6IHN0cmluZ106IGFueSB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENvbXBvbmVudFN0YXRlLFxuICBnZXRDb21wb25lbnRFbnRpdGllc1NlbGVjdG9yXG4pO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGFzIG9mIDIuMCwgdGhpcyBtZXRob2Qgd2lsbCBiZSByZW1vdmVkIGluIGZhdm91ciBvZiBgY29tcG9uZW50c0xvYWRlclN0YXRlU2VsZWN0b3JGYWN0b3J5YFxuICovXG4vLyBUT0RPKGlzc3VlOjYwMjcpIC0gZGVsZXRlIHRoaXMgbWV0aG9kXG5leHBvcnQgY29uc3QgY29tcG9uZW50U3RhdGVTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgTG9hZGVyU3RhdGU8YW55Pj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0Q29tcG9uZW50U3RhdGUsXG4gICAgZW50aXRpZXMgPT4ge1xuICAgICAgLy8gdGhlIHdob2xlIGNvbXBvbmVudCBlbnRpdGllcyBhcmUgZW1wdHlcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlbnRpdGllcy5lbnRpdGllcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMuZW50aXR5U3RhdGVTZWxlY3RvcihlbnRpdGllcywgdWlkKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGFzIG9mIDIuMCwgdGhpcyBtZXRob2Qgd2lsbCBiZSByZW1vdmVkIGluIGZhdm91ciBvZiBgY29tcG9uZW50c1NlbGVjdG9yRmFjdG9yeWBcbiAqL1xuLy8gVE9ETyhpc3N1ZTo2MDI3KSAtIGRlbGV0ZSB0aGlzIG1ldGhvZFxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudFNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBhbnk+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGNvbXBvbmVudFN0YXRlU2VsZWN0b3JGYWN0b3J5KHVpZCksXG4gICAgc3RhdGUgPT4ge1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudHNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICBDb21wb25lbnRzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q21zU3RhdGUsXG4gIHN0YXRlID0+IHN0YXRlLmNvbXBvbmVudHNcbik7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzQ29udGV4dFNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBDb21wb25lbnRzQ29udGV4dD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0Q29tcG9uZW50c1N0YXRlLFxuICAgIGNvbXBvbmVudHNTdGF0ZSA9PiBTdGF0ZUVudGl0eVNlbGVjdG9ycy5lbnRpdHlTZWxlY3Rvcihjb21wb25lbnRzU3RhdGUsIHVpZClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzTG9hZGVyU3RhdGVTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nLFxuICBjb250ZXh0OiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBMb2FkZXJTdGF0ZTxib29sZWFuPj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50c0NvbnRleHRTZWxlY3RvckZhY3RvcnkodWlkKSxcbiAgICBjb21wb25lbnRzQ29udGV4dCA9PlxuICAgICAgKGNvbXBvbmVudHNDb250ZXh0ICYmXG4gICAgICAgIGNvbXBvbmVudHNDb250ZXh0LnBhZ2VDb250ZXh0ICYmXG4gICAgICAgIGNvbXBvbmVudHNDb250ZXh0LnBhZ2VDb250ZXh0W2NvbnRleHRdKSB8fFxuICAgICAgaW5pdGlhbExvYWRlclN0YXRlXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c0NvbnRleHRFeGlzdHNTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nLFxuICBjb250ZXh0OiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRzTG9hZGVyU3RhdGVTZWxlY3RvckZhY3RvcnkodWlkLCBjb250ZXh0KSxcbiAgICBsb2FkZXJTdGF0ZSA9PlxuICAgICAgU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyVmFsdWVTZWxlY3Rvcihsb2FkZXJTdGF0ZSkgfHwgZmFsc2VcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzRGF0YVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBDbXNDb21wb25lbnQ+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGNvbXBvbmVudHNDb250ZXh0U2VsZWN0b3JGYWN0b3J5KHVpZCksXG4gICAgc3RhdGUgPT4gc3RhdGUuY29tcG9uZW50XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c1NlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmcsXG4gIGNvbnRleHQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIENtc0NvbXBvbmVudD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50c0RhdGFTZWxlY3RvckZhY3RvcnkodWlkKSxcbiAgICBjb21wb25lbnRzQ29udGV4dEV4aXN0c1NlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpLFxuICAgIChjb21wb25lbnRTdGF0ZSwgZXhpc3RzKSA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50U3RhdGUgJiYgZXhpc3RzKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRTdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcbiJdfQ==