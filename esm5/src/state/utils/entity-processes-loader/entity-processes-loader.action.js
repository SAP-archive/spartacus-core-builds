/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { entityMeta } from '../entity/entity.action';
import { processesDecrementMeta, processesIncrementMeta, processesLoaderResetMeta, } from '../processes-loader/processes-loader.action';
/** @type {?} */
export var ENTITY_PROCESSES_LOADER_RESET_ACTION = '[ENTITY] PROCESSES LOADER RESET';
/** @type {?} */
export var ENTITY_PROCESSES_INCREMENT_ACTION = '[ENTITY] PROCESSES INCREMENT';
/** @type {?} */
export var ENTITY_PROCESSES_DECREMENT_ACTION = '[ENTITY] PROCESSES DECREMENT';
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
    return tslib_1.__assign({}, processesLoaderResetMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entityProcessesIncrementMeta(entityType, id) {
    return tslib_1.__assign({}, processesIncrementMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entityProcessesDecrementMeta(entityType, id) {
    return tslib_1.__assign({}, processesDecrementMeta(entityType), entityMeta(entityType, id));
}
var EntityProcessesLoaderResetAction = /** @class */ (function () {
    function EntityProcessesLoaderResetAction(entityType, id) {
        this.type = ENTITY_PROCESSES_LOADER_RESET_ACTION;
        this.meta = entityProcessesLoaderResetMeta(entityType, id);
    }
    return EntityProcessesLoaderResetAction;
}());
export { EntityProcessesLoaderResetAction };
if (false) {
    /** @type {?} */
    EntityProcessesLoaderResetAction.prototype.type;
    /** @type {?} */
    EntityProcessesLoaderResetAction.prototype.meta;
}
var EntityProcessesIncrementAction = /** @class */ (function () {
    function EntityProcessesIncrementAction(entityType, id) {
        this.type = ENTITY_PROCESSES_INCREMENT_ACTION;
        this.meta = entityProcessesIncrementMeta(entityType, id);
    }
    return EntityProcessesIncrementAction;
}());
export { EntityProcessesIncrementAction };
if (false) {
    /** @type {?} */
    EntityProcessesIncrementAction.prototype.type;
    /** @type {?} */
    EntityProcessesIncrementAction.prototype.meta;
}
var EntityProcessesDecrementAction = /** @class */ (function () {
    function EntityProcessesDecrementAction(entityType, id) {
        this.type = ENTITY_PROCESSES_DECREMENT_ACTION;
        this.meta = entityProcessesDecrementMeta(entityType, id);
    }
    return EntityProcessesDecrementAction;
}());
export { EntityProcessesDecrementAction };
if (false) {
    /** @type {?} */
    EntityProcessesDecrementAction.prototype.type;
    /** @type {?} */
    EntityProcessesDecrementAction.prototype.meta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUV0Qix3QkFBd0IsR0FDekIsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFFckQsTUFBTSxLQUFPLG9DQUFvQyxHQUMvQyxpQ0FBaUM7O0FBQ25DLE1BQU0sS0FBTyxpQ0FBaUMsR0FBRyw4QkFBOEI7O0FBQy9FLE1BQU0sS0FBTyxpQ0FBaUMsR0FBRyw4QkFBOEI7Ozs7QUFFL0UsK0NBRTBCOzs7O0FBRTFCLGlEQUdDOzs7SUFGQyw4Q0FBdUI7O0lBQ3ZCLDJDQUEwQzs7Ozs7OztBQUc1QyxNQUFNLFVBQVUsOEJBQThCLENBQzVDLFVBQWtCLEVBQ2xCLEVBQXFCO0lBRXJCLDRCQUNLLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxFQUNwQyxVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUM3QjtBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSw0QkFBNEIsQ0FDMUMsVUFBa0IsRUFDbEIsRUFBcUI7SUFFckIsNEJBQ0ssc0JBQXNCLENBQUMsVUFBVSxDQUFDLEVBQ2xDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQzdCO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDRCQUE0QixDQUMxQyxVQUFrQixFQUNsQixFQUFxQjtJQUVyQiw0QkFDSyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsRUFDbEMsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFDN0I7QUFDSixDQUFDO0FBRUQ7SUFJRSwwQ0FBWSxVQUFrQixFQUFFLEVBQXFCO1FBRnJELFNBQUksR0FBRyxvQ0FBb0MsQ0FBQztRQUcxQyxJQUFJLENBQUMsSUFBSSxHQUFHLDhCQUE4QixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0gsdUNBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJQUxDLGdEQUE0Qzs7SUFDNUMsZ0RBQXlDOztBQU0zQztJQUlFLHdDQUFZLFVBQWtCLEVBQUUsRUFBcUI7UUFGckQsU0FBSSxHQUFHLGlDQUFpQyxDQUFDO1FBR3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsNEJBQTRCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDSCxxQ0FBQztBQUFELENBQUMsQUFQRCxJQU9DOzs7O0lBTEMsOENBQXlDOztJQUN6Qyw4Q0FBeUM7O0FBTTNDO0lBSUUsd0NBQVksVUFBa0IsRUFBRSxFQUFxQjtRQUZyRCxTQUFJLEdBQUcsaUNBQWlDLENBQUM7UUFHdkMsSUFBSSxDQUFDLElBQUksR0FBRyw0QkFBNEIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNILHFDQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7Ozs7SUFMQyw4Q0FBeUM7O0lBQ3pDLDhDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGVudGl0eU1ldGEsIEVudGl0eU1ldGEgfSBmcm9tICcuLi9lbnRpdHkvZW50aXR5LmFjdGlvbic7XG5pbXBvcnQge1xuICBwcm9jZXNzZXNEZWNyZW1lbnRNZXRhLFxuICBwcm9jZXNzZXNJbmNyZW1lbnRNZXRhLFxuICBQcm9jZXNzZXNMb2FkZXJNZXRhLFxuICBwcm9jZXNzZXNMb2FkZXJSZXNldE1ldGEsXG59IGZyb20gJy4uL3Byb2Nlc3Nlcy1sb2FkZXIvcHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgRU5USVRZX1BST0NFU1NFU19MT0FERVJfUkVTRVRfQUNUSU9OID1cbiAgJ1tFTlRJVFldIFBST0NFU1NFUyBMT0FERVIgUkVTRVQnO1xuZXhwb3J0IGNvbnN0IEVOVElUWV9QUk9DRVNTRVNfSU5DUkVNRU5UX0FDVElPTiA9ICdbRU5USVRZXSBQUk9DRVNTRVMgSU5DUkVNRU5UJztcbmV4cG9ydCBjb25zdCBFTlRJVFlfUFJPQ0VTU0VTX0RFQ1JFTUVOVF9BQ1RJT04gPSAnW0VOVElUWV0gUFJPQ0VTU0VTIERFQ1JFTUVOVCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UHJvY2Vzc2VzTG9hZGVyTWV0YVxuICBleHRlbmRzIEVudGl0eU1ldGEsXG4gICAgUHJvY2Vzc2VzTG9hZGVyTWV0YSB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVByb2Nlc3Nlc0xvYWRlckFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHBheWxvYWQ/OiBhbnk7XG4gIHJlYWRvbmx5IG1ldGE/OiBFbnRpdHlQcm9jZXNzZXNMb2FkZXJNZXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVzZXRNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXVxuKTogRW50aXR5UHJvY2Vzc2VzTG9hZGVyTWV0YSB7XG4gIHJldHVybiB7XG4gICAgLi4ucHJvY2Vzc2VzTG9hZGVyUmVzZXRNZXRhKGVudGl0eVR5cGUpLFxuICAgIC4uLmVudGl0eU1ldGEoZW50aXR5VHlwZSwgaWQpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50TWV0YShcbiAgZW50aXR5VHlwZTogc3RyaW5nLFxuICBpZDogc3RyaW5nIHwgc3RyaW5nW11cbik6IEVudGl0eVByb2Nlc3Nlc0xvYWRlck1ldGEge1xuICByZXR1cm4ge1xuICAgIC4uLnByb2Nlc3Nlc0luY3JlbWVudE1ldGEoZW50aXR5VHlwZSksXG4gICAgLi4uZW50aXR5TWV0YShlbnRpdHlUeXBlLCBpZCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXVxuKTogRW50aXR5UHJvY2Vzc2VzTG9hZGVyTWV0YSB7XG4gIHJldHVybiB7XG4gICAgLi4ucHJvY2Vzc2VzRGVjcmVtZW50TWV0YShlbnRpdHlUeXBlKSxcbiAgICAuLi5lbnRpdHlNZXRhKGVudGl0eVR5cGUsIGlkKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEVudGl0eVByb2Nlc3Nlc0xvYWRlclJlc2V0QWN0aW9uXG4gIGltcGxlbWVudHMgRW50aXR5UHJvY2Vzc2VzTG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IEVOVElUWV9QUk9DRVNTRVNfTE9BREVSX1JFU0VUX0FDVElPTjtcbiAgcmVhZG9ubHkgbWV0YTogRW50aXR5UHJvY2Vzc2VzTG9hZGVyTWV0YTtcbiAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICB0aGlzLm1ldGEgPSBlbnRpdHlQcm9jZXNzZXNMb2FkZXJSZXNldE1ldGEoZW50aXR5VHlwZSwgaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb25cbiAgaW1wbGVtZW50cyBFbnRpdHlQcm9jZXNzZXNMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gRU5USVRZX1BST0NFU1NFU19JTkNSRU1FTlRfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBFbnRpdHlQcm9jZXNzZXNMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHRoaXMubWV0YSA9IGVudGl0eVByb2Nlc3Nlc0luY3JlbWVudE1ldGEoZW50aXR5VHlwZSwgaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb25cbiAgaW1wbGVtZW50cyBFbnRpdHlQcm9jZXNzZXNMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gRU5USVRZX1BST0NFU1NFU19ERUNSRU1FTlRfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBFbnRpdHlQcm9jZXNzZXNMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHRoaXMubWV0YSA9IGVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudE1ldGEoZW50aXR5VHlwZSwgaWQpO1xuICB9XG59XG4iXX0=