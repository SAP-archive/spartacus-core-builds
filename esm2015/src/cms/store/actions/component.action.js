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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWhELE1BQU0sT0FBTyxjQUFjLEdBQUcsc0JBQXNCOztBQUNwRCxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsMkJBQTJCOztBQUM5RCxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsOEJBQThCOztBQUNwRSxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsK0JBQStCO0FBRXZFLE1BQU0sT0FBTyxhQUFjLFNBQVEsZ0JBQWdCOzs7O0lBRWpELFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRGhCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUcvQixDQUFDO0NBQ0Y7OztJQUpDLDZCQUErQjs7SUFDbkIsZ0NBQXNCOztBQUtwQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZ0JBQWdCOzs7OztJQUVyRCxZQUFZLEdBQVcsRUFBUyxPQUFZO1FBQzFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRG5DLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUdwQyxDQUFDO0NBQ0Y7OztJQUpDLGlDQUFvQzs7SUFDWCxvQ0FBbUI7Ozs7O0FBSzlDLE1BQU0sT0FBTyxvQkFFWCxTQUFRLG1CQUFtQjs7OztJQUUzQixZQUFtQixPQUFVO1FBQzNCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFEcEIsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQURwQixTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFHdkMsQ0FBQztDQUNGOzs7SUFKQyxvQ0FBdUM7O0lBQzNCLHVDQUFpQjs7Ozs7QUFLL0IsTUFBTSxPQUFPLG9CQUVYLFNBQVEsbUJBQW1COzs7O0lBRTNCLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQURwQyxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7OztJQUpDLG9DQUF5Qzs7SUFDN0IsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBDT01QT05FTlRfRU5USVRZIH0gZnJvbSAnLi4vY21zLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ09NUE9ORU5UID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50JztcbmV4cG9ydCBjb25zdCBMT0FEX0NPTVBPTkVOVF9GQUlMID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ09NUE9ORU5UX1NVQ0NFU1MgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgR0VUX0NPTVBPTkVORVRfRlJPTV9QQUdFID0gJ1tDbXNdIEdldCBDb21wb25lbnQgZnJvbSBQYWdlJztcblxuZXhwb3J0IGNsYXNzIExvYWRDb21wb25lbnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ09NUE9ORU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoQ09NUE9ORU5UX0VOVElUWSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDb21wb25lbnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPTVBPTkVOVF9GQUlMO1xuICBjb25zdHJ1Y3Rvcih1aWQ6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHVpZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDb21wb25lbnRTdWNjZXNzPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPTVBPTkVOVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQudWlkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2V0Q29tcG9uZW50RnJvbVBhZ2U8XG4gIFQgZXh0ZW5kcyBDbXNDb21wb25lbnRcbj4gZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEdFVF9DT01QT05FTkVUX0ZST01fUEFHRTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRbXSkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQubWFwKGNtcCA9PiBjbXAudWlkKSk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBDb21wb25lbnRBY3Rpb248VCBleHRlbmRzIENtc0NvbXBvbmVudD4gPVxuICB8IExvYWRDb21wb25lbnRcbiAgfCBMb2FkQ29tcG9uZW50RmFpbFxuICB8IExvYWRDb21wb25lbnRTdWNjZXNzPFQ+XG4gIHwgR2V0Q29tcG9uZW50RnJvbVBhZ2U8VD47XG4iXX0=