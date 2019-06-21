/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getSiteContextState } from './site-context.selector';
/** @type {?} */
var activeLanguageSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.activeLanguage; });
var ɵ0 = activeLanguageSelector;
/** @type {?} */
var languagesEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.entities; });
var ɵ1 = languagesEntitiesSelector;
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.languages; };
/** @type {?} */
export var getLanguagesState = createSelector(getSiteContextState, (ɵ2));
/** @type {?} */
export var getLanguagesEntities = createSelector(getLanguagesState, languagesEntitiesSelector);
/** @type {?} */
export var getActiveLanguage = createSelector(getLanguagesState, activeLanguageSelector);
var ɵ3 = /**
 * @param {?} entities
 * @return {?}
 */
function (entities) {
    return entities
        ? Object.keys(entities).map((/**
         * @param {?} isocode
         * @return {?}
         */
        function (isocode) { return entities[isocode]; }))
        : null;
};
/** @type {?} */
export var getAllLanguages = createSelector(getLanguagesEntities, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvc2VsZWN0b3JzL2xhbmd1YWdlcy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBUS9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQUd4RCxzQkFBc0I7Ozs7QUFBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFwQixDQUFvQixDQUFBOzs7SUFDeEUseUJBQXlCOzs7O0FBQUcsVUFBQyxLQUFxQixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxDQUFjLENBQUE7Ozs7OztBQU96RSxVQUFDLEtBQXVCLElBQUssT0FBQSxLQUFLLENBQUMsU0FBUyxFQUFmLENBQWU7O0FBTDlDLE1BQU0sS0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixtQkFBbUIsT0FFcEI7O0FBRUQsTUFBTSxLQUFPLG9CQUFvQixHQUc3QixjQUFjLENBQ2hCLGlCQUFpQixFQUNqQix5QkFBeUIsQ0FDMUI7O0FBRUQsTUFBTSxLQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLGlCQUFpQixFQUNqQixzQkFBc0IsQ0FDdkI7Ozs7O0FBT0MsVUFBQSxRQUFRO0lBQ04sT0FBTyxRQUFRO1FBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFqQixDQUFpQixFQUFDO1FBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDWCxDQUFDOztBQVRILE1BQU0sS0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsb0JBQW9CLE9BTXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgTGFuZ3VhZ2VzU3RhdGUsXG4gIExhbmd1YWdlc0VudGl0aWVzLFxuICBTaXRlQ29udGV4dFN0YXRlLFxufSBmcm9tICcuLi9zdGF0ZSc7XG5cbmltcG9ydCB7IGdldFNpdGVDb250ZXh0U3RhdGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5zZWxlY3Rvcic7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5jb25zdCBhY3RpdmVMYW5ndWFnZVNlbGVjdG9yID0gKHN0YXRlOiBMYW5ndWFnZXNTdGF0ZSkgPT4gc3RhdGUuYWN0aXZlTGFuZ3VhZ2U7XG5jb25zdCBsYW5ndWFnZXNFbnRpdGllc1NlbGVjdG9yID0gKHN0YXRlOiBMYW5ndWFnZXNTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXM7XG5cbmV4cG9ydCBjb25zdCBnZXRMYW5ndWFnZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIExhbmd1YWdlc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFNpdGVDb250ZXh0U3RhdGUsXG4gIChzdGF0ZTogU2l0ZUNvbnRleHRTdGF0ZSkgPT4gc3RhdGUubGFuZ3VhZ2VzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0TGFuZ3VhZ2VzRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFNpdGVDb250ZXh0LFxuICBMYW5ndWFnZXNFbnRpdGllc1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRMYW5ndWFnZXNTdGF0ZSxcbiAgbGFuZ3VhZ2VzRW50aXRpZXNTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZUxhbmd1YWdlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgc3RyaW5nXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldExhbmd1YWdlc1N0YXRlLFxuICBhY3RpdmVMYW5ndWFnZVNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsTGFuZ3VhZ2VzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgTGFuZ3VhZ2VbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRMYW5ndWFnZXNFbnRpdGllcyxcbiAgZW50aXRpZXMgPT4ge1xuICAgIHJldHVybiBlbnRpdGllc1xuICAgICAgPyBPYmplY3Qua2V5cyhlbnRpdGllcykubWFwKGlzb2NvZGUgPT4gZW50aXRpZXNbaXNvY29kZV0pXG4gICAgICA6IG51bGw7XG4gIH1cbik7XG4iXX0=