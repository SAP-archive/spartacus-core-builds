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
(state) => state.order;
/** @type {?} */
export const getOrderState = createSelector(getUserState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.order;
/** @type {?} */
export const getOrderDetails = createSelector(getOrderState, (ɵ1));
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9zZWxlY3RvcnMvb3JkZXItZGV0YWlscy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPaEQsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSzs7QUFMbkMsTUFBTSxPQUFPLGFBQWEsR0FHdEIsY0FBYyxDQUNoQixZQUFZLE9BRWI7Ozs7O0FBT0MsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSzs7QUFMM0MsTUFBTSxPQUFPLGVBQWUsR0FHeEIsY0FBYyxDQUNoQixhQUFhLE9BRWQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU3RhdGUsIFN0YXRlV2l0aFVzZXIsIFVzZXJTdGF0ZSB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgZ2V0VXNlclN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldE9yZGVyU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIE9yZGVyRGV0YWlsc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFVzZXJTdGF0ZSxcbiAgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLm9yZGVyXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJEZXRhaWxzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBPcmRlclxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRPcmRlclN0YXRlLFxuICAoc3RhdGU6IE9yZGVyRGV0YWlsc1N0YXRlKSA9PiBzdGF0ZS5vcmRlclxuKTtcbiJdfQ==