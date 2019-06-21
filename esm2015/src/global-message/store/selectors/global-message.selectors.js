/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getGlobalMessageState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities;
/** @type {?} */
export const getGlobalMessageEntities = createSelector(getGlobalMessageState, (ɵ0));
/** @type {?} */
export const getGlobalMessageEntitiesByType = (/**
 * @param {?} type
 * @return {?}
 */
(type) => {
    return createSelector(getGlobalMessageEntities, (/**
     * @param {?} entities
     * @return {?}
     */
    entities => entities && entities[type]));
});
/** @type {?} */
export const getGlobalMessageCountByType = (/**
 * @param {?} type
 * @return {?}
 */
(type) => {
    return createSelector(getGlobalMessageEntitiesByType(type), (/**
     * @param {?} entities
     * @return {?}
     */
    entities => entities && entities.length));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL3NlbGVjdG9ycy9nbG9iYWwtbWVzc2FnZS5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQWN6RCxDQUFDLEtBQXlCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFROztBQUwvQyxNQUFNLE9BQU8sd0JBQXdCLEdBR2pDLGNBQWMsQ0FDaEIscUJBQXFCLE9BRXRCOztBQUVELE1BQU0sT0FBTyw4QkFBOEI7Ozs7QUFBRyxDQUM1QyxJQUF1QixFQUNnQixFQUFFO0lBQ3pDLE9BQU8sY0FBYyxDQUNuQix3QkFBd0I7Ozs7SUFDeEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUN2QyxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTywyQkFBMkI7Ozs7QUFBRyxDQUN6QyxJQUF1QixFQUNRLEVBQUU7SUFDakMsT0FBTyxjQUFjLENBQ25CLDhCQUE4QixDQUFDLElBQUksQ0FBQzs7OztJQUNwQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUN4QyxDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVtb2l6ZWRTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBnZXRHbG9iYWxNZXNzYWdlU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHtcbiAgU3RhdGVXaXRoR2xvYmFsTWVzc2FnZSxcbiAgR2xvYmFsTWVzc2FnZVN0YXRlLFxuICBHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG59IGZyb20gJy4uL2dsb2JhbC1tZXNzYWdlLXN0YXRlJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGdldEdsb2JhbE1lc3NhZ2VFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoR2xvYmFsTWVzc2FnZSxcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEdsb2JhbE1lc3NhZ2VTdGF0ZSxcbiAgKHN0YXRlOiBHbG9iYWxNZXNzYWdlU3RhdGUpID0+IHN0YXRlLmVudGl0aWVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0R2xvYmFsTWVzc2FnZUVudGl0aWVzQnlUeXBlID0gKFxuICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZVxuKTogTWVtb2l6ZWRTZWxlY3RvcjxhbnksIFRyYW5zbGF0YWJsZVtdPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG4gICAgZW50aXRpZXMgPT4gZW50aXRpZXMgJiYgZW50aXRpZXNbdHlwZV1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRHbG9iYWxNZXNzYWdlQ291bnRCeVR5cGUgPSAoXG4gIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlXG4pOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgbnVtYmVyPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXNCeVR5cGUodHlwZSksXG4gICAgZW50aXRpZXMgPT4gZW50aXRpZXMgJiYgZW50aXRpZXMubGVuZ3RoXG4gICk7XG59O1xuIl19