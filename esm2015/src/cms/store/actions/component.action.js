/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { COMPONENT_ENTITY } from '../cms-state';
/** @type {?} */
export const LOAD_COMPONENT = '[Cms] Load Component';
/** @type {?} */
export const LOAD_COMPONENT_FAIL = '[Cms] Load Component Fail';
/** @type {?} */
export const LOAD_COMPONENT_SUCCESS = '[Cms] Load Component Success';
/** @type {?} */
export const GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
export class LoadComponent extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload);
        this.payload = payload;
        this.type = LOAD_COMPONENT;
    }
}
if (false) {
    /** @type {?} */
    LoadComponent.prototype.type;
    /** @type {?} */
    LoadComponent.prototype.payload;
}
export class LoadComponentFail extends EntityFailAction {
    /**
     * @param {?} uid
     * @param {?} payload
     */
    constructor(uid, payload) {
        super(COMPONENT_ENTITY, uid, payload);
        this.payload = payload;
        this.type = LOAD_COMPONENT_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadComponentFail.prototype.type;
    /** @type {?} */
    LoadComponentFail.prototype.payload;
}
/**
 * @template T
 */
export class LoadComponentSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.uid);
        this.payload = payload;
        this.type = LOAD_COMPONENT_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadComponentSuccess.prototype.type;
    /** @type {?} */
    LoadComponentSuccess.prototype.payload;
}
/**
 * @template T
 */
export class GetComponentFromPage extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.map(cmp => cmp.uid));
        this.payload = payload;
        this.type = GET_COMPONENET_FROM_PAGE;
    }
}
if (false) {
    /** @type {?} */
    GetComponentFromPage.prototype.type;
    /** @type {?} */
    GetComponentFromPage.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWhELE1BQU0sT0FBTyxjQUFjLEdBQUcsc0JBQXNCOztBQUNwRCxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsMkJBQTJCOztBQUM5RCxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsOEJBQThCOztBQUNwRSxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsK0JBQStCO0FBRXZFLE1BQU0sT0FBTyxhQUFjLFNBQVEsZ0JBQWdCOzs7O0lBRWpELFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRGhCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUcvQixDQUFDO0NBQ0Y7OztJQUpDLDZCQUErQjs7SUFDbkIsZ0NBQXNCOztBQUtwQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZ0JBQWdCOzs7OztJQUVyRCxZQUFZLEdBQVcsRUFBUyxPQUFZO1FBQzFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRG5DLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUdwQyxDQUFDO0NBQ0Y7OztJQUpDLGlDQUFvQzs7SUFDWCxvQ0FBbUI7Ozs7O0FBSzlDLE1BQU0sT0FBTyxvQkFFWCxTQUFRLG1CQUFtQjs7OztJQUUzQixZQUFtQixPQUFVO1FBQzNCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFEcEIsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQURwQixTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFHdkMsQ0FBQztDQUNGOzs7SUFKQyxvQ0FBdUM7O0lBQzNCLHVDQUFpQjs7Ozs7QUFLL0IsTUFBTSxPQUFPLG9CQUVYLFNBQVEsbUJBQW1COzs7O0lBRTNCLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQURwQyxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7OztJQUpDLG9DQUF5Qzs7SUFDN0IsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgQ09NUE9ORU5UX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NPTVBPTkVOVCA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgTE9BRF9DT01QT05FTlRfRkFJTCA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NPTVBPTkVOVF9TVUNDRVNTID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IEdFVF9DT01QT05FTkVUX0ZST01fUEFHRSA9ICdbQ21zXSBHZXQgQ29tcG9uZW50IGZyb20gUGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ29tcG9uZW50IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPTVBPTkVOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ29tcG9uZW50RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DT01QT05FTlRfRkFJTDtcbiAgY29uc3RydWN0b3IodWlkOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCB1aWQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ29tcG9uZW50U3VjY2VzczxcbiAgVCBleHRlbmRzIENtc0NvbXBvbmVudFxuPiBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DT01QT05FTlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldENvbXBvbmVudEZyb21QYWdlPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHRVRfQ09NUE9ORU5FVF9GUk9NX1BBR0U7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUW10pIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLm1hcChjbXAgPT4gY21wLnVpZCkpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ29tcG9uZW50QWN0aW9uPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+ID1cbiAgfCBMb2FkQ29tcG9uZW50XG4gIHwgTG9hZENvbXBvbmVudEZhaWxcbiAgfCBMb2FkQ29tcG9uZW50U3VjY2VzczxUPlxuICB8IEdldENvbXBvbmVudEZyb21QYWdlPFQ+O1xuIl19