/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var ENTITY_REMOVE_ACTION = '[ENTITY] REMOVE';
/** @type {?} */
export var ENTITY_REMOVE_ALL_ACTION = '[ENTITY] REMOVE ALL';
/**
 * @record
 */
export function EntityMeta() { }
if (false) {
    /** @type {?} */
    EntityMeta.prototype.entityType;
    /** @type {?} */
    EntityMeta.prototype.entityId;
    /** @type {?|undefined} */
    EntityMeta.prototype.entityRemove;
}
/**
 * @param {?} type
 * @param {?} id
 * @return {?}
 */
export function entityMeta(type, id) {
    return {
        entityType: type,
        entityId: id,
    };
}
/**
 * @param {?} type
 * @param {?} id
 * @return {?}
 */
export function entityRemoveMeta(type, id) {
    return {
        entityId: id,
        entityType: type,
        entityRemove: true,
    };
}
/**
 * @param {?} type
 * @return {?}
 */
export function entityRemoveAllMeta(type) {
    return {
        entityId: null,
        entityType: type,
        entityRemove: true,
    };
}
/**
 * @record
 */
export function EntityAction() { }
if (false) {
    /** @type {?|undefined} */
    EntityAction.prototype.payload;
    /** @type {?|undefined} */
    EntityAction.prototype.meta;
}
var EntityRemoveAction = /** @class */ (function () {
    function EntityRemoveAction(entityType, id) {
        this.type = ENTITY_REMOVE_ACTION;
        this.meta = entityRemoveMeta(entityType, id);
    }
    return EntityRemoveAction;
}());
export { EntityRemoveAction };
if (false) {
    /** @type {?} */
    EntityRemoveAction.prototype.type;
    /** @type {?} */
    EntityRemoveAction.prototype.meta;
}
var EntityRemoveAllAction = /** @class */ (function () {
    function EntityRemoveAllAction(entityType) {
        this.type = ENTITY_REMOVE_ALL_ACTION;
        this.meta = entityRemoveAllMeta(entityType);
    }
    return EntityRemoveAllAction;
}());
export { EntityRemoveAllAction };
if (false) {
    /** @type {?} */
    EntityRemoveAllAction.prototype.type;
    /** @type {?} */
    EntityRemoveAllAction.prototype.meta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxpQkFBaUI7O0FBQ3JELE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxxQkFBcUI7Ozs7QUFFN0QsZ0NBSUM7OztJQUhDLGdDQUFtQjs7SUFDbkIsOEJBQTRCOztJQUM1QixrQ0FBdUI7Ozs7Ozs7QUFHekIsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFZLEVBQUUsRUFBcUI7SUFDNUQsT0FBTztRQUNMLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsSUFBWSxFQUNaLEVBQXFCO0lBRXJCLE9BQU87UUFDTCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFlBQVksRUFBRSxJQUFJO0tBQ25CLENBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUFZO0lBQzlDLE9BQU87UUFDTCxRQUFRLEVBQUUsSUFBSTtRQUNkLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFlBQVksRUFBRSxJQUFJO0tBQ25CLENBQUM7QUFDSixDQUFDOzs7O0FBRUQsa0NBR0M7OztJQUZDLCtCQUF1Qjs7SUFDdkIsNEJBQTJCOztBQUc3QjtJQUdFLDRCQUFZLFVBQWtCLEVBQUUsRUFBcUI7UUFGckQsU0FBSSxHQUFHLG9CQUFvQixDQUFDO1FBRzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsa0NBQTRCOztJQUM1QixrQ0FBMEI7O0FBTTVCO0lBR0UsK0JBQVksVUFBa0I7UUFGOUIsU0FBSSxHQUFHLHdCQUF3QixDQUFDO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyxxQ0FBZ0M7O0lBQ2hDLHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IEVOVElUWV9SRU1PVkVfQUNUSU9OID0gJ1tFTlRJVFldIFJFTU9WRSc7XG5leHBvcnQgY29uc3QgRU5USVRZX1JFTU9WRV9BTExfQUNUSU9OID0gJ1tFTlRJVFldIFJFTU9WRSBBTEwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eU1ldGEge1xuICBlbnRpdHlUeXBlOiBzdHJpbmc7XG4gIGVudGl0eUlkOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgZW50aXR5UmVtb3ZlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eU1ldGEodHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10pOiBFbnRpdHlNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRpdHlUeXBlOiB0eXBlLFxuICAgIGVudGl0eUlkOiBpZCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVJlbW92ZU1ldGEoXG4gIHR5cGU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdXG4pOiBFbnRpdHlNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRpdHlJZDogaWQsXG4gICAgZW50aXR5VHlwZTogdHlwZSxcbiAgICBlbnRpdHlSZW1vdmU6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlSZW1vdmVBbGxNZXRhKHR5cGU6IHN0cmluZyk6IEVudGl0eU1ldGEge1xuICByZXR1cm4ge1xuICAgIGVudGl0eUlkOiBudWxsLFxuICAgIGVudGl0eVR5cGU6IHR5cGUsXG4gICAgZW50aXR5UmVtb3ZlOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eUFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHBheWxvYWQ/OiBhbnk7XG4gIHJlYWRvbmx5IG1ldGE/OiBFbnRpdHlNZXRhO1xufVxuXG5leHBvcnQgY2xhc3MgRW50aXR5UmVtb3ZlQWN0aW9uIGltcGxlbWVudHMgRW50aXR5QWN0aW9uIHtcbiAgdHlwZSA9IEVOVElUWV9SRU1PVkVfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBFbnRpdHlNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHRoaXMubWV0YSA9IGVudGl0eVJlbW92ZU1ldGEoZW50aXR5VHlwZSwgaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlSZW1vdmVBbGxBY3Rpb24gaW1wbGVtZW50cyBFbnRpdHlBY3Rpb24ge1xuICB0eXBlID0gRU5USVRZX1JFTU9WRV9BTExfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBFbnRpdHlNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEgPSBlbnRpdHlSZW1vdmVBbGxNZXRhKGVudGl0eVR5cGUpO1xuICB9XG59XG4iXX0=