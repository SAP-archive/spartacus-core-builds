/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ENTITY_FAIL_ACTION, ENTITY_LOAD_ACTION, ENTITY_RESET_ACTION, ENTITY_SUCCESS_ACTION, entityFailMeta, entityLoadMeta, entityResetMeta, entitySuccessMeta, } from '../entity-loader/entity-loader.action';
export var EntityScopedLoaderActions;
(function (EntityScopedLoaderActions) {
    /**
     * @record
     */
    function EntityScopedLoaderMeta() { }
    EntityScopedLoaderActions.EntityScopedLoaderMeta = EntityScopedLoaderMeta;
    if (false) {
        /** @type {?|undefined} */
        EntityScopedLoaderMeta.prototype.scope;
    }
    /**
     * @record
     */
    function EntityScopedLoaderAction() { }
    EntityScopedLoaderActions.EntityScopedLoaderAction = EntityScopedLoaderAction;
    if (false) {
        /** @type {?|undefined} */
        EntityScopedLoaderAction.prototype.payload;
        /** @type {?|undefined} */
        EntityScopedLoaderAction.prototype.meta;
    }
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} scope
     * @return {?}
     */
    function entityScopedLoadMeta(entityType, id, scope) {
        return Object.assign({}, entityLoadMeta(entityType, id), { scope });
    }
    EntityScopedLoaderActions.entityScopedLoadMeta = entityScopedLoadMeta;
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} scope
     * @param {?=} error
     * @return {?}
     */
    function entityScopedFailMeta(entityType, id, scope, error) {
        return Object.assign({}, entityFailMeta(entityType, id, error), { scope });
    }
    EntityScopedLoaderActions.entityScopedFailMeta = entityScopedFailMeta;
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} scope
     * @return {?}
     */
    function entityScopedSuccessMeta(entityType, id, scope) {
        return Object.assign({}, entitySuccessMeta(entityType, id), { scope });
    }
    EntityScopedLoaderActions.entityScopedSuccessMeta = entityScopedSuccessMeta;
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} scope
     * @return {?}
     */
    function entityScopedResetMeta(entityType, id, scope) {
        return Object.assign({}, entityResetMeta(entityType, id), { scope });
    }
    EntityScopedLoaderActions.entityScopedResetMeta = entityScopedResetMeta;
    class EntityScopedLoadAction {
        /**
         * @param {?} entityType
         * @param {?} id
         * @param {?=} scope
         */
        constructor(entityType, id, scope) {
            this.type = ENTITY_LOAD_ACTION;
            this.meta = entityScopedLoadMeta(entityType, id, scope);
        }
    }
    EntityScopedLoaderActions.EntityScopedLoadAction = EntityScopedLoadAction;
    if (false) {
        /** @type {?} */
        EntityScopedLoadAction.prototype.type;
        /** @type {?} */
        EntityScopedLoadAction.prototype.meta;
    }
    class EntityScopedFailAction {
        /**
         * @param {?} entityType
         * @param {?} id
         * @param {?=} scope
         * @param {?=} error
         */
        constructor(entityType, id, scope, error) {
            this.type = ENTITY_FAIL_ACTION;
            this.meta = entityScopedFailMeta(entityType, id, scope, error);
        }
    }
    EntityScopedLoaderActions.EntityScopedFailAction = EntityScopedFailAction;
    if (false) {
        /** @type {?} */
        EntityScopedFailAction.prototype.type;
        /** @type {?} */
        EntityScopedFailAction.prototype.meta;
    }
    class EntityScopedSuccessAction {
        /**
         * @param {?} entityType
         * @param {?} id
         * @param {?=} scope
         * @param {?=} payload
         */
        constructor(entityType, id, scope, payload) {
            this.payload = payload;
            this.type = ENTITY_SUCCESS_ACTION;
            this.meta = entityScopedSuccessMeta(entityType, id, scope);
        }
    }
    EntityScopedLoaderActions.EntityScopedSuccessAction = EntityScopedSuccessAction;
    if (false) {
        /** @type {?} */
        EntityScopedSuccessAction.prototype.type;
        /** @type {?} */
        EntityScopedSuccessAction.prototype.meta;
        /** @type {?} */
        EntityScopedSuccessAction.prototype.payload;
    }
    class EntityScopedResetAction {
        /**
         * @param {?} entityType
         * @param {?} id
         * @param {?=} scope
         */
        constructor(entityType, id, scope) {
            this.type = ENTITY_RESET_ACTION;
            this.meta = entityScopedResetMeta(entityType, id, scope);
        }
    }
    EntityScopedLoaderActions.EntityScopedResetAction = EntityScopedResetAction;
    if (false) {
        /** @type {?} */
        EntityScopedResetAction.prototype.type;
        /** @type {?} */
        EntityScopedResetAction.prototype.meta;
    }
})(EntityScopedLoaderActions || (EntityScopedLoaderActions = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXNjb3BlZC1sb2FkZXIuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS91dGlscy9zY29wZWQtbG9hZGVyL2VudGl0eS1zY29wZWQtbG9hZGVyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsY0FBYyxFQUVkLGNBQWMsRUFDZCxlQUFlLEVBQ2YsaUJBQWlCLEdBQ2xCLE1BQU0sdUNBQXVDLENBQUM7QUFHL0MsTUFBTSxLQUFXLHlCQUF5QixDQWdHekM7QUFoR0QsV0FBaUIseUJBQXlCOzs7O0lBQ3hDLHFDQUVDOzs7O1FBREMsdUNBQWU7Ozs7O0lBR2pCLHVDQUdDOzs7O1FBRkMsMkNBQXVCOztRQUN2Qix3Q0FBdUM7Ozs7Ozs7O0lBR3pDLFNBQWdCLG9CQUFvQixDQUNsQyxVQUFrQixFQUNsQixFQUFxQixFQUNyQixLQUFjO1FBRWQseUJBQ0ssY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFDakMsS0FBSyxJQUNMO0lBQ0osQ0FBQztJQVRlLDhDQUFvQix1QkFTbkMsQ0FBQTs7Ozs7Ozs7SUFFRCxTQUFnQixvQkFBb0IsQ0FDbEMsVUFBa0IsRUFDbEIsRUFBcUIsRUFDckIsS0FBYyxFQUNkLEtBQVc7UUFFWCx5QkFDSyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFDeEMsS0FBSyxJQUNMO0lBQ0osQ0FBQztJQVZlLDhDQUFvQix1QkFVbkMsQ0FBQTs7Ozs7OztJQUVELFNBQWdCLHVCQUF1QixDQUNyQyxVQUFrQixFQUNsQixFQUFxQixFQUNyQixLQUFjO1FBRWQseUJBQ0ssaUJBQWlCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUNwQyxLQUFLLElBQ0w7SUFDSixDQUFDO0lBVGUsaURBQXVCLDBCQVN0QyxDQUFBOzs7Ozs7O0lBRUQsU0FBZ0IscUJBQXFCLENBQ25DLFVBQWtCLEVBQ2xCLEVBQXFCLEVBQ3JCLEtBQWM7UUFFZCx5QkFDSyxlQUFlLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUNsQyxLQUFLLElBQ0w7SUFDSixDQUFDO0lBVGUsK0NBQXFCLHdCQVNwQyxDQUFBO0lBRUQsTUFBYSxzQkFBc0I7Ozs7OztRQUdqQyxZQUFZLFVBQWtCLEVBQUUsRUFBcUIsRUFBRSxLQUFjO1lBRnJFLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztZQUd4QixJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQztLQUNGO0lBTlksZ0RBQXNCLHlCQU1sQyxDQUFBOzs7UUFMQyxzQ0FBMEI7O1FBQzFCLHNDQUFzQzs7SUFNeEMsTUFBYSxzQkFBc0I7Ozs7Ozs7UUFHakMsWUFDRSxVQUFrQixFQUNsQixFQUFxQixFQUNyQixLQUFjLEVBQ2QsS0FBVztZQU5iLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztZQVF4QixJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLENBQUM7S0FDRjtJQVhZLGdEQUFzQix5QkFXbEMsQ0FBQTs7O1FBVkMsc0NBQTBCOztRQUMxQixzQ0FBc0M7O0lBV3hDLE1BQWEseUJBQXlCOzs7Ozs7O1FBR3BDLFlBQ0UsVUFBa0IsRUFDbEIsRUFBcUIsRUFDckIsS0FBYyxFQUNQLE9BQWE7WUFBYixZQUFPLEdBQVAsT0FBTyxDQUFNO1lBTnRCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztZQVEzQixJQUFJLENBQUMsSUFBSSxHQUFHLHVCQUF1QixDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsQ0FBQztLQUNGO0lBWFksbURBQXlCLDRCQVdyQyxDQUFBOzs7UUFWQyx5Q0FBNkI7O1FBQzdCLHlDQUFzQzs7UUFLcEMsNENBQW9COztJQU14QixNQUFhLHVCQUF1Qjs7Ozs7O1FBR2xDLFlBQVksVUFBa0IsRUFBRSxFQUFxQixFQUFFLEtBQWM7WUFGckUsU0FBSSxHQUFHLG1CQUFtQixDQUFDO1lBR3pCLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQ0Y7SUFOWSxpREFBdUIsMEJBTW5DLENBQUE7OztRQUxDLHVDQUEyQjs7UUFDM0IsdUNBQXNDOztBQUsxQyxDQUFDLEVBaEdnQix5QkFBeUIsS0FBekIseUJBQXlCLFFBZ0d6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVOVElUWV9GQUlMX0FDVElPTixcbiAgRU5USVRZX0xPQURfQUNUSU9OLFxuICBFTlRJVFlfUkVTRVRfQUNUSU9OLFxuICBFTlRJVFlfU1VDQ0VTU19BQ1RJT04sXG4gIGVudGl0eUZhaWxNZXRhLFxuICBFbnRpdHlMb2FkZXJNZXRhLFxuICBlbnRpdHlMb2FkTWV0YSxcbiAgZW50aXR5UmVzZXRNZXRhLFxuICBlbnRpdHlTdWNjZXNzTWV0YSxcbn0gZnJvbSAnLi4vZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgRW50aXR5U2NvcGVkTG9hZGVyQWN0aW9ucyB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgRW50aXR5U2NvcGVkTG9hZGVyTWV0YSBleHRlbmRzIEVudGl0eUxvYWRlck1ldGEge1xuICAgIHNjb3BlPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBFbnRpdHlTY29wZWRMb2FkZXJBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHJlYWRvbmx5IHBheWxvYWQ/OiBhbnk7XG4gICAgcmVhZG9ubHkgbWV0YT86IEVudGl0eVNjb3BlZExvYWRlck1ldGE7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZW50aXR5U2NvcGVkTG9hZE1ldGEoXG4gICAgZW50aXR5VHlwZTogc3RyaW5nLFxuICAgIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBzY29wZT86IHN0cmluZ1xuICApOiBFbnRpdHlTY29wZWRMb2FkZXJNZXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZW50aXR5TG9hZE1ldGEoZW50aXR5VHlwZSwgaWQpLFxuICAgICAgc2NvcGUsXG4gICAgfTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBlbnRpdHlTY29wZWRGYWlsTWV0YShcbiAgICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gICAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIHNjb3BlPzogc3RyaW5nLFxuICAgIGVycm9yPzogYW55XG4gICk6IEVudGl0eVNjb3BlZExvYWRlck1ldGEge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5lbnRpdHlGYWlsTWV0YShlbnRpdHlUeXBlLCBpZCwgZXJyb3IpLFxuICAgICAgc2NvcGUsXG4gICAgfTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBlbnRpdHlTY29wZWRTdWNjZXNzTWV0YShcbiAgICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gICAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIHNjb3BlPzogc3RyaW5nXG4gICk6IEVudGl0eVNjb3BlZExvYWRlck1ldGEge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5lbnRpdHlTdWNjZXNzTWV0YShlbnRpdHlUeXBlLCBpZCksXG4gICAgICBzY29wZSxcbiAgICB9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVNjb3BlZFJlc2V0TWV0YShcbiAgICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gICAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIHNjb3BlPzogc3RyaW5nXG4gICk6IEVudGl0eVNjb3BlZExvYWRlck1ldGEge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5lbnRpdHlSZXNldE1ldGEoZW50aXR5VHlwZSwgaWQpLFxuICAgICAgc2NvcGUsXG4gICAgfTtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBFbnRpdHlTY29wZWRMb2FkQWN0aW9uIGltcGxlbWVudHMgRW50aXR5U2NvcGVkTG9hZGVyQWN0aW9uIHtcbiAgICB0eXBlID0gRU5USVRZX0xPQURfQUNUSU9OO1xuICAgIHJlYWRvbmx5IG1ldGE6IEVudGl0eVNjb3BlZExvYWRlck1ldGE7XG4gICAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10sIHNjb3BlPzogc3RyaW5nKSB7XG4gICAgICB0aGlzLm1ldGEgPSBlbnRpdHlTY29wZWRMb2FkTWV0YShlbnRpdHlUeXBlLCBpZCwgc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBFbnRpdHlTY29wZWRGYWlsQWN0aW9uIGltcGxlbWVudHMgRW50aXR5U2NvcGVkTG9hZGVyQWN0aW9uIHtcbiAgICB0eXBlID0gRU5USVRZX0ZBSUxfQUNUSU9OO1xuICAgIHJlYWRvbmx5IG1ldGE6IEVudGl0eVNjb3BlZExvYWRlck1ldGE7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gICAgICBpZDogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgICBzY29wZT86IHN0cmluZyxcbiAgICAgIGVycm9yPzogYW55XG4gICAgKSB7XG4gICAgICB0aGlzLm1ldGEgPSBlbnRpdHlTY29wZWRGYWlsTWV0YShlbnRpdHlUeXBlLCBpZCwgc2NvcGUsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgRW50aXR5U2NvcGVkU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEVudGl0eVNjb3BlZExvYWRlckFjdGlvbiB7XG4gICAgdHlwZSA9IEVOVElUWV9TVUNDRVNTX0FDVElPTjtcbiAgICByZWFkb25seSBtZXRhOiBFbnRpdHlTY29wZWRMb2FkZXJNZXRhO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgZW50aXR5VHlwZTogc3RyaW5nLFxuICAgICAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgICAgc2NvcGU/OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgcGF5bG9hZD86IGFueVxuICAgICkge1xuICAgICAgdGhpcy5tZXRhID0gZW50aXR5U2NvcGVkU3VjY2Vzc01ldGEoZW50aXR5VHlwZSwgaWQsIHNjb3BlKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgRW50aXR5U2NvcGVkUmVzZXRBY3Rpb24gaW1wbGVtZW50cyBFbnRpdHlTY29wZWRMb2FkZXJBY3Rpb24ge1xuICAgIHR5cGUgPSBFTlRJVFlfUkVTRVRfQUNUSU9OO1xuICAgIHJlYWRvbmx5IG1ldGE6IEVudGl0eVNjb3BlZExvYWRlck1ldGE7XG4gICAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10sIHNjb3BlPzogc3RyaW5nKSB7XG4gICAgICB0aGlzLm1ldGEgPSBlbnRpdHlTY29wZWRSZXNldE1ldGEoZW50aXR5VHlwZSwgaWQsIHNjb3BlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==