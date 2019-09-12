/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { STORE_FINDER_DATA } from '../store-finder-state';
/** @type {?} */
export var VIEW_ALL_STORES = '[StoreFinder] View All Stores';
/** @type {?} */
export var VIEW_ALL_STORES_FAIL = '[StoreFinder] View All Stores Fail';
/** @type {?} */
export var VIEW_ALL_STORES_SUCCESS = '[StoreFinder] View All Stores Success';
var ViewAllStores = /** @class */ (function (_super) {
    tslib_1.__extends(ViewAllStores, _super);
    function ViewAllStores() {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.type = VIEW_ALL_STORES;
        return _this;
    }
    return ViewAllStores;
}(StateLoaderActions.LoaderLoadAction));
export { ViewAllStores };
if (false) {
    /** @type {?} */
    ViewAllStores.prototype.type;
}
var ViewAllStoresFail = /** @class */ (function (_super) {
    tslib_1.__extends(ViewAllStoresFail, _super);
    function ViewAllStoresFail(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
        _this.payload = payload;
        _this.type = VIEW_ALL_STORES_FAIL;
        return _this;
    }
    return ViewAllStoresFail;
}(StateLoaderActions.LoaderFailAction));
export { ViewAllStoresFail };
if (false) {
    /** @type {?} */
    ViewAllStoresFail.prototype.type;
    /** @type {?} */
    ViewAllStoresFail.prototype.payload;
}
var ViewAllStoresSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(ViewAllStoresSuccess, _super);
    function ViewAllStoresSuccess(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = VIEW_ALL_STORES_SUCCESS;
        return _this;
    }
    return ViewAllStoresSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { ViewAllStoresSuccess };
if (false) {
    /** @type {?} */
    ViewAllStoresSuccess.prototype.type;
    /** @type {?} */
    ViewAllStoresSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvYWN0aW9ucy92aWV3LWFsbC1zdG9yZXMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTFELE1BQU0sS0FBTyxlQUFlLEdBQUcsK0JBQStCOztBQUM5RCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsb0NBQW9DOztBQUN4RSxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsdUNBQXVDO0FBRTlFO0lBQW1DLHlDQUFtQztJQUVwRTtRQUFBLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFIUSxVQUFJLEdBQUcsZUFBZSxDQUFDOztJQUdoQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3JFOzs7O0lBSkMsNkJBQWdDOztBQU1sQztJQUF1Qyw2Q0FBbUM7SUFFeEUsMkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsU0FDbEM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBR3JDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLekU7Ozs7SUFKQyxpQ0FBcUM7O0lBQ3pCLG9DQUFtQjs7QUFLakM7SUFBMEMsZ0RBQXNDO0lBRTlFLDhCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsdUJBQXVCLENBQUM7O0lBR3hDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFMRCxDQUEwQyxrQkFBa0IsQ0FBQyxtQkFBbUIsR0FLL0U7Ozs7SUFKQyxvQ0FBd0M7O0lBQzVCLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IFNUT1JFX0ZJTkRFUl9EQVRBIH0gZnJvbSAnLi4vc3RvcmUtZmluZGVyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IFZJRVdfQUxMX1NUT1JFUyA9ICdbU3RvcmVGaW5kZXJdIFZpZXcgQWxsIFN0b3Jlcyc7XG5leHBvcnQgY29uc3QgVklFV19BTExfU1RPUkVTX0ZBSUwgPSAnW1N0b3JlRmluZGVyXSBWaWV3IEFsbCBTdG9yZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgVklFV19BTExfU1RPUkVTX1NVQ0NFU1MgPSAnW1N0b3JlRmluZGVyXSBWaWV3IEFsbCBTdG9yZXMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3QWxsU3RvcmVzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVklFV19BTExfU1RPUkVTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZXdBbGxTdG9yZXNGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVklFV19BTExfU1RPUkVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZXdBbGxTdG9yZXNTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVklFV19BTExfU1RPUkVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVmlld0FsbFN0b3Jlc0FjdGlvbiA9XG4gIHwgVmlld0FsbFN0b3Jlc1xuICB8IFZpZXdBbGxTdG9yZXNGYWlsXG4gIHwgVmlld0FsbFN0b3Jlc1N1Y2Nlc3M7XG4iXX0=