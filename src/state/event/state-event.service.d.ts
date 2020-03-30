import { Type } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventService } from '../../event/index';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtZXZlbnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzdGF0ZS1ldmVudC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9ldmVudC9pbmRleCc7XG5pbXBvcnQgeyBBY3Rpb25Ub0V2ZW50TWFwcGluZyB9IGZyb20gJy4vYWN0aW9uLXRvLWV2ZW50LW1hcHBpbmcnO1xuLyoqXG4gKiBSZWdpc3RlcnMgc3RyZWFtcyBvZiBuZ3J4IGFjdGlvbnMgYXMgZXZlbnRzIHNvdXJjZSBzdHJlYW1zXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0YXRlRXZlbnRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgYWN0aW9uc1N1YmplY3Q6IEFjdGlvbnNTdWJqZWN0O1xuICAgIHByb3RlY3RlZCBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zU3ViamVjdDogQWN0aW9uc1N1YmplY3QsIGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgc291cmNlIHN0cmVhbSBvZiBzcGVjaWZpYyBldmVudHNcbiAgICAgKiBtYXBwZWQgZnJvbSBhIGdpdmVuIGFjdGlvbiB0eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1hcHBpbmcgbWFwcGluZyBmcm9tIGFjdGlvbiB0byBldmVudFxuICAgICAqXG4gICAgICogQHJldHVybnMgYSB0ZWFyZG93biBmdW5jdGlvbiB0aGF0IHVucmVnaXN0ZXJzIHRoZSBldmVudCBzb3VyY2VcbiAgICAgKi9cbiAgICByZWdpc3RlcjxUPihtYXBwaW5nOiBBY3Rpb25Ub0V2ZW50TWFwcGluZzxUPik6ICgpID0+IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmVhbSBvZiBzcGVjaWZpYyBldmVudHMgbWFwcGVkIGZyb20gYSBzcGVjaWZpYyBhY3Rpb24uXG4gICAgICogQHBhcmFtIG1hcHBpbmcgbWFwcGluZyBmcm9tIGFjdGlvbiB0byBldmVudFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRGcm9tQWN0aW9uPFQ+KG1hcHBpbmc6IEFjdGlvblRvRXZlbnRNYXBwaW5nPFQ+KTogT2JzZXJ2YWJsZTxUPjtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGV2ZW50IGluc3RhbmNlIGZvciBnaXZlbiBjbGFzcyBvdXQgZnJvbSB0aGUgYWN0aW9uIG9iamVjdC5cbiAgICAgKiBVbmxlc3MgdGhlIGBmYWN0b3J5YCBwYXJhbWV0ZXIgaXMgZ2l2ZW4sIHRoZSBhY3Rpb24ncyBgcGF5bG9hZGAgaXMgdXNlZFxuICAgICAqIGFzIHRoZSBhcmd1bWVudCBmb3IgdGhlIGV2ZW50J3MgY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWN0aW9uIGluc3RhbmNlIG9mIGFuIEFjdGlvblxuICAgICAqIEBwYXJhbSBtYXBwaW5nIG1hcHBpbmcgZnJvbSBhY3Rpb24gdG8gZXZlbnRcbiAgICAgKiBAcGFyYW0gZmFjdG9yeSBvcHRpb25hbCBmdW5jdGlvbiBnZXR0aW5nIGFuIGFjdGlvbiBpbnN0YW5jZSBhbmQgcmV0dXJuaW5nIGFuIGV2ZW50IGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBpbnN0YW5jZSBvZiBhbiBFdmVudFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjcmVhdGVFdmVudDxUPihhY3Rpb246IHtcbiAgICAgICAgdHlwZTogc3RyaW5nO1xuICAgICAgICBwYXlsb2FkPzogYW55O1xuICAgIH0sIGV2ZW50VHlwZTogVHlwZTxUPiwgZmFjdG9yeT86IChhY3Rpb246IGFueSkgPT4gVCk6IFQ7XG59XG4iXX0=