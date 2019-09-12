/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { getKymaState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
state => state.openIdToken;
/** @type {?} */
export const getOpenIdTokenState = createSelector(getKymaState, (ɵ0));
/** @type {?} */
export const getOpenIdTokenValue = createSelector(getOpenIdTokenState, StateLoaderSelectors.loaderValueSelector);
/** @type {?} */
export const getOpenIdTokenLoading = createSelector(getOpenIdTokenState, StateLoaderSelectors.loaderLoadingSelector);
/** @type {?} */
export const getOpenIdTokenSuccess = createSelector(getOpenIdTokenState, StateLoaderSelectors.loaderSuccessSelector);
/** @type {?} */
export const getOpenIdTokenError = createSelector(getOpenIdTokenState, StateLoaderSelectors.loaderErrorSelector);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9zZWxlY3RvcnMvb3Blbi1pZC10b2tlbi5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSWxFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPaEQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVzs7QUFMNUIsTUFBTSxPQUFPLG1CQUFtQixHQUc1QixjQUFjLENBQ2hCLFlBQVksT0FFYjs7QUFFRCxNQUFNLE9BQU8sbUJBQW1CLEdBRzVCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLG9CQUFvQixDQUFDLG1CQUFtQixDQUN6Qzs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLG9CQUFvQixDQUFDLHFCQUFxQixDQUMzQzs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLG9CQUFvQixDQUFDLHFCQUFxQixDQUMzQzs7QUFFRCxNQUFNLE9BQU8sbUJBQW1CLEdBRzVCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLG9CQUFvQixDQUFDLG1CQUFtQixDQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVMb2FkZXJTZWxlY3RvcnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgT3BlbklkVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMva3ltYS10b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhLeW1hIH0gZnJvbSAnLi4va3ltYS1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRLeW1hU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0T3BlbklkVG9rZW5TdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoS3ltYSxcbiAgTG9hZGVyU3RhdGU8T3BlbklkVG9rZW4+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEt5bWFTdGF0ZSxcbiAgc3RhdGUgPT4gc3RhdGUub3BlbklkVG9rZW5cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRPcGVuSWRUb2tlblZhbHVlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhLeW1hLFxuICBPcGVuSWRUb2tlblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRPcGVuSWRUb2tlblN0YXRlLFxuICBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJWYWx1ZVNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0T3BlbklkVG9rZW5Mb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhLeW1hLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE9wZW5JZFRva2VuU3RhdGUsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlckxvYWRpbmdTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldE9wZW5JZFRva2VuU3VjY2VzczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoS3ltYSxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRPcGVuSWRUb2tlblN0YXRlLFxuICBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJTdWNjZXNzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRPcGVuSWRUb2tlbkVycm9yOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhLeW1hLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE9wZW5JZFRva2VuU3RhdGUsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlckVycm9yU2VsZWN0b3Jcbik7XG4iXX0=