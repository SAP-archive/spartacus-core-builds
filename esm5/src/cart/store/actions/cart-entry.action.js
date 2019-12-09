/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions, StateEntityLoaderActions, } from '../../../state/utils/index';
import { CART_DATA, ADD_ENTRY_PROCESS_ID } from '../cart-state';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
/** @type {?} */
export var CART_ADD_ENTRY = '[Cart-entry] Add Entry';
/** @type {?} */
export var CART_ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
/** @type {?} */
export var CART_ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
/** @type {?} */
export var CART_ADD_ENTRIES = '[Cart-entry] Add Entries';
/** @type {?} */
export var CART_ADD_ENTRIES_SUCCESS = '[Cart-entry] Add Entries Success';
/** @type {?} */
export var CART_ADD_ENTRIES_FAIL = '[Cart-entry] Add Entries Fail';
/** @type {?} */
export var CART_REMOVE_ENTRY = '[Cart-entry] Remove Entry';
/** @type {?} */
export var CART_REMOVE_ENTRY_SUCCESS = '[Cart-entry] Remove Entry Success';
/** @type {?} */
export var CART_REMOVE_ENTRY_FAIL = '[Cart-entry] Remove Entry Fail';
/** @type {?} */
export var CART_UPDATE_ENTRY = '[Cart-entry] Update Entry';
/** @type {?} */
export var CART_UPDATE_ENTRY_SUCCESS = '[Cart-entry] Update Entry Success';
/** @type {?} */
export var CART_UPDATE_ENTRY_FAIL = '[Cart-entry] Update Entry Fail';
/** @type {?} */
export var CART_START_ADD_ENTRY_PROCESS = '[Cart-entry] Start Add Entry Process';
/** @type {?} */
export var CART_SUCCESS_ADD_ENTRY_PROCESS = '[Cart-entry] Success Add Entry Process';
/** @type {?} */
export var CART_FAIL_ADD_ENTRY_PROCESS = '[Cart-entry] Fail Add Entry Process';
var CartAddEntry = /** @class */ (function (_super) {
    tslib_1.__extends(CartAddEntry, _super);
    function CartAddEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_ADD_ENTRY;
        return _this;
    }
    return CartAddEntry;
}(StateLoaderActions.LoaderLoadAction));
export { CartAddEntry };
if (false) {
    /** @type {?} */
    CartAddEntry.prototype.type;
    /** @type {?} */
    CartAddEntry.prototype.payload;
}
var CartAddEntrySuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CartAddEntrySuccess, _super);
    function CartAddEntrySuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_ADD_ENTRY_SUCCESS;
        return _this;
    }
    return CartAddEntrySuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { CartAddEntrySuccess };
if (false) {
    /** @type {?} */
    CartAddEntrySuccess.prototype.type;
    /** @type {?} */
    CartAddEntrySuccess.prototype.payload;
}
var CartAddEntryFail = /** @class */ (function (_super) {
    tslib_1.__extends(CartAddEntryFail, _super);
    function CartAddEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CART_ADD_ENTRY_FAIL;
        return _this;
    }
    return CartAddEntryFail;
}(StateLoaderActions.LoaderFailAction));
export { CartAddEntryFail };
if (false) {
    /** @type {?} */
    CartAddEntryFail.prototype.type;
    /** @type {?} */
    CartAddEntryFail.prototype.payload;
}
var CartAddEntries = /** @class */ (function () {
    function CartAddEntries(payload) {
        this.payload = payload;
        this.type = CART_ADD_ENTRIES;
    }
    return CartAddEntries;
}());
export { CartAddEntries };
if (false) {
    /** @type {?} */
    CartAddEntries.prototype.type;
    /** @type {?} */
    CartAddEntries.prototype.payload;
}
var CartAddEntriesSuccess = /** @class */ (function () {
    function CartAddEntriesSuccess(payload) {
        this.payload = payload;
        this.type = CART_ADD_ENTRIES_SUCCESS;
    }
    return CartAddEntriesSuccess;
}());
export { CartAddEntriesSuccess };
if (false) {
    /** @type {?} */
    CartAddEntriesSuccess.prototype.type;
    /** @type {?} */
    CartAddEntriesSuccess.prototype.payload;
}
var CartAddEntriesFail = /** @class */ (function () {
    function CartAddEntriesFail(payload) {
        this.payload = payload;
        this.type = CART_ADD_ENTRIES_FAIL;
    }
    return CartAddEntriesFail;
}());
export { CartAddEntriesFail };
if (false) {
    /** @type {?} */
    CartAddEntriesFail.prototype.type;
    /** @type {?} */
    CartAddEntriesFail.prototype.payload;
}
var CartStartAddEntryProcess = /** @class */ (function (_super) {
    tslib_1.__extends(CartStartAddEntryProcess, _super);
    function CartStartAddEntryProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, ADD_ENTRY_PROCESS_ID) || this;
        _this.type = CART_START_ADD_ENTRY_PROCESS;
        return _this;
    }
    return CartStartAddEntryProcess;
}(StateEntityLoaderActions.EntityLoadAction));
export { CartStartAddEntryProcess };
if (false) {
    /** @type {?} */
    CartStartAddEntryProcess.prototype.type;
}
var CartSuccessAddEntryProcess = /** @class */ (function (_super) {
    tslib_1.__extends(CartSuccessAddEntryProcess, _super);
    function CartSuccessAddEntryProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, ADD_ENTRY_PROCESS_ID) || this;
        _this.type = CART_SUCCESS_ADD_ENTRY_PROCESS;
        return _this;
    }
    return CartSuccessAddEntryProcess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { CartSuccessAddEntryProcess };
