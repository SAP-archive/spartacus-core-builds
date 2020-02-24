import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { GlobalMessageActions } from '../store/actions/index';
import { GlobalMessageSelectors } from '../store/selectors/index';
let GlobalMessageService = class GlobalMessageService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Get all global messages
     */
    get() {
        return this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageEntities), filter(data => data !== undefined));
    }
    /**
     * Add one message into store
     * @param text: string | Translatable
     * @param type: GlobalMessageType object
     * @param timeout: number
     */
    add(text, type, timeout) {
        this.store.dispatch(new GlobalMessageActions.AddMessage({
            text: typeof text === 'string' ? { raw: text } : text,
            type,
            timeout,
        }));
    }
    /**
     * Remove message(s) from store
     * @param type: GlobalMessageType
     * @param index:optional. Without it, messages will be removed by type; otherwise,
     * message will be removed from list by index.
     */
    remove(type, index) {
        this.store.dispatch(index !== undefined
            ? new GlobalMessageActions.RemoveMessage({
                type: type,
                index: index,
            })
            : new GlobalMessageActions.RemoveMessagesByType(type));
    }
};
GlobalMessageService.ctorParameters = () => [
    { type: Store }
];
GlobalMessageService = __decorate([
    Injectable()
], GlobalMessageService);
export { GlobalMessageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHbEUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFBc0IsS0FBb0M7UUFBcEMsVUFBSyxHQUFMLEtBQUssQ0FBK0I7SUFBRyxDQUFDO0lBRTlEOztPQUVHO0lBQ0gsR0FBRztRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyx3QkFBd0IsQ0FBQyxFQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxHQUFHLENBQ0QsSUFBMkIsRUFDM0IsSUFBdUIsRUFDdkIsT0FBZ0I7UUFFaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksb0JBQW9CLENBQUMsVUFBVSxDQUFDO1lBQ2xDLElBQUksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3JELElBQUk7WUFDSixPQUFPO1NBQ1IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsSUFBdUIsRUFBRSxLQUFjO1FBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixLQUFLLEtBQUssU0FBUztZQUNqQixDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7Z0JBQ3JDLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQztZQUNKLENBQUMsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBaEQ4QixLQUFLOztBQUR2QixvQkFBb0I7SUFEaEMsVUFBVSxFQUFFO0dBQ0Esb0JBQW9CLENBaURoQztTQWpEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgU3RhdGVXaXRoR2xvYmFsTWVzc2FnZSxcbn0gZnJvbSAnLi4vc3RvcmUvZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHbG9iYWxNZXNzYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZT4pIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgZ2xvYmFsIG1lc3NhZ2VzXG4gICAqL1xuICBnZXQoKTogT2JzZXJ2YWJsZTxHbG9iYWxNZXNzYWdlRW50aXRpZXM+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEdsb2JhbE1lc3NhZ2VTZWxlY3RvcnMuZ2V0R2xvYmFsTWVzc2FnZUVudGl0aWVzKSxcbiAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEgIT09IHVuZGVmaW5lZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUgbWVzc2FnZSBpbnRvIHN0b3JlXG4gICAqIEBwYXJhbSB0ZXh0OiBzdHJpbmcgfCBUcmFuc2xhdGFibGVcbiAgICogQHBhcmFtIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlIG9iamVjdFxuICAgKiBAcGFyYW0gdGltZW91dDogbnVtYmVyXG4gICAqL1xuICBhZGQoXG4gICAgdGV4dDogc3RyaW5nIHwgVHJhbnNsYXRhYmxlLFxuICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLFxuICAgIHRpbWVvdXQ/OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BZGRNZXNzYWdlKHtcbiAgICAgICAgdGV4dDogdHlwZW9mIHRleHQgPT09ICdzdHJpbmcnID8geyByYXc6IHRleHQgfSA6IHRleHQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHRpbWVvdXQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIG1lc3NhZ2UocykgZnJvbSBzdG9yZVxuICAgKiBAcGFyYW0gdHlwZTogR2xvYmFsTWVzc2FnZVR5cGVcbiAgICogQHBhcmFtIGluZGV4Om9wdGlvbmFsLiBXaXRob3V0IGl0LCBtZXNzYWdlcyB3aWxsIGJlIHJlbW92ZWQgYnkgdHlwZTsgb3RoZXJ3aXNlLFxuICAgKiBtZXNzYWdlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIGxpc3QgYnkgaW5kZXguXG4gICAqL1xuICByZW1vdmUodHlwZTogR2xvYmFsTWVzc2FnZVR5cGUsIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIGluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIH0pXG4gICAgICAgIDogbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2VzQnlUeXBlKHR5cGUpXG4gICAgKTtcbiAgfVxufVxuIl19