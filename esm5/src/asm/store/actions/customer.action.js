/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { CUSTOMER_SEARCH_DATA } from '../asm-state';
/** @type {?} */
export var CUSTOMER_SEARCH = '[Asm] Customer Search';
/** @type {?} */
export var CUSTOMER_SEARCH_FAIL = '[Asm] Customer Search Fail';
/** @type {?} */
export var CUSTOMER_SEARCH_SUCCESS = '[Asm] Customer Search Success';
/** @type {?} */
export var CUSTOMER_SEARCH_RESET = '[Asm] Customer Search Reset';
var CustomerSearch = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerSearch, _super);
    function CustomerSearch(payload) {
        var _this = _super.call(this, CUSTOMER_SEARCH_DATA) || this;
        _this.payload = payload;
        _this.type = CUSTOMER_SEARCH;
        return _this;
    }
    return CustomerSearch;
}(StateLoaderActions.LoaderLoadAction));
export { CustomerSearch };
if (false) {
    /** @type {?} */
    CustomerSearch.prototype.type;
    /** @type {?} */
    CustomerSearch.prototype.payload;
}
var CustomerSearchFail = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerSearchFail, _super);
    function CustomerSearchFail(payload) {
        var _this = _super.call(this, CUSTOMER_SEARCH_DATA) || this;
        _this.payload = payload;
        _this.type = CUSTOMER_SEARCH_FAIL;
        return _this;
    }
    return CustomerSearchFail;
}(StateLoaderActions.LoaderFailAction));
export { CustomerSearchFail };
if (false) {
    /** @type {?} */
    CustomerSearchFail.prototype.type;
    /** @type {?} */
    CustomerSearchFail.prototype.payload;
}
var CustomerSearchSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerSearchSuccess, _super);
    function CustomerSearchSuccess(payload) {
        var _this = _super.call(this, CUSTOMER_SEARCH_DATA) || this;
        _this.payload = payload;
        _this.type = CUSTOMER_SEARCH_SUCCESS;
        return _this;
    }
    return CustomerSearchSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { CustomerSearchSuccess };
if (false) {
    /** @type {?} */
    CustomerSearchSuccess.prototype.type;
    /** @type {?} */
    CustomerSearchSuccess.prototype.payload;
}
var CustomerSearchReset = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerSearchReset, _super);
    function CustomerSearchReset() {
        var _this = _super.call(this, CUSTOMER_SEARCH_DATA) || this;
        _this.type = CUSTOMER_SEARCH_RESET;
        return _this;
    }
    return CustomerSearchReset;
}(StateLoaderActions.LoaderResetAction));
export { CustomerSearchReset };
if (false) {
    /** @type {?} */
    CustomerSearchReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zdG9yZS9hY3Rpb25zL2N1c3RvbWVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBS2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFcEQsTUFBTSxLQUFPLGVBQWUsR0FBRyx1QkFBdUI7O0FBQ3RELE1BQU0sS0FBTyxvQkFBb0IsR0FBRyw0QkFBNEI7O0FBQ2hFLE1BQU0sS0FBTyx1QkFBdUIsR0FBRywrQkFBK0I7O0FBQ3RFLE1BQU0sS0FBTyxxQkFBcUIsR0FBRyw2QkFBNkI7QUFFbEU7SUFBb0MsMENBQW1DO0lBRXJFLHdCQUFtQixPQUE4QjtRQUFqRCxZQUNFLGtCQUFNLG9CQUFvQixDQUFDLFNBQzVCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQXVCO1FBRHhDLFVBQUksR0FBRyxlQUFlLENBQUM7O0lBR2hDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFMRCxDQUFvQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLdEU7Ozs7SUFKQyw4QkFBZ0M7O0lBQ3BCLGlDQUFxQzs7QUFLbkQ7SUFBd0MsOENBQW1DO0lBRXpFLDRCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sb0JBQW9CLENBQUMsU0FDNUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBR3JDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3QyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLMUU7Ozs7SUFKQyxrQ0FBcUM7O0lBQ3pCLHFDQUFtQjs7QUFLakM7SUFBMkMsaURBQXNDO0lBRS9FLCtCQUFtQixPQUEyQjtRQUE5QyxZQUNFLGtCQUFNLG9CQUFvQixDQUFDLFNBQzVCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQW9CO1FBRHJDLFVBQUksR0FBRyx1QkFBdUIsQ0FBQzs7SUFHeEMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTJDLGtCQUFrQixDQUFDLG1CQUFtQixHQUtoRjs7OztJQUpDLHFDQUF3Qzs7SUFDNUIsd0NBQWtDOztBQUtoRDtJQUF5QywrQ0FBb0M7SUFFM0U7UUFBQSxZQUNFLGtCQUFNLG9CQUFvQixDQUFDLFNBQzVCO1FBSFEsVUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUd0QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsa0JBQWtCLENBQUMsaUJBQWlCLEdBSzVFOzs7O0lBSkMsbUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJTZWFyY2hPcHRpb25zLFxuICBDdXN0b21lclNlYXJjaFBhZ2UsXG59IGZyb20gJy4uLy4uL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IENVU1RPTUVSX1NFQVJDSF9EQVRBIH0gZnJvbSAnLi4vYXNtLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTUVSX1NFQVJDSCA9ICdbQXNtXSBDdXN0b21lciBTZWFyY2gnO1xuZXhwb3J0IGNvbnN0IENVU1RPTUVSX1NFQVJDSF9GQUlMID0gJ1tBc21dIEN1c3RvbWVyIFNlYXJjaCBGYWlsJztcbmV4cG9ydCBjb25zdCBDVVNUT01FUl9TRUFSQ0hfU1VDQ0VTUyA9ICdbQXNtXSBDdXN0b21lciBTZWFyY2ggU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfU0VBUkNIX1JFU0VUID0gJ1tBc21dIEN1c3RvbWVyIFNlYXJjaCBSZXNldCc7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlYXJjaCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENVU1RPTUVSX1NFQVJDSDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEN1c3RvbWVyU2VhcmNoT3B0aW9ucykge1xuICAgIHN1cGVyKENVU1RPTUVSX1NFQVJDSF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTZWFyY2hGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1VTVE9NRVJfU0VBUkNIX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDVVNUT01FUl9TRUFSQ0hfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2VhcmNoU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENVU1RPTUVSX1NFQVJDSF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ3VzdG9tZXJTZWFyY2hQYWdlKSB7XG4gICAgc3VwZXIoQ1VTVE9NRVJfU0VBUkNIX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlYXJjaFJlc2V0IGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENVU1RPTUVSX1NFQVJDSF9SRVNFVDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQ1VTVE9NRVJfU0VBUkNIX0RBVEEpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ3VzdG9tZXJBY3Rpb24gPVxuICB8IEN1c3RvbWVyU2VhcmNoXG4gIHwgQ3VzdG9tZXJTZWFyY2hGYWlsXG4gIHwgQ3VzdG9tZXJTZWFyY2hTdWNjZXNzXG4gIHwgQ3VzdG9tZXJTZWFyY2hSZXNldDtcbiJdfQ==