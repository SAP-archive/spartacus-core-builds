/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getProductsState } from './feature.selector';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.references; };
/** @type {?} */
export var getProductReferencesState = createSelector(getProductsState, (ɵ0));
/** @type {?} */
export var getSelectedProductReferencesFactory = (/**
 * @param {?} productCode
 * @return {?}
 */
function (productCode) {
    return createSelector(getProductReferencesState, (/**
     * @param {?} referenceTypeData
     * @return {?}
     */
    function (referenceTypeData) {
        if (referenceTypeData.productCode === productCode) {
            return !!referenceTypeData.list ? referenceTypeData.list : [];
        }
    }));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3NlbGVjdG9ycy9wcm9kdWN0LXJlZmVyZW5jZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPcEQsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLFVBQVUsRUFBaEIsQ0FBZ0I7O0FBTDVDLE1BQU0sS0FBTyx5QkFBeUIsR0FHbEMsY0FBYyxDQUNoQixnQkFBZ0IsT0FFakI7O0FBRUQsTUFBTSxLQUFPLG1DQUFtQzs7OztBQUFHLFVBQ2pELFdBQW1CO0lBRW5CLE9BQU8sY0FBYyxDQUNuQix5QkFBeUI7Ozs7SUFDekIsVUFBQSxpQkFBaUI7UUFDZixJQUFJLGlCQUFpQixDQUFDLFdBQVcsS0FBSyxXQUFXLEVBQUU7WUFDakQsT0FBTyxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUMvRDtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQge1xuICBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlLFxuICBQcm9kdWN0c1N0YXRlLFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxufSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IGdldFByb2R1Y3RzU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFJlZmVyZW5jZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbiAgUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQcm9kdWN0c1N0YXRlLFxuICAoc3RhdGU6IFByb2R1Y3RzU3RhdGUpID0+IHN0YXRlLnJlZmVyZW5jZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RSZWZlcmVuY2VzRmFjdG9yeSA9IChcbiAgcHJvZHVjdENvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBQcm9kdWN0UmVmZXJlbmNlW10+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUsXG4gICAgcmVmZXJlbmNlVHlwZURhdGEgPT4ge1xuICAgICAgaWYgKHJlZmVyZW5jZVR5cGVEYXRhLnByb2R1Y3RDb2RlID09PSBwcm9kdWN0Q29kZSkge1xuICAgICAgICByZXR1cm4gISFyZWZlcmVuY2VUeXBlRGF0YS5saXN0ID8gcmVmZXJlbmNlVHlwZURhdGEubGlzdCA6IFtdO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=