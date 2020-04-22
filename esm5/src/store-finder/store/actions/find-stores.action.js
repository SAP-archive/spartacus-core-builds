import { __extends } from "tslib";
import { StateUtils } from '../../../state/utils/index';
import { STORE_FINDER_DATA } from '../store-finder-state';
export var FIND_STORES_ON_HOLD = '[StoreFinder] On Hold';
export var FIND_STORES = '[StoreFinder] Find Stores';
export var FIND_STORES_FAIL = '[StoreFinder] Find Stores Fail';
export var FIND_STORES_SUCCESS = '[StoreFinder] Find Stores Success';
export var FIND_STORE_BY_ID = '[StoreFinder] Find a Store by Id';
export var FIND_STORE_BY_ID_FAIL = '[StoreFinder] Find a Store by Id Fail';
export var FIND_STORE_BY_ID_SUCCESS = '[StoreFinder] Find a Store by Id Success';
var FindStoresOnHold = /** @class */ (function (_super) {
    __extends(FindStoresOnHold, _super);
    function FindStoresOnHold() {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.type = FIND_STORES_ON_HOLD;
        return _this;
    }
    return FindStoresOnHold;
}(StateUtils.LoaderLoadAction));
export { FindStoresOnHold };
var FindStores = /** @class */ (function (_super) {
    __extends(FindStores, _super);
    function FindStores(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORES;
        return _this;
    }
    return FindStores;
}(StateUtils.LoaderLoadAction));
export { FindStores };
var FindStoresFail = /** @class */ (function (_super) {
    __extends(FindStoresFail, _super);
    function FindStoresFail(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
        _this.payload = payload;
        _this.type = FIND_STORES_FAIL;
        return _this;
    }
    return FindStoresFail;
}(StateUtils.LoaderFailAction));
export { FindStoresFail };
var FindStoresSuccess = /** @class */ (function (_super) {
    __extends(FindStoresSuccess, _super);
    function FindStoresSuccess(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORES_SUCCESS;
        return _this;
    }
    return FindStoresSuccess;
}(StateUtils.LoaderSuccessAction));
export { FindStoresSuccess };
var FindStoreById = /** @class */ (function (_super) {
    __extends(FindStoreById, _super);
    function FindStoreById(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORE_BY_ID;
        return _this;
    }
    return FindStoreById;
}(StateUtils.LoaderLoadAction));
export { FindStoreById };
var FindStoreByIdFail = /** @class */ (function (_super) {
    __extends(FindStoreByIdFail, _super);
    function FindStoreByIdFail(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
        _this.payload = payload;
        _this.type = FIND_STORE_BY_ID_FAIL;
        return _this;
    }
    return FindStoreByIdFail;
}(StateUtils.LoaderFailAction));
export { FindStoreByIdFail };
var FindStoreByIdSuccess = /** @class */ (function (_super) {
    __extends(FindStoreByIdSuccess, _super);
    function FindStoreByIdSuccess(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORE_BY_ID_SUCCESS;
        return _this;
    }
    return FindStoreByIdSuccess;
}(StateUtils.LoaderSuccessAction));
export { FindStoreByIdSuccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9hY3Rpb25zL2ZpbmQtc3RvcmVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLHVCQUF1QixDQUFDO0FBQzNELE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRywyQkFBMkIsQ0FBQztBQUN2RCxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxnQ0FBZ0MsQ0FBQztBQUNqRSxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxtQ0FBbUMsQ0FBQztBQUV2RSxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxrQ0FBa0MsQ0FBQztBQUNuRSxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyx1Q0FBdUMsQ0FBQztBQUM3RSxNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FDbkMsMENBQTBDLENBQUM7QUFFN0M7SUFBc0Msb0NBQTJCO0lBRS9EO1FBQUEsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUhRLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXNDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FLaEU7O0FBRUQ7SUFBZ0MsOEJBQTJCO0lBRXpELG9CQUNTLE9BT047UUFSSCxZQVVFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBVlEsYUFBTyxHQUFQLE9BQU8sQ0FPYjtRQVRNLFVBQUksR0FBRyxXQUFXLENBQUM7O0lBWTVCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFkRCxDQUFnQyxVQUFVLENBQUMsZ0JBQWdCLEdBYzFEOztBQUVEO0lBQW9DLGtDQUEyQjtJQUU3RCx3QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxTQUNsQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7SUFHakMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9DLFVBQVUsQ0FBQyxnQkFBZ0IsR0FLOUQ7O0FBRUQ7SUFBdUMscUNBQThCO0lBRW5FLDJCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxVQUFVLENBQUMsbUJBQW1CLEdBS3BFOztBQUVEO0lBQW1DLGlDQUEyQjtJQUU1RCx1QkFBbUIsT0FBNEI7UUFBL0MsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUR0QyxVQUFJLEdBQUcsZ0JBQWdCLENBQUM7O0lBR2pDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFMRCxDQUFtQyxVQUFVLENBQUMsZ0JBQWdCLEdBSzdEOztBQUVEO0lBQXVDLHFDQUEyQjtJQUVoRSwyQkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxTQUNsQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFHdEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FLakU7O0FBRUQ7SUFBMEMsd0NBQThCO0lBRXRFLDhCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFMRCxDQUEwQyxVQUFVLENBQUMsbUJBQW1CLEdBS3ZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU1RPUkVfRklOREVSX0RBVEEgfSBmcm9tICcuLi9zdG9yZS1maW5kZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgRklORF9TVE9SRVNfT05fSE9MRCA9ICdbU3RvcmVGaW5kZXJdIE9uIEhvbGQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVTID0gJ1tTdG9yZUZpbmRlcl0gRmluZCBTdG9yZXMnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVTX0ZBSUwgPSAnW1N0b3JlRmluZGVyXSBGaW5kIFN0b3JlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFU19TVUNDRVNTID0gJ1tTdG9yZUZpbmRlcl0gRmluZCBTdG9yZXMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFX0JZX0lEID0gJ1tTdG9yZUZpbmRlcl0gRmluZCBhIFN0b3JlIGJ5IElkJztcbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFX0JZX0lEX0ZBSUwgPSAnW1N0b3JlRmluZGVyXSBGaW5kIGEgU3RvcmUgYnkgSWQgRmFpbCc7XG5leHBvcnQgY29uc3QgRklORF9TVE9SRV9CWV9JRF9TVUNDRVNTID1cbiAgJ1tTdG9yZUZpbmRlcl0gRmluZCBhIFN0b3JlIGJ5IElkIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgRmluZFN0b3Jlc09uSG9sZCBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFU19PTl9IT0xEO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRVM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBxdWVyeVRleHQ6IHN0cmluZztcbiAgICAgIHNlYXJjaENvbmZpZz86IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnO1xuICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBHZW9Qb2ludDtcbiAgICAgIHVzZU15TG9jYXRpb24/OiBib29sZWFuO1xuICAgICAgY291bnRyeUlzb0NvZGU/OiBzdHJpbmc7XG4gICAgICByYWRpdXM/OiBudW1iZXI7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXNGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXNTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZUJ5SWQgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRV9CWV9JRDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgc3RvcmVJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZUJ5SWRGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVfQllfSURfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3JlQnlJZFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRV9CWV9JRF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEZpbmRTdG9yZXNBY3Rpb24gPVxuICB8IEZpbmRTdG9yZXNPbkhvbGRcbiAgfCBGaW5kU3RvcmVzXG4gIHwgRmluZFN0b3Jlc0ZhaWxcbiAgfCBGaW5kU3RvcmVzU3VjY2Vzc1xuICB8IEZpbmRTdG9yZUJ5SWRcbiAgfCBGaW5kU3RvcmVCeUlkRmFpbFxuICB8IEZpbmRTdG9yZUJ5SWRTdWNjZXNzO1xuIl19