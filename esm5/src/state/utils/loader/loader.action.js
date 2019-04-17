/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOADER_LOAD_ACTION = '[LOADER] LOAD';
/** @type {?} */
export var LOADER_FAIL_ACTION = '[LOADER] FAIL';
/** @type {?} */
export var LOADER_SUCCESS_ACTION = '[LOADER] SUCCESS';
/** @type {?} */
export var LOADER_RESET_ACTION = '[LOADER] RESET';
/**
 * @record
 */
export function LoaderMeta() { }
if (false) {
    /** @type {?} */
    LoaderMeta.prototype.entityType;
    /** @type {?} */
    LoaderMeta.prototype.loader;
}
/**
 * @record
 */
export function LoaderAction() { }
if (false) {
    /** @type {?|undefined} */
    LoaderAction.prototype.payload;
    /** @type {?|undefined} */
    LoaderAction.prototype.meta;
}
/**
 * @param {?} entityType
 * @return {?}
 */
export function loadMeta(entityType) {
    return {
        entityType: entityType,
        loader: {
            load: true,
        },
    };
}
/**
 * @param {?} entityType
 * @param {?=} error
 * @return {?}
 */
export function failMeta(entityType, error) {
    return {
        entityType: entityType,
        loader: {
            error: error ? error : true,
        },
    };
}
/**
 * @param {?} entityType
 * @return {?}
 */
export function successMeta(entityType) {
    return {
        entityType: entityType,
        loader: {
            success: true,
        },
    };
}
/**
 * @param {?} entityType
 * @return {?}
 */
