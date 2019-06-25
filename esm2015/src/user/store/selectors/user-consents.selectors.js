/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { loaderErrorSelector, loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
import { getUserState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.consents;
/** @type {?} */
export const getConsentsState = createSelector(getUserState, (ɵ0));
/** @type {?} */
export const getConsentsValue = createSelector(getConsentsState, loaderValueSelector);
/** @type {?} */
export const getConsentsLoading = createSelector(getConsentsState, loaderLoadingSelector);
/** @type {?} */
export const getConsentsSuccess = createSelector(getConsentsState, loaderSuccessSelector);
/** @type {?} */
export const getConsentsError = createSelector(getConsentsState, loaderErrorSelector);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9zZWxlY3RvcnMvdXNlci1jb25zZW50cy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUV0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBT2hELENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVE7O0FBTHRDLE1BQU0sT0FBTyxnQkFBZ0IsR0FHekIsY0FBYyxDQUNoQixZQUFZLE9BRWI7O0FBRUQsTUFBTSxPQUFPLGdCQUFnQixHQUd6QixjQUFjLENBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsQ0FDcEI7O0FBRUQsTUFBTSxPQUFPLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLGdCQUFnQixFQUNoQixxQkFBcUIsQ0FDdEI7O0FBRUQsTUFBTSxPQUFPLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLGdCQUFnQixFQUNoQixxQkFBcUIsQ0FDdEI7O0FBRUQsTUFBTSxPQUFPLGdCQUFnQixHQUd6QixjQUFjLENBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsQ0FDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIGxvYWRlckVycm9yU2VsZWN0b3IsXG4gIGxvYWRlckxvYWRpbmdTZWxlY3RvcixcbiAgbG9hZGVyU3VjY2Vzc1NlbGVjdG9yLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyLCBVc2VyU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25zZW50c1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBMb2FkZXJTdGF0ZTxDb25zZW50VGVtcGxhdGVbXT5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0VXNlclN0YXRlLFxuICAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUuY29uc2VudHNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25zZW50c1ZhbHVlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBDb25zZW50VGVtcGxhdGVbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDb25zZW50c1N0YXRlLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uc2VudHNMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENvbnNlbnRzU3RhdGUsXG4gIGxvYWRlckxvYWRpbmdTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbnNlbnRzU3VjY2VzczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDb25zZW50c1N0YXRlLFxuICBsb2FkZXJTdWNjZXNzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25zZW50c0Vycm9yOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENvbnNlbnRzU3RhdGUsXG4gIGxvYWRlckVycm9yU2VsZWN0b3Jcbik7XG4iXX0=