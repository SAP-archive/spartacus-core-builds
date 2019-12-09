/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { initialLoaderState, StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
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
 * @param {?=} scope
 * @return {?}
 */
(code, scope) => {
    return createSelector(getProductState, (/**
     * @param {?} details
     * @return {?}
     */
    details => scope
        ? StateEntityLoaderSelectors.entityStateSelector(details, code)[scope] || initialLoaderState
        : StateEntityLoaderSelectors.entityStateSelector(details, code)));
});
/** @type {?} */
export const getSelectedProductFactory = (/**
 * @param {?} code
 * @param {?=} scope
 * @return {?}
 */
(code, scope) => {
    return createSelector(getSelectedProductStateFactory(code, scope), (/**
     * @param {?} productState
     * @return {?}
     */
    productState => StateLoaderSelectors.loaderValueSelector(productState)));
});
/** @type {?} */
export const getSelectedProductLoadingFactory = (/**
 * @param {?} code
 * @param {?=} scope
 * @return {?}
 */
(code, scope) => {
    return createSelector(getSelectedProductStateFactory(code, scope), (/**
     * @param {?} productState
     * @return {?}
     */
    productState => StateLoaderSelectors.loaderLoadingSelector(productState)));
});
/** @type {?} */
export const getSelectedProductSuccessFactory = (/**
 * @param {?} code
 * @param {?=} scope
 * @return {?}
 */
(code, scope) => {
    return createSelector(getSelectedProductStateFactory(code, scope), (/**
     * @param {?} productState
     * @return {?}
     */
    productState => StateLoaderSelectors.loaderSuccessSelector(productState)));
});
/** @type {?} */
export const getSelectedProductErrorFactory = (/**
 * @param {?} code
 * @param {?=} scope
 * @return {?}
 */
(code, scope) => {
    return createSelector(getSelectedProductStateFactory(code, scope), (/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9zZWxlY3RvcnMvcHJvZHVjdC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsMEJBQTBCLEVBQzFCLG9CQUFvQixHQUNyQixNQUFNLDRCQUE0QixDQUFDO0FBR3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU9wRCxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPOztBQUx6QyxNQUFNLE9BQU8sZUFBZSxHQUd4QixjQUFjLENBQ2hCLGdCQUFnQixPQUVqQjs7QUFFRCxNQUFNLE9BQU8sMEJBQTBCOzs7O0FBQUcsQ0FDeEMsS0FBZSxFQUNnQyxFQUFFO0lBQ2pELE9BQU8sY0FBYyxDQUNuQixlQUFlOzs7O0lBQ2YsQ0FBQyxPQUFtQyxFQUFFLEVBQUU7UUFDdEMsT0FBTyxLQUFLO2FBQ1QsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQ1YsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDbEU7YUFDQSxNQUFNOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFDLENBQUM7SUFDOUMsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLDhCQUE4Qjs7Ozs7QUFBRyxDQUM1QyxJQUFZLEVBQ1osS0FBYyxFQUM0QyxFQUFFO0lBQzVELE9BQU8sY0FBYyxDQUNuQixlQUFlOzs7O0lBQ2YsT0FBTyxDQUFDLEVBQUUsQ0FDUixLQUFLO1FBQ0gsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FDM0QsS0FBSyxDQUNOLElBQUksa0JBQWtCO1FBQ3pCLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQ3BFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7QUFBRyxDQUN2QyxJQUFZLEVBQ1osS0FBYyxFQUMrQixFQUFFO0lBQy9DLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDOzs7O0lBQzNDLFlBQVksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQ3ZFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7QUFBRyxDQUM5QyxJQUFZLEVBQ1osS0FBYyxFQUMrQixFQUFFO0lBQy9DLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDOzs7O0lBQzNDLFlBQVksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQ3pFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7QUFBRyxDQUM5QyxJQUFZLEVBQ1osS0FBYyxFQUMrQixFQUFFO0lBQy9DLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDOzs7O0lBQzNDLFlBQVksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQ3pFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLDhCQUE4Qjs7Ozs7QUFBRyxDQUM1QyxJQUFZLEVBQ1osS0FBYyxFQUMrQixFQUFFO0lBQy9DLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDOzs7O0lBQzNDLFlBQVksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQ3ZFLENBQUM7QUFDSixDQUFDLENBQUE7Ozs7O0FBT0MsT0FBTyxDQUFDLEVBQUU7SUFDUixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7O0FBUEgsTUFBTSxPQUFPLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLGVBQWUsT0FJaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IEVudGl0eUxvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIGluaXRpYWxMb2FkZXJTdGF0ZSxcbiAgU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgUHJvZHVjdHNTdGF0ZSwgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFByb2R1Y3QsXG4gIEVudGl0eUxvYWRlclN0YXRlPFByb2R1Y3Q+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByb2R1Y3RzU3RhdGUsXG4gIChzdGF0ZTogUHJvZHVjdHNTdGF0ZSkgPT4gc3RhdGUuZGV0YWlsc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdHNGYWN0b3J5ID0gKFxuICBjb2Rlczogc3RyaW5nW11cbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgUHJvZHVjdFtdPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcm9kdWN0U3RhdGUsXG4gICAgKGRldGFpbHM6IEVudGl0eUxvYWRlclN0YXRlPFByb2R1Y3Q+KSA9PiB7XG4gICAgICByZXR1cm4gY29kZXNcbiAgICAgICAgLm1hcChjb2RlID0+XG4gICAgICAgICAgZGV0YWlscy5lbnRpdGllc1tjb2RlXSA/IGRldGFpbHMuZW50aXRpZXNbY29kZV0udmFsdWUgOiB1bmRlZmluZWRcbiAgICAgICAgKVxuICAgICAgICAuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdCAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmcsXG4gIHNjb3BlPzogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIExvYWRlclN0YXRlPFByb2R1Y3Q+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcm9kdWN0U3RhdGUsXG4gICAgZGV0YWlscyA9PlxuICAgICAgc2NvcGVcbiAgICAgICAgPyBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycy5lbnRpdHlTdGF0ZVNlbGVjdG9yKGRldGFpbHMsIGNvZGUpW1xuICAgICAgICAgICAgc2NvcGVcbiAgICAgICAgICBdIHx8IGluaXRpYWxMb2FkZXJTdGF0ZVxuICAgICAgICA6IFN0YXRlRW50aXR5TG9hZGVyU2VsZWN0b3JzLmVudGl0eVN0YXRlU2VsZWN0b3IoZGV0YWlscywgY29kZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmcsXG4gIHNjb3BlPzogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIFByb2R1Y3Q+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShjb2RlLCBzY29wZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmcsXG4gIHNjb3BlPzogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShjb2RlLCBzY29wZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlckxvYWRpbmdTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0U3VjY2Vzc0ZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZyxcbiAgc2NvcGU/OiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUsIHNjb3BlKSxcbiAgICBwcm9kdWN0U3RhdGUgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyU3VjY2Vzc1NlbGVjdG9yKHByb2R1Y3RTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RFcnJvckZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZyxcbiAgc2NvcGU/OiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUsIHNjb3BlKSxcbiAgICBwcm9kdWN0U3RhdGUgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyRXJyb3JTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsUHJvZHVjdENvZGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBzdHJpbmdbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQcm9kdWN0U3RhdGUsXG4gIGRldGFpbHMgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkZXRhaWxzLmVudGl0aWVzKTtcbiAgfVxuKTtcbiJdfQ==