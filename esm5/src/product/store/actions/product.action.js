/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PRODUCT_DETAIL_ENTITY } from '../product-state';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
/** @type {?} */
export var LOAD_PRODUCT = '[Product] Load Product Data';
/** @type {?} */
export var LOAD_PRODUCT_FAIL = '[Product] Load Product Data Fail';
/** @type {?} */
export var LOAD_PRODUCT_SUCCESS = '[Product] Load Product Data Success';
var LoadProduct = /** @class */ (function (_super) {
    tslib_1.__extends(LoadProduct, _super);
    function LoadProduct(payload) {
        var _this = _super.call(this, PRODUCT_DETAIL_ENTITY, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_PRODUCT;
        return _this;
    }
    return LoadProduct;
}(EntityLoadAction));
export { LoadProduct };
if (false) {
    /** @type {?} */
    LoadProduct.prototype.type;
    /** @type {?} */
    LoadProduct.prototype.payload;
}
var LoadProductFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadProductFail, _super);
    function LoadProductFail(productCode, payload) {
        var _this = _super.call(this, PRODUCT_DETAIL_ENTITY, productCode, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_PRODUCT_FAIL;
        return _this;
    }
    return LoadProductFail;
}(EntityFailAction));
export { LoadProductFail };
if (false) {
    /** @type {?} */
    LoadProductFail.prototype.type;
    /** @type {?} */
    LoadProductFail.prototype.payload;
}
var LoadProductSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadProductSuccess, _super);
    function LoadProductSuccess(payload) {
        var _this = _super.call(this, PRODUCT_DETAIL_ENTITY, payload.code) || this;
        _this.payload = payload;
        _this.type = LOAD_PRODUCT_SUCCESS;
        return _this;
    }
    return LoadProductSuccess;
}(EntitySuccessAction));
export { LoadProductSuccess };
if (false) {
    /** @type {?} */
    LoadProductSuccess.prototype.type;
    /** @type {?} */
    LoadProductSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9hY3Rpb25zL3Byb2R1Y3QuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7O0FBR2pFLE1BQU0sS0FBTyxZQUFZLEdBQUcsNkJBQTZCOztBQUN6RCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsa0NBQWtDOztBQUNuRSxNQUFNLEtBQU8sb0JBQW9CLEdBQUcscUNBQXFDO0FBRXpFO0lBQWlDLHVDQUFnQjtJQUUvQyxxQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxTQUN0QztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyxZQUFZLENBQUM7O0lBRzdCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFMRCxDQUFpQyxnQkFBZ0IsR0FLaEQ7Ozs7SUFKQywyQkFBNkI7O0lBQ2pCLDhCQUFzQjs7QUFLcEM7SUFBcUMsMkNBQWdCO0lBRW5ELHlCQUFZLFdBQW1CLEVBQVMsT0FBWTtRQUFwRCxZQUNFLGtCQUFNLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsU0FDbkQ7UUFGdUMsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQzQyxVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyxnQkFBZ0IsR0FLcEQ7Ozs7SUFKQywrQkFBa0M7O0lBQ0Qsa0NBQW1COztBQUt0RDtJQUF3Qyw4Q0FBbUI7SUFFekQsNEJBQW1CLE9BQWdCO1FBQW5DLFlBQ0Usa0JBQU0scUJBQXFCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUMzQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFTO1FBRDFCLFVBQUksR0FBRyxvQkFBb0IsQ0FBQzs7SUFHckMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLG1CQUFtQixHQUsxRDs7OztJQUpDLGtDQUFxQzs7SUFDekIscUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUFJPRFVDVF9ERVRBSUxfRU5USVRZIH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVCA9ICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IERhdGEnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9GQUlMID0gJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgRGF0YSBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfU1VDQ0VTUyA9ICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IERhdGEgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoUFJPRFVDVF9ERVRBSUxfRU5USVRZLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFByb2R1Y3RGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHJvZHVjdENvZGU6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0RVQ1RfREVUQUlMX0VOVElUWSwgcHJvZHVjdENvZGUsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZHVjdCkge1xuICAgIHN1cGVyKFBST0RVQ1RfREVUQUlMX0VOVElUWSwgcGF5bG9hZC5jb2RlKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFByb2R1Y3RBY3Rpb24gPSBMb2FkUHJvZHVjdCB8IExvYWRQcm9kdWN0RmFpbCB8IExvYWRQcm9kdWN0U3VjY2VzcztcbiJdfQ==