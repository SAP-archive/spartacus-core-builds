/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NAVIGATION_DETAIL_ENTITY } from '../cms-state';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
/** @type {?} */
export const LOAD_NAVIGATION_ITEMS = '[Cms] Load NavigationEntry items';
/** @type {?} */
export const LOAD_NAVIGATION_ITEMS_FAIL = '[Cms] Load NavigationEntry items Fail';
/** @type {?} */
export const LOAD_NAVIGATION_ITEMS_SUCCESS = '[Cms] Load NavigationEntry items Success';
export class LoadNavigationItems extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS;
    }
}
if (false) {
    /** @type {?} */
    LoadNavigationItems.prototype.type;
    /** @type {?} */
    LoadNavigationItems.prototype.payload;
}
export class LoadNavigationItemsFail extends EntityFailAction {
    /**
     * @param {?} nodeId
     * @param {?} payload
     */
    constructor(nodeId, payload) {
        super(NAVIGATION_DETAIL_ENTITY, nodeId, payload);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadNavigationItemsFail.prototype.type;
    /** @type {?} */
    LoadNavigationItemsFail.prototype.payload;
}
export class LoadNavigationItemsSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadNavigationItemsSuccess.prototype.type;
    /** @type {?} */
    LoadNavigationItemsSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7O0FBRWpFLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxrQ0FBa0M7O0FBQ3ZFLE1BQU0sT0FBTywwQkFBMEIsR0FDckMsdUNBQXVDOztBQUN6QyxNQUFNLE9BQU8sNkJBQTZCLEdBQ3hDLDBDQUEwQztBQUU1QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCOzs7O0lBRXZELFlBQW1CLE9BQXlDO1FBQzFELEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFEL0IsWUFBTyxHQUFQLE9BQU8sQ0FBa0M7UUFEbkQsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBR3RDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXNDOztJQUMxQixzQ0FBZ0Q7O0FBSzlELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBZ0I7Ozs7O0lBRTNELFlBQVksTUFBYyxFQUFTLE9BQVk7UUFDN0MsS0FBSyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQURoQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRDLFNBQUksR0FBRywwQkFBMEIsQ0FBQztJQUczQyxDQUFDO0NBQ0Y7OztJQUpDLHVDQUEyQzs7SUFDZiwwQ0FBbUI7O0FBS2pELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxtQkFBbUI7Ozs7SUFFakUsWUFBbUIsT0FBOEM7UUFDL0QsS0FBSyxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUQvQixZQUFPLEdBQVAsT0FBTyxDQUF1QztRQUR4RCxTQUFJLEdBQUcsNkJBQTZCLENBQUM7SUFHOUMsQ0FBQztDQUNGOzs7SUFKQywwQ0FBOEM7O0lBQ2xDLDZDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5BVklHQVRJT05fREVUQUlMX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IExPQURfTkFWSUdBVElPTl9JVEVNUyA9ICdbQ21zXSBMb2FkIE5hdmlnYXRpb25FbnRyeSBpdGVtcyc7XG5leHBvcnQgY29uc3QgTE9BRF9OQVZJR0FUSU9OX0lURU1TX0ZBSUwgPVxuICAnW0Ntc10gTG9hZCBOYXZpZ2F0aW9uRW50cnkgaXRlbXMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9OQVZJR0FUSU9OX0lURU1TX1NVQ0NFU1MgPVxuICAnW0Ntc10gTG9hZCBOYXZpZ2F0aW9uRW50cnkgaXRlbXMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkTmF2aWdhdGlvbkl0ZW1zIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX05BVklHQVRJT05fSVRFTVM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IG5vZGVJZDogc3RyaW5nOyBpdGVtczogYW55W10gfSkge1xuICAgIHN1cGVyKE5BVklHQVRJT05fREVUQUlMX0VOVElUWSwgcGF5bG9hZC5ub2RlSWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTmF2aWdhdGlvbkl0ZW1zRmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9OQVZJR0FUSU9OX0lURU1TX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKG5vZGVJZDogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoTkFWSUdBVElPTl9ERVRBSUxfRU5USVRZLCBub2RlSWQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTmF2aWdhdGlvbkl0ZW1zU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9OQVZJR0FUSU9OX0lURU1TX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IG5vZGVJZDogc3RyaW5nOyBjb21wb25lbnRzOiBhbnlbXSB9KSB7XG4gICAgc3VwZXIoTkFWSUdBVElPTl9ERVRBSUxfRU5USVRZLCBwYXlsb2FkLm5vZGVJZCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBOYXZpZ2F0aW9uRW50cnlJdGVtQWN0aW9uID1cbiAgfCBMb2FkTmF2aWdhdGlvbkl0ZW1zXG4gIHwgTG9hZE5hdmlnYXRpb25JdGVtc0ZhaWxcbiAgfCBMb2FkTmF2aWdhdGlvbkl0ZW1zU3VjY2VzcztcbiJdfQ==