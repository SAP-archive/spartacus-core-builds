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
export const CMS_SET_PAGE_SUCCESS_INDEX = '[Cms] Set Page Success Index';
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
export class CmsSetPageSuccessIndex extends StateEntityLoaderActions.EntitySuccessAction {
    /**
     * @param {?} pageContext
     * @param {?} payload
     */
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id, payload);
        this.type = CMS_SET_PAGE_SUCCESS_INDEX;
    }
}
if (false) {
    /** @type {?} */
    CmsSetPageSuccessIndex.prototype.type;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUd0RSxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsc0JBQXNCOztBQUN4RCxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsMkJBQTJCOztBQUNsRSxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsOEJBQThCOztBQUN4RSxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsOEJBQThCOztBQUN4RSxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsMkJBQTJCO0FBRWxFLE1BQU0sT0FBTyxlQUFnQixTQUFRLHdCQUF3QixDQUFDLGdCQUFnQjs7OztJQUU1RSxZQUFtQixPQUFvQjtRQUNyQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFEZixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUduQyxDQUFDO0NBQ0Y7OztJQUpDLCtCQUFtQzs7SUFDdkIsa0NBQTJCOztBQUt6QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsd0JBQXdCLENBQUMsZ0JBQWdCOzs7OztJQUVoRixZQUFZLFdBQXdCLEVBQUUsS0FBVTtRQUM5QyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRnhDLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUd4QyxDQUFDO0NBQ0Y7OztJQUpDLG1DQUF3Qzs7QUFNMUMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLHdCQUF3QixDQUFDLG1CQUFtQjs7Ozs7SUFFdEYsWUFBWSxXQUF3QixFQUFFLE9BQWE7UUFDakQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUYxQyxTQUFJLEdBQUcsMEJBQTBCLENBQUM7SUFHM0MsQ0FBQztDQUNGOzs7SUFKQyxzQ0FBMkM7O0FBTTdDLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx3QkFBd0IsQ0FBQyxtQkFBbUI7Ozs7O0lBRXRGLFlBQVksV0FBd0IsRUFBRSxPQUFhO1FBQ2pELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFGMUMsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBRzNDLENBQUM7Q0FDRjs7O0lBSkMsc0NBQTJDOztBQU03QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsd0JBQXdCLENBQUMsZ0JBQWdCOzs7OztJQUVoRixZQUFZLFdBQXdCLEVBQVMsT0FBZTtRQUMxRCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFERyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRG5ELFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUd4QyxDQUFDO0NBQ0Y7OztJQUpDLG1DQUF3Qzs7SUFDRixzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DTVNfUEFHRV9EQVRBID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhJztcbmV4cG9ydCBjb25zdCBMT0FEX0NNU19QQUdFX0RBVEFfRkFJTCA9ICdbQ21zXSBMb2FkIFBhZ2UgRGF0YSBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NNU19QQUdFX0RBVEFfU1VDQ0VTUyA9ICdbQ21zXSBMb2FkIFBhZ2UgRGF0YSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTVNfU0VUX1BBR0VfU1VDQ0VTU19JTkRFWCA9ICdbQ21zXSBTZXQgUGFnZSBTdWNjZXNzIEluZGV4JztcbmV4cG9ydCBjb25zdCBDTVNfU0VUX1BBR0VfRkFJTF9JTkRFWCA9ICdbQ21zXSBTZXQgUGFnZSBGYWlsIEluZGV4JztcblxuZXhwb3J0IGNsYXNzIExvYWRDbXNQYWdlRGF0YSBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX1BBR0VfREFUQTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VDb250ZXh0KSB7XG4gICAgc3VwZXIocGF5bG9hZC50eXBlLCBwYXlsb2FkLmlkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc1BhZ2VEYXRhRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX1BBR0VfREFUQV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGVycm9yOiBhbnkpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zUGFnZURhdGFTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfUEFHRV9EQVRBX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcGF5bG9hZDogUGFnZSkge1xuICAgIHN1cGVyKHBhZ2VDb250ZXh0LnR5cGUsIHBhZ2VDb250ZXh0LmlkLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ21zU2V0UGFnZVN1Y2Nlc3NJbmRleCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENNU19TRVRfUEFHRV9TVUNDRVNTX0lOREVYO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHBheWxvYWQ6IFBhZ2UpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENtc1NldFBhZ2VGYWlsSW5kZXggZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTVNfU0VUX1BBR0VfRkFJTF9JTkRFWDtcbiAgY29uc3RydWN0b3IocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIocGFnZUNvbnRleHQudHlwZSwgcGFnZUNvbnRleHQuaWQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ21zUGFnZUFjdGlvbiA9XG4gIHwgTG9hZENtc1BhZ2VEYXRhXG4gIHwgTG9hZENtc1BhZ2VEYXRhRmFpbFxuICB8IExvYWRDbXNQYWdlRGF0YVN1Y2Nlc3NcbiAgfCBDbXNTZXRQYWdlRmFpbEluZGV4O1xuIl19