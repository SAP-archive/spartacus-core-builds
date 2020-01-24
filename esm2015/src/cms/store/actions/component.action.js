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
// TODO(issue:6027) - rename the const to `CMS_GET_COMPONENT_FROM_PAGE`
/** @type {?} */
export const CMS_GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
export class LoadCmsComponent extends StateEntityLoaderActions.EntityLoadAction {
    // TODO(issue:6027) - this action should have only one `payload` property which should encapsulate all of the constructor's arguments
    /**
     * @param {?} payload
     * @param {?=} pageContext
     */
    constructor(payload, pageContext) {
        super(COMPONENT_ENTITY, payload);
        this.payload = payload;
        this.pageContext = pageContext;
        this.type = LOAD_CMS_COMPONENT;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsComponent.prototype.type;
    /** @type {?} */
    LoadCmsComponent.prototype.payload;
    /** @type {?} */
    LoadCmsComponent.prototype.pageContext;
}
export class LoadCmsComponentFail extends StateEntityLoaderActions.EntityFailAction {
    // TODO(issue:6027) - this action should have only one `payload` property which should encapsulate all of the constructor's arguments
    /**
     * @param {?} uid
     * @param {?} payload
     * @param {?=} pageContext
     */
    constructor(uid, payload, pageContext) {
        super(COMPONENT_ENTITY, uid, payload);
        this.payload = payload;
        this.pageContext = pageContext;
        this.type = LOAD_CMS_COMPONENT_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsComponentFail.prototype.type;
    /** @type {?} */
    LoadCmsComponentFail.prototype.payload;
    /** @type {?} */
    LoadCmsComponentFail.prototype.pageContext;
}
/**
 * @template T
 */
export class LoadCmsComponentSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    // TODO(issue:6027) - this action should have only one `payload` property which should encapsulate all of the constructor's arguments
    /**
     * @param {?} payload
     * @param {?=} uid
     * @param {?=} pageContext
     */
    constructor(payload, uid, pageContext) {
        super(COMPONENT_ENTITY, uid || payload.uid || '');
        this.payload = payload;
        this.pageContext = pageContext;
        this.type = LOAD_CMS_COMPONENT_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsComponentSuccess.prototype.type;
    /** @type {?} */
    LoadCmsComponentSuccess.prototype.payload;
    /** @type {?} */
    LoadCmsComponentSuccess.prototype.pageContext;
}
/**
 * @template T
 */
export class CmsGetComponentFromPage extends StateEntityLoaderActions.EntitySuccessAction {
    // TODO(issue:6027) - this action should have only one `payload` property which should encapsulate all of the constructor's arguments
    /**
     * @param {?} payload
     * @param {?=} pageContext
     */
    constructor(payload, pageContext) {
        super(COMPONENT_ENTITY, payload.map((/**
         * @param {?} cmp
         * @return {?}
         */
        cmp => cmp.uid)));
        this.payload = payload;
        this.pageContext = pageContext;
        this.type = CMS_GET_COMPONENET_FROM_PAGE;
    }
}
if (false) {
    /** @type {?} */
    CmsGetComponentFromPage.prototype.type;
    /** @type {?} */
    CmsGetComponentFromPage.prototype.payload;
    /** @type {?} */
    CmsGetComponentFromPage.prototype.pageContext;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWhELE1BQU0sT0FBTyxrQkFBa0IsR0FBRyxzQkFBc0I7O0FBQ3hELE1BQU0sT0FBTyx1QkFBdUIsR0FBRywyQkFBMkI7O0FBQ2xFLE1BQU0sT0FBTywwQkFBMEIsR0FBRyw4QkFBOEI7OztBQUV4RSxNQUFNLE9BQU8sNEJBQTRCLEdBQUcsK0JBQStCO0FBRTNFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSx3QkFBd0IsQ0FBQyxnQkFBZ0I7Ozs7OztJQUc3RSxZQUFtQixPQUFlLEVBQVMsV0FBeUI7UUFDbEUsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRGhCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUYzRCxTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFJbkMsQ0FBQztDQUNGOzs7SUFMQyxnQ0FBbUM7O0lBRXZCLG1DQUFzQjs7SUFBRSx1Q0FBZ0M7O0FBS3RFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx3QkFBd0IsQ0FBQyxnQkFBZ0I7Ozs7Ozs7SUFHakYsWUFDRSxHQUFXLEVBQ0osT0FBWSxFQUNaLFdBQXlCO1FBRWhDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIL0IsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUNaLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBTHpCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQVF4QyxDQUFDO0NBQ0Y7OztJQVRDLG9DQUF3Qzs7SUFJdEMsdUNBQW1COztJQUNuQiwyQ0FBZ0M7Ozs7O0FBTXBDLE1BQU0sT0FBTyx1QkFFWCxTQUFRLHdCQUF3QixDQUFDLG1CQUFtQjs7Ozs7OztJQUdwRCxZQUNTLE9BQVUsRUFDakIsR0FBWSxFQUNMLFdBQXlCO1FBRWhDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUozQyxZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRVYsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFMekIsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBUTNDLENBQUM7Q0FDRjs7O0lBVEMsdUNBQTJDOztJQUd6QywwQ0FBaUI7O0lBRWpCLDhDQUFnQzs7Ozs7QUFNcEMsTUFBTSxPQUFPLHVCQUVYLFNBQVEsd0JBQXdCLENBQUMsbUJBQW1COzs7Ozs7SUFHcEQsWUFBbUIsT0FBWSxFQUFTLFdBQXlCO1FBQy9ELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFEcEMsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBRnhELFNBQUksR0FBRyw0QkFBNEIsQ0FBQztJQUk3QyxDQUFDO0NBQ0Y7OztJQUxDLHVDQUE2Qzs7SUFFakMsMENBQW1COztJQUFFLDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgQ09NUE9ORU5UX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NNU19DT01QT05FTlQgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVF9GQUlMID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVF9TVUNDRVNTID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IFN1Y2Nlc3MnO1xuLy8gVE9ETyhpc3N1ZTo2MDI3KSAtIHJlbmFtZSB0aGUgY29uc3QgdG8gYENNU19HRVRfQ09NUE9ORU5UX0ZST01fUEFHRWBcbmV4cG9ydCBjb25zdCBDTVNfR0VUX0NPTVBPTkVORVRfRlJPTV9QQUdFID0gJ1tDbXNdIEdldCBDb21wb25lbnQgZnJvbSBQYWdlJztcblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnQgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19DT01QT05FTlQ7XG4gIC8vIFRPRE8oaXNzdWU6NjAyNykgLSB0aGlzIGFjdGlvbiBzaG91bGQgaGF2ZSBvbmx5IG9uZSBgcGF5bG9hZGAgcHJvcGVydHkgd2hpY2ggc2hvdWxkIGVuY2Fwc3VsYXRlIGFsbCBvZiB0aGUgY29uc3RydWN0b3IncyBhcmd1bWVudHNcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZywgcHVibGljIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHQpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc0NvbXBvbmVudEZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19DT01QT05FTlRfRkFJTDtcbiAgLy8gVE9ETyhpc3N1ZTo2MDI3KSAtIHRoaXMgYWN0aW9uIHNob3VsZCBoYXZlIG9ubHkgb25lIGBwYXlsb2FkYCBwcm9wZXJ0eSB3aGljaCBzaG91bGQgZW5jYXBzdWxhdGUgYWxsIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGFyZ3VtZW50c1xuICBjb25zdHJ1Y3RvcihcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcGF5bG9hZDogYW55LFxuICAgIHB1YmxpYyBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0XG4gICkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHVpZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnRTdWNjZXNzPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1M7XG4gIC8vIFRPRE8oaXNzdWU6NjAyNykgLSB0aGlzIGFjdGlvbiBzaG91bGQgaGF2ZSBvbmx5IG9uZSBgcGF5bG9hZGAgcHJvcGVydHkgd2hpY2ggc2hvdWxkIGVuY2Fwc3VsYXRlIGFsbCBvZiB0aGUgY29uc3RydWN0b3IncyBhcmd1bWVudHNcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IFQsXG4gICAgdWlkPzogc3RyaW5nLFxuICAgIHB1YmxpYyBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0XG4gICkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHVpZCB8fCBwYXlsb2FkLnVpZCB8fCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENtc0dldENvbXBvbmVudEZyb21QYWdlPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ01TX0dFVF9DT01QT05FTkVUX0ZST01fUEFHRTtcbiAgLy8gVE9ETyhpc3N1ZTo2MDI3KSAtIHRoaXMgYWN0aW9uIHNob3VsZCBoYXZlIG9ubHkgb25lIGBwYXlsb2FkYCBwcm9wZXJ0eSB3aGljaCBzaG91bGQgZW5jYXBzdWxhdGUgYWxsIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGFyZ3VtZW50c1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVFtdLCBwdWJsaWMgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dCkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQubWFwKGNtcCA9PiBjbXAudWlkKSk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBDbXNDb21wb25lbnRBY3Rpb248VCBleHRlbmRzIENtc0NvbXBvbmVudD4gPVxuICB8IExvYWRDbXNDb21wb25lbnRcbiAgfCBMb2FkQ21zQ29tcG9uZW50RmFpbFxuICB8IExvYWRDbXNDb21wb25lbnRTdWNjZXNzPFQ+XG4gIHwgQ21zR2V0Q29tcG9uZW50RnJvbVBhZ2U8VD47XG4iXX0=