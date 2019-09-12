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
function (state) { return state.titles; };
/** @type {?} */
export var getTitlesState = createSelector(getUserState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.entities; };
/** @type {?} */
export var getTitlesEntites = createSelector(getTitlesState, (ɵ1));
var ɵ2 = /**
 * @param {?} entites
 * @return {?}
 */
function (entites) { return Object.keys(entites).map((/**
 * @param {?} code
 * @return {?}
 */
function (code) { return entites[code]; })); };
/** @type {?} */
export var getAllTitles = createSelector(getTitlesEntites, (ɵ2));
/** @type {?} */
export var titleSelectorFactory = (/**
 * @param {?} code
 * @return {?}
 */
function (code) {
    return createSelector(getTitlesEntites, (/**
     * @param {?} entities
     * @return {?}
     */
    function (entities) { return (Object.keys(entities).length !== 0 ? entities[code] : null); }));
});
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy90aXRsZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBT2hELFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWTs7QUFMcEMsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixZQUFZLE9BRWI7Ozs7O0FBT0MsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxDQUFjOztBQUx4QyxNQUFNLEtBQU8sZ0JBQWdCLEdBR3pCLGNBQWMsQ0FDaEIsY0FBYyxPQUVmOzs7OztBQU9DLFVBQUEsT0FBTyxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O0FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQWIsQ0FBYSxFQUFDLEVBQS9DLENBQStDOztBQUw1RCxNQUFNLEtBQU8sWUFBWSxHQUdyQixjQUFjLENBQ2hCLGdCQUFnQixPQUVqQjs7QUFFRCxNQUFNLEtBQU8sb0JBQW9COzs7O0FBQUcsVUFDbEMsSUFBWTtJQUVaLE9BQUEsY0FBYyxDQUNaLGdCQUFnQjs7OztJQUNoQixVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUE1RCxDQUE0RCxFQUN6RTtBQUhELENBR0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7XG4gIFN0YXRlV2l0aFVzZXIsXG4gIFRpdGxlRW50aXRpZXMsXG4gIFRpdGxlc1N0YXRlLFxuICBVc2VyU3RhdGUsXG59IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgZ2V0VXNlclN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldFRpdGxlc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBUaXRsZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS50aXRsZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRUaXRsZXNFbnRpdGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBUaXRsZUVudGl0aWVzXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFRpdGxlc1N0YXRlLFxuICAoc3RhdGU6IFRpdGxlc1N0YXRlKSA9PiBzdGF0ZS5lbnRpdGllc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFRpdGxlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgVGl0bGVbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRUaXRsZXNFbnRpdGVzLFxuICBlbnRpdGVzID0+IE9iamVjdC5rZXlzKGVudGl0ZXMpLm1hcChjb2RlID0+IGVudGl0ZXNbY29kZV0pXG4pO1xuXG5leHBvcnQgY29uc3QgdGl0bGVTZWxlY3RvckZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhVc2VyLCBUaXRsZT4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0VGl0bGVzRW50aXRlcyxcbiAgICBlbnRpdGllcyA9PiAoT2JqZWN0LmtleXMoZW50aXRpZXMpLmxlbmd0aCAhPT0gMCA/IGVudGl0aWVzW2NvZGVdIDogbnVsbClcbiAgKTtcbiJdfQ==