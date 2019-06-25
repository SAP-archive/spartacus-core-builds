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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL3NlbGVjdG9ycy9nbG9iYWwtbWVzc2FnZS5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBUS9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU96RCxVQUFDLEtBQXlCLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFkLENBQWM7O0FBTC9DLE1BQU0sS0FBTyx3QkFBd0IsR0FHakMsY0FBYyxDQUNoQixxQkFBcUIsT0FFdEI7O0FBRUQsTUFBTSxLQUFPLDhCQUE4Qjs7OztBQUFHLFVBQzVDLElBQXVCO0lBRXZCLE9BQU8sY0FBYyxDQUNuQix3QkFBd0I7Ozs7SUFDeEIsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixFQUN2QyxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTywyQkFBMkI7Ozs7QUFBRyxVQUN6QyxJQUF1QjtJQUV2QixPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDOzs7O0lBQ3BDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQTNCLENBQTJCLEVBQ3hDLENBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgR2xvYmFsTWVzc2FnZVN0YXRlLFxuICBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlLFxufSBmcm9tICcuLi9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRHbG9iYWxNZXNzYWdlU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0R2xvYmFsTWVzc2FnZUVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlRW50aXRpZXNcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0R2xvYmFsTWVzc2FnZVN0YXRlLFxuICAoc3RhdGU6IEdsb2JhbE1lc3NhZ2VTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXNCeVR5cGUgPSAoXG4gIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UsIFRyYW5zbGF0YWJsZVtdPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG4gICAgZW50aXRpZXMgPT4gZW50aXRpZXMgJiYgZW50aXRpZXNbdHlwZV1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRHbG9iYWxNZXNzYWdlQ291bnRCeVR5cGUgPSAoXG4gIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UsIG51bWJlcj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0R2xvYmFsTWVzc2FnZUVudGl0aWVzQnlUeXBlKHR5cGUpLFxuICAgIGVudGl0aWVzID0+IGVudGl0aWVzICYmIGVudGl0aWVzLmxlbmd0aFxuICApO1xufTtcbiJdfQ==