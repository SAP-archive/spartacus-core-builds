/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromCurrencies from '../actions/currencies.action';
/** @type {?} */
export var initialState = {
    entities: null,
    activeCurrency: null,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromCurrencies.LOAD_CURRENCIES_SUCCESS: {
            /** @type {?} */
            var currencies = action.payload;
            /** @type {?} */
            var entities = currencies.reduce(function (currEntities, currency) {
                var _a;
                return tslib_1.__assign({}, currEntities, (_a = {}, _a[currency.isocode] = currency, _a));
            }, tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case fromCurrencies.SET_ACTIVE_CURRENCY: {
            /** @type {?} */
            var isocode = action.payload;
            return tslib_1.__assign({}, state, { activeCurrency: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zdG9yZS9yZWR1Y2Vycy9jdXJyZW5jaWVzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssY0FBYyxNQUFNLDhCQUE4QixDQUFDOztBQUkvRCxNQUFNLEtBQU8sWUFBWSxHQUFvQjtJQUMzQyxRQUFRLEVBQUUsSUFBSTtJQUNkLGNBQWMsRUFBRSxJQUFJO0NBQ3JCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUF1QztJQUR2QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Z0JBQ3JDLFVBQVUsR0FBZSxNQUFNLENBQUMsT0FBTzs7Z0JBQ3ZDLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUNoQyxVQUFDLFlBQTZDLEVBQUUsUUFBa0I7O2dCQUNoRSw0QkFDSyxZQUFZLGVBQ2QsUUFBUSxDQUFDLE9BQU8sSUFBRyxRQUFRLE9BQzVCO1lBQ0osQ0FBQyx1QkFFSSxLQUFLLENBQUMsUUFBUSxFQUVwQjtZQUVELDRCQUNLLEtBQUssSUFDUixRQUFRLFVBQUEsSUFDUjtTQUNIO1FBRUQsS0FBSyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Z0JBQ2pDLE9BQU8sR0FBVyxNQUFNLENBQUMsT0FBTztZQUV0Qyw0QkFDSyxLQUFLLElBQ1IsY0FBYyxFQUFFLE9BQU8sSUFDdkI7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUN1cnJlbmNpZXMgZnJvbSAnLi4vYWN0aW9ucy9jdXJyZW5jaWVzLmFjdGlvbic7XG5pbXBvcnQgeyBDdXJyZW5jaWVzU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDdXJyZW5jaWVzU3RhdGUgPSB7XG4gIGVudGl0aWVzOiBudWxsLFxuICBhY3RpdmVDdXJyZW5jeTogbnVsbCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQ3VycmVuY2llcy5DdXJyZW5jaWVzQWN0aW9uXG4pOiBDdXJyZW5jaWVzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQ3VycmVuY2llcy5MT0FEX0NVUlJFTkNJRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgY3VycmVuY2llczogQ3VycmVuY3lbXSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBjdXJyZW5jaWVzLnJlZHVjZShcbiAgICAgICAgKGN1cnJFbnRpdGllczogeyBbaXNvY29kZTogc3RyaW5nXTogQ3VycmVuY3kgfSwgY3VycmVuY3k6IEN1cnJlbmN5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmN1cnJFbnRpdGllcyxcbiAgICAgICAgICAgIFtjdXJyZW5jeS5pc29jb2RlXTogY3VycmVuY3ksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUN1cnJlbmNpZXMuU0VUX0FDVElWRV9DVVJSRU5DWToge1xuICAgICAgY29uc3QgaXNvY29kZTogc3RyaW5nID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmVDdXJyZW5jeTogaXNvY29kZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19