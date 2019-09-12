/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const ENTITY_REMOVE_ACTION = '[ENTITY] REMOVE';
/** @type {?} */
export const ENTITY_REMOVE_ALL_ACTION = '[ENTITY] REMOVE ALL';
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
export class EntityRemoveAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_REMOVE_ACTION;
        this.meta = entityRemoveMeta(entityType, id);
    }
}
if (false) {
    /** @type {?} */
    EntityRemoveAction.prototype.type;
    /** @type {?} */
    EntityRemoveAction.prototype.meta;
}
export class EntityRemoveAllAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = ENTITY_REMOVE_ALL_ACTION;
        this.meta = entityRemoveAllMeta(entityType);
    }
}
if (false) {
    /** @type {?} */
    EntityRemoveAllAction.prototype.type;
    /** @type {?} */
    EntityRemoveAllAction.prototype.meta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxpQkFBaUI7O0FBQ3JELE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxxQkFBcUI7Ozs7QUFFN0QsZ0NBSUM7OztJQUhDLGdDQUFtQjs7SUFDbkIsOEJBQTRCOztJQUM1QixrQ0FBdUI7Ozs7Ozs7QUFHekIsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFZLEVBQUUsRUFBcUI7SUFDNUQsT0FBTztRQUNMLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsSUFBWSxFQUNaLEVBQXFCO0lBRXJCLE9BQU87UUFDTCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFlBQVksRUFBRSxJQUFJO0tBQ25CLENBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUFZO0lBQzlDLE9BQU87UUFDTCxRQUFRLEVBQUUsSUFBSTtRQUNkLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFlBQVksRUFBRSxJQUFJO0tBQ25CLENBQUM7QUFDSixDQUFDOzs7O0FBRUQsa0NBR0M7OztJQUZDLCtCQUF1Qjs7SUFDdkIsNEJBQTJCOztBQUc3QixNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUc3QixZQUFZLFVBQWtCLEVBQUUsRUFBcUI7UUFGckQsU0FBSSxHQUFHLG9CQUFvQixDQUFDO1FBRzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjs7O0lBTEMsa0NBQTRCOztJQUM1QixrQ0FBMEI7O0FBTTVCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFHaEMsWUFBWSxVQUFrQjtRQUY5QixTQUFJLEdBQUcsd0JBQXdCLENBQUM7UUFHOUIsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0Y7OztJQUxDLHFDQUFnQzs7SUFDaEMscUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgRU5USVRZX1JFTU9WRV9BQ1RJT04gPSAnW0VOVElUWV0gUkVNT1ZFJztcbmV4cG9ydCBjb25zdCBFTlRJVFlfUkVNT1ZFX0FMTF9BQ1RJT04gPSAnW0VOVElUWV0gUkVNT1ZFIEFMTCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5TWV0YSB7XG4gIGVudGl0eVR5cGU6IHN0cmluZztcbiAgZW50aXR5SWQ6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBlbnRpdHlSZW1vdmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5TWV0YSh0eXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSk6IEVudGl0eU1ldGEge1xuICByZXR1cm4ge1xuICAgIGVudGl0eVR5cGU6IHR5cGUsXG4gICAgZW50aXR5SWQ6IGlkLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5UmVtb3ZlTWV0YShcbiAgdHlwZTogc3RyaW5nLFxuICBpZDogc3RyaW5nIHwgc3RyaW5nW11cbik6IEVudGl0eU1ldGEge1xuICByZXR1cm4ge1xuICAgIGVudGl0eUlkOiBpZCxcbiAgICBlbnRpdHlUeXBlOiB0eXBlLFxuICAgIGVudGl0eVJlbW92ZTogdHJ1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVJlbW92ZUFsbE1ldGEodHlwZTogc3RyaW5nKTogRW50aXR5TWV0YSB7XG4gIHJldHVybiB7XG4gICAgZW50aXR5SWQ6IG51bGwsXG4gICAgZW50aXR5VHlwZTogdHlwZSxcbiAgICBlbnRpdHlSZW1vdmU6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5QWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgcGF5bG9hZD86IGFueTtcbiAgcmVhZG9ubHkgbWV0YT86IEVudGl0eU1ldGE7XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlSZW1vdmVBY3Rpb24gaW1wbGVtZW50cyBFbnRpdHlBY3Rpb24ge1xuICB0eXBlID0gRU5USVRZX1JFTU9WRV9BQ1RJT047XG4gIHJlYWRvbmx5IG1ldGE6IEVudGl0eU1ldGE7XG4gIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZywgaWQ6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5tZXRhID0gZW50aXR5UmVtb3ZlTWV0YShlbnRpdHlUeXBlLCBpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVudGl0eVJlbW92ZUFsbEFjdGlvbiBpbXBsZW1lbnRzIEVudGl0eUFjdGlvbiB7XG4gIHR5cGUgPSBFTlRJVFlfUkVNT1ZFX0FMTF9BQ1RJT047XG4gIHJlYWRvbmx5IG1ldGE6IEVudGl0eU1ldGE7XG4gIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZykge1xuICAgIHRoaXMubWV0YSA9IGVudGl0eVJlbW92ZUFsbE1ldGEoZW50aXR5VHlwZSk7XG4gIH1cbn1cbiJdfQ==