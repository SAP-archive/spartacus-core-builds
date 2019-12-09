/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { entityMeta } from '../entity/entity.action';
import { processesDecrementMeta, processesIncrementMeta, processesLoaderResetMeta, } from '../processes-loader/processes-loader.action';
/** @type {?} */
export const ENTITY_PROCESSES_LOADER_RESET_ACTION = '[ENTITY] PROCESSES LOADER RESET';
/** @type {?} */
export const ENTITY_PROCESSES_INCREMENT_ACTION = '[ENTITY] PROCESSES INCREMENT';
/** @type {?} */
export const ENTITY_PROCESSES_DECREMENT_ACTION = '[ENTITY] PROCESSES DECREMENT';
/**
 * @record
 */
export function EntityProcessesLoaderMeta() { }
/**
 * @record
 */
export function EntityProcessesLoaderAction() { }
if (false) {
    /** @type {?|undefined} */
    EntityProcessesLoaderAction.prototype.payload;
    /** @type {?|undefined} */
    EntityProcessesLoaderAction.prototype.meta;
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entityProcessesLoaderResetMeta(entityType, id) {
    return Object.assign({}, processesLoaderResetMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entityProcessesIncrementMeta(entityType, id) {
    return Object.assign({}, processesIncrementMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entityProcessesDecrementMeta(entityType, id) {
    return Object.assign({}, processesDecrementMeta(entityType), entityMeta(entityType, id));
}
export class EntityProcessesLoaderResetAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_PROCESSES_LOADER_RESET_ACTION;
        this.meta = entityProcessesLoaderResetMeta(entityType, id);
    }
}
if (false) {
    /** @type {?} */
    EntityProcessesLoaderResetAction.prototype.type;
    /** @type {?} */
    EntityProcessesLoaderResetAction.prototype.meta;
}
export class EntityProcessesIncrementAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_PROCESSES_INCREMENT_ACTION;
        this.meta = entityProcessesIncrementMeta(entityType, id);
    }
}
if (false) {
    /** @type {?} */
    EntityProcessesIncrementAction.prototype.type;
    /** @type {?} */
    EntityProcessesIncrementAction.prototype.meta;
}
export class EntityProcessesDecrementAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_PROCESSES_DECREMENT_ACTION;
        this.meta = entityProcessesDecrementMeta(entityType, id);
    }
}
if (false) {
    /** @type {?} */
    EntityProcessesDecrementAction.prototype.type;
    /** @type {?} */
    EntityProcessesDecrementAction.prototype.meta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsc0JBQXNCLEVBRXRCLHdCQUF3QixHQUN6QixNQUFNLDZDQUE2QyxDQUFDOztBQUVyRCxNQUFNLE9BQU8sb0NBQW9DLEdBQy9DLGlDQUFpQzs7QUFDbkMsTUFBTSxPQUFPLGlDQUFpQyxHQUFHLDhCQUE4Qjs7QUFDL0UsTUFBTSxPQUFPLGlDQUFpQyxHQUFHLDhCQUE4Qjs7OztBQUUvRSwrQ0FFMEI7Ozs7QUFFMUIsaURBR0M7OztJQUZDLDhDQUF1Qjs7SUFDdkIsMkNBQTBDOzs7Ozs7O0FBRzVDLE1BQU0sVUFBVSw4QkFBOEIsQ0FDNUMsVUFBa0IsRUFDbEIsRUFBcUI7SUFFckIseUJBQ0ssd0JBQXdCLENBQUMsVUFBVSxDQUFDLEVBQ3BDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQzdCO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDRCQUE0QixDQUMxQyxVQUFrQixFQUNsQixFQUFxQjtJQUVyQix5QkFDSyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsRUFDbEMsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFDN0I7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsNEJBQTRCLENBQzFDLFVBQWtCLEVBQ2xCLEVBQXFCO0lBRXJCLHlCQUNLLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxFQUNsQyxVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUM3QjtBQUNKLENBQUM7QUFFRCxNQUFNLE9BQU8sZ0NBQWdDOzs7OztJQUkzQyxZQUFZLFVBQWtCLEVBQUUsRUFBcUI7UUFGckQsU0FBSSxHQUFHLG9DQUFvQyxDQUFDO1FBRzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsOEJBQThCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDRjs7O0lBTEMsZ0RBQTRDOztJQUM1QyxnREFBeUM7O0FBTTNDLE1BQU0sT0FBTyw4QkFBOEI7Ozs7O0lBSXpDLFlBQVksVUFBa0IsRUFBRSxFQUFxQjtRQUZyRCxTQUFJLEdBQUcsaUNBQWlDLENBQUM7UUFHdkMsSUFBSSxDQUFDLElBQUksR0FBRyw0QkFBNEIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUNGOzs7SUFMQyw4Q0FBeUM7O0lBQ3pDLDhDQUF5Qzs7QUFNM0MsTUFBTSxPQUFPLDhCQUE4Qjs7Ozs7SUFJekMsWUFBWSxVQUFrQixFQUFFLEVBQXFCO1FBRnJELFNBQUksR0FBRyxpQ0FBaUMsQ0FBQztRQUd2QyxJQUFJLENBQUMsSUFBSSxHQUFHLDRCQUE0QixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQ0Y7OztJQUxDLDhDQUF5Qzs7SUFDekMsOENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZW50aXR5TWV0YSwgRW50aXR5TWV0YSB9IGZyb20gJy4uL2VudGl0eS9lbnRpdHkuYWN0aW9uJztcbmltcG9ydCB7XG4gIHByb2Nlc3Nlc0RlY3JlbWVudE1ldGEsXG4gIHByb2Nlc3Nlc0luY3JlbWVudE1ldGEsXG4gIFByb2Nlc3Nlc0xvYWRlck1ldGEsXG4gIHByb2Nlc3Nlc0xvYWRlclJlc2V0TWV0YSxcbn0gZnJvbSAnLi4vcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBFTlRJVFlfUFJPQ0VTU0VTX0xPQURFUl9SRVNFVF9BQ1RJT04gPVxuICAnW0VOVElUWV0gUFJPQ0VTU0VTIExPQURFUiBSRVNFVCc7XG5leHBvcnQgY29uc3QgRU5USVRZX1BST0NFU1NFU19JTkNSRU1FTlRfQUNUSU9OID0gJ1tFTlRJVFldIFBST0NFU1NFUyBJTkNSRU1FTlQnO1xuZXhwb3J0IGNvbnN0IEVOVElUWV9QUk9DRVNTRVNfREVDUkVNRU5UX0FDVElPTiA9ICdbRU5USVRZXSBQUk9DRVNTRVMgREVDUkVNRU5UJztcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlQcm9jZXNzZXNMb2FkZXJNZXRhXG4gIGV4dGVuZHMgRW50aXR5TWV0YSxcbiAgICBQcm9jZXNzZXNMb2FkZXJNZXRhIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UHJvY2Vzc2VzTG9hZGVyQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgcGF5bG9hZD86IGFueTtcbiAgcmVhZG9ubHkgbWV0YT86IEVudGl0eVByb2Nlc3Nlc0xvYWRlck1ldGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlQcm9jZXNzZXNMb2FkZXJSZXNldE1ldGEoXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdXG4pOiBFbnRpdHlQcm9jZXNzZXNMb2FkZXJNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5wcm9jZXNzZXNMb2FkZXJSZXNldE1ldGEoZW50aXR5VHlwZSksXG4gICAgLi4uZW50aXR5TWV0YShlbnRpdHlUeXBlLCBpZCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXVxuKTogRW50aXR5UHJvY2Vzc2VzTG9hZGVyTWV0YSB7XG4gIHJldHVybiB7XG4gICAgLi4ucHJvY2Vzc2VzSW5jcmVtZW50TWV0YShlbnRpdHlUeXBlKSxcbiAgICAuLi5lbnRpdHlNZXRhKGVudGl0eVR5cGUsIGlkKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudE1ldGEoXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdXG4pOiBFbnRpdHlQcm9jZXNzZXNMb2FkZXJNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5wcm9jZXNzZXNEZWNyZW1lbnRNZXRhKGVudGl0eVR5cGUpLFxuICAgIC4uLmVudGl0eU1ldGEoZW50aXR5VHlwZSwgaWQpLFxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVzZXRBY3Rpb25cbiAgaW1wbGVtZW50cyBFbnRpdHlQcm9jZXNzZXNMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gRU5USVRZX1BST0NFU1NFU19MT0FERVJfUkVTRVRfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBFbnRpdHlQcm9jZXNzZXNMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHRoaXMubWV0YSA9IGVudGl0eVByb2Nlc3Nlc0xvYWRlclJlc2V0TWV0YShlbnRpdHlUeXBlLCBpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvblxuICBpbXBsZW1lbnRzIEVudGl0eVByb2Nlc3Nlc0xvYWRlckFjdGlvbiB7XG4gIHR5cGUgPSBFTlRJVFlfUFJPQ0VTU0VTX0lOQ1JFTUVOVF9BQ1RJT047XG4gIHJlYWRvbmx5IG1ldGE6IEVudGl0eVByb2Nlc3Nlc0xvYWRlck1ldGE7XG4gIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZywgaWQ6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5tZXRhID0gZW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50TWV0YShlbnRpdHlUeXBlLCBpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvblxuICBpbXBsZW1lbnRzIEVudGl0eVByb2Nlc3Nlc0xvYWRlckFjdGlvbiB7XG4gIHR5cGUgPSBFTlRJVFlfUFJPQ0VTU0VTX0RFQ1JFTUVOVF9BQ1RJT047XG4gIHJlYWRvbmx5IG1ldGE6IEVudGl0eVByb2Nlc3Nlc0xvYWRlck1ldGE7XG4gIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZywgaWQ6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5tZXRhID0gZW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50TWV0YShlbnRpdHlUeXBlLCBpZCk7XG4gIH1cbn1cbiJdfQ==