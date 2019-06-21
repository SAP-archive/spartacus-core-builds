/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJlZmVyZW5jZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFHOUUsTUFBTSxLQUFPLFlBQVksR0FBMkI7SUFDbEQsV0FBVyxFQUFFLEVBQUU7SUFDZixJQUFJLEVBQUUsRUFBRTtDQUNUOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUFxRDtJQURyRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxxQkFBcUIsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOztnQkFDcEQsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVzs7Z0JBQ3hDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7WUFFaEMsNEJBQ0ssS0FBSyxJQUNSLElBQUksTUFBQTtnQkFDSixXQUFXLGFBQUEsSUFDWDtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxLQUFPLHVCQUF1Qjs7OztBQUFHLFVBQ3JDLEtBQTZCLElBQ04sT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQTs7QUFDbkMsTUFBTSxLQUFPLDhCQUE4Qjs7OztBQUFHLFVBQzVDLEtBQTZCLElBQ2xCLE9BQUEsS0FBSyxDQUFDLFdBQVcsRUFBakIsQ0FBaUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCAqIGFzIGZyb21Qcm9kdWN0UmVmZXJlbmNlcyBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3QtcmVmZXJlbmNlcy5hY3Rpb24nO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlID0ge1xuICBwcm9kdWN0Q29kZTogJycsXG4gIGxpc3Q6IFtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21Qcm9kdWN0UmVmZXJlbmNlcy5Qcm9kdWN0UmVmZXJlbmNlc0FjdGlvblxuKTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21Qcm9kdWN0UmVmZXJlbmNlcy5MT0FEX1BST0RVQ1RfUkVGRVJFTkNFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0Q29kZSA9IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RDb2RlO1xuICAgICAgY29uc3QgbGlzdCA9IGFjdGlvbi5wYXlsb2FkLmxpc3Q7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsaXN0LFxuICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFJlZmVyZW5jZUxpc3QgPSAoXG4gIHN0YXRlOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlXG4pOiBQcm9kdWN0UmVmZXJlbmNlW10gPT4gc3RhdGUubGlzdDtcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0UmVmZXJlbmNlUHJvZHVjdENvZGUgPSAoXG4gIHN0YXRlOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlXG4pOiBzdHJpbmcgPT4gc3RhdGUucHJvZHVjdENvZGU7XG4iXX0=