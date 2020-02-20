import { __extends } from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
export { ViewAllStoresSuccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvYWN0aW9ucy92aWV3LWFsbC1zdG9yZXMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsK0JBQStCLENBQUM7QUFDL0QsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsb0NBQW9DLENBQUM7QUFDekUsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsdUNBQXVDLENBQUM7QUFFL0U7SUFBbUMsaUNBQW1DO0lBRXBFO1FBQUEsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUhRLFVBQUksR0FBRyxlQUFlLENBQUM7O0lBR2hDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFMRCxDQUFtQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLckU7O0FBRUQ7SUFBdUMscUNBQW1DO0lBRXhFLDJCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0saUJBQWlCLEVBQUUsT0FBTyxDQUFDLFNBQ2xDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLG9CQUFvQixDQUFDOztJQUdyQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBdUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3pFOztBQUVEO0lBQTBDLHdDQUFzQztJQUU5RSw4QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMEMsa0JBQWtCLENBQUMsbUJBQW1CLEdBSy9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgU1RPUkVfRklOREVSX0RBVEEgfSBmcm9tICcuLi9zdG9yZS1maW5kZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgVklFV19BTExfU1RPUkVTID0gJ1tTdG9yZUZpbmRlcl0gVmlldyBBbGwgU3RvcmVzJztcbmV4cG9ydCBjb25zdCBWSUVXX0FMTF9TVE9SRVNfRkFJTCA9ICdbU3RvcmVGaW5kZXJdIFZpZXcgQWxsIFN0b3JlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBWSUVXX0FMTF9TVE9SRVNfU1VDQ0VTUyA9ICdbU3RvcmVGaW5kZXJdIFZpZXcgQWxsIFN0b3JlcyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIFZpZXdBbGxTdG9yZXMgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBWSUVXX0FMTF9TVE9SRVM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlld0FsbFN0b3Jlc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBWSUVXX0FMTF9TVE9SRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlld0FsbFN0b3Jlc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBWSUVXX0FMTF9TVE9SRVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBWaWV3QWxsU3RvcmVzQWN0aW9uID1cbiAgfCBWaWV3QWxsU3RvcmVzXG4gIHwgVmlld0FsbFN0b3Jlc0ZhaWxcbiAgfCBWaWV3QWxsU3RvcmVzU3VjY2VzcztcbiJdfQ==