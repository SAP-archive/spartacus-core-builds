/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { SiteContextActions } from '../../../site-context/store/actions/index';
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
export var reducerToken = new InjectionToken('ProductReducers');
/** @type {?} */
export var reducerProvider = {
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
        if (action.type === SiteContextActions.CURRENCY_CHANGE ||
            action.type === SiteContextActions.LANGUAGE_CHANGE) {
            state = undefined;
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export var metaReducers = [clearProductsState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRixPQUFPLEVBQWlCLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sS0FBSyxrQkFBa0IsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEtBQUssa0JBQWtCLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFL0QsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPO1FBQ2xDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBVSxxQkFBcUIsQ0FBQztRQUM1RCxPQUFPLEVBQUUsa0JBQWtCLENBQUMsT0FBTztRQUNuQyxVQUFVLEVBQUUscUJBQXFCLENBQUMsT0FBTztLQUMxQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQU8sWUFBWSxHQUVyQixJQUFJLGNBQWMsQ0FBa0MsaUJBQWlCLENBQUM7O0FBRTFFLE1BQU0sS0FBTyxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEI7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxPQUEyQjtJQUUzQjs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQ0UsTUFBTSxDQUFDLElBQUksS0FBSyxrQkFBa0IsQ0FBQyxlQUFlO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLEtBQUssa0JBQWtCLENBQUMsZUFBZSxFQUNsRDtZQUNBLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQU8sWUFBWSxHQUF1QixDQUFDLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25SZWR1Y2VyLCBBY3Rpb25SZWR1Y2VyTWFwLCBNZXRhUmVkdWNlciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGVudGl0eUxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBQcm9kdWN0c1N0YXRlLCBQUk9EVUNUX0RFVEFJTF9FTlRJVFkgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21Qcm9kdWN0UmVmZXJlbmNlcyBmcm9tICcuL3Byb2R1Y3QtcmVmZXJlbmNlcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21Qcm9kdWN0UmV2aWV3cyBmcm9tICcuL3Byb2R1Y3QtcmV2aWV3cy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21Qcm9kdWN0c1NlYXJjaCBmcm9tICcuL3Byb2R1Y3Qtc2VhcmNoLnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxQcm9kdWN0c1N0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgc2VhcmNoOiBmcm9tUHJvZHVjdHNTZWFyY2gucmVkdWNlcixcbiAgICBkZXRhaWxzOiBlbnRpdHlMb2FkZXJSZWR1Y2VyPFByb2R1Y3Q+KFBST0RVQ1RfREVUQUlMX0VOVElUWSksXG4gICAgcmV2aWV3czogZnJvbVByb2R1Y3RSZXZpZXdzLnJlZHVjZXIsXG4gICAgcmVmZXJlbmNlczogZnJvbVByb2R1Y3RSZWZlcmVuY2VzLnJlZHVjZXIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPFByb2R1Y3RzU3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8UHJvZHVjdHNTdGF0ZT4+KCdQcm9kdWN0UmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQcm9kdWN0c1N0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT5cbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLnR5cGUgPT09IFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0UgfHxcbiAgICAgIGFjdGlvbi50eXBlID09PSBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFXG4gICAgKSB7XG4gICAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhclByb2R1Y3RzU3RhdGVdO1xuIl19