import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { GlobalMessageActions } from '../store/actions/index';
import { GlobalMessageSelectors } from '../store/selectors/index';
var GlobalMessageService = /** @class */ (function () {
    function GlobalMessageService(store) {
        this.store = store;
    }
    /**
     * Get all global messages
     */
    GlobalMessageService.prototype.get = function () {
        return this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageEntities), filter(function (data) { return data !== undefined; }));
    };
    /**
     * Add one message into store
     * @param text: string | Translatable
     * @param type: GlobalMessageType object
     * @param timeout: number
     */
    GlobalMessageService.prototype.add = function (text, type, timeout) {
        this.store.dispatch(new GlobalMessageActions.AddMessage({
            text: typeof text === 'string' ? { raw: text } : text,
            type: type,
            timeout: timeout,
        }));
    };
    /**
     * Remove message(s) from store
     * @param type: GlobalMessageType
     * @param index:optional. Without it, messages will be removed by type; otherwise,
     * message will be removed from list by index.
     */
    GlobalMessageService.prototype.remove = function (type, index) {
        this.store.dispatch(index !== undefined
            ? new GlobalMessageActions.RemoveMessage({
                type: type,
                index: index,
            })
            : new GlobalMessageActions.RemoveMessagesByType(type));
    };
    GlobalMessageService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    GlobalMessageService = __decorate([
        Injectable()
    ], GlobalMessageService);
    return GlobalMessageService;
}());
export { GlobalMessageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHbEU7SUFDRSw4QkFBc0IsS0FBb0M7UUFBcEMsVUFBSyxHQUFMLEtBQUssQ0FBK0I7SUFBRyxDQUFDO0lBRTlEOztPQUVHO0lBQ0gsa0NBQUcsR0FBSDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyx3QkFBd0IsQ0FBQyxFQUN2RCxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssU0FBUyxFQUFsQixDQUFrQixDQUFDLENBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxrQ0FBRyxHQUFILFVBQ0UsSUFBMkIsRUFDM0IsSUFBdUIsRUFDdkIsT0FBZ0I7UUFFaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksb0JBQW9CLENBQUMsVUFBVSxDQUFDO1lBQ2xDLElBQUksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3JELElBQUksTUFBQTtZQUNKLE9BQU8sU0FBQTtTQUNSLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUNBQU0sR0FBTixVQUFPLElBQXVCLEVBQUUsS0FBYztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsS0FBSyxLQUFLLFNBQVM7WUFDakIsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsYUFBYSxDQUFDO2dCQUNyQyxJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsS0FBSzthQUNiLENBQUM7WUFDSixDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FDeEQsQ0FBQztJQUNKLENBQUM7O2dCQS9DNEIsS0FBSzs7SUFEdkIsb0JBQW9CO1FBRGhDLFVBQVUsRUFBRTtPQUNBLG9CQUFvQixDQWlEaEM7SUFBRCwyQkFBQztDQUFBLEFBakRELElBaURDO1NBakRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0YWJsZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxuICBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlLFxufSBmcm9tICcuLi9zdG9yZS9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlPikge31cblxuICAvKipcbiAgICogR2V0IGFsbCBnbG9iYWwgbWVzc2FnZXNcbiAgICovXG4gIGdldCgpOiBPYnNlcnZhYmxlPEdsb2JhbE1lc3NhZ2VFbnRpdGllcz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoR2xvYmFsTWVzc2FnZVNlbGVjdG9ycy5nZXRHbG9iYWxNZXNzYWdlRW50aXRpZXMpLFxuICAgICAgZmlsdGVyKGRhdGEgPT4gZGF0YSAhPT0gdW5kZWZpbmVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9uZSBtZXNzYWdlIGludG8gc3RvcmVcbiAgICogQHBhcmFtIHRleHQ6IHN0cmluZyB8IFRyYW5zbGF0YWJsZVxuICAgKiBAcGFyYW0gdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUgb2JqZWN0XG4gICAqIEBwYXJhbSB0aW1lb3V0OiBudW1iZXJcbiAgICovXG4gIGFkZChcbiAgICB0ZXh0OiBzdHJpbmcgfCBUcmFuc2xhdGFibGUsXG4gICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUsXG4gICAgdGltZW91dD86IG51bWJlclxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2Uoe1xuICAgICAgICB0ZXh0OiB0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycgPyB7IHJhdzogdGV4dCB9IDogdGV4dCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdGltZW91dCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbWVzc2FnZShzKSBmcm9tIHN0b3JlXG4gICAqIEBwYXJhbSB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZVxuICAgKiBAcGFyYW0gaW5kZXg6b3B0aW9uYWwuIFdpdGhvdXQgaXQsIG1lc3NhZ2VzIHdpbGwgYmUgcmVtb3ZlZCBieSB0eXBlOyBvdGhlcndpc2UsXG4gICAqIG1lc3NhZ2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gbGlzdCBieSBpbmRleC5cbiAgICovXG4gIHJlbW92ZSh0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgaW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICA/IG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZXNCeVR5cGUodHlwZSlcbiAgICApO1xuICB9XG59XG4iXX0=