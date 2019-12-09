/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions, StateEntityLoaderActions, } from '../../../state/utils/index';
import { CART_DATA, ADD_ENTRY_PROCESS_ID } from '../cart-state';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
/** @type {?} */
export const CART_ADD_ENTRY = '[Cart-entry] Add Entry';
/** @type {?} */
export const CART_ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
/** @type {?} */
export const CART_ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
/** @type {?} */
export const CART_ADD_ENTRIES = '[Cart-entry] Add Entries';
/** @type {?} */
export const CART_ADD_ENTRIES_SUCCESS = '[Cart-entry] Add Entries Success';
/** @type {?} */
export const CART_ADD_ENTRIES_FAIL = '[Cart-entry] Add Entries Fail';
/** @type {?} */
export const CART_REMOVE_ENTRY = '[Cart-entry] Remove Entry';
/** @type {?} */
export const CART_REMOVE_ENTRY_SUCCESS = '[Cart-entry] Remove Entry Success';
/** @type {?} */
export const CART_REMOVE_ENTRY_FAIL = '[Cart-entry] Remove Entry Fail';
/** @type {?} */
export const CART_UPDATE_ENTRY = '[Cart-entry] Update Entry';
/** @type {?} */
export const CART_UPDATE_ENTRY_SUCCESS = '[Cart-entry] Update Entry Success';
/** @type {?} */
export const CART_UPDATE_ENTRY_FAIL = '[Cart-entry] Update Entry Fail';
/** @type {?} */
export const CART_START_ADD_ENTRY_PROCESS = '[Cart-entry] Start Add Entry Process';
/** @type {?} */
export const CART_SUCCESS_ADD_ENTRY_PROCESS = '[Cart-entry] Success Add Entry Process';
/** @type {?} */
export const CART_FAIL_ADD_ENTRY_PROCESS = '[Cart-entry] Fail Add Entry Process';
export class CartAddEntry extends StateLoaderActions.LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CART_ADD_ENTRY;
    }
}
if (false) {
    /** @type {?} */
    CartAddEntry.prototype.type;
    /** @type {?} */
    CartAddEntry.prototype.payload;
}
export class CartAddEntrySuccess extends StateLoaderActions.LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CART_ADD_ENTRY_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CartAddEntrySuccess.prototype.type;
    /** @type {?} */
    CartAddEntrySuccess.prototype.payload;
}
export class CartAddEntryFail extends StateLoaderActions.LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = CART_ADD_ENTRY_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CartAddEntryFail.prototype.type;
    /** @type {?} */
    CartAddEntryFail.prototype.payload;
}
export class CartAddEntries {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CART_ADD_ENTRIES;
    }
}
if (false) {
    /** @type {?} */
    CartAddEntries.prototype.type;
    /** @type {?} */
    CartAddEntries.prototype.payload;
}
export class CartAddEntriesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CART_ADD_ENTRIES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CartAddEntriesSuccess.prototype.type;
    /** @type {?} */
    CartAddEntriesSuccess.prototype.payload;
}
export class CartAddEntriesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CART_ADD_ENTRIES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CartAddEntriesFail.prototype.type;
    /** @type {?} */
    CartAddEntriesFail.prototype.payload;
}
export class CartStartAddEntryProcess extends StateEntityLoaderActions.EntityLoadAction {
    constructor() {
        super(PROCESS_FEATURE, ADD_ENTRY_PROCESS_ID);
        this.type = CART_START_ADD_ENTRY_PROCESS;
    }
}
if (false) {
    /** @type {?} */
    CartStartAddEntryProcess.prototype.type;
}
export class CartSuccessAddEntryProcess extends StateEntityLoaderActions.EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, ADD_ENTRY_PROCESS_ID);
        this.type = CART_SUCCESS_ADD_ENTRY_PROCESS;
    }
}
if (false) {
    /** @type {?} */
    CartSuccessAddEntryProcess.prototype.type;
}
export class CartFailAddEntryProcess extends StateEntityLoaderActions.EntityFailAction {
    constructor() {
        super(PROCESS_FEATURE, ADD_ENTRY_PROCESS_ID);
        this.type = CART_FAIL_ADD_ENTRY_PROCESS;
    }
}
if (false) {
    /** @type {?} */
    CartFailAddEntryProcess.prototype.type;
}
export class CartRemoveEntry extends StateLoaderActions.LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CART_REMOVE_ENTRY;
    }
}
if (false) {
    /** @type {?} */
    CartRemoveEntry.prototype.type;
    /** @type {?} */
    CartRemoveEntry.prototype.payload;
}
export class CartRemoveEntrySuccess extends StateLoaderActions.LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CART_REMOVE_ENTRY_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CartRemoveEntrySuccess.prototype.type;
    /** @type {?} */
    CartRemoveEntrySuccess.prototype.payload;
}
export class CartRemoveEntryFail extends StateLoaderActions.LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = CART_REMOVE_ENTRY_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CartRemoveEntryFail.prototype.type;
    /** @type {?} */
    CartRemoveEntryFail.prototype.payload;
}
export class CartUpdateEntry extends StateLoaderActions.LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CART_UPDATE_ENTRY;
    }
}
if (false) {
    /** @type {?} */
    CartUpdateEntry.prototype.type;
    /** @type {?} */
    CartUpdateEntry.prototype.payload;
}
export class CartUpdateEntrySuccess extends StateLoaderActions.LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CART_UPDATE_ENTRY_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CartUpdateEntrySuccess.prototype.type;
    /** @type {?} */
    CartUpdateEntrySuccess.prototype.payload;
}
export class CartUpdateEntryFail extends StateLoaderActions.LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = CART_UPDATE_ENTRY_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CartUpdateEntryFail.prototype.type;
    /** @type {?} */
    CartUpdateEntryFail.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQtZW50cnkuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLHdCQUF3QixHQUN6QixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQUV2RSxNQUFNLE9BQU8sY0FBYyxHQUFHLHdCQUF3Qjs7QUFDdEQsTUFBTSxPQUFPLHNCQUFzQixHQUFHLGdDQUFnQzs7QUFDdEUsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDZCQUE2Qjs7QUFFaEUsTUFBTSxPQUFPLGdCQUFnQixHQUFHLDBCQUEwQjs7QUFDMUQsTUFBTSxPQUFPLHdCQUF3QixHQUFHLGtDQUFrQzs7QUFDMUUsTUFBTSxPQUFPLHFCQUFxQixHQUFHLCtCQUErQjs7QUFFcEUsTUFBTSxPQUFPLGlCQUFpQixHQUFHLDJCQUEyQjs7QUFDNUQsTUFBTSxPQUFPLHlCQUF5QixHQUFHLG1DQUFtQzs7QUFDNUUsTUFBTSxPQUFPLHNCQUFzQixHQUFHLGdDQUFnQzs7QUFFdEUsTUFBTSxPQUFPLGlCQUFpQixHQUFHLDJCQUEyQjs7QUFDNUQsTUFBTSxPQUFPLHlCQUF5QixHQUFHLG1DQUFtQzs7QUFDNUUsTUFBTSxPQUFPLHNCQUFzQixHQUFHLGdDQUFnQzs7QUFFdEUsTUFBTSxPQUFPLDRCQUE0QixHQUN2QyxzQ0FBc0M7O0FBQ3hDLE1BQU0sT0FBTyw4QkFBOEIsR0FDekMsd0NBQXdDOztBQUMxQyxNQUFNLE9BQU8sMkJBQTJCLEdBQ3RDLHFDQUFxQztBQUV2QyxNQUFNLE9BQU8sWUFBYSxTQUFRLGtCQUFrQixDQUFDLGdC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QyxzQ0FBMEM7O0lBQzlCLHlDQUFtQjs7QUFLakMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUUxRSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEVCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUd2QyxDQUFDO0NBQ0Y7OztJQUpDLG1DQUF1Qzs7SUFDM0Isc0NBQW1COztBQUtqQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxrQkFBa0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFdEUsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFEQSxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUdsQyxDQUFDO0NBQ0Y7OztJQUpDLCtCQUFrQzs7SUFDdEIsa0NBQW1COztBQUtqQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsa0JBQWtCLENBQUMsbUJBQW1COzs7O0lBRWhGLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBREEsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcseUJBQXlCLENBQUM7SUFHMUMsQ0FBQztDQUNGOzs7SUFKQyxzQ0FBMEM7O0lBQzlCLHlDQUFtQjs7QUFLakMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUUxRSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEVCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUd2QyxDQUFDO0NBQ0Y7OztJQUpDLG1DQUF1Qzs7SUFDM0Isc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU3RhdGVMb2FkZXJBY3Rpb25zLFxuICBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IENBUlRfREFUQSwgQUREX0VOVFJZX1BST0NFU1NfSUQgfSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDQVJUX0FERF9FTlRSWSA9ICdbQ2FydC1lbnRyeV0gQWRkIEVudHJ5JztcbmV4cG9ydCBjb25zdCBDQVJUX0FERF9FTlRSWV9TVUNDRVNTID0gJ1tDYXJ0LWVudHJ5XSBBZGQgRW50cnkgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0FSVF9BRERfRU5UUllfRkFJTCA9ICdbQ2FydC1lbnRyeV0gQWRkIEVudHJ5IEZhaWwnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9BRERfRU5UUklFUyA9ICdbQ2FydC1lbnRyeV0gQWRkIEVudHJpZXMnO1xuZXhwb3J0IGNvbnN0IENBUlRfQUREX0VOVFJJRVNfU1VDQ0VTUyA9ICdbQ2FydC1lbnRyeV0gQWRkIEVudHJpZXMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0FSVF9BRERfRU5UUklFU19GQUlMID0gJ1tDYXJ0LWVudHJ5XSBBZGQgRW50cmllcyBGYWlsJztcblxuZXhwb3J0IGNvbnN0IENBUlRfUkVNT1ZFX0VOVFJZID0gJ1tDYXJ0LWVudHJ5XSBSZW1vdmUgRW50cnknO1xuZXhwb3J0IGNvbnN0IENBUlRfUkVNT1ZFX0VOVFJZX1NVQ0NFU1MgPSAnW0NhcnQtZW50cnldIFJlbW92ZSBFbnRyeSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9FTlRSWV9GQUlMID0gJ1tDYXJ0LWVudHJ5XSBSZW1vdmUgRW50cnkgRmFpbCc7XG5cbmV4cG9ydCBjb25zdCBDQVJUX1VQREFURV9FTlRSWSA9ICdbQ2FydC1lbnRyeV0gVXBkYXRlIEVudHJ5JztcbmV4cG9ydCBjb25zdCBDQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTID0gJ1tDYXJ0LWVudHJ5XSBVcGRhdGUgRW50cnkgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0FSVF9VUERBVEVfRU5UUllfRkFJTCA9ICdbQ2FydC1lbnRyeV0gVXBkYXRlIEVudHJ5IEZhaWwnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9TVEFSVF9BRERfRU5UUllfUFJPQ0VTUyA9XG4gICdbQ2FydC1lbnRyeV0gU3RhcnQgQWRkIEVudHJ5IFByb2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfU1VDQ0VTU19BRERfRU5UUllfUFJPQ0VTUyA9XG4gICdbQ2FydC1lbnRyeV0gU3VjY2VzcyBBZGQgRW50cnkgUHJvY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0FSVF9GQUlMX0FERF9FTlRSWV9QUk9DRVNTID1cbiAgJ1tDYXJ0LWVudHJ5XSBGYWlsIEFkZCBFbnRyeSBQcm9jZXNzJztcblxuZXhwb3J0IGNsYXNzIENhcnRBZGRFbnRyeSBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX0VOVFJZO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydEFkZEVudHJ5U3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX0VOVFJZX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkRW50cnlGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9BRERfRU5UUllfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRBZGRFbnRyaWVzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX0VOVFJJRVM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgcHJvZHVjdHM6IEFycmF5PHsgcHJvZHVjdENvZGU6IHN0cmluZzsgcXVhbnRpdHk6IG51bWJlciB9PjtcbiAgICB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRBZGRFbnRyaWVzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0FERF9FTlRSSUVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkRW50cmllc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9BRERfRU5UUklFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFN0YXJ0QWRkRW50cnlQcm9jZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9TVEFSVF9BRERfRU5UUllfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBBRERfRU5UUllfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRTdWNjZXNzQWRkRW50cnlQcm9jZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9TVUNDRVNTX0FERF9FTlRSWV9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEFERF9FTlRSWV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydEZhaWxBZGRFbnRyeVByb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0ZBSUxfQUREX0VOVFJZX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQUREX0VOVFJZX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UmVtb3ZlRW50cnkgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9FTlRSWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRSZW1vdmVFbnRyeVN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZUVudHJ5RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUkVNT1ZFX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0VXBkYXRlRW50cnkgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1VQREFURV9FTlRSWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRVcGRhdGVFbnRyeVN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFVwZGF0ZUVudHJ5RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfVVBEQVRFX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhcnRFbnRyeUFjdGlvbiA9XG4gIHwgQ2FydEFkZEVudHJ5XG4gIHwgQ2FydEFkZEVudHJ5U3VjY2Vzc1xuICB8IENhcnRBZGRFbnRyeUZhaWxcbiAgfCBDYXJ0UmVtb3ZlRW50cnlcbiAgfCBDYXJ0UmVtb3ZlRW50cnlTdWNjZXNzXG4gIHwgQ2FydFJlbW92ZUVudHJ5RmFpbFxuICB8IENhcnRVcGRhdGVFbnRyeVxuICB8IENhcnRVcGRhdGVFbnRyeVN1Y2Nlc3NcbiAgfCBDYXJ0VXBkYXRlRW50cnlGYWlsXG4gIHwgQ2FydEFkZEVudHJpZXNcbiAgfCBDYXJ0QWRkRW50cmllc0ZhaWxcbiAgfCBDYXJ0QWRkRW50cmllc1N1Y2Nlc3NcbiAgfCBDYXJ0U3RhcnRBZGRFbnRyeVByb2Nlc3NcbiAgfCBDYXJ0U3VjY2Vzc0FkZEVudHJ5UHJvY2Vzc1xuICB8IENhcnRGYWlsQWRkRW50cnlQcm9jZXNzO1xuIl19