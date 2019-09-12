/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { PRODUCT_DETAIL_ENTITY } from '../product-state';
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
}(StateEntityLoaderActions.EntityLoadAction));
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
}(StateEntityLoaderActions.EntityFailAction));
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
}(StateEntityLoaderActions.EntitySuccessAction));
export { LoadProductSuccess };
if (false) {
    /** @type {?} */
    LoadProductSuccess.prototype.type;
    /** @type {?} */
    LoadProductSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9hY3Rpb25zL3Byb2R1Y3QuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRXpELE1BQU0sS0FBTyxZQUFZLEdBQUcsNkJBQTZCOztBQUN6RCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsa0NBQWtDOztBQUNuRSxNQUFNLEtBQU8sb0JBQW9CLEdBQUcscUNBQXFDO0FBRXpFO0lBQWlDLHVDQUF5QztJQUV4RSxxQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxTQUN0QztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyxZQUFZLENBQUM7O0lBRzdCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFMRCxDQUFpQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLekU7Ozs7SUFKQywyQkFBNkI7O0lBQ2pCLDhCQUFzQjs7QUFLcEM7SUFBcUMsMkNBQXlDO0lBRTVFLHlCQUFZLFdBQW1CLEVBQVMsT0FBWTtRQUFwRCxZQUNFLGtCQUFNLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsU0FDbkQ7UUFGdUMsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQzQyxVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLN0U7Ozs7SUFKQywrQkFBa0M7O0lBQ0Qsa0NBQW1COztBQUt0RDtJQUF3Qyw4Q0FBNEM7SUFFbEYsNEJBQW1CLE9BQWdCO1FBQW5DLFlBQ0Usa0JBQU0scUJBQXFCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUMzQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFTO1FBRDFCLFVBQUksR0FBRyxvQkFBb0IsQ0FBQzs7SUFHckMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLHdCQUF3QixDQUFDLG1CQUFtQixHQUtuRjs7OztJQUpDLGtDQUFxQzs7SUFDekIscUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgUFJPRFVDVF9ERVRBSUxfRU5USVRZIH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1QgPSAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBEYXRhJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfRkFJTCA9ICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IERhdGEgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1NVQ0NFU1MgPSAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBEYXRhIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFByb2R1Y3QgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9EVUNUX0RFVEFJTF9FTlRJVFksIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdEZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHJvZHVjdENvZGU6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0RVQ1RfREVUQUlMX0VOVElUWSwgcHJvZHVjdENvZGUsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2R1Y3QpIHtcbiAgICBzdXBlcihQUk9EVUNUX0RFVEFJTF9FTlRJVFksIHBheWxvYWQuY29kZSk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBQcm9kdWN0QWN0aW9uID0gTG9hZFByb2R1Y3QgfCBMb2FkUHJvZHVjdEZhaWwgfCBMb2FkUHJvZHVjdFN1Y2Nlc3M7XG4iXX0=