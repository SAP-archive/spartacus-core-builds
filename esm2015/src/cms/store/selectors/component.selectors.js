/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getCmsState } from './feature.selectors';
/** @type {?} */
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
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.component;
/** @type {?} */
export const getComponentState = createSelector(getCmsState, (ɵ1));
/** @type {?} */
export const getComponentEntities = createSelector(getComponentState, getComponentEntitiesSelector);
/** @type {?} */
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
        // the whole component entities are emtpy
        if (Object.keys(entities.entities).length === 0) {
            return undefined;
        }
        else {
            return StateEntityLoaderSelectors.entityStateSelector(entities, uid);
        }
    }));
});
/** @type {?} */
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
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL2NvbXBvbmVudC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUM7QUFHcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUU1Qyw0QkFBNEI7Ozs7QUFBRyxDQUFDLEtBQXFCLEVBQU8sRUFBRSxDQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNOzs7OztBQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNyQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQTs7Ozs7O0FBT04sQ0FBQyxLQUFlLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTOztBQUx0QyxNQUFNLE9BQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsV0FBVyxPQUVaOztBQUVELE1BQU0sT0FBTyxvQkFBb0IsR0FHN0IsY0FBYyxDQUNoQixpQkFBaUIsRUFDakIsNEJBQTRCLENBQzdCOztBQUVELE1BQU0sT0FBTyw2QkFBNkI7Ozs7QUFBRyxDQUMzQyxHQUFXLEVBQ3VDLEVBQUU7SUFDcEQsT0FBTyxjQUFjLENBQ25CLGlCQUFpQjs7OztJQUNqQixRQUFRLENBQUMsRUFBRTtRQUNULHlDQUF5QztRQUN6QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0MsT0FBTyxTQUFTLENBQUM7U0FDbEI7YUFBTTtZQUNMLE9BQU8sMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLHdCQUF3Qjs7OztBQUFHLENBQ3RDLEdBQVcsRUFDMEIsRUFBRTtJQUN2QyxPQUFPLGNBQWMsQ0FDbkIsNkJBQTZCLENBQUMsR0FBRyxDQUFDOzs7O0lBQ2xDLEtBQUssQ0FBQyxFQUFFO1FBQ04sSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hEO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycyxcbiAgU3RhdGVMb2FkZXJTZWxlY3RvcnMsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBDbXNTdGF0ZSwgQ29tcG9uZW50U3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuXG5jb25zdCBnZXRDb21wb25lbnRFbnRpdGllc1NlbGVjdG9yID0gKHN0YXRlOiBDb21wb25lbnRTdGF0ZSk6IGFueSA9PlxuICBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcykucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgIGFjY1tjdXJdID0gc3RhdGUuZW50aXRpZXNbY3VyXS52YWx1ZTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICBDb21wb25lbnRTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDbXNTdGF0ZSxcbiAgKHN0YXRlOiBDbXNTdGF0ZSkgPT4gc3RhdGUuY29tcG9uZW50XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50RW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgeyBbaWQ6IHN0cmluZ106IGFueSB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENvbXBvbmVudFN0YXRlLFxuICBnZXRDb21wb25lbnRFbnRpdGllc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50U3RhdGVTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgTG9hZGVyU3RhdGU8YW55Pj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0Q29tcG9uZW50U3RhdGUsXG4gICAgZW50aXRpZXMgPT4ge1xuICAgICAgLy8gdGhlIHdob2xlIGNvbXBvbmVudCBlbnRpdGllcyBhcmUgZW10cHlcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlbnRpdGllcy5lbnRpdGllcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMuZW50aXR5U3RhdGVTZWxlY3RvcihlbnRpdGllcywgdWlkKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50U2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIGFueT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50U3RhdGVTZWxlY3RvckZhY3RvcnkodWlkKSxcbiAgICBzdGF0ZSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuIl19