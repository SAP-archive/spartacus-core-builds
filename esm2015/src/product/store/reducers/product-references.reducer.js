/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            return Object.assign({}, state, { list: [...state.list, ...list].reduce((/**
                 * @param {?} productReferences
                 * @param {?} productReference
                 * @return {?}
                 */
                (productReferences, productReference) => {
                    if (!productReferences.some((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    obj => obj.referenceType === productReference.referenceType &&
                        obj.target.code === productReference.target.code))) {
                        productReferences.push(productReference);
                    }
                    return productReferences;
                }), []), productCode });
        }
        case ProductActions.CLEAN_PRODUCT_REFERENCES: {
            return initialState;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJlZmVyZW5jZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUdsRCxNQUFNLE9BQU8sWUFBWSxHQUEyQjtJQUNsRCxXQUFXLEVBQUUsRUFBRTtJQUNmLElBQUksRUFBRSxFQUFFO0NBQ1Q7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQThDO0lBRTlDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOztrQkFDN0MsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVzs7a0JBQ3hDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7WUFFaEMseUJBQ0ssS0FBSyxJQUNSLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU07Ozs7O2dCQUNuQyxDQUNFLGlCQUFxQyxFQUNyQyxnQkFBa0MsRUFDbEMsRUFBRTtvQkFDRixJQUNFLENBQUMsaUJBQWlCLENBQUMsSUFBSTs7OztvQkFDckIsR0FBRyxDQUFDLEVBQUUsQ0FDSixHQUFHLENBQUMsYUFBYSxLQUFLLGdCQUFnQixDQUFDLGFBQWE7d0JBQ3BELEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ25ELEVBQ0Q7d0JBQ0EsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQzFDO29CQUNELE9BQU8saUJBQWlCLENBQUM7Z0JBQzNCLENBQUMsR0FDRCxFQUFFLENBQ0gsRUFDRCxXQUFXLElBQ1g7U0FDSDtRQUVELEtBQUssY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDNUMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sdUJBQXVCOzs7O0FBQUcsQ0FDckMsS0FBNkIsRUFDVCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQTs7QUFDbkMsTUFBTSxPQUFPLDhCQUE4Qjs7OztBQUFHLENBQzVDLEtBQTZCLEVBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSA9IHtcbiAgcHJvZHVjdENvZGU6ICcnLFxuICBsaXN0OiBbXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Qcm9kdWN0UmVmZXJlbmNlc0FjdGlvblxuKTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9SRUZFUkVOQ0VTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RDb2RlID0gYWN0aW9uLnBheWxvYWQucHJvZHVjdENvZGU7XG4gICAgICBjb25zdCBsaXN0ID0gYWN0aW9uLnBheWxvYWQubGlzdDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxpc3Q6IFsuLi5zdGF0ZS5saXN0LCAuLi5saXN0XS5yZWR1Y2UoXG4gICAgICAgICAgKFxuICAgICAgICAgICAgcHJvZHVjdFJlZmVyZW5jZXM6IFByb2R1Y3RSZWZlcmVuY2VbXSxcbiAgICAgICAgICAgIHByb2R1Y3RSZWZlcmVuY2U6IFByb2R1Y3RSZWZlcmVuY2VcbiAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIXByb2R1Y3RSZWZlcmVuY2VzLnNvbWUoXG4gICAgICAgICAgICAgICAgb2JqID0+XG4gICAgICAgICAgICAgICAgICBvYmoucmVmZXJlbmNlVHlwZSA9PT0gcHJvZHVjdFJlZmVyZW5jZS5yZWZlcmVuY2VUeXBlICYmXG4gICAgICAgICAgICAgICAgICBvYmoudGFyZ2V0LmNvZGUgPT09IHByb2R1Y3RSZWZlcmVuY2UudGFyZ2V0LmNvZGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHByb2R1Y3RSZWZlcmVuY2VzLnB1c2gocHJvZHVjdFJlZmVyZW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdFJlZmVyZW5jZXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXVxuICAgICAgICApLFxuICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBQcm9kdWN0QWN0aW9ucy5DTEVBTl9QUk9EVUNUX1JFRkVSRU5DRVM6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFJlZmVyZW5jZUxpc3QgPSAoXG4gIHN0YXRlOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlXG4pOiBQcm9kdWN0UmVmZXJlbmNlW10gPT4gc3RhdGUubGlzdDtcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0UmVmZXJlbmNlUHJvZHVjdENvZGUgPSAoXG4gIHN0YXRlOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlXG4pOiBzdHJpbmcgPT4gc3RhdGUucHJvZHVjdENvZGU7XG4iXX0=