export function resetMeta(entityType) {
    return {
        entityType: entityType,
        loader: {},
    };
}
var LoaderLoadAction = /** @class */ (function () {
    function LoaderLoadAction(entityType) {
        this.type = LOADER_LOAD_ACTION;
        this.meta = loadMeta(entityType);
    }
    return LoaderLoadAction;
}());
export { LoaderLoadAction };
if (false) {
    /** @type {?} */
    LoaderLoadAction.prototype.type;
    /** @type {?} */
    LoaderLoadAction.prototype.meta;
}
var LoaderFailAction = /** @class */ (function () {
    function LoaderFailAction(entityType, error) {
        this.type = LOADER_FAIL_ACTION;
        this.meta = failMeta(entityType, error);
    }
    return LoaderFailAction;
}());
export { LoaderFailAction };
if (false) {
    /** @type {?} */
    LoaderFailAction.prototype.type;
    /** @type {?} */
    LoaderFailAction.prototype.meta;
}
var LoaderSuccessAction = /** @class */ (function () {
    function LoaderSuccessAction(entityType) {
        this.type = LOADER_SUCCESS_ACTION;
        this.meta = successMeta(entityType);
    }
    return LoaderSuccessAction;
}());
export { LoaderSuccessAction };
if (false) {
    /** @type {?} */
    LoaderSuccessAction.prototype.type;
    /** @type {?} */
    LoaderSuccessAction.prototype.meta;
}
var LoaderResetAction = /** @class */ (function () {
    function LoaderResetAction(entityType) {
        this.type = LOADER_RESET_ACTION;
        this.meta = resetMeta(entityType);
    }
    return LoaderResetAction;
}());
export { LoaderResetAction };
if (false) {
    /** @type {?} */
    LoaderResetAction.prototype.type;
    /** @type {?} */
    LoaderResetAction.prototype.meta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBTyxrQkFBa0IsR0FBRyxlQUFlOztBQUNqRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsZUFBZTs7QUFDakQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLGtCQUFrQjs7QUFDdkQsTUFBTSxLQUFPLG1CQUFtQixHQUFHLGdCQUFnQjs7OztBQUVuRCxnQ0FPQzs7O0lBTkMsZ0NBQW1COztJQUNuQiw0QkFJRTs7Ozs7QUFHSixrQ0FHQzs7O0lBRkMsK0JBQXVCOztJQUN2Qiw0QkFBMkI7Ozs7OztBQUc3QixNQUFNLFVBQVUsUUFBUSxDQUFDLFVBQWtCO0lBQ3pDLE9BQU87UUFDTCxVQUFVLEVBQUUsVUFBVTtRQUN0QixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsSUFBSTtTQUNYO0tBQ0YsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsVUFBa0IsRUFBRSxLQUFXO0lBQ3RELE9BQU87UUFDTCxVQUFVLEVBQUUsVUFBVTtRQUN0QixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDNUI7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLFVBQWtCO0lBQzVDLE9BQU87UUFDTCxVQUFVLEVBQUUsVUFBVTtRQUN0QixNQUFNLEVBQUU7WUFDTixPQUFPLEVBQUUsSUFBSTtTQUNkO0tBQ0YsQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxVQUFrQjtJQUMxQyxPQUFPO1FBQ0wsVUFBVSxFQUFFLFVBQVU7UUFDdEIsTUFBTSxFQUFFLEVBQUU7S0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVEO0lBR0UsMEJBQVksVUFBa0I7UUFGOUIsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1FBR3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsZ0NBQTBCOztJQUMxQixnQ0FBMEI7O0FBTTVCO0lBR0UsMEJBQVksVUFBa0IsRUFBRSxLQUFXO1FBRjNDLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztRQUd4QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyxnQ0FBMEI7O0lBQzFCLGdDQUEwQjs7QUFNNUI7SUFHRSw2QkFBWSxVQUFrQjtRQUY5QixTQUFJLEdBQUcscUJBQXFCLENBQUM7UUFHM0IsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyxtQ0FBNkI7O0lBQzdCLG1DQUEwQjs7QUFNNUI7SUFHRSwyQkFBWSxVQUFrQjtRQUY5QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFHekIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyxpQ0FBMkI7O0lBQzNCLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IExPQURFUl9MT0FEX0FDVElPTiA9ICdbTE9BREVSXSBMT0FEJztcbmV4cG9ydCBjb25zdCBMT0FERVJfRkFJTF9BQ1RJT04gPSAnW0xPQURFUl0gRkFJTCc7XG5leHBvcnQgY29uc3QgTE9BREVSX1NVQ0NFU1NfQUNUSU9OID0gJ1tMT0FERVJdIFNVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURFUl9SRVNFVF9BQ1RJT04gPSAnW0xPQURFUl0gUkVTRVQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlck1ldGEge1xuICBlbnRpdHlUeXBlOiBzdHJpbmc7XG4gIGxvYWRlcjoge1xuICAgIGxvYWQ/OiBib29sZWFuO1xuICAgIGVycm9yPzogYW55O1xuICAgIHN1Y2Nlc3M/OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlckFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHBheWxvYWQ/OiBhbnk7XG4gIHJlYWRvbmx5IG1ldGE/OiBMb2FkZXJNZXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1ldGEoZW50aXR5VHlwZTogc3RyaW5nKTogTG9hZGVyTWV0YSB7XG4gIHJldHVybiB7XG4gICAgZW50aXR5VHlwZTogZW50aXR5VHlwZSxcbiAgICBsb2FkZXI6IHtcbiAgICAgIGxvYWQ6IHRydWUsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhaWxNZXRhKGVudGl0eVR5cGU6IHN0cmluZywgZXJyb3I/OiBhbnkpOiBMb2FkZXJNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRpdHlUeXBlOiBlbnRpdHlUeXBlLFxuICAgIGxvYWRlcjoge1xuICAgICAgZXJyb3I6IGVycm9yID8gZXJyb3IgOiB0cnVlLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZXNzTWV0YShlbnRpdHlUeXBlOiBzdHJpbmcpOiBMb2FkZXJNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRpdHlUeXBlOiBlbnRpdHlUeXBlLFxuICAgIGxvYWRlcjoge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRNZXRhKGVudGl0eVR5cGU6IHN0cmluZyk6IExvYWRlck1ldGEge1xuICByZXR1cm4ge1xuICAgIGVudGl0eVR5cGU6IGVudGl0eVR5cGUsXG4gICAgbG9hZGVyOiB7fSxcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRlckxvYWRBY3Rpb24gaW1wbGVtZW50cyBMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gTE9BREVSX0xPQURfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEgPSBsb2FkTWV0YShlbnRpdHlUeXBlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZGVyRmFpbEFjdGlvbiBpbXBsZW1lbnRzIExvYWRlckFjdGlvbiB7XG4gIHR5cGUgPSBMT0FERVJfRkFJTF9BQ1RJT047XG4gIHJlYWRvbmx5IG1ldGE6IExvYWRlck1ldGE7XG4gIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZywgZXJyb3I/OiBhbnkpIHtcbiAgICB0aGlzLm1ldGEgPSBmYWlsTWV0YShlbnRpdHlUeXBlLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRlclN1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gTE9BREVSX1NVQ0NFU1NfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEgPSBzdWNjZXNzTWV0YShlbnRpdHlUeXBlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZGVyUmVzZXRBY3Rpb24gaW1wbGVtZW50cyBMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gTE9BREVSX1JFU0VUX0FDVElPTjtcbiAgcmVhZG9ubHkgbWV0YTogTG9hZGVyTWV0YTtcbiAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXRhID0gcmVzZXRNZXRhKGVudGl0eVR5cGUpO1xuICB9XG59XG4iXX0=