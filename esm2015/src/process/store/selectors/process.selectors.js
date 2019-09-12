/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { StateEntityLoaderSelectors } from '../../../state/utils/index';
import { loaderErrorSelector, loaderLoadingSelector, loaderSuccessSelector, } from '../../../state/utils/loader/loader.selectors';
import { getProcessState } from './feature.selector';
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
export function getProcessStateFactory(processId) {
    return createSelector(getProcessState(), (/**
     * @param {?} entityState
     * @return {?}
     */
    entityState => StateEntityLoaderSelectors.entityStateSelector(entityState, processId)));
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
export function getProcessLoadingFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (/**
     * @param {?} loaderState
     * @return {?}
     */
    loaderState => loaderLoadingSelector(loaderState)));
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
export function getProcessSuccessFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (/**
     * @param {?} loaderState
     * @return {?}
     */
    loaderState => loaderSuccessSelector(loaderState)));
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
export function getProcessErrorFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (/**
     * @param {?} loaderState
     * @return {?}
     */
    loaderState => loaderErrorSelector(loaderState)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHFCQUFxQixHQUN0QixNQUFNLDhDQUE4QyxDQUFDO0FBRXRELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBRXJELE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsU0FBaUI7SUFFakIsT0FBTyxjQUFjLENBQ25CLGVBQWUsRUFBRTs7OztJQUNqQixXQUFXLENBQUMsRUFBRSxDQUNaLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFDekUsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSx3QkFBd0IsQ0FDdEMsU0FBaUI7SUFFakIsT0FBTyxjQUFjLENBQ25CLHNCQUFzQixDQUFDLFNBQVMsQ0FBQzs7OztJQUNqQyxXQUFXLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxFQUNsRCxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHdCQUF3QixDQUN0QyxTQUFpQjtJQUVqQixPQUFPLGNBQWMsQ0FDbkIsc0JBQXNCLENBQUMsU0FBUyxDQUFDOzs7O0lBQ2pDLFdBQVcsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQ2xELENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLFNBQWlCO0lBRWpCLE9BQU8sY0FBYyxDQUNuQixzQkFBc0IsQ0FBQyxTQUFTLENBQUM7Ozs7SUFDakMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsRUFDaEQsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFN0YXRlRW50aXR5TG9hZGVyU2VsZWN0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIGxvYWRlckVycm9yU2VsZWN0b3IsXG4gIGxvYWRlckxvYWRpbmdTZWxlY3RvcixcbiAgbG9hZGVyU3VjY2Vzc1NlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9jZXNzU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeTxUPihcbiAgcHJvY2Vzc0lkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvY2VzczxUPiwgTG9hZGVyU3RhdGU8VD4+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2Nlc3NTdGF0ZSgpLFxuICAgIGVudGl0eVN0YXRlID0+XG4gICAgICBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycy5lbnRpdHlTdGF0ZVNlbGVjdG9yKGVudGl0eVN0YXRlLCBwcm9jZXNzSWQpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9jZXNzTG9hZGluZ0ZhY3Rvcnk8VD4oXG4gIHByb2Nlc3NJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2Nlc3M8VD4sIGJvb2xlYW4+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkocHJvY2Vzc0lkKSxcbiAgICBsb2FkZXJTdGF0ZSA9PiBsb2FkZXJMb2FkaW5nU2VsZWN0b3IobG9hZGVyU3RhdGUpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3Rvcnk8VD4oXG4gIHByb2Nlc3NJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2Nlc3M8VD4sIGJvb2xlYW4+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkocHJvY2Vzc0lkKSxcbiAgICBsb2FkZXJTdGF0ZSA9PiBsb2FkZXJTdWNjZXNzU2VsZWN0b3IobG9hZGVyU3RhdGUpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9jZXNzRXJyb3JGYWN0b3J5PFQ+KFxuICBwcm9jZXNzSWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9jZXNzPFQ+LCBib29sZWFuPiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KHByb2Nlc3NJZCksXG4gICAgbG9hZGVyU3RhdGUgPT4gbG9hZGVyRXJyb3JTZWxlY3Rvcihsb2FkZXJTdGF0ZSlcbiAgKTtcbn1cbiJdfQ==