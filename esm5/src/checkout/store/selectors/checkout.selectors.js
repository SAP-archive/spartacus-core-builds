/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
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
function (state) { return loaderValueSelector(state); };
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
    return Object.keys(deliveryMode.supported).map((/**
     * @param {?} code
     * @return {?}
     */
    function (code) { return deliveryMode.supported[code]; }));
};
/** @type {?} */
export var getSupportedDeliveryModes = createSelector(getDeliveryMode, (ɵ6));
var ɵ7 = /**
 * @param {?} deliveryMode
 * @return {?}
 */
function (deliveryMode) {
    return deliveryMode.selected;
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
function (state) { return loaderSuccessSelector(state) && !loaderLoadingSelector(state); };
/** @type {?} */
export var getCheckoutDetailsLoaded = createSelector(getCheckoutStepsState, (ɵ9));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3NlbGVjdG9ycy9jaGVja291dC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsY0FBYyxHQUVmLE1BQU0sYUFBYSxDQUFDO0FBS3JCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLG1CQUFtQixHQUNwQixNQUFNLDhDQUE4QyxDQUFDO0FBQ3RELE9BQU8sRUFHTCxnQkFBZ0IsR0FFakIsTUFBTSxtQkFBbUIsQ0FBQzs7SUFFckIsMEJBQTBCOzs7O0FBQUcsVUFBQyxLQUF5QixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQUE7OztJQUN6RSx1QkFBdUI7Ozs7QUFBRyxVQUFDLEtBQXlCO0lBQ3hELE9BQUEsS0FBSyxDQUFDLFlBQVk7QUFBbEIsQ0FBa0IsQ0FBQTs7O0lBQ2QseUJBQXlCOzs7O0FBQUcsVUFBQyxLQUF5QjtJQUMxRCxPQUFBLEtBQUssQ0FBQyxjQUFjO0FBQXBCLENBQW9CLENBQUE7OztJQUNoQix1QkFBdUI7Ozs7QUFBRyxVQUFDLEtBQXlCO0lBQ3hELE9BQUEsS0FBSyxDQUFDLFlBQVk7QUFBbEIsQ0FBa0IsQ0FBQTs7O0FBRXBCLE1BQU0sS0FBTyxnQkFBZ0IsR0FHekIscUJBQXFCLENBQWdCLGdCQUFnQixDQUFDOzs7OztBQU94RCxVQUFDLGFBQTRCLElBQUssT0FBQSxhQUFhLENBQUMsS0FBSyxFQUFuQixDQUFtQjs7QUFMdkQsTUFBTSxLQUFPLHFCQUFxQixHQUc5QixjQUFjLENBQ2hCLGdCQUFnQixPQUVqQjs7Ozs7QUFPQyxVQUFBLEtBQUssSUFBSSxPQUFBLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQjs7QUFMckMsTUFBTSxLQUFPLGdCQUFnQixHQUd6QixjQUFjLENBQ2hCLHFCQUFxQixPQUV0Qjs7QUFFRCxNQUFNLEtBQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsZ0JBQWdCLEVBQ2hCLDBCQUEwQixDQUMzQjs7QUFFRCxNQUFNLEtBQU8sZUFBZSxHQU14QixjQUFjLENBQ2hCLGdCQUFnQixFQUNoQix1QkFBdUIsQ0FDeEI7Ozs7O0FBT0MsVUFBQSxZQUFZO0lBQ1YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHOzs7O0lBQzVDLFVBQUEsSUFBSSxJQUFJLE9BQUEsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBNUIsQ0FBNEIsRUFDckMsQ0FBQztBQUNKLENBQUM7O0FBVEgsTUFBTSxLQUFPLHlCQUF5QixHQUdsQyxjQUFjLENBQ2hCLGVBQWUsT0FNaEI7Ozs7O0FBT0MsVUFBQSxZQUFZO0lBQ1YsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDO0FBQy9CLENBQUM7O0FBUEgsTUFBTSxLQUFPLDJCQUEyQixHQUdwQyxjQUFjLENBQ2hCLGVBQWUsT0FJaEI7Ozs7O0FBT0MsVUFBQSxZQUFZO0lBQ1YsSUFBSSxZQUFZLENBQUMsUUFBUSxLQUFLLEVBQUUsRUFBRTtRQUNoQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEQ7QUFDSCxDQUFDOztBQVpILE1BQU0sS0FBTyx1QkFBdUIsR0FHaEMsY0FBYyxDQUNoQixlQUFlLE9BU2hCOztBQUVELE1BQU0sS0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIseUJBQXlCLENBQzFCOztBQUVELE1BQU0sS0FBTyx1QkFBdUIsR0FHaEMsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIsdUJBQXVCLENBQ3hCOzs7OztBQU9DLFVBQUEsS0FBSyxJQUFJLE9BQUEscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFBN0QsQ0FBNkQ7O0FBTHhFLE1BQU0sS0FBTyx3QkFBd0IsR0FHakMsY0FBYyxDQUNoQixxQkFBcUIsT0FFdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBNZW1vaXplZFNlbGVjdG9yLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlLCBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBsb2FkZXJMb2FkaW5nU2VsZWN0b3IsXG4gIGxvYWRlclN1Y2Nlc3NTZWxlY3RvcixcbiAgbG9hZGVyVmFsdWVTZWxlY3Rvcixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5zZWxlY3RvcnMnO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRTdGF0ZSxcbiAgQ2hlY2tvdXRTdGVwc1N0YXRlLFxuICBDSEVDS09VVF9GRUFUVVJFLFxuICBTdGF0ZVdpdGhDaGVja291dCxcbn0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuXG5jb25zdCBnZXREZWxpdmVyeUFkZHJlc3NTZWxlY3RvciA9IChzdGF0ZTogQ2hlY2tvdXRTdGVwc1N0YXRlKSA9PiBzdGF0ZS5hZGRyZXNzO1xuY29uc3QgZ2V0RGVsaXZlcnlNb2RlU2VsZWN0b3IgPSAoc3RhdGU6IENoZWNrb3V0U3RlcHNTdGF0ZSkgPT5cbiAgc3RhdGUuZGVsaXZlcnlNb2RlO1xuY29uc3QgZ2V0UGF5bWVudERldGFpbHNTZWxlY3RvciA9IChzdGF0ZTogQ2hlY2tvdXRTdGVwc1N0YXRlKSA9PlxuICBzdGF0ZS5wYXltZW50RGV0YWlscztcbmNvbnN0IGdldE9yZGVyRGV0YWlsc1NlbGVjdG9yID0gKHN0YXRlOiBDaGVja291dFN0ZXBzU3RhdGUpID0+XG4gIHN0YXRlLm9yZGVyRGV0YWlscztcblxuZXhwb3J0IGNvbnN0IGdldENoZWNrb3V0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBDaGVja291dFN0YXRlXG4+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPENoZWNrb3V0U3RhdGU+KENIRUNLT1VUX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXRTdGVwc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgTG9hZGVyU3RhdGU8Q2hlY2tvdXRTdGVwc1N0YXRlPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0YXRlLFxuICAoY2hlY2tvdXRTdGF0ZTogQ2hlY2tvdXRTdGF0ZSkgPT4gY2hlY2tvdXRTdGF0ZS5zdGVwc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldENoZWNrb3V0U3RlcHM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBDaGVja291dFN0ZXBzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2hlY2tvdXRTdGVwc1N0YXRlLFxuICBzdGF0ZSA9PiBsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldERlbGl2ZXJ5QWRkcmVzczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIEFkZHJlc3Ncbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2hlY2tvdXRTdGVwcyxcbiAgZ2V0RGVsaXZlcnlBZGRyZXNzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXREZWxpdmVyeU1vZGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICB7XG4gICAgc3VwcG9ydGVkOiB7IFtjb2RlOiBzdHJpbmddOiBEZWxpdmVyeU1vZGUgfTtcbiAgICBzZWxlY3RlZDogc3RyaW5nO1xuICB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENoZWNrb3V0U3RlcHMsXG4gIGdldERlbGl2ZXJ5TW9kZVNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIERlbGl2ZXJ5TW9kZVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldERlbGl2ZXJ5TW9kZSxcbiAgZGVsaXZlcnlNb2RlID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGVsaXZlcnlNb2RlLnN1cHBvcnRlZCkubWFwKFxuICAgICAgY29kZSA9PiBkZWxpdmVyeU1vZGUuc3VwcG9ydGVkW2NvZGVdXG4gICAgKTtcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIHN0cmluZ1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXREZWxpdmVyeU1vZGUsXG4gIGRlbGl2ZXJ5TW9kZSA9PiB7XG4gICAgcmV0dXJuIGRlbGl2ZXJ5TW9kZS5zZWxlY3RlZDtcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgRGVsaXZlcnlNb2RlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldERlbGl2ZXJ5TW9kZSxcbiAgZGVsaXZlcnlNb2RlID0+IHtcbiAgICBpZiAoZGVsaXZlcnlNb2RlLnNlbGVjdGVkICE9PSAnJykge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGRlbGl2ZXJ5TW9kZS5zdXBwb3J0ZWQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWxpdmVyeU1vZGUuc3VwcG9ydGVkW2RlbGl2ZXJ5TW9kZS5zZWxlY3RlZF07XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGF5bWVudERldGFpbHM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBQYXltZW50RGV0YWlsc1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzLFxuICBnZXRQYXltZW50RGV0YWlsc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXRPcmRlckRldGFpbHM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBPcmRlclxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzLFxuICBnZXRPcmRlckRldGFpbHNTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2hlY2tvdXRTdGVwc1N0YXRlLFxuICBzdGF0ZSA9PiBsb2FkZXJTdWNjZXNzU2VsZWN0b3Ioc3RhdGUpICYmICFsb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19