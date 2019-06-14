/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { entityStateSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { loaderValueSelector } from '../../../state/utils/loader/loader.selectors';
import { getCmsState } from './feature.selectors';
/** @type {?} */
export const getComponentEntitiesSelector = (/**
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
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.component;
/** @type {?} */
export const getComponentState = createSelector(getCmsState, (ɵ0));
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL2NvbXBvbmVudC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWpHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFbEQsTUFBTSxPQUFPLDRCQUE0Qjs7OztBQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU07Ozs7O0FBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3JDLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFBOzs7OztBQU9OLENBQUMsS0FBZSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUzs7QUFMdEMsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFdBQVcsT0FFWjs7QUFFRCxNQUFNLE9BQU8sb0JBQW9CLEdBRzdCLGNBQWMsQ0FDaEIsaUJBQWlCLEVBQ2pCLDRCQUE0QixDQUM3Qjs7QUFFRCxNQUFNLE9BQU8sNkJBQTZCOzs7O0FBQUcsQ0FDM0MsR0FBVyxFQUN1QyxFQUFFO0lBQ3BELE9BQU8sY0FBYyxDQUNuQixpQkFBaUI7Ozs7SUFDakIsUUFBUSxDQUFDLEVBQUU7UUFDVCx5Q0FBeUM7UUFDekMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9DLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO2FBQU07WUFDTCxPQUFPLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyx3QkFBd0I7Ozs7QUFBRyxDQUN0QyxHQUFXLEVBQzBCLEVBQUU7SUFDdkMsT0FBTyxjQUFjLENBQ25CLDZCQUE2QixDQUFDLEdBQUcsQ0FBQzs7OztJQUNsQyxLQUFLLENBQUMsRUFBRTtRQUNOLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZW50aXR5U3RhdGVTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IGxvYWRlclZhbHVlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDbXNTdGF0ZSwgQ29tcG9uZW50U3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50RW50aXRpZXNTZWxlY3RvciA9IChzdGF0ZTogQ29tcG9uZW50U3RhdGUpID0+XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgYWNjW2N1cl0gPSBzdGF0ZS5lbnRpdGllc1tjdXJdLnZhbHVlO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIENvbXBvbmVudFN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5jb21wb25lbnRcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICB7IFtpZDogc3RyaW5nXTogYW55IH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q29tcG9uZW50U3RhdGUsXG4gIGdldENvbXBvbmVudEVudGl0aWVzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRTdGF0ZVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBMb2FkZXJTdGF0ZTxhbnk+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRDb21wb25lbnRTdGF0ZSxcbiAgICBlbnRpdGllcyA9PiB7XG4gICAgICAvLyB0aGUgd2hvbGUgY29tcG9uZW50IGVudGl0aWVzIGFyZSBlbXRweVxuICAgICAgaWYgKE9iamVjdC5rZXlzKGVudGl0aWVzLmVudGl0aWVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbnRpdHlTdGF0ZVNlbGVjdG9yKGVudGl0aWVzLCB1aWQpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgYW55PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIHN0YXRlID0+IHtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4gbG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=