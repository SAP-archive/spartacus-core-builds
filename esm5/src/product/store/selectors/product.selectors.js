/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { entityStateSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { loaderErrorSelector, loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
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
 * @return {?}
 */
function (code) {
    return createSelector(getProductState, (/**
     * @param {?} details
     * @return {?}
     */
    function (details) { return entityStateSelector(details, code); }));
});
/** @type {?} */
export var getSelectedProductFactory = (/**
 * @param {?} code
 * @return {?}
 */
function (code) {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    function (productState) { return loaderValueSelector(productState); }));
});
/** @type {?} */
export var getSelectedProductLoadingFactory = (/**
 * @param {?} code
 * @return {?}
 */
function (code) {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    function (productState) { return loaderLoadingSelector(productState); }));
});
/** @type {?} */
export var getSelectedProductSuccessFactory = (/**
 * @param {?} code
 * @return {?}
 */
function (code) {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    function (productState) { return loaderSuccessSelector(productState); }));
});
/** @type {?} */
export var getSelectedProductErrorFactory = (/**
 * @param {?} code
 * @return {?}
 */
function (code) {
    return createSelector(getSelectedProductStateFactory(code), (/**
     * @param {?} productState
     * @return {?}
     */
    function (productState) { return loaderErrorSelector(productState); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9zZWxlY3RvcnMvcHJvZHVjdC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWpHLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFRcEQsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhOztBQUx6QyxNQUFNLEtBQU8sZUFBZSxHQUd4QixjQUFjLENBQ2hCLGdCQUFnQixPQUVqQjs7QUFFRCxNQUFNLEtBQU8sMEJBQTBCOzs7O0FBQUcsVUFDeEMsS0FBZTtJQUVmLE9BQU8sY0FBYyxDQUNuQixlQUFlOzs7O0lBQ2YsVUFBQyxPQUFtQztRQUNsQyxPQUFPLEtBQUs7YUFDVCxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ1AsT0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUztRQUFqRSxDQUFpRSxFQUNsRTthQUNBLE1BQU07Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sS0FBSyxTQUFTLEVBQXJCLENBQXFCLEVBQUMsQ0FBQztJQUM5QyxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sOEJBQThCOzs7O0FBQUcsVUFDNUMsSUFBWTtJQUVaLE9BQU8sY0FBYyxDQUNuQixlQUFlOzs7O0lBQ2YsVUFBQSxPQUFPLElBQUksT0FBQSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQWxDLENBQWtDLEVBQzlDLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLHlCQUF5Qjs7OztBQUFHLFVBQ3ZDLElBQVk7SUFFWixPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDOzs7O0lBQ3BDLFVBQUEsWUFBWSxJQUFJLE9BQUEsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQWpDLENBQWlDLEVBQ2xELENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLGdDQUFnQzs7OztBQUFHLFVBQzlDLElBQVk7SUFFWixPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDOzs7O0lBQ3BDLFVBQUEsWUFBWSxJQUFJLE9BQUEscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQW5DLENBQW1DLEVBQ3BELENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLGdDQUFnQzs7OztBQUFHLFVBQzlDLElBQVk7SUFFWixPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDOzs7O0lBQ3BDLFVBQUEsWUFBWSxJQUFJLE9BQUEscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQW5DLENBQW1DLEVBQ3BELENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLDhCQUE4Qjs7OztBQUFHLFVBQzVDLElBQVk7SUFFWixPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDOzs7O0lBQ3BDLFVBQUEsWUFBWSxJQUFJLE9BQUEsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQWpDLENBQWlDLEVBQ2xELENBQUM7QUFDSixDQUFDLENBQUE7Ozs7O0FBT0MsVUFBQSxPQUFPO0lBQ0wsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QyxDQUFDOztBQVBILE1BQU0sS0FBTyxrQkFBa0IsR0FHM0IsY0FBYyxDQUNoQixlQUFlLE9BSWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQcm9kdWN0c1N0YXRlLCBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBFbnRpdHlMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBlbnRpdHlTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgbG9hZGVyRXJyb3JTZWxlY3RvcixcbiAgbG9hZGVyTG9hZGluZ1NlbGVjdG9yLFxuICBsb2FkZXJTdWNjZXNzU2VsZWN0b3IsXG4gIGxvYWRlclZhbHVlU2VsZWN0b3IsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldFByb2R1Y3RzU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBFbnRpdHlMb2FkZXJTdGF0ZTxQcm9kdWN0PlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQcm9kdWN0c1N0YXRlLFxuICAoc3RhdGU6IFByb2R1Y3RzU3RhdGUpID0+IHN0YXRlLmRldGFpbHNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RzRmFjdG9yeSA9IChcbiAgY29kZXM6IHN0cmluZ1tdXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIFByb2R1Y3RbXT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UHJvZHVjdFN0YXRlLFxuICAgIChkZXRhaWxzOiBFbnRpdHlMb2FkZXJTdGF0ZTxQcm9kdWN0PikgPT4ge1xuICAgICAgcmV0dXJuIGNvZGVzXG4gICAgICAgIC5tYXAoY29kZSA9PlxuICAgICAgICAgIGRldGFpbHMuZW50aXRpZXNbY29kZV0gPyBkZXRhaWxzLmVudGl0aWVzW2NvZGVdLnZhbHVlIDogdW5kZWZpbmVkXG4gICAgICAgIClcbiAgICAgICAgLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QgIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIExvYWRlclN0YXRlPFByb2R1Y3Q+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcm9kdWN0U3RhdGUsXG4gICAgZGV0YWlscyA9PiBlbnRpdHlTdGF0ZVNlbGVjdG9yKGRldGFpbHMsIGNvZGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0RmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIFByb2R1Y3Q+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShjb2RlKSxcbiAgICBwcm9kdWN0U3RhdGUgPT4gbG9hZGVyVmFsdWVTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IGxvYWRlckxvYWRpbmdTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0U3VjY2Vzc0ZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IGxvYWRlclN1Y2Nlc3NTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0RXJyb3JGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUpLFxuICAgIHByb2R1Y3RTdGF0ZSA9PiBsb2FkZXJFcnJvclNlbGVjdG9yKHByb2R1Y3RTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0Q29kZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFByb2R1Y3QsXG4gIHN0cmluZ1tdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByb2R1Y3RTdGF0ZSxcbiAgZGV0YWlscyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRldGFpbHMuZW50aXRpZXMpO1xuICB9XG4pO1xuIl19