if (false) {
    /** @type {?} */
    CartSuccessAddEntryProcess.prototype.type;
}
var CartFailAddEntryProcess = /** @class */ (function (_super) {
    tslib_1.__extends(CartFailAddEntryProcess, _super);
    function CartFailAddEntryProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, ADD_ENTRY_PROCESS_ID) || this;
        _this.type = CART_FAIL_ADD_ENTRY_PROCESS;
        return _this;
    }
    return CartFailAddEntryProcess;
}(StateEntityLoaderActions.EntityFailAction));
export { CartFailAddEntryProcess };
if (false) {
    /** @type {?} */
    CartFailAddEntryProcess.prototype.type;
}
var CartRemoveEntry = /** @class */ (function (_super) {
    tslib_1.__extends(CartRemoveEntry, _super);
    function CartRemoveEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_ENTRY;
        return _this;
    }
    return CartRemoveEntry;
}(StateLoaderActions.LoaderLoadAction));
export { CartRemoveEntry };
if (false) {
    /** @type {?} */
    CartRemoveEntry.prototype.type;
    /** @type {?} */
    CartRemoveEntry.prototype.payload;
}
var CartRemoveEntrySuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CartRemoveEntrySuccess, _super);
    function CartRemoveEntrySuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_ENTRY_SUCCESS;
        return _this;
    }
    return CartRemoveEntrySuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { CartRemoveEntrySuccess };
if (false) {
    /** @type {?} */
    CartRemoveEntrySuccess.prototype.type;
    /** @type {?} */
    CartRemoveEntrySuccess.prototype.payload;
}
var CartRemoveEntryFail = /** @class */ (function (_super) {
    tslib_1.__extends(CartRemoveEntryFail, _super);
    function CartRemoveEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_ENTRY_FAIL;
        return _this;
    }
    return CartRemoveEntryFail;
}(StateLoaderActions.LoaderFailAction));
export { CartRemoveEntryFail };
if (false) {
    /** @type {?} */
    CartRemoveEntryFail.prototype.type;
    /** @type {?} */
    CartRemoveEntryFail.prototype.payload;
}
var CartUpdateEntry = /** @class */ (function (_super) {
    tslib_1.__extends(CartUpdateEntry, _super);
    function CartUpdateEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_UPDATE_ENTRY;
        return _this;
    }
    return CartUpdateEntry;
}(StateLoaderActions.LoaderLoadAction));
export { CartUpdateEntry };
if (false) {
    /** @type {?} */
    CartUpdateEntry.prototype.type;
    /** @type {?} */
    CartUpdateEntry.prototype.payload;
}
var CartUpdateEntrySuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CartUpdateEntrySuccess, _super);
    function CartUpdateEntrySuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_UPDATE_ENTRY_SUCCESS;
        return _this;
    }
    return CartUpdateEntrySuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { CartUpdateEntrySuccess };
