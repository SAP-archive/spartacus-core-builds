/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export const CMS_GET_COMPONENT_FROM_PAGE = '[Cms] Get Component from Page';
export class LoadCmsComponent extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.uid);
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
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.uid, payload.error);
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
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.uid || payload.component.uid || '');
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
        super(COMPONENT_ENTITY, [].concat(payload).map((/**
         * @param {?} cmp
         * @return {?}
         */
        cmp => cmp.component.uid)));
        this.payload = payload;
        this.type = CMS_GET_COMPONENT_FROM_PAGE;
    }
}
if (false) {
    /** @type {?} */
    CmsGetComponentFromPage.prototype.type;
    /** @type {?} */
    CmsGetComponentFromPage.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvY29tcG9uZW50cy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFaEQsTUFBTSxPQUFPLGtCQUFrQixHQUFHLHNCQUFzQjs7QUFDeEQsTUFBTSxPQUFPLHVCQUF1QixHQUFHLDJCQUEyQjs7QUFDbEUsTUFBTSxPQUFPLDBCQUEwQixHQUFHLDhCQUE4Qjs7QUFDeEUsTUFBTSxPQUFPLDJCQUEyQixHQUFHLCtCQUErQjtBQUUxRSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsd0JBQXdCLENBQUMsZ0JBQWdCOzs7O0lBRTdFLFlBQ1MsT0FHTjtRQUVELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFMOUIsWUFBTyxHQUFQLE9BQU8sQ0FHYjtRQUxNLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQVFuQyxDQUFDO0NBQ0Y7OztJQVRDLGdDQUFtQzs7SUFFakMsbUNBR0M7O0FBTUwsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHdCQUF3QixDQUFDLGdCQUFnQjs7OztJQUVqRixZQUNTLE9BQThEO1FBRXJFLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUY3QyxZQUFPLEdBQVAsT0FBTyxDQUF1RDtRQUY5RCxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFLeEMsQ0FBQztDQUNGOzs7SUFOQyxvQ0FBd0M7O0lBRXRDLHVDQUFxRTs7Ozs7QUFNekUsTUFBTSxPQUFPLHVCQUVYLFNBQVEsd0JBQXdCLENBQUMsbUJBQW1COzs7O0lBRXBELFlBQ1MsT0FJTjtRQUVELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBTjdELFlBQU8sR0FBUCxPQUFPLENBSWI7UUFOTSxTQUFJLEdBQUcsMEJBQTBCLENBQUM7SUFTM0MsQ0FBQztDQUNGOzs7SUFWQyx1Q0FBMkM7O0lBRXpDLDBDQUlDOzs7OztBQU1MLE1BQU0sT0FBTyx1QkFFWCxTQUFRLHdCQUF3QixDQUFDLG1CQUFtQjs7OztJQUVwRCxZQUNTLE9BRXlDO1FBRWhELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUpuRSxZQUFPLEdBQVAsT0FBTyxDQUVrQztRQUp6QyxTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFPNUMsQ0FBQztDQUNGOzs7SUFSQyx1Q0FBNEM7O0lBRTFDLDBDQUVnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgQ09NUE9ORU5UX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NNU19DT01QT05FTlQgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVF9GQUlMID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVF9TVUNDRVNTID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENNU19HRVRfQ09NUE9ORU5UX0ZST01fUEFHRSA9ICdbQ21zXSBHZXQgQ29tcG9uZW50IGZyb20gUGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zQ29tcG9uZW50IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdWlkOiBzdHJpbmc7XG4gICAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQ7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnRGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVpZDogc3RyaW5nOyBlcnJvcjogYW55OyBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgfVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnRTdWNjZXNzPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBjb21wb25lbnQ6IFQ7XG4gICAgICB1aWQ/OiBzdHJpbmc7XG4gICAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQ7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCB8fCBwYXlsb2FkLmNvbXBvbmVudC51aWQgfHwgJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbXNHZXRDb21wb25lbnRGcm9tUGFnZTxcbiAgVCBleHRlbmRzIENtc0NvbXBvbmVudFxuPiBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENNU19HRVRfQ09NUE9ORU5UX0ZST01fUEFHRTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6XG4gICAgICB8IHsgY29tcG9uZW50OiBUOyBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgfVxuICAgICAgfCB7IGNvbXBvbmVudDogVDsgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0IH1bXVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBbXS5jb25jYXQocGF5bG9hZCkubWFwKGNtcCA9PiBjbXAuY29tcG9uZW50LnVpZCkpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ21zQ29tcG9uZW50QWN0aW9uPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+ID1cbiAgfCBMb2FkQ21zQ29tcG9uZW50XG4gIHwgTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgfCBMb2FkQ21zQ29tcG9uZW50U3VjY2VzczxUPlxuICB8IENtc0dldENvbXBvbmVudEZyb21QYWdlPFQ+O1xuIl19