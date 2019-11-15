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
(templateCode) => createSelector(getAnonymousConsents, (/**
 * @param {?} consents
 * @return {?}
 */
consents => consents.find((/**
 * @param {?} consent
 * @return {?}
 */
consent => consent.templateCode === templateCode)))));
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvc2VsZWN0b3JzL2Fub255bW91cy1jb25zZW50cy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU81RCxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFROztBQUx6QixNQUFNLE9BQU8sb0JBQW9CLEdBRzdCLGNBQWMsQ0FDaEIsd0JBQXdCLE9BRXpCOztBQUVELE1BQU0sT0FBTyxpQ0FBaUM7Ozs7QUFBRyxDQUMvQyxZQUFvQixFQUM0QyxFQUFFLENBQ2xFLGNBQWMsQ0FDWixvQkFBb0I7Ozs7QUFDcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztBQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksS0FBSyxZQUFZLEVBQUMsRUFDNUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMgfSBmcm9tICcuLi9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0QW5vbnltb3VzQ29uc2VudFN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldEFub255bW91c0NvbnNlbnRzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cyxcbiAgQW5vbnltb3VzQ29uc2VudFtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFub255bW91c0NvbnNlbnRTdGF0ZSxcbiAgc3RhdGUgPT4gc3RhdGUuY29uc2VudHNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbm9ueW1vdXNDb25zZW50QnlUZW1wbGF0ZUNvZGUgPSAoXG4gIHRlbXBsYXRlQ29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aEFub255bW91c0NvbnNlbnRzLCBBbm9ueW1vdXNDb25zZW50PiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRBbm9ueW1vdXNDb25zZW50cyxcbiAgICBjb25zZW50cyA9PiBjb25zZW50cy5maW5kKGNvbnNlbnQgPT4gY29uc2VudC50ZW1wbGF0ZUNvZGUgPT09IHRlbXBsYXRlQ29kZSlcbiAgKTtcbiJdfQ==