/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PRODUCT_DETAIL_ENTITY } from '../product-state';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
/** @type {?} */
export const LOAD_PRODUCT = '[Product] Load Product Data';
/** @type {?} */
export const LOAD_PRODUCT_FAIL = '[Product] Load Product Data Fail';
/** @type {?} */
export const LOAD_PRODUCT_SUCCESS = '[Product] Load Product Data Success';
export class LoadProduct extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PRODUCT_DETAIL_ENTITY, payload);
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
export class LoadProductFail extends EntityFailAction {
    /**
     * @param {?} productCode
     * @param {?} payload
     */
    constructor(productCode, payload) {
        super(PRODUCT_DETAIL_ENTITY, productCode, payload);
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
export class LoadProductSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PRODUCT_DETAIL_ENTITY, payload.code);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9hY3Rpb25zL3Byb2R1Y3QuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQzs7QUFHakUsTUFBTSxPQUFPLFlBQVksR0FBRyw2QkFBNkI7O0FBQ3pELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxrQ0FBa0M7O0FBQ25FLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxxQ0FBcUM7QUFFekUsTUFBTSxPQUFPLFdBQVksU0FBUSxnQkFBZ0I7Ozs7SUFFL0MsWUFBbUIsT0FBZTtRQUNoQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsWUFBWSxDQUFDO0lBRzdCLENBQUM7Q0FDRjs7O0lBSkMsMkJBQTZCOztJQUNqQiw4QkFBc0I7O0FBS3BDLE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjs7Ozs7SUFFbkQsWUFBWSxXQUFtQixFQUFTLE9BQVk7UUFDbEQsS0FBSyxDQUFDLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURiLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEM0MsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBR2xDLENBQUM7Q0FDRjs7O0lBSkMsK0JBQWtDOztJQUNELGtDQUFtQjs7QUFLdEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLG1CQUFtQjs7OztJQUV6RCxZQUFtQixPQUFnQjtRQUNqQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRDFCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFEMUIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBR3JDLENBQUM7Q0FDRjs7O0lBSkMsa0NBQXFDOztJQUN6QixxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQUk9EVUNUX0RFVEFJTF9FTlRJVFkgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUID0gJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgRGF0YSc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX0ZBSUwgPSAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9TVUNDRVNTID0gJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgRGF0YSBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9EVUNUX0RFVEFJTF9FTlRJVFksIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVF9GQUlMO1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0Q29kZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPRFVDVF9ERVRBSUxfRU5USVRZLCBwcm9kdWN0Q29kZSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9kdWN0KSB7XG4gICAgc3VwZXIoUFJPRFVDVF9ERVRBSUxfRU5USVRZLCBwYXlsb2FkLmNvZGUpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgUHJvZHVjdEFjdGlvbiA9IExvYWRQcm9kdWN0IHwgTG9hZFByb2R1Y3RGYWlsIHwgTG9hZFByb2R1Y3RTdWNjZXNzO1xuIl19