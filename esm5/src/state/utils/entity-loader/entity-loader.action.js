/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { entityMeta } from '../entity/entity.action';
import { failMeta, loadMeta, resetMeta, successMeta, } from '../loader/loader.action';
/** @type {?} */
export var ENTITY_LOAD_ACTION = '[ENTITY] LOAD';
/** @type {?} */
export var ENTITY_FAIL_ACTION = '[ENTITY] LOAD FAIL';
/** @type {?} */
export var ENTITY_SUCCESS_ACTION = '[ENTITY] LOAD SUCCESS';
/** @type {?} */
export var ENTITY_RESET_ACTION = '[ENTITY] RESET';
/**
 * @record
 */
export function EntityLoaderMeta() { }
/**
 * @record
 */
export function EntityLoaderAction() { }
if (false) {
    /** @type {?|undefined} */
    EntityLoaderAction.prototype.payload;
    /** @type {?|undefined} */
    EntityLoaderAction.prototype.meta;
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entityLoadMeta(entityType, id) {
    return tslib_1.__assign({}, loadMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @param {?=} error
 * @return {?}
 */
export function entityFailMeta(entityType, id, error) {
    return tslib_1.__assign({}, failMeta(entityType, error), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entitySuccessMeta(entityType, id) {
    return tslib_1.__assign({}, successMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entityResetMeta(entityType, id) {
    return tslib_1.__assign({}, resetMeta(entityType), entityMeta(entityType, id));
}
var EntityLoadAction = /** @class */ (function () {
    function EntityLoadAction(entityType, id) {
        this.type = ENTITY_LOAD_ACTION;
        this.meta = entityLoadMeta(entityType, id);
    }
    return EntityLoadAction;
}());
export { EntityLoadAction };
if (false) {
    /** @type {?} */
    EntityLoadAction.prototype.type;
    /** @type {?} */
    EntityLoadAction.prototype.meta;
}
var EntityFailAction = /** @class */ (function () {
    function EntityFailAction(entityType, id, error) {
        this.type = ENTITY_FAIL_ACTION;
        this.meta = entityFailMeta(entityType, id, error);
    }
    return EntityFailAction;
}());
export { EntityFailAction };
if (false) {
    /** @type {?} */
    EntityFailAction.prototype.type;
    /** @type {?} */
    EntityFailAction.prototype.meta;
}
var EntitySuccessAction = /** @class */ (function () {
    function EntitySuccessAction(entityType, id, payload) {
        this.payload = payload;
        this.type = ENTITY_SUCCESS_ACTION;
        this.meta = entitySuccessMeta(entityType, id);
    }
    return EntitySuccessAction;
}());
export { EntitySuccessAction };
if (false) {
    /** @type {?} */
    EntitySuccessAction.prototype.type;
    /** @type {?} */
    EntitySuccessAction.prototype.meta;
    /** @type {?} */
    EntitySuccessAction.prototype.payload;
}
var EntityResetAction = /** @class */ (function () {
    function EntityResetAction(entityType, id) {
        this.type = ENTITY_RESET_ACTION;
        this.meta = entityResetMeta(entityType, id);
    }
    return EntityResetAction;
}());
export { EntityResetAction };
if (false) {
    /** @type {?} */
    EntityResetAction.prototype.type;
    /** @type {?} */
    EntityResetAction.prototype.meta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWxvYWRlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsUUFBUSxFQUVSLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxHQUNaLE1BQU0seUJBQXlCLENBQUM7O0FBRWpDLE1BQU0sS0FBTyxrQkFBa0IsR0FBRyxlQUFlOztBQUNqRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsb0JBQW9COztBQUN0RCxNQUFNLEtBQU8scUJBQXFCLEdBQUcsdUJBQXVCOztBQUM1RCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsZ0JBQWdCOzs7O0FBRW5ELHNDQUFtRTs7OztBQUVuRSx3Q0FHQzs7O0lBRkMscUNBQXVCOztJQUN2QixrQ0FBaUM7Ozs7Ozs7QUFHbkMsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsVUFBa0IsRUFDbEIsRUFBcUI7SUFFckIsNEJBQ0ssUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUNwQixVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUM3QjtBQUNKLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixVQUFrQixFQUNsQixFQUFxQixFQUNyQixLQUFXO0lBRVgsNEJBQ0ssUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFDM0IsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFDN0I7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLFVBQWtCLEVBQ2xCLEVBQXFCO0lBRXJCLDRCQUNLLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFDdkIsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFDN0I7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUM3QixVQUFrQixFQUNsQixFQUFxQjtJQUVyQiw0QkFDSyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQ3JCLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQzdCO0FBQ0osQ0FBQztBQUVEO0lBR0UsMEJBQVksVUFBa0IsRUFBRSxFQUFxQjtRQUZyRCxTQUFJLEdBQUcsa0JBQWtCLENBQUM7UUFHeEIsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsZ0NBQTBCOztJQUMxQixnQ0FBZ0M7O0FBTWxDO0lBR0UsMEJBQVksVUFBa0IsRUFBRSxFQUFxQixFQUFFLEtBQVc7UUFGbEUsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1FBR3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyxnQ0FBMEI7O0lBQzFCLGdDQUFnQzs7QUFNbEM7SUFHRSw2QkFBWSxVQUFrQixFQUFFLEVBQXFCLEVBQVMsT0FBYTtRQUFiLFlBQU8sR0FBUCxPQUFPLENBQU07UUFGM0UsU0FBSSxHQUFHLHFCQUFxQixDQUFDO1FBRzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsbUNBQTZCOztJQUM3QixtQ0FBZ0M7O0lBQ3VCLHNDQUFvQjs7QUFLN0U7SUFHRSwyQkFBWSxVQUFrQixFQUFFLEVBQXFCO1FBRnJELFNBQUksR0FBRyxtQkFBbUIsQ0FBQztRQUd6QixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyxpQ0FBMkI7O0lBQzNCLGlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGVudGl0eU1ldGEsIEVudGl0eU1ldGEgfSBmcm9tICcuLi9lbnRpdHkvZW50aXR5LmFjdGlvbic7XG5pbXBvcnQge1xuICBmYWlsTWV0YSxcbiAgTG9hZGVyTWV0YSxcbiAgbG9hZE1ldGEsXG4gIHJlc2V0TWV0YSxcbiAgc3VjY2Vzc01ldGEsXG59IGZyb20gJy4uL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IEVOVElUWV9MT0FEX0FDVElPTiA9ICdbRU5USVRZXSBMT0FEJztcbmV4cG9ydCBjb25zdCBFTlRJVFlfRkFJTF9BQ1RJT04gPSAnW0VOVElUWV0gTE9BRCBGQUlMJztcbmV4cG9ydCBjb25zdCBFTlRJVFlfU1VDQ0VTU19BQ1RJT04gPSAnW0VOVElUWV0gTE9BRCBTVUNDRVNTJztcbmV4cG9ydCBjb25zdCBFTlRJVFlfUkVTRVRfQUNUSU9OID0gJ1tFTlRJVFldIFJFU0VUJztcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlMb2FkZXJNZXRhIGV4dGVuZHMgRW50aXR5TWV0YSwgTG9hZGVyTWV0YSB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eUxvYWRlckFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHBheWxvYWQ/OiBhbnk7XG4gIHJlYWRvbmx5IG1ldGE/OiBFbnRpdHlMb2FkZXJNZXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5TG9hZE1ldGEoXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdXG4pOiBFbnRpdHlMb2FkZXJNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5sb2FkTWV0YShlbnRpdHlUeXBlKSxcbiAgICAuLi5lbnRpdHlNZXRhKGVudGl0eVR5cGUsIGlkKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUZhaWxNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgZXJyb3I/OiBhbnlcbik6IEVudGl0eUxvYWRlck1ldGEge1xuICByZXR1cm4ge1xuICAgIC4uLmZhaWxNZXRhKGVudGl0eVR5cGUsIGVycm9yKSxcbiAgICAuLi5lbnRpdHlNZXRhKGVudGl0eVR5cGUsIGlkKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVN1Y2Nlc3NNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXVxuKTogRW50aXR5TG9hZGVyTWV0YSB7XG4gIHJldHVybiB7XG4gICAgLi4uc3VjY2Vzc01ldGEoZW50aXR5VHlwZSksXG4gICAgLi4uZW50aXR5TWV0YShlbnRpdHlUeXBlLCBpZCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlSZXNldE1ldGEoXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdXG4pOiBFbnRpdHlMb2FkZXJNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5yZXNldE1ldGEoZW50aXR5VHlwZSksXG4gICAgLi4uZW50aXR5TWV0YShlbnRpdHlUeXBlLCBpZCksXG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlMb2FkQWN0aW9uIGltcGxlbWVudHMgRW50aXR5TG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IEVOVElUWV9MT0FEX0FDVElPTjtcbiAgcmVhZG9ubHkgbWV0YTogRW50aXR5TG9hZGVyTWV0YTtcbiAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICB0aGlzLm1ldGEgPSBlbnRpdHlMb2FkTWV0YShlbnRpdHlUeXBlLCBpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVudGl0eUZhaWxBY3Rpb24gaW1wbGVtZW50cyBFbnRpdHlMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gRU5USVRZX0ZBSUxfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBFbnRpdHlMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSwgZXJyb3I/OiBhbnkpIHtcbiAgICB0aGlzLm1ldGEgPSBlbnRpdHlGYWlsTWV0YShlbnRpdHlUeXBlLCBpZCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgRW50aXR5TG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IEVOVElUWV9TVUNDRVNTX0FDVElPTjtcbiAgcmVhZG9ubHkgbWV0YTogRW50aXR5TG9hZGVyTWV0YTtcbiAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10sIHB1YmxpYyBwYXlsb2FkPzogYW55KSB7XG4gICAgdGhpcy5tZXRhID0gZW50aXR5U3VjY2Vzc01ldGEoZW50aXR5VHlwZSwgaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlSZXNldEFjdGlvbiBpbXBsZW1lbnRzIEVudGl0eUxvYWRlckFjdGlvbiB7XG4gIHR5cGUgPSBFTlRJVFlfUkVTRVRfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBFbnRpdHlMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHRoaXMubWV0YSA9IGVudGl0eVJlc2V0TWV0YShlbnRpdHlUeXBlLCBpZCk7XG4gIH1cbn1cbiJdfQ==