/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { STORE_FINDER_DATA } from '../store-finder-state';
/** @type {?} */
export var ON_HOLD = '[StoreFinder] On Hold';
/** @type {?} */
export var FIND_STORES = '[StoreFinder] Find Stores';
/** @type {?} */
export var FIND_STORES_FAIL = '[StoreFinder] Find Stores Fail';
/** @type {?} */
export var FIND_STORES_SUCCESS = '[StoreFinder] Find Stores Success';
/** @type {?} */
export var FIND_STORE_BY_ID = '[StoreFinder] Find a Store by Id';
/** @type {?} */
export var FIND_STORE_BY_ID_FAIL = '[StoreFinder] Find a Store by Id Fail';
/** @type {?} */
export var FIND_STORE_BY_ID_SUCCESS = '[StoreFinder] Find a Store by Id Success';
var OnHold = /** @class */ (function (_super) {
    tslib_1.__extends(OnHold, _super);
    function OnHold() {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.type = ON_HOLD;
        return _this;
    }
    return OnHold;
}(LoaderLoadAction));
export { OnHold };
if (false) {
    /** @type {?} */
    OnHold.prototype.type;
}
var FindStores = /** @class */ (function (_super) {
    tslib_1.__extends(FindStores, _super);
    function FindStores(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORES;
        return _this;
    }
    return FindStores;
}(LoaderLoadAction));
export { FindStores };
if (false) {
    /** @type {?} */
    FindStores.prototype.type;
    /** @type {?} */
    FindStores.prototype.payload;
}
var FindStoresFail = /** @class */ (function (_super) {
    tslib_1.__extends(FindStoresFail, _super);
    function FindStoresFail(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
        _this.payload = payload;
        _this.type = FIND_STORES_FAIL;
        return _this;
    }
    return FindStoresFail;
}(LoaderFailAction));
export { FindStoresFail };
if (false) {
    /** @type {?} */
    FindStoresFail.prototype.type;
    /** @type {?} */
    FindStoresFail.prototype.payload;
}
var FindStoresSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(FindStoresSuccess, _super);
    function FindStoresSuccess(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORES_SUCCESS;
        return _this;
    }
    return FindStoresSuccess;
}(LoaderSuccessAction));
export { FindStoresSuccess };
if (false) {
    /** @type {?} */
    FindStoresSuccess.prototype.type;
    /** @type {?} */
    FindStoresSuccess.prototype.payload;
}
var FindStoreById = /** @class */ (function (_super) {
    tslib_1.__extends(FindStoreById, _super);
    function FindStoreById(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORE_BY_ID;
        return _this;
    }
    return FindStoreById;
}(LoaderLoadAction));
export { FindStoreById };
if (false) {
    /** @type {?} */
    FindStoreById.prototype.type;
    /** @type {?} */
    FindStoreById.prototype.payload;
}
var FindStoreByIdFail = /** @class */ (function (_super) {
    tslib_1.__extends(FindStoreByIdFail, _super);
    function FindStoreByIdFail(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
        _this.payload = payload;
        _this.type = FIND_STORE_BY_ID_FAIL;
        return _this;
    }
    return FindStoreByIdFail;
}(LoaderFailAction));
export { FindStoreByIdFail };
if (false) {
    /** @type {?} */
    FindStoreByIdFail.prototype.type;
    /** @type {?} */
    FindStoreByIdFail.prototype.payload;
}
var FindStoreByIdSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(FindStoreByIdSuccess, _super);
    function FindStoreByIdSuccess(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORE_BY_ID_SUCCESS;
        return _this;
    }
    return FindStoreByIdSuccess;
}(LoaderSuccessAction));
export { FindStoreByIdSuccess };
if (false) {
    /** @type {?} */
    FindStoreByIdSuccess.prototype.type;
    /** @type {?} */
    FindStoreByIdSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9hY3Rpb25zL2ZpbmQtc3RvcmVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUcxRCxNQUFNLEtBQU8sT0FBTyxHQUFHLHVCQUF1Qjs7QUFDOUMsTUFBTSxLQUFPLFdBQVcsR0FBRywyQkFBMkI7O0FBQ3RELE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxnQ0FBZ0M7O0FBQ2hFLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxtQ0FBbUM7O0FBRXRFLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxrQ0FBa0M7O0FBQ2xFLE1BQU0sS0FBTyxxQkFBcUIsR0FBRyx1Q0FBdUM7O0FBQzVFLE1BQU0sS0FBTyx3QkFBd0IsR0FDbkMsMENBQTBDO0FBRTVDO0lBQTRCLGtDQUFnQjtJQUUxQztRQUFBLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFIUSxVQUFJLEdBQUcsT0FBTyxDQUFDOztJQUd4QixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFMRCxDQUE0QixnQkFBZ0IsR0FLM0M7Ozs7SUFKQyxzQkFBd0I7O0FBTTFCO0lBQWdDLHNDQUFnQjtJQUU5QyxvQkFDUyxPQU1OO1FBUEgsWUFTRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQVRRLGFBQU8sR0FBUCxPQUFPLENBTWI7UUFSTSxVQUFJLEdBQUcsV0FBVyxDQUFDOztJQVc1QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBZ0MsZ0JBQWdCLEdBYS9DOzs7O0lBWkMsMEJBQTRCOztJQUUxQiw2QkFNQzs7QUFNTDtJQUFvQywwQ0FBZ0I7SUFFbEQsd0JBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsU0FDbEM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsZ0JBQWdCLENBQUM7O0lBR2pDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFMRCxDQUFvQyxnQkFBZ0IsR0FLbkQ7Ozs7SUFKQyw4QkFBaUM7O0lBQ3JCLGlDQUFtQjs7QUFLakM7SUFBdUMsNkNBQW1CO0lBRXhELDJCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxtQkFBbUIsR0FLekQ7Ozs7SUFKQyxpQ0FBb0M7O0lBQ3hCLG9DQUFtQjs7QUFLakM7SUFBbUMseUNBQWdCO0lBRWpELHVCQUFtQixPQUE0QjtRQUEvQyxZQUNFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQXFCO1FBRHRDLFVBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7SUFHakMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQUxELENBQW1DLGdCQUFnQixHQUtsRDs7OztJQUpDLDZCQUFpQzs7SUFDckIsZ0NBQW1DOztBQUtqRDtJQUF1Qyw2Q0FBZ0I7SUFFckQsMkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsU0FDbEM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcscUJBQXFCLENBQUM7O0lBR3RDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxnQkFBZ0IsR0FLdEQ7Ozs7SUFKQyxpQ0FBc0M7O0lBQzFCLG9DQUFtQjs7QUFLakM7SUFBMEMsZ0RBQW1CO0lBRTNELDhCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFMRCxDQUEwQyxtQkFBbUIsR0FLNUQ7Ozs7SUFKQyxvQ0FBeUM7O0lBQzdCLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQge1xuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBTVE9SRV9GSU5ERVJfREFUQSB9IGZyb20gJy4uL3N0b3JlLWZpbmRlci1zdGF0ZSc7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgT05fSE9MRCA9ICdbU3RvcmVGaW5kZXJdIE9uIEhvbGQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVTID0gJ1tTdG9yZUZpbmRlcl0gRmluZCBTdG9yZXMnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVTX0ZBSUwgPSAnW1N0b3JlRmluZGVyXSBGaW5kIFN0b3JlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFU19TVUNDRVNTID0gJ1tTdG9yZUZpbmRlcl0gRmluZCBTdG9yZXMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFX0JZX0lEID0gJ1tTdG9yZUZpbmRlcl0gRmluZCBhIFN0b3JlIGJ5IElkJztcbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFX0JZX0lEX0ZBSUwgPSAnW1N0b3JlRmluZGVyXSBGaW5kIGEgU3RvcmUgYnkgSWQgRmFpbCc7XG5leHBvcnQgY29uc3QgRklORF9TVE9SRV9CWV9JRF9TVUNDRVNTID1cbiAgJ1tTdG9yZUZpbmRlcl0gRmluZCBhIFN0b3JlIGJ5IElkIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgT25Ib2xkIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBPTl9IT0xEO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXMgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgcXVlcnlUZXh0OiBzdHJpbmc7XG4gICAgICBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50O1xuICAgICAgdXNlTXlMb2NhdGlvbj86IGJvb2xlYW47XG4gICAgICBzZWFyY2hDb25maWc/OiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZztcbiAgICAgIGNvdW50cnlJc29Db2RlPzogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVzRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3Jlc1N1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZUJ5SWQgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVfQllfSUQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHN0b3JlSWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVCeUlkRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRV9CWV9JRF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVCeUlkU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRV9CWV9JRF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEZpbmRTdG9yZXNBY3Rpb24gPVxuICB8IE9uSG9sZFxuICB8IEZpbmRTdG9yZXNcbiAgfCBGaW5kU3RvcmVzRmFpbFxuICB8IEZpbmRTdG9yZXNTdWNjZXNzXG4gIHwgRmluZFN0b3JlQnlJZFxuICB8IEZpbmRTdG9yZUJ5SWRGYWlsXG4gIHwgRmluZFN0b3JlQnlJZFN1Y2Nlc3M7XG4iXX0=