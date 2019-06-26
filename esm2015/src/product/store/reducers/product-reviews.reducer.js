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
        case ProductActions.LOAD_PRODUCT_REVIEWS_SUCCESS: {
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
export const getReviewList = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.list);
/** @type {?} */
export const getReviewProductCode = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.productCode);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJldmlld3MucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUdsRCxNQUFNLE9BQU8sWUFBWSxHQUF3QjtJQUMvQyxXQUFXLEVBQUUsRUFBRTtJQUNmLElBQUksRUFBRSxFQUFFO0NBQ1Q7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQTJDO0lBRTNDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztrQkFDMUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVzs7a0JBQ3hDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7WUFFaEMseUJBQ0ssS0FBSyxJQUNSLFdBQVc7Z0JBQ1gsSUFBSSxJQUNKO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sYUFBYTs7OztBQUFHLENBQUMsS0FBMEIsRUFBWSxFQUFFLENBQ3BFLEtBQUssQ0FBQyxJQUFJLENBQUE7O0FBQ1osTUFBTSxPQUFPLG9CQUFvQjs7OztBQUFHLENBQUMsS0FBMEIsRUFBVSxFQUFFLENBQ3pFLEtBQUssQ0FBQyxXQUFXLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXZpZXcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3c1N0YXRlIH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFByb2R1Y3RSZXZpZXdzU3RhdGUgPSB7XG4gIHByb2R1Y3RDb2RlOiAnJyxcbiAgbGlzdDogW10sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuUHJvZHVjdFJldmlld3NBY3Rpb25cbik6IFByb2R1Y3RSZXZpZXdzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfUkVWSUVXU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0Q29kZSA9IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RDb2RlO1xuICAgICAgY29uc3QgbGlzdCA9IGFjdGlvbi5wYXlsb2FkLmxpc3Q7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgbGlzdCxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UmV2aWV3TGlzdCA9IChzdGF0ZTogUHJvZHVjdFJldmlld3NTdGF0ZSk6IFJldmlld1tdID0+XG4gIHN0YXRlLmxpc3Q7XG5leHBvcnQgY29uc3QgZ2V0UmV2aWV3UHJvZHVjdENvZGUgPSAoc3RhdGU6IFByb2R1Y3RSZXZpZXdzU3RhdGUpOiBzdHJpbmcgPT5cbiAgc3RhdGUucHJvZHVjdENvZGU7XG4iXX0=