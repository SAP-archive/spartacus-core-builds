/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { getGlobalMessageEntities, AddMessage, RemoveMessage, RemoveMessagesByType, } from '../store/index';
export class GlobalMessageService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Get all global messages
     * @return {?}
     */
    get() {
        return this.store.pipe(select(getGlobalMessageEntities), filter(data => data !== undefined));
    }
    /**
     * Add one message into store
     * @param {?} text
     * @param {?} type
     * @return {?}
     */
    add(text, type) {
        this.store.dispatch(new AddMessage({
            text: typeof text === 'string' ? { raw: text } : text,
            type,
        }));
    }
    /**
     * Remove message(s) from store
     * @param {?} type
     * @param {?=} index
     * @return {?}
     */
    remove(type, index) {
        this.store.dispatch(index !== undefined
            ? new RemoveMessage({
                type: type,
                index: index,
            })
            : new RemoveMessagesByType(type));
    }
}
GlobalMessageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GlobalMessageService.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GlobalMessageService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUdMLHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsYUFBYSxFQUNiLG9CQUFvQixHQUNyQixNQUFNLGdCQUFnQixDQUFDO0FBSXhCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsWUFBb0IsS0FBb0M7UUFBcEMsVUFBSyxHQUFMLEtBQUssQ0FBK0I7SUFBRyxDQUFDOzs7OztJQUs1RCxHQUFHO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEVBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFPRCxHQUFHLENBQUMsSUFBMkIsRUFBRSxJQUF1QjtRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxVQUFVLENBQUM7WUFDYixJQUFJLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNyRCxJQUFJO1NBQ0wsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBUUQsTUFBTSxDQUFDLElBQXVCLEVBQUUsS0FBYztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsS0FBSyxLQUFLLFNBQVM7WUFDakIsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDO2dCQUNoQixJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsS0FBSzthQUNiLENBQUM7WUFDSixDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FDbkMsQ0FBQztJQUNKLENBQUM7OztZQTNDRixVQUFVOzs7O1lBZkYsS0FBSzs7Ozs7OztJQWlCQSxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG4gIFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UsXG4gIGdldEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgQWRkTWVzc2FnZSxcbiAgUmVtb3ZlTWVzc2FnZSxcbiAgUmVtb3ZlTWVzc2FnZXNCeVR5cGUsXG59IGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZT4pIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgZ2xvYmFsIG1lc3NhZ2VzXG4gICAqL1xuICBnZXQoKTogT2JzZXJ2YWJsZTxHbG9iYWxNZXNzYWdlRW50aXRpZXM+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldEdsb2JhbE1lc3NhZ2VFbnRpdGllcyksXG4gICAgICBmaWx0ZXIoZGF0YSA9PiBkYXRhICE9PSB1bmRlZmluZWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgb25lIG1lc3NhZ2UgaW50byBzdG9yZVxuICAgKiBAcGFyYW0gdGV4dDogc3RyaW5nIHwgVHJhbnNsYXRhYmxlXG4gICAqIEBwYXJhbSB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSBvYmplY3RcbiAgICovXG4gIGFkZCh0ZXh0OiBzdHJpbmcgfCBUcmFuc2xhdGFibGUsIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBZGRNZXNzYWdlKHtcbiAgICAgICAgdGV4dDogdHlwZW9mIHRleHQgPT09ICdzdHJpbmcnID8geyByYXc6IHRleHQgfSA6IHRleHQsXG4gICAgICAgIHR5cGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIG1lc3NhZ2UocykgZnJvbSBzdG9yZVxuICAgKiBAcGFyYW0gdHlwZTogR2xvYmFsTWVzc2FnZVR5cGVcbiAgICogQHBhcmFtIGluZGV4Om9wdGlvbmFsLiBXaXRob3V0IGl0LCBtZXNzYWdlcyB3aWxsIGJlIHJlbW92ZWQgYnkgdHlwZTsgb3RoZXJ3aXNlLFxuICAgKiBtZXNzYWdlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIGxpc3QgYnkgaW5kZXguXG4gICAqL1xuICByZW1vdmUodHlwZTogR2xvYmFsTWVzc2FnZVR5cGUsIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIGluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBuZXcgUmVtb3ZlTWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIH0pXG4gICAgICAgIDogbmV3IFJlbW92ZU1lc3NhZ2VzQnlUeXBlKHR5cGUpXG4gICAgKTtcbiAgfVxufVxuIl19