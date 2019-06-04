/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy90aXRsZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBUWhELFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWTs7QUFMcEMsTUFBTSxLQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQixZQUFZLE9BRWI7Ozs7O0FBT0MsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxDQUFjOztBQUx4QyxNQUFNLEtBQU8sZ0JBQWdCLEdBR3pCLGNBQWMsQ0FDaEIsY0FBYyxPQUVmOzs7OztBQU9DLFVBQUEsT0FBTyxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O0FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQWIsQ0FBYSxFQUFDLEVBQS9DLENBQStDOztBQUw1RCxNQUFNLEtBQU8sWUFBWSxHQUdyQixjQUFjLENBQ2hCLGdCQUFnQixPQUVqQjs7QUFFRCxNQUFNLEtBQU8sb0JBQW9COzs7O0FBQUcsVUFDbEMsSUFBWTtJQUVaLE9BQUEsY0FBYyxDQUNaLGdCQUFnQjs7OztJQUNoQixVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUE1RCxDQUE0RCxFQUN6RTtBQUhELENBR0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbW9pemVkU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQge1xuICBVc2VyU3RhdGUsXG4gIFRpdGxlc1N0YXRlLFxuICBTdGF0ZVdpdGhVc2VyLFxuICBUaXRsZUVudGl0aWVzLFxufSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0VGl0bGVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIFRpdGxlc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFVzZXJTdGF0ZSxcbiAgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnRpdGxlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFRpdGxlc0VudGl0ZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIFRpdGxlRW50aXRpZXNcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0VGl0bGVzU3RhdGUsXG4gIChzdGF0ZTogVGl0bGVzU3RhdGUpID0+IHN0YXRlLmVudGl0aWVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsVGl0bGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBUaXRsZVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFRpdGxlc0VudGl0ZXMsXG4gIGVudGl0ZXMgPT4gT2JqZWN0LmtleXMoZW50aXRlcykubWFwKGNvZGUgPT4gZW50aXRlc1tjb2RlXSlcbik7XG5cbmV4cG9ydCBjb25zdCB0aXRsZVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFVzZXIsIFRpdGxlPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRUaXRsZXNFbnRpdGVzLFxuICAgIGVudGl0aWVzID0+IChPYmplY3Qua2V5cyhlbnRpdGllcykubGVuZ3RoICE9PSAwID8gZW50aXRpZXNbY29kZV0gOiBudWxsKVxuICApO1xuIl19