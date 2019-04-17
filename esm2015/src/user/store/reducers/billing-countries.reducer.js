/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/billing-countries.action';
import { CLEAR_MISCS_DATA } from '../actions/index';
/** @type {?} */
export const initialState = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromAction.LOAD_BILLING_COUNTRIES_SUCCESS: {
            /** @type {?} */
            const billingCountries = action.payload;
            /** @type {?} */
            const entities = billingCountries.reduce((countryEntities, name) => {
                return Object.assign({}, countryEntities, { [name.isocode]: name });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3JlZHVjZXJzL2JpbGxpbmctY291bnRyaWVzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxVQUFVLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFrQixNQUFNLGtCQUFrQixDQUFDOztBQUVwRSxNQUFNLE9BQU8sWUFBWSxHQUEwQjtJQUNqRCxRQUFRLEVBQUUsRUFBRTtDQUNiOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUEwRDtJQUUxRCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7a0JBQ3hDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPOztrQkFDakMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FDdEMsQ0FBQyxlQUEyQyxFQUFFLElBQVMsRUFBRSxFQUFFO2dCQUN6RCx5QkFDSyxlQUFlLElBQ2xCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksSUFDcEI7WUFDSixDQUFDLG9CQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQseUJBQ0ssS0FBSyxJQUNSLFFBQVEsSUFDUjtTQUNIO1FBRUQsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCaWxsaW5nQ291bnRyaWVzU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9iaWxsaW5nLWNvdW50cmllcy5hY3Rpb24nO1xuaW1wb3J0IHsgQ0xFQVJfTUlTQ1NfREFUQSwgQ2xlYXJNaXNjc0RhdGEgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQmlsbGluZ0NvdW50cmllc1N0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbi5CaWxsaW5nQ291bnRyaWVzQWN0aW9uIHwgQ2xlYXJNaXNjc0RhdGFcbik6IEJpbGxpbmdDb3VudHJpZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9CSUxMSU5HX0NPVU5UUklFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBiaWxsaW5nQ291bnRyaWVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGJpbGxpbmdDb3VudHJpZXMucmVkdWNlKFxuICAgICAgICAoY291bnRyeUVudGl0aWVzOiB7IFtpc29jb2RlOiBzdHJpbmddOiBhbnkgfSwgbmFtZTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNvdW50cnlFbnRpdGllcyxcbiAgICAgICAgICAgIFtuYW1lLmlzb2NvZGVdOiBuYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENMRUFSX01JU0NTX0RBVEE6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19