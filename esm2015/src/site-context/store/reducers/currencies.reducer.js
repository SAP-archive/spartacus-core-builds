/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromCurrencies from '../actions/currencies.action';
/** @type {?} */
export const initialState = {
    entities: null,
    activeCurrency: null,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromCurrencies.LOAD_CURRENCIES_SUCCESS: {
            /** @type {?} */
            const currencies = action.payload;
            /** @type {?} */
            const entities = currencies.reduce((currEntities, currency) => {
                return Object.assign({}, currEntities, { [currency.isocode]: currency });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case fromCurrencies.SET_ACTIVE_CURRENCY: {
            /** @type {?} */
            const isocode = action.payload;
            return Object.assign({}, state, { activeCurrency: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zdG9yZS9yZWR1Y2Vycy9jdXJyZW5jaWVzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxjQUFjLE1BQU0sOEJBQThCLENBQUM7O0FBSS9ELE1BQU0sT0FBTyxZQUFZLEdBQW9CO0lBQzNDLFFBQVEsRUFBRSxJQUFJO0lBQ2QsY0FBYyxFQUFFLElBQUk7Q0FDckI7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQXVDO0lBRXZDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztrQkFDckMsVUFBVSxHQUFlLE1BQU0sQ0FBQyxPQUFPOztrQkFDdkMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQ2hDLENBQUMsWUFBNkMsRUFBRSxRQUFrQixFQUFFLEVBQUU7Z0JBQ3BFLHlCQUNLLFlBQVksSUFDZixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLElBQzVCO1lBQ0osQ0FBQyxvQkFFSSxLQUFLLENBQUMsUUFBUSxFQUVwQjtZQUVELHlCQUNLLEtBQUssSUFDUixRQUFRLElBQ1I7U0FDSDtRQUVELEtBQUssY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2tCQUNqQyxPQUFPLEdBQVcsTUFBTSxDQUFDLE9BQU87WUFFdEMseUJBQ0ssS0FBSyxJQUNSLGNBQWMsRUFBRSxPQUFPLElBQ3ZCO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21DdXJyZW5jaWVzIGZyb20gJy4uL2FjdGlvbnMvY3VycmVuY2llcy5hY3Rpb24nO1xuaW1wb3J0IHsgQ3VycmVuY2llc1N0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ3VycmVuY2llc1N0YXRlID0ge1xuICBlbnRpdGllczogbnVsbCxcbiAgYWN0aXZlQ3VycmVuY3k6IG51bGwsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUN1cnJlbmNpZXMuQ3VycmVuY2llc0FjdGlvblxuKTogQ3VycmVuY2llc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUN1cnJlbmNpZXMuTE9BRF9DVVJSRU5DSUVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGN1cnJlbmNpZXM6IEN1cnJlbmN5W10gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0gY3VycmVuY2llcy5yZWR1Y2UoXG4gICAgICAgIChjdXJyRW50aXRpZXM6IHsgW2lzb2NvZGU6IHN0cmluZ106IEN1cnJlbmN5IH0sIGN1cnJlbmN5OiBDdXJyZW5jeSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jdXJyRW50aXRpZXMsXG4gICAgICAgICAgICBbY3VycmVuY3kuaXNvY29kZV06IGN1cnJlbmN5LFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21DdXJyZW5jaWVzLlNFVF9BQ1RJVkVfQ1VSUkVOQ1k6IHtcbiAgICAgIGNvbnN0IGlzb2NvZGU6IHN0cmluZyA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZlQ3VycmVuY3k6IGlzb2NvZGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==