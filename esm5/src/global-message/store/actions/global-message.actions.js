/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var ADD_MESSAGE = '[Global-message] Add a Message';
/** @type {?} */
export var REMOVE_MESSAGE = '[Global-message] Remove a Message';
/** @type {?} */
export var REMOVE_MESSAGES_BY_TYPE = '[Global-message] Remove messages by type';
var AddMessage = /** @class */ (function () {
    function AddMessage(payload) {
        this.payload = payload;
        this.type = ADD_MESSAGE;
    }
    return AddMessage;
}());
export { AddMessage };
if (false) {
    /** @type {?} */
    AddMessage.prototype.type;
    /** @type {?} */
    AddMessage.prototype.payload;
}
var RemoveMessage = /** @class */ (function () {
    function RemoveMessage(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGE;
    }
    return RemoveMessage;
}());
export { RemoveMessage };
if (false) {
    /** @type {?} */
    RemoveMessage.prototype.type;
    /** @type {?} */
    RemoveMessage.prototype.payload;
}
var RemoveMessagesByType = /** @class */ (function () {
    function RemoveMessagesByType(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGES_BY_TYPE;
    }
    return RemoveMessagesByType;
}());
export { RemoveMessagesByType };
if (false) {
    /** @type {?} */
    RemoveMessagesByType.prototype.type;
    /** @type {?} */
    RemoveMessagesByType.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9hY3Rpb25zL2dsb2JhbC1tZXNzYWdlLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxNQUFNLEtBQU8sV0FBVyxHQUFHLGdDQUFnQzs7QUFDM0QsTUFBTSxLQUFPLGNBQWMsR0FBRyxtQ0FBbUM7O0FBQ2pFLE1BQU0sS0FBTyx1QkFBdUIsR0FDbEMsMENBQTBDO0FBRTVDO0lBRUUsb0JBQW1CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFEaEMsU0FBSSxHQUFHLFdBQVcsQ0FBQztJQUNnQixDQUFDO0lBQy9DLGlCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQywwQkFBNEI7O0lBQ2hCLDZCQUE2Qjs7QUFHM0M7SUFFRSx1QkFBbUIsT0FBbUQ7UUFBbkQsWUFBTyxHQUFQLE9BQU8sQ0FBNEM7UUFEN0QsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUMwQyxDQUFDO0lBQzVFLG9CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw2QkFBK0I7O0lBQ25CLGdDQUEwRDs7QUFHeEU7SUFFRSw4QkFBbUIsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFEcEMsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ1EsQ0FBQztJQUNuRCwyQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsb0NBQXdDOztJQUM1Qix1Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgR2xvYmFsTWVzc2FnZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IEFERF9NRVNTQUdFID0gJ1tHbG9iYWwtbWVzc2FnZV0gQWRkIGEgTWVzc2FnZSc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX01FU1NBR0UgPSAnW0dsb2JhbC1tZXNzYWdlXSBSZW1vdmUgYSBNZXNzYWdlJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfTUVTU0FHRVNfQllfVFlQRSA9XG4gICdbR2xvYmFsLW1lc3NhZ2VdIFJlbW92ZSBtZXNzYWdlcyBieSB0eXBlJztcblxuZXhwb3J0IGNsYXNzIEFkZE1lc3NhZ2UgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX01FU1NBR0U7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHbG9iYWxNZXNzYWdlKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlTWVzc2FnZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfTUVTU0FHRTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGU7IGluZGV4OiBudW1iZXIgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZU1lc3NhZ2VzQnlUeXBlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9NRVNTQUdFU19CWV9UWVBFO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR2xvYmFsTWVzc2FnZVR5cGUpIHt9XG59XG5cbmV4cG9ydCB0eXBlIEdsb2JhbE1lc3NhZ2VBY3Rpb24gPVxuICB8IEFkZE1lc3NhZ2VcbiAgfCBSZW1vdmVNZXNzYWdlXG4gIHwgUmVtb3ZlTWVzc2FnZXNCeVR5cGU7XG4iXX0=