/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { serializePageContext } from '../../utils/cms-utils';
import { CmsActions } from '../actions/index';
/** @type {?} */
export var initialState = {
    component: undefined,
    pageContext: {},
};
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function componentExistsReducer(state, action) {
    if (state === void 0) { state = false; }
    switch (action.type) {
        case CmsActions.LOAD_CMS_COMPONENT_FAIL:
            return false;
        case CmsActions.CMS_GET_COMPONENT_FROM_PAGE:
        case CmsActions.LOAD_CMS_COMPONENT_SUCCESS:
            return true;
    }
    return state;
}
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    var _a, _b, _c, _d;
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CmsActions.LOAD_CMS_COMPONENT: {
            /** @type {?} */
            var pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            /** @type {?} */
            var context = serializePageContext(action.payload.pageContext, true);
            return tslib_1.__assign({}, state, { pageContext: tslib_1.__assign({}, state.pageContext, (_a = {}, _a[context] = pageContextReducer(state.pageContext[context], action), _a)) });
        }
        case CmsActions.LOAD_CMS_COMPONENT_FAIL: {
            /** @type {?} */
            var pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            /** @type {?} */
            var context = serializePageContext(action.payload.pageContext, true);
            return tslib_1.__assign({}, state, { pageContext: tslib_1.__assign({}, state.pageContext, (_b = {}, _b[context] = pageContextReducer(state.pageContext[context], action), _b)) });
        }
        case CmsActions.LOAD_CMS_COMPONENT_SUCCESS: {
            /** @type {?} */
            var pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            /** @type {?} */
            var context = serializePageContext(action.payload.pageContext, true);
            return tslib_1.__assign({}, state, { component: (/** @type {?} */ (action.payload.component)), pageContext: tslib_1.__assign({}, state.pageContext, (_c = {}, _c[context] = pageContextReducer(state.pageContext[context], action), _c)) });
        }
        case CmsActions.CMS_GET_COMPONENT_FROM_PAGE: {
            /** @type {?} */
            var pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            if (!Array.isArray(action.payload)) {
                /** @type {?} */
                var context = serializePageContext(action.payload.pageContext, true);
                return tslib_1.__assign({}, state, { component: (/** @type {?} */ (action.payload.component)), pageContext: tslib_1.__assign({}, state.pageContext, (_d = {}, _d[context] = pageContextReducer(state.pageContext[context], action), _d)) });
            }
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9jb21wb25lbnRzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUc5QyxNQUFNLEtBQU8sWUFBWSxHQUFzQjtJQUM3QyxTQUFTLEVBQUUsU0FBUztJQUNwQixXQUFXLEVBQUUsRUFBRTtDQUNoQjs7Ozs7OztBQUVELFNBQVMsc0JBQXNCLENBQzdCLEtBQWEsRUFDYixNQUF3QztJQUR4QyxzQkFBQSxFQUFBLGFBQWE7SUFHYixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsdUJBQXVCO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1FBRWYsS0FBSyxVQUFVLENBQUMsMkJBQTJCLENBQUM7UUFDNUMsS0FBSyxVQUFVLENBQUMsMEJBQTBCO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUF3Qzs7SUFEeEMsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7O2dCQUM1QixrQkFBa0IsR0FBRyxhQUFhLENBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUN0QixzQkFBc0IsQ0FDdkI7O2dCQUNLLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7WUFDdEUsNEJBQ0ssS0FBSyxJQUNSLFdBQVcsdUJBQ04sS0FBSyxDQUFDLFdBQVcsZUFDbkIsT0FBTyxJQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBRW5FO1NBQ0g7UUFDRCxLQUFLLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztnQkFDakMsa0JBQWtCLEdBQUcsYUFBYSxDQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDdEIsc0JBQXNCLENBQ3ZCOztnQkFDSyxPQUFPLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO1lBQ3RFLDRCQUNLLEtBQUssSUFDUixXQUFXLHVCQUNOLEtBQUssQ0FBQyxXQUFXLGVBQ25CLE9BQU8sSUFBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUVuRTtTQUNIO1FBQ0QsS0FBSyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7Z0JBQ3BDLGtCQUFrQixHQUFHLGFBQWEsQ0FDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3RCLHNCQUFzQixDQUN2Qjs7Z0JBQ0ssT0FBTyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztZQUN0RSw0QkFDSyxLQUFLLElBQ1IsU0FBUyxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFLLEVBQ3hDLFdBQVcsdUJBQ04sS0FBSyxDQUFDLFdBQVcsZUFDbkIsT0FBTyxJQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBRW5FO1NBQ0g7UUFDRCxLQUFLLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOztnQkFDckMsa0JBQWtCLEdBQUcsYUFBYSxDQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDdEIsc0JBQXNCLENBQ3ZCO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFOztvQkFDNUIsT0FBTyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztnQkFDdEUsNEJBQ0ssS0FBSyxJQUNSLFNBQVMsRUFBRSxtQkFBQSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBSyxFQUN4QyxXQUFXLHVCQUNOLEtBQUssQ0FBQyxXQUFXLGVBQ25CLE9BQU8sSUFBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUVuRTthQUNIO1NBQ0Y7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgc2VyaWFsaXplUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlscy9jbXMtdXRpbHMnO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50c0NvbnRleHQgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDb21wb25lbnRzQ29udGV4dCA9IHtcbiAgY29tcG9uZW50OiB1bmRlZmluZWQsXG4gIHBhZ2VDb250ZXh0OiB7fSxcbn07XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEV4aXN0c1JlZHVjZXI8VD4oXG4gIHN0YXRlID0gZmFsc2UsXG4gIGFjdGlvbjogQ21zQWN0aW9ucy5DbXNDb21wb25lbnRBY3Rpb248VD5cbik6IGJvb2xlYW4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDbXNBY3Rpb25zLkxPQURfQ01TX0NPTVBPTkVOVF9GQUlMOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgY2FzZSBDbXNBY3Rpb25zLkNNU19HRVRfQ09NUE9ORU5UX0ZST01fUEFHRTpcbiAgICBjYXNlIENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyPFQ+KFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBDbXNBY3Rpb25zLkNtc0NvbXBvbmVudEFjdGlvbjxUPlxuKTogQ29tcG9uZW50c0NvbnRleHQge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDbXNBY3Rpb25zLkxPQURfQ01TX0NPTVBPTkVOVDoge1xuICAgICAgY29uc3QgcGFnZUNvbnRleHRSZWR1Y2VyID0gbG9hZGVyUmVkdWNlcjxib29sZWFuPihcbiAgICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSxcbiAgICAgICAgY29tcG9uZW50RXhpc3RzUmVkdWNlclxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzZXJpYWxpemVQYWdlQ29udGV4dChhY3Rpb24ucGF5bG9hZC5wYWdlQ29udGV4dCwgdHJ1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGFnZUNvbnRleHQ6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5wYWdlQ29udGV4dCxcbiAgICAgICAgICBbY29udGV4dF06IHBhZ2VDb250ZXh0UmVkdWNlcihzdGF0ZS5wYWdlQ29udGV4dFtjb250ZXh0XSwgYWN0aW9uKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlRfRkFJTDoge1xuICAgICAgY29uc3QgcGFnZUNvbnRleHRSZWR1Y2VyID0gbG9hZGVyUmVkdWNlcjxib29sZWFuPihcbiAgICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSxcbiAgICAgICAgY29tcG9uZW50RXhpc3RzUmVkdWNlclxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzZXJpYWxpemVQYWdlQ29udGV4dChhY3Rpb24ucGF5bG9hZC5wYWdlQ29udGV4dCwgdHJ1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGFnZUNvbnRleHQ6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5wYWdlQ29udGV4dCxcbiAgICAgICAgICBbY29udGV4dF06IHBhZ2VDb250ZXh0UmVkdWNlcihzdGF0ZS5wYWdlQ29udGV4dFtjb250ZXh0XSwgYWN0aW9uKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlRfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcGFnZUNvbnRleHRSZWR1Y2VyID0gbG9hZGVyUmVkdWNlcjxib29sZWFuPihcbiAgICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSxcbiAgICAgICAgY29tcG9uZW50RXhpc3RzUmVkdWNlclxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzZXJpYWxpemVQYWdlQ29udGV4dChhY3Rpb24ucGF5bG9hZC5wYWdlQ29udGV4dCwgdHJ1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcG9uZW50OiBhY3Rpb24ucGF5bG9hZC5jb21wb25lbnQgYXMgVCxcbiAgICAgICAgcGFnZUNvbnRleHQ6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5wYWdlQ29udGV4dCxcbiAgICAgICAgICBbY29udGV4dF06IHBhZ2VDb250ZXh0UmVkdWNlcihzdGF0ZS5wYWdlQ29udGV4dFtjb250ZXh0XSwgYWN0aW9uKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQ21zQWN0aW9ucy5DTVNfR0VUX0NPTVBPTkVOVF9GUk9NX1BBR0U6IHtcbiAgICAgIGNvbnN0IHBhZ2VDb250ZXh0UmVkdWNlciA9IGxvYWRlclJlZHVjZXI8Ym9vbGVhbj4oXG4gICAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUsXG4gICAgICAgIGNvbXBvbmVudEV4aXN0c1JlZHVjZXJcbiAgICAgICk7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQpKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzZXJpYWxpemVQYWdlQ29udGV4dChhY3Rpb24ucGF5bG9hZC5wYWdlQ29udGV4dCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgY29tcG9uZW50OiBhY3Rpb24ucGF5bG9hZC5jb21wb25lbnQgYXMgVCxcbiAgICAgICAgICBwYWdlQ29udGV4dDoge1xuICAgICAgICAgICAgLi4uc3RhdGUucGFnZUNvbnRleHQsXG4gICAgICAgICAgICBbY29udGV4dF06IHBhZ2VDb250ZXh0UmVkdWNlcihzdGF0ZS5wYWdlQ29udGV4dFtjb250ZXh0XSwgYWN0aW9uKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=