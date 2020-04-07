import { Type } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventService } from '../../event/event.service';
import { ActionToEventMapping } from './action-to-event-mapping';
/**
 * Registers streams of ngrx actions as events source streams
 */
import * as ɵngcc0 from '@angular/core';
export declare class StateEventService {
    protected actionsSubject: ActionsSubject;
    protected eventService: EventService;
    constructor(actionsSubject: ActionsSubject, eventService: EventService);
    /**
     * Registers an event source stream of specific events
     * mapped from a given action type.
     *
     * @param mapping mapping from action to event
     *
     * @returns a teardown function that unregisters the event source
     */
    register<T>(mapping: ActionToEventMapping<T>): () => void;
    /**
     * Returns a stream of specific events mapped from a specific action.
     * @param mapping mapping from action to event
     */
    protected getFromAction<T>(mapping: ActionToEventMapping<T>): Observable<T>;
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
    protected createEvent<T>(action: {
        type: string;
        payload?: any;
    }, eventType: Type<T>, factory?: (action: any) => T): T;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StateEventService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtZXZlbnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzdGF0ZS1ldmVudC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9ldmVudC9ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGlvblRvRXZlbnRNYXBwaW5nIH0gZnJvbSAnLi9hY3Rpb24tdG8tZXZlbnQtbWFwcGluZyc7XG4vKipcbiAqIFJlZ2lzdGVycyBzdHJlYW1zIG9mIG5ncnggYWN0aW9ucyBhcyBldmVudHMgc291cmNlIHN0cmVhbXNcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RhdGVFdmVudFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBhY3Rpb25zU3ViamVjdDogQWN0aW9uc1N1YmplY3Q7XG4gICAgcHJvdGVjdGVkIGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnNTdWJqZWN0OiBBY3Rpb25zU3ViamVjdCwgZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhbiBldmVudCBzb3VyY2Ugc3RyZWFtIG9mIHNwZWNpZmljIGV2ZW50c1xuICAgICAqIG1hcHBlZCBmcm9tIGEgZ2l2ZW4gYWN0aW9uIHR5cGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWFwcGluZyBtYXBwaW5nIGZyb20gYWN0aW9uIHRvIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBhIHRlYXJkb3duIGZ1bmN0aW9uIHRoYXQgdW5yZWdpc3RlcnMgdGhlIGV2ZW50IHNvdXJjZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyPFQ+KG1hcHBpbmc6IEFjdGlvblRvRXZlbnRNYXBwaW5nPFQ+KTogKCkgPT4gdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIHNwZWNpZmljIGV2ZW50cyBtYXBwZWQgZnJvbSBhIHNwZWNpZmljIGFjdGlvbi5cbiAgICAgKiBAcGFyYW0gbWFwcGluZyBtYXBwaW5nIGZyb20gYWN0aW9uIHRvIGV2ZW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEZyb21BY3Rpb248VD4obWFwcGluZzogQWN0aW9uVG9FdmVudE1hcHBpbmc8VD4pOiBPYnNlcnZhYmxlPFQ+O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gZXZlbnQgaW5zdGFuY2UgZm9yIGdpdmVuIGNsYXNzIG91dCBmcm9tIHRoZSBhY3Rpb24gb2JqZWN0LlxuICAgICAqIFVubGVzcyB0aGUgYGZhY3RvcnlgIHBhcmFtZXRlciBpcyBnaXZlbiwgdGhlIGFjdGlvbidzIGBwYXlsb2FkYCBpcyB1c2VkXG4gICAgICogYXMgdGhlIGFyZ3VtZW50IGZvciB0aGUgZXZlbnQncyBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3Rpb24gaW5zdGFuY2Ugb2YgYW4gQWN0aW9uXG4gICAgICogQHBhcmFtIG1hcHBpbmcgbWFwcGluZyBmcm9tIGFjdGlvbiB0byBldmVudFxuICAgICAqIEBwYXJhbSBmYWN0b3J5IG9wdGlvbmFsIGZ1bmN0aW9uIGdldHRpbmcgYW4gYWN0aW9uIGluc3RhbmNlIGFuZCByZXR1cm5pbmcgYW4gZXZlbnQgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGluc3RhbmNlIG9mIGFuIEV2ZW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUV2ZW50PFQ+KGFjdGlvbjoge1xuICAgICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgfSwgZXZlbnRUeXBlOiBUeXBlPFQ+LCBmYWN0b3J5PzogKGFjdGlvbjogYW55KSA9PiBUKTogVDtcbn1cbiJdfQ==