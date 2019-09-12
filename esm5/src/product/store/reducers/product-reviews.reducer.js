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
        case ProductActions.LOAD_PRODUCT_REVIEWS_SUCCESS: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJldmlld3MucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHbEQsTUFBTSxLQUFPLFlBQVksR0FBd0I7SUFDL0MsV0FBVyxFQUFFLEVBQUU7SUFDZixJQUFJLEVBQUUsRUFBRTtDQUNUOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUEyQztJQUQzQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7Z0JBQzFDLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7O2dCQUN4QyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBRWhDLDRCQUNLLEtBQUssSUFDUixXQUFXLGFBQUE7Z0JBQ1gsSUFBSSxNQUFBLElBQ0o7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sS0FBTyxhQUFhOzs7O0FBQUcsVUFBQyxLQUEwQjtJQUN0RCxPQUFBLEtBQUssQ0FBQyxJQUFJO0FBQVYsQ0FBVSxDQUFBOztBQUNaLE1BQU0sS0FBTyxvQkFBb0I7Ozs7QUFBRyxVQUFDLEtBQTBCO0lBQzdELE9BQUEsS0FBSyxDQUFDLFdBQVc7QUFBakIsQ0FBaUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzU3RhdGUgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdFJldmlld3NTdGF0ZSA9IHtcbiAgcHJvZHVjdENvZGU6ICcnLFxuICBsaXN0OiBbXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Qcm9kdWN0UmV2aWV3c0FjdGlvblxuKTogUHJvZHVjdFJldmlld3NTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9SRVZJRVdTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RDb2RlID0gYWN0aW9uLnBheWxvYWQucHJvZHVjdENvZGU7XG4gICAgICBjb25zdCBsaXN0ID0gYWN0aW9uLnBheWxvYWQubGlzdDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICBsaXN0LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZXZpZXdMaXN0ID0gKHN0YXRlOiBQcm9kdWN0UmV2aWV3c1N0YXRlKTogUmV2aWV3W10gPT5cbiAgc3RhdGUubGlzdDtcbmV4cG9ydCBjb25zdCBnZXRSZXZpZXdQcm9kdWN0Q29kZSA9IChzdGF0ZTogUHJvZHVjdFJldmlld3NTdGF0ZSk6IHN0cmluZyA9PlxuICBzdGF0ZS5wcm9kdWN0Q29kZTtcbiJdfQ==