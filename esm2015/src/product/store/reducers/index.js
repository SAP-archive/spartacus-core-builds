/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { CURRENCY_CHANGE, LANGUAGE_CHANGE } from '../../../site-context';
import { entityLoaderReducer } from '../../../state/utils/entity-loader/entity-loader.reducer';
import { PRODUCT_DETAIL_ENTITY } from '../product-state';
import * as fromProductReferences from './product-references.reducer';
import * as fromProductReviews from './product-reviews.reducer';
import * as fromProductsSearch from './product-search.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        search: fromProductsSearch.reducer,
        details: entityLoaderReducer(PRODUCT_DETAIL_ENTITY),
        reviews: fromProductReviews.reducer,
        references: fromProductReferences.reducer,
    };
}
/** @type {?} */
export const reducerToken = new InjectionToken('ProductReducers');
/** @type {?} */
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearProductsState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === CURRENCY_CHANGE || action.type === LANGUAGE_CHANGE) {
            state = undefined;
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export const metaReducers = [clearProductsState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9GLE9BQU8sRUFBaUIscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxLQUFLLGtCQUFrQixNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxrQkFBa0IsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUUvRCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsTUFBTSxFQUFFLGtCQUFrQixDQUFDLE9BQU87UUFDbEMsT0FBTyxFQUFFLG1CQUFtQixDQUFVLHFCQUFxQixDQUFDO1FBQzVELE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPO1FBQ25DLFVBQVUsRUFBRSxxQkFBcUIsQ0FBQyxPQUFPO0tBQzFDLENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUFrQyxpQkFBaUIsQ0FBQzs7QUFFMUUsTUFBTSxPQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQ2hDLE9BQTJCO0lBRTNCOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGVBQWUsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGVBQWUsRUFBRTtZQUN0RSxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsRUFBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxPQUFPLFlBQVksR0FBdUIsQ0FBQyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlciwgQWN0aW9uUmVkdWNlck1hcCwgTWV0YVJlZHVjZXIgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBDVVJSRU5DWV9DSEFOR0UsIExBTkdVQUdFX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dCc7XG5pbXBvcnQgeyBlbnRpdHlMb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgUHJvZHVjdHNTdGF0ZSwgUFJPRFVDVF9ERVRBSUxfRU5USVRZIH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tUHJvZHVjdFJlZmVyZW5jZXMgZnJvbSAnLi9wcm9kdWN0LXJlZmVyZW5jZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUHJvZHVjdFJldmlld3MgZnJvbSAnLi9wcm9kdWN0LXJldmlld3MucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUHJvZHVjdHNTZWFyY2ggZnJvbSAnLi9wcm9kdWN0LXNlYXJjaC5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8UHJvZHVjdHNTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIHNlYXJjaDogZnJvbVByb2R1Y3RzU2VhcmNoLnJlZHVjZXIsXG4gICAgZGV0YWlsczogZW50aXR5TG9hZGVyUmVkdWNlcjxQcm9kdWN0PihQUk9EVUNUX0RFVEFJTF9FTlRJVFkpLFxuICAgIHJldmlld3M6IGZyb21Qcm9kdWN0UmV2aWV3cy5yZWR1Y2VyLFxuICAgIHJlZmVyZW5jZXM6IGZyb21Qcm9kdWN0UmVmZXJlbmNlcy5yZWR1Y2VyLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxQcm9kdWN0c1N0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPFByb2R1Y3RzU3RhdGU+PignUHJvZHVjdFJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUHJvZHVjdHNTdGF0ZShcbiAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxhbnk+XG4pOiBBY3Rpb25SZWR1Y2VyPGFueT4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gQ1VSUkVOQ1lfQ0hBTkdFIHx8IGFjdGlvbi50eXBlID09PSBMQU5HVUFHRV9DSEFOR0UpIHtcbiAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW2NsZWFyUHJvZHVjdHNTdGF0ZV07XG4iXX0=