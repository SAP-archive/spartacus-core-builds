import { __extends } from "tslib";
import { PRODUCT_INTERESTS, REMOVE_PRODUCT_INTERESTS_PROCESS_ID, ADD_PRODUCT_INTEREST_PROCESS_ID, } from '../user-state';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, LoaderResetAction, } from '../../../state/utils/loader/loader.action';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, EntityLoaderResetAction, } from '../../../state/utils/entity-loader/entity-loader.action';
export var LOAD_PRODUCT_INTERESTS = 'Load Product Interests';
export var LOAD_PRODUCT_INTERESTS_FAIL = 'Load Product Interests Fail';
export var LOAD_PRODUCT_INTERESTS_SUCCESS = 'Load Product Interests Success';
export var REMOVE_PRODUCT_INTEREST = 'Remove Product Interest';
export var REMOVE_PRODUCT_INTEREST_SUCCESS = 'Remove Product Interest Success';
export var REMOVE_PRODUCT_INTEREST_FAIL = 'Remove Product Interest Fail';
export var ADD_PRODUCT_INTEREST = 'Add Product Interest';
export var ADD_PRODUCT_INTEREST_FAIL = 'Add Product Interest Fail';
export var ADD_PRODUCT_INTEREST_SUCCESS = 'Add Product Interest Success';
export var ADD_PRODUCT_INTEREST_RESET = 'Add Product Interest Reset';
export var REMOVE_PRODUCT_INTEREST_RESET = 'Remove Product Interest Reset';
export var CLEAR_PRODUCT_INTERESTS = 'Clear Product Interests';
var LoadProductInterests = /** @class */ (function (_super) {
    __extends(LoadProductInterests, _super);
    function LoadProductInterests(payload) {
        var _this = _super.call(this, PRODUCT_INTERESTS) || this;
        _this.payload = payload;
        _this.type = LOAD_PRODUCT_INTERESTS;
        return _this;
    }
    return LoadProductInterests;
}(LoaderLoadAction));
export { LoadProductInterests };
var LoadProductInterestsFail = /** @class */ (function (_super) {
    __extends(LoadProductInterestsFail, _super);
    function LoadProductInterestsFail(payload) {
        var _this = _super.call(this, PRODUCT_INTERESTS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_PRODUCT_INTERESTS_FAIL;
        return _this;
    }
    return LoadProductInterestsFail;
}(LoaderFailAction));
export { LoadProductInterestsFail };
var LoadProductInterestsSuccess = /** @class */ (function (_super) {
    __extends(LoadProductInterestsSuccess, _super);
    function LoadProductInterestsSuccess(payload) {
        var _this = _super.call(this, PRODUCT_INTERESTS) || this;
        _this.payload = payload;
        _this.type = LOAD_PRODUCT_INTERESTS_SUCCESS;
        return _this;
    }
    return LoadProductInterestsSuccess;
}(LoaderSuccessAction));
export { LoadProductInterestsSuccess };
var RemoveProductInterest = /** @class */ (function (_super) {
    __extends(RemoveProductInterest, _super);
    function RemoveProductInterest(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = REMOVE_PRODUCT_INTEREST;
        return _this;
    }
    return RemoveProductInterest;
}(EntityLoadAction));
export { RemoveProductInterest };
var RemoveProductInterestSuccess = /** @class */ (function (_super) {
    __extends(RemoveProductInterestSuccess, _super);
    function RemoveProductInterestSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = REMOVE_PRODUCT_INTEREST_SUCCESS;
        return _this;
    }
    return RemoveProductInterestSuccess;
}(EntitySuccessAction));
export { RemoveProductInterestSuccess };
var RemoveProductInterestFail = /** @class */ (function (_super) {
    __extends(RemoveProductInterestFail, _super);
    function RemoveProductInterestFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = REMOVE_PRODUCT_INTEREST_FAIL;
        return _this;
    }
    return RemoveProductInterestFail;
}(EntityFailAction));
export { RemoveProductInterestFail };
var AddProductInterest = /** @class */ (function (_super) {
    __extends(AddProductInterest, _super);
    function AddProductInterest(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = ADD_PRODUCT_INTEREST;
        return _this;
    }
    return AddProductInterest;
}(EntityLoadAction));
export { AddProductInterest };
var AddProductInterestSuccess = /** @class */ (function (_super) {
    __extends(AddProductInterestSuccess, _super);
    function AddProductInterestSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = ADD_PRODUCT_INTEREST_SUCCESS;
        return _this;
    }
    return AddProductInterestSuccess;
}(EntitySuccessAction));
export { AddProductInterestSuccess };
var AddProductInterestFail = /** @class */ (function (_super) {
    __extends(AddProductInterestFail, _super);
    function AddProductInterestFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = ADD_PRODUCT_INTEREST_FAIL;
        return _this;
    }
    return AddProductInterestFail;
}(EntityFailAction));
export { AddProductInterestFail };
var ResetAddInterestState = /** @class */ (function (_super) {
    __extends(ResetAddInterestState, _super);
    function ResetAddInterestState() {
        var _this = _super.call(this, PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID) || this;
        _this.type = ADD_PRODUCT_INTEREST_RESET;
        return _this;
    }
    return ResetAddInterestState;
}(EntityLoaderResetAction));
export { ResetAddInterestState };
var ResetRemoveInterestState = /** @class */ (function (_super) {
    __extends(ResetRemoveInterestState, _super);
    function ResetRemoveInterestState() {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID) || this;
        _this.type = REMOVE_PRODUCT_INTEREST_RESET;
        return _this;
    }
    return ResetRemoveInterestState;
}(EntityLoaderResetAction));
export { ResetRemoveInterestState };
var ClearProductInterests = /** @class */ (function (_super) {
    __extends(ClearProductInterests, _super);
    function ClearProductInterests() {
        var _this = _super.call(this, PRODUCT_INTERESTS) || this;
        _this.type = CLEAR_PRODUCT_INTERESTS;
        return _this;
    }
    return ClearProductInterests;
}(LoaderResetAction));
export { ClearProductInterests };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRlcmVzdHMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvcHJvZHVjdC1pbnRlcmVzdHMuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixtQ0FBbUMsRUFDbkMsK0JBQStCLEdBQ2hDLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsaUJBQWlCLEdBQ2xCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLHVCQUF1QixHQUN4QixNQUFNLHlEQUF5RCxDQUFDO0FBRWpFLE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLHdCQUF3QixDQUFDO0FBQy9ELE1BQU0sQ0FBQyxJQUFNLDJCQUEyQixHQUFHLDZCQUE2QixDQUFDO0FBQ3pFLE1BQU0sQ0FBQyxJQUFNLDhCQUE4QixHQUFHLGdDQUFnQyxDQUFDO0FBRS9FLE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFHLHlCQUF5QixDQUFDO0FBQ2pFLE1BQU0sQ0FBQyxJQUFNLCtCQUErQixHQUMxQyxpQ0FBaUMsQ0FBQztBQUNwQyxNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FBRyw4QkFBOEIsQ0FBQztBQUUzRSxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztBQUMzRCxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRywyQkFBMkIsQ0FBQztBQUNyRSxNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FBRyw4QkFBOEIsQ0FBQztBQUUzRSxNQUFNLENBQUMsSUFBTSwwQkFBMEIsR0FBRyw0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QUFDLEFBTEQsQ0FBNEMsZ0JBQWdCLEdBSzNEOztBQUVEO0lBQTJDLHlDQUF1QjtJQUVoRTtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLCtCQUErQixDQUFDLFNBQ3hEO1FBSFEsVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQUczQyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsdUJBQXVCLEdBS2pFOztBQUVEO0lBQThDLDRDQUF1QjtJQUVuRTtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLG1DQUFtQyxDQUFDLFNBQzVEO1FBSFEsVUFBSSxHQUFHLDZCQUE2QixDQUFDOztJQUc5QyxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBOEMsdUJBQXVCLEdBS3BFOztBQUVEO0lBQTJDLHlDQUFpQjtJQUUxRDtRQUFBLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFIUSxVQUFJLEdBQUcsdUJBQXVCLENBQUM7O0lBR3hDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFMRCxDQUEyQyxpQkFBaUIsR0FLM0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQUk9EVUNUX0lOVEVSRVNUUyxcbiAgUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1RTX1BST0NFU1NfSUQsXG4gIEFERF9QUk9EVUNUX0lOVEVSRVNUX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0LFxuICBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uLFxuICBOb3RpZmljYXRpb25UeXBlLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LWludGVyZXN0Lm1vZGVsJztcbmltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxuICBMb2FkZXJSZXNldEFjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbiAgRW50aXR5TG9hZGVyUmVzZXRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX0lOVEVSRVNUUyA9ICdMb2FkIFByb2R1Y3QgSW50ZXJlc3RzJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfSU5URVJFU1RTX0ZBSUwgPSAnTG9hZCBQcm9kdWN0IEludGVyZXN0cyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfSU5URVJFU1RTX1NVQ0NFU1MgPSAnTG9hZCBQcm9kdWN0IEludGVyZXN0cyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUID0gJ1JlbW92ZSBQcm9kdWN0IEludGVyZXN0JztcbmV4cG9ydCBjb25zdCBSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVF9TVUNDRVNTID1cbiAgJ1JlbW92ZSBQcm9kdWN0IEludGVyZXN0IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUX0ZBSUwgPSAnUmVtb3ZlIFByb2R1Y3QgSW50ZXJlc3QgRmFpbCc7XG5cbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9JTlRFUkVTVCA9ICdBZGQgUHJvZHVjdCBJbnRlcmVzdCc7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfSU5URVJFU1RfRkFJTCA9ICdBZGQgUHJvZHVjdCBJbnRlcmVzdCBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9JTlRFUkVTVF9TVUNDRVNTID0gJ0FkZCBQcm9kdWN0IEludGVyZXN0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfSU5URVJFU1RfUkVTRVQgPSAnQWRkIFByb2R1Y3QgSW50ZXJlc3QgUmVzZXQnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUX1JFU0VUID0gJ1JlbW92ZSBQcm9kdWN0IEludGVyZXN0IFJlc2V0JztcblxuZXhwb3J0IGNvbnN0IENMRUFSX1BST0RVQ1RfSU5URVJFU1RTID0gJ0NsZWFyIFByb2R1Y3QgSW50ZXJlc3RzJztcblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0SW50ZXJlc3RzIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfSU5URVJFU1RTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgICAgc29ydD86IHN0cmluZztcbiAgICAgIHByb2R1Y3RDb2RlPzogc3RyaW5nO1xuICAgICAgbm90aWZpY2F0aW9uVHlwZT86IE5vdGlmaWNhdGlvblR5cGU7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihQUk9EVUNUX0lOVEVSRVNUUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0SW50ZXJlc3RzRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX0lOVEVSRVNUU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPRFVDVF9JTlRFUkVTVFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdEludGVyZXN0c1N1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVF9JTlRFUkVTVFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCkge1xuICAgIHN1cGVyKFBST0RVQ1RfSU5URVJFU1RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlUHJvZHVjdEludGVyZXN0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgaXRlbTogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbjtcbiAgICAgIHNpbmdsZURlbGV0ZT86IGJvb2xlYW47XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlUHJvZHVjdEludGVyZXN0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1RTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVQcm9kdWN0SW50ZXJlc3RGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVFNfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZFByb2R1Y3RJbnRlcmVzdCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX1BST0RVQ1RfSU5URVJFU1Q7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gICAgICBub3RpZmljYXRpb25UeXBlOiBOb3RpZmljYXRpb25UeXBlO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBBRERfUFJPRFVDVF9JTlRFUkVTVF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkUHJvZHVjdEludGVyZXN0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX1BST0RVQ1RfSU5URVJFU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQUREX1BST0RVQ1RfSU5URVJFU1RfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZFByb2R1Y3RJbnRlcmVzdEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9QUk9EVUNUX0lOVEVSRVNUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEFERF9QUk9EVUNUX0lOVEVSRVNUX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldEFkZEludGVyZXN0U3RhdGUgZXh0ZW5kcyBFbnRpdHlMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfUFJPRFVDVF9JTlRFUkVTVF9SRVNFVDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBBRERfUFJPRFVDVF9JTlRFUkVTVF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRSZW1vdmVJbnRlcmVzdFN0YXRlIGV4dGVuZHMgRW50aXR5TG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1RfUkVTRVQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1RTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclByb2R1Y3RJbnRlcmVzdHMgZXh0ZW5kcyBMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9QUk9EVUNUX0lOVEVSRVNUUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPRFVDVF9JTlRFUkVTVFMpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFByb2R1Y3RJbnRlcmVzdHNBY3Rpb24gPVxuICB8IExvYWRQcm9kdWN0SW50ZXJlc3RzXG4gIHwgTG9hZFByb2R1Y3RJbnRlcmVzdHNGYWlsXG4gIHwgTG9hZFByb2R1Y3RJbnRlcmVzdHNTdWNjZXNzXG4gIHwgUmVtb3ZlUHJvZHVjdEludGVyZXN0XG4gIHwgUmVtb3ZlUHJvZHVjdEludGVyZXN0U3VjY2Vzc1xuICB8IFJlbW92ZVByb2R1Y3RJbnRlcmVzdEZhaWxcbiAgfCBBZGRQcm9kdWN0SW50ZXJlc3RcbiAgfCBBZGRQcm9kdWN0SW50ZXJlc3RGYWlsXG4gIHwgQWRkUHJvZHVjdEludGVyZXN0U3VjY2Vzc1xuICB8IFJlc2V0QWRkSW50ZXJlc3RTdGF0ZVxuICB8IFJlc2V0UmVtb3ZlSW50ZXJlc3RTdGF0ZVxuICB8IENsZWFyUHJvZHVjdEludGVyZXN0cztcbiJdfQ==