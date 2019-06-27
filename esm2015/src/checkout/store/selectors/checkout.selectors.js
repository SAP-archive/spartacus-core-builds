/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { CHECKOUT_FEATURE, } from '../checkout-state';
/** @type {?} */
const getDeliveryAddressSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.address);
const ɵ0 = getDeliveryAddressSelector;
/** @type {?} */
const getDeliveryModeSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.deliveryMode);
const ɵ1 = getDeliveryModeSelector;
/** @type {?} */
const getPaymentDetailsSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.paymentDetails);
const ɵ2 = getPaymentDetailsSelector;
/** @type {?} */
const getOrderDetailsSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.orderDetails);
const ɵ3 = getOrderDetailsSelector;
/** @type {?} */
export const getCheckoutState = createFeatureSelector(CHECKOUT_FEATURE);
const ɵ4 = /**
 * @param {?} checkoutState
 * @return {?}
 */
(checkoutState) => checkoutState.steps;
/** @type {?} */
export const getCheckoutStepsState = createSelector(getCheckoutState, (ɵ4));
const ɵ5 = /**
 * @param {?} state
 * @return {?}
 */
state => StateLoaderSelectors.loaderValueSelector(state);
/** @type {?} */
export const getCheckoutSteps = createSelector(getCheckoutStepsState, (ɵ5));
/** @type {?} */
export const getDeliveryAddress = createSelector(getCheckoutSteps, getDeliveryAddressSelector);
/** @type {?} */
export const getDeliveryMode = createSelector(getCheckoutSteps, getDeliveryModeSelector);
const ɵ6 = /**
 * @param {?} deliveryMode
 * @return {?}
 */
deliveryMode => {
    return Object.keys(deliveryMode.supported).map((/**
     * @param {?} code
     * @return {?}
     */
    code => deliveryMode.supported[code]));
};
/** @type {?} */
export const getSupportedDeliveryModes = createSelector(getDeliveryMode, (ɵ6));
const ɵ7 = /**
 * @param {?} deliveryMode
 * @return {?}
 */
deliveryMode => {
    return deliveryMode.selected;
};
/** @type {?} */
export const getSelectedDeliveryModeCode = createSelector(getDeliveryMode, (ɵ7));
const ɵ8 = /**
 * @param {?} deliveryMode
 * @return {?}
 */
deliveryMode => {
    if (deliveryMode.selected !== '') {
        if (Object.keys(deliveryMode.supported).length === 0) {
            return null;
        }
        return deliveryMode.supported[deliveryMode.selected];
    }
};
/** @type {?} */
export const getSelectedDeliveryMode = createSelector(getDeliveryMode, (ɵ8));
/** @type {?} */
export const getPaymentDetails = createSelector(getCheckoutSteps, getPaymentDetailsSelector);
/** @type {?} */
export const getCheckoutOrderDetails = createSelector(getCheckoutSteps, getOrderDetailsSelector);
const ɵ9 = /**
 * @param {?} state
 * @return {?}
 */
state => StateLoaderSelectors.loaderSuccessSelector(state) &&
    !StateLoaderSelectors.loaderLoadingSelector(state);
