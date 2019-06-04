/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.account;
/** @type {?} */
export const getDetailsState = createSelector(getUserState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.details;
/** @type {?} */
export const getDetails = createSelector(getDetailsState, (ɵ1));
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy91c2VyLWRldGFpbHMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUUvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBUWhELENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87O0FBTHJDLE1BQU0sT0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsWUFBWSxPQUViOzs7OztBQUlDLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87O0FBRjVDLE1BQU0sT0FBTyxVQUFVLEdBQTBDLGNBQWMsQ0FDN0UsZUFBZSxPQUVoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciwgVXNlckRldGFpbHNTdGF0ZSwgVXNlclN0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGV0YWlsc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBVc2VyRGV0YWlsc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFVzZXJTdGF0ZSxcbiAgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLmFjY291bnRcbik7XG5cbmV4cG9ydCBjb25zdCBnZXREZXRhaWxzOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFVzZXIsIFVzZXI+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldERldGFpbHNTdGF0ZSxcbiAgKHN0YXRlOiBVc2VyRGV0YWlsc1N0YXRlKSA9PiBzdGF0ZS5kZXRhaWxzXG4pO1xuIl19