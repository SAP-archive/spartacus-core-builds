/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWxvYWRlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFDTCxRQUFRLEVBRVIsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEdBQ1osTUFBTSx5QkFBeUIsQ0FBQzs7QUFFakMsTUFBTSxPQUFPLGtCQUFrQixHQUFHLGVBQWU7O0FBQ2pELE1BQU0sT0FBTyxrQkFBa0IsR0FBRyxvQkFBb0I7O0FBQ3RELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyx1QkFBdUI7O0FBQzVELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxnQkFBZ0I7Ozs7QUFFbkQsc0NBQW1FOzs7O0FBRW5FLHdDQUdDOzs7SUFGQyxxQ0FBdUI7O0lBQ3ZCLGtDQUFpQzs7Ozs7OztBQUduQyxNQUFNLFVBQVUsY0FBYyxDQUM1QixVQUFrQixFQUNsQixFQUFxQjtJQUVyQix5QkFDSyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQ3BCLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQzdCO0FBQ0osQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQzVCLFVBQWtCLEVBQ2xCLEVBQXFCLEVBQ3JCLEtBQVc7SUFFWCx5QkFDSyxRQUFRLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUMzQixVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUM3QjtBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsVUFBa0IsRUFDbEIsRUFBcUI7SUFFckIseUJBQ0ssV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUN2QixVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUM3QjtBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQzdCLFVBQWtCLEVBQ2xCLEVBQXFCO0lBRXJCLHlCQUNLLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDckIsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFDN0I7QUFDSixDQUFDO0FBRUQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFHM0IsWUFBWSxVQUFrQixFQUFFLEVBQXFCO1FBRnJELFNBQUksR0FBRyxrQkFBa0IsQ0FBQztRQUd4QixJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGOzs7SUFMQyxnQ0FBMEI7O0lBQzFCLGdDQUFnQzs7QUFNbEMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBRzNCLFlBQVksVUFBa0IsRUFBRSxFQUFxQixFQUFFLEtBQVc7UUFGbEUsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1FBR3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGOzs7SUFMQyxnQ0FBMEI7O0lBQzFCLGdDQUFnQzs7QUFNbEMsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBRzlCLFlBQVksVUFBa0IsRUFBRSxFQUFxQixFQUFTLE9BQWE7UUFBYixZQUFPLEdBQVAsT0FBTyxDQUFNO1FBRjNFLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztRQUczQixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7OztJQUxDLG1DQUE2Qjs7SUFDN0IsbUNBQWdDOztJQUN1QixzQ0FBb0I7O0FBSzdFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBRzVCLFlBQVksVUFBa0IsRUFBRSxFQUFxQjtRQUZyRCxTQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFHekIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRjs7O0lBTEMsaUNBQTJCOztJQUMzQixpQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IGVudGl0eU1ldGEsIEVudGl0eU1ldGEgfSBmcm9tICcuLi9lbnRpdHkvZW50aXR5LmFjdGlvbic7XG5pbXBvcnQge1xuICBmYWlsTWV0YSxcbiAgTG9hZGVyTWV0YSxcbiAgbG9hZE1ldGEsXG4gIHJlc2V0TWV0YSxcbiAgc3VjY2Vzc01ldGEsXG59IGZyb20gJy4uL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IEVOVElUWV9MT0FEX0FDVElPTiA9ICdbRU5USVRZXSBMT0FEJztcbmV4cG9ydCBjb25zdCBFTlRJVFlfRkFJTF9BQ1RJT04gPSAnW0VOVElUWV0gTE9BRCBGQUlMJztcbmV4cG9ydCBjb25zdCBFTlRJVFlfU1VDQ0VTU19BQ1RJT04gPSAnW0VOVElUWV0gTE9BRCBTVUNDRVNTJztcbmV4cG9ydCBjb25zdCBFTlRJVFlfUkVTRVRfQUNUSU9OID0gJ1tFTlRJVFldIFJFU0VUJztcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlMb2FkZXJNZXRhIGV4dGVuZHMgRW50aXR5TWV0YSwgTG9hZGVyTWV0YSB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eUxvYWRlckFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHBheWxvYWQ/OiBhbnk7XG4gIHJlYWRvbmx5IG1ldGE/OiBFbnRpdHlMb2FkZXJNZXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5TG9hZE1ldGEoXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdXG4pOiBFbnRpdHlMb2FkZXJNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5sb2FkTWV0YShlbnRpdHlUeXBlKSxcbiAgICAuLi5lbnRpdHlNZXRhKGVudGl0eVR5cGUsIGlkKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUZhaWxNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgZXJyb3I/OiBhbnlcbik6IEVudGl0eUxvYWRlck1ldGEge1xuICByZXR1cm4ge1xuICAgIC4uLmZhaWxNZXRhKGVudGl0eVR5cGUsIGVycm9yKSxcbiAgICAuLi5lbnRpdHlNZXRhKGVudGl0eVR5cGUsIGlkKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVN1Y2Nlc3NNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXVxuKTogRW50aXR5TG9hZGVyTWV0YSB7XG4gIHJldHVybiB7XG4gICAgLi4uc3VjY2Vzc01ldGEoZW50aXR5VHlwZSksXG4gICAgLi4uZW50aXR5TWV0YShlbnRpdHlUeXBlLCBpZCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlSZXNldE1ldGEoXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdXG4pOiBFbnRpdHlMb2FkZXJNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5yZXNldE1ldGEoZW50aXR5VHlwZSksXG4gICAgLi4uZW50aXR5TWV0YShlbnRpdHlUeXBlLCBpZCksXG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlMb2FkQWN0aW9uIGltcGxlbWVudHMgRW50aXR5TG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IEVOVElUWV9MT0FEX0FDVElPTjtcbiAgcmVhZG9ubHkgbWV0YTogRW50aXR5TG9hZGVyTWV0YTtcbiAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICB0aGlzLm1ldGEgPSBlbnRpdHlMb2FkTWV0YShlbnRpdHlUeXBlLCBpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVudGl0eUZhaWxBY3Rpb24gaW1wbGVtZW50cyBFbnRpdHlMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gRU5USVRZX0ZBSUxfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBFbnRpdHlMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSwgZXJyb3I/OiBhbnkpIHtcbiAgICB0aGlzLm1ldGEgPSBlbnRpdHlGYWlsTWV0YShlbnRpdHlUeXBlLCBpZCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgRW50aXR5TG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IEVOVElUWV9TVUNDRVNTX0FDVElPTjtcbiAgcmVhZG9ubHkgbWV0YTogRW50aXR5TG9hZGVyTWV0YTtcbiAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10sIHB1YmxpYyBwYXlsb2FkPzogYW55KSB7XG4gICAgdGhpcy5tZXRhID0gZW50aXR5U3VjY2Vzc01ldGEoZW50aXR5VHlwZSwgaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlSZXNldEFjdGlvbiBpbXBsZW1lbnRzIEVudGl0eUxvYWRlckFjdGlvbiB7XG4gIHR5cGUgPSBFTlRJVFlfUkVTRVRfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBFbnRpdHlMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHRoaXMubWV0YSA9IGVudGl0eVJlc2V0TWV0YShlbnRpdHlUeXBlLCBpZCk7XG4gIH1cbn1cbiJdfQ==