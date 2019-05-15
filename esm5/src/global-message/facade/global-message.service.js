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
     * @param text: string | Translatable
     * @param type: GlobalMessageType object
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
        this.store.dispatch(new AddMessage({
            text: typeof text === 'string' ? { raw: text } : text,
            type: type,
        }));
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
        this.store.dispatch(index !== undefined
            ? new RemoveMessage({
                type: type,
                index: index,
            })
            : new RemoveMessagesByType(type));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUdMLHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsYUFBYSxFQUNiLG9CQUFvQixHQUNyQixNQUFNLGdCQUFnQixDQUFDO0FBR3hCO0lBRUUsOEJBQW9CLEtBQW9DO1FBQXBDLFVBQUssR0FBTCxLQUFLLENBQStCO0lBQUcsQ0FBQztJQUU1RDs7T0FFRzs7Ozs7SUFDSCxrQ0FBRzs7OztJQUFIO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEVBQ2hDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxTQUFTLEVBQWxCLENBQWtCLENBQUMsQ0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsa0NBQUc7Ozs7OztJQUFILFVBQUksSUFBMkIsRUFBRSxJQUF1QjtRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxVQUFVLENBQUM7WUFDYixJQUFJLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNyRCxJQUFJLE1BQUE7U0FDTCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7OztJQUNILHFDQUFNOzs7Ozs7SUFBTixVQUFPLElBQXVCLEVBQUUsS0FBYztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsS0FBSyxLQUFLLFNBQVM7WUFDakIsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDO2dCQUNoQixJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsS0FBSzthQUNiLENBQUM7WUFDSixDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FDbkMsQ0FBQztJQUNKLENBQUM7O2dCQTNDRixVQUFVOzs7O2dCQWZGLEtBQUs7O0lBMkRkLDJCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0EzQ1ksb0JBQW9COzs7Ozs7SUFDbkIscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxuICBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlLFxuICBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG4gIEFkZE1lc3NhZ2UsXG4gIFJlbW92ZU1lc3NhZ2UsXG4gIFJlbW92ZU1lc3NhZ2VzQnlUeXBlLFxufSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0YWJsZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHbG9iYWxNZXNzYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2U+KSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGdsb2JhbCBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0KCk6IE9ic2VydmFibGU8R2xvYmFsTWVzc2FnZUVudGl0aWVzPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXMpLFxuICAgICAgZmlsdGVyKGRhdGEgPT4gZGF0YSAhPT0gdW5kZWZpbmVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9uZSBtZXNzYWdlIGludG8gc3RvcmVcbiAgICogQHBhcmFtIHRleHQ6IHN0cmluZyB8IFRyYW5zbGF0YWJsZVxuICAgKiBAcGFyYW0gdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUgb2JqZWN0XG4gICAqL1xuICBhZGQodGV4dDogc3RyaW5nIHwgVHJhbnNsYXRhYmxlLCB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQWRkTWVzc2FnZSh7XG4gICAgICAgIHRleHQ6IHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJyA/IHsgcmF3OiB0ZXh0IH0gOiB0ZXh0LFxuICAgICAgICB0eXBlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBtZXNzYWdlKHMpIGZyb20gc3RvcmVcbiAgICogQHBhcmFtIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlXG4gICAqIEBwYXJhbSBpbmRleDpvcHRpb25hbC4gV2l0aG91dCBpdCwgbWVzc2FnZXMgd2lsbCBiZSByZW1vdmVkIGJ5IHR5cGU7IG90aGVyd2lzZSxcbiAgICogbWVzc2FnZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSBsaXN0IGJ5IGluZGV4LlxuICAgKi9cbiAgcmVtb3ZlKHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLCBpbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBpbmRleCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gbmV3IFJlbW92ZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICB9KVxuICAgICAgICA6IG5ldyBSZW1vdmVNZXNzYWdlc0J5VHlwZSh0eXBlKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==