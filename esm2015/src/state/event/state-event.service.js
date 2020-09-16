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
export class StateEventService {
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
        return factory
            ? factory(action)
            : createFrom(eventType, (_a = action.payload) !== null && _a !== void 0 ? _a : {});
    }
}
StateEventService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StateEventService_Factory() { return new StateEventService(i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.EventService)); }, token: StateEventService, providedIn: "root" });
StateEventService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
StateEventService.ctorParameters = () => [
    { type: ActionsSubject },
    { type: EventService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3N0YXRlL2V2ZW50L3N0YXRlLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFHcEQ7O0dBRUc7QUFJSCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQ1ksY0FBOEIsRUFDOUIsWUFBMEI7UUFEMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ25DLENBQUM7SUFFSjs7Ozs7OztPQU9HO0lBQ0gsUUFBUSxDQUFJLE9BQWdDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQy9CLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FDNUIsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDTyxhQUFhLENBQUksT0FBZ0M7UUFDekQsT0FBTyxJQUFJLENBQUMsY0FBYzthQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUMxQyxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsTUFBb0MsRUFBRSxFQUFFLENBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUN6RCxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNPLFdBQVcsQ0FDbkIsTUFBdUMsRUFDdkMsU0FBa0IsRUFDbEIsT0FBNEI7O1FBRTVCLE9BQU8sT0FBTztZQUNaLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxRQUFFLE1BQU0sQ0FBQyxPQUFPLG1DQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7WUF6REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFaUSxjQUFjO1lBR2QsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9ldmVudC9ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IGNyZWF0ZUZyb20gfSBmcm9tICcuLi8uLi91dGlsL2NyZWF0ZS1mcm9tJztcbmltcG9ydCB7IEFjdGlvblRvRXZlbnRNYXBwaW5nIH0gZnJvbSAnLi9hY3Rpb24tdG8tZXZlbnQtbWFwcGluZyc7XG5cbi8qKlxuICogUmVnaXN0ZXJzIHN0cmVhbXMgb2YgbmdyeCBhY3Rpb25zIGFzIGV2ZW50cyBzb3VyY2Ugc3RyZWFtc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGVFdmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aW9uc1N1YmplY3Q6IEFjdGlvbnNTdWJqZWN0LFxuICAgIHByb3RlY3RlZCBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBzb3VyY2Ugc3RyZWFtIG9mIHNwZWNpZmljIGV2ZW50c1xuICAgKiBtYXBwZWQgZnJvbSBhIGdpdmVuIGFjdGlvbiB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gbWFwcGluZyBtYXBwaW5nIGZyb20gYWN0aW9uIHRvIGV2ZW50XG4gICAqXG4gICAqIEByZXR1cm5zIGEgdGVhcmRvd24gZnVuY3Rpb24gdGhhdCB1bnJlZ2lzdGVycyB0aGUgZXZlbnQgc291cmNlXG4gICAqL1xuICByZWdpc3RlcjxUPihtYXBwaW5nOiBBY3Rpb25Ub0V2ZW50TWFwcGluZzxUPik6ICgpID0+IHZvaWQge1xuICAgIHJldHVybiB0aGlzLmV2ZW50U2VydmljZS5yZWdpc3RlcihcbiAgICAgIG1hcHBpbmcuZXZlbnQsXG4gICAgICB0aGlzLmdldEZyb21BY3Rpb24obWFwcGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJlYW0gb2Ygc3BlY2lmaWMgZXZlbnRzIG1hcHBlZCBmcm9tIGEgc3BlY2lmaWMgYWN0aW9uLlxuICAgKiBAcGFyYW0gbWFwcGluZyBtYXBwaW5nIGZyb20gYWN0aW9uIHRvIGV2ZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0RnJvbUFjdGlvbjxUPihtYXBwaW5nOiBBY3Rpb25Ub0V2ZW50TWFwcGluZzxUPik6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbnNTdWJqZWN0XG4gICAgICAucGlwZShvZlR5cGUoLi4uW10uY29uY2F0KG1hcHBpbmcuYWN0aW9uKSkpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChhY3Rpb246IHsgdHlwZTogc3RyaW5nOyBwYXlsb2FkOiBUIH0pID0+XG4gICAgICAgICAgdGhpcy5jcmVhdGVFdmVudChhY3Rpb24sIG1hcHBpbmcuZXZlbnQsIG1hcHBpbmcuZmFjdG9yeSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGV2ZW50IGluc3RhbmNlIGZvciBnaXZlbiBjbGFzcyBvdXQgZnJvbSB0aGUgYWN0aW9uIG9iamVjdC5cbiAgICogVW5sZXNzIHRoZSBgZmFjdG9yeWAgcGFyYW1ldGVyIGlzIGdpdmVuLCB0aGUgYWN0aW9uJ3MgYHBheWxvYWRgIGlzIHVzZWRcbiAgICogYXMgdGhlIGFyZ3VtZW50IGZvciB0aGUgZXZlbnQncyBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIGFjdGlvbiBpbnN0YW5jZSBvZiBhbiBBY3Rpb25cbiAgICogQHBhcmFtIG1hcHBpbmcgbWFwcGluZyBmcm9tIGFjdGlvbiB0byBldmVudFxuICAgKiBAcGFyYW0gZmFjdG9yeSBvcHRpb25hbCBmdW5jdGlvbiBnZXR0aW5nIGFuIGFjdGlvbiBpbnN0YW5jZSBhbmQgcmV0dXJuaW5nIGFuIGV2ZW50IGluc3RhbmNlXG4gICAqXG4gICAqIEByZXR1cm5zIGluc3RhbmNlIG9mIGFuIEV2ZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlRXZlbnQ8VD4oXG4gICAgYWN0aW9uOiB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZD86IGFueSB9LFxuICAgIGV2ZW50VHlwZTogVHlwZTxUPixcbiAgICBmYWN0b3J5PzogKGFjdGlvbjogYW55KSA9PiBUXG4gICk6IFQge1xuICAgIHJldHVybiBmYWN0b3J5XG4gICAgICA/IGZhY3RvcnkoYWN0aW9uKVxuICAgICAgOiBjcmVhdGVGcm9tKGV2ZW50VHlwZSwgYWN0aW9uLnBheWxvYWQgPz8ge30pO1xuICB9XG59XG4iXX0=