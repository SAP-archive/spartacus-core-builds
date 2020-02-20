import { __extends } from "tslib";
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, EntityProcessesLoaderResetAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_FEATURE } from '../multi-cart-state';
export var REMOVE_TEMP_CART = '[Multi Cart] Remove Temp Cart';
export var CREATE_MULTI_CART = '[Multi Cart] Create Cart';
export var CREATE_MULTI_CART_FAIL = '[Multi Cart] Create Cart Fail';
export var CREATE_MULTI_CART_SUCCESS = '[Multi Cart] Create Cart Success';
export var LOAD_MULTI_CART = '[Multi Cart] Load Cart';
export var LOAD_MULTI_CART_FAIL = '[Multi Cart] Load Cart Fail';
export var LOAD_MULTI_CART_SUCCESS = '[Multi Cart] Load Cart Success';
export var MERGE_MULTI_CART = '[Multi Cart] Merge Cart';
export var MERGE_MULTI_CART_SUCCESS = '[Multi Cart] Merge Cart Success';
export var RESET_MULTI_CART_DETAILS = '[Multi Cart] Reset Cart Details';
export var SET_TEMP_CART = '[Multi Cart] Set Temp Cart';
export var REMOVE_CART = '[Multi Cart] Remove Cart';
export var ADD_EMAIL_TO_MULTI_CART = '[Multi Cart] Add Email';
export var ADD_EMAIL_TO_MULTI_CART_FAIL = '[Multi Cart] Add Email Fail';
export var ADD_EMAIL_TO_MULTI_CART_SUCCESS = '[Multi Cart] Add Email Success';
export var CART_PROCESSES_INCREMENT = '[Multi Cart] Cart Processes Increment';
export var CART_PROCESSES_DECREMENT = '[Multi Cart] Cart Processes Decrement';
/**
 * To keep track of cart creation process we use cart with `temp-${uuid}` id.
 * After creating cart we switch to entity with `code` or `guid`.
 * We need `temp-${uuid}` cart entities for loading/error state.
 */
var RemoveTempCart = /** @class */ (function (_super) {
    __extends(RemoveTempCart, _super);
    function RemoveTempCart(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.tempCartId) || this;
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
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.tempCartId, payload.cart) || this;
        _this.payload = payload;
        _this.type = SET_TEMP_CART;
        return _this;
    }
    return SetTempCart;
}(EntitySuccessAction));
export { SetTempCart };
var CreateMultiCart = /** @class */ (function (_super) {
    __extends(CreateMultiCart, _super);
    function CreateMultiCart(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.tempCartId) || this;
        _this.payload = payload;
        _this.type = CREATE_MULTI_CART;
        return _this;
    }
    return CreateMultiCart;
}(EntityLoadAction));
export { CreateMultiCart };
var CreateMultiCartFail = /** @class */ (function (_super) {
    __extends(CreateMultiCartFail, _super);
    function CreateMultiCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.tempCartId) || this;
        _this.payload = payload;
        _this.type = CREATE_MULTI_CART_FAIL;
        return _this;
    }
    return CreateMultiCartFail;
}(EntityFailAction));
export { CreateMultiCartFail };
var CreateMultiCartSuccess = /** @class */ (function (_super) {
    __extends(CreateMultiCartSuccess, _super);
    function CreateMultiCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId)) || this;
        _this.payload = payload;
        _this.type = CREATE_MULTI_CART_SUCCESS;
        return _this;
    }
    return CreateMultiCartSuccess;
}(EntitySuccessAction));
export { CreateMultiCartSuccess };
var LoadMultiCart = /** @class */ (function (_super) {
    __extends(LoadMultiCart, _super);
    function LoadMultiCart(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId) || this;
        _this.payload = payload;
        _this.type = LOAD_MULTI_CART;
        return _this;
    }
    return LoadMultiCart;
}(EntityLoadAction));
export { LoadMultiCart };
var LoadMultiCartFail = /** @class */ (function (_super) {
    __extends(LoadMultiCartFail, _super);
    function LoadMultiCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId, payload.error) || this;
        _this.payload = payload;
        _this.type = LOAD_MULTI_CART_FAIL;
        return _this;
    }
    return LoadMultiCartFail;
}(EntityFailAction));
export { LoadMultiCartFail };
var LoadMultiCartSuccess = /** @class */ (function (_super) {
    __extends(LoadMultiCartSuccess, _super);
    function LoadMultiCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId)) || this;
        _this.payload = payload;
        _this.type = LOAD_MULTI_CART_SUCCESS;
        return _this;
    }
    return LoadMultiCartSuccess;
}(EntitySuccessAction));
export { LoadMultiCartSuccess };
var MergeMultiCart = /** @class */ (function () {
    function MergeMultiCart(payload) {
        this.payload = payload;
        this.type = MERGE_MULTI_CART;
    }
    return MergeMultiCart;
}());
export { MergeMultiCart };
var MergeMultiCartSuccess = /** @class */ (function (_super) {
    __extends(MergeMultiCartSuccess, _super);
    function MergeMultiCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.oldCartId) || this;
        _this.payload = payload;
        _this.type = MERGE_MULTI_CART_SUCCESS;
        return _this;
    }
    return MergeMultiCartSuccess;
}(EntityRemoveAction));
export { MergeMultiCartSuccess };
var ResetMultiCartDetails = /** @class */ (function (_super) {
    __extends(ResetMultiCartDetails, _super);
    function ResetMultiCartDetails() {
        var _this = _super.call(this, MULTI_CART_FEATURE, undefined) || this;
        _this.type = RESET_MULTI_CART_DETAILS;
        return _this;
    }
    return ResetMultiCartDetails;
}(EntityProcessesLoaderResetAction));
export { ResetMultiCartDetails };
var RemoveCart = /** @class */ (function (_super) {
    __extends(RemoveCart, _super);
    function RemoveCart(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload) || this;
        _this.payload = payload;
        _this.type = REMOVE_CART;
        return _this;
    }
    return RemoveCart;
}(EntityRemoveAction));
export { RemoveCart };
var AddEmailToMultiCart = /** @class */ (function (_super) {
    __extends(AddEmailToMultiCart, _super);
    function AddEmailToMultiCart(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_MULTI_CART;
        return _this;
    }
    return AddEmailToMultiCart;
}(EntityLoadAction));
export { AddEmailToMultiCart };
var AddEmailToMultiCartFail = /** @class */ (function (_super) {
    __extends(AddEmailToMultiCartFail, _super);
    function AddEmailToMultiCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId, payload.error) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_MULTI_CART_FAIL;
        return _this;
    }
    return AddEmailToMultiCartFail;
}(EntityFailAction));
export { AddEmailToMultiCartFail };
var AddEmailToMultiCartSuccess = /** @class */ (function (_super) {
    __extends(AddEmailToMultiCartSuccess, _super);
    function AddEmailToMultiCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_MULTI_CART_SUCCESS;
        return _this;
    }
    return AddEmailToMultiCartSuccess;
}(EntitySuccessAction));
export { AddEmailToMultiCartSuccess };
var CartProcessesIncrement = /** @class */ (function (_super) {
    __extends(CartProcessesIncrement, _super);
    function CartProcessesIncrement(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload) || this;
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
        var _this = _super.call(this, MULTI_CART_FEATURE, payload) || this;
        _this.payload = payload;
        _this.type = CART_PROCESSES_DECREMENT;
        return _this;
    }
    return CartProcessesDecrement;
}(EntityProcessesDecrementAction));
export { CartProcessesDecrement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5QixnQ0FBZ0MsR0FDakMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV6RCxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRywrQkFBK0IsQ0FBQztBQUVoRSxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUM1RCxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRywrQkFBK0IsQ0FBQztBQUN0RSxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxrQ0FBa0MsQ0FBQztBQUU1RSxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsd0JBQXdCLENBQUM7QUFDeEQsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsNkJBQTZCLENBQUM7QUFDbEUsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsZ0NBQWdDLENBQUM7QUFFeEUsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcseUJBQXlCLENBQUM7QUFDMUQsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFFMUUsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFFMUUsTUFBTSxD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QU0sa0JBQWtCLEVBQUUsT0FBTyxDQUFDLFNBQ25DO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsOEJBQThCLEdBS3pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQge1xuICBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24sXG4gIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbixcbiAgRW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVzZXRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBFbnRpdHlSZW1vdmVBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LmFjdGlvbic7XG5pbXBvcnQgeyBnZXRDYXJ0SWRCeVVzZXJJZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfRkVBVFVSRSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1RFTVBfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gUmVtb3ZlIFRlbXAgQ2FydCc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gQ3JlYXRlIENhcnQnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIENyZWF0ZSBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9NVUxUSV9DQVJUX1NVQ0NFU1MgPSAnW011bHRpIENhcnRdIENyZWF0ZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBMb2FkIENhcnQnO1xuZXhwb3J0IGNvbnN0IExPQURfTVVMVElfQ0FSVF9GQUlMID0gJ1tNdWx0aSBDYXJ0XSBMb2FkIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9NVUxUSV9DQVJUX1NVQ0NFU1MgPSAnW011bHRpIENhcnRdIExvYWQgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IE1FUkdFX01VTFRJX0NBUlQgPSAnW011bHRpIENhcnRdIE1lcmdlIENhcnQnO1xuZXhwb3J0IGNvbnN0IE1FUkdFX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gTWVyZ2UgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX01VTFRJX0NBUlRfREVUQUlMUyA9ICdbTXVsdGkgQ2FydF0gUmVzZXQgQ2FydCBEZXRhaWxzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9URU1QX0NBUlQgPSAnW011bHRpIENhcnRdIFNldCBUZW1wIENhcnQnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlQgPSAnW011bHRpIENhcnRdIFJlbW92ZSBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwnO1xuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIEFkZCBFbWFpbCBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDQVJUX1BST0NFU1NFU19JTkNSRU1FTlQgPSAnW011bHRpIENhcnRdIENhcnQgUHJvY2Vzc2VzIEluY3JlbWVudCc7XG5leHBvcnQgY29uc3QgQ0FSVF9QUk9DRVNTRVNfREVDUkVNRU5UID0gJ1tNdWx0aSBDYXJ0XSBDYXJ0IFByb2Nlc3NlcyBEZWNyZW1lbnQnO1xuXG4vKipcbiAqIFRvIGtlZXAgdHJhY2sgb2YgY2FydCBjcmVhdGlvbiBwcm9jZXNzIHdlIHVzZSBjYXJ0IHdpdGggYHRlbXAtJHt1dWlkfWAgaWQuXG4gKiBBZnRlciBjcmVhdGluZyBjYXJ0IHdlIHN3aXRjaCB0byBlbnRpdHkgd2l0aCBgY29kZWAgb3IgYGd1aWRgLlxuICogV2UgbmVlZCBgdGVtcC0ke3V1aWR9YCBjYXJ0IGVudGl0aWVzIGZvciBsb2FkaW5nL2Vycm9yIHN0YXRlLlxuICovXG5leHBvcnQgY2xhc3MgUmVtb3ZlVGVtcENhcnQgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1RFTVBfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdGVtcENhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQudGVtcENhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldFRlbXBDYXJ0IGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfVEVNUF9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB0ZW1wQ2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC50ZW1wQ2FydElkLCBwYXlsb2FkLmNhcnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVNdWx0aUNhcnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLnRlbXBDYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVNdWx0aUNhcnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfTVVMVElfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLnRlbXBDYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVNdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfTVVMVElfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZzsgZXh0cmFEYXRhPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE11bHRpQ2FydCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTXVsdGlDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9NVUxUSV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnRJZDogc3RyaW5nOyBlcnJvcj86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRNdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmc7IGV4dHJhRGF0YT86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBnZXRDYXJ0SWRCeVVzZXJJZChwYXlsb2FkLmNhcnQsIHBheWxvYWQudXNlcklkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlTXVsdGlDYXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX01VTFRJX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXJnZU11bHRpQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTUVSR0VfTVVMVElfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyBvbGRDYXJ0SWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IHVzZXJJZDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLm9sZENhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0TXVsdGlDYXJ0RGV0YWlscyBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0xvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX01VTFRJX0NBUlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCB1bmRlZmluZWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVDYXJ0IGV4dGVuZHMgRW50aXR5UmVtb3ZlQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb011bHRpQ2FydCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX01VTFRJX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX01VTFRJX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBlcnJvcjogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRQcm9jZXNzZXNJbmNyZW1lbnQgZXh0ZW5kcyBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9QUk9DRVNTRVNfSU5DUkVNRU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFByb2Nlc3Nlc0RlY3JlbWVudCBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1BST0NFU1NFU19ERUNSRU1FTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIE11bHRpQ2FydEFjdGlvbnMgPVxuICB8IFJlbW92ZVRlbXBDYXJ0XG4gIHwgU2V0VGVtcENhcnRcbiAgfCBDcmVhdGVNdWx0aUNhcnRcbiAgfCBDcmVhdGVNdWx0aUNhcnRGYWlsXG4gIHwgQ3JlYXRlTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IExvYWRNdWx0aUNhcnRcbiAgfCBMb2FkTXVsdGlDYXJ0RmFpbFxuICB8IExvYWRNdWx0aUNhcnRTdWNjZXNzXG4gIHwgTWVyZ2VNdWx0aUNhcnRcbiAgfCBNZXJnZU11bHRpQ2FydFN1Y2Nlc3NcbiAgfCBSZXNldE11bHRpQ2FydERldGFpbHNcbiAgfCBSZW1vdmVDYXJ0XG4gIHwgQWRkRW1haWxUb011bHRpQ2FydFxuICB8IEFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsXG4gIHwgQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3NcbiAgfCBDYXJ0UHJvY2Vzc2VzSW5jcmVtZW50XG4gIHwgQ2FydFByb2Nlc3Nlc0RlY3JlbWVudDtcbiJdfQ==