/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getProductsState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.reviews;
/** @type {?} */
export const getProductReviewsState = createSelector(getProductsState, (ɵ0));
/** @type {?} */
export const getSelectedProductReviewsFactory = (/**
 * @param {?} productCode
 * @return {?}
 */
(productCode) => {
    return createSelector(getProductReviewsState, (/**
     * @param {?} reviewData
     * @return {?}
     */
    reviewData => {
        if (reviewData.productCode === productCode) {
            return reviewData.list;
        }
    }));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3NlbGVjdG9ycy9wcm9kdWN0LXJldmlld3Muc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFRcEQsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTzs7QUFMekMsTUFBTSxPQUFPLHNCQUFzQixHQUcvQixjQUFjLENBQ2hCLGdCQUFnQixPQUVqQjs7QUFFRCxNQUFNLE9BQU8sZ0NBQWdDOzs7O0FBQUcsQ0FDOUMsV0FBVyxFQUNtQyxFQUFFO0lBQ2hELE9BQU8sY0FBYyxDQUNuQixzQkFBc0I7Ozs7SUFDdEIsVUFBVSxDQUFDLEVBQUU7UUFDWCxJQUFJLFVBQVUsQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUFFO1lBQzFDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7XG4gIFByb2R1Y3RSZXZpZXdzU3RhdGUsXG4gIFByb2R1Y3RzU3RhdGUsXG4gIFN0YXRlV2l0aFByb2R1Y3QsXG59IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuXG5pbXBvcnQgeyBnZXRQcm9kdWN0c1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFJldmlld3NTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbiAgUHJvZHVjdFJldmlld3NTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQcm9kdWN0c1N0YXRlLFxuICAoc3RhdGU6IFByb2R1Y3RzU3RhdGUpID0+IHN0YXRlLnJldmlld3Ncbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RSZXZpZXdzRmFjdG9yeSA9IChcbiAgcHJvZHVjdENvZGVcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgUmV2aWV3W10+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2R1Y3RSZXZpZXdzU3RhdGUsXG4gICAgcmV2aWV3RGF0YSA9PiB7XG4gICAgICBpZiAocmV2aWV3RGF0YS5wcm9kdWN0Q29kZSA9PT0gcHJvZHVjdENvZGUpIHtcbiAgICAgICAgcmV0dXJuIHJldmlld0RhdGEubGlzdDtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuIl19