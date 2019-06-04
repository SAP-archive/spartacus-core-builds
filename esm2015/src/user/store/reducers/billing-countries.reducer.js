/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            const entities = billingCountries.reduce((/**
             * @param {?} countryEntities
             * @param {?} name
             * @return {?}
             */
            (countryEntities, name) => {
                return Object.assign({}, countryEntities, { [name.isocode]: name });
            }), Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3JlZHVjZXJzL2JpbGxpbmctY291bnRyaWVzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxVQUFVLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFrQixNQUFNLGtCQUFrQixDQUFDOztBQUVwRSxNQUFNLE9BQU8sWUFBWSxHQUEwQjtJQUNqRCxRQUFRLEVBQUUsRUFBRTtDQUNiOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUEwRDtJQUUxRCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7a0JBQ3hDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPOztrQkFDakMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLE1BQU07Ozs7O1lBQ3RDLENBQUMsZUFBMkMsRUFBRSxJQUFTLEVBQUUsRUFBRTtnQkFDekQseUJBQ0ssZUFBZSxJQUNsQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLElBQ3BCO1lBQ0osQ0FBQyxxQkFFSSxLQUFLLENBQUMsUUFBUSxFQUVwQjtZQUVELHlCQUNLLEtBQUssSUFDUixRQUFRLElBQ1I7U0FDSDtRQUVELEtBQUssZ0JBQWdCLENBQUMsQ0FBQztZQUNyQixPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmlsbGluZ0NvdW50cmllc1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvYmlsbGluZy1jb3VudHJpZXMuYWN0aW9uJztcbmltcG9ydCB7IENMRUFSX01JU0NTX0RBVEEsIENsZWFyTWlzY3NEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEJpbGxpbmdDb3VudHJpZXNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb24uQmlsbGluZ0NvdW50cmllc0FjdGlvbiB8IENsZWFyTWlzY3NEYXRhXG4pOiBCaWxsaW5nQ291bnRyaWVzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfQklMTElOR19DT1VOVFJJRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgYmlsbGluZ0NvdW50cmllcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBiaWxsaW5nQ291bnRyaWVzLnJlZHVjZShcbiAgICAgICAgKGNvdW50cnlFbnRpdGllczogeyBbaXNvY29kZTogc3RyaW5nXTogYW55IH0sIG5hbWU6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jb3VudHJ5RW50aXRpZXMsXG4gICAgICAgICAgICBbbmFtZS5pc29jb2RlXTogbmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDTEVBUl9NSVNDU19EQVRBOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==