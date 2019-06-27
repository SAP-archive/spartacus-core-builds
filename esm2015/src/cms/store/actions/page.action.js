/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateEntityLoaderActions } from '../../../state/utils/index';
/** @type {?} */
export const LOAD_CMS_PAGE_DATA = '[Cms] Load Page Data';
/** @type {?} */
export const LOAD_CMS_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
/** @type {?} */
export const LOAD_CMS_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
/** @type {?} */
export const CMS_SET_PAGE_FAIL_INDEX = '[Cms] Set Page Fail Index';
export class LoadCmsPageData extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(payload.type, payload.id);
        this.payload = payload;
        this.type = LOAD_CMS_PAGE_DATA;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsPageData.prototype.type;
    /** @type {?} */
    LoadCmsPageData.prototype.payload;
}
export class LoadCmsPageDataFail extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} pageContext
     * @param {?} error
     */
    constructor(pageContext, error) {
        super(pageContext.type, pageContext.id, error);
        this.type = LOAD_CMS_PAGE_DATA_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsPageDataFail.prototype.type;
}
export class LoadCmsPageDataSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    /**
     * @param {?} pageContext
     * @param {?} payload
     */
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id, payload);
        this.type = LOAD_CMS_PAGE_DATA_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsPageDataSuccess.prototype.type;
}
export class CmsSetPageFailIndex extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} pageContext
     * @param {?} payload
     */
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id);
        this.payload = payload;
        this.type = CMS_SET_PAGE_FAIL_INDEX;
    }
}
if (false) {
    /** @type {?} */
    CmsSetPageFailIndex.prototype.type;
    /** @type {?} */
    CmsSetPageFailIndex.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUd0RSxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsc0JBQXNCOztBQUN4RCxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsMkJBQTJCOztBQUNsRSxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsOEJBQThCOztBQUN4RSxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsMkJBQTJCO0FBRWxFLE1BQU0sT0FBTyxlQUFnQixTQUFRLHdCQUF3QixDQUFDLGdCQUFnQjs7OztJQUU1RSxZQUFtQixPQUFvQjtRQUNyQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFEZixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUduQyxDQUFDO0NBQ0Y7OztJQUpDLCtCQUFtQzs7SUFDdkIsa0NBQTJCOztBQUt6QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsd0JBQXdCLENBQUMsZ0JBQWdCOzs7OztJQUVoRixZQUFZLFdBQXdCLEVBQUUsS0FBVTtRQUM5QyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRnhDLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUd4QyxDQUFDO0NBQ0Y7OztJQUpDLG1DQUF3Qzs7QUFNMUMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLHdCQUF3QixDQUFDLG1CQUFtQjs7Ozs7SUFFdEYsWUFBWSxXQUF3QixFQUFFLE9BQWE7UUFDakQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUYxQyxTQUFJLEdBQUcsMEJBQTBCLENBQUM7SUFHM0MsQ0FBQztDQUNGOzs7SUFKQyxzQ0FBMkM7O0FBTTdDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx3QkFBd0IsQ0FBQyxnQkFBZ0I7Ozs7O0lBRWhGLFlBQVksV0FBd0IsRUFBUyxPQUFlO1FBQzFELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQURHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEbkQsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBR3hDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXdDOztJQUNGLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NNU19QQUdFX0RBVEEgPSAnW0Ntc10gTG9hZCBQYWdlIERhdGEnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX1BBR0VfREFUQV9GQUlMID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX1BBR0VfREFUQV9TVUNDRVNTID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENNU19TRVRfUEFHRV9GQUlMX0lOREVYID0gJ1tDbXNdIFNldCBQYWdlIEZhaWwgSW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENtc1BhZ2VEYXRhIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfUEFHRV9EQVRBO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZUNvbnRleHQpIHtcbiAgICBzdXBlcihwYXlsb2FkLnR5cGUsIHBheWxvYWQuaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zUGFnZURhdGFGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfUEFHRV9EQVRBX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZXJyb3I6IGFueSkge1xuICAgIHN1cGVyKHBhZ2VDb250ZXh0LnR5cGUsIHBhZ2VDb250ZXh0LmlkLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNQYWdlRGF0YVN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19QQUdFX0RBVEFfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBwYXlsb2FkOiBQYWdlKSB7XG4gICAgc3VwZXIocGFnZUNvbnRleHQudHlwZSwgcGFnZUNvbnRleHQuaWQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbXNTZXRQYWdlRmFpbEluZGV4IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ01TX1NFVF9QQUdFX0ZBSUxfSU5ERVg7XG4gIGNvbnN0cnVjdG9yKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHBhZ2VDb250ZXh0LnR5cGUsIHBhZ2VDb250ZXh0LmlkKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIENtc1BhZ2VBY3Rpb24gPVxuICB8IExvYWRDbXNQYWdlRGF0YVxuICB8IExvYWRDbXNQYWdlRGF0YUZhaWxcbiAgfCBMb2FkQ21zUGFnZURhdGFTdWNjZXNzXG4gIHwgQ21zU2V0UGFnZUZhaWxJbmRleDtcbiJdfQ==