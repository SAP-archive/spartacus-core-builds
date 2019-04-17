/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromProductReviews from './../actions/product-reviews.action';
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
        case fromProductReviews.LOAD_PRODUCT_REVIEWS_SUCCESS: {
            /** @type {?} */
            const productCode = action.payload.productCode;
            /** @type {?} */
            const list = action.payload.list;
            return Object.assign({}, state, { productCode,
                list });
        }
    }
    return state;
}
/** @type {?} */
export const getReviewList = (state) => state.list;
/** @type {?} */
export const getReviewProductCode = (state) => state.productCode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJldmlld3MucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxLQUFLLGtCQUFrQixNQUFNLHFDQUFxQyxDQUFDOztBQUcxRSxNQUFNLE9BQU8sWUFBWSxHQUF3QjtJQUMvQyxXQUFXLEVBQUUsRUFBRTtJQUNmLElBQUksRUFBRSxFQUFFO0NBQ1Q7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQStDO0lBRS9DLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGtCQUFrQixDQUFDLDRCQUE0QixDQUFDLENBQUM7O2tCQUM5QyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXOztrQkFDeEMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUVoQyx5QkFDSyxLQUFLLElBQ1IsV0FBVztnQkFDWCxJQUFJLElBQ0o7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sT0FBTyxhQUFhLEdBQUcsQ0FBQyxLQUEwQixFQUFZLEVBQUUsQ0FDcEUsS0FBSyxDQUFDLElBQUk7O0FBQ1osTUFBTSxPQUFPLG9CQUFvQixHQUFHLENBQUMsS0FBMEIsRUFBVSxFQUFFLENBQ3pFLEtBQUssQ0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFJldmlld3NTdGF0ZSB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVByb2R1Y3RSZXZpZXdzIGZyb20gJy4vLi4vYWN0aW9ucy9wcm9kdWN0LXJldmlld3MuYWN0aW9uJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdFJldmlld3NTdGF0ZSA9IHtcbiAgcHJvZHVjdENvZGU6ICcnLFxuICBsaXN0OiBbXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tUHJvZHVjdFJldmlld3MuUHJvZHVjdFJldmlld3NBY3Rpb25cbik6IFByb2R1Y3RSZXZpZXdzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tUHJvZHVjdFJldmlld3MuTE9BRF9QUk9EVUNUX1JFVklFV1NfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcHJvZHVjdENvZGUgPSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Q29kZTtcbiAgICAgIGNvbnN0IGxpc3QgPSBhY3Rpb24ucGF5bG9hZC5saXN0O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgIGxpc3QsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJldmlld0xpc3QgPSAoc3RhdGU6IFByb2R1Y3RSZXZpZXdzU3RhdGUpOiBSZXZpZXdbXSA9PlxuICBzdGF0ZS5saXN0O1xuZXhwb3J0IGNvbnN0IGdldFJldmlld1Byb2R1Y3RDb2RlID0gKHN0YXRlOiBQcm9kdWN0UmV2aWV3c1N0YXRlKTogc3RyaW5nID0+XG4gIHN0YXRlLnByb2R1Y3RDb2RlO1xuIl19