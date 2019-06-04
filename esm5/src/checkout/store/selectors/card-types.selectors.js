/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import * as fromReducer from './../reducers/card-types.reducer';
import { getCheckoutState } from './checkout.selectors';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.cardTypes; };
/** @type {?} */
export var getCardTypesState = createSelector(getCheckoutState, (ɵ0));
/** @type {?} */
export var getCardTypesEntites = createSelector(getCardTypesState, fromReducer.getCardTypesEntites);
var ɵ1 = /**
 * @param {?} entites
 * @return {?}
 */
function (entites) {
    return Object.keys(entites).map((/**
     * @param {?} code
     * @return {?}
     */
    function (code) { return entites[code]; }));
};
/** @type {?} */
export var getAllCardTypes = createSelector(getCardTypesEntites, (ɵ1));
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvc2VsZWN0b3JzL2NhcmQtdHlwZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEtBQUssV0FBVyxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQVF0RCxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFLLENBQUMsU0FBUyxFQUFmLENBQWU7O0FBTDNDLE1BQU0sS0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixnQkFBZ0IsT0FFakI7O0FBRUQsTUFBTSxLQUFPLG1CQUFtQixHQUc1QixjQUFjLENBQ2hCLGlCQUFpQixFQUNqQixXQUFXLENBQUMsbUJBQW1CLENBQ2hDOzs7OztBQU9DLFVBQUEsT0FBTztJQUNMLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQWIsQ0FBYSxFQUFDLENBQUM7QUFDekQsQ0FBQzs7QUFQSCxNQUFNLEtBQU8sZUFBZSxHQUd4QixjQUFjLENBQ2hCLG1CQUFtQixPQUlwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbW9pemVkU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQge1xuICBDaGVja291dFN0YXRlLFxuICBDYXJkVHlwZXNTdGF0ZSxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG59IGZyb20gJy4uL2NoZWNrb3V0LXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21SZWR1Y2VyIGZyb20gJy4vLi4vcmVkdWNlcnMvY2FyZC10eXBlcy5yZWR1Y2VyJztcbmltcG9ydCB7IGdldENoZWNrb3V0U3RhdGUgfSBmcm9tICcuL2NoZWNrb3V0LnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDYXJkVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FyZFR5cGVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBDYXJkVHlwZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0YXRlLFxuICAoc3RhdGU6IENoZWNrb3V0U3RhdGUpID0+IHN0YXRlLmNhcmRUeXBlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcmRUeXBlc0VudGl0ZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICB7IFtjb2RlOiBzdHJpbmddOiBDYXJkVHlwZSB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcmRUeXBlc1N0YXRlLFxuICBmcm9tUmVkdWNlci5nZXRDYXJkVHlwZXNFbnRpdGVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQ2FyZFR5cGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgQ2FyZFR5cGVbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJkVHlwZXNFbnRpdGVzLFxuICBlbnRpdGVzID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZW50aXRlcykubWFwKGNvZGUgPT4gZW50aXRlc1tjb2RlXSk7XG4gIH1cbik7XG4iXX0=