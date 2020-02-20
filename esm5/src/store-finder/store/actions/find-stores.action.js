import { __extends } from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
export { FindStoreByIdSuccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9hY3Rpb25zL2ZpbmQtc3RvcmVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsdUJBQXVCLENBQUM7QUFDM0QsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLDJCQUEyQixDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLGdDQUFnQyxDQUFDO0FBQ2pFLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLG1DQUFtQyxDQUFDO0FBRXZFLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLGtDQUFrQyxDQUFDO0FBQ25FLE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHLHVDQUF1QyxDQUFDO0FBQzdFLE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUNuQywwQ0FBMEMsQ0FBQztBQUU3QztJQUFzQyxvQ0FBbUM7SUFFdkU7UUFBQSxZQUNFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBSFEsVUFBSSxHQUFHLG1CQUFtQixDQUFDOztJQUdwQyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBc0Msa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3hFOztBQUVEO0lBQWdDLDhCQUFtQztJQUVqRSxvQkFDUyxPQU1OO1FBUEgsWUFTRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQVRRLGFBQU8sR0FBUCxPQUFPLENBTWI7UUFSTSxVQUFJLEdBQUcsV0FBVyxDQUFDOztJQVc1QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBZ0Msa0JBQWtCLENBQUMsZ0JBQWdCLEdBYWxFOztBQUVEO0lBQW9DLGtDQUFtQztJQUVyRSx3QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxTQUNsQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7SUFHakMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9DLGtCQUFrQixDQUFDLGdCQUFnQixHQUt0RTs7QUFFRDtJQUF1QyxxQ0FBc0M7SUFFM0UsMkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVDLGtCQUFrQixDQUFDLG1CQUFtQixHQUs1RTs7QUFFRDtJQUFtQyxpQ0FBbUM7SUFFcEUsdUJBQW1CLE9BQTRCO1FBQS9DLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFEdEMsVUFBSSxHQUFHLGdCQUFnQixDQUFDOztJQUdqQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3JFOztBQUVEO0lBQXVDLHFDQUFtQztJQUV4RSwyQkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxTQUNsQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFHdEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVDLGtCQUFrQixDQUFDLGdCQUFnQixHQUt6RTs7QUFFRDtJQUEwQyx3Q0FBc0M7SUFFOUUsOEJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTBDLGtCQUFrQixDQUFDLG1CQUFtQixHQUsvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdlb1BvaW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU1RPUkVfRklOREVSX0RBVEEgfSBmcm9tICcuLi9zdG9yZS1maW5kZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgRklORF9TVE9SRVNfT05fSE9MRCA9ICdbU3RvcmVGaW5kZXJdIE9uIEhvbGQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVTID0gJ1tTdG9yZUZpbmRlcl0gRmluZCBTdG9yZXMnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVTX0ZBSUwgPSAnW1N0b3JlRmluZGVyXSBGaW5kIFN0b3JlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFU19TVUNDRVNTID0gJ1tTdG9yZUZpbmRlcl0gRmluZCBTdG9yZXMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFX0JZX0lEID0gJ1tTdG9yZUZpbmRlcl0gRmluZCBhIFN0b3JlIGJ5IElkJztcbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFX0JZX0lEX0ZBSUwgPSAnW1N0b3JlRmluZGVyXSBGaW5kIGEgU3RvcmUgYnkgSWQgRmFpbCc7XG5leHBvcnQgY29uc3QgRklORF9TVE9SRV9CWV9JRF9TVUNDRVNTID1cbiAgJ1tTdG9yZUZpbmRlcl0gRmluZCBhIFN0b3JlIGJ5IElkIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgRmluZFN0b3Jlc09uSG9sZCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVTX09OX0hPTEQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3JlcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgcXVlcnlUZXh0OiBzdHJpbmc7XG4gICAgICBzZWFyY2hDb25maWc/OiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZztcbiAgICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnQ7XG4gICAgICB1c2VNeUxvY2F0aW9uPzogYm9vbGVhbjtcbiAgICAgIGNvdW50cnlJc29Db2RlPzogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVzRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXNTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3JlQnlJZCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVfQllfSUQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHN0b3JlSWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVCeUlkRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVfQllfSURfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3JlQnlJZFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFX0JZX0lEX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRmluZFN0b3Jlc0FjdGlvbiA9XG4gIHwgRmluZFN0b3Jlc09uSG9sZFxuICB8IEZpbmRTdG9yZXNcbiAgfCBGaW5kU3RvcmVzRmFpbFxuICB8IEZpbmRTdG9yZXNTdWNjZXNzXG4gIHwgRmluZFN0b3JlQnlJZFxuICB8IEZpbmRTdG9yZUJ5SWRGYWlsXG4gIHwgRmluZFN0b3JlQnlJZFN1Y2Nlc3M7XG4iXX0=