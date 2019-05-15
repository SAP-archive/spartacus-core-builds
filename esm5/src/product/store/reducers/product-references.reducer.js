/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromProductReferences from '../actions/product-references.action';
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
        case fromProductReferences.LOAD_PRODUCT_REFERENCES_SUCCESS: {
            /** @type {?} */
            var productCode = action.payload.productCode;
            /** @type {?} */
            var list = action.payload.list;
            return tslib_1.__assign({}, state, { list: list,
                productCode: productCode });
        }
    }
    return state;
}
/** @type {?} */
export var getProductReferenceList = function (state) { return state.list; };
/** @type {?} */
export var getProductReferenceProductCode = function (state) { return state.productCode; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJlZmVyZW5jZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFHOUUsTUFBTSxLQUFPLFlBQVksR0FBMkI7SUFDbEQsV0FBVyxFQUFFLEVBQUU7SUFDZixJQUFJLEVBQUUsRUFBRTtDQUNUOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUFxRDtJQURyRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxxQkFBcUIsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOztnQkFDcEQsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVzs7Z0JBQ3hDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7WUFFaEMsNEJBQ0ssS0FBSyxJQUNSLElBQUksTUFBQTtnQkFDSixXQUFXLGFBQUEsSUFDWDtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxLQUFPLHVCQUF1QixHQUFHLFVBQ3JDLEtBQTZCLElBQ04sT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVU7O0FBQ25DLE1BQU0sS0FBTyw4QkFBOEIsR0FBRyxVQUM1QyxLQUE2QixJQUNsQixPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbVByb2R1Y3RSZWZlcmVuY2VzIGZyb20gJy4uL2FjdGlvbnMvcHJvZHVjdC1yZWZlcmVuY2VzLmFjdGlvbic7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlIH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUgPSB7XG4gIHByb2R1Y3RDb2RlOiAnJyxcbiAgbGlzdDogW10sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbVByb2R1Y3RSZWZlcmVuY2VzLlByb2R1Y3RSZWZlcmVuY2VzQWN0aW9uXG4pOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbVByb2R1Y3RSZWZlcmVuY2VzLkxPQURfUFJPRFVDVF9SRUZFUkVOQ0VTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RDb2RlID0gYWN0aW9uLnBheWxvYWQucHJvZHVjdENvZGU7XG4gICAgICBjb25zdCBsaXN0ID0gYWN0aW9uLnBheWxvYWQubGlzdDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxpc3QsXG4gICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0UmVmZXJlbmNlTGlzdCA9IChcbiAgc3RhdGU6IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGVcbik6IFByb2R1Y3RSZWZlcmVuY2VbXSA9PiBzdGF0ZS5saXN0O1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RSZWZlcmVuY2VQcm9kdWN0Q29kZSA9IChcbiAgc3RhdGU6IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGVcbik6IHN0cmluZyA9PiBzdGF0ZS5wcm9kdWN0Q29kZTtcbiJdfQ==