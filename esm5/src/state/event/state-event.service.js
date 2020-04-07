import { __decorate, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { EventService } from '../../event/event.service';
import { createFrom } from '../../util/create-from';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../event/event.service";
/**
 * Registers streams of ngrx actions as events source streams
 */
var StateEventService = /** @class */ (function () {
    function StateEventService(actionsSubject, eventService) {
        this.actionsSubject = actionsSubject;
        this.eventService = eventService;
    }
    /**
     * Registers an event source stream of specific events
     * mapped from a given action type.
     *
     * @param mapping mapping from action to event
     *
     * @returns a teardown function that unregisters the event source
     */
    StateEventService.prototype.register = function (mapping) {
        return this.eventService.register(mapping.event, this.getFromAction(mapping));
    };
    /**
     * Returns a stream of specific events mapped from a specific action.
     * @param mapping mapping from action to event
     */
    StateEventService.prototype.getFromAction = function (mapping) {
        var _this = this;
        return this.actionsSubject
            .pipe(ofType.apply(void 0, __spread([].concat(mapping.action))))
            .pipe(map(function (action) {
            return _this.createEvent(action, mapping.event, mapping.factory);
        }));
    };
    /**
     * Creates an event instance for given class out from the action object.
     * Unless the `factory` parameter is given, the action's `payload` is used
     * as the argument for the event's constructor.
     *
     * @param action instance of an Action
     * @param mapping mapping from action to event
     * @param factory optional function getting an action instance and returning an event instance
     *
     * @returns instance of an Event
     */
    StateEventService.prototype.createEvent = function (action, eventType, factory) {
        var _a;
        return factory
            ? factory(action)
            : createFrom(eventType, (_a = action.payload) !== null && _a !== void 0 ? _a : {});
    };
    StateEventService.ctorParameters = function () { return [
        { type: ActionsSubject },
        { type: EventService }
    ]; };
    StateEventService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StateEventService_Factory() { return new StateEventService(i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.EventService)); }, token: StateEventService, providedIn: "root" });
    StateEventService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], StateEventService);
    return StateEventService;
}());
export { StateEventService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9ldmVudC9zdGF0ZS1ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUdwRDs7R0FFRztBQUlIO0lBQ0UsMkJBQ1ksY0FBOEIsRUFDOUIsWUFBMEI7UUFEMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ25DLENBQUM7SUFFSjs7Ozs7OztPQU9HO0lBQ0gsb0NBQVEsR0FBUixVQUFZLE9BQWdDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQy9CLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FDNUIsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDTyx5Q0FBYSxHQUF2QixVQUEyQixPQUFnQztRQUEzRCxpQkFRQztRQVBDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDdkIsSUFBSSxDQUFDLE1BQU0sd0JBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUU7YUFDMUMsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLE1BQW9DO1lBQ3ZDLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQXhELENBQXdELENBQ3pELENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ08sdUNBQVcsR0FBckIsVUFDRSxNQUF1QyxFQUN2QyxTQUFrQixFQUNsQixPQUE0Qjs7UUFFNUIsT0FBTyxPQUFPO1lBQ1osQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDakIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLFFBQUUsTUFBTSxDQUFDLE9BQU8sbUNBQUksRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBcEQyQixjQUFjO2dCQUNoQixZQUFZOzs7SUFIM0IsaUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxpQkFBaUIsQ0F1RDdCOzRCQXRFRDtDQXNFQyxBQXZERCxJQXVEQztTQXZEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbnNTdWJqZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXZlbnQvZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBjcmVhdGVGcm9tIH0gZnJvbSAnLi4vLi4vdXRpbC9jcmVhdGUtZnJvbSc7XG5pbXBvcnQgeyBBY3Rpb25Ub0V2ZW50TWFwcGluZyB9IGZyb20gJy4vYWN0aW9uLXRvLWV2ZW50LW1hcHBpbmcnO1xuXG4vKipcbiAqIFJlZ2lzdGVycyBzdHJlYW1zIG9mIG5ncnggYWN0aW9ucyBhcyBldmVudHMgc291cmNlIHN0cmVhbXNcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRlRXZlbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGlvbnNTdWJqZWN0OiBBY3Rpb25zU3ViamVjdCxcbiAgICBwcm90ZWN0ZWQgZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgc291cmNlIHN0cmVhbSBvZiBzcGVjaWZpYyBldmVudHNcbiAgICogbWFwcGVkIGZyb20gYSBnaXZlbiBhY3Rpb24gdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIG1hcHBpbmcgbWFwcGluZyBmcm9tIGFjdGlvbiB0byBldmVudFxuICAgKlxuICAgKiBAcmV0dXJucyBhIHRlYXJkb3duIGZ1bmN0aW9uIHRoYXQgdW5yZWdpc3RlcnMgdGhlIGV2ZW50IHNvdXJjZVxuICAgKi9cbiAgcmVnaXN0ZXI8VD4obWFwcGluZzogQWN0aW9uVG9FdmVudE1hcHBpbmc8VD4pOiAoKSA9PiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFNlcnZpY2UucmVnaXN0ZXIoXG4gICAgICBtYXBwaW5nLmV2ZW50LFxuICAgICAgdGhpcy5nZXRGcm9tQWN0aW9uKG1hcHBpbmcpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIHNwZWNpZmljIGV2ZW50cyBtYXBwZWQgZnJvbSBhIHNwZWNpZmljIGFjdGlvbi5cbiAgICogQHBhcmFtIG1hcHBpbmcgbWFwcGluZyBmcm9tIGFjdGlvbiB0byBldmVudFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldEZyb21BY3Rpb248VD4obWFwcGluZzogQWN0aW9uVG9FdmVudE1hcHBpbmc8VD4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zU3ViamVjdFxuICAgICAgLnBpcGUob2ZUeXBlKC4uLltdLmNvbmNhdChtYXBwaW5nLmFjdGlvbikpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoYWN0aW9uOiB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZDogVCB9KSA9PlxuICAgICAgICAgIHRoaXMuY3JlYXRlRXZlbnQoYWN0aW9uLCBtYXBwaW5nLmV2ZW50LCBtYXBwaW5nLmZhY3RvcnkpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBldmVudCBpbnN0YW5jZSBmb3IgZ2l2ZW4gY2xhc3Mgb3V0IGZyb20gdGhlIGFjdGlvbiBvYmplY3QuXG4gICAqIFVubGVzcyB0aGUgYGZhY3RvcnlgIHBhcmFtZXRlciBpcyBnaXZlbiwgdGhlIGFjdGlvbidzIGBwYXlsb2FkYCBpcyB1c2VkXG4gICAqIGFzIHRoZSBhcmd1bWVudCBmb3IgdGhlIGV2ZW50J3MgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb24gaW5zdGFuY2Ugb2YgYW4gQWN0aW9uXG4gICAqIEBwYXJhbSBtYXBwaW5nIG1hcHBpbmcgZnJvbSBhY3Rpb24gdG8gZXZlbnRcbiAgICogQHBhcmFtIGZhY3Rvcnkgb3B0aW9uYWwgZnVuY3Rpb24gZ2V0dGluZyBhbiBhY3Rpb24gaW5zdGFuY2UgYW5kIHJldHVybmluZyBhbiBldmVudCBpbnN0YW5jZVxuICAgKlxuICAgKiBAcmV0dXJucyBpbnN0YW5jZSBvZiBhbiBFdmVudFxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUV2ZW50PFQ+KFxuICAgIGFjdGlvbjogeyB0eXBlOiBzdHJpbmc7IHBheWxvYWQ/OiBhbnkgfSxcbiAgICBldmVudFR5cGU6IFR5cGU8VD4sXG4gICAgZmFjdG9yeT86IChhY3Rpb246IGFueSkgPT4gVFxuICApOiBUIHtcbiAgICByZXR1cm4gZmFjdG9yeVxuICAgICAgPyBmYWN0b3J5KGFjdGlvbilcbiAgICAgIDogY3JlYXRlRnJvbShldmVudFR5cGUsIGFjdGlvbi5wYXlsb2FkID8/IHt9KTtcbiAgfVxufVxuIl19