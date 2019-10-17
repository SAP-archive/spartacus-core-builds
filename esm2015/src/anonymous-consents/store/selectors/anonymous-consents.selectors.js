/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getAnonymousConsentState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
state => state.consents;
/** @type {?} */
export const getAnonymousConsents = createSelector(getAnonymousConsentState, (ɵ0));
/** @type {?} */
export const getAnonymousConsentByTemplateCode = (/**
 * @param {?} templateCode
 * @return {?}
 */
(templateCode) => {
    return createSelector(getAnonymousConsents, (/**
     * @param {?} consents
     * @return {?}
     */
    consents => consents.find((/**
     * @param {?} consent
     * @return {?}
     */
    consent => consent.templateCode === templateCode))));
});
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
state => state.bannerVisible;
/** @type {?} */
export const getAnonymousConsentsBannerVisibility = createSelector(getAnonymousConsentState, (ɵ1));
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvc2VsZWN0b3JzL2Fub255bW91cy1jb25zZW50cy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU81RCxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFROztBQUx6QixNQUFNLE9BQU8sb0JBQW9CLEdBRzdCLGNBQWMsQ0FDaEIsd0JBQXdCLE9BRXpCOztBQUVELE1BQU0sT0FBTyxpQ0FBaUM7Ozs7QUFBRyxDQUMvQyxZQUFvQixFQUM0QyxFQUFFO0lBQ2xFLE9BQU8sY0FBYyxDQUNuQixvQkFBb0I7Ozs7SUFDcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztJQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksS0FBSyxZQUFZLEVBQUMsRUFDNUUsQ0FBQztBQUNKLENBQUMsQ0FBQTs7Ozs7QUFPQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhOztBQUw5QixNQUFNLE9BQU8sb0NBQW9DLEdBRzdDLGNBQWMsQ0FDaEIsd0JBQXdCLE9BRXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cyB9IGZyb20gJy4uL2Fub255bW91cy1jb25zZW50cy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRBbm9ueW1vdXNDb25zZW50U3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0QW5vbnltb3VzQ29uc2VudHM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aEFub255bW91c0NvbnNlbnRzLFxuICBBbm9ueW1vdXNDb25zZW50W11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QW5vbnltb3VzQ29uc2VudFN0YXRlLFxuICBzdGF0ZSA9PiBzdGF0ZS5jb25zZW50c1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFub255bW91c0NvbnNlbnRCeVRlbXBsYXRlQ29kZSA9IChcbiAgdGVtcGxhdGVDb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMsIEFub255bW91c0NvbnNlbnQ+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldEFub255bW91c0NvbnNlbnRzLFxuICAgIGNvbnNlbnRzID0+IGNvbnNlbnRzLmZpbmQoY29uc2VudCA9PiBjb25zZW50LnRlbXBsYXRlQ29kZSA9PT0gdGVtcGxhdGVDb2RlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFub255bW91c0NvbnNlbnRzQmFubmVyVmlzaWJpbGl0eTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QW5vbnltb3VzQ29uc2VudFN0YXRlLFxuICBzdGF0ZSA9PiBzdGF0ZS5iYW5uZXJWaXNpYmxlXG4pO1xuIl19