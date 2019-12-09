/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { CART_DATA } from '../cart-state';
/** @type {?} */
export var CART_ADD_ENTRY = '[Cart-entry] Add Entry';
/** @type {?} */
export var CART_ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
/** @type {?} */
export var CART_ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQtZW50cnkuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUMsTUFBTSxLQUFPLGNBQWMsR0FBRyx3QkFBd0I7O0FBQ3RELE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxnQ0FBZ0M7O0FBQ3RFLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyw2QkFBNkI7O0FBQ2hFLE1BQU0sS0FBTyxpQkFBaUIsR0FBRywyQkFBMkI7O0FBQzVELE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxtQ0FBbUM7O0FBQzVFLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxnQ0FBZ0M7O0FBRXRFLE1BQU0sS0FBTyxpQkFBaUIsR0FBRywyQkFBMkI7O0FBQzVELE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxtQ0FBbUM7O0FBQzVFLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxnQ0FBZ0M7QUFFdEU7SUFBa0Msd0NBQW1DO0lBRW5FLHNCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGNBQWMsQ0FBQzs7SUFHL0IsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQUxELENBQWtDLGtCQUFrQixDQUFDLGdCQUFnQixHQUtwRTs7OztJQUpDLDRCQUErQjs7SUFDbkIsK0JBQW1COztBQUtqQztJQUF5QywrQ0FBc0M7SUFFN0UsNkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxrQkFBa0IsQ0FBQyxtQkFBbUIsR0FLOUU7Ozs7SUFKQyxtQ0FBdUM7O0lBQzNCLHNDQUFtQjs7QUFLakM7SUFBc0MsNENBQW1DO0lBRXZFLDBCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUMxQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXNDLGtCQUFrQixDQUFDLGdCQUFnQixHQUt4RTs7OztJQUpDLGdDQUFvQzs7SUFDeEIsbUNBQW1COztBQUtqQztJQUFxQywyQ0FBbUM7SUFFdEUseUJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLdkU7Ozs7SUFKQywrQkFBa0M7O0lBQ3RCLGtDQUFtQjs7QUFLakM7SUFBNEMsa0RBQXNDO0lBRWhGLGdDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUcxQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsa0JBQWtCLENBQUMsbUJBQW1CLEdBS2pGOzs7O0lBSkMsc0NBQTBDOztJQUM5Qix5Q0FBbUI7O0FBS2pDO0lBQXlDLCtDQUFtQztJQUUxRSw2QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FDMUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLM0U7Ozs7SUFKQyxtQ0FBdUM7O0lBQzNCLHNDQUFtQjs7QUFLakM7SUFBcUMsMkNBQW1DO0lBRXRFLHlCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUdsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3ZFOzs7O0lBSkMsK0JBQWtDOztJQUN0QixrQ0FBbUI7O0FBS2pDO0lBQTRDLGtEQUFzQztJQUVoRixnQ0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyx5QkFBeUIsQ0FBQzs7SUFHMUMsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLGtCQUFrQixDQUFDLG1CQUFtQixHQUtqRjs7OztJQUpDLHNDQUEwQzs7SUFDOUIseUNBQW1COztBQUtqQztJQUF5QywrQ0FBbUM7SUFFMUUsNkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQzFCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHNCQUFzQixDQUFDOztJQUd2QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBSzNFOzs7O0lBSkMsbUNBQXVDOztJQUMzQixzQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDQVJUX0RBVEEgfSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENBUlRfQUREX0VOVFJZID0gJ1tDYXJ0LWVudHJ5XSBBZGQgRW50cnknO1xuZXhwb3J0IGNvbnN0IENBUlRfQUREX0VOVFJZX1NVQ0NFU1MgPSAnW0NhcnQtZW50cnldIEFkZCBFbnRyeSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDQVJUX0FERF9FTlRSWV9GQUlMID0gJ1tDYXJ0LWVudHJ5XSBBZGQgRW50cnkgRmFpbCc7XG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfRU5UUlkgPSAnW0NhcnQtZW50cnldIFJlbW92ZSBFbnRyeSc7XG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfRU5UUllfU1VDQ0VTUyA9ICdbQ2FydC1lbnRyeV0gUmVtb3ZlIEVudHJ5IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfUkVNT1ZFX0VOVFJZX0ZBSUwgPSAnW0NhcnQtZW50cnldIFJlbW92ZSBFbnRyeSBGYWlsJztcblxuZXhwb3J0IGNvbnN0IENBUlRfVVBEQVRFX0VOVFJZID0gJ1tDYXJ0LWVudHJ5XSBVcGRhdGUgRW50cnknO1xuZXhwb3J0IGNvbnN0IENBUlRfVVBEQVRFX0VOVFJZX1NVQ0NFU1MgPSAnW0NhcnQtZW50cnldIFVwZGF0ZSBFbnRyeSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDQVJUX1VQREFURV9FTlRSWV9GQUlMID0gJ1tDYXJ0LWVudHJ5XSBVcGRhdGUgRW50cnkgRmFpbCc7XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkRW50cnkgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0FERF9FTlRSWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRBZGRFbnRyeVN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0FERF9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydEFkZEVudHJ5RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UmVtb3ZlRW50cnkgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9FTlRSWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRSZW1vdmVFbnRyeVN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZUVudHJ5RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUkVNT1ZFX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0VXBkYXRlRW50cnkgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1VQREFURV9FTlRSWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRVcGRhdGVFbnRyeVN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFVwZGF0ZUVudHJ5RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfVVBEQVRFX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhcnRFbnRyeUFjdGlvbiA9XG4gIHwgQ2FydEFkZEVudHJ5XG4gIHwgQ2FydEFkZEVudHJ5U3VjY2Vzc1xuICB8IENhcnRBZGRFbnRyeUZhaWxcbiAgfCBDYXJ0UmVtb3ZlRW50cnlcbiAgfCBDYXJ0UmVtb3ZlRW50cnlTdWNjZXNzXG4gIHwgQ2FydFJlbW92ZUVudHJ5RmFpbFxuICB8IENhcnRVcGRhdGVFbnRyeVxuICB8IENhcnRVcGRhdGVFbnRyeVN1Y2Nlc3NcbiAgfCBDYXJ0VXBkYXRlRW50cnlGYWlsO1xuIl19