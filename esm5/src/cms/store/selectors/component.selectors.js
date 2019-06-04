/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getCmsState } from './feature.selectors';
import { entityStateSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { loaderValueSelector } from '../../../state/utils/loader/loader.selectors';
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
    function (entities) { return entityStateSelector(entities, uid); }));
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
    function (state) { return loaderValueSelector(state); }));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL2NvbXBvbmVudC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSS9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7QUFHbkYsTUFBTSxLQUFPLDRCQUE0Qjs7OztBQUFHLFVBQUMsS0FBcUI7SUFDaEUsT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7UUFDMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxHQUFFLEVBQUUsQ0FBQztBQUhOLENBR00sQ0FBQTs7Ozs7QUFPTixVQUFDLEtBQWUsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQWYsQ0FBZTs7QUFMdEMsTUFBTSxLQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFdBQVcsT0FFWjs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBRzdCLGNBQWMsQ0FDaEIsaUJBQWlCLEVBQ2pCLDRCQUE0QixDQUM3Qjs7QUFFRCxNQUFNLEtBQU8sNkJBQTZCOzs7O0FBQUcsVUFDM0MsR0FBVztJQUVYLE9BQU8sY0FBYyxDQUNuQixpQkFBaUI7Ozs7SUFDakIsVUFBQSxRQUFRLElBQUksT0FBQSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQWxDLENBQWtDLEVBQy9DLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLHdCQUF3Qjs7OztBQUFHLFVBQ3RDLEdBQVc7SUFFWCxPQUFPLGNBQWMsQ0FDbkIsNkJBQTZCLENBQUMsR0FBRyxDQUFDOzs7O0lBQ2xDLFVBQUEsS0FBSyxJQUFJLE9BQUEsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLEVBQ3BDLENBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQ21zU3RhdGUsIENvbXBvbmVudFN0YXRlLCBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuXG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZW50aXR5U3RhdGVTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgbG9hZGVyVmFsdWVTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRFbnRpdGllc1NlbGVjdG9yID0gKHN0YXRlOiBDb21wb25lbnRTdGF0ZSkgPT5cbiAgT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgICBhY2NbY3VyXSA9IHN0YXRlLmVudGl0aWVzW2N1cl0udmFsdWU7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgQ29tcG9uZW50U3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q21zU3RhdGUsXG4gIChzdGF0ZTogQ21zU3RhdGUpID0+IHN0YXRlLmNvbXBvbmVudFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudEVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIHsgW2lkOiBzdHJpbmddOiBhbnkgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDb21wb25lbnRTdGF0ZSxcbiAgZ2V0Q29tcG9uZW50RW50aXRpZXNTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudFN0YXRlU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIExvYWRlclN0YXRlPGFueT4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldENvbXBvbmVudFN0YXRlLFxuICAgIGVudGl0aWVzID0+IGVudGl0eVN0YXRlU2VsZWN0b3IoZW50aXRpZXMsIHVpZClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgYW55PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQpLFxuICAgIHN0YXRlID0+IGxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4gICk7XG59O1xuIl19