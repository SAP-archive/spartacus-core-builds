/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
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
    function (details) { return StateEntityLoaderSelectors.entityStateSelector(details, code); }));
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
    function (productState) { return StateLoaderSelectors.loaderValueSelector(productState); }));
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
    function (productState) { return StateLoaderSelectors.loaderLoadingSelector(productState); }));
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
    function (productState) { return StateLoaderSelectors.loaderSuccessSelector(productState); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9zZWxlY3RvcnMvcHJvZHVjdC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUM7QUFHcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBT3BELFVBQUMsS0FBb0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYTs7QUFMekMsTUFBTSxLQUFPLGVBQWUsR0FHeEIsY0FBYyxDQUNoQixnQkFBZ0IsT0FFakI7O0FBRUQsTUFBTSxLQUFPLDBCQUEwQjs7OztBQUFHLFVBQ3hDLEtBQWU7SUFFZixPQUFPLGNBQWMsQ0FDbkIsZUFBZTs7OztJQUNmLFVBQUMsT0FBbUM7UUFDbEMsT0FBTyxLQUFLO2FBQ1QsR0FBRzs7OztRQUFDLFVBQUEsSUFBSTtZQUNQLE9BQUEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFBakUsQ0FBaUUsRUFDbEU7YUFDQSxNQUFNOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLEtBQUssU0FBUyxFQUFyQixDQUFxQixFQUFDLENBQUM7SUFDOUMsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLDhCQUE4Qjs7OztBQUFHLFVBQzVDLElBQVk7SUFFWixPQUFPLGNBQWMsQ0FDbkIsZUFBZTs7OztJQUNmLFVBQUEsT0FBTyxJQUFJLE9BQUEsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUE3RCxDQUE2RCxFQUN6RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyx5QkFBeUI7Ozs7QUFBRyxVQUN2QyxJQUFZO0lBRVosT0FBTyxjQUFjLENBQ25CLDhCQUE4QixDQUFDLElBQUksQ0FBQzs7OztJQUNwQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxFQUF0RCxDQUFzRCxFQUN2RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyxnQ0FBZ0M7Ozs7QUFBRyxVQUM5QyxJQUFZO0lBRVosT0FBTyxjQUFjLENBQ25CLDhCQUE4QixDQUFDLElBQUksQ0FBQzs7OztJQUNwQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxFQUF4RCxDQUF3RCxFQUN6RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyxnQ0FBZ0M7Ozs7QUFBRyxVQUM5QyxJQUFZO0lBRVosT0FBTyxjQUFjLENBQ25CLDhCQUE4QixDQUFDLElBQUksQ0FBQzs7OztJQUNwQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxFQUF4RCxDQUF3RCxFQUN6RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyw4QkFBOEI7Ozs7QUFBRyxVQUM1QyxJQUFZO0lBRVosT0FBTyxjQUFjLENBQ25CLDhCQUE4QixDQUFDLElBQUksQ0FBQzs7OztJQUNwQyxVQUFBLFlBQVksSUFBSSxPQUFBLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxFQUF0RCxDQUFzRCxFQUN2RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOzs7OztBQU9DLFVBQUEsT0FBTztJQUNMLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsQ0FBQzs7QUFQSCxNQUFNLEtBQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsZUFBZSxPQUloQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgUHJvZHVjdHNTdGF0ZSwgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFByb2R1Y3QsXG4gIEVudGl0eUxvYWRlclN0YXRlPFByb2R1Y3Q+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByb2R1Y3RzU3RhdGUsXG4gIChzdGF0ZTogUHJvZHVjdHNTdGF0ZSkgPT4gc3RhdGUuZGV0YWlsc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdHNGYWN0b3J5ID0gKFxuICBjb2Rlczogc3RyaW5nW11cbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgUHJvZHVjdFtdPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcm9kdWN0U3RhdGUsXG4gICAgKGRldGFpbHM6IEVudGl0eUxvYWRlclN0YXRlPFByb2R1Y3Q+KSA9PiB7XG4gICAgICByZXR1cm4gY29kZXNcbiAgICAgICAgLm1hcChjb2RlID0+XG4gICAgICAgICAgZGV0YWlscy5lbnRpdGllc1tjb2RlXSA/IGRldGFpbHMuZW50aXRpZXNbY29kZV0udmFsdWUgOiB1bmRlZmluZWRcbiAgICAgICAgKVxuICAgICAgICAuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdCAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgTG9hZGVyU3RhdGU8UHJvZHVjdD4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2R1Y3RTdGF0ZSxcbiAgICBkZXRhaWxzID0+IFN0YXRlRW50aXR5TG9hZGVyU2VsZWN0b3JzLmVudGl0eVN0YXRlU2VsZWN0b3IoZGV0YWlscywgY29kZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgUHJvZHVjdD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUpLFxuICAgIHByb2R1Y3RTdGF0ZSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJWYWx1ZVNlbGVjdG9yKHByb2R1Y3RTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RMb2FkaW5nRmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShjb2RlKSxcbiAgICBwcm9kdWN0U3RhdGUgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHByb2R1Y3RTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RTdWNjZXNzRmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShjb2RlKSxcbiAgICBwcm9kdWN0U3RhdGUgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyU3VjY2Vzc1NlbGVjdG9yKHByb2R1Y3RTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RFcnJvckZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlckVycm9yU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFByb2R1Y3RDb2RlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbiAgc3RyaW5nW11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UHJvZHVjdFN0YXRlLFxuICBkZXRhaWxzID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGV0YWlscy5lbnRpdGllcyk7XG4gIH1cbik7XG4iXX0=