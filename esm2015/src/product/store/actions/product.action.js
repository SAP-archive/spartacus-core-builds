/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PRODUCT_DETAIL_ENTITY } from '../product-state';
import { EntityScopedLoaderActions } from '../../../state/utils/scoped-loader/entity-scoped-loader.actions';
/** @type {?} */
export const LOAD_PRODUCT = '[Product] Load Product Data';
/** @type {?} */
export const LOAD_PRODUCT_FAIL = '[Product] Load Product Data Fail';
/** @type {?} */
export const LOAD_PRODUCT_SUCCESS = '[Product] Load Product Data Success';
/**
 * @record
 */
export function ProductMeta() { }
if (false) {
    /** @type {?|undefined} */
    ProductMeta.prototype.scope;
}
/**
 * @record
 */
export function EntityScopedLoaderAction() { }
if (false) {
    /** @type {?|undefined} */
    EntityScopedLoaderAction.prototype.payload;
    /** @type {?|undefined} */
    EntityScopedLoaderAction.prototype.meta;
}
export class LoadProduct extends EntityScopedLoaderActions.EntityScopedLoadAction {
    /**
     * @param {?} payload
     * @param {?=} scope
     */
    constructor(payload, scope = '') {
        super(PRODUCT_DETAIL_ENTITY, payload, scope);
        this.payload = payload;
        this.type = LOAD_PRODUCT;
    }
}
if (false) {
    /** @type {?} */
    LoadProduct.prototype.type;
    /** @type {?} */
    LoadProduct.prototype.payload;
}
export class LoadProductFail extends EntityScopedLoaderActions.EntityScopedFailAction {
    /**
     * @param {?} productCode
     * @param {?} payload
     * @param {?=} scope
     */
    constructor(productCode, payload, scope = '') {
        super(PRODUCT_DETAIL_ENTITY, productCode, scope, payload);
        this.payload = payload;
        this.type = LOAD_PRODUCT_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadProductFail.prototype.type;
    /** @type {?} */
    LoadProductFail.prototype.payload;
}
export class LoadProductSuccess extends EntityScopedLoaderActions.EntityScopedSuccessAction {
    /**
     * @param {?} payload
     * @param {?=} scope
     */
    constructor(payload, scope = '') {
        super(PRODUCT_DETAIL_ENTITY, payload.code, scope);
        this.payload = payload;
        this.type = LOAD_PRODUCT_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadProductSuccess.prototype.type;
    /** @type {?} */
    LoadProductSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9hY3Rpb25zL3Byb2R1Y3QuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQzs7QUFFNUcsTUFBTSxPQUFPLFlBQVksR0FBRyw2QkFBNkI7O0FBQ3pELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxrQ0FBa0M7O0FBQ25FLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxxQ0FBcUM7Ozs7QUFFekUsaUNBRUM7OztJQURDLDRCQUFlOzs7OztBQUdqQiw4Q0FHQzs7O0lBRkMsMkNBQXVCOztJQUN2Qix3Q0FBNEI7O0FBRzlCLE1BQU0sT0FBTyxXQUFZLFNBQVEseUJBQXlCLENBQUMsc0JBQXNCOzs7OztJQUUvRSxZQUFtQixPQUFlLEVBQUUsS0FBSyxHQUFHLEVBQUU7UUFDNUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUQ1QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxZQUFZLENBQUM7SUFHN0IsQ0FBQztDQUNGOzs7SUFKQywyQkFBNkI7O0lBQ2pCLDhCQUFzQjs7QUFLcEMsTUFBTSxPQUFPLGVBQWdCLFNBQVEseUJBQXlCLENBQUMsc0JBQXNCOzs7Ozs7SUFFbkYsWUFBWSxXQUFtQixFQUFTLE9BQVksRUFBRSxLQUFLLEdBQUcsRUFBRTtRQUM5RCxLQUFLLENBQUMscUJBQXFCLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQURwQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRDNDLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUdsQyxDQUFDO0NBQ0Y7OztJQUpDLCtCQUFrQzs7SUFDRCxrQ0FBbUI7O0FBS3RELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSx5QkFBeUIsQ0FBQyx5QkFBeUI7Ozs7O0lBRXpGLFlBQW1CLE9BQWdCLEVBQUUsS0FBSyxHQUFHLEVBQUU7UUFDN0MsS0FBSyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFEakMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUQxQixTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFHckMsQ0FBQztDQUNGOzs7SUFKQyxrQ0FBcUM7O0lBQ3pCLHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfREVUQUlMX0VOVElUWSB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyTWV0YSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRW50aXR5U2NvcGVkTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL3Njb3BlZC1sb2FkZXIvZW50aXR5LXNjb3BlZC1sb2FkZXIuYWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1QgPSAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBEYXRhJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfRkFJTCA9ICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IERhdGEgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1NVQ0NFU1MgPSAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBEYXRhIFN1Y2Nlc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RNZXRhIGV4dGVuZHMgRW50aXR5TG9hZGVyTWV0YSB7XG4gIHNjb3BlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVNjb3BlZExvYWRlckFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHBheWxvYWQ/OiBhbnk7XG4gIHJlYWRvbmx5IG1ldGE/OiBQcm9kdWN0TWV0YTtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0IGV4dGVuZHMgRW50aXR5U2NvcGVkTG9hZGVyQWN0aW9ucy5FbnRpdHlTY29wZWRMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZywgc2NvcGUgPSAnJykge1xuICAgIHN1cGVyKFBST0RVQ1RfREVUQUlMX0VOVElUWSwgcGF5bG9hZCwgc2NvcGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdEZhaWwgZXh0ZW5kcyBFbnRpdHlTY29wZWRMb2FkZXJBY3Rpb25zLkVudGl0eVNjb3BlZEZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnksIHNjb3BlID0gJycpIHtcbiAgICBzdXBlcihQUk9EVUNUX0RFVEFJTF9FTlRJVFksIHByb2R1Y3RDb2RlLCBzY29wZSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0U3VjY2VzcyBleHRlbmRzIEVudGl0eVNjb3BlZExvYWRlckFjdGlvbnMuRW50aXR5U2NvcGVkU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2R1Y3QsIHNjb3BlID0gJycpIHtcbiAgICBzdXBlcihQUk9EVUNUX0RFVEFJTF9FTlRJVFksIHBheWxvYWQuY29kZSwgc2NvcGUpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgUHJvZHVjdEFjdGlvbiA9IExvYWRQcm9kdWN0IHwgTG9hZFByb2R1Y3RGYWlsIHwgTG9hZFByb2R1Y3RTdWNjZXNzO1xuIl19