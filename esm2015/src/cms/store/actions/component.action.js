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
     * @param {?=} uid
     */
    constructor(payload, uid) {
        super(COMPONENT_ENTITY, uid || payload.uid || '');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWhELE1BQU0sT0FBTyxjQUFjLEdBQUcsc0JBQXNCOztBQUNwRCxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsMkJBQTJCOztBQUM5RCxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsOEJBQThCOztBQUNwRSxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsK0JBQStCO0FBRXZFLE1BQU0sT0FBTyxhQUFjLFNBQVEsZ0JBQWdCOzs7O0lBRWpELFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRGhCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUcvQixDQUFDO0NBQ0Y7OztJQUpDLDZCQUErQjs7SUFDbkIsZ0NBQXNCOztBQUtwQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZ0JBQWdCOzs7OztJQUVyRCxZQUFZLEdBQVcsRUFBUyxPQUFZO1FBQzFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRG5DLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUdwQyxDQUFDO0NBQ0Y7OztJQUpDLGlDQUFvQzs7SUFDWCxvQ0FBbUI7Ozs7O0FBSzlDLE1BQU0sT0FBTyxvQkFFWCxTQUFRLG1CQUFtQjs7Ozs7SUFFM0IsWUFBbUIsT0FBVSxFQUFFLEdBQVk7UUFDekMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRGpDLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFEcEIsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBR3ZDLENBQUM7Q0FDRjs7O0lBSkMsb0NBQXVDOztJQUMzQix1Q0FBaUI7Ozs7O0FBSy9CLE1BQU0sT0FBTyxvQkFFWCxTQUFRLG1CQUFtQjs7OztJQUUzQixZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFEcEMsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFHekMsQ0FBQztDQUNGOzs7SUFKQyxvQ0FBeUM7O0lBQzdCLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IENPTVBPTkVOVF9FTlRJVFkgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DT01QT05FTlQgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IExPQURfQ09NUE9ORU5UX0ZBSUwgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DT01QT05FTlRfU1VDQ0VTUyA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBHRVRfQ09NUE9ORU5FVF9GUk9NX1BBR0UgPSAnW0Ntc10gR2V0IENvbXBvbmVudCBmcm9tIFBhZ2UnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENvbXBvbmVudCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DT01QT05FTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENvbXBvbmVudEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ09NUE9ORU5UX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHVpZDogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ09NUE9ORU5UX0VOVElUWSwgdWlkLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENvbXBvbmVudFN1Y2Nlc3M8XG4gIFQgZXh0ZW5kcyBDbXNDb21wb25lbnRcbj4gZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ09NUE9ORU5UX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBULCB1aWQ/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCB1aWQgfHwgcGF5bG9hZC51aWQgfHwgJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRDb21wb25lbnRGcm9tUGFnZTxcbiAgVCBleHRlbmRzIENtc0NvbXBvbmVudFxuPiBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX0NPTVBPTkVORVRfRlJPTV9QQUdFO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVFtdKSB7XG4gICAgc3VwZXIoQ09NUE9ORU5UX0VOVElUWSwgcGF5bG9hZC5tYXAoY21wID0+IGNtcC51aWQpKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIENvbXBvbmVudEFjdGlvbjxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PiA9XG4gIHwgTG9hZENvbXBvbmVudFxuICB8IExvYWRDb21wb25lbnRGYWlsXG4gIHwgTG9hZENvbXBvbmVudFN1Y2Nlc3M8VD5cbiAgfCBHZXRDb21wb25lbnRGcm9tUGFnZTxUPjtcbiJdfQ==