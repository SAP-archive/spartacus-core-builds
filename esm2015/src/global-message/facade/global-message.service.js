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
     */
    add(text, type) {
        this.store.dispatch(new GlobalMessageActions.AddMessage({
            text: typeof text === 'string' ? { raw: text } : text,
            type,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHbEUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFBc0IsS0FBb0M7UUFBcEMsVUFBSyxHQUFMLEtBQUssQ0FBK0I7SUFBRyxDQUFDO0lBRTlEOztPQUVHO0lBQ0gsR0FBRztRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyx3QkFBd0IsQ0FBQyxFQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEdBQUcsQ0FBQyxJQUEyQixFQUFFLElBQXVCO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztZQUNsQyxJQUFJLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNyRCxJQUFJO1NBQ0wsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsSUFBdUIsRUFBRSxLQUFjO1FBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixLQUFLLEtBQUssU0FBUztZQUNqQixDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7Z0JBQ3JDLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQztZQUNKLENBQUMsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBMUM4QixLQUFLOztBQUR2QixvQkFBb0I7SUFEaEMsVUFBVSxFQUFFO0dBQ0Esb0JBQW9CLENBMkNoQztTQTNDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgU3RhdGVXaXRoR2xvYmFsTWVzc2FnZSxcbn0gZnJvbSAnLi4vc3RvcmUvZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHbG9iYWxNZXNzYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZT4pIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgZ2xvYmFsIG1lc3NhZ2VzXG4gICAqL1xuICBnZXQoKTogT2JzZXJ2YWJsZTxHbG9iYWxNZXNzYWdlRW50aXRpZXM+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEdsb2JhbE1lc3NhZ2VTZWxlY3RvcnMuZ2V0R2xvYmFsTWVzc2FnZUVudGl0aWVzKSxcbiAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEgIT09IHVuZGVmaW5lZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUgbWVzc2FnZSBpbnRvIHN0b3JlXG4gICAqIEBwYXJhbSB0ZXh0OiBzdHJpbmcgfCBUcmFuc2xhdGFibGVcbiAgICogQHBhcmFtIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlIG9iamVjdFxuICAgKi9cbiAgYWRkKHRleHQ6IHN0cmluZyB8IFRyYW5zbGF0YWJsZSwgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2Uoe1xuICAgICAgICB0ZXh0OiB0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycgPyB7IHJhdzogdGV4dCB9IDogdGV4dCxcbiAgICAgICAgdHlwZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbWVzc2FnZShzKSBmcm9tIHN0b3JlXG4gICAqIEBwYXJhbSB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZVxuICAgKiBAcGFyYW0gaW5kZXg6b3B0aW9uYWwuIFdpdGhvdXQgaXQsIG1lc3NhZ2VzIHdpbGwgYmUgcmVtb3ZlZCBieSB0eXBlOyBvdGhlcndpc2UsXG4gICAqIG1lc3NhZ2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gbGlzdCBieSBpbmRleC5cbiAgICovXG4gIHJlbW92ZSh0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZSwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgaW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICA/IG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZXNCeVR5cGUodHlwZSlcbiAgICApO1xuICB9XG59XG4iXX0=