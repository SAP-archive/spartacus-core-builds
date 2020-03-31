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
        const newSources = event.sources$.value.filter((s$) => s$ !== source$);
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
        return source$.pipe(tap((event) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9ldmVudC9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBc0J2RDs7Ozs7OztHQU9HO0FBSUgsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUF6QjtRQUNFOztXQUVHO1FBQ0ssZUFBVSxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO0tBMkozRDtJQXpKQzs7Ozs7Ozs7Ozs7T0FXRztJQUNILFFBQVEsQ0FBSSxTQUFrQixFQUFFLE9BQXNCO1FBQ3BELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsTUFBTSxPQUFPLEdBQW9CLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM3QixJQUFJLFNBQVMsRUFBRSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0NBQWdDLEVBQ2hDLE9BQU8sRUFDUCwwQ0FBMEMsRUFDMUMsU0FBUyxDQUNWLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFD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QU8sQ0FBQyxJQUFJLENBQ2pCLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ1osSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFNBQVMsQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLENBQUMsSUFBSSxDQUNWLDBCQUEwQixFQUMxQixPQUFPLEVBQ1AsbUJBQW1CLEVBQ25CLEtBQUssRUFDTCw4Q0FBOEMsRUFDOUMsU0FBUyxDQUFDLElBQUksQ0FDZixDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O0FBL0pZLFlBQVk7SUFIeEIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFlBQVksQ0ErSnhCO1NBL0pZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBUaGUgb2JqZWN0IGhvbGRzIHJlZ2lzdGVyZWQgc291cmNlIG9ic2VydmFibGVzIGFzIHdlbGwgYXMgdGhlIG1lcmdlZCByZXN1bHQgb2JzZXJ2YWJsZS5cbiAqL1xuaW50ZXJmYWNlIEV2ZW50TWV0YTxUPiB7XG4gIC8qKlxuICAgKiBJbnB1dCBzdWJqZWN0IHVzZWQgZm9yIGRpc3BhdGNoaW5nIG9jY2FzaW9uYWwgZXZlbnQgKHdpdGhvdXQgcmVnaXN0ZXJpbmcgYSBzb3VyY2UpXG4gICAqL1xuICBpbnB1dFN1YmplY3QkOiBTdWJqZWN0PFQ+O1xuXG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIHdpdGggYXJyYXkgb2Ygc291cmNlcyBvZiB0aGUgZXZlbnRcbiAgICovXG4gIHNvdXJjZXMkOiBCZWhhdmlvclN1YmplY3Q8T2JzZXJ2YWJsZTxUPltdPjtcblxuICAvKipcbiAgICogT3V0cHV0IG9ic2VydmFibGUgd2l0aCBtZXJnZWQgYWxsIGV2ZW50IHNvdXJjZXNcbiAgICovXG4gIG91dHB1dCQ6IE9ic2VydmFibGU8VD47XG59XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIHJlZ2lzdGVyIGFuZCBvYnNlcnZlIGV2ZW50IHNvdXJjZXMuIEV2ZW50cyBhcmUgZHJpdmVuIGJ5IGV2ZW50IHR5cGVzLCB3aGljaCBhcmUgY2xhc3Mgc2lnbmF0dXJlc1xuICogZm9yIHRoZSBnaXZlbiBldmVudC5cbiAqXG4gKiBJdCBpcyBwb3NzaWJsZSB0byByZWdpc3RlciBtdWx0aXBsZSBzb3VyY2VzIHRvIGEgc2luZ2xlIGV2ZW50LCBldmVuIHdpdGhvdXRcbiAqIGtub3dpbmcgYXMgbXVsdGlwbGUgZGVjb3VwbGVkIGZlYXR1cmVzIGNhbiBhdHRhY2ggc291cmNlcyB0byB0aGUgc2FtZVxuICogZXZlbnQgdHlwZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG4gIC8qKlxuICAgKiBUaGUgdmFyaW91cyBldmVudHMgbWV0YSBhcmUgY29sbGVjdGVkIGluIGEgbWFwLCBzdG9yZWQgYnkgdGhlIGV2ZW50IHR5cGUgY2xhc3NcbiAgICovXG4gIHByaXZhdGUgZXZlbnRzTWV0YSA9IG5ldyBNYXA8VHlwZTxhbnk+LCBFdmVudE1ldGE8YW55Pj4oKTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gZXZlbnQgc291cmNlIGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZS5cbiAgICpcbiAgICogQ0FVVElPTjogVG8gYXZvaWQgbWVtb3J5IGxlYWtzLCB0aGUgcmV0dXJuZWQgdGVhcmRvd24gZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZFxuICAgKiAgd2hlbiB0aGUgZXZlbnQgc291cmNlIGlzIG5vIGxvbmdlciBtYWludGFpbmVkIGJ5IGl0cyBjcmVhdG9yXG4gICAqIChpLmUuIGluIGBuZ09uRGVzdHJveWAgaWYgdGhlIGV2ZW50IHNvdXJjZSB3YXMgcmVnaXN0ZXJlZCBpbiB0aGUgY29tcG9uZW50KS5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50VHlwZSB0aGUgZXZlbnQgdHlwZVxuICAgKiBAcGFyYW0gc291cmNlJCBhbiBvYnNlcnZhYmxlIHRoYXQgcmVwcmVzZW50cyB0aGUgc291cmNlXG4gICAqXG4gICAqIEByZXR1cm5zIGEgdGVhcmRvd24gZnVuY3Rpb24gd2hpY2ggdW5yZWdpc3RlcnMgdGhlIGdpdmVuIGV2ZW50IHNvdXJjZVxuICAgKi9cbiAgcmVnaXN0ZXI8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+LCBzb3VyY2UkOiBPYnNlcnZhYmxlPFQ+KTogKCkgPT4gdm9pZCB7XG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmdldEV2ZW50TWV0YShldmVudFR5cGUpO1xuICAgIGNvbnN0IHNvdXJjZXM6IE9ic2VydmFibGU8VD5bXSA9IGV2ZW50LnNvdXJjZXMkLnZhbHVlO1xuICAgIGlmIChzb3VyY2VzLmluY2x1ZGVzKHNvdXJjZSQpKSB7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBFdmVudFNlcnZpY2U6IHRoZSBldmVudCBzb3VyY2VgLFxuICAgICAgICAgIHNvdXJjZSQsXG4gICAgICAgICAgYGhhcyBiZWVuIGFscmVhZHkgcmVnaXN0ZXJlZCBmb3IgdGhlIHR5cGVgLFxuICAgICAgICAgIGV2ZW50VHlwZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5zb3VyY2VzJC5uZXh0KFsuLi5zb3VyY2VzLCBzb3VyY2UkXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHRoaXMudW5yZWdpc3RlcihldmVudFR5cGUsIHNvdXJjZSQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIGFuIGV2ZW50IHNvdXJjZSBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGVcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50VHlwZSB0aGUgZXZlbnQgdHlwZVxuICAgKiBAcGFyYW0gc291cmNlJCBhbiBvYnNlcnZhYmxlIHRoYXQgcmVwcmVzZW50cyB0aGUgc291cmNlXG4gICAqL1xuICBwcml2YXRlIHVucmVnaXN0ZXI8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+LCBzb3VyY2UkOiBPYnNlcnZhYmxlPFQ+KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmdldEV2ZW50TWV0YShldmVudFR5cGUpO1xuICAgIGNvbnN0IG5ld1NvdXJjZXM6IE9ic2VydmFibGU8VD5bXSA9IGV2ZW50LnNvdXJjZXMkLnZhbHVlLmZpbHRlcihcbiAgICAgIChzJCkgPT4gcyQgIT09IHNvdXJjZSRcbiAgICApO1xuICAgIGV2ZW50LnNvdXJjZXMkLm5leHQobmV3U291cmNlcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmVhbSBvZiBldmVudHMgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlXG4gICAqIEBwYXJhbSBldmVudFR5cGVzIGV2ZW50IHR5cGVcbiAgICovXG4gIGdldDxUPihldmVudFR5cGU6IFR5cGU8VD4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRFdmVudE1ldGEoZXZlbnRUeXBlKS5vdXRwdXQkO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBzaW5nbGUgZXZlbnQuXG4gICAqXG4gICAqIEhvd2V2ZXIsIGl0J3MgcmVjb21tZW5kZWQgdG8gdXNlIG1ldGhvZCBgcmVnaXN0ZXJgIGluc3RlYWQsIHdoZW5ldmVyIHRoZSBldmVudCBjYW4gY29tZSBmcm9tIHNvbWUgc3RyZWFtLlxuICAgKiAgSXQgYWxsb3dzIGZvciBsYXp5IGNvbXB1dGF0aW9ucyBpbiB0aGUgZXZlbnQgc291cmNlIHN0cmVhbSAtXG4gICAqICBpZiBubyBvbmUgc3Vic2NyaWJlcyB0byB0aGUgZXZlbnQsIHRoZSBsb2dpYyBvZiB0aGUgZXZlbnQgc291cmNlIHN0cmVhbSB3b24ndCBiZSBldmFsdWF0ZWQuXG4gICAqL1xuICBkaXNwYXRjaChldmVudDogT2JqZWN0KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnQuY29uc3RydWN0b3IgYXMgVHlwZTxhbnk+O1xuICAgIGNvbnN0IGlucHV0U3ViamVjdCQgPSB0aGlzLmdldElucHV0U3ViamVjdChldmVudFR5cGUpO1xuICAgIGlucHV0U3ViamVjdCQubmV4dChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5wdXQgc3ViamVjdCB1c2VkIHRvIGRpc3BhdGNoIGEgc2luZ2xlIGV2ZW50LlxuICAgKiBUaGUgc3ViamVjdCBpcyBjcmVhdGVkIG9uIGRlbWFuZCwgd2hlbiBpdCdzIG5lZWRlZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqIEBwYXJhbSBldmVudFR5cGUgdHlwZSBvZiBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRJbnB1dFN1YmplY3Q8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+KTogU3ViamVjdDxUPiB7XG4gICAgY29uc3QgZXZlbnRNZXRhID0gdGhpcy5nZXRFdmVudE1ldGEoZXZlbnRUeXBlKTtcblxuICAgIGlmICghZXZlbnRNZXRhLmlucHV0U3ViamVjdCQpIHtcbiAgICAgIGV2ZW50TWV0YS5pbnB1dFN1YmplY3QkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgICAgdGhpcy5yZWdpc3RlcihldmVudFR5cGUsIGV2ZW50TWV0YS5pbnB1dFN1YmplY3QkKTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50TWV0YS5pbnB1dFN1YmplY3QkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGV2ZW50IG1ldGEgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRFdmVudE1ldGE8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+KTogRXZlbnRNZXRhPFQ+IHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVFdmVudFR5cGUoZXZlbnRUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzTWV0YS5nZXQoZXZlbnRUeXBlKSkge1xuICAgICAgdGhpcy5jcmVhdGVFdmVudE1ldGEoZXZlbnRUeXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRzTWV0YS5nZXQoZXZlbnRUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBldmVudCBtZXRhIG9iamVjdCBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGVcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlRXZlbnRNZXRhPFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IHZvaWQge1xuICAgIGNvbnN0IHNvdXJjZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxPYnNlcnZhYmxlPFQ+W10+KFtdKTtcbiAgICBsZXQgb3V0cHV0JCA9IHNvdXJjZXMkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNvdXJjZXM6IE9ic2VydmFibGU8VD5bXSkgPT4gbWVyZ2UoLi4uc291cmNlcykpLFxuICAgICAgc2hhcmUoKSAvLyBzaGFyZSB0aGUgcmVzdWx0IG9ic2VydmFibGUgdG8gYXZvaWQgbWVyZ2luZyBzb3VyY2VzIGZvciBlYWNoIHN1YnNjcmliZXJcbiAgICApO1xuXG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBvdXRwdXQkID0gdGhpcy52YWxpZGF0ZUV2ZW50U3RyZWFtKG91dHB1dCQsIGV2ZW50VHlwZSk7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNNZXRhLnNldChldmVudFR5cGUsIHtcbiAgICAgIGlucHV0U3ViamVjdCQ6IG51bGwsIC8vIHdpbGwgYmUgY3JlYXRlZCBsYXppbHkgYnkgdGhlIGBkaXNwYXRjaGAgbWV0aG9kXG4gICAgICBzb3VyY2VzJCxcbiAgICAgIG91dHB1dCQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBldmVudCB0eXBlIGlzIGEgdmFsaWQgdHlwZSAoaXMgYSBjbGFzcyB3aXRoIGNvbnN0cnVjdG9yKS5cbiAgICpcbiAgICogU2hvdWxkIGJlIHVzZWQgb25seSBpbiBkZXYgbW9kZS5cbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVFdmVudFR5cGU8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+KTogdm9pZCB7XG4gICAgaWYgKCFldmVudFR5cGU/LmNvbnN0cnVjdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBFdmVudFNlcnZpY2U6ICAke2V2ZW50VHlwZX0gaXMgbm90IGEgdmFsaWQgZXZlbnQgdHlwZS4gUGxlYXNlIHByb3ZpZGUgYSBjbGFzcyByZWZlcmVuY2UuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZ2l2ZW4gZXZlbnQgc291cmNlIHdpdGggcnVudGltZSB2YWxpZGF0aW9uIHdoZXRoZXIgdGhlIGVtaXR0ZWQgdmFsdWVzIGFyZSBpbnN0YW5jZXMgb2YgZ2l2ZW4gZXZlbnQgdHlwZS5cbiAgICpcbiAgICogU2hvdWxkIGJlIHVzZWQgb25seSBpbiBkZXYgbW9kZS5cbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVFdmVudFN0cmVhbTxUPihcbiAgICBzb3VyY2UkOiBPYnNlcnZhYmxlPFQ+LFxuICAgIGV2ZW50VHlwZTogVHlwZTxUPlxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gc291cmNlJC5waXBlKFxuICAgICAgdGFwKChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIGV2ZW50VHlwZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRXZlbnRTZXJ2aWNlOiBUaGUgc3RyZWFtYCxcbiAgICAgICAgICAgIHNvdXJjZSQsXG4gICAgICAgICAgICBgZW1pdHRlZCB0aGUgZXZlbnRgLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBgdGhhdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIGRlY2xhcmVkIHR5cGVgLFxuICAgICAgICAgICAgZXZlbnRUeXBlLm5hbWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==