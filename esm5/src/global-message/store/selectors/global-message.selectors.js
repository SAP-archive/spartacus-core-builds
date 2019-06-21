/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getGlobalMessageState } from './feature.selector';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.entities; };
/** @type {?} */
export var getGlobalMessageEntities = createSelector(getGlobalMessageState, (ɵ0));
/** @type {?} */
export var getGlobalMessageEntitiesByType = (/**
 * @param {?} type
 * @return {?}
 */
function (type) {
    return createSelector(getGlobalMessageEntities, (/**
     * @param {?} entities
     * @return {?}
     */
    function (entities) { return entities && entities[type]; }));
});
/** @type {?} */
export var getGlobalMessageCountByType = (/**
 * @param {?} type
 * @return {?}
 */
function (type) {
    return createSelector(getGlobalMessageEntitiesByType(type), (/**
     * @param {?} entities
     * @return {?}
     */
    function (entities) { return entities && entities.length; }));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL3NlbGVjdG9ycy9nbG9iYWwtbWVzc2FnZS5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQWN6RCxVQUFDLEtBQXlCLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFkLENBQWM7O0FBTC9DLE1BQU0sS0FBTyx3QkFBd0IsR0FHakMsY0FBYyxDQUNoQixxQkFBcUIsT0FFdEI7O0FBRUQsTUFBTSxLQUFPLDhCQUE4Qjs7OztBQUFHLFVBQzVDLElBQXVCO0lBRXZCLE9BQU8sY0FBYyxDQUNuQix3QkFBd0I7Ozs7SUFDeEIsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixFQUN2QyxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTywyQkFBMkI7Ozs7QUFBRyxVQUN6QyxJQUF1QjtJQUV2QixPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDOzs7O0lBQ3BDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQTNCLENBQTJCLEVBQ3hDLENBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW1vaXplZFNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGdldEdsb2JhbE1lc3NhZ2VTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQge1xuICBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlU3RhdGUsXG4gIEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbn0gZnJvbSAnLi4vZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0R2xvYmFsTWVzc2FnZUVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlRW50aXRpZXNcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0R2xvYmFsTWVzc2FnZVN0YXRlLFxuICAoc3RhdGU6IEdsb2JhbE1lc3NhZ2VTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXNCeVR5cGUgPSAoXG4gIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlXG4pOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgVHJhbnNsYXRhYmxlW10+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgICBlbnRpdGllcyA9PiBlbnRpdGllcyAmJiBlbnRpdGllc1t0eXBlXVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdsb2JhbE1lc3NhZ2VDb3VudEJ5VHlwZSA9IChcbiAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGVcbik6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBudW1iZXI+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldEdsb2JhbE1lc3NhZ2VFbnRpdGllc0J5VHlwZSh0eXBlKSxcbiAgICBlbnRpdGllcyA9PiBlbnRpdGllcyAmJiBlbnRpdGllcy5sZW5ndGhcbiAgKTtcbn07XG4iXX0=