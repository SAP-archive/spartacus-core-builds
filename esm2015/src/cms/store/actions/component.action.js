/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { COMPONENT_ENTITY } from '../cms-state';
/** @type {?} */
export const LOAD_CMS_COMPONENT = '[Cms] Load Component';
/** @type {?} */
export const LOAD_CMS_COMPONENT_FAIL = '[Cms] Load Component Fail';
/** @type {?} */
export const LOAD_CMS_COMPONENT_SUCCESS = '[Cms] Load Component Success';
/** @type {?} */
export const CMS_GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
export class LoadCmsComponent extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload);
        this.payload = payload;
        this.type = LOAD_CMS_COMPONENT;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsComponent.prototype.type;
    /** @type {?} */
    LoadCmsComponent.prototype.payload;
}
export class LoadCmsComponentFail extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} uid
     * @param {?} payload
     */
    constructor(uid, payload) {
        super(COMPONENT_ENTITY, uid, payload);
        this.payload = payload;
        this.type = LOAD_CMS_COMPONENT_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsComponentFail.prototype.type;
    /** @type {?} */
    LoadCmsComponentFail.prototype.payload;
}
/**
 * @template T
 */
export class LoadCmsComponentSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    /**
     * @param {?} payload
     * @param {?=} uid
     */
    constructor(payload, uid) {
        super(COMPONENT_ENTITY, uid || payload.uid || '');
        this.payload = payload;
        this.type = LOAD_CMS_COMPONENT_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsComponentSuccess.prototype.type;
    /** @type {?} */
    LoadCmsComponentSuccess.prototype.payload;
}
/**
 * @template T
 */
export class CmsGetComponentFromPage extends StateEntityLoaderActions.EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.map((/**
         * @param {?} cmp
         * @return {?}
         */
        cmp => cmp.uid)));
        this.payload = payload;
        this.type = CMS_GET_COMPONENET_FROM_PAGE;
    }
}
if (false) {
    /** @type {?} */
    CmsGetComponentFromPage.prototype.type;
    /** @type {?} */
    CmsGetComponentFromPage.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWhELE1BQU0sT0FBTyxrQkFBa0IsR0FBRyxzQkFBc0I7O0FBQ3hELE1BQU0sT0FBTyx1QkFBdUIsR0FBRywyQkFBMkI7O0FBQ2xFLE1BQU0sT0FBTywwQkFBMEIsR0FBRyw4QkFBOEI7O0FBQ3hFLE1BQU0sT0FBTyw0QkFBNEIsR0FBRywrQkFBK0I7QUFFM0UsTUFBTSxPQUFPLGdCQUFpQixTQUFRLHdCQUF3QixDQUFDLGdCQUFnQjs7OztJQUU3RSxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURoQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUduQyxDQUFDO0NBQ0Y7OztJQUpDLGdDQUFtQzs7SUFDdkIsbUNBQXNCOztBQUtwQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBQXdCLENBQUMsZ0JBQWdCOzs7OztJQUVqRixZQUFZLEdBQVcsRUFBUyxPQUFZO1FBQzFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRG5DLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUd4QyxDQUFDO0NBQ0Y7OztJQUpDLG9DQUF3Qzs7SUFDZix1Q0FBbUI7Ozs7O0FBSzlDLE1BQU0sT0FBTyx1QkFFWCxTQUFRLHdCQUF3QixDQUFDLG1CQUFtQjs7Ozs7SUFFcEQsWUFBbUIsT0FBVSxFQUFFLEdBQVk7UUFDekMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRGpDLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFEcEIsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBRzNDLENBQUM7Q0FDRjs7O0lBSkMsdUNBQTJDOztJQUMvQiwwQ0FBaUI7Ozs7O0FBSy9CLE1BQU0sT0FBTyx1QkFFWCxTQUFRLHdCQUF3QixDQUFDLG1CQUFtQjs7OztJQUVwRCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFEcEMsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsNEJBQTRCLENBQUM7SUFHN0MsQ0FBQztDQUNGOzs7SUFKQyx1Q0FBNkM7O0lBQ2pDLDBDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDT01QT05FTlRfRU5USVRZIH0gZnJvbSAnLi4vY21zLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVCA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfQ09NUE9ORU5UX0ZBSUwgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1MgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ01TX0dFVF9DT01QT05FTkVUX0ZST01fUEFHRSA9ICdbQ21zXSBHZXQgQ29tcG9uZW50IGZyb20gUGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zQ29tcG9uZW50IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoQ09NUE9ORU5UX0VOVElUWSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnRGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHVpZDogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ09NUE9ORU5UX0VOVElUWSwgdWlkLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8XG4gIFQgZXh0ZW5kcyBDbXNDb21wb25lbnRcbj4gZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19DT01QT05FTlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQsIHVpZD86IHN0cmluZykge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHVpZCB8fCBwYXlsb2FkLnVpZCB8fCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENtc0dldENvbXBvbmVudEZyb21QYWdlPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ01TX0dFVF9DT01QT05FTkVUX0ZST01fUEFHRTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRbXSkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQubWFwKGNtcCA9PiBjbXAudWlkKSk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBDbXNDb21wb25lbnRBY3Rpb248VCBleHRlbmRzIENtc0NvbXBvbmVudD4gPVxuICB8IExvYWRDbXNDb21wb25lbnRcbiAgfCBMb2FkQ21zQ29tcG9uZW50RmFpbFxuICB8IExvYWRDbXNDb21wb25lbnRTdWNjZXNzPFQ+XG4gIHwgQ21zR2V0Q29tcG9uZW50RnJvbVBhZ2U8VD47XG4iXX0=