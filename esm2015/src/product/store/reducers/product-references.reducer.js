/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ProductActions } from '../actions/index';
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
        case ProductActions.LOAD_PRODUCT_REFERENCES_SUCCESS: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJlZmVyZW5jZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUdsRCxNQUFNLE9BQU8sWUFBWSxHQUEyQjtJQUNsRCxXQUFXLEVBQUUsRUFBRTtJQUNmLElBQUksRUFBRSxFQUFFO0NBQ1Q7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQThDO0lBRTlDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOztrQkFDN0MsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVzs7a0JBQ3hDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7WUFFaEMseUJBQ0ssS0FBSyxJQUNSLElBQUk7Z0JBQ0osV0FBVyxJQUNYO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sdUJBQXVCOzs7O0FBQUcsQ0FDckMsS0FBNkIsRUFDVCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQTs7QUFDbkMsTUFBTSxPQUFPLDhCQUE4Qjs7OztBQUFHLENBQzVDLEtBQTZCLEVBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSA9IHtcbiAgcHJvZHVjdENvZGU6ICcnLFxuICBsaXN0OiBbXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Qcm9kdWN0UmVmZXJlbmNlc0FjdGlvblxuKTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9SRUZFUkVOQ0VTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RDb2RlID0gYWN0aW9uLnBheWxvYWQucHJvZHVjdENvZGU7XG4gICAgICBjb25zdCBsaXN0ID0gYWN0aW9uLnBheWxvYWQubGlzdDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxpc3QsXG4gICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0UmVmZXJlbmNlTGlzdCA9IChcbiAgc3RhdGU6IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGVcbik6IFByb2R1Y3RSZWZlcmVuY2VbXSA9PiBzdGF0ZS5saXN0O1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RSZWZlcmVuY2VQcm9kdWN0Q29kZSA9IChcbiAgc3RhdGU6IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGVcbik6IHN0cmluZyA9PiBzdGF0ZS5wcm9kdWN0Q29kZTtcbiJdfQ==