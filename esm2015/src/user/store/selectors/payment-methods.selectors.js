/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { getUserState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.payments;
/** @type {?} */
export const getPaymentMethodsState = createSelector(getUserState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => StateLoaderSelectors.loaderValueSelector(state);
/** @type {?} */
export const getPaymentMethods = createSelector(getPaymentMethodsState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => StateLoaderSelectors.loaderLoadingSelector(state);
/** @type {?} */
export const getPaymentMethodsLoading = createSelector(getPaymentMethodsState, (ɵ2));
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => StateLoaderSelectors.loaderSuccessSelector(state) &&
    !StateLoaderSelectors.loaderLoadingSelector(state);
/** @type {?} */
export const getPaymentMethodsLoadedSuccess = createSelector(getPaymentMethodsState, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy9wYXltZW50LW1ldGhvZHMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUUvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUdsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBT2hELENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVE7O0FBTHRDLE1BQU0sT0FBTyxzQkFBc0IsR0FHL0IsY0FBYyxDQUNoQixZQUFZLE9BRWI7Ozs7O0FBT0MsQ0FBQyxLQUFvQyxFQUFFLEVBQUUsQ0FDdkMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDOztBQU5uRCxNQUFNLE9BQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsc0JBQXNCLE9BR3ZCOzs7OztBQU9DLENBQUMsS0FBb0MsRUFBRSxFQUFFLENBQ3ZDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQzs7QUFOckQsTUFBTSxPQUFPLHdCQUF3QixHQUdqQyxjQUFjLENBQ2hCLHNCQUFzQixPQUd2Qjs7Ozs7QUFPQyxDQUFDLEtBQW9DLEVBQUUsRUFBRSxDQUN2QyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7SUFDakQsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7O0FBUHRELE1BQU0sT0FBTyw4QkFBOEIsR0FHdkMsY0FBYyxDQUNoQixzQkFBc0IsT0FJdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlclNlbGVjdG9ycyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyLCBVc2VyU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRQYXltZW50TWV0aG9kc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBMb2FkZXJTdGF0ZTxQYXltZW50RGV0YWlsc1tdPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5wYXltZW50c1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBheW1lbnRNZXRob2RzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBQYXltZW50RGV0YWlsc1tdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFBheW1lbnRNZXRob2RzU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UGF5bWVudERldGFpbHNbXT4pID0+XG4gICAgU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYXltZW50TWV0aG9kc0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UGF5bWVudE1ldGhvZHNTdGF0ZSxcbiAgKHN0YXRlOiBMb2FkZXJTdGF0ZTxQYXltZW50RGV0YWlsc1tdPikgPT5cbiAgICBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGF5bWVudE1ldGhvZHNMb2FkZWRTdWNjZXNzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFBheW1lbnRNZXRob2RzU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UGF5bWVudERldGFpbHNbXT4pID0+XG4gICAgU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyU3VjY2Vzc1NlbGVjdG9yKHN0YXRlKSAmJlxuICAgICFTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19