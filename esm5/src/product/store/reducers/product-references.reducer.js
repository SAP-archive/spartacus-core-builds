/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProductActions } from '../actions/index';
/** @type {?} */
export var initialState = {
    productCode: '',
    list: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ProductActions.LOAD_PRODUCT_REFERENCES_SUCCESS: {
            /** @type {?} */
            var productCode = action.payload.productCode;
            /** @type {?} */
            var list = action.payload.list;
            return tslib_1.__assign({}, state, { list: tslib_1.__spread(state.list, (list ? list : [])).reduce((/**
                 * @param {?} productReferences
                 * @param {?} productReference
                 * @return {?}
                 */
                function (productReferences, productReference) {
                    if (!productReferences.some((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        return obj.referenceType === productReference.referenceType &&
                            obj.target.code === productReference.target.code;
                    }))) {
                        productReferences.push(productReference);
                    }
                    return productReferences;
                }), []), productCode: productCode });
        }
        case ProductActions.CLEAN_PRODUCT_REFERENCES: {
            return initialState;
        }
    }
    return state;
}
/** @type {?} */
export var getProductReferenceList = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.list; });
/** @type {?} */
export var getProductReferenceProductCode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.productCode; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJlZmVyZW5jZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHbEQsTUFBTSxLQUFPLFlBQVksR0FBMkI7SUFDbEQsV0FBVyxFQUFFLEVBQUU7SUFDZixJQUFJLEVBQUUsRUFBRTtDQUNUOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUE4QztJQUQ5QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7Z0JBQzdDLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7O2dCQUN4QyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBRWhDLDRCQUNLLEtBQUssSUFDUixJQUFJLEVBQUUsaUJBQUksS0FBSyxDQUFDLElBQUksRUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNOzs7OztnQkFDakQsVUFDRSxpQkFBcUMsRUFDckMsZ0JBQWtDO29CQUVsQyxJQUNFLENBQUMsaUJBQWlCLENBQUMsSUFBSTs7OztvQkFDckIsVUFBQSxHQUFHO3dCQUNELE9BQUEsR0FBRyxDQUFDLGFBQWEsS0FBSyxnQkFBZ0IsQ0FBQyxhQUFhOzRCQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSTtvQkFEaEQsQ0FDZ0QsRUFDbkQsRUFDRDt3QkFDQSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQkFDMUM7b0JBQ0QsT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsQ0FBQyxHQUNELEVBQUUsQ0FDSCxFQUNELFdBQVcsYUFBQSxJQUNYO1NBQ0g7UUFFRCxLQUFLLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxLQUFPLHVCQUF1Qjs7OztBQUFHLFVBQ3JDLEtBQTZCLElBQ04sT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQTs7QUFDbkMsTUFBTSxLQUFPLDhCQUE4Qjs7OztBQUFHLFVBQzVDLEtBQTZCLElBQ2xCLE9BQUEsS0FBSyxDQUFDLFdBQVcsRUFBakIsQ0FBaUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlIH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUgPSB7XG4gIHByb2R1Y3RDb2RlOiAnJyxcbiAgbGlzdDogW10sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuUHJvZHVjdFJlZmVyZW5jZXNBY3Rpb25cbik6IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfUkVGRVJFTkNFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0Q29kZSA9IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RDb2RlO1xuICAgICAgY29uc3QgbGlzdCA9IGFjdGlvbi5wYXlsb2FkLmxpc3Q7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsaXN0OiBbLi4uc3RhdGUubGlzdCwgLi4uKGxpc3QgPyBsaXN0IDogW10pXS5yZWR1Y2UoXG4gICAgICAgICAgKFxuICAgICAgICAgICAgcHJvZHVjdFJlZmVyZW5jZXM6IFByb2R1Y3RSZWZlcmVuY2VbXSxcbiAgICAgICAgICAgIHByb2R1Y3RSZWZlcmVuY2U6IFByb2R1Y3RSZWZlcmVuY2VcbiAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIXByb2R1Y3RSZWZlcmVuY2VzLnNvbWUoXG4gICAgICAgICAgICAgICAgb2JqID0+XG4gICAgICAgICAgICAgICAgICBvYmoucmVmZXJlbmNlVHlwZSA9PT0gcHJvZHVjdFJlZmVyZW5jZS5yZWZlcmVuY2VUeXBlICYmXG4gICAgICAgICAgICAgICAgICBvYmoudGFyZ2V0LmNvZGUgPT09IHByb2R1Y3RSZWZlcmVuY2UudGFyZ2V0LmNvZGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHByb2R1Y3RSZWZlcmVuY2VzLnB1c2gocHJvZHVjdFJlZmVyZW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdFJlZmVyZW5jZXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXVxuICAgICAgICApLFxuICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBQcm9kdWN0QWN0aW9ucy5DTEVBTl9QUk9EVUNUX1JFRkVSRU5DRVM6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFJlZmVyZW5jZUxpc3QgPSAoXG4gIHN0YXRlOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlXG4pOiBQcm9kdWN0UmVmZXJlbmNlW10gPT4gc3RhdGUubGlzdDtcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0UmVmZXJlbmNlUHJvZHVjdENvZGUgPSAoXG4gIHN0YXRlOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlXG4pOiBzdHJpbmcgPT4gc3RhdGUucHJvZHVjdENvZGU7XG4iXX0=