/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getAuthState } from './feature.selector';
/** @type {?} */
const getUserTokenSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.token);
const ɵ0 = getUserTokenSelector;
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.userToken;
/** @type {?} */
export const getUserTokenState = createSelector(getAuthState, (ɵ1));
/** @type {?} */
export const getUserToken = createSelector(getUserTokenState, getUserTokenSelector);
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9zZWxlY3RvcnMvdXNlci10b2tlbi5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFFNUMsb0JBQW9COzs7O0FBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFBOzs7Ozs7QUFPakUsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUzs7QUFMdkMsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFlBQVksT0FFYjs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUdyQixjQUFjLENBQ2hCLGlCQUFpQixFQUNqQixvQkFBb0IsQ0FDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoU3RhdGUsIFN0YXRlV2l0aEF1dGgsIFVzZXJUb2tlblN0YXRlIH0gZnJvbSAnLi4vYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRBdXRoU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5jb25zdCBnZXRVc2VyVG9rZW5TZWxlY3RvciA9IChzdGF0ZTogVXNlclRva2VuU3RhdGUpID0+IHN0YXRlLnRva2VuO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlclRva2VuU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aEF1dGgsXG4gIFVzZXJUb2tlblN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEF1dGhTdGF0ZSxcbiAgKHN0YXRlOiBBdXRoU3RhdGUpID0+IHN0YXRlLnVzZXJUb2tlblxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJUb2tlbjogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQXV0aCxcbiAgVXNlclRva2VuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFVzZXJUb2tlblN0YXRlLFxuICBnZXRVc2VyVG9rZW5TZWxlY3RvclxuKTtcbiJdfQ==