import { __extends } from "tslib";
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, EntityProcessesLoaderResetAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_DATA } from '../multi-cart-state';
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
var CreateMultiCart = /** @class */ (function (_super) {
    __extends(CreateMultiCart, _super);
    function CreateMultiCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.tempCartId) || this;
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
        var _this = _super.call(this, MULTI_CART_DATA, payload.tempCartId) || this;
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
        var _this = _super.call(this, MULTI_CART_DATA, getCartIdByUserId(payload.cart, payload.userId)) || this;
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
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
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
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId, payload.error) || this;
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
        var _this = _super.call(this, MULTI_CART_DATA, getCartIdByUserId(payload.cart, payload.userId)) || this;
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
        var _this = _super.call(this, MULTI_CART_DATA, payload.oldCartId) || this;
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
var AddEmailToMultiCart = /** @class */ (function (_super) {
    __extends(AddEmailToMultiCart, _super);
    function AddEmailToMultiCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
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
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId, payload.error) || this;
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
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5QixnQ0FBZ0MsR0FDakMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsK0JBQStCLENBQUM7QUFFaEUsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsMEJBQTBCLENBQUM7QUFDNUQsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQUcsK0JBQStCLENBQUM7QUFDdEUsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUcsa0NBQWtDLENBQUM7QUFFNUUsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLHdCQUF3QixDQUFDO0FBQ3hELE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHLDZCQUE2QixDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFHLGdDQUFnQyxDQUFDO0FBRXhFLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLHlCQUF5QixDQUFDO0FBQzFELE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUFHLGlDQUFpQyxDQUFDO0FBRTFFLE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUFHLGlDQUFpQyxDQUFDO0FBRTFFLE1BQU0sQ0FB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LEdBS3pFOztBQUVEO0lBQTRDLDBDQUE4QjtJQUV4RSxnQ0FBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLGVBQWUsRUFBRSxPQUFPLENBQUMsU0FDaEM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0Qyw4QkFBOEIsR0FLekU7O0FBRUQ7SUFFRSx5QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ0UsQ0FBQztJQUN4QyxzQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBQXlDLHVDQUFrQjtJQUV6RDtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLElBQUksQ0FBQyxTQUM3QjtRQUhRLFVBQUksR0FBRyxzQkFBc0IsQ0FBQzs7SUFHdkMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLGtCQUFrQixHQUsxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24sXG4gIEVudGl0eVByb2Nlc3Nlc0xvYWRlclJlc2V0QWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgRW50aXR5UmVtb3ZlQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5hY3Rpb24nO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBNVUxUSV9DQVJUX0RBVEEgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9URU1QX0NBUlQgPSAnW011bHRpIENhcnRdIFJlbW92ZSBUZW1wIENhcnQnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX01VTFRJX0NBUlQgPSAnW011bHRpIENhcnRdIENyZWF0ZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTVVMVElfQ0FSVF9GQUlMID0gJ1tNdWx0aSBDYXJ0XSBDcmVhdGUgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBDcmVhdGUgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gTG9hZCBDYXJ0JztcbmV4cG9ydCBjb25zdCBMT0FEX01VTFRJX0NBUlRfRkFJTCA9ICdbTXVsdGkgQ2FydF0gTG9hZCBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBMb2FkIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBNRVJHRV9NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBNZXJnZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBNRVJHRV9NVUxUSV9DQVJUX1NVQ0NFU1MgPSAnW011bHRpIENhcnRdIE1lcmdlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9NVUxUSV9DQVJUX0RFVEFJTFMgPSAnW011bHRpIENhcnRdIFJlc2V0IENhcnQgRGV0YWlscyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfVEVNUF9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBTZXQgVGVtcCBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBSZW1vdmUgQ2FydCc7XG5cbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gQWRkIEVtYWlsJztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9GQUlMID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX0VNQUlMX1RPX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gQWRkIEVtYWlsIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9QUk9DRVNTRVNfSU5DUkVNRU5UID0gJ1tNdWx0aSBDYXJ0XSBDYXJ0IFByb2Nlc3NlcyBJbmNyZW1lbnQnO1xuZXhwb3J0IGNvbnN0IENBUlRfUFJPQ0VTU0VTX0RFQ1JFTUVOVCA9ICdbTXVsdGkgQ2FydF0gQ2FydCBQcm9jZXNzZXMgRGVjcmVtZW50JztcblxuZXhwb3J0IGNvbnN0IFNFVF9BQ1RJVkVfQ0FSVF9JRCA9ICdbTXVsdGkgQ2FydF0gU2V0IEFjdGl2ZSBDYXJ0IElkJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX01VTFRJX0NBUlRfU1RBVEUgPSAnW011bHRpIENhcnRdIENsZWFyIENhcnQgU3RhdGUnO1xuXG4vKipcbiAqIFRvIGtlZXAgdHJhY2sgb2YgY2FydCBjcmVhdGlvbiBwcm9jZXNzIHdlIHVzZSBjYXJ0IHdpdGggYHRlbXAtJHt1dWlkfWAgaWQuXG4gKiBBZnRlciBjcmVhdGluZyBjYXJ0IHdlIHN3aXRjaCB0byBlbnRpdHkgd2l0aCBgY29kZWAgb3IgYGd1aWRgLlxuICogV2UgbmVlZCBgdGVtcC0ke3V1aWR9YCBjYXJ0IGVudGl0aWVzIGZvciBsb2FkaW5nL2Vycm9yIHN0YXRlLlxuICovXG5leHBvcnQgY2xhc3MgUmVtb3ZlVGVtcENhcnQgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1RFTVBfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdGVtcENhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQudGVtcENhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldFRlbXBDYXJ0IGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfVEVNUF9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB0ZW1wQ2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC50ZW1wQ2FydElkLCBwYXlsb2FkLmNhcnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVNdWx0aUNhcnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLnRlbXBDYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVNdWx0aUNhcnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfTVVMVElfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLnRlbXBDYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVNdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfTVVMVElfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZzsgZXh0cmFEYXRhPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE11bHRpQ2FydCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTXVsdGlDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9NVUxUSV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnRJZDogc3RyaW5nOyBlcnJvcj86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRNdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmc7IGV4dHJhRGF0YT86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBnZXRDYXJ0SWRCeVVzZXJJZChwYXlsb2FkLmNhcnQsIHBheWxvYWQudXNlcklkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlTXVsdGlDYXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX01VTFRJX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXJnZU11bHRpQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTUVSR0VfTVVMVElfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyBvbGRDYXJ0SWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IHVzZXJJZDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLm9sZENhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0TXVsdGlDYXJ0RGV0YWlscyBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0xvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX01VTFRJX0NBUlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCB1bmRlZmluZWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVDYXJ0IGV4dGVuZHMgRW50aXR5UmVtb3ZlQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb011bHRpQ2FydCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX01VTFRJX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX01VTFRJX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBlcnJvcjogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRQcm9jZXNzZXNJbmNyZW1lbnQgZXh0ZW5kcyBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9QUk9DRVNTRVNfSU5DUkVNRU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFByb2Nlc3Nlc0RlY3JlbWVudCBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1BST0NFU1NFU19ERUNSRU1FTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRBY3RpdmVDYXJ0SWQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0FDVElWRV9DQVJUX0lEO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJNdWx0aUNhcnRTdGF0ZSBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9NVUxUSV9DQVJUX1NUQVRFO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIG51bGwpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIE11bHRpQ2FydEFjdGlvbnMgPVxuICB8IFJlbW92ZVRlbXBDYXJ0XG4gIHwgU2V0VGVtcENhcnRcbiAgfCBDcmVhdGVNdWx0aUNhcnRcbiAgfCBDcmVhdGVNdWx0aUNhcnRGYWlsXG4gIHwgQ3JlYXRlTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IExvYWRNdWx0aUNhcnRcbiAgfCBMb2FkTXVsdGlDYXJ0RmFpbFxuICB8IExvYWRNdWx0aUNhcnRTdWNjZXNzXG4gIHwgTWVyZ2VNdWx0aUNhcnRcbiAgfCBNZXJnZU11bHRpQ2FydFN1Y2Nlc3NcbiAgfCBSZXNldE11bHRpQ2FydERldGFpbHNcbiAgfCBSZW1vdmVDYXJ0XG4gIHwgQWRkRW1haWxUb011bHRpQ2FydFxuICB8IEFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsXG4gIHwgQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3NcbiAgfCBDYXJ0UHJvY2Vzc2VzSW5jcmVtZW50XG4gIHwgQ2FydFByb2Nlc3Nlc0RlY3JlbWVudFxuICB8IFNldEFjdGl2ZUNhcnRJZFxuICB8IENsZWFyTXVsdGlDYXJ0U3RhdGU7XG4iXX0=