if (false) {
    /** @type {?} */
    CartUpdateEntrySuccess.prototype.type;
    /** @type {?} */
    CartUpdateEntrySuccess.prototype.payload;
}
var CartUpdateEntryFail = /** @class */ (function (_super) {
    tslib_1.__extends(CartUpdateEntryFail, _super);
    function CartUpdateEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CART_UPDATE_ENTRY_FAIL;
        return _this;
    }
    return CartUpdateEntryFail;
}(StateLoaderActions.LoaderFailAction));
export { CartUpdateEntryFail };
if (false) {
    /** @type {?} */
    CartUpdateEntryFail.prototype.type;
    /** @type {?} */
    CartUpdateEntryFail.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQtZW50cnkuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGtCQUFrQixFQUNsQix3QkFBd0IsR0FDekIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFdkUsTUFBTSxLQUFPLGNBQWMsR0FBRyx3QkFBd0I7O0FBQ3RELE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxnQ0FBZ0M7O0FBQ3RFLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyw2QkFBNkI7O0FBRWhFLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRywwQkFBMEI7O0FBQzFELE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxrQ0FBa0M7O0FBQzFFLE1BQU0sS0FBTyxxQkFBcUIsR0FBRywrQkFBK0I7O0FBRXBFLE1BQU0sS0FBTyxpQkFBaUIsR0FBRywyQkFBMkI7O0FBQzVELE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxtQ0FBbUM7O0FBQzVFLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxnQ0FBZ0M7O0FBRXRFLE1BQU0sS0FBTyxpQkFBaUIsR0FBRywyQkFBMkI7O0FBQzVELE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxtQ0FBbUM7O0FBQzVFLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxnQ0FBZ0M7O0FBRXRFLE1BQU0sS0FBTyw0QkFBNEIsR0FDdkMsc0NBQXNDOztBQUN4QyxNQUFNLEtBQU8sOEJBQThCLEdBQ3pDLHdDQUF3Qzs7QUFDMUMsTUFBTSxLQUFPLDJCQUEyQixHQUN0QyxxQ0FBcUM7QUFFdkM7SUFBa0Msd0NBQW1DO0lBRW5FLHNCQUFtQixPQUFZO1FB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QUMsbUJBQW1CLEdBS2pGOzs7O0lBSkMsc0NBQTBDOztJQUM5Qix5Q0FBbUI7O0FBS2pDO0lBQXlDLCtDQUFtQztJQUUxRSw2QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FDMUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLM0U7Ozs7SUFKQyxtQ0FBdUM7O0lBQzNCLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFN0YXRlTG9hZGVyQWN0aW9ucyxcbiAgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDQVJUX0RBVEEsIEFERF9FTlRSWV9QUk9DRVNTX0lEIH0gZnJvbSAnLi4vY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9BRERfRU5UUlkgPSAnW0NhcnQtZW50cnldIEFkZCBFbnRyeSc7XG5leHBvcnQgY29uc3QgQ0FSVF9BRERfRU5UUllfU1VDQ0VTUyA9ICdbQ2FydC1lbnRyeV0gQWRkIEVudHJ5IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfQUREX0VOVFJZX0ZBSUwgPSAnW0NhcnQtZW50cnldIEFkZCBFbnRyeSBGYWlsJztcblxuZXhwb3J0IGNvbnN0IENBUlRfQUREX0VOVFJJRVMgPSAnW0NhcnQtZW50cnldIEFkZCBFbnRyaWVzJztcbmV4cG9ydCBjb25zdCBDQVJUX0FERF9FTlRSSUVTX1NVQ0NFU1MgPSAnW0NhcnQtZW50cnldIEFkZCBFbnRyaWVzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfQUREX0VOVFJJRVNfRkFJTCA9ICdbQ2FydC1lbnRyeV0gQWRkIEVudHJpZXMgRmFpbCc7XG5cbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9FTlRSWSA9ICdbQ2FydC1lbnRyeV0gUmVtb3ZlIEVudHJ5JztcbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTID0gJ1tDYXJ0LWVudHJ5XSBSZW1vdmUgRW50cnkgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfRU5UUllfRkFJTCA9ICdbQ2FydC1lbnRyeV0gUmVtb3ZlIEVudHJ5IEZhaWwnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9VUERBVEVfRU5UUlkgPSAnW0NhcnQtZW50cnldIFVwZGF0ZSBFbnRyeSc7XG5leHBvcnQgY29uc3QgQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUyA9ICdbQ2FydC1lbnRyeV0gVXBkYXRlIEVudHJ5IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfVVBEQVRFX0VOVFJZX0ZBSUwgPSAnW0NhcnQtZW50cnldIFVwZGF0ZSBFbnRyeSBGYWlsJztcblxuZXhwb3J0IGNvbnN0IENBUlRfU1RBUlRfQUREX0VOVFJZX1BST0NFU1MgPVxuICAnW0NhcnQtZW50cnldIFN0YXJ0IEFkZCBFbnRyeSBQcm9jZXNzJztcbmV4cG9ydCBjb25zdCBDQVJUX1NVQ0NFU1NfQUREX0VOVFJZX1BST0NFU1MgPVxuICAnW0NhcnQtZW50cnldIFN1Y2Nlc3MgQWRkIEVudHJ5IFByb2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfRkFJTF9BRERfRU5UUllfUFJPQ0VTUyA9XG4gICdbQ2FydC1lbnRyeV0gRmFpbCBBZGQgRW50cnkgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkRW50cnkgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0FERF9FTlRSWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRBZGRFbnRyeVN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0FERF9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydEFkZEVudHJ5RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkRW50cmllcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0FERF9FTlRSSUVTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHByb2R1Y3RzOiBBcnJheTx7IHByb2R1Y3RDb2RlOiBzdHJpbmc7IHF1YW50aXR5OiBudW1iZXIgfT47XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkRW50cmllc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9BRERfRU5UUklFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydEFkZEVudHJpZXNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX0VOVFJJRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRTdGFydEFkZEVudHJ5UHJvY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfU1RBUlRfQUREX0VOVFJZX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQUREX0VOVFJZX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0U3VjY2Vzc0FkZEVudHJ5UHJvY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfU1VDQ0VTU19BRERfRU5UUllfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBBRERfRU5UUllfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRGYWlsQWRkRW50cnlQcm9jZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9GQUlMX0FERF9FTlRSWV9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEFERF9FTlRSWV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZUVudHJ5IGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9SRU1PVkVfRU5UUlk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UmVtb3ZlRW50cnlTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9SRU1PVkVfRU5UUllfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRSZW1vdmVFbnRyeUZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9FTlRSWV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFVwZGF0ZUVudHJ5IGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9VUERBVEVfRU5UUlk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0VXBkYXRlRW50cnlTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRVcGRhdGVFbnRyeUZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1VQREFURV9FTlRSWV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYXJ0RW50cnlBY3Rpb24gPVxuICB8IENhcnRBZGRFbnRyeVxuICB8IENhcnRBZGRFbnRyeVN1Y2Nlc3NcbiAgfCBDYXJ0QWRkRW50cnlGYWlsXG4gIHwgQ2FydFJlbW92ZUVudHJ5XG4gIHwgQ2FydFJlbW92ZUVudHJ5U3VjY2Vzc1xuICB8IENhcnRSZW1vdmVFbnRyeUZhaWxcbiAgfCBDYXJ0VXBkYXRlRW50cnlcbiAgfCBDYXJ0VXBkYXRlRW50cnlTdWNjZXNzXG4gIHwgQ2FydFVwZGF0ZUVudHJ5RmFpbFxuICB8IENhcnRBZGRFbnRyaWVzXG4gIHwgQ2FydEFkZEVudHJpZXNGYWlsXG4gIHwgQ2FydEFkZEVudHJpZXNTdWNjZXNzXG4gIHwgQ2FydFN0YXJ0QWRkRW50cnlQcm9jZXNzXG4gIHwgQ2FydFN1Y2Nlc3NBZGRFbnRyeVByb2Nlc3NcbiAgfCBDYXJ0RmFpbEFkZEVudHJ5UHJvY2VzcztcbiJdfQ==