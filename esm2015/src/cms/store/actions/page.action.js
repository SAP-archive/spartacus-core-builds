/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state';
/** @type {?} */
export const LOAD_CMS_PAGE_DATA = '[Cms] Load Page Data';
/** @type {?} */
export const LOAD_CMS_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
/** @type {?} */
export const LOAD_CMS_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
/** @type {?} */
export const CMS_SET_PAGE_FAIL_INDEX = '[Cms] Set Page Fail Index';
export class LoadCmsPageData extends EntityLoadAction {
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
export class LoadCmsPageDataFail extends EntityFailAction {
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
export class LoadCmsPageDataSuccess extends EntitySuccessAction {
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
export class CmsSetPageFailIndex extends EntityFailAction {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLGdCQUFnQixDQUFDOztBQUd4QixNQUFNLE9BQU8sa0JBQWtCLEdBQUcsc0JBQXNCOztBQUN4RCxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsMkJBQTJCOztBQUNsRSxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsOEJBQThCOztBQUN4RSxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsMkJBQTJCO0FBRWxFLE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjs7OztJQUVuRCxZQUFtQixPQUFvQjtRQUNyQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFEZixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUduQyxDQUFDO0NBQ0Y7OztJQUpDLCtCQUFtQzs7SUFDdkIsa0NBQTJCOztBQUt6QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCOzs7OztJQUV2RCxZQUFZLFdBQXdCLEVBQUUsS0FBVTtRQUM5QyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRnhDLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUd4QyxDQUFDO0NBQ0Y7OztJQUpDLG1DQUF3Qzs7QUFNMUMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLG1CQUFtQjs7Ozs7SUFFN0QsWUFBWSxXQUF3QixFQUFFLE9BQWE7UUFDakQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUYxQyxTQUFJLEdBQUcsMEJBQTBCLENBQUM7SUFHM0MsQ0FBQztDQUNGOzs7SUFKQyxzQ0FBMkM7O0FBTTdDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7Ozs7O0lBRXZELFlBQVksV0FBd0IsRUFBUyxPQUFlO1FBQzFELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQURHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEbkQsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBR3hDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXdDOztJQUNGLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NNU19QQUdFX0RBVEEgPSAnW0Ntc10gTG9hZCBQYWdlIERhdGEnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX1BBR0VfREFUQV9GQUlMID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX1BBR0VfREFUQV9TVUNDRVNTID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENNU19TRVRfUEFHRV9GQUlMX0lOREVYID0gJ1tDbXNdIFNldCBQYWdlIEZhaWwgSW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENtc1BhZ2VEYXRhIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19QQUdFX0RBVEE7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlQ29udGV4dCkge1xuICAgIHN1cGVyKHBheWxvYWQudHlwZSwgcGF5bG9hZC5pZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNQYWdlRGF0YUZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX1BBR0VfREFUQV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGVycm9yOiBhbnkpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zUGFnZURhdGFTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19QQUdFX0RBVEFfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBwYXlsb2FkOiBQYWdlKSB7XG4gICAgc3VwZXIocGFnZUNvbnRleHQudHlwZSwgcGFnZUNvbnRleHQuaWQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbXNTZXRQYWdlRmFpbEluZGV4IGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTVNfU0VUX1BBR0VfRkFJTF9JTkRFWDtcbiAgY29uc3RydWN0b3IocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIocGFnZUNvbnRleHQudHlwZSwgcGFnZUNvbnRleHQuaWQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ21zUGFnZUFjdGlvbiA9XG4gIHwgTG9hZENtc1BhZ2VEYXRhXG4gIHwgTG9hZENtc1BhZ2VEYXRhRmFpbFxuICB8IExvYWRDbXNQYWdlRGF0YVN1Y2Nlc3NcbiAgfCBDbXNTZXRQYWdlRmFpbEluZGV4O1xuIl19