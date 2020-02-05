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
        case CmsActions.CMS_GET_COMPONENET_FROM_PAGE:
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
    var _a, _b, _c;
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CmsActions.LOAD_CMS_COMPONENT: {
            /** @type {?} */
            var pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            /** @type {?} */
            var context = serializePageContext(action.pageContext, true);
            return tslib_1.__assign({}, state, { pageContext: tslib_1.__assign({}, state.pageContext, (_a = {}, _a[context] = pageContextReducer(state.pageContext[context], action), _a)) });
        }
        case CmsActions.LOAD_CMS_COMPONENT_FAIL: {
            /** @type {?} */
            var pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            /** @type {?} */
            var context = serializePageContext(action.pageContext, true);
            return tslib_1.__assign({}, state, { pageContext: tslib_1.__assign({}, state.pageContext, (_b = {}, _b[context] = pageContextReducer(state.pageContext[context], action), _b)) });
        }
        case CmsActions.CMS_GET_COMPONENET_FROM_PAGE:
        case CmsActions.LOAD_CMS_COMPONENT_SUCCESS: {
            /** @type {?} */
            var pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            /** @type {?} */
            var context = serializePageContext(action.pageContext, true);
            return tslib_1.__assign({}, state, { component: (/** @type {?} */ (action.payload)), pageContext: tslib_1.__assign({}, state.pageContext, (_c = {}, _c[context] = pageContextReducer(state.pageContext[context], action), _c)) });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9jb21wb25lbnRzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUc5QyxNQUFNLEtBQU8sWUFBWSxHQUFzQjtJQUM3QyxTQUFTLEVBQUUsU0FBUztJQUNwQixXQUFXLEVBQUUsRUFBRTtDQUNoQjs7Ozs7OztBQUVELFNBQVMsc0JBQXNCLENBQzdCLEtBQWEsRUFDYixNQUF3QztJQUR4QyxzQkFBQSxFQUFBLGFBQWE7SUFHYixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsdUJBQXVCO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1FBRWYsS0FBSyxVQUFVLENBQUMsNEJBQTRCLENBQUM7UUFDN0MsS0FBSyxVQUFVLENBQUMsMEJBQTBCO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUF3Qzs7SUFEeEMsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7O2dCQUM1QixrQkFBa0IsR0FBRyxhQUFhLENBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUN0QixzQkFBc0IsQ0FDdkI7O2dCQUNLLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztZQUM5RCw0QkFDSyxLQUFLLElBQ1IsV0FBVyx1QkFDTixLQUFLLENBQUMsV0FBVyxlQUNuQixPQUFPLElBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsVUFFbkU7U0FDSDtRQUNELEtBQUssVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2dCQUNqQyxrQkFBa0IsR0FBRyxhQUFhLENBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUN0QixzQkFBc0IsQ0FDdkI7O2dCQUNLLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztZQUM5RCw0QkFDSyxLQUFLLElBQ1IsV0FBVyx1QkFDTixLQUFLLENBQUMsV0FBVyxlQUNuQixPQUFPLElBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsVUFFbkU7U0FDSDtRQUNELEtBQUssVUFBVSxDQUFDLDRCQUE0QixDQUFDO1FBQzdDLEtBQUssVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUM7O2dCQUNwQyxrQkFBa0IsR0FBRyxhQUFhLENBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUN0QixzQkFBc0IsQ0FDdkI7O2dCQUNLLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztZQUM5RCw0QkFDSyxLQUFLLElBQ1IsU0FBUyxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQUssRUFDOUIsV0FBVyx1QkFDTixLQUFLLENBQUMsV0FBVyxlQUNuQixPQUFPLElBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsVUFFbkU7U0FDSDtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBzZXJpYWxpemVQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxzL2Ntcy11dGlscyc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnRzQ29udGV4dCB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENvbXBvbmVudHNDb250ZXh0ID0ge1xuICBjb21wb25lbnQ6IHVuZGVmaW5lZCxcbiAgcGFnZUNvbnRleHQ6IHt9LFxufTtcblxuZnVuY3Rpb24gY29tcG9uZW50RXhpc3RzUmVkdWNlcjxUPihcbiAgc3RhdGUgPSBmYWxzZSxcbiAgYWN0aW9uOiBDbXNBY3Rpb25zLkNtc0NvbXBvbmVudEFjdGlvbjxUPlxuKTogYm9vbGVhbiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UX0ZBSUw6XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBjYXNlIENtc0FjdGlvbnMuQ01TX0dFVF9DT01QT05FTkVUX0ZST01fUEFHRTpcbiAgICBjYXNlIENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyPFQ+KFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBDbXNBY3Rpb25zLkNtc0NvbXBvbmVudEFjdGlvbjxUPlxuKTogQ29tcG9uZW50c0NvbnRleHQge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDbXNBY3Rpb25zLkxPQURfQ01TX0NPTVBPTkVOVDoge1xuICAgICAgY29uc3QgcGFnZUNvbnRleHRSZWR1Y2VyID0gbG9hZGVyUmVkdWNlcjxib29sZWFuPihcbiAgICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSxcbiAgICAgICAgY29tcG9uZW50RXhpc3RzUmVkdWNlclxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzZXJpYWxpemVQYWdlQ29udGV4dChhY3Rpb24ucGFnZUNvbnRleHQsIHRydWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBhZ2VDb250ZXh0OiB7XG4gICAgICAgICAgLi4uc3RhdGUucGFnZUNvbnRleHQsXG4gICAgICAgICAgW2NvbnRleHRdOiBwYWdlQ29udGV4dFJlZHVjZXIoc3RhdGUucGFnZUNvbnRleHRbY29udGV4dF0sIGFjdGlvbiksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UX0ZBSUw6IHtcbiAgICAgIGNvbnN0IHBhZ2VDb250ZXh0UmVkdWNlciA9IGxvYWRlclJlZHVjZXI8Ym9vbGVhbj4oXG4gICAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUsXG4gICAgICAgIGNvbXBvbmVudEV4aXN0c1JlZHVjZXJcbiAgICAgICk7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQoYWN0aW9uLnBhZ2VDb250ZXh0LCB0cnVlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwYWdlQ29udGV4dDoge1xuICAgICAgICAgIC4uLnN0YXRlLnBhZ2VDb250ZXh0LFxuICAgICAgICAgIFtjb250ZXh0XTogcGFnZUNvbnRleHRSZWR1Y2VyKHN0YXRlLnBhZ2VDb250ZXh0W2NvbnRleHRdLCBhY3Rpb24pLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBDbXNBY3Rpb25zLkNNU19HRVRfQ09NUE9ORU5FVF9GUk9NX1BBR0U6XG4gICAgY2FzZSBDbXNBY3Rpb25zLkxPQURfQ01TX0NPTVBPTkVOVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwYWdlQ29udGV4dFJlZHVjZXIgPSBsb2FkZXJSZWR1Y2VyPGJvb2xlYW4+KFxuICAgICAgICBhY3Rpb24ubWV0YS5lbnRpdHlUeXBlLFxuICAgICAgICBjb21wb25lbnRFeGlzdHNSZWR1Y2VyXG4gICAgICApO1xuICAgICAgY29uc3QgY29udGV4dCA9IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KGFjdGlvbi5wYWdlQ29udGV4dCwgdHJ1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcG9uZW50OiBhY3Rpb24ucGF5bG9hZCBhcyBULFxuICAgICAgICBwYWdlQ29udGV4dDoge1xuICAgICAgICAgIC4uLnN0YXRlLnBhZ2VDb250ZXh0LFxuICAgICAgICAgIFtjb250ZXh0XTogcGFnZUNvbnRleHRSZWR1Y2VyKHN0YXRlLnBhZ2VDb250ZXh0W2NvbnRleHRdLCBhY3Rpb24pLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19