/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { CART_DATA } from '../cart-state';
/** @type {?} */
export const ADD_ENTRY = '[Cart-entry] Add Entry';
/** @type {?} */
export const ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
/** @type {?} */
export const ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
/** @type {?} */
export const REMOVE_ENTRY = '[Cart-entry] Remove Entry';
/** @type {?} */
export const REMOVE_ENTRY_SUCCESS = '[Cart-entry] Remove Entry Success';
/** @type {?} */
export const REMOVE_ENTRY_FAIL = '[Cart-entry] Remove Entry Fail';
/** @type {?} */
export const UPDATE_ENTRY = '[Cart-entry] Update Entry';
/** @type {?} */
export const UPDATE_ENTRY_SUCCESS = '[Cart-entry] Update Entry Success';
/** @type {?} */
export const UPDATE_ENTRY_FAIL = '[Cart-entry] Update Entry Fail';
export class AddEntry extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = ADD_ENTRY;
    }
}
if (false) {
    /** @type {?} */
    AddEntry.prototype.type;
    /** @type {?} */
    AddEntry.prototype.payload;
}
export class AddEntrySuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = ADD_ENTRY_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    AddEntrySuccess.prototype.type;
    /** @type {?} */
    AddEntrySuccess.prototype.payload;
}
export class AddEntryFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = ADD_ENTRY_FAIL;
    }
}
if (false) {
    /** @type {?} */
    AddEntryFail.prototype.type;
    /** @type {?} */
    AddEntryFail.prototype.payload;
}
export class RemoveEntry extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = REMOVE_ENTRY;
    }
}
if (false) {
    /** @type {?} */
    RemoveEntry.prototype.type;
    /** @type {?} */
    RemoveEntry.prototype.payload;
}
export class RemoveEntrySuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = REMOVE_ENTRY_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    RemoveEntrySuccess.prototype.type;
    /** @type {?} */
    RemoveEntrySuccess.prototype.payload;
}
export class RemoveEntryFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = REMOVE_ENTRY_FAIL;
    }
}
if (false) {
    /** @type {?} */
    RemoveEntryFail.prototype.type;
    /** @type {?} */
    RemoveEntryFail.prototype.payload;
}
export class UpdateEntry extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = UPDATE_ENTRY;
    }
}
if (false) {
    /** @type {?} */
    UpdateEntry.prototype.type;
    /** @type {?} */
    UpdateEntry.prototype.payload;
}
export class UpdateEntrySuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = UPDATE_ENTRY_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    UpdateEntrySuccess.prototype.type;
    /** @type {?} */
    UpdateEntrySuccess.prototype.payload;
}
export class UpdateEntryFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = UPDATE_ENTRY_FAIL;
    }
}
if (false) {
    /** @type {?} */
    UpdateEntryFail.prototype.type;
    /** @type {?} */
    UpdateEntryFail.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQtZW50cnkuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUxQyxNQUFNLE9BQU8sU0FBUyxHQUFHLHdCQUF3Qjs7QUFDakQsTUFBTSxPQUFPLGlCQUFpQixHQUFHLGdDQUFnQzs7QUFDakUsTUFBTSxPQUFPLGNBQWMsR0FBRyw2QkFBNkI7O0FBRTNELE1BQU0sT0FBTyxZQUFZLEdBQUcsMkJBQTJCOztBQUN2RCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsbUNBQW1DOztBQUN2RSxNQUFNLE9BQU8saUJBQWlCLEdBQUcsZ0NBQWdDOztBQUVqRSxNQUFNLE9BQU8sWUFBWSxHQUFHLDJCQUEyQjs7QUFDdkQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLG1DQUFtQzs7QUFDdkUsTUFBTSxPQUFPLGlCQUFpQixHQUFHLGdDQUFnQztBQUVqRSxNQUFNLE9BQU8sUUFBUyxTQUFRLGdCQUFnQjs7OztJQUU1QyxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQURBLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQUcxQixDQUFDO0NBQ0Y7OztJQUpDLHdCQUEwQjs7SUFDZCwyQkFBbUI7O0FBS2pDLE1BQU0sT0FBTyxlQUFnQixTQUFRLG1CQUFtQjs7OztJQUV0RCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQURBLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBR2xDLENBQUM7Q0FDRjs7O0lBSkMsK0JBQWtDOztJQUN0QixrQ0FBbUI7O0FBS2pDLE1BQU0sT0FBTyxZQUFhLFNBQVEsZ0JBQWdCOzs7O0lBRWhELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURULFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUcvQixDQUFDO0NBQ0Y7OztJQUpDLDRCQUErQjs7SUFDbkIsK0JBQW1COztBQUtqQyxNQUFNLE9BQU8sV0FBWSxTQUFRLGdCQUFnQjs7OztJQUUvQyxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQURBLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLFlBQVksQ0FBQztJQUc3QixDQUFDO0NBQ0Y7OztJQUpDLDJCQUE2Qjs7SUFDakIsOEJBQW1COztBQUtqQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsbUJBQW1COzs7O0lBRXpELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBREEsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFHckMsQ0FBQztDQUNGOzs7SUFKQyxrQ0FBcUM7O0lBQ3pCLHFDQUFtQjs7QUFLakMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsZ0JBQWdCOzs7O0lBRW5ELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURULFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBR2xDLENBQUM7Q0FDRjs7O0lBSkMsK0JBQWtDOztJQUN0QixrQ0FBbUI7O0FBS2pDLE1BQU0sT0FBTyxXQUFZLFNBQVEsZ0JBQWdCOzs7O0lBRS9DLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBREEsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsWUFBWSxDQUFDO0lBRzdCLENBQUM7Q0FDRjs7O0lBSkMsMkJBQTZCOztJQUNqQiw4QkFBbUI7O0FBS2pDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxtQkFBbUI7Ozs7SUFFekQsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFEQSxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztJQUdyQyxDQUFDO0NBQ0Y7OztJQUpDLGtDQUFxQzs7SUFDekIscUNBQW1COztBQUtqQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxnQkFBZ0I7Ozs7SUFFbkQsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRFQsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFHbEMsQ0FBQztDQUNGOzs7SUFKQywrQkFBa0M7O0lBQ3RCLGtDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IENBUlRfREFUQSB9IGZyb20gJy4uL2NhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQUREX0VOVFJZID0gJ1tDYXJ0LWVudHJ5XSBBZGQgRW50cnknO1xuZXhwb3J0IGNvbnN0IEFERF9FTlRSWV9TVUNDRVNTID0gJ1tDYXJ0LWVudHJ5XSBBZGQgRW50cnkgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQUREX0VOVFJZX0ZBSUwgPSAnW0NhcnQtZW50cnldIEFkZCBFbnRyeSBGYWlsJztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9FTlRSWSA9ICdbQ2FydC1lbnRyeV0gUmVtb3ZlIEVudHJ5JztcbmV4cG9ydCBjb25zdCBSRU1PVkVfRU5UUllfU1VDQ0VTUyA9ICdbQ2FydC1lbnRyeV0gUmVtb3ZlIEVudHJ5IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9FTlRSWV9GQUlMID0gJ1tDYXJ0LWVudHJ5XSBSZW1vdmUgRW50cnkgRmFpbCc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfRU5UUlkgPSAnW0NhcnQtZW50cnldIFVwZGF0ZSBFbnRyeSc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0VOVFJZX1NVQ0NFU1MgPSAnW0NhcnQtZW50cnldIFVwZGF0ZSBFbnRyeSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBVUERBVEVfRU5UUllfRkFJTCA9ICdbQ2FydC1lbnRyeV0gVXBkYXRlIEVudHJ5IEZhaWwnO1xuXG5leHBvcnQgY2xhc3MgQWRkRW50cnkgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTlRSWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVudHJ5U3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VOVFJZX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbnRyeUZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTlRSWV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlRW50cnkgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9FTlRSWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUVudHJ5U3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX0VOVFJZX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVFbnRyeUZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9FTlRSWV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlRW50cnkgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9FTlRSWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVudHJ5U3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX0VOVFJZX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVFbnRyeUZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9FTlRSWV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYXJ0RW50cnlBY3Rpb24gPVxuICB8IEFkZEVudHJ5XG4gIHwgQWRkRW50cnlTdWNjZXNzXG4gIHwgQWRkRW50cnlGYWlsXG4gIHwgUmVtb3ZlRW50cnlcbiAgfCBSZW1vdmVFbnRyeVN1Y2Nlc3NcbiAgfCBSZW1vdmVFbnRyeUZhaWxcbiAgfCBVcGRhdGVFbnRyeVxuICB8IFVwZGF0ZUVudHJ5U3VjY2Vzc1xuICB8IFVwZGF0ZUVudHJ5RmFpbDtcbiJdfQ==