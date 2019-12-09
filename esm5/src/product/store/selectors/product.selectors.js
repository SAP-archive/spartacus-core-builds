/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { initialLoaderState, StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getProductsState } from './feature.selector';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.details; };
/** @type {?} */
export var getProductState = createSelector(getProductsState, (ɵ0));
/** @type {?} */
export var getSelectedProductsFactory = (/**
 * @param {?} codes
 * @return {?}
 */
function (codes) {
    return createSelector(getProductState, (/**
     * @param {?} details
     * @return {?}
     */
    function (details) {
        return codes
            .map((/**
         * @param {?} code
         * @return {?}
         */
        function (code) {
            return details.entities[code] ? details.entities[code].value : undefined;
        }))
            .filter((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return product !== undefined; }));
    }));
});
/** @type {?} */
export var getSelectedProductStateFactory = (/**
 * @param {?} code
 * @param {?=} scope
 * @return {?}
 */
function (code, scope) {
    return createSelector(getProductState, (/**
     * @param {?} details
     * @return {?}
     */
    function (details) {
        return scope
            ? StateEntityLoaderSelectors.entityStateSelector(details, code)[scope] || initialLoaderState
            : StateEntityLoaderSelectors.entityStateSelector(details, code);
    }));
});
/** @type {?} */
export var getSelectedProductFactory = (/**
 * @param {?} code
 * @param {?=} scope
 * @return {?}
 */
function (code, scope) {
    return createSelector(getSelectedProductStateFactory(code, scope), (/**
     * @param {?} productState
     * @return {?}
     */
    function (productState) { return StateLoaderSelectors.loaderValueSelector(productState); }));
});
/** @type {?} */
export var getSelectedProductLoadingFactory = (/**
 * @param {?} code
 * @param {?=} scope
 * @return {?}
 */
function (code, scope) {
    return createSelector(getSelectedProductStateFactory(code, scope), (/**
     * @param {?} productState
     * @return {?}
     */
    function (productState) { return StateLoaderSelectors.loaderLoadingSelector(productState); }));
});
/** @type {?} */
export var getSelectedProductSuccessFactory = (/**
 * @param {?} code
 * @param {?=} scope
 * @return {?}
 */
function (code, scope) {
    return createSelector(getSelectedProductStateFactory(code, scope), (/**
     * @param {?} productState
     * @return {?}
     */
    function (productState) { return StateLoaderSelectors.loaderSuccessSelector(productState); }));
});
/** @type {?} */
export var getSelectedProductErrorFactory = (/**
 * @param {?} code
 * @param {?=} scope
 * @return {?}
 */
function (code, scope) {
    return createSelector(getSelectedProductStateFactory(code, scope), (/**
     * @param {?} productState
     * @return {?}
     */
    function (productState) { return StateLoaderSelectors.loaderErrorSelector(productState); }));
});
var ɵ1 = /**
 * @param {?} details
 * @return {?}
 */
