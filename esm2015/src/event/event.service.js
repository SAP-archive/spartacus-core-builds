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
        var _a;
        if (!((_a = eventType) === null || _a === void 0 ? void 0 : _a.constructor)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9ldmVudC9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBc0J2RDs7Ozs7OztHQU9HO0FBSUgsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUF6QjtRQUNFOztXQUVHO1FBQ0ssZUFBVSxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO0tBMkozRDtJQXpKQzs7Ozs7Ozs7Ozs7T0FXRztJQUNILFFBQVEsQ0FBSSxTQUFrQixFQUFFLE9BQXNCO1FBQ3BELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsTUFBTSxPQUFPLEdBQW9CLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM3QixJQUFJLFNBQVMsRUFBRSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0NBQWdDLEVBQ2hDLE9BQU8sRUFDUCwwQ0FBMEMsRUFDMUMsU0FBUyxDQUNWLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFD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Q0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxTQUFTLENBQUMsRUFBRTtnQkFDakMsT0FBTyxDQUFDLElBQUksQ0FDViwwQkFBMEIsRUFDMUIsT0FBTyxFQUNQLG1CQUFtQixFQUNuQixLQUFLLEVBQ0wsOENBQThDLEVBQzlDLFNBQVMsQ0FBQyxJQUFJLENBQ2YsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztBQS9KWSxZQUFZO0lBSHhCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxZQUFZLENBK0p4QjtTQS9KWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogVGhlIG9iamVjdCBob2xkcyByZWdpc3RlcmVkIHNvdXJjZSBvYnNlcnZhYmxlcyBhcyB3ZWxsIGFzIHRoZSBtZXJnZWQgcmVzdWx0IG9ic2VydmFibGUuXG4gKi9cbmludGVyZmFjZSBFdmVudE1ldGE8VD4ge1xuICAvKipcbiAgICogSW5wdXQgc3ViamVjdCB1c2VkIGZvciBkaXNwYXRjaGluZyBvY2Nhc2lvbmFsIGV2ZW50ICh3aXRob3V0IHJlZ2lzdGVyaW5nIGEgc291cmNlKVxuICAgKi9cbiAgaW5wdXRTdWJqZWN0JDogU3ViamVjdDxUPjtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSB3aXRoIGFycmF5IG9mIHNvdXJjZXMgb2YgdGhlIGV2ZW50XG4gICAqL1xuICBzb3VyY2VzJDogQmVoYXZpb3JTdWJqZWN0PE9ic2VydmFibGU8VD5bXT47XG5cbiAgLyoqXG4gICAqIE91dHB1dCBvYnNlcnZhYmxlIHdpdGggbWVyZ2VkIGFsbCBldmVudCBzb3VyY2VzXG4gICAqL1xuICBvdXRwdXQkOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG4vKipcbiAqIEEgc2VydmljZSB0byByZWdpc3RlciBhbmQgb2JzZXJ2ZSBldmVudCBzb3VyY2VzLiBFdmVudHMgYXJlIGRyaXZlbiBieSBldmVudCB0eXBlcywgd2hpY2ggYXJlIGNsYXNzIHNpZ25hdHVyZXNcbiAqIGZvciB0aGUgZ2l2ZW4gZXZlbnQuXG4gKlxuICogSXQgaXMgcG9zc2libGUgdG8gcmVnaXN0ZXIgbXVsdGlwbGUgc291cmNlcyB0byBhIHNpbmdsZSBldmVudCwgZXZlbiB3aXRob3V0XG4gKiBrbm93aW5nIGFzIG11bHRpcGxlIGRlY291cGxlZCBmZWF0dXJlcyBjYW4gYXR0YWNoIHNvdXJjZXMgdG8gdGhlIHNhbWVcbiAqIGV2ZW50IHR5cGUuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBFdmVudFNlcnZpY2Uge1xuICAvKipcbiAgICogVGhlIHZhcmlvdXMgZXZlbnRzIG1ldGEgYXJlIGNvbGxlY3RlZCBpbiBhIG1hcCwgc3RvcmVkIGJ5IHRoZSBldmVudCB0eXBlIGNsYXNzXG4gICAqL1xuICBwcml2YXRlIGV2ZW50c01ldGEgPSBuZXcgTWFwPFR5cGU8YW55PiwgRXZlbnRNZXRhPGFueT4+KCk7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFuIGV2ZW50IHNvdXJjZSBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGUuXG4gICAqXG4gICAqIENBVVRJT046IFRvIGF2b2lkIG1lbW9yeSBsZWFrcywgdGhlIHJldHVybmVkIHRlYXJkb3duIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWRcbiAgICogIHdoZW4gdGhlIGV2ZW50IHNvdXJjZSBpcyBubyBsb25nZXIgbWFpbnRhaW5lZCBieSBpdHMgY3JlYXRvclxuICAgKiAoaS5lLiBpbiBgbmdPbkRlc3Ryb3lgIGlmIHRoZSBldmVudCBzb3VyY2Ugd2FzIHJlZ2lzdGVyZWQgaW4gdGhlIGNvbXBvbmVudCkuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudFR5cGUgdGhlIGV2ZW50IHR5cGVcbiAgICogQHBhcmFtIHNvdXJjZSQgYW4gb2JzZXJ2YWJsZSB0aGF0IHJlcHJlc2VudHMgdGhlIHNvdXJjZVxuICAgKlxuICAgKiBAcmV0dXJucyBhIHRlYXJkb3duIGZ1bmN0aW9uIHdoaWNoIHVucmVnaXN0ZXJzIHRoZSBnaXZlbiBldmVudCBzb3VyY2VcbiAgICovXG4gIHJlZ2lzdGVyPFQ+KGV2ZW50VHlwZTogVHlwZTxUPiwgc291cmNlJDogT2JzZXJ2YWJsZTxUPik6ICgpID0+IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5nZXRFdmVudE1ldGEoZXZlbnRUeXBlKTtcbiAgICBjb25zdCBzb3VyY2VzOiBPYnNlcnZhYmxlPFQ+W10gPSBldmVudC5zb3VyY2VzJC52YWx1ZTtcbiAgICBpZiAoc291cmNlcy5pbmNsdWRlcyhzb3VyY2UkKSkge1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgRXZlbnRTZXJ2aWNlOiB0aGUgZXZlbnQgc291cmNlYCxcbiAgICAgICAgICBzb3VyY2UkLFxuICAgICAgICAgIGBoYXMgYmVlbiBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIHRoZSB0eXBlYCxcbiAgICAgICAgICBldmVudFR5cGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQuc291cmNlcyQubmV4dChbLi4uc291cmNlcywgc291cmNlJF0pO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB0aGlzLnVucmVnaXN0ZXIoZXZlbnRUeXBlLCBzb3VyY2UkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVycyBhbiBldmVudCBzb3VyY2UgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlXG4gICAqXG4gICAqIEBwYXJhbSBldmVudFR5cGUgdGhlIGV2ZW50IHR5cGVcbiAgICogQHBhcmFtIHNvdXJjZSQgYW4gb2JzZXJ2YWJsZSB0aGF0IHJlcHJlc2VudHMgdGhlIHNvdXJjZVxuICAgKi9cbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyPFQ+KGV2ZW50VHlwZTogVHlwZTxUPiwgc291cmNlJDogT2JzZXJ2YWJsZTxUPik6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5nZXRFdmVudE1ldGEoZXZlbnRUeXBlKTtcbiAgICBjb25zdCBuZXdTb3VyY2VzOiBPYnNlcnZhYmxlPFQ+W10gPSBldmVudC5zb3VyY2VzJC52YWx1ZS5maWx0ZXIoXG4gICAgICBzJCA9PiBzJCAhPT0gc291cmNlJFxuICAgICk7XG4gICAgZXZlbnQuc291cmNlcyQubmV4dChuZXdTb3VyY2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIGV2ZW50cyBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGVcbiAgICogQHBhcmFtIGV2ZW50VHlwZXMgZXZlbnQgdHlwZVxuICAgKi9cbiAgZ2V0PFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmdldEV2ZW50TWV0YShldmVudFR5cGUpLm91dHB1dCQ7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIHNpbmdsZSBldmVudC5cbiAgICpcbiAgICogSG93ZXZlciwgaXQncyByZWNvbW1lbmRlZCB0byB1c2UgbWV0aG9kIGByZWdpc3RlcmAgaW5zdGVhZCwgd2hlbmV2ZXIgdGhlIGV2ZW50IGNhbiBjb21lIGZyb20gc29tZSBzdHJlYW0uXG4gICAqICBJdCBhbGxvd3MgZm9yIGxhenkgY29tcHV0YXRpb25zIGluIHRoZSBldmVudCBzb3VyY2Ugc3RyZWFtIC1cbiAgICogIGlmIG5vIG9uZSBzdWJzY3JpYmVzIHRvIHRoZSBldmVudCwgdGhlIGxvZ2ljIG9mIHRoZSBldmVudCBzb3VyY2Ugc3RyZWFtIHdvbid0IGJlIGV2YWx1YXRlZC5cbiAgICovXG4gIGRpc3BhdGNoKGV2ZW50OiBPYmplY3QpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBldmVudC5jb25zdHJ1Y3RvciBhcyBUeXBlPGFueT47XG4gICAgY29uc3QgaW5wdXRTdWJqZWN0JCA9IHRoaXMuZ2V0SW5wdXRTdWJqZWN0KGV2ZW50VHlwZSk7XG4gICAgaW5wdXRTdWJqZWN0JC5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbnB1dCBzdWJqZWN0IHVzZWQgdG8gZGlzcGF0Y2ggYSBzaW5nbGUgZXZlbnQuXG4gICAqIFRoZSBzdWJqZWN0IGlzIGNyZWF0ZWQgb24gZGVtYW5kLCB3aGVuIGl0J3MgbmVlZGVkIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICogQHBhcmFtIGV2ZW50VHlwZSB0eXBlIG9mIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIGdldElucHV0U3ViamVjdDxUPihldmVudFR5cGU6IFR5cGU8VD4pOiBTdWJqZWN0PFQ+IHtcbiAgICBjb25zdCBldmVudE1ldGEgPSB0aGlzLmdldEV2ZW50TWV0YShldmVudFR5cGUpO1xuXG4gICAgaWYgKCFldmVudE1ldGEuaW5wdXRTdWJqZWN0JCkge1xuICAgICAgZXZlbnRNZXRhLmlucHV0U3ViamVjdCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyKGV2ZW50VHlwZSwgZXZlbnRNZXRhLmlucHV0U3ViamVjdCQpO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnRNZXRhLmlucHV0U3ViamVjdCQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXZlbnQgbWV0YSBvYmplY3QgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlXG4gICAqL1xuICBwcml2YXRlIGdldEV2ZW50TWV0YTxUPihldmVudFR5cGU6IFR5cGU8VD4pOiBFdmVudE1ldGE8VD4ge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgdGhpcy52YWxpZGF0ZUV2ZW50VHlwZShldmVudFR5cGUpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5ldmVudHNNZXRhLmdldChldmVudFR5cGUpKSB7XG4gICAgICB0aGlzLmNyZWF0ZUV2ZW50TWV0YShldmVudFR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ldmVudHNNZXRhLmdldChldmVudFR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGV2ZW50IG1ldGEgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZVxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVFdmVudE1ldGE8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+KTogdm9pZCB7XG4gICAgY29uc3Qgc291cmNlcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE9ic2VydmFibGU8VD5bXT4oW10pO1xuICAgIGxldCBvdXRwdXQkID0gc291cmNlcyQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoc291cmNlczogT2JzZXJ2YWJsZTxUPltdKSA9PiBtZXJnZSguLi5zb3VyY2VzKSksXG4gICAgICBzaGFyZSgpIC8vIHNoYXJlIHRoZSByZXN1bHQgb2JzZXJ2YWJsZSB0byBhdm9pZCBtZXJnaW5nIHNvdXJjZXMgZm9yIGVhY2ggc3Vic2NyaWJlclxuICAgICk7XG5cbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIG91dHB1dCQgPSB0aGlzLnZhbGlkYXRlRXZlbnRTdHJlYW0ob3V0cHV0JCwgZXZlbnRUeXBlKTtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c01ldGEuc2V0KGV2ZW50VHlwZSwge1xuICAgICAgaW5wdXRTdWJqZWN0JDogbnVsbCwgLy8gd2lsbCBiZSBjcmVhdGVkIGxhemlseSBieSB0aGUgYGRpc3BhdGNoYCBtZXRob2RcbiAgICAgIHNvdXJjZXMkLFxuICAgICAgb3V0cHV0JCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGV2ZW50IHR5cGUgaXMgYSB2YWxpZCB0eXBlIChpcyBhIGNsYXNzIHdpdGggY29uc3RydWN0b3IpLlxuICAgKlxuICAgKiBTaG91bGQgYmUgdXNlZCBvbmx5IGluIGRldiBtb2RlLlxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZUV2ZW50VHlwZTxUPihldmVudFR5cGU6IFR5cGU8VD4pOiB2b2lkIHtcbiAgICBpZiAoIWV2ZW50VHlwZT8uY29uc3RydWN0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEV2ZW50U2VydmljZTogICR7ZXZlbnRUeXBlfSBpcyBub3QgYSB2YWxpZCBldmVudCB0eXBlLiBQbGVhc2UgcHJvdmlkZSBhIGNsYXNzIHJlZmVyZW5jZS5gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBldmVudCBzb3VyY2Ugd2l0aCBydW50aW1lIHZhbGlkYXRpb24gd2hldGhlciB0aGUgZW1pdHRlZCB2YWx1ZXMgYXJlIGluc3RhbmNlcyBvZiBnaXZlbiBldmVudCB0eXBlLlxuICAgKlxuICAgKiBTaG91bGQgYmUgdXNlZCBvbmx5IGluIGRldiBtb2RlLlxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZUV2ZW50U3RyZWFtPFQ+KFxuICAgIHNvdXJjZSQ6IE9ic2VydmFibGU8VD4sXG4gICAgZXZlbnRUeXBlOiBUeXBlPFQ+XG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBzb3VyY2UkLnBpcGUoXG4gICAgICB0YXAoZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIGV2ZW50VHlwZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRXZlbnRTZXJ2aWNlOiBUaGUgc3RyZWFtYCxcbiAgICAgICAgICAgIHNvdXJjZSQsXG4gICAgICAgICAgICBgZW1pdHRlZCB0aGUgZXZlbnRgLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBgdGhhdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIGRlY2xhcmVkIHR5cGVgLFxuICAgICAgICAgICAgZXZlbnRUeXBlLm5hbWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==