/** @type {?} */
export const getCheckoutDetailsLoaded = createSelector(getCheckoutStepsState, (ɵ9));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3NlbGVjdG9ycy9jaGVja291dC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsY0FBYyxHQUVmLE1BQU0sYUFBYSxDQUFDO0FBSXJCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWxFLE9BQU8sRUFHTCxnQkFBZ0IsR0FFakIsTUFBTSxtQkFBbUIsQ0FBQzs7TUFFckIsMEJBQTBCOzs7O0FBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBOzs7TUFDekUsdUJBQXVCOzs7O0FBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FDNUQsS0FBSyxDQUFDLFlBQVksQ0FBQTs7O01BQ2QseUJBQXlCOzs7O0FBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FDOUQsS0FBSyxDQUFDLGNBQWMsQ0FBQTs7O01BQ2hCLHVCQUF1Qjs7OztBQUFHLENBQUMsS0FBeUIsRUFBRSxFQUFFLENBQzVELEtBQUssQ0FBQyxZQUFZLENBQUE7OztBQUVwQixNQUFNLE9BQU8sZ0JBQWdCLEdBR3pCLHFCQUFxQixDQUFnQixnQkFBZ0IsQ0FBQzs7Ozs7QUFPeEQsQ0FBQyxhQUE0QixFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSzs7QUFMdkQsTUFBTSxPQUFPLHFCQUFxQixHQUc5QixjQUFjLENBQ2hCLGdCQUFnQixPQUVqQjs7Ozs7QUFPQyxLQUFLLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQzs7QUFMMUQsTUFBTSxPQUFPLGdCQUFnQixHQUd6QixjQUFjLENBQ2hCLHFCQUFxQixPQUV0Qjs7QUFFRCxNQUFNLE9BQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsZ0JBQWdCLEVBQ2hCLDBCQUEwQixDQUMzQjs7QUFFRCxNQUFNLE9BQU8sZUFBZSxHQU14QixjQUFjLENBQ2hCLGdCQUFnQixFQUNoQix1QkFBdUIsQ0FDeEI7Ozs7O0FBT0MsWUFBWSxDQUFDLEVBQUU7SUFDYixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUc7Ozs7SUFDNUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNyQyxDQUFDO0FBQ0osQ0FBQzs7QUFUSCxNQUFNLE9BQU8seUJBQXlCLEdBR2xDLGNBQWMsQ0FDaEIsZUFBZSxPQU1oQjs7Ozs7QUFPQyxZQUFZLENBQUMsRUFBRTtJQUNiLE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQztBQUMvQixDQUFDOztBQVBILE1BQU0sT0FBTywyQkFBMkIsR0FHcEMsY0FBYyxDQUNoQixlQUFlLE9BSWhCOzs7OztBQU9DLFlBQVksQ0FBQyxFQUFFO0lBQ2IsSUFBSSxZQUFZLENBQUMsUUFBUSxLQUFLLEVBQUUsRUFBRTtRQUNoQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEQ7QUFDSCxDQUFDOztBQVpILE1BQU0sT0FBTyx1QkFBdUIsR0FHaEMsY0FBYyxDQUNoQixlQUFlLE9BU2hCOztBQUVELE1BQU0sT0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIseUJBQXlCLENBQzFCOztBQUVELE1BQU0sT0FBTyx1QkFBdUIsR0FHaEMsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIsdUJBQXVCLENBQ3hCOzs7OztBQU9DLEtBQUssQ0FBQyxFQUFFLENBQ04sb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO0lBQ2pELENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDOztBQVB0RCxNQUFNLE9BQU8sd0JBQXdCLEdBR2pDLGNBQWMsQ0FDaEIscUJBQXFCLE9BSXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSwgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlclNlbGVjdG9ycyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBDaGVja291dFN0YXRlLFxuICBDaGVja291dFN0ZXBzU3RhdGUsXG4gIENIRUNLT1VUX0ZFQVRVUkUsXG4gIFN0YXRlV2l0aENoZWNrb3V0LFxufSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5cbmNvbnN0IGdldERlbGl2ZXJ5QWRkcmVzc1NlbGVjdG9yID0gKHN0YXRlOiBDaGVja291dFN0ZXBzU3RhdGUpID0+IHN0YXRlLmFkZHJlc3M7XG5jb25zdCBnZXREZWxpdmVyeU1vZGVTZWxlY3RvciA9IChzdGF0ZTogQ2hlY2tvdXRTdGVwc1N0YXRlKSA9PlxuICBzdGF0ZS5kZWxpdmVyeU1vZGU7XG5jb25zdCBnZXRQYXltZW50RGV0YWlsc1NlbGVjdG9yID0gKHN0YXRlOiBDaGVja291dFN0ZXBzU3RhdGUpID0+XG4gIHN0YXRlLnBheW1lbnREZXRhaWxzO1xuY29uc3QgZ2V0T3JkZXJEZXRhaWxzU2VsZWN0b3IgPSAoc3RhdGU6IENoZWNrb3V0U3RlcHNTdGF0ZSkgPT5cbiAgc3RhdGUub3JkZXJEZXRhaWxzO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIENoZWNrb3V0U3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Q2hlY2tvdXRTdGF0ZT4oQ0hFQ0tPVVRfRkVBVFVSRSk7XG5cbmV4cG9ydCBjb25zdCBnZXRDaGVja291dFN0ZXBzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBMb2FkZXJTdGF0ZTxDaGVja291dFN0ZXBzU3RhdGU+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENoZWNrb3V0U3RhdGUsXG4gIChjaGVja291dFN0YXRlOiBDaGVja291dFN0YXRlKSA9PiBjaGVja291dFN0YXRlLnN0ZXBzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXRTdGVwczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIENoZWNrb3V0U3RlcHNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzU3RhdGUsXG4gIHN0YXRlID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0RGVsaXZlcnlBZGRyZXNzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgQWRkcmVzc1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzLFxuICBnZXREZWxpdmVyeUFkZHJlc3NTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldERlbGl2ZXJ5TW9kZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIHtcbiAgICBzdXBwb3J0ZWQ6IHsgW2NvZGU6IHN0cmluZ106IERlbGl2ZXJ5TW9kZSB9O1xuICAgIHNlbGVjdGVkOiBzdHJpbmc7XG4gIH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2hlY2tvdXRTdGVwcyxcbiAgZ2V0RGVsaXZlcnlNb2RlU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgRGVsaXZlcnlNb2RlW11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0RGVsaXZlcnlNb2RlLFxuICBkZWxpdmVyeU1vZGUgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkZWxpdmVyeU1vZGUuc3VwcG9ydGVkKS5tYXAoXG4gICAgICBjb2RlID0+IGRlbGl2ZXJ5TW9kZS5zdXBwb3J0ZWRbY29kZV1cbiAgICApO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgc3RyaW5nXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldERlbGl2ZXJ5TW9kZSxcbiAgZGVsaXZlcnlNb2RlID0+IHtcbiAgICByZXR1cm4gZGVsaXZlcnlNb2RlLnNlbGVjdGVkO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBEZWxpdmVyeU1vZGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0RGVsaXZlcnlNb2RlLFxuICBkZWxpdmVyeU1vZGUgPT4ge1xuICAgIGlmIChkZWxpdmVyeU1vZGUuc2VsZWN0ZWQgIT09ICcnKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZGVsaXZlcnlNb2RlLnN1cHBvcnRlZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlbGl2ZXJ5TW9kZS5zdXBwb3J0ZWRbZGVsaXZlcnlNb2RlLnNlbGVjdGVkXTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYXltZW50RGV0YWlsczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIFBheW1lbnREZXRhaWxzXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENoZWNrb3V0U3RlcHMsXG4gIGdldFBheW1lbnREZXRhaWxzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDaGVja291dE9yZGVyRGV0YWlsczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIE9yZGVyXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENoZWNrb3V0U3RlcHMsXG4gIGdldE9yZGVyRGV0YWlsc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzU3RhdGUsXG4gIHN0YXRlID0+XG4gICAgU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyU3VjY2Vzc1NlbGVjdG9yKHN0YXRlKSAmJlxuICAgICFTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19