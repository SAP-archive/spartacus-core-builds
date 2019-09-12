/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getProductsState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.details;
/** @type {?} */
export const getProductState = createSelector(getProductsState, (ɵ0));
/** @type {?} */
export const getSelectedProductsFactory = (/**
 * @param {?} codes
 * @return {?}
 */
(codes) => {
    return createSelector(getProductState, (/**
     * @param {?} details
     * @return {?}
     */
    (details) => {
        return codes
            .map((/**
         * @param {?} code
         * @return {?}
         */
        code => details.entities[code] ? details.entities[code].value : undefined))
            .filter((/**
         * @param {?} product
         * @return {?}
         */
        product => product !== undefined));
    }));
});
/** @type {?} */
export const getSelectedProductStateFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => {
    return createSelector(getProductState, (/**
     * @param {?} details
     * @return {?}
     */
    details => StateEntityLoaderSelectors.entityStateSelector(details, code)));
});
/** @type {?} */
export const getSelectedProductFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    productState => StateLoaderSelectors.loaderValueSelector(productState)));
});
/** @type {?} */
export const getSelectedProductLoadingFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    productState => StateLoaderSelectors.loaderLoadingSelector(productState)));
});
/** @type {?} */
export const getSelectedProductSuccessFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    productState => StateLoaderSelectors.loaderSuccessSelector(productState)));
});
/** @type {?} */
export const getSelectedProductErrorFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    productState => StateLoaderSelectors.loaderErrorSelector(productState)));
});
const ɵ1 = /**
 * @param {?} details
 * @return {?}
 */
details => {
    return Object.keys(details.entities);
};
/** @type {?} */
export const getAllProductCodes = createSelector(getProductState, (ɵ1));
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9zZWxlY3RvcnMvcHJvZHVjdC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUM7QUFHcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBT3BELENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87O0FBTHpDLE1BQU0sT0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsZ0JBQWdCLE9BRWpCOztBQUVELE1BQU0sT0FBTywwQkFBMEI7Ozs7QUFBRyxDQUN4QyxLQUFlLEVBQ2dDLEVBQUU7SUFDakQsT0FBTyxjQUFjLENBQ25CLGVBQWU7Ozs7SUFDZixDQUFDLE9BQW1DLEVBQUUsRUFBRTtRQUN0QyxPQUFPLEtBQUs7YUFDVCxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDVixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUNsRTthQUNBLE1BQU07Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUMsQ0FBQztJQUM5QyxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sOEJBQThCOzs7O0FBQUcsQ0FDNUMsSUFBWSxFQUM4QyxFQUFFO0lBQzVELE9BQU8sY0FBYyxDQUNuQixlQUFlOzs7O0lBQ2YsT0FBTyxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQ3pFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLHlCQUF5Qjs7OztBQUFHLENBQ3ZDLElBQVksRUFDaUMsRUFBRTtJQUMvQyxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDOzs7O0lBQ3BDLFlBQVksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQ3ZFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLGdDQUFnQzs7OztBQUFHLENBQzlDLElBQVksRUFDaUMsRUFBRTtJQUMvQyxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDOzs7O0lBQ3BDLFlBQVksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQ3pFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLGdDQUFnQzs7OztBQUFHLENBQzlDLElBQVksRUFDaUMsRUFBRTtJQUMvQyxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDOzs7O0lBQ3BDLFlBQVksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQ3pFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLDhCQUE4Qjs7OztBQUFHLENBQzVDLElBQVksRUFDaUMsRUFBRTtJQUMvQyxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDOzs7O0lBQ3BDLFlBQVksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQ3ZFLENBQUM7QUFDSixDQUFDLENBQUE7Ozs7O0FBT0MsT0FBTyxDQUFDLEVBQUU7SUFDUixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7O0FBUEgsTUFBTSxPQUFPLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLGVBQWUsT0FJaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IEVudGl0eUxvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIFN0YXRlRW50aXR5TG9hZGVyU2VsZWN0b3JzLFxuICBTdGF0ZUxvYWRlclNlbGVjdG9ycyxcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RzU3RhdGUsIFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IGdldFByb2R1Y3RzU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBFbnRpdHlMb2FkZXJTdGF0ZTxQcm9kdWN0PlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQcm9kdWN0c1N0YXRlLFxuICAoc3RhdGU6IFByb2R1Y3RzU3RhdGUpID0+IHN0YXRlLmRldGFpbHNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RzRmFjdG9yeSA9IChcbiAgY29kZXM6IHN0cmluZ1tdXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIFByb2R1Y3RbXT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UHJvZHVjdFN0YXRlLFxuICAgIChkZXRhaWxzOiBFbnRpdHlMb2FkZXJTdGF0ZTxQcm9kdWN0PikgPT4ge1xuICAgICAgcmV0dXJuIGNvZGVzXG4gICAgICAgIC5tYXAoY29kZSA9PlxuICAgICAgICAgIGRldGFpbHMuZW50aXRpZXNbY29kZV0gPyBkZXRhaWxzLmVudGl0aWVzW2NvZGVdLnZhbHVlIDogdW5kZWZpbmVkXG4gICAgICAgIClcbiAgICAgICAgLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QgIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIExvYWRlclN0YXRlPFByb2R1Y3Q+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcm9kdWN0U3RhdGUsXG4gICAgZGV0YWlscyA9PiBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycy5lbnRpdHlTdGF0ZVNlbGVjdG9yKGRldGFpbHMsIGNvZGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0RmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIFByb2R1Y3Q+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShjb2RlKSxcbiAgICBwcm9kdWN0U3RhdGUgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyVmFsdWVTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlckxvYWRpbmdTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0U3VjY2Vzc0ZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclN1Y2Nlc3NTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0RXJyb3JGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUpLFxuICAgIHByb2R1Y3RTdGF0ZSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJFcnJvclNlbGVjdG9yKHByb2R1Y3RTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0Q29kZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFByb2R1Y3QsXG4gIHN0cmluZ1tdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByb2R1Y3RTdGF0ZSxcbiAgZGV0YWlscyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRldGFpbHMuZW50aXRpZXMpO1xuICB9XG4pO1xuIl19