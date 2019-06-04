/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions/index';
/** @type {?} */
export var initialState = {
    entities: [],
    country: null,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromAction.LOAD_REGIONS_SUCCESS: {
            /** @type {?} */
            var entities = action.payload.entities;
            /** @type {?} */
            var country = action.payload.country;
            if (entities) {
                return tslib_1.__assign({}, state, { entities: entities,
                    country: country });
            }
            return initialState;
        }
        case fromAction.LOAD_REGIONS: {
            return tslib_1.__assign({}, state);
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvcmVnaW9ucy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxLQUFPLFlBQVksR0FBaUI7SUFDeEMsUUFBUSxFQUFFLEVBQUU7SUFDWixPQUFPLEVBQUUsSUFBSTtDQUNkOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUE0RDtJQUQ1RCxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7Z0JBQzlCLFFBQVEsR0FBYSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVE7O2dCQUM1QyxPQUFPLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQzlDLElBQUksUUFBUSxFQUFFO2dCQUNaLDRCQUNLLEtBQUssSUFDUixRQUFRLFVBQUE7b0JBQ1IsT0FBTyxTQUFBLElBQ1A7YUFDSDtZQUNELE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsS0FBSyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUIsNEJBQ0ssS0FBSyxFQUNSO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lvbnNTdGF0ZSB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBSZWdpb25zU3RhdGUgPSB7XG4gIGVudGl0aWVzOiBbXSxcbiAgY291bnRyeTogbnVsbCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLlJlZ2lvbnNBY3Rpb24gfCBmcm9tQWN0aW9uLkNsZWFyTWlzY3NEYXRhXG4pOiBSZWdpb25zU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfUkVHSU9OU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBlbnRpdGllczogUmVnaW9uW10gPSBhY3Rpb24ucGF5bG9hZC5lbnRpdGllcztcbiAgICAgIGNvbnN0IGNvdW50cnk6IHN0cmluZyA9IGFjdGlvbi5wYXlsb2FkLmNvdW50cnk7XG4gICAgICBpZiAoZW50aXRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBlbnRpdGllcyxcbiAgICAgICAgICBjb3VudHJ5LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9SRUdJT05TOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19