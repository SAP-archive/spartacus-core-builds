/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { getGlobalMessageEntities, AddMessage, RemoveMessage, RemoveMessagesByType, } from '../store/index';
var GlobalMessageService = /** @class */ (function () {
    function GlobalMessageService(store) {
        this.store = store;
    }
    /**
     * Get all global messages
     */
    /**
     * Get all global messages
     * @return {?}
     */
    GlobalMessageService.prototype.get = /**
     * Get all global messages
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getGlobalMessageEntities), filter(function (data) { return data !== undefined; }));
    };
    /**
     * Add one message into store
     * @param message: GlobalMessage object
     */
    /**
     * Add one message into store
     * @param {?} text
     * @param {?} type
     * @return {?}
     */
    GlobalMessageService.prototype.add = /**
     * Add one message into store
     * @param {?} text
     * @param {?} type
     * @return {?}
     */
    function (text, type) {
        if (typeof text === 'string') {
            this.store.dispatch(new AddMessage({ text: { raw: text }, type: type }));
        }
        else {
            this.store.dispatch(new AddMessage({ text: text, type: type }));
        }
    };
    /**
     * Remove message(s) from store
     * @param type: GlobalMessageType
     * @param index:optional. Without it, messages will be removed by type; otherwise,
     * message will be removed from list by index.
     */
    /**
     * Remove message(s) from store
     * @param {?} type
     * @param {?=} index
     * @return {?}
     */
    GlobalMessageService.prototype.remove = /**
     * Remove message(s) from store
     * @param {?} type
     * @param {?=} index
     * @return {?}
     */
    function (type, index) {
        if (index !== undefined) {
            this.store.dispatch(new RemoveMessage({
                type: type,
                index: index,
            }));
        }
        else {
            this.store.dispatch(new RemoveMessagesByType(type));
        }
    };
    GlobalMessageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GlobalMessageService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return GlobalMessageService;
}());
export { GlobalMessageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GlobalMessageService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUdMLHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsYUFBYSxFQUNiLG9CQUFvQixHQUNyQixNQUFNLGdCQUFnQixDQUFDO0FBR3hCO0lBRUUsOEJBQW9CLEtBQW9DO1FBQXBDLFVBQUssR0FBTCxLQUFLLENBQStCO0lBQUcsQ0FBQztJQUU1RDs7T0FFRzs7Ozs7SUFDSCxrQ0FBRzs7OztJQUFIO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEVBQ2hDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxTQUFTLEVBQWxCLENBQWtCLENBQUMsQ0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCxrQ0FBRzs7Ozs7O0lBQUgsVUFBSSxJQUEyQixFQUFFLElBQXVCO1FBQ3RELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7O0lBQ0gscUNBQU07Ozs7OztJQUFOLFVBQU8sSUFBdUIsRUFBRSxLQUFjO1FBQzVDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxhQUFhLENBQUM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQyxDQUNILENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Z0JBM0NGLFVBQVU7Ozs7Z0JBZkYsS0FBSzs7SUEyRGQsMkJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTNDWSxvQkFBb0I7Ozs7OztJQUNuQixxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG4gIFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UsXG4gIGdldEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgQWRkTWVzc2FnZSxcbiAgUmVtb3ZlTWVzc2FnZSxcbiAgUmVtb3ZlTWVzc2FnZXNCeVR5cGUsXG59IGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uL2kxOG4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlPikge31cblxuICAvKipcbiAgICogR2V0IGFsbCBnbG9iYWwgbWVzc2FnZXNcbiAgICovXG4gIGdldCgpOiBPYnNlcnZhYmxlPEdsb2JhbE1lc3NhZ2VFbnRpdGllcz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0R2xvYmFsTWVzc2FnZUVudGl0aWVzKSxcbiAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEgIT09IHVuZGVmaW5lZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUgbWVzc2FnZSBpbnRvIHN0b3JlXG4gICAqIEBwYXJhbSBtZXNzYWdlOiBHbG9iYWxNZXNzYWdlIG9iamVjdFxuICAgKi9cbiAgYWRkKHRleHQ6IHN0cmluZyB8IFRyYW5zbGF0YWJsZSwgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGRNZXNzYWdlKHsgdGV4dDogeyByYXc6IHRleHQgfSwgdHlwZSB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZE1lc3NhZ2UoeyB0ZXh0LCB0eXBlIH0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIG1lc3NhZ2UocykgZnJvbSBzdG9yZVxuICAgKiBAcGFyYW0gdHlwZTogR2xvYmFsTWVzc2FnZVR5cGVcbiAgICogQHBhcmFtIGluZGV4Om9wdGlvbmFsLiBXaXRob3V0IGl0LCBtZXNzYWdlcyB3aWxsIGJlIHJlbW92ZWQgYnkgdHlwZTsgb3RoZXJ3aXNlLFxuICAgKiBtZXNzYWdlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIGxpc3QgYnkgaW5kZXguXG4gICAqL1xuICByZW1vdmUodHlwZTogR2xvYmFsTWVzc2FnZVR5cGUsIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBSZW1vdmVNZXNzYWdlKHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFJlbW92ZU1lc3NhZ2VzQnlUeXBlKHR5cGUpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==