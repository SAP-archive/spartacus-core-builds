/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { loaderErrorSelector, loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
import { getAuthState } from './feature.selector';
/** @type {?} */
export const getOpenIdTokenState = createSelector(getAuthState, state => state.openIdToken);
/** @type {?} */
export const getOpenIdTokenValue = createSelector(getOpenIdTokenState, loaderValueSelector);
/** @type {?} */
export const getOpenIdTokenLoading = createSelector(getOpenIdTokenState, loaderLoadingSelector);
/** @type {?} */
export const getOpenIdTokenSuccess = createSelector(getOpenIdTokenState, loaderSuccessSelector);
/** @type {?} */
export const getOpenIdTokenError = createSelector(getOpenIdTokenState, loaderErrorSelector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9zZWxlY3RvcnMvb3Blbi1pZC10b2tlbi5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRS9ELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUd0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRWxELE1BQU0sT0FBTyxtQkFBbUIsR0FHNUIsY0FBYyxDQUNoQixZQUFZLEVBQ1osS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUMzQjs7QUFFRCxNQUFNLE9BQU8sbUJBQW1CLEdBRzVCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLG1CQUFtQixDQUNwQjs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLHFCQUFxQixDQUN0Qjs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLHFCQUFxQixDQUN0Qjs7QUFFRCxNQUFNLE9BQU8sbUJBQW1CLEdBRzVCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLG1CQUFtQixDQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIGxvYWRlckVycm9yU2VsZWN0b3IsXG4gIGxvYWRlckxvYWRpbmdTZWxlY3RvcixcbiAgbG9hZGVyU3VjY2Vzc1NlbGVjdG9yLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBPcGVuSWRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBdXRoIH0gZnJvbSAnLi4vYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRBdXRoU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0T3BlbklkVG9rZW5TdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQXV0aCxcbiAgTG9hZGVyU3RhdGU8T3BlbklkVG9rZW4+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEF1dGhTdGF0ZSxcbiAgc3RhdGUgPT4gc3RhdGUub3BlbklkVG9rZW5cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRPcGVuSWRUb2tlblZhbHVlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBdXRoLFxuICBPcGVuSWRUb2tlblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRPcGVuSWRUb2tlblN0YXRlLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0T3BlbklkVG9rZW5Mb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBdXRoLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE9wZW5JZFRva2VuU3RhdGUsXG4gIGxvYWRlckxvYWRpbmdTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldE9wZW5JZFRva2VuU3VjY2VzczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQXV0aCxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRPcGVuSWRUb2tlblN0YXRlLFxuICBsb2FkZXJTdWNjZXNzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRPcGVuSWRUb2tlbkVycm9yOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBdXRoLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE9wZW5JZFRva2VuU3RhdGUsXG4gIGxvYWRlckVycm9yU2VsZWN0b3Jcbik7XG4iXX0=