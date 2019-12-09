/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { entityMeta } from '../entity/entity.action';
import { failMeta, loadMeta, resetMeta, successMeta, } from '../loader/loader.action';
/** @type {?} */
export const ENTITY_LOAD_ACTION = '[ENTITY] LOAD';
/** @type {?} */
export const ENTITY_FAIL_ACTION = '[ENTITY] LOAD FAIL';
/** @type {?} */
export const ENTITY_SUCCESS_ACTION = '[ENTITY] LOAD SUCCESS';
/** @type {?} */
export const ENTITY_RESET_ACTION = '[ENTITY] RESET';
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
    return Object.assign({}, loadMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @param {?=} error
 * @return {?}
 */
export function entityFailMeta(entityType, id, error) {
    return Object.assign({}, failMeta(entityType, error), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entitySuccessMeta(entityType, id) {
    return Object.assign({}, successMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entityResetMeta(entityType, id) {
    return Object.assign({}, resetMeta(entityType), entityMeta(entityType, id));
}
export class EntityLoadAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_LOAD_ACTION;
        this.meta = entityLoadMeta(entityType, id);
    }
}
if (false) {
    /** @type {?} */
    EntityLoadAction.prototype.type;
    /** @type {?} */
    EntityLoadAction.prototype.meta;
}
export class EntityFailAction {
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} error
     */
    constructor(entityType, id, error) {
        this.type = ENTITY_FAIL_ACTION;
        this.meta = entityFailMeta(entityType, id, error);
    }
}
if (false) {
    /** @type {?} */
    EntityFailAction.prototype.type;
    /** @type {?} */
    EntityFailAction.prototype.meta;
}
export class EntitySuccessAction {
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} payload
     */
    constructor(entityType, id, payload) {
        this.payload = payload;
        this.type = ENTITY_SUCCESS_ACTION;
        this.meta = entitySuccessMeta(entityType, id);
    }
}
if (false) {
    /** @type {?} */
    EntitySuccessAction.prototype.type;
    /** @type {?} */
    EntitySuccessAction.prototype.meta;
    /** @type {?} */
    EntitySuccessAction.prototype.payload;
}
export class EntityResetAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_RESET_ACTION;
        this.meta = entityResetMeta(entityType, id);
    }
}
if (false) {
    /** @type {?} */
    EntityResetAction.prototype.type;
    /** @type {?} */
    EntityResetAction.prototype.meta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWxvYWRlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFDTCxRQUFRLEVBRVIsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEdBQ1osTUFBTSx5QkFBeUIsQ0FBQzs7QUFFakMsTUFBTSxPQUFPLGtCQUFrQixHQUFHLGVBQWU7O0FBQ2pELE1BQU0sT0FBTyxrQkFBa0IsR0FBRyxvQkFBb0I7O0FBQ3RELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyx1QkFBdUI7O0FBQzVELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxnQkFBZ0I7Ozs7QUFFbkQsc0NBQW1FOzs7O0FBRW5FLHdDQUdDOzs7SUFGQyxxQ0FBdUI7O0lBQ3ZCLGtDQUFpQzs7Ozs7OztBQUduQyxNQUFNLFVBQVUsY0FBYyxDQUM1QixVQUFrQixFQUNsQixFQUFxQjtJQUVyQix5QkFDSyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQ3BCLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQzdCO0FBQ0osQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQzVCLFVBQWtCLEVBQ2xCLEVBQXFCLEVBQ3JCLEtBQVc7SUFFWCx5QkFDSyxRQUFRLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUMzQixVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUM3QjtBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsVUFBa0IsRUFDbEIsRUFBcUI7SUFFckIseUJBQ0ssV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUN2QixVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUM3QjtBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQzdCLFVBQWtCLEVBQ2xCLEVBQXFCO0lBRXJCLHlCQUNLLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDckIsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFDN0I7QUFDSixDQUFDO0FBRUQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFHM0IsWUFBWSxVQUFrQixFQUFFLEVBQXFCO1FBRnJELFNBQUksR0FBRyxrQkFBa0IsQ0FBQztRQUd4QixJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGOzs7SUFMQyxnQ0FBMEI7O0lBQzFCLGdDQUFnQzs7QUFNbEMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBRzNCLFlBQVksVUFBa0IsRUFBRSxFQUFxQixFQUFFLEtBQVc7UUFGbEUsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1FBR3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGOzs7SUFMQyxnQ0FBMEI7O0lBQzFCLGdDQUFnQzs7QUFNbEMsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBRzlCLFlBQVksVUFBa0IsRUFBRSxFQUFxQixFQUFTLE9BQWE7UUFBYixZQUFPLEdBQVAsT0FBTyxDQUFNO1FBRjNFLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztRQUczQixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7OztJQUxDLG1DQUE2Qjs7SUFDN0IsbUNBQWdDOztJQUN1QixzQ0FBb0I7O0FBSzdFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBRzVCLFlBQVksVUFBa0IsRUFBRSxFQUFxQjtRQUZyRCxTQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFHekIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRjs7O0lBTEMsaUNBQTJCOztJQUMzQixpQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBlbnRpdHlNZXRhLCBFbnRpdHlNZXRhIH0gZnJvbSAnLi4vZW50aXR5L2VudGl0eS5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgZmFpbE1ldGEsXG4gIExvYWRlck1ldGEsXG4gIGxvYWRNZXRhLFxuICByZXNldE1ldGEsXG4gIHN1Y2Nlc3NNZXRhLFxufSBmcm9tICcuLi9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBFTlRJVFlfTE9BRF9BQ1RJT04gPSAnW0VOVElUWV0gTE9BRCc7XG5leHBvcnQgY29uc3QgRU5USVRZX0ZBSUxfQUNUSU9OID0gJ1tFTlRJVFldIExPQUQgRkFJTCc7XG5leHBvcnQgY29uc3QgRU5USVRZX1NVQ0NFU1NfQUNUSU9OID0gJ1tFTlRJVFldIExPQUQgU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgRU5USVRZX1JFU0VUX0FDVElPTiA9ICdbRU5USVRZXSBSRVNFVCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5TG9hZGVyTWV0YSBleHRlbmRzIEVudGl0eU1ldGEsIExvYWRlck1ldGEge31cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlMb2FkZXJBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICByZWFkb25seSBwYXlsb2FkPzogYW55O1xuICByZWFkb25seSBtZXRhPzogRW50aXR5TG9hZGVyTWV0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUxvYWRNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXVxuKTogRW50aXR5TG9hZGVyTWV0YSB7XG4gIHJldHVybiB7XG4gICAgLi4ubG9hZE1ldGEoZW50aXR5VHlwZSksXG4gICAgLi4uZW50aXR5TWV0YShlbnRpdHlUeXBlLCBpZCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlGYWlsTWV0YShcbiAgZW50aXR5VHlwZTogc3RyaW5nLFxuICBpZDogc3RyaW5nIHwgc3RyaW5nW10sXG4gIGVycm9yPzogYW55XG4pOiBFbnRpdHlMb2FkZXJNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5mYWlsTWV0YShlbnRpdHlUeXBlLCBlcnJvciksXG4gICAgLi4uZW50aXR5TWV0YShlbnRpdHlUeXBlLCBpZCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlTdWNjZXNzTWV0YShcbiAgZW50aXR5VHlwZTogc3RyaW5nLFxuICBpZDogc3RyaW5nIHwgc3RyaW5nW11cbik6IEVudGl0eUxvYWRlck1ldGEge1xuICByZXR1cm4ge1xuICAgIC4uLnN1Y2Nlc3NNZXRhKGVudGl0eVR5cGUpLFxuICAgIC4uLmVudGl0eU1ldGEoZW50aXR5VHlwZSwgaWQpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5UmVzZXRNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXVxuKTogRW50aXR5TG9hZGVyTWV0YSB7XG4gIHJldHVybiB7XG4gICAgLi4ucmVzZXRNZXRhKGVudGl0eVR5cGUpLFxuICAgIC4uLmVudGl0eU1ldGEoZW50aXR5VHlwZSwgaWQpLFxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRW50aXR5TG9hZEFjdGlvbiBpbXBsZW1lbnRzIEVudGl0eUxvYWRlckFjdGlvbiB7XG4gIHR5cGUgPSBFTlRJVFlfTE9BRF9BQ1RJT047XG4gIHJlYWRvbmx5IG1ldGE6IEVudGl0eUxvYWRlck1ldGE7XG4gIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZywgaWQ6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5tZXRhID0gZW50aXR5TG9hZE1ldGEoZW50aXR5VHlwZSwgaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlGYWlsQWN0aW9uIGltcGxlbWVudHMgRW50aXR5TG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IEVOVElUWV9GQUlMX0FDVElPTjtcbiAgcmVhZG9ubHkgbWV0YTogRW50aXR5TG9hZGVyTWV0YTtcbiAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10sIGVycm9yPzogYW55KSB7XG4gICAgdGhpcy5tZXRhID0gZW50aXR5RmFpbE1ldGEoZW50aXR5VHlwZSwgaWQsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW50aXR5U3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEVudGl0eUxvYWRlckFjdGlvbiB7XG4gIHR5cGUgPSBFTlRJVFlfU1VDQ0VTU19BQ1RJT047XG4gIHJlYWRvbmx5IG1ldGE6IEVudGl0eUxvYWRlck1ldGE7XG4gIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZywgaWQ6IHN0cmluZyB8IHN0cmluZ1tdLCBwdWJsaWMgcGF5bG9hZD86IGFueSkge1xuICAgIHRoaXMubWV0YSA9IGVudGl0eVN1Y2Nlc3NNZXRhKGVudGl0eVR5cGUsIGlkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW50aXR5UmVzZXRBY3Rpb24gaW1wbGVtZW50cyBFbnRpdHlMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gRU5USVRZX1JFU0VUX0FDVElPTjtcbiAgcmVhZG9ubHkgbWV0YTogRW50aXR5TG9hZGVyTWV0YTtcbiAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICB0aGlzLm1ldGEgPSBlbnRpdHlSZXNldE1ldGEoZW50aXR5VHlwZSwgaWQpO1xuICB9XG59XG4iXX0=