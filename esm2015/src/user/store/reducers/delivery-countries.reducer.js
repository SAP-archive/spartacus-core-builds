/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/index';
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
        case fromAction.LOAD_DELIVERY_COUNTRIES_SUCCESS: {
            /** @type {?} */
            const deliveryCountries = action.payload;
            /** @type {?} */
            const entities = deliveryCountries.reduce((countryEntities, country) => {
                return Object.assign({}, countryEntities, { [country.isocode]: country });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case fromAction.CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9kZWxpdmVyeS1jb3VudHJpZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxPQUFPLFlBQVksR0FBMkI7SUFDbEQsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBc0U7SUFFdEUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLCtCQUErQixDQUFDLENBQUM7O2tCQUN6QyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsT0FBTzs7a0JBQ2xDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQ3ZDLENBQUMsZUFBK0MsRUFBRSxPQUFnQixFQUFFLEVBQUU7Z0JBQ3BFLHlCQUNLLGVBQWUsSUFDbEIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxJQUMxQjtZQUNKLENBQUMsb0JBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEI7WUFFRCx5QkFDSyxLQUFLLElBQ1IsUUFBUSxJQUNSO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxpdmVyeUNvdW50cmllc1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogRGVsaXZlcnlDb3VudHJpZXNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb24uRGVsaXZlcnlDb3VudHJpZXNBY3Rpb24gfCBmcm9tQWN0aW9uLkNsZWFyTWlzY3NEYXRhXG4pOiBEZWxpdmVyeUNvdW50cmllc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX0RFTElWRVJZX0NPVU5UUklFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBkZWxpdmVyeUNvdW50cmllcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBkZWxpdmVyeUNvdW50cmllcy5yZWR1Y2UoXG4gICAgICAgIChjb3VudHJ5RW50aXRpZXM6IHsgW2lzb2NvZGU6IHN0cmluZ106IENvdW50cnkgfSwgY291bnRyeTogQ291bnRyeSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jb3VudHJ5RW50aXRpZXMsXG4gICAgICAgICAgICBbY291bnRyeS5pc29jb2RlXTogY291bnRyeSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkNMRUFSX01JU0NTX0RBVEE6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19