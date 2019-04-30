/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import * as fromReducer from './../reducers/card-types.reducer';
import { getCheckoutState } from './checkout.selectors';
/** @type {?} */
export const getCardTypesState = createSelector(getCheckoutState, (state) => state.cardTypes);
/** @type {?} */
export const getCardTypesEntites = createSelector(getCardTypesState, fromReducer.getCardTypesEntites);
/** @type {?} */
export const getAllCardTypes = createSelector(getCardTypesEntites, entites => {
    return Object.keys(entites).map(code => entites[code]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvc2VsZWN0b3JzL2NhcmQtdHlwZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEtBQUssV0FBVyxNQUFNLGtDQUFrQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV4RCxNQUFNLE9BQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsZ0JBQWdCLEVBQ2hCLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDMUM7O0FBRUQsTUFBTSxPQUFPLG1CQUFtQixHQUc1QixjQUFjLENBQ2hCLGlCQUFpQixFQUNqQixXQUFXLENBQUMsbUJBQW1CLENBQ2hDOztBQUVELE1BQU0sT0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLE9BQU8sQ0FBQyxFQUFFO0lBQ1IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbW9pemVkU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQge1xuICBDaGVja291dFN0YXRlLFxuICBDYXJkVHlwZXNTdGF0ZSxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG59IGZyb20gJy4uL2NoZWNrb3V0LXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21SZWR1Y2VyIGZyb20gJy4vLi4vcmVkdWNlcnMvY2FyZC10eXBlcy5yZWR1Y2VyJztcbmltcG9ydCB7IENhcmRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0Q2hlY2tvdXRTdGF0ZSB9IGZyb20gJy4vY2hlY2tvdXQuc2VsZWN0b3JzJztcblxuZXhwb3J0IGNvbnN0IGdldENhcmRUeXBlc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgQ2FyZFR5cGVzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2hlY2tvdXRTdGF0ZSxcbiAgKHN0YXRlOiBDaGVja291dFN0YXRlKSA9PiBzdGF0ZS5jYXJkVHlwZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJkVHlwZXNFbnRpdGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgeyBbY29kZTogc3RyaW5nXTogQ2FyZFR5cGUgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJkVHlwZXNTdGF0ZSxcbiAgZnJvbVJlZHVjZXIuZ2V0Q2FyZFR5cGVzRW50aXRlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbENhcmRUeXBlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIENhcmRUeXBlW11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q2FyZFR5cGVzRW50aXRlcyxcbiAgZW50aXRlcyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudGl0ZXMpLm1hcChjb2RlID0+IGVudGl0ZXNbY29kZV0pO1xuICB9XG4pO1xuIl19