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
            return tslib_1.__assign({}, state, { list: tslib_1.__spread(state.list, list).reduce((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJlZmVyZW5jZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHbEQsTUFBTSxLQUFPLFlBQVksR0FBMkI7SUFDbEQsV0FBVyxFQUFFLEVBQUU7SUFDZixJQUFJLEVBQUUsRUFBRTtDQUNUOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUE4QztJQUQ5QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7Z0JBQzdDLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7O2dCQUN4QyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBRWhDLDRCQUNLLEtBQUssSUFDUixJQUFJLEVBQUUsaUJBQUksS0FBSyxDQUFDLElBQUksRUFBSyxJQUFJLEVBQUUsTUFBTTs7Ozs7Z0JBQ25DLFVBQ0UsaUJBQXFDLEVBQ3JDLGdCQUFrQztvQkFFbEMsSUFDRSxDQUFDLGlCQUFpQixDQUFDLElBQUk7Ozs7b0JBQ3JCLFVBQUEsR0FBRzt3QkFDRCxPQUFBLEdBQUcsQ0FBQyxhQUFhLEtBQUssZ0JBQWdCLENBQUMsYUFBYTs0QkFDcEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUk7b0JBRGhELENBQ2dELEVBQ25ELEVBQ0Q7d0JBQ0EsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQzFDO29CQUNELE9BQU8saUJBQWlCLENBQUM7Z0JBQzNCLENBQUMsR0FDRCxFQUFFLENBQ0gsRUFDRCxXQUFXLGFBQUEsSUFDWDtTQUNIO1FBRUQsS0FBSyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUM1QyxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sS0FBTyx1QkFBdUI7Ozs7QUFBRyxVQUNyQyxLQUE2QixJQUNOLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUE7O0FBQ25DLE1BQU0sS0FBTyw4QkFBOEI7Ozs7QUFBRyxVQUM1QyxLQUE2QixJQUNsQixPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlID0ge1xuICBwcm9kdWN0Q29kZTogJycsXG4gIGxpc3Q6IFtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFByb2R1Y3RBY3Rpb25zLlByb2R1Y3RSZWZlcmVuY2VzQWN0aW9uXG4pOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcHJvZHVjdENvZGUgPSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Q29kZTtcbiAgICAgIGNvbnN0IGxpc3QgPSBhY3Rpb24ucGF5bG9hZC5saXN0O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbGlzdDogWy4uLnN0YXRlLmxpc3QsIC4uLmxpc3RdLnJlZHVjZShcbiAgICAgICAgICAoXG4gICAgICAgICAgICBwcm9kdWN0UmVmZXJlbmNlczogUHJvZHVjdFJlZmVyZW5jZVtdLFxuICAgICAgICAgICAgcHJvZHVjdFJlZmVyZW5jZTogUHJvZHVjdFJlZmVyZW5jZVxuICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhcHJvZHVjdFJlZmVyZW5jZXMuc29tZShcbiAgICAgICAgICAgICAgICBvYmogPT5cbiAgICAgICAgICAgICAgICAgIG9iai5yZWZlcmVuY2VUeXBlID09PSBwcm9kdWN0UmVmZXJlbmNlLnJlZmVyZW5jZVR5cGUgJiZcbiAgICAgICAgICAgICAgICAgIG9iai50YXJnZXQuY29kZSA9PT0gcHJvZHVjdFJlZmVyZW5jZS50YXJnZXQuY29kZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcHJvZHVjdFJlZmVyZW5jZXMucHVzaChwcm9kdWN0UmVmZXJlbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0UmVmZXJlbmNlcztcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtdXG4gICAgICAgICksXG4gICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFByb2R1Y3RBY3Rpb25zLkNMRUFOX1BST0RVQ1RfUkVGRVJFTkNFUzoge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0UmVmZXJlbmNlTGlzdCA9IChcbiAgc3RhdGU6IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGVcbik6IFByb2R1Y3RSZWZlcmVuY2VbXSA9PiBzdGF0ZS5saXN0O1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RSZWZlcmVuY2VQcm9kdWN0Q29kZSA9IChcbiAgc3RhdGU6IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGVcbik6IHN0cmluZyA9PiBzdGF0ZS5wcm9kdWN0Q29kZTtcbiJdfQ==