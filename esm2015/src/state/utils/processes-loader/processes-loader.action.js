/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { resetMeta as loaderResetMeta, } from '../loader/loader.action';
/** @type {?} */
export const PROCESSES_INCREMENT_ACTION = '[PROCESSES LOADER] INCREMENT';
/** @type {?} */
export const PROCESSES_DECREMENT_ACTION = '[PROCESSES LOADER] DECREMENT';
/** @type {?} */
export const PROCESSES_LOADER_RESET_ACTION = '[PROCESSES LOADER] RESET';
/**
 * @record
 */
export function ProcessesLoaderMeta() { }
if (false) {
    /** @type {?} */
    ProcessesLoaderMeta.prototype.entityType;
    /** @type {?|undefined} */
    ProcessesLoaderMeta.prototype.processesCountDiff;
}
/**
 * @record
 */
export function ProcessesLoaderAction() { }
if (false) {
    /** @type {?|undefined} */
    ProcessesLoaderAction.prototype.payload;
    /** @type {?|undefined} */
    ProcessesLoaderAction.prototype.meta;
}
/**
 * @param {?} entityType
 * @return {?}
 */
export function processesIncrementMeta(entityType) {
    return {
        entityType: entityType,
        loader: undefined,
        processesCountDiff: 1,
    };
}
/**
 * @param {?} entityType
 * @return {?}
 */
export function processesDecrementMeta(entityType) {
    return {
        entityType: entityType,
        loader: undefined,
        processesCountDiff: -1,
    };
}
/**
 * @param {?} entityType
 * @return {?}
 */
