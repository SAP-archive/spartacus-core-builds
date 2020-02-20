import { __extends } from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { CUSTOMER_SEARCH_DATA } from '../asm-state';
export var CUSTOMER_SEARCH = '[Asm] Customer Search';
export var CUSTOMER_SEARCH_FAIL = '[Asm] Customer Search Fail';
export var CUSTOMER_SEARCH_SUCCESS = '[Asm] Customer Search Success';
export var CUSTOMER_SEARCH_RESET = '[Asm] Customer Search Reset';
var CustomerSearch = /** @class */ (function (_super) {
    __extends(CustomerSearch, _super);
    function CustomerSearch(payload) {
        var _this = _super.call(this, CUSTOMER_SEARCH_DATA) || this;
        _this.payload = payload;
        _this.type = CUSTOMER_SEARCH;
        return _this;
    }
    return CustomerSearch;
}(StateLoaderActions.LoaderLoadAction));
export { CustomerSearch };
var CustomerSearchFail = /** @class */ (function (_super) {
    __extends(CustomerSearchFail, _super);
    function CustomerSearchFail(payload) {
        var _this = _super.call(this, CUSTOMER_SEARCH_DATA) || this;
        _this.payload = payload;
        _this.type = CUSTOMER_SEARCH_FAIL;
        return _this;
    }
    return CustomerSearchFail;
}(StateLoaderActions.LoaderFailAction));
export { CustomerSearchFail };
var CustomerSearchSuccess = /** @class */ (function (_super) {
    __extends(CustomerSearchSuccess, _super);
    function CustomerSearchSuccess(payload) {
        var _this = _super.call(this, CUSTOMER_SEARCH_DATA) || this;
        _this.payload = payload;
        _this.type = CUSTOMER_SEARCH_SUCCESS;
        return _this;
    }
    return CustomerSearchSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { CustomerSearchSuccess };
var CustomerSearchReset = /** @class */ (function (_super) {
    __extends(CustomerSearchReset, _super);
    function CustomerSearchReset() {
        var _this = _super.call(this, CUSTOMER_SEARCH_DATA) || this;
        _this.type = CUSTOMER_SEARCH_RESET;
        return _this;
    }
    return CustomerSearchReset;
}(StateLoaderActions.LoaderResetAction));
export { CustomerSearchReset };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zdG9yZS9hY3Rpb25zL2N1c3RvbWVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXBELE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQztBQUN2RCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyw0QkFBNEIsQ0FBQztBQUNqRSxNQUFNLENBQUMsSUFBTSx1QkFBdUIsR0FBRywrQkFBK0IsQ0FBQztBQUN2RSxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyw2QkFBNkIsQ0FBQztBQUVuRTtJQUFvQyxrQ0FBbUM7SUFFckUsd0JBQW1CLE9BQThCO1FBQWpELFlBQ0Usa0JBQU0sb0JBQW9CLENBQUMsU0FDNUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFEeEMsVUFBSSxHQUFHLGVBQWUsQ0FBQzs7SUFHaEMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9DLGtCQUFrQixDQUFDLGdCQUFnQixHQUt0RTs7QUFFRDtJQUF3QyxzQ0FBbUM7SUFFekUsNEJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxvQkFBb0IsQ0FBQyxTQUM1QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxvQkFBb0IsQ0FBQzs7SUFHckMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLGtCQUFrQixDQUFDLGdCQUFnQixHQUsxRTs7QUFFRDtJQUEyQyx5Q0FBc0M7SUFFL0UsK0JBQW1CLE9BQTJCO1FBQTlDLFlBQ0Usa0JBQU0sb0JBQW9CLENBQUMsU0FDNUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFEckMsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsa0JBQWtCLENBQUMsbUJBQW1CLEdBS2hGOztBQUVEO0lBQXlDLHVDQUFvQztJQUUzRTtRQUFBLFlBQ0Usa0JBQU0sb0JBQW9CLENBQUMsU0FDNUI7UUFIUSxVQUFJLEdBQUcscUJBQXFCLENBQUM7O0lBR3RDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxrQkFBa0IsQ0FBQyxpQkFBaUIsR0FLNUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQge1xuICBDdXN0b21lclNlYXJjaE9wdGlvbnMsXG4gIEN1c3RvbWVyU2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2FzbS5tb2RlbHMnO1xuaW1wb3J0IHsgQ1VTVE9NRVJfU0VBUkNIX0RBVEEgfSBmcm9tICcuLi9hc20tc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfU0VBUkNIID0gJ1tBc21dIEN1c3RvbWVyIFNlYXJjaCc7XG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfU0VBUkNIX0ZBSUwgPSAnW0FzbV0gQ3VzdG9tZXIgU2VhcmNoIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENVU1RPTUVSX1NFQVJDSF9TVUNDRVNTID0gJ1tBc21dIEN1c3RvbWVyIFNlYXJjaCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDVVNUT01FUl9TRUFSQ0hfUkVTRVQgPSAnW0FzbV0gQ3VzdG9tZXIgU2VhcmNoIFJlc2V0JztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2VhcmNoIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1VTVE9NRVJfU0VBUkNIO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ3VzdG9tZXJTZWFyY2hPcHRpb25zKSB7XG4gICAgc3VwZXIoQ1VTVE9NRVJfU0VBUkNIX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlYXJjaEZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDVVNUT01FUl9TRUFSQ0hfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENVU1RPTUVSX1NFQVJDSF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTZWFyY2hTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1VTVE9NRVJfU0VBUkNIX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDdXN0b21lclNlYXJjaFBhZ2UpIHtcbiAgICBzdXBlcihDVVNUT01FUl9TRUFSQ0hfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2VhcmNoUmVzZXQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1VTVE9NRVJfU0VBUkNIX1JFU0VUO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihDVVNUT01FUl9TRUFSQ0hfREFUQSk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBDdXN0b21lckFjdGlvbiA9XG4gIHwgQ3VzdG9tZXJTZWFyY2hcbiAgfCBDdXN0b21lclNlYXJjaEZhaWxcbiAgfCBDdXN0b21lclNlYXJjaFN1Y2Nlc3NcbiAgfCBDdXN0b21lclNlYXJjaFJlc2V0O1xuIl19