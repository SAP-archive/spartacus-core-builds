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
        if (typeof text === 'string') {
            this.store.dispatch(new AddMessage({ text: { raw: text }, type }));
        }
        else {
            this.store.dispatch(new AddMessage({ text, type }));
        }
    }
    /**
     * Remove message(s) from store
     * @param {?} type
     * @param {?=} index
     * @return {?}
     */
    remove(type, index) {
        if (index !== undefined) {
            this.store.dispatch(new RemoveMessage({
                type: type,
                index: index,
            }));
        }
        else {
            this.store.dispatch(new RemoveMessagesByType(type));
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUdMLHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsYUFBYSxFQUNiLG9CQUFvQixHQUNyQixNQUFNLGdCQUFnQixDQUFDO0FBSXhCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsWUFBb0IsS0FBb0M7UUFBcEMsVUFBSyxHQUFMLEtBQUssQ0FBK0I7SUFBRyxDQUFDOzs7OztJQUs1RCxHQUFHO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEVBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFNRCxHQUFHLENBQUMsSUFBMkIsRUFBRSxJQUF1QjtRQUN0RCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7Ozs7SUFRRCxNQUFNLENBQUMsSUFBdUIsRUFBRSxLQUFjO1FBQzVDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxhQUFhLENBQUM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQyxDQUNILENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7O1lBM0NGLFVBQVU7Ozs7WUFmRixLQUFLOzs7Ozs7O0lBaUJBLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgU3RhdGVXaXRoR2xvYmFsTWVzc2FnZSxcbiAgZ2V0R2xvYmFsTWVzc2FnZUVudGl0aWVzLFxuICBBZGRNZXNzYWdlLFxuICBSZW1vdmVNZXNzYWdlLFxuICBSZW1vdmVNZXNzYWdlc0J5VHlwZSxcbn0gZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHbG9iYWxNZXNzYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2U+KSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGdsb2JhbCBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0KCk6IE9ic2VydmFibGU8R2xvYmFsTWVzc2FnZUVudGl0aWVzPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXMpLFxuICAgICAgZmlsdGVyKGRhdGEgPT4gZGF0YSAhPT0gdW5kZWZpbmVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9uZSBtZXNzYWdlIGludG8gc3RvcmVcbiAgICogQHBhcmFtIG1lc3NhZ2U6IEdsb2JhbE1lc3NhZ2Ugb2JqZWN0XG4gICAqL1xuICBhZGQodGV4dDogc3RyaW5nIHwgVHJhbnNsYXRhYmxlLCB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZE1lc3NhZ2UoeyB0ZXh0OiB7IHJhdzogdGV4dCB9LCB0eXBlIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkTWVzc2FnZSh7IHRleHQsIHR5cGUgfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbWVzc2FnZShzKSBmcm9tIHN0b3JlXG4gICAqIEBwYXJhbSB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZVxuICAgKiBAcGFyYW0gaW5kZXg6b3B0aW9uYWwuIFdpdGhvdXQgaXQsIG1lc3NhZ2VzIHdpbGwgYmUgcmVtb3ZlZCBieSB0eXBlOyBvdGhlcndpc2UsXG4gICAqIG1lc3NhZ2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gbGlzdCBieSBpbmRleC5cbiAgICovXG4gIHJlbW92ZSh0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFJlbW92ZU1lc3NhZ2Uoe1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgUmVtb3ZlTWVzc2FnZXNCeVR5cGUodHlwZSkpO1xuICAgIH1cbiAgfVxufVxuIl19