export function processesLoaderResetMeta(entityType) {
    // processes reset action is a reset action for loader reducer, but not the other way around
    return Object.assign({}, loaderResetMeta(entityType), { processesCountDiff: null });
}
export class ProcessesLoaderResetAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = PROCESSES_LOADER_RESET_ACTION;
        this.meta = processesLoaderResetMeta(entityType);
    }
}
if (false) {
    /** @type {?} */
    ProcessesLoaderResetAction.prototype.type;
    /** @type {?} */
    ProcessesLoaderResetAction.prototype.meta;
}
export class ProcessesIncrementAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = PROCESSES_INCREMENT_ACTION;
        this.meta = processesIncrementMeta(entityType);
    }
}
if (false) {
    /** @type {?} */
    ProcessesIncrementAction.prototype.type;
    /** @type {?} */
    ProcessesIncrementAction.prototype.meta;
}
export class ProcessesDecrementAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = PROCESSES_DECREMENT_ACTION;
        this.meta = processesDecrementMeta(entityType);
    }
}
if (false) {
    /** @type {?} */
    ProcessesDecrementAction.prototype.type;
    /** @type {?} */
    ProcessesDecrementAction.prototype.meta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUVMLFNBQVMsSUFBSSxlQUFlLEdBQzdCLE1BQU0seUJBQXlCLENBQUM7O0FBRWpDLE1BQU0sT0FBTywwQkFBMEIsR0FBRyw4QkFBOEI7O0FBQ3hFLE1BQU0sT0FBTywwQkFBMEIsR0FBRyw4QkFBOEI7O0FBQ3hFLE1BQU0sT0FBTyw2QkFBNkIsR0FBRywwQkFBMEI7Ozs7QUFFdkUseUNBR0M7OztJQUZDLHlDQUFtQjs7SUFDbkIsaURBQTRCOzs7OztBQUc5QiwyQ0FHQzs7O0lBRkMsd0NBQXVCOztJQUN2QixxQ0FBb0M7Ozs7OztBQUd0QyxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLFVBQWtCO0lBRWxCLE9BQU87UUFDTCxVQUFVLEVBQUUsVUFBVTtRQUN0QixNQUFNLEVBQUUsU0FBUztRQUNqQixrQkFBa0IsRUFBRSxDQUFDO0tBQ3RCLENBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsVUFBa0I7SUFFbEIsT0FBTztRQUNMLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLGtCQUFrQixFQUFFLENBQUMsQ0FBQztLQUN2QixDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsd0JBQXdCLENBQ3RDLFVBQWtCO0lBRWxCLDRGQUE0RjtJQUM1Rix5QkFDSyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQzlCLGtCQUFrQixFQUFFLElBQUksSUFDeEI7QUFDSixDQUFDO0FBRUQsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUdyQyxZQUFZLFVBQWtCO1FBRjlCLFNBQUksR0FBRyw2QkFBNkIsQ0FBQztRQUduQyxJQUFJLENBQUMsSUFBSSxHQUFHLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjs7O0lBTEMsMENBQXFDOztJQUNyQywwQ0FBbUM7O0FBTXJDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFHbkMsWUFBWSxVQUFrQjtRQUY5QixTQUFJLEdBQUcsMEJBQTBCLENBQUM7UUFHaEMsSUFBSSxDQUFDLElBQUksR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7OztJQUxDLHdDQUFrQzs7SUFDbEMsd0NBQW1DOztBQU1yQyxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBR25DLFlBQVksVUFBa0I7UUFGOUIsU0FBSSxHQUFHLDBCQUEwQixDQUFDO1FBR2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGOzs7SUFMQyx3Q0FBa0M7O0lBQ2xDLHdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIExvYWRlck1ldGEsXG4gIHJlc2V0TWV0YSBhcyBsb2FkZXJSZXNldE1ldGEsXG59IGZyb20gJy4uL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IFBST0NFU1NFU19JTkNSRU1FTlRfQUNUSU9OID0gJ1tQUk9DRVNTRVMgTE9BREVSXSBJTkNSRU1FTlQnO1xuZXhwb3J0IGNvbnN0IFBST0NFU1NFU19ERUNSRU1FTlRfQUNUSU9OID0gJ1tQUk9DRVNTRVMgTE9BREVSXSBERUNSRU1FTlQnO1xuZXhwb3J0IGNvbnN0IFBST0NFU1NFU19MT0FERVJfUkVTRVRfQUNUSU9OID0gJ1tQUk9DRVNTRVMgTE9BREVSXSBSRVNFVCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc2VzTG9hZGVyTWV0YSBleHRlbmRzIExvYWRlck1ldGEge1xuICBlbnRpdHlUeXBlOiBzdHJpbmc7XG4gIHByb2Nlc3Nlc0NvdW50RGlmZj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9jZXNzZXNMb2FkZXJBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICByZWFkb25seSBwYXlsb2FkPzogYW55O1xuICByZWFkb25seSBtZXRhPzogUHJvY2Vzc2VzTG9hZGVyTWV0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3Nlc0luY3JlbWVudE1ldGEoXG4gIGVudGl0eVR5cGU6IHN0cmluZ1xuKTogUHJvY2Vzc2VzTG9hZGVyTWV0YSB7XG4gIHJldHVybiB7XG4gICAgZW50aXR5VHlwZTogZW50aXR5VHlwZSxcbiAgICBsb2FkZXI6IHVuZGVmaW5lZCxcbiAgICBwcm9jZXNzZXNDb3VudERpZmY6IDEsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzZXNEZWNyZW1lbnRNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmdcbik6IFByb2Nlc3Nlc0xvYWRlck1ldGEge1xuICByZXR1cm4ge1xuICAgIGVudGl0eVR5cGU6IGVudGl0eVR5cGUsXG4gICAgbG9hZGVyOiB1bmRlZmluZWQsXG4gICAgcHJvY2Vzc2VzQ291bnREaWZmOiAtMSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3Nlc0xvYWRlclJlc2V0TWV0YShcbiAgZW50aXR5VHlwZTogc3RyaW5nXG4pOiBQcm9jZXNzZXNMb2FkZXJNZXRhIHtcbiAgLy8gcHJvY2Vzc2VzIHJlc2V0IGFjdGlvbiBpcyBhIHJlc2V0IGFjdGlvbiBmb3IgbG9hZGVyIHJlZHVjZXIsIGJ1dCBub3QgdGhlIG90aGVyIHdheSBhcm91bmRcbiAgcmV0dXJuIHtcbiAgICAuLi5sb2FkZXJSZXNldE1ldGEoZW50aXR5VHlwZSksXG4gICAgcHJvY2Vzc2VzQ291bnREaWZmOiBudWxsLFxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgUHJvY2Vzc2VzTG9hZGVyUmVzZXRBY3Rpb24gaW1wbGVtZW50cyBQcm9jZXNzZXNMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gUFJPQ0VTU0VTX0xPQURFUl9SRVNFVF9BQ1RJT047XG4gIHJlYWRvbmx5IG1ldGE6IFByb2Nlc3Nlc0xvYWRlck1ldGE7XG4gIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZykge1xuICAgIHRoaXMubWV0YSA9IHByb2Nlc3Nlc0xvYWRlclJlc2V0TWV0YShlbnRpdHlUeXBlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uIGltcGxlbWVudHMgUHJvY2Vzc2VzTG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IFBST0NFU1NFU19JTkNSRU1FTlRfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBQcm9jZXNzZXNMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEgPSBwcm9jZXNzZXNJbmNyZW1lbnRNZXRhKGVudGl0eVR5cGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24gaW1wbGVtZW50cyBQcm9jZXNzZXNMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gUFJPQ0VTU0VTX0RFQ1JFTUVOVF9BQ1RJT047XG4gIHJlYWRvbmx5IG1ldGE6IFByb2Nlc3Nlc0xvYWRlck1ldGE7XG4gIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZykge1xuICAgIHRoaXMubWV0YSA9IHByb2Nlc3Nlc0RlY3JlbWVudE1ldGEoZW50aXR5VHlwZSk7XG4gIH1cbn1cbiJdfQ==