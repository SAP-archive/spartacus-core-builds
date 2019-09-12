/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getSiteContextState } from './site-context.selector';
/** @type {?} */
const activeLanguageSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.activeLanguage);
const ɵ0 = activeLanguageSelector;
/** @type {?} */
const languagesEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities);
const ɵ1 = languagesEntitiesSelector;
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.languages;
/** @type {?} */
export const getLanguagesState = createSelector(getSiteContextState, (ɵ2));
/** @type {?} */
export const getLanguagesEntities = createSelector(getLanguagesState, languagesEntitiesSelector);
/** @type {?} */
export const getActiveLanguage = createSelector(getLanguagesState, activeLanguageSelector);
const ɵ3 = /**
 * @param {?} entities
 * @return {?}
 */
entities => {
    return entities
        ? Object.keys(entities).map((/**
         * @param {?} isocode
         * @return {?}
         */
        isocode => entities[isocode]))
        : null;
};
/** @type {?} */
export const getAllLanguages = createSelector(getLanguagesEntities, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvc2VsZWN0b3JzL2xhbmd1YWdlcy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBUS9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztNQUV4RCxzQkFBc0I7Ozs7QUFBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUE7OztNQUN4RSx5QkFBeUI7Ozs7QUFBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7Ozs7OztBQU96RSxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTOztBQUw5QyxNQUFNLE9BQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsbUJBQW1CLE9BRXBCOztBQUVELE1BQU0sT0FBTyxvQkFBb0IsR0FHN0IsY0FBYyxDQUNoQixpQkFBaUIsRUFDakIseUJBQXlCLENBQzFCOztBQUVELE1BQU0sT0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixpQkFBaUIsRUFDakIsc0JBQXNCLENBQ3ZCOzs7OztBQU9DLFFBQVEsQ0FBQyxFQUFFO0lBQ1QsT0FBTyxRQUFRO1FBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFDO1FBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDWCxDQUFDOztBQVRILE1BQU0sT0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsb0JBQW9CLE9BTXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgTGFuZ3VhZ2VzRW50aXRpZXMsXG4gIExhbmd1YWdlc1N0YXRlLFxuICBTaXRlQ29udGV4dFN0YXRlLFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbn0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgZ2V0U2l0ZUNvbnRleHRTdGF0ZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LnNlbGVjdG9yJztcblxuY29uc3QgYWN0aXZlTGFuZ3VhZ2VTZWxlY3RvciA9IChzdGF0ZTogTGFuZ3VhZ2VzU3RhdGUpID0+IHN0YXRlLmFjdGl2ZUxhbmd1YWdlO1xuY29uc3QgbGFuZ3VhZ2VzRW50aXRpZXNTZWxlY3RvciA9IChzdGF0ZTogTGFuZ3VhZ2VzU3RhdGUpID0+IHN0YXRlLmVudGl0aWVzO1xuXG5leHBvcnQgY29uc3QgZ2V0TGFuZ3VhZ2VzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFNpdGVDb250ZXh0LFxuICBMYW5ndWFnZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRTaXRlQ29udGV4dFN0YXRlLFxuICAoc3RhdGU6IFNpdGVDb250ZXh0U3RhdGUpID0+IHN0YXRlLmxhbmd1YWdlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldExhbmd1YWdlc0VudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgTGFuZ3VhZ2VzRW50aXRpZXNcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0TGFuZ3VhZ2VzU3RhdGUsXG4gIGxhbmd1YWdlc0VudGl0aWVzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBY3RpdmVMYW5ndWFnZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIHN0cmluZ1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRMYW5ndWFnZXNTdGF0ZSxcbiAgYWN0aXZlTGFuZ3VhZ2VTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbExhbmd1YWdlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIExhbmd1YWdlW11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0TGFuZ3VhZ2VzRW50aXRpZXMsXG4gIGVudGl0aWVzID0+IHtcbiAgICByZXR1cm4gZW50aXRpZXNcbiAgICAgID8gT2JqZWN0LmtleXMoZW50aXRpZXMpLm1hcChpc29jb2RlID0+IGVudGl0aWVzW2lzb2NvZGVdKVxuICAgICAgOiBudWxsO1xuICB9XG4pO1xuIl19