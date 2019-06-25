/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { entityStateSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { loaderValueSelector } from '../../../state/utils/loader/loader.selectors';
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
            return entityStateSelector(entities, uid);
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
            return loaderValueSelector(state);
        }
        else {
            return undefined;
        }
    }));
});
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL2NvbXBvbmVudC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWpHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFNUMsNEJBQTRCOzs7O0FBQUcsVUFBQyxLQUFxQjtJQUN6RCxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU07Ozs7O0lBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztRQUMxQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEdBQUUsRUFBRSxDQUFDO0FBSE4sQ0FHTSxDQUFBOzs7Ozs7QUFPTixVQUFDLEtBQWUsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQWYsQ0FBZTs7QUFMdEMsTUFBTSxLQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFdBQVcsT0FFWjs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBRzdCLGNBQWMsQ0FDaEIsaUJBQWlCLEVBQ2pCLDRCQUE0QixDQUM3Qjs7QUFFRCxNQUFNLEtBQU8sNkJBQTZCOzs7O0FBQUcsVUFDM0MsR0FBVztJQUVYLE9BQU8sY0FBYyxDQUNuQixpQkFBaUI7Ozs7SUFDakIsVUFBQSxRQUFRO1FBQ04seUNBQXlDO1FBQ3pDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQyxPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNO1lBQ0wsT0FBTyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sd0JBQXdCOzs7O0FBQUcsVUFDdEMsR0FBVztJQUVYLE9BQU8sY0FBYyxDQUNuQiw2QkFBNkIsQ0FBQyxHQUFHLENBQUM7Ozs7SUFDbEMsVUFBQSxLQUFLO1FBQ0gsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBlbnRpdHlTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgbG9hZGVyVmFsdWVTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IENtc1N0YXRlLCBDb21wb25lbnRTdGF0ZSwgU3RhdGVXaXRoQ21zIH0gZnJvbSAnLi4vY21zLXN0YXRlJztcbmltcG9ydCB7IGdldENtc1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9ycyc7XG5cbmNvbnN0IGdldENvbXBvbmVudEVudGl0aWVzU2VsZWN0b3IgPSAoc3RhdGU6IENvbXBvbmVudFN0YXRlKTogYW55ID0+XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgYWNjW2N1cl0gPSBzdGF0ZS5lbnRpdGllc1tjdXJdLnZhbHVlO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIENvbXBvbmVudFN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5jb21wb25lbnRcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICB7IFtpZDogc3RyaW5nXTogYW55IH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q29tcG9uZW50U3RhdGUsXG4gIGdldENvbXBvbmVudEVudGl0aWVzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRTdGF0ZVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBMb2FkZXJTdGF0ZTxhbnk+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRDb21wb25lbnRTdGF0ZSxcbiAgICBlbnRpdGllcyA9PiB7XG4gICAgICAvLyB0aGUgd2hvbGUgY29tcG9uZW50IGVudGl0aWVzIGFyZSBlbXRweVxuICAgICAgaWYgKE9iamVjdC5rZXlzKGVudGl0aWVzLmVudGl0aWVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbnRpdHlTdGF0ZVNlbGVjdG9yKGVudGl0aWVzLCB1aWQpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgYW55PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIHN0YXRlID0+IHtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4gbG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=