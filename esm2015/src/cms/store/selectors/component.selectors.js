/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { entityStateSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { loaderValueSelector } from '../../../state/utils/loader/loader.selectors';
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
            return entityStateSelector(entities, uid);
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
            return loaderValueSelector(state);
        }
        else {
            return undefined;
        }
    }));
});
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL2NvbXBvbmVudC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWpHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7TUFFNUMsNEJBQTRCOzs7O0FBQUcsQ0FBQyxLQUFxQixFQUFPLEVBQUUsQ0FDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTTs7Ozs7QUFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDckMsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUE7Ozs7OztBQU9OLENBQUMsS0FBZSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUzs7QUFMdEMsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFdBQVcsT0FFWjs7QUFFRCxNQUFNLE9BQU8sb0JBQW9CLEdBRzdCLGNBQWMsQ0FDaEIsaUJBQWlCLEVBQ2pCLDRCQUE0QixDQUM3Qjs7QUFFRCxNQUFNLE9BQU8sNkJBQTZCOzs7O0FBQUcsQ0FDM0MsR0FBVyxFQUN1QyxFQUFFO0lBQ3BELE9BQU8sY0FBYyxDQUNuQixpQkFBaUI7Ozs7SUFDakIsUUFBUSxDQUFDLEVBQUU7UUFDVCx5Q0FBeUM7UUFDekMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9DLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO2FBQU07WUFDTCxPQUFPLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyx3QkFBd0I7Ozs7QUFBRyxDQUN0QyxHQUFXLEVBQzBCLEVBQUU7SUFDdkMsT0FBTyxjQUFjLENBQ25CLDZCQUE2QixDQUFDLEdBQUcsQ0FBQzs7OztJQUNsQyxLQUFLLENBQUMsRUFBRTtRQUNOLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZW50aXR5U3RhdGVTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IGxvYWRlclZhbHVlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDbXNTdGF0ZSwgQ29tcG9uZW50U3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuXG5jb25zdCBnZXRDb21wb25lbnRFbnRpdGllc1NlbGVjdG9yID0gKHN0YXRlOiBDb21wb25lbnRTdGF0ZSk6IGFueSA9PlxuICBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcykucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgIGFjY1tjdXJdID0gc3RhdGUuZW50aXRpZXNbY3VyXS52YWx1ZTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICBDb21wb25lbnRTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDbXNTdGF0ZSxcbiAgKHN0YXRlOiBDbXNTdGF0ZSkgPT4gc3RhdGUuY29tcG9uZW50XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50RW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgeyBbaWQ6IHN0cmluZ106IGFueSB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENvbXBvbmVudFN0YXRlLFxuICBnZXRDb21wb25lbnRFbnRpdGllc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50U3RhdGVTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgTG9hZGVyU3RhdGU8YW55Pj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0Q29tcG9uZW50U3RhdGUsXG4gICAgZW50aXRpZXMgPT4ge1xuICAgICAgLy8gdGhlIHdob2xlIGNvbXBvbmVudCBlbnRpdGllcyBhcmUgZW10cHlcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlbnRpdGllcy5lbnRpdGllcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZW50aXR5U3RhdGVTZWxlY3RvcihlbnRpdGllcywgdWlkKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50U2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIGFueT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50U3RhdGVTZWxlY3RvckZhY3RvcnkodWlkKSxcbiAgICBzdGF0ZSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuIl19