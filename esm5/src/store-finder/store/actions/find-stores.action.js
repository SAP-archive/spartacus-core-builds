/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/index';
import { STORE_FINDER_DATA } from '../store-finder-state';
/** @type {?} */
export var FIND_STORES_ON_HOLD = '[StoreFinder] On Hold';
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
var FindStoresOnHold = /** @class */ (function (_super) {
    tslib_1.__extends(FindStoresOnHold, _super);
    function FindStoresOnHold() {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.type = FIND_STORES_ON_HOLD;
        return _this;
    }
    return FindStoresOnHold;
}(StateLoaderActions.LoaderLoadAction));
export { FindStoresOnHold };
if (false) {
    /** @type {?} */
    FindStoresOnHold.prototype.type;
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
export { FindStoreByIdSuccess };
if (false) {
    /** @type {?} */
    FindStoreByIdSuccess.prototype.type;
    /** @type {?} */
    FindStoreByIdSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9hY3Rpb25zL2ZpbmQtc3RvcmVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUUxRCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsdUJBQXVCOztBQUMxRCxNQUFNLEtBQU8sV0FBVyxHQUFHLDJCQUEyQjs7QUFDdEQsTUFBTSxLQUFPLGdCQUFnQixHQUFHLGdDQUFnQzs7QUFDaEUsTUFBTSxLQUFPLG1CQUFtQixHQUFHLG1DQUFtQzs7QUFFdEUsTUFBTSxLQUFPLGdCQUFnQixHQUFHLGtDQUFrQzs7QUFDbEUsTUFBTSxLQUFPLHFCQUFxQixHQUFHLHVDQUF1Qzs7QUFDNUUsTUFBTSxLQUFPLHdCQUF3QixHQUNuQywwQ0FBMEM7QUFFNUM7SUFBc0MsNENBQW1DO0lBRXZFO1FBQUEsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUhRLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXNDLGtCQUFrQixDQUFDLGdCQUFnQixHQUt4RTs7OztJQUpDLGdDQUFvQzs7QUFNdEM7SUFBZ0Msc0NBQW1DO0lBRWpFLG9CQUNTLE9BTU47UUFQSCxZQVNFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBVFEsYUFBTyxHQUFQLE9BQU8sQ0FNYjtRQVJNLFVBQUksR0FBRyxXQUFXLENBQUM7O0lBVzVCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFiRCxDQUFnQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FhbEU7Ozs7SUFaQywwQkFBNEI7O0lBRTFCLDZCQU1DOztBQU1MO0lBQW9DLDBDQUFtQztJQUVyRSx3QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxTQUNsQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7SUFHakMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9DLGtCQUFrQixDQUFDLGdCQUFnQixHQUt0RTs7OztJQUpDLDhCQUFpQzs7SUFDckIsaUNBQW1COztBQUtqQztJQUF1Qyw2Q0FBc0M7SUFFM0UsMkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVDLGtCQUFrQixDQUFDLG1CQUFtQixHQUs1RTs7OztJQUpDLGlDQUFvQzs7SUFDeEIsb0NBQW1COztBQUtqQztJQUFtQyx5Q0FBbUM7SUFFcEUsdUJBQW1CLE9BQTRCO1FBQS9DLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFEdEMsVUFBSSxHQUFHLGdCQUFnQixDQUFDOztJQUdqQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3JFOzs7O0lBSkMsNkJBQWlDOztJQUNyQixnQ0FBbUM7O0FBS2pEO0lBQXVDLDZDQUFtQztJQUV4RSwyQkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxTQUNsQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFHdEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVDLGtCQUFrQixDQUFDLGdCQUFnQixHQUt6RTs7OztJQUpDLGlDQUFzQzs7SUFDMUIsb0NBQW1COztBQUtqQztJQUEwQyxnREFBc0M7SUFFOUUsOEJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTBDLGtCQUFrQixDQUFDLG1CQUFtQixHQUsvRTs7OztJQUpDLG9DQUF5Qzs7SUFDN0IsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTVE9SRV9GSU5ERVJfREFUQSB9IGZyb20gJy4uL3N0b3JlLWZpbmRlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFU19PTl9IT0xEID0gJ1tTdG9yZUZpbmRlcl0gT24gSG9sZCc7XG5leHBvcnQgY29uc3QgRklORF9TVE9SRVMgPSAnW1N0b3JlRmluZGVyXSBGaW5kIFN0b3Jlcyc7XG5leHBvcnQgY29uc3QgRklORF9TVE9SRVNfRkFJTCA9ICdbU3RvcmVGaW5kZXJdIEZpbmQgU3RvcmVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVTX1NVQ0NFU1MgPSAnW1N0b3JlRmluZGVyXSBGaW5kIFN0b3JlcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVfQllfSUQgPSAnW1N0b3JlRmluZGVyXSBGaW5kIGEgU3RvcmUgYnkgSWQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVfQllfSURfRkFJTCA9ICdbU3RvcmVGaW5kZXJdIEZpbmQgYSBTdG9yZSBieSBJZCBGYWlsJztcbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFX0JZX0lEX1NVQ0NFU1MgPVxuICAnW1N0b3JlRmluZGVyXSBGaW5kIGEgU3RvcmUgYnkgSWQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVzT25Ib2xkIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRVNfT05fSE9MRDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRVM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBxdWVyeVRleHQ6IHN0cmluZztcbiAgICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnQ7XG4gICAgICB1c2VNeUxvY2F0aW9uPzogYm9vbGVhbjtcbiAgICAgIHNlYXJjaENvbmZpZz86IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnO1xuICAgICAgY291bnRyeUlzb0NvZGU/OiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXNGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3Jlc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVCeUlkIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRV9CWV9JRDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgc3RvcmVJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZUJ5SWRGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRV9CWV9JRF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVCeUlkU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVfQllfSURfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBGaW5kU3RvcmVzQWN0aW9uID1cbiAgfCBGaW5kU3RvcmVzT25Ib2xkXG4gIHwgRmluZFN0b3Jlc1xuICB8IEZpbmRTdG9yZXNGYWlsXG4gIHwgRmluZFN0b3Jlc1N1Y2Nlc3NcbiAgfCBGaW5kU3RvcmVCeUlkXG4gIHwgRmluZFN0b3JlQnlJZEZhaWxcbiAgfCBGaW5kU3RvcmVCeUlkU3VjY2VzcztcbiJdfQ==