import { __decorate, __read, __spread } from "tslib";
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
        return factory ? factory(action) : new eventType((_a = action.payload) !== null && _a !== void 0 ? _a : {});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9ldmVudC9zdGF0ZS1ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBR2pEOztHQUVHO0FBSUg7SUFDRSwyQkFDWSxjQUE4QixFQUM5QixZQUEwQjtRQUQxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDbkMsQ0FBQztJQUVKOzs7Ozs7O09BT0c7SUFDSCxvQ0FBUSxHQUFSLFVBQVksT0FBZ0M7UUFDMUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDL0IsT0FBTyxDQUFDLEtBQUssRUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNPLHlDQUFhLEdBQXZCLFVBQTJCLE9BQWdDO1FBQTNELGlCQVFDO1FBUEMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUN2QixJQUFJLENBQUMsTUFBTSx3QkFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRTthQUMxQyxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsTUFBb0M7WUFDdkMsT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFBeEQsQ0FBd0QsQ0FDekQsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDTyx1Q0FBVyxHQUFyQixVQUNFLE1BQXVDLEVBQ3ZDLFNBQWtCLEVBQ2xCLE9BQTRCOztRQUU1QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsT0FBQyxNQUFNLENBQUMsT0FBTyxtQ0FBSSxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOztnQkFsRDJCLGNBQWM7Z0JBQ2hCLFlBQVk7OztJQUgzQixpQkFBaUI7UUFIN0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGlCQUFpQixDQXFEN0I7NEJBbkVEO0NBbUVDLEFBckRELElBcURDO1NBckRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9ldmVudC9pbmRleCc7XG5pbXBvcnQgeyBBY3Rpb25Ub0V2ZW50TWFwcGluZyB9IGZyb20gJy4vYWN0aW9uLXRvLWV2ZW50LW1hcHBpbmcnO1xuXG4vKipcbiAqIFJlZ2lzdGVycyBzdHJlYW1zIG9mIG5ncnggYWN0aW9ucyBhcyBldmVudHMgc291cmNlIHN0cmVhbXNcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRlRXZlbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGlvbnNTdWJqZWN0OiBBY3Rpb25zU3ViamVjdCxcbiAgICBwcm90ZWN0ZWQgZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgc291cmNlIHN0cmVhbSBvZiBzcGVjaWZpYyBldmVudHNcbiAgICogbWFwcGVkIGZyb20gYSBnaXZlbiBhY3Rpb24gdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIG1hcHBpbmcgbWFwcGluZyBmcm9tIGFjdGlvbiB0byBldmVudFxuICAgKlxuICAgKiBAcmV0dXJucyBhIHRlYXJkb3duIGZ1bmN0aW9uIHRoYXQgdW5yZWdpc3RlcnMgdGhlIGV2ZW50IHNvdXJjZVxuICAgKi9cbiAgcmVnaXN0ZXI8VD4obWFwcGluZzogQWN0aW9uVG9FdmVudE1hcHBpbmc8VD4pOiAoKSA9PiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFNlcnZpY2UucmVnaXN0ZXIoXG4gICAgICBtYXBwaW5nLmV2ZW50LFxuICAgICAgdGhpcy5nZXRGcm9tQWN0aW9uKG1hcHBpbmcpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIHNwZWNpZmljIGV2ZW50cyBtYXBwZWQgZnJvbSBhIHNwZWNpZmljIGFjdGlvbi5cbiAgICogQHBhcmFtIG1hcHBpbmcgbWFwcGluZyBmcm9tIGFjdGlvbiB0byBldmVudFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldEZyb21BY3Rpb248VD4obWFwcGluZzogQWN0aW9uVG9FdmVudE1hcHBpbmc8VD4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zU3ViamVjdFxuICAgICAgLnBpcGUob2ZUeXBlKC4uLltdLmNvbmNhdChtYXBwaW5nLmFjdGlvbikpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoYWN0aW9uOiB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZDogVCB9KSA9PlxuICAgICAgICAgIHRoaXMuY3JlYXRlRXZlbnQoYWN0aW9uLCBtYXBwaW5nLmV2ZW50LCBtYXBwaW5nLmZhY3RvcnkpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBldmVudCBpbnN0YW5jZSBmb3IgZ2l2ZW4gY2xhc3Mgb3V0IGZyb20gdGhlIGFjdGlvbiBvYmplY3QuXG4gICAqIFVubGVzcyB0aGUgYGZhY3RvcnlgIHBhcmFtZXRlciBpcyBnaXZlbiwgdGhlIGFjdGlvbidzIGBwYXlsb2FkYCBpcyB1c2VkXG4gICAqIGFzIHRoZSBhcmd1bWVudCBmb3IgdGhlIGV2ZW50J3MgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb24gaW5zdGFuY2Ugb2YgYW4gQWN0aW9uXG4gICAqIEBwYXJhbSBtYXBwaW5nIG1hcHBpbmcgZnJvbSBhY3Rpb24gdG8gZXZlbnRcbiAgICogQHBhcmFtIGZhY3Rvcnkgb3B0aW9uYWwgZnVuY3Rpb24gZ2V0dGluZyBhbiBhY3Rpb24gaW5zdGFuY2UgYW5kIHJldHVybmluZyBhbiBldmVudCBpbnN0YW5jZVxuICAgKlxuICAgKiBAcmV0dXJucyBpbnN0YW5jZSBvZiBhbiBFdmVudFxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUV2ZW50PFQ+KFxuICAgIGFjdGlvbjogeyB0eXBlOiBzdHJpbmc7IHBheWxvYWQ/OiBhbnkgfSxcbiAgICBldmVudFR5cGU6IFR5cGU8VD4sXG4gICAgZmFjdG9yeT86IChhY3Rpb246IGFueSkgPT4gVFxuICApOiBUIHtcbiAgICByZXR1cm4gZmFjdG9yeSA/IGZhY3RvcnkoYWN0aW9uKSA6IG5ldyBldmVudFR5cGUoYWN0aW9uLnBheWxvYWQgPz8ge30pO1xuICB9XG59XG4iXX0=