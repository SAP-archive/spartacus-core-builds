/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { entityStateSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { loaderValueSelector } from '../../../state/utils/loader/loader.selectors';
import { getCmsState } from './feature.selectors';
/** @type {?} */
export var getComponentEntitiesSelector = (/**
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
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.component; };
/** @type {?} */
export var getComponentState = createSelector(getCmsState, (ɵ0));
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL2NvbXBvbmVudC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWpHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFbEQsTUFBTSxLQUFPLDRCQUE0Qjs7OztBQUFHLFVBQUMsS0FBcUI7SUFDaEUsT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7UUFDMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxHQUFFLEVBQUUsQ0FBQztBQUhOLENBR00sQ0FBQTs7Ozs7QUFPTixVQUFDLEtBQWUsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQWYsQ0FBZTs7QUFMdEMsTUFBTSxLQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFdBQVcsT0FFWjs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBRzdCLGNBQWMsQ0FDaEIsaUJBQWlCLEVBQ2pCLDRCQUE0QixDQUM3Qjs7QUFFRCxNQUFNLEtBQU8sNkJBQTZCOzs7O0FBQUcsVUFDM0MsR0FBVztJQUVYLE9BQU8sY0FBYyxDQUNuQixpQkFBaUI7Ozs7SUFDakIsVUFBQSxRQUFRO1FBQ04seUNBQXlDO1FBQ3pDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQyxPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNO1lBQ0wsT0FBTyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sd0JBQXdCOzs7O0FBQUcsVUFDdEMsR0FBVztJQUVYLE9BQU8sY0FBYyxDQUNuQiw2QkFBNkIsQ0FBQyxHQUFHLENBQUM7Ozs7SUFDbEMsVUFBQSxLQUFLO1FBQ0gsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBlbnRpdHlTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgbG9hZGVyVmFsdWVTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IENtc1N0YXRlLCBDb21wb25lbnRTdGF0ZSwgU3RhdGVXaXRoQ21zIH0gZnJvbSAnLi4vY21zLXN0YXRlJztcbmltcG9ydCB7IGdldENtc1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRFbnRpdGllc1NlbGVjdG9yID0gKHN0YXRlOiBDb21wb25lbnRTdGF0ZSkgPT5cbiAgT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgICBhY2NbY3VyXSA9IHN0YXRlLmVudGl0aWVzW2N1cl0udmFsdWU7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgQ29tcG9uZW50U3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q21zU3RhdGUsXG4gIChzdGF0ZTogQ21zU3RhdGUpID0+IHN0YXRlLmNvbXBvbmVudFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudEVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIHsgW2lkOiBzdHJpbmddOiBhbnkgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDb21wb25lbnRTdGF0ZSxcbiAgZ2V0Q29tcG9uZW50RW50aXRpZXNTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudFN0YXRlU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIExvYWRlclN0YXRlPGFueT4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldENvbXBvbmVudFN0YXRlLFxuICAgIGVudGl0aWVzID0+IHtcbiAgICAgIC8vIHRoZSB3aG9sZSBjb21wb25lbnQgZW50aXRpZXMgYXJlIGVtdHB5XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZW50aXRpZXMuZW50aXRpZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eVN0YXRlU2VsZWN0b3IoZW50aXRpZXMsIHVpZCk7XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudFNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBhbnk+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGNvbXBvbmVudFN0YXRlU2VsZWN0b3JGYWN0b3J5KHVpZCksXG4gICAgc3RhdGUgPT4ge1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcbiJdfQ==