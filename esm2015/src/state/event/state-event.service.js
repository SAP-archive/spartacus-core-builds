import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { EventService } from '../../event/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../event/event.service";
/**
 * Registers streams of ngrx actions as events source streams
 */
let StateEventService = class StateEventService {
    constructor(actionsSubject, eventService) {
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
    register(mapping) {
        return this.eventService.register(mapping.event, this.getFromAction(mapping));
    }
    /**
     * Returns a stream of specific events mapped from a specific action.
     * @param mapping mapping from action to event
     */
    getFromAction(mapping) {
        return this.actionsSubject
            .pipe(ofType(...[].concat(mapping.action)))
            .pipe(map((action) => this.createEvent(action, mapping.event, mapping.factory)));
    }
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
    createEvent(action, eventType, factory) {
        var _a;
        return factory ? factory(action) : new eventType((_a = action.payload, (_a !== null && _a !== void 0 ? _a : {})));
    }
};
StateEventService.ctorParameters = () => [
    { type: ActionsSubject },
    { type: EventService }
];
StateEventService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StateEventService_Factory() { return new StateEventService(i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.EventService)); }, token: StateEventService, providedIn: "root" });
StateEventService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], StateEventService);
export { StateEventService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9ldmVudC9zdGF0ZS1ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBR2pEOztHQUVHO0FBSUgsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDNUIsWUFDWSxjQUE4QixFQUM5QixZQUEwQjtRQUQxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDbkMsQ0FBQztJQUVKOzs7Ozs7O09BT0c7SUFDSCxRQUFRLENBQUksT0FBZ0M7UUFDMUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDL0IsT0FBTyxDQUFDLEtBQUssRUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNPLGFBQWEsQ0FBSSxPQUFnQztRQUN6RCxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzFDLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxNQUFvQyxFQUFFLEVBQUUsQ0FDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQ3pELENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ08sV0FBVyxDQUNuQixNQUF1QyxFQUN2QyxTQUFrQixFQUNsQixPQUE0Qjs7UUFFNUIsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLE9BQUMsTUFBTSxDQUFDLE9BQU8sdUNBQUksRUFBRSxHQUFDLENBQUM7SUFDekUsQ0FBQztDQUNGLENBQUE7O1lBbkQ2QixjQUFjO1lBQ2hCLFlBQVk7OztBQUgzQixpQkFBaUI7SUFIN0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGlCQUFpQixDQXFEN0I7U0FyRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb25zU3ViamVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2V2ZW50L2luZGV4JztcbmltcG9ydCB7IEFjdGlvblRvRXZlbnRNYXBwaW5nIH0gZnJvbSAnLi9hY3Rpb24tdG8tZXZlbnQtbWFwcGluZyc7XG5cbi8qKlxuICogUmVnaXN0ZXJzIHN0cmVhbXMgb2YgbmdyeCBhY3Rpb25zIGFzIGV2ZW50cyBzb3VyY2Ugc3RyZWFtc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGVFdmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aW9uc1N1YmplY3Q6IEFjdGlvbnNTdWJqZWN0LFxuICAgIHByb3RlY3RlZCBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBzb3VyY2Ugc3RyZWFtIG9mIHNwZWNpZmljIGV2ZW50c1xuICAgKiBtYXBwZWQgZnJvbSBhIGdpdmVuIGFjdGlvbiB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gbWFwcGluZyBtYXBwaW5nIGZyb20gYWN0aW9uIHRvIGV2ZW50XG4gICAqXG4gICAqIEByZXR1cm5zIGEgdGVhcmRvd24gZnVuY3Rpb24gdGhhdCB1bnJlZ2lzdGVycyB0aGUgZXZlbnQgc291cmNlXG4gICAqL1xuICByZWdpc3RlcjxUPihtYXBwaW5nOiBBY3Rpb25Ub0V2ZW50TWFwcGluZzxUPik6ICgpID0+IHZvaWQge1xuICAgIHJldHVybiB0aGlzLmV2ZW50U2VydmljZS5yZWdpc3RlcihcbiAgICAgIG1hcHBpbmcuZXZlbnQsXG4gICAgICB0aGlzLmdldEZyb21BY3Rpb24obWFwcGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJlYW0gb2Ygc3BlY2lmaWMgZXZlbnRzIG1hcHBlZCBmcm9tIGEgc3BlY2lmaWMgYWN0aW9uLlxuICAgKiBAcGFyYW0gbWFwcGluZyBtYXBwaW5nIGZyb20gYWN0aW9uIHRvIGV2ZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0RnJvbUFjdGlvbjxUPihtYXBwaW5nOiBBY3Rpb25Ub0V2ZW50TWFwcGluZzxUPik6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbnNTdWJqZWN0XG4gICAgICAucGlwZShvZlR5cGUoLi4uW10uY29uY2F0KG1hcHBpbmcuYWN0aW9uKSkpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChhY3Rpb246IHsgdHlwZTogc3RyaW5nOyBwYXlsb2FkOiBUIH0pID0+XG4gICAgICAgICAgdGhpcy5jcmVhdGVFdmVudChhY3Rpb24sIG1hcHBpbmcuZXZlbnQsIG1hcHBpbmcuZmFjdG9yeSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGV2ZW50IGluc3RhbmNlIGZvciBnaXZlbiBjbGFzcyBvdXQgZnJvbSB0aGUgYWN0aW9uIG9iamVjdC5cbiAgICogVW5sZXNzIHRoZSBgZmFjdG9yeWAgcGFyYW1ldGVyIGlzIGdpdmVuLCB0aGUgYWN0aW9uJ3MgYHBheWxvYWRgIGlzIHVzZWRcbiAgICogYXMgdGhlIGFyZ3VtZW50IGZvciB0aGUgZXZlbnQncyBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIGFjdGlvbiBpbnN0YW5jZSBvZiBhbiBBY3Rpb25cbiAgICogQHBhcmFtIG1hcHBpbmcgbWFwcGluZyBmcm9tIGFjdGlvbiB0byBldmVudFxuICAgKiBAcGFyYW0gZmFjdG9yeSBvcHRpb25hbCBmdW5jdGlvbiBnZXR0aW5nIGFuIGFjdGlvbiBpbnN0YW5jZSBhbmQgcmV0dXJuaW5nIGFuIGV2ZW50IGluc3RhbmNlXG4gICAqXG4gICAqIEByZXR1cm5zIGluc3RhbmNlIG9mIGFuIEV2ZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlRXZlbnQ8VD4oXG4gICAgYWN0aW9uOiB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZD86IGFueSB9LFxuICAgIGV2ZW50VHlwZTogVHlwZTxUPixcbiAgICBmYWN0b3J5PzogKGFjdGlvbjogYW55KSA9PiBUXG4gICk6IFQge1xuICAgIHJldHVybiBmYWN0b3J5ID8gZmFjdG9yeShhY3Rpb24pIDogbmV3IGV2ZW50VHlwZShhY3Rpb24ucGF5bG9hZCA/PyB7fSk7XG4gIH1cbn1cbiJdfQ==