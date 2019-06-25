/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getSiteContextState } from './site-context.selector';
/** @type {?} */
var currenciesEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.entities; });
var ɵ0 = currenciesEntitiesSelector;
/** @type {?} */
var activeCurrencySelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.activeCurrency; });
var ɵ1 = activeCurrencySelector;
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.currencies; };
/** @type {?} */
export var getCurrenciesState = createSelector(getSiteContextState, (ɵ2));
/** @type {?} */
export var getCurrenciesEntities = createSelector(getCurrenciesState, currenciesEntitiesSelector);
/** @type {?} */
export var getActiveCurrency = createSelector(getCurrenciesState, activeCurrencySelector);
var ɵ3 = /**
 * @param {?} entities
 * @return {?}
 */
function (entities) {
    return entities
        ? Object.keys(entities).map((/**
         * @param {?} isocode
         * @return {?}
         */
        function (isocode) { return entities[isocode]; }))
        : null;
};
/** @type {?} */
export var getAllCurrencies = createSelector(getCurrenciesEntities, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3NlbGVjdG9ycy9jdXJyZW5jaWVzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFRL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBRXhELDBCQUEwQjs7OztBQUFHLFVBQUMsS0FBc0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyxDQUFBOzs7SUFDdkUsc0JBQXNCOzs7O0FBQUcsVUFBQyxLQUFzQixJQUFLLE9BQUEsS0FBSyxDQUFDLGNBQWMsRUFBcEIsQ0FBb0IsQ0FBQTs7Ozs7O0FBTzdFLFVBQUMsS0FBdUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQWhCLENBQWdCOztBQUwvQyxNQUFNLEtBQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsbUJBQW1CLE9BRXBCOztBQUVELE1BQU0sS0FBTyxxQkFBcUIsR0FHOUIsY0FBYyxDQUNoQixrQkFBa0IsRUFDbEIsMEJBQTBCLENBQzNCOztBQUVELE1BQU0sS0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixrQkFBa0IsRUFDbEIsc0JBQXNCLENBQ3ZCOzs7OztBQU9DLFVBQUEsUUFBUTtJQUNOLE9BQU8sUUFBUTtRQUNiLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBakIsQ0FBaUIsRUFBQztRQUN6RCxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ1gsQ0FBQzs7QUFUSCxNQUFNLEtBQU8sZ0JBQWdCLEdBR3pCLGNBQWMsQ0FDaEIscUJBQXFCLE9BTXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ3VycmVuY2llc1N0YXRlLFxuICBDdXJyZW5jeUVudGl0aWVzLFxuICBTaXRlQ29udGV4dFN0YXRlLFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbn0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgZ2V0U2l0ZUNvbnRleHRTdGF0ZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LnNlbGVjdG9yJztcblxuY29uc3QgY3VycmVuY2llc0VudGl0aWVzU2VsZWN0b3IgPSAoc3RhdGU6IEN1cnJlbmNpZXNTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXM7XG5jb25zdCBhY3RpdmVDdXJyZW5jeVNlbGVjdG9yID0gKHN0YXRlOiBDdXJyZW5jaWVzU3RhdGUpID0+IHN0YXRlLmFjdGl2ZUN1cnJlbmN5O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVuY2llc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgQ3VycmVuY2llc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFNpdGVDb250ZXh0U3RhdGUsXG4gIChzdGF0ZTogU2l0ZUNvbnRleHRTdGF0ZSkgPT4gc3RhdGUuY3VycmVuY2llc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbmNpZXNFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIEN1cnJlbmN5RW50aXRpZXNcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q3VycmVuY2llc1N0YXRlLFxuICBjdXJyZW5jaWVzRW50aXRpZXNTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZUN1cnJlbmN5OiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgc3RyaW5nXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEN1cnJlbmNpZXNTdGF0ZSxcbiAgYWN0aXZlQ3VycmVuY3lTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbEN1cnJlbmNpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFNpdGVDb250ZXh0LFxuICBDdXJyZW5jeVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEN1cnJlbmNpZXNFbnRpdGllcyxcbiAgZW50aXRpZXMgPT4ge1xuICAgIHJldHVybiBlbnRpdGllc1xuICAgICAgPyBPYmplY3Qua2V5cyhlbnRpdGllcykubWFwKGlzb2NvZGUgPT4gZW50aXRpZXNbaXNvY29kZV0pXG4gICAgICA6IG51bGw7XG4gIH1cbik7XG4iXX0=