function (details) {
    return Object.keys(details.entities);
};
/** @type {?} */
export var getAllProductCodes = createSelector(getProductState, (ɵ1));
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9zZWxlY3RvcnMvcHJvZHVjdC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsMEJBQTBCLEVBQzFCLG9CQUFvQixHQUNyQixNQUFNLDRCQUE0QixDQUFDO0FBR3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU9wRCxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWE7O0FBTHpDLE1BQU0sS0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsZ0JBQWdCLE9BRWpCOztBQUVELE1BQU0sS0FBTywwQkFBMEI7Ozs7QUFBRyxVQUN4QyxLQUFlO0lBRWYsT0FBTyxjQUFjLENBQ25CLGVBQWU7Ozs7SUFDZixVQUFDLE9BQW1DO1FBQ2xDLE9BQU8sS0FBSzthQUNULEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDUCxPQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQWpFLENBQWlFLEVBQ2xFO2FBQ0EsTUFBTTs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxLQUFLLFNBQVMsRUFBckIsQ0FBcUIsRUFBQyxDQUFDO0lBQzlDLENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyw4QkFBOEI7Ozs7O0FBQUcsVUFDNUMsSUFBWSxFQUNaLEtBQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsZUFBZTs7OztJQUNmLFVBQUEsT0FBTztRQUNMLE9BQUEsS0FBSztZQUNILENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQzNELEtBQUssQ0FDTixJQUFJLGtCQUFrQjtZQUN6QixDQUFDLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUpqRSxDQUlpRSxFQUNwRSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyx5QkFBeUI7Ozs7O0FBQUcsVUFDdkMsSUFBWSxFQUNaLEtBQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzs7OztJQUMzQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxFQUF0RCxDQUFzRCxFQUN2RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyxnQ0FBZ0M7Ozs7O0FBQUcsVUFDOUMsSUFBWSxFQUNaLEtBQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzs7OztJQUMzQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxFQUF4RCxDQUF3RCxFQUN6RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyxnQ0FBZ0M7Ozs7O0FBQUcsVUFDOUMsSUFBWSxFQUNaLEtBQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzs7OztJQUMzQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxFQUF4RCxDQUF3RCxFQUN6RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyw4QkFBOEI7Ozs7O0FBQUcsVUFDNUMsSUFBWSxFQUNaLEtBQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzs7OztJQUMzQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxFQUF0RCxDQUFzRCxFQUN2RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOzs7OztBQU9DLFVBQUEsT0FBTztJQUNMLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsQ0FBQzs7QUFQSCxNQUFNLEtBQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsZUFBZSxPQUloQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgaW5pdGlhbExvYWRlclN0YXRlLFxuICBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycyxcbiAgU3RhdGVMb2FkZXJTZWxlY3RvcnMsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0c1N0YXRlLCBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0c1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbiAgRW50aXR5TG9hZGVyU3RhdGU8UHJvZHVjdD5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UHJvZHVjdHNTdGF0ZSxcbiAgKHN0YXRlOiBQcm9kdWN0c1N0YXRlKSA9PiBzdGF0ZS5kZXRhaWxzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0c0ZhY3RvcnkgPSAoXG4gIGNvZGVzOiBzdHJpbmdbXVxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBQcm9kdWN0W10+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2R1Y3RTdGF0ZSxcbiAgICAoZGV0YWlsczogRW50aXR5TG9hZGVyU3RhdGU8UHJvZHVjdD4pID0+IHtcbiAgICAgIHJldHVybiBjb2Rlc1xuICAgICAgICAubWFwKGNvZGUgPT5cbiAgICAgICAgICBkZXRhaWxzLmVudGl0aWVzW2NvZGVdID8gZGV0YWlscy5lbnRpdGllc1tjb2RlXS52YWx1ZSA6IHVuZGVmaW5lZFxuICAgICAgICApXG4gICAgICAgIC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0ICE9PSB1bmRlZmluZWQpO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZyxcbiAgc2NvcGU/OiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgTG9hZGVyU3RhdGU8UHJvZHVjdD4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2R1Y3RTdGF0ZSxcbiAgICBkZXRhaWxzID0+XG4gICAgICBzY29wZVxuICAgICAgICA/IFN0YXRlRW50aXR5TG9hZGVyU2VsZWN0b3JzLmVudGl0eVN0YXRlU2VsZWN0b3IoZGV0YWlscywgY29kZSlbXG4gICAgICAgICAgICBzY29wZVxuICAgICAgICAgIF0gfHwgaW5pdGlhbExvYWRlclN0YXRlXG4gICAgICAgIDogU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMuZW50aXR5U3RhdGVTZWxlY3RvcihkZXRhaWxzLCBjb2RlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdEZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZyxcbiAgc2NvcGU/OiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgUHJvZHVjdD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUsIHNjb3BlKSxcbiAgICBwcm9kdWN0U3RhdGUgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyVmFsdWVTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZyxcbiAgc2NvcGU/OiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUsIHNjb3BlKSxcbiAgICBwcm9kdWN0U3RhdGUgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHByb2R1Y3RTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RTdWNjZXNzRmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nLFxuICBzY29wZT86IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSwgc2NvcGUpLFxuICAgIHByb2R1Y3RTdGF0ZSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJTdWNjZXNzU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdEVycm9yRmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nLFxuICBzY29wZT86IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSwgc2NvcGUpLFxuICAgIHByb2R1Y3RTdGF0ZSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJFcnJvclNlbGVjdG9yKHByb2R1Y3RTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0Q29kZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFByb2R1Y3QsXG4gIHN0cmluZ1tdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByb2R1Y3RTdGF0ZSxcbiAgZGV0YWlscyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRldGFpbHMuZW50aXRpZXMpO1xuICB9XG4pO1xuIl19