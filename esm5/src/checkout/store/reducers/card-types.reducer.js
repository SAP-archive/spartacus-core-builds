/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        case fromAction.LOAD_CARD_TYPES_SUCCESS: {
            /** @type {?} */
            var cardTypes = action.payload;
            /** @type {?} */
            var entities = cardTypes.reduce(function (cardTypesEntities, name) {
                var _a;
                return tslib_1.__assign({}, cardTypesEntities, (_a = {}, _a[name.code] = name, _a));
            }, tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case fromAction.CHECKOUT_CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
/** @type {?} */
export var getCardTypesEntites = function (state) { return state.entities; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3JlZHVjZXJzL2NhcmQtdHlwZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxVQUFVLE1BQU0sa0JBQWtCLENBQUM7O0FBRy9DLE1BQU0sS0FBTyxZQUFZLEdBQW1CO0lBQzFDLFFBQVEsRUFBRSxFQUFFO0NBQ2I7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQXVFO0lBRHZFLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztnQkFDakMsU0FBUyxHQUFlLE1BQU0sQ0FBQyxPQUFPOztnQkFDdEMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQy9CLFVBQUMsaUJBQStDLEVBQUUsSUFBYzs7Z0JBQzlELDRCQUNLLGlCQUFpQixlQUNuQixJQUFJLENBQUMsSUFBSSxJQUFHLElBQUksT0FDakI7WUFDSixDQUFDLHVCQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsVUFBQSxJQUNSO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxLQUFPLG1CQUFtQixHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRUeXBlc1N0YXRlIH0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENhcmRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDYXJkVHlwZXNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb24uQ2FyZFR5cGVzQWN0aW9uIHwgZnJvbUFjdGlvbi5DaGVja291dE1pc2NzRGF0YUFjdGlvblxuKTogQ2FyZFR5cGVzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfQ0FSRF9UWVBFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBjYXJkVHlwZXM6IENhcmRUeXBlW10gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0gY2FyZFR5cGVzLnJlZHVjZShcbiAgICAgICAgKGNhcmRUeXBlc0VudGl0aWVzOiB7IFtjb2RlOiBzdHJpbmddOiBDYXJkVHlwZSB9LCBuYW1lOiBDYXJkVHlwZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jYXJkVHlwZXNFbnRpdGllcyxcbiAgICAgICAgICAgIFtuYW1lLmNvZGVdOiBuYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uQ0hFQ0tPVVRfQ0xFQVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJkVHlwZXNFbnRpdGVzID0gKHN0YXRlOiBDYXJkVHlwZXNTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXM7XG4iXX0=