/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { PRODUCT_DETAIL_ENTITY } from '../product-state';
/** @type {?} */
export const LOAD_PRODUCT = '[Product] Load Product Data';
/** @type {?} */
export const LOAD_PRODUCT_FAIL = '[Product] Load Product Data Fail';
/** @type {?} */
export const LOAD_PRODUCT_SUCCESS = '[Product] Load Product Data Success';
export class LoadProduct extends StateEntityLoaderActions.EntityLoadAction {
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
export class LoadProductFail extends StateEntityLoaderActions.EntityFailAction {
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
export class LoadProductSuccess extends StateEntityLoaderActions.EntitySuccessAction {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9hY3Rpb25zL3Byb2R1Y3QuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFekQsTUFBTSxPQUFPLFlBQVksR0FBRyw2QkFBNkI7O0FBQ3pELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxrQ0FBa0M7O0FBQ25FLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxxQ0FBcUM7QUFFekUsTUFBTSxPQUFPLFdBQVksU0FBUSx3QkFBd0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFeEUsWUFBbUIsT0FBZTtRQUNoQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsWUFBWSxDQUFDO0lBRzdCLENBQUM7Q0FDRjs7O0lBSkMsMkJBQTZCOztJQUNqQiw4QkFBc0I7O0FBS3BDLE1BQU0sT0FBTyxlQUFnQixTQUFRLHdCQUF3QixDQUFDLGdCQUFnQjs7Ozs7SUFFNUUsWUFBWSxXQUFtQixFQUFTLE9BQVk7UUFDbEQsS0FBSyxDQUFDLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURiLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEM0MsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBR2xDLENBQUM7Q0FDRjs7O0lBSkMsK0JBQWtDOztJQUNELGtDQUFtQjs7QUFLdEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHdCQUF3QixDQUFDLG1CQUFtQjs7OztJQUVsRixZQUFtQixPQUFnQjtRQUNqQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRDFCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFEMUIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBR3JDLENBQUM7Q0FDRjs7O0lBSkMsa0NBQXFDOztJQUN6QixxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBQUk9EVUNUX0RFVEFJTF9FTlRJVFkgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVCA9ICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IERhdGEnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9GQUlMID0gJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgRGF0YSBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfU1VDQ0VTUyA9ICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IERhdGEgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFBST0RVQ1RfREVUQUlMX0VOVElUWSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0RmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVF9GQUlMO1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0Q29kZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPRFVDVF9ERVRBSUxfRU5USVRZLCBwcm9kdWN0Q29kZSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0U3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZHVjdCkge1xuICAgIHN1cGVyKFBST0RVQ1RfREVUQUlMX0VOVElUWSwgcGF5bG9hZC5jb2RlKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFByb2R1Y3RBY3Rpb24gPSBMb2FkUHJvZHVjdCB8IExvYWRQcm9kdWN0RmFpbCB8IExvYWRQcm9kdWN0U3VjY2VzcztcbiJdfQ==