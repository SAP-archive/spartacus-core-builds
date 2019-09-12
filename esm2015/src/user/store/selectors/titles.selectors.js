/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.titles;
/** @type {?} */
export const getTitlesState = createSelector(getUserState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities;
/** @type {?} */
export const getTitlesEntites = createSelector(getTitlesState, (ɵ1));
const ɵ2 = /**
 * @param {?} entites
 * @return {?}
 */
entites => Object.keys(entites).map((/**
 * @param {?} code
 * @return {?}
 */
code => entites[code]));
/** @type {?} */
export const getAllTitles = createSelector(getTitlesEntites, (ɵ2));
/** @type {?} */
export const titleSelectorFactory = (/**
 * @param {?} code
 * @return {?}
 */
(code) => createSelector(getTitlesEntites, (/**
 * @param {?} entities
 * @return {?}
 */
entities => (Object.keys(entities).length !== 0 ? entities[code] : null))));
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy90aXRsZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBT2hELENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU07O0FBTHBDLE1BQU0sT0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsWUFBWSxPQUViOzs7OztBQU9DLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVE7O0FBTHhDLE1BQU0sT0FBTyxnQkFBZ0IsR0FHekIsY0FBYyxDQUNoQixjQUFjLE9BRWY7Ozs7O0FBT0MsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUc7Ozs7QUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQzs7QUFMNUQsTUFBTSxPQUFPLFlBQVksR0FHckIsY0FBYyxDQUNoQixnQkFBZ0IsT0FFakI7O0FBRUQsTUFBTSxPQUFPLG9CQUFvQjs7OztBQUFHLENBQ2xDLElBQVksRUFDNEIsRUFBRSxDQUMxQyxjQUFjLENBQ1osZ0JBQWdCOzs7O0FBQ2hCLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ3pFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBTdGF0ZVdpdGhVc2VyLFxuICBUaXRsZUVudGl0aWVzLFxuICBUaXRsZXNTdGF0ZSxcbiAgVXNlclN0YXRlLFxufSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRUaXRsZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgVGl0bGVzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0VXNlclN0YXRlLFxuICAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUudGl0bGVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0VGl0bGVzRW50aXRlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgVGl0bGVFbnRpdGllc1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRUaXRsZXNTdGF0ZSxcbiAgKHN0YXRlOiBUaXRsZXNTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxUaXRsZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIFRpdGxlW11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0VGl0bGVzRW50aXRlcyxcbiAgZW50aXRlcyA9PiBPYmplY3Qua2V5cyhlbnRpdGVzKS5tYXAoY29kZSA9PiBlbnRpdGVzW2NvZGVdKVxuKTtcblxuZXhwb3J0IGNvbnN0IHRpdGxlU2VsZWN0b3JGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoVXNlciwgVGl0bGU+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFRpdGxlc0VudGl0ZXMsXG4gICAgZW50aXRpZXMgPT4gKE9iamVjdC5rZXlzKGVudGl0aWVzKS5sZW5ndGggIT09IDAgPyBlbnRpdGllc1tjb2RlXSA6IG51bGwpXG4gICk7XG4iXX0=