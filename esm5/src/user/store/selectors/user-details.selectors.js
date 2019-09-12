/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.account; };
/** @type {?} */
export var getDetailsState = createSelector(getUserState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.details; };
/** @type {?} */
export var getDetails = createSelector(getDetailsState, (ɵ1));
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy91c2VyLWRldGFpbHMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUcvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBT2hELFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYTs7QUFMckMsTUFBTSxLQUFPLGVBQWUsR0FHeEIsY0FBYyxDQUNoQixZQUFZLE9BRWI7Ozs7O0FBSUMsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhOztBQUY1QyxNQUFNLEtBQU8sVUFBVSxHQUEwQyxjQUFjLENBQzdFLGVBQWUsT0FFaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIsIFVzZXJEZXRhaWxzU3RhdGUsIFVzZXJTdGF0ZSB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgZ2V0VXNlclN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldERldGFpbHNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgVXNlckRldGFpbHNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0RGV0YWlsczogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhVc2VyLCBVc2VyPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXREZXRhaWxzU3RhdGUsXG4gIChzdGF0ZTogVXNlckRldGFpbHNTdGF0ZSkgPT4gc3RhdGUuZGV0YWlsc1xuKTtcbiJdfQ==