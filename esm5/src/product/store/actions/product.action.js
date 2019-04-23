/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9hY3Rpb25zL3Byb2R1Y3QuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7O0FBR2pFLE1BQU0sS0FBTyxZQUFZLEdBQUcsNkJBQTZCOztBQUN6RCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsa0NBQWtDOztBQUNuRSxNQUFNLEtBQU8sb0JBQW9CLEdBQUcscUNBQXFDO0FBRXpFO0lBQWlDLHVDQUFnQjtJQUUvQyxxQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxTQUN0QztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyxZQUFZLENBQUM7O0lBRzdCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFMRCxDQUFpQyxnQkFBZ0IsR0FLaEQ7Ozs7SUFKQywyQkFBNkI7O0lBQ2pCLDhCQUFzQjs7QUFLcEM7SUFBcUMsMkNBQWdCO0lBRW5ELHlCQUFZLFdBQW1CLEVBQVMsT0FBWTtRQUFwRCxZQUNFLGtCQUFNLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsU0FDbkQ7UUFGdUMsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQzQyxVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyxnQkFBZ0IsR0FLcEQ7Ozs7SUFKQywrQkFBa0M7O0lBQ0Qsa0NBQW1COztBQUt0RDtJQUF3Qyw4Q0FBbUI7SUFFekQsNEJBQW1CLE9BQWtCO1FBQXJDLFlBQ0Usa0JBQU0scUJBQXFCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUMzQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFXO1FBRDVCLFVBQUksR0FBRyxvQkFBb0IsQ0FBQzs7SUFHckMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLG1CQUFtQixHQUsxRDs7OztJQUpDLGtDQUFxQzs7SUFDekIscUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUFJPRFVDVF9ERVRBSUxfRU5USVRZIH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IFVJUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUID0gJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgRGF0YSc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX0ZBSUwgPSAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9TVUNDRVNTID0gJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgRGF0YSBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9EVUNUX0RFVEFJTF9FTlRJVFksIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVF9GQUlMO1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0Q29kZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPRFVDVF9ERVRBSUxfRU5USVRZLCBwcm9kdWN0Q29kZSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVSVByb2R1Y3QpIHtcbiAgICBzdXBlcihQUk9EVUNUX0RFVEFJTF9FTlRJVFksIHBheWxvYWQuY29kZSk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBQcm9kdWN0QWN0aW9uID0gTG9hZFByb2R1Y3QgfCBMb2FkUHJvZHVjdEZhaWwgfCBMb2FkUHJvZHVjdFN1Y2Nlc3M7XG4iXX0=