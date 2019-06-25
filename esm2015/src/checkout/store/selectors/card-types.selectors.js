/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import * as fromReducer from './../reducers/card-types.reducer';
import { getCheckoutState } from './checkout.selectors';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.cardTypes;
/** @type {?} */
export const getCardTypesState = createSelector(getCheckoutState, (ɵ0));
/** @type {?} */
export const getCardTypesEntites = createSelector(getCardTypesState, fromReducer.getCardTypesEntites);
const ɵ1 = /**
 * @param {?} entites
 * @return {?}
 */
entites => {
    return Object.keys(entites).map((/**
     * @param {?} code
     * @return {?}
     */
    code => entites[code]));
};
/** @type {?} */
export const getAllCardTypes = createSelector(getCardTypesEntites, (ɵ1));
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvc2VsZWN0b3JzL2NhcmQtdHlwZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEtBQUssV0FBVyxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQU90RCxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTOztBQUwzQyxNQUFNLE9BQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsZ0JBQWdCLE9BRWpCOztBQUVELE1BQU0sT0FBTyxtQkFBbUIsR0FHNUIsY0FBYyxDQUNoQixpQkFBaUIsRUFDakIsV0FBVyxDQUFDLG1CQUFtQixDQUNoQzs7Ozs7QUFPQyxPQUFPLENBQUMsRUFBRTtJQUNSLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztBQUN6RCxDQUFDOztBQVBILE1BQU0sT0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsbUJBQW1CLE9BSXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJkVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ2FyZFR5cGVzU3RhdGUsXG4gIENoZWNrb3V0U3RhdGUsXG4gIFN0YXRlV2l0aENoZWNrb3V0LFxufSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tUmVkdWNlciBmcm9tICcuLy4uL3JlZHVjZXJzL2NhcmQtdHlwZXMucmVkdWNlcic7XG5pbXBvcnQgeyBnZXRDaGVja291dFN0YXRlIH0gZnJvbSAnLi9jaGVja291dC5zZWxlY3RvcnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FyZFR5cGVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBDYXJkVHlwZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0YXRlLFxuICAoc3RhdGU6IENoZWNrb3V0U3RhdGUpID0+IHN0YXRlLmNhcmRUeXBlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcmRUeXBlc0VudGl0ZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICB7IFtjb2RlOiBzdHJpbmddOiBDYXJkVHlwZSB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcmRUeXBlc1N0YXRlLFxuICBmcm9tUmVkdWNlci5nZXRDYXJkVHlwZXNFbnRpdGVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQ2FyZFR5cGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgQ2FyZFR5cGVbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJkVHlwZXNFbnRpdGVzLFxuICBlbnRpdGVzID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZW50aXRlcykubWFwKGNvZGUgPT4gZW50aXRlc1tjb2RlXSk7XG4gIH1cbik7XG4iXX0=