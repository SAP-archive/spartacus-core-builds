/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromProductReviews from './../actions/product-reviews.action';
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
        case fromProductReviews.LOAD_PRODUCT_REVIEWS_SUCCESS: {
            /** @type {?} */
            var productCode = action.payload.productCode;
            /** @type {?} */
            var list = action.payload.list;
            return tslib_1.__assign({}, state, { productCode: productCode,
                list: list });
        }
    }
    return state;
}
/** @type {?} */
export var getReviewList = (/**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return state.list;
});
/** @type {?} */
export var getReviewProductCode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return state.productCode;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJldmlld3MucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxrQkFBa0IsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFHMUUsTUFBTSxLQUFPLFlBQVksR0FBd0I7SUFDL0MsV0FBVyxFQUFFLEVBQUU7SUFDZixJQUFJLEVBQUUsRUFBRTtDQUNUOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUErQztJQUQvQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztnQkFDOUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVzs7Z0JBQ3hDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7WUFFaEMsNEJBQ0ssS0FBSyxJQUNSLFdBQVcsYUFBQTtnQkFDWCxJQUFJLE1BQUEsSUFDSjtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxLQUFPLGFBQWE7Ozs7QUFBRyxVQUFDLEtBQTBCO0lBQ3RELE9BQUEsS0FBSyxDQUFDLElBQUk7QUFBVixDQUFVLENBQUE7O0FBQ1osTUFBTSxLQUFPLG9CQUFvQjs7OztBQUFHLFVBQUMsS0FBMEI7SUFDN0QsT0FBQSxLQUFLLENBQUMsV0FBVztBQUFqQixDQUFpQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFJldmlld3NTdGF0ZSB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVByb2R1Y3RSZXZpZXdzIGZyb20gJy4vLi4vYWN0aW9ucy9wcm9kdWN0LXJldmlld3MuYWN0aW9uJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0UmV2aWV3c1N0YXRlID0ge1xuICBwcm9kdWN0Q29kZTogJycsXG4gIGxpc3Q6IFtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21Qcm9kdWN0UmV2aWV3cy5Qcm9kdWN0UmV2aWV3c0FjdGlvblxuKTogUHJvZHVjdFJldmlld3NTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21Qcm9kdWN0UmV2aWV3cy5MT0FEX1BST0RVQ1RfUkVWSUVXU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0Q29kZSA9IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RDb2RlO1xuICAgICAgY29uc3QgbGlzdCA9IGFjdGlvbi5wYXlsb2FkLmxpc3Q7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgbGlzdCxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UmV2aWV3TGlzdCA9IChzdGF0ZTogUHJvZHVjdFJldmlld3NTdGF0ZSk6IFJldmlld1tdID0+XG4gIHN0YXRlLmxpc3Q7XG5leHBvcnQgY29uc3QgZ2V0UmV2aWV3UHJvZHVjdENvZGUgPSAoc3RhdGU6IFByb2R1Y3RSZXZpZXdzU3RhdGUpOiBzdHJpbmcgPT5cbiAgc3RhdGUucHJvZHVjdENvZGU7XG4iXX0=