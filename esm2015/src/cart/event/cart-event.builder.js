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
        const eventStream$ = this.getAction(mapping.action).pipe(withLatestFrom(this.activeCartService.getActive(), this.activeCartService.getActiveCartId()), filter(([action, _activeCart, activeCartId]) => action.payload['cartId'] === activeCartId), map(([action, activeCart]) => createFrom(mapping.event, Object.assign(Object.assign({}, action.payload), { cartCode: activeCart.code, entry: action.payload.entry
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ldmVudC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvY2FydC9ldmVudC9jYXJ0LWV2ZW50LmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLDJCQUEyQixFQUMzQiwyQkFBMkIsR0FDNUIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXZCOztHQUVHO0FBRUgsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUNZLGNBQThCLEVBQzlCLEtBQW1CLEVBQ25CLGlCQUFvQztRQUZwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTlDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDTyxRQUFRO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7T0FFRztJQUNPLGdCQUFnQjtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMsY0FBYztZQUNsQyxLQUFLLEVBQUUsaUJBQWlCO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUM7WUFDbEIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxzQkFBc0I7WUFDMUMsS0FBSyxFQUFFLHdCQUF3QjtTQUNoQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMsbUJBQW1CO1lBQ3ZDLEtBQUssRUFBRSxxQkFBcUI7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLG1CQUFtQjtRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMseUJBQXlCO1lBQzdDLEtBQUssRUFBRSwyQkFBMkI7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLG1CQUFtQjtRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMseUJBQXlCO1lBQzdDLEtBQUssRUFBRSwyQkFBMkI7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sY0FBYyxDQUFJLE9BQWdDO1FBQzFELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDdEQsY0FBYyxDQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsRUFDbEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUN6QyxFQUNELE1BQU0sQ0FDSixDQUFDLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFFLENBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssWUFBWSxDQUM1QyxFQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FDM0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLGtDQUNuQixNQUFNLENBQUMsT0FBTyxLQUNqQixRQUFRLEVBQUUsVUFBVSxDQUFDLElBQUksRUFDekIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDekIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDdEIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFDMUQsQ0FDSCxDQUNGLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxTQUFTLENBQ2pCLFVBQTZCO1FBRTdCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztZQXpGRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUFuQnpCLGNBQWM7WUFHZCxZQUFZO1lBR1osaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb25zU3ViamVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2V2ZW50L2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aW9uVG9FdmVudE1hcHBpbmcgfSBmcm9tICcuLi8uLi9zdGF0ZS9ldmVudC9hY3Rpb24tdG8tZXZlbnQtbWFwcGluZyc7XG5pbXBvcnQgeyBjcmVhdGVGcm9tIH0gZnJvbSAnLi4vLi4vdXRpbC9jcmVhdGUtZnJvbSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQ2FydEFkZEVudHJ5RXZlbnQsXG4gIENhcnRBZGRFbnRyeUZhaWxFdmVudCxcbiAgQ2FydEFkZEVudHJ5U3VjY2Vzc0V2ZW50LFxuICBDYXJ0UmVtb3ZlRW50cnlTdWNjZXNzRXZlbnQsXG4gIENhcnRVcGRhdGVFbnRyeVN1Y2Nlc3NFdmVudCxcbn0gZnJvbSAnLi9jYXJ0LmV2ZW50cyc7XG5cbi8qKlxuICogUmVnaXN0ZXJzIGV2ZW50cyBmb3IgdGhlIGFjdGl2ZSBjYXJ0XG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2FydEV2ZW50QnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhY3Rpb25zU3ViamVjdDogQWN0aW9uc1N1YmplY3QsXG4gICAgcHJvdGVjdGVkIGV2ZW50OiBFdmVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGV2ZW50cyBmb3IgdGhlIGFjdGl2ZSBjYXJ0XG4gICAqL1xuICBwcm90ZWN0ZWQgcmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5yZWdpc3RlckFkZEVudHJ5KCk7XG4gICAgdGhpcy5yZWdpc3RlclJlbW92ZUVudHJ5KCk7XG4gICAgdGhpcy5yZWdpc3RlclVwZGF0ZUVudHJ5KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgZXZlbnRzIGZvciBhZGRpbmcgZW50cnkgdG8gdGhlIGFjdGl2ZSBjYXJ0XG4gICAqL1xuICBwcm90ZWN0ZWQgcmVnaXN0ZXJBZGRFbnRyeSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyTWFwcGVkKHtcbiAgICAgIGFjdGlvbjogQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUlksXG4gICAgICBldmVudDogQ2FydEFkZEVudHJ5RXZlbnQsXG4gICAgfSk7XG4gICAgdGhpcy5yZWdpc3Rlck1hcHBlZCh7XG4gICAgICBhY3Rpb246IENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBldmVudDogQ2FydEFkZEVudHJ5U3VjY2Vzc0V2ZW50LFxuICAgIH0pO1xuICAgIHRoaXMucmVnaXN0ZXJNYXBwZWQoe1xuICAgICAgYWN0aW9uOiBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWV9GQUlMLFxuICAgICAgZXZlbnQ6IENhcnRBZGRFbnRyeUZhaWxFdmVudCxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlclJlbW92ZUVudHJ5KCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJNYXBwZWQoe1xuICAgICAgYWN0aW9uOiBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTLFxuICAgICAgZXZlbnQ6IENhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NFdmVudCxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlclVwZGF0ZUVudHJ5KCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJNYXBwZWQoe1xuICAgICAgYWN0aW9uOiBDYXJ0QWN0aW9ucy5DQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTLFxuICAgICAgZXZlbnQ6IENhcnRVcGRhdGVFbnRyeVN1Y2Nlc3NFdmVudCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBzdHJlYW0gb2YgdGFyZ2V0IGV2ZW50cyBtYXBwZWQgZnJvbSB0aGUgc291cmNlIGFjdGlvbnMgdGhhdCBjb250YWluIHRoZSBjYXJ0IGlkIGVxdWFsIHRvIHRoZSBhY3RpdmUgY2FydCBpZC5cbiAgICpcbiAgICogQHBhcmFtIG1hcHBpbmcgbWFwcGluZyBkZWNsYXJhdGlvbiAtIGZyb20gYGFjdGlvbmAgc3RyaW5nIHR5cGUgdG8gYGV2ZW50YCBjbGFzcyB0eXBlXG4gICAqICAgKGFuIHdpdGggb3B0aW9uYWwgYGZhY3RvcnlgIGZ1bmN0aW9uIC0gYnkgZGVmYXVsdCBgYWN0aW9uLnBheWxvYWRgIHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIHByb3BlcnRpZXMgb2YgdGhlIGV2ZW50IGluc3RhbmNlKS5cbiAgICovXG4gIHByb3RlY3RlZCByZWdpc3Rlck1hcHBlZDxUPihtYXBwaW5nOiBBY3Rpb25Ub0V2ZW50TWFwcGluZzxUPik6ICgpID0+IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50U3RyZWFtJCA9IHRoaXMuZ2V0QWN0aW9uKG1hcHBpbmcuYWN0aW9uKS5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlQ2FydElkKClcbiAgICAgICksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChbYWN0aW9uLCBfYWN0aXZlQ2FydCwgYWN0aXZlQ2FydElkXSkgPT5cbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsnY2FydElkJ10gPT09IGFjdGl2ZUNhcnRJZFxuICAgICAgKSxcbiAgICAgIG1hcCgoW2FjdGlvbiwgYWN0aXZlQ2FydF0pID0+XG4gICAgICAgIGNyZWF0ZUZyb20obWFwcGluZy5ldmVudCwge1xuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIGNhcnRDb2RlOiBhY3RpdmVDYXJ0LmNvZGUsXG4gICAgICAgICAgZW50cnk6IGFjdGlvbi5wYXlsb2FkLmVudHJ5XG4gICAgICAgICAgICA/IGFjdGlvbi5wYXlsb2FkLmVudHJ5XG4gICAgICAgICAgICA6IGFjdGl2ZUNhcnQuZW50cmllc1tOdW1iZXIoYWN0aW9uLnBheWxvYWQuZW50cnlOdW1iZXIpXSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmV2ZW50LnJlZ2lzdGVyKG1hcHBpbmcuZXZlbnQsIGV2ZW50U3RyZWFtJCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmVhbSBvZiBhY3Rpb25zIG9ubHkgb2YgYSBnaXZlbiB0eXBlKHMpXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb25UeXBlIHR5cGUocykgb2YgYWN0aW9uc1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldEFjdGlvbihcbiAgICBhY3Rpb25UeXBlOiBzdHJpbmcgfCBzdHJpbmdbXVxuICApOiBPYnNlcnZhYmxlPHsgdHlwZTogc3RyaW5nOyBwYXlsb2FkPzogYW55IH0+IHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zU3ViamVjdC5waXBlKG9mVHlwZSguLi5bXS5jb25jYXQoYWN0aW9uVHlwZSkpKTtcbiAgfVxufVxuIl19