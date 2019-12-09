/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { getUserState } from './feature.selector';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.consents; };
/** @type {?} */
export var getConsentsState = createSelector(getUserState, (ɵ0));
/** @type {?} */
export var getConsentsValue = createSelector(getConsentsState, StateLoaderSelectors.loaderValueSelector);
/** @type {?} */
export var getConsentsLoading = createSelector(getConsentsState, StateLoaderSelectors.loaderLoadingSelector);
/** @type {?} */
export var getConsentsSuccess = createSelector(getConsentsState, StateLoaderSelectors.loaderSuccessSelector);
/** @type {?} */
export var getConsentsError = createSelector(getConsentsState, StateLoaderSelectors.loaderErrorSelector);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9zZWxlY3RvcnMvdXNlci1jb25zZW50cy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPaEQsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxDQUFjOztBQUx0QyxNQUFNLEtBQU8sZ0JBQWdCLEdBR3pCLGNBQWMsQ0FDaEIsWUFBWSxPQUViOztBQUVELE1BQU0sS0FBTyxnQkFBZ0IsR0FHekIsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIsb0JBQW9CLENBQUMsbUJBQW1CLENBQ3pDOztBQUVELE1BQU0sS0FBTyxrQkFBa0IsR0FHM0IsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIsb0JBQW9CLENBQUMscUJBQXFCLENBQzNDOztBQUVELE1BQU0sS0FBTyxrQkFBa0IsR0FHM0IsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIsb0JBQW9CLENBQUMscUJBQXFCLENBQzNDOztBQUVELE1BQU0sS0FBTyxnQkFBZ0IsR0FHekIsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIsb0JBQW9CLENBQUMsbUJBQW1CLENBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyU2VsZWN0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIsIFVzZXJTdGF0ZSB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgZ2V0VXNlclN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldENvbnNlbnRzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIExvYWRlclN0YXRlPENvbnNlbnRUZW1wbGF0ZVtdPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5jb25zZW50c1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbnNlbnRzVmFsdWU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIENvbnNlbnRUZW1wbGF0ZVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENvbnNlbnRzU3RhdGUsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25zZW50c0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q29uc2VudHNTdGF0ZSxcbiAgU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyTG9hZGluZ1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uc2VudHNTdWNjZXNzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENvbnNlbnRzU3RhdGUsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclN1Y2Nlc3NTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbnNlbnRzRXJyb3I6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q29uc2VudHNTdGF0ZSxcbiAgU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyRXJyb3JTZWxlY3RvclxuKTtcbiJdfQ==