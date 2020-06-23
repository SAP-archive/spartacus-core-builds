import { __decorate, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject } from '@ngrx/store';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { EventService } from '../../event/event.service';
import { createFrom } from '../../util/create-from';
import { ActiveCartService } from '../facade/active-cart.service';
import { CartActions } from '../store/index';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ldmVudC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZXZlbnQvY2FydC1ldmVudC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUNyQix3QkFBd0IsR0FDekIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXZCOztHQUVHO0FBRUg7SUFDRSwwQkFDWSxjQUE4QixFQUM5QixLQUFtQixFQUNuQixpQkFBb0M7UUFGcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU5QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ08sbUNBQVEsR0FBbEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDTywyQ0FBZ0IsR0FBMUI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMsY0FBYztZQUNsQyxLQUFLLEVBQUUsaUJBQWlCO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUM7WUFDbEIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxzQkFBc0I7WUFDMUMsS0FBSyxFQUFFLHdCQUF3QjtTQUNoQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMsbUJBQW1CO1lBQ3ZDLEtBQUssRUFBRSxxQkFBcUI7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08seUNBQWMsR0FBeEIsVUFBNEIsT0FBZ0M7UUFDMUQsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUN0RCxjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQ3hELE1BQU0sQ0FDSixVQUFDLEVBQXNCO2dCQUF0QixrQkFBc0IsRUFBckIsY0FBTSxFQUFFLG9CQUFZO1lBQU0sT0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFlBQVk7UUFBekMsQ0FBeUMsQ0FBQyxzREFBc0Q7U0FDN0gsRUFDRCxHQUFHLENBQUMsVUFBQyxFQUFRO2dCQUFSLGtCQUFRLEVBQVAsY0FBTTtZQUFNLE9BQUEsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUF6QyxDQUF5QyxDQUFDLENBQzdELENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxvQ0FBUyxHQUFuQixVQUNFLFVBQTZCO1FBRTdCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSx3QkFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFFLENBQUM7SUFDcEUsQ0FBQzs7Z0JBM0QyQixjQUFjO2dCQUN2QixZQUFZO2dCQUNBLGlCQUFpQjs7O0lBSnJDLGdCQUFnQjtRQUQ1QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsZ0JBQWdCLENBOEQ1QjsyQkFsRkQ7Q0FrRkMsQUE5REQsSUE4REM7U0E5RFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb25zU3ViamVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2V2ZW50L2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aW9uVG9FdmVudE1hcHBpbmcgfSBmcm9tICcuLi8uLi9zdGF0ZS9ldmVudC9hY3Rpb24tdG8tZXZlbnQtbWFwcGluZyc7XG5pbXBvcnQgeyBjcmVhdGVGcm9tIH0gZnJvbSAnLi4vLi4vdXRpbC9jcmVhdGUtZnJvbSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQ2FydEFkZEVudHJ5RXZlbnQsXG4gIENhcnRBZGRFbnRyeUZhaWxFdmVudCxcbiAgQ2FydEFkZEVudHJ5U3VjY2Vzc0V2ZW50LFxufSBmcm9tICcuL2NhcnQuZXZlbnRzJztcblxuLyoqXG4gKiBSZWdpc3RlcnMgZXZlbnRzIGZvciB0aGUgYWN0aXZlIGNhcnRcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDYXJ0RXZlbnRCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGlvbnNTdWJqZWN0OiBBY3Rpb25zU3ViamVjdCxcbiAgICBwcm90ZWN0ZWQgZXZlbnQ6IEV2ZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgZXZlbnRzIGZvciB0aGUgYWN0aXZlIGNhcnRcbiAgICovXG4gIHByb3RlY3RlZCByZWdpc3RlcigpIHtcbiAgICB0aGlzLnJlZ2lzdGVyQWRkRW50cnkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBldmVudHMgZm9yIGFkZGluZyBlbnRyeSB0byB0aGUgYWN0aXZlIGNhcnRcbiAgICovXG4gIHByb3RlY3RlZCByZWdpc3RlckFkZEVudHJ5KCkge1xuICAgIHRoaXMucmVnaXN0ZXJNYXBwZWQoe1xuICAgICAgYWN0aW9uOiBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWSxcbiAgICAgIGV2ZW50OiBDYXJ0QWRkRW50cnlFdmVudCxcbiAgICB9KTtcbiAgICB0aGlzLnJlZ2lzdGVyTWFwcGVkKHtcbiAgICAgIGFjdGlvbjogQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUllfU1VDQ0VTUyxcbiAgICAgIGV2ZW50OiBDYXJ0QWRkRW50cnlTdWNjZXNzRXZlbnQsXG4gICAgfSk7XG4gICAgdGhpcy5yZWdpc3Rlck1hcHBlZCh7XG4gICAgICBhY3Rpb246IENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZX0ZBSUwsXG4gICAgICBldmVudDogQ2FydEFkZEVudHJ5RmFpbEV2ZW50LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHN0cmVhbSBvZiB0YXJnZXQgZXZlbnRzIG1hcHBlZCBmcm9tIHRoZSBzb3VyY2UgYWN0aW9ucyB0aGF0IGNvbnRhaW4gdGhlIGNhcnQgaWQgZXF1YWwgdG8gdGhlIGFjdGl2ZSBjYXJ0IGlkLlxuICAgKlxuICAgKiBAcGFyYW0gbWFwcGluZyBtYXBwaW5nIGRlY2xhcmF0aW9uIC0gZnJvbSBgYWN0aW9uYCBzdHJpbmcgdHlwZSB0byBgZXZlbnRgIGNsYXNzIHR5cGVcbiAgICogICAoYW4gd2l0aCBvcHRpb25hbCBgZmFjdG9yeWAgZnVuY3Rpb24gLSBieSBkZWZhdWx0IGBhY3Rpb24ucGF5bG9hZGAgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgcHJvcGVydGllcyBvZiB0aGUgZXZlbnQgaW5zdGFuY2UpLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyTWFwcGVkPFQ+KG1hcHBpbmc6IEFjdGlvblRvRXZlbnRNYXBwaW5nPFQ+KTogKCkgPT4gdm9pZCB7XG4gICAgY29uc3QgZXZlbnRTdHJlYW0kID0gdGhpcy5nZXRBY3Rpb24obWFwcGluZy5hY3Rpb24pLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZUNhcnRJZCgpKSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKFthY3Rpb24sIGFjdGl2ZUNhcnRJZF0pID0+IGFjdGlvbi5wYXlsb2FkWydjYXJ0SWQnXSA9PT0gYWN0aXZlQ2FydElkIC8vIGFzc3VtaW5nIHRoYXQgYWN0aW9uJ3MgcGF5bG9hZCBjb250YWlucyB0aGUgY2FydCBpZFxuICAgICAgKSxcbiAgICAgIG1hcCgoW2FjdGlvbl0pID0+IGNyZWF0ZUZyb20obWFwcGluZy5ldmVudCwgYWN0aW9uLnBheWxvYWQpKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5ldmVudC5yZWdpc3RlcihtYXBwaW5nLmV2ZW50LCBldmVudFN0cmVhbSQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJlYW0gb2YgYWN0aW9ucyBvbmx5IG9mIGEgZ2l2ZW4gdHlwZShzKVxuICAgKlxuICAgKiBAcGFyYW0gYWN0aW9uVHlwZSB0eXBlKHMpIG9mIGFjdGlvbnNcbiAgICovXG4gIHByb3RlY3RlZCBnZXRBY3Rpb24oXG4gICAgYWN0aW9uVHlwZTogc3RyaW5nIHwgc3RyaW5nW11cbiAgKTogT2JzZXJ2YWJsZTx7IHR5cGU6IHN0cmluZzsgcGF5bG9hZD86IGFueSB9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uc1N1YmplY3QucGlwZShvZlR5cGUoLi4uW10uY29uY2F0KGFjdGlvblR5cGUpKSk7XG4gIH1cbn1cbiJdfQ==