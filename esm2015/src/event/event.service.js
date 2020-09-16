import { Injectable, isDevMode } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MergingSubject } from './utils/merging-subject';
import * as i0 from "@angular/core";
/**
 * A service to register and observe event sources. Events are driven by event types, which are class signatures
 * for the given event.
 *
 * It is possible to register multiple sources to a single event, even without
 * knowing as multiple decoupled features can attach sources to the same
 * event type.
 */
export class EventService {
    constructor() {
        /**
         * The various events meta are collected in a map, stored by the event type class
         */
        this.eventsMeta = new Map();
    }
    /**
     * Register an event source for the given event type.
     *
     * CAUTION: To avoid memory leaks, the returned teardown function should be called
     *  when the event source is no longer maintained by its creator
     * (i.e. in `ngOnDestroy` if the event source was registered in the component).
     *
     * @param eventType the event type
     * @param source$ an observable that represents the source
     *
     * @returns a teardown function which unregisters the given event source
     */
    register(eventType, source$) {
        const eventMeta = this.getEventMeta(eventType);
        if (eventMeta.mergingSubject.has(source$)) {
            if (isDevMode()) {
                console.warn(`EventService: the event source`, source$, `has been already registered for the type`, eventType);
            }
        }
        else {
            eventMeta.mergingSubject.add(source$);
        }
        return () => eventMeta.mergingSubject.remove(source$);
    }
    /**
     * Returns a stream of events for the given event type
     * @param eventTypes event type
     */
    get(eventType) {
        let output$ = this.getEventMeta(eventType).mergingSubject.output$;
        if (isDevMode()) {
            output$ = this.getValidatedEventStream(output$, eventType);
        }
        return output$;
    }
    /**
     * Dispatches an instance of an individual event.
     */
    dispatch(event) {
        const eventType = event.constructor;
        const inputSubject$ = this.getInputSubject(eventType);
        inputSubject$.next(event);
    }
    /**
     * Returns the input subject used to dispatch a single event.
     * The subject is created on demand, when it's needed for the first time.
     * @param eventType type of event
     */
    getInputSubject(eventType) {
        const eventMeta = this.getEventMeta(eventType);
        if (!eventMeta.inputSubject$) {
            eventMeta.inputSubject$ = new Subject();
            this.register(eventType, eventMeta.inputSubject$);
        }
        return eventMeta.inputSubject$;
    }
    /**
     * Returns the event meta object for the given event type
     */
    getEventMeta(eventType) {
        if (isDevMode()) {
            this.validateEventType(eventType);
        }
        if (!this.eventsMeta.get(eventType)) {
            this.createEventMeta(eventType);
        }
        return this.eventsMeta.get(eventType);
    }
    /**
     * Creates the event meta object for the given event type
     */
    createEventMeta(eventType) {
        this.eventsMeta.set(eventType, {
            inputSubject$: null,
            mergingSubject: new MergingSubject(),
        });
    }
    /**
     * Checks if the event type is a valid type (is a class with constructor).
     *
     * Should be used only in dev mode.
     */
    validateEventType(eventType) {
        if (!(eventType === null || eventType === void 0 ? void 0 : eventType.constructor)) {
            throw new Error(`EventService:  ${eventType} is not a valid event type. Please provide a class reference.`);
        }
    }
    /**
     * Returns the given event source with runtime validation whether the emitted values are instances of given event type.
     *
     * Should be used only in dev mode.
     */
    getValidatedEventStream(source$, eventType) {
        return source$.pipe(tap((event) => {
            if (!(event instanceof eventType)) {
                console.warn(`EventService: The stream`, source$, `emitted the event`, event, `that is not an instance of the declared type`, eventType.name);
            }
        }));
    }
}
EventService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(); }, token: EventService, providedIn: "root" });
EventService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2V2ZW50L2V2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQWlCekQ7Ozs7Ozs7R0FPRztBQUlILE1BQU0sT0FBTyxZQUFZO0lBSHpCO1FBSUU7O1dBRUc7UUFDSyxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7S0FpSTNEO0lBL0hDOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsUUFBUSxDQUFJLFNBQWtCLEVBQUUsT0FBc0I7UUFDcEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pDLElBQUksU0FBUyxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FDVixnQ0FBZ0MsRUFDaEMsT0FBTyxFQUNQLDBDQUEwQyxFQUMxQyxTQUFTLENBQ1YsQ0FBQzthQUNIO1NBQ0Y7YUFBTTtZQUNMLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsR0FBRyxDQUFJLFNBQWtCO1FBQ3ZCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUNsRSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRLENBQUMsS0FBYTtRQUNwQixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBd0IsQ0FBQztRQUNqRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxlQUFlLENBQUksU0FBa0I7UUFDM0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUM1QixTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNLLFlBQVksQ0FBSSxTQUFrQjtRQUN4QyxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7T0FFRztJQUNLLGVBQWUsQ0FBSSxTQUFrQjtRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsYUFBYSxFQUFFLElBQUk7WUFDbkIsY0FBYyxFQUFFLElBQUksY0FBYyxFQUFFO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssaUJBQWlCLENBQUksU0FBa0I7UUFDN0MsSUFBSSxFQUFDLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxXQUFXLENBQUEsRUFBRTtZQUMzQixNQUFNLElBQUksS0FBSyxDQUNiLGtCQUFrQixTQUFTLCtEQUErRCxDQUMzRixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLHVCQUF1QixDQUM3QixPQUFzQixFQUN0QixTQUFrQjtRQUVsQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ1osSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFNBQVMsQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLENBQUMsSUFBSSxDQUNWLDBCQUEwQixFQUMxQixPQUFPLEVBQ1AsbUJBQW1CLEVBQ25CLEtBQUssRUFDTCw4Q0FBOEMsRUFDOUMsU0FBUyxDQUFDLElBQUksQ0FDZixDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztZQXZJRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1lcmdpbmdTdWJqZWN0IH0gZnJvbSAnLi91dGlscy9tZXJnaW5nLXN1YmplY3QnO1xuXG4vKipcbiAqIFRoZSBvYmplY3QgaG9sZHMgcmVnaXN0ZXJlZCBzb3VyY2Ugb2JzZXJ2YWJsZXMgYXMgd2VsbCBhcyB0aGUgbWVyZ2VkIHJlc3VsdCBvYnNlcnZhYmxlLlxuICovXG5pbnRlcmZhY2UgRXZlbnRNZXRhPFQ+IHtcbiAgLyoqXG4gICAqIElucHV0IHN1YmplY3QgdXNlZCBmb3IgZGlzcGF0Y2hpbmcgb2NjYXNpb25hbCBldmVudCAod2l0aG91dCByZWdpc3RlcmluZyBhIHNvdXJjZSlcbiAgICovXG4gIGlucHV0U3ViamVjdCQ6IFN1YmplY3Q8VD47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHN1YmplY3QgdGhhdCBhbGxvd3MgZm9yIGR5bmFtaWMgYWRkaW5nIGFuZCByZW1vdmluZyBzb3VyY2VzIHRvIGJlIG1lcmdlZCBhcyBhbiBvdXRwdXRcbiAgICovXG4gIG1lcmdpbmdTdWJqZWN0OiBNZXJnaW5nU3ViamVjdDxUPjtcbn1cblxuLyoqXG4gKiBBIHNlcnZpY2UgdG8gcmVnaXN0ZXIgYW5kIG9ic2VydmUgZXZlbnQgc291cmNlcy4gRXZlbnRzIGFyZSBkcml2ZW4gYnkgZXZlbnQgdHlwZXMsIHdoaWNoIGFyZSBjbGFzcyBzaWduYXR1cmVzXG4gKiBmb3IgdGhlIGdpdmVuIGV2ZW50LlxuICpcbiAqIEl0IGlzIHBvc3NpYmxlIHRvIHJlZ2lzdGVyIG11bHRpcGxlIHNvdXJjZXMgdG8gYSBzaW5nbGUgZXZlbnQsIGV2ZW4gd2l0aG91dFxuICoga25vd2luZyBhcyBtdWx0aXBsZSBkZWNvdXBsZWQgZmVhdHVyZXMgY2FuIGF0dGFjaCBzb3VyY2VzIHRvIHRoZSBzYW1lXG4gKiBldmVudCB0eXBlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFRoZSB2YXJpb3VzIGV2ZW50cyBtZXRhIGFyZSBjb2xsZWN0ZWQgaW4gYSBtYXAsIHN0b3JlZCBieSB0aGUgZXZlbnQgdHlwZSBjbGFzc1xuICAgKi9cbiAgcHJpdmF0ZSBldmVudHNNZXRhID0gbmV3IE1hcDxUeXBlPGFueT4sIEV2ZW50TWV0YTxhbnk+PigpO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhbiBldmVudCBzb3VyY2UgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlLlxuICAgKlxuICAgKiBDQVVUSU9OOiBUbyBhdm9pZCBtZW1vcnkgbGVha3MsIHRoZSByZXR1cm5lZCB0ZWFyZG93biBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkXG4gICAqICB3aGVuIHRoZSBldmVudCBzb3VyY2UgaXMgbm8gbG9uZ2VyIG1haW50YWluZWQgYnkgaXRzIGNyZWF0b3JcbiAgICogKGkuZS4gaW4gYG5nT25EZXN0cm95YCBpZiB0aGUgZXZlbnQgc291cmNlIHdhcyByZWdpc3RlcmVkIGluIHRoZSBjb21wb25lbnQpLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnRUeXBlIHRoZSBldmVudCB0eXBlXG4gICAqIEBwYXJhbSBzb3VyY2UkIGFuIG9ic2VydmFibGUgdGhhdCByZXByZXNlbnRzIHRoZSBzb3VyY2VcbiAgICpcbiAgICogQHJldHVybnMgYSB0ZWFyZG93biBmdW5jdGlvbiB3aGljaCB1bnJlZ2lzdGVycyB0aGUgZ2l2ZW4gZXZlbnQgc291cmNlXG4gICAqL1xuICByZWdpc3RlcjxUPihldmVudFR5cGU6IFR5cGU8VD4sIHNvdXJjZSQ6IE9ic2VydmFibGU8VD4pOiAoKSA9PiB2b2lkIHtcbiAgICBjb25zdCBldmVudE1ldGEgPSB0aGlzLmdldEV2ZW50TWV0YShldmVudFR5cGUpO1xuICAgIGlmIChldmVudE1ldGEubWVyZ2luZ1N1YmplY3QuaGFzKHNvdXJjZSQpKSB7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBFdmVudFNlcnZpY2U6IHRoZSBldmVudCBzb3VyY2VgLFxuICAgICAgICAgIHNvdXJjZSQsXG4gICAgICAgICAgYGhhcyBiZWVuIGFscmVhZHkgcmVnaXN0ZXJlZCBmb3IgdGhlIHR5cGVgLFxuICAgICAgICAgIGV2ZW50VHlwZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBldmVudE1ldGEubWVyZ2luZ1N1YmplY3QuYWRkKHNvdXJjZSQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiBldmVudE1ldGEubWVyZ2luZ1N1YmplY3QucmVtb3ZlKHNvdXJjZSQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJlYW0gb2YgZXZlbnRzIGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZVxuICAgKiBAcGFyYW0gZXZlbnRUeXBlcyBldmVudCB0eXBlXG4gICAqL1xuICBnZXQ8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgbGV0IG91dHB1dCQgPSB0aGlzLmdldEV2ZW50TWV0YShldmVudFR5cGUpLm1lcmdpbmdTdWJqZWN0Lm91dHB1dCQ7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBvdXRwdXQkID0gdGhpcy5nZXRWYWxpZGF0ZWRFdmVudFN0cmVhbShvdXRwdXQkLCBldmVudFR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0JDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGluc3RhbmNlIG9mIGFuIGluZGl2aWR1YWwgZXZlbnQuXG4gICAqL1xuICBkaXNwYXRjaChldmVudDogT2JqZWN0KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnQuY29uc3RydWN0b3IgYXMgVHlwZTxhbnk+O1xuICAgIGNvbnN0IGlucHV0U3ViamVjdCQgPSB0aGlzLmdldElucHV0U3ViamVjdChldmVudFR5cGUpO1xuICAgIGlucHV0U3ViamVjdCQubmV4dChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5wdXQgc3ViamVjdCB1c2VkIHRvIGRpc3BhdGNoIGEgc2luZ2xlIGV2ZW50LlxuICAgKiBUaGUgc3ViamVjdCBpcyBjcmVhdGVkIG9uIGRlbWFuZCwgd2hlbiBpdCdzIG5lZWRlZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqIEBwYXJhbSBldmVudFR5cGUgdHlwZSBvZiBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRJbnB1dFN1YmplY3Q8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+KTogU3ViamVjdDxUPiB7XG4gICAgY29uc3QgZXZlbnRNZXRhID0gdGhpcy5nZXRFdmVudE1ldGEoZXZlbnRUeXBlKTtcblxuICAgIGlmICghZXZlbnRNZXRhLmlucHV0U3ViamVjdCQpIHtcbiAgICAgIGV2ZW50TWV0YS5pbnB1dFN1YmplY3QkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgICAgdGhpcy5yZWdpc3RlcihldmVudFR5cGUsIGV2ZW50TWV0YS5pbnB1dFN1YmplY3QkKTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50TWV0YS5pbnB1dFN1YmplY3QkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGV2ZW50IG1ldGEgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRFdmVudE1ldGE8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+KTogRXZlbnRNZXRhPFQ+IHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVFdmVudFR5cGUoZXZlbnRUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzTWV0YS5nZXQoZXZlbnRUeXBlKSkge1xuICAgICAgdGhpcy5jcmVhdGVFdmVudE1ldGEoZXZlbnRUeXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRzTWV0YS5nZXQoZXZlbnRUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBldmVudCBtZXRhIG9iamVjdCBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGVcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlRXZlbnRNZXRhPFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRzTWV0YS5zZXQoZXZlbnRUeXBlLCB7XG4gICAgICBpbnB1dFN1YmplY3QkOiBudWxsLCAvLyB3aWxsIGJlIGNyZWF0ZWQgbGF6aWx5IGJ5IHRoZSBgZGlzcGF0Y2hgIG1ldGhvZFxuICAgICAgbWVyZ2luZ1N1YmplY3Q6IG5ldyBNZXJnaW5nU3ViamVjdCgpLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZXZlbnQgdHlwZSBpcyBhIHZhbGlkIHR5cGUgKGlzIGEgY2xhc3Mgd2l0aCBjb25zdHJ1Y3RvcikuXG4gICAqXG4gICAqIFNob3VsZCBiZSB1c2VkIG9ubHkgaW4gZGV2IG1vZGUuXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlRXZlbnRUeXBlPFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IHZvaWQge1xuICAgIGlmICghZXZlbnRUeXBlPy5jb25zdHJ1Y3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRXZlbnRTZXJ2aWNlOiAgJHtldmVudFR5cGV9IGlzIG5vdCBhIHZhbGlkIGV2ZW50IHR5cGUuIFBsZWFzZSBwcm92aWRlIGEgY2xhc3MgcmVmZXJlbmNlLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGdpdmVuIGV2ZW50IHNvdXJjZSB3aXRoIHJ1bnRpbWUgdmFsaWRhdGlvbiB3aGV0aGVyIHRoZSBlbWl0dGVkIHZhbHVlcyBhcmUgaW5zdGFuY2VzIG9mIGdpdmVuIGV2ZW50IHR5cGUuXG4gICAqXG4gICAqIFNob3VsZCBiZSB1c2VkIG9ubHkgaW4gZGV2IG1vZGUuXG4gICAqL1xuICBwcml2YXRlIGdldFZhbGlkYXRlZEV2ZW50U3RyZWFtPFQ+KFxuICAgIHNvdXJjZSQ6IE9ic2VydmFibGU8VD4sXG4gICAgZXZlbnRUeXBlOiBUeXBlPFQ+XG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBzb3VyY2UkLnBpcGUoXG4gICAgICB0YXAoKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgZXZlbnRUeXBlKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBFdmVudFNlcnZpY2U6IFRoZSBzdHJlYW1gLFxuICAgICAgICAgICAgc291cmNlJCxcbiAgICAgICAgICAgIGBlbWl0dGVkIHRoZSBldmVudGAsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGB0aGF0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgZGVjbGFyZWQgdHlwZWAsXG4gICAgICAgICAgICBldmVudFR5cGUubmFtZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19