/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL3NlbGVjdG9ycy9nbG9iYWwtbWVzc2FnZS5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBUS9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU96RCxDQUFDLEtBQXlCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFROztBQUwvQyxNQUFNLE9BQU8sd0JBQXdCLEdBR2pDLGNBQWMsQ0FDaEIscUJBQXFCLE9BRXRCOztBQUVELE1BQU0sT0FBTyw4QkFBOEI7Ozs7QUFBRyxDQUM1QyxJQUF1QixFQUNtQyxFQUFFO0lBQzVELE9BQU8sY0FBYyxDQUNuQix3QkFBd0I7Ozs7SUFDeEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUN2QyxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTywyQkFBMkI7Ozs7QUFBRyxDQUN6QyxJQUF1QixFQUMyQixFQUFFO0lBQ3BELE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLENBQUM7Ozs7SUFDcEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sRUFDeEMsQ0FBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxuICBHbG9iYWxNZXNzYWdlU3RhdGUsXG4gIFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UsXG59IGZyb20gJy4uL2dsb2JhbC1tZXNzYWdlLXN0YXRlJztcbmltcG9ydCB7IGdldEdsb2JhbE1lc3NhZ2VTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UsXG4gIEdsb2JhbE1lc3NhZ2VFbnRpdGllc1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRHbG9iYWxNZXNzYWdlU3RhdGUsXG4gIChzdGF0ZTogR2xvYmFsTWVzc2FnZVN0YXRlKSA9PiBzdGF0ZS5lbnRpdGllc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEdsb2JhbE1lc3NhZ2VFbnRpdGllc0J5VHlwZSA9IChcbiAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGVcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZSwgVHJhbnNsYXRhYmxlW10+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgICBlbnRpdGllcyA9PiBlbnRpdGllcyAmJiBlbnRpdGllc1t0eXBlXVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdsb2JhbE1lc3NhZ2VDb3VudEJ5VHlwZSA9IChcbiAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGVcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZSwgbnVtYmVyPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXNCeVR5cGUodHlwZSksXG4gICAgZW50aXRpZXMgPT4gZW50aXRpZXMgJiYgZW50aXRpZXMubGVuZ3RoXG4gICk7XG59O1xuIl19