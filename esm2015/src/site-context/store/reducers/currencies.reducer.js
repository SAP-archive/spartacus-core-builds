/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SiteContextActions } from '../actions/index';
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
        case SiteContextActions.LOAD_CURRENCIES_SUCCESS: {
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
        case SiteContextActions.SET_ACTIVE_CURRENCY: {
            /** @type {?} */
            const isocode = action.payload;
            return Object.assign({}, state, { activeCurrency: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zdG9yZS9yZWR1Y2Vycy9jdXJyZW5jaWVzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUd0RCxNQUFNLE9BQU8sWUFBWSxHQUFvQjtJQUMzQyxRQUFRLEVBQUUsSUFBSTtJQUNkLGNBQWMsRUFBRSxJQUFJO0NBQ3JCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUEyQztJQUUzQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztrQkFDekMsVUFBVSxHQUFlLE1BQU0sQ0FBQyxPQUFPOztrQkFDdkMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNOzs7OztZQUNoQyxDQUFDLFlBQTZDLEVBQUUsUUFBa0IsRUFBRSxFQUFFO2dCQUNwRSx5QkFDSyxZQUFZLElBQ2YsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxJQUM1QjtZQUNKLENBQUMscUJBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEI7WUFFRCx5QkFDSyxLQUFLLElBQ1IsUUFBUSxJQUNSO1NBQ0g7UUFFRCxLQUFLLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7O2tCQUNyQyxPQUFPLEdBQVcsTUFBTSxDQUFDLE9BQU87WUFFdEMseUJBQ0ssS0FBSyxJQUNSLGNBQWMsRUFBRSxPQUFPLElBQ3ZCO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEN1cnJlbmNpZXNTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ3VycmVuY2llc1N0YXRlID0ge1xuICBlbnRpdGllczogbnVsbCxcbiAgYWN0aXZlQ3VycmVuY3k6IG51bGwsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogU2l0ZUNvbnRleHRBY3Rpb25zLkN1cnJlbmNpZXNBY3Rpb25cbik6IEN1cnJlbmNpZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNpdGVDb250ZXh0QWN0aW9ucy5MT0FEX0NVUlJFTkNJRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgY3VycmVuY2llczogQ3VycmVuY3lbXSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBjdXJyZW5jaWVzLnJlZHVjZShcbiAgICAgICAgKGN1cnJFbnRpdGllczogeyBbaXNvY29kZTogc3RyaW5nXTogQ3VycmVuY3kgfSwgY3VycmVuY3k6IEN1cnJlbmN5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmN1cnJFbnRpdGllcyxcbiAgICAgICAgICAgIFtjdXJyZW5jeS5pc29jb2RlXTogY3VycmVuY3ksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU2l0ZUNvbnRleHRBY3Rpb25zLlNFVF9BQ1RJVkVfQ1VSUkVOQ1k6IHtcbiAgICAgIGNvbnN0IGlzb2NvZGU6IHN0cmluZyA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZlQ3VycmVuY3k6IGlzb2NvZGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==