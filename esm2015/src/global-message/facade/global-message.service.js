/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { GlobalMessageActions } from '../store/actions/index';
import { GlobalMessageSelectors } from '../store/selectors/index';
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
        return this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageEntities), filter((/**
         * @param {?} data
         * @return {?}
         */
        data => data !== undefined)));
    }
    /**
     * Add one message into store
     * @param {?} text
     * @param {?} type
     * @return {?}
     */
    add(text, type) {
        this.store.dispatch(new GlobalMessageActions.AddMessage({
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
            ? new GlobalMessageActions.RemoveMessage({
                type: type,
                index: index,
            })
            : new GlobalMessageActions.RemoveMessagesByType(type));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHbEUsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUMvQixZQUFzQixLQUFvQztRQUFwQyxVQUFLLEdBQUwsS0FBSyxDQUErQjtJQUFHLENBQUM7Ozs7O0lBSzlELEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLENBQUMsRUFDdkQsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBQyxDQUNuQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQU9ELEdBQUcsQ0FBQyxJQUEyQixFQUFFLElBQXVCO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztZQUNsQyxJQUFJLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNyRCxJQUFJO1NBQ0wsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBUUQsTUFBTSxDQUFDLElBQXVCLEVBQUUsS0FBYztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsS0FBSyxLQUFLLFNBQVM7WUFDakIsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsYUFBYSxDQUFDO2dCQUNyQyxJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsS0FBSzthQUNiLENBQUM7WUFDSixDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FDeEQsQ0FBQztJQUNKLENBQUM7OztZQTNDRixVQUFVOzs7O1lBWk0sS0FBSzs7Ozs7OztJQWNSLHFDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0YWJsZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxuICBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlLFxufSBmcm9tICcuLi9zdG9yZS9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlPikge31cblxuICAvKipcbiAgICogR2V0IGFsbCBnbG9iYWwgbWVzc2FnZXNcbiAgICovXG4gIGdldCgpOiBPYnNlcnZhYmxlPEdsb2JhbE1lc3NhZ2VFbnRpdGllcz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoR2xvYmFsTWVzc2FnZVNlbGVjdG9ycy5nZXRHbG9iYWxNZXNzYWdlRW50aXRpZXMpLFxuICAgICAgZmlsdGVyKGRhdGEgPT4gZGF0YSAhPT0gdW5kZWZpbmVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9uZSBtZXNzYWdlIGludG8gc3RvcmVcbiAgICogQHBhcmFtIHRleHQ6IHN0cmluZyB8IFRyYW5zbGF0YWJsZVxuICAgKiBAcGFyYW0gdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUgb2JqZWN0XG4gICAqL1xuICBhZGQodGV4dDogc3RyaW5nIHwgVHJhbnNsYXRhYmxlLCB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuQWRkTWVzc2FnZSh7XG4gICAgICAgIHRleHQ6IHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJyA/IHsgcmF3OiB0ZXh0IH0gOiB0ZXh0LFxuICAgICAgICB0eXBlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBtZXNzYWdlKHMpIGZyb20gc3RvcmVcbiAgICogQHBhcmFtIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlXG4gICAqIEBwYXJhbSBpbmRleDpvcHRpb25hbC4gV2l0aG91dCBpdCwgbWVzc2FnZXMgd2lsbCBiZSByZW1vdmVkIGJ5IHR5cGU7IG90aGVyd2lzZSxcbiAgICogbWVzc2FnZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSBsaXN0IGJ5IGluZGV4LlxuICAgKi9cbiAgcmVtb3ZlKHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLCBpbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBpbmRleCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICB9KVxuICAgICAgICA6IG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlc0J5VHlwZSh0eXBlKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==