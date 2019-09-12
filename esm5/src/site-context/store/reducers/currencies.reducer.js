/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SiteContextActions } from '../actions/index';
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
        case SiteContextActions.LOAD_CURRENCIES_SUCCESS: {
            /** @type {?} */
            var currencies = action.payload;
            /** @type {?} */
            var entities = currencies.reduce((/**
             * @param {?} currEntities
             * @param {?} currency
             * @return {?}
             */
            function (currEntities, currency) {
                var _a;
                return tslib_1.__assign({}, currEntities, (_a = {}, _a[currency.isocode] = currency, _a));
            }), tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case SiteContextActions.SET_ACTIVE_CURRENCY: {
            /** @type {?} */
            var isocode = action.payload;
            return tslib_1.__assign({}, state, { activeCurrency: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zdG9yZS9yZWR1Y2Vycy9jdXJyZW5jaWVzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHdEQsTUFBTSxLQUFPLFlBQVksR0FBb0I7SUFDM0MsUUFBUSxFQUFFLElBQUk7SUFDZCxjQUFjLEVBQUUsSUFBSTtDQUNyQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBMkM7SUFEM0Msc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Z0JBQ3pDLFVBQVUsR0FBZSxNQUFNLENBQUMsT0FBTzs7Z0JBQ3ZDLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTTs7Ozs7WUFDaEMsVUFBQyxZQUE2QyxFQUFFLFFBQWtCOztnQkFDaEUsNEJBQ0ssWUFBWSxlQUNkLFFBQVEsQ0FBQyxPQUFPLElBQUcsUUFBUSxPQUM1QjtZQUNKLENBQUMsd0JBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEI7WUFFRCw0QkFDSyxLQUFLLElBQ1IsUUFBUSxVQUFBLElBQ1I7U0FDSDtRQUVELEtBQUssa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Z0JBQ3JDLE9BQU8sR0FBVyxNQUFNLENBQUMsT0FBTztZQUV0Qyw0QkFDSyxLQUFLLElBQ1IsY0FBYyxFQUFFLE9BQU8sSUFDdkI7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ3VycmVuY2llc1N0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDdXJyZW5jaWVzU3RhdGUgPSB7XG4gIGVudGl0aWVzOiBudWxsLFxuICBhY3RpdmVDdXJyZW5jeTogbnVsbCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBTaXRlQ29udGV4dEFjdGlvbnMuQ3VycmVuY2llc0FjdGlvblxuKTogQ3VycmVuY2llc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU2l0ZUNvbnRleHRBY3Rpb25zLkxPQURfQ1VSUkVOQ0lFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBjdXJyZW5jaWVzOiBDdXJyZW5jeVtdID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGN1cnJlbmNpZXMucmVkdWNlKFxuICAgICAgICAoY3VyckVudGl0aWVzOiB7IFtpc29jb2RlOiBzdHJpbmddOiBDdXJyZW5jeSB9LCBjdXJyZW5jeTogQ3VycmVuY3kpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY3VyckVudGl0aWVzLFxuICAgICAgICAgICAgW2N1cnJlbmN5Lmlzb2NvZGVdOiBjdXJyZW5jeSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBTaXRlQ29udGV4dEFjdGlvbnMuU0VUX0FDVElWRV9DVVJSRU5DWToge1xuICAgICAgY29uc3QgaXNvY29kZTogc3RyaW5nID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmVDdXJyZW5jeTogaXNvY29kZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19