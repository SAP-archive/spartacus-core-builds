/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { entityStateSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { loaderErrorSelector, loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
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
    details => entityStateSelector(details, code)));
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
    productState => loaderValueSelector(productState)));
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
    productState => loaderLoadingSelector(productState)));
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
    productState => loaderSuccessSelector(productState)));
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
    productState => loaderErrorSelector(productState)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9zZWxlY3RvcnMvcHJvZHVjdC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWpHLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFRcEQsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTzs7QUFMekMsTUFBTSxPQUFPLGVBQWUsR0FHeEIsY0FBYyxDQUNoQixnQkFBZ0IsT0FFakI7O0FBRUQsTUFBTSxPQUFPLDBCQUEwQjs7OztBQUFHLENBQ3hDLEtBQWUsRUFDZ0MsRUFBRTtJQUNqRCxPQUFPLGNBQWMsQ0FDbkIsZUFBZTs7OztJQUNmLENBQUMsT0FBbUMsRUFBRSxFQUFFO1FBQ3RDLE9BQU8sS0FBSzthQUNULEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUNWLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQ2xFO2FBQ0EsTUFBTTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBQyxDQUFDO0lBQzlDLENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyw4QkFBOEI7Ozs7QUFBRyxDQUM1QyxJQUFZLEVBQzhDLEVBQUU7SUFDNUQsT0FBTyxjQUFjLENBQ25CLGVBQWU7Ozs7SUFDZixPQUFPLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFDOUMsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8seUJBQXlCOzs7O0FBQUcsQ0FDdkMsSUFBWSxFQUNpQyxFQUFFO0lBQy9DLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLENBQUM7Ozs7SUFDcEMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsRUFDbEQsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sZ0NBQWdDOzs7O0FBQUcsQ0FDOUMsSUFBWSxFQUNpQyxFQUFFO0lBQy9DLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLENBQUM7Ozs7SUFDcEMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsRUFDcEQsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sZ0NBQWdDOzs7O0FBQUcsQ0FDOUMsSUFBWSxFQUNpQyxFQUFFO0lBQy9DLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLENBQUM7Ozs7SUFDcEMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsRUFDcEQsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sOEJBQThCOzs7O0FBQUcsQ0FDNUMsSUFBWSxFQUNpQyxFQUFFO0lBQy9DLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLENBQUM7Ozs7SUFDcEMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsRUFDbEQsQ0FBQztBQUNKLENBQUMsQ0FBQTs7Ozs7QUFPQyxPQUFPLENBQUMsRUFBRTtJQUNSLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsQ0FBQzs7QUFQSCxNQUFNLE9BQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsZUFBZSxPQUloQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdHNTdGF0ZSwgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgZW50aXR5U3RhdGVTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIGxvYWRlckVycm9yU2VsZWN0b3IsXG4gIGxvYWRlckxvYWRpbmdTZWxlY3RvcixcbiAgbG9hZGVyU3VjY2Vzc1NlbGVjdG9yLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0c1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbiAgRW50aXR5TG9hZGVyU3RhdGU8UHJvZHVjdD5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UHJvZHVjdHNTdGF0ZSxcbiAgKHN0YXRlOiBQcm9kdWN0c1N0YXRlKSA9PiBzdGF0ZS5kZXRhaWxzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0c0ZhY3RvcnkgPSAoXG4gIGNvZGVzOiBzdHJpbmdbXVxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBQcm9kdWN0W10+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2R1Y3RTdGF0ZSxcbiAgICAoZGV0YWlsczogRW50aXR5TG9hZGVyU3RhdGU8UHJvZHVjdD4pID0+IHtcbiAgICAgIHJldHVybiBjb2Rlc1xuICAgICAgICAubWFwKGNvZGUgPT5cbiAgICAgICAgICBkZXRhaWxzLmVudGl0aWVzW2NvZGVdID8gZGV0YWlscy5lbnRpdGllc1tjb2RlXS52YWx1ZSA6IHVuZGVmaW5lZFxuICAgICAgICApXG4gICAgICAgIC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0ICE9PSB1bmRlZmluZWQpO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBMb2FkZXJTdGF0ZTxQcm9kdWN0Pj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UHJvZHVjdFN0YXRlLFxuICAgIGRldGFpbHMgPT4gZW50aXR5U3RhdGVTZWxlY3RvcihkZXRhaWxzLCBjb2RlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdEZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBQcm9kdWN0PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IGxvYWRlclZhbHVlU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUpLFxuICAgIHByb2R1Y3RTdGF0ZSA9PiBsb2FkZXJMb2FkaW5nU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdFN1Y2Nlc3NGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUpLFxuICAgIHByb2R1Y3RTdGF0ZSA9PiBsb2FkZXJTdWNjZXNzU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdEVycm9yRmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShjb2RlKSxcbiAgICBwcm9kdWN0U3RhdGUgPT4gbG9hZGVyRXJyb3JTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsUHJvZHVjdENvZGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBzdHJpbmdbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQcm9kdWN0U3RhdGUsXG4gIGRldGFpbHMgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkZXRhaWxzLmVudGl0aWVzKTtcbiAgfVxuKTtcbiJdfQ==