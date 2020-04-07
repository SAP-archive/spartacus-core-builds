import { __decorate, __read, __spread } from "tslib";
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
var CartEventBuilder = /** @class */ (function () {
    function CartEventBuilder(actionsSubject, event, activeCartService) {
        this.actionsSubject = actionsSubject;
        this.event = event;
        this.activeCartService = activeCartService;
        this.register();
    }
    /**
     * Registers events for the active cart
     */
    CartEventBuilder.prototype.register = function () {
        this.registerAddEntry();
    };
    /**
     * Register events for adding entry to the active cart
     */
    CartEventBuilder.prototype.registerAddEntry = function () {
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
    };
    /**
     * Registers a stream of target events mapped from the source actions that contain the cart id equal to the active cart id.
     *
     * @param mapping mapping declaration - from `action` string type to `event` class type
     *   (an with optional `factory` function - by default `action.payload` will be assigned to the properties of the event instance).
     */
    CartEventBuilder.prototype.registerMapped = function (mapping) {
        var eventStream$ = this.getAction(mapping.action).pipe(withLatestFrom(this.activeCartService.getActiveCartId()), filter(function (_a) {
            var _b = __read(_a, 2), action = _b[0], activeCartId = _b[1];
            return action.payload['cartId'] === activeCartId;
        } // assuming that action's payload contains the cart id
        ), map(function (_a) {
            var _b = __read(_a, 1), action = _b[0];
            return createFrom(mapping.event, action.payload);
        }));
        return this.event.register(mapping.event, eventStream$);
    };
    /**
     * Returns a stream of actions only of a given type(s)
     *
     * @param actionType type(s) of actions
     */
    CartEventBuilder.prototype.getAction = function (actionType) {
        return this.actionsSubject.pipe(ofType.apply(void 0, __spread([].concat(actionType))));
    };
    CartEventBuilder.ctorParameters = function () { return [
        { type: ActionsSubject },
        { type: EventService },
        { type: ActiveCartService }
    ]; };
    CartEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartEventBuilder_Factory() { return new CartEventBuilder(i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.EventService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CartEventBuilder, providedIn: "root" });
    CartEventBuilder = __decorate([
        Injectable({ providedIn: 'root' })
    ], CartEventBuilder);
    return CartEventBuilder;
}());
export { CartEventBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ldmVudC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZXZlbnQvY2FydC1ldmVudC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdkMsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixxQkFBcUIsRUFDckIsd0JBQXdCLEdBQ3pCLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV2Qjs7R0FFRztBQUVIO0lBQ0UsMEJBQ1ksY0FBOEIsRUFDOUIsS0FBbUIsRUFDbkIsaUJBQW9DO1FBRnBDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFOUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNPLG1DQUFRLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBQ08sMkNBQWdCLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNsQixNQUFNLEVBQUUsV0FBVyxDQUFDLGNBQWM7WUFDbEMsS0FBSyxFQUFFLGlCQUFpQjtTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMsc0JBQXNCO1lBQzFDLEtBQUssRUFBRSx3QkFBd0I7U0FDaEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNsQixNQUFNLEVBQUUsV0FBVyxDQUFDLG1CQUFtQjtZQUN2QyxLQUFLLEVBQUUscUJBQXFCO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLHlDQUFjLEdBQXhCLFVBQTRCLE9BQWdDO1FBQzFELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDdEQsY0FBYyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUN4RCxNQUFNLENBQ0osVUFBQyxFQUFzQjtnQkFBdEIsa0JBQXNCLEVBQXJCLGNBQU0sRUFBRSxvQkFBWTtZQUFNLE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxZQUFZO1FBQXpDLENBQXlDLENBQUMsc0RBQXNEO1NBQzdILEVBQ0QsR0FBRyxDQUFDLFVBQUMsRUFBUTtnQkFBUixrQkFBUSxFQUFQLGNBQU07WUFBTSxPQUFBLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFBekMsQ0FBeUMsQ0FBQyxDQUM3RCxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7OztPQUlHO0lBQ08sb0NBQVMsR0FBbkIsVUFDRSxVQUE2QjtRQUU3QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sd0JBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRSxDQUFDO0lBQ3BFLENBQUM7O2dCQTNEMkIsY0FBYztnQkFDdkIsWUFBWTtnQkFDQSxpQkFBaUI7OztJQUpyQyxnQkFBZ0I7UUFENUIsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLGdCQUFnQixDQThENUI7MkJBbEZEO0NBa0ZDLEFBOURELElBOERDO1NBOURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9ldmVudC9ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGlvblRvRXZlbnRNYXBwaW5nIH0gZnJvbSAnLi4vLi4vc3RhdGUvZXZlbnQvYWN0aW9uLXRvLWV2ZW50LW1hcHBpbmcnO1xuaW1wb3J0IHsgY3JlYXRlRnJvbSB9IGZyb20gJy4uLy4uL3V0aWwvY3JlYXRlLWZyb20nO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7XG4gIENhcnRBZGRFbnRyeUV2ZW50LFxuICBDYXJ0QWRkRW50cnlGYWlsRXZlbnQsXG4gIENhcnRBZGRFbnRyeVN1Y2Nlc3NFdmVudCxcbn0gZnJvbSAnLi9jYXJ0LmV2ZW50cyc7XG5cbi8qKlxuICogUmVnaXN0ZXJzIGV2ZW50cyBmb3IgdGhlIGFjdGl2ZSBjYXJ0XG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2FydEV2ZW50QnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhY3Rpb25zU3ViamVjdDogQWN0aW9uc1N1YmplY3QsXG4gICAgcHJvdGVjdGVkIGV2ZW50OiBFdmVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGV2ZW50cyBmb3IgdGhlIGFjdGl2ZSBjYXJ0XG4gICAqL1xuICBwcm90ZWN0ZWQgcmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5yZWdpc3RlckFkZEVudHJ5KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgZXZlbnRzIGZvciBhZGRpbmcgZW50cnkgdG8gdGhlIGFjdGl2ZSBjYXJ0XG4gICAqL1xuICBwcm90ZWN0ZWQgcmVnaXN0ZXJBZGRFbnRyeSgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyTWFwcGVkKHtcbiAgICAgIGFjdGlvbjogQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUlksXG4gICAgICBldmVudDogQ2FydEFkZEVudHJ5RXZlbnQsXG4gICAgfSk7XG4gICAgdGhpcy5yZWdpc3Rlck1hcHBlZCh7XG4gICAgICBhY3Rpb246IENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBldmVudDogQ2FydEFkZEVudHJ5U3VjY2Vzc0V2ZW50LFxuICAgIH0pO1xuICAgIHRoaXMucmVnaXN0ZXJNYXBwZWQoe1xuICAgICAgYWN0aW9uOiBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWV9GQUlMLFxuICAgICAgZXZlbnQ6IENhcnRBZGRFbnRyeUZhaWxFdmVudCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBzdHJlYW0gb2YgdGFyZ2V0IGV2ZW50cyBtYXBwZWQgZnJvbSB0aGUgc291cmNlIGFjdGlvbnMgdGhhdCBjb250YWluIHRoZSBjYXJ0IGlkIGVxdWFsIHRvIHRoZSBhY3RpdmUgY2FydCBpZC5cbiAgICpcbiAgICogQHBhcmFtIG1hcHBpbmcgbWFwcGluZyBkZWNsYXJhdGlvbiAtIGZyb20gYGFjdGlvbmAgc3RyaW5nIHR5cGUgdG8gYGV2ZW50YCBjbGFzcyB0eXBlXG4gICAqICAgKGFuIHdpdGggb3B0aW9uYWwgYGZhY3RvcnlgIGZ1bmN0aW9uIC0gYnkgZGVmYXVsdCBgYWN0aW9uLnBheWxvYWRgIHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIHByb3BlcnRpZXMgb2YgdGhlIGV2ZW50IGluc3RhbmNlKS5cbiAgICovXG4gIHByb3RlY3RlZCByZWdpc3Rlck1hcHBlZDxUPihtYXBwaW5nOiBBY3Rpb25Ub0V2ZW50TWFwcGluZzxUPik6ICgpID0+IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50U3RyZWFtJCA9IHRoaXMuZ2V0QWN0aW9uKG1hcHBpbmcuYWN0aW9uKS5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBY3RpdmVDYXJ0SWQoKSksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChbYWN0aW9uLCBhY3RpdmVDYXJ0SWRdKSA9PiBhY3Rpb24ucGF5bG9hZFsnY2FydElkJ10gPT09IGFjdGl2ZUNhcnRJZCAvLyBhc3N1bWluZyB0aGF0IGFjdGlvbidzIHBheWxvYWQgY29udGFpbnMgdGhlIGNhcnQgaWRcbiAgICAgICksXG4gICAgICBtYXAoKFthY3Rpb25dKSA9PiBjcmVhdGVGcm9tKG1hcHBpbmcuZXZlbnQsIGFjdGlvbi5wYXlsb2FkKSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuZXZlbnQucmVnaXN0ZXIobWFwcGluZy5ldmVudCwgZXZlbnRTdHJlYW0kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIGFjdGlvbnMgb25seSBvZiBhIGdpdmVuIHR5cGUocylcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvblR5cGUgdHlwZShzKSBvZiBhY3Rpb25zXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QWN0aW9uKFxuICAgIGFjdGlvblR5cGU6IHN0cmluZyB8IHN0cmluZ1tdXG4gICk6IE9ic2VydmFibGU8eyB0eXBlOiBzdHJpbmc7IHBheWxvYWQ/OiBhbnkgfT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbnNTdWJqZWN0LnBpcGUob2ZUeXBlKC4uLltdLmNvbmNhdChhY3Rpb25UeXBlKSkpO1xuICB9XG59XG4iXX0=