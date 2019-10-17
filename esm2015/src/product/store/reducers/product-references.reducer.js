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
            return Object.assign({}, state, { list: [...state.list, ...(list ? list : [])].reduce((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJlZmVyZW5jZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUdsRCxNQUFNLE9BQU8sWUFBWSxHQUEyQjtJQUNsRCxXQUFXLEVBQUUsRUFBRTtJQUNmLElBQUksRUFBRSxFQUFFO0NBQ1Q7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQThDO0lBRTlDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOztrQkFDN0MsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVzs7a0JBQ3hDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7WUFFaEMseUJBQ0ssS0FBSyxJQUNSLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTTs7Ozs7Z0JBQ2pELENBQ0UsaUJBQXFDLEVBQ3JDLGdCQUFrQyxFQUNsQyxFQUFFO29CQUNGLElBQ0UsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJOzs7O29CQUNyQixHQUFHLENBQUMsRUFBRSxDQUNKLEdBQUcsQ0FBQyxhQUFhLEtBQUssZ0JBQWdCLENBQUMsYUFBYTt3QkFDcEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksRUFDbkQsRUFDRDt3QkFDQSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQkFDMUM7b0JBQ0QsT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsQ0FBQyxHQUNELEVBQUUsQ0FDSCxFQUNELFdBQVcsSUFDWDtTQUNIO1FBRUQsS0FBSyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUM1QyxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sT0FBTyx1QkFBdUI7Ozs7QUFBRyxDQUNyQyxLQUE2QixFQUNULEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBOztBQUNuQyxNQUFNLE9BQU8sOEJBQThCOzs7O0FBQUcsQ0FDNUMsS0FBNkIsRUFDckIsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlID0ge1xuICBwcm9kdWN0Q29kZTogJycsXG4gIGxpc3Q6IFtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFByb2R1Y3RBY3Rpb25zLlByb2R1Y3RSZWZlcmVuY2VzQWN0aW9uXG4pOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcHJvZHVjdENvZGUgPSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Q29kZTtcbiAgICAgIGNvbnN0IGxpc3QgPSBhY3Rpb24ucGF5bG9hZC5saXN0O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbGlzdDogWy4uLnN0YXRlLmxpc3QsIC4uLihsaXN0ID8gbGlzdCA6IFtdKV0ucmVkdWNlKFxuICAgICAgICAgIChcbiAgICAgICAgICAgIHByb2R1Y3RSZWZlcmVuY2VzOiBQcm9kdWN0UmVmZXJlbmNlW10sXG4gICAgICAgICAgICBwcm9kdWN0UmVmZXJlbmNlOiBQcm9kdWN0UmVmZXJlbmNlXG4gICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICFwcm9kdWN0UmVmZXJlbmNlcy5zb21lKFxuICAgICAgICAgICAgICAgIG9iaiA9PlxuICAgICAgICAgICAgICAgICAgb2JqLnJlZmVyZW5jZVR5cGUgPT09IHByb2R1Y3RSZWZlcmVuY2UucmVmZXJlbmNlVHlwZSAmJlxuICAgICAgICAgICAgICAgICAgb2JqLnRhcmdldC5jb2RlID09PSBwcm9kdWN0UmVmZXJlbmNlLnRhcmdldC5jb2RlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBwcm9kdWN0UmVmZXJlbmNlcy5wdXNoKHByb2R1Y3RSZWZlcmVuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RSZWZlcmVuY2VzO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW11cbiAgICAgICAgKSxcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgUHJvZHVjdEFjdGlvbnMuQ0xFQU5fUFJPRFVDVF9SRUZFUkVOQ0VTOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RSZWZlcmVuY2VMaXN0ID0gKFxuICBzdGF0ZTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZVxuKTogUHJvZHVjdFJlZmVyZW5jZVtdID0+IHN0YXRlLmxpc3Q7XG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFJlZmVyZW5jZVByb2R1Y3RDb2RlID0gKFxuICBzdGF0ZTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZVxuKTogc3RyaW5nID0+IHN0YXRlLnByb2R1Y3RDb2RlO1xuIl19