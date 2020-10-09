import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject } from '@ngrx/store';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { EventService } from '../../event/event.service';
import { createFrom } from '../../util/create-from';
import { ActiveCartService } from '../facade/active-cart.service';
import { CartActions } from '../store/index';
import { CartAddEntryEvent, CartAddEntryFailEvent, CartAddEntrySuccessEvent, CartRemoveEntrySuccessEvent, CartUpdateEntrySuccessEvent, } from './cart.events';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../event/event.service";
import * as i3 from "../facade/active-cart.service";
/**
 * Registers events for the active cart
 */
export class CartEventBuilder {
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
        this.registerRemoveEntry();
        this.registerUpdateEntry();
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
    registerRemoveEntry() {
        this.registerMapped({
            action: CartActions.CART_REMOVE_ENTRY_SUCCESS,
            event: CartRemoveEntrySuccessEvent,
        });
    }
    registerUpdateEntry() {
        this.registerMapped({
            action: CartActions.CART_UPDATE_ENTRY_SUCCESS,
            event: CartUpdateEntrySuccessEvent,
        });
    }
    /**
     * Registers a stream of target events mapped from the source actions that contain the cart id equal to the active cart id.
     *
     * @param mapping mapping declaration - from `action` string type to `event` class type
     *   (an with optional `factory` function - by default `action.payload` will be assigned to the properties of the event instance).
     */
    registerMapped(mapping) {
        const eventStream$ = this.getAction(mapping.action).pipe(withLatestFrom(this.activeCartService.getActive()), filter(([action, activeCart]) => action.payload['cartId'] === activeCart.guid // assuming that action's payload contains the cart id
        ), map(([action, activeCart]) => createFrom(mapping.event, Object.assign(Object.assign({}, action.payload), { entry: action.payload.entry
                ? action.payload.entry
                : activeCart.entries[Number(action.payload.entryNumber)] }))));
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
}
CartEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartEventBuilder_Factory() { return new CartEventBuilder(i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.EventService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CartEventBuilder, providedIn: "root" });
CartEventBuilder.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
CartEventBuilder.ctorParameters = () => [
    { type: ActionsSubject },
    { type: EventService },
    { type: ActiveCartService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ldmVudC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvY2FydC9ldmVudC9jYXJ0LWV2ZW50LmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLDJCQUEyQixFQUMzQiwyQkFBMkIsR0FDNUIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXZCOztHQUVHO0FBRUgsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUNZLGNBQThCLEVBQzlCLEtBQW1CLEVBQ25CLGlCQUFvQztRQUZwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTlDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDTyxRQUFRO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7T0FFRztJQUNPLGdCQUFnQjtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMsY0FBYztZQUNsQyxLQUFLLEVBQUUsaUJBQWlCO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUM7WUFDbEIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxzQkFBc0I7WUFDMUMsS0FBSyxFQUFFLHdCQUF3QjtTQUNoQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMsbUJBQW1CO1lBQ3ZDLEtBQUssRUFBRSxxQkFBcUI7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLG1CQUFtQjtRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMseUJBQXlCO1lBQzdDLEtBQUssRUFBRSwyQkFBMkI7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLG1CQUFtQjtRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMseUJBQXlCO1lBQzdDLEtBQUssRUFBRSwyQkFBMkI7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sY0FBYyxDQUFJLE9BQWdDO1FBQzFELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDdEQsY0FBYyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUNsRCxNQUFNLENBQ0osQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLHNEQUFzRDtTQUM5SCxFQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FDM0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLGtDQUNuQixNQUFNLENBQUMsT0FBTyxLQUNqQixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2dCQUN6QixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2dCQUN0QixDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUMxRCxDQUNILENBQ0YsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFNBQVMsQ0FDakIsVUFBNkI7UUFFN0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7O1lBcEZGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQW5CekIsY0FBYztZQUdkLFlBQVk7WUFHWixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbnNTdWJqZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXZlbnQvZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBY3Rpb25Ub0V2ZW50TWFwcGluZyB9IGZyb20gJy4uLy4uL3N0YXRlL2V2ZW50L2FjdGlvbi10by1ldmVudC1tYXBwaW5nJztcbmltcG9ydCB7IGNyZWF0ZUZyb20gfSBmcm9tICcuLi8uLi91dGlsL2NyZWF0ZS1mcm9tJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5pbXBvcnQge1xuICBDYXJ0QWRkRW50cnlFdmVudCxcbiAgQ2FydEFkZEVudHJ5RmFpbEV2ZW50LFxuICBDYXJ0QWRkRW50cnlTdWNjZXNzRXZlbnQsXG4gIENhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NFdmVudCxcbiAgQ2FydFVwZGF0ZUVudHJ5U3VjY2Vzc0V2ZW50LFxufSBmcm9tICcuL2NhcnQuZXZlbnRzJztcblxuLyoqXG4gKiBSZWdpc3RlcnMgZXZlbnRzIGZvciB0aGUgYWN0aXZlIGNhcnRcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDYXJ0RXZlbnRCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGlvbnNTdWJqZWN0OiBBY3Rpb25zU3ViamVjdCxcbiAgICBwcm90ZWN0ZWQgZXZlbnQ6IEV2ZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgZXZlbnRzIGZvciB0aGUgYWN0aXZlIGNhcnRcbiAgICovXG4gIHByb3RlY3RlZCByZWdpc3RlcigpIHtcbiAgICB0aGlzLnJlZ2lzdGVyQWRkRW50cnkoKTtcbiAgICB0aGlzLnJlZ2lzdGVyUmVtb3ZlRW50cnkoKTtcbiAgICB0aGlzLnJlZ2lzdGVyVXBkYXRlRW50cnkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBldmVudHMgZm9yIGFkZGluZyBlbnRyeSB0byB0aGUgYWN0aXZlIGNhcnRcbiAgICovXG4gIHByb3RlY3RlZCByZWdpc3RlckFkZEVudHJ5KCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJNYXBwZWQoe1xuICAgICAgYWN0aW9uOiBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWSxcbiAgICAgIGV2ZW50OiBDYXJ0QWRkRW50cnlFdmVudCxcbiAgICB9KTtcbiAgICB0aGlzLnJlZ2lzdGVyTWFwcGVkKHtcbiAgICAgIGFjdGlvbjogQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUllfU1VDQ0VTUyxcbiAgICAgIGV2ZW50OiBDYXJ0QWRkRW50cnlTdWNjZXNzRXZlbnQsXG4gICAgfSk7XG4gICAgdGhpcy5yZWdpc3Rlck1hcHBlZCh7XG4gICAgICBhY3Rpb246IENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZX0ZBSUwsXG4gICAgICBldmVudDogQ2FydEFkZEVudHJ5RmFpbEV2ZW50LFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyUmVtb3ZlRW50cnkoKTogdm9pZCB7XG4gICAgdGhpcy5yZWdpc3Rlck1hcHBlZCh7XG4gICAgICBhY3Rpb246IENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBldmVudDogQ2FydFJlbW92ZUVudHJ5U3VjY2Vzc0V2ZW50LFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyVXBkYXRlRW50cnkoKTogdm9pZCB7XG4gICAgdGhpcy5yZWdpc3Rlck1hcHBlZCh7XG4gICAgICBhY3Rpb246IENhcnRBY3Rpb25zLkNBUlRfVVBEQVRFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBldmVudDogQ2FydFVwZGF0ZUVudHJ5U3VjY2Vzc0V2ZW50LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHN0cmVhbSBvZiB0YXJnZXQgZXZlbnRzIG1hcHBlZCBmcm9tIHRoZSBzb3VyY2UgYWN0aW9ucyB0aGF0IGNvbnRhaW4gdGhlIGNhcnQgaWQgZXF1YWwgdG8gdGhlIGFjdGl2ZSBjYXJ0IGlkLlxuICAgKlxuICAgKiBAcGFyYW0gbWFwcGluZyBtYXBwaW5nIGRlY2xhcmF0aW9uIC0gZnJvbSBgYWN0aW9uYCBzdHJpbmcgdHlwZSB0byBgZXZlbnRgIGNsYXNzIHR5cGVcbiAgICogICAoYW4gd2l0aCBvcHRpb25hbCBgZmFjdG9yeWAgZnVuY3Rpb24gLSBieSBkZWZhdWx0IGBhY3Rpb24ucGF5bG9hZGAgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgcHJvcGVydGllcyBvZiB0aGUgZXZlbnQgaW5zdGFuY2UpLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyTWFwcGVkPFQ+KG1hcHBpbmc6IEFjdGlvblRvRXZlbnRNYXBwaW5nPFQ+KTogKCkgPT4gdm9pZCB7XG4gICAgY29uc3QgZXZlbnRTdHJlYW0kID0gdGhpcy5nZXRBY3Rpb24obWFwcGluZy5hY3Rpb24pLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpKSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKFthY3Rpb24sIGFjdGl2ZUNhcnRdKSA9PiBhY3Rpb24ucGF5bG9hZFsnY2FydElkJ10gPT09IGFjdGl2ZUNhcnQuZ3VpZCAvLyBhc3N1bWluZyB0aGF0IGFjdGlvbidzIHBheWxvYWQgY29udGFpbnMgdGhlIGNhcnQgaWRcbiAgICAgICksXG4gICAgICBtYXAoKFthY3Rpb24sIGFjdGl2ZUNhcnRdKSA9PlxuICAgICAgICBjcmVhdGVGcm9tKG1hcHBpbmcuZXZlbnQsIHtcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICBlbnRyeTogYWN0aW9uLnBheWxvYWQuZW50cnlcbiAgICAgICAgICAgID8gYWN0aW9uLnBheWxvYWQuZW50cnlcbiAgICAgICAgICAgIDogYWN0aXZlQ2FydC5lbnRyaWVzW051bWJlcihhY3Rpb24ucGF5bG9hZC5lbnRyeU51bWJlcildLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnQucmVnaXN0ZXIobWFwcGluZy5ldmVudCwgZXZlbnRTdHJlYW0kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIGFjdGlvbnMgb25seSBvZiBhIGdpdmVuIHR5cGUocylcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvblR5cGUgdHlwZShzKSBvZiBhY3Rpb25zXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QWN0aW9uKFxuICAgIGFjdGlvblR5cGU6IHN0cmluZyB8IHN0cmluZ1tdXG4gICk6IE9ic2VydmFibGU8eyB0eXBlOiBzdHJpbmc7IHBheWxvYWQ/OiBhbnkgfT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbnNTdWJqZWN0LnBpcGUob2ZUeXBlKC4uLltdLmNvbmNhdChhY3Rpb25UeXBlKSkpO1xuICB9XG59XG4iXX0=