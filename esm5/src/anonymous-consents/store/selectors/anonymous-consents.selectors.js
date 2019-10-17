/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getAnonymousConsentState } from './feature.selector';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.consents; };
/** @type {?} */
export var getAnonymousConsents = createSelector(getAnonymousConsentState, (ɵ0));
/** @type {?} */
export var getAnonymousConsentByTemplateCode = (/**
 * @param {?} templateCode
 * @return {?}
 */
function (templateCode) {
    return createSelector(getAnonymousConsents, (/**
     * @param {?} consents
     * @return {?}
     */
    function (consents) { return consents.find((/**
     * @param {?} consent
     * @return {?}
     */
    function (consent) { return consent.templateCode === templateCode; })); }));
});
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.bannerVisible; };
/** @type {?} */
export var getAnonymousConsentsBannerVisibility = createSelector(getAnonymousConsentState, (ɵ1));
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvc2VsZWN0b3JzL2Fub255bW91cy1jb25zZW50cy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU81RCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYzs7QUFMekIsTUFBTSxLQUFPLG9CQUFvQixHQUc3QixjQUFjLENBQ2hCLHdCQUF3QixPQUV6Qjs7QUFFRCxNQUFNLEtBQU8saUNBQWlDOzs7O0FBQUcsVUFDL0MsWUFBb0I7SUFFcEIsT0FBTyxjQUFjLENBQ25CLG9CQUFvQjs7OztJQUNwQixVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJOzs7O0lBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsWUFBWSxLQUFLLFlBQVksRUFBckMsQ0FBcUMsRUFBQyxFQUEvRCxDQUErRCxFQUM1RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOzs7OztBQU9DLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGFBQWEsRUFBbkIsQ0FBbUI7O0FBTDlCLE1BQU0sS0FBTyxvQ0FBb0MsR0FHN0MsY0FBYyxDQUNoQix3QkFBd0IsT0FFekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aEFub255bW91c0NvbnNlbnRzIH0gZnJvbSAnLi4vYW5vbnltb3VzLWNvbnNlbnRzLXN0YXRlJztcbmltcG9ydCB7IGdldEFub255bW91c0NvbnNlbnRTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRBbm9ueW1vdXNDb25zZW50czogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMsXG4gIEFub255bW91c0NvbnNlbnRbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBbm9ueW1vdXNDb25zZW50U3RhdGUsXG4gIHN0YXRlID0+IHN0YXRlLmNvbnNlbnRzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QW5vbnltb3VzQ29uc2VudEJ5VGVtcGxhdGVDb2RlID0gKFxuICB0ZW1wbGF0ZUNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cywgQW5vbnltb3VzQ29uc2VudD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0QW5vbnltb3VzQ29uc2VudHMsXG4gICAgY29uc2VudHMgPT4gY29uc2VudHMuZmluZChjb25zZW50ID0+IGNvbnNlbnQudGVtcGxhdGVDb2RlID09PSB0ZW1wbGF0ZUNvZGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QW5vbnltb3VzQ29uc2VudHNCYW5uZXJWaXNpYmlsaXR5OiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cyxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBbm9ueW1vdXNDb25zZW50U3RhdGUsXG4gIHN0YXRlID0+IHN0YXRlLmJhbm5lclZpc2libGVcbik7XG4iXX0=