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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvc2VsZWN0b3JzL2NhcmQtdHlwZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEtBQUssV0FBVyxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQVF0RCxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTOztBQUwzQyxNQUFNLE9BQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsZ0JBQWdCLE9BRWpCOztBQUVELE1BQU0sT0FBTyxtQkFBbUIsR0FHNUIsY0FBYyxDQUNoQixpQkFBaUIsRUFDakIsV0FBVyxDQUFDLG1CQUFtQixDQUNoQzs7Ozs7QUFPQyxPQUFPLENBQUMsRUFBRTtJQUNSLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztBQUN6RCxDQUFDOztBQVBILE1BQU0sT0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsbUJBQW1CLE9BSXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVtb2l6ZWRTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7XG4gIENoZWNrb3V0U3RhdGUsXG4gIENhcmRUeXBlc1N0YXRlLFxuICBTdGF0ZVdpdGhDaGVja291dCxcbn0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVJlZHVjZXIgZnJvbSAnLi8uLi9yZWR1Y2Vycy9jYXJkLXR5cGVzLnJlZHVjZXInO1xuaW1wb3J0IHsgZ2V0Q2hlY2tvdXRTdGF0ZSB9IGZyb20gJy4vY2hlY2tvdXQuc2VsZWN0b3JzJztcbmltcG9ydCB7IENhcmRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJkVHlwZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIENhcmRUeXBlc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENoZWNrb3V0U3RhdGUsXG4gIChzdGF0ZTogQ2hlY2tvdXRTdGF0ZSkgPT4gc3RhdGUuY2FyZFR5cGVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FyZFR5cGVzRW50aXRlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIHsgW2NvZGU6IHN0cmluZ106IENhcmRUeXBlIH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FyZFR5cGVzU3RhdGUsXG4gIGZyb21SZWR1Y2VyLmdldENhcmRUeXBlc0VudGl0ZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxDYXJkVHlwZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBDYXJkVHlwZVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcmRUeXBlc0VudGl0ZXMsXG4gIGVudGl0ZXMgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhlbnRpdGVzKS5tYXAoY29kZSA9PiBlbnRpdGVzW2NvZGVdKTtcbiAgfVxuKTtcbiJdfQ==