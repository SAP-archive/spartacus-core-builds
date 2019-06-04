/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            const entities = currencies.reduce((/**
             * @param {?} currEntities
             * @param {?} currency
             * @return {?}
             */
            (currEntities, currency) => {
                return Object.assign({}, currEntities, { [currency.isocode]: currency });
            }), Object.assign({}, state.entities));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zdG9yZS9yZWR1Y2Vycy9jdXJyZW5jaWVzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxjQUFjLE1BQU0sOEJBQThCLENBQUM7O0FBSS9ELE1BQU0sT0FBTyxZQUFZLEdBQW9CO0lBQzNDLFFBQVEsRUFBRSxJQUFJO0lBQ2QsY0FBYyxFQUFFLElBQUk7Q0FDckI7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQXVDO0lBRXZDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztrQkFDckMsVUFBVSxHQUFlLE1BQU0sQ0FBQyxPQUFPOztrQkFDdkMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNOzs7OztZQUNoQyxDQUFDLFlBQTZDLEVBQUUsUUFBa0IsRUFBRSxFQUFFO2dCQUNwRSx5QkFDSyxZQUFZLElBQ2YsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxJQUM1QjtZQUNKLENBQUMscUJBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEI7WUFFRCx5QkFDSyxLQUFLLElBQ1IsUUFBUSxJQUNSO1NBQ0g7UUFFRCxLQUFLLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztrQkFDakMsT0FBTyxHQUFXLE1BQU0sQ0FBQyxPQUFPO1lBRXRDLHlCQUNLLEtBQUssSUFDUixjQUFjLEVBQUUsT0FBTyxJQUN2QjtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tQ3VycmVuY2llcyBmcm9tICcuLi9hY3Rpb25zL2N1cnJlbmNpZXMuYWN0aW9uJztcbmltcG9ydCB7IEN1cnJlbmNpZXNTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEN1cnJlbmNpZXNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IG51bGwsXG4gIGFjdGl2ZUN1cnJlbmN5OiBudWxsLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21DdXJyZW5jaWVzLkN1cnJlbmNpZXNBY3Rpb25cbik6IEN1cnJlbmNpZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21DdXJyZW5jaWVzLkxPQURfQ1VSUkVOQ0lFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBjdXJyZW5jaWVzOiBDdXJyZW5jeVtdID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGN1cnJlbmNpZXMucmVkdWNlKFxuICAgICAgICAoY3VyckVudGl0aWVzOiB7IFtpc29jb2RlOiBzdHJpbmddOiBDdXJyZW5jeSB9LCBjdXJyZW5jeTogQ3VycmVuY3kpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY3VyckVudGl0aWVzLFxuICAgICAgICAgICAgW2N1cnJlbmN5Lmlzb2NvZGVdOiBjdXJyZW5jeSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQ3VycmVuY2llcy5TRVRfQUNUSVZFX0NVUlJFTkNZOiB7XG4gICAgICBjb25zdCBpc29jb2RlOiBzdHJpbmcgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZUN1cnJlbmN5OiBpc29jb2RlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=