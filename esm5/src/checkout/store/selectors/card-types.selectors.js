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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvc2VsZWN0b3JzL2NhcmQtdHlwZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEtBQUssV0FBVyxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQU90RCxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFLLENBQUMsU0FBUyxFQUFmLENBQWU7O0FBTDNDLE1BQU0sS0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixnQkFBZ0IsT0FFakI7O0FBRUQsTUFBTSxLQUFPLG1CQUFtQixHQUc1QixjQUFjLENBQ2hCLGlCQUFpQixFQUNqQixXQUFXLENBQUMsbUJBQW1CLENBQ2hDOzs7OztBQU9DLFVBQUEsT0FBTztJQUNMLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQWIsQ0FBYSxFQUFDLENBQUM7QUFDekQsQ0FBQzs7QUFQSCxNQUFNLEtBQU8sZUFBZSxHQUd4QixjQUFjLENBQ2hCLG1CQUFtQixPQUlwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FyZFR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7XG4gIENhcmRUeXBlc1N0YXRlLFxuICBDaGVja291dFN0YXRlLFxuICBTdGF0ZVdpdGhDaGVja291dCxcbn0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVJlZHVjZXIgZnJvbSAnLi8uLi9yZWR1Y2Vycy9jYXJkLXR5cGVzLnJlZHVjZXInO1xuaW1wb3J0IHsgZ2V0Q2hlY2tvdXRTdGF0ZSB9IGZyb20gJy4vY2hlY2tvdXQuc2VsZWN0b3JzJztcblxuZXhwb3J0IGNvbnN0IGdldENhcmRUeXBlc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgQ2FyZFR5cGVzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2hlY2tvdXRTdGF0ZSxcbiAgKHN0YXRlOiBDaGVja291dFN0YXRlKSA9PiBzdGF0ZS5jYXJkVHlwZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJkVHlwZXNFbnRpdGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgeyBbY29kZTogc3RyaW5nXTogQ2FyZFR5cGUgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJkVHlwZXNTdGF0ZSxcbiAgZnJvbVJlZHVjZXIuZ2V0Q2FyZFR5cGVzRW50aXRlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbENhcmRUeXBlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIENhcmRUeXBlW11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FyZFR5cGVzRW50aXRlcyxcbiAgZW50aXRlcyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudGl0ZXMpLm1hcChjb2RlID0+IGVudGl0ZXNbY29kZV0pO1xuICB9XG4pO1xuIl19