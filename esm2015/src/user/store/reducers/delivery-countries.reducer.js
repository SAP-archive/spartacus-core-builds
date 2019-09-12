/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserActions } from '../actions/index';
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
        case UserActions.LOAD_DELIVERY_COUNTRIES_SUCCESS: {
            /** @type {?} */
            const deliveryCountries = action.payload;
            /** @type {?} */
            const entities = deliveryCountries.reduce((/**
             * @param {?} countryEntities
             * @param {?} country
             * @return {?}
             */
            (countryEntities, country) => {
                return Object.assign({}, countryEntities, { [country.isocode]: country });
            }), Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case UserActions.CLEAR_USER_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9kZWxpdmVyeS1jb3VudHJpZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLE9BQU8sWUFBWSxHQUEyQjtJQUNsRCxRQUFRLEVBQUUsRUFBRTtDQUNiOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUE0RTtJQUU1RSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7a0JBQzFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxPQUFPOztrQkFDbEMsUUFBUSxHQUFHLGlCQUFpQixDQUFDLE1BQU07Ozs7O1lBQ3ZDLENBQUMsZUFBK0MsRUFBRSxPQUFnQixFQUFFLEVBQUU7Z0JBQ3BFLHlCQUNLLGVBQWUsSUFDbEIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxJQUMxQjtZQUNKLENBQUMscUJBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEI7WUFFRCx5QkFDSyxLQUFLLElBQ1IsUUFBUSxJQUNSO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgRGVsaXZlcnlDb3VudHJpZXNTdGF0ZSB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBEZWxpdmVyeUNvdW50cmllc1N0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogVXNlckFjdGlvbnMuRGVsaXZlcnlDb3VudHJpZXNBY3Rpb24gfCBVc2VyQWN0aW9ucy5DbGVhclVzZXJNaXNjc0RhdGFcbik6IERlbGl2ZXJ5Q291bnRyaWVzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVc2VyQWN0aW9ucy5MT0FEX0RFTElWRVJZX0NPVU5UUklFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBkZWxpdmVyeUNvdW50cmllcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBkZWxpdmVyeUNvdW50cmllcy5yZWR1Y2UoXG4gICAgICAgIChjb3VudHJ5RW50aXRpZXM6IHsgW2lzb2NvZGU6IHN0cmluZ106IENvdW50cnkgfSwgY291bnRyeTogQ291bnRyeSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jb3VudHJ5RW50aXRpZXMsXG4gICAgICAgICAgICBbY291bnRyeS5pc29jb2RlXTogY291bnRyeSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBVc2VyQWN0aW9ucy5DTEVBUl9VU0VSX01JU0NTX0RBVEE6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19