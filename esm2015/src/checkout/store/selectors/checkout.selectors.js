/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector, } from '@ngrx/store';
import { CHECKOUT_FEATURE, } from '../checkout-state';
import { loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
/** @type {?} */
export const getDeliveryAddressSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.address);
/** @type {?} */
export const getDeliveryModeSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.deliveryMode);
/** @type {?} */
export const getPaymentDetailsSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.paymentDetails);
/** @type {?} */
export const getOrderDetailsSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.orderDetails);
/** @type {?} */
export const getCheckoutState = createFeatureSelector(CHECKOUT_FEATURE);
const ɵ0 = /**
 * @param {?} checkoutState
 * @return {?}
 */
(checkoutState) => checkoutState.steps;
/** @type {?} */
export const getCheckoutStepsState = createSelector(getCheckoutState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
state => loaderValueSelector(state);
/** @type {?} */
export const getCheckoutSteps = createSelector(getCheckoutStepsState, (ɵ1));
/** @type {?} */
export const getDeliveryAddress = createSelector(getCheckoutSteps, getDeliveryAddressSelector);
/** @type {?} */
export const getDeliveryMode = createSelector(getCheckoutSteps, getDeliveryModeSelector);
const ɵ2 = /**
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
export const getSupportedDeliveryModes = createSelector(getDeliveryMode, (ɵ2));
const ɵ3 = /**
 * @param {?} deliveryMode
 * @return {?}
 */
deliveryMode => {
    return deliveryMode.selected;
};
/** @type {?} */
export const getSelectedCode = createSelector(getDeliveryMode, (ɵ3));
const ɵ4 = /**
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
export const getSelectedDeliveryMode = createSelector(getDeliveryMode, (ɵ4));
/** @type {?} */
export const getPaymentDetails = createSelector(getCheckoutSteps, getPaymentDetailsSelector);
/** @type {?} */
export const getCheckoutOrderDetails = createSelector(getCheckoutSteps, getOrderDetailsSelector);
const ɵ5 = /**
 * @param {?} state
 * @return {?}
 */
state => loaderSuccessSelector(state) && !loaderLoadingSelector(state);
/** @type {?} */
export const getCheckoutDetailsLoaded = createSelector(getCheckoutStepsState, (ɵ5));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3NlbGVjdG9ycy9jaGVja291dC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxjQUFjLEVBQ2QscUJBQXFCLEdBQ3RCLE1BQU0sYUFBYSxDQUFDO0FBR3JCLE9BQU8sRUFDTCxnQkFBZ0IsR0FJakIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSw4Q0FBOEMsQ0FBQzs7QUFLdEQsTUFBTSxPQUFPLDBCQUEwQjs7OztBQUFHLENBQUMsS0FBeUIsRUFBRSxFQUFFLENBQ3RFLEtBQUssQ0FBQyxPQUFPLENBQUE7O0FBQ2YsTUFBTSxPQUFPLHVCQUF1Qjs7OztBQUFHLENBQUMsS0FBeUIsRUFBRSxFQUFFLENBQ25FLEtBQUssQ0FBQyxZQUFZLENBQUE7O0FBQ3BCLE1BQU0sT0FBTyx5QkFBeUI7Ozs7QUFBRyxDQUFDLEtBQXlCLEVBQUUsRUFBRSxDQUNyRSxLQUFLLENBQUMsY0FBYyxDQUFBOztBQUN0QixNQUFNLE9BQU8sdUJBQXVCOzs7O0FBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FDbkUsS0FBSyxDQUFDLFlBQVksQ0FBQTs7QUFFcEIsTUFBTSxPQUFPLGdCQUFnQixHQUd6QixxQkFBcUIsQ0FBZ0IsZ0JBQWdCLENBQUM7Ozs7O0FBT3hELENBQUMsYUFBNEIsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUs7O0FBTHZELE1BQU0sT0FBTyxxQkFBcUIsR0FHOUIsY0FBYyxDQUNoQixnQkFBZ0IsT0FFakI7Ozs7O0FBT0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7O0FBTHJDLE1BQU0sT0FBTyxnQkFBZ0IsR0FHekIsY0FBYyxDQUNoQixxQkFBcUIsT0FFdEI7O0FBRUQsTUFBTSxPQUFPLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLGdCQUFnQixFQUNoQiwwQkFBMEIsQ0FDM0I7O0FBRUQsTUFBTSxPQUFPLGVBQWUsR0FNeEIsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIsdUJBQXVCLENBQ3hCOzs7OztBQU9DLFlBQVksQ0FBQyxFQUFFO0lBQ2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHOzs7O0lBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDckMsQ0FBQztBQUNKLENBQUM7O0FBVEgsTUFBTSxPQUFPLHlCQUF5QixHQUdsQyxjQUFjLENBQ2hCLGVBQWUsT0FNaEI7Ozs7O0FBT0MsWUFBWSxDQUFDLEVBQUU7SUFDYixPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUM7QUFDL0IsQ0FBQzs7QUFQSCxNQUFNLE9BQU8sZUFBZSxHQUd4QixjQUFjLENBQ2hCLGVBQWUsT0FJaEI7Ozs7O0FBT0MsWUFBWSxDQUFDLEVBQUU7SUFDYixJQUFJLFlBQVksQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFFO1FBQ2hDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxZQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN0RDtBQUNILENBQUM7O0FBWkgsTUFBTSxPQUFPLHVCQUF1QixHQUdoQyxjQUFjLENBQ2hCLGVBQWUsT0FTaEI7O0FBRUQsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLGdCQUFnQixFQUNoQix5QkFBeUIsQ0FDMUI7O0FBRUQsTUFBTSxPQUFPLHVCQUF1QixHQUdoQyxjQUFjLENBQ2hCLGdCQUFnQixFQUNoQix1QkFBdUIsQ0FDeEI7Ozs7O0FBT0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQzs7QUFMeEUsTUFBTSxPQUFPLHdCQUF3QixHQUdqQyxjQUFjLENBQ2hCLHFCQUFxQixPQUV0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE1lbW9pemVkU2VsZWN0b3IsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIENIRUNLT1VUX0ZFQVRVUkUsXG4gIENoZWNrb3V0U3RhdGUsXG4gIENoZWNrb3V0U3RlcHNTdGF0ZSxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG59IGZyb20gJy4uL2NoZWNrb3V0LXN0YXRlJztcbmltcG9ydCB7XG4gIGxvYWRlckxvYWRpbmdTZWxlY3RvcixcbiAgbG9hZGVyU3VjY2Vzc1NlbGVjdG9yLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUsIE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGdldERlbGl2ZXJ5QWRkcmVzc1NlbGVjdG9yID0gKHN0YXRlOiBDaGVja291dFN0ZXBzU3RhdGUpID0+XG4gIHN0YXRlLmFkZHJlc3M7XG5leHBvcnQgY29uc3QgZ2V0RGVsaXZlcnlNb2RlU2VsZWN0b3IgPSAoc3RhdGU6IENoZWNrb3V0U3RlcHNTdGF0ZSkgPT5cbiAgc3RhdGUuZGVsaXZlcnlNb2RlO1xuZXhwb3J0IGNvbnN0IGdldFBheW1lbnREZXRhaWxzU2VsZWN0b3IgPSAoc3RhdGU6IENoZWNrb3V0U3RlcHNTdGF0ZSkgPT5cbiAgc3RhdGUucGF5bWVudERldGFpbHM7XG5leHBvcnQgY29uc3QgZ2V0T3JkZXJEZXRhaWxzU2VsZWN0b3IgPSAoc3RhdGU6IENoZWNrb3V0U3RlcHNTdGF0ZSkgPT5cbiAgc3RhdGUub3JkZXJEZXRhaWxzO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIENoZWNrb3V0U3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Q2hlY2tvdXRTdGF0ZT4oQ0hFQ0tPVVRfRkVBVFVSRSk7XG5cbmV4cG9ydCBjb25zdCBnZXRDaGVja291dFN0ZXBzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBMb2FkZXJTdGF0ZTxDaGVja291dFN0ZXBzU3RhdGU+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENoZWNrb3V0U3RhdGUsXG4gIChjaGVja291dFN0YXRlOiBDaGVja291dFN0YXRlKSA9PiBjaGVja291dFN0YXRlLnN0ZXBzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXRTdGVwczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIENoZWNrb3V0U3RlcHNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzU3RhdGUsXG4gIHN0YXRlID0+IGxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0RGVsaXZlcnlBZGRyZXNzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgQWRkcmVzc1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzLFxuICBnZXREZWxpdmVyeUFkZHJlc3NTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldERlbGl2ZXJ5TW9kZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIHtcbiAgICBzdXBwb3J0ZWQ6IHsgW2NvZGU6IHN0cmluZ106IERlbGl2ZXJ5TW9kZSB9O1xuICAgIHNlbGVjdGVkOiBzdHJpbmc7XG4gIH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2hlY2tvdXRTdGVwcyxcbiAgZ2V0RGVsaXZlcnlNb2RlU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgRGVsaXZlcnlNb2RlW11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0RGVsaXZlcnlNb2RlLFxuICBkZWxpdmVyeU1vZGUgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkZWxpdmVyeU1vZGUuc3VwcG9ydGVkKS5tYXAoXG4gICAgICBjb2RlID0+IGRlbGl2ZXJ5TW9kZS5zdXBwb3J0ZWRbY29kZV1cbiAgICApO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRDb2RlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgc3RyaW5nXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldERlbGl2ZXJ5TW9kZSxcbiAgZGVsaXZlcnlNb2RlID0+IHtcbiAgICByZXR1cm4gZGVsaXZlcnlNb2RlLnNlbGVjdGVkO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBEZWxpdmVyeU1vZGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0RGVsaXZlcnlNb2RlLFxuICBkZWxpdmVyeU1vZGUgPT4ge1xuICAgIGlmIChkZWxpdmVyeU1vZGUuc2VsZWN0ZWQgIT09ICcnKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZGVsaXZlcnlNb2RlLnN1cHBvcnRlZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlbGl2ZXJ5TW9kZS5zdXBwb3J0ZWRbZGVsaXZlcnlNb2RlLnNlbGVjdGVkXTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYXltZW50RGV0YWlsczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIFBheW1lbnREZXRhaWxzXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENoZWNrb3V0U3RlcHMsXG4gIGdldFBheW1lbnREZXRhaWxzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDaGVja291dE9yZGVyRGV0YWlsczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIE9yZGVyXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENoZWNrb3V0U3RlcHMsXG4gIGdldE9yZGVyRGV0YWlsc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzU3RhdGUsXG4gIHN0YXRlID0+IGxvYWRlclN1Y2Nlc3NTZWxlY3RvcihzdGF0ZSkgJiYgIWxvYWRlckxvYWRpbmdTZWxlY3RvcihzdGF0ZSlcbik7XG4iXX0=