/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getCmsState } from './feature.selectors';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.navigation;
/** @type {?} */
export const getNavigationEntryItemState = createSelector(getCmsState, (ɵ0));
/** @type {?} */
export const getSelectedNavigationEntryItemState = (/**
 * @param {?} nodeId
 * @return {?}
 */
(nodeId) => {
    return createSelector(getNavigationEntryItemState, (/**
     * @param {?} nodes
     * @return {?}
     */
    nodes => StateEntityLoaderSelectors.entityStateSelector(nodes, nodeId)));
});
/** @type {?} */
export const getNavigationEntryItems = (/**
 * @param {?} nodeId
 * @return {?}
 */
(nodeId) => {
    return createSelector(getSelectedNavigationEntryItemState(nodeId), (/**
     * @param {?} itemState
     * @return {?}
     */
    itemState => StateLoaderSelectors.loaderValueSelector(itemState)));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL25hdmlnYXRpb24tZW50cnktaXRlbS5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRS9ELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUM7QUFJcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztBQU9oRCxDQUFDLEtBQWUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVU7O0FBTHZDLE1BQU0sT0FBTywyQkFBMkIsR0FHcEMsY0FBYyxDQUNoQixXQUFXLE9BRVo7O0FBRUQsTUFBTSxPQUFPLG1DQUFtQzs7OztBQUFHLENBQ2pELE1BQWMsRUFDeUMsRUFBRTtJQUN6RCxPQUFPLGNBQWMsQ0FDbkIsMkJBQTJCOzs7O0lBQzNCLEtBQUssQ0FBQyxFQUFFLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUN2RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyx1QkFBdUI7Ozs7QUFBRyxDQUNyQyxNQUFjLEVBQzRCLEVBQUU7SUFDNUMsT0FBTyxjQUFjLENBQ25CLG1DQUFtQyxDQUFDLE1BQU0sQ0FBQzs7OztJQUMzQyxTQUFTLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxFQUNqRSxDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFbnRpdHlMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycyxcbiAgU3RhdGVMb2FkZXJTZWxlY3RvcnMsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uLy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdGF0ZSwgU3RhdGVXaXRoQ21zIH0gZnJvbSAnLi4vY21zLXN0YXRlJztcbmltcG9ydCB7IGdldENtc1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBnZXROYXZpZ2F0aW9uRW50cnlJdGVtU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgRW50aXR5TG9hZGVyU3RhdGU8Tm9kZUl0ZW0+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5uYXZpZ2F0aW9uXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWROYXZpZ2F0aW9uRW50cnlJdGVtU3RhdGUgPSAoXG4gIG5vZGVJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgTG9hZGVyU3RhdGU8Tm9kZUl0ZW0+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXROYXZpZ2F0aW9uRW50cnlJdGVtU3RhdGUsXG4gICAgbm9kZXMgPT4gU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMuZW50aXR5U3RhdGVTZWxlY3Rvcihub2Rlcywgbm9kZUlkKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5hdmlnYXRpb25FbnRyeUl0ZW1zID0gKFxuICBub2RlSWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIE5vZGVJdGVtPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZE5hdmlnYXRpb25FbnRyeUl0ZW1TdGF0ZShub2RlSWQpLFxuICAgIGl0ZW1TdGF0ZSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJWYWx1ZVNlbGVjdG9yKGl0ZW1TdGF0ZSlcbiAgKTtcbn07XG4iXX0=