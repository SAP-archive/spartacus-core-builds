/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { resetMeta as loaderResetMeta, } from '../loader/loader.action';
/** @type {?} */
export var PROCESSES_INCREMENT_ACTION = '[PROCESSES LOADER] INCREMENT';
/** @type {?} */
export var PROCESSES_DECREMENT_ACTION = '[PROCESSES LOADER] DECREMENT';
/** @type {?} */
export var PROCESSES_LOADER_RESET_ACTION = '[PROCESSES LOADER] RESET';
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
    return tslib_1.__assign({}, loaderResetMeta(entityType), { processesCountDiff: null });
}
var ProcessesLoaderResetAction = /** @class */ (function () {
    function ProcessesLoaderResetAction(entityType) {
        this.type = PROCESSES_LOADER_RESET_ACTION;
        this.meta = processesLoaderResetMeta(entityType);
    }
    return ProcessesLoaderResetAction;
}());
export { ProcessesLoaderResetAction };
if (false) {
    /** @type {?} */
    ProcessesLoaderResetAction.prototype.type;
    /** @type {?} */
    ProcessesLoaderResetAction.prototype.meta;
}
var ProcessesIncrementAction = /** @class */ (function () {
    function ProcessesIncrementAction(entityType) {
        this.type = PROCESSES_INCREMENT_ACTION;
        this.meta = processesIncrementMeta(entityType);
    }
    return ProcessesIncrementAction;
}());
export { ProcessesIncrementAction };
if (false) {
    /** @type {?} */
    ProcessesIncrementAction.prototype.type;
    /** @type {?} */
    ProcessesIncrementAction.prototype.meta;
}
var ProcessesDecrementAction = /** @class */ (function () {
    function ProcessesDecrementAction(entityType) {
        this.type = PROCESSES_DECREMENT_ACTION;
        this.meta = processesDecrementMeta(entityType);
    }
    return ProcessesDecrementAction;
}());
export { ProcessesDecrementAction };
if (false) {
    /** @type {?} */
    ProcessesDecrementAction.prototype.type;
    /** @type {?} */
    ProcessesDecrementAction.prototype.meta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFFTCxTQUFTLElBQUksZUFBZSxHQUM3QixNQUFNLHlCQUF5QixDQUFDOztBQUVqQyxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsOEJBQThCOztBQUN4RSxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsOEJBQThCOztBQUN4RSxNQUFNLEtBQU8sNkJBQTZCLEdBQUcsMEJBQTBCOzs7O0FBRXZFLHlDQUdDOzs7SUFGQyx5Q0FBbUI7O0lBQ25CLGlEQUE0Qjs7Ozs7QUFHOUIsMkNBR0M7OztJQUZDLHdDQUF1Qjs7SUFDdkIscUNBQW9DOzs7Ozs7QUFHdEMsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxVQUFrQjtJQUVsQixPQUFPO1FBQ0wsVUFBVSxFQUFFLFVBQVU7UUFDdEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsa0JBQWtCLEVBQUUsQ0FBQztLQUN0QixDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLFVBQWtCO0lBRWxCLE9BQU87UUFDTCxVQUFVLEVBQUUsVUFBVTtRQUN0QixNQUFNLEVBQUUsU0FBUztRQUNqQixrQkFBa0IsRUFBRSxDQUFDLENBQUM7S0FDdkIsQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLHdCQUF3QixDQUN0QyxVQUFrQjtJQUVsQiw0RkFBNEY7SUFDNUYsNEJBQ0ssZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUM5QixrQkFBa0IsRUFBRSxJQUFJLElBQ3hCO0FBQ0osQ0FBQztBQUVEO0lBR0Usb0NBQVksVUFBa0I7UUFGOUIsU0FBSSxHQUFHLDZCQUE2QixDQUFDO1FBR25DLElBQUksQ0FBQyxJQUFJLEdBQUcsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNILGlDQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQywwQ0FBcUM7O0lBQ3JDLDBDQUFtQzs7QUFNckM7SUFHRSxrQ0FBWSxVQUFrQjtRQUY5QixTQUFJLEdBQUcsMEJBQTBCLENBQUM7UUFHaEMsSUFBSSxDQUFDLElBQUksR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLHdDQUFrQzs7SUFDbEMsd0NBQW1DOztBQU1yQztJQUdFLGtDQUFZLFVBQWtCO1FBRjlCLFNBQUksR0FBRywwQkFBMEIsQ0FBQztRQUdoQyxJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsd0NBQWtDOztJQUNsQyx3Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBMb2FkZXJNZXRhLFxuICByZXNldE1ldGEgYXMgbG9hZGVyUmVzZXRNZXRhLFxufSBmcm9tICcuLi9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBQUk9DRVNTRVNfSU5DUkVNRU5UX0FDVElPTiA9ICdbUFJPQ0VTU0VTIExPQURFUl0gSU5DUkVNRU5UJztcbmV4cG9ydCBjb25zdCBQUk9DRVNTRVNfREVDUkVNRU5UX0FDVElPTiA9ICdbUFJPQ0VTU0VTIExPQURFUl0gREVDUkVNRU5UJztcbmV4cG9ydCBjb25zdCBQUk9DRVNTRVNfTE9BREVSX1JFU0VUX0FDVElPTiA9ICdbUFJPQ0VTU0VTIExPQURFUl0gUkVTRVQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2Nlc3Nlc0xvYWRlck1ldGEgZXh0ZW5kcyBMb2FkZXJNZXRhIHtcbiAgZW50aXR5VHlwZTogc3RyaW5nO1xuICBwcm9jZXNzZXNDb3VudERpZmY/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc2VzTG9hZGVyQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgcGF5bG9hZD86IGFueTtcbiAgcmVhZG9ubHkgbWV0YT86IFByb2Nlc3Nlc0xvYWRlck1ldGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzZXNJbmNyZW1lbnRNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmdcbik6IFByb2Nlc3Nlc0xvYWRlck1ldGEge1xuICByZXR1cm4ge1xuICAgIGVudGl0eVR5cGU6IGVudGl0eVR5cGUsXG4gICAgbG9hZGVyOiB1bmRlZmluZWQsXG4gICAgcHJvY2Vzc2VzQ291bnREaWZmOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc2VzRGVjcmVtZW50TWV0YShcbiAgZW50aXR5VHlwZTogc3RyaW5nXG4pOiBQcm9jZXNzZXNMb2FkZXJNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRpdHlUeXBlOiBlbnRpdHlUeXBlLFxuICAgIGxvYWRlcjogdW5kZWZpbmVkLFxuICAgIHByb2Nlc3Nlc0NvdW50RGlmZjogLTEsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzZXNMb2FkZXJSZXNldE1ldGEoXG4gIGVudGl0eVR5cGU6IHN0cmluZ1xuKTogUHJvY2Vzc2VzTG9hZGVyTWV0YSB7XG4gIC8vIHByb2Nlc3NlcyByZXNldCBhY3Rpb24gaXMgYSByZXNldCBhY3Rpb24gZm9yIGxvYWRlciByZWR1Y2VyLCBidXQgbm90IHRoZSBvdGhlciB3YXkgYXJvdW5kXG4gIHJldHVybiB7XG4gICAgLi4ubG9hZGVyUmVzZXRNZXRhKGVudGl0eVR5cGUpLFxuICAgIHByb2Nlc3Nlc0NvdW50RGlmZjogbnVsbCxcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIFByb2Nlc3Nlc0xvYWRlclJlc2V0QWN0aW9uIGltcGxlbWVudHMgUHJvY2Vzc2VzTG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IFBST0NFU1NFU19MT0FERVJfUkVTRVRfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBQcm9jZXNzZXNMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEgPSBwcm9jZXNzZXNMb2FkZXJSZXNldE1ldGEoZW50aXR5VHlwZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiBpbXBsZW1lbnRzIFByb2Nlc3Nlc0xvYWRlckFjdGlvbiB7XG4gIHR5cGUgPSBQUk9DRVNTRVNfSU5DUkVNRU5UX0FDVElPTjtcbiAgcmVhZG9ubHkgbWV0YTogUHJvY2Vzc2VzTG9hZGVyTWV0YTtcbiAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXRhID0gcHJvY2Vzc2VzSW5jcmVtZW50TWV0YShlbnRpdHlUeXBlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIGltcGxlbWVudHMgUHJvY2Vzc2VzTG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IFBST0NFU1NFU19ERUNSRU1FTlRfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBQcm9jZXNzZXNMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEgPSBwcm9jZXNzZXNEZWNyZW1lbnRNZXRhKGVudGl0eVR5cGUpO1xuICB9XG59XG4iXX0=