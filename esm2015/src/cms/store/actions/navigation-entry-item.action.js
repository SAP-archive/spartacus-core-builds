/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { NAVIGATION_DETAIL_ENTITY } from '../cms-state';
/** @type {?} */
export const LOAD_CMS_NAVIGATION_ITEMS = '[Cms] Load NavigationEntry items';
/** @type {?} */
export const LOAD_CMS_NAVIGATION_ITEMS_FAIL = '[Cms] Load NavigationEntry items Fail';
/** @type {?} */
export const LOAD_CMS_NAVIGATION_ITEMS_SUCCESS = '[Cms] Load NavigationEntry items Success';
export class LoadCmsNavigationItems extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_CMS_NAVIGATION_ITEMS;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsNavigationItems.prototype.type;
    /** @type {?} */
    LoadCmsNavigationItems.prototype.payload;
}
export class LoadCmsNavigationItemsFail extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} nodeId
     * @param {?} payload
     */
    constructor(nodeId, payload) {
        super(NAVIGATION_DETAIL_ENTITY, nodeId, payload);
        this.payload = payload;
        this.type = LOAD_CMS_NAVIGATION_ITEMS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsNavigationItemsFail.prototype.type;
    /** @type {?} */
    LoadCmsNavigationItemsFail.prototype.payload;
}
export class LoadCmsNavigationItemsSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_CMS_NAVIGATION_ITEMS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadCmsNavigationItemsSuccess.prototype.type;
    /** @type {?} */
    LoadCmsNavigationItemsSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRXhELE1BQU0sT0FBTyx5QkFBeUIsR0FBRyxrQ0FBa0M7O0FBQzNFLE1BQU0sT0FBTyw4QkFBOEIsR0FDekMsdUNBQXVDOztBQUN6QyxNQUFNLE9BQU8saUNBQWlDLEdBQzVDLDBDQUEwQztBQUU1QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsd0JBQXdCLENBQUMsZ0JBQWdCOzs7O0lBRW5GLFlBQW1CLE9BQXlDO1FBQzFELEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFEL0IsWUFBTyxHQUFQLE9BQU8sQ0FBa0M7UUFEbkQsU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBRzFDLENBQUM7Q0FDRjs7O0lBSkMsc0NBQTBDOztJQUM5Qix5Q0FBZ0Q7O0FBSzlELE1BQU0sT0FBTywwQkFBMkIsU0FBUSx3QkFBd0IsQ0FBQyxnQkFBZ0I7Ozs7O0lBRXZGLFlBQVksTUFBYyxFQUFTLE9BQVk7UUFDN0MsS0FBSyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQURoQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRDLFNBQUksR0FBRyw4QkFBOEIsQ0FBQztJQUcvQyxDQUFDO0NBQ0Y7OztJQUpDLDBDQUErQzs7SUFDbkIsNkNBQW1COztBQUtqRCxNQUFNLE9BQU8sNkJBQThCLFNBQVEsd0JBQXdCLENBQUMsbUJBQW1COzs7O0lBRTdGLFlBQW1CLE9BQThDO1FBQy9ELEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFEL0IsWUFBTyxHQUFQLE9BQU8sQ0FBdUM7UUFEeEQsU0FBSSxHQUFHLGlDQUFpQyxDQUFDO0lBR2xELENBQUM7Q0FDRjs7O0lBSkMsNkNBQWtEOztJQUN0QyxnREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBOQVZJR0FUSU9OX0RFVEFJTF9FTlRJVFkgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DTVNfTkFWSUdBVElPTl9JVEVNUyA9ICdbQ21zXSBMb2FkIE5hdmlnYXRpb25FbnRyeSBpdGVtcyc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfTkFWSUdBVElPTl9JVEVNU19GQUlMID1cbiAgJ1tDbXNdIExvYWQgTmF2aWdhdGlvbkVudHJ5IGl0ZW1zIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX05BVklHQVRJT05fSVRFTVNfU1VDQ0VTUyA9XG4gICdbQ21zXSBMb2FkIE5hdmlnYXRpb25FbnRyeSBpdGVtcyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRDbXNOYXZpZ2F0aW9uSXRlbXMgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19OQVZJR0FUSU9OX0lURU1TO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBub2RlSWQ6IHN0cmluZzsgaXRlbXM6IGFueVtdIH0pIHtcbiAgICBzdXBlcihOQVZJR0FUSU9OX0RFVEFJTF9FTlRJVFksIHBheWxvYWQubm9kZUlkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc05hdmlnYXRpb25JdGVtc0ZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19OQVZJR0FUSU9OX0lURU1TX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKG5vZGVJZDogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoTkFWSUdBVElPTl9ERVRBSUxfRU5USVRZLCBub2RlSWQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zTmF2aWdhdGlvbkl0ZW1zU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX05BVklHQVRJT05fSVRFTVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgbm9kZUlkOiBzdHJpbmc7IGNvbXBvbmVudHM6IGFueVtdIH0pIHtcbiAgICBzdXBlcihOQVZJR0FUSU9OX0RFVEFJTF9FTlRJVFksIHBheWxvYWQubm9kZUlkKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIENtc05hdmlnYXRpb25FbnRyeUl0ZW1BY3Rpb24gPVxuICB8IExvYWRDbXNOYXZpZ2F0aW9uSXRlbXNcbiAgfCBMb2FkQ21zTmF2aWdhdGlvbkl0ZW1zRmFpbFxuICB8IExvYWRDbXNOYXZpZ2F0aW9uSXRlbXNTdWNjZXNzO1xuIl19