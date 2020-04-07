import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject } from '@ngrx/store';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { EventService } from '../../event/event.service';
import { createFrom } from '../../util/create-from';
import { ActiveCartService } from '../facade/active-cart.service';
import { CartActions } from '../store';
import { CartAddEntryEvent, CartAddEntryFailEvent, CartAddEntrySuccessEvent, } from './cart.events';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../event/event.service";
import * as i3 from "../facade/active-cart.service";
/**
 * Registers events for the active cart
 */
let CartEventBuilder = class CartEventBuilder {
    constructor(actionsSubject, event, activeCartService) {
        this.actionsSubject = actionsSubject;
        this.event = event;
        this.activeCartService = activeCartService;
        this.register();
    }
    /**
     * Registers events for the active cart
     */
    register() {
        this.registerAddEntry();
    }
    /**
     * Register events for adding entry to the active cart
     */
    registerAddEntry() {
        this.registerMapped({
            action: CartActions.CART_ADD_ENTRY,
            event: CartAddEntryEvent,
        });
        this.registerMapped({
            action: CartActions.CART_ADD_ENTRY_SUCCESS,
            event: CartAddEntrySuccessEvent,
        });
        this.registerMapped({
            action: CartActions.CART_ADD_ENTRY_FAIL,
            event: CartAddEntryFailEvent,
        });
    }
    /**
     * Registers a stream of target events mapped from the source actions that contain the cart id equal to the active cart id.
     *
     * @param mapping mapping declaration - from `action` string type to `event` class type
     *   (an with optional `factory` function - by default `action.payload` will be assigned to the properties of the event instance).
     */
    registerMapped(mapping) {
        const eventStream$ = this.getAction(mapping.action).pipe(withLatestFrom(this.activeCartService.getActiveCartId()), filter(([action, activeCartId]) => action.payload['cartId'] === activeCartId // assuming that action's payload contains the cart id
        ), map(([action]) => createFrom(mapping.event, action.payload)));
        return this.event.register(mapping.event, eventStream$);
    }
    /**
     * Returns a stream of actions only of a given type(s)
     *
     * @param actionType type(s) of actions
     */
    getAction(actionType) {
        return this.actionsSubject.pipe(ofType(...[].concat(actionType)));
    }
};
CartEventBuilder.ctorParameters = () => [
    { type: ActionsSubject },
    { type: EventService },
    { type: ActiveCartService }
];
CartEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartEventBuilder_Factory() { return new CartEventBuilder(i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.EventService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CartEventBuilder, providedIn: "root" });
CartEventBuilder = __decorate([
    Injectable({ providedIn: 'root' })
], CartEventBuilder);
export { CartEventBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ldmVudC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZXZlbnQvY2FydC1ldmVudC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdkMsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixxQkFBcUIsRUFDckIsd0JBQXdCLEdBQ3pCLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV2Qjs7R0FFRztBQUVILElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLFlBQ1ksY0FBOEIsRUFDOUIsS0FBbUIsRUFDbkIsaUJBQW9DO1FBRnBDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFOUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNPLFFBQVE7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBQ08sZ0JBQWdCO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDbEIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxjQUFjO1lBQ2xDLEtBQUssRUFBRSxpQkFBaUI7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNsQixNQUFNLEVBQUUsV0FBVyxDQUFDLHNCQUFzQjtZQUMxQyxLQUFLLEVBQUUsd0JBQXdCO1NBQ2hDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUM7WUFDbEIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxtQkFBbUI7WUFDdkMsS0FBSyxFQUFFLHFCQUFxQjtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxjQUFjLENBQUksT0FBZ0M7UUFDMUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUN0RCxjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQ3hELE1BQU0sQ0FDSixDQUFDLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFlBQVksQ0FBQyxzREFBc0Q7U0FDN0gsRUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDN0QsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFNBQVMsQ0FDakIsVUFBNkI7UUFFN0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQ0YsQ0FBQTs7WUE1RDZCLGNBQWM7WUFDdkIsWUFBWTtZQUNBLGlCQUFpQjs7O0FBSnJDLGdCQUFnQjtJQUQ1QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsZ0JBQWdCLENBOEQ1QjtTQTlEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbnNTdWJqZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXZlbnQvZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBY3Rpb25Ub0V2ZW50TWFwcGluZyB9IGZyb20gJy4uLy4uL3N0YXRlL2V2ZW50L2FjdGlvbi10by1ldmVudC1tYXBwaW5nJztcbmltcG9ydCB7IGNyZWF0ZUZyb20gfSBmcm9tICcuLi8uLi91dGlsL2NyZWF0ZS1mcm9tJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQge1xuICBDYXJ0QWRkRW50cnlFdmVudCxcbiAgQ2FydEFkZEVudHJ5RmFpbEV2ZW50LFxuICBDYXJ0QWRkRW50cnlTdWNjZXNzRXZlbnQsXG59IGZyb20gJy4vY2FydC5ldmVudHMnO1xuXG4vKipcbiAqIFJlZ2lzdGVycyBldmVudHMgZm9yIHRoZSBhY3RpdmUgY2FydFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENhcnRFdmVudEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aW9uc1N1YmplY3Q6IEFjdGlvbnNTdWJqZWN0LFxuICAgIHByb3RlY3RlZCBldmVudDogRXZlbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBldmVudHMgZm9yIHRoZSBhY3RpdmUgY2FydFxuICAgKi9cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMucmVnaXN0ZXJBZGRFbnRyeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGV2ZW50cyBmb3IgYWRkaW5nIGVudHJ5IHRvIHRoZSBhY3RpdmUgY2FydFxuICAgKi9cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyQWRkRW50cnkoKSB7XG4gICAgdGhpcy5yZWdpc3Rlck1hcHBlZCh7XG4gICAgICBhY3Rpb246IENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZLFxuICAgICAgZXZlbnQ6IENhcnRBZGRFbnRyeUV2ZW50LFxuICAgIH0pO1xuICAgIHRoaXMucmVnaXN0ZXJNYXBwZWQoe1xuICAgICAgYWN0aW9uOiBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWV9TVUNDRVNTLFxuICAgICAgZXZlbnQ6IENhcnRBZGRFbnRyeVN1Y2Nlc3NFdmVudCxcbiAgICB9KTtcbiAgICB0aGlzLnJlZ2lzdGVyTWFwcGVkKHtcbiAgICAgIGFjdGlvbjogQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUllfRkFJTCxcbiAgICAgIGV2ZW50OiBDYXJ0QWRkRW50cnlGYWlsRXZlbnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgc3RyZWFtIG9mIHRhcmdldCBldmVudHMgbWFwcGVkIGZyb20gdGhlIHNvdXJjZSBhY3Rpb25zIHRoYXQgY29udGFpbiB0aGUgY2FydCBpZCBlcXVhbCB0byB0aGUgYWN0aXZlIGNhcnQgaWQuXG4gICAqXG4gICAqIEBwYXJhbSBtYXBwaW5nIG1hcHBpbmcgZGVjbGFyYXRpb24gLSBmcm9tIGBhY3Rpb25gIHN0cmluZyB0eXBlIHRvIGBldmVudGAgY2xhc3MgdHlwZVxuICAgKiAgIChhbiB3aXRoIG9wdGlvbmFsIGBmYWN0b3J5YCBmdW5jdGlvbiAtIGJ5IGRlZmF1bHQgYGFjdGlvbi5wYXlsb2FkYCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBldmVudCBpbnN0YW5jZSkuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVnaXN0ZXJNYXBwZWQ8VD4obWFwcGluZzogQWN0aW9uVG9FdmVudE1hcHBpbmc8VD4pOiAoKSA9PiB2b2lkIHtcbiAgICBjb25zdCBldmVudFN0cmVhbSQgPSB0aGlzLmdldEFjdGlvbihtYXBwaW5nLmFjdGlvbikucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlQ2FydElkKCkpLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAoW2FjdGlvbiwgYWN0aXZlQ2FydElkXSkgPT4gYWN0aW9uLnBheWxvYWRbJ2NhcnRJZCddID09PSBhY3RpdmVDYXJ0SWQgLy8gYXNzdW1pbmcgdGhhdCBhY3Rpb24ncyBwYXlsb2FkIGNvbnRhaW5zIHRoZSBjYXJ0IGlkXG4gICAgICApLFxuICAgICAgbWFwKChbYWN0aW9uXSkgPT4gY3JlYXRlRnJvbShtYXBwaW5nLmV2ZW50LCBhY3Rpb24ucGF5bG9hZCkpXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmV2ZW50LnJlZ2lzdGVyKG1hcHBpbmcuZXZlbnQsIGV2ZW50U3RyZWFtJCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmVhbSBvZiBhY3Rpb25zIG9ubHkgb2YgYSBnaXZlbiB0eXBlKHMpXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb25UeXBlIHR5cGUocykgb2YgYWN0aW9uc1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldEFjdGlvbihcbiAgICBhY3Rpb25UeXBlOiBzdHJpbmcgfCBzdHJpbmdbXVxuICApOiBPYnNlcnZhYmxlPHsgdHlwZTogc3RyaW5nOyBwYXlsb2FkPzogYW55IH0+IHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zU3ViamVjdC5waXBlKG9mVHlwZSguLi5bXS5jb25jYXQoYWN0aW9uVHlwZSkpKTtcbiAgfVxufVxuIl19