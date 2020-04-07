import { __extends } from "tslib";
import { EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, EntityProcessesLoaderResetAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { MULTI_CART_DATA } from '../multi-cart-state';
export var REMOVE_TEMP_CART = '[Multi Cart] Remove Temp Cart';
export var RESET_MULTI_CART_DETAILS = '[Multi Cart] Reset Cart Details';
export var SET_TEMP_CART = '[Multi Cart] Set Temp Cart';
export var REMOVE_CART = '[Multi Cart] Remove Cart';
export var CART_PROCESSES_INCREMENT = '[Multi Cart] Cart Processes Increment';
export var CART_PROCESSES_DECREMENT = '[Multi Cart] Cart Processes Decrement';
export var SET_ACTIVE_CART_ID = '[Multi Cart] Set Active Cart Id';
export var CLEAR_MULTI_CART_STATE = '[Multi Cart] Clear Cart State';
/**
 * To keep track of cart creation process we use cart with `temp-${uuid}` id.
 * After creating cart we switch to entity with `code` or `guid`.
 * We need `temp-${uuid}` cart entities for loading/error state.
 */
var RemoveTempCart = /** @class */ (function (_super) {
    __extends(RemoveTempCart, _super);
    function RemoveTempCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.tempCartId) || this;
        _this.payload = payload;
        _this.type = REMOVE_TEMP_CART;
        return _this;
    }
    return RemoveTempCart;
}(EntityRemoveAction));
export { RemoveTempCart };
var SetTempCart = /** @class */ (function (_super) {
    __extends(SetTempCart, _super);
    function SetTempCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.tempCartId, payload.cart) || this;
        _this.payload = payload;
        _this.type = SET_TEMP_CART;
        return _this;
    }
    return SetTempCart;
}(EntitySuccessAction));
export { SetTempCart };
var ResetMultiCartDetails = /** @class */ (function (_super) {
    __extends(ResetMultiCartDetails, _super);
    function ResetMultiCartDetails() {
        var _this = _super.call(this, MULTI_CART_DATA, undefined) || this;
        _this.type = RESET_MULTI_CART_DETAILS;
        return _this;
    }
    return ResetMultiCartDetails;
}(EntityProcessesLoaderResetAction));
export { ResetMultiCartDetails };
var RemoveCart = /** @class */ (function (_super) {
    __extends(RemoveCart, _super);
    function RemoveCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = REMOVE_CART;
        return _this;
    }
    return RemoveCart;
}(EntityRemoveAction));
export { RemoveCart };
var CartProcessesIncrement = /** @class */ (function (_super) {
    __extends(CartProcessesIncrement, _super);
    function CartProcessesIncrement(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CART_PROCESSES_INCREMENT;
        return _this;
    }
    return CartProcessesIncrement;
}(EntityProcessesIncrementAction));
export { CartProcessesIncrement };
var CartProcessesDecrement = /** @class */ (function (_super) {
    __extends(CartProcessesDecrement, _super);
    function CartProcessesDecrement(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CART_PROCESSES_DECREMENT;
        return _this;
    }
    return CartProcessesDecrement;
}(EntityProcessesDecrementAction));
export { CartProcessesDecrement };
var SetActiveCartId = /** @class */ (function () {
    function SetActiveCartId(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CART_ID;
    }
    return SetActiveCartId;
}());
export { SetActiveCartId };
var ClearMultiCartState = /** @class */ (function (_super) {
    __extends(ClearMultiCartState, _super);
    function ClearMultiCartState() {
        var _this = _super.call(this, MULTI_CART_DATA, null) || this;
        _this.type = CLEAR_MULTI_CART_STATE;
        return _this;
    }
    return ClearMultiCartState;
}(EntityRemoveAction));
export { ClearMultiCartState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5QixnQ0FBZ0MsR0FDakMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsK0JBQStCLENBQUM7QUFFaEUsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFFMUUsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLDRCQUE0QixDQUFDO0FBRTFELE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztBQUV0RCxNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBRyx1Q0FBdUMsQ0FBQztBQUNoRixNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBRyx1Q0FBdUMsQ0FBQztBQUVoRixNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRyxpQ0FBaUMsQ0FBQztBQUVwRSxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRywrQkFBK0IsQ0FBQztBQUV0RTs7OztHQUlHO0FBQ0g7SUFBb0Msa0NBQWtCO0lBRXBELHdCQUFtQixPQUErQjtRQUFsRCxZQUNFLGtCQUFNLGVBQWUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQzNDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQXdCO1FBRHpDLFVBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7SUFHakMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9DLGtCQUFrQixHQUtyRDs7QUFFRDtJQUFpQywrQkFBbUI7SUFFbEQscUJBQW1CLE9BQTJDO1FBQTlELFlBQ0Usa0JBQU0sZUFBZSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUN6RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxVQUFJLEdBQUcsYUFBYSxDQUFDOztJQUc5QixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBaUMsbUJBQW1CLEdBS25EOztBQUVEO0lBQTJDLHlDQUFnQztJQUV6RTtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLFNBQVMsQ0FBQyxTQUNsQztRQUhRLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTJDLGdDQUFnQyxHQUsxRTs7QUFFRDtJQUFnQyw4QkFBa0I7SUFFaEQsb0JBQW1CLE9BQWU7UUFBbEMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQ2hDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsVUFBSSxHQUFHLFdBQVcsQ0FBQzs7SUFHNUIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQWdDLGtCQUFrQixHQUtqRDs7QUFFRDtJQUE0QywwQ0FBOEI7SUFFeEUsZ0NBQW1CLE9BQWU7UUFBbEMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQ2hDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsOEJBQThCLEdBS3pFOztBQUVEO0lBQTRDLDBDQUE4QjtJQUV4RSxnQ0FBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLGVBQWUsRUFBRSxPQUFPLENBQUMsU0FDaEM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0Qyw4QkFBOEIsR0FLekU7O0FBRUQ7SUFFRSx5QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ0UsQ0FBQztJQUN4QyxzQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBQXlDLHVDQUFrQjtJQUV6RDtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLElBQUksQ0FBQyxTQUM3QjtRQUhRLFVBQUksR0FBRyxzQkFBc0IsQ0FBQzs7SUFHdkMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLGtCQUFrQixHQUsxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IEVudGl0eVN1Y2Nlc3NBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7XG4gIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbixcbiAgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNMb2FkZXJSZXNldEFjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IEVudGl0eVJlbW92ZUFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS9lbnRpdHkuYWN0aW9uJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfREFUQSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1RFTVBfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gUmVtb3ZlIFRlbXAgQ2FydCc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9NVUxUSV9DQVJUX0RFVEFJTFMgPSAnW011bHRpIENhcnRdIFJlc2V0IENhcnQgRGV0YWlscyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfVEVNUF9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBTZXQgVGVtcCBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBSZW1vdmUgQ2FydCc7XG5cbmV4cG9ydCBjb25zdCBDQVJUX1BST0NFU1NFU19JTkNSRU1FTlQgPSAnW011bHRpIENhcnRdIENhcnQgUHJvY2Vzc2VzIEluY3JlbWVudCc7XG5leHBvcnQgY29uc3QgQ0FSVF9QUk9DRVNTRVNfREVDUkVNRU5UID0gJ1tNdWx0aSBDYXJ0XSBDYXJ0IFByb2Nlc3NlcyBEZWNyZW1lbnQnO1xuXG5leHBvcnQgY29uc3QgU0VUX0FDVElWRV9DQVJUX0lEID0gJ1tNdWx0aSBDYXJ0XSBTZXQgQWN0aXZlIENhcnQgSWQnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfTVVMVElfQ0FSVF9TVEFURSA9ICdbTXVsdGkgQ2FydF0gQ2xlYXIgQ2FydCBTdGF0ZSc7XG5cbi8qKlxuICogVG8ga2VlcCB0cmFjayBvZiBjYXJ0IGNyZWF0aW9uIHByb2Nlc3Mgd2UgdXNlIGNhcnQgd2l0aCBgdGVtcC0ke3V1aWR9YCBpZC5cbiAqIEFmdGVyIGNyZWF0aW5nIGNhcnQgd2Ugc3dpdGNoIHRvIGVudGl0eSB3aXRoIGBjb2RlYCBvciBgZ3VpZGAuXG4gKiBXZSBuZWVkIGB0ZW1wLSR7dXVpZH1gIGNhcnQgZW50aXRpZXMgZm9yIGxvYWRpbmcvZXJyb3Igc3RhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdmVUZW1wQ2FydCBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVEVNUF9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0ZW1wQ2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC50ZW1wQ2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0VGVtcENhcnQgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9URU1QX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHRlbXBDYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLnRlbXBDYXJ0SWQsIHBheWxvYWQuY2FydCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0TXVsdGlDYXJ0RGV0YWlscyBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0xvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX01VTFRJX0NBUlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCB1bmRlZmluZWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVDYXJ0IGV4dGVuZHMgRW50aXR5UmVtb3ZlQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFByb2Nlc3Nlc0luY3JlbWVudCBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1BST0NFU1NFU19JTkNSRU1FTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UHJvY2Vzc2VzRGVjcmVtZW50IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUFJPQ0VTU0VTX0RFQ1JFTUVOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldEFjdGl2ZUNhcnRJZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfQUNUSVZFX0NBUlRfSUQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhck11bHRpQ2FydFN0YXRlIGV4dGVuZHMgRW50aXR5UmVtb3ZlQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX01VTFRJX0NBUlRfU1RBVEU7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgbnVsbCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgTXVsdGlDYXJ0QWN0aW9ucyA9XG4gIHwgUmVtb3ZlVGVtcENhcnRcbiAgfCBTZXRUZW1wQ2FydFxuICB8IFJlc2V0TXVsdGlDYXJ0RGV0YWlsc1xuICB8IFJlbW92ZUNhcnRcbiAgfCBDYXJ0UHJvY2Vzc2VzSW5jcmVtZW50XG4gIHwgQ2FydFByb2Nlc3Nlc0RlY3JlbWVudFxuICB8IFNldEFjdGl2ZUNhcnRJZFxuICB8IENsZWFyTXVsdGlDYXJ0U3RhdGU7XG4iXX0=