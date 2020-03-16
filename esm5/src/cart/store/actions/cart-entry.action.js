import { __extends } from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { CART_DATA } from '../cart-state';
export var CART_ADD_ENTRY = '[Cart-entry] Add Entry';
export var CART_ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
export var CART_ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
export var CART_REMOVE_ENTRY = '[Cart-entry] Remove Entry';
export var CART_REMOVE_ENTRY_SUCCESS = '[Cart-entry] Remove Entry Success';
export var CART_REMOVE_ENTRY_FAIL = '[Cart-entry] Remove Entry Fail';
export var CART_UPDATE_ENTRY = '[Cart-entry] Update Entry';
export var CART_UPDATE_ENTRY_SUCCESS = '[Cart-entry] Update Entry Success';
export var CART_UPDATE_ENTRY_FAIL = '[Cart-entry] Update Entry Fail';
var CartAddEntry = /** @class */ (function (_super) {
    __extends(CartAddEntry, _super);
    function CartAddEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_ADD_ENTRY;
        return _this;
    }
    return CartAddEntry;
}(StateLoaderActions.LoaderLoadAction));
export { CartAddEntry };
var CartAddEntrySuccess = /** @class */ (function (_super) {
    __extends(CartAddEntrySuccess, _super);
    function CartAddEntrySuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_ADD_ENTRY_SUCCESS;
        return _this;
    }
    return CartAddEntrySuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { CartAddEntrySuccess };
var CartAddEntryFail = /** @class */ (function (_super) {
    __extends(CartAddEntryFail, _super);
    function CartAddEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CART_ADD_ENTRY_FAIL;
        return _this;
    }
    return CartAddEntryFail;
}(StateLoaderActions.LoaderFailAction));
export { CartAddEntryFail };
var CartRemoveEntry = /** @class */ (function (_super) {
    __extends(CartRemoveEntry, _super);
    function CartRemoveEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_ENTRY;
        return _this;
    }
    return CartRemoveEntry;
}(StateLoaderActions.LoaderLoadAction));
export { CartRemoveEntry };
var CartRemoveEntrySuccess = /** @class */ (function (_super) {
    __extends(CartRemoveEntrySuccess, _super);
    function CartRemoveEntrySuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_ENTRY_SUCCESS;
        return _this;
    }
    return CartRemoveEntrySuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { CartRemoveEntrySuccess };
var CartRemoveEntryFail = /** @class */ (function (_super) {
    __extends(CartRemoveEntryFail, _super);
    function CartRemoveEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_ENTRY_FAIL;
        return _this;
    }
    return CartRemoveEntryFail;
}(StateLoaderActions.LoaderFailAction));
export { CartRemoveEntryFail };
var CartUpdateEntry = /** @class */ (function (_super) {
    __extends(CartUpdateEntry, _super);
    function CartUpdateEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_UPDATE_ENTRY;
        return _this;
    }
    return CartUpdateEntry;
}(StateLoaderActions.LoaderLoadAction));
export { CartUpdateEntry };
var CartUpdateEntrySuccess = /** @class */ (function (_super) {
    __extends(CartUpdateEntrySuccess, _super);
    function CartUpdateEntrySuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_UPDATE_ENTRY_SUCCESS;
        return _this;
    }
    return CartUpdateEntrySuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { CartUpdateEntrySuccess };
var CartUpdateEntryFail = /** @class */ (function (_super) {
    __extends(CartUpdateEntryFail, _super);
    function CartUpdateEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CART_UPDATE_ENTRY_FAIL;
        return _this;
    }
    return CartUpdateEntryFail;
}(StateLoaderActions.LoaderFailAction));
export { CartUpdateEntryFail };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQtZW50cnkuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRyx3QkFBd0IsQ0FBQztBQUN2RCxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRyxnQ0FBZ0MsQ0FBQztBQUN2RSxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyw2QkFBNkIsQ0FBQztBQUNqRSxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRywyQkFBMkIsQ0FBQztBQUM3RCxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxtQ0FBbUMsQ0FBQztBQUM3RSxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRyxnQ0FBZ0MsQ0FBQztBQUV2RSxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRywyQkFBMkIsQ0FBQztBQUM3RCxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxtQ0FBbUMsQ0FBQztBQUM3RSxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRyxnQ0FBZ0MsQ0FBQztBQUV2RTtJQUFrQyxnQ0FBbUM7SUFFbkUsc0JBQ1MsT0FLTjtRQU5ILFlBUUUsa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBUlEsYUFBTyxHQUFQLE9BQU8sQ0FLYjtRQVBNLFVBQUksR0FBRyxjQUFjLENBQUM7O0lBVS9CLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFaRCxDQUFrQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FZcEU7O0FBRUQ7SUFBeUMsdUNBQXNDO0lBRTdFLDZCQUNTLE9BQStEO1FBRHhFLFlBR0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBSFEsYUFBTyxHQUFQLE9BQU8sQ0FBd0Q7UUFGL0QsVUFBSSxHQUFHLHNCQUFzQixDQUFDOztJQUt2QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBeUMsa0JBQWtCLENBQUMsbUJBQW1CLEdBTzlFOztBQUVEO0lBQXNDLG9DQUFtQztJQUV2RSwwQkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FDMUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFMRCxDQUFzQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLeEU7O0FBRUQ7SUFBcUMsbUNBQW1DO0lBRXRFLHlCQUNTLE9BQTBEO1FBRG5FLFlBR0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBSFEsYUFBTyxHQUFQLE9BQU8sQ0FBbUQ7UUFGMUQsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUtsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBcUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBT3ZFOztBQUVEO0lBQTRDLDBDQUFzQztJQUVoRixnQ0FBbUIsT0FBMkM7UUFBOUQsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUcxQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsa0JBQWtCLENBQUMsbUJBQW1CLEdBS2pGOztBQUVEO0lBQXlDLHVDQUFtQztJQUUxRSw2QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FDMUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLM0U7O0FBRUQ7SUFBcUMsbUNBQW1DO0lBRXRFLHlCQUNTLE9BS047UUFOSCxZQVFFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQVJRLGFBQU8sR0FBUCxPQUFPLENBS2I7UUFQTSxVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBVWxDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFaRCxDQUFxQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FZdkU7O0FBRUQ7SUFBNEMsMENBQXNDO0lBRWhGLGdDQUFtQixPQUEyQztRQUE5RCxZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxVQUFJLEdBQUcseUJBQXlCLENBQUM7O0lBRzFDLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0QyxrQkFBa0IsQ0FBQyxtQkFBbUIsR0FLakY7O0FBRUQ7SUFBeUMsdUNBQW1DO0lBRTFFLDZCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUMxQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxzQkFBc0IsQ0FBQzs7SUFHdkMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLGtCQUFrQixDQUFDLGdCQUFnQixHQUszRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IENBUlRfREFUQSB9IGZyb20gJy4uL2NhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9BRERfRU5UUlkgPSAnW0NhcnQtZW50cnldIEFkZCBFbnRyeSc7XG5leHBvcnQgY29uc3QgQ0FSVF9BRERfRU5UUllfU1VDQ0VTUyA9ICdbQ2FydC1lbnRyeV0gQWRkIEVudHJ5IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfQUREX0VOVFJZX0ZBSUwgPSAnW0NhcnQtZW50cnldIEFkZCBFbnRyeSBGYWlsJztcbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9FTlRSWSA9ICdbQ2FydC1lbnRyeV0gUmVtb3ZlIEVudHJ5JztcbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTID0gJ1tDYXJ0LWVudHJ5XSBSZW1vdmUgRW50cnkgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfRU5UUllfRkFJTCA9ICdbQ2FydC1lbnRyeV0gUmVtb3ZlIEVudHJ5IEZhaWwnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9VUERBVEVfRU5UUlkgPSAnW0NhcnQtZW50cnldIFVwZGF0ZSBFbnRyeSc7XG5leHBvcnQgY29uc3QgQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUyA9ICdbQ2FydC1lbnRyeV0gVXBkYXRlIEVudHJ5IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfVVBEQVRFX0VOVFJZX0ZBSUwgPSAnW0NhcnQtZW50cnldIFVwZGF0ZSBFbnRyeSBGYWlsJztcblxuZXhwb3J0IGNsYXNzIENhcnRBZGRFbnRyeSBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX0VOVFJZO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gICAgICBxdWFudGl0eTogbnVtYmVyO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydEFkZEVudHJ5U3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX0VOVFJZX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgKSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydEFkZEVudHJ5RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UmVtb3ZlRW50cnkgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9FTlRSWTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgY2FydElkOiBzdHJpbmc7IHVzZXJJZDogc3RyaW5nOyBlbnRyeTogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZUVudHJ5U3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUkVNT1ZFX0VOVFJZX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZUVudHJ5RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUkVNT1ZFX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0VXBkYXRlRW50cnkgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1VQREFURV9FTlRSWTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBlbnRyeTogc3RyaW5nO1xuICAgICAgcXR5OiBudW1iZXI7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0VXBkYXRlRW50cnlTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0VXBkYXRlRW50cnlGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9VUERBVEVfRU5UUllfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FydEVudHJ5QWN0aW9uID1cbiAgfCBDYXJ0QWRkRW50cnlcbiAgfCBDYXJ0QWRkRW50cnlTdWNjZXNzXG4gIHwgQ2FydEFkZEVudHJ5RmFpbFxuICB8IENhcnRSZW1vdmVFbnRyeVxuICB8IENhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NcbiAgfCBDYXJ0UmVtb3ZlRW50cnlGYWlsXG4gIHwgQ2FydFVwZGF0ZUVudHJ5XG4gIHwgQ2FydFVwZGF0ZUVudHJ5U3VjY2Vzc1xuICB8IENhcnRVcGRhdGVFbnRyeUZhaWw7XG4iXX0=