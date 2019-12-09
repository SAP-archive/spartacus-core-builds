/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        return tslib_1.__assign({}, entityLoadMeta(entityType, id), { scope: scope });
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
        return tslib_1.__assign({}, entityFailMeta(entityType, id, error), { scope: scope });
    }
    EntityScopedLoaderActions.entityScopedFailMeta = entityScopedFailMeta;
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} scope
     * @return {?}
     */
    function entityScopedSuccessMeta(entityType, id, scope) {
        return tslib_1.__assign({}, entitySuccessMeta(entityType, id), { scope: scope });
    }
    EntityScopedLoaderActions.entityScopedSuccessMeta = entityScopedSuccessMeta;
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} scope
     * @return {?}
     */
    function entityScopedResetMeta(entityType, id, scope) {
        return tslib_1.__assign({}, entityResetMeta(entityType, id), { scope: scope });
    }
    EntityScopedLoaderActions.entityScopedResetMeta = entityScopedResetMeta;
    var EntityScopedLoadAction = /** @class */ (function () {
        function EntityScopedLoadAction(entityType, id, scope) {
            this.type = ENTITY_LOAD_ACTION;
            this.meta = entityScopedLoadMeta(entityType, id, scope);
        }
        return EntityScopedLoadAction;
    }());
    EntityScopedLoaderActions.EntityScopedLoadAction = EntityScopedLoadAction;
    if (false) {
        /** @type {?} */
        EntityScopedLoadAction.prototype.type;
        /** @type {?} */
        EntityScopedLoadAction.prototype.meta;
    }
    var EntityScopedFailAction = /** @class */ (function () {
        function EntityScopedFailAction(entityType, id, scope, error) {
            this.type = ENTITY_FAIL_ACTION;
            this.meta = entityScopedFailMeta(entityType, id, scope, error);
        }
        return EntityScopedFailAction;
    }());
    EntityScopedLoaderActions.EntityScopedFailAction = EntityScopedFailAction;
    if (false) {
        /** @type {?} */
        EntityScopedFailAction.prototype.type;
        /** @type {?} */
        EntityScopedFailAction.prototype.meta;
    }
    var EntityScopedSuccessAction = /** @class */ (function () {
        function EntityScopedSuccessAction(entityType, id, scope, payload) {
            this.payload = payload;
            this.type = ENTITY_SUCCESS_ACTION;
            this.meta = entityScopedSuccessMeta(entityType, id, scope);
        }
        return EntityScopedSuccessAction;
    }());
    EntityScopedLoaderActions.EntityScopedSuccessAction = EntityScopedSuccessAction;
    if (false) {
        /** @type {?} */
        EntityScopedSuccessAction.prototype.type;
        /** @type {?} */
        EntityScopedSuccessAction.prototype.meta;
        /** @type {?} */
        EntityScopedSuccessAction.prototype.payload;
    }
    var EntityScopedResetAction = /** @class */ (function () {
        function EntityScopedResetAction(entityType, id, scope) {
            this.type = ENTITY_RESET_ACTION;
            this.meta = entityScopedResetMeta(entityType, id, scope);
        }
        return EntityScopedResetAction;
    }());
    EntityScopedLoaderActions.EntityScopedResetAction = EntityScopedResetAction;
    if (false) {
        /** @type {?} */
        EntityScopedResetAction.prototype.type;
        /** @type {?} */
        EntityScopedResetAction.prototype.meta;
    }
})(EntityScopedLoaderActions || (EntityScopedLoaderActions = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXNjb3BlZC1sb2FkZXIuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS91dGlscy9zY29wZWQtbG9hZGVyL2VudGl0eS1zY29wZWQtbG9hZGVyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLGNBQWMsRUFFZCxjQUFjLEVBQ2QsZUFBZSxFQUNmLGlCQUFpQixHQUNsQixNQUFNLHVDQUF1QyxDQUFDO0FBRy9DLE1BQU0sS0FBVyx5QkFBeUIsQ0FnR3pDO0FBaEdELFdBQWlCLHlCQUF5Qjs7OztJQUN4QyxxQ0FFQzs7OztRQURDLHVDQUFlOzs7OztJQUdqQix1Q0FHQzs7OztRQUZDLDJDQUF1Qjs7UUFDdkIsd0NBQXVDOzs7Ozs7OztJQUd6QyxTQUFnQixvQkFBb0IsQ0FDbEMsVUFBa0IsRUFDbEIsRUFBcUIsRUFDckIsS0FBYztRQUVkLDRCQUNLLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQ2pDLEtBQUssT0FBQSxJQUNMO0lBQ0osQ0FBQztJQVRlLDhDQUFvQix1QkFTbkMsQ0FBQTs7Ozs7Ozs7SUFFRCxTQUFnQixvQkFBb0IsQ0FDbEMsVUFBa0IsRUFDbEIsRUFBcUIsRUFDckIsS0FBYyxFQUNkLEtBQVc7UUFFWCw0QkFDSyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFDeEMsS0FBSyxPQUFBLElBQ0w7SUFDSixDQUFDO0lBVmUsOENBQW9CLHVCQVVuQyxDQUFBOzs7Ozs7O0lBRUQsU0FBZ0IsdUJBQXVCLENBQ3JDLFVBQWtCLEVBQ2xCLEVBQXFCLEVBQ3JCLEtBQWM7UUFFZCw0QkFDSyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQ3BDLEtBQUssT0FBQSxJQUNMO0lBQ0osQ0FBQztJQVRlLGlEQUF1QiwwQkFTdEMsQ0FBQTs7Ozs7OztJQUVELFNBQWdCLHFCQUFxQixDQUNuQyxVQUFrQixFQUNsQixFQUFxQixFQUNyQixLQUFjO1FBRWQsNEJBQ0ssZUFBZSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFDbEMsS0FBSyxPQUFBLElBQ0w7SUFDSixDQUFDO0lBVGUsK0NBQXFCLHdCQVNwQyxDQUFBO0lBRUQ7UUFHRSxnQ0FBWSxVQUFrQixFQUFFLEVBQXFCLEVBQUUsS0FBYztZQUZyRSxTQUFJLEdBQUcsa0JBQWtCLENBQUM7WUFHeEIsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFDSCw2QkFBQztJQUFELENBQUMsQUFORCxJQU1DO0lBTlksZ0RBQXNCLHlCQU1sQyxDQUFBOzs7UUFMQyxzQ0FBMEI7O1FBQzFCLHNDQUFzQzs7SUFNeEM7UUFHRSxnQ0FDRSxVQUFrQixFQUNsQixFQUFxQixFQUNyQixLQUFjLEVBQ2QsS0FBVztZQU5iLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztZQVF4QixJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFDSCw2QkFBQztJQUFELENBQUMsQUFYRCxJQVdDO0lBWFksZ0RBQXNCLHlCQVdsQyxDQUFBOzs7UUFWQyxzQ0FBMEI7O1FBQzFCLHNDQUFzQzs7SUFXeEM7UUFHRSxtQ0FDRSxVQUFrQixFQUNsQixFQUFxQixFQUNyQixLQUFjLEVBQ1AsT0FBYTtZQUFiLFlBQU8sR0FBUCxPQUFPLENBQU07WUFOdEIsU0FBSSxHQUFHLHFCQUFxQixDQUFDO1lBUTNCLElBQUksQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0gsZ0NBQUM7SUFBRCxDQUFDLEFBWEQsSUFXQztJQVhZLG1EQUF5Qiw0QkFXckMsQ0FBQTs7O1FBVkMseUNBQTZCOztRQUM3Qix5Q0FBc0M7O1FBS3BDLDRDQUFvQjs7SUFNeEI7UUFHRSxpQ0FBWSxVQUFrQixFQUFFLEVBQXFCLEVBQUUsS0FBYztZQUZyRSxTQUFJLEdBQUcsbUJBQW1CLENBQUM7WUFHekIsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFDSCw4QkFBQztJQUFELENBQUMsQUFORCxJQU1DO0lBTlksaURBQXVCLDBCQU1uQyxDQUFBOzs7UUFMQyx1Q0FBMkI7O1FBQzNCLHVDQUFzQzs7QUFLMUMsQ0FBQyxFQWhHZ0IseUJBQXlCLEtBQXpCLHlCQUF5QixRQWdHekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFTlRJVFlfRkFJTF9BQ1RJT04sXG4gIEVOVElUWV9MT0FEX0FDVElPTixcbiAgRU5USVRZX1JFU0VUX0FDVElPTixcbiAgRU5USVRZX1NVQ0NFU1NfQUNUSU9OLFxuICBlbnRpdHlGYWlsTWV0YSxcbiAgRW50aXR5TG9hZGVyTWV0YSxcbiAgZW50aXR5TG9hZE1ldGEsXG4gIGVudGl0eVJlc2V0TWV0YSxcbiAgZW50aXR5U3VjY2Vzc01ldGEsXG59IGZyb20gJy4uL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5leHBvcnQgbmFtZXNwYWNlIEVudGl0eVNjb3BlZExvYWRlckFjdGlvbnMge1xuICBleHBvcnQgaW50ZXJmYWNlIEVudGl0eVNjb3BlZExvYWRlck1ldGEgZXh0ZW5kcyBFbnRpdHlMb2FkZXJNZXRhIHtcbiAgICBzY29wZT86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgRW50aXR5U2NvcGVkTG9hZGVyQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgICByZWFkb25seSBwYXlsb2FkPzogYW55O1xuICAgIHJlYWRvbmx5IG1ldGE/OiBFbnRpdHlTY29wZWRMb2FkZXJNZXRhO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVNjb3BlZExvYWRNZXRhKFxuICAgIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgICBpZDogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgc2NvcGU/OiBzdHJpbmdcbiAgKTogRW50aXR5U2NvcGVkTG9hZGVyTWV0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmVudGl0eUxvYWRNZXRhKGVudGl0eVR5cGUsIGlkKSxcbiAgICAgIHNjb3BlLFxuICAgIH07XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZW50aXR5U2NvcGVkRmFpbE1ldGEoXG4gICAgZW50aXR5VHlwZTogc3RyaW5nLFxuICAgIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBzY29wZT86IHN0cmluZyxcbiAgICBlcnJvcj86IGFueVxuICApOiBFbnRpdHlTY29wZWRMb2FkZXJNZXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZW50aXR5RmFpbE1ldGEoZW50aXR5VHlwZSwgaWQsIGVycm9yKSxcbiAgICAgIHNjb3BlLFxuICAgIH07XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZW50aXR5U2NvcGVkU3VjY2Vzc01ldGEoXG4gICAgZW50aXR5VHlwZTogc3RyaW5nLFxuICAgIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBzY29wZT86IHN0cmluZ1xuICApOiBFbnRpdHlTY29wZWRMb2FkZXJNZXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZW50aXR5U3VjY2Vzc01ldGEoZW50aXR5VHlwZSwgaWQpLFxuICAgICAgc2NvcGUsXG4gICAgfTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBlbnRpdHlTY29wZWRSZXNldE1ldGEoXG4gICAgZW50aXR5VHlwZTogc3RyaW5nLFxuICAgIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBzY29wZT86IHN0cmluZ1xuICApOiBFbnRpdHlTY29wZWRMb2FkZXJNZXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZW50aXR5UmVzZXRNZXRhKGVudGl0eVR5cGUsIGlkKSxcbiAgICAgIHNjb3BlLFxuICAgIH07XG4gIH1cblxuICBleHBvcnQgY2xhc3MgRW50aXR5U2NvcGVkTG9hZEFjdGlvbiBpbXBsZW1lbnRzIEVudGl0eVNjb3BlZExvYWRlckFjdGlvbiB7XG4gICAgdHlwZSA9IEVOVElUWV9MT0FEX0FDVElPTjtcbiAgICByZWFkb25seSBtZXRhOiBFbnRpdHlTY29wZWRMb2FkZXJNZXRhO1xuICAgIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZywgaWQ6IHN0cmluZyB8IHN0cmluZ1tdLCBzY29wZT86IHN0cmluZykge1xuICAgICAgdGhpcy5tZXRhID0gZW50aXR5U2NvcGVkTG9hZE1ldGEoZW50aXR5VHlwZSwgaWQsIHNjb3BlKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgRW50aXR5U2NvcGVkRmFpbEFjdGlvbiBpbXBsZW1lbnRzIEVudGl0eVNjb3BlZExvYWRlckFjdGlvbiB7XG4gICAgdHlwZSA9IEVOVElUWV9GQUlMX0FDVElPTjtcbiAgICByZWFkb25seSBtZXRhOiBFbnRpdHlTY29wZWRMb2FkZXJNZXRhO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgZW50aXR5VHlwZTogc3RyaW5nLFxuICAgICAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgICAgc2NvcGU/OiBzdHJpbmcsXG4gICAgICBlcnJvcj86IGFueVxuICAgICkge1xuICAgICAgdGhpcy5tZXRhID0gZW50aXR5U2NvcGVkRmFpbE1ldGEoZW50aXR5VHlwZSwgaWQsIHNjb3BlLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEVudGl0eVNjb3BlZFN1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBFbnRpdHlTY29wZWRMb2FkZXJBY3Rpb24ge1xuICAgIHR5cGUgPSBFTlRJVFlfU1VDQ0VTU19BQ1RJT047XG4gICAgcmVhZG9ubHkgbWV0YTogRW50aXR5U2NvcGVkTG9hZGVyTWV0YTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgICAgIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICAgIHNjb3BlPzogc3RyaW5nLFxuICAgICAgcHVibGljIHBheWxvYWQ/OiBhbnlcbiAgICApIHtcbiAgICAgIHRoaXMubWV0YSA9IGVudGl0eVNjb3BlZFN1Y2Nlc3NNZXRhKGVudGl0eVR5cGUsIGlkLCBzY29wZSk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEVudGl0eVNjb3BlZFJlc2V0QWN0aW9uIGltcGxlbWVudHMgRW50aXR5U2NvcGVkTG9hZGVyQWN0aW9uIHtcbiAgICB0eXBlID0gRU5USVRZX1JFU0VUX0FDVElPTjtcbiAgICByZWFkb25seSBtZXRhOiBFbnRpdHlTY29wZWRMb2FkZXJNZXRhO1xuICAgIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZywgaWQ6IHN0cmluZyB8IHN0cmluZ1tdLCBzY29wZT86IHN0cmluZykge1xuICAgICAgdGhpcy5tZXRhID0gZW50aXR5U2NvcGVkUmVzZXRNZXRhKGVudGl0eVR5cGUsIGlkLCBzY29wZSk7XG4gICAgfVxuICB9XG59XG4iXX0=