/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { loaderValueSelector, loaderLoadingSelector, } from '../../../state/utils/loader/loader.selectors';
import { getUserState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.productInterests;
/** @type {?} */
export const getInterestsState = createSelector(getUserState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderValueSelector(state);
/** @type {?} */
export const getInterests = createSelector(getInterestsState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderLoadingSelector(state);
/** @type {?} */
export const getInterestsLoading = createSelector(getInterestsState, (ɵ2));
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRlcmVzdHMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL3Byb2R1Y3QtaW50ZXJlc3RzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFHL0QsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsR0FDdEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBUWhELENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQjs7QUFMOUMsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFlBQVksT0FFYjs7Ozs7QUFPQyxDQUFDLEtBQStDLEVBQUUsRUFBRSxDQUNsRCxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7O0FBTjlCLE1BQU0sT0FBTyxZQUFZLEdBR3JCLGNBQWMsQ0FDaEIsaUJBQWlCLE9BR2xCOzs7OztBQU9DLENBQUMsS0FBK0MsRUFBRSxFQUFFLENBQ2xELHFCQUFxQixDQUFDLEtBQUssQ0FBQzs7QUFOaEMsTUFBTSxPQUFPLG1CQUFtQixHQUc1QixjQUFjLENBQ2hCLGlCQUFpQixPQUdsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgVXNlclN0YXRlLCBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgbG9hZGVyVmFsdWVTZWxlY3RvcixcbiAgbG9hZGVyTG9hZGluZ1NlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBnZXRJbnRlcmVzdHNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgTG9hZGVyU3RhdGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0PlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0SW50ZXJlc3RzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0SW50ZXJlc3RzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHRcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0SW50ZXJlc3RzU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0PikgPT5cbiAgICBsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEludGVyZXN0c0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0SW50ZXJlc3RzU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0PikgPT5cbiAgICBsb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19