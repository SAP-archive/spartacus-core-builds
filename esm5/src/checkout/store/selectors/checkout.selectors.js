/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { CHECKOUT_FEATURE, } from '../checkout-state';
/** @type {?} */
var getDeliveryAddressSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.address; });
var ɵ0 = getDeliveryAddressSelector;
/** @type {?} */
var getDeliveryModeSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return state.deliveryMode;
});
var ɵ1 = getDeliveryModeSelector;
/** @type {?} */
var getPaymentDetailsSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return state.paymentDetails;
});
var ɵ2 = getPaymentDetailsSelector;
/** @type {?} */
var getOrderDetailsSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return state.orderDetails;
});
var ɵ3 = getOrderDetailsSelector;
/** @type {?} */
export var getCheckoutState = createFeatureSelector(CHECKOUT_FEATURE);
var ɵ4 = /**
 * @param {?} checkoutState
 * @return {?}
 */
function (checkoutState) { return checkoutState.steps; };
/** @type {?} */
export var getCheckoutStepsState = createSelector(getCheckoutState, (ɵ4));
var ɵ5 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return StateLoaderSelectors.loaderValueSelector(state); };
/** @type {?} */
export var getCheckoutSteps = createSelector(getCheckoutStepsState, (ɵ5));
/** @type {?} */
export var getDeliveryAddress = createSelector(getCheckoutSteps, getDeliveryAddressSelector);
/** @type {?} */
export var getDeliveryMode = createSelector(getCheckoutSteps, getDeliveryModeSelector);
var ɵ6 = /**
 * @param {?} deliveryMode
 * @return {?}
 */
function (deliveryMode) {
    return (deliveryMode &&
        Object.keys(deliveryMode.supported).map((/**
         * @param {?} code
         * @return {?}
         */
        function (code) { return deliveryMode.supported[code]; })));
};
/** @type {?} */
export var getSupportedDeliveryModes = createSelector(getDeliveryMode, (ɵ6));
var ɵ7 = /**
 * @param {?} deliveryMode
 * @return {?}
 */
function (deliveryMode) {
    return deliveryMode && deliveryMode.selected;
};
/** @type {?} */
export var getSelectedDeliveryModeCode = createSelector(getDeliveryMode, (ɵ7));
var ɵ8 = /**
 * @param {?} deliveryMode
 * @return {?}
 */
function (deliveryMode) {
    if (deliveryMode.selected !== '') {
        if (Object.keys(deliveryMode.supported).length === 0) {
            return null;
        }
        return deliveryMode.supported[deliveryMode.selected];
    }
};
/** @type {?} */
export var getSelectedDeliveryMode = createSelector(getDeliveryMode, (ɵ8));
/** @type {?} */
export var getPaymentDetails = createSelector(getCheckoutSteps, getPaymentDetailsSelector);
/** @type {?} */
export var getCheckoutOrderDetails = createSelector(getCheckoutSteps, getOrderDetailsSelector);
var ɵ9 = /**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return StateLoaderSelectors.loaderSuccessSelector(state) &&
        !StateLoaderSelectors.loaderLoadingSelector(state);
};
/** @type {?} */
export var getCheckoutDetailsLoaded = createSelector(getCheckoutStepsState, (ɵ9));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3NlbGVjdG9ycy9jaGVja291dC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsY0FBYyxHQUVmLE1BQU0sYUFBYSxDQUFDO0FBSXJCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWxFLE9BQU8sRUFHTCxnQkFBZ0IsR0FFakIsTUFBTSxtQkFBbUIsQ0FBQzs7SUFFckIsMEJBQTBCOzs7O0FBQUcsVUFBQyxLQUF5QixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQUE7OztJQUN6RSx1QkFBdUI7Ozs7QUFBRyxVQUFDLEtBQXlCO0lBQ3hELE9BQUEsS0FBSyxDQUFDLFlBQVk7QUFBbEIsQ0FBa0IsQ0FBQTs7O0lBQ2QseUJBQXlCOzs7O0FBQUcsVUFBQyxLQUF5QjtJQUMxRCxPQUFBLEtBQUssQ0FBQyxjQUFjO0FBQXBCLENBQW9CLENBQUE7OztJQUNoQix1QkFBdUI7Ozs7QUFBRyxVQUFDLEtBQXlCO0lBQ3hELE9BQUEsS0FBSyxDQUFDLFlBQVk7QUFBbEIsQ0FBa0IsQ0FBQTs7O0FBRXBCLE1BQU0sS0FBTyxnQkFBZ0IsR0FHekIscUJBQXFCLENBQWdCLGdCQUFnQixDQUFDOzs7OztBQU94RCxVQUFDLGFBQTRCLElBQUssT0FBQSxhQUFhLENBQUMsS0FBSyxFQUFuQixDQUFtQjs7QUFMdkQsTUFBTSxLQUFPLHFCQUFxQixHQUc5QixjQUFjLENBQ2hCLGdCQUFnQixPQUVqQjs7Ozs7QUFPQyxVQUFBLEtBQUssSUFBSSxPQUFBLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUEvQyxDQUErQzs7QUFMMUQsTUFBTSxLQUFPLGdCQUFnQixHQUd6QixjQUFjLENBQ2hCLHFCQUFxQixPQUV0Qjs7QUFFRCxNQUFNLEtBQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsZ0JBQWdCLEVBQ2hCLDBCQUEwQixDQUMzQjs7QUFFRCxNQUFNLEtBQU8sZUFBZSxHQU14QixjQUFjLENBQ2hCLGdCQUFnQixFQUNoQix1QkFBdUIsQ0FDeEI7Ozs7O0FBT0MsVUFBQSxZQUFZO0lBQ1YsT0FBTyxDQUNMLFlBQVk7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHOzs7O1FBQ3JDLFVBQUEsSUFBSSxJQUFJLE9BQUEsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBNUIsQ0FBNEIsRUFDckMsQ0FDRixDQUFDO0FBQ0osQ0FBQzs7QUFaSCxNQUFNLEtBQU8seUJBQXlCLEdBR2xDLGNBQWMsQ0FDaEIsZUFBZSxPQVNoQjs7Ozs7QUFPQyxVQUFBLFlBQVk7SUFDVixPQUFPLFlBQVksSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDO0FBQy9DLENBQUM7O0FBUEgsTUFBTSxLQUFPLDJCQUEyQixHQUdwQyxjQUFjLENBQ2hCLGVBQWUsT0FJaEI7Ozs7O0FBT0MsVUFBQSxZQUFZO0lBQ1YsSUFBSSxZQUFZLENBQUMsUUFBUSxLQUFLLEVBQUUsRUFBRTtRQUNoQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEQ7QUFDSCxDQUFDOztBQVpILE1BQU0sS0FBTyx1QkFBdUIsR0FHaEMsY0FBYyxDQUNoQixlQUFlLE9BU2hCOztBQUVELE1BQU0sS0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIseUJBQXlCLENBQzFCOztBQUVELE1BQU0sS0FBTyx1QkFBdUIsR0FHaEMsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIsdUJBQXVCLENBQ3hCOzs7OztBQU9DLFVBQUEsS0FBSztJQUNILE9BQUEsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQ2pELENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO0FBRGxELENBQ2tEOztBQVB0RCxNQUFNLEtBQU8sd0JBQXdCLEdBR2pDLGNBQWMsQ0FDaEIscUJBQXFCLE9BSXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSwgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlclNlbGVjdG9ycyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBDaGVja291dFN0YXRlLFxuICBDaGVja291dFN0ZXBzU3RhdGUsXG4gIENIRUNLT1VUX0ZFQVRVUkUsXG4gIFN0YXRlV2l0aENoZWNrb3V0LFxufSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5cbmNvbnN0IGdldERlbGl2ZXJ5QWRkcmVzc1NlbGVjdG9yID0gKHN0YXRlOiBDaGVja291dFN0ZXBzU3RhdGUpID0+IHN0YXRlLmFkZHJlc3M7XG5jb25zdCBnZXREZWxpdmVyeU1vZGVTZWxlY3RvciA9IChzdGF0ZTogQ2hlY2tvdXRTdGVwc1N0YXRlKSA9PlxuICBzdGF0ZS5kZWxpdmVyeU1vZGU7XG5jb25zdCBnZXRQYXltZW50RGV0YWlsc1NlbGVjdG9yID0gKHN0YXRlOiBDaGVja291dFN0ZXBzU3RhdGUpID0+XG4gIHN0YXRlLnBheW1lbnREZXRhaWxzO1xuY29uc3QgZ2V0T3JkZXJEZXRhaWxzU2VsZWN0b3IgPSAoc3RhdGU6IENoZWNrb3V0U3RlcHNTdGF0ZSkgPT5cbiAgc3RhdGUub3JkZXJEZXRhaWxzO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIENoZWNrb3V0U3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Q2hlY2tvdXRTdGF0ZT4oQ0hFQ0tPVVRfRkVBVFVSRSk7XG5cbmV4cG9ydCBjb25zdCBnZXRDaGVja291dFN0ZXBzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBMb2FkZXJTdGF0ZTxDaGVja291dFN0ZXBzU3RhdGU+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENoZWNrb3V0U3RhdGUsXG4gIChjaGVja291dFN0YXRlOiBDaGVja291dFN0YXRlKSA9PiBjaGVja291dFN0YXRlLnN0ZXBzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXRTdGVwczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIENoZWNrb3V0U3RlcHNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzU3RhdGUsXG4gIHN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0RGVsaXZlcnlBZGRyZXNzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgQWRkcmVzc1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzLFxuICBnZXREZWxpdmVyeUFkZHJlc3NTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldERlbGl2ZXJ5TW9kZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIHtcbiAgICBzdXBwb3J0ZWQ6IHsgW2NvZGU6IHN0cmluZ106IERlbGl2ZXJ5TW9kZSB9O1xuICAgIHNlbGVjdGVkOiBzdHJpbmc7XG4gIH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2hlY2tvdXRTdGVwcyxcbiAgZ2V0RGVsaXZlcnlNb2RlU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgRGVsaXZlcnlNb2RlW11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0RGVsaXZlcnlNb2RlLFxuICBkZWxpdmVyeU1vZGUgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBkZWxpdmVyeU1vZGUgJiZcbiAgICAgIE9iamVjdC5rZXlzKGRlbGl2ZXJ5TW9kZS5zdXBwb3J0ZWQpLm1hcChcbiAgICAgICAgY29kZSA9PiBkZWxpdmVyeU1vZGUuc3VwcG9ydGVkW2NvZGVdXG4gICAgICApXG4gICAgKTtcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIHN0cmluZ1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXREZWxpdmVyeU1vZGUsXG4gIGRlbGl2ZXJ5TW9kZSA9PiB7XG4gICAgcmV0dXJuIGRlbGl2ZXJ5TW9kZSAmJiBkZWxpdmVyeU1vZGUuc2VsZWN0ZWQ7XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIERlbGl2ZXJ5TW9kZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXREZWxpdmVyeU1vZGUsXG4gIGRlbGl2ZXJ5TW9kZSA9PiB7XG4gICAgaWYgKGRlbGl2ZXJ5TW9kZS5zZWxlY3RlZCAhPT0gJycpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhkZWxpdmVyeU1vZGUuc3VwcG9ydGVkKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVsaXZlcnlNb2RlLnN1cHBvcnRlZFtkZWxpdmVyeU1vZGUuc2VsZWN0ZWRdO1xuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBheW1lbnREZXRhaWxzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgUGF5bWVudERldGFpbHNcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2hlY2tvdXRTdGVwcyxcbiAgZ2V0UGF5bWVudERldGFpbHNTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENoZWNrb3V0T3JkZXJEZXRhaWxzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgT3JkZXJcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2hlY2tvdXRTdGVwcyxcbiAgZ2V0T3JkZXJEZXRhaWxzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDaGVja291dERldGFpbHNMb2FkZWQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENoZWNrb3V0U3RlcHNTdGF0ZSxcbiAgc3RhdGUgPT5cbiAgICBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJTdWNjZXNzU2VsZWN0b3Ioc3RhdGUpICYmXG4gICAgIVN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlckxvYWRpbmdTZWxlY3RvcihzdGF0ZSlcbik7XG4iXX0=