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
        case fromAction.LOAD_TITLES_SUCCESS: {
            /** @type {?} */
            var titles = action.payload;
            /** @type {?} */
            var entities = titles.reduce(function (titleEntities, name) {
                var _a;
                return tslib_1.__assign({}, titleEntities, (_a = {}, _a[name.code] = name, _a));
            }, tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case fromAction.CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy90aXRsZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxVQUFVLE1BQU0sa0JBQWtCLENBQUM7O0FBRy9DLE1BQU0sS0FBTyxZQUFZLEdBQWdCO0lBQ3ZDLFFBQVEsRUFBRSxFQUFFO0NBQ2I7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQTJEO0lBRDNELHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztnQkFDN0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPOztnQkFDdkIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQzVCLFVBQUMsYUFBd0MsRUFBRSxJQUFXOztnQkFDcEQsNEJBQ0ssYUFBYSxlQUNmLElBQUksQ0FBQyxJQUFJLElBQUcsSUFBSSxPQUNqQjtZQUNKLENBQUMsdUJBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEI7WUFFRCw0QkFDSyxLQUFLLElBQ1IsUUFBUSxVQUFBLElBQ1I7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpdGxlc1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi8uLi9vY2MnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBUaXRsZXNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb24uVGl0bGVzQWN0aW9uIHwgZnJvbUFjdGlvbi5DbGVhck1pc2NzRGF0YVxuKTogVGl0bGVzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfVElUTEVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHRpdGxlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSB0aXRsZXMucmVkdWNlKFxuICAgICAgICAodGl0bGVFbnRpdGllczogeyBbY29kZTogc3RyaW5nXTogVGl0bGUgfSwgbmFtZTogVGl0bGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udGl0bGVFbnRpdGllcyxcbiAgICAgICAgICAgIFtuYW1lLmNvZGVdOiBuYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uQ0xFQVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=