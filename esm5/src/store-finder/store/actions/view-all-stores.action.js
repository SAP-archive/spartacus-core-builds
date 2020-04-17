import { __extends } from "tslib";
import { StateUtils } from '../../../state/utils/index';
import { STORE_FINDER_DATA } from '../store-finder-state';
export var VIEW_ALL_STORES = '[StoreFinder] View All Stores';
export var VIEW_ALL_STORES_FAIL = '[StoreFinder] View All Stores Fail';
export var VIEW_ALL_STORES_SUCCESS = '[StoreFinder] View All Stores Success';
var ViewAllStores = /** @class */ (function (_super) {
    __extends(ViewAllStores, _super);
    function ViewAllStores() {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.type = VIEW_ALL_STORES;
        return _this;
    }
    return ViewAllStores;
}(StateUtils.LoaderLoadAction));
export { ViewAllStores };
var ViewAllStoresFail = /** @class */ (function (_super) {
    __extends(ViewAllStoresFail, _super);
    function ViewAllStoresFail(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
        _this.payload = payload;
        _this.type = VIEW_ALL_STORES_FAIL;
        return _this;
    }
    return ViewAllStoresFail;
}(StateUtils.LoaderFailAction));
export { ViewAllStoresFail };
var ViewAllStoresSuccess = /** @class */ (function (_super) {
    __extends(ViewAllStoresSuccess, _super);
    function ViewAllStoresSuccess(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = VIEW_ALL_STORES_SUCCESS;
        return _this;
    }
    return ViewAllStoresSuccess;
}(StateUtils.LoaderSuccessAction));
export { ViewAllStoresSuccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvYWN0aW9ucy92aWV3LWFsbC1zdG9yZXMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLCtCQUErQixDQUFDO0FBQy9ELE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHLG9DQUFvQyxDQUFDO0FBQ3pFLE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFHLHVDQUF1QyxDQUFDO0FBRS9FO0lBQW1DLGlDQUEyQjtJQUU1RDtRQUFBLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFIUSxVQUFJLEdBQUcsZUFBZSxDQUFDOztJQUdoQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUMsVUFBVSxDQUFDLGdCQUFnQixHQUs3RDs7QUFFRDtJQUF1QyxxQ0FBMkI7SUFFaEUsMkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsU0FDbEM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBR3JDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxVQUFVLENBQUMsZ0JBQWdCLEdBS2pFOztBQUVEO0lBQTBDLHdDQUE4QjtJQUV0RSw4QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMEMsVUFBVSxDQUFDLG1CQUFtQixHQUt2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBTVE9SRV9GSU5ERVJfREFUQSB9IGZyb20gJy4uL3N0b3JlLWZpbmRlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBWSUVXX0FMTF9TVE9SRVMgPSAnW1N0b3JlRmluZGVyXSBWaWV3IEFsbCBTdG9yZXMnO1xuZXhwb3J0IGNvbnN0IFZJRVdfQUxMX1NUT1JFU19GQUlMID0gJ1tTdG9yZUZpbmRlcl0gVmlldyBBbGwgU3RvcmVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFZJRVdfQUxMX1NUT1JFU19TVUNDRVNTID0gJ1tTdG9yZUZpbmRlcl0gVmlldyBBbGwgU3RvcmVzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgVmlld0FsbFN0b3JlcyBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBWSUVXX0FMTF9TVE9SRVM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlld0FsbFN0b3Jlc0ZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVklFV19BTExfU1RPUkVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZXdBbGxTdG9yZXNTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFZJRVdfQUxMX1NUT1JFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFZpZXdBbGxTdG9yZXNBY3Rpb24gPVxuICB8IFZpZXdBbGxTdG9yZXNcbiAgfCBWaWV3QWxsU3RvcmVzRmFpbFxuICB8IFZpZXdBbGxTdG9yZXNTdWNjZXNzO1xuIl19