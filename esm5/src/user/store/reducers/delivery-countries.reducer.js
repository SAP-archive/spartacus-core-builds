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
        case fromAction.LOAD_DELIVERY_COUNTRIES_SUCCESS: {
            /** @type {?} */
            var deliveryCountries = action.payload;
            /** @type {?} */
            var entities = deliveryCountries.reduce(function (countryEntities, country) {
                var _a;
                return tslib_1.__assign({}, countryEntities, (_a = {}, _a[country.isocode] = country, _a));
            }, tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case fromAction.CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9kZWxpdmVyeS1jb3VudHJpZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxVQUFVLE1BQU0sa0JBQWtCLENBQUM7O0FBRy9DLE1BQU0sS0FBTyxZQUFZLEdBQTJCO0lBQ2xELFFBQVEsRUFBRSxFQUFFO0NBQ2I7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQXNFO0lBRHRFLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOztnQkFDekMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE9BQU87O2dCQUNsQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUN2QyxVQUFDLGVBQStDLEVBQUUsT0FBZ0I7O2dCQUNoRSw0QkFDSyxlQUFlLGVBQ2pCLE9BQU8sQ0FBQyxPQUFPLElBQUcsT0FBTyxPQUMxQjtZQUNKLENBQUMsdUJBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEI7WUFFRCw0QkFDSyxLQUFLLElBQ1IsUUFBUSxVQUFBLElBQ1I7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbGl2ZXJ5Q291bnRyaWVzU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IERlbGl2ZXJ5Q291bnRyaWVzU3RhdGUgPSB7XG4gIGVudGl0aWVzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLkRlbGl2ZXJ5Q291bnRyaWVzQWN0aW9uIHwgZnJvbUFjdGlvbi5DbGVhck1pc2NzRGF0YVxuKTogRGVsaXZlcnlDb3VudHJpZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9ERUxJVkVSWV9DT1VOVFJJRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZGVsaXZlcnlDb3VudHJpZXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0gZGVsaXZlcnlDb3VudHJpZXMucmVkdWNlKFxuICAgICAgICAoY291bnRyeUVudGl0aWVzOiB7IFtpc29jb2RlOiBzdHJpbmddOiBDb3VudHJ5IH0sIGNvdW50cnk6IENvdW50cnkpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY291bnRyeUVudGl0aWVzLFxuICAgICAgICAgICAgW2NvdW50cnkuaXNvY29kZV06IGNvdW50cnksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5DTEVBUl9NSVNDU19EQVRBOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==