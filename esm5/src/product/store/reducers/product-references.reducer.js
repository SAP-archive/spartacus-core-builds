/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProductActions } from '../actions/index';
/** @type {?} */
export var initialState = {
    productCode: '',
    list: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ProductActions.LOAD_PRODUCT_REFERENCES_SUCCESS: {
            /** @type {?} */
            var productCode = action.payload.productCode;
            /** @type {?} */
            var list = action.payload.list;
            return tslib_1.__assign({}, state, { list: list,
                productCode: productCode });
        }
    }
    return state;
}
/** @type {?} */
export var getProductReferenceList = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.list; });
/** @type {?} */
export var getProductReferenceProductCode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.productCode; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJlZmVyZW5jZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHbEQsTUFBTSxLQUFPLFlBQVksR0FBMkI7SUFDbEQsV0FBVyxFQUFFLEVBQUU7SUFDZixJQUFJLEVBQUUsRUFBRTtDQUNUOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUE4QztJQUQ5QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7Z0JBQzdDLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7O2dCQUN4QyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBRWhDLDRCQUNLLEtBQUssSUFDUixJQUFJLE1BQUE7Z0JBQ0osV0FBVyxhQUFBLElBQ1g7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sS0FBTyx1QkFBdUI7Ozs7QUFBRyxVQUNyQyxLQUE2QixJQUNOLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUE7O0FBQ25DLE1BQU0sS0FBTyw4QkFBOEI7Ozs7QUFBRyxVQUM1QyxLQUE2QixJQUNsQixPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlID0ge1xuICBwcm9kdWN0Q29kZTogJycsXG4gIGxpc3Q6IFtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFByb2R1Y3RBY3Rpb25zLlByb2R1Y3RSZWZlcmVuY2VzQWN0aW9uXG4pOiBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcHJvZHVjdENvZGUgPSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Q29kZTtcbiAgICAgIGNvbnN0IGxpc3QgPSBhY3Rpb24ucGF5bG9hZC5saXN0O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbGlzdCxcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RSZWZlcmVuY2VMaXN0ID0gKFxuICBzdGF0ZTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZVxuKTogUHJvZHVjdFJlZmVyZW5jZVtdID0+IHN0YXRlLmxpc3Q7XG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFJlZmVyZW5jZVByb2R1Y3RDb2RlID0gKFxuICBzdGF0ZTogUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZVxuKTogc3RyaW5nID0+IHN0YXRlLnByb2R1Y3RDb2RlO1xuIl19