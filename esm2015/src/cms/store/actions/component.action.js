/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { COMPONENT_ENTITY } from '../cms-state';
/** @type {?} */
export const LOAD_CMS_COMPONENT = '[Cms] Load Component';
/** @type {?} */
export const LOAD_CMS_COMPONENT_FAIL = '[Cms] Load Component Fail';
/** @type {?} */
export const LOAD_CMS_COMPONENT_SUCCESS = '[Cms] Load Component Success';
/** @type {?} */
export const CMS_GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
export class LoadCmsComponent extends EntityLoadAction {
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
export class LoadCmsComponentFail extends EntityFailAction {
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
export class LoadCmsComponentSuccess extends EntitySuccessAction {
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
export class CmsGetComponentFromPage extends EntitySuccessAction {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWhELE1BQU0sT0FBTyxrQkFBa0IsR0FBRyxzQkFBc0I7O0FBQ3hELE1BQU0sT0FBTyx1QkFBdUIsR0FBRywyQkFBMkI7O0FBQ2xFLE1BQU0sT0FBTywwQkFBMEIsR0FBRyw4QkFBOEI7O0FBQ3hFLE1BQU0sT0FBTyw0QkFBNEIsR0FBRywrQkFBK0I7QUFFM0UsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjs7OztJQUVwRCxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURoQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUduQyxDQUFDO0NBQ0Y7OztJQUpDLGdDQUFtQzs7SUFDdkIsbUNBQXNCOztBQUtwQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQWdCOzs7OztJQUV4RCxZQUFZLEdBQVcsRUFBUyxPQUFZO1FBQzFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRG5DLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUd4QyxDQUFDO0NBQ0Y7OztJQUpDLG9DQUF3Qzs7SUFDZix1Q0FBbUI7Ozs7O0FBSzlDLE1BQU0sT0FBTyx1QkFFWCxTQUFRLG1CQUFtQjs7Ozs7SUFFM0IsWUFBbUIsT0FBVSxFQUFFLEdBQVk7UUFDekMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRGpDLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFEcEIsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBRzNDLENBQUM7Q0FDRjs7O0lBSkMsdUNBQTJDOztJQUMvQiwwQ0FBaUI7Ozs7O0FBSy9CLE1BQU0sT0FBTyx1QkFFWCxTQUFRLG1CQUFtQjs7OztJQUUzQixZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFEcEMsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsNEJBQTRCLENBQUM7SUFHN0MsQ0FBQztDQUNGOzs7SUFKQyx1Q0FBNkM7O0lBQ2pDLDBDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IENPTVBPTkVOVF9FTlRJVFkgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DTVNfQ09NUE9ORU5UID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50JztcbmV4cG9ydCBjb25zdCBMT0FEX0NNU19DT01QT05FTlRfRkFJTCA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NNU19DT01QT05FTlRfU1VDQ0VTUyA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTVNfR0VUX0NPTVBPTkVORVRfRlJPTV9QQUdFID0gJ1tDbXNdIEdldCBDb21wb25lbnQgZnJvbSBQYWdlJztcblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX0NPTVBPTkVOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zQ29tcG9uZW50RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHVpZDogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ09NUE9ORU5UX0VOVElUWSwgdWlkLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8XG4gIFQgZXh0ZW5kcyBDbXNDb21wb25lbnRcbj4gZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX0NPTVBPTkVOVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCwgdWlkPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoQ09NUE9ORU5UX0VOVElUWSwgdWlkIHx8IHBheWxvYWQudWlkIHx8ICcnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ21zR2V0Q29tcG9uZW50RnJvbVBhZ2U8XG4gIFQgZXh0ZW5kcyBDbXNDb21wb25lbnRcbj4gZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENNU19HRVRfQ09NUE9ORU5FVF9GUk9NX1BBR0U7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUW10pIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLm1hcChjbXAgPT4gY21wLnVpZCkpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ21zQ29tcG9uZW50QWN0aW9uPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+ID1cbiAgfCBMb2FkQ21zQ29tcG9uZW50XG4gIHwgTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgfCBMb2FkQ21zQ29tcG9uZW50U3VjY2VzczxUPlxuICB8IENtc0dldENvbXBvbmVudEZyb21QYWdlPFQ+O1xuIl19