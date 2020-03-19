import { __extends } from "tslib";
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { MULTI_CART_DATA } from '../multi-cart-state';
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
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CART_ADD_ENTRY;
        return _this;
    }
    return CartAddEntry;
}(EntityProcessesIncrementAction));
export { CartAddEntry };
var CartAddEntrySuccess = /** @class */ (function (_super) {
    __extends(CartAddEntrySuccess, _super);
    function CartAddEntrySuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CART_ADD_ENTRY_SUCCESS;
        return _this;
    }
    return CartAddEntrySuccess;
}(EntityProcessesDecrementAction));
export { CartAddEntrySuccess };
var CartAddEntryFail = /** @class */ (function (_super) {
    __extends(CartAddEntryFail, _super);
    function CartAddEntryFail(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CART_ADD_ENTRY_FAIL;
        return _this;
    }
    return CartAddEntryFail;
}(EntityProcessesDecrementAction));
export { CartAddEntryFail };
var CartRemoveEntry = /** @class */ (function (_super) {
    __extends(CartRemoveEntry, _super);
    function CartRemoveEntry(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_ENTRY;
        return _this;
    }
    return CartRemoveEntry;
}(EntityProcessesIncrementAction));
export { CartRemoveEntry };
var CartRemoveEntrySuccess = /** @class */ (function (_super) {
    __extends(CartRemoveEntrySuccess, _super);
    function CartRemoveEntrySuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_ENTRY_SUCCESS;
        return _this;
    }
    return CartRemoveEntrySuccess;
}(EntityProcessesDecrementAction));
export { CartRemoveEntrySuccess };
var CartRemoveEntryFail = /** @class */ (function (_super) {
    __extends(CartRemoveEntryFail, _super);
    function CartRemoveEntryFail(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_ENTRY_FAIL;
        return _this;
    }
    return CartRemoveEntryFail;
}(EntityProcessesDecrementAction));
export { CartRemoveEntryFail };
var CartUpdateEntry = /** @class */ (function (_super) {
    __extends(CartUpdateEntry, _super);
    function CartUpdateEntry(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CART_UPDATE_ENTRY;
        return _this;
    }
    return CartUpdateEntry;
}(EntityProcessesIncrementAction));
export { CartUpdateEntry };
var CartUpdateEntrySuccess = /** @class */ (function (_super) {
    __extends(CartUpdateEntrySuccess, _super);
    function CartUpdateEntrySuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CART_UPDATE_ENTRY_SUCCESS;
        return _this;
    }
    return CartUpdateEntrySuccess;
}(EntityProcessesDecrementAction));
export { CartUpdateEntrySuccess };
var CartUpdateEntryFail = /** @class */ (function (_super) {
    __extends(CartUpdateEntryFail, _super);
    function CartUpdateEntryFail(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CART_UPDATE_ENTRY_FAIL;
        return _this;
    }
    return CartUpdateEntryFail;
}(EntityProcessesDecrementAction));
export { CartUpdateEntryFail };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQtZW50cnkuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDhCQUE4QixHQUMvQixNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsd0JBQXdCLENBQUM7QUFDdkQsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQUcsZ0NBQWdDLENBQUM7QUFDdkUsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsNkJBQTZCLENBQUM7QUFDakUsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsMkJBQTJCLENBQUM7QUFDN0QsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUcsbUNBQW1DLENBQUM7QUFDN0UsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQUcsZ0NBQWdDLENBQUM7QUFFdkUsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsMkJBQTJCLENBQUM7QUFDN0QsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUcsbUNBQW1DLENBQUM7QUFDN0UsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQUcsZ0NBQWdDLENBQUM7QUFFdkU7SUFBa0MsZ0NBQThCO0lBRTlELHNCQUNTLE9BS047UUFOSCxZQVFFLGtCQUFNLGVBQWUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQ3ZDO1FBUlEsYUFBTyxHQUFQLE9BQU8sQ0FLYjtRQVBNLFVBQUksR0FBRyxjQUFjLENBQUM7O0lBVS9CLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFaRCxDQUFrQyw4QkFBOEIsR0FZL0Q7O0FBRUQ7SUFBeUMsdUNBQThCO0lBRXJFLDZCQUNTLE9BQStEO1FBRHhFLFlBR0Usa0JBQU0sZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FDdkM7UUFIUSxhQUFPLEdBQVAsT0FBTyxDQUF3RDtRQUYvRCxVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBS3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFQRCxDQUF5Qyw4QkFBOEIsR0FPdEU7O0FBRUQ7SUFBc0Msb0NBQThCO0lBRWxFLDBCQUFtQixPQUF1RDtRQUExRSxZQUNFLGtCQUFNLGVBQWUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQ3ZDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWdEO1FBRGpFLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXNDLDhCQUE4QixHQUtuRTs7QUFFRDtJQUFxQyxtQ0FBOEI7SUFFakUseUJBQ1MsT0FBMEQ7UUFEbkUsWUFHRSxrQkFBTSxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUN2QztRQUhRLGFBQU8sR0FBUCxPQUFPLENBQW1EO1FBRjFELFVBQUksR0FBRyxpQkFBaUIsQ0FBQzs7SUFLbEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVBELENBQXFDLDhCQUE4QixHQU9sRTs7QUFFRDtJQUE0QywwQ0FBOEI7SUFFeEUsZ0NBQW1CLE9BQTJDO1FBQTlELFlBQ0Usa0JBQU0sZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FDdkM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUcxQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsOEJBQThCLEdBS3pFOztBQUVEO0lBQXlDLHVDQUE4QjtJQUVyRSw2QkFBbUIsT0FBdUQ7UUFBMUUsWUFDRSxrQkFBTSxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUN2QztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFnRDtRQURqRSxVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5Qyw4QkFBOEIsR0FLdEU7O0FBRUQ7SUFBcUMsbUNBQThCO0lBRWpFLHlCQUNTLE9BS047UUFOSCxZQVFFLGtCQUFNLGVBQWUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQ3ZDO1FBUlEsYUFBTyxHQUFQLE9BQU8sQ0FLYjtRQVBNLFVBQUksR0FBRyxpQkFBaUIsQ0FBQzs7SUFVbEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVpELENBQXFDLDhCQUE4QixHQVlsRTs7QUFFRDtJQUE0QywwQ0FBOEI7SUFFeEUsZ0NBQW1CLE9BQTJDO1FBQTlELFlBQ0Usa0JBQU0sZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FDdkM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUcxQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsOEJBQThCLEdBS3pFOztBQUVEO0lBQXlDLHVDQUE4QjtJQUVyRSw2QkFBbUIsT0FBdUQ7UUFBMUUsWUFDRSxrQkFBTSxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUN2QztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFnRDtRQURqRSxVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5Qyw4QkFBOEIsR0FLdEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24sXG4gIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfREFUQSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9BRERfRU5UUlkgPSAnW0NhcnQtZW50cnldIEFkZCBFbnRyeSc7XG5leHBvcnQgY29uc3QgQ0FSVF9BRERfRU5UUllfU1VDQ0VTUyA9ICdbQ2FydC1lbnRyeV0gQWRkIEVudHJ5IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfQUREX0VOVFJZX0ZBSUwgPSAnW0NhcnQtZW50cnldIEFkZCBFbnRyeSBGYWlsJztcbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9FTlRSWSA9ICdbQ2FydC1lbnRyeV0gUmVtb3ZlIEVudHJ5JztcbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTID0gJ1tDYXJ0LWVudHJ5XSBSZW1vdmUgRW50cnkgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfRU5UUllfRkFJTCA9ICdbQ2FydC1lbnRyeV0gUmVtb3ZlIEVudHJ5IEZhaWwnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9VUERBVEVfRU5UUlkgPSAnW0NhcnQtZW50cnldIFVwZGF0ZSBFbnRyeSc7XG5leHBvcnQgY29uc3QgQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUyA9ICdbQ2FydC1lbnRyeV0gVXBkYXRlIEVudHJ5IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfVVBEQVRFX0VOVFJZX0ZBSUwgPSAnW0NhcnQtZW50cnldIFVwZGF0ZSBFbnRyeSBGYWlsJztcblxuZXhwb3J0IGNsYXNzIENhcnRBZGRFbnRyeSBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0FERF9FTlRSWTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICAgICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkRW50cnlTdWNjZXNzIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX0VOVFJZX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRBZGRFbnRyeUZhaWwgZXh0ZW5kcyBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9BRERfRU5UUllfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBlcnJvcjogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZUVudHJ5IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUkVNT1ZFX0VOVFJZO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyBjYXJ0SWQ6IHN0cmluZzsgdXNlcklkOiBzdHJpbmc7IGVudHJ5OiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZUVudHJ5U3VjY2VzcyBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UmVtb3ZlRW50cnlGYWlsIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUkVNT1ZFX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGVycm9yOiBhbnk7IGNhcnRJZDogc3RyaW5nOyB1c2VySWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRVcGRhdGVFbnRyeSBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1VQREFURV9FTlRSWTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBlbnRyeTogc3RyaW5nO1xuICAgICAgcXR5OiBudW1iZXI7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFVwZGF0ZUVudHJ5U3VjY2VzcyBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0VXBkYXRlRW50cnlGYWlsIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfVVBEQVRFX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGVycm9yOiBhbnk7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FydEVudHJ5QWN0aW9uID1cbiAgfCBDYXJ0QWRkRW50cnlcbiAgfCBDYXJ0QWRkRW50cnlTdWNjZXNzXG4gIHwgQ2FydEFkZEVudHJ5RmFpbFxuICB8IENhcnRSZW1vdmVFbnRyeVxuICB8IENhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NcbiAgfCBDYXJ0UmVtb3ZlRW50cnlGYWlsXG4gIHwgQ2FydFVwZGF0ZUVudHJ5XG4gIHwgQ2FydFVwZGF0ZUVudHJ5U3VjY2Vzc1xuICB8IENhcnRVcGRhdGVFbnRyeUZhaWw7XG4iXX0=