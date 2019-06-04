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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy90aXRsZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBUWhELENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU07O0FBTHBDLE1BQU0sT0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsWUFBWSxPQUViOzs7OztBQU9DLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVE7O0FBTHhDLE1BQU0sT0FBTyxnQkFBZ0IsR0FHekIsY0FBYyxDQUNoQixjQUFjLE9BRWY7Ozs7O0FBT0MsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUc7Ozs7QUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQzs7QUFMNUQsTUFBTSxPQUFPLFlBQVksR0FHckIsY0FBYyxDQUNoQixnQkFBZ0IsT0FFakI7O0FBRUQsTUFBTSxPQUFPLG9CQUFvQjs7OztBQUFHLENBQ2xDLElBQVksRUFDNEIsRUFBRSxDQUMxQyxjQUFjLENBQ1osZ0JBQWdCOzs7O0FBQ2hCLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ3pFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW1vaXplZFNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHtcbiAgVXNlclN0YXRlLFxuICBUaXRsZXNTdGF0ZSxcbiAgU3RhdGVXaXRoVXNlcixcbiAgVGl0bGVFbnRpdGllcyxcbn0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGdldFRpdGxlc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBUaXRsZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS50aXRsZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRUaXRsZXNFbnRpdGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBUaXRsZUVudGl0aWVzXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFRpdGxlc1N0YXRlLFxuICAoc3RhdGU6IFRpdGxlc1N0YXRlKSA9PiBzdGF0ZS5lbnRpdGllc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFRpdGxlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgVGl0bGVbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRUaXRsZXNFbnRpdGVzLFxuICBlbnRpdGVzID0+IE9iamVjdC5rZXlzKGVudGl0ZXMpLm1hcChjb2RlID0+IGVudGl0ZXNbY29kZV0pXG4pO1xuXG5leHBvcnQgY29uc3QgdGl0bGVTZWxlY3RvckZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhVc2VyLCBUaXRsZT4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0VGl0bGVzRW50aXRlcyxcbiAgICBlbnRpdGllcyA9PiAoT2JqZWN0LmtleXMoZW50aXRpZXMpLmxlbmd0aCAhPT0gMCA/IGVudGl0aWVzW2NvZGVdIDogbnVsbClcbiAgKTtcbiJdfQ==