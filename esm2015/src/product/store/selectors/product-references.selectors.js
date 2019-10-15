/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getProductsState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.references;
/** @type {?} */
export const getProductReferencesState = createSelector(getProductsState, (ɵ0));
/** @type {?} */
export const getSelectedProductReferencesFactory = (/**
 * @param {?} productCode
 * @param {?} referenceType
 * @return {?}
 */
(productCode, referenceType) => {
    return createSelector(getProductReferencesState, (/**
     * @param {?} referenceTypeData
     * @return {?}
     */
    referenceTypeData => {
        if (referenceTypeData.productCode === productCode) {
            if (!!referenceTypeData.list) {
                if (referenceType) {
                    return referenceTypeData.list.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => item.referenceType === referenceType));
                }
                return referenceTypeData.list;
            }
            else {
                return [];
            }
        }
    }));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3NlbGVjdG9ycy9wcm9kdWN0LXJlZmVyZW5jZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPcEQsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVTs7QUFMNUMsTUFBTSxPQUFPLHlCQUF5QixHQUdsQyxjQUFjLENBQ2hCLGdCQUFnQixPQUVqQjs7QUFFRCxNQUFNLE9BQU8sbUNBQW1DOzs7OztBQUFHLENBQ2pELFdBQW1CLEVBQ25CLGFBQXFCLEVBQ21DLEVBQUU7SUFDMUQsT0FBTyxjQUFjLENBQ25CLHlCQUF5Qjs7OztJQUN6QixpQkFBaUIsQ0FBQyxFQUFFO1FBQ2xCLElBQUksaUJBQWlCLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRTtZQUNqRCxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUU7Z0JBQzVCLElBQUksYUFBYSxFQUFFO29CQUNqQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNOzs7O29CQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssYUFBYSxFQUM3QyxDQUFDO2lCQUNIO2dCQUVELE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDO2FBQy9CO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQge1xuICBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlLFxuICBQcm9kdWN0c1N0YXRlLFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxufSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IGdldFByb2R1Y3RzU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFJlZmVyZW5jZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbiAgUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQcm9kdWN0c1N0YXRlLFxuICAoc3RhdGU6IFByb2R1Y3RzU3RhdGUpID0+IHN0YXRlLnJlZmVyZW5jZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RSZWZlcmVuY2VzRmFjdG9yeSA9IChcbiAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgcmVmZXJlbmNlVHlwZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIFByb2R1Y3RSZWZlcmVuY2VbXT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSxcbiAgICByZWZlcmVuY2VUeXBlRGF0YSA9PiB7XG4gICAgICBpZiAocmVmZXJlbmNlVHlwZURhdGEucHJvZHVjdENvZGUgPT09IHByb2R1Y3RDb2RlKSB7XG4gICAgICAgIGlmICghIXJlZmVyZW5jZVR5cGVEYXRhLmxpc3QpIHtcbiAgICAgICAgICBpZiAocmVmZXJlbmNlVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZVR5cGVEYXRhLmxpc3QuZmlsdGVyKFxuICAgICAgICAgICAgICBpdGVtID0+IGl0ZW0ucmVmZXJlbmNlVHlwZSA9PT0gcmVmZXJlbmNlVHlwZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlVHlwZURhdGEubGlzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuIl19