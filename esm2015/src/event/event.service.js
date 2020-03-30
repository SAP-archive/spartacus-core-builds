import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { BehaviorSubject, merge, Subject } from 'rxjs';
import { share, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * A service to register and observe event sources. Events are driven by event types, which are class signatures
 * for the given event.
 *
 * It is possible to register multiple sources to a single event, even without
 * knowing as multiple decoupled features can attach sources to the same
 * event type.
 */
let EventService = class EventService {
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
        const event = this.getEventMeta(eventType);
        const sources = event.sources$.value;
        if (sources.includes(source$)) {
            if (isDevMode()) {
                console.warn(`EventService: the event source`, source$, `has been already registered for the type`, eventType);
            }
        }
        else {
            event.sources$.next([...sources, source$]);
        }
        return () => this.unregister(eventType, source$);
    }
    /**
     * Unregisters an event source for the given event type
     *
     * @param eventType the event type
     * @param source$ an observable that represents the source
     */
    unregister(eventType, source$) {
        const event = this.getEventMeta(eventType);
        const newSources = event.sources$.value.filter(s$ => s$ !== source$);
        event.sources$.next(newSources);
    }
    /**
     * Returns a stream of events for the given event type
     * @param eventTypes event type
     */
    get(eventType) {
        return this.getEventMeta(eventType).output$;
    }
    /**
     * Dispatches a single event.
     *
     * However, it's recommended to use method `register` instead, whenever the event can come from some stream.
     *  It allows for lazy computations in the event source stream -
     *  if no one subscribes to the event, the logic of the event source stream won't be evaluated.
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
        const sources$ = new BehaviorSubject([]);
        let output$ = sources$.pipe(switchMap((sources) => merge(...sources)), share() // share the result observable to avoid merging sources for each subscriber
        );
        if (isDevMode()) {
            output$ = this.validateEventStream(output$, eventType);
        }
        this.eventsMeta.set(eventType, {
            inputSubject$: null,
            sources$,
            output$,
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
    validateEventStream(source$, eventType) {
        return source$.pipe(tap(event => {
            if (!(event instanceof eventType)) {
                console.warn(`EventService: The stream`, source$, `emitted the event`, event, `that is not an instance of the declared type`, eventType.name);
            }
        }));
    }
};
EventService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(); }, token: EventService, providedIn: "root" });
EventService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], EventService);
export { EventService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9ldmVudC9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBc0J2RDs7Ozs7OztHQU9HO0FBSUgsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUF6QjtRQUNFOztXQUVHO1FBQ0ssZUFBVSxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO0tBMkozRDtJQXpKQzs7Ozs7Ozs7Ozs7T0FXRztJQUNILFFBQVEsQ0FBSSxTQUFrQixFQUFFLE9BQXNCO1FBQ3BELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsTUFBTSxPQUFPLEdBQW9CLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM3QixJQUFJLFNBQVMsRUFBRSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0NBQWdDLEVBQ2hDLE9BQU8sRUFDUCwwQ0FBMEMsRUFDMUMsU0FBUyxDQUNWLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFD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QUMsSUFBSSxDQUNqQixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksU0FBUyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsMEJBQTBCLEVBQzFCLE9BQU8sRUFDUCxtQkFBbUIsRUFDbkIsS0FBSyxFQUNMLDhDQUE4QyxFQUM5QyxTQUFTLENBQUMsSUFBSSxDQUNmLENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7QUEvSlksWUFBWTtJQUh4QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csWUFBWSxDQStKeEI7U0EvSlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIFRoZSBvYmplY3QgaG9sZHMgcmVnaXN0ZXJlZCBzb3VyY2Ugb2JzZXJ2YWJsZXMgYXMgd2VsbCBhcyB0aGUgbWVyZ2VkIHJlc3VsdCBvYnNlcnZhYmxlLlxuICovXG5pbnRlcmZhY2UgRXZlbnRNZXRhPFQ+IHtcbiAgLyoqXG4gICAqIElucHV0IHN1YmplY3QgdXNlZCBmb3IgZGlzcGF0Y2hpbmcgb2NjYXNpb25hbCBldmVudCAod2l0aG91dCByZWdpc3RlcmluZyBhIHNvdXJjZSlcbiAgICovXG4gIGlucHV0U3ViamVjdCQ6IFN1YmplY3Q8VD47XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgd2l0aCBhcnJheSBvZiBzb3VyY2VzIG9mIHRoZSBldmVudFxuICAgKi9cbiAgc291cmNlcyQ6IEJlaGF2aW9yU3ViamVjdDxPYnNlcnZhYmxlPFQ+W10+O1xuXG4gIC8qKlxuICAgKiBPdXRwdXQgb2JzZXJ2YWJsZSB3aXRoIG1lcmdlZCBhbGwgZXZlbnQgc291cmNlc1xuICAgKi9cbiAgb3V0cHV0JDogT2JzZXJ2YWJsZTxUPjtcbn1cblxuLyoqXG4gKiBBIHNlcnZpY2UgdG8gcmVnaXN0ZXIgYW5kIG9ic2VydmUgZXZlbnQgc291cmNlcy4gRXZlbnRzIGFyZSBkcml2ZW4gYnkgZXZlbnQgdHlwZXMsIHdoaWNoIGFyZSBjbGFzcyBzaWduYXR1cmVzXG4gKiBmb3IgdGhlIGdpdmVuIGV2ZW50LlxuICpcbiAqIEl0IGlzIHBvc3NpYmxlIHRvIHJlZ2lzdGVyIG11bHRpcGxlIHNvdXJjZXMgdG8gYSBzaW5nbGUgZXZlbnQsIGV2ZW4gd2l0aG91dFxuICoga25vd2luZyBhcyBtdWx0aXBsZSBkZWNvdXBsZWQgZmVhdHVyZXMgY2FuIGF0dGFjaCBzb3VyY2VzIHRvIHRoZSBzYW1lXG4gKiBldmVudCB0eXBlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFRoZSB2YXJpb3VzIGV2ZW50cyBtZXRhIGFyZSBjb2xsZWN0ZWQgaW4gYSBtYXAsIHN0b3JlZCBieSB0aGUgZXZlbnQgdHlwZSBjbGFzc1xuICAgKi9cbiAgcHJpdmF0ZSBldmVudHNNZXRhID0gbmV3IE1hcDxUeXBlPGFueT4sIEV2ZW50TWV0YTxhbnk+PigpO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhbiBldmVudCBzb3VyY2UgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlLlxuICAgKlxuICAgKiBDQVVUSU9OOiBUbyBhdm9pZCBtZW1vcnkgbGVha3MsIHRoZSByZXR1cm5lZCB0ZWFyZG93biBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkXG4gICAqICB3aGVuIHRoZSBldmVudCBzb3VyY2UgaXMgbm8gbG9uZ2VyIG1haW50YWluZWQgYnkgaXRzIGNyZWF0b3JcbiAgICogKGkuZS4gaW4gYG5nT25EZXN0cm95YCBpZiB0aGUgZXZlbnQgc291cmNlIHdhcyByZWdpc3RlcmVkIGluIHRoZSBjb21wb25lbnQpLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnRUeXBlIHRoZSBldmVudCB0eXBlXG4gICAqIEBwYXJhbSBzb3VyY2UkIGFuIG9ic2VydmFibGUgdGhhdCByZXByZXNlbnRzIHRoZSBzb3VyY2VcbiAgICpcbiAgICogQHJldHVybnMgYSB0ZWFyZG93biBmdW5jdGlvbiB3aGljaCB1bnJlZ2lzdGVycyB0aGUgZ2l2ZW4gZXZlbnQgc291cmNlXG4gICAqL1xuICByZWdpc3RlcjxUPihldmVudFR5cGU6IFR5cGU8VD4sIHNvdXJjZSQ6IE9ic2VydmFibGU8VD4pOiAoKSA9PiB2b2lkIHtcbiAgICBjb25zdCBldmVudCA9IHRoaXMuZ2V0RXZlbnRNZXRhKGV2ZW50VHlwZSk7XG4gICAgY29uc3Qgc291cmNlczogT2JzZXJ2YWJsZTxUPltdID0gZXZlbnQuc291cmNlcyQudmFsdWU7XG4gICAgaWYgKHNvdXJjZXMuaW5jbHVkZXMoc291cmNlJCkpIHtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYEV2ZW50U2VydmljZTogdGhlIGV2ZW50IHNvdXJjZWAsXG4gICAgICAgICAgc291cmNlJCxcbiAgICAgICAgICBgaGFzIGJlZW4gYWxyZWFkeSByZWdpc3RlcmVkIGZvciB0aGUgdHlwZWAsXG4gICAgICAgICAgZXZlbnRUeXBlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnNvdXJjZXMkLm5leHQoWy4uLnNvdXJjZXMsIHNvdXJjZSRdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gdGhpcy51bnJlZ2lzdGVyKGV2ZW50VHlwZSwgc291cmNlJCk7XG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgYW4gZXZlbnQgc291cmNlIGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZVxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnRUeXBlIHRoZSBldmVudCB0eXBlXG4gICAqIEBwYXJhbSBzb3VyY2UkIGFuIG9ic2VydmFibGUgdGhhdCByZXByZXNlbnRzIHRoZSBzb3VyY2VcbiAgICovXG4gIHByaXZhdGUgdW5yZWdpc3RlcjxUPihldmVudFR5cGU6IFR5cGU8VD4sIHNvdXJjZSQ6IE9ic2VydmFibGU8VD4pOiB2b2lkIHtcbiAgICBjb25zdCBldmVudCA9IHRoaXMuZ2V0RXZlbnRNZXRhKGV2ZW50VHlwZSk7XG4gICAgY29uc3QgbmV3U291cmNlczogT2JzZXJ2YWJsZTxUPltdID0gZXZlbnQuc291cmNlcyQudmFsdWUuZmlsdGVyKFxuICAgICAgcyQgPT4gcyQgIT09IHNvdXJjZSRcbiAgICApO1xuICAgIGV2ZW50LnNvdXJjZXMkLm5leHQobmV3U291cmNlcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmVhbSBvZiBldmVudHMgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlXG4gICAqIEBwYXJhbSBldmVudFR5cGVzIGV2ZW50IHR5cGVcbiAgICovXG4gIGdldDxUPihldmVudFR5cGU6IFR5cGU8VD4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRFdmVudE1ldGEoZXZlbnRUeXBlKS5vdXRwdXQkO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBzaW5nbGUgZXZlbnQuXG4gICAqXG4gICAqIEhvd2V2ZXIsIGl0J3MgcmVjb21tZW5kZWQgdG8gdXNlIG1ldGhvZCBgcmVnaXN0ZXJgIGluc3RlYWQsIHdoZW5ldmVyIHRoZSBldmVudCBjYW4gY29tZSBmcm9tIHNvbWUgc3RyZWFtLlxuICAgKiAgSXQgYWxsb3dzIGZvciBsYXp5IGNvbXB1dGF0aW9ucyBpbiB0aGUgZXZlbnQgc291cmNlIHN0cmVhbSAtXG4gICAqICBpZiBubyBvbmUgc3Vic2NyaWJlcyB0byB0aGUgZXZlbnQsIHRoZSBsb2dpYyBvZiB0aGUgZXZlbnQgc291cmNlIHN0cmVhbSB3b24ndCBiZSBldmFsdWF0ZWQuXG4gICAqL1xuICBkaXNwYXRjaChldmVudDogT2JqZWN0KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnQuY29uc3RydWN0b3IgYXMgVHlwZTxhbnk+O1xuICAgIGNvbnN0IGlucHV0U3ViamVjdCQgPSB0aGlzLmdldElucHV0U3ViamVjdChldmVudFR5cGUpO1xuICAgIGlucHV0U3ViamVjdCQubmV4dChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5wdXQgc3ViamVjdCB1c2VkIHRvIGRpc3BhdGNoIGEgc2luZ2xlIGV2ZW50LlxuICAgKiBUaGUgc3ViamVjdCBpcyBjcmVhdGVkIG9uIGRlbWFuZCwgd2hlbiBpdCdzIG5lZWRlZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqIEBwYXJhbSBldmVudFR5cGUgdHlwZSBvZiBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRJbnB1dFN1YmplY3Q8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+KTogU3ViamVjdDxUPiB7XG4gICAgY29uc3QgZXZlbnRNZXRhID0gdGhpcy5nZXRFdmVudE1ldGEoZXZlbnRUeXBlKTtcblxuICAgIGlmICghZXZlbnRNZXRhLmlucHV0U3ViamVjdCQpIHtcbiAgICAgIGV2ZW50TWV0YS5pbnB1dFN1YmplY3QkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgICAgdGhpcy5yZWdpc3RlcihldmVudFR5cGUsIGV2ZW50TWV0YS5pbnB1dFN1YmplY3QkKTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50TWV0YS5pbnB1dFN1YmplY3QkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGV2ZW50IG1ldGEgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRFdmVudE1ldGE8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+KTogRXZlbnRNZXRhPFQ+IHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVFdmVudFR5cGUoZXZlbnRUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzTWV0YS5nZXQoZXZlbnRUeXBlKSkge1xuICAgICAgdGhpcy5jcmVhdGVFdmVudE1ldGEoZXZlbnRUeXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRzTWV0YS5nZXQoZXZlbnRUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBldmVudCBtZXRhIG9iamVjdCBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGVcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlRXZlbnRNZXRhPFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IHZvaWQge1xuICAgIGNvbnN0IHNvdXJjZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxPYnNlcnZhYmxlPFQ+W10+KFtdKTtcbiAgICBsZXQgb3V0cHV0JCA9IHNvdXJjZXMkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNvdXJjZXM6IE9ic2VydmFibGU8VD5bXSkgPT4gbWVyZ2UoLi4uc291cmNlcykpLFxuICAgICAgc2hhcmUoKSAvLyBzaGFyZSB0aGUgcmVzdWx0IG9ic2VydmFibGUgdG8gYXZvaWQgbWVyZ2luZyBzb3VyY2VzIGZvciBlYWNoIHN1YnNjcmliZXJcbiAgICApO1xuXG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBvdXRwdXQkID0gdGhpcy52YWxpZGF0ZUV2ZW50U3RyZWFtKG91dHB1dCQsIGV2ZW50VHlwZSk7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNNZXRhLnNldChldmVudFR5cGUsIHtcbiAgICAgIGlucHV0U3ViamVjdCQ6IG51bGwsIC8vIHdpbGwgYmUgY3JlYXRlZCBsYXppbHkgYnkgdGhlIGBkaXNwYXRjaGAgbWV0aG9kXG4gICAgICBzb3VyY2VzJCxcbiAgICAgIG91dHB1dCQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBldmVudCB0eXBlIGlzIGEgdmFsaWQgdHlwZSAoaXMgYSBjbGFzcyB3aXRoIGNvbnN0cnVjdG9yKS5cbiAgICpcbiAgICogU2hvdWxkIGJlIHVzZWQgb25seSBpbiBkZXYgbW9kZS5cbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVFdmVudFR5cGU8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+KTogdm9pZCB7XG4gICAgaWYgKCFldmVudFR5cGU/LmNvbnN0cnVjdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBFdmVudFNlcnZpY2U6ICAke2V2ZW50VHlwZX0gaXMgbm90IGEgdmFsaWQgZXZlbnQgdHlwZS4gUGxlYXNlIHByb3ZpZGUgYSBjbGFzcyByZWZlcmVuY2UuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZW4gZXZlbnQgc291cmNlIHdpdGggcnVudGltZSB2YWxpZGF0aW9uIHdoZXRoZXIgdGhlIGVtaXR0ZWQgdmFsdWVzIGFyZSBpbnN0YW5jZXMgb2YgZ2l2ZW4gZXZlbnQgdHlwZS5cbiAgICpcbiAgICogU2hvdWxkIGJlIHVzZWQgb25seSBpbiBkZXYgbW9kZS5cbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVFdmVudFN0cmVhbTxUPihcbiAgICBzb3VyY2UkOiBPYnNlcnZhYmxlPFQ+LFxuICAgIGV2ZW50VHlwZTogVHlwZTxUPlxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gc291cmNlJC5waXBlKFxuICAgICAgdGFwKGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBldmVudFR5cGUpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYEV2ZW50U2VydmljZTogVGhlIHN0cmVhbWAsXG4gICAgICAgICAgICBzb3VyY2UkLFxuICAgICAgICAgICAgYGVtaXR0ZWQgdGhlIGV2ZW50YCxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgYHRoYXQgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRoZSBkZWNsYXJlZCB0eXBlYCxcbiAgICAgICAgICAgIGV2ZW50VHlwZS5uYW1lXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=