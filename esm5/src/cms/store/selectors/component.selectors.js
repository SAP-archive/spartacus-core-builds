/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getCmsState } from './feature.selectors';
/** @type {?} */
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
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.component; };
/** @type {?} */
export var getComponentState = createSelector(getCmsState, (ɵ1));
/** @type {?} */
export var getComponentEntities = createSelector(getComponentState, getComponentEntitiesSelector);
/** @type {?} */
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
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL2NvbXBvbmVudC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUM7QUFHcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQUU1Qyw0QkFBNEI7Ozs7QUFBRyxVQUFDLEtBQXFCO0lBQ3pELE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTTs7Ozs7SUFBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO1FBQzFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsR0FBRSxFQUFFLENBQUM7QUFITixDQUdNLENBQUE7Ozs7OztBQU9OLFVBQUMsS0FBZSxJQUFLLE9BQUEsS0FBSyxDQUFDLFNBQVMsRUFBZixDQUFlOztBQUx0QyxNQUFNLEtBQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsV0FBVyxPQUVaOztBQUVELE1BQU0sS0FBTyxvQkFBb0IsR0FHN0IsY0FBYyxDQUNoQixpQkFBaUIsRUFDakIsNEJBQTRCLENBQzdCOztBQUVELE1BQU0sS0FBTyw2QkFBNkI7Ozs7QUFBRyxVQUMzQyxHQUFXO0lBRVgsT0FBTyxjQUFjLENBQ25CLGlCQUFpQjs7OztJQUNqQixVQUFBLFFBQVE7UUFDTix5Q0FBeUM7UUFDekMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9DLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO2FBQU07WUFDTCxPQUFPLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyx3QkFBd0I7Ozs7QUFBRyxVQUN0QyxHQUFXO0lBRVgsT0FBTyxjQUFjLENBQ25CLDZCQUE2QixDQUFDLEdBQUcsQ0FBQzs7OztJQUNsQyxVQUFBLEtBQUs7UUFDSCxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIFN0YXRlRW50aXR5TG9hZGVyU2VsZWN0b3JzLFxuICBTdGF0ZUxvYWRlclNlbGVjdG9ycyxcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IENtc1N0YXRlLCBDb21wb25lbnRTdGF0ZSwgU3RhdGVXaXRoQ21zIH0gZnJvbSAnLi4vY21zLXN0YXRlJztcbmltcG9ydCB7IGdldENtc1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9ycyc7XG5cbmNvbnN0IGdldENvbXBvbmVudEVudGl0aWVzU2VsZWN0b3IgPSAoc3RhdGU6IENvbXBvbmVudFN0YXRlKTogYW55ID0+XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgYWNjW2N1cl0gPSBzdGF0ZS5lbnRpdGllc1tjdXJdLnZhbHVlO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIENvbXBvbmVudFN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5jb21wb25lbnRcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICB7IFtpZDogc3RyaW5nXTogYW55IH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q29tcG9uZW50U3RhdGUsXG4gIGdldENvbXBvbmVudEVudGl0aWVzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRTdGF0ZVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBMb2FkZXJTdGF0ZTxhbnk+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRDb21wb25lbnRTdGF0ZSxcbiAgICBlbnRpdGllcyA9PiB7XG4gICAgICAvLyB0aGUgd2hvbGUgY29tcG9uZW50IGVudGl0aWVzIGFyZSBlbXRweVxuICAgICAgaWYgKE9iamVjdC5rZXlzKGVudGl0aWVzLmVudGl0aWVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycy5lbnRpdHlTdGF0ZVNlbGVjdG9yKGVudGl0aWVzLCB1aWQpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgYW55PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIHN0YXRlID0+IHtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=