/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { loaderLoadingSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
import { getUserState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.addresses;
/** @type {?} */
export const getAddressesLoaderState = createSelector(getUserState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderValueSelector(state);
/** @type {?} */
export const getAddresses = createSelector(getAddressesLoaderState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderLoadingSelector(state);
/** @type {?} */
export const getAddressesLoading = createSelector(getAddressesLoaderState, (ɵ2));
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL3VzZXItYWRkcmVzc2VzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFHL0QsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUV0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBT2hELENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVM7O0FBTHZDLE1BQU0sT0FBTyx1QkFBdUIsR0FHaEMsY0FBYyxDQUNoQixZQUFZLE9BRWI7Ozs7O0FBT0MsQ0FBQyxLQUE2QixFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7O0FBTC9ELE1BQU0sT0FBTyxZQUFZLEdBR3JCLGNBQWMsQ0FDaEIsdUJBQXVCLE9BRXhCOzs7OztBQU9DLENBQUMsS0FBNkIsRUFBRSxFQUFFLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDOztBQUxqRSxNQUFNLE9BQU8sbUJBQW1CLEdBRzVCLGNBQWMsQ0FDaEIsdUJBQXVCLE9BRXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgbG9hZGVyTG9hZGluZ1NlbGVjdG9yLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyLCBVc2VyU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRBZGRyZXNzZXNMb2FkZXJTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgTG9hZGVyU3RhdGU8QWRkcmVzc1tdPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5hZGRyZXNzZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBZGRyZXNzZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIEFkZHJlc3NbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBZGRyZXNzZXNMb2FkZXJTdGF0ZSxcbiAgKHN0YXRlOiBMb2FkZXJTdGF0ZTxBZGRyZXNzW10+KSA9PiBsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFkZHJlc3Nlc0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QWRkcmVzc2VzTG9hZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8QWRkcmVzc1tdPikgPT4gbG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcbiJdfQ==