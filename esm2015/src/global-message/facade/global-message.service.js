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
     * @protected
     */
    GlobalMessageService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUdMLHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsYUFBYSxFQUNiLG9CQUFvQixHQUNyQixNQUFNLGdCQUFnQixDQUFDO0FBSXhCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsWUFBc0IsS0FBb0M7UUFBcEMsVUFBSyxHQUFMLEtBQUssQ0FBK0I7SUFBRyxDQUFDOzs7OztJQUs5RCxHQUFHO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEVBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFPRCxHQUFHLENBQUMsSUFBMkIsRUFBRSxJQUF1QjtRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxVQUFVLENBQUM7WUFDYixJQUFJLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNyRCxJQUFJO1NBQ0wsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBUUQsTUFBTSxDQUFDLElBQXVCLEVBQUUsS0FBYztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsS0FBSyxLQUFLLFNBQVM7WUFDakIsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDO2dCQUNoQixJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsS0FBSzthQUNiLENBQUM7WUFDSixDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FDbkMsQ0FBQztJQUNKLENBQUM7OztZQTNDRixVQUFVOzs7O1lBZkYsS0FBSzs7Ozs7OztJQWlCQSxxQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG4gIFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UsXG4gIGdldEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgQWRkTWVzc2FnZSxcbiAgUmVtb3ZlTWVzc2FnZSxcbiAgUmVtb3ZlTWVzc2FnZXNCeVR5cGUsXG59IGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlPikge31cblxuICAvKipcbiAgICogR2V0IGFsbCBnbG9iYWwgbWVzc2FnZXNcbiAgICovXG4gIGdldCgpOiBPYnNlcnZhYmxlPEdsb2JhbE1lc3NhZ2VFbnRpdGllcz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0R2xvYmFsTWVzc2FnZUVudGl0aWVzKSxcbiAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEgIT09IHVuZGVmaW5lZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUgbWVzc2FnZSBpbnRvIHN0b3JlXG4gICAqIEBwYXJhbSB0ZXh0OiBzdHJpbmcgfCBUcmFuc2xhdGFibGVcbiAgICogQHBhcmFtIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlIG9iamVjdFxuICAgKi9cbiAgYWRkKHRleHQ6IHN0cmluZyB8IFRyYW5zbGF0YWJsZSwgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEFkZE1lc3NhZ2Uoe1xuICAgICAgICB0ZXh0OiB0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycgPyB7IHJhdzogdGV4dCB9IDogdGV4dCxcbiAgICAgICAgdHlwZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbWVzc2FnZShzKSBmcm9tIHN0b3JlXG4gICAqIEBwYXJhbSB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZVxuICAgKiBAcGFyYW0gaW5kZXg6b3B0aW9uYWwuIFdpdGhvdXQgaXQsIG1lc3NhZ2VzIHdpbGwgYmUgcmVtb3ZlZCBieSB0eXBlOyBvdGhlcndpc2UsXG4gICAqIG1lc3NhZ2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gbGlzdCBieSBpbmRleC5cbiAgICovXG4gIHJlbW92ZSh0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgaW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICA/IG5ldyBSZW1vdmVNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBuZXcgUmVtb3ZlTWVzc2FnZXNCeVR5cGUodHlwZSlcbiAgICApO1xuICB9XG59XG4iXX0=