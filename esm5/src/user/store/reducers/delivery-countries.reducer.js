/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions/index';
/** @type {?} */
export var initialState = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromAction.LOAD_DELIVERY_COUNTRIES_SUCCESS: {
            /** @type {?} */
            var deliveryCountries = action.payload;
            /** @type {?} */
            var entities = deliveryCountries.reduce((/**
             * @param {?} countryEntities
             * @param {?} country
             * @return {?}
             */
            function (countryEntities, country) {
                var _a;
                return tslib_1.__assign({}, countryEntities, (_a = {}, _a[country.isocode] = country, _a));
            }), tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case fromAction.CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9kZWxpdmVyeS1jb3VudHJpZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxVQUFVLE1BQU0sa0JBQWtCLENBQUM7O0FBRy9DLE1BQU0sS0FBTyxZQUFZLEdBQTJCO0lBQ2xELFFBQVEsRUFBRSxFQUFFO0NBQ2I7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQXNFO0lBRHRFLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOztnQkFDekMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE9BQU87O2dCQUNsQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7Ozs7WUFDdkMsVUFBQyxlQUErQyxFQUFFLE9BQWdCOztnQkFDaEUsNEJBQ0ssZUFBZSxlQUNqQixPQUFPLENBQUMsT0FBTyxJQUFHLE9BQU8sT0FDMUI7WUFDSixDQUFDLHdCQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsVUFBQSxJQUNSO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxpdmVyeUNvdW50cmllc1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBEZWxpdmVyeUNvdW50cmllc1N0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbi5EZWxpdmVyeUNvdW50cmllc0FjdGlvbiB8IGZyb21BY3Rpb24uQ2xlYXJNaXNjc0RhdGFcbik6IERlbGl2ZXJ5Q291bnRyaWVzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfREVMSVZFUllfQ09VTlRSSUVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGRlbGl2ZXJ5Q291bnRyaWVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGRlbGl2ZXJ5Q291bnRyaWVzLnJlZHVjZShcbiAgICAgICAgKGNvdW50cnlFbnRpdGllczogeyBbaXNvY29kZTogc3RyaW5nXTogQ291bnRyeSB9LCBjb3VudHJ5OiBDb3VudHJ5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNvdW50cnlFbnRpdGllcyxcbiAgICAgICAgICAgIFtjb3VudHJ5Lmlzb2NvZGVdOiBjb3VudHJ5LFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uQ0xFQVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=