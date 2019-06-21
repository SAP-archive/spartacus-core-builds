/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromProductReferences from '../actions/product-references.action';
/** @type {?} */
export const initialState = {
    productCode: '',
    list: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromProductReferences.LOAD_PRODUCT_REFERENCES_SUCCESS: {
            /** @type {?} */
            const productCode = action.payload.productCode;
            /** @type {?} */
            const list = action.payload.list;
            return Object.assign({}, state, { list,
                productCode });
        }
    }
    return state;
}
/** @type {?} */
export const getProductReferenceList = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.list);
/** @type {?} */
export const getProductReferenceProductCode = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.productCode);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJlZmVyZW5jZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxLQUFLLHFCQUFxQixNQUFNLHNDQUFzQyxDQUFDOztBQUc5RSxNQUFNLE9BQU8sWUFBWSxHQUEyQjtJQUNsRCxXQUFXLEVBQUUsRUFBRTtJQUNmLElBQUksRUFBRSxFQUFFO0NBQ1Q7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQXFEO0lBRXJELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHFCQUFxQixDQUFDLCtCQUErQixDQUFDLENBQUM7O2tCQUNwRCxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXOztrQkFDeEMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUVoQyx5QkFDSyxLQUFLLElBQ1IsSUFBSTtnQkFDSixXQUFXLElBQ1g7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sT0FBTyx1QkFBdUI7Ozs7QUFBRyxDQUNyQyxLQUE2QixFQUNULEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBOztBQUNuQyxNQUFNLE9BQU8sOEJBQThCOzs7O0FBQUcsQ0FDNUMsS0FBNkIsRUFDckIsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tUHJvZHVjdFJlZmVyZW5jZXMgZnJvbSAnLi4vYWN0aW9ucy9wcm9kdWN0LXJlZmVyZW5jZXMuYWN0aW9uJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSA9IHtcbiAgcHJvZHVjdENvZGU6ICcnLFxuICBsaXN0OiBbXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tUHJvZHVjdFJlZmVyZW5jZXMuUHJvZHVjdFJlZmVyZW5jZXNBY3Rpb25cbik6IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tUHJvZHVjdFJlZmVyZW5jZXMuTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcHJvZHVjdENvZGUgPSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Q29kZTtcbiAgICAgIGNvbnN0IGxpc3QgPSBhY3Rpb24ucGF5bG9hZC5saXN0O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbGlzdCxcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RSZWZlcmVuY2VMaXN0ID0gKFxuICBzdGF0ZTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZVxuKTogUHJvZHVjdFJlZmVyZW5jZVtdID0+IHN0YXRlLmxpc3Q7XG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFJlZmVyZW5jZVByb2R1Y3RDb2RlID0gKFxuICBzdGF0ZTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZVxuKTogc3RyaW5nID0+IHN0YXRlLnByb2R1Y3RDb2RlO